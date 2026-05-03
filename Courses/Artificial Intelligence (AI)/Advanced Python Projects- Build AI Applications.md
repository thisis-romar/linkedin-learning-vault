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
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/elevate-your-python-portfolio-with-advanced-ai-applications?u=76281980&t=0)** - There's no better way to demonstrate your [[Python (Programming Language)|Python]] and AI skills to your employer or a hiring manager than to showcase a portfolio of projects that you've created. Knowing how to build and deploy [[AI Solutions]], is one of the most sought-out skills given the rise in popularity of AI. So, at the end of the course, you'll be able to build not one, not two, but three AI solutions using Python. You'll gain AI skills such as learning how to use machine learning libraries, NLP techniques, do [[Feature Engineering]], and data analytics. And backend skills such as hosting on AWS, setting up database using [[MongoDB]] and integrating with [[OpenAI API]]. Also, frontend skills such as Streamlet and much, much more. Hi, I am Priya Mohan. I hope you're as excited as I am to start building these projects. Let's get coding.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/what-should-you-know-before-taking-this-course?u=76281980&t=0)** - [Narrator] Here's what you should know before diving into the course. I recommend that you have a solid foundation in [[Python (Programming Language)|Python]]. You don't need to be an expert or a professional coder, but if you have a good understanding of data types, [[Control Flow]], and basic [[Data Structures]], you're in good shape. We'll be working on some advanced concepts, so having a grasp of [[Object-Oriented Programming (OOP)|object-oriented programming]] will also be beneficial. We'll be using [[GitHub]] [[Codespaces]] as our IDE for developing our projects. GitHub Codespaces is new to you. Don't worry, I'll guide you through the setup in the next video. This course is designed to increase in difficulty as you go through each project, but I promise you it'll be rewarding. Embrace the challenges, ask questions, and most importantly, enjoy the process. Enthusiasm and a hunger for learning are your biggest assets.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=0)** - [Instructor] In this course, we'll be using [[GitHub]] [[Codespaces]] to demonstrate the [[Python (Programming Language)|Python]] projects that we'll be building. GitHub Codespaces is an instant cloud developer environment offering the functionality of your favorite IDE without the need for a local machine setup. It's a great tool that mirrors [[Software Development]] in the workplace. To get started, you can access GitHub Codespaces directly from the course repository. Next, you can simply click on the green code button over here. Once you've clicked on it, go to the Codespaces tab. This allows you to create a new codespace. If you've already been working on a project, you might see other codespaces that already exist. Here's mine. Once loaded, you'll enter a code environment similar to Visual Studio Code, but running on GitHub servers. So now let's create a new codespace. Click here on the plus sign and it should load up a new codespace environment. Once loaded, you'll enter a code editor environment similar to Visual Studio Code, but running on GitHub servers. The layout mirrors the code repository with folders corresponding to each chapter or project. You'll see here that we have two chapters, one labeled begin, and the other labeled finish. Use the files in the begin folder to follow along during the coding sessions and the files in the finish folders for reference that you can refer to after you finish watching the videos. While we're going through these chapters,
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/using-github-codespaces?u=76281980&t=97)** you'll make changes in the start files, and if you want to keep your changes, even after deleting a codespace, consider forking the repository. If you want to download the examples and work with them locally, then go back over here and head over to the local tab and you can clone the repository or download a zip file and use your favorite code editor to work on them. When working on a branch, you might make changes. GitHub Codespaces makes it easy to commit changes and save your progress. Use the source code panel over here to state changes, commit them and sync with your forked repository. Next, to close a codespace, click on the codespaces button over here and then go over to the three dots and you'll see a stop codespace option. This ensures a proper shutdown. When you reopen a codespace, it retains your progress, making it convenient for you to pick up where you left off. Now that you're familiar with GitHub Codespaces, you're ready to dive into the course projects. Remember, consistent use of same codespace helps save your progress. If you have any questions, feel free to reach out in the Q and A section. Happy coding.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=0)** - [Instructor] In this lesson, I'm going to provide a quick refresher of the fundamental concepts of [[Object-Oriented Programming (OOP)|object-oriented programming]]. If you're quite familiar with these concepts, feel free to move directly to the next lesson. So let's get started. We are going to create a new class called Car, class Car. A constructor is a special method in a class that is automatically called when an object is created. Let's define def __init__ self, make, model, close it with a colon. The self here reference to the car that's being created. We're storing the make and the model information in the car. The next concept that we'll explore is encapsulation. Encapsulation heights the internal details of an object and exposes only what is necessary. Think of it as specifying the unique characteristic of each car. Self.make equals make, self.model equals model. A method is like a function inside the class. It's something the car can do, like starting its engine. So let's define a method, start_engine self. Now let's print using the method. Print f the self.make self.model model's engine is running.
>
> **[1:39](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=99)** Here it is accessing attributes through self. This is like the car performing an action specific to itself. Next, let's create instances of the car class. Before we do that, the next concept that we'll explore is inheritance. Inheritance enables code reuse and creation of hierarchy of classes. Car is a class that can be used to create objects. So let's create our objects. Car1 equals car, Toyota comma Camry, car2 Ford comma Mustang. So let's print using the objects we created. Print f I have a car1.make car1.model period,
>
> **[2:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=160)** and then close the quotations. In the next line, we'll print, I also own a car2.make car2.model.
>
> **[2:56](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=176)** Next we'll explore polymorphism. Polymorphism is the ability of objects of different classes to be treated as objects of a common base class. This is when different objects such as car1 and car2 can perform the same action, start_engine. So car1.start_engine, close parentheses, car2.start_engine.
>
> **[3:23](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/a-refresher-of-object-oriented-programming-concepts?u=76281980&t=203)** This is like instructing each car to engage its engine and they follow their unique set of instructions. So now let's run the code to see what happens. The first two lines of output are from the print statements in 19 and 20. The next two outputs are from the print statement in line 12. I hope this lesson provided you a good overview of object-oriented programming concepts to help you prepare for building the projects that are upcoming.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=0)** - [Instructor] In just 30 lines of code, we are going to build a simple chatbot using [[Python (Programming Language)|Python]] and TextBlob library. This chatbot will be capable of understanding user input and providing appropriate responses based on predefined intents. Like for example, if the user is asking for hours that a store is open, we would have intents defined, and we would then have a predefined response for those particular keywords. We'll also analyze the sentiment of the user's messages to generate responses that fit the emotional tone. By the end of this lesson, you'll understand how to implement a basic chatbot and how it processes user input. Now let's get started. First we'll need to import the TextBlob library, which will help us analyze the sentiment of the user's messages.
>
> **[0:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=59)** Let's get started. Open the code for chapter one in [[GitHub]] [[Codespaces]]. Our first step is to install the TextBlob package. Go to your terminal and type (keyboard clacking) pip install TextBlob. Once the package is installed, go ahead and type from TextBlob, (keyboard clacking) import TextBlob. This line imports the TextBlob class from the TextBlob module, and allows us to leverage its functionality within our code. Now let's define the intents our chatbot will recognize. Intents are the goals or purposes behind user messages, and we will map specific keywords to corresponding responses. Now let's go ahead and type intents (keyboard clacking) equals (keyboard clacking) hours. Add a colon. Open another curly braces. (keyboard clacking) (keyboard clacking) Keywords. So now let's define the first keywords. Now let's imagine a customer or a chat bot user is asking us for the hours that a store is open. We will go ahead and define certain keywords that will signal the chat bot to provide responses related to the hours. So over here we've defined three keywords, hours, open, and close.
>
> **[2:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=152)** When a user types these words as part of their message, the response will be, (keyboard clacking) we are open from 9:00 AM to 5:00 PM (keyboard clacking) Monday to Friday.
>
> **[2:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/processing-user-input-24907426?u=76281980&t=179)** Let's define one more intent. We're going to label this return. Now, anytime we have keywords related to returns such as refund, money back, (keyboard clacking) or return, we will have the chatbot respond with a certain response. Add a comma on the previous line. And in the response, type, (keyboard clacking) I'd be happy to help you with the return process. (keyboard clacking) Let me transfer you to a live agent. Based on my personal experience, I find it helpful to always have a live agent help me with my returns, so I will go ahead and enter this message here. So to summarize, here we are creating a dictionary called intents. Each intent, like hours and return, has a set of keywords that the chatbot will look for and use our input and response that it will provide when those keywords are detected.

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
> **[0:07](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=7)** - [Instructor] Def get_response, and then the brackets, write 'message,' and then type "message = message.lower." And open parentheses. What we're doing here is we're taking the user's message and converting it to lowercase. Why do we do that? This helps make sure that whether the user types an uppercase open or a lowercase open, the bot treats them the same way. In the next line type, "if any," "[[Microsoft Word|word]] in message for word in intent_data,"
>
> **[0:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/analyzing-sentiment-24909415?u=76281980&t=47)** open bracket, "keywords"... And then end it with a colon. And in the next line, type, "return." "intent_data." Open bracket, in parentheses type "response." So what we're doing here is to have the bot check if any of the keywords in the intents matches the user's message. Let's say the user types, "I'd like to make a return." The bot will see the word return and check if it's in any of the predefined intents. So that's what these two lines do. If it finds a match, then it would respond with the response that we've defined over here.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=0)** - [Instructor] So now what if none of the keywords match? Well, that's when things get interesting. The bot uses text blob to analyze the sentiment of the message. Let's see how to do that.
>
> **[0:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=20)** Type, "sentiment = TextBlob", open parentheses, and write "message.sentiment.polarity."
>
> **[0:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=36)** This is where the chatbot try to understand if the user is happy, frustrated, or neutral. Text blob gives us a score between negative one and positive one where negative values mean the message is unhappy and positive values mean it's happy. Based on that score, the bot adjusts its response. Now let's return specific messages to output based on the sentiment score. Now, let's type in "return." "That's so great to hear!" If it is a positive message. So we're going to say, "if sentiment is greater than zero, else." Let's go to the next line. "I'm so sorry to hear that. How can I help?" "If sentiment is less than zero, else."
>
> **[1:46](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/displaying-automated-chatbot-responses-based-on-sentiment-24906414?u=76281980&t=106)** "I see. Can you tell me more about that?" If it is neither positive nor negative, meaning if it's more of a neutral response. Close the parentheses. Next we're going to see how to get the chatbot to talk to the user.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Tailoring chatbot response based on sentiment score](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=0)** - [Instructor] Now let's look at how the conversation works. Type "define." Create a function called chat. The chat function is what gets the bot talking to the user. Now type "print," and we'll start with the greeting message that says, "Chatbot: Hi, How can I help you today?"
>
> **[0:32](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=32)** This starts by greeting the user and asking how the bot can help. Now let's start a loop. Type in "while," open parentheses, type in, "user_message:= input." Then open another parentheses, and within the parentheses say, "You," this is where the user will type their message, and now say, "strip.lower."
>
> **[1:06](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/tailoring-chatbot-response-based-on-sentiment-score-24905423?u=76281980&t=66)** Open parentheses again. And say, "not in ['exit,' 'quit,' 'bye]." We've defined a few words that indicate that the user wants to quit the chat. "Print." In the next line. "Chatbot." And then "get_response, user_message." And then we're going to close the parentheses. So to recap, what happens here is that the bot enters the loop where it keeps asking for an input and responding until the user types something like exit, quit, or bye. Each time the user types a message, the bot will analyze it, find a matching response, and print it out. If the user types "bye," the bot exits the chat.

