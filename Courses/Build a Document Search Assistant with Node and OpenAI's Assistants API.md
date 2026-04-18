---
type: course
slug: build-a-document-search-assistant-with-node-and-openai-s-assistants-api
url: "https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api"
duration_minutes: 132
duration: 2h 12m
level: Intermediate
updated: 3/5/2025
learners: 6017
skills:
  - OpenAI API
  - Web Development
  - Artificial Intelligence (AI)
  - Node.js
exercise_files: true
github: "https://github.com/LinkedInLearning/document-search-assistant-with-node-openai-assistants-api-5970099/codespaces"
tags:
  - course
  - topic/artificial-intelligence
  - topic/network-and-system-administration
  - topic/web-development
  - skill/openai-api
  - skill/web-development
  - skill/artificial-intelligence-ai
  - skill/node-js
status: not-started
created: 2026-04-17
---

# Build a Document Search Assistant with Node and OpenAI's Assistants API

> Learn to build a smart document search assistant within a Node web application using OpenAI's Assistants API. In this course, instructor Guil Hernandez shows you how to get started setting up a development environment and configuring the AI assistant for integration into a Node project using Express. Discover how to implement advanced search capabilities using the File Search tool and vector store

> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api) | 2h 12m | Intermediate | 6K learners

## Instructor

- [[Guil Hernandez]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/document-search-assistant-with-node-openai-assistants-api-5970099/codespaces)

## Skills Covered

- OpenAI API
- Web Development
- Artificial Intelligence (AI)
- Node.js

## Table of Contents

### Introduction

#### Course introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/course-introduction?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/course-introduction?u=76281980&t=0)** - [Guil] Have you ever wanted to build an AI assistant that feels truly intelligent, one that is capable of understanding context, accessing external knowledge, and performing complex tasks?
>
> **[0:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/course-introduction?u=76281980&t=13)** In this course, I'll show you how to create powerful AI assistants using OpenAI's Assistants API with Node and Express.
>
> **[0:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/course-introduction?u=76281980&t=23)** You'll learn to harness advanced AI capabilities without dealing with embeddings or vector databases.
>
> **[0:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/course-introduction?u=76281980&t=29)** The API takes care of all of that for you.
>
> **[0:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/course-introduction?u=76281980&t=32)** Hi, I'm Guil Hernandez, a software development instructor and developer with over 15 years of experience.
>
> **[0:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/course-introduction?u=76281980&t=38)** So if you're ready to bring intelligent assistants to life with ease, join me and let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **CLI Commands:** node (1)
> **Code Keywords:** let (1)
> **Speakers:** - [guil] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=0)** - [Lecturer] Before getting started with building intelligent AI Assistants using OpenAI's Assistants API, I want to make sure you're well-prepared to get the most out of this course.
>
> **[0:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=10)** This course is geared towards developers with an intermediate understanding of JavaScript.
>
> **[0:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=15)** We'll be writing server side code, so familiarity with Node is essential.
>
> **[0:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=20)** Experience with Express.js will be highly beneficial as well.
>
> **[0:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=24)** So, for example, you're in great shape if you've built restful APIs or web applications using Express.
>
> **[0:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=30)** We'll be integrating the OpenAI Assistants API into our applications.
>
> **[0:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=35)** So prior experience working with the OpenAI API, such as generating text completions will help you grasp the concepts more quickly.
>
> **[0:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=46)** Now, while not strictly required, having a background in retrieval augmented generation, or RAG, will enhance your understanding of how AI Assistants can access external knowledge to provide more accurate and context-aware responses.
>
> **[1:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=61)** RAG involves combining large language models with external data sources to improve the quality and relevance of generated content.
>
> **[1:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=70)** If you're new to RAG, or need a refresher on concepts like embeddings and vector databases, I recommend checking out my course, Creating a Chat Tool Using OpenAI models and Pinecone.
>
> **[1:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=81)** This course teaches you how to build a context aware chatbot using OpenAI's models and Pinecone's vector databases.
>
> **[1:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=88)** It's a great primer to give you a solid foundation for the more advanced topics we'll cover in this course.
>
> **[1:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=95)** Since we'll be dealing with API calls and potentially long running operations, it's important to be comfortable with asynchronous programming patterns and JavaScript.
>
> **[1:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=104)** It will also be helpful to be familiar with terms like models, tokens, prompts, and completions.
>
> **[1:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=110)** If some of these topics are unfamiliar, I encourage you to take some time to brush up on these areas to maximize your learning experience.
>
> **[1:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=118)** With this foundational knowledge, you'll be better equipped to tackle many of the concepts we'll explore in this course.
>
> **[2:05](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=125)** This preparation will make the learning process much smoother and more enjoyable, allowing you to focus on building and customizing your AI assistant.
>
> **[2:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/what-you-should-know?u=76281980&t=133)** So if you're all set, let's get ready to dive into the exciting world of AI Assistants powered by OpenAI's Assistants API.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), rag (3)
> **CLI Commands:** make (2), node (1)
> **Analogies:** for example (1), such as (1)
> **File Paths:** express.js (1)
> **Code Keywords:** let (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [lecturer] (1)

#### Introduction to AI assistants
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=0)** - [Instructor] Artificial intelligence has come a long way in recent years, and one of its most intriguing advancements is the development of AI assistants.
>
> **[0:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=10)** But what exactly are AI assistants and how do they change how we interact with technology?
>
> **[0:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=17)** Well, you're likely familiar with assistants like Siri or Alexa, but today's generative AI can go far beyond these examples in many ways.
>
> **[0:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=26)** Imagine creating an assistant that accesses specialized knowledge, interprets code, analyzes data, and more, capabilities that can transform industries, like business, education, healthcare, and other industries.
>
> **[0:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=42)** As developers, building these assistants is now easier than ever, thanks to Open AI's Assistants API.
>
> **[0:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=50)** This API simplifies the process, allowing you to create custom assistants without managing complex AI infrastructure.
>
> **[0:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=59)** For example, assistants can call Open AI's models with specific instructions to tune their personality and capabilities.
>
> **[1:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=67)** It internally handles embeddings, vector databases and context management so that you can can focus on the assistant's behavior and functionality.
>
> **[1:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=76)** And with some of the recent updates, the Assistants API includes function calling and the code interpreter, enabling your assistant to fetch data from external sources or perform real-time code execution.
>
> **[1:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=90)** This makes assistants more interactive and dynamic, offering enhanced user experiences.
>
> **[1:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=98)** So keep watching because you're going to learn how to set up your development environment using Node and Express.
>
> **[1:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=104)** You'll create and configure assistants tailored to specific tasks.
>
> **[1:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=109)** You'll also manage multi-turn conversations, leverage the function calling feature and code interpreter, and lots more.
>
> **[1:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-ai-assistants?u=76281980&t=116)** By the end, you'll have the skills to build intelligent context-aware assistants that can handle various conversations and tasks.

> [!info]- Semantic Content
>
> **Env Vars:** api (3)
> **Code Keywords:** function (2)
> **Analogies:** imagine (1), for example (1)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** node (1)
> **Speakers:** - [instructor] (1)

#### Setting up the development environment
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=0)** - [Narrator] All right, so this lesson focuses on setting up the development environment using the starter files provided in the GitHub repository linked to this course.
>
> **[0:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=10)** The starter files include the initial project setup and some boilerplate code to help kick things off more quickly.
>
> **[0:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=16)** You can access the project files for this course by following the link to the GitHub repository posted with this video.
>
> **[0:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=23)** You'll notice that the files are organized by chapter and lesson for ease of use.
>
> **[0:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=28)** Each branch of the repository contains the beginning or end state of the lesson, which allows you to use them as references and follow along with the course.
>
> **[0:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=37)** To get started, download the project files from the main branch or the files on the 00_04b branch.
>
> **[0:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=46)** So now let's take a moment to familiarize ourselves with the project structure.
>
> **[0:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=51)** The starter files include the index.js file, which contains the main Express.js application code.
>
> **[0:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=59)** There's also a file named assistant.js, which will contain the script to create the assistants.
>
> **[1:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=66)** There's also upload.js, which will hold our scripts to upload and manage documents.
>
> **[1:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=73)** In the public directory, you'll find a few files for static assets such as your HTML, CSS, and the client-side JavaScript, here in main.js.
>
> **[1:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=85)** And in the main directory, the package.json file contains the project metadata and dependencies.
>
> **[1:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=93)** The project already lists the necessary dependencies here in the package.json file.
>
> **[1:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=97)** So, we can install them by opening up the terminal and running npm install.
>
> **[1:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=105)** So, this command is going to install packages like dotenv, express, and the openai Node SDK, which we'll use later in this course.
>
> **[1:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=114)** And we have nodemon all set up, and nodemon is going to automatically run any changes that are made to our project.
>
> **[2:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=122)** All right, next, make sure that you have an OPENAI_API_KEY, and you'll want to add that API key to a .env file to keep it safe.
>
> **[2:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=133)** So what I'll do here in my project, is create a new file and name it .env.
>
> **[2:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=140)** And here is where I'll add my open OPENAI_API_KEY, just like that.
>
> **[2:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=144)** So be sure to replace this here with your YOUR_OPENAI_API_KEY.
>
> **[2:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=149)** I'll go ahead and do the same.
>
> **[2:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=153)** Now, remember to keep your API key secure and never commit the .env file to version control.
>
> **[2:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=159)** In fact, I've already listed it here in the gitignore file.
>
> **[2:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=164)** All right, next up, let's open up the file index.js to see the initial server set up.
>
> **[2:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=172)** As you can see, the express server is already configured to listen on a specified port.
>
> **[2:57](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=177)** And here I have some middleware set up for parsing JSON requests and serving static files.
>
> **[3:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=184)** In the config.js file, I've already set up the configuration for OpenAI using the Node SDK.
>
> **[3:14](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=194)** I am exporting the configuration, then importing it here in index.js.
>
> **[3:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=200)** And below, you'll notice that I've set up a Test route that the URL /app-test, it's going to check if the API key is already set up and ready to go in the environment.
>
> **[3:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=212)** And if it is, it's going to display the message OpenAI key is loaded, ready to connect.
>
> **[3:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=217)** If there is an error with the configuration, it'll say that there is a configuration error.
>
> **[3:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=222)** Okay, so make sure that your API key is all set up in your .env file.
>
> **[3:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=230)** Then in the terminal, we'll go ahead and run the project with npm start.
>
> **[3:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=239)** And as you can see, the server is now running on port 3000.
>
> **[4:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=243)** So, open up your browser and go to localhost:3000, and you should see the application.
>
> **[4:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=251)** Now let's go ahead and test that route, which remember is /app-test, and good.
>
> **[4:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=258)** If everything is set up correctly, you should see the message, "OpenAI API key is loaded. Ready to connect!"
>
> **[4:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=265)** Now if for some reason there is an error, go ahead and double check that the API key is stored correctly.
>
> **[4:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=272)** Beck in index.js, I've also set up this Test /query route, which is the route we're going to use to query our assistant using OpenAI.
>
> **[4:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=282)** Now if you go back to the main URL, what should happen is if you enter a message here in this text field and click the Submit button, that is going to kick off a request to the OpenAI API.
>
> **[4:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=298)** Now in this case, if you open up the main.js file here in the public folder, you'll see the sendQuery function, and it's making a fetch request to the query route.
>
> **[5:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=312)** And what it's currently doing, is just displaying the user message as the assistant message.
>
> **[5:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=317)** So, we can test that out quickly here, as you can see here in res.json, as the response is just replying, saying that, "You said" whatever message you typed in.
>
> **[5:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=329)** So, we can quickly verify that that's working here in our app by entering a message.
>
> **[5:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=334)** Let's just say Hello test!
>
> **[5:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=336)** And hitting Send. And good.
>
> **[5:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=338)** I get the reply from the assistant that says You said: "Hello Test!"
>
> **[5:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/setting-up-the-development-environment?u=76281980&t=342)** Okay, great, everything seems to be working with our development environment all set up, and the OpenAI API connection verified, it's time to start building the assistant.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), sdk (2), openai_api_key (2), url (2), html (1)
> **Prerequisites:** set up (10), install (3), setup (1)
> **File Paths:** index.js (4), main.js (2), package.json (2), express.js (1), assistant.js (1)
> **Code Keywords:** let (4), public (2), static (2), case, (1), function (1)
> **CLI Commands:** npm (2), node (2), make (2), find (1)
> **Exercise Files:** starter files (3), boilerplate (1), download the (1)
> **Tools:** github (2), terminal (2)
> **Definitions:** is an  (2), is a  (1)


### 1. Building the Smart Document Search Assistant

