---
type: course
cssclasses:
  - lle-course
slug: programming-with-the-gemini-flash-api
url: "https://www.linkedin.com/learning/programming-with-the-gemini-flash-api"
duration_minutes: 19
duration: 19m
updated: 6/4/2024
learners: 16429
skills:
  - API Development
  - Generative AI
  - Artificial Intelligence (AI)
  - Google Gemini
exercise_files: true
github: "https://github.com/LinkedInLearning/gemini-flash-api-2724024"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQEAH6lVQicxvA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008964019?e=2147483647&amp;v=beta&amp;t=AtNgoYIgl_o00amicna3y6lADM_ckeYeLQuHg9oSoqA"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[A Developer''s Guide to Google Gemini]]'
prev_courses:
  - '[[Getting Started with the Google Gemini API]]'
next_courses:
  - '[[Google Gemini For Developers]]'
path_nav: '[{"path":"A Developer''s Guide to Google Gemini","position":4,"total":8,"prev":"Getting Started with the Google Gemini API","next":"Google Gemini For Developers"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/api-development
  - skill/generative-ai
  - skill/artificial-intelligence-ai
  - skill/google-gemini
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Programming%20with%20the%20Gemini%20Flash%20API.md)

![Programming with the Gemini Flash API](https://media.licdn.com/dms/image/v2/D4D0DAQEAH6lVQicxvA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1719008964019?e=2147483647&amp;v=beta&amp;t=AtNgoYIgl_o00amicna3y6lADM_ckeYeLQuHg9oSoqA)

# Programming with the Gemini Flash API

> Learn to harness the power of Google's new low latency, high-performance, and affordable Gemini Flash API in your AI projects. This course will guide you through understanding the unique features of Gemini Flash and how it compares to other models. We’ll explore the capabilities of the model through Google AI Studio, including its turbocharged performance at a fraction of the cost of other models 

> [LinkedIn Learning](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api) | 19m | 16K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [An affordable, multimodal, low latency, large context model](#an-affordable-multimodal-low-latency-large-context-model)
- [**1. Programming with the Gemini Flash API**](#1-programming-with-the-gemini-flash-api) (4 videos)
  - [The technology behind Gemini Flash](#the-technology-behind-gemini-flash)
  - [Testing the model in Google AI Studio](#testing-the-model-in-google-ai-studio)
  - [Large context windows with the Gemini API](#large-context-windows-with-the-gemini-api)
  - [Building apps with the API](#building-apps-with-the-api)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [An affordable, multimodal, low latency, large context model](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/an-affordable-multimodal-low-latency-large-context-model?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/an-affordable-multimodal-low-latency-large-context-model?u=76281980&t=0)** - There's lots of features that make [[Google Gemini]] Flash a compelling model if you're building ad tools. This is a full featured API that is multimodal from the ground up. They can comprehend documents from input types like code, audio, and video. [[Gemini]] Pro gives developers the ability to handle a massive million token context window size, which lets you prompt large documents as well as other file types. What makes Flash stand out against other models is sub-second results. It's much more performant than almost any other tool, but faster doesn't always mean more capable. And Gemini Flash 1.5 performs well against other members of its own family, as well as the competition. But what really made me do a double take when looking at the model specs, was the price. This model is cheap. Allowing you to access that million token context window with an industry leading price. So, let's take a look at what makes it different, explore its capabilities, and show you how to use the API to build your own stuff. Let's do this.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (2), [[Google Gemini]] (1)
> **Env Vars:** api (2)
> **CLI Commands:** make (1)
> **Versions:** 1.5 (1)
> **Definitions:** is a  (1)
> **Speakers:** - there (1)


### 1. Programming with the Gemini Flash API

[↑ Back to Table of Contents](#table-of-contents)

#### [The technology behind Gemini Flash](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/the-technology-behind-gemini-flash?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/the-technology-behind-gemini-flash?u=76281980&t=0)** - Flash is part of the [[Gemini]] family of models from [[Google]]. You can find all of Google's API offerings at ai.[google.dev](https://google.dev), and then click on Gemini API. Right now there are four different options for [[Google Gemini]], let's talk about the other options first. Nano is the smallest mat for edge computing. It's customized for small devices without a ton of memory and designed for on-device processing without going to the cloud. It's less capable, but it can have access to device information that you don't want shared with the cloud. Then there's Pro, that's a capable model with an extremely large context window, which is the size of the memory that the computer can use to hold information in. A million [[Tokens]] can handle about an hour's worth of video, 11 hours of audio or a few large books. If you're a developer, you can also request access to a two million token context window for testing, so that would double its capacity, but technically these models are capable of handling up to a 10 million token context window. Gemini Ultra is the most capable model, but that ability comes at a price. It has advanced reasoning capabilities and coding, so if you can afford it it's always the best model to use, but it's significantly pricier. And then there's Gemini Flash. It occupies the sweet spot between Nano and Pro, but it's closer in performance to Pro. It keeps Pro's access to a huge one million token context window, while adding blazing speed
>
> **[1:33](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/the-technology-behind-gemini-flash?u=76281980&t=93)** with sub-second first token latency. That means that it will start answering your prompts much faster than other models. And although it's a very capable model, Google has priced it well below the competition. Let's focus on that price for a moment, since it can be a bit confusing. There are several considerations to the price. First is a throughput component, which is measured in requests per minute. For Flash, you can get a slow 15 requests per minute for testing free of charge. You get one million tokens per minute and 1,500 requests per day. You can also get a much faster 360 requests per minute, 10 million tokens per minute and 10,000 requests per day. The reason to go for Flash is the speed, so this pay as you go pricing makes a lot of sense. When you compare pricing, it's important to note that your conversations can have two parts. Prompts which are the inputs, and responses which are the outputs. Together, they make up the context window. You can see that the prices have these different tiers, 35 cents per million tokens for any prompts that you're sending that are 128K tokens or less, and if you're prompting with input prompts that are larger, say like a big video that is above 128K tokens, the price rises to 70 cents per million tokens. You can see the same sort of formula for the output tokens, $1.05 per million output tokens for prompts up to 128,000 tokens, and $2.10 per million tokens. Now, that's one of the most generous prices out there.
>
> **[3:09](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/the-technology-behind-gemini-flash?u=76281980&t=189)** Let's compare it with Open AI's [[GPT-4|GPT-4o]] pricing, which some might consider a similar model. Now I got to give props to OpenAI here, the pricing is much simpler but it's definitely much more expensive at $5 for input tokens and $15 for output tokens. If we look at Claude, that also has pretty aggressive pricing, and you can see that Haiku is actually a bit cheaper on input tokens, but that's a pretty small, although capable model. There are some location limitations, so make sure you take a look at the fine print on the pricing pages. Overall, this model is really interesting because it's fast while aggressively priced, with access to a large context window. Sometimes a model that's more capable like Ultra, isn't the right tool for the job, Flash is probably one of the most compelling models from Google for certain instances.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Tokens]] (14), [[Google]] (5), [[Gemini]] (4), [[Google Gemini]] (1), [[GPT-4|Gpt-4o]] (1)
> **CLI Commands:** make (2), find (1)
> **Env Vars:** api (2), gpt (1)
> **Versions:** 1.05 (1), 2.10 (1)
> **Definitions:** means that (1), is a  (1)
> **URLs:** [google.dev](https://google.dev) (1)
> **UI Navigation:** click on (1)
> **Speakers:** - flash (1)

#### [Testing the model in Google AI Studio](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/testing-the-model-in-google-ai-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/testing-the-model-in-google-ai-studio?u=76281980&t=0)** - You can find Flash in either [[Google]] AI Studio or [[Vertex]] AI. I'm going to work with Google AI Studio, it's by far the simplest. The first thing you'll need to do is make sure that you choose the right model from the sidebar. There might be multiple versions of Flash so I got to talk a little bit about these numbers. Some models are named with only their names showing, no postfix associated with them. Those models are automatically updated to the latest stable version of that model. You can see that there's the normal name of the model at the top, and then a slug, or a name that you would add to your applications underneath. If the number has a three digit version next to it, that's considered a stable version, and there may be more than one available in the list. If you see a name with the keyword of preview then it's the absolute latest, but also unstable version of the tool. So let's try something simple to get started. Tell me about [[LinkedIn]] Learning and I'll hit this run button. You can see how fast [[Gemini]] Flash is especially if you compare it to other models. AI Studio is made for developers so there are some really important features here. When you run a query, for example, you can see how long the model took to do the request. You can also see the token count on the sidebar, as well as variables like the temperature that controls the creativity of the model, which you can use to control the response. These aren't variables that you normally see in the Gemini chatbot and correspond to variables that you can pass along in your applications. Notice that there are options for other variables here, like the safety settings and advanced settings.
>
> **[1:34](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/testing-the-model-in-google-ai-studio?u=76281980&t=94)** There's a really great option in here for sending the output in the [[JSON]] format, which makes it easier for any programs that you may be writing. Let's try to run this same query in different models so we can see how fast Flash can be. I'm going to switch over to Gemini 1.0 Pro, and I can scroll to the top of that prompt and hit this rerun button. You can see that it's visually a lot slower. This query ran for longer with a different amount of [[Tokens]]. You can't really rely on the number of tokens that you get back with different responses because these models are non-deterministic, which means they're going to give you a different answer every time. Another item that you can include here is a system instruction. This is where you can enter any commands that you want the model to consider before it runs the prompt. This would be good if you're building something that takes some type of user input, but you want to codify some instructions that are consistent before any prompts are sent. I'll say avoid using verbose, indirect, or jargon heavy phrases, opt for a straightforward, concise, and conversational language that is accessible and engaging to a broad audience, and rerun this request. The whole purpose of AI Studio isn't to query the model, but to design your prompts. Let's add a follow-up prompt, which might be something you do to prevent injection attacks. So I go down here and I'm going to type in rewrite answers to a single paragraph. Make sure that answers don't use any company names. I'll go ahead and run this second prompt, and you'll see that the changes were effective. You can always edit a prompt and re-edit it over time.
>
> **[3:08](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/testing-the-model-in-google-ai-studio?u=76281980&t=188)** Let me go ahead and ask some additional commands. So I'll hit this edit button and I'll ask it to check for potential injection attacks. I'll go ahead and say stop editing, and now I'll move over to this prompt and I'll hit rerun right here. You can also reorder prompts to design them a little better. This right here lets you go up and down the list of prompts that you're using. This Pop-up lets you delete a response and copy it in regular format or markdown. Let's go ahead and save this prompt so we don't lose it. I'll call this basic request and hit save. You can take a look at the left side of the screen to see the prompts that you've run. If you don't see it there, go ahead and refresh your screen. If you want to, you can use this share button to share this with others. Finally, you can have the AI Studio create some sample code for you to run this prompt. So if we click on get code right here, you can see that there are versions for [[JavaScript]], [[Python (Programming Language)|Python]], [[Kotlin]], and [[Swift (Programming Language)|Swift]]. And what's nice about this is that it does give you some instructions for what you need to do to install this module, as well as where to put the different parameters that you need to run the prompts. So now that you're familiar with the AI Studio tool, let's take a look at how the tool handles some larger token context next.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (3), [[Google]] (2), [[Tokens]] (2), [[Vertex]] (1), [[LinkedIn]] (1)
> **CLI Commands:** make (2), find (1), python (1)
> **Prerequisites:** you'll need (1), install (1)
> **Env Vars:** json (1)
> **Versions:** 1.0 (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** sample code (1)
> **Definitions:** is a  (1)

#### [Large context windows with the Gemini API](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/large-context-withdows-with-the-gemini-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/large-context-withdows-with-the-gemini-api?u=76281980&t=0)** - Let's take a look at some large context documents and see how well [[Google Gemini]] Flash does. We'll see if [[Gemini]] Flash can pick up a specific bit of information from some very large PDFs. I'm going to upload some volumes of a large encyclopedia from my [[Google Drive]] and then add them to Gemini Flash. That's going to help you get the files faster, especially if you need to do new queries on the same document. So I'm going to go here and create a new prompt. I'll go ahead and give it a name right away. I'll hit the plus sign so I can import some files. I'll go to My Drive and I'll scroll down to see the different large encyclopedias that I've loaded in there. I'm going to try to get it defined this spot in volume five where it mentions the Saxon Army in page 119. But I'm going to test it out first by giving it only volumes three and four, even though I know that this item is on volume five. We'll see what it does. It brings 'em up pretty quick since they're stored in Google Drive. Once they finish loading, you should see the token count go significantly up. It's at about 563,000 [[Tokens]]. Let's go ahead and try our prompt. I'm going to ask: Based on these documents, can you tell me the size of the Saxon Army at the outbreak of the French Revolution, who they sided with in the campaign of Jena? Then give me a timeline of their involvement using the mermaid format. Let's see what it does with this query that I know is not there. So I'll hit the Run button. It told me that that information isn't on any of these documents. Let's go ahead and load up volume five. Now we're using up about 845,000 of the tokens. That's pretty close to its limit.
>
> **[1:32](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/large-context-withdows-with-the-gemini-api?u=76281980&t=92)** Let's go ahead and move this query down and delete this response. So let's go ahead and hit the Run button once again. Now, I've done this prompt a few times. And although I did pretty well here, sometimes it gives you a little bit of inaccurate information. And in this case, it wasn't able to deliver me the timeline in the mermaid format. So I'm going to switch over to Gemini Pro 1.5 and try rerunning this prompt again. All right, in this case, it gave me the right information and it also gave me the timeline in the proper format. So you could see there's a little bit of a difference in terms of accuracy for each of the different models. Now, one thing that they've announced that they will offer soon is something called context caching, which will let you store and query large prompts repeatedly. Let's try something else. I'm going to send over an audio file and see how well it deals with some non-textual content. I'll create a new prompt. I'll rename this audio prompt, and I'm going to load up my large audio. This is audio for a livestream/podcast that I did at the beginning of the year, and I want to get some information from it. Basically, I love to do show notes at the end of every show, which are summaries of what happened during the livestream or podcast, and it'd be nice to be able to point to some time codes in the show when different events happened. Let's go ahead and do the query. I'll say, prepare show notes for this podcast. The summary divides the content into three sections. Each section corresponds to a third of the episode. There are four sentences in each paragraph. Each sentence further summarizes the content
>
> **[3:05](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/large-context-withdows-with-the-gemini-api?u=76281980&t=185)** in each section. Make sure there's a time code at the end of every sentence. Also, I'm going to have to include that my name is Ray Villalobos and the name of my guests, and this is because with audio, a lot of times, the model will have problems hearing what is being said and it'll be a little bit less effective with things like names. This is a fairly complex and very specific task that I'm asking it to do, and you can see that it's doing a pretty good job summarizing the content, but it's grabbing content from time codes that I'm not sure are correct. It's also not really going very deep into the episode. It's only going into four minutes of the show. So let's see how Gemini 1.5 Pro will do with the same query. You can see that it did a much better job at understanding what I wanted, plus it gave me more accurate time codes, and I was able to break things down a lot better. I really had high hopes for this model, but it just isn't as good as Ultra or Pro 1.5. But before you start a project, take advantage of AI Studio to figure out what the right model for the job is. These models are rapidly gaining capabilities and accuracy, so give it some time and make sure you're testing all your projects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (4), [[Google Drive]] (2), [[Tokens]] (2), [[Google Gemini]] (1)
> **Versions:** 1.5 (3)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1), scroll down (1)
> **Definitions:** is a  (1)
> **Speakers:** - let (1)

#### [Building apps with the API](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/building-apps-with-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/building-apps-with-the-api?u=76281980&t=0)** - I want to do something that's useful but simple. I built a project that will help me create alt tags for images using the vision model in [[Gemini]] Flash, and starting with just a folder for the project with an images folder inside that that has three images. By the way, one thing you want to do is to resize your images. The larger the files, the more [[Tokens]] you'll use, and the vision model doesn't need a ton of resolution to work anyways. Before we get too far, you're also going to need to have an API key. You can get to those in AI Studio by clicking on the API key button. Before you can create an API key, though, you'll need to have a [[Google Cloud Platform (GCP)|Google Cloud]] account, I'm going to assume that you've already set that up before we go further. I'm going to go to my console and then I'm going to click on this dropdown right here, and then hit New Project. I'll call it Gemini-Flash-Test, and then hit the Create button. This will take a second to create, and now you can go into [[Google]] AI Studio, and you probably want to refresh your screen right here, and I'll hit Create API key. So from here, you'll see Gemini-Flash-Test, and then I'll click on Generate API key. Now this will give me the API key that I need, so I'm going to copy this to my clipboard. Now, we need to give access to that key in our project. One way I can do this is to store it as an environment variable in a separate file and load it up through a library. Let me open up this folder in Visual Studio Code and I'll create a new document. Make sure that you don't put it in this images folder. I'll give it a name of .env and I'll add the key like this.
>
> **[1:33](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/building-apps-with-the-api?u=76281980&t=93)** Now, before I do anything else, I want to make sure that if I'm using [[Git]], this file doesn't get tracked or uploaded, so I'll need to create a gitignore file here. I'll add a few extra things in there, as well as the name of what will eventually be my output document. Next, I need to make sure that there's a couple of libraries installed to make sure my project works. I'm assuming you've already installed [[Python (Programming Language)|Python]] and have worked with Python projects before. It'll be pip install -q, so it's a quiet installation, and -U, so that it's the latest version of these tools. And then I need google-generativeai as well as the python-dotenv libraries. Let's go ahead and clear this out. Now I'm ready to create a file called alt.py my folder, and this is where I'll type in most of my code. I'll start out by installing all the libraries I need. I'm going to go ahead and load my .env file, and then I'll make sure that I pass the API key over to Gemini. Next, I'm going to specify the model that I want to use from the Gemini API. If you remember when I showed you the Get code button from AI Studio, you saw that normally, this configuration would be a lot bigger, and it can contain some additional variables. We're keeping things really simple right here. Now, by default, Python is going to execute things in the home directory, so I want to make sure that I am doing things relative to the current directory that I'm in. First, I'll create a script directory variable that holds the path to the current folder, and then I'll create another variable to specify the location of all my images. Now, I need to go and make a list of all the images in my folder,
>
> **[3:05](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/building-apps-with-the-api?u=76281980&t=185)** and I want to make sure that it only reads certain types of files like GIFs, PNGs, and JPEGs. Next, I'll go through the process of loading up all my images, and this is going to go into load_images array. In there, there's going to be an object. I'm going to store three different things in that array, the MIME type, as well as the data of the actual files. As I'm going through each of the images, I'm going to store that data. Finally, I'll need to make sure that I'm looping through all of the image file names. Now it's time to work with [[Google Gemini]] to generate all of these different alt tags. Let's go ahead and generate the file for our project. As I mentioned, I'm going to call it alt_tags.[[HTML]], and it's going to write that into a file, and we'll go ahead and create a temporary image called load_image and go through the array called load_images that we created earlier up here. I'm going to go through the list of paths and feed it into this list. And now I can write out the prompt that I'm going to need. The prompt is going to say Output the IMG tag using the variable called relative_path, because as I mentioned, I need to pass that along to the model, and that's going to be as the src and alt attribute with a detailed description. I've added this, Don't use markdown, at the end, because as I was testing this out, Gemini kept on giving me the file in a Markdown format. Next, then, need Gemini to generate the content for us, so I'm going to pass it along the prompt, as well as the data for each image. Finally, I'll write that response out to the file.
>
> **[4:41](https://www.linkedin.com/learning/programming-with-the-gemini-flash-api/building-apps-with-the-api?u=76281980&t=281)** All right, let's go ahead and run this Python, and when it's done, you should get an alt tags that HTML document with a list of images. Each image should have its corresponding alt tag that the model did for us. If you want to play around with the finished version of this project, check out the [[GitHub]] repo included with this course. When you open it, just make sure that you add your own .env file with your Gemini key. All the other installations have already been done for you. Now, this is a pretty simple example, but it really showcases how to use Gemini Flash to do something useful that it's well suited for.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (9), [[Python (Programming Language)|Python]] (5), [[Google]] (2), [[HTML]] (2), [[Tokens]] (1)
> **CLI Commands:** make (10), python (5), git (1), pip (1)
> **Env Vars:** api (8), mime (1), img (1), html (1)
> **Code Identifiers:** load_images (2), alt_tags (1), load_image (1), relative_path (1)
> **UI Navigation:** click on (2), go to (1), dropdown (1)
> **File Paths:** alt.py (1), alt_tags.html (1)
> **Tools:** visual studio (1), github (1)
> **Prerequisites:** you'll need (1), install (1)


## Instructor

- [[Ray Villalobos]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/gemini-flash-api-2724024)

## Skills Covered

- API Development
- Generative AI
- Artificial Intelligence (AI)
- Google Gemini

## Path Context

### In [[A Developer's Guide to Google Gemini]]
← [[Getting Started with the Google Gemini API]] | **4 of 8** | [[Google Gemini For Developers]] →

## Appears In

- [[A Developer's Guide to Google Gemini]]

## Related Courses

_Courses sharing skills:_

- [[Getting Started with the Google Gemini API]] — Generative AI, Artificial Intelligence (AI), Google Gemini
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI), Google Gemini
- [[Building with Google Gemini Advanced and Ultra]] — Generative AI, Artificial Intelligence (AI), Google Gemini
- [[Google Gemini For Developers]] — Generative AI, Artificial Intelligence (AI), Google Gemini
- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)