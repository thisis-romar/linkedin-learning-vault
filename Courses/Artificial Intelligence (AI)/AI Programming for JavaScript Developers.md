---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: ai-programming-for-javascript-developers
url: "https://www.linkedin.com/learning/ai-programming-for-javascript-developers"
duration_minutes: 115
duration: 1h 55m
level: Advanced
updated: 4/15/2025
learners: 30350
skills:
  - AI Software Development
  - JavaScript
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/ai-programming-for-javascript-developers-3810071/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGSqyG8nI7k1g/learning-public-crop_675_1200/B4DZW6Gue_HYAY-/0/1742584080610?e=2147483647&amp;v=beta&amp;t=nFZVzcKHTccanZhwa2WZBn1rLuwDqbPZkLjCuij-kz4"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Generative AI Skills for Web Developers]]'
prev_courses:
  - '[[Build with AI- Beyond Pair Programming with AI]]'
next_courses:
  - '[[Build a JavaScript AI App with React and the OpenAI API]]'
path_nav: '[{"path":"Building Generative AI Skills for Web Developers","position":9,"total":10,"prev":"Build with AI- Beyond Pair Programming with AI","next":"Build a JavaScript AI App with React and the OpenAI API"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - topic/web-development
  - skill/ai-software-development
  - skill/javascript
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/AI%20Programming%20for%20JavaScript%20Developers.md)