#### Creating your first assistant
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=0)** - [Instructor] Okay, now I'm going to teach you how to create and configure your first assistant using the OpenAI Assistants API.
>
> **[0:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=8)** This assistant will serve as the foundation for a smart Document Search tool that can interact with users and provide meaningful responses.
>
> **[0:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=18)** The OpenAI Assistants API as you've learned simplifies building AI assistants by internally handling complex tasks like embeddings, semantic search, and context management.
>
> **[0:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=33)** This means there's no need to manually manage conversation history or deal with any vector databases.
>
> **[0:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=39)** The API takes care of all of it.
>
> **[0:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=42)** All right, so before creating the assistant, make sure that the OpenAI client is properly configured in your project.
>
> **[0:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=52)** And we're going to create our assistant here in the file assistant.js.
>
> **[0:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=59)** To create an assistant, we use the Assistants API assistant.createmethod shown here in the node SDK.
>
> **[1:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=68)** This method requires specifying certain parameters such as the instructions, the assistant's name, the model, tools, and more.
>
> **[1:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=77)** So back in assistant.js, we'll create an assistant.
>
> **[1:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=83)** We'll define an async function I'll name createAssistant.
>
> **[1:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=92)** And in this function, we'll add our usual try catch statements just like that.
>
> **[1:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=99)** The catch statement will take an error parameter like so.
>
> **[1:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=105)** Okay, so here in our try statement, let's set up our call to the assistants API create endpoint.
>
> **[1:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=115)** So, we'll set up the function here.
>
> **[1:57](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=117)** We'll do const response and we'll assign it a call to await openai.beta, since this is still under beta.
>
> **[2:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=130)** And we'll do beta.assistants.create just like that.
>
> **[2:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=135)** And that's going to take an object.
>
> **[2:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=139)** Okay, so we'll define the assistants parameters.
>
> **[2:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=141)** First is name. Let's call it Document Search.
>
> **[2:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=146)** And then, the next parameter we'll define is the model.
>
> **[2:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=151)** There's various models we can use for this.
>
> **[2:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=153)** We'll just use GPT-4o.
>
> **[2:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=156)** So, we'll say gpt-4o.
>
> **[2:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=161)** And then, we want to provide the instructions.
>
> **[2:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=163)** So, we'll do that with the instructions parameter.
>
> **[2:48](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=168)** And for this example, we are creating a Document Search assistant.
>
> **[2:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=171)** So as the instructions, we'll just say, "You are a document search assistant, answer user queries with relevant information from the documents, or politely explain if none is found."
>
> **[3:05](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=185)** All right, let's keep moving.
>
> **[3:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=187)** This should be catch.
>
> **[3:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=189)** Now, when you create an assistant, it's going to return an assistant ID that you'll use to work with your assistant.
>
> **[3:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=197)** So, let's grab that ID here.
>
> **[3:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=199)** And this will also help us verify that the assistant has been created.
>
> **[3:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=203)** Using console.log, we'll log Assistant created with ID, and then we'll follow that by logging the ID with response.id.
>
> **[3:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=219)** Next, if we encounter any errors while creating our assistant, here in the catch method, we'll console.log the error.
>
> **[3:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=226)** Error creating assistant, and then follow that with the error message.
>
> **[3:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=230)** All right, so this code is going to set up our assistant with some basic configurations.
>
> **[3:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=235)** So, let's call our createAssistant function at the bottom.
>
> **[4:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=242)** And then, we are going to run the code here with node assistant.js.
>
> **[4:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=251)** It looks like I need to change this to await openai.
>
> **[4:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=256)** Let's try that again.
>
> **[4:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=261)** We'll run node assistant.js.
>
> **[4:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=264)** And good.
>
> **[4:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=265)** Our assistant was created with the ID displayed here.
>
> **[4:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=271)** So, what I'll do is save this ID in a variable for later use.
>
> **[4:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=276)** So, at the top of the file, I'll change this to const assistantId, and then assign it the ID return from the assistant, so we can call it later when we need to update our assistant, and then run it.
>
> **[4:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=291)** Now, it is good practice to verify that the assistant has been created.
>
> **[4:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=296)** And you can do that in your code using the assistants.list method.
>
> **[5:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=301)** Now, the easiest way to verify that your assistant has been created is by visiting the assistants API playground here at platform.[openai.com](https://openai.com).
>
> **[5:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=312)** So, here under Assistants, I'll just refresh.
>
> **[5:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=317)** And yes, indeed, my Document Search assistant has been created with the ID, which matches the ID saved for our assistant.
>
> **[5:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=327)** And here you can see the system instructions, the model, and so much more.
>
> **[5:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=333)** Now, I do suggest in your code, commenting out the call to createAssistant, and that's going to help you avoid creating multiple assistance.
>
> **[5:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=342)** All right, so with the assistant created, the foundation for our smart Document Search Assistant is in place.
>
> **[5:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-your-first-assistant?u=76281980&t=351)** And as I mentioned, there is so much more you can do, like enhance the assistance capabilities by enabling file search, code interpreter, and more.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (4), const (2), await (2), async (1)
> **Env Vars:** api (6), sdk (1), gpt (1)
> **File Paths:** assistant.js (4)
> **CLI Commands:** node (3), make (1)
> **Code Identifiers:** createassistant (3), assistantid (1)
> **Prerequisites:** set up (3), configure (1)
> **Analogies:** just like (2), such as (1)
> **URLs:** [openai.com](https://openai.com) (1)

#### Enabling File Search
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=0)** - [Instructor] In this lesson, I'll teach you how to configure the assistant to use the file search knowledge retrieval tool, which is going to allow the assistant to access and retrieve information from any uploaded documents.
>
> **[0:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=13)** In the project, you'll see a folder named documents and, within that, a file named contract.txt.
>
> **[0:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=20)** This file is a fake contract with a fictitious company that designs and develops AI humanoid robots.
>
> **[0:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=28)** So this file will serve as the assistant's knowledge base.
>
> **[0:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=32)** To upload a file to our assistant, we use the openai.files.create function shown here in the docs.
>
> **[0:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=42)** So back in my project, I'll open the file, upload.js, and here I'll create the function which will upload the documents to my assistant.
>
> **[0:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=51)** This will be an async function, and I'll name it uploadFile.
>
> **[0:57](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=57)** Within the function, I'll add the usual try-catch statements just like that.
>
> **[1:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=66)** And in the try statement, I'll call the files.create function.
>
> **[1:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=71)** So I'll store what that returns in a constant I'll name file and assign it await openai.files.create.
>
> **[1:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=81)** And this will take an object.
>
> **[1:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=85)** All right, within the object, we need to define a couple of parameters.
>
> **[1:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=89)** One of the required parameters is purpose, which is where you define the purpose of the file you are uploading.
>
> **[1:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=97)** And for that, I'll set it to assistants because the file will be uploaded to the assistants API.
>
> **[1:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=104)** And then we need to pass it the file itself, which we can do via the file system.
>
> **[1:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=110)** In this file, we're already importing the fs node module.
>
> **[1:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=114)** So I'll set the file parameter to fs, and then we'll say createReadStream, which is what we'll use to get that file.
>
> **[2:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=127)** And then to access the file within the documents directory, we'll say path.join, and then we will access the directory name with double underscore dirname and specify the directory name, which is documents.
>
> **[2:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=146)** And the next argument is the name of the file, which, as we know, is contract.txt.
>
> **[2:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=154)** Okay, right below, if everything uploaded successfully, will upload a success message to the console.
>
> **[2:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=163)** We'll say File uploaded, and we'll also want to get the file ID, which we can get from the response stored in the file constant.
>
> **[2:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=174)** So we'll say file.id.
>
> **[2:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=178)** And, as usual, if there are any errors when uploading the file, we will display the error here in the catch statement with console.error.
>
> **[3:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=189)** I'll just say Error uploading file, and I'll display the error message.
>
> **[3:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=201)** Okay, so I will call my uploadFile function and then run the latest changes in this file in the terminal with node upload.js.
>
> **[3:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=214)** And good.
>
> **[3:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=215)** In the console, we see that the file was uploaded, and this is the ID.
>
> **[3:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=220)** Now for future reference, I'm going to go ahead and copy this file ID from the console and assign it to a variable here in my file, and I'll name that constant, fileID.
>
> **[3:57](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=237)** All right, the next step is to modify our assistant in assistant.js to include what's called the file search tool.
>
> **[4:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=246)** And anytime we want to update an assistant, we can use the assistant.update method shown here in the docs.
>
> **[4:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=256)** So back in my project, I'll open the file, assistant.js, and scroll all the way to the bottom to create my updateAssistant function.
>
> **[4:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=266)** This will be an async function that I'll name updateAssistant, and, within it, I'll include the try-catch statements as always.
>
> **[4:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=281)** Okay, so here in the try statement is where we are going to call the beta.assistants.update method.
>
> **[4:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=289)** So I'll assign what that returns to a constant I'll name updatedAssistant.
>
> **[4:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=298)** And then I'll assign it await.openai.beta and then a call to assistants.update.
>
> **[5:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=310)** And that is going to take an object.
>
> **[5:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=315)** All right, now the first argument the update method takes is the ID of the assistant we want to update.
>
> **[5:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=323)** And remember we've assigned that ID to the assistantId constant.
>
> **[5:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=328)** So I'll go ahead and just pass it our reference to that variable here as the first argument.
>
> **[5:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=336)** And then below we want to pass our assistant some tools.
>
> **[5:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=340)** So to do that we need to use the tools parameter and set that to an array.
>
> **[5:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=346)** Within that, I want to set the type of tool, like that, follow that with a colon.
>
> **[5:53](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=353)** And the type of tool we want to use in this case is the file search tool, which is going to allow the assistant to search through any of the files we've uploaded to it.
>
> **[6:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=366)** Okay, so if everything was successful, we'll log a message to the console that says Assistant updated.
>
> **[6:14](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=374)** And then we'll want to get our updated assistant.
>
> **[6:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=377)** So we'll just pass it the updatedAssistant variable.
>
> **[6:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=382)** So what we're storing here.
>
> **[6:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=385)** And as usual, in the catch statement, we'll log an error to the console.
>
> **[6:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=390)** If there are any issues with updating our assistant, we'll log the message, Error updating assistant, and then we will log the error with error.message.
>
> **[6:48](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=408)** All right, I'll call the updateAssistant function, then run the latest changes in my assistant.js file here in the console with node assistant.js.
>
> **[7:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=420)** And great.
>
> **[7:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=422)** Here in the console, I get the message, Assistant updated, followed by all of the information from my updated assistant, including that it now has this tools parameter with the file search.
>
> **[7:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=435)** Now, if I go back to my assistant here in the playground and refresh, good.
>
> **[7:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=441)** Notice that the file search option here is now enabled for my assistant.
>
> **[7:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=446)** Now, to use file search, you need to upload files, which I've done, and then create a vector store.
>
> **[7:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=454)** So that's what I'll do next using the Node SDK's vectorStores.create function.
>
> **[7:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=462)** Back in upload.js, I'll scroll down and comment out this call to upload file.
>
> **[7:48](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=468)** And below that, define a new function to create my vector store.
>
> **[7:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=474)** This, again, will be an async function, and I'll name this function, let's say createVectorStore.
>
> **[8:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=484)** And inside the function, I'll call vectorstores.create.
>
> **[8:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=488)** So I'll assign what that returns to a const I'll name vectorStore, and then we'll say await openai.beta.vectorStores.create.
>
> **[8:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=505)** Just like that.
>
> **[8:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=507)** And that's going to take, again, an object.
>
> **[8:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=509)** The first parameter we will pass this function is name, which will name our vector store.
>
> **[8:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=516)** I'll just call it Contract Document.
>
> **[8:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=520)** And the next parameter is description.
>
> **[8:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=525)** And I'll just describe it as Vector store for docs.
>
> **[8:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=532)** And then we need to pass our vector stores our files, and we do that via a parameter named file_IDs, file underscore IDs, and set it to an array.
>
> **[9:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=542)** And within that array is where we pass the IDs of the uploaded files.
>
> **[9:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=548)** Now, remember we have a file ID here assigned to the fileID variable.
>
> **[9:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=555)** And this is of course the contract.txt file we uploaded earlier.
>
> **[9:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=560)** So we will pass fileIDs to the array.
>
> **[9:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=567)** And if the vector store creation was successful, we'll log a message to the console also displaying the vector store ID, which we're going to need.
>
> **[9:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=576)** We'll just say Vector store created with the ID.
>
> **[9:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=582)** And then we'll just get the ID from the vectorStore variable with vectorStore.id.
>
> **[9:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=590)** Okay, let's call this function, createVectorStore, and run the file in the console.
>
> **[10:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=600)** I'll type node upload.js.
>
> **[10:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=606)** Oh, it looks like it did not like the description parameter.
>
> **[10:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=610)** So I'll go ahead and delete it from the function and run it again.
>
> **[10:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=617)** And good.
>
> **[10:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=618)** There we get the message, Vector store created with this ID.
>
> **[10:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=622)** So I'll copy this ID, and like I've done with the other IDs, assign it to a variable here in my file.
>
> **[10:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=630)** I'll name it vectorStoreID.
>
> **[10:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=637)** And I'm actually going to need this vector ID in my assistants file.
>
> **[10:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=641)** Because, after creating the vector store, we need to update the assistant to use it.
>
> **[10:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=647)** So I'll go ahead and copy this entire vector store variable declaration and paste it in my assistants.js file.
>
> **[10:57](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=657)** And here we need to update the assistant to use the vector store we've created.
>
> **[11:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=663)** And you'll learn that, to update an assistant, we can use the assistants.update function.
>
> **[11:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=669)** And in this case we'll just need to update it with the new information we want to pass to our assistant.
>
> **[11:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=677)** So what I'll do is update the object here with some new information.
>
> **[11:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=683)** We want to say tool_resources and then set that to an object.
>
> **[11:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=691)** And within here we want to specify file_search.
>
> **[11:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=695)** And this is where we pass the vector stores to our assistant.
>
> **[11:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=699)** And we can do that using vector_store_ids to an array.
>
> **[11:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=705)** And this is where we pass it the vector store ID which is assigned to the vectorStoreID variable.
>
> **[11:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=716)** Okay, I'll go ahead and run these changes here in my terminal.
>
> **[12:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=720)** Node assistant.js.
>
> **[12:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=724)** And, good, I get back my updated assistant.
>
> **[12:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=729)** And if I go back to my assistant's playground and refresh it, great.
>
> **[12:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=735)** We can see the contract document has been uploaded to my assistant, and it's now a part of the file search tool.
>
> **[12:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=743)** Fantastic.
>
> **[12:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/enabling-file-search?u=76281980&t=744)** Great, with the file search capability enabled and the document uploaded and in the vector store, the assistant is now equipped to respond based on the content of this document.

> [!info]- Semantic Content
>
> **Code Keywords:** function (18), pass (11), async (3), await (3), let (2)
> **Code Identifiers:** updateassistant (3), vectorstore (3), uploadfile (2), fileid (2), updatedassistant (2)
> **File Paths:** assistant.js (5), upload.js (4), contract.txt (3), assistants.js (1)
> **CLI Commands:** node (6)
> **UI Navigation:** open the (2), scroll down (1)
> **Env Vars:** api (1), sdk (1)
> **Documentation:** the docs (2)
> **Tools:** terminal (2)

#### Creating and running a thread
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=0)** - [Instructor] Now that you've created an assistant uploaded files, and even set up a vector store for knowledge retrieval, it's time to bring your assistant to life.
>
> **[0:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=11)** The next step is creating and running threads.
>
> **[0:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=15)** Threads allow the assistant to manage conversations with users, keeping track of context, and providing meaningful interactive responses.
>
> **[0:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=24)** You can think of a thread, like a conversation thread in a messaging app, keeping all related messages together.
>
> **[0:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=31)** So I'm going to guide you step by step, through creating a thread, adding user messages, and running the assistant to generate insightful replies.
>
> **[0:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=41)** First up, you create a thread using the threads.create method shown here in the docs.
>
> **[0:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=50)** Back in my project, I'll open up the file assistant.js and scroll down and I'll first comment out my call to the update assistant function so that I don't inadvertently update my assistant.
>
> **[1:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=64)** And here I'll define a new async function.
>
> **[1:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=67)** I'll name create thread, and within the function, I'll declare a new const called thread and assign it await openai.beta.threads.create.
>
> **[1:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=85)** Now a thread as I mentioned, represents a conversation between a user and one or many assistant.
>
> **[1:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=93)** Once created, you'll get back a thread ID that you'll use to store and retrieve conversation history.
>
> **[1:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=100)** So to get the thread ID below, we'll just log it to the console.
>
> **[1:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=105)** And if a thread is successfully created, we'll say thread created with the ID.
>
> **[1:53](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=113)** And then we will get the ID here with thread.id.
>
> **[2:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=122)** All right.
>
> **[2:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=122)** I'll call the createThread function, and then run this file in the terminal to get the thread ID with node assistant.js And there we go.
>
> **[2:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=135)** Thread created with this ID here.
>
> **[2:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=137)** So like always I'll copy this thread ID, and then assign it to a variable for reference up top.
>
> **[2:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=147)** I'll name it threadID.
>
> **[2:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=154)** After creating a thread, you'll need to add user messages to it.
>
> **[2:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=159)** And these messages represent the actual questions or prompts the assistant will respond to.
>
> **[2:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=166)** So as you can see here in this graphic, a message gets created by an assistant or user.
>
> **[2:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=172)** And messages can include text, images and other files, and they are stored as a list on a thread.
>
> **[3:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=180)** So I'm going to go ahead and add a message to the thread I created here in assistant.js by first commenting out the call to my createThread function.
>
> **[3:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=190)** And then below creating a new async function, I'll name addMessage.
>
> **[3:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=197)** And this message is going to take a thread ID as an argument via a parameter I'll name, threadID, and I'll assign what the threads.messages.create method returns to a const I'll name, message, and I'll follow that with await openai.beta.threads.messages.create.
>
> **[3:48](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=228)** The first thing we pass to this create method is the actual thread ID to add the message to.
>
> **[3:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=235)** So we'll go ahead and pass at the value that we will assign to this thread ID parameter.
>
> **[4:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=241)** We'll follow that with a comma, and then an object where we need to define two parameters, role and content.
>
> **[4:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=250)** So role defines the message type.
>
> **[4:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=253)** In this case, I'll set it to user since the input will come from the user.
>
> **[4:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=258)** And then the content is what's going to contain the user's query or input.
>
> **[4:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=265)** So in this case, I'll set content to a question like, what are the key terms in the contract?
>
> **[4:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=274)** Once the message gets added, we'll go ahead and log something to the console that says user message added.
>
> **[4:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=284)** And let's just check out the ID, and the console output as well with message.id.
>
> **[4:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=294)** All right, good.
>
> **[4:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=295)** So I'll call the function below and pass it the threadID and remember, the threadID is assigned to this threadID variable.
>
> **[5:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=307)** So I'll run the changes in the console.
>
> **[5:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=313)** And there we go.
>
> **[5:14](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=314)** User message added with this ID here.
>
> **[5:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=318)** All right.
>
> **[5:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=319)** After adding a user message to a thread, the next step is to run the assistant on the thread.
>
> **[5:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=326)** And you can do that using the OpenAI Create and Poll helper, which will simplify the process of running, and monitoring the status of the assistance response.
>
> **[5:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=339)** So let's do that here in assistant.js.
>
> **[5:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=341)** I'll define a new async function named run assistant.
>
> **[5:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=347)** And this is going to take a couple of parameters.
>
> **[5:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=350)** First, the assistantID and the threadID.
>
> **[5:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=356)** So I'll name those parameters assistantID and threadID.
>
> **[6:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=361)** And within that, we're going to call the create and poll helper.
>
> **[6:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=368)** I'll assign what that returns to a const I'll just name run, and we'll follow that with await openai.
>
> **[6:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=376)** Once again .beta.threads.
>
> **[6:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=381)** And this time runs.createAndPoll.
>
> **[6:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=387)** Just like that.
>
> **[6:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=389)** Now, the first argument we pass to create and poll is the threadID.
>
> **[6:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=395)** So we'll do that with the threadID parameter.
>
> **[6:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=400)** And then we'll follow that with an object, which is going to hold a few parameters as well.
>
> **[6:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=406)** First, the assistant ID, so we'll define that with assistant_id, and we'll set that to whatever's being assigned to the assistant ID parameter.
>
> **[6:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=419)** And we also need to give it some instructions.
>
> **[7:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=421)** So we will pass it an instructions parameter, and in this case, I'm just going to tell it to respond as a helpful assistant, and to address the user as Guil.
>
> **[7:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=436)** Okay.
>
> **[7:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=437)** Now the next step once we run the assistant is to check if its run status is completed.
>
> **[7:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=444)** That is what the polling part of this method will do.
>
> **[7:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=449)** So we're going to do that with a conditional below, we'll say if, and then we'll check if run.status === completed.
>
> **[7:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=461)** Then we'll do something.
>
> **[7:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=463)** In this case, we want to return the run thread ID.
>
> **[7:48](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=468)** So we'll do run.thread_id.
>
> **[7:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=474)** Otherwise we'll throw an error.
>
> **[7:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=478)** So we'll say throw new Error.
>
> **[8:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=482)** And as the error message, I'll type, "Run failed."
>
> **[8:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=487)** And then we want to display the status.
>
> **[8:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=489)** So we'll say "with status", and we'll get the status by interpolating the value of run.status.
>
> **[8:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=502)** Okay, so to recap.
>
> **[8:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=504)** This function returns the assistant on the thread using the assistance ID, and additional instructions to guide its behavior.
>
> **[8:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=515)** Now, once the assistant finishes processing, we retrieve the messages in the thread to see its response.
>
> **[8:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=522)** So we'll do that below with another function, I'll name getAssistantResponse.
>
> **[8:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=532)** And this function is going to take threadID as a parameter.
>
> **[8:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=538)** Now below, I'll make a call to the threads.messages.list function from the OpenAI node SDK.
>
> **[9:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=546)** So I'll sign what that returns to a const I'll name messages, and then I'll say await openai.beta.threads.
>
> **[9:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=558)** And again, messages.
>
> **[9:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=560)** And we want to list them out.
>
> **[9:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=561)** So we'll call it .lists.
>
> **[9:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=565)** Then to list the messages from the thread, we need to pass it the thread ID assigned to the thread ID parameter.
>
> **[9:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=573)** Okay.
>
> **[9:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=574)** Now let's display the messages finally.
>
> **[9:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=577)** So to do that, I'll paste in this code here, which is a four of loop that gets all of the messages and logs them to the console starting with the latest, and it displays the assistance reply along with other messages for context.
>
> **[9:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=598)** So finally, we will bring everything together by executing the functions we just wrote in sequence.
>
> **[10:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=604)** And there's various ways you might do this.
>
> **[10:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=606)** I'll go ahead and use a promise chain using the then method.
>
> **[10:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=611)** So first, I'll call my runAssistant function, passing it the assistantID, and also what's assigned to the thread ID constant.
>
> **[10:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=625)** And I'll follow that with a then method.
>
> **[10:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=629)** And as the callback, I'll add the parameter, let's say updated thread.
>
> **[10:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=638)** And then that's going to return a call to the getAssistantResponse function we just wrote.
>
> **[10:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=649)** And then we'll pass the getAssistantResponse function, the updated thread ID.
>
> **[10:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=654)** So I actually need to update this here to updated thread ID, and pass the value of that on to the getAssistantResponse function.
>
> **[11:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=668)** Let me just organize the code here a little bit.
>
> **[11:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=671)** And finally, let's go ahead, and catch any errors using a catch method, and that is going to take a callback with an error object, and then we will console.log any errors by displaying the message error, and then interpolate the error with error.message.
>
> **[11:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=702)** All right.
>
> **[11:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=703)** So to help you understand the process, and to recap.
>
> **[11:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=707)** When you upload a file for knowledge retrieval, such as the contract.txt file here in the documents folder, the API will first process the document, and create embeddings from the text, and these embeddings are stored internally in the vector database, allowing the assistant to perform semantic searches over the content.
>
> **[12:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=731)** Then we create a thread to hold conversation context.
>
> **[12:14](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=734)** We add messages to provide the assistant with input.
>
> **[12:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=738)** We run the assistant to generate responses with specific instructions, and then we retrieve the responses from the thread and display them.
>
> **[12:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=746)** So let's try that out by running our file here in the terminal.
>
> **[12:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=753)** Okay, so it looks like I get a few errors in the console.
>
> **[12:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=756)** I need to change this to assistantID, and also scroll up here to where I'm using the create and poll helper.
>
> **[12:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=765)** And this should be beta.threads.runs.
>
> **[12:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=770)** There we go.
>
> **[12:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=771)** So I'll go ahead and run my changes again.
>
> **[12:57](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=777)** And great.
>
> **[12:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=778)** After a while, I get back the response here in the console.
>
> **[13:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=783)** Remember the question we asked the assistant was, what are the key terms in the contract?
>
> **[13:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=789)** So here it responded with all the key terms of the contract, including the scope of work, deliverables, and timeline compensation, confidentiality, and so much more.
>
> **[13:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=801)** So this is a pretty thorough response from our assistant using knowledge specifically from our contract.txt document.
>
> **[13:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/creating-and-running-a-thread?u=76281980&t=810)** Excellent.