> [!info]- Semantic Content
>
> **Code Identifiers:** user_message (2), get_response (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Intiating the chatbot and printing sentiment-based responses](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=0)** - [Instructor] Now it's finally time for us to go ahead and run the chat bot. This line here ensures that the chat function is called, which kicks off the conversation. Let's go ahead and run the chat bot. We're going to say, I need help with a product I purchased. I'm not happy, as it was broken. So the chat bot automatically analyzed the sentiment and understood that this was a negative message that we typed in, and it responded back saying, I'm sorry to hear that. How can I help? So in response to that, I'm going to say, I would like to return the product. Can you please help? It says, I'd be happy to help you process your return. Let me transfer you to a live agent. The chat bot responded with this message because it saw that the user's message that we typed in contained the [[Microsoft Word|word]] return in it, and this return is part of the keyword response library that we had previously defined. So now we've demonstrated that it not only analyzed sentiment, it also provided a response based on the sentiment, and it also provided a predefined response based on the keyword that we've already defined. That's it folks. It's as easy as that to be able to create a sentiment analyzer chat bot that can both understand intent and provide responses
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/intiating-the-chatbot-and-printing-sentiment-based-responses-24904548?u=76281980&t=95)** and analyze sentiments, and provide responses that are appropriate for the sentiment. Thank you.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=0)** - [Instructor] In this project, we're going to analyze market data to identify top five locations to set up a coffee business in California. And we're going to also predict the price of a latte based on the demographics of the population in those locations. So you can apply the skills that you learn from this lesson to your own organization to identify optimal locations and prices for your [[Microsoft Products|products]]. This is just one example of how you can use these skills that you learn in this lesson. There are multiple different ways that you can use these skills to enhance your professional life. Let's get started. From the begin folder, open up the [[Python (Programming Language)|Python]] notebook CH 2 business prediction. So the first step that we're going to do is install necessary Python libraries for data analysis and machine learning. [[Pandas (Software)|Pandas]] is for [[Data Manipulation]], scikit-learn is for machine learning tools, and matplotlib is for data visualization. Using the pip install command, let's go ahead and install these. All right. In this section we're importing essential Python libraries and classes for various tasks in data analysis and machine learning. These include pandas for data manipulation, re for regular expressions, standard scaler for feature scaling, matplotlib.pyplot is for data visualization. NumPy is for numerical operations, and several modules from scikit learn such as warnings, means squared error, train test split, grid cv, random forest regressor, gradient boosting regressor,
>
> **[1:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=91)** all of this for machine learning tests. We're also setting up the environment to ignore warnings during execution. Excellent. Next, we're going to ingest the datasets and do some analysis. Now we use pd.read underscore CSV to read population data from a CSV file named population.csv into another data frame called population. So let's now run this. The head method here is being used to display the first five rows of the population data frame. This allows you to quickly inspect the structure and the content of the data frame. So let's see what's in it. So in the population data, we have a geography code which contains the zip code but it's in a string format which contains both letters and numbers. So the most important data in this data frame is the geography column which contains the zip code but it's in a format that's not so ideal. And we are going to do some data analysis to extract the last five digits which is the actual zip code of the locations. So we have the zip code of all of the areas in California, and then we have the total population of all of the areas in California and these are in millions. So here we see the column total which contains the total population. This data was directly obtained from [census.gov](https://census.gov). Next, let's take a look at what's inside the coffee shop data which we stored as df. Here in the coffee shop data,
>
> **[3:04](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=184)** we see that we have a list of coffee shops in California. Here are the cities where they're located. Here's the zip code, here's the customer rating, and here's the median salary for each of those zip codes and here's the latte price at each of these shops. Next, the info method provides information about the data types of each column and the presence of any missing values in the df data frame. So let's take a look. Here we have the list of all columns in this data frame and the non null values and the data types. Next we're going to check the rows and columns in that data frame. In order to do that type df.shape, run the code, we see there are a thousand rows and eleven columns. And now let's do the same with the population data. In the population data, we have 1,705 rows and 13 columns. Next we're going to plot coffee shops across top five cities with the highest number of occurrences in the city column. So this line counts the occurrences of each unique value in the city column and selects the top five cities based on the occurrences and creates a bar plot on the selected cities. So that's what this means, kind equals bar. Next, we set the title of the plot to be top five cities with most coffee shops and then we type plot.show to display the plot. So here it is. So we see that Sacramento, LA, San Diego, Fresno, and San Jose have the most coffee shops.
>
> **[4:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-analytics-using-pandas-matplotlib-and-scikit-learn?u=76281980&t=278)** Next we're going to explore the top 10 most famous brands, and we're going to do exactly the same as we did above, let's run this code. And here we see frothy fusion, steamy moments, these are the top 10 coffee shop brands that occur the most in our dataset.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=0)** - [Instructor] Next, we're going to be doing Data Preprocessing. So this method is used to check the number of null values in each column of the DF data frame. In this case, when we run this, we notice that there are no null values. Next, let's scroll down. We're going to be converting the zip code column in the DF data frame to the object data type str. This is done to ensure that the zip codes are treated as alphanumeric values when performing operations, such as joining the population with data which we're going to do soon, so let's run this. Next, in this block of code, find zip code function is defined. This function takes a geocode as input and searches for the five-digit pattern at the end of the string using a regular expression. If a match is found, the function returns the extracted zip code. Let's run this. Next, in this code, the find zip code function is applied to the geography column in the population data using the apply method over here. The result is stored in a new zip code column in the population data frame. So this process extracts the last five digits of the zip code from the geography column, so let's run this. Excellent. Over here, we're making a copy of the DF data frame with the name, cafe_data, and then pd.merge function is used to merge cafe_data with the population data frame based on the zip code column.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=95)** The result is stored back in the DF data frame, so now let's run that. All right. Here, a list of column names is created by combining the columns from the cafe data data frame and adding it to the total column. The DF data frame is then updated to include only the columns specified in the columns list. Finally, the total column is renamed to population. So now, let's run that. Excellent. Next, let's run the data frame to see what it looks like. So here's the merged data frame. At the end of that data frame, we have the population data as expected. As you see over here, we now have 412 rows and 12 columns. This reduction in the rows and columns are expected given that we've merged both of the data together. Now, we're only going to keep the relevant features from that dataset. What's relevant to us is the zip code, rating, median salary, latte price, and population, because that's what we will use to identify the top five zip codes and the price of the latte for each of those zip codes that we identify. So now let's run this. Excellent. As expected, we now have reduced the columns from 12 to five, and here are the columns that are present in the DF data frame. So next, what we're doing is here, the total number of coffee shops for each zip code is calculated and stored in the coffee shop counts data frame.
>
> **[3:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=192)** Both zip code columns are insured to be of type string for proper merging. The counts are merged back into the original DF data frame. The data frame is printed to display the changes. Next, we're going to identify the top five zip codes using the criteria listed here. We're going to make sure that our top five zip codes contain high population, low number of coffee shops, low ratings, and high median salary. This is to make sure that the top five zip codes that we choose have a lot of demand and less competition, and we hope that the folks that live in those areas have high median salary, so that they'll be able to afford coffees. A new data frame sorted_df is created by sorting df based on those specific criteria we just listed. We're going to sort population by the highest population, right? And then the coffee shop count is going to be the lowest coffee shop count, low to high, and then rating is going to be also low to high, so that we ensure that the other coffee shops that are existing in those areas have low ratings, so that we have a better chance of establishing a business that's more successful and can receive a higher rating. Again, median salary, we're going to sort from high to low, so that we target areas that have higher median salary. Now, we create a list named LSD to store unique zip codes. The loop iterates through the sorted data frame,
>
> **[4:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=287)** sorted_df, checking if the length of the list is less than five. And if the current zip code is not already in the list. If the both conditions are met, the zip code is then added to LSD. Finally, sorted_df is filtered to include only rows where the zip code is in lst creating the data frame. Then we display all the records of the top five zip codes based on the specific criteria that we established. Now, let's run these codes. Here are the sorted values, and here's the output for our top zip codes. If you notice, our first zip code appears five different times. This is because there are five different coffee shops in that location, and these are the data related to those coffee shops. Also notice that the population is stagnant, which is expected because the, there's only one median population for that particular zip code. This is why we see 18 values. Here's the first zip code. Here's the second zip code. Here's the third zip code. and here's the fourth zip code. Last but not least, here's our fifth zip code. So we've identified the top five zip codes. Next, we create a feature matrix, which is labeled as X by dropping the columns latte price, and zip code from the DF data frame. The target variable Y is assigned value from the latte price column.
>
> **[6:19](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=379)** This prepares the data for a machine learning model with X representing the features and Y representing the target variable. Train test split function from scikit-learn is used to split the feature matrix X and the target variable Y into training and testing sets. The parameter test size 0.2 specifies that 20% of the data should be used for testing, and the [[Representational State Transfer (REST)|rest]] is for training. Random state 42 ensures reproducibility by fixing the random seed. The resulting sets are assigned to X train, X test, Y train, and Y test. Let's now run both of this. Next, we're going to be doing feature scaling. Feature scaling is a method used to normalize the range of independent variables or features of a data. It's important in machine learning because many [[Algorithms]] like [[Linear Regression]] require features to be on the same scale. If features are not on the same scale, the algorithm may be more biased toward features with large values. So in these lines of codes, the standard scaler from scikit-learn is used to standardize the features of the matrices X train and X test. The fit transform method is applied to X train to compute the mean and standard deviation needed for scaling and transforming the training data. So the transform method over here is then used to scale the testing data based on the parameters learned from the training data. So what this truly does is that it ensures
>
> **[7:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/data-preprocessing-and-scaling?u=76281980&t=472)** that the features have a mean of zero in the standard deviation of one, which can be beneficial for certain machine learning algorithms.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=0)** - [Instructor] Now we're going to be selecting machine learning models for our program. So we're going to be choosing three different regression models because regression models are used when you want to predict a continuous outcome variable. So what a continuous outcome variable is that it's a variable that can take an infinite number of values within a certain range. So in our case here, we're trying to predict the price of the latte for each of the five top zip codes that we've identified. On the other hand, if we were to categorize the coffee price as expensive or cheap, then it would be a categorical variable because it only takes two values, expensive or cheap, right? We're not trying to categorize the price into expensive or cheap. We're actually trying to predict a number, so that is why we're going to be using regression models. So the three regression models that we're going to be using are [[Linear Regression]], random forest, and gradient boosting. So now let's set that up. Single quote, Linear Regression, colon, LinearRegression, comma, Random Forest, colon, RandomForestRegressor, close the brackets, close the parentheses. Gradient Boosting, GradientBoostingRegressor, and that's it. So now in this code, a dictionary named models is created. And now that contains instances of three regression models,
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=95)** such as linear regression, random forest, gradient boosting. Each model is now associated with a key, allowing us for easy reference and selection during the model training and evaluation phase. So here's why we chose these three models, and we're going to quickly discuss what these models do. Here's an example of what linear regression looks like. It's a straightforward approach, where the relationship between the input variables and the output variables is modeled as a linear combination. The coefficient of the model can be interpreted as the change in the output for a one unit change in the input, holding all other variables constant. This model assumes that a linear relationship between the input variables and the output variables. Next is the random forest regression. So this is a collection of [[Decision Trees]] that work together to make a decision. Each tree makes its own prediction, and the final prediction is the average of all the individual tree predictions. So this model can handle thousands of input variables and can identify which features are most important. It's less sensitive to outliers compared to a linear regression. Next, we're going to explore gradient boosting. It's similar to random forest. Gradient boosting is an ensemble of weak prediction models, typically decision trees. While random forest builds each tree independently, gradient boosting builds trees in a stage-wise fashion with each new tree being built
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/model-selection?u=76281980&t=188)** to correct the errors made by the previous tree. So with gradient boosting, first we'd have one tree, and then next we have the knowledge from the first tree and the new tree. And then the third iteration, we'd have the first two trees plus a third tree. So that's how gradient boosting works. Gradient boosting can provide feature importance, which can be very useful in understanding which features are most important in the prediction. Like random forest, gradient boosting is less sensitive to outliers as well.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=0)** - [Instructor] Next we're going to be doing hyperparameter tuning. Hyperparameter tuning in machine learning is like finding the ideal recipe for making the most delicious cake. In a machine learning model, hyperparameters are settings that need to be adjusted for optimal performance, similar to adjusting oven temperatures and baking times for a perfect cake. This process involves systematically trying different combinations of these settings to maximize the model's accuracy and generalization to new data. It's crucial because it ensures the model adapts to specific characteristics of the dataset so that it avoids over fitting or under fitting, and ultimately provides the model's predictive capabilities. Just like how adjusting the right ingredients and the cooking condition to transform a good cake into a great one is hyperparameter tuning, fine tune the machine learning model for optimal predictions. So let's explore how to do this. So the parameter grid dictionaries specifying a grid of hyperparameters for two machine learning models, the random forest and gradient boosting. These hyperparameters are used during the hyperparameter tuning process to find the best combination of values that optimize the performance of each model. Now let's break down the hyperparameters and the respective values. So over here for random forest, the n estimator parameter represents the number of trees in the forest. The values 50, 100 and 200 indicate that the grid search will consider models with 50, 100 and 200 trees. You can choose any numbers that you would like here. The max depth this parameter controls the maximum depth
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=96)** of each tree in the forest. The values none, 10 and 20 here imply that the grid search will explore models with unlimited depth, which is why we have none here, as well as trees with maximum depths of 10 and 20. So for gradient boosting over here, similar to random forest, this parameter represents the number of boosting stages to be run. 50, 100 and 200 indicate the grid search will consider models with 50, 100 and 200 boosting stages. The learning tree parameter controls the contribution of each tree of the final prediction. The values 0.01, 0.1, 0.2 suggests that the grid search will explore models with different learning rates. Lastly, we're going to consider the max depth parameter. This controls the maximum depth of each tree in the boosting process. So the values 3, 5 and 10 indicate the grid search will consider models with trees of maximum depths 3, 5 and 10. So this code block here is performing hyperparameter tuning for machine learning models using GridSearchCV. So GridSearchCV explores a predefined set of hyperparameter values to find the combination that optimizes the model performance. And here's how it does that. So in our code, the loop iterates through each model in the model's dictionary that we set up previously. And these models include, of course, [[Linear Regression]], random forest, and gradient boosting. For each model that
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/hyperparameter-tuning?u=76281980&t=188)** has corresponding hyperparameter grid information in param grid, a grid search CV is performed. Here, GridSearchCV takes the model hyperparameter grid, cross validation parameter, which is CV equals 5, and this indicates a fivefold cross validation and the scoring method, which is neg_mean_squared_error. Next, the fit method is used to run the grid search and find the best combination of hyperparameters that maximizes the mean squared error. So the best hyperparameters are obtained using grid_search.best_estimator. The best estimator, which is the model with the optimal hyperparameter, is then assigned back to the model's dictionary under the same model name.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=0)** - [Presenter] Okay, so this is when the magic happens. We're getting our models ready to make predictions. For model_name, model in models.items.
>
> **[0:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=17)** So for each model in our group, we call them models. And we're going to do some training. Type model.fit, X train, Y train.
>
> **[0:33](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=33)** This is like teaching each model, hey, look at these example X train and their answers, Y train. And learn from that so that when I give you a new example, you can predict the answer. So in simple terms, this is like providing each model some practice with the training data so that they can predict values. Now let's run this. Now that we've done the model training. Next, it's time for us to do some model evaluation so that we can identify which model is better. For each model in the collection, we're going to set up a loop to perform the evaluation. So Y_pred equals model.predict X_Core test. So we're passing through the models and using the X test data to predict the Y values using the models. Now let's evaluate the predicted data. Next, we're just printing the model name and metrics next to it, it'll say [[Linear Regression]] metrics. And after that we're going to print the mean absolute error. So type mean_absolute_error, open ended parenthesis, and say why test? Y_test comma Y_pred, and then close the parentheses. So we're comparing the Y test value and the Y predicted value. So this is the actual value and this is the predicted value. We're going to do the same for mean squared error. So type mean_squared_error.
>
> **[2:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=130)** Y_test, comma Y_pred, and then close the parentheses. All right, now we're going to do the same for R squared value, R squared score open parenthesis, Y test, comma Y pred, parenthesis. Excellent, now let's run the code. So mean absolute error measures the average absolute difference between the predicted values and the true values. So lower Me indicates better prediction accuracy. So for linear regression, the predicted latte prices are off by approximately 0.22 units from the actual prices. And for random forest metric, it's 0.235, which is a bit higher. And for gradient boosting we see it's 0.218, which is very close to what linear regression was. Let's look at the other scores. Next score is the mean squared error. So what means squared error is it calculates the average of the square differences between the predicted and the true values. So MC, this value over here penalizes large errors more than MAE does. So let's take a look at the MAE values. Over here we have 0.065, which means the average of the squared errors is around 0.066 approximately. And here we have 0.0781,
>
> **[3:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/linear-regression-random-forest-and-gradient-boosting?u=76281980&t=223)** and then here we have 0.0669. So over here as well, we see that the linear regression did much better. So our next metric is R squared. R squared represents the proportion of variants in the target variable that is predictable from the independent variable. So R square values that are closer to one indicate a good fit of the model to the data. So the ones that we see with the highest R square value is for linear regression. Random forest, it was 0.339 and gradient boosting was much closer. So the overall verdict is that linear regression is slightly better than the other two models. So going forward we'll be using linear regression. .

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
> **[0:01](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=1)** - [Instructor] Now it's time for us to do some predictions. So now we're going to remove the zip code column and the latte price column from this top five zip codes data frame. We're dropping these because zip code is just an identifier and latte price is what we're trying to predict. Next, we're scaling the remaining columns in the zip code df, using the same scaler, sc that you use to scale your training data. This is crucial to maintain consistency in the data format and ensure the model interprets the new data correctly. So after all this, zip code df is now formatted compatibly with our training models, and now we can use them to predict latte prices for those specific zip codes that we identified. So next, this loop iterates over each model in our models dictionary. Using each model, it predicts the latte prices for the top five zip codes based on their features. Now let's run this code. After that, we initialize an empty dictionary called predictions to store the predicted prices of each model. Then we iterate over each model. Here, this line predicts the latte price for the top five zip codes using the current model and store the predictions in the predictions dictionary. Next, we're converting the predictions dictionary into a data frame called predictions_df, where the column represents the predicted prices from the specific model. And after that, we're going to add zip codes. So over here, we add the zip code column from the top five zip codes df to predictions df.
>
> **[1:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=98)** Then this line over here defines the decide column order with zip code as the first column. Next, this line over here reorders the column predictions_df based on the specified order. Lastly, we take a look at what the data frame looks like. So now this should contain the predicted latte prices from each model for the top five zip codes, with the zip code column as the first column. Let's take a look, now, let's run the code. There we go, so now we see that we have all those 18 zip codes. We have 18 different rows, because this first zip code over here has five different shops. So for all of those five different coffee shops, the model has predicted different values. So this provides us a range between 4.785 to 4.77. So these are the ranges that we can have our price for this particular zip code. So if we set up a new coffee shop in this zip code, our price can range from this value over this value per the [[Linear Regression]] model, and so on and so forth for the other three models. Next, let's scroll down. This line groups the data frame by zip code and selects the column containing the predictions from the gradient boosting model. After that, we apply aggregation functions to calculate the maximum highest and the minimum lowest for each group.
>
> **[3:13](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/predicting-price-based-on-model-evaluation-results?u=76281980&t=193)** Then we apply the aggregation function to calculate the maximum highest and the minimum lowest value for each group. This resets the index of the resulting data frame making zip code as a regular column again. This line renames the columns for clarity, replacing the original column names with more descriptive ones. Lastly, we display the aggregated data frame showing the highest and lowest predicted prices from the linear regression model for each zip code. So now let's run the code to see what our predictions look like. Excellent, so for the top five zip codes, it has predicted the highest value and the lowest value ranges for each of the zip codes. When we set up our new coffee shops at these locations, we should consider setting the price somewhere between these two numbers for each of those locations. And there we go, now we have the top five zip codes where we need to set up our next coffee shop to be successful, and we also have predicted the price ranges for the latte at each of these locations. I hope this was helpful, let's move on to our next project.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=0)** - [Narrator] In this project, we're going to create an AI application where you can upload any document or PDF, and it will have the ability to answer any questions related to that document. Think of it like [[ChatGPT]] that has knowledge about your document. So let's begin. First, let's install the necessary [[Python (Programming Language)|Python]] packages. For this type pip install -r. And over here in this file, which is labeled as Requirements.txt, we have the list of all packages that needs to be installed and are going to be used in our program. So what we're going to do is we're going to copy the path of this file and we're going to paste it here and run that. Now that the packages have been installed, let's get to the next step. We're going to hide the Explorer. First, we need to install several Python modules to set up the environment for working with pydantic, [[MongoDB]], and handling errors, through traceback. So here we're importing pydantic for defining data models and pymongo for MongoDB. Next we're importing the traceback for error handling. After that, we're importing os and sys for system-related operations. After that, we're importing FastAPI components for building the web application. FastAPI is a Python-based web framework that makes it easy to create fast and efficient APIs. So here we import the necessary components from FastAPI,
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=94)** including FastAPI, UploadFile, status, and HTTPException. Next, we import JSONResponse for returning [[JSON]] responses. After that, we install middleware for CORS handling and modules from custom library called [[LangChain]] Community for text processing and document loading. Now we import specific classes from the LangChain and LangChain OpenAI libraries. LangChain is a framework for building applications powered by language models and LangChain OpenAI is part of LangChain that specifically focuses on integrating with OpenAI APIs. Next, we import the gc module for garbage collection so that we can save on memory and the urllib.parse for parsing URLs and awswrangler for simplifying interactions with AWS services, particularly for engineering task. Next, we import boto3 library for interacting with AWS services. Next let's set up the environment variables and define variables for AWS S3 configuration in Python. So over here on line 37, we're going to be inputting our OpenAI key. In order for you to obtain your OpenAI key, you would have to sign up for an OpenAI account and sign up for an OpenAI key. Once you sign up to obtain your OpenAI key, paste your key here. Similarly, set up an AWS S3 bucket and obtain the following information
>
> **[3:10](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setting-up-mongodb?u=76281980&t=190)** from that S3 bucket. Follow this link for instructions on how to set up your S3 bucket and obtain this information. Here we're attempting to connect to MongoDB database using the provided MongoDB connection URL. Before you do this, make sure you download a free version of MongoDB. Once you've downloaded the free version of MongoDB, follow this link on how to obtain the MongoDB URL. Once you've downloaded MongoDB, replace this with your admin name and replace this with your admin password. These lines of code create a connection to MongoDB server using PyMongo. It connects the chat_with_doc database and accesses the chat-history collection within the database. This line creates an index on session_id field with chat history collection, ensuring uniqueness. Indexing is often used to improve query performance. In case of an exception during the MongoDB connection, this block handles the exception by printing detailed error information, including the type of the exception, file name, and line number. It uses traceback and sys modules for this purpose.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=0)** - [Instructor] Here we're defining a pedantic model named ChatMessageSent using the base model class. Next, we create a function named get response that takes several parameters. This is the name of the file to load data from. This is the session ID for tracking conversation history. This is the user query or question to be used in the conversation. Here we're using the model GPT-3.5 Turbo 16K, and then we're setting the temperature of the model to zero. Temperature parameter is to control the response randomness. The default is set to Zero, which produces a very stable or less random response. Then we print the file name and update it by extracting the last part after the slash using this line over here. So overall, this function generates a response using a conversational model like GPT-3.5 Turbo. It takes a final name to load data, a session ID to track the conversation, a query or question, and optional parameters for model selection and temperature control. The open AI embeddings class is used to convert text to numerical representations, and the S3.download function is used to [[Fetch]] a file from the S3 bucket. Now we're going to set up document processing based on its file type, either a.docs or a PDF, and then we have the program used to process data to create a conversational retrieval chain
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/generate-chat-responses-using-gpt-3-5-and-langchain?u=76281980&t=96)** with an open AI model. Let's see how to do that. First, we check the file type of the document, whether it's the .docs or PDF file, and then we load the document using the appropriate loader. Next, we load the data and we split the loaded data into chunks that fit the GPT token limit. After that, we store the data in a vector database to an enabled search functionality. F-A-I-S-S is that vector database. After that, we initialize an open AI model with specified parameters. Then we create a conversational retrieval chain with the OpenAI model and the vector database. Once we do that, we use a callback to determine the number of [[Tokens]] used during the query. After that, we print several metrics related to the tokens. After we do that, we collect garbage from the memory to free up some space. Lastly, we write return answer so that it returns answers to the query along with the total tokens used.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/load-conversation-history-for-a-given-session-id?u=76281980&t=0)** - [Instructor] Now we're going to create a [[Python (Programming Language)|Python]] function called load memory to pass and design it to retrieve conversation history associated with a given session ID from a [[MongoDB]] collection. And this will return a list of conversation history as a topple that contains both user message and bot response. Let's check out how to do that. This line queries the MongoDB collection to find a document with a specific session ID. The result is stored in the variable data. Next, if the data is not none, meaning the document within the given session ID was not found, the function then processes the conversation history. It retrieves conversation field from a document and the conversation field is assumed to be a list where even indices represent human messages and odd indices represent AI responses. The function then creates topples of these pairs and extends the history list. Finally, this function prints the retrieved history and it returns the history list containing topples of user messages and the corresponding bot responses.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** python (1), find (1)
> **Speakers:** - [instructor] (1)

