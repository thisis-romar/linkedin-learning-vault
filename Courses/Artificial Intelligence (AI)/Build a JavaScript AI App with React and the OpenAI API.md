---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: build-a-javascript-ai-app-with-react-and-the-openai-api
url: "https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api"
duration_minutes: 119
duration: 1h 59m
level: Advanced
updated: 9/18/2023
learners: 73199
skills:
  - OpenAI API
  - JavaScript
  - React.js
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/build-a-javascript-ai-app-with-react-and-the-openai-api-4467357/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFDc6TdaL8EZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695234022487?e=2147483647&amp;v=beta&amp;t=Qo0PBkJ6jyIDIwrWJ_EmFEj8u-AHIUPRstgPpSSTBuY"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Generative AI Skills for Web Developers]]'
prev_courses:
  - '[[AI Programming for JavaScript Developers]]'
path_nav: '[{"path":"Building Generative AI Skills for Web Developers","position":10,"total":10,"prev":"AI Programming for JavaScript Developers","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - topic/web-development
  - skill/openai-api
  - skill/javascript
  - skill/react-js
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Build%20a%20JavaScript%20AI%20App%20with%20React%20and%20the%20OpenAI%20API.md)

![Build a JavaScript AI App with React and the OpenAI API](https://media.licdn.com/dms/image/v2/D4D0DAQFDc6TdaL8EZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695234022487?e=2147483647&amp;v=beta&amp;t=Qo0PBkJ6jyIDIwrWJ_EmFEj8u-AHIUPRstgPpSSTBuY)

# Build a JavaScript AI App with React and the OpenAI API

> In this course, learn how to integrate the OpenAI API into a JavaScript-based web app. Join instructor Morten Rand-Hendriksen as he takes a React-based weather app, adds a heavy dose of AI, and creates an interactive experience that knows what location you want weather information from, explains the weather data in simple language, and even suggests what to wear. Through this project-based course,

> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api) | 1h 59m | Advanced | 73K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Build a JavaScript AI app with React and the OpenAI API](#build-a-javascript-ai-app-with-react-and-the-openai-api)
  - [Use the exercise files on GitHub Codespaces](#use-the-exercise-files-on-github-codespaces)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Building a Weather App with AI Power**](#1-building-a-weather-app-with-ai-power) (3 videos)
  - [Beyond ChatGPT: What AI can do for you](#beyond-chatgpt-what-ai-can-do-for-you)
  - [Real-world challenge: A more useful weather app](#real-world-challenge-a-more-useful-weather-app)
  - [Ideating with ChatGPT as a base](#ideating-with-chatgpt-as-a-base)
- [**2. The Core App**](#2-the-core-app) (4 videos)
  - [Sidebar: Build a React app using Vite and GitHub Codespaces](#sidebar-build-a-react-app-using-vite-and-github-codespaces)
  - [Boot up the app in GitHub Codespaces](#boot-up-the-app-in-github-codespaces)
  - [Work with the OpenWeatherMap API](#work-with-the-openweathermap-api)
  - [App walk-through](#app-walk-through)
- [**3. Connecting to the OpenAI API**](#3-connecting-to-the-openai-api) (4 videos)
  - [What is the OpenAI API, and how does it relate to ChatGPT?](#what-is-the-openai-api-and-how-does-it-relate-to-chatgpt)
  - [Test the API in the OpenAI Playground](#test-the-api-in-the-openai-playground)
  - [Generate secret keys](#generate-secret-keys)
  - [Test the API with a REST client](#test-the-api-with-a-rest-client)
- [**4. Using AI as a Human-to-Machine Translator**](#4-using-ai-as-a-human-to-machine-translator) (4 videos)
  - [Create a location string from a prompt](#create-a-location-string-from-a-prompt)
  - [The challenge of non-deterministic APIs](#the-challenge-of-non-deterministic-apis)
  - [Function calling in the OpenAI API](#function-calling-in-the-openai-api)
  - [Create a custom function call for the OpenAI API](#create-a-custom-function-call-for-the-openai-api)
- [**5. Integrating AI into the Weather App**](#5-integrating-ai-into-the-weather-app) (6 videos)
  - [Sequence API calls in an app](#sequence-api-calls-in-an-app)
  - [Create a fetch request to the OpenAI API](#create-a-fetch-request-to-the-openai-api)
  - [Add a function call to the request](#add-a-function-call-to-the-request)
  - [Parse the response](#parse-the-response)
  - [Pass the response to the weather data request](#pass-the-response-to-the-weather-data-request)
  - [Update the weather data display](#update-the-weather-data-display)
- [**6. Creating Rich AI Outputs**](#6-creating-rich-ai-outputs) (4 videos)
  - [Prompt engineering for developers](#prompt-engineering-for-developers)
  - [Advanced calls to the OpenAI API](#advanced-calls-to-the-openai-api)
  - [Integrate the AI API response](#integrate-the-ai-api-response)
  - [Provide good UX with independent loaders](#provide-good-ux-with-independent-loaders)
- [**Conclusion**](#conclusion) (1 videos)
  - [Go further](#go-further)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build a JavaScript AI app with React and the OpenAI API](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/build-a-javascript-ai-app-with-react-and-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/build-a-javascript-ai-app-with-react-and-the-openai-api?u=76281980&t=0)** - [[ChatGPT]] is cool and all until you realize you can build AI into your own apps to drastically improve their [[User Experience (UX)|user experience]] and add new and previously impossible features. That's what we'll do in this course. Take a [[React.js|React]]-based weather app, sprinkle on a heavy dose of AI, and create a truly interactive experience that not only understands what location you want the weather information from but also explains the weather data in human language and gives you recommendations on what to wear. The [[OpenAI API]] gives us programmatic access and control over the language features of GPT, and I'm here to show you how to get it right, so let's get cracking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (1), [[User Experience (UX)|User experience]] (1), [[React.js|React]] (1), [[OpenAI API]] (1)
> **Env Vars:** api (1), gpt (1)
> **Speakers:** - chatgpt (1)

#### [Use the exercise files on GitHub Codespaces](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/use-the-exercise-files-on-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/use-the-exercise-files-on-github-codespaces?u=76281980&t=1)** - The exercise files for this course are hosted on [[GitHub]] [[Codespaces]], allowing you to work along with me in your browser without having to install any software. I'll talk more about this later, and even demonstrate how to set up your own [[React.js|React]] projects with Vite on Codespaces. But for now, I'll hand things over to my friend and colleague Ray Villalobos, to explain how it all works. Take it away, Ray.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (2), [[GitHub]] (1), [[React.js|React]] (1)
> **Prerequisites:** install (1), set up (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - the (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] This is Ravi De Lobos, senior staff instructor at [[LinkedIn]] Learning, and I'm going to show you how to work with LinkedIn Learning courses using [[GitHub]] [[Codespaces]]. Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands-on practice that mirrors [[Software Development]] in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click and you're ready to go. To practice along with the course, you can create a Codespace directly from the course overview page. First, click open next to GitHub Codespaces. If you're already logged in, you'll be directed to a Getting Started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in or create a free GitHub account first. From this page, click on Create Codespace on Main. The first time you open up a Codespace it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the extensions panel. Because this is a browser it's easy to inadvertently close the browser window and lose the editor. If you do that don't panic.
>
> **[1:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine. You can always get the Codespace back for this repo right here Notice that it even remembered that I had open the extensions panel. An alternate way to create a Codespace is directly from one of our courses GitHub repositories. From here, click code and then create Codespace on Main. You can also restart a previous Codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes like mobile phones or tablets but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi-branch repository looks like which is more common when you're working with web frameworks. If you go to the branch icon on the status bar you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch that's how the code looked at the beginning. If you see an E, that's how the code looked at the end. Let's switch to how the code looked
>
> **[3:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=187)** on chapter two and the third video. I'll choose the beginning branch. As you work through a course you might make some changes on a branch. I'm going to make a minor edit on the index .[[HTML]] file right here. I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes like say 0703E, I may see a dialog box like this. If you don't care about saving your changes you can simply hit the force checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made even if you've deleted the Codespace. To create your own fork you can click on the fork button on the repository. I'm going to hit Create fork. I don't have my own copy of this repository, and if I want to, I can start a new Codespace on that fork.
>
> **[4:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=279)** This forked version is almost exactly like the original repository but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here as well as an asterisk on this branch. In the source control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the commit button and I'll ask it to go ahead and stage the changes and then I'm going to hit this button here. I'll hit okay. You can also let it go ahead and run [[Git]] [[Fetch]]. That way it'll automatically sync with your forked repo. Now that change will be stored in your own version of this repository. Don't worry if you forget the fork a repo and then try to push changes, Codespaces will also ask you if you want to create a fork automatically. Look for additional core specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (9), [[GitHub]] (8), [[LinkedIn]] (2), [[Software Development]] (1), [[HTML]] (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (3), click on (2), open the (1), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3), git (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)
> **Prerequisites:** getting started (1)


### 1. Building a Weather App with AI Power

[↑ Back to Table of Contents](#table-of-contents)

#### [Beyond ChatGPT: What AI can do for you](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=1)** - The public was introduced to what we now call AI in November 2022 through the release of Open AI's Chat, GPT. Since then, numerous other similar services including Poll and Claude and Bard have been released. Now what do they all have in common? They are chat based applications where you have a back and forth conversation with the AI system. For this reason, when we think of AI, we tend to think of chat. In fact, chat GPT has for many become synonymous with AI. But here's the thing, AI systems are not chat systems. Chat is an interface layer built between the AI and the human user to facilitate easier communication. The very first step on your journey to building things with AI is to move past this idea that AI's are chatbots because they really aren't. AI systems like Chat GPT are essentially information transformers. You give them some information and they use their internal models to transform that information in some way based on your instructions. Ask the AI a question like why are Scandinavians so tall? And the system will transform your question into a language like construct with a statistically high [[Probability]] of being the type of answer a human user would expect. Give the AI a code snippet and ask where the error is and it'll transform the code snippet into a code-like construct with a statistically high probability of being the type of answer a human would expect. Ask the AI to summarize a document
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=94)** and it will transform... I think you get the idea here. One of the useful uses of an AI is to transform data into other [[Forms]] of data. For example, turn this data into a structured table or turn this structure data into [[JSON]], et cetera. Developers can use this capability to transform human language requests into structured data software it can work with. For example, when a user asks what's the weather like in Sarasota today? The AI can be set up to identify first, that this is a question about the weather. Second, that it's about the weather in a city called Sarasota and third, that this city is in Florida, United States of America. Using AI like this we can build custom conversational interfaces into our regular apps without having to turn every online interaction into a chat. That's exactly what we'll be doing in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Probability]] (2), [[Forms]] (1), [[JSON]] (1)
> **Env Vars:** gpt (3), json (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)

#### [Real-world challenge: A more useful weather app](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=0)** - [Instructor] Our goal in this course is to use AI to improve the [[User Experience (UX)|user experience]] of an existing app. And this is the app in question. It's one I built for a previous course, and I've upgraded it here to use [[React.js|React]]. The app itself is pretty straightforward. We go into the current weather panel, enter a location, click Submit, and then two requests are sent over to the OpenWeather map, API. The first one is sent to the location API, which converts a location name like Oslo, Norway into longitude and latitude. The second request is sent over to the weather API, using that longitude and latitude to get the closest weather station and then pull the weather data from that location and send it back to the app. The app then takes that information and converts it into display over on the right-hand side. We can test it out by putting in a location. So in this case Carpinteria, CA, US. So that's Carpinteria, California, US. Click Submit. The API requests take place, and we get data back and display it. So here we have Carpinteria, California, US is currently 24.8 degrees Celsius, 2.8 meters per second winds in kind of a southerly direction. And if you don't like Celsius and meters per second, you can click change units, and we switch over to Fahrenheit and feet per second. So the app works this way. And it's also fairly lenient. If I go in here and say Burnaby, which is where I live in Canada, because there's only one Burnaby in the world when I click Submit, I get the correct information. So this is the weather at my current location. However, if I put in a name
>
> **[1:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=93)** that might appear several places, like London, and click Submit, then we'll get the most prevalent of those locations. So in this case, we get London in Great Britain, or the UK, which is probably where people want information from. But if I want information about London, Ontario, I have to be more specific. Now if I do something like this, London, Ontario, I still get London, Great Britain because this request is malformed to what the API needs. So if I want London, Canada, I have to go down here, and say this is not the US, so it has to be city and then two letter country code. So I have to go London, CA with no spaces and click Submit. And then I get London, Canada. So this user experience can definitely be improved by fixing how you input information and also by providing some more contextual information about the weather. And that's exactly what we'll do in this course. We'll start by, instead of the user putting in this very specific formatted location data, putting in a question, like, "What's the weather like in London, Ontario?", and then have AI figure out what is this location, and then format the location prompt to match what's the location API needs. In this case, London, CA. Then, when we get the weather data in return, it's actually fairly extensive. There's a ton of information in that weather data. And right now we're only displaying the temperature and the wind speed and direction. We'll send all of that weather data along with a prompt to the AI and ask, "Can you give me a textural description of the weather?"
>
> **[3:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=187)** And that way the user can go over here and say, "Do I need to bring a rain coat if I'm going to London, Ontario?" And the system will then provide a textual description saying, "Maybe you do, it's currently raining", or, "It might be raining soon", or, "It's cold", or, "It's hot", or, "You need sunscreen instead", or something like that. So we'll use the AI twice, once to figure out the location and then again to parse the weather data. And then in between we'll use this other API to actually get the weather data. So there's a lot going on here, and it's a good demonstration of how we can use AI for more than just chat.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (2), [[React.js|React]] (1)
> **Env Vars:** api (7)
> **Versions:** 24.8 (1), 2.8 (1)
> **Speakers:** - [instructor] (1)

#### [Ideating with ChatGPT as a base](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=0)** - [Instructor] Anytime you plan on integrating AI into an existing app or a new app it's a good idea to test out your prompts first in the most bare bones version of the AI. So in this case, because I'm using the open AI API, I'm just going to use Chat GPT to test my prompts. There are two things we need to do in this app. The first one is to transform the prompt into a specific location string. The second one is to take a bunch of weather data and then try to convert that into human readable information. So to start off, let's take a quick look at the API we're going to use. So it's the API from OpenWeather Map and we're going to use two different APIs here. The first one is the Geocoding API which receives the city name, state code, and country code and then outputs a ton of information about the location that you get in return in an array. So in this case, because the request was London you actually get several different Londons. So here the first one is the city of London in Great Britain and the state England. The second one is London in Ontario. So it's country CA in state Ontario. And then the second API is this one, the current weather data, where we pass in the latitude and longitude that are spelled out here in the response for the Geocoding one. And then we get a ton of other data in return which isn't really human readable data. So, here, there's a ton of information. All of this temperatures, for example, is listed in Kelvin which isn't something people generally understand. There's wind speed, there's whether, there's rain clouds,
>
> **[1:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=95)** a bunch of information. And we want the AI to convert this tabular data into human understandable information. So we need to make two prompts. One for the location, the other one for the weather. Let's start with the location prompt. I want to see if I can get GPT three five to do this. So I'll start with this prompt here. Act like a location string generator. Based on my prompt, create a location string following this specific format, city, two letter state code, two letter country code. And then I provide an example. What is the weather like in London, Ontario? And the response is London,ON,CA. This is what's called few shot prompting where I'm not only providing the prompt but I'm also providing an example saying. This is a format I want you to follow. Let's see what happens when I send off this prompt. "Sure, I can help you with that. Please provide the necessary information." So let's try, what's the weather like in Burnaby? That's where I am. So Burnaby,BC,CA. Correct. Okay. Do I need to wear sunscreen in Oslo?
>
> **[2:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=169)** Oslo,NO,NO. That's not entirely correct 'cause NO definitely is not a state, but it's still following my general convention. So what I'm seeing here is GPT three five can do what I want to, but I need to provide a very specific prompt for it. And later on in the course you'll see we may have to do something a bit more fancy to get this to work, but the AI definitely can pull the information out from my prompt. Now the reason why this is important is, let's see what happens if I start up a new chat. So I'll go in here, start a new chat, and then ask for the same thing again. What's the weather like in Oslo right now? "I'm sorry, but as an AI model with knowledge cutoff in September, 2021, I don't have [[Real-Time]] data." So, we can't use the system to get current data but we can use the system when it's prompted properly to figure out this is a question about Oslo, Norway. That's the first part. The second part is we want to be able to get some information about the data. So what if I go in here and I copy out this example data on the [[JSON]], and I say, Based on the JSON below, what's the current weather in this location? No. See, describe.
>
> **[4:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=262)** So here we get a bunch of more descriptive data but this isn't very human friendly. Let's see if we can say, describe the weather in a conversational way using appropriate units.
>
> **[4:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=287)** So the system figured out the location based on the longitude and latitude which apparently is Zocca, Italy. And it says, "The temperature's around 25.3 degrees, which is blah, blah, blah in Kelvin." And then, but it's still making this, like, really clunky description of everything. And that's probably because it's GPT three five.
>
> **[5:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=312)** So let's see what GPT four does with the same query. So I'll say, based on the JSON below, provide a conversational description of the current weather.
>
> **[5:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=330)** And I'll paste in the JSON again. See what GPT four does. Now, GPT four is much slower, but it's also way better doing things like this. To, like, provide a human readable description of things. And as you can see, the description here is better. Like if you go and compare the two, it is better. And there's far more information here, and this is totally something I can use. So, based on this experimentation I can see I am able to use the AI to figure out the location so that I can get the right string of text to send off to the API. And once I have the weather, I am able to use the AI again to provide a human readable description of that weather. And with some [[Fine Tuning]] I can also get that weather description to be a lot better and more human readable and more conversational than what you see here. So, we're on our way and this will eventually work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[Real-Time]] (1), [[Fine Tuning]] (1)
> **Env Vars:** gpt (7), api (6), json (4)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Versions:** 25.3 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 2. The Core App

[↑ Back to Table of Contents](#table-of-contents)

#### [Sidebar: Build a React app using Vite and GitHub Codespaces](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=0)** - [Instructor] Quick sidebar, as we work our way through this course together, you'll notice I'm building a [[React.js|React]] app using Vite in [[GitHub]] [[Codespaces]]. And as you finish out the course, there's a good chance you'll want to set up a similar project yourself later. So let me walk you through the process of setting this up from scratch so you don't have to take my existing project and delete it and start over. The reason I'm using Vite instead of webpack and create React app is because this gives me a far cleaner and faster environment to work in. Vite is a relatively new build tool whereas webpack is over nine years old, and there are huge advances that have taken place over those last nine years that Vite is taking advantage of. To start this process, go to GitHub, and create a new repository. I'll just call mine vite-demo, and I'll set it to public and Add a README file just so there's something in the project. Create repository. And once we're in the repository, I'll go to the Code button, select the Codespaces tab, then click on these three dots to open extended functionality and go to Configure dev container. This step is important because once Vite is active, you're running the dev process. Vite will try to spin up a browser preview in your browser and that requires opening a port and we have to tell the virtual machine codespaces is running in what port that is and what we should do with that port. Inside devcontainer.[[JSON]], we're telling codespaces how to configure itself. So here after features,
>
> **[1:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=95)** I'm going to add in a little bit of code, so I'm saying portsAttributes. Then we list out each of our ports. In this case it's just one, it's 5173. We give it the label, Vite port, and we say onAutoForward, openPreview. So openPreview means that it'll open a preview inside VS code itself in the browser. You can also change that to open browser if you want it to open in a separate browser window. Then at the bottom here we say forwardPorts and here we have an array of ports we want to forward in this case 5173. For reference, 5173 is the port Vite uses by default. I'll Commit changes to commit this to my project. So now it's part of the overall project. When I go back to code, you'll now see we have a devcontainer folder. That's all I need to do in GitHub. From here, I can now start up codespaces by creating a new codespace on Main. This codespace is a virtual machine that runs my project inside Visual Studio Code in my browser. And this codespace you see here is the starting point of the codespace that you'll be working with throughout the [[Representational State Transfer (REST)|rest]] of this course. While the codespace is building out, we can go to the Vite documentation, found at [vitejs.dev/guide](https://vitejs.dev/guide), and if you scroll down here, there's installation instructions that are simply [[npm]] create vite@latest. So that's the command we'll use. I'll go down here in terminal and paste that in. Now codespaces will go out and find Vite, says do you want to install the following packages?
>
> **[3:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=189)** Yes, I do. Then it'll say, is this a project name? Yes it is. And from here we can then install a framework. So you can go with [[Vanilla]]. So no framework, you can use [[Vue.js|Vue]], React, Preact, Lit, Svelte, et cetera. I want React and I want [[JavaScript]] plus SWC as the buildout that installs all the pieces I need in a new folder called vite-project. Then I'll say cd vite-project to get into the project and npm install to install all the dependencies inside the virtual machine, so that we can work with all the dependencies. And while that's happening, I'll make one more change. I'll go into vite-project and go to package.json. And here at the very top we have scripts and it says dev, vite. So I'm going to add something to that. I'll say dev, vite --host, save that, this tells Vite to specifically use whatever host the environment provides and that's what we want here. So now I can clear this and then say npm run dev and Vite will spin up an environment then automatically open it up in a preview in my browser here. And as you can see, Vite is now working with React in my browser and I can go make changes to the project and those changes will automatically show up here in the simple browser, and I can also click on localhost here, and open up the same thing in a separate browser window. All of this is now happening in my browser without me installing anything on my computer. I have a clean install of React with Vite
>
> **[4:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=284)** and I can do whatever I want with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (6), [[Codespaces]] (6), [[GitHub]] (3), [[npm]] (3), [[JSON]] (2)
> **UI Navigation:** go to (5), click on (2), select the (1), scroll down (1)
> **Prerequisites:** install (5), configure (2), set up (1)
> **CLI Commands:** npm (3), make (2), find (1), cd (1)
> **Tools:** github (3), vs code (1), visual studio (1), terminal (1)
> **Code Identifiers:** openpreview (2), portsattributes (1), onautoforward (1), forwardports (1)
> **Definitions:** is a  (2), means that (1)
> **File Paths:** devcontainer.json (1), package.json (1)

#### [Boot up the app in GitHub Codespaces](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=0)** - [Instructor] This course is hands-on, and I want you to follow along as we work through this project together. To get the exercise files, you can either go to [[GitHub]], clone the entire GitHub repository onto your computer, set up VS Code on your computer, wire everything together, or you can simply use GitHub [[Codespaces]] and do it all in the browser. That's what I'll be doing throughout this course, and I recommend you do it too because then you don't have to go through the whole setup process. To get the Codespaces, you can either click on the Codespaces button in the course page, or you can go to the GitHub repository, like you see here. Then click on the Code button. Go to the Codespaces tab. And from here, you can see a list of all the Codespaces you've already created for this project, if you have any. And you can also create new Codespaces if you want to. So that's what I'll do here. I'll create a new codespace by clicking plus. This spins up a new codespace on the main branch where we start. This codespace is fully built out with everything you need, including all the dependencies, and all dependencies have already been installed in the project. You don't have to run [[npm]] init or npm install or anything else. You can just start working with the files right away. Now before we do that, let me just point out a couple of things. If you want to, you can just work with Codespaces in the browser like this. If you don't like working in the browser, you want to feel more like you're working in a real dev environment, you can also install this as a progressive web app by clicking the button up here on the corner. When you click on install here, you're basically creating a new, little browser with just this website in it on your computer.
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=94)** And once you've done that, you can just spin up that progressive web app from your computer as a standalone unit, and you're brought to the same environment. You're just doing it in your computer. Oh, and you can also work with this codespace in VS Code on your computer if you want to apply your own color schemes or other features. To do that, click on the Codespaces button in the bottom, left-hand corner, and go to open in VS Code Desktop, and it'll open in VS Code on your desktop. So you're now accessing the VM that contains the entire project in the cloud inside VS Code installed on your computer. Once you're done working for the day and you want to spin Codespaces down, you can again, click on the Codespaces button in the bottom left-hand corner and click on stop current codespace. This doesn't delete anything or erase anything or change anything. It just stops the virtual machine. And once you want to go back and continue working, you just start it up again and you're right where you're left off. And one final thing, any changes you make inside this codespace only happen inside this codespace. They don't apply to the GitHub Repository. That means if you want to commit any of those changes to memories so you can access them later or maybe spin up a new codespace from them, so you want to place them inside GitHub. You need to use the regular [[Git]] features. The easiest way is to use the built-in tools. And by the way, if you do this, you need to create your own fork of the project 'cause you can't commit to my project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (10), [[GitHub]] (6), [[npm]] (2), [[Git]] (1)
> **Tools:** github (6), vs code (5)
> **UI Navigation:** go to (4), click on (4)
> **Prerequisites:** install (3), set up (1), setup (1)
> **CLI Commands:** npm (2), make (1), git (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Work with the OpenWeatherMap API](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=0)** - [Instructor] The weather app we'll be working on together throughout this course relies on the OpenWeatherMap APIs to gain location information and weather information for that location. So, for our app to work, we need to connect it to OpenWeatherMap. That's done by adding your private API key to our project. And that's done in a new file you'll create from this file here that's called n.local. So grab n.local.template, copy it and paste it in, then rename the new file to just n.local. And inside here, we'll eventually save the open AI key, but we don't need that yet, so I'll delete it for now. And we'll also save the OpenWeatherMap key. Now, it's important to note here, this is not for production. You never publish an API key in a file like this when you publish content to the web because if you do, that API key becomes public knowledge. Anyone can access it, and anyone can use it. If you want to host an application, like the one we're building, on the web, in public so other people can use it with your key, you need to place the key in a key-management service, or you need to move all the interaction between your app and the API into the server so it's happening at the server site, not at the front end. 'Cause if it's on the front end, people can see that key being passed back and forth. They can take it and use it in their own apps, and you'll pay for their use. In other words, this is for demonstration and experimentation purposes only, not for production. All right, all those caveats aside,
>
> **[1:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=95)** let's go over and create a new key. Go to [openweathermap.org](https://openweathermap.org), create an account, and then go to your username and go to my API keys. Here, you'll get a list of all your active API keys, and you can also create new ones. As you can see, I have several active ones, and I want to create a new one called weather app, so I'll click generate, and the new key is automatically created down here. From here, I can copy the entire key, go back into n.local and paste it in. Notice there are no quotation marks or ticks or anything else. Just straight-up paste it in, and that's the format you want. Save this file. And now, you should be able to test your app. But keep in mind, sometimes it takes a while for OpenWeatherMap to approve a new key. So it can take maybe five or 10 or 15 minutes, or even up to an hour, before it actually works. In other words, if it doesn't work as you are doing it, just wait, and eventually, your key will go online and be active, and then it will work. To bypass that problem, I'm going to take an old key that I know works and paste it in instead, save n.local, close out those two files, and then go down to terminal to test my application. So I'll say, [[npm]] run dev. This spins up VITE and spins up my site in the local browser. So here you can see it running inside VS code. And from here, I should now be able to request weather information from any location in the world. So I'll just say Oslo and click submit.
>
> **[3:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=189)** And if the key works, I should now get the weather information here, as I did. So that means we now sent off a request to the location API, it returned longitude and latitude, then we took longitude and latitude and sent it off to the weather API and got information in return. Everything is now working, and that means we can start working on our project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (1)
> **Env Vars:** api (8), vite (1)
> **UI Navigation:** go to (3)
> **Tools:** terminal (1), vs code (1)
> **Definitions:** in other words (2)
> **CLI Commands:** npm (1)
> **URLs:** [openweathermap.org](https://openweathermap.org) (1)
> **Exercise Files:** template (1)

#### [App walk-through](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=0)** - [Instructor] Since we're not starting from scratch but instead extending an existing project, it's important that you understand how the existing project works. So let me give you a brief walkthrough of our project as we get started. Before we do that, I'll just close everything out here. Since we're working inside VITE, I can press H in terminal to get a breakdown of all the shortcuts and here at the bottom you see press Q to quit. So press Q, that quits out VITE and now I can close simple browser so that we can see everything plainly. This is a standard [[React.js|react]] project and in VITE, the index file for your project sits in the root folder. So it's right here. Here we call in a root ID div and then everything happens from there on. All the other files that you'll be working with sit inside the source folder. This is again standard React project. So we start off with main.jsx, which sets up react and strict mode and pulls an app inside app. A lot of the functionality happens and then app calls in all the other components. So let's take a closer look at app. Here, we're setting a couple of states. So we have the prompt that is the input that you put into the field. We have units that would be at the metric or imperial. We have WeatherData loading, which sets whether or not the data is currently loading. That's what fills out that loading thing that you see inside the box. And we have any error messages captured. So all of these things are captured using set prompts, set units, set weather data loading and set error messages.
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=94)** We're passing information into these states and then displaying them. Scrolling down, we have this hook that calls in useApiRequests and passes in the prompt. This is an external file that does all our API requests for us and we'll look at that in a second. But this is basically where we send our prompt and from where we get our errors, our location data and our weather data that is then displayed. To see how the app works, we can go down to the Return section. Here, we first set up a container and then a header. Inside the header we have current weather then the weather form, and then any error messages. So that's what you see on the left hand side of the screen. Then we have a main, that's what you see on the right hand side of the screen. And if there is weather data and no error messages, we call in the weather card with all the information. So the loading, the weather data, the units, the country, the state, and the set units. Then if there's no weather data, we just call in the weather card without any of that information. We just set the loading to isCurrentlyLoading and that way we get that nice display where there's a loading panel telling us something is coming but it's not there right now. We'll be working with this file and other files throughout the project. So anytime you're wondering, okay, where is everything fired from? Just remember it's all happening here in app.jsx. That's where everything starts. That's where we call in the form. That's where we fill in the weather card itself. But the main event of this app actually happened in this hook here.
>
> **[3:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=188)** useApiRequests, which sits inside components under the file useApiRequests. This file is where all of the API requests are handled and this is where we'll add our additional API requests as we work through the course. Again at the top we set up a series of states. So we have the error state, we have location data and we have weather data right now. Below that, we use useEffect to trigger all of the things that are going to happen whenever this file is called. So inside useEffect, we say go and [[Fetch]] data asynchronously from first, LocationToCoordinates and we pass in the prompt. Then when the response comes from that, we go to WeatherData and we pass in the location data results. That's from the first request here and then we pass all of that information back to the application. So that's what we're doing down here. We're returning either an error, location data or WeatherData. All of the states that were set up here. So this is the sequence of events, this is the order in which the different APIs are called and as we add in new API calls to the AI APIs, we'll add them in here. To make it easy to understand what's going on, I've broken out each of the actual API calls into separate files. So here we have LocationToCoordinates as a component and we have WeatherData as a component. Going into them, here's LocationToCoordinates. You'll see it's just a standard API call. We grab the locationString, that is what is passed in, in this case, the latitude and longitude.
>
> **[4:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=282)** And then we send a fetch response to openweathermaps, locationString API, and then we grab the response and send it back if there is a response. And we also handle all the errors down here. As we say, if there's an error pass the error down the chain all the way to the app component and then display it inside the form. Same exact thing happens in WeatherData. Here, we grab our location data, we pass it in so we have the latitude and longitude. Then we capture the result and toss it back unless there's an error, in which case we capture the error and toss it back. So to recap, the sequence is every time something happens, we call useApiRequests, useApiRequests goes through a sequence of calls to first, LocationToCoordinates and then to WeatherData. LocationToCoordinates grabs the coordinates and passes them onto WeatherData. WeatherData uses those coordinates to get the weather data and passes that back into app. An app then uses the weather card component to transform the information into readable data and then display the information in the app. So this is where all the information is displayed. Take some time before we continue in the course to go through these files and fully understand what is going on here. I've set it up so that the sequence is straightforward and easy to understand and I've separated out all the components so that they are individually handling each operation in turn and you can clearly see which component is doing what.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (3), [[Fetch]] (2)
> **Code Identifiers:** useapirequests (5), useeffect (2), locationstring (2), iscurrentlyloading (1)
> **Env Vars:** api (7), vite (3)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Prerequisites:** set up (3)
> **File Paths:** main.jsx (1), app.jsx (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)


### 3. Connecting to the OpenAI API

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the OpenAI API, and how does it relate to ChatGPT?](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=1)** - Throughout this course, we'll be using the [[OpenAI API]] to integrate an AI model into an existing application. The OpenAI API serves as a good baseline example for this type of integration, and the approach you'll learn here will apply more or less the same with other AI APIs as well. Which begs an important question, what exactly is the OpenAI API, and how does it relate to [[ChatGPT]]? Short version, the OpenAI API provides programming-level, highly configurable direct access to the GPT language models offered by OpenAI. Using the OpenAI API, you can build a ChatGPT clone because ChatGPT itself is built on the OpenAI API. Long version, the OpenAI API provides much deeper core access to the AI models than ChatGPT and does so without all the user filters ChatGPT has put in place to prevent unexpected usage. This means you, as a developer, have way more control, both in what prompts go in and what responses come out and in what models are used and how they are configured. This, in turn, means the system behaves differently. For one, you don't get that back-and-forth chat experience with the OpenAI API, unless you build an application to support it. For another, you get to control how the response is generated and what format it takes, a human language answer, a function call, or something else. Finally, when using the OpenAI API,
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=94)** you pay per token used. So the bigger your prompts are and the more prompts you send, the more money you spend. The price per token is very low. But if you build a public application using the API, you have to prepare to pay for every use. Practically, the OpenAI API works like any other API system with one significant exception. The response from the OpenAI API and any other current AI API is non-deterministic, meaning you cannot know in advance what the response will be, no matter how much you try to control it. For example, you can tell the API to return a comma separated list of city, state, and country name without spaces, and in most cases it will, but sometimes, it won't, or it will return inaccurate or fabricated information. And when it returns malformed or incorrect information, it will still present it as exactly what you asked for. So when using these systems, you, the developer, take on the responsibility of making sure the data you receive meets your requirements and that you have tools in place to deal with the instances when something goes wrong because something will go wrong. You'll see plenty of this as we move through the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (11), [[ChatGPT]] (5)
> **Env Vars:** api (15), gpt (1)
> **Analogies:** for example (1)
> **Speakers:** - throughout (1)

#### [Test the API in the OpenAI Playground](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=0)** - [Instructor] To be able to work with the [[OpenAI API]] and follow along through the [[Representational State Transfer (REST)|rest]] of this course you need to sign up specifically for this service. And that's the case, even if you already have an account for [[ChatGPT]] or ChatGPT Pro, because the OpenAI API is a separate service entirely. ChatGPT is free. ChatGPT is a monthly for-pay service. The OpenAI API is a pay-per-use service, where you pay for the individual [[Tokens]] you use throughout your interaction with the system. To sign up, you can either go to platform.[openai.com](https://openai.com) and click on the Sign up button. You can go search for the OpenAI API, and you're taken to this page, and from here you can click Sign up, and whatever method you choose, once you're signed up, you land here on platform.[openai.com](https://openai.com). From here you get an Overview of all the features available to you. You get Documentation, you get an API reference, Examples, and a Playground. And I'll tell you upfront, the Documentation, the API reference, and the Examples, as of this recording, are all [[Python (Programming Language)|Python]] focused. That means if you come in here looking for [[JavaScript]] tutorials, you will not find any. All the documentation is centered on Python, because Python is the central language for interaction with [[Large Language Models (LLM)|large language models]], and the documentation simply hasn't been built out for things like JavaScript applications yet. This is one of the primary reasons why I'm making this course, to give you a bridge between what exists in documentation and real-world implementation using JavaScript. One more thing, once you're inside,
>
> **[1:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=95)** if you're going to use the API and follow along, you need to add a credit card, because you'll be paying for all the tokens you use. And I know that to some that may sound scary, because it means you're paying for use, but let me just show you how much it costs, because it is not as much as you think. Here is my usage for July, during the time I developed this course. You can see down here the usage for the month for me has been 47 cents, so not a full dollar. And I think the full charge I got for the full development of this course was somewhere around $1.50, for all the use I did to develop this course. And I sent thousands of requests through this API. So, though you have to pay, the cost of the tokens you're going to be using throughout this course is not significant, just so you know. But we're going to talk about something else. One of the first things you need to do when you work with the OpenAI API is figure out how to configure the AI to do what you want. And that's done in the Playground. Here you get to set up your request inside the walls of the system before you go and spin up your REST client and before you write any code. And you can experiment with things like what mode you want the AI to work in, which model you want to use, the temperature of the model, so how creative it is, the length of the output, and all of these things can be configured in your code, but it's a good idea to test it here first so you know exactly what you need to set up,
>
> **[3:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=188)** and then you can generate code from it that you paste into your project. So let's take those two prompts that we worked with earlier and place them into the Playground. 'Cause it's a little bit different from working with ChatGPT. You'll remember, we had two prompts. We had the one saying "act like a location string generator," and then we had the other one saying "take this data and make it human readable." So let's start with this one, "act like a location string generator." I'll just copy out the entire thing here, then go into Playground, and instead of placing it in the USER field I'm going to place it in the SYSTEM field. So this defines how the system works, meaning every time a prompt is sent to the AI, it will now first look at the system and say, "Oh, right I am a location string generator "that takes the prompt and outputs this format." And then the user input is just the request. The request over here was, "what is the weather like in Burnaby?" So I'll copy that and paste it into USER. "What's the weather like in Burnaby?" And then click Submit. Now based on the default setup with the 3.5-turbo model, temperature at 1, maximum length 256, and all these other settings, I get the response Burnaby,BC,CA, which is the correct one. So that means this setup is probably what I need. Now if I want to, I can go in here and try to change this to something else. So I could either go to the older models, which is not a good idea, or if I needed a much bigger input, I could also change it to turbo-16k, which gives me more tokens.
>
> **[4:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=280)** But since these requests are really small I don't need that. Or I could go up to [[GPT-4]], if necessary. Again, the output here is what I want, so I don't need to do that. I could also try to test it by changing the temperature or doing something else. But for this particular use, none of that is necessary. What you see here works perfectly out of the box. Once I have something that works I can choose to save this preset. That way I can come back to it later. Or if I want to do something else, I can just wipe it out and start over, which is what I'm going to do. 'Cause I want to see what happens with this prompt over here. So "based on the [[JSON]] below "provide a conversational description," blah, blah, blah. So I'll say, I'll take this starting point here. Go in, replace the SYSTEM to that. So "based on the JSON provided," and then, "give me a conversational description "of the current weather." Then in the USER field, I'll just nix these out. I'll say add a message, and the message in this case will be this weather data here. So I'll scroll down. Copy it. And paste it in. Now, right now we're still working with the Chat mode and gpt-3.5-turbo at a temperature of 1. Let's see what happens when I submit this. Here I get a response that "The current weather in Zocca, Italy," which is the location based on the location parameters, "the temperature is 298 Kelvin,
>
> **[6:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=376)** "which is approximately 25 degrees Celsius, "with a minimum..." So this works, but it's not ideal. This is not very user friendly. So let's see what happens if I change this to gpt-4 and just submit again. And we get a different response. And you can actually see here how much slower gpt-4 is to gpt-3.5. You can see it spells things out much slower, but this output is far more reasonable than the output previously. Based on this, I can now say, "Do I need to change my prompt? "Do I need to change something in the behavior?" And I can keep experimenting until I get exactly the output I want. So this, inside the Playground, is where you do all your [[Fine Tuning]] of how you are going to interact with the system. Then when you're done, you can click on View Code, and this gives you either Python output, a node output, or a curl output. So if you go to node, which is the closest thing you'll get to JavaScript, you can see here is an example of how you can do this. But even this is not ideal for our purposes. So we're going to write our own prompt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (5), [[ChatGPT]] (5), [[Tokens]] (4), [[Python (Programming Language)|Python]] (4), [[JavaScript]] (4)
> **Env Vars:** api (9), user (3), system (2), json (2), rest (1)
> **CLI Commands:** python (4), node (2), find (1), make (1), curl (1)
> **Documentation:** the documentation (3), api reference (2)
> **UI Navigation:** click on (2), go to (2), scroll down (1)
> **Prerequisites:** set up (2), setup (2), configure (1)
> **Versions:** 3.5 (3), 1.50 (1)
> **Definitions:** is a  (3), is an  (1)

#### [Generate secret keys](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=0)** - [Instructor] Just like with open weather maps for our application to work with the [[OpenAI API]], we first need API keys to be stored in our application. To get your API keys from OpenAI, go to platform.[openai.com](https://openai.com), click on your name up here, go down to View API keys. Here, you get to generate new API keys for your applications and you can generate however many you want. One thing of note here, you only get to see the API key here once. So if you create a key and then don't copy it and then click okay. Then you'll never see the API key again and you'll have to go in and delete it and create a new one. Let me show you what I mean. So I'll click Create new secret key then I'll give my key a name. So I'll say Weather app, and I'll click Create secret key. This gives me this giant key and it says right here, you won't be able to view it again through your OpenAI account. So copy this key right now using the copy button. Go over into your application, go into env.local here. Add in a new variable called VITE_OPENAI equals and paste in the key right away. That way it's saved somewhere, otherwise you will lose it, and you'll have to just go through the process again. Save that file just so that you don't get rid of it, and then you can click Done, and you can see now the Weather app is down here, but you'll never be able to access the information. If you click on the Edit button,
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=94)** you can edit the name of the key, not the key itself. That said, if you accidentally create a key, and then forget to copy it, or if you copy it and then place it somewhere and then lose it, or something goes wrong, there is no danger here. All you need to do is go in, click on the trash can button to revoke the key that erases it and makes any apps that use the key not be able to use it anymore and just create a new secret key. That also means if you accidentally publish your key publicly somewhere and you are afraid that someone might find it, just go and revoke the key and no one will ever be able to use it again. And remember, all the keys you generate in here will accumulate into your payment plan. So if you set up 40 different keys for 40 different applications and you're using all of those 40 applications, you'll get billed for the use of all of them. Any key associated with your account will be billed to you, which is why, again, I say using env.local to store your keys is only for development purposes and experimentation. Do not do this on a live web app because other people will be able to see your keys. If you want to publish an application like this on the web, you need a key handler or a key management software to handle your keys, or you need to move all your API transactions to the server to run them on the server, so they're not public. If it's sitting on the front end like we are doing now, other people will be able to see that key, copy it and use it in their own applications unless you revoke the key access.
>
> **[3:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=187)** That said, the way I've set up this project, this file, env.local will never be stored in your [[GitHub]] repository, so it only exists inside your codespace, and that means it's perfectly safe to use for you during this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (1), [[GitHub]] (1)
> **Env Vars:** api (8), vite_openai (1)
> **UI Navigation:** click on (3), go to (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Tools:** github (1)
> **Analogies:** just like (1)

#### [Test the API with a REST client](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=0)** - [Instructor] Now that you have an API key for the [[OpenAI API]], it is time to see what happens when we send requests through a [[Representational State Transfer (REST)|REST]] client to the OpenAI API. And for this, I'll be using Postman as my client. You can use any client you want. I just happen to like the interface for Postman. So that's why I'm using it. And the process will be the same no matter what tool you use for this. To create an external call, it's a good idea to first go check out the API reference because it tells you how to authenticate and how to make requests. So I'll go into authentication here and it says the API key is a secret and the way you pass it in is through the authorization HTTP header as a Bearer token. So we're saying Authorization: Bearer and then OpenAI API key. Okay, so I already have the key, and I know that in Postman I can create environments. So I'll start here by creating a new environment for myself that stores the key for me. I'll call it OpenAI. And I'll create a new variable here called secretKey, doesn't actually matter what it's called. And then I'll go into my file and copy out the key I pasted in in the previous movie because this is the only place where this key currently exists. So I'll paste that in here to initial value. And that means as long as I set the environment to OpenAI, I'll be able to access this key by referencing secretKey. That way I'm not pasting the key into any of my code and I don't then accidentally copy out my code and paste it in somewhere else with the key.
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=94)** So I'll save this environment and then I'll change the environment up here to OpenAI. Then I can go to collections. And from here, I'll now start creating some requests. To do that, I first need to see what requests look like. So if I scroll down here, we can go to making requests. And you see first we send a request to api.[openai.com/v1/chat/completions](https://openai.com/v1/chat/completions). So I'll copy that out and go here and I'll create a new request for myself. This will be a pulsed request because I'm sending the request with information and I'll paste in that URL here. Then because we have auth, I can go into auth and say the basic auth, no bearer token. And here I'll put in secretKey. So bracket, bracket, secretKey. This is the key that I pasted in earlier. And you can see it as I hover over it. This is the key that we're using. Then I need to pass in my prompt. Looking back at my code, you'll see that the prompt is passed in as [[JSON]] here. And when I pass in the prompt, I can do a whole bunch of things. So I can pass in the model I want to use. The usage, I can say how many [[Tokens]] I want, the completion tokens, the total tokens. And then there's the choices. There's a bunch of options here. And this is where the playground comes in handy. Just to set up a basic request, I'll just leave the default as is and click view code and then change the dropdown here to JSON 'cause that gives me the code I need.
>
> **[3:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=187)** So here we have all the code. Actually I need a prompt too. So I'll just say my prompt and then go view code again 'cause that should then show up right here, my prompt. So then I can copy out this entire request, go over to body and select in the dropdown raw and then choose JSON as the raw output. And then just paste in the code here. So what I'm doing now is sending off this request to the completions endpoint. And then request is to use the 3.5 turbo model. The message is I am acting as a user and this is my prompt. And then I want the temperature to be at one, the max tokens 256 top_p 1, blah, blah, blah, blah, blah. Actually, you don't need any of this. You can just take it out if you don't want it because these are the default settings. If you do nothing, just leave it blank. This is what we sent in. And then for prompt, I'll type in something just to see what kind of response we get. "Why do cows have horns?" Send off that request. And at the bottom here, we should now get the response from the OpenAI API. And here you see, we again get a ton of information. This is a chat completion. It was created at this specific time. We're using this model down here and then we get the output. So the output sits under Choices because there might be multiple choices. So this is an array of choices. The first one, index zero has the message content. "Cows have horns for several reasons," and then it goes on to describe why. Now if I don't like this response, I can go
>
> **[4:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=281)** up into my request here and change the model to 4.0 or I can change the temperature or I can change the match tokens or I can change my prompt. But what's important here is this now works. I'm now using my REST client to send an authenticated request to the OpenAI API and I get a reasonable response back I can use in my application. So that means everything works and we're ready to start working with the API inside our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (5), [[Tokens]] (5), [[JSON]] (3), [[Representational State Transfer (REST)|Rest]] (2)
> **Env Vars:** api (9), json (3), rest (2), http (1), url (1)
> **UI Navigation:** go to (2), dropdown (2), scroll down (1)
> **Code Identifiers:** secretkey (4)
> **Tools:** postman (3)
> **Definitions:** is a  (2), is an  (1)
> **Versions:** 3.5 (1), 4.0 (1)
> **CLI Commands:** make (1)


### 4. Using AI as a Human-to-Machine Translator

[↑ Back to Table of Contents](#table-of-contents)

#### [Create a location string from a prompt](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=0)** - [Instructor] All right, we now have all the pieces in place to start integrating the [[OpenAI API]] into our app. As a refresher, the first thing I want to do is extend our app so that instead of just putting in location information in this input field, I'll be able to put in a question or a sentence and then the AI can derive from that sentence what location we're talking about and pass just the location string back. You'll also remember I found a prompt that worked for this that looks like this, "Act like a location string generator based on my prompt," et cetera, et cetera, that provides an example. And I figured out that if I take this prompt and I place it into the Playground under the system tag, I'll be able to generate the output every time I pass in a new message with a new request. So now the question becomes, "How do I convert this setup into an API call in my [[Representational State Transfer (REST)|REST]] client that I can then migrate over into my [[JavaScript]] application?" So let's test that out fully. I'll go in here and enter the question I had before. "What's the weather like in Burnaby?" It's a good baseline question to have. You can replace Burnaby with whatever city you're in or whatever city you like to find out information about. And then I'll click view code. From here, again, I'll go and select [[JSON]] as my option. And this gives me the full breakdown. And if you look closely here, you'll see we have two messages. We have a system message, that's what's over here, that's the act like section. So that's the prompt that is added
>
> **[1:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=92)** every time we send a request. And then we have a user message and this is the prompt itself. So as we set this up in the application, we can choose to pass on a system message with every prompt and then add on the prompt afterwards or we can just combine all of it together. So for now, we'll try this approach here. I'll copy this, go over to my REST client, and I'll replace what I had here before with this new request. So I'll just highlight and paste it in. So here we are now sending into [[ChatGPT]] three five turbo, a system message, "Act like location string generator," with our examples. And then the question, "What is the weather like in Burnaby?" And if this works correctly, we should get the response just Burnaby, BC, CA, right? So I'll send this off to the completions endpoint and down here, if I scroll up a bit, you'll see the content output. So under choices, first item, message and content, we have Burnaby BC, CA, which is exactly what I want. Now comes the interesting question. Does this actually work consistently? So that means we have a good starting point for our application. This prompt here will probably work for our needs and we can even experiment with doing something like taking all this stuff out and see if it still provides a proper answer. So I'll send that off. That will just give us the default output. Still same thing, Burnaby, BC, CA, and everything else seems to be working fine. Okay, so we have a prompt that seems
>
> **[3:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=184)** to work the way we want it to. That's a good first step.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (2), [[OpenAI API]] (1), [[JavaScript]] (1), [[JSON]] (1), [[ChatGPT]] (1)
> **Env Vars:** api (2), rest (2), json (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll up (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [The challenge of non-deterministic APIs](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=0)** - [Instructor] Now that things seem to be working and I got you all excited and ready to get your hands on code, I have to bring up a significant caveat. Working with AI APIs is unlike working with any other kind of API for the simple reason that AIs are non-deterministic. You don't really know what they're going to respond with. The demo I showed you where I got it to respond with the correct string is a neat demo but I have experimented with this a lot and it's not consistent at all. Sometimes it'll output the correct answer, other times it won't, and you don't know when that's going to happen. And even worse, the AI won't tell you, hey, by the way, I'm not giving you the answer you expect, I'm giving you something entirely separate that is not the same. What are you going to do about it? And then in addition, you have the problem of working with human language input. We can assume that the user is going to type in a question about a location, but there's no guarantee that the user is going to mention the location. And there's also no guarantee that the AI will understand the reference to the location. Let me show you what I mean. If I go in here and I change my prompt from what is the weather like in Burnaby, which is very clear, a question about a location, to something really not a question about a location, like what is the square root of 57? And send that off.
>
> **[1:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=92)** Let's see what we get. If we scroll down, it says, sorry, I'm not able to compute the square root of a number, I'm programmed to assist with text-based tasks, is there anything else I can help you with? And if we send that question again, it'll get a different response. I can't generate a location string from that question, and we send it again and we'll get a different response. Sorry, I can't generate a location string from that prompt, is there any location related question or request? Do you see what I mean? It doesn't produce the same response every time. In fact, it reproduces a different response every time. And no matter how much you try to force it to output a specific response, there's always a chance it'll output something else, and the one thing it will never do is output an error. All of these responses are correct in terms of the AI responded to your prompt. The problem we have is that we're looking for deterministic responses, the same kind of response every time, and out of the box, this AI will not give you that, which is why this setup here is not sufficient for our needs. We need a way to do two things. First off, we need a way to force the AI to always output this format, London, Ontario, Canada, and nothing else if it's a location query. And we need a way of detecting if this is any other type of query, so a question about math or cooking or travel or whatever else the user might type in
>
> **[3:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=185)** to simply return us nothing so that our app doesn't get confused by the input because there's nothing worse for an app than having to parse a sentence like this as if it was a location string. We'll look at a solution to this in the next movie.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Warnings:** caveat (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Function calling in the OpenAI API](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=0)** - [Instructor] The default mode of the open AI API is as a programmatic version of chat GPT, meaning you input a human language question in the form of a prompt and it outputs a human language response, which is neat and really great if you're building a chat application. But not great if you're trying to use the AI to parse a human language question into some form of data you can use in an application for further processing. For that, we need the system to be far more deterministic and we need to have control not only over the output so that it follows a specific format, but also to capture when the user is inputting questions that are out of scope so that the user isn't able to jailbreak our application and use it to answer questions that are out of scope for what we're trying to do. The good news is we can do this. We can program the API to capture specific types of prompts and pass the output into functions that then output specific formats that match our needs. This is what's called function calling and it was released on June the 13th, which is why it's the model called Turbo 0613 or 0400613. The code example down here explains how this works and is closely related to what we're doing. And I just have to point this out because it looks like I've just taken this code and used it in my example. I actually built out the entire course here using the weather app before this feature was released and then when the feature was released, I retrofitted it to also use this feature
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=94)** and it just happens to be that OpenAI chose to use weather as their explanation for how this works. So, you know, I don't know, people just think the same way about data, I guess. Anyway, when you look at this example, you'll see we start off with the same kind of query as we did before. We have a user that passes in content. This is the prompt and it says, "What's the weather like in Boston?" And then we have this new section that says Functions. This is an array because you can have multiple different functions that are defined within one prompt. Each of the functions will have a name, in this case, "get current weather", and this name gets returned in the response and could then be used by your application so you can detect which function was called and then fire that function in your own application. But it doesn't have to be, so you can just give it a name that identifies which function was used. The important part here is the description field. This description field is effectively the system message that identifies when the function should be used. So in this case it says, get the current weather in a given location, meaning the AI will say, "Anytime a question comes in that sounds like it's looking "for the weather at a given location, "then I'm going to respond using this function "instead of responding, using a human language output." And that response will match whatever parameters are defined in the next section. So here in this example, the parameters define the output as an object with the following properties: location, which is described as the city and state, like San Francisco, CA, and then a unit,
>
> **[3:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=190)** which should be either Celsius or Fahrenheit. And you can even define what fields are required. So in this case, the location property must always be output. The unit property can be output if the system wants to. So what happens now is as the user uses the application, anytime they ask about the weather at a location, the function here kicks in and the output will be these parameters. But if the user asks about anything else, they will get a language output. And these are separate in the output, meaning it's easy for you as a programmer to capture when a function is used and when a regular output is used.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), gpt (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Create a custom function call for the OpenAI API](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=0)** - [Instructor] Here's an example of how we can reconfigure our call to the [[OpenAI API]] and to use functions. This is the same example as what I had before except I've stripped out some pieces and put in something else in place. First off, we're calling the 0613 version 3.5 because that's the one that has function calling built in. Next, I've removed the system message 'cause we no longer need it, but I've retained the regular prompt. So should I wear sunscreen today in Burnaby, which is still a question about the weather, but it's more vague as to whether or not it's the weather. I'm not explicitly saying what is the weather like in Burnaby. Scrolling down, I've now set up a functions array with one entry. There's an object here with a name, location data. So that would be the function name. And the description is get the current weather at a given location. So this is now the system message for this particular function. And when that system message is triggered, the function is used to create the output. The output should have the following parameters. It should be an object that has three properties. The first one being country code. It is a country code, use ISO 3166, which means it'll always be two letters. The second property is state, is a two-letter state code, and the third property is city. And the description here is just the city name. Then at the bottom we have a required array that says every time, I want the country code, the state, and the city. No exceptions. Okay, let's run this and see what happens. So I'll click Send. Pull this up.
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=94)** And if the system recognized that my prompt was a question about the weather at a certain location, this is what happens. First, in content, where we normally get that long human language response, we instead get null, meaning the function kicked in, and we no longer get a human language response, which is very useful for us when we're programming things. Secondly, under function call, it now identifies which function was called, in this case, location data. So in your application, you could look for this and then say, oh, location data? Okay, I'm going to use location data as my function now. And secondly, we get the arguments in the form of an object 'cause that's what I specified above that has these properties, country code, CA, state, BC, city, Burnaby. And the cool thing is this will now be consistent all the time. Anytime someone asks about the weather at a location, the response you get will always be formatted this way as an object with country code, state, and city. And that means as a programmer, you can now just capture that object, parse it out, and use the information within it. And you don't have to worry about the system suddenly providing some other kind of data or missing one of the features or something like that. And it gets even neater because if I now go in, and I ask question that is not related to weather, let's say, give me a good recipe for cupcake, and send that off, what will happen is the system will register, oh, this is not a question about the weather.
>
> **[3:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=190)** So therefore, instead of having a function response, you get choices with content. And here, sure, here's a classic recipe for [[Vanilla]] cupcakes and it has a huge thing and no mention of functions at all. Which means on your end, in the application, you can simply set the application up to say only look for function responses. And then output the function responses. So if one of these large text responses comes out, it comes in a different field, and you can simply ignore it. And that way the user can't jailbreak your application because they will never have access to this information at all. They will only ever get access to the objects that are output if the user puts in a question about the weather at a specific location.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (1), [[Vanilla]] (1)
> **Env Vars:** api (1), iso (1)
> **Definitions:** is a  (2)
> **Versions:** version 3 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 5. Integrating AI into the Weather App

[↑ Back to Table of Contents](#table-of-contents)

#### [Sequence API calls in an app](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=0)** - [Instructor] Now it's finally time to incorporate the AI API into our app. We'll do this across several movies because there are a lot of moving parts and we need them to work together. To start, we'll extend the existing API calling pattern in the app with our new call to the [[OpenAI API]]. This call will be to transform the user question or prompt into a location string. So this will be the very first API called app makes and everything else depends on that API call being successful. All the API calls are handled by this file here called Use API requests which is found under source and components. I already walked through this file once earlier in the course, but I think it's a good time to do a refresh of exactly what is happening here. Use API request, receives the prompt. Then it uses use effect to trigger any time a prompt is passed in and sets up an async sequence. Meaning we can say do this, then do that then do the other thing. That async sequence is down here. So we try to see if we can get the location data, by saying await location two coordinates and pass in the prompt. So this is the component that makes the API call by passing in the prompt, making the API call and then returns data if there is any data or returns an error if there is no data. And that information gets contained inside location data res. Then we set the location data, which is state up here to location data res so that we have it stored.
>
> **[1:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=98)** Once this is done, we can then grab the location data result. And go await weather data and pass in the location data result. Location data result contains the longitude and latitude information that we need to get the weather data. Once this API call finishes, it passes back either the weather data or an error, and that is then placed inside weather data result. And we set the weather data state, which is also defined up here. If at any point anything goes wrong during this try sequence, so either location two coordinates or weather data do not return what they're supposed to, they will throw an error and that error is caught down here. And then we set the error state. Finally whether the calls are successful or not, we return error, location data and weather. And these are these states that are defined up here. So as we extend this API call sequence, what we do is create a new state for the new call. Then we go into the try sequence and add in the new components for the new API calls in whatever sequence we want. So in this case, we want to add a new call to the OpenAI API to transform a long question into the location. So we'll place that at the top here before the location to coordinates call. And we'll do that in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (2)
> **Env Vars:** api (14)
> **Cross-References:** earlier in (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### [Create a fetch request to the OpenAI API](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=0)** - [Instructor] Calling the [[OpenAI API]] starts here in useApiRequests, and here, I'll add to the existing pattern. So we already have these state monitors that we've set up. I'm going to add a new one: const for promptData comma setPromptData equals useState. And I know that eventually this will become an object. I'm just going to set it as an object right now. This is where we'll capture any data that comes from a request to the OpenAI API. Next, I need to call the OpenAI API using an existing component. And in between the previous movie and this one, I've taken a page out of the TV Chef Cookbook and prepared the basic pieces for that in a new file called PromptToLocation. It just contains a component called PromptToLocation that we'll go through in a second, but that's what I want to use. So here, in the try section of our async calls, I'll say const promptDataRes, that's the prompt data result, and then I'll match the pattern below, await PromptToLocation. And when I do this, VS Code is smart enough to figure out, "Oh, you want to use it?" So it added PromptToLocation up here as a dependency. And I'll pass in prompt to PromptToLocation. And then I'll set the promptData to the value that's defined here,
>
> **[1:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=93)** so setPromptData to promptDataRes. Okay, save that. And what we're doing now is grabbing the prompt and sending it over to PromptToLocation. PromptToLocation is a standard [[React.js|React]] component that returns a promise. The way that happens is we set up PromptToLocation here that receives prompt, then we return a [[Fetch]] request. That way, if the fetch request has a proper result, then we return the result, otherwise we can catch an error and say the promise was rejected for whatever reason and then pass in that rejection. A fetch request receives two values, a url to fetch and parameters, so that's all the other information, and we'll fill that out in a second. What I'm doing here right now is grabbing the response from the fetch request and then just confirming it to [[JSON]] and then saying get whatever data is returned and console.log it out so we can see what we're getting from the API without doing anything to it. You'll also notice here that I'm still using the prompt in LocationToCoordinates. That will likely mean as we put in information in the form that things will start breaking, but that's fine for now 'cause we're just testing to make sure we're able to reach the OpenAI API and get information out of it. Finally, down here, we're catching an error, and this is really important because if something goes wrong, we need to know what went wrong and pass that error back into the system. We're catching any errors
>
> **[3:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=185)** and then console.logging out the error and also returning a Promise.reject to the system saying, "Hey, I tried to do it, it didn't work. Here's the reason why." And this Promise.reject will then be received over here in useApiRequests and pass up into the error variable in the state so that we can export that out and see what went wrong. All right, this currently will not work because we have yet to enter the url and the parameters, so that's what we'll do now. I'll go into PromptToLocation and set up a new const called url. And the url we're looking for is this one here: api.[openai.com/v1/chat/completions](https://openai.com/v1/chat/completions). This is the completions endpoint we're going to be calling. So I'll paste that in here, and that's it for the url. Next, we need to set up the parameters, and this is where we pass in our authorization header and our requests to the API and every piece of configuration that we want to pass on. I'll say const params equals, and here we pass in an object. That object contains headers, and in this case that is an authorization header. The OpenAI API takes a Bearer token, so I'll say Bearer. And here we already have that Bearer token saved in env.local. It sits here under the name VITE_OPENAI. And the way we call in that environmental variable in VITE is by doing the following. We'll say import.meta.env.
>
> **[4:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=281)** and then the name, so VITE_OPENAI. We also need to define what content type this authorization has, so I'll say Content-Type: application/json.
>
> **[5:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=302)** And then we need to pass in the body, and that is this request here, so the model, the messages, any other information that we're passing directly to the OpenAI API. I'll say body and JSON.stringify, and here I'll put in the actual text, but I'm not going to do it inside these params. Instead, I'll break it out into a separate data object so that it's easier to see what's going on. And finally, we need to define our request method, and that is post, so I'll say method: post. So we are sending a post request with this authorization header as a Bearer token with this data to this url. Right, final step is to create the data. So I'll go up here, const data equals, again, an object. And here we'll make it simple. We'll just say model, and that would be gpt-3.5-turbo-0613.
>
> **[6:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=364)** And then messages, that's what we're sending in the prompt. This is an array, and then inside there's an object. Let me say role: user and the content. So the message is prompt as the prompt we're passing in. All right, let's test this and see if it works. I'll open my terminal, [[npm]] run dev. Then open the side in my browser and pass in a question like what is the weather like in Burnaby? Click Submit, and now we'll get an error down here because this isn't a location string which is what the OpenWeatherMap API is looking for. But if we open the console, you'll see here we have an object. And inside that object, we have choices. And inside choices, we have the first choice, and here we have the message: I'm sorry, I can't provide [[Real-Time]] weather information. So this means that we are now talking directly to the OpenAI API and everything is working as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (7), [[Fetch]] (5), [[JSON]] (3), [[React.js|React]] (1), [[npm]] (1)
> **Env Vars:** api (10), json (2), vite_openai (2), vite (1)
> **Code Identifiers:** useapirequests (2), promptdata (2), setpromptdata (2), promptdatares (2), usestate (1)
> **Definitions:** is an  (2), is a  (1), means that (1)
> **Prerequisites:** set up (4)
> **CLI Commands:** make (2), npm (1)
> **Tools:** vs code (1), terminal (1)
> **UI Navigation:** open the (2)

#### [Add a function call to the request](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=0)** - [Instructor] Now that we know our call to the [[OpenAI API]] works, we can refine our requests so we get exactly the information we want, structured exactly the way we want. And for that we'll use function calling. You'll remember from the previous chapter, we can call in whatever functions we want and they automatically kick in. So I'm going to use this same setup here but since this is formatted in [[JSON]], I can't simply copy and paste it in. So instead I'll just write it out from scratch so you can follow along. The function calls happen after the messages property. So in data here I'll set up functions. This will be an array of functions. And before I fill functions out, I'll also add this parameter, function_call and set it to auto. This is just to tell the OpenAI API that, hey, if functions are called, you can choose to use them or not. You can change this to a different property if you want to. Alright, let's build out the actual functions here. Each of the functions inside the functions array is an object. So I'll set up a new object, give it the name, I'll call this one displayData. The name in my case doesn't really matter because I only have one function and I'm not going to use the function name. But if you had multiple functions and you want to catch which function is being used, you can do that by giving it a specific name. Then we set up the description. You'll remember this is the assistant prompt that helps the OpenAI API figure out whether the function should be called or not. So I'll just say,
>
> **[1:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=92)** "Get the current weather in a given location." Then we need some parameters. So this is what the system will output for me. And in these parameters I'll say I want the output to be an object and I want the properties and I want the properties of that object to be a list of specified properties. Now, in the previous example, I set them up to be country code, state and city. And technically speaking these are all the properties I need. But since we're already leaning on the OpenAI API to convert this into meaningful human language, I might as well add additional properties in here in case I need them. For example, you may have remembered that when you run the app currently, it doesn't spell out the country name, it just spells out the two letter country code. So I want the full country name instead. Now before I add in the properties, I'm also going to add in the required array. That's just because I tend to forget it and then things happen that shouldn't happen. Okay, now we have the properties and here I've already built out my properties. So you don't have to watch me type out a bunch of stuff 'cause it's all the same. So I'll copy it from my notes and paste it in here and then we can take a look. So the properties I want are country which is the full spelled out country name. Then the country code, which is that two letter country code. The US state, so the full state name,
>
> **[3:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=184)** then the state, two letter country code, the city, the full name, and finally the unit. And this allows the OpenAI API to figure out for this country, this is the unit normally used, either metric or imperial. And in my testing this is about like 90 to 95% accurate which is great for the app. And if it's not accurate, the app also has that button. So you can change the unit if you want to. Now that we have all of these different properties defined, I want to ensure that the system outputs all the properties every time. So in the required array, I'll just list out all of those properties. If you don't list them out, there's a good chance that OpenAI will ignore them. In fact, in my testing, if you don't list the properties in the required field, it simply won't output them. It'll just output the very first one or the most obvious one and leave everyone else. So if you have a list of properties you want, make sure you also put them in the required array. Alright, let's save that. Jump back to the browser where the app is already running and I'll put in the same request as we had before. "What's the weather like in Burnaby?" Run the request and now we should get a different kind of data response. So let's take a look here. Here we have under choices, It now says finish_reason function_call meaning we got a function_call. Then if we open that under message, we now have the function_call message. And here we have the arguments. Country, nothing, country code, nothing, US state, nothing, state, nothing.
>
> **[4:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=279)** The only thing it has is city Burnaby, which is not great but I mean, it does work. So that means there's something else weird going on here. Let's see, what if I say like in Burnaby British Columbia,
>
> **[4:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=299)** let's see what's returned here. I have to go down and look at my next entry. Choices, function_call, message. Okay, so now we get country, Canada, Country code, CA, BC, Burnaby, and metric. So it's not perfect by any means but this brings us a lot closer to what we need. Now we need to do some more testing to make sure it actually outputs consistent data. But what you'll notice is even when it doesn't output the values, it still outputs the properties. Meaning we have to do some sort of error testing on our end to make sure that we actually have values in those properties and not just properties. But overall, this is now working. We have structured data coming out of the OpenAI API and we can now work with that structured data.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (6), [[JSON]] (1)
> **Code Identifiers:** function_call (5), displaydata (1), finish_reason (1)
> **Env Vars:** api (6), json (1)
> **Prerequisites:** set up (3), setup (1)
> **CLI Commands:** make (3)
> **Cross-References:** previous chapter (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)

#### [Parse the response](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=0)** - [Instructor] Thanks to the function call the [[OpenAI API]] is now returning the data we want to us, but it's returning it as a string. Now that makes sense from the OpenAI point of view, they don't want to return random objects that may be malformed, but it means that we have to receive that string and then convert it into a [[JavaScript]] object. And while we're doing that, we might as well do things with it so that we can conform the data to fit with our needs. Back in PromptToLocation, I'll go down past my function call and all the way down into the [[Fetch]] sequence. So right now we're just console logging out the data. What we can do instead is grab that data and then tunnel into it to get only the data we want. Looking over here, that means we have to go into the data then go into the choices Array, pick the first item, then go into message, then go into function call, and then go into arguments. Okay, so instead of saying console log data here, I'm going to say, const and then promptRes. So the prompt result equals [[JSON]] parse. So I'll turn my string into JSON, and what I want to parse is data.choices. And I want the first item, so that would be index zero, .message.function call.arguments.
>
> **[1:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=87)** And then just to make sure I'm getting what I'm looking for here, and it's actually converted, I'll console log out to promptRes instead. Okay, let's run that in the browser to make sure everything is still working. So I'll pick my query as before and submit it. And now we should see a different kind of response here. So here we get an actual object, and you can see it broken down. US state is nothing 'cause this isn't the US. City, Burnaby, country, Canada, country code, CA, state, nothing and unit, metric. Cool. That's what I want. Now I can take this data and use it to create that location string. So after console log here, I'll say const location string. And I'll set that equal to an arrow function so that we actually trigger it. And then I'll say if promptRes.countryCode
>
> **[2:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=145)** is triple equals US then return. And here I'll use template literal to say promptRes.city comma promptRes.state.
>
> **[2:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=168)** So remember that's the two letter state name. And then finally promptRes country. So that's a two letter country code. I'll copy that out and say else. And then return this except I'll take out the state component here. And then down here I'll say console log, locationString.
>
> **[3:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=201)** Okay, save that. Back in the browser and reload. Put in the same query again. And now we get Burnaby, Canada. Okay, cool. So what if I say, what's the weather like in Lisbon?
>
> **[3:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=222)** Okay, Lisbon, Portugal. Okay, what about Philadelphia? Here we go. Philadelphia, PA, United States. Okay, that works. And that means I now have the location string I need to send off the query to the open weather map API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (2), [[OpenAI API]] (1), [[JavaScript]] (1), [[Fetch]] (1)
> **Code Identifiers:** promptres (6), countrycode (1), locationstring (1)
> **Env Vars:** api (2), json (2)
> **CLI Commands:** make (2)
> **Exercise Files:** template (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Pass the response to the weather data request](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=0)** - [Instructor] All right, at this point, the [[OpenAI API]] is able to turn the user question into location data and then we can turn that location data into the correctly formatted location string. The next step is to pass that location string onto use API request here so that when we request the coordinates for a location, we're passing in that string. To do that, I'll set up a new constant with an object inside it and in that object, I'll have the location string and I'll also have any other information I think might be pertinent 'cause you'll remember we got a bunch of information from the OpenAI API, not just the location data. So, I'll set up a new constant here, call it promptData, and I'll set it equal to an object, and then inside that object I'll set up locationString, and I'll set that to the locationString function we just created. Then I'll say units, and I'll set that to promptRes units that would be metric or imperial, I'll say country. And this will be the country name. So promptRes.country that gives me the country name. And finally, USstate promptRes USstate. Then instead of console logging out this information, I'll return prompt data. So I'll say return promptData. That means promptDataRes here in useApirequests
>
> **[1:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=96)** now contains that object and we can pass that object up to the prompt data state, here, using setPromptData. This is also why I set useState to be an object here because I knew we were eventually going to pass an object back in. Alright, that means we now have the correct data here in useApirequests and we can use it down here to call location two coordinates. So instead of calling prompt, I'm going to call promptDataRes. That's the returned data up here. And inside promptDataRes, I'm going to call location string. Save that, go back to the browser and reload. Put in the same request as before. And here I'll scroll down so you can see. Click submit. And now we get Burnaby, CA. That means the OpenAI API is now converting the question into a location string and we're using that location string to pinging the OpenWeatherMap API that then returns the location. The location is used by the OpenWeatherMap API to get the weather, and we get a weather display. So now the API calling sequence is working as intended, and we have a whole new [[User Experience (UX)|user experience]] where you no longer have to specify a location using a specific location string. Instead, you can just type in a question and get the weather in return.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (3), [[User Experience (UX)|User experience]] (1)
> **Code Identifiers:** promptres (3), promptdatares (3), promptdata (2), locationstring (2), useapirequests (2)
> **Env Vars:** api (7)
> **Prerequisites:** set up (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### [Update the weather data display](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=0)** - [Instructor] With the AI integration working, we can now shift our focus to a better [[User Experience (UX)|user experience]]. You'll notice that when I ask for Toronto I get downtown Toronto comma CA. Now I know that CA in this case means Canada, but if you thought you were searching for a city in the United States that's also called Toronto, you may think this means Toronto, California. So ideally, I want to display the name of the country, not just the country code. Also, if I do a search for a US city, like San Francisco,
>
> **[0:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=39)** I get the information, but it's in Celsius, metric system. I want this display to automatically shift over to imperial when we're looking at a country that uses the imperial system. The good news is we have the data to do this. We got all that data from the Open AI API. You'll remember in the prompt data object we have the location string. We also have the units and the country and we can use this information to display on the front end. To do that, we first need to find out where that information is being displayed and it's here in a weather card. I'm not going to go through the weather card component. You can do that on your own. It sits right here in the file structure. It's a standard [[React.js|react]] component that just consumes a bunch of data and then outputs it. There's also some fancy math going on because there's temperature conversions and wind direction and stuff like that. You can go take a look on your own time. But for our purposes what's important is the data we're passing in. So here we have a bunch of things, including units and the country. So what I want to do is grab the units from here and pass them over here, and the same with country. To do that, I first need to get the data. Now, in use API requests you'll remember we send off a request to prompt to location and the data gets returned into prompt data res. Then we use set prompt data to pass this data up into the state variable up here. So we can now pass this state variable, prompt data, over to App JSX, and that will contain all the information. That's done down here at the bottom of the component.
>
> **[2:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=134)** We're returning error, location data and weather data. So I'll just paste in prompt data as well and then go over to App JSX to where we are calling this hook, error, location data, weather data. So I'll paste in prompt data as well. So now we have the data available to us in this component. That means I can use it. So I can now go down here to where we had location data and say prompt data country instead. Save this, jump over to the browser and reload the page a couple of times just for good measure. And then type in Toronto. Now we get downtown Toronto, Canada. Far clearer. Okay, let's see what we can do with the units. This one is a little bit different because the units may change depending on the user's preference. So the user may click on the change unit button to change the units. So therefore the units have their own state and that state is held up here, units and set units. And you'll notice down in the call to weather card that I'm passing both units and set units, because like I said, the user may change this. So we need to somehow pick up on the unit any time the prompt is being used to see what is the new unit now that we got a prompt. So here's what we'll do. Go up into this series of use effects here and we can place it anywhere. So I'll just place it after this one.
>
> **[3:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=227)** And I'll say use effect. So detect when something happens. And the effect I'm listening for is prompt data. That means anytime prompt data updates then I want to check if prompt data and prompt data units.
>
> **[4:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=255)** So we actually have units. Then set units to prompt data units.
>
> **[4:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=265)** What we're saying now is every time prompt data is updated up here in the hook, we go and check do we have new units? If so, change the units state and then both the unit from the unit state and the state itself is passed over to the component. So now if I go back into the app and type in a US location, like New Orleans, the unit changes to imperial.
>
> **[4:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=293)** Then if I change this to something else, like Oslo, the unit changes to metric. So now we're seeing what country it is and we get the appropriate units for whatever country we're looking at.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[React.js|React]] (1)
> **Env Vars:** api (2), jsx (2)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 6. Creating Rich AI Outputs

[↑ Back to Table of Contents](#table-of-contents)

#### [Prompt engineering for developers](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=0)** - [Instructor] I find that the best use of AI is when we start thinking about how AI can add to an experience to improve the [[User Experience (UX)|user experience]] in some way. Now, we've already seen that happen so far in the course by changing the input modality for this weather app so that you can actually ask a question and the system figures out the location based on that question. But we can take that one step farther and grab both the question and the weather data that comes from OpenWeatherMap and combine it into a textual description of the weather. So rather than just providing the temperature and the wind direction, we can get the system through the AI to actually say something meaningful about the weather and describe it. So if I ask, should I wear a jacket today in Burnaby, it not only tells me what temperature it is, but it also tells me whether I should actually wear a jacket and it describes the weather. To do this, we need to do a little bit of [[Prompt Engineering]], because we now want to pass on instructions to the AI and then we also want to pass on some information that's gathered from both the prompt and from the OpenWeatherMap API. So here's a setup that I like to use, where I first have a system message that describes exactly what I want the system to do, in this case, in a conversational professional tone answer the question based on the weather data and then I list off exactly how I want it to answer that question. Provide an opinion about what the weather feels like, provide temperature in either the Celsius or Fahrenheit,
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=94)** whichever's appropriate. Never display the temperature in Kelvin because the temperature is provided in Kelvin, as you can see here. Provide a recommendation about how to prepare and what to wear. For example, bring an umbrella, wear a windbreaker, a warm jacket, et cetera. By passing this in as the system message, we're ensuring that these instructions are always given to the AI, no matter what happens. And then as we work through the app, we can then just pass in a question formatted like this, question colon, and this would be the prompt. And then the weather data that's returned to us from OpenWeatherMap. This setup just makes developing a lot easier, because we have this predefined system prompt, then we have the actual prompt where we're passing in variables and then we can control the [[Representational State Transfer (REST)|rest]] of the behavior. The other thing worth pointing out is as you're experimenting with this kind of approach, it's a good idea to use the open AI playground, because here you can experiment with different models. You can change the temperature, so basically the creativity of the AI. You can set the length of the output and so on and really get the system to do exactly what it is you want. One thing worth noting is when I do this kind of setup, sometimes it's better to actually provide a step-by-step process. So step one, step two, step three in a numbered list. Other times it's worth adding an actual example below. So this is my input. This is the kind of output I expect. But for this particular circumstance where we're putting in a bunch of weather data
>
> **[3:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=186)** and we have a simple question about the weather, this setup here suffices. Let me show you. I can click submit here. We wait a little bit and here we get the response. And you can see, the response from GPT 4 is fairly sophisticated. It figures out where the weather is. Then it describes the weather in a reasonable way. It says that it's 25 degrees Celsius. It's relatively warm. The humidity isn't unbearable at 64%. In terms of clothing, I recommend you dress for a warm day. You see how this kind of output is way more informative than simply saying, this is the temperature. So I now want to incorporate this kind of answer in my weather app, and I want to place it somewhere here. So when we submit a question, we not only get the weather data, but we also get this description below. So that's what we'll do in this chapter.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[Prompt Engineering]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Prerequisites:** setup (4)
> **Env Vars:** api (1), gpt (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Advanced calls to the OpenAI API](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=0)** - [Instructor] To get our human language description of the weather data, we need to add in a new call to the [[OpenAI API]] in our sequence of calls, and that happens in useApiRequests.jsx. Here we already have a model for what we need to do, we need to take some data, pass it off to a component, and then in that component, make the API call. And here I'll leverage the most favored tool of all developers, which is to cheat by copying existing code I already have. Because, I already have this component prompt to location that I know successfully talks to the OpenAI API. So now that I'm going to do the same thing again, I'll just copy that component into a new file, and then give it a new name. So I'll find prompter location here, highlight everything inside, then go back to components, and create a new file, called this one WeatherDecript.jsx. And paste all that code in. And just for safety, I'm going to close prompt to location so I'm not accidentally editing that file. Next I need to change the component name. I'll do that by hitting Shift Command or Shift Control L, so that highlights every instance, and change it to weatherDescript. Then weatherDescript will receive both the prompt and the weather data. Now I don't have weather data yet, but I will get it soon. Scrolling down, I no longer need a functions call, so I'll delete every reference to the functions call. All the way down here. The parameters stay as they are.
>
> **[1:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=93)** And then down here, where we return content, I need to change some things. So for now, I'm just going to say then data, so that's whatever data comes back from the OpenAI API. I'm just going to console log out the data, so that we can see what we get, and then I'll get rid of all this other stuff here. Okay, now we have a bare bones call to the OpenAI API. The next step is to build out our messages, because you'll remember, in this setup, I want to use a system message as well as the user message. And I can set that up here. So first I'll break down this array, so that I can set up a new object. And the object will be role system. And content will be the system message, so I'll create a new constant called sys message equals, and then template literal, so that I can copy this verbatim over and paste it in. Then I can set content to sys message. And then for the user message, I now want to combine the prompt and the weather data. And I've already set up in the system message how I want that formatted. So there should be a question, and then weather data. So I'll create another constant up here. NewPrompt, equals.
>
> **[3:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=188)** And I'll say question colon. And then the prompt. And then weather data colon, and weatherData.
>
> **[3:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=204)** But the weather data is [[JSON]] formatted. So I'm going to wrap the weather data in a parenthesis, and then put JSON stringify in front of it. So that way it's stringified into something the OpenAI API can read. Now that I have new prompt as a constant, I can call new prompt down here. And that should be all I need to do for my new component. Then I have to call in the component. So I'll go in here, to useAPIRequests, and I'll follow the same pattern we already have. So up here, we call in the prompt data, the location data, the weather data. So naturally we would then say, const, weatherDescript, ion.
>
> **[4:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=249)** And then setweatherDescription, equals useState.
>
> **[4:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=258)** And this will just be a string, so I'll set it to no, for default. Then I'll go into the try list and set up a new call, so I'll say const, weatherDescriptRes, so that's the result, equals await weatherDescript. And when I do this, when I call this component the system automatically goes, "Oh, I see. "So you need the weatherDescript component, "I'm just going to automatically add it "as an import at the top." So I don't have to do that, and then weatherDescript receives two things, prompt, and weatherDataRes, which is the result of the weather data we requested earlier. WeatherdataRes. Then when I get the information, I'll set weather description to weatherDescriptRes.
>
> **[5:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=318)** Okay, that should be all I need. Now I can test this in my browser, so I'll open the console first, so I can see it, down here. Then I'll put in a question, so what is the weather like in Burnaby, and submit the question. And now you'll see first we get the response from the OpenAI API and the weather API, and then it takes a little while, and then we get another response down here. So this is the weather description response, and if I go into choices, and the first instance and message, here, we get the description. But, if you look closely, you'll notice the model here is GPT 3.5 Turbo. That's not the model I want to use. So I'm going to go in and change that in weatherDescript. I want to use the model GPT 4 instead. So save that. Go back and reload the page. Same question again. And notice now the second call to the API will take a lot longer, so here we're sitting and waiting and waiting, doesn't look like anything's happening. And then, eventually, pop, here comes the response. So GPT 4 is significantly slower than GPT 3.5, but in return, you get a far better formatted answer, so that's why I use GPT 4 here. This means everything is working, now I just have to figure out how to get this information onto the page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (6), [[JSON]] (2)
> **Env Vars:** api (9), gpt (5), json (2)
> **Code Identifiers:** weatherdescript (7), useapirequests (2), weatherdescriptres (2), weatherdata (1), setweatherdescription (1)
> **Prerequisites:** set up (3), setup (1)
> **File Paths:** useapirequests.jsx (1), weatherdecript.jsx (1)
> **CLI Commands:** make (1), find (1)
> **Versions:** 3.5 (2)
> **Cross-References:** go back to (1)

#### [Integrate the AI API response](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=0)** - [Instructor] In between the previous movie and this one I've added a couple of significant changes to keep us moving forward. Specifically, I've added a new component called description, that just displays the description that we created using OpenAI. The description component is used down here in app JSX right after the error message in the main form. So if we have a weather description then we output the description component with the weather description data. Otherwise we just output the description component. Now you may wonder, hey, what happens if you output a component that is supposed to have data but doesn't have data? Well, if we go over and look at the description component you'll see it's really straightforward. All it does is return a div with an h1 that says description and then another div and the actual description. And then down here I've used default props to say if you don't have a weather description then just use this text waiting for location data. So that's how that works. Now we need to somehow populate this weather description variable and that starts over here in weather descript.jsx because right now we are just console logging out the data but that won't do, we need to return the data. So I'll take that out and say return. And then we are grabbing the data. So that's the data that comes back from OpenAI and inside the data, we want choices and we want the first item in the choice array. And inside that we want the message and we want the content of the message. Now this content will always be a string which means we can just return the string as is
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=94)** and then process it on the other end when we receive it. While I'm at it, I'm also going to change this promise reject message here because it needs to be updated to what this component does. So I'll say unable to [[Fetch]] weather description. Alright, now we are returning the weather description. We need to do something with it and in use API requests we're already doing that. So you'll remember in the previous movie we set up a call to weather descript and we got the result back in weather descript res. Then we set the state of weather description to weather descript res, and weather description is sitting up here unused. So now I can take the weather description constant and return it along with all the other data. You'll remember we are already returning the error, prompt data, location data, and weather data. So I can just add it on here to say also weather description. Then finally I'll go into app JSX to where I'm calling in this hook and say, okay error, prompt data, location data, weather data, comma weather description. So now we have the weather description available inside this page. That's actually all I have to do from here. I can save this, go back in my browser and reload a couple of times just to make sure all the caches are cleared. And you can already see the description component is being displayed with the default text, waiting for location data. I can now make a request. So what is the weather like in Burnaby? And click submit. Now remember there are now a sequence of calls being made to different APIs.
>
> **[3:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=186)** So first we get the weather data itself and then we have to wait for GBT4 to generate its data. And it kind of takes some time but eventually it does show up. So the current weather in Burnaby seems comfortable with a bit of a cloud cover. Let's see if we can do that for another location. I'll say Boston, same thing again, we wait for the weather data to come in and then we have to wait more for the [[GPT-4|GPT4]] data to come in. And it takes a bit of time, but eventually it does show up. Alright, so it works, but let's say the [[User Experience (UX)|user experience]] leaves a bit to be desired here. We'll deal with that in the next movie.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Fetch]] (1)
> **Env Vars:** jsx (2), api (1), gbt4 (1), gpt4 (1)
> **CLI Commands:** make (2)
> **File Paths:** descript.jsx (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Provide good UX with independent loaders](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=0)** - [Instructor] As you've been working with our app, I'm sure you've noticed that there's thisLoading panel that appears anytime we're waiting for the API and now that we've added a new component, you've also noticed the loading panel doesn't appear even though it really should. Now we're going to add the loading panel to this new component as well. But before we do that, let me just show you how the loading panel works. So what's actually happening is we're loading in this component here called Loader that just displays a box that says loading. That's the total extent of the loader component. That's done by passing in an isLoading state to the weather card component. And then if that isLoading state is true, then the loader component displays and the way it displays is actually I've stacked it on top of everything else using CSS grid. So if you're curious about the technicalities of how it works, you can just take away the conditional statement here and then the loader will always appear at the top and then you can go and inspect the CSS to see how it stacks on top of everything else. What I want to do now is bring this same functionality into the description component. So first off, I need to add in the loader. So I'll go to description and I'll import the loader component. Then I'll go down into the code here to see again how I implemented it. So I'm just going to take this and duplicate it. So isLoading, if so, then load the loader. So here, description, maybe I'll put it inside the description divider here. Okay. Then I need to bring in the isLoading state. So I'll copy isLoading and paste it here so
>
> **[1:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=97)** that I'm saying my description component receives isLoading and weatherDescription, which means I need to go over into App.jsx and look at where I'm calling in the description. It's here. So then I have to pass in isLoading and then something. And I also have to pass that into the plain description even if I'm not currently calling in anything. Okay, so what am I passing in here though? Well, if we go down and look at the weather card, you can see isLoading is calling in this, weatherDataLoading. And if we scroll up all the way up here, there's a state for weatherDataLoading. So that means I should be able to set up a similar state for weatherDescription loading. So I can say const and then weather, weatherDescriptLoading and then comma, setweatherDescriptLoading equals useState
>
> **[2:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=164)** and the default is false. Okay, so that means I can call in weatherDescriptLoading as the state when I call in isLoading here. So I'll say weatherDescriptLoading and weatherDescriptLoading. But how does weatherDescriptLoading get set? If we look at weatherDataLoading and go up a bit here, you'll see setWeatherDataLoading is set to true in a couple of different places. So here setWeatherDataLoading is at the false and it's all contingent on this here. Anytime we get weatherData updated, we kick in this useEffect that checks, if weatherData's updated, then we do something in this case, setWeatherDataLoading to false. So we can do the same thing with the weatherDescription. So I'll say, let's see, useEffect and then an arrow function
>
> **[3:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=221)** and then say if weatherDescription. So we have a description then setWeatherDescriptLoading to false. So if we have the description, then we can take the loader away. And this is dependent on weatherDescription. So now anytime weatherDescription updates, this effect kicks off and setWeatherDescription loading to false. But that means it's always false 'cause it's default false and we just set it to false again. So we also have to set it to true somewhere. And that's done here in handleSubmit. So if you look closely at the weather form, I say, for the weather form, anytime the weather form is submitted, we trigger handleSubmit and handleSubmit then fires off a new prompt and sends that prompt off to setPrompt, which is the component that calls all the different items. And it also sets weatherDataLoading to true. So that means I should be able to setWeatherDescriptLoading to true as well. So now we have two different components each with their own loading state. And depending on our behavior within the app, those loading states should control whether the loading page is shown or not. Let's test that in the browser, send a request. Now we get loading in both places. Then the loading state changes because we now have data over here and as we're waiting,
>
> **[5:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=314)** the loading state will eventually change over here but it takes a long time as you've seen before. But there it is and then we can test it again just to make sure. So I'll say Stockholm, submit. We get the loading panels again and we wait. And eventually, after a long wait, the text appears. Now of course this is not a perfect [[User Experience (UX)|user experience]]. You still have to wait a really long time for [[GPT-4]] and you could probably build this out to give the user a better experience of waiting. But it works and we now have independent loaders on the page.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[User Experience (UX)|User experience]] (1), [[GPT-4]] (1)
> **Code Identifiers:** isloading (9), weatherdescription (6), weatherdescriptloading (5), weatherdataloading (4), setweatherdescriptloading (3)
> **Env Vars:** css (2), api (1), gpt (1)
> **UI Navigation:** go to (1), scroll up (1)
> **File Paths:** app.jsx (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Go further](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/go-further?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/go-further?u=76281980&t=1)** - All right, you've reached the end of the course and the beginning of your journey building apps with [[React.js|React]] and [[OpenAI API]]. As you continue onto your own project, remember that what you've seen here in this course is just a small glimpse of what is possible once you embrace the possibilities and opportunities AI opens up for us all. To get started with your own AI integrations, ask yourself this question, where in my app would it be useful to get a human language interpretation of either user input or data output? In the app we worked with that was by parsing the input into a location and by parsing the weather data into a description. Figuring out what it is for your own app may be the beginning of something truly amazing. Now, before I let you go, once again, a reminder that the way the API keys are stored in this project is not for production. Do not publish your API keys in a [[GitHub]] repository or on the frontend, like we've done in this project. For public apps that have the API keys integrated, use a key storage application or move the API integration to the server end to prevent curious onlookers from grabbing their own copy of your key and using them in their own apps. Now, all that's left for me to say is go build amazing things with React and the OpenAi API, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[React.js|React]] (2), [[OpenAI API]] (2), [[GitHub]] (1)
> **Env Vars:** api (6)
> **CLI Commands:** go build (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Speakers:** - all (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/build-a-javascript-ai-app-with-react-and-the-openai-api-4467357/codespaces)

## Skills Covered

- OpenAI API
- JavaScript
- React.js
- Artificial Intelligence (AI)

## Path Context

### In [[Building Generative AI Skills for Web Developers]]
← [[AI Programming for JavaScript Developers]] | **10 of 10**

## Appears In

- [[Building Generative AI Skills for Web Developers]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — React.js, JavaScript
- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI API
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI API
- [[OpenAI API- Vision]] — Artificial Intelligence (AI), OpenAI API

---

[↑ Back to top](#)