> [!info]- Semantic Content
>
> **Code Keywords:** function (16), pass (8), let (7), const (4), await (4)
> **Code Identifiers:** threadid (10), assistantid (4), getassistantresponse (4), createthread (2), addmessage (1)
> **File Paths:** assistant.js (4), contract.txt (2)
> **CLI Commands:** node (2), make (1)
> **Env Vars:** sdk (1), api (1)
> **Tools:** terminal (2)
> **UI Navigation:** scroll down (1), scroll up (1)
> **Definitions:** is a  (2)

#### Uploading and managing documents
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=0)** - [Instructor] Now that your assistant can search through a single document, it's time to expand its knowledge base by uploading multiple documents and learning how to manage them.
>
> **[0:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=13)** So as your assistant grows, it may need to reference additional documents to provide more comprehensive responses.
>
> **[0:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=20)** So let's say you have additional files in your documents directory such as policy.txt, containing a fictitious company policy, as well as guidelines.txt holding some company guidelines for a robotics company.
>
> **[0:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=38)** Now, to upload multiple documents from your code or app, you might iterate over each file in the documents directory, create and upload the files as we've done before here and upload.js, and then attach the files to the vector store, for instance.
>
> **[0:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=59)** But what I'll do in this lesson is go ahead and take advantage of the Assistants dashboard here at platform.[openai.com](https://openai.com) to do all of that.
>
> **[1:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=71)** So here is my document search assistant in the dashboard, and under tools, I can see that file search is enabled, and so far we have the contract document attached to the assistant.
>
> **[1:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=85)** So I'll add my new guidelines and policy files here under tools by clicking + Files.
>
> **[1:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=92)** Then from here, I can drag and drop my files here into this area, and it's going to attach those files to the vector stores, so I'll do just that, there we go, then click Attach.
>
> **[1:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=107)** And clicking under file search shows all of the files that have been uploaded.
>
> **[1:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=116)** Now, one way that you can check that all files have been uploaded to the vector store in Assistants is with the vector-stores.files.list function, shown here in the docs, so I'll do that in my project.
>
> **[2:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=132)** So back in my project here in assistant.js, I'll list my files, but I'll first comment out the code that runs the assistant just for this, and below, I'll paste in a function I named listFiles, and here, we are calling openai.beta.vectorStores.files.list, passing it the vectorStoreID, and then we are logging the vectorStoreFiles to the console.
>
> **[2:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=159)** So let me call my listFiles function, and then to view them, I'll run my assistants file.
>
> **[2:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=172)** Okay, here we go, we get back our three file IDs, so here's the first file, the second one, and then, so here's the first file, the second file ID, and then the third one.
>
> **[3:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=191)** So it looks like our vector store now has all the three files that are located here in the documents folder, great.
>
> **[3:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=200)** And I actually might test sending queries to the assistant about the guidelines or policy files we just uploaded, but I can test that the assistant is indeed retrieving content from those files here in OpenAI's Playground.
>
> **[3:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=216)** So I'll click over to Playground, then Assistants, and then here, I can enter a message such as summarize the company policy in one paragraph, and then run that on the thread.
>
> **[3:48](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=228)** It might take a little bit, but then you'll see that it starts to retrieve information, and yes, it is in fact pulling information from the XYZ Robotics document, and it did summarize it in one paragraph, perfect.
>
> **[4:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=242)** Next, I'll try asking it to do the same, but with the guidelines text files.
>
> **[4:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=248)** So for example, I'll just say summarize the company guidelines in one paragraph, and let's see what that says.
>
> **[4:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=259)** Okay, perfect, so I've confirmed that each of the documents is in fact available in the vector store for the assistant to use.
>
> **[4:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=268)** Now, overall effective management of your assistant's knowledge base is important, so you might want to get into the habit testing your assistant here in the Playground, or using a function such as the one here in listFiles to view all of the uploaded files or to test the knowledge retrieval.
>
> **[4:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=289)** It's also useful to learn how to delete a file from the assistant, and here's how you can do that, either in the Playground, or I'll head over to the Assistants dashboard, and then here under file search, you can go ahead and click on your files and then click on the either Detach from assistant button to detach a file from your assistant, or the delete icon to the right of each file.
>
> **[5:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=315)** You can also do that with your code using the Delete vector store file function, or if you want to delete a file entirely, you can use openai.files.delete, or del, as shown here in the docs.
>
> **[5:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=331)** Now, an upcoming lesson is going to test the assistant's ability to access the expanded knowledge base.
>
> **[5:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=340)** So you see with multiple documents uploaded, the assistant searches across all available files when responding to queries, and the assistant's API is going to handle the indexing and the retrieval processes internally, so manually managing embeddings or vector databases is unnecessary.
>
> **[6:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=361)** Finally, you also want to be mindful of any usage limits or costs associated with uploading and storing multiple documents, so you might want to regularly monitor your OpenAI account to ensure you stay within any prescribed limits and token usage.
>
> **[6:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/uploading-and-managing-documents?u=76281980&t=379)** Cool, so with a robust knowledge base, your assistant is now better equipped to provide detailed and accurate responses, enhancing its utility.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), delete (5), let (3), this, (1), finally, (1)
> **Code Identifiers:** listfiles (3), vectorstores (1), vectorstoreid (1), vectorstorefiles (1)
> **Analogies:** such as (3), for instance (1), for example (1)
> **File Paths:** policy.txt (1), guidelines.txt (1), upload.js (1), assistant.js (1)
> **Env Vars:** xyz (1), api (1)
> **Documentation:** the docs (2)
> **UI Navigation:** click on (2)
> **URLs:** [openai.com](https://openai.com) (1)

#### Challenge: Uploading and managing documents
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=0)** - [Instructor] You've made great progress setting up your assistant and expanding its knowledge base by uploading multiple documents.
>
> **[0:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=13)** Now it's your time to put some of those skills to the test with a challenge that's going to help reinforce what you've learned.
>
> **[0:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=21)** In this challenge, you'll apply your knowledge of uploading and managing documents within the assistant.
>
> **[0:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=28)** The goal is to enhance the assistant's capabilities by adding new information and making sure that it can access and use that data effectively.
>
> **[0:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=36)** So what I want you to do is download the latest files with this video, install the usual dependencies, and run the project.
>
> **[0:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=45)** And here's what you'll need to do.
>
> **[0:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=47)** First, create a new document in your project.
>
> **[0:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=51)** So you're going to write a new text file named faq.txt, for example, containing frequently asked questions and answers on a topic of your choice.
>
> **[1:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=62)** Then you're going to place that new file in the documents directory of your project.
>
> **[1:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=68)** After that, you'll upload the text file and associate it with a vector store.
>
> **[1:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=75)** Then you'll want to use the API to verify the document and list the files associated with the vector store and confirm that the new faq.txt file is included.
>
> **[1:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=88)** Next, you'll update the assistant's instructions.
>
> **[1:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=92)** So for example, you might want to make sure that your assistant prioritizes that FAQ's file when responding.
>
> **[1:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=99)** And to do that, you might update the assistant's instructions to include guidelines like, "When responding to questions, search the FAQ's first for relevant answers.
>
> **[1:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=110)** If no match is found, provide a polite response indicating the information is unavailable."
>
> **[1:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=116)** And finally, you are going to test the assistant.
>
> **[2:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=120)** So run a thread and ask the assistant a question from faq.txt.
>
> **[2:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=126)** For example, what are the benefits of regular exercise or whatever question might be related to your FAQs.
>
> **[2:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=133)** And if you'd like, you can also practice managing your vector store.
>
> **[2:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=137)** Apart from listing all the files to make sure that faq.txt is present, you might delete an older file, for example, the guidelines.txt file from the vector store, and then confirm the assistant no longer references it.
>
> **[2:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=152)** For this challenge, feel free to use as much as the playground as you want to add files and update the assistant's instructions and take some time to work through this challenge.
>
> **[2:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=166)** It's a great opportunity to deepen your understanding of how the assistant might handle multiple documents and how you can manage its knowledge base more effectively.
>
> **[2:57](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=177)** And do take advantage of the API reference and docs to help you out.
>
> **[3:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=182)** And when you're ready, join me in the next video where I'm going to walk you through one possible solution.
>
> **[3:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-uploading-and-managing-documents?u=76281980&t=187)** Good luck and have fun.