#### [Create new sessions and add chat history to existing sessions](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/create-new-sessions-and-add-chat-history-to-existing-sessions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/create-new-sessions-and-add-chat-history-to-existing-sessions?u=76281980&t=0)** - [Instructor] In this lesson, we're going to explore how to create a new session ID for a chat or how to add conversation history if there's an existing session. First, we define a function named get_session that generates a new session ID and return it as a string. Next, we use the UUID module to create a universal unique identifier, ensuring the uniqueness in each of these sessions. Next, we retrieve the [[MongoDB]] document with the specific session ID using conversationcol.find_one. In this line, the function checks if the document exists. If it does, it appends the new conversation values to the existing conversation list. If not, it inserts a new document with the provided session ID and new values into the MongoDB collection conversationcol. This kind of organization is crucial for applications that involve maintaining user interactions or dialogues over multiple sessions. So this code allows for seamless storage and retrieval of conversation data tied to specific session IDs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[MongoDB]] (2)
> **Code Identifiers:** get_session (1), find_one (1)
> **Env Vars:** uuid (1)
> **Speakers:** - [instructor] (1)

#### [Setup FastAPI app, CORS, S3 session, and obtain a chat response](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=0)** - [Instructor] Here we are initializing a FastAPI application named app. Next in this block of code, we're adding the CORS middleware to the FastAPI application. This is allowing requests from any origin, credential, HTTP methods or headers. Here we are creating AWS S3 session using boto3 with the provided AWS access credentials. The AWS S3 variable holds a session configured with AWS access key, secret key, and region. Next, we're defining a FastAPI endpoint /chat using the HTTP post method. The create_chat_message function is an asynchronous function that handles the /chat endpoint. Next, what we're going to do is we are going to create a chat message and obtain a response based on the user input and the session ID. If it's a new session, we create a new session ID. If it's an existing session, then we add onto the conversation history using the session ID. Let's check out how they do that. So we're going to check two cases. First case is when chats.session_id is none. A new session ID is generated using the get_session function. And then we prepare the payload with session details and user input. So a payload is then created using the ChatMessageSent model, including the new session ID, user input and data source. The model dump method is then applied to the payload. After that, the get response function is called with the data source, session ID and user input
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=95)** from the payload to obtain a response. After that, we add user input and bot response to the session ID. So the conversation history is updated with the user input and bot response. Next, we're going to return [[JSON]] response with response message and session ID. So over here, a JSON response is returned containing the response message and the session ID. So the next case that we're going to be looking at is when chats.session_id is not none. So we use the existing session ID. The payload is created using an existing session ID, user input and data source. And then we get response based on user input and session. The get response function is called with the data source, session ID and user input from the payload to obtain a response. And then after that, what we do is we add user input and bot response to the existing session history. The conversation history is updated with the user input and the bot response. Lastly, we return the JSON response with response message and session ID just like we did previously. Here, JSON response is returned containing the response message and the existing session ID. In case of an exception, it prints detailed error information, including the trace back and raises HTTP exception with 204 no content status and an error detail. So to recap what we did during this lesson,
>
> **[3:08](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/setup-fastapi-app-cors-s3-session-and-obtain-a-chat-response?u=76281980&t=188)** we created a chat message and obtained a response based on the user input session. We use a Pydantic model representing the chat message, including the session ID, user input and data source. And then we return JSON response containing the response message on the session ID based on the chats.session_id value. If it was none, then it created a new session ID. If it was not none, then it added onto the existing history. And then we set up exception handling for when it encounters an error and have it print detailed error information.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=0)** - [Instructor] Next we're going to learn how to upload a file to Amazon S3 storage. So we're going to have the /uploadFile FastAPI endpoint asynchronously process the file uploads. We're going to have it temporarily saved the file locally, upload it to Amazon S3, remove it from the local file system, and return a [[JSON]] response containing the file name and S3 file path, with the appropriate exception handling at the end. Let's check out how to do that. So over here in this section, we defined a FastAPI endpoint at /uploadFile that handles the HTTP post request. The function upload to S3 is an asynchronous function that takes a file input using the FileUpload type. Then we print the file name extracted from the uploaded file path. Next, we're going to be uploading our files to the S3. This code opens the local file for writing in binary mode, reads the content of the uploaded file, asynchronously writes the content to the local file, and then closes the file. This step is important because some S3 upload functions require a local file. So here the wr.s3.upload function is used to upload the local file to Amazon S3. It specify the local file path, the destination S3 path, and the AWS S3 session. Next what we're going to do is we're going to remove the local file. After successfully uploading to S3, the local file is being removed from the local file system to avoid unnecessary storage usage.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/upload-files-to-amazon-s3-storage-bucket?u=76281980&t=95)** Lastly, we prepare a JSON response. Here, a dictionary is created containing the file name and the S3 file path. After that, we set up exception handling. So if the local file is not found, for example, due to an issue with the file creation step, an HTTP exception with the status code of 404 is raised, this indicates the item is not found. Finally, a JSON response containing the file name and S3 file path is returned to the client. And last but not least, we're now ready to run the application. So the last part of the script here runs the FastAPI application using Uvicorn when the script is executed directly. This allows us to run the application by executing the script. Now we're all done with the backend of the application. It's time for us to run the application to see how it works. I hope you're as excited as I am to have this run and test the application.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=0)** - [Instructor] Now is the fun part. Let's run the AI application that we just built. Go to your terminal and type cde Begin. Begin is the folder where this program is located, and then click on the run button. Wait for the code to run. It's completed running. Now go to the ports tab, and this is where our application is located in the port 8000. So over here you'll see a globe symbol, or you can click directly on this link. Click on this link or this globe symbol. It'll take you to the URL. So at the very end of this URL type /docs and type enter. This should take us to our FastAPI interface. The first step is for you to click and expand on the upload file. Once you're here, click try it out. After you click try it out, you should now be able to choose a file to upload. Click on the choose file and navigate to the folder where the file that you want to upload is located. For now, I'm going to be uploading an employee manual for a fictitious company called Landon Hotel, which we created for the purpose of this demonstration. Let's click open. After that, click execute. Once you've executed it, you'll see here at the very bottom that we'll have an S3 file path. This is where our file is stored in the S3 bucket.
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=97)** Copy this link or the file path. Now go up top over to the /chat. Click on this to expand it. And now again, click try it out. Over here, you'll see that when you click try it out, you have these three parameters that pop up. We're going to clear out of the session ID because we don't have any other session ID that exists. This is our first chat. So next what we're going to do is we're going to paste the data source that we copied over from the bottom, which is our S3 bucket storage link. Next, we're going to ask a question about this document. So now let's ask a simple question such as, what is this document about? Let's execute to see what happens. If you scroll down to the response body, you see that there's an answer that's produced. So the AI application now turned us an answer that says, "This document is an employee manual for Landon Hotels. It provides information about working conditions, benefits, policies affecting employment at the hotel. It also includes sections on changes in policy, employment application, communication, definition of employee status." So you get the idea, right? So we're able to upload a document and ask questions about it. So you get the idea. We're able to upload a document and ask any question about the document, and the AI program will return back an answer related to that. So let's try one more question. "If I go to the Landon Hotel corporate [[Microsoft Office|office]] at 6:00 PM
>
> **[3:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/deploy-and-run-the-chatbot?u=76281980&t=202)** on a Thursday, will it be open?" So we have no idea about what time the Landon Hotel Corporation is open until, so let's see whether this program will be able to give us an answer. Click execute. Let's see what happens. Yeah, it produced a response stating that, "No, the Landon Hotel corporate offices are open for business from 8:00 AM to 6:00 PM Monday through Friday. If you go to the office on 6:00 PM it will be closed." Which is correct. That's it. Now this concludes the demonstration of our backend application. Congratulations on creating the backend.

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
> **[0:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=5)** - [Person] It's time for a challenge now. Use the knowledge that you've gained in the previous lessons and complete this coding lesson. We'd like for you to use the code that's within the "Begin" folder labeled as "CH_3a_challenge." The libraries needed to complete this challenge have been already populated for you. Go ahead and initialize the FastAPI app.
>
> **[0:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=37)** The libraries necessary for you to complete this challenge have already been populated for you. In this challenge, please go ahead and initialize the FastAPI app, set up the AWS A3 session using your own AWS access key ID and secret access key. Install [[MongoDB]] in code-space and start the database. Update the S3 bucket and S3 bucket path based on what you've defined in your AWS environment. Once you've done that, go ahead and create the upload endpoint. Next, extract the file name from the uploaded file, and save the file temporarily to a local file system, then get the file size and get the upload timestamp, once that's done, upload the file to AWS S3 bucket, remove the local file after upload and prepare [[Metadata]] stored in MongoDB. After that, insert the file metadata into MongoDB, and then, return the response. Once that's done, go ahead and configure exception handling. So to summarize, in this challenge, you are going to be uploading a file to your S3 bucket and configuring exception handling. Go ahead and give it a try,
>
> **[2:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-complete-the-backend-code-for-file-upload?u=76281980&t=129)** and I'll see you with the solution in the next lesson.

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
> **[0:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=5)** - [Instructor] Welcome back. I hope you took some time to complete the challenge. Now let's take a look at the solution together. We start by importing several libraries which help our app handle file uploads, connect to [[Databases]], and interact with [[Cloud Storage]]. FastAPI is the framework we're using to create our API. The UploadFile library handles file uploads in FastAPI. HTTPException allows us to handle exceptions in a way that returns proper HTTP responses. JSONResponse helps us send [[JSON]] responses to the client. OS is for interacting with operating system, datetime for timestamping events. Boto3 is the AWS SDK for [[Python (Programming Language)|Python]], which allows us to interact with AWS services. AWS Wrangler is a utility that simplifies working with AWS services such as S3. And then we're importing MongoClient from PyMongo, which is used to connect to a [[MongoDB]] database. PyMongo provides tools for working with MongoDB. Next, let's set up our FastAPI and initialize a session with AWS for interacting with S3. Type in app = FastAPI.
>
> **[1:22](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=82)** And then over here, type in your access key ID from your AWS account and the secret access key that belongs to that key ID. Once that's done, let's go ahead and install MongoDB in [[Codespaces]]. Copy this command and type it in here. Let that run. Once that's completed, type in the next command over here. After that, let's go ahead and start the database.
>
> **[2:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=120)** All right, now type in the S3 bucket name that you've defined in your AWS environment and the S3 path where it's located. This is my AWS account and I've defined a bucket called docchat. Under this bucket, I have a folder called downloads where I would like the document to be uploaded. Once you've defined the S3 bucket and the S3 path, we now define our FastAPI route that handles the file upload. This creates a post route at uploadFile where user sends a file to the URL and uploadto3s3 function will handle the request. Next, we extract the file name from the uploaded file. If the file name includes a path, we only take the last part. Now let's go ahead and save this file locally. Type in with open. Within the parenthesis, type f, quotes, open quotes, open curly braces and type in file_name, comma, wb as out_file.
>
> **[3:31](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=211)** We open a new file locally with the same name as the uploaded file. Type in content = await data_file.read.
>
> **[3:50](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=230)** And in the next line write out_file.write(content).
>
> **[3:58](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=238)** This line writes to the disc. So to summarize, we open the new file locally and then we read the content of the uploaded file asynchronously and then we write the content to the local file. Once we do that, we get the file size and the upload timestamp. After that, this is the main part where we upload the file to the AWS S3 bucket. Type in wr.s3.upload, open parentheses, go to the next line. Type in local_file = file_name,
>
> **[4:43](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=283)** and then type path = f, open quotes, s3://, S3_BUCKET.
>
> **[4:59](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=299)** This is the S3 bucket name that you had defined, /S3_PATH.
>
> **[5:16](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=316)** And then file_name. Type comma. And in the next line, type in boto3_session=aws_s3,.
>
> **[5:38](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=338)** So we use AWS Wrangler's upload function to upload the file to S3 bucket. The local file parameter is the file where we saved locally, the path parameter specifies where in S3 to upload the bucket. Then we pass the AWS session we created earlier. Next, let's remove the local file. Type in os.remove(file_name). After successfully uploading the file to S3, we delete the local copy to save some space and for security reasons. We then store some [[Metadata]] about the file in MongoDB. This dictionary contains details about the file, including its name, size, the time it was uploaded in the path to the file in S3. We insert this metadata into the file_metadata collection in our MongoDB database. The insert_one function returns a result object that tells us whether the insertion was successful. Then we return the JSON response to the user with details about the file. We prepare a JSON response that includes the file name, size, upload time, the S3 file path, and whether the MongoDB insertion was successful. And the last thing that we do is error handling. We handle any errors that might occur such as if the file is not found or there's a problem during the upload. So go ahead and type in raise HTTPException, open parenthesis, status_code=404, detail=,
>
> **[7:20](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=440)** and then we type in a message that says File not found. If the file is not found, we raise a 404 HTTP exception. For any other exceptions, we print the error and raise a 500 HTTP exception indicating a server error. Finally, we return a JSON response containing all the information we prepared in the response dictionary. Now it's time to run the application to see if we're able to upload a sample file to the S3 bucket. Now let's type uvicorn Begin, which is the folder that we're in, and then the file name, which is CH_3a_challenge.
>
> **[8:17](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-complete-the-backend-code-for-file-upload?u=76281980&t=497)** And then add a colon and type in app --reload. Let that code run. Once you hit Enter, you should see that it says application startup complete. Under ports, you'll see the URL and an icon that says open in browser, click on that and in the browser URL, type /docs and hit Enter. Click on the down arrow here where it says upload file and then click try it out. Select the choose file option and select the file that you'd like to upload. Click open and click on execute. Once it's executed, you'll see that in the response body, it says that the file has been uploaded, showing that the mongo_insert_status is true and it also provides the upload time, the file path where it's located. Now let's take a look at my AWS bucket to see if the file has been uploaded to confirm that our code works. So here's my AWS buckets. Under the buckets, I have the docchat bucket open, and within the docchat bucket, I'm on the downloads folder. And within that folder, we see our Landon Hotel employee manual that's been uploaded. That's how you would go in and confirm that your document has indeed been uploaded to the S3 bucket. If you have any additional questions related to this challenge, please drop your comments in the Q&A section of this course.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=0)** - [Instructor] All right. Now we're going to build the frontend for the AI application that we built in the previous chapter. In the last lesson, we saw how to build the backend and how it worked. Now, before we get coding, I'll give you a quick sneak peek of how the frontend looks. So here's how it looks. Here you have a browse files button, click on that, and then now we're going to load the same employee manual from a fictitious company that we created to test our application. Click open, excellent, it's uploaded. Now let's ask questions. "Hi, what is the employee leave policy?" Excellent, so it says, "Although it doesn't specifically provide employee leave policy, it does mention if an employee requires an extended absence due to medical or personal reasons, they should consult HR." So that's exactly what we wanted it to do. We want it to be able to upload a document or A PDF and be able to ask questions regarding the document and obtain intelligent answers. So I specifically asked this question about employee leave policy because I knew that there is no employee leave policy that was explicitly mentioned in the document. So I wanted to see how the chat bot would [[React.js|react]] to a question like this, which wasn't directly in the document, and it did a pretty good job of telling me that there was no specific employee leave policy, but at the same time, provided additional guidance on how to go about obtaining a leave.
>
> **[1:34](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=94)** There we go. That's a quick demo of our frontend. Great, now let's close our [[Windows]] and go back to our code file. So first we're going to say PIP install Streamlit. After Streamlit is installed, we're going to import request and [[JSON]] modules. These are commonly used for making HTTP request and handling JSON data. Next, go to the ports tab, and over here port, 8000 contains our backend. So expand this and you'll see the entire address. Click on the copy local address option over here, and then paste it over in the backend URL. Make sure that we don't have a slash after .dev, if you have a slash, make sure you delete it. So what we're going to do is we're going to send a user input to a chat API and return the response. At the end we'll get a tuple containing the response answer and the updated session_id. So let's see. Now we're going to create the API endpoint URL for the chat by appending the /chat to the backend URL. After that, we print the input parameters for debugging purposes. Then we're going to prepare the payload for API requests. Here we check if the session ID is provided. If not, we create a payload, JSON string, with only user_input and data_source. If session_id is provided, we include it in the payload. Next, we define the headers for the API request, specifying that the client accept JSON and that the content type of the request is JSON.
>
> **[3:09](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/introduction-to-api-communication-with-python?u=76281980&t=189)** Next, we use the request module to make a post request to the chat API with the specified URL header and payload. After that, we print the JSON response from the API for debugging purposes. Lastly, we check off the HTTP status code of the responses 200, which means it's successful. If yes, return the response answer and the update session_id from the JSON response. And to summarize, this code essentially defines a function chat to communicate with the chat API, sending the user input and the data, and receiving a response, along with the updated session identifier. We also add debugging statements to print input parameters and API responses for troubleshooting.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=0)** - [Instructor] Now let's define a function called upload_file to upload a file to a specific API endpoint using the request module for making HTTP requests. So over here we're defining a function named upload_file that takes one parameter, file_path, representing the path of the file to be uploaded. And after that, we print the file path for debugging purposes. Next, we extract the file name from the file path by splitting it using the back slash as a separator and taking the last part. Then we define the API endpoint for file upload by appending /uploadFile to the BACKEND_URL. Also print the constructed URL for debugging. Next we're going to prepare the payload and files for the file upload request. In this case, an empty payload is issued and a tuple is created with the file data. So the tuple includes the field name data_file, a tuple containing the file name, file object, and the content type. Next we define headers for the file upload request, specifying that the client accepts [[JSON]]. Next, we use the request module to make a POST request to upload the file with the specified URL, headers, payload, and files. Print the HTTP status code of the response for debugging. After that, we check if the file upload was successful. HTTP status code 200 means it was successful. If yes, print the JSON response for debugging
>
> **[1:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/file-uploads-and-advanced-api-interactions?u=76281980&t=97)** and return the file path returned by the API.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=0)** - [Instructor] All right, next, we're going to be importing Streamlit. Streamlit is an open source [[Python (Programming Language)|Python]] library that makes it easy to create and share custom web apps for machine learning and [[Data Science]]. It's designed to help you turn data scripts into shareable web apps in just minutes. And here's a quick example of what Streamlit is. Imagine you are a chef. You have a great recipe for a cake, but you want to share it with your friends. You could write it down in a cookbook, but that would take a lot of time and effort. Instead, you could use a recipe app where you write down your recipe and then you can share it with your friends. By sending them the link, they can see the recipe and even try making the cake themselves. Streamlit is just like that. It's like that recipe app. It's a tool that helps you turn your data analysis or machine learning code into a web app. You write your code in Python and Streamlit takes care of the [[Representational State Transfer (REST)|rest]]. It automatically generates a web interface for your app and it updates the interface in real time as your code runs. So in simple terms, Streamlit is the tool that helps you turn your Python scripts into interactive web applications. It's perfect for data scientists, machine learning engineers, and anyone who wants to share their work with others. So after we import Streamlit, we also import time, which is a standard Python module for time-related functions and we install os, which is used for interacting with operating systems. Next, we're going to configure a page setting for the Streamlit app. This includes setting a page title to Document Chat, and setting a book emoji as a page icon.
>
> **[1:35](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/streamlit-app-basics-and-file-handling?u=76281980&t=95)** And the layout is set to wide. You can change the page title and the page icon to anything that you would like. Next, we're going to initialize the chat history and session variables using Streamlit's session_state. If the messages and the sessionid variables are not already present in the session_state, then they are created with the initial values. Next, we're going to create a file uploader widget using Streamlit's file_uploader function. Here, we're specifying that the user can only upload a single file. You can change this to true if you'd like for the user to upload multiple files, and then we have it accept file types pdf and docx. Lastly, we insert a horizontal line called divider in the Streamlit app. This is done using st.divider to visually separate different sections of the app.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/uploading-files-to-api-endpoints-with-streamlit?u=76281980&t=0)** - [Instructor] Now we're going to process the uploaded file, save it temporarily, and upload it to a specified API endpoint and display any chat messages stored in the session state. So let's check out how to do that. First, we check if the data_file, which is the uploaded file, is not none. And if that's the case, it indicates that the user has uploaded a file. Now we're going to save the uploaded file temporarily. This involves creating a file path in the temp directory with the same name as the uploaded file. The content of the file is then written using a binary write mode. After that, we call the upload_file function to upload the temporary file to a specified API endpoint. The result is stored in the variable s3_upload_url. Once that's done, we extract the file name from the s3_upload_url. It assumes that the file name is the last part of the URL after splitting it by slash. Now we iterate through the chat message stored in that session state and display them in the Streamlit app. The st.chat_message content manager is used to specify the role of the chat message, example, whether it's a bot or a user, and the st.markdown is used to render the content of the message.