![AI Programming for JavaScript Developers](https://media.licdn.com/dms/image/v2/D4D0DAQGSqyG8nI7k1g/learning-public-crop_675_1200/B4DZW6Gue_HYAY-/0/1742584080610?e=2147483647&amp;v=beta&amp;t=nFZVzcKHTccanZhwa2WZBn1rLuwDqbPZkLjCuij-kz4)

# AI Programming for JavaScript Developers

> AI is becoming more and more of a requirement for JavaScript development projects. You can use AI technologies for UI enhancements, as well as built upon several AIs with JavaScript. As we move toward a world where more AI programming is normalized, the JavaScript ecosystem contains tools to make your work as a developer easier. In this course, software developer and instructor Eve Porcello survey

> [LinkedIn Learning](https://www.linkedin.com/learning/ai-programming-for-javascript-developers) | 1h 55m | Advanced | 30K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Learn to build AI-enhanced applications](#learn-to-build-ai-enhanced-applications)
  - [Understanding AI in the JavaScript ecosystem](#understanding-ai-in-the-javascript-ecosystem)
  - [What you should know](#what-you-should-know)
- [**1. Creating the App**](#1-creating-the-app) (5 videos)
  - [Installing OpenAI with npm](#installing-openai-with-npm)
  - [Generating an API key](#generating-an-api-key)
  - [Choosing and setting a language model](#choosing-and-setting-a-language-model)
  - [How to use CoderPad](#how-to-use-coderpad)
  - [Solution: Configuring AI Inputs](#solution-configuring-ai-inputs)
- [**2. Working with Prompts**](#2-working-with-prompts) (8 videos)
  - [Writing functions](#writing-functions)
  - [Working with streams](#working-with-streams)
  - [Creating a prompt](#creating-a-prompt)
  - [Refactoring functions with code prompts](#refactoring-functions-with-code-prompts)
  - [Setting templates](#setting-templates)
  - [Challenge: Customizing questions](#challenge-customizing-questions)
  - [Solution: Customizing questions](#solution-customizing-questions)
  - [Solution: Building OpenAI prompts](#solution-building-openai-prompts)
- [**3. Incorporating APIs**](#3-incorporating-apis) (6 videos)
  - [Accepting user input with readline](#accepting-user-input-with-readline)
  - [Creating image descriptions based on a URL](#creating-image-descriptions-based-on-a-url)
  - [Transcribing audio files with OpenAI](#transcribing-audio-files-with-openai)
  - [Building a Node app to transcribe audio](#building-a-node-app-to-transcribe-audio)
  - [Using DALL-E 3 for image generation](#using-dall-e-3-for-image-generation)
  - [Solution: Connecting with APIs](#solution-connecting-with-apis)
- [**4. Customizing the Assistants API**](#4-customizing-the-assistants-api) (5 videos)
  - [Using the Assistants API playground](#using-the-assistants-api-playground)
  - [Creating an assistant in a Node application](#creating-an-assistant-in-a-node-application)
  - [Adding messages to threads](#adding-messages-to-threads)
  - [Running and parsing the assistant response](#running-and-parsing-the-assistant-response)
  - [Solution: Working with the Assistants API](#solution-working-with-the-assistants-api)
- [**5. Utilizing LangChain Features**](#5-utilizing-langchain-features) (5 videos)
  - [Setting up a LangChain project](#setting-up-a-langchain-project)
  - [Creating a chat template](#creating-a-chat-template)
  - [Using runnable sequences](#using-runnable-sequences)
  - [Combining multiple chains](#combining-multiple-chains)
  - [Solution: Building a conversation pipeline](#solution-building-a-conversation-pipeline)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Learn to build AI-enhanced applications](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/learn-to-build-ai-enhanced-applications?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/learn-to-build-ai-enhanced-applications?u=76281980&t=0)** - [Eve] As [[JavaScript]] developers, [[User Experience (UX)|user experience]] is always at the top of our minds. AI can help us tremendously with this. In this course, we'll take a look at the open AI APIs that we can use to make our apps more conversational, more accessible, and more fun. We'll look at image generation tools, transcribers and chatbots. We'll even create our own AI assistants that help us write better code and give better presentations. Let's get ready for the future by building some AI enhanced applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[User Experience (UX)|User experience]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [eve] (1)

#### [Understanding AI in the JavaScript ecosystem](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/understanding-ai-in-the-javascript-ecosystem?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/understanding-ai-in-the-javascript-ecosystem?u=76281980&t=0)** - [Eve] A lot of our first interactions with AI come from a screen that looks like this. We stare deeply into the eyes of [[ChatGPT]] and ask it questions and it returns some data for us. So ChatGPT is using these [[Large Language Models (LLM)|large language models]] so that we can ask questions, and then the response will be content that's generated. We can use it to help us edit, to generate images, all sorts of different things. But our interactions with AI don't have to stop here, we can also make use of the OpenAI APIs and integrate this information with our [[JavaScript]] applications. We're going to come here to [openai.com](https://openai.com) and log in. This will take us to this screen that's asking us to log in with either email address or continue with [[Google]], all these different things. If you've never created an account before, you can do so here. So I'm going to click Sign up, and here I'm going to log in with an email address. I'll just say eveporcello@[gmail.com](https://gmail.com). I will create a password. So this is going to ask for information about ourselves. So you can put in your name, your birthday if you want to. And then when we agree to this, this is going to take us to either choose ChatGPT or this API. So because we're trying to incorporate the API,
>
> **[1:35](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/understanding-ai-in-the-javascript-ecosystem?u=76281980&t=95)** let's select that. And this is going to take us to the OpenAI developer platform. So, you do need to create an account to do this, but your investment in this will be pretty minimal if you're not using it too much. As your applications get bigger, your usage will go up and you'll start having to pay for OpenAI's developer platform, but for now you can just get started here. So here in the [[OpenAI API]] keys section, you may have to verify your phone number to get started here. So I'm going to do that on a second screen. It will ask you for the two factor off, and then this will tell you that you are going to get a few free API credits. So this will be everything you need to get started. So we'll show you how to create a secret key in the future, but just as a quick little demo, you give it a name, you create your key, and it's added to your API keys list. So this is really everything that you need to get started on an OpenAI API project. From here, we're going to incorporate [[Node.js]] and put all of these cool features together in our own applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (3), [[OpenAI API]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[JavaScript]] (1), [[Google]] (1)
> **Env Vars:** api (6)
> **CLI Commands:** make (1), node (1)
> **URLs:** [openai.com](https://openai.com) (1), [gmail.com](https://gmail.com) (1)
> **File Paths:** node.js (1)
> **Speakers:** - [eve] (1)

#### [What you should know](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/what-you-should-know?u=76281980&t=0)** - [Instructor] I wanted to share a few things about my setup before we get into it. We are going to be using [[Node.js]] in this class, so, make sure that you have Node installed. The quickest way to find out if you have it installed is to type node -v into your terminal or command prompt. That should return some sort of version number. I'm using version 18. You can use anything 18 or greater. If you have an earlier version, it's worth a shot, probably going to work, but if you do run into any hiccups along the way, you can try updating. One of the fastest ways to get your Node.js installation updated, or set up from scratch, if you haven't worked with it before, is just to head over to [nodejs.org](https://nodejs.org). You can choose either the LTS version or the most current version. You don't have to use the most brand new version of Node to make all this stuff work, but this is an option, if you'd like. You can select this, and download it to your computer, and it will run the installer for your Mac, if you're using a Mac, or if you're on a PC, or you can always check out the other Downloads section to download it a different way. Another thing I wanted to point out is that I'll be using Visual Studio Code for the remainder of the course. VS Code is one of many code editors that you can choose from. It's a free one, too, at that. So, if you prefer a different one, go for it, but I will be using VS Code in my setup.
>
> **[1:37](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/what-you-should-know?u=76281980&t=97)** So, that's everything we really need. From here, we will start to build our own apps, and you can follow along with the exercise files if you get stuck anywhere along the way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (2)
> **CLI Commands:** node (5), make (2), find (1)
> **Tools:** vs code (2), terminal (1), command prompt (1), visual studio (1)
> **Prerequisites:** setup (2), set up (1)
> **File Paths:** node.js (2)
> **URLs:** [nodejs.org](https://nodejs.org) (1)
> **Env Vars:** lts (1)
> **Versions:** version 18 (1)


### 1. Creating the App

[↑ Back to Table of Contents](#table-of-contents)

#### [Installing OpenAI with npm](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/installing-openai-with-npm?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/installing-openai-with-npm?u=76281980&t=0)** - [Instructor] The place we'll get started with this project is we want to make sure we have our node project initialized. So inside of this 01-01b folder, type [[npm]] init -y. This is going to create a package [[JSON]] file that's going to help us manage our projects dependencies. The next thing that I'm going to do is I'm going to run npm install --save openai. This is going to allow me to interface with all of the amazing open AI tools. Inside of this index.js file, we're going to start to create our little applications. So we're going to import OpenAI from "openai." We're going to create openai = new OpenAI. So a new instance of this OpenAI function. And then let's just go ahead and console.log (openai) to make sure that everything is working okay. So either with your terminal here or with your terminal here, you can run node index. And the first thing we see here is an error that says that we can't use an import statement outside of a module. So there's one little configuration thing we need to do with Node, and that's to come over here to our package.json. Anywhere inside of this package.json, we need to add something. And it's going to tell us right here
>
> **[1:31](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/installing-openai-with-npm?u=76281980&t=91)** that we need to add "type": "module." So this will allow us to use these import statements. And if we try to run that again, so again, node index will run this file. And now we see another error. We've cleared the one about our imports, but we're still getting an error that we don't have our API key set up. In the next video, we'll generate and add this key so that we can start making requests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (3), [[npm]] (2)
> **CLI Commands:** node (4), make (2), npm (2)
> **File Paths:** package.json (2), index.js (1)
> **Env Vars:** json (1), api (1)
> **Tools:** terminal (2)
> **Prerequisites:** install (1), set up (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)

#### [Generating an API key](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/generating-an-api-key?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/generating-an-api-key?u=76281980&t=0)** - [Instructor] Now that we have the base of our Open AI app set up, we need to generate our API key. So we'll do that over here at [OpenAI.com](https://OpenAI.com). We're going to log in. We're going to log in with whatever method we have set this up with where if you need to do this now you can, I'm going to log in with my [[Google]] account here and then I'll select API. This will take me to this page here where I can find in the left nav API Keys. So here I'll generate my secret key. You give it some sort of name, which doesn't really matter what the name is. I'll call it test key. This is going to create that secret key. After, of course, I prove that I'm not a robot. To use robots you can't be a robot, right? So we'll copy this. Just know that you're going to have kind of one time access to this API key. When you come back, you won't be able to see it again, but you would be able to generate a new one if you wanted to. I'll go back to the code. So inside OpenAI, I am going to pass in this configuration object. We'll say API key and set that equal to that key. Now, if I try to run this, node index, I should see some content coming back from OpenAI. So that should suggest that that's working. Now, it's also possible to set this up as more of a global variable.
>
> **[1:33](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/generating-an-api-key?u=76281980&t=93)** The way that we can do that is this. So let's really test this out. I'm going to delete this for now. I'll give that a save. I'm going to say Export OpenAI_API_key, and we'll set that equal to our long key there. There doesn't really seem like anything happened, but if I try Node Index again, we should see the same output. It's still using that API key correctly. So either way is totally fine. It's also possible to set it with an environment variable with Node. If you ever get stuck with your environment variables, you can always come over here to the docs platform, [Openai.com](https://Openai.com) Docs quickstart, and this will take you through the process of setting up your API key. Now, they also have instructions for Mac and for [[Windows]]. So if you're using a Windows machine, and that doesn't work because you have to use the set X command, just follow these instructions here. Okay, so now we should have this all set up, and in the next video we're going to select a large language model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Windows]] (2), [[Google]] (1)
> **Env Vars:** api (7)
> **CLI Commands:** node (3), find (1)
> **URLs:** [openai.com](https://openai.com) (2)
> **Cross-References:** go back to (1), in the next (1)
> **Prerequisites:** set up (2)
> **Documentation:** the docs (1)
> **Speakers:** - [instructor] (1)

#### [Choosing and setting a language model](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/choosing-and-setting-a-language-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/choosing-and-setting-a-language-model?u=76281980&t=0)** - [Instructor] Sometimes when we switch folders within our project, we need to make sure that our key is set. So I'm going to just go up here, export OPENAI_API_KEY, and our API key. We'll hit enter, and then if we type node index, we should make sure that this is running. So that's good. The next thing I'll do is create an async function called hello. And this is going to be our first request to the OPENAI_API, so we'll say, const completion = await openai.chat completions.create,
>
> **[0:40](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/choosing-and-setting-a-language-model?u=76281980&t=40)** and here we're going to pass in a couple different things. So the first thing we'll say is messages. This is going to be an array. And here we'll say role: "system,"
>
> **[1:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/choosing-and-setting-a-language-model?u=76281980&t=60)** and then we'll say content: "You are a great robot!" All right, so that'll be kind of our starting message when we send this request. And we're also going to use this model. There's a bunch of different models that you can use when you're creating your AI applications. You can find all of these in the OpenAI documentation, and they all do slightly different things. So [[ChatGPT]] of course, [[DALL-E]], which is all about images, and there's a few others that you can check into as well. So it's just up to you what you're trying to create. Because we're using kind of this chat completions model, we're going to use GPT-3.5. So gpt-3.5-turbo. Love it. Then inside of here we're going to console.log(completion.choices[0]). And that's going to help us parse that response object from ChatGPT. And then we can go ahead and send hello. Back to our terminal. Let's type node index. And this is telling us that we have a response, right? So role: 'assistant' and content, 'Thank you! I strive to be the best robot that I can be.' How nice.
>
> **[2:33](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/choosing-and-setting-a-language-model?u=76281980&t=153)** So we've sent a message, a chat message to our robot using this function, using this OPENAI_API, and we've set the model. Again, there are tons of different models that you can use, and within that playground that we talked about, you can configure these and check out some of the ones that are available.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2), [[DALL-E]] (1)
> **Env Vars:** openai_api (2), openai_api_key (1), api (1), dall (1), gpt (1)
> **CLI Commands:** make (2), node (2), find (1)
> **Versions:** 3.5 (2)
> **Cross-References:** we talked about (1)
> **Tools:** terminal (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [How to use CoderPad](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/how-to-use-coderpad?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/how-to-use-coderpad?u=76281980&t=0)** - [Instructor] This course includes automated code challenges that appear when you click on the challenge links in the course's table of contents. Each challenge includes instructions and a couple of code editors that you can use to create and test your own solution to the challenge. These challenges are hosted by Coder Pad, and they appear in the same area of the course page where you watch the course's videos. We recommend using a desktop browser for the best experience with the code challenges, but you can use the [[LinkedIn]] learning mobile app if you prefer. The code challenge has four areas. We have instructions here on the top left, a code editor for your answer in the top right, another code editor where you see higher code is used in the bottom right, and a console for output in the bottom left. You can use these drag handles to allocate space as you'd like. And to get even more horizontal space for the code editors, you can collapse the course's table of contents on the left. Each challenge has instructions that include a description as well as the parameters and the expected results. So once I've read through the code challenge, I can go ahead and start to write my answer. We create our answer in the top right code editor, and there are comments in the starting code showing where to put our solution. So here I can take in this pets array and I can create a new function called by category. By category is going to take in a category,
>
> **[1:36](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/how-to-use-coderpad?u=76281980&t=96)** and then we're going to check to see, does the pet exist? If so, let's compare the pet category with the category. Then we're going to return pets (instructor typing) .filter and we'll call by category, cat.length. So this is a function that's just going to count all of our cats, and it's going to take a look at all of this data to just grab the cats. No dogs, no rabbits, no anything else. When you click Test My Code, you'll see a message indicating whether your code returned a correct result. If your code isn't successful, let's say I didn't put .link on there, we'll see an error message. And if your code isn't successful, you can ask for help. So we can set show expected result to true, so that's going to show us the expected result. We can also turn on hints by setting that to true, and that's going to return some various hints so that my path to finding the right answer is a little easier. Regardless of whether your answer is successful, you'll see messages in the console output in the lower left. If any messages are too long to fit in that area, if any messages are too long to fit in that area, you can always scroll sideways to see all of the text.
>
> **[3:11](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/how-to-use-coderpad?u=76281980&t=191)** When you've finished each code challenge, return to the course's table of contents and click the next video to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1)
> **Definitions:** is a  (2)
> **CLI Commands:** cat (1)
> **Cross-References:** next video (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (instructor typing) (1)

#### [Solution: Configuring AI Inputs](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-configuring-ai-inputs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-configuring-ai-inputs?u=76281980&t=0)** (energetic music)
>
> **[0:05](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-configuring-ai-inputs?u=76281980&t=5)** - [Instructor] We already have our OpenAI constructor here. The next step we need to take is we need to complete our initialized OpenAI function. So this will take in the API key, which we'll need to connect to that API. We also need the model name. And the model name should be set to GPT-3.5 Turbo. Now within the function, we can create the client, which is just a new instance of OpenAI class, and then we'll pass the API key in here. From here, we also need to configure our model, that'll look like this. So const model config, set that equal to model, model name, and temperature 0.7. Now we don't need the null here because we have defined the client already, and then we also can get rid of the empty object next to the model config. So if I test the code, it looks like I did it correctly, awesome. So we've successfully set up our [[OpenAI API]] client. This is exactly what it looks like, even though we still are mocking the model here, we're going to be able to connect by passing all of the right variables to it. The API key, the model name, and everything should be set up and ready for prompts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (1)
> **Env Vars:** api (5), gpt (1)
> **Prerequisites:** set up (2), configure (1)
> **Versions:** 3.5 (1), 0.7 (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (energetic music) (1)


### 2. Working with Prompts

[↑ Back to Table of Contents](#table-of-contents)

#### [Writing functions](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/writing-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/writing-functions?u=76281980&t=0)** - [Instructor] Let's take a closer look at this hello function, so that we understand all of the components of it. The first thing I want to remind you is that whenever we're sending a request to the [[OpenAI API]], we make the request and then we receive a response. So this is an asynchronous call. We need to handle that data asynchronously. So we're going to await the response from the OpenAI API in order to return that chat response. Now, inside of this create configuration object, we have this messages array. So think about the messages parameter as being kind of the conversation history of our conversation with OpenAI. So the system is going to say you're a great robot, but then we can also add another one of these objects here with a role. And for this role, let's go ahead and say user, the content for this user information is going to be some sort of question. So why don't we ask it, what is the closest skew resort to Boise, Idaho? Okay, so again, we're using this system role here to supply some instructions or some context to the model, and then this is going to be the message that comes from the person who's interacting with the model. So they could be questions, statements, some sort of input.
>
> **[1:36](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/writing-functions?u=76281980&t=96)** It's always something that we're trying to get from this model. So in this case, tell us what the closest ski resort is. So let's open up our terminal again to make sure that this is working. Remember, if you're getting any sort of API key error, you can always go up to find your export here. Then we can run node index, and this is going to return. The closest ski resort to Boise is Bogus Basin, which I personally think is the funniest name of a ski resort ever. So this is going to give us a little bit of data because the user has asked this question of the model, and the role of assistant here is what the model is going to reply with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (2)
> **CLI Commands:** make (2), find (1), node (1)
> **Env Vars:** api (3)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Working with streams](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/working-with-streams?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/working-with-streams?u=76281980&t=0)** - [Narrator] Our hello function here is making a request to the [[OpenAI API]], and then it's returning all of the data at once. So if I type node index, we're going to see it waits until that data is available and then it passes it all back to us in a chunk. So now I want to make some adjustments to this function in order to handle it like a stream. So we're going to replace this with the keyword stream. We're going to add another key to our configuration object here and call it Stream True. And we want to make sure that we're inside of the hello function still. We're going to say four, await, const chunk of stream. And then what we'll use here is process.standardoutput.write. So this is going to write some data to our terminal, and here we're going to say chunk.choices, zero.delta.content,
>
> **[1:09](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/working-with-streams?u=76281980&t=69)** and then we'll use an empty string there for this. So we're going to say add this or an empty string. We then are going to remove this and then let's try to run our program again. Node index, see it's going to write all of that out until it's out of content and then it's going to jump out of the process. So how's this working? Basically, whenever we make this request to the OpenAI API, it's going to send that data back to us in little chunks so we can process this instead of as a request and a response as a stream. We're going to loop through that stream using the four of loop. Anytime that data is coming back, we're going to print that to our terminal. And then once we're done, we're going to just jump right out of that process. So this is a slightly different approach, a slightly different pattern, but it probably mirrors what you see in a lot of your [[ChatGPT]] apps that you might use, that's going to just write that data as it comes versus having to wait until all of it is ready to display.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (2), [[ChatGPT]] (1)
> **CLI Commands:** make (3), node (2)
> **Env Vars:** api (2)
> **Tools:** terminal (2)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Creating a prompt](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-a-prompt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-a-prompt?u=76281980&t=0)** - [Presenter] We're going to use our message roles to create more of a customized prompt to use with [[ChatGPT]]. So the way that I'm going to do that is here. So the question I want to ask here is to have ChatGPT, be a hype man, a motivational speaker for me, so that I can continue to code. So here in our content section here, we're going to say you are a motivational speaker who is encouraging me as a [[JavaScript]] developer to keep studying and doing the hard work necessary for success. All right, cool. Now, if I go to the user, we're going to say, what do I need to study to be a great JavaScript developer who takes advantage of the latest techniques in AI?
>
> **[1:15](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-a-prompt?u=76281980&t=75)** Alright, now I'll open up the terminal, I'll make sure that our API key is plugged in and then we'll run node index and it's going to spit out all of this stuff for me. Nice. So, it's giving me a little bit of a list of things that I should learn, but also it's giving me a little bit of a PEP talk. It's telling me that with determination and hard work, I'm going to become exceptional. So, I love that. Thank you for the PEP talk. Something that we can do to adjust this a little bit is we could add some configuration to make this a little bit shorter. So we'll keep our stream true. We're going to say max_tokens: 64. I'll open my terminal again. So this is just going to give me a shorter response. Alright so, now I have been given a PEP talk. I've made my content prompt a little more specific and I've asked for a little bit of motivation. So as you're developing your own applications, just know there's this prompt examples page that has a bunch of cool ones too. So summarize for a second grader. This is where we're going to give our API an instruction as the system,
>
> **[2:49](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-a-prompt?u=76281980&t=169)** but then our user content is a little bit too lofty, it's a little too advanced for a second grader. This is going to make that a little bit more approachable for that audience. There's a sarcastic chat bot that's kind of funny, Socratic tutor. So that's a good way to ask questions and get questions. And then there's also some code ones as well. So check this out. Maybe this will be a good starting place for you as you develop your own apps.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2), [[JavaScript]] (2)
> **Env Vars:** pep (3), api (2)
> **CLI Commands:** make (3), node (1)
> **Tools:** terminal (2)
> **Code Identifiers:** max_tokens (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Speakers:** - [presenter] (1)

#### [Refactoring functions with code prompts](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/refactoring-functions-with-code-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/refactoring-functions-with-code-prompts?u=76281980&t=0)** - [Presenter] Let's take a look at the system role and we're going to adjust this to handle code as an input. So for the system role in this case, I'm going to say you are an amazing [[JavaScript]] developer.
>
> **[0:21](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/refactoring-functions-with-code-prompts?u=76281980&t=21)** When I send a codeblock of JavaScript, you will return a more reusable and better written version of this code. All right, then we're going to pass in a little bit of code. So I'm going to test this out here with a script.js file, and we're going to create a function called add. And here what we're going to do is this. We're going to say x and y, and then we'll say console.log x plus y,
>
> **[1:14](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/refactoring-functions-with-code-prompts?u=76281980&t=74)** and we'll call the ad function. So let's also pass in three and four here. Let's make sure that our API key is there and we will run node script. Node script should return seven. So let's change this a little bit. I guess, we'll say x plus y.
>
> **[1:45](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/refactoring-functions-with-code-prompts?u=76281980&t=105)** Let's try that again. And we still should see the correct answer. Let's also replace that with there VAR. And now that we know that that's working, let's put this into our content blob for the user.
>
> **[2:08](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/refactoring-functions-with-code-prompts?u=76281980&t=128)** And we're going to get rid of all those spaces.
>
> **[2:19](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/refactoring-functions-with-code-prompts?u=76281980&t=139)** Just so that looks a little nicer. All right, let's see what we get here. We're going to run node index instead of node script and check out what this has done for us. This is pretty cool. So what I've plugged in is we created this whole new variable, right? Then we return that new variable and console log it. So in order to make this a little more reusable, what we really want to be doing is something shorter, a little more turfs, keep the syntax a little smaller. So this is just going to return x plus y. Every time we're using this system role, we're prompting the [[ChatGPT]] API to understand the context a little bit more. We're telling it that when it receives a code block returns something better. We put in this blob of code and what it returns is something a little more terse, a little bit more readable, and a little bit more reusable.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[ChatGPT]] (1)
> **CLI Commands:** node (4), make (2)
> **Env Vars:** api (2), var (1)
> **File Paths:** script.js (1)
> **Speakers:** - [presenter] (1)

#### [Setting templates](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/setting-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/setting-templates?u=76281980&t=0)** - [Narrator] It's also possible to use templates to accept user input from our function. So let's go ahead and make some adjustments to this. The first thing we'll do is we'll get rid of this long instruction that we're giving to our system, and instead of adding that, we're going to say after we [[Zoom]] in a little bit, you are a world renowned author. Then we're going to replace this content with a couple of back ticks. So back ticks are in the upper left hand corner of your keyboard underneath the escape. So this is going to be our template. We'll use a template string for this, and we will say, write this in the style of Shakespeare, and then this will be our template, dollar sign, a couple of curly braces text. So the input here is going to come in via the hello function, and we will use this down here. We will say, okay, so that's my text. I want to inject it into the function and I want [[ChatGPT]]-3 to process it and return it in the style of Shakespeare. If we try to run this with Node Index, we should see that our text comes back
>
> **[1:37](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/setting-templates?u=76281980&t=97)** in the style of Shakespeare. Pretty cool, and again, we're always using this asynchronous loop. It's going to stream that content back to our client, which in this case is our terminal. So let's go ahead and adjust this. We'll say Hemingway, just to make sure that this is working. Hemingway should take this flowery, beautiful language of Shakespeare and make it really terse and simple. So let's try it again, node index. Yep, that's a different style coming back, so we can continue to inject those there. Now the other thing I could do if I wanted to make this a dynamic value that comes from the user, comes from the client, we could say author comma text, and then replace that with another template author. If we scroll down a little bit, then we're going to add this to the first parameter here. So we'll use this as the first parameter here. Let's go ahead and say, Joan Didion, and we're plugging in Dickens and returning her work. So, let's go ahead and node index that. Very cool, so all of these different templates are just being injected into the user role, into this list. We're going to process them like we would
>
> **[3:10](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/setting-templates?u=76281980&t=190)** any other [[JavaScript]] arguments, JavaScript parameters that we're going to send, and then ChatGPT is going to be able to handle them here on line 28. Pass them in and we'll get back a different style every time we send a different author.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2), [[JavaScript]] (2), [[Zoom]] (1)
> **CLI Commands:** make (4), node (3)
> **Exercise Files:** template (4)
> **Tools:** terminal (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [narrator] (1)

#### [Challenge: Customizing questions](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/challenge-customizing-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/challenge-customizing-questions?u=76281980&t=0)** (cool music)
>
> **[0:05](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/challenge-customizing-questions?u=76281980&t=5)** - [Narrator] It is time for a challenge. What I'd like you to do is create a prompt that's going to generate some questions for a job interview. This will be a job interview that you'll give and you want to get at least three interview questions for a [[JavaScript]] developer. For extra credit, you could also make this a template to make it dynamic for any kind of developer. So whenever you need to generate three interview questions for developers, you can use them for C++, JavaScript, [[Java]], [[Rust (Programming Language)|rust]], whatever the language might be. So give it a try, and in the next video, I will go over the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2), [[Java]] (1), [[Rust (Programming Language)|Rust]] (1)
> **CLI Commands:** make (2)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (cool music) (1)

#### [Solution: Customizing questions](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-customizing-questions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-customizing-questions?u=76281980&t=0)** - All right, let us finish this challenge. So we want to create a prompt that's going to generate these questions. So the first thing I need to do here in our hello function is make use of this completion object value. We will await OpenAI.chat.completions.create. And then within this object we're going to send the messages array. We're going to spell messages correctly, and then we're going to place a few different roles here. So the system role and content will say you'll be asked to create job interview questions. Then we're going to handle the question. So we'll say inside of a string, give me three interview questions for a [[JavaScript]] developer. We need to specify the model as well. So model, we'll stick with the one we've been using. If you wanted to make this 4.0, you could as well. Okay.
>
> **[1:31](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-customizing-questions?u=76281980&t=91)** And then let's go ahead and console log completion just to see what we get. Alright, so we want to run this now, something that's probably an improvement we could make here. I'm going to right click over where it says terminal. And I'm going to say panel position right just so that we can see this a little more clearly, [[Zoom]] out a teeny bit and we'll type node index. Now it's going to go make that request and this is going to return the entire object. So really what we're trying to drill down into is here. So choices, there's an index zero, there's a message. So somewhere inside of this object is really what we want. So parsing this object is the important part. Let's say choices, brackets zero.message, and let's see what we get there. Alright, so role assistant. And then content is giving us those questions. So if we want to drill down deeper, we could just say message.content. And if I run it again, we should see just those questions coming back. Pretty cool. Alright, closures, memory leaks, inheritance, all the good interview questions.
>
> **[3:07](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-customizing-questions?u=76281980&t=187)** Love it. So the next thing that we want to do here is make this dynamic. So we're going to make use of a template string. We'll use a back tick in place of each of those quotation marks. And then we're going to say dollar sign language. We need our hello function to take in the language value. And then we also need to pass that in down here. So why don't we use [[Python (Programming Language)|Python]]? All right, so injecting it here, plugging it into the string here, and then calling the function with Python at the bottom. If we try to run it again, we should see some Python questions come back, hopefully. Nice. So there's Python. We could also use [[Rust (Programming Language)|rust]] and that's giving us questions every time. And we're always plugging in that dynamic value. So we did it. We made it happen. We have used our chat completions, API, to create a templated question that we can inject a language for three questions for any type of developer. Pretty cool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (4), [[JavaScript]] (1), [[Zoom]] (1), [[Rust (Programming Language)|Rust]] (1)
> **CLI Commands:** make (6), python (4), node (1)
> **Env Vars:** api (1)
> **Versions:** 4.0 (1)
> **Tools:** terminal (1)
> **Exercise Files:** template (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Building OpenAI prompts](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-building-openai-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-building-openai-prompts?u=76281980&t=0)** (light music)
>
> **[0:05](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-building-openai-prompts?u=76281980&t=5)** - [Instructor] We need to complete our create completion request. So we'll start by making some adjustments to our context. Let's set an empty string as the default value for this argument. Then we're going to create the userContent value. This is going to be a logical check here. We're going to check to see is the context true? Do we have a context? If so, then we want to take the question and concatenate that with the context. Then the else condition here will be question. So we're just using an inline if else statement to check this. We return the entire string if context is provided. If not, we have a question. So, from here we have our user question, but what we really want this to read is userContent. So this will handle any conditions where we don't have context or if we want to append any additional content to that string. And we also need the system role. Now, the system role, hard to say that, will define what this particular system is doing. So for example, we can provide a little more information
>
> **[1:40](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-building-openai-prompts?u=76281980&t=100)** about what their role is. You are a helpful assistant that provides clear and accurate information.
>
> **[1:54](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-building-openai-prompts?u=76281980&t=114)** So from here what I'll do is run our test. So we'll click Test the code and our prompt structure is perfect, looking solid. So this is a really important part of working with the [[OpenAI API]]. We have these different roles that allow for our prompts to have a little bit more context before they start to run additional questions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (1)
> **Code Identifiers:** usercontent (2)
> **Env Vars:** api (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light music) (1)


### 3. Incorporating APIs

[↑ Back to Table of Contents](#table-of-contents)

#### [Accepting user input with readline](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/accepting-user-input-with-readline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/accepting-user-input-with-readline?u=76281980&t=0)** - [Instructor] It's also possible to integrate with some of [[Node.js]]'s packages in order to create kind of a little [[CLI]] chat application using Readline. So from Node.js, I'm going to import readline, and that's just from Node.js's standard library. It's a way that we can take input from our terminal. So whatever anyone types in here, for example, our app doesn't do anything with that, but it will in a moment. The next thing that we'll do is do some cleanup here. So I'm just going to get rid of everything that we had before. We're going to create an interface and this is going to attach our input and output to whatever the value of process.stdin is. So whatever the user types in. And then also whatever the user receives back in the terminal. So stdout is what that would be called. And then we're going to say rl.question. And the question that we're going to place here is "What do you want to ask the robots?" So rl.question is a function that's going to take two arguments. The arguments are going to be the question itself as well as a callback function. This is going to be an asynchronous function that's going to make that request to the [[OpenAI API]].
>
> **[1:36](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/accepting-user-input-with-readline?u=76281980&t=96)** So this'll look a lot like it did before. So let res, response, await openai.chat.completions.create.
>
> **[1:49](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/accepting-user-input-with-readline?u=76281980&t=109)** So what do we want to ask? Well, we need to send our messages array. We'll say role: "system," content: "You are a friendly robot." And then we'll say user. Now the question that I've sent here is going to be whatever the user types in, whatever the user inputs here. So the user, let me fix that, role: "user" and the content here is going to be whatever the question is. So we'll just pipe that into the messages value. We also need to make sure that we're using a model. I'm going to continue to use 3.5, but use 4.0 or whatever feels right to you in the moment. We're then going to console.log(res.choices[0].message) so we can grab that value. We're also going to fix this because I put that in the wrong place. So we need that to be outside of this function call, right? So that's why that semicolon can leave too. All right, so the model and the messages should be in the create function, console.log should be outside of it. That is good to go. Let's also call rl.close.
>
> **[3:24](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/accepting-user-input-with-readline?u=76281980&t=204)** That's going to jump us out of the process when we're done asking the question and receiving a response. So if that has felt confusing any step of the way, let's take a look at it over here. We're going to run node index. It's going to ask us "What do you want to ask the robots?" And what I want to ask is what is the population of Eugene, Oregon?
>
> **[3:54](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/accepting-user-input-with-readline?u=76281980&t=234)** As of 2021, the estimated population is around 176,000. Cool, so using our interface, which is creating the containers for whatever we type in and receive out, we run it, we type a question. What is the population of Leavenworth, Washington? That's going to spit out the value as soon as we get it back because we're using that asynchronous function. So using OpenAI and what we know of Node.js together, we're able to create this little CLI application that takes in some input, sends the request, and gets that output back.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (4), [[CLI]] (2), [[OpenAI API]] (1)
> **CLI Commands:** node (5), make (2)
> **File Paths:** node.js (4)
> **Env Vars:** cli (2), api (1)
> **Versions:** 3.5 (1), 4.0 (1)
> **Tools:** terminal (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### [Creating image descriptions based on a URL](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-image-descriptions-based-on-a-url?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-image-descriptions-based-on-a-url?u=76281980&t=0)** - [Instructor] This is a beautiful image of some mountaintops in snow that I want to describe using the [[OpenAI API]]. So, luckily, I have this [[ChatGPT]]-4 Vision API, and this is going to help me describe it using a little node application. This is really cool. So, what we want to do here is we want to adjust what we have so far. We're going to replace this whole function. We'll get rid of readline for now as well. And we want to create a function called imageDescription. ImageDescription is going to use the Chat Completions API, but with a slightly different model. So, await openai.chat.completions
>
> **[0:54](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-image-descriptions-based-on-a-url?u=76281980&t=54)** .create, and in here we're going to add the messages array. We'll say role: "user". Content is going to be two parts. So, the first thing we'll use here is a text type. This all needs to be inside of an object, sorry. So, type: "text". And the text is going to basically ask, "What is this a picture of?" Describe that picture. So, the second part is going to be type: "image_url". So, the URL that we're going to use here Is going to be another nested object, so URL. A lot of nesting going on, but we have it now, and we'll go back to our browser where we have this Moon Highway skiing image. So, we'll go ahead and place that into here. So, moonhighway, articles/incorporating-[[Representational State Transfer (REST)|rest]]-data/images/skiing.jpeg. Okay, then outside of the messages array, but still inside of our Chat Completions create call, we want to define the model, which is going to be [[GPT-4]]-vision.preview. Now that I have that, we can console.log
>
> **[2:33](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-image-descriptions-based-on-a-url?u=76281980&t=153)** response.choices, 0.message. That's going to grab what we need from the response object. And then we also need to call the image function. Let's open up our terminal. We still want that on the right side. And we'll run node index. And it says, "Image is not defined." That makes sense, it's called imageDescription. So, imageDescription is the function that we want to call, run it again and dot dot dot, we now see the response. The content says, "This is a picture of a snowy mountain landscape, potentially taken from a very high v." Okay, so pretty good. What could make this a little better is to have a token length. So, let's go ahead and grab that. We're going to add to this, we'll say max_tokens: 300. And another run of this should return something a little cleaner. So, "he image shows a panoramic view of a snow covered mountain range under a clear blue sky." So, you can plug in absolutely any image URL for this. You can define how long you want that response to be. I'm going to make that 100 because 300 seemed a little wordy, but what's really cool about this is it helps us to generate a description
>
> **[4:07](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-image-descriptions-based-on-a-url?u=76281980&t=247)** without having to look at it. And I could see this being used for accessibility reasons. Maybe we want to generate descriptions that can be added as alt text for all of our images so that if someone is using our website, our application, using a screen reader, everything is going to be read to them and we will be sure to comply with accessibility best practices. So, a really cool feature, the GPT-4 Vision preview can help us with descriptions of any image URL.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4]] (2), [[OpenAI API]] (1), [[ChatGPT]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** url (4), api (3), gpt (1)
> **Code Identifiers:** imagedescription (3), image_url (1), max_tokens (1)
> **CLI Commands:** node (2), make (2)
> **Definitions:** is a  (3)
> **Analogies:** picture (3)
> **Cross-References:** go back to (1)
> **Tools:** terminal (1)

#### [Transcribing audio files with OpenAI](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/transcribing-audio-files-with-openai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/transcribing-audio-files-with-openai?u=76281980&t=0)** - Another one of these amazing tools that we can use as part of the Open AI API is speech to text. So if you're ever looking to create a transcription of an audio file of any sort, you can use the Whisper model to make this work. So what we're going to do here is try it with Curl. So we're going to send an HTTP request to the API for OpenAI, specifically the transcriptions API, and then we're going to see if it works with the file that is in our folder. So just a quick heads up over here in 0303B I have a recording. It's just a brief audio recording as an MP3 called "Eve recording". So now if I go back to our terminal here and we're going to make sure that we're in that 0303B folder, we're going to start our curl request. So a curl request is just an HTTP request that's going to need some sort of method. In this case that's a post request. So we're going to send along our MP3 so that it can be transcribed. So this is a post request, we'll use a backslash return so we can put each one of these parameters on a different line. So the URL is what we saw before, it's the open AI API. Alright, and then the next thing that we'll do here is add our header authorization: bearer.
>
> **[1:35](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/transcribing-audio-files-with-openai?u=76281980&t=95)** And then we're going to paste here our API key. So if you have that on the clipboard or if you want to go grab it, you can do that here. Another back slash return will take us to the next header. This time we're specifying a content type. Now the content type is going to be multi-part form data, and that's because we're going to pass along the file as well as the model that we're using to transcribe the audio. So let's hit another back slash and enter. Form is our next flag. Dash, dash form. Here we're going to select the file itself. So we're in 0303B, remember that's where my file was. You'll see this in yours too. If you want to upload a different file, that's totally fine as well. We just need to preface it with the at symbol and then whatever the recording is, and we'll call it EVE MP3 We'll use another backslash, another enter. The final thing that we need to tell this transcription is the name of the model, which is Whisper - one. Okay, so we got the API route. We have our API token. We have a content type, we have our form file, we have our audio file, and we also have the model.
>
> **[3:12](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/transcribing-audio-files-with-openai?u=76281980&t=192)** So now if I hit enter, we see the text come back. And what it says is, have you ever seen magic like this in real life, in real time? And that, my friends, is exactly what that audio recording says. So this is how we do this with Curl. In the next video, we'll take a look at how we can set this up more properly in a node JS file.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), mp3 (3), http (2), url (1), eve (1)
> **CLI Commands:** curl (4), make (2), node (1)
> **Cross-References:** go back to (1), in the next (1)
> **Tools:** terminal (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Warnings:** heads up (1)
> **Speakers:** - another (1)

#### [Building a Node app to transcribe audio](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/building-a-node-app-to-transcribe-audio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/building-a-node-app-to-transcribe-audio?u=76281980&t=0)** - [Instructor] To create a transcript using our Node application, here, we're going to take a look at this recording file. We're going to send it to the transcription's API, and then we should see all of that response being read back to us. So this is going to be a little bit of setup. We need a few different things to get started here. So let me open up our terminal and install the following. So we need dotENV, dot E-N-V, there we go. Let's install that. We'll install Axios and we'll install form data. Of course you can do all of those at once if you want to, but one at a time is fine too. The next thing that we'll do here is import dotENV from that package dotENV slash config. This is the way we do that with import statements. What this is going to do is read from a file called dotENV that we save to the root of this folder here. We're going to call it open AI API underscore key, and we're going to set that equal to whatever your key is. So my key is here. So this is a more reusable way to do this anyway than having to add it as a value to our terminal each and every time. The second thing we'll import is Axios.
>
> **[1:33](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/building-a-node-app-to-transcribe-audio?u=76281980&t=93)** If you haven't used this before, this helps us to send HTTP requests with Node. We're also going to import FS the file system module from Node js as well as the trustee path module from Node js. That's going to help us to read files from folders. We're going to import something called file URL to path from URL, which is also part of Node.
>
> **[2:07](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/building-a-node-app-to-transcribe-audio?u=76281980&t=127)** And then finally we'll import this thing called form data from form data. This is just a [[npm]] that helps us to process these form elements. Now, in order for Node to grab this recording, read from it, and then send it along as a form element, we need to read it from underscore, underscore, dirname, so the place we'll find that is path dot dirname, and we'll use this function called file URL to Path. And then what we send here is import dot meta dot url. So if you haven't used Node in a while, this is sort of a new thing that you have to do when you're using these import statements. Not a huge deal, but that's what that's all about. And then we will say, recording path, path dot join, the first argument we send to path dot join is the dirname, so what directory are we in? The second value we will pass is eve recording or whatever the name of your audio file might be. Let's also create a value called model, which we'll set to whisper one. We saw that in our curl example. So this is the model that's going to parse this audio for text. Next we're going to create a value for form data.
>
> **[3:46](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/building-a-node-app-to-transcribe-audio?u=76281980&t=226)** And here we're going to say data dot append. So the data that's going to be sent with this post request is the model itself as well as you guessed it, the file. FS dot create read, stream, recording path. So the location of that recording gets sent in there. All right, we're almost there. Axios dot post, this is what you think. It's going to send a post request to the first value that is passed to the post function. So HTTPS guess which API we're going to send it to, the same one as before. Open AI V1, audio transcriptions. Okay, so that's the first argument that we send to that post function, but it's not the last one. So the URL goes first, the data AKA the form data goes second and then the headers are past third. So headers and why does it work like this? That's just the way Axios has it set up. It's expecting certain values to be passed for certain positions inside of that post method. So headers is last, authorization.
>
> **[5:21](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/building-a-node-app-to-transcribe-audio?u=76281980&t=321)** Here, we'll use a template string. Those are back ticks, not single quotes bearer. And now we're going to get fancy and use our environment variables we set up. Process dot ENV dot open AI underscore API underscore key,
>
> **[5:42](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/building-a-node-app-to-transcribe-audio?u=76281980&t=342)** and then content hyphen type is another template string, multi-part form data.
>
> **[5:57](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/building-a-node-app-to-transcribe-audio?u=76281980&t=357)** And then we're going to append on this boundary. Okay, great, now that we have this all set up, we're going to chain onto the end of the post. Remember, we're going to send all of this stuff, then we'll call the dot then function. And all I really need to know is that it worked so we'll console log the response data that comes back from that request. Alright, cool, so let's see if this works. We're going to run Node index and we see our text coming back. Have you ever seen magic like this in real life, in real time? Hard to imagine a time we've seen something so magical, but not hard to imagine how useful that this might be. In your own projects, you can create transcriptions of all sorts of different files. A hundred percent just using this open AI API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1)
> **Env Vars:** api (5), url (4), http (1), npm (1), https (1)
> **CLI Commands:** node (8), npm (1), find (1), curl (1)
> **Prerequisites:** install (4), set up (3), setup (1)
> **Code Identifiers:** dotenv (4)
> **Tools:** terminal (2)
> **Exercise Files:** template (2)
> **Analogies:** imagine (2)

#### [Using DALL-E 3 for image generation](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-dall-e-3-for-image-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-dall-e-3-for-image-generation?u=76281980&t=0)** - [Instructor] Another one of these endpoints we can make use of is for image generation. So if you go here to the platform.[openai.com](https://openai.com) API docs, you can find information about how you send a request to use the [[DALL-E]] models to generate an image. So let's go ahead and do it. We're going to make some adjustments to our project here. Quite a few actually. So let's start. We'll keep axios and .env and then everything else, I'm getting rid of. I'm getting rid of it because we're going to simplify this tremendously 'cause we're not really working with any files. We're going to send a post request to api.[openai.com/v1/images/generations](https://openai.com/v1/images/generations).
>
> **[0:55](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-dall-e-3-for-image-generation?u=76281980&t=55)** The second argument that we will send to post is a little bit of data that we want to send along with this post request. So the model, we're going to use dall-e-3. You can choose DALL-E 2 as well if you'd like to. We're going to use a prompt. So the prompt is just whatever image we want to get back. So I'm going to say a horse with a lot of confidence. Okay. And then, finally, we'll specify a size, 1024 by 1024. Just a little square image there. Now, outside of this configuration object and in its own new configuration object, we want to send along headers. So headers, this time we'll say Authorization: 'Bearer inside of our back ticks, inside of our template string. And we're going to continue to pull from our .env file OPENAI_API_KEY. This isn't form data, so this time we're going to say "Content-Type": 'application/[[JSON]]. Json, not son. There we go. And then finally, we want to chain on at the very end here on line 17 a .then. So whenever all of that happens and there is success, we want to take that response and we want to log the response data to our console. Okay, so now if we open our terminal,
>
> **[2:34](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-dall-e-3-for-image-generation?u=76281980&t=154)** we can type node index. This is going to think for a minute, but it's going to go to the generation's API. It's going to submit this prompt for an image of this size, and this is what we get back. So number one, we get back a revised prompt. So a more detailed prompt about what our horse is actually doing. The horse is very brave, so it did a much better job than me. It also supplies a URL. So this URL, you can just click on it here in the terminal or you can highlight it, copy it, and paste it, whatever feels right to you today. And then this is going to create that horse. Hard not to smile a little bit when you see a horse like this, very confident horse, right? The AI doesn't lie. So you can always take your revised prompt. I'll copy and paste that into the prompt section. Just out of curiosity, let's run it and see what we get. So here we'll make sure that we're cleared out. We've saved the file. We're going to run node index again, and we'll take that more detailed prompt. Of course you can adjust it however you see fit. And this should generate for me another URL. Feels a little easier to copy this for whatever reason. And I'm just going to paste that there.
>
> **[4:10](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-dall-e-3-for-image-generation?u=76281980&t=250)** And there we go. What a majestic horse. So DALL-E is helping us to create a whole stable full of horses using this [[Generative AI]] model.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (4), [[JSON]] (2), [[Generative AI]] (1)
> **Env Vars:** dall (3), url (3), api (2), openai_api_key (1)
> **CLI Commands:** make (3), node (2), find (1)
> **URLs:** [openai.com](https://openai.com) (2)
> **Tools:** terminal (2)
> **UI Navigation:** go to (1), click on (1)
> **API Endpoints:** /v1/images/generations (1)
> **Exercise Files:** template (1)

#### [Solution: Connecting with APIs](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-connecting-with-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-connecting-with-apis?u=76281980&t=0)** - [Instructor] We have been given the task that we need to create two different utility functions for processing different media types. We already have this prompt function here, this is going to simulate a response. And this response is going to work together with a couple functions. So, as I said, createImageDescription is going to be our first one. This will take in the imageUrl, and this imageUrl is going to be used inside of this prompt function. We set a model: "[[GPT-4]]-vision preview". These are always fun, messages. An array role: "system". We'll use the same role that we saw in a previous video. We'll use a similar content description here. We'll say, "You are a helpful assistant that can describe images accurately." And thank you for that. Next, inside of this messages array, we'll add another role of user
>
> **[1:35](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-connecting-with-apis?u=76281980&t=95)** and then we'll say content. Now our type here is going to be text, and the text should read, "Please describe this image in detail." The other piece of context that we need is we'll say type: "image_url", and then image_url. Image_url is set equal to this object that has a key of url, which is the image_url. And then let's also add, now this should be on the outside of this array here. So on line 36, make sure on line 36 here we'll say max_tokens: 300. Okay, so that looks good. Let's test my code. And it's saying that prepareAudioTranscription is not defined, so that's reasonable. We'll define it. We'll say function prepareAudioTranscription. Now the way that we prepare the transcription is we're going to send it a path.
>
> **[3:12](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-connecting-with-apis?u=76281980&t=192)** So where is this audio file that we want to transcribe? Then we'll return and we'll say model: "whisper-1". The file is whatever the audio file path is that has been sent in as a parameter. And then response_format
>
> **[3:42](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-connecting-with-apis?u=76281980&t=222)** is [[JSON]], okay? Okay, with our two functions in place, let's test it. How's it going to go? It's going to go well. So we have our configuration set up for our audio transcription, and we are also creating this image description as well. Nice. So these are just functions that we can use to interface with the eventual APIs that we will ask for data from. As these APIs shift and change, you may make slight changes to these functions, but generally they're going to remain the same.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GPT-4]] (1), [[JSON]] (1)
> **Code Identifiers:** image_url (3), imageurl (2), prepareaudiotranscription (2), createimagedescription (1), max_tokens (1)
> **CLI Commands:** make (2)
> **Cross-References:** previous video (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Customizing the Assistants API

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the Assistants API playground](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-the-assistants-api-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-the-assistants-api-playground?u=76281980&t=0)** - [Instructor] One of the newer features of the open AI API is the assistants API. So what you can do with this is build your own assistant that has instructions, and you can take advantage of a bunch of tools and knowledge to respond to user inquiries. So what we're going to do here, is create our own assistant using kind of these Playground tools inside of the browser, then in future videos, we will connect this all up with our node application. So just so we understand what's going on here, I'm going to create a new assistant, and I'm going to call this Janice, the tough but friendly computer science professor.
>
> **[0:48](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-the-assistants-api-playground?u=76281980&t=48)** You are a computer science professor who is an expert at [[JavaScript]] and can help refactor code for maximum efficiency and re-usability. Okay. Then I'm going to select one of these models. It doesn't really matter which one. Then we're going to choose here, code interpreter. Now the code interpreter will allow us to either paste these in code blocks, or we can upload files here as well. But I'll just click save for now, because I'm just going to paste it in. And now our friend Janice, the tough but friendly computer science professor, has been created. So the Playground is where we can start to utilize this. So up here in the upper left hand corner, we can select Janice. All of our kind of built-ins are here. And what I'm going to do is really call myself out here and copy my index.js file, and I'm going to paste it into this message. So I'll say, "Can you help me refactor this code and make it better?" And then I'll paste that, and then I'll run it. So that's the blob of code,
>
> **[2:22](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-the-assistants-api-playground?u=76281980&t=142)** these are the running instructions, meaning the instructions that I've set up, any contextual information that this assistant needs to have. It will spin for a little bit. And now we have some updated code. Okay, cool. So let's see what this has done for us. So Janice says, "It seems your JavaScript code is making a POST request." That's true. What she wants us to do is she wants us to create a function that's going to handle sending this in a try-catch block. And then we're also going to handle an error if we can't generate that image. That's pretty cool. And then we're going to call the function with this dynamic information. So we have the prompt and the size. That's pretty cool. And then we'll console log the data. I love it. So let's go ahead and paste this. And it probably works, right? But it's always not a bad idea to try. This is also going to be asking me for my API key, so let me make sure I have my API key in this separate.n file. We're going to type node index, and then we're going to see that hopefully this works. It looks like it did.
>
> **[3:56](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-the-assistants-api-playground?u=76281980&t=236)** Yet another horse in the barn. There we go. Another confident horse. The confident horses are always very strong. So what has this done for us? Well, we have refactored our code based on what Janice, our computer science professor, feels will make this more reusable. I tend to agree with that just because we're now handling errors, we're passing in our prompt and our size as arguments here, so that's a little nicer, and everything is still working as we expect it to. So our AI assistant has done a lot for us. So not only does this describe all of the code that we've written, but it also is going to describe the changes and provide reasoning around why we would make those changes. Something else that we can do alongside the running of this, if you wanted to inject some other instructions, you could. So you could say something like, "Add a joke about the University of Michigan
>
> **[5:14](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-the-assistants-api-playground?u=76281980&t=314)** because I will be presenting this code there." Then, because I want Janice to do more than one thing in one request, I'm going to say, "Please refactor this code." I'm going to grab the code from up here. And also, "Write me a three sentence introduction to a tech talk where I present this code." Run it again, it's going to inject those instructions. Note that they're here in the running instructions, kind of appended onto the end of that. And there we go, we have our idea for our tech talk introduction, we have our refactored code. It looks pretty much the same as before, right? Maybe a little different. We created a couple more variables for that. Another thing to take a look at is the logs for this. So if you're ever curious about how this data is being sent, we have the steps of this, and then this is going to return all of that data to me as needed. So it's doing a bunch of things at once. In the next video, we're going to take a look
>
> **[6:48](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-the-assistants-api-playground?u=76281980&t=408)** at how we can incorporate this into our own application, and we'll be able to continue to use the code interpreter with these different files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **CLI Commands:** make (4), node (2)
> **Env Vars:** api (4), post (1)
> **File Paths:** index.js (1)
> **API Endpoints:** post  (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Warnings:** note that (1)

#### [Creating an assistant in a Node application](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-an-assistant-in-a-node-application?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-an-assistant-in-a-node-application?u=76281980&t=0)** - [Instructor] Now that we've created our assistant in the UI, let's go ahead and create one from our node application. So I want to delete everything from my index file and start from scratch here. We're not going to be making those fetches with Axios. Instead, we're going to use some of these functions that are part of the [[OpenAI API]]. So we do need dotenv so that we can use our API key, of course, and we need to wrap that in quotes. Let's create a new instance of OpenAI, new OpenAI, and then we'll pass the apiKey in right here, process.env.OpenAI_API_Key.
>
> **[0:57](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-an-assistant-in-a-node-application?u=76281980&t=57)** From here, we need to create some sort of assistant. So think about how you might use assistants in your own life. Maybe it's a chatbot that you're putting on your website so that customers can ask questions. Maybe it is something that you use for your own health and [[Wellness]] to give you nutritional information or exercise information. I'm going to create here a betterSpeaker function, and this is going to help me create an assistant that's going to help me be a better speaker and presenter. So here we will create our assistant. We will await openai.beta.assistants.create,
>
> **[1:49](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-an-assistant-in-a-node-application?u=76281980&t=109)** and that shouldn't be a period there on line nine. We want to await that, that's better. Now the create function is going to take in just a few things. Think of this like the form that we used in the UI. Let's give this a name: Rowena The Enthusiastic Speaker Coach. Instructions: You are a speaker coach. Take the content of my speech and make it funnier and more engaging. Cool. So that's our instructions. We're also going to add our model here, which we'll just use [[GPT-4]]. And then here at the bottom we're going to console.log our assistant just to see that this is working. We're going to call the betterSpeaker function. Excellent. And now if I run this using node index, we should see all of the data about our speaker coming back, and that's sort of exciting. But what's really exciting is if we go back to our Assistants and hit refresh, we now see Rowena here. So of course we can always test this out
>
> **[3:23](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-an-assistant-in-a-node-application?u=76281980&t=203)** in the playground if we want to. So we could type in contents of our speech or add the text of our speech from a file, something like that. But we also can interface with this directly in our app. In the next video, we're going to take a look at threads and how we can capture input from our users.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (1), [[Wellness]] (1), [[GPT-4]] (1)
> **CLI Commands:** node (2), make (1)
> **Code Identifiers:** betterspeaker (2), apikey (1)
> **Env Vars:** api (2)
> **File Paths:** process.env (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Adding messages to threads](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/adding-messages-to-threads?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/adding-messages-to-threads?u=76281980&t=0)** - [Instructor] A thread is a conversation. When a user starts a conversation, we should create a thread that contains their messages. That way our assistant will have context about all of the questions that have been asked. So, we're going to incorporate the Readline package from [[Node.js]]. We're also going to create an interface as we did before. So, this is just going to process the input and output from our terminal. So, the input should be set to process that standard input, the output to process.standard output. the output to process.standard output. Okay, so at this point we want to create a question with Readline. Now, the question that should appear as soon as I run the program is, what is your question for the speaker coach? I'll add a couple spaces and a \n for a new line, so that we can make sure to be able to read it and then we're also going to add a callback function here. Question is going to stand in for whatever the user is asking of the assistant and then we're going to create a thread. We'll use this function called openai.beta.threads.create. openai.beta.threads.create. And then we'll also create a message.
>
> **[1:38](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/adding-messages-to-threads?u=76281980&t=98)** So, a message goes into a thread and this is going to grab that question from our input. So, we will say, message await openai.beta.threads.messages.create. message await openai.beta.threads.messages.create. What this will take in is the thread ID and just as we did before, it needs a role of user and it needs the content, which in this case is going to be the question. So here, we'll say question. Finally, outside of this but still inside of our function, we're going to say console log message. Cool. So at this point, we don't need any of this other stuff. Our assistant is already created, so that's good to go. If we try to run this with Node index, we should see, what is your question for the speaker coach? Hello, hello? And then we get back information about that request. If we look at the assistant API-- So, if we go back over to our threads, we see that this has been added to our list of these threads. This list of threads is going to keep track of a thread ID as well as what the user says.
>
> **[3:12](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/adding-messages-to-threads?u=76281980&t=192)** So, if we're working in an organization together, we can track these threads and monitor all of the requests that are coming in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (1)
> **CLI Commands:** node (2), make (1)
> **File Paths:** node.js (1)
> **Env Vars:** api (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Running and parsing the assistant response](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/running-and-parsing-the-assistant-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/running-and-parsing-the-assistant-response?u=76281980&t=0)** - [Instructor] In the previous video, we created a thread and added a message to it. Let's go ahead and make an adjustment to this so we can start to manage a run and also hear back from our assistant in the Terminal. So the first thing I want to do here is we're going to adjust our question. This time we're going to prompt for sharing your opening paragraph for your technical talk with the speaker coach. Okay, so now that I've done that, we will continue to use our asynchronous question. Instead of creating a new thread, we're going to create a run. So let's replace thread with run. We're going to await again, but this time we're going to await openai.beta.threads.createAndRun. So basically we think of a run as being whenever an assistant is invoked on a thread. So what we need to do here is attach this to an assistant_id. The assistant_id can be found in your account under Assistance, and then you can copy it from here. Sometimes this little popup appears, so you can always grab it from right underneath the Name field, paste it into that spot, and then we're going to say thread messages. This array will be an array where the object has a key of role and a value of user.
>
> **[1:39](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/running-and-parsing-the-assistant-response?u=76281980&t=99)** And then the content is set to question, not string question, but question question. It's whatever value is being typed in. You could call it paragraph if you wanted to too. The other thing we're going to do after this is we'll replace the message with another asynchronous function. This time it's going to be called checkStatus. Now, checking the status is important because when we try to grab the message that comes back from our assistant, we have to wait until that message is available. So the way that we're going to find it is we're going to check the status by awaiting openai.beta.threads.runs.retrieve.
>
> **[2:31](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/running-and-parsing-the-assistant-response?u=76281980&t=151)** The API documentation always shares these functions. So if you're looking for something that we don't cover in this video, you can always check it out there. Retrieve is going to take in the thread_id as well as the run_id. And once we're done with this, we need to check to see if the status.status equals completed. If so, we can parse the object and figure out what the assistant said. So we'll say let messages equal await openai.beta.threads.messages.list.
>
> **[3:14](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/running-and-parsing-the-assistant-response?u=76281980&t=194)** And this is going to take the thread_id in. Then we're going to say messages.data forEach(msg).
>
> **[3:30](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/running-and-parsing-the-assistant-response?u=76281980&t=210)** And the place that we will mine our delicious content from is msg.content[0].text.value,
>
> **[3:45](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/running-and-parsing-the-assistant-response?u=76281980&t=225)** and then I can console log the content. Okay, so we're also going to make sure that we have an else condition in case that doesn't go so well. In case completed is never reached, we can say, "Run is not completed yet." Okay, so let's give that a save. And the final step I need to take, so outside of this console log and outside of this block, on line 46 here, we're going to use a setTimeout. Now is a setTimeout, a little janky? A little bit, but this is going to help us to make sure that that request has been sent and the response has been collected before we return it to the Terminal. So let's say checkStatus. What will pass in here is run.thread_id and run.id.
>
> **[4:56](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/running-and-parsing-the-assistant-response?u=76281980&t=296)** And then we'll say 20000, 20 seconds or 20,000 milliseconds. So let's scroll down a little bit here to keep that in the screen. And I'm going to type node index, "share your opening paragraph with the speaker coach!" "Hello everyone and welcome to this amazing [[JavaScript]] event!" So we will let that do its thing, and if all goes well, which it did, we should see our speaker coach punch up that it did on our opening line. It turned it into this long, long thing, but pretty funny. "Hello, hello, hello! Are you ready to dive knee-deep into the quirkiness of JavaScript?" So we can leave that up to us if we think our speaker coach is helping or not. But if we want it to be a little bit more customized, remember you can always files to your speaker coach to make the output even more specific to what you're looking for. So you can do a little bit of training with some files that you upload. So this is pretty cool. We've been able to use the Assistance API to create a run, and we're pumping these messages into the thread, and then we're having a conversation with our assistant.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Code Identifiers:** thread_id (3), assistant_id (2), checkstatus (2), settimeout (2), createandrun (1)
> **CLI Commands:** make (4), find (1), node (1)
> **Env Vars:** api (2)
> **Tools:** terminal (2)
> **Cross-References:** previous video (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)

#### [Solution: Working with the Assistants API](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-working-with-the-assistants-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-working-with-the-assistants-api?u=76281980&t=0)** - [Instructor] So let's go ahead and write our functions to help us create an assistant. We have our generate random ID function here, that's going to help us as we start to create our first assistant. So, we will return an object, which has an ID that is generated by this function. And we'll pass in a prefix as well, so assistant_. Then we're going to add a name. So we'll just call this name general assistant, and then we will give it some instructions. These instructions should read, you are a helpful assistant that provides clear information.
>
> **[1:04](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-working-with-the-assistants-api?u=76281980&t=64)** Back to the next function that we need to write, once we've created our assistant, we want to create a thread that's going to have a message. So a thread is just going to keep track of all of the messages. Our function takes in a message, and then it's going to return an object. Again, we'll use our helper function, and this time, we're going to prefix this with thread_. Then we're going to add a message. We're going to add a role, which will be user. We'll add content, which will be the message that's coming in as the parameter. And finally, we want a function to get the assistance response to the message. So we can add in a fun little promise return here. So we'll say return, new promise, we'll resolve. Then we'll set a timeout and we'll call resolve here, pass in an object where our generate random ID function... Man, this thing is flexible, it's helping us out. So we have our message here, a role which is assistant and content, which will read [[JavaScript]] is a programming language
>
> **[2:42](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-working-with-the-assistants-api?u=76281980&t=162)** that allows you to implement complex features...
>
> **[2:50](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-working-with-the-assistants-api?u=76281980&t=170)** To implement complex features on web pages. It's a core technology of the worldwide web, lowercase O,
>
> **[3:04](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-working-with-the-assistants-api?u=76281980&t=184)** and is essential for web applications. JavaScript enables interactive web pages and is an essential part of web applications, awesome. The other thing that we need to pass in here is our final number of milliseconds. So within the set timeout and make sure it's in there, you're going to get a little helper popup to let you know that you're placing that in the right spot. We're hoping to emulate what that response will actually look like. Let's go ahead and test our code here, and it looks like we have created that little simulator. We know that our assistance workflow, first we create the assistant, then we create the thread, and then we process the assistant response, good stuff.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (2)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 5. Utilizing LangChain Features

[↑ Back to Table of Contents](#table-of-contents)

#### [Setting up a LangChain project](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/setting-up-a-langchain-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/setting-up-a-langchain-project?u=76281980&t=0)** - [Instructor] Another powerful tool that's part of the AI ecosystem is [[LangChain]]. So LangChain gives us a whole suite of tools that we can use to develop apps that are powered by these different language models. So if you're ever looking for the documentation for LangChain, something to keep in mind is the default will take you generally to the [[Python (Programming Language)|Python]] version of these docs. So if you're ever on a page and you think, hey, why is this all Python all the time, you can come up to this little parrot and link and then select [[JavaScript]]/TypeScript Docs and this will take you to where you need to go. Excellent. So let's go back to our project and we're going to configure this to use langchain/openai. So this is going to be what we use in this project. It's a bunch of tools that interface with the OpenAI APIs. It's going to ask us for an API key. So this'll just be the same as before. Let's make sure that our .env file is here in this folder. So it'll be OPENAI_API_KEY =, and then whatever that key is. All right, so now that I have this, I can go to the index.js file and we can start to make use of some of this. So we're going to continue to import dotenv/config, but instead of pulling from OpenAI directly, we're going to pull from ChatOpenAI
>
> **[1:37](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/setting-up-a-langchain-project?u=76281980&t=97)** from @Langchain/openai.
>
> **[1:46](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/setting-up-a-langchain-project?u=76281980&t=106)** Now that we have this, we can say const chatModel = new ChatOpenAI.
>
> **[1:55](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/setting-up-a-langchain-project?u=76281980&t=115)** And this is going to look similar to what we've seen before, but this time, we're going to use a top-level await. So await can be used outside of the context of an async function. We'll say chatModel.invoke. And then this is just going to invoke that model. So we could say, What is the population of Bend, Oregon? Now, let's do this. We'll say const population =, and then we'll say console.log(population). We'll type node index. And this will give us back the population inside of this content value. So you can always grab that from that response directly. Okay, so this is a quick look at how to incorporate the LangChain OpenAI library. The next video will take us through how we use templates to make this even more powerful.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (6), [[Python (Programming Language)|Python]] (2), [[JavaScript]] (1)
> **CLI Commands:** make (3), python (2), node (1)
> **Code Identifiers:** chatmodel (2)
> **Env Vars:** api (1), openai_api_key (1)
> **Cross-References:** go back to (1), next video (1)
> **File Paths:** index.js (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** go to (1)

#### [Creating a chat template](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-a-chat-template?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-a-chat-template?u=76281980&t=0)** - [Instructor] In our previous example, we took a look at how to just send some simple questions to the [[OpenAI API]]. Let's make our [[LangChain]] example a little better by incorporating some prompts. So, this will start to show us some of the benefits of using something like LangChain so that we don't have to do everything by hand or from scratch. The first thing I'm going to incorporate here is the ChatPromptTemplate. And this is going to come from langchain/core/prompts. This actually requires one more installation, so let's go ahead and install langchain/community. So, as that does its thing in the background, let's go ahead and import the StringOutputParser from @langchain /core/output_parsers. Okay, and that worked, that's awesome. So, we're still using our model here. That's the data model that we're making use of, that's the large language model. But we also want to create here a prompt that will utilize the prompt template. And here, we're going to supply an array of values to it. So, we'll say the first one is human.
>
> **[1:37](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-a-chat-template?u=76281980&t=97)** And the second one we want to say write a haiku about topic. So, these strings are going to contain this, it's the fromMessages function is expecting an array where we're going to plug in those values. Underneath the chat model, we're going to say const_parser = new StringOutputParser. And this will help us to handle the output that's coming from this function. And now it's time to create our first chain. So, think of a chain as a list of functions that we can put together. We're going to say prompt.pipe. So, the first thing that we'll pipe in here is the model.pipe(parser). Perfect. And then I'll get rid of the population thing, we don't need that anymore, but what we will need is const response = await chain.invoke. And this time we'll pass in a topic. So, this topic is part of the object, so this object key is going to be injected in here. So, let's have it write us a haiku about cats.
>
> **[3:13](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/creating-a-chat-template?u=76281980&t=193)** I also want to make sure that we're using the correct thing here, chatModel. You're probably yelling at your video on that one. All right, cool. So, we are going to put our panel on the right so we can see everything together. We're going to run our node index again, it's looking for API key, which I think we should know by now to pull over and then we'll paste that in. All right, so let's go ahead and run that again. (laughs) And the haiku is spit out, "Purring feline grace, eyes like jewels in moon's glow, cats bring peace and love." LangChain functions have made this syntax much cleaner so that we can pipe results from one function to the next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (6), [[OpenAI API]] (1)
> **Code Identifiers:** output_parsers (1), frommessages (1), const_parser (1), chatmodel (1)
> **CLI Commands:** make (2), node (1)
> **Env Vars:** api (2)
> **Exercise Files:** template (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Using runnable sequences](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-runnable-sequences?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-runnable-sequences?u=76281980&t=0)** - [Instructor] Let's refactor our code a bit to use the runnable sequence interface. This will allow us to pass it some values that will run in order. So we're still going to need a few of these things. We want to grab chat OpenAI. We're going to use the prompt template instead of the chat prompt template. And we're also going to import runnable sequence from [[LangChain]] core runnables. Then let's move the chat model up a little bit. We're going to keep our prompt, but we're going to replace this with prompt template. And we'll say instead of from messages, we'll say from template. Now this is going to take in the question that I asked before, but we don't need to pass in the person who is sending it. We are going to keep our parser and then we'll make some adjustments to our chain. So this is where we're going to use the runnable sequence interface, and we'll use runnable sequence dot from. Now runnable sequence dot from is a function that's going to take in an array, and we're going to pass in all the things that we want to run in order. So we'll take the prompt, the model, and the parser, and let's make sure that it's the chat model here. Okay. So from here we'll use our response
>
> **[1:35](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/using-runnable-sequences?u=76281980&t=95)** and instead of our topic being cats, let's change this to spaceships just so that we know that it's working. So now I'm going to pop this open. In our side panel here, we'll run node index and we have our haiku gleaming ships take flights, voyagers cross the vast expanse. Stars guide their journey. So this is just another syntax that we can make use of runnable sequence will allow us to create all sorts of different sequences that we want to pass along to our model. And then our prompt is going to look much the same, but instead of passing this array there, we're going to pass just the string from this template.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (1)
> **Exercise Files:** template (5)
> **CLI Commands:** make (3), node (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Combining multiple chains](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/combining-multiple-chains?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/combining-multiple-chains?u=76281980&t=0)** - [Instructor] Now that we know how to work with the RunnableSequence, we're going to combine a couple of LangChains together. So we'll continue to use all of the same things that we used before, but we're going to have two prompts now. So check this out. We're going to create another prompt called prompt2. This one, we'll call prompt1. And this template, we want to inject the following. So we'll say, "What town is restaurant {restaurant} in?
>
> **[0:35](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/combining-multiple-chains?u=76281980&t=35)** Respond with the name of one town." Then for prompt2, we'll say PromptTemplate.fromTemplate. Again, this is just going to take in a string, and then we'll say, "What country is the restaurant ${restaurant} in? Respond in {language}." Okay, so from here, we're going to scroll down a little bit more. We're going to maintain our parser here. And the way this will look is we need to create a chain. We'll use prompt1.pipe and we'll pipe in our model, which is called chatModel. And then we'll pipe in the parser. Then we're going to call this one, for lack of a better term, bigChain. We're putting together a bunch of actions here. Now, this will continue to be a RunnableSequence, but instead of passing in these singular values, we're going to pass in an object where the restaurant, we're going to pass that to chain one. And then the language, we're just going to call another function. And this arrow function here will take in the input
>
> **[2:11](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/combining-multiple-chains?u=76281980&t=131)** and return input.language. So that's the first argument that we send to our bigChain. And then we'll also use prompt2 and the model, so chatModel, and then also the parser. All right, so let's scroll down a little bit further, and we're going to replace our response. We're going to say const response = await bigChain.invoke. And we need to pass in an object here that has these values. So we need a restaurant and we need a language. So we'll say restaurant, Le Pigeon, restaurant in Portland, and then we'll say language, French. So let's go ahead and run that. We'll type node index. And then we see the restaurant in Portland is in the United States. How cool is that? So let's remove that dollar sign here, and then our output should be correct. Perfect. So we've used the RunnableSequence and we've combined chains to create a more complex chain. Multiple chains together can do a lot of things
>
> **[3:45](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/combining-multiple-chains?u=76281980&t=225)** that are really cool in order where we're taking the data from one prompt and passing it to the next.

> [!info]- Semantic Content
>
> **Code Identifiers:** bigchain (3), chatmodel (2), fromtemplate (1)
> **UI Navigation:** scroll down (2)
> **CLI Commands:** node (1)
> **Exercise Files:** template (1)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Solution: Building a conversation pipeline](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-building-a-conversation-pipeline?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-building-a-conversation-pipeline?u=76281980&t=0)** - [Instructor] Now let's take a look at the solution for this [[LangChain]] challenge. We're going to create a chat template here and here, we will get rid of that on line 12. We're going to return an object and this object is going to have a type which is chat_template and a systemPrompt. Cool. Next, we're going to, as it says, create a function that's going to create an LLM configuration. So we already have the arguments here that we'll need, modelName and temperature, so just like OpenAI, we need to set both and that's going to look like this. So we'll say type llm_config. We will say modelName and temperature. Then we'll build a conversation chain. So again, conversation chains are going to make sure that we have information about previous parts of the conversation, giving the AI context so we don't have to repeat ourselves. We'll go ahead and return an object here with a type of conversation_chain. We'll pass in a template, we'll pass in llm,
>
> **[1:33](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-building-a-conversation-pipeline?u=76281980&t=93)** and this should be mapped to this parameter here, llmconfig. And then finally we'll say canProcess, and here we'll pass in a message. This is a function, a method on this return object that will say typeof message. So we'll check the type. So if the message type is string, then we're going to say that message.length is greater than zero. All right, getting close. Finally, we're going to handle, our processUserMessage takes in a chain and a userMessage. So we'll go ahead and return a new promise here because we're dealing with this asynchronous data. As always, we'll pass in a resolve function. We'll call a setTimeout, and then we'll say const systemPrompt = chain.Template.systemPrompt
>
> **[2:50](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-building-a-conversation-pipeline?u=76281980&t=170)** and then we'll say resolve. So here within our resolve function, we're going to use a response. We'll use a couple of back ticks here to write a string. So we'll say Based on the instruction, and then we'll plug in that systemPrompt value. So those quotation marks are just for formatting there. I'll answer your question userMessage Async/await is a way to handle promises in [[JavaScript]]. Use the async keyword before a function declaration and await to pause until a promise resolves. Okay, back to the beginning of that line. That response is there. Let's add a comma. Then we will add some [[Metadata]]. So the metadata looks like this. modelName is chain.llm.modelName, temperature,
>
> **[4:30](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-building-a-conversation-pipeline?u=76281980&t=270)** chain.llm.temperature tokensUsed. We'll put a number in there and then processingTime, 0.8 seconds. So just matching all of those containers for that data.
>
> **[4:57](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/solution-building-a-conversation-pipeline?u=76281980&t=297)** So we want to make sure that the number of milliseconds is in the right spot. It's here on line 54. That looks good. So now, if we test our code, we see something's not right. It looks like the llm_config is not found and that's because I used the wrong syntax. So llmconfig here, let's make sure that that's capital C. All right, let's try running our test again. All right, and now, it works. So thank you to Tess for being verbose enough to let me know what was going on, and thank you to LangChain for creating this great way of being able to create some conversation history with our LLM.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LangChain]] (2), [[Metadata]] (2), [[JavaScript]] (1)
> **Code Identifiers:** systemprompt (4), modelname (4), llm_config (2), usermessage (2), chat_template (1)
> **CLI Commands:** make (3)
> **Exercise Files:** template (3)
> **Env Vars:** llm (2)
> **Definitions:** is a  (2)
> **Versions:** 0.8 (1)
> **Analogies:** just like (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/next-steps?u=76281980&t=0)** - [Instructor] Now that we understand some of the vocabulary and some of the features of our AI projects that we can start to build with [[JavaScript]], the question then becomes, where do we go from here? Well, I would encourage you to continue to look through the OpenAI developer platform. This is going to be a location to find all sorts of new changes to the API as well as new features. So I would just try to think through the types of apps that you want to build, and you can start to incorporate some of these. If you scroll down here on the homepage, in the GUIDES section, I think they're [[Prompt Engineering]], production best practices, safety, rate limiting, error codes. These are great next steps that you can take a look at as you continue to build your apps. I would also encourage you to check out the [[LangChain]] documentation. There are several cookbooks that you can use to do all sorts of different things. If you wanted to connect to a database, if you wanted to create different types of agents and [[Memory Management]], that can happen here as well. I would also encourage you to check out Vercel. Vercel is famously the company that creates [[Next.js]], and many of their folks are part of the [[React.js|React]] team, but they have a ton of AI stuff that's really cool too. So they have this tool called v0. v0 is a React component generator that you can use to generate the code for React apps. It's kind of magical, almost shockingly magical,
>
> **[1:37](https://www.linkedin.com/learning/ai-programming-for-javascript-developers/next-steps?u=76281980&t=97)** and you can see different components that others have created as well. And you can also use this to integrate with your React projects and JavaScript and TypeScript. As the Quickstart says, "Everything you need to get started with AI." You can make use of the OpenAI apps as well as Claude and others. So as you continue your work with AI and JavaScript, just know that this is going to continue to grow and change and evolve throughout time. But this should give you a good basis for the projects that you're going to build. Keep me posted about how it goes. I hope you build some amazing apps with JavaScript and AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (4), [[React.js|React]] (4), [[Prompt Engineering]] (1), [[LangChain]] (1), [[Memory Management]] (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** api (1), guides (1)
> **File Paths:** next.js (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Eve Porcello]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/ai-programming-for-javascript-developers-3810071/codespaces)

## Skills Covered

- AI Software Development
- JavaScript
- Artificial Intelligence (AI)

## Path Context

### In [[Building Generative AI Skills for Web Developers]]
← [[Build with AI- Beyond Pair Programming with AI]] | **9 of 10** | [[Build a JavaScript AI App with React and the OpenAI API]] →

## Appears In

- [[Building Generative AI Skills for Web Developers]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development
- [[Advanced Python Projects- Build AI Applications]] — Artificial Intelligence (AI), AI Software Development
- [[Google Cloud Digital Cloud Leader Cert Prep- 3 Innovating with Google Cloud Artificial Intelligence]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)