> [!info]- Semantic Content
>
> **File Paths:** faq.txt (4), guidelines.txt (1)
> **Env Vars:** api (2), faq (2)
> **Analogies:** for example (4)
> **CLI Commands:** make (2)
> **Code Keywords:** finally, (1), delete (1)
> **Prerequisites:** install (1), you'll need (1)
> **Cross-References:** in the next (1)
> **Documentation:** api reference (1)

#### Solution: Uploading and managing documents
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=0)** - [Instructor] I hope you enjoyed the challenge and were able to complete it successfully.
>
> **[0:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=9)** Now I'm going to walk you through one solution and the solution will demonstrate how to upload a new file, such as faq.txt associated with a vector store and update the assistant's knowledge base to respond accordingly.
>
> **[0:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=25)** So the first step was to ensure that a file, such as faq.txt, was located in your documents directory.
>
> **[0:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=34)** So for example, my file here contains frequently asked questions and answers.
>
> **[0:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=39)** So for instance, here's a question like, "Does XYZ Robotics offer remote work opportunities?"
>
> **[0:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=46)** Followed by the answer below.
>
> **[0:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=49)** So hopefully you created your own file on any topic, just making sure that the questions and answers are clear and well structured.
>
> **[0:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=59)** Next to upload my faq.txt file and attach it to the vector store, I updated my script here in upload.js.
>
> **[1:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=70)** This time my uploadFile function takes a fileName, which gets read from the documents directory specified here.
>
> **[1:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=80)** So as you'll see later when we run the file, it's going to pass the faq.txt file name to this uploadFile function and the function is returning the file.id.
>
> **[1:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=94)** Next up, I attached the file to my existing vector store.
>
> **[1:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=100)** This time using a different method called vectorStores.fileBatches.create.
>
> **[1:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=107)** And as you can see in the docs, this method creates a vector store file batch.
>
> **[1:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=114)** All you need to do is pass it the ID of the vector store for which you want to create a file batch for, or the vector store you want to update with new files.
>
> **[2:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=123)** Then pass it the list of File IDs that the vector store should use using the file_ids parameter used here, and I'm including the fileID in the array.
>
> **[2:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=138)** Now this attachToVectorStore function does take the vectorStoreID and the fileID, and that's going to make sure that the file is uploaded and attached to the vector store, making it searchable by the assistant.
>
> **[2:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=153)** And next, this main function brings both of the function calls together, taking in the fileName.
>
> **[2:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=160)** And as you can see here below, I'm also exporting the vectorStoreID that I have declared here.
>
> **[2:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=167)** That way we can use it in other files, like in assistant.js.
>
> **[2:53](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=173)** And this if conditional is included here to run the main function only if this upload.js file is executed directly.
>
> **[3:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=183)** So in other words, if I run upload.js here in the console to call my main function, which as you can see we are passing it the new file to upload and attach to the vector store faq.txt.
>
> **[3:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=197)** So in the console, I'll run my latest changes with node upload.js and great, it uploaded the file.txt and it also attached it to the vector store.
>
> **[3:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=213)** Now, if I head over to my Assistants Playground and let's refresh it, I can have a look at the files associated with the assistant and great.
>
> **[3:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=224)** There we can see the file faq.txt associated with the assistant and the vector store.
>
> **[3:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=230)** All right, next, I updated the assistant configuration here in assistant.js to make sure that it could leverage the newly uploaded file for answering queries.
>
> **[4:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=241)** So here up top, as I mentioned, I am importing the vectorStoreID from the upload.js file so that we can use it here in our script.
>
> **[4:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=251)** All I had to do in this file was add a new message to the thread, then run the thread.
>
> **[4:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=257)** So, the only thing I updated here in this file was the addMessage function, which as you can see, I've added some new content.
>
> **[4:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=268)** It's the query, "How can I apply for a job at XYZ Robotics?"
>
> **[4:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=273)** And then below in the runAssistant function, I updated the instructions here.
>
> **[4:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=278)** So this instructions property, when included, is going to overwrite the initial assistant instructions, so the instructions written here.
>
> **[4:48](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=288)** So this time the instructions say, "Respond as a helpful assistant and address the user as Guil.
>
> **[4:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=294)** When responding to questions, search the vector store first for relevant answers."
>
> **[4:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=298)** And again, "If no match is found, provide a polite response indicating the information is unavailable."
>
> **[5:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=304)** All right, so I'll run some of my latest changes here.
>
> **[5:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=308)** Let's first add the new message to the thread here.
>
> **[5:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=313)** So I'll uncomment the function call to my addMessage function, and I'll save this file and then run it in the console with node assistants.js.
>
> **[5:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=327)** And good!
>
> **[5:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=328)** My user message was added to the thread.
>
> **[5:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=331)** I'll go ahead and just manually comment this out and then run my assistant with the code we wrote in an earlier video.
>
> **[5:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=339)** So again, in the console, I'll run this file, node assistant.js.
>
> **[5:48](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=348)** And after a little bit, I get my response.
>
> **[5:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=350)** So here is my question.
>
> **[5:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=352)** "How can I apply for a job at XYZ Robotics?"
>
> **[5:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=355)** And the assistant replies, "Guil, you can apply for a job at XYZ Robotics by visiting their career page at [xyzrobotics.com/careers](https://xyzrobotics.com/careers)."
>
> **[6:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=364)** Excellent!
>
> **[6:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=366)** Finally, I'll go ahead and verify that the assistant is only using the updated knowledge base.
>
> **[6:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=372)** So here in my Playground in the thread, I'll run a test message like "What was the number one movie in 2024?"
>
> **[6:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=381)** Which the assistant should have no knowledge of.
>
> **[6:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=384)** So I'll run that, and great.
>
> **[6:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=388)** As you can see, it replies saying, "I'm sorry, but the documents provided do not contain information about the number one movie in 2024."
>
> **[6:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=395)** Now, again, if necessary, you can remove or update any files in the vector store using the API's delete methods, or directly here in the Assistants Playground if needed.
>
> **[6:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=407)** So I hope this solution helps you understand how to upload and manage documents within the Assistants.
>
> **[6:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=414)** In this challenge, we enhance the assistant's capabilities by adding a new text file, updating the assistant's instructions, and managing the knowledge base.
>
> **[7:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=423)** Now, if your approach was different than mine, that is perfectly fine.
>
> **[7:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=427)** As you know, there are often multiple ways to achieve the same result.
>
> **[7:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=431)** Really, the important thing is that you're starting to get more comfortable with uploading documents and managing the assistant's knowledge base.
>
> **[7:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-uploading-and-managing-documents?u=76281980&t=438)** So feel free to keep experimenting by adding more documents or refining the assistant's instructions.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), pass (3), let (2), for, (1), finally, (1)
> **File Paths:** faq.txt (6), upload.js (5), assistant.js (3), file.txt (1), assistants.js (1)
> **Code Identifiers:** vectorstoreid (3), uploadfile (2), filename (2), fileid (2), addmessage (2)
> **CLI Commands:** node (3), make (2)
> **Env Vars:** xyz (4), api (1)
> **Analogies:** such as (2), for example (1), for instance (1)
> **URLs:** [xyzrobotics.com](https://xyzrobotics.com) (1)
> **Documentation:** the docs (1)


### 2. Implementing Core Features

#### Handling user input and generating responses
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=0)** - [Instructor] You've successfully created an assistant using the OpenAI Assistants API, and even uploaded documents for reference.
>
> **[0:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=9)** Now, it's time to make the assistant interactive by handling user input and generating responses through our interface.
>
> **[0:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=17)** In the project files, I've set up the express application to serve as the backend for the assistants.
>
> **[0:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=24)** When you download the latest projects with this video, your index.js file should already have the basic server set up.
>
> **[0:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=31)** So for example, here we have our user query route handler, and then we're starting the server below.
>
> **[0:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=39)** And notice how I am importing the assistantId from assistant.js, which I am exporting at the bottom of the assistant.js file.
>
> **[0:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=50)** Now, we're not going to be using assistant.js in this lesson.
>
> **[0:53](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=53)** You'll notice that any of the function calls for the functions we've declared, as well as the code that runs the assistant is commented out.
>
> **[1:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=62)** We are going to be doing all of our work here in the user query route handler.
>
> **[1:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=71)** This route will receive the user's message from the frontend, process it using the OpenAI Assistants API, and return the assistants response.
>
> **[1:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=83)** The first thing I'm going to do in this route handler is extract the user's message from the request body.
>
> **[1:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=90)** So I'll store that in a const, I'll name userMessage and assign it the user message from the request body with req.body.message.
>
> **[1:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=106)** Now below, I'm going to initialize a variable to store the threadId.
>
> **[1:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=111)** I'll name it threadId and use let because as you'll see, we're going to reassign it the newly created threadId, but I'll initialize it to null.
>
> **[2:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=122)** Now in production, you'll typically store this in a session or maybe a database.
>
> **[2:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=127)** We're just going to work with it here in the route handler.
>
> **[2:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=131)** Okay, next, let's move inside the try block.
>
> **[2:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=135)** So if we have no existing threadId, we'll create a new thread.
>
> **[2:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=142)** Each thread is going to represent a conversation history, if you will.
>
> **[2:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=147)** So we'll say if not threadId, we'll create a thread.
>
> **[2:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=155)** So I'll say const threadResponse, and then we'll call await openai.beta.threads.create
>
> **[2:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=172)** to create our thread.
>
> **[2:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=176)** And below, I'll store the newly created threadId back into our threadId variable.
>
> **[3:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=183)** So threadId equals threadResponse.id.
>
> **[3:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=188)** Just like that.
>
> **[3:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=190)** Okay, the next thing we want to do is add the user's new message to the existing or newly created thread.
>
> **[3:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=200)** Below the if statement, I'll do that by calling the messages.create function with await openai, again, .beta.threads.messages.create,
>
> **[3:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=219)** and we'll pass it the threadId as the first argument and the second argument is an object containing our message.
>
> **[3:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=227)** Now, within this message, the role needs to be user, and then the content will be the user message, which remember is the message we're extracting from the request body, which is assigned to our user message const.
>
> **[4:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=249)** Okay, the next thing we need to do within this try block is run the thread to process all the messages in the conversation.
>
> **[4:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=258)** And to do that, we'll again use the create and pull function you learned about earlier, which creates a run and waits for a completion.
>
> **[4:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=267)** So we'll store that in a const I'll name run and assign it a call to create and pull with await openai.beta.threads.runs and this time createAndPull.
>
> **[4:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=287)** The first argument I'll pass it is the threadId with the second one being an object.
>
> **[4:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=295)** And within this object, we'll just need to include our assistant id using the assistant_id parameter.
>
> **[5:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=301)** And remember that is stored in the assistant_id variable we are importing from assistant.js.
>
> **[5:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=309)** Okay, good. Let's keep going.
>
> **[5:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=313)** Since we're creating a run and waiting for a completion with create and pull, we need to check if the run completed successfully, then do something after that.
>
> **[5:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=325)** So we'll say if run.status strictly equals completed,
>
> **[5:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=335)** then we're going to retrieve all the messages, including the assistant's reply.
>
> **[5:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=340)** So I'll store those in a const I'll name messagesResponse, and then I'll make a call to the messages.list function to list all the messages with await openai.beta.threads.messages.list,
>
> **[6:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=366)** and I need to pass it the threadId.
>
> **[6:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=370)** So the thread containing all the messages to list.
>
> **[6:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=375)** Below that, I'm going to assign all the messages to a variable I'll name allMessages and get the message data with messagesResponse.data.
>
> **[6:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=389)** It looks like there's a typo here.
>
> **[6:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=391)** This needs to be messagesResponse.
>
> **[6:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=397)** Now keep in mind that data is an array of message objects.
>
> **[6:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=402)** So that's what we're storing here in allMessages.
>
> **[6:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=405)** So the next thing we want to do is extract the latest assistant message.
>
> **[6:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=411)** So we're going to filter by the role assistant and then use the pop method to grab the most recent ones.
>
> **[6:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=418)** There are various ways you might do that.
>
> **[6:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=419)** This is just the approach I'm using.
>
> **[7:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=422)** That was a lot of code, so now let's have a look at the frontend interface for users to interact with the assistants.
>
> **[7:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=428)** In the public directory of our project, if you open up index.html, you'll notice that we create the UI with a text input for the user query and a button to send the query.
>
> **[7:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=441)** So clicking the button is going to kick off the request to the query route handler we just worked on.
>
> **[7:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=448)** Now, inside the main.js file of the public directory, you'll notice that we defined a set query function that's going to send the user message to the server using the fetch API.
>
> **[7:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=461)** And we're passing fetch the usual method, headers, and body, and we display the assistants response or an error message here in the responseDiv with data.response.
>
> **[7:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=476)** And you'll notice that we are setting the response text initially to, "Assistant is thinking," when the user sends the query, just to give the app a little bit more responsiveness.
>
> **[8:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=487)** All right, so if you start the server by running npm start and then head over to local host 3000 in your browser, you should see the assistant interface.
>
> **[8:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=498)** And from here, you can try entering a query related to the content of your uploaded documents.
>
> **[8:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=506)** So for example, I'll test asking it, what should an employee do if they need to take leave on short notice?
>
> **[8:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=514)** Send that, we see that the assistant is thinking, and I get back the response, "If an employee needs to take leave on short notice, they should notify their manager at least two hours in advance and so on."
>
> **[8:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=529)** It's also referencing the part of the document that it found this information.
>
> **[8:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=534)** In this case, it was in policy.txt.
>
> **[8:57](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=537)** I'll try one more question like, "What should employees do before testing humanoid robots?"
>
> **[9:05](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=545)** And good, "Before testing any humanoid robots, employees should adhere to the following guidelines," and the guidelines are followed below, and this content is found in the guidelines.txt file.
>
> **[9:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=557)** Perfect, so the assistant is processing my query and displaying the response based on the documents I uploaded earlier.
>
> **[9:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=566)** And as you'll notice, to ensure that the application handles errors gracefully, I've included error handling in both the server route as well as the frontend JavaScript to inform the user if something goes wrong.
>
> **[9:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=583)** All right, integrating user input handling and response generation into your web application creates an interactive assistant that can process queries and provide meaningful answers based on your custom knowledge base.
>
> **[9:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=594)** This is a big step toward building a fully functional AI assistant.
>
> **[9:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/handling-user-input-and-generating-responses?u=76281980&t=599)** So nice work.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), const (5), let (4), await (4), interface (3)
> **Code Identifiers:** threadid (11), messagesresponse (3), threadresponse (2), assistant_id (2), allmessages (2)
> **File Paths:** assistant.js (4), index.js (1), index.html (1), main.js (1), policy.txt (1)
> **CLI Commands:** make (2), npm (1)
> **Env Vars:** api (3)
> **Definitions:** is an  (2), is a  (1)
> **Analogies:** for example (2), just like (1)
> **Prerequisites:** set up (2)