> [!info]- Semantic Content
>
> **Code Identifiers:** data_file (1), upload_file (1), chat_message (1)
> **Env Vars:** api (2), url (1)
> **Speakers:** - [instructor] (1)

#### [Building a chat interface with Streamlit](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=0)** - [Instructor] In this lesson, we're going to explore how to handle the user input, update the chat history, display user and assistant messages in the Streamlit app. We're also going to explore how to simulate a streaming effect for the assistant's response. The assistant's response are going to be added to the chat history for future references. So let's dive in and see how to do that. First we use st.chat input to accept the user input in the Streamlit app. The provided message, "You can ask any question," serves as a placeholder. If the user provides input, it is assigned to the variable prompt. Next, we append the user's message, the chat history stored in the session state. Then we display the user's message in the Streamlit app using st.chat_message with the role user and the st.markdown to get the content. Next, we're going to display the assistant's response in the chat message container. If there's no existing session ID, we start a new session by calling the chat function with the user's prompt and the data from the uploaded file. If there's an existing session ID, we continue the session. An empty Streamlit element message_placeholder is created to be used for dynamic updating of the assistant's response. After that, we're going to stimulate the display of the assistant's response with the streaming effect. The response is split into chunks and each chunk is added to the full response string with a small delay of 50 milliseconds. You can increase this delay if you'd like or decrease this. This creates a typing like effect.
>
> **[1:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/building-a-chat-interface-with-streamlit?u=76281980&t=96)** And over here a blinking [[Cursor]] is added to simulate the appearance of typing. Last but not least, we append the assistant's response to the chat history stored in the session state. And that's it. Our front end coding is done. We were trying to create an application that takes in a large document and chats with the user about that document. Now let's see this application in action.

