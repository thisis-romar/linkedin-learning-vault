---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: openai-api-function-calling-2023
url: "https://www.linkedin.com/learning/openai-api-function-calling-2023"
duration_minutes: 17
duration: 17m
level: Intermediate
updated: 8/22/2023
learners: 4986
skills:
  - OpenAI API
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/function-calling-with-the-openai-api-4506256"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQHFJ_NsHrFR1g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692400120285?e=2147483647&amp;v=beta&amp;t=6wZOlAg1GG7-zY1hwSa0DEkvgXsVKgFhl2I-JunoONE"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Develop Your Skills with the OpenAI API]]'
prev_courses:
  - '[[OpenAI API- Working with Files]]'
next_courses:
  - '[[OpenAI API- Embeddings]]'
path_nav: '[{"path":"Develop Your Skills with the OpenAI API","position":3,"total":10,"prev":"OpenAI API- Working with Files","next":"OpenAI API- Embeddings"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-api
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-02
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/OpenAI%20API-%20Function%20Calling%20(2023).md)

![OpenAI API: Function Calling (2023)](https://media.licdn.com/dms/image/v2/D560DAQHFJ_NsHrFR1g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1692400120285?e=2147483647&amp;v=beta&amp;t=6wZOlAg1GG7-zY1hwSa0DEkvgXsVKgFhl2I-JunoONE)

# OpenAI API: Function Calling (2023)

> Prompting is great, but sometimes you need a more programmatic approach. That’s where function calling comes in. In this course, senior staff instructor, web designer, and software developer Morten Rand-Hendriksen explains function calling with the OpenAI API.

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-api-function-calling-2023) | 17m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Function calling with the OpenAI API](#function-calling-with-the-openai-api)
- [**1. Function Calling**](#1-function-calling) (1 videos)
  - [Understanding function calling with the OpenAI API](#understanding-function-calling-with-the-openai-api)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Function calling with the OpenAI API](https://www.linkedin.com/learning/openai-api-function-calling-2023/function-calling-with-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-function-calling-2023/function-calling-with-the-openai-api?u=76281980&t=0)** - Imagine if an AI system could capture the input of a user, figure out what function to fire in your software, and then send the correct arguments to that function all based on what the user says.
>
> **[0:11](https://www.linkedin.com/learning/openai-api-function-calling-2023/function-calling-with-the-openai-api?u=76281980&t=11)** Well, you don't have to imagine it.
>
> **[0:13](https://www.linkedin.com/learning/openai-api-function-calling-2023/function-calling-with-the-openai-api?u=76281980&t=13)** OpenAI's API offers function calling as a core part of its service.
>
> **[0:18](https://www.linkedin.com/learning/openai-api-function-calling-2023/function-calling-with-the-openai-api?u=76281980&t=18)** Function calling with the [[OpenAI API]] opens a whole new range of capabilities for AI integration into existing apps, and in this course, I'll walk you through how it works and how to use it.
>
> **[0:29](https://www.linkedin.com/learning/openai-api-function-calling-2023/function-calling-with-the-openai-api?u=76281980&t=29)** Let's get cracking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (1)
> **Env Vars:** api (2)
> **Analogies:** imagine (2)
> **Speakers:** - imagine (1)


### 1. Function Calling

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding function calling with the OpenAI API](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=0)** - Let's start at the very top by stating the obvious.
>
> **[0:03](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=3)** [[Large Language Models (LLM)|Large language models]] like GPT are really chatty.
>
> **[0:06](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=6)** So when you interact with the [[OpenAI API]] out of the box, you get a conversational exchange, similar to what you get with [[ChatGPT]].
>
> **[0:14](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=14)** You input human language prompts, and the system provides a human language response, which is useful if you're looking for a human language response, but not very useful if you're trying to build software around the response because the AI response is unstructured language and non-deterministic, meaning it'll be different every time.
>
> **[0:32](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=32)** For software to work, we need predictable, structured, deterministic responses.
>
> **[0:36](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=36)** Function calling unlocks this type of advanced integration between AI systems and your software.
>
> **[0:43](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=43)** You the developer, define what types of prompts should result in a function call with a structured data response and what that structured data response should look like.
>
> **[0:52](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=52)** And the AI detects when such a prompt comes in, and provides the function response as specified.
>
> **[0:59](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=59)** This makes way more sense when you see a practical example.
>
> **[1:02](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=62)** So in the exercise files for this course, I've added in three different examples that show how this work.
>
> **[1:08](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=68)** The exercise files are available from [[GitHub]] and the easiest way to use them is to open them in [[Codespaces]].
>
> **[1:14](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=74)** So go to the GitHub page, open code here, and go to Codespaces.
>
> **[1:18](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=78)** You can either create a new Codespace if you already don't have one, or you can open one if you've already created one.
>
> **[1:24](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=84)** Inside the Codespace, you have three examples.
>
> **[1:27](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=87)** There's one standard query that doesn't have function calls.
>
> **[1:29](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=89)** Then there's a basic function call and an advanced multi-function call.
>
> **[1:33](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=93)** But for all of these to work, you need to set up one more thing.
>
> **[1:37](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=97)** So in this Codespace, I've activated the [[Representational State Transfer (REST)|REST]] client extension for VS Code that allows us to use VS Code as a REST client.
>
> **[1:45](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=105)** That way we can send REST requests to the OpenAI API and get responses right inside VS Code.
>
> **[1:52](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=112)** But to do that you need an API key from OpenAI.
>
> **[1:57](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=117)** To get an API key, go to platform.[openai.com](https://openai.com), and sign up if you haven't done so already.
>
> **[2:03](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=123)** Once you have an account, go to personal, select view API keys, and from here you can generate as many API keys as you want.
>
> **[2:12](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=132)** Every time you have a new project, you need to generate a new key, and you do that by clicking create new secret key.
>
> **[2:18](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=138)** Here you give your key a name just so you know what it's for.
>
> **[2:20](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=140)** So I'll call this for function calling demo and click create secret key.
>
> **[2:27](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=147)** Now this is important.
>
> **[2:28](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=148)** You only get to see this key once.
>
> **[2:31](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=151)** This is the only time you get to see this key.
>
> **[2:33](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=153)** So it's important to copy this key immediately.
>
> **[2:37](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=157)** Go back to your files, open the VS Code folder.
>
> **[2:40](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=160)** Inside you'll find settings.[[JSON]], and here you scroll down to the bottom.
>
> **[2:45](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=165)** This is where we have the REST client environment set up.
>
> **[2:48](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=168)** So here we have OpenAI environment and the key.
>
> **[2:50](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=170)** So highlight your OpenAI key here, and paste in your key, and save that file.
>
> **[2:56](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=176)** And that's all you need to do for setup.
>
> **[3:00](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=180)** Now you can open the first example standard query, and you'll notice that the key variable has a squiggly line under it.
>
> **[3:08](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=188)** That's because you haven't yet assigned the right environment.
>
> **[3:12](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=192)** To do that, you have need to go down to the toolbar, the bottom, in the right hand corner where it says no environment, and click on that.
>
> **[3:20](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=200)** It opens a panel up here at the top that says no environment.
>
> **[3:22](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=202)** So switch that to OpenAI, and now we're using the key that you just saved in the settings file.
>
> **[3:28](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=208)** All right, this is all you need to do to get things started.
>
> **[3:31](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=211)** Now we can take a look at this file here.
>
> **[3:34](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=214)** This is a standard REST request to an API.
>
> **[3:36](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=216)** So we are sending a pulse request to api.[openai.com](https://openai.com) v1 chat completions.
>
> **[3:43](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=223)** This completions endpoint is the standard endpoint you'll use for almost all your interaction with the OpenAI API.
>
> **[3:50](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=230)** The content we're passing on is a JSON object so that we can send information to the API.
>
> **[3:56](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=236)** And finally, we have to pass in authorization in the form of a bearer key.
>
> **[4:00](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=240)** So here we say bearer and then the key that we entered in the settings file.
>
> **[4:05](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=245)** The actual request we're sending off is a JSON objects that has a ton of information about our request.
>
> **[4:10](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=250)** So this is the prototype request you send off anytime you want a human language response from the OpenAI API.
>
> **[4:18](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=258)** You start by specifying the model you want to use, in this case, GPT 3.5 Turbo.
>
> **[4:23](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=263)** If you want to change the model, you just change the name.
>
> **[4:24](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=264)** So if you want [[GPT-4]], you just say GPT-4, but I'm going to use 3.5 Turbo.
>
> **[4:30](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=270)** Then you can set up a series of messages.
>
> **[4:32](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=272)** Now here I have two messages.
>
> **[4:34](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=274)** I have the system message and the user message.
>
> **[4:37](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=277)** The system message is sort of a meta message that is like the primary message for all future requests and the user message is the individual prompt you're sending off.
>
> **[4:46](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=286)** So the system message in this case is just act like a helpful assistant, and my prompt is write me a haiku about ducks.
>
> **[4:53](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=293)** Then at the bottom we have some extra settings.
>
> **[4:55](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=295)** These are all the default settings, so you don't need to change them, or you can just remove this if you don't want to clutter your code.
>
> **[5:02](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=302)** But here we can set the temperature, the max [[Tokens]], that's how much information you want back, the top P frequency penalty and the presence penalty if you want to.
>
> **[5:13](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=313)** Now like I said, if you don't want to mess with these, you can just delete them and you get the default values.
>
> **[5:18](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=318)** Now let's see what this request produces.
>
> **[5:21](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=321)** So send off the request, I'll go to the very top and click send request.
>
> **[5:25](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=325)** A new panel will open on the right hand side, and here we get the full response.
>
> **[5:29](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=329)** So here we have all the response headers saying 200 okay, meaning it worked.
>
> **[5:34](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=334)** I'll just collapse this so we can see what's going on.
>
> **[5:36](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=336)** And as I scroll down, here we have an ID, then we have the object.
>
> **[5:39](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=339)** This is a completion from chat when it was created, which model was used, And you'll notice this is the 3.5 Turbo-0613.
>
> **[5:47](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=347)** This is the model that allows for function calling.
>
> **[5:50](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=350)** And down here we have the actual response.
>
> **[5:53](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=353)** So the response sits inside a choices array, and the first item is the one that we are looking for.
>
> **[5:59](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=359)** So here we have the assistant role and the content is in ponds they reside, graceful feathers glide on by brings joy inside.
>
> **[6:08](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=368)** Oh that's a decent haiku about ducks, right?
>
> **[6:11](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=371)** So that's the response we get.
>
> **[6:13](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=373)** And at the bottom we get how many prompts were in our prompt?
>
> **[6:17](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=377)** No, how many tokens were in our prompt, how many tokens were in the completion and the total tokens used.
>
> **[6:23](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=383)** So this is a standard request, nothing special here.
>
> **[6:26](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=386)** This is how ChatGPT works for example, and there's nothing new.
>
> **[6:30](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=390)** What we're looking for though is a function call.
>
> **[6:33](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=393)** If we go over to the files, you'll find an example of a function call here in the file called 02 basic function call and looking at this file, you'll see there's some differences.
>
> **[6:43](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=403)** First of all, I've taken away the system message just because it took up a lot of vertical space and for our example, we don't need the system message.
>
> **[6:50](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=410)** So here I just have the user message.
>
> **[6:52](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=412)** This would be the prompt, and the prompt I'm sending off this time is what's the weather like in Burnaby?
>
> **[6:57](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=417)** Now if you've worked with ChatGPT before, you know that ChatGPT can't answer this question because it doesn't have current weather data.
>
> **[7:05](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=425)** So if I sent this off in the normal request, I would get an answer that says, I'm a large language model.
>
> **[7:10](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=430)** I don't know anything about the weather.
>
> **[7:11](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=431)** You have to connect me to another service.
>
> **[7:14](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=434)** But if we scroll down, you'll see there's a new section here called functions.
>
> **[7:18](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=438)** Here we can set up an array of function calls.
>
> **[7:21](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=441)** Now it's important to understand we're not actually defining functions here.
>
> **[7:24](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=444)** We're not writing software.
>
> **[7:26](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=446)** Instead we are defining what types of prompts should result in calling a function in other software.
>
> **[7:35](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=455)** So in this example, I've set up a new function that I'm calling weather query.
>
> **[7:40](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=460)** And you can imagine in my software I would have an a corresponding function called weather query.
>
> **[7:45](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=465)** And this weather query should be triggered anytime the prompts that's sent in is a question about the current weather in a given location.
>
> **[7:56](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=476)** So in this case we're asking what's the weather like in Burnaby?
>
> **[7:58](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=478)** So that means this description matches, and GPT will say, okay, in that case, instead of giving a human language response, I'm going to fire off this weather query function.
>
> **[8:10](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=490)** Then inside my function I can then define what types of data do I want to pass along to the function.
>
> **[8:16](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=496)** And I do that under parameters.
>
> **[8:17](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=497)** So here I say I want the data return to be an object, and I want it to have the following properties.
>
> **[8:24](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=504)** First I want a location property that is the type of a string and has the following description.
>
> **[8:30](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=510)** If it's the US, then say New York, NY, US, else.
>
> **[8:34](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=514)** So any other country, London, UK, and use ISO 3166 which is the two letter country code.
>
> **[8:41](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=521)** Then I have another property called units.
>
> **[8:44](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=524)** It's also a string, and this one is a description.
>
> **[8:47](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=527)** So location unit, either metric or imperial.
>
> **[8:50](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=530)** So here I want the GPT system to figure out what country is it and what is the normal unit of measurement in that country, metric or imperial.
>
> **[8:59](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=539)** And then I want both of these two properties to always be returned anytime this function call is made, and at the bottom I say function call auto, meaning I leave GPT to figure out should we call a function, or should we provide a human language response?
>
> **[9:15](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=555)** Let's see what happens when I fire off this request.
>
> **[9:17](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=557)** So I'll go to the top and click send requests.
>
> **[9:22](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=562)** Scrolling down, you'll see this response will be different.
>
> **[9:25](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=565)** So instead of having a human language content response you'll notice it says content null.
>
> **[9:30](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=570)** And then I have a function call down here, and the function call says I am calling the weather query function and here are the arguments, location, Burnaby, unit, metric.
>
> **[9:43](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=583)** So now you can see in my software I could then listen for this function call property and say, oh, the function call property was triggered.
>
> **[9:51](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=591)** What function is being called here?
>
> **[9:53](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=593)** The weather query function.
>
> **[9:54](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=594)** So then the corresponding weather query function in my software can say okay, I need arguments.
>
> **[10:00](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=600)** Here we have a location argument, Burnaby, and a unit argument, metric.
>
> **[10:03](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=603)** And then I can act on those in my software.
>
> **[10:07](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=607)** This is fundamentally different from what we had before because now I the developer I'm controlling the output of the OpenAI API and making sure that it's coming out in the format I want.
>
> **[10:19](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=619)** But remember how I said it's non-deterministic?
>
> **[10:23](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=623)** Notice how it says location Burnaby but it doesn't have a comma here.
>
> **[10:27](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=627)** It doesn't say comma CA.
>
> **[10:29](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=629)** Well if I run this request again, there's a good chance it'll be different.
>
> **[10:32](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=632)** See?
>
> **[10:33](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=633)** This time it says Burnaby comma CA.
>
> **[10:35](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=635)** So if I were to do this in real software, I would probably break this down more.
>
> **[10:41](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=641)** So I would say for properties, instead of having a location property with this location string, I would probably say city and then state key and then location or country key or something like that to really force the system to give me exactly the information I want and I can, because in my function call I get to define whatever data structure I want, an object, an array, whatever properties I want, I can describe each of the individual properties, control what type of output it is, and even control whether or not any of these properties are required or optional.
>
> **[11:17](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=677)** Okay, so what happens if I now have this function call but I ask a question that isn't about the weather?
>
> **[11:23](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=683)** Say for example, let's see.
>
> **[11:25](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=685)** So I'll change this prompt to how many ducks fit in a pond?
>
> **[11:31](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=691)** Definitely not a question about the weather.
>
> **[11:33](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=693)** So the weather query, the weather query function should not be activated.
>
> **[11:37](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=697)** Send off that request.
>
> **[11:40](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=700)** And in the response we don't have a function call.
>
> **[11:43](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=703)** Instead we have some content that says the number of ducks that can fit in a pond depends on the size of the pond.
>
> **[11:48](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=708)** Yeah, obviously.
>
> **[11:50](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=710)** So here you see, even with function calling, I can still allow the system to output human language responses when I need them and function calls when I need those.
>
> **[12:00](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=720)** All right, let's take this one step further.
>
> **[12:03](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=723)** In the third example here called 03 multi function call, I've set up multiple function calls.
>
> **[12:09](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=729)** So as we scroll down this file, you'll see first we have our location query.
>
> **[12:13](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=733)** This is the same one as before.
>
> **[12:14](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=734)** But below that in the functions array, there's a new query called author query.
>
> **[12:19](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=739)** And this one says, if the prompt is asking for information about an author, then I want to return the author query with the following properties, first name, which is the first name of the author and last name, which is the last name of the author.
>
> **[12:33](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=753)** And I require both first and last name.
>
> **[12:36](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=756)** And again, I've set function call to auto.
>
> **[12:38](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=758)** So let's see what happens when I fire off the question what's the weather like in Burnaby?
>
> **[12:44](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=764)** Scroll down and not surprising.
>
> **[12:45](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=765)** The function call here is location query Burnaby, CA and Unit Metric.
>
> **[12:49](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=769)** Okay, so far it works.
>
> **[12:51](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=771)** What if I then change the question?
>
> **[12:53](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=773)** So the prompt to who wrote "10,000 Leagues Under the Sea?"
>
> **[13:02](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=782)** Send off that request.
>
> **[13:06](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=786)** Because this is a question about an author, the system picks up on that, and now we get an author query with the first name Jules and the last name Verne.
>
> **[13:15](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=795)** So here you can see the system is smart enough to understand the difference between a question about a location and the question about an author.
>
> **[13:22](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=802)** And what's important to note here is the way it makes that differentiation is in the description of each of the function calls.
>
> **[13:30](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=810)** So this here can be considered the system message for the function.
>
> **[13:35](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=815)** The location query system message is get the current weather in the given location.
>
> **[13:39](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=819)** The author query system message is information about an author.
>
> **[13:44](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=824)** So that's how the GPT system identifies which function is going to be called.
>
> **[13:49](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=829)** And then we can use the system to clearly define specific functions for specific types of queries.
>
> **[13:55](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=835)** So now I think you're starting to spot why this is so important.
>
> **[13:59](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=839)** Using function calls, you can now set up quite advanced systems that can take human language input and then identify what type of question the user is asking and then shunt off queries to your software based on those questions.
>
> **[14:16](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=856)** So if the user is asking for information about say a product, you can send it off to a product query.
>
> **[14:22](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=862)** If they're asking for information about support, you can send 'em off to a support query.
>
> **[14:27](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=867)** If they're asking information about availability of a service, you can send it off as a service query.
>
> **[14:32](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=872)** And you get to define not only when a specific function is called, but also what parameters are passed on with that function call for each individual call.
>
> **[14:42](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=882)** But there's more.
>
> **[14:43](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=883)** Remember at the bottom here, we have this function call auto?
>
> **[14:47](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=887)** This is how we control what GPT does when there's a function called present.
>
> **[14:53](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=893)** Auto means the system decides on its own what it wants to do here.
>
> **[14:56](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=896)** If it wants to provide a regular human language output or if it wants to trigger a function call, and if so, which function call it wants to use.
>
> **[15:04](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=904)** You can change this to none, and then it'll never use function calls.
>
> **[15:09](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=909)** In software, if you are going to pass in requests, you could do that dynamically depending on the type of request you're sending.
>
> **[15:16](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=916)** And if you want to force the system to always use a specific function, you can do that as well by setting up an object down here and say name call on, and then whatever functions.
>
> **[15:28](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=928)** So author query for example.
>
> **[15:32](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=932)** Now every time this request runs, it'll always use the author query.
>
> **[15:37](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=937)** So let's see what happens if I change this question here to something that has nothing to do with an author, like how many ducks in a pond?
>
> **[15:50](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=950)** In this circumstance I'm telling it you have to respond with an author query.
>
> **[15:56](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=956)** And in the author query we are always requiring a first name and a last name.
>
> **[16:01](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=961)** So we're stepping way outside of the functionality of the system, but I can force that to happen.
>
> **[16:07](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=967)** So here we got first name, Arthur, last name Giesert.
>
> **[16:13](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=973)** I'm not sure if that's a real person, or if that's something that the system made up but it's a demonstration of the capabilities.
>
> **[16:20](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=980)** So just to be clear here, you have options.
>
> **[16:23](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=983)** You can rely on the GPT system to pick which function to use, or in your request to the GPT system you can specify which function to use, and then you can tightly control the output.
>
> **[16:36](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=996)** Now I'm sure you see just how powerful function calling is in the OpenAI API, and with these examples you have everything you need to do it yourself.
>
> **[16:45](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=1005)** So (speaking in a foreign language), go build some amazing things with the OpenAI API and function calling, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[OpenAI API]] (7), [[Representational State Transfer (REST)|Rest]] (5), [[ChatGPT]] (4), [[Tokens]] (4), [[JSON]] (3)
> **Env Vars:** api (13), gpt (11), rest (5), json (2), iso (1)
> **UI Navigation:** go to (5), scroll down (5), open the (2), click on (1)
> **Definitions:** is a  (9), is called (1)
> **Prerequisites:** set up (7), setup (1)
> **Tools:** vs code (4), github (2)
> **Analogies:** for example (3), similar to (1), imagine (1)
> **CLI Commands:** find (2), go build (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/function-calling-with-the-openai-api-4506256)

## Skills Covered

- OpenAI API
- Artificial Intelligence (AI)

## Path Context

### In [[Develop Your Skills with the OpenAI API]]
← [[OpenAI API- Working with Files]] | **3 of 10** | [[OpenAI API- Embeddings]] →

## Appears In

- [[Develop Your Skills with the OpenAI API]]

## Related Courses

_Courses sharing skills:_

- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI API
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI API
- [[OpenAI API- Vision]] — Artificial Intelligence (AI), OpenAI API
- [[OpenAI API- Image Generation with DALL-E]] — Artificial Intelligence (AI), OpenAI API

---

[↑ Back to top](#)