#### Customizing assistant responses
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=0)** - [Instructor] You've integrated user input handling into your web application, allowing users to interact with the assistant and receive responses based on your custom knowledge base.
>
> **[0:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=12)** So now I want to enhance the assistant by customizing its responses according to different document types and user inputs.
>
> **[0:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=22)** This will make the assistant more friendly, effective, and even provide a better user experience.
>
> **[0:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=29)** By default, the assistant provides responses, based on the content of the uploaded documents.
>
> **[0:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=36)** However, you might want the assistant to maybe adjust its tone or level of detail based on the document type, for instance, formal, for contracts, maybe more conversational for FAQs and so on.
>
> **[0:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=52)** You also might want it to provide summaries, detailed explanations, or maybe even bullet points depending on the document.
>
> **[1:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=60)** Customizing the assistance's responses can make interactions feel more natural and informative.
>
> **[1:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=66)** So I'm going to customize the assistance's behavior by updating its instructions in assistant.js.
>
> **[1:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=75)** I'll scroll down to the update assistant function where we update the assistant, using the assistants.update function.
>
> **[1:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=85)** The first thing I'll do is, make the assistant a little bit more creative with random responses, using the temperature parameter.
>
> **[1:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=95)** Remember, the temperature parameter takes a value between zero and two.
>
> **[1:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=100)** Higher values like 0.8 makes the output more random, and lower values like 0.2 makes it more focused and deterministic.
>
> **[1:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=111)** So just below the tool resources parameter, I'll add the temperature parameter and let's make it more random and creative by sending it to 1.2.
>
> **[2:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=124)** And then I'll follow that with the instructions parameter to update the assistant's instructions.
>
> **[2:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=131)** I'll set it to a set of back ticks to define a template literal.
>
> **[2:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=139)** And let's start with something, like you are a cheerful and engaging assistant who adapts your responses, based on the document type you're referencing, and that the goal is to inform while delighting users with humor, clarity, and personality.
>
> **[2:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=155)** And below will instruct it, how it should respond.
>
> **[2:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=162)** So first, I'll pass the instructions for how to respond to contract related questions.
>
> **[2:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=170)** I want to have a little fun with this.
>
> **[2:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=172)** So I'm instructing it to summarize the key points in the contract in a tone as formal and insightful as a TED Talk, given by Bill Gates.
>
> **[3:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=181)** I want it to emphasize important obligations, timelines and clauses, and include a quirky metaphor about contracts.
>
> **[3:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=188)** I also provided an example such as this clause is the duct tape holding the deal together.
>
> **[3:14](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=194)** Ha ha.
>
> **[3:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=195)** Below, I'll pass it the instructions for any policy related questions.
>
> **[3:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=202)** Again, I want to have some fun with this.
>
> **[3:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=203)** So I'm telling it to channel Yoda, you must.
>
> **[3:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=207)** So I want it to respond as if it was Yoda, and also to explain implications clearly, given practical examples.
>
> **[3:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=215)** And I want to toss in a relevant nugget of wisdom from your galactic policy archives, whatever that may be.
>
> **[3:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=224)** Next, I'll pass it a set of instructions for any guideline related questions.
>
> **[3:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=229)** For example, reframe the guidelines in plain terms, like a friendly mentor explaining a user manual.
>
> **[3:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=235)** And I want to wrap it up by sharing a lighthearted joke or even a pun about humanoid robots, just to keep it fun.
>
> **[4:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=243)** I even provided an example joke here.
>
> **[4:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=250)** And finally, for any FAQ type questions, I want to take a witty and comedic approach to answering them.
>
> **[4:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=257)** Sprinkle in more puns and humor liberally.
>
> **[4:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=260)** So for example, maybe if it asks something about resetting a password, it'll say something funny and punny in response, and even provide a bonus tip or a fun fact related to the question.
>
> **[4:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=274)** And then I'll add a final set of instructions here saying, "Hey, your mission is just to make things fun and engaging, answer in a helpful way, and make the interactions memorable to the user.
>
> **[4:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=287)** Remember, you're the assistant everyone wishes they had."
>
> **[4:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=295)** All right, so I'm going to open up the terminal and stop running the server here.
>
> **[5:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=301)** And I'm going to update the instructions by calling the update assistant function.
>
> **[5:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=306)** And I'll do that by running just the assistant file with node assistants.
>
> **[5:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=313)** Now let's confirm that the system instructions were updated.
>
> **[5:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=316)** I can do that here in the playground. I'll just refresh it.
>
> **[5:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=320)** And yes, now I am seeing the latest set of instructions.
>
> **[5:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=324)** Great.
>
> **[5:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=327)** Back in my project, I'll do a couple more things such as comment out the call to update assistant.
>
> **[5:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=333)** We no longer need to call that function.
>
> **[5:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=336)** Then run my project again with NPM start.
>
> **[5:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=341)** All right, so with the instructions updated, the assistant can now adjust its responses, based on the content of the documents without needing additional metadata or explicit user intents, for instance.
>
> **[6:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=362)** All right, so back in my app, I'll ask some more questions.
>
> **[6:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=368)** So for example, let's start with a contract related question.
>
> **[6:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=372)** I'll ask it, what are the deliverables and timeline.
>
> **[6:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=377)** And remember, I should get back a response that is insightful as a TED Talk given by Bill Gates.
>
> **[6:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=385)** So let's check it out. All right, good.
>
> **[6:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=388)** I get back a different response and I can confirm that it is in fact, from contact.txt here in the annotation message.
>
> **[6:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=397)** And it says, "Much like a high stakes cooking show where time is of the essence and you don't want to over risk the pie," followed by key deliverables and some content that, yeah, maybe resembles something that might have been written by Bill Gates.
>
> **[6:53](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=413)** Okay, cool. So it is working.
>
> **[6:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=416)** Next, I'll try a policy related question, like, can you explain the confidentiality policy for employees, and let's see how it responds.
>
> **[7:05](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=425)** Remember, with policy texts, it should reply as if it was Yoda, in a wise and simple tone.
>
> **[7:14](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=434)** And good, I'm definitely picking up on some Yoda tones.
>
> **[7:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=437)** For instance, it says, "Safeguard, they must, the prized information."
>
> **[7:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=442)** And it does end with some relevant nuggets of wisdom from the galactic policy archives.
>
> **[7:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=450)** For instance, I'm saying, "Remember, channel the force, you must, to handle company secrets responsibly," and so on and so on.
>
> **[7:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=457)** "Use this newfound knowledge wisely, young padawan."
>
> **[7:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=461)** Great.
>
> **[7:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=463)** I'll ask it a question related to guidelines.
>
> **[7:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=466)** For example, tell me about the setup and connectivity guidelines.
>
> **[7:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=472)** And it should reframe the guidelines in plain terms, like a friendly mentor explaining a user manual.
>
> **[7:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=478)** And I also asked it to share a lighthearted joke or pun about humanoid robots.
>
> **[8:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=484)** And it did.
>
> **[8:05](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=485)** It looks like this is all relevant, friendly, and accurate information.
>
> **[8:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=490)** And then it says, "And to keep it light, why did the humanoid robot apply sunscreen before a big meeting?"
>
> **[8:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=497)** Why?
>
> **[8:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=498)** "Because it wanted to avoid negative rays at all cost."
>
> **[8:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=502)** All right, that was pretty good.
>
> **[8:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=504)** Let's try an FAQ related question.
>
> **[8:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=508)** So I'll pass it a question like, can I apply for a job at XYX Robotics.
>
> **[8:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=515)** And FAQs are a little bit more lighthearted.
>
> **[8:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=517)** They respond in a witty and comedic way.
>
> **[8:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=521)** They also should provide a bonus tip at the end, or a fun fact related to the question.
>
> **[8:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=527)** So let's see.
>
> **[8:48](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=528)** We do get some information about how to apply, and then it says, "It's as delightful and smooth as a human or robot leading a casual jazz dance."
>
> **[8:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=536)** All right, so it looks like it did its job.
>
> **[8:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=539)** Now if you do notice that the assistant isn't fully adhering to the desired response styles, you can further refine the instructions here in assistant.js.
>
> **[9:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=550)** You can provide a clear and specific guidance to help the assistant generate responses that align with your expectations.
>
> **[9:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=556)** So it looks like, it is following the instructions accurately.
>
> **[9:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/customizing-assistant-responses?u=76281980&t=561)** As you'll find, customizing the assistant's responses, based solely on instructions and the content of the documents makes it more versatile, fun, and user friendly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (4), pass (4), this. (2), default, (1)
> **CLI Commands:** make (6), node (1), npm (1), find (1)
> **Analogies:** for instance (4), for example (4), such as (1)
> **Env Vars:** ted (2), faq (2), npm (1), xyx (1)
> **File Paths:** assistant.js (2), contact.txt (1)
> **Versions:** 0.8 (1), 0.2 (1), 1.2 (1)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)

#### Challenge: Implementing streaming responses
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=0)** (ethereal music)
>
> **[0:05](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=5)** - [Instructor] In your application, you've built a system where users submit queries and the Assistant responds after processing the entire output.
>
> **[0:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=15)** While functional, this approach can maybe lead to delays, especially with longer responses like this one.
>
> **[0:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=23)** To enhance the user experience, you can implement streaming responses, which allows the Assistant to send parts of its reply as they become available.
>
> **[0:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=34)** And this makes interactions feel more immediate and engaging.
>
> **[0:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=38)** Streaming lets the AI chat deliver responses incrementally rather than waiting to send a complete reply all at once.
>
> **[0:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=46)** So as you can see here, in the Assistant's playground, users begin seeing the Assistant's answer almost immediately.
>
> **[0:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=55)** So it's similar how messages appear in real time during a live chat.
>
> **[0:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=59)** And you are going to bring this feature into your Assistant.
>
> **[1:05](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=65)** Your task is to modify your Assistant app to support streaming responses from the Assistant to the user.
>
> **[1:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=73)** Download the latest files with this video, and you'll see that I'm providing you with the client side code here in main.js that handles streaming, and your job is to implement the server side functionality using the OpenAI API here in index.js.
>
> **[1:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=92)** So first, in your public main.js file, the client side code has been updated to handle streaming responses, so let's have a look at the latest updates.
>
> **[1:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=103)** In the send query function, I added some code here to read the streamed response here with the constants reader and decoder.
>
> **[1:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=112)** So this first line here gets what's called a reader object from the response body, which allows reading the streamed chunks as they arrive.
>
> **[2:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=123)** And this second line here creates what's called a text decoder, that's going to convert the raw bite chunks into UTF-8 text.
>
> **[2:14](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=134)** Then below, in this for loop, we are continuously reading the data from the response body in small chunks using our reader.
>
> **[2:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=143)** So if the stream indicates it's finished, so if done is true, we exit or break the loop, which is the end of the stream.
>
> **[2:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=153)** Otherwise, we decode the chunk of bytes into text and append it to the responseDiv, showing partial data as it arrives.
>
> **[2:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=167)** So your task for this challenge is to first review the OpenAI documentation on streaming responses using the Assistant's API, and you can start by checking out the Assistant's Streaming section of the API reference.
>
> **[3:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=183)** I'm also including the link to this page with this video.
>
> **[3:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=187)** Here, you can understand how to use the stream parameter, for example, and handle streaming events.
>
> **[3:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=193)** It's super handy for this challenge.
>
> **[3:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=196)** Next, you'll update your query route.
>
> **[3:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=199)** In your index.js file, you're going to modify the query route to support streaming.
>
> **[3:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=206)** So I've cleared out the try block and I'm adding a comment here to indicate where you need to write the code for this challenge.
>
> **[3:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=215)** So in your query route, you'll also need to create and run a thread with streaming.
>
> **[3:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=221)** So it's going to be really helpful to use the OpenAI API docs to create and run a thread with streaming.
>
> **[3:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=229)** Here in the runs slash create and run page of the docs, you can learn a whole lot more about using a function called threads.createAndRun, which helps you create a thread and run it all at the same time in one request.
>
> **[4:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=248)** And I'll also provide you this reference code snippet here as a hint.
>
> **[4:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=252)** So for instance, you can use this for of loop in your query route to process each streaming event.
>
> **[4:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=259)** Finally, be sure to test your Assistant.
>
> **[4:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=262)** Run your server and open the user interface, submit queries, and observe the Assistant's response appearing incrementally, sort of like a typewriter.
>
> **[4:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=273)** Implementing streaming responses in your app is going to improve the user experience, as users will see the replies in real time, making interactions smoother and more engaging.
>
> **[4:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=283)** So if you're ready, I'll leave you to it.
>
> **[4:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=285)** Good luck and have fun.
>
> **[4:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/challenge-implementing-streaming-responses?u=76281980&t=287)** And catch me in the next video for one solution.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), public (1), let (1), super (1), finally, (1)
> **Env Vars:** api (4), utf (1)
> **File Paths:** main.js (2), index.js (2)
> **Code Identifiers:** responsediv (1), createandrun (1)
> **Documentation:** api reference (1), the docs (1)
> **Analogies:** for example (1), for instance (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** open the (1)

#### Solution: Implementing streaming responses
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=0)** - [Instructor] Okay, I hope you found the challenge of implementing streaming responses fun, engaging, and even insightful.
>
> **[0:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=12)** In this video, I'll walk you through one solution to the challenge, which you can compare with your approach.
>
> **[0:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=18)** In the challenge, you were tasked with enhancing your assistant by implementing streaming responses using the OpenAI Assistants API.
>
> **[0:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=27)** The goal was to modify your server-side code to support streaming, which will allow users to receive the assistant's response incrementally as it's generated.
>
> **[0:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=38)** So as you learned in the previous video, I provided you the client-side code that handles streaming, so your focus was updating the server here in index.js.
>
> **[0:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=52)** Within the file, you had to modify the query route to support streaming.
>
> **[0:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=58)** Now, when implementing streaming responses, it is important to set up the server and the client so that data is sent in chunks rather than as a single block.
>
> **[1:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=69)** This way, your users can start seeing the assistant's output immediately without waiting for the entire message to be generated.
>
> **[1:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=76)** So let's go over how I implemented streaming in the query route.
>
> **[1:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=82)** The first thing I did was set the headers to enable streaming responses.
>
> **[1:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=88)** So here in res.setHeader, I added a content type of text/plain, and charset to utf-8, so this ensures the browser interprets the data as UTF eight text.
>
> **[1:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=104)** Now, below in the try block, the magic begins to happen with the createAndRun function I mentioned in the challenge instructions earlier.
>
> **[1:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=115)** So this here is going to create a run with streaming enabled.
>
> **[2:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=120)** The property stream is what's going to enable streaming, and you need to set it to true.
>
> **[2:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=126)** So this is going to tell the OpenAI assistant to begin returning tokens as they are generated rather than waiting for a full completion.
>
> **[2:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=137)** So notice here in createAndRun, we are starting a thread with a message array where the role is user and the content is the user message we're getting from the request body, so it's doing all of that here at once in one function, super handy.
>
> **[2:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=154)** So I hope you're able to figure that part out.
>
> **[2:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=156)** If you did, nice work.
>
> **[2:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=158)** Once we have our stream, we need to read the streaming events, and I'm doing that here in a for of loop, as I hinted at in the previous video, so this should look a little bit familiar.
>
> **[2:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=171)** So in the for loop, we're saying for every event of the stream, and each event may contain partial text here in event?.data?.delta?.content, so we are assigning it to the const content, and if there is no content, then we continue.
>
> **[3:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=190)** Then below, I have another for of loop here, so for each piece, we write out the text to the response.
>
> **[3:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=198)** And notice how I'm using, both here and here, what's called optional chaining with the ?. syntax.
>
> **[3:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=206)** This safely accesses nested properties even if maybe some parts of the object are undefined or maybe null.
>
> **[3:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=213)** So for example here, if event, data, or delta do not exist, it's going to prevent an error by simply returning undefined instead of throwing an error, and the same thing here with chunk?.text?.value.
>
> **[3:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=226)** So finally, once we get each text chunk, we are writing each chunk to the client immediately here with res.write.
>
> **[3:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=235)** This way, the user sees the text as it arrives.
>
> **[3:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=239)** And finally, with res.end, we signal the end of the response once the assistant has completely finished sending all tokens.
>
> **[4:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=249)** All right, so now it's time to test this out.
>
> **[4:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=252)** I'll bring up my app, and I'll enter a query to generate a longer response to observe the streaming effect, so for example, what are the payment terms outlined in the contract?
>
> **[4:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=264)** The assistant is thinking, and it immediately starts sort of typing out the response as the text chunks arrive.
>
> **[4:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=273)** Awesome, it worked.
>
> **[4:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=276)** I'll try another question related to the company policy.
>
> **[4:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=279)** What does the policy say about taking leave on short notice?
>
> **[4:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=286)** And there we go, perfect.
>
> **[4:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=287)** Let's try another one related to guidelines and so on.
>
> **[4:53](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=293)** So awesome, we're seeing that the assistant's response is appearing incrementally here as well, with the text being displayed as it's generated.
>
> **[5:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=301)** This way I don't have to wait for the entire response to be completely done before reading it.
>
> **[5:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=307)** And if your solution differs from my approach, that is totally okay.
>
> **[5:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=312)** As you know, there are often multiple ways to achieve the same results.
>
> **[5:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=316)** Really the key takeaway is to understand how streaming works and how to implement it.
>
> **[5:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=322)** Now, you may have noticed that the text we get back is not all that readable.
>
> **[5:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/solution-implementing-streaming-responses?u=76281980&t=327)** We get this sort of big block of text, so to make the text appear more readable, we are going to work a little bit more with our assistant code in a following video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), finally, (2), super (1), const (1)
> **Code Identifiers:** createandrun (2), setheader (1)
> **Env Vars:** api (1), utf (1)
> **Cross-References:** previous video (2)
> **Analogies:** for example (2)
> **File Paths:** index.js (1)
> **CLI Commands:** make (1)
> **Prerequisites:** set up (1)

#### Controlling token length and formatting
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=0)** - [Instructor] You've already built a system where users submit queries and the assistant responds in real time.
>
> **[0:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=8)** Now let's refine it further by limiting the response length and making the displayed text more readable.
>
> **[0:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=15)** This helps ensure your users get concise, well formatted answers without the assistant sort of rambling on and on.
>
> **[0:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=23)** As your assistant interacts with users, it's important to make sure that the responses are both accurate and well presented on the page, and also not overwhelmingly long.
>
> **[0:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=33)** Currently we're just getting back one giant block of text, for example.
>
> **[0:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=38)** So first, let's update the assistance instructions here in assistant.js to limit the response to be more concise.
>
> **[0:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=49)** I'll scroll down to the update assistant function where we are updating the assistant using the assistants.update function, and I'll update the instructions parameter to include a new set of instructions.
>
> **[1:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=62)** In fact, I'll replace the last paragraph here with instructions that say, limit your complete responses to a maximum of 250 words unless the user explicitly asks for more detail.
>
> **[1:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=77)** All right, I'll run the latest updates here in my console, so I'll stop running the server and comment out the call to my update assistant function, save the file and run it with nodeassistant.js.
>
> **[1:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=90)** Then I'll comment it back out.
>
> **[1:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=92)** Then run my server again with NPM start.
>
> **[1:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=96)** Next, the max completion tokens parameter allows you to limit the number of completion tokens.
>
> **[1:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=104)** That is words or word pieces that the assistant can use over the course of one run.
>
> **[1:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=111)** This helps control the length of the assistance replies, for example.
>
> **[1:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=115)** That way you can prevent overly long or verbose answers.
>
> **[1:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=119)** And most importantly, reduce processing time and resource usage.
>
> **[2:05](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=125)** So over in my index.js file, I'll modify this server side code to include the max completion tokens parameter when creating a run to keep the response shorter.
>
> **[2:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=139)** So here in my tri block where I'm creating and running a thread, I'll just add a new parameter below stream called max_completion_tokens, and I'll set it to a value like 300.
>
> **[2:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=155)** So this is going to put a hard cap on tokens, which is going to limit the response length.
>
> **[2:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=162)** All right, so now I'll test these changes over in my assistant.
>
> **[2:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=166)** I'll ask it a question like, can you provide an overview of the company's confidentiality policy?
>
> **[2:53](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=173)** And in this case, the response does seem a little bit shorter.
>
> **[2:57](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=177)** We can edit the max completion tokens parameter to a smaller value.
>
> **[3:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=182)** So for instance, 250 completion tokens, and try it again to see if that changes anything.
>
> **[3:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=191)** And it's about the same.
>
> **[3:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=193)** As you can see, it's actually cutting off the final sentence.
>
> **[3:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=196)** So I'll keep the max completion tokens value at 300, and let's go ahead and work with that.
>
> **[3:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=203)** Now, on the client side, we can prevent the assistant from displaying one large block of text.
>
> **[3:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=210)** And we can do that by, for example, replacing any new line characters with BR tags.
>
> **[3:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=218)** And I'll apply those changes in my client side JavaScript.
>
> **[3:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=222)** So in my public directory, I'll open up the main digest file and scroll down to my while loop here where I'm reading the data from the response body in small chunks.
>
> **[3:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=234)** So the first thing I'll do is change this chunk constant to a let variable, because we are going to be reassigning it a new chunk where the new line characters are replaced with BR tags.
>
> **[4:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=251)** So right below I'll say chunk equals, then we want to chunk.replace, and then here we'll add a little bit of regex that replaces any new line with BR tags, just like that.
>
> **[4:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=269)** And the other change I want to make here is instead of a pending text content to the dom, we'll replace it with inner HTML.
>
> **[4:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=280)** That way we're appending HTML to the dom, and we're using text content and a couple other places here.
>
> **[4:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=286)** So I'll just replace it above and anywhere else we're using it.
>
> **[5:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=301)** All right, there we go. We're all set.
>
> **[5:05](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=305)** So as I mentioned, this code here is going to replace any new lines with VR tags, which will insert line breaks.
>
> **[5:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=312)** That way your stream text will appear more naturally formatted instead of one large block for better readability.
>
> **[5:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=321)** Now to go back and test these changes.
>
> **[5:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=324)** So I'll ask the assistant, "Hey, can you provide an overview of the company's confidentiality policy?"
>
> **[5:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=328)** Once again, and let's check it out. Okay.
>
> **[5:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=332)** The assistant's response seems a little bit more concise and within the token limit, and great, the lines are appearing as separate lines or with BR breaks on the page.
>
> **[5:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=344)** Now, if you find that the assistant returns more lines than you'd like, you can lower the max completion tokens value or even refine the instructions to be a little bit more stricter about the formatting.
>
> **[5:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=354)** All right, let's ask it another question, like, "Explain the main points of the contract."
>
> **[6:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=362)** Okay, that looks great.
>
> **[6:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=363)** It's displaying the list as numbered list items.
>
> **[6:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=368)** And in fact, you can see that it is cutting off the final line here.
>
> **[6:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=372)** So I can adjust this with a higher max completion tokens value, for example, but I might follow up with something else related to the contract, such as, "What about deliverables and timelines?"
>
> **[6:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=384)** And when you interact with the assistant, you'll always notice how the assistant references previous message to provide a coherent response.
>
> **[6:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=391)** So it has full information about the conversation history.
>
> **[6:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=397)** Okay, so as you learned, limiting the response length through both max completion tokens and explicitly setting the word limit in the instructions and formatting your text in the browser produces better, more readable multi-line responses.
>
> **[6:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/controlling-token-length-and-formatting?u=76281980&t=416)** That way users are overwhelmed by massive blocks of text.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (3), case, (1), public (1)
> **Analogies:** for example (4), for instance (1), just like (1), such as (1)
> **CLI Commands:** make (2), npm (1), find (1)
> **File Paths:** assistant.js (1), nodeassistant.js (1), index.js (1)
> **Env Vars:** html (2), npm (1)
> **UI Navigation:** scroll down (2)
> **Code Identifiers:** max_completion_tokens (1)
> **Speakers:** - [instructor] (1)


### 3. Advanced Features and Debugging

#### Introduction to the Code Interpreter
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=0)** - [Instructor] So far, you've built quite a powerful assistant chat tool capable of handling user queries with streaming responses and even advanced search capabilities.
>
> **[0:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=10)** Now I'll teach you how to unlock a new feature of the assistant's API, code interpreter.
>
> **[0:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=16)** As you can see here in the docs, the assistant API offers various tools you can work with.
>
> **[0:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=21)** For instance, we've already had a look at the file search tool.
>
> **[0:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=25)** Now, code interpreter enables your assistant to run Python codes securely in an isolated environment.
>
> **[0:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=33)** With this capability, your assistant can solve mathematical problems or equations, manipulate and analyze data provided by the user, also execute code on the fly.
>
> **[0:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=44)** If you integrate the code interpreter, you're essentially giving your chat tool a mathematical virtual brain that can handle complex tasks beyond simple text responses.
>
> **[0:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=54)** So now I'll get into how you might enable the code interpreter tool in your assistant.
>
> **[1:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=60)** I'll head back to my project and open the file assistant.js, and I'm going to update my existing assistant here in the update assistant function.
>
> **[1:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=72)** The first thing I'm going to do is add the tools parameter to pass my assistant the code interpreter tool.
>
> **[1:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=81)** So I'll set tools to an array holding an object.
>
> **[1:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=86)** Now I still want my assistant to have the file search tool, so I'm going to include it here just to ensure that my assistant is still enabled with that tool.
>
> **[1:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=96)** But I'll pass it a second object this time with a type of code interpreter to then enable the code interpreter tool within my assistant.
>
> **[1:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=107)** So I'll say code_interpreter.
>
> **[1:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=112)** Alright, the next thing I'll do is pass it some new instructions to let my assistant know about its new mathematical or data analysis capabilities.
>
> **[2:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=124)** So here as the instructions value, I'll scroll down to the bottom and add a new block of instructions for mathematical or data analysis queries.
>
> **[2:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=136)** So I am instructing it to act as a personal math tutor, and when asked a math question write and run code to answer the question, I also wanted to provide clear explanations of the solution.
>
> **[2:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=149)** Also, for this demo, I want to take down the temperature parameter to about 0.8 to make the responses a little bit more predictable and focused.
>
> **[2:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=161)** Okay, so what I'll do is update my assistant by calling the update assistant function.
>
> **[2:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=170)** I'll do that by running my file with node assistant.js here in the terminal.
>
> **[2:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=178)** I'll comment out the function again and then run my project.
>
> **[3:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=184)** I can also confirm that the code interpreter is enabled here in the playground.
>
> **[3:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=188)** So here in my assistant, I can see that the code interpreter is currently turned off, but when I refresh the page, I see that code interpreter is now enabled.
>
> **[3:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=199)** Great, so now let's check out how the assistant can execute some complex math problems, for example.
>
> **[3:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=209)** So back in my app, I'll enter a query like what is the factorial of five?
>
> **[3:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=214)** And the assistant is going to decide when to use the code interpreter based on the user's input.
>
> **[3:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=222)** The assistant is thinking as usual, and it responds by saying that the factorial of five is 120, awesome.
>
> **[3:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=230)** And it makes it a little bit fun by saying it's like gathering a party of numbers and watching them multiply into a crayon total of fun, cool.
>
> **[3:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=239)** Alright, let's give it a more complex question such as can you compute the 10th number in the Fibonacci sequence?
>
> **[4:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=250)** And good, it says that the 10th number in the Fibonacci sequence is 55, awesome.
>
> **[4:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=256)** Now, I'll provide it a geometry related question, like what is the area of a circle with radius five?
>
> **[4:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=264)** So I might expect an answer such as 25 pi or approximately 78.5, and that's what I get.
>
> **[4:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=270)** It says that the area of a circle with a radius of five units is approximately 78.54 square units.
>
> **[4:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=278)** Now so far we've been asking our assistant some fairly simple questions that maybe the assistant can respond without code interpreter.
>
> **[4:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=289)** As you'll learn in an upcoming video, you'll use the code interpreter to perform tasks that might require actual computation or more data processing, for example, if your query involves any file manipulation or data analysis.
>
> **[5:05](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=305)** For instance, I might ask it a tricky Python related question.
>
> **[5:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=310)** Can you implement the quick sort algorithm in Python and sort the following list?
>
> **[5:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=316)** And behind the scenes, it's using the code interpreter tool to run Python code.
>
> **[5:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=323)** And good, now I get back the sorted list, here it is.
>
> **[5:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=327)** As you learn, enabling the code interpreter significantly expands your assistance capabilities.
>
> **[5:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/introduction-to-the-code-interpreter?u=76281980&t=332)** It can now handle complex calculations and provide more dynamic code-based responses, making it more powerful and versatile.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), pass (3), let (3), require (1)
> **Analogies:** for instance (2), for example (2), such as (2), it's like (1)
> **CLI Commands:** python (4), make (1), node (1)
> **Versions:** 0.8 (1), 78.5 (1), 78.54 (1)
> **File Paths:** assistant.js (2)
> **Env Vars:** api (2)
> **UI Navigation:** open the (1), scroll down (1)
> **Code Identifiers:** code_interpreter (1)