> [!info]- Semantic Content
>
> **Code Identifiers:** chat_message (1), message_placeholder (1)
> **Speakers:** - [instructor] (1)

#### [How to run the front end of the chatbot](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=0)** - [Instructor] I hope you're excited to run the frontend code to see it in action. So before we run the frontend code, make sure that the backend code is also running. Once the backend is up and running, create a new bash and type cd Begin/. Begin is our folder. Once that's done, type streamlit run and paste the name of this frontend file and let it run. There we go. Once you finish running this, go to the Port tab, and now make sure that you have 8501 as one of your ports because that is the port that our frontend is on, as you see over here. If you don't see that in the Port tab, go down and add port. I've already added this. So here we see under visibility that both of these ports are private. Let's make them public. 8000 is the port that contains the backend. 8501 is the one that contains the frontend. So click on the globe button next to the 8501 port, which should open our application in a new tab. Click on Browse files. Now we're going to upload Landon Hotel Employee Manual. This is a fictitious hotel that we've created for the purpose of this course, and here are the contents of the manual. Now let's ask a question that's related to the document, but not directly provided in the document. So let's ask, "If I'm a software developer at Landon Hotels,
>
> **[1:41](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/how-to-run-the-front-end-of-the-chatbot?u=76281980&t=101)** can I work as a bartender after working hours?" Let's see what it responds. You see a little man running. It shows that the program is working as intended. All right, now it says, "According to the information provided, employees at Landon Hotel are allowed to hold outside jobs in non-related business or professionals as long as they meet performance standards." And at the end it says, "Therefore, it would be best to consult with your supervisor or HR department to determine if working as a bartender after working hours would be permissible." So this is exactly what we expected out of the chat bot. Provide us information about what's written in the manual or the document, and then also provide us information on the next steps. Now let's check to see if it can answer a question in Spanish. I'm going to ask what this document is about in Spanish. Excellent. So it says the document is an employee manual for Hotel Landon, which is exactly what it is. So it could not only take prompts in English, but it can also take prompts in other languages and respond accordingly. And that's it. Now you've created an end-to-end application where you can upload a document and talk to the chat bot and ask any questions about it, both in English, Spanish, and other additional languages. Congratulations on successfully building this project.

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
> **[0:05](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/challenge-create-a-frontend-ui-for-file-upload?u=76281980&t=5)** - [Instructor] Now it's time for a new challenge. Use the knowledge that you've gained in the previous lessons to complete this file that's labeled CH_4a_Challenge.py. I've added comments in the file for you to be able to complete this coding challenge. The objective of this challenge is very similar to the chapter three challenge. In the chapter three challenge, you had uploaded the file using backend, now you will be creating a front end for the user to select and upload a file to the AWS S3 bucket. To complete this challenge, import the necessary libraries, set up FastAPI endpoint URL where the file will be uploaded, create a function to handle the file upload, prepare the file to be sent, and send the post request to the FastAPI server. Once sent, check the response status code to ensure that the file was successfully uploaded. And if successful, display a successful message. If it wasn't successful or if an error occurs, display an error message with the response text. Configure the page with a title icon and layout just like the way we did in the previous lesson. Allow the user to select a file of specific types. You can indicate as many file types as you would like. If a file is selected and the Upload button is clicked, call the function to upload the selected file. Once all of this is done, go ahead and run this command to see what happens. Go ahead and take a moment to complete this challenge.
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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=0)** - [Instructor] I hope you took some time to complete the challenge. Now let's take a look at the solution. Let's go ahead and import the necessary libraries. The first library that we're going to be importing is of course, Streamlit. So go ahead and type import streamlit as st. To recap, Streamlit is the library for building web apps with very little code. It simplifies the process of creating user interfaces. Now let's go ahead and import requests. And to recap, this [[Python (Programming Language)|Python]] library is used to send HTTP requests. Here we use it to send files from the Streamlit app to a FastAPI backend. Next we define the URL of our FastAPI backend where files will be uploaded. This URL over here, points to a local server running FastAPI. Meaning FastAPI is running on your machine. Now let's move on to the main function that handles the file upload process. Here we've defined a function that takes the uploaded file as an argument. The file's dictionary assigns the file to the key called data_file, which then matches the parameter name in FastAPI. Let's send a POST request to the FastAPI URL with the file. Type in requests.post FastAPI_URL, files
>
> **[1:40](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=100)** equal files. Now it's time for us to check the response from FastAPI to see if the upload was successful or if there was an error. So go ahead and type in response.status_code ==200: And if it is indeed successful, we're going to have it display that type in st.success. And within parentheses, we type file uploaded successfully. And this is the message that we're going to be displaying. And then in the next line, type in st [[JSON]] response.json
>
> **[2:37](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=157)** and then close parentheses. This line displays the message in the front end. If the status is anything other than 200, then something went wrong and we want to indicate that. Within the else statement, go ahead and type st.error and then have it display the message error during file upload, and then have and then concatenate that with response.text. We display an error message and we include the error details from the FastAPI using the response.text.
>
> **[3:29](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=209)** Now let's move on to the Streamlit interface where the user interacts with the web app. Let's go ahead and set it up. Go ahead and type in st.set_page_config
>
> **[3:47](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=227)** Type in page title, page_title = and you can label this whatever you would like. You can label this as my app. I'm going to label this as challenge. And I'm going to have the same page icon that we used during our lesson, which is the little notebook symbol. I'm going to copy paste it from the previous code. You can use any emoji or symbol of your choice and then say layout = wide. Excellent. Now that we've configured the page, it's now time for us to configure the uploader widget. So go ahead and type uploaded_file = st.file_uploader.
>
> **[4:52](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=292)** Open parenthesis, type in choose a file to upload. You can modify this message in any form that you'd like to indicate to the user that they need to choose a file to upload, type in comma, and then type equals. And this is where you would indicate what type of files you would like to allow the user to upload. I'm going to say docs, csv,
>
> **[5:26](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=326)** text file, PDF
>
> **[5:36](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=336)** Finally, we're going to add a logic to check if a file was uploaded. And if so, allow the user to click a button to start the upload process. So let's go ahead and do that. I've already added a few lines of code here that checks if the user has uploaded a file. If a file is uploaded, then the following code block runs. This line over creates an upload button, when clicked, it triggers the upload file function, sending the uploaded file to FastAPI for processing. Now we need to call a function to upload the selected file. Go ahead and type in upload_file. Open parentheses, type in uploaded_file. That's it, we're done. Now it's time for us to go ahead and run this command to check if our code is working. We're in the begin folder and we're running this file name over here. Click open in browser, and here we go. We've created our front end. Click browse. This time I'm going to upload the PDF version of the same file that we had uploaded in chapter three. And click open and go ahead and click upload. We see a message that says File uploaded successfully, and here's the file path where it's been uploaded
>
> **[7:12](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/solution-create-a-frontend-ui-for-file-upload?u=76281980&t=432)** to our S3 bucket. Here's the date and time when the file was uploaded. So let's go ahead and check our S3 bucket to see if we see this PDF version. Here we are. I'm within my AWS console under the docchat S3 bucket, within the folder downloads. And you see over here that we now have the PDF version of the same file uploaded on the same day. So this proves to us that our front end is indeed working as intended.

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
> **[0:00](https://www.linkedin.com/learning/advanced-python-projects-build-ai-applications/your-next-steps?u=76281980&t=0)** - Congratulations on completing this course and creating your [[Python (Programming Language)|Python]] project portfolio. When time comes for you to show off your Python and AI skills, you'll be glad that you have this portfolio of work that you can exhibit. This project portfolio will serve as a visual representation of your coding skills, creativity, and problem solving abilities. By now, you should also have a good understanding of data analytics techniques, including data cleanup, preparation, and visualization using Matplotlib, model selection, evaluation, model deployment, and a good introduction to FastAPI and AWS integration. I hope this experience has expanded your Python skill set. From setting up CORS middleware to building a sophisticated chat interface with Streamlit, you've now completed a journey encompassing API communication, file upload, and advanced interactions. Together we explored how to create OpenAI-based applications that use [[MongoDB]] and AWS. If you'd like to continue learning about AI tools and keep yourself updated on the latest AI news, check out my newsletter and don't forget to follow me on [[LinkedIn]]. As you move forward, remember, learning doesn't end here. Keep exploring and have some fun along the way. Happy coding.

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