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
  - '[Develop Your Skills with the OpenAI API](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20Skills%20with%20the%20OpenAI%20API.md)'
prev_courses:
  - '[OpenAI API- Working with Files](OpenAI%20API-%20Working%20with%20Files.md)'
next_courses:
  - '[OpenAI API- Embeddings](OpenAI%20API-%20Embeddings.md)'
path_nav: '[{"path":"Develop Your Skills with the OpenAI API","position":3,"total":10,"prev":"OpenAI API- Working with Files","next":"OpenAI API- Embeddings"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/openai-api
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-05-03
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
> **[0:00](https://www.linkedin.com/learning/openai-api-function-calling-2023/function-calling-with-the-openai-api?u=76281980&t=0)** - Imagine if an AI system could capture the input of a user, figure out what function to fire in your software, and then send the correct arguments to that function all based on what the user says. Well, you don't have to imagine it. OpenAI's API offers function calling as a core part of its service. Function calling with the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) opens a whole new range of capabilities for AI integration into existing apps, and in this course, I'll walk you through how it works and how to use it. Let's get cracking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (1)
> **Env Vars:** api (2)
> **Analogies:** imagine (2)
> **Speakers:** - imagine (1)


### 1. Function Calling

[↑ Back to Table of Contents](#table-of-contents)

#### [Understanding function calling with the OpenAI API](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=0)** - Let's start at the very top by stating the obvious. [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) like GPT are really chatty. So when you interact with the [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) out of the box, you get a conversational exchange, similar to what you get with [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md). You input human language prompts, and the system provides a human language response, which is useful if you're looking for a human language response, but not very useful if you're trying to build software around the response because the AI response is unstructured language and non-deterministic, meaning it'll be different every time. For software to work, we need predictable, structured, deterministic responses. Function calling unlocks this type of advanced integration between AI systems and your software. You the developer, define what types of prompts should result in a function call with a structured data response and what that structured data response should look like. And the AI detects when such a prompt comes in, and provides the function response as specified. This makes way more sense when you see a practical example. So in the exercise files for this course, I've added in three different examples that show how this work. The exercise files are available from [GitHub](../../Skills/Software%20Development/GitHub.md) and the easiest way to use them is to open them in [Codespaces](../../Skills/Software%20Development/Codespaces.md). So go to the GitHub page, open code here, and go to Codespaces. You can either create a new Codespace if you already don't have one, or you can open one if you've already created one. Inside the Codespace, you have three examples. There's one standard query that doesn't have function calls. Then there's a basic function call and an advanced multi-function call.
>
> **[1:33](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=93)** But for all of these to work, you need to set up one more thing. So in this Codespace, I've activated the [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) client extension for VS Code that allows us to use VS Code as a REST client. That way we can send REST requests to the OpenAI API and get responses right inside VS Code. But to do that you need an API key from OpenAI. To get an API key, go to platform.[openai.com](https://openai.com), and sign up if you haven't done so already. Once you have an account, go to personal, select view API keys, and from here you can generate as many API keys as you want. Every time you have a new project, you need to generate a new key, and you do that by clicking create new secret key. Here you give your key a name just so you know what it's for. So I'll call this for function calling demo and click create secret key. Now this is important. You only get to see this key once. This is the only time you get to see this key. So it's important to copy this key immediately. Go back to your files, open the VS Code folder. Inside you'll find settings.[JSON](../../Skills/Web%20Development/JSON.md), and here you scroll down to the bottom. This is where we have the REST client environment set up. So here we have OpenAI environment and the key. So highlight your OpenAI key here, and paste in your key, and save that file. And that's all you need to do for setup. Now you can open the first example standard query, and you'll notice that the key variable
>
> **[3:06](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=186)** has a squiggly line under it. That's because you haven't yet assigned the right environment. To do that, you have need to go down to the toolbar, the bottom, in the right hand corner where it says no environment, and click on that. It opens a panel up here at the top that says no environment. So switch that to OpenAI, and now we're using the key that you just saved in the settings file. All right, this is all you need to do to get things started. Now we can take a look at this file here. This is a standard REST request to an API. So we are sending a pulse request to api.[openai.com](https://openai.com) v1 chat completions. This completions endpoint is the standard endpoint you'll use for almost all your interaction with the OpenAI API. The content we're passing on is a JSON object so that we can send information to the API. And finally, we have to pass in authorization in the form of a bearer key. So here we say bearer and then the key that we entered in the settings file. The actual request we're sending off is a JSON objects that has a ton of information about our request. So this is the prototype request you send off anytime you want a human language response from the OpenAI API. You start by specifying the model you want to use, in this case, GPT 3.5 Turbo. If you want to change the model, you just change the name. So if you want [GPT-4](../../Skills/Artificial%20Intelligence%20(AI)/GPT-4.md), you just say GPT-4, but I'm going to use 3.5 Turbo. Then you can set up a series of messages. Now here I have two messages. I have the system message and the user message. The system message is sort of a meta message that is
>
> **[4:40](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=280)** like the primary message for all future requests and the user message is the individual prompt you're sending off. So the system message in this case is just act like a helpful assistant, and my prompt is write me a haiku about ducks. Then at the bottom we have some extra settings. These are all the default settings, so you don't need to change them, or you can just remove this if you don't want to clutter your code. But here we can set the temperature, the max [Tokens](../../Skills/Web%20Development/Tokens.md), that's how much information you want back, the top P frequency penalty and the presence penalty if you want to. Now like I said, if you don't want to mess with these, you can just delete them and you get the default values. Now let's see what this request produces. So send off the request, I'll go to the very top and click send request. A new panel will open on the right hand side, and here we get the full response. So here we have all the response headers saying 200 okay, meaning it worked. I'll just collapse this so we can see what's going on. And as I scroll down, here we have an ID, then we have the object. This is a completion from chat when it was created, which model was used, And you'll notice this is the 3.5 Turbo-0613. This is the model that allows for function calling. And down here we have the actual response. So the response sits inside a choices array, and the first item is the one that we are looking for. So here we have the assistant role and the content is in ponds they reside, graceful feathers glide on by brings joy inside. Oh that's a decent haiku about ducks, right? So that's the response we get.
>
> **[6:13](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=373)** And at the bottom we get how many prompts were in our prompt? No, how many tokens were in our prompt, how many tokens were in the completion and the total tokens used. So this is a standard request, nothing special here. This is how ChatGPT works for example, and there's nothing new. What we're looking for though is a function call. If we go over to the files, you'll find an example of a function call here in the file called 02 basic function call and looking at this file, you'll see there's some differences. First of all, I've taken away the system message just because it took up a lot of vertical space and for our example, we don't need the system message. So here I just have the user message. This would be the prompt, and the prompt I'm sending off this time is what's the weather like in Burnaby? Now if you've worked with ChatGPT before, you know that ChatGPT can't answer this question because it doesn't have current weather data. So if I sent this off in the normal request, I would get an answer that says, I'm a large language model. I don't know anything about the weather. You have to connect me to another service. But if we scroll down, you'll see there's a new section here called functions. Here we can set up an array of function calls. Now it's important to understand we're not actually defining functions here. We're not writing software. Instead we are defining what types of prompts should result in calling a function in other software. So in this example, I've set up a new function that I'm calling weather query. And you can imagine in my software I would have an a corresponding function called weather query. And this weather query should be triggered anytime
>
> **[7:49](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=469)** the prompts that's sent in is a question about the current weather in a given location. So in this case we're asking what's the weather like in Burnaby? So that means this description matches, and GPT will say, okay, in that case, instead of giving a human language response, I'm going to fire off this weather query function. Then inside my function I can then define what types of data do I want to pass along to the function. And I do that under parameters. So here I say I want the data return to be an object, and I want it to have the following properties. First I want a location property that is the type of a string and has the following description. If it's the US, then say New York, NY, US, else. So any other country, London, UK, and use ISO 3166 which is the two letter country code. Then I have another property called units. It's also a string, and this one is a description. So location unit, either metric or imperial. So here I want the GPT system to figure out what country is it and what is the normal unit of measurement in that country, metric or imperial. And then I want both of these two properties to always be returned anytime this function call is made, and at the bottom I say function call auto, meaning I leave GPT to figure out should we call a function, or should we provide a human language response? Let's see what happens when I fire off this request. So I'll go to the top and click send requests. Scrolling down, you'll see this response will be different.
>
> **[9:25](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=565)** So instead of having a human language content response you'll notice it says content null. And then I have a function call down here, and the function call says I am calling the weather query function and here are the arguments, location, Burnaby, unit, metric. So now you can see in my software I could then listen for this function call property and say, oh, the function call property was triggered. What function is being called here? The weather query function. So then the corresponding weather query function in my software can say okay, I need arguments. Here we have a location argument, Burnaby, and a unit argument, metric. And then I can act on those in my software. This is fundamentally different from what we had before because now I the developer I'm controlling the output of the OpenAI API and making sure that it's coming out in the format I want. But remember how I said it's non-deterministic? Notice how it says location Burnaby but it doesn't have a comma here. It doesn't say comma CA. Well if I run this request again, there's a good chance it'll be different. See? This time it says Burnaby comma CA. So if I were to do this in real software, I would probably break this down more. So I would say for properties, instead of having a location property with this location string, I would probably say city and then state key and then location or country key or something like that to really force the system to give me exactly the information I want and I can, because in my function call I get to define
>
> **[11:02](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=662)** whatever data structure I want, an object, an array, whatever properties I want, I can describe each of the individual properties, control what type of output it is, and even control whether or not any of these properties are required or optional. Okay, so what happens if I now have this function call but I ask a question that isn't about the weather? Say for example, let's see. So I'll change this prompt to how many ducks fit in a pond? Definitely not a question about the weather. So the weather query, the weather query function should not be activated. Send off that request. And in the response we don't have a function call. Instead we have some content that says the number of ducks that can fit in a pond depends on the size of the pond. Yeah, obviously. So here you see, even with function calling, I can still allow the system to output human language responses when I need them and function calls when I need those. All right, let's take this one step further. In the third example here called 03 multi function call, I've set up multiple function calls. So as we scroll down this file, you'll see first we have our location query. This is the same one as before. But below that in the functions array, there's a new query called author query. And this one says, if the prompt is asking for information about an author, then I want to return the author query with the following properties, first name, which is the first name of the author and last name, which is the last name of the author. And I require both first and last name.
>
> **[12:36](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=756)** And again, I've set function call to auto. So let's see what happens when I fire off the question what's the weather like in Burnaby? Scroll down and not surprising. The function call here is location query Burnaby, CA and Unit Metric. Okay, so far it works. What if I then change the question? So the prompt to who wrote "10,000 Leagues Under the Sea?" Send off that request. Because this is a question about an author, the system picks up on that, and now we get an author query with the first name Jules and the last name Verne. So here you can see the system is smart enough to understand the difference between a question about a location and the question about an author. And what's important to note here is the way it makes that differentiation is in the description of each of the function calls. So this here can be considered the system message for the function. The location query system message is get the current weather in the given location. The author query system message is information about an author. So that's how the GPT system identifies which function is going to be called. And then we can use the system to clearly define specific functions for specific types of queries. So now I think you're starting to spot why this is so important. Using function calls, you can now set up quite advanced systems that can take human language input and then identify what type of question
>
> **[14:09](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=849)** the user is asking and then shunt off queries to your software based on those questions. So if the user is asking for information about say a product, you can send it off to a product query. If they're asking for information about support, you can send 'em off to a support query. If they're asking information about availability of a service, you can send it off as a service query. And you get to define not only when a specific function is called, but also what parameters are passed on with that function call for each individual call. But there's more. Remember at the bottom here, we have this function call auto? This is how we control what GPT does when there's a function called present. Auto means the system decides on its own what it wants to do here. If it wants to provide a regular human language output or if it wants to trigger a function call, and if so, which function call it wants to use. You can change this to none, and then it'll never use function calls. In software, if you are going to pass in requests, you could do that dynamically depending on the type of request you're sending. And if you want to force the system to always use a specific function, you can do that as well by setting up an object down here and say name call on, and then whatever functions. So author query for example. Now every time this request runs, it'll always use the author query. So let's see what happens if I change this question here to something that has nothing to do with an author,
>
> **[15:43](https://www.linkedin.com/learning/openai-api-function-calling-2023/understanding-function-calling-with-the-openai-api?u=76281980&t=943)** like how many ducks in a pond? In this circumstance I'm telling it you have to respond with an author query. And in the author query we are always requiring a first name and a last name. So we're stepping way outside of the functionality of the system, but I can force that to happen. So here we got first name, Arthur, last name Giesert. I'm not sure if that's a real person, or if that's something that the system made up but it's a demonstration of the capabilities. So just to be clear here, you have options. You can rely on the GPT system to pick which function to use, or in your request to the GPT system you can specify which function to use, and then you can tightly control the output. Now I'm sure you see just how powerful function calling is in the OpenAI API, and with these examples you have everything you need to do it yourself. So (speaking in a foreign language), go build some amazing things with the OpenAI API and function calling, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [OpenAI API](../../Skills/Artificial%20Intelligence%20(AI)/OpenAI%20API.md) (7), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (5), [ChatGPT](../../Skills/Artificial%20Intelligence%20(AI)/ChatGPT.md) (4), [Tokens](../../Skills/Web%20Development/Tokens.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (3)
> **Env Vars:** api (13), gpt (11), rest (5), json (2), iso (1)
> **UI Navigation:** go to (5), scroll down (5), open the (2), click on (1)
> **Definitions:** is a  (9), is called (1)
> **Prerequisites:** set up (7), setup (1)
> **Tools:** vs code (4), github (2)
> **Analogies:** for example (3), similar to (1), imagine (1)
> **CLI Commands:** find (2), go build (1)


## Instructor

- [Morten Rand-Hendriksen](../../Instructors/Web%20Development/Morten%20Rand-Hendriksen.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/function-calling-with-the-openai-api-4506256)

## Skills Covered

- OpenAI API
- Artificial Intelligence (AI)

## Path Context

### In [Develop Your Skills with the OpenAI API](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20Skills%20with%20the%20OpenAI%20API.md)
← [OpenAI API- Working with Files](OpenAI%20API-%20Working%20with%20Files.md) | **3 of 10** | [OpenAI API- Embeddings](OpenAI%20API-%20Embeddings.md) →

## Appears In

- [Develop Your Skills with the OpenAI API](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20Skills%20with%20the%20OpenAI%20API.md)

## Related Courses

_Courses sharing skills:_

- [OpenAI API- Code Interpreter and Advanced Data Analysis](OpenAI%20API-%20Code%20Interpreter%20and%20Advanced%20Data%20Analysis.md) — Artificial Intelligence (AI), OpenAI API
- [OpenAI API- Moderation](OpenAI%20API-%20Moderation.md) — Artificial Intelligence (AI), OpenAI API
- [OpenAI API- Speech](OpenAI%20API-%20Speech.md) — Artificial Intelligence (AI), OpenAI API
- [OpenAI API- Vision](OpenAI%20API-%20Vision.md) — Artificial Intelligence (AI), OpenAI API
- [OpenAI API- Image Generation with DALL-E](OpenAI%20API-%20Image%20Generation%20with%20DALL-E.md) — Artificial Intelligence (AI), OpenAI API

---

[↑ Back to top](#)