#### Leveraging Code Interpreter for data analysis and iterative problem solving
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=0)** - [Instructor] You've learned about the Code Interpreter tool, which enables the assistant to execute code and even solve math problems.
>
> **[0:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=7)** Now, I'll take things a step further by exploring how the assistant can perform more advanced data analysis.
>
> **[0:14](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=14)** You'll learn how to upload data files, process them, and even generate insightful summaries and statistics.
>
> **[0:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=20)** First, to enable the assistant to analyze data you'll start by uploading a data file it can work with.
>
> **[0:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=27)** So, be sure to prepare your data file, and here are some helpful tips for that.
>
> **[0:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=32)** The API supports common data files like CSV, JSON, text files and PDF files.
>
> **[0:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=38)** So, make sure that your data files are well structured.
>
> **[0:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=41)** For example, CSV files should have headers and consistent delimiters.
>
> **[0:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=47)** I'm going to use this sample dataset I've added in my documents folder called sales_data.csv containing some sales records for the fictitious XYZ Robotics Company.
>
> **[1:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=60)** The CSV file includes data such as date, region, product, quantity sold, unit price, total sales, and salesperson.
>
> **[1:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=69)** And here's what that data might look like in a spreadsheet, for example.
>
> **[1:14](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=74)** As you can see, it's quite a bit of data to analyze.
>
> **[1:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=78)** So, now I'm going to use the OpenAI API to upload this file to the assistant.
>
> **[1:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=85)** Now, I could do that in upload.js, for example.
>
> **[1:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=89)** I can upload the file using openai.files.create, then associate that file with my assistant using the file ID.
>
> **[1:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=98)** But what I'll do is upload the file here in my Assistants Playground.
>
> **[1:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=104)** So, I'll scroll down to Code Interpreter and click on Add Files, and now I can drag and drop my sales_data.csv file into this window here.
>
> **[1:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=118)** Once the file finishes uploading click Attach, and that's going to attach the sales_data.csv file to the Code Interpreter.
>
> **[2:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=131)** All right, the next thing I'm going to do is update my Assistants instructions.
>
> **[2:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=136)** So, back in my project I'll open up assistant.js, and here in my updateAssistant function I'll update the instructions.
>
> **[2:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=147)** So, first, I'll just replace the first couple of sentences.
>
> **[2:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=152)** I'll say you are a cheerful and engaging assistant who adapts your responses based on the document type or query, and here is how you should respond.
>
> **[2:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=160)** So, everything else should stay the same.
>
> **[2:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=163)** The only thing I'm going to add is a line under Mathematical or Data Analysis Queries.
>
> **[2:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=172)** I'll say when asked a data-related question use Code Interpreter to analyze the data and provide actionable insights.
>
> **[3:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=183)** All right, as usual, I'll run the latest assistant updates by calling my updateAssistant function.
>
> **[3:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=191)** Then in the terminal run the file with node assistant.js.
>
> **[3:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=200)** I'll run my project again.
>
> **[3:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=204)** And what I need to do next is update my query route here in index.js.
>
> **[3:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=210)** And I need to pass the file to my assistant when I create and run a thread here in the createAndRun function.
>
> **[3:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=222)** So, notice back in my Playground if I click on my sales_data.csv file there is a file ID associated with the file.
>
> **[3:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=231)** So, I'll go ahead and copy that and pass that ID to my assistant when I create and run the thread.
>
> **[3:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=239)** So, first, I'll just go ahead and save that ID in a const I'll name dataFileID.
>
> **[4:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=249)** Again, normally you might save this ID in a database or in the session, for instance.
>
> **[4:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=256)** I'm just keeping things simple and saving it here in my query route handler.
>
> **[4:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=261)** All right, and the next thing I need to do is pass the tool resources with the Code Interpreter and the file ID that I want to associate with the Code Interpreter tool.
>
> **[4:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=272)** So, just above the thread parameter I'll add the tool_resources parameter and set it to an object.
>
> **[4:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=280)** And within that object I want to define a new object for Code Interpreter, just like that.
>
> **[4:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=289)** And then I need to list the file IDs that I want to pass to the Code Interpreter.
>
> **[4:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=294)** And remember, we do that with the file_ids parameter, set it to an array, and the array should contain the file IDs.
>
> **[5:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=303)** In this case, I want the ID stored in the dataFileID variable.
>
> **[5:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=310)** There we go.
>
> **[5:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=312)** Now, the one thing to keep in mind is that when you are performing data analysis with Code Interpreter, for instance, that does consume more tokens.
>
> **[5:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=322)** So, I'm going to increase the max_completion_tokens value to let's say 550.
>
> **[5:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=331)** All right, so with the data file uploaded and passed to the assistant let's see how the Assistants API can analyze it.
>
> **[5:40](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=340)** So, first, I'll ask the assistant to analyze the data with a query that says analyze the sales data I uploaded and provide the total sales by region.
>
> **[5:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=359)** And the assistant starts using the Code Interpreter to process the data.
>
> **[6:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=366)** Now, if something doesn't seem quite right, as you can see, it lets you know to please hold on while I process the file for the data analysis, and then it follows that with the breakdown of the total sales by region.
>
> **[6:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=379)** And it does it as if the sales data were touring the continent.
>
> **[6:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=382)** So, here we can see Africa, Asia, Australia, Europe, North America, and South America.
>
> **[6:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=389)** Next, I'll increase the max tokens to a higher number, like 1,000, and ask my assistant which product had the highest total sales overall in the sales data.
>
> **[6:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=404)** And good, it says that the highest total sales overall is the Humanoid Robot A, which made over $90 million.
>
> **[6:53](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=413)** And finally, how about we identify the top sales person based on total sales.
>
> **[7:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=421)** All right, it seems like there was a bit of a hiccup with the column names in the file, but Code Interpreter figured it out.
>
> **[7:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=427)** It says that the spotlight shines on Ellen Schaefer with top total sales hitting the impressive amount of over $2 million.
>
> **[7:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=438)** So, awesome, by leveraging the Code Interpreter your assistant can now perform advanced data analysis.
>
> **[7:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=445)** This significantly expands its capabilities, allowing for even more dynamic and insightful interactions.
>
> **[7:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=452)** So, go ahead and try asking your assistant to perform different analysis on your data, but always ensure that any data you upload doesn't contain sensitive information.
>
> **[7:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=463)** Also, consider updating your application to handle visual outputs if needed.
>
> **[7:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=467)** So, for instance, let's say you want your assistant to generate a chart or some other type of data visualization.
>
> **[7:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/leveraging-code-interpreter-for-data-analysis-and-iterative-problem-solving?u=76281980&t=475)** All right, so you've empowered your assistant to handle complex data analysis tasks, making it an even more powerful tool.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), function (3), let (3), const (1), case, (1)
> **Code Identifiers:** sales_data (4), updateassistant (2), datafileid (2), createandrun (1), tool_resources (1)
> **Env Vars:** api (3), csv (3), json (1), pdf (1), xyz (1)
> **File Paths:** sales_data.csv (4), assistant.js (2), upload.js (1), index.js (1)
> **Analogies:** for example (3), for instance (3), such as (1), just like (1)
> **UI Navigation:** click on (2), scroll down (1), drag and drop (1)
> **CLI Commands:** make (1), node (1)
> **Definitions:** is a  (2)

#### Integrating function calling
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=0)** - [Instructor] Right now you're going to enhance your assistant by integrating it with an external API using the assistance API function calling feature.
>
> **[0:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=10)** We're going to define a function that fetches weather data, implement an in our code and enable the assistant to call the function when appropriate.
>
> **[0:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=20)** So function calling.
>
> **[0:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=21)** If you read the documents here, you'll learn that it allows the assistant to call functions in your code base, letting it perform actions or fetch data it couldn't otherwise.
>
> **[0:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=32)** It provides real time data to users which enhances the assistant's usefulness and it keeps the assistant focused on conversation while your code handles specific tasks.
>
> **[0:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=44)** So to demonstrate function calling, I'm going to use the Explore California weather API, which you can check out at [explorecalifornia.org](https://explorecalifornia.org).
>
> **[0:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=55)** This API is going to give you a fake five day weather forecast for over 7,000 cities around the world.
>
> **[1:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=63)** So you can search by the city for instance, here's an example of an endpoint that searches some fake weather data from Miami.
>
> **[1:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=71)** So here's the five day weather forecast, JSON data.
>
> **[1:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=76)** When you download the latest starter files with this video, you'll find a new file in your project named Functions.js.
>
> **[1:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=84)** So here I've implemented a function named Get Weather Forecast.
>
> **[1:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=90)** It's a function that, as I mentioned, fetches weather data from [explorecalifornia.com](https://explorecalifornia.com)'s weather/city endpoint.
>
> **[1:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=99)** And here it takes city as a parameter.
>
> **[1:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=102)** It does the usual JSON parsing and returns a string with the weather forecast details for up to five days.
>
> **[1:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=110)** And as usual, if an error occurs, it's going to return a simple apology message.
>
> **[1:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=116)** Now you'll notice that it's returning the weather forecast in a well formatted way.
>
> **[2:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=121)** So for example, a formatted date using the day.js library and then it's followed by a description and the high and low temperatures all in a nice looking list and you'll see how that looks in just a bit in our assistance reply.
>
> **[2:20](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=140)** Now I am exporting the function here because we're going to need to import it in index.js so our assistant can call it using the function calling feature.
>
> **[2:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=151)** So the first thing I'll do is create an entirely new assistant here in assistant.js.
>
> **[2:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=158)** So I'm using OpenAI.betaassistance.create to create my assistant.
>
> **[2:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=164)** I've named it weather search and I'm using the GPT-40 model.
>
> **[2:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=170)** So go ahead and quickly create that by commenting out my call to create assistant.
>
> **[2:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=175)** I'll stop running my app and in the terminal run the file with node assistant.js.
>
> **[3:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=183)** Okay, great.
>
> **[3:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=184)** So we've created the assistant and I'll go ahead and copy the assistant ID and simply assign it to the assistant ID variable up top for use later here in Index.js.
>
> **[3:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=196)** The next thing I need to do is register the Get Weather Forecast function with the assistant API.
>
> **[3:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=204)** So for example, the assistant must know its name, a description and the parameter schema.
>
> **[3:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=212)** In other words, the parameters the function takes so that it can pass it to the function when it calls it.
>
> **[3:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=218)** Now to do that, it usually involves a pretty verbose function definition.
>
> **[3:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=223)** As you can see here in the docs, you pass the assistant a tools array, that's type function and then a function parameter.
>
> **[3:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=232)** That's an object with the function definition here.
>
> **[3:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=235)** Now what's great is that you can quickly create the definition in the assistance playground.
>
> **[4:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=240)** So over in my playground, I'll refresh to make sure that my weather assistant is all set up.
>
> **[4:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=246)** Yep, here we go.
>
> **[4:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=251)** It's this one right here with an ID that ends in CZY.
>
> **[4:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=257)** Yep.
>
> **[4:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=259)** And here I can scroll down and click on the add functions.
>
> **[4:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=264)** And this is what's going to let you add your function definition.
>
> **[4:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=270)** I can describe what my function does or better yet, I can paste in my function code here for the AI to evaluate and generate.
>
> **[4:41](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=281)** So I'll do just that.
>
> **[4:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=282)** I'll click generate.
>
> **[4:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=284)** And here in the popup it says, describe what your function does or just paste your code in there and we'll generate the definition.
>
> **[4:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=290)** So I'll head back to my project files, I'll copy everything in functions, digest, paste it here, and just click create.
>
> **[5:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=301)** Okay, great. So here's the function definition it generated.
>
> **[5:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=304)** As you can see, it's an object with a name property set to the function name has a description and you'll notice that it has strict set to true, which as you can see here, ensures that the model's response always follows the schema you've set.
>
> **[5:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=321)** And then it says that it has some required parameters.
>
> **[5:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=323)** One of those is city and that type is a string.
>
> **[5:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=328)** And then the parameter is the name of the city for which you want to retrieve the weather forecast.
>
> **[5:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=332)** Perfect.
>
> **[5:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=334)** So next I need to update the assistant so it knows about my Get Weather Forecast function and then it can call it whenever it's asked for weather information for example.
>
> **[5:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=345)** And it does that using this function definition we've set.
>
> **[5:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=349)** So what I'll do is copy this function definition and head back to my assistant such as file.
>
> **[5:58](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=358)** And I'll quickly comment out the call to create assistant and paste in a function to update my assistant with some instructions and also the tools array with the function definition.
>
> **[6:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=371)** Okay, so to update our assistant, we'll pass a few properties here to this object.
>
> **[6:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=376)** The first will be the instructions parameter, which I'll get to in just a bit.
>
> **[6:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=386)** The most important part here is this tools parameter that I'll set to an array and within that array, an object.
>
> **[6:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=396)** Now I want this tool to be of the type function
>
> **[6:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=405)** and below I need to set a function parameter set to an object.
>
> **[6:50](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=410)** And within that is where I paste in the function definition defined here.
>
> **[7:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=421)** There we go.
>
> **[7:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=423)** So again, we're telling our assistant, Hey, you need to enable the function calling tool.
>
> **[7:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=429)** And anytime you're asked about weather, you are going to call this function named Get Weather Forecast.
>
> **[7:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=437)** And it only requires one parameter, which is city, and that city parameter is a string.
>
> **[7:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=445)** Okay, now let's update the assistance instructions.
>
> **[7:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=449)** So what I'll do is just paste in a new set of instructions here and these instructions say you are a helpful assistant that can only provide weather information by calling the Get Weather Forecast function.
>
> **[7:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=464)** When a user asks for the weather in a particular location, call that function with the correct city parameter to retrieve a forecast.
>
> **[7:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=471)** And then for any non weather topics, just feel free to answer normally.
>
> **[7:57](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=477)** Now let's run this file and apply the latest updates to the assistant.
>
> **[8:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=484)** I'll do that here below by calling my update assistant function and then running this file in the terminal.
>
> **[8:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=496)** Assistant updated and I'll comment it out again just so that we don't accidentally update the assistant when we run the project.
>
> **[8:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=505)** Now just to confirm that it was in fact updated, I'll go back to my assistant's playground, refresh it and see if my system instructions were updated.
>
> **[8:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=515)** Yes.
>
> **[8:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=517)** And also under functions I do see my Get Weather Forecast function registered with my assistant.
>
> **[8:42](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=522)** Fantastic.
>
> **[8:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=525)** Now I'll go back to my project and run it with NPM start.
>
> **[8:51](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=531)** And if I head over to my assistant and then ask it a question such as, hi there, how are you doing?
>
> **[8:57](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=537)** For example.
>
> **[8:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=539)** It should work as expected.
>
> **[9:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=542)** Okay, great. It says Hello, how can I assist you today?
>
> **[9:05](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=545)** But if you ask it a weather related question such as weather in Miami, since it now knows it needs to call a function to fetch that weather data, it tries to call it.
>
> **[9:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=557)** And then I get an error connecting to the server.
>
> **[9:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=561)** So this happens because when you ask it a weather related question, the status of the assistant enters into a requires action status.
>
> **[9:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=571)** So we need to handle that.
>
> **[9:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=573)** And then how to reply back to the user once it fetches the data from the API.
>
> **[9:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=579)** So we'll do that here in Index Digest, handle the conversation with the user.
>
> **[9:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=586)** The first thing I'll do is import my Get Weather Forecast function from the functions.js file here up top.
>
> **[9:55](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=595)** There we go.
>
> **[9:57](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=597)** Then I'm going to write some code to handle the user message and then figure out if it needs to call the Get Weather Forecast function and how to reply back to the user.
>
> **[10:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=608)** So I'll scroll down here in my tri block and just below where we're creating the thread with create and pull and running it, I'm going to add a while loop.
>
> **[10:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=622)** So while the run needs function outputs, we're going to handle them.
>
> **[10:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=628)** So here's my while loops.
>
> **[10:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=630)** It will say, while the run status with run.status strictly equals requires action, remember that's the status that requires action like function calling and fetching data from a weather API.
>
> **[10:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=647)** So while the status requires some action, we'll do something here in the while loop.
>
> **[10:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=654)** And the while loop indicates that the assistant needs to provide function outputs before it can continue.
>
> **[11:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=660)** So first we'll check for tool calls.
>
> **[11:04](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=664)** So I'll declare a cons of calls, and we are going to check for a tool calls array, which is an array of function calls the assistant wants to make.
>
> **[11:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=676)** So I'll go ahead and just paste in some code here for that.
>
> **[11:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=679)** Again, we're using optional chaining.
>
> **[11:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=682)** Now each call includes the function name, an argument.
>
> **[11:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=686)** So we look inside run required action, submit tool outputs, tool calls, which is pretty verbose I know.
>
> **[11:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=695)** And if it's missing or empty, we'll break out of the loop because there are no calls to handle.
>
> **[11:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=703)** So we'll just say or and set it to an empty array.
>
> **[11:47](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=707)** And then below, as I mentioned, we'll do, if there are no calls, then we will break out.
>
> **[11:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=716)** All right, so the next thing I'll do is build an array of tool outputs.
>
> **[11:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=719)** So I'll call that array tool outputs and assign it an empty array initially.
>
> **[12:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=728)** And then we need to iterate over each call in tool calls.
>
> **[12:12](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=732)** So I'll do that with a for of loop.
>
> **[12:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=736)** So we'll say for const call of calls and we will do something here for that.
>
> **[12:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=746)** I'm going to go ahead and paste some code inside this for of loop, then explain it step by step.
>
> **[12:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=754)** Okay, so this is quite a bit of code.
>
> **[12:36](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=756)** Let's go over what's happening here.
>
> **[12:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=758)** So again, we're iterating over each call and tool calls and we are parsing the JSON arguments.
>
> **[12:48](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=768)** Now if arguments is missing or invalid, we fall back to an empty object and below we are checking the function name here with this if L statement.
>
> **[13:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=781)** So if the function name is Get Weather Forecast, we call here our Get Weather Forecast function, passing at the city argument and storing the resulting string in the output.
>
> **[13:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=795)** Otherwise we just say function is not implemented.
>
> **[13:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=799)** And notice how we are pushing an object here with a tool call ID and output into our tool outputs array.
>
> **[13:28](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=808)** So each function call gets exactly one corresponding output.
>
> **[13:33](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=813)** Okay, so there's one more step and that is to submit the tool output.
>
> **[13:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=818)** So still here within the while loop, I'll paste in some code and then explain it.
>
> **[13:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=824)** So here we are reassigning the run, we are sending the array of tool call outputs to the assistant.
>
> **[13:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=832)** So the assistant merges those outputs into its conversation context and decides if it needs more function calls or if it can produce a final answer.
>
> **[14:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=842)** So notice how we're using the runs dot submit to tools, output and pull function for that passing it, the threat ID as well as the run ID.
>
> **[14:13](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=853)** Now this method is going to pull the run again, returning an updated run object with the new status.
>
> **[14:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=861)** If the assistant is still not done, run status, for example might be requires action again.
>
> **[14:26](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=866)** And then we keep looping and when it finally reaches completed, we're done.
>
> **[14:30](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=870)** So no more function calls are needed and we can retrieve the final message to what's happening here.
>
> **[14:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=877)** If front status is completed, we are done and then we are sending the final text here as the response.
>
> **[14:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=885)** All right, so why does all of this code matter?
>
> **[14:49](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=889)** Well again, the assistant indicates it needs real-time data by setting its status to requires action.
>
> **[14:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=896)** Then we interpret the function calls it wants with tool calls, we run those calls locally and submit the results and we keep doing it over and over again.
>
> **[15:07](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=907)** So the assistant finally says it's completed.
>
> **[15:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=910)** And this allows the assistant to incorporate your function outputs in its final text.
>
> **[15:17](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=917)** All right, I'll open up the terminal to run my project with the latest changes, then ask my assistant, "what's the weather in Miami?"
>
> **[15:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=927)** And I get an air fetching the response.
>
> **[15:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=931)** So it looks like I'm missing a required parameter that should be explicitly named tool outputs.
>
> **[15:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=938)** And here using the object property shorthand, I am only passing the property tool outputs like that.
>
> **[15:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=946)** So to fix that I can add a property here named tool outputs and set it to the tool outputs array.
>
> **[15:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=954)** And that should fix it.
>
> **[15:56](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=956)** Now again, saying something like Hi there, should work as expected and it does.
>
> **[16:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=963)** So what if I ask it, "what is the weather in Chicago?"
>
> **[16:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=969)** All right, and now the assistant says that it cannot fetch the weather forecast for Chicago.
>
> **[16:14](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=974)** Well that's interesting and I think I know what's going on.
>
> **[16:18](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=978)** See if you can figure it out.
>
> **[16:21](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=981)** Well notice how our function is named Get weather Forecast.
>
> **[16:27](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=987)** But if you have a look at assistant Jess where we had AI write the function definition for us, notice the name is set to Get Weather Forecast.
>
> **[16:39](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=999)** So it's not able to call the function because it cannot find a function defined like this.
>
> **[16:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1005)** So what I need to do is update the name parameter here in assistant.js to Get Weather Forecast just like this written with Camel case and then update my assistant with the correct name.
>
> **[16:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1019)** So I'll stop running my app and then just run node assistant.js once again to update my assistant and comment that out.
>
> **[17:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1029)** I'll go ahead and run my up again with NPM start.
>
> **[17:14](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1034)** All right, so now if I go back and ask it a weather related question like what's the weather in Chicago, that should work.
>
> **[17:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1042)** It worked.
>
> **[17:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1043)** I can back my five day weather forecast for Chicago.
>
> **[17:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1045)** So here we have everything from a partially cloudy day to watching up for storms and then finally a partially cloudy day with a high of 68 in low of 56.7.
>
> **[17:37](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1057)** Good.
>
> **[17:38](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1058)** How about I say weather in Miami and see if that works too.
>
> **[17:43](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1063)** And it does.
>
> **[17:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1064)** So the assistant does recognize that it should fetch weather data.
>
> **[17:48](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1068)** It initiates a function call to Get Weather Forecast.
>
> **[17:52](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1072)** The assistant then calls it passing it the Miami string as a parameter, it gets the forecast and returns it back to me.
>
> **[18:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1080)** Nice.
>
> **[18:01](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1081)** Now you'll notice that for this demo I changed the response back to non streaming to keep the code much simpler.
>
> **[18:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1086)** So that's why the response doesn't appear incrementally as it did before when we enabled streaming.
>
> **[18:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1091)** All right, next, how about a question like whether in Austin, Texas this time including the state, you'll notice how it often can't fetch the weather data when we include the state like Austin, Texas, or even Austin TX, but we can fix this by updating the assistance instructions.
>
> **[18:34](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1114)** So back in assistant.js, I'll scroll up here to my update assistant function and just add some important instructions here.
>
> **[18:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1126)** Say if the user says Miami comma Florida, for example, or Austin, TX or even Toronto, Ontario, Canada, you must pass only the city like Miami or only Austin or Toronto to the function and that it should remove any states, provinces, countries, or any extra text.
>
> **[19:05](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1145)** If the user does not mention a city at all, just ask for a city.
>
> **[19:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1148)** Okay, let's see if this will work.
>
> **[19:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1151)** So I'll stop running my app and update the assistant once again with node assistant.js, then run my project again with NPM start.
>
> **[19:24](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1164)** And I always like to go back to the assistant playground and check out the system instructions to confirm that it was updated and good.
>
> **[19:31](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1171)** Here we go. It was updated.
>
> **[19:32](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1172)** All right, so now I'll once again try asking it whether in Austin, Texas, Hey, hey.
>
> **[19:44](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1184)** And there we go. It worked.
>
> **[19:45](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1185)** I might even say something like whether in Boston Mass or Miami, Florida and so on.
>
> **[19:53](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1193)** And it now should work exactly as expected and indeed it does.
>
> **[19:59](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1199)** Here is the five day weather forecast for Boston, even Austin TX without the comma for instance.
>
> **[20:06](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1206)** And hopefully it should recognize the city of Austin.
>
> **[20:10](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1210)** All right, great.
>
> **[20:11](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1211)** So now you have a simple function calling demo that takes a single parameter, which is a city and the assistant automatically calls to Get Weather Forecast function when asked for weather data.
>
> **[20:22](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1222)** So you learn how you can connect to an external API using function calling with the assistance API.
>
> **[20:29](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/integrating-function-calling?u=76281980&t=1229)** Fantastic.

> [!info]- Semantic Content
>
> **Code Keywords:** function (64), let (5), pass (4), continue (1), const (1)
> **Env Vars:** api (9), json (3), npm (3), gpt (1), czy (1)
> **File Paths:** assistant.js (6), functions.js (2), index.js (2), day.js (1)
> **Analogies:** for example (6), for instance (2), such as (2), just like (1)
> **CLI Commands:** node (3), npm (3), find (2), make (2)
> **Definitions:** is a  (3), in other words (1), is an  (1)
> **UI Navigation:** scroll down (2), click on (1), scroll up (1)
> **Cross-References:** go back to (3)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=0)** - [Instructor] Well done completing this course.
>
> **[0:03](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=3)** You've gained the skills to build intelligent context-aware assistants.
>
> **[0:08](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=8)** Also create a knowledge base for your assistants by integrating documents with file search, code, and data-interpreting capabilities.
>
> **[0:16](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=16)** Even call external APIs and leverage powerful function calling features and much more.
>
> **[0:23](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=23)** But this is just the beginning.
>
> **[0:25](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=25)** As you continue developing your skills, I encourage you to keep experimenting with the OpenAI assistants API, and explore other tools and features.
>
> **[0:35](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=35)** For instance, you might explore function calling further for more complex workflows, such as using tools to make your assistant act more like an intelligent agent.
>
> **[0:46](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=46)** And if you're looking for more courses to dive deeper, check out courses like "Integrating Generative AI Into Your Web Projects" by Sandy Ludowski.
>
> **[0:54](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=54)** And "Hands-on OpenAI API, Building a Real World Solution" by Rodrigo Diaz Concha.
>
> **[1:02](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=62)** And remember to download your certificate of completion for this course to show your new skills to colleagues and friends.
>
> **[1:09](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=69)** And if you have questions or want to share your thoughts on the course, feel free to submit them in the course Q and A.
>
> **[1:15](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=75)** If you'd like to get in touch, be sure to visit my LinkedIn and reach out.
>
> **[1:19](https://www.linkedin.com/learning/build-a-document-search-assistant-with-node-and-openai-s-assistants-api/next-steps?u=76281980&t=79)** Thanks and happy exploring and building with generative AI.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), continue (1)
> **Env Vars:** api (2)
> **Analogies:** for instance (1), such as (1)
> **CLI Commands:** make (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Hands-On Projects for OpenAI-Powered Apps]]
← [[Hands-On AI- Build an AI Chatbot with GPT-4o and Next.js]] | **5 of 5**

## Appears In

- [[Hands-On Projects for OpenAI-Powered Apps]]

## Related Courses

_Courses sharing skills:_

- [[Node Js Security]] — Web Development, Node.js
- [[Building a Video Transcriber with Node.js and Google AI Speech-To-Text API]] — Artificial Intelligence (AI), Node.js
- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI API
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI API
