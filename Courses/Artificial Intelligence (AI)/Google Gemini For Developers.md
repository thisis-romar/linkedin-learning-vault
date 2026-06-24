---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: google-gemini-for-developers-25832309
url: "https://www.linkedin.com/learning/google-gemini-for-developers-25832309"
level: Intermediate
updated: 5/20/2025
learners: 2614
skills:
  - Generative AI
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
  - Google Gemini
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQGurQq8eHdOVw/learning-public-crop_675_1200/B4EZbKb.rQHwAc-/0/1747153054737?e=2147483647&amp;v=beta&amp;t=-udZOO2os87WLKGZRgQBzJVWiNoMTKRwldAlnY3m24U"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[Develop Your AI Skills with Google Gemini and Google Cloud Platform](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20AI%20Skills%20with%20Google%20Gemini%20and%20Google%20Cloud%20Platform.md)'
  - '[[A Developer''s Guide to Google Gemini]]'
prev_courses:
  - null
  - '[Programming with the Gemini Flash API](Programming%20with%20the%20Gemini%20Flash%20API.md)'
next_courses:
  - '[Prompt Engineering with Gemini (2024)](Prompt%20Engineering%20with%20Gemini%20(2024).md)'
  - '[Advanced Gemini for Developers](Advanced%20Gemini%20for%20Developers.md)'
path_nav: '[{"path":"Develop Your AI Skills with Google Gemini and Google Cloud Platform","position":1,"total":7,"prev":null,"next":"Prompt Engineering with Gemini (2024)"},{"path":"A Developer''s Guide to Google Gemini","position":5,"total":8,"prev":"Programming with the Gemini Flash API","next":"Advanced Gemini for Developers"}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/cloud-computing
  - topic/software-development
  - skill/generative-ai
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
  - skill/google-gemini
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Google%20Gemini%20For%20Developers.md)

![Google Gemini For Developers](https://media.licdn.com/dms/image/v2/D4E0DAQGurQq8eHdOVw/learning-public-crop_675_1200/B4EZbKb.rQHwAc-/0/1747153054737?e=2147483647&amp;v=beta&amp;t=-udZOO2os87WLKGZRgQBzJVWiNoMTKRwldAlnY3m24U)

# Google Gemini For Developers

> Google Gemini is a family of multimodal large language models that works seamlessly across image, video, audio, and code. In this course, instructor Lynn Langit shows you how to use Google Gemini design patterns, tools, and best practices for building LLM-based applications. These include patterns for requirements identification and design, which can include prompt engineering, RAG patterns, and f

> [LinkedIn Learning](https://www.linkedin.com/learning/google-gemini-for-developers-25832309) | Intermediate | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Building the future: Google Gemini tools for AI developers](#building-the-future-google-gemini-tools-for-ai-developers)
- [**1. Gemini Dev Environments**](#1-gemini-dev-environments) (5 videos)
  - [Understand Google Gemini 2.x models](#understand-google-gemini-2x-models)
  - [Understand Google Gemini 2.x experimental models](#understand-google-gemini-2x-experimental-models)
  - [Understand Google Gemini 2.x Canvas](#understand-google-gemini-2x-canvas)
  - [Use Google AI Studio](#use-google-ai-studio)
  - [Use Colab Jupyter Notebook](#use-colab-jupyter-notebook)
- [**2. Gemini Prompts**](#2-gemini-prompts) (4 videos)
  - [Design and test language model prompts](#design-and-test-language-model-prompts)
  - [Use system instructions with prompts](#use-system-instructions-with-prompts)
  - [Use Gemini compare mode](#use-gemini-compare-mode)
  - [Design and test multimodal prompts](#design-and-test-multimodal-prompts)
- [**3. Gemini Model Settings**](#3-gemini-model-settings) (4 videos)
  - [Configure model temperature](#configure-model-temperature)
  - [Configure model safety settings](#configure-model-safety-settings)
  - [Configure model parameters](#configure-model-parameters)
  - [Use the AI Studio dashboard](#use-the-ai-studio-dashboard)
- [**4. Gemini Model Tools**](#4-gemini-model-tools) (4 videos)
  - [Use structured output](#use-structured-output)
  - [Use code execution](#use-code-execution)
  - [Use function calling](#use-function-calling)
  - [Use model grounding](#use-model-grounding)
- [**5. Gemini Model Applications**](#5-gemini-model-applications) (3 videos)
  - [Generate videos with Veo 2](#generate-videos-with-veo-2)
  - [Test Gemini Live](#test-gemini-live)
  - [Test a Gemini app](#test-a-gemini-app)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Building the future: Google Gemini tools for AI developers](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/building-the-future-google-gemini-tools-for-ai-developers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/building-the-future-google-gemini-tools-for-ai-developers?u=76281980&t=0)** - [Lynn] What does the [Google Gemini](../../Skills/Software%20Development/Google%20Gemini.md) 2.x model family offer for your [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) use cases? In addition to the powerful foundational LLMs, [Gemini](../../Skills/Software%20Development/Gemini.md) now includes a number of tools, libraries, and services that you can use to build your own [gen AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) applications. We'll explore these capabilities by looking at dev environments, prompt mechanics, grounding, API capabilities, and reference applications. My name is Lynn Langit. I can't wait to share my experience building custom gen AI applications using Google Gemini with you. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google Gemini](../../Skills/Software%20Development/Google%20Gemini.md) (2), [Gen ai](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (2), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1), [Gemini](../../Skills/Software%20Development/Gemini.md) (1)
> **Env Vars:** api (1)
> **Speakers:** - [lynn] (1)


### 1. Gemini Dev Environments

[↑ Back to Table of Contents](#table-of-contents)

#### [Understand Google Gemini 2.x models](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/understand-google-gemini-2-x-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/understand-google-gemini-2-x-models?u=76281980&t=0)** - [Instructor] To start with LLM development for [Gemini](../../Skills/Software%20Development/Gemini.md) 2.0, we're going to start with prompt design because again, this is not an algorithm we're working with, this is a language model which needs to be interacted with at a basic level with an effective prompt. And I see a lot of my developers skipping the step and moving to some of the more lower level interactions with the model, and it doesn't have a good result. So it's really key to start here. First of all, to go through this entire document. We'll just touch on parts of it in this movie, and also to set up an environment where your business owner can help you with the validation, which will be really key. So just going to the first instruction here, we're supposed to give clear and specific instructions. So I just copied this prompt, and the tool that I recommend that you use is not a developer tool to interact with the business. I recommend use the commercial tool, just gemini.[google.com](https://google.com), because it's super friendly when you are in the early stages of building. Of course, as your application goes more towards maturity and release, you will then use the dev tools. But this is just a great workflow when you're first starting. Now the first thing that you're going to need to do, of course, is select the appropriate model, and we'll start with the model version that is most current as of this release. Of course, in the world of LLMs, we have lots of models releasing. So this could be a two point something down the line by the time you're watching this. So this is 2.0 flash, and then we just pasted in this prompt and we got a result.
>
> **[1:32](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/understand-google-gemini-2-x-models?u=76281980&t=92)** So you might say, "Well this is just obvious. This is just simplistic." But you want to have a mechanism to interact with your business users that they can understand and really help you drive the use case, because I see a lot of misapplication of LLM app development because the business hasn't been involved, and it's developer-driven. So it's really, really key that you take this first step. Now in addition to the basic prompting, you can see over to the right, we have just a number of topics here about prompting, and I recommend that you take the time to go through this and work with the most current model as a starting point with the business owner to see if it's going to be a good fit for their particular case before we start down the path of developing a custom application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (2), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** llm (2)
> **Versions:** 2.0 (2)
> **Prerequisites:** set up (1), before we start (1)
> **URLs:** [google.com](https://google.com) (1)
> **UI Navigation:** select the (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Understand Google Gemini 2.x experimental models](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/understand-google-gemini-2-x-experimental-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/understand-google-gemini-2-x-experimental-models?u=76281980&t=0)** - [Instructor] Another key aspect of working with LLM app dev is to pick the appropriate version in addition of the model. And this is really tricky in this fast-moving world. As of this recording, here's the guidance from [Google](../../Glossary/Service/Google.md). 2.5 Pro and Flash have been released in what's called experimental. So this is a non-general availability. Now certain customers, some that I deal with in healthcare field, cannot use or have decided not to use models that are experimental with any sort of, in my case, patient data. So we would only be limited to using models that are generally available, which as of this recording is 2.0 Flash. Other customers that I've worked with, they want the latest and greatest. So you really, again, have to go to the specific use case to see which model version you're going to use. And then once you have the ability to use the different models, then you're going to look at the capabilities and decide. And you can see here, 2.5 Pro is the most powerful, and here's a new [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) for us, thinking model, with maximum response accuracy. So thinking is a new aspect of working with LLMs that's really happening across the vendor landscape. And that is, it has the model exposing to you its thinking process. And we'll see it in just a second. I find it to be really, really helpful in the early phases to help me to get the prompt structured the way that I want it to so that I can get the best response. 'Cause I can see how the model is interpreting the prompt.
>
> **[1:34](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/understand-google-gemini-2-x-experimental-models?u=76281980&t=94)** So I use thinking models quite often for early POCs. Flash is the updated version, 2.5 Flash of 2.0, and it is the best model in terms of price performance. And then 2.0 Flash is the newest multimodal with next gen features. So it is really the predecessor to 2.5. Now when you are working with your business customer, again with these different models, I really recommend that you use the public tool [Gemini](../../Skills/Software%20Development/Gemini.md).[google.com](https://google.com) as a starting point. And you can see here as of this recording, we've got 2.5 Flash, 2.5 Pro, and then we have another model, Deep Research with 2.5 Pro. Now just to underscore the non-deterministic aspect of this, in the previous movie, we took this standard prompt. And we'll just take the same prompt. And here's the output from Flash. And let's go ahead and look at Flash Experimental and look at what output gets produced. Now notice we've got the thinking here. So you can see that in the thinking, the model is responding back to you and interpreting what it thinks that you want it to do with that prompt. And again, I find this to be super, super helpful. Now, if we switch to the 2.5 Pro and we do the same prompt. Again, we're getting the same output but we're getting different thinking. Which, again, I think this is just key in working with these more advanced models
>
> **[3:09](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/understand-google-gemini-2-x-experimental-models?u=76281980&t=189)** in the early stages in particular; is interacting, viewing, working with the thinking aspect of the models. So this is relatively new. I haven't seen models with thinking available publicly, available for longer than the last six months or so across the vendor landscape. So I have a lot of customers that really don't know what this is. That's why I wanted to open my course with this because I think it really ups the game here, with working with LLMs. Because as I was saying in the previous movie, a lot of people don't take prompting to heart and they do kind of an inadequate job. And then the whole LLM application doesn't work as well. So it helps you to get that first step really flushed out and really done correctly. And, again, if you interact with the business owners and flush out the use case, then I think you're going to get a better result in your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [Gemini](../../Skills/Software%20Development/Gemini.md) (1)
> **Versions:** 2.5 (8), 2.0 (3)
> **CLI Commands:** find (2)
> **Env Vars:** llm (2)
> **UI Navigation:** go to (1), switch to (1)
> **Definitions:** is a  (2)
> **URLs:** [google.com](https://google.com) (1)
> **Speakers:** - [instructor] (1)

#### [Understand Google Gemini 2.x Canvas](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/understand-google-gemini-2-x-canvas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/understand-google-gemini-2-x-canvas?u=76281980&t=0)** - [Instructor] Now to help your business owners envision what is possible with an LLM and also for other productivity tasks, but this is related to helping to design the use cases with your business owner. There are some capabilities that are part of the consumer [Gemini](../../Skills/Software%20Development/Gemini.md) product that can really open the eyes of people who are just starting to work with LLMs. 'Cause one of the challenges on building these use cases is not everybody has used an LLM. And so when you talk to them about what you might build, they can't imagine what is possible. So I find that Canvas for use case evaluation and understanding is quite useful. So what is it? As it says here, it's an add-on to Gemini. So it's an interactive space for rapid iteration. So you can use it to write documents or to code. You can see your edits and Gemini's suggestions in real time so you can work on projects more efficiently. So obviously there's a direct productivity use of it, but in the case of LLM app creation, it helps users who are new to LLMs, in my case, it's often medical doctors, to understand how LLMs can be a foundation for, in their case, like patient note writing or something. And it can get them started and automate the more mundane part of what they'd have to do, like read a chart or interpret some output or you know, read some communication. It can summarize it, and then it can generate a starting point. So ideation basically. You can also work on this with code. Interestingly, one of the biggest uses of LLMs is to automate the generation of programming code.
>
> **[1:36](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/understand-google-gemini-2-x-canvas?u=76281980&t=96)** And if your application is that, then when you are working with programmers, you can also use this capability for code. I'm going to use it for documents. So if you've never tried it out, again, use the consumer application. So what I'm going to do is I'm going to put in this same prompt using this 2.0 model and notice we have Canvas down here. And so I'm going to click Canvas, and then instead of just giving me a list, it's going to open this interactive work area where I can see what Gemini has suggested. And then this is editable. So I can go ahead and add my ideas. And then if I want to, I can export this to Docs. So this can help me get started writing, you know, brainstorming basically. And again, this is a super way to get the newer people who would help you with the use cases to understand at what point in an application lifecycle LLMs can really be helpful. Because one of the things that newer users to LLMs really struggle with is that it is non-deterministic. Again, going back to the previous example when we were looking at working with the other models, and I'm using Canvas here with the other model. Notice it's not the same names. And I'm actually not sure if Canvas works with this model. Let's try it here. Yeah, I guess I just didn't click Canvas. Oh, maybe it doesn't. Okay, so again, this is a good example. This is experimental, and so this does not work, even though it appears to work,
>
> **[3:09](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/understand-google-gemini-2-x-canvas?u=76281980&t=189)** it only works with the GA model. So working with this consumer tool set helps everyone to start to understand what these tools and capabilities of LLMs per model are and how to work with them. I would be remiss if I didn't also just mention Deep Research, since I do work with cancer researchers in one of my contracts. And this is a really interesting capability, and if I click up here, you can see Deep Research, and this would not be a great prompt for Deep Research. But what it would do if you had a prompt that was related to cancer research and then you click to Deep Research, it would go out and actually find the research papers and summarize and then produce the Canvas-like result. So you could take that report and work with it. So these integrations are very, very helpful when you are building out your use cases. And it's a great starting point.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (4)
> **Env Vars:** llm (3)
> **Definitions:** is a  (3)
> **CLI Commands:** find (2)
> **Versions:** 2.0 (1)
> **UI Navigation:** open the (1)
> **Analogies:** imagine (1)
> **Speakers:** - [instructor] (1)

#### [Use Google AI Studio](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-google-ai-studio?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-google-ai-studio?u=76281980&t=0)** - [Speaker] After you've refined your use case using the public [Gemini](../../Skills/Software%20Development/Gemini.md) tool, as a developer, you're probably going to want to move to [Google](../../Glossary/Service/Google.md) AI Studio. And initially, this looks very similar, so it might be a little bit confusing. Like what is the difference between this and the public tool? Well, the public tool is basically, I call it like a new search engine and LLM-based search engine. Whereas this tool is specifically for you as a developer and it's to really work with the early phases of the particular model and focus on prompting. Going back to what I was talking about initially, the importance of prompting. Now you'll notice if you click in here that there are a number of changes to the way the models are presented, and it's more for developers. So first, they're by model families. So you can see you've got 2.5, 2.0, 1.5, and then Gemma, which is the open source version. And if you pass your mouse, you still have the 2.5 pro-preview and 2.5 flash that we saw in gemini.[google.com](https://google.com). But when you pass your mouse over it, you get developer kind of information. So you can see for pro-preview here, you get input/output, API pricing by the token 1.25 for under 200 K, 10 bucks for under 200 K output. And then the other value for over 200 K. Also you get best four use cases, knowledge cutoff, rate limits, and the latency. Notice now, particularly the cost, if I go to flash preview, you can see that interestingly, there is a different cost for thinking and non-thinking. Well, why would that be? Because when you are developing and shaping your prompt based on looking at thinking,
>
> **[1:35](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-google-ai-studio?u=76281980&t=95)** you might want to pay for thinking. But as you are further down the LLM app lifecycle and your prompt is returning more consistently, what you want, you might not want to pay for thinking. So see the difference in the cost here, 3.50 for thinking and non-thinking is 60 cents, pretty interesting and a lot cheaper. So you want to use the right model for the right use case, right? And it tells you what for, large scale processing, use case, knowledge cutoff, rate limits. Notice we also have Gemini two and we have same information. We have some models that we didn't see in the commercial gemini.[google.com](https://google.com). We have image generation, so we have image generation, and we have flashlight and notice best for long context, realtime streaming, and native tool use. So we've got different use cases here. So the idea with this is that you can quickly kind of like you do in the commercial product test out different models, but now you're testing it as a developer. So how do you test? If you want to, again, we'll just use that same prompt for a comparison. And I know it's a really boring prompt, but it's a good way to start. So here, we're going to get the prompt that we've been using and we're running it with 2.5 pro-preview and we are getting the thinking here. And notice the thinking is a lot more extensive than what we saw in the commercial product and comes up with the five names. So we can really understand if we go through the thinking, what did this prompt cause this model to do?
>
> **[3:10](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-google-ai-studio?u=76281980&t=190)** And we could change our prompt accordingly if it was not being interpreted in the way that we wanted it to be. So this is a really powerful next step in working with these different models. And as we go through this course, we'll also talk about some of these other capabilities that you can set over here when you're working with the models. Do notice also, we have token count here, which again, as developer helps us as we're testing and iterating so that we can understand how many [Tokens](../../Skills/Web%20Development/Tokens.md) we have used from a cost basis. This is really your core developer tool, and you're going to want to really spend a lot of time here when you're first starting building your custom LLM application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (4), [Google](../../Glossary/Service/Google.md) (3), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Versions:** 2.5 (4), 2.0 (1), 1.5 (1), 1.25 (1), 3.50 (1)
> **Env Vars:** llm (3), api (1)
> **Definitions:** is a  (3)
> **URLs:** [google.com](https://google.com) (2)
> **UI Navigation:** go to (1)
> **Speakers:** - [speaker] (1)

#### [Use Colab Jupyter Notebook](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-colab-jupyter-notebook?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-colab-jupyter-notebook?u=76281980&t=0)** - [Instructor] As you're working along in [Google](../../Glossary/Service/Google.md) AI Studio and you're refining your prompt and you're working with different LLM model versions, and eventually setting the model run settings over using this box on the side here, you'll get to the point where you want to start interacting programmatically with what you've done in here, so code, basically. So, in order to do that, you need to do a couple things. First, you need to get an API key, and I've already done this, so I'll show you what it looks like if I click right here on Get API key. It takes me into the API Keys section of this tool, and you just click the blue button Create API key, and then you copy the API key value in a secure location. Notice the text at the bottom. Use these keys securely, don't put 'em in your public code. It's really, really important. Once you have that key, then if you go back to Studio and bring up your prompt again, then you can use this convenient template API code to get the code. Well, what code are you getting? If I bring this up, this gives me some code, but what is this? So, notice it says you can run this prompt from the [Gemini](../../Skills/Software%20Development/Gemini.md) API after installing the relevant package, so if I click on Gemini API here, this is going to take us into the developer docs, which is really where we're going to start interacting programmatically with our models, and it gives us the sample code for us to interact. So, where can we interact? Well, depending on how you want to work as a developer, you could use VS Code or some other IDE. You could just copy this code.
>
> **[1:33](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-colab-jupyter-notebook?u=76281980&t=93)** Also, you could use Colab. Now, in order to use Colab, it's a little bit tricky, 'cause if I click on Colab, it's going to open up, and if I go ahead and I put my key in here, 'cause you would need to put an API key and I've already done this. So, basically, from this line os.environ, I took Google API key as the name and then copied the value from my API key and then make it available to the notebook. You'd think, "Okay, this is great, I can just try this out. This is a public service." Well, not quite, you can't quite try that out here. If you want to run this, you have to actually have a [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) Demo account, which we're not really going to be working with this much in this course, we're going to work more with the Studio tool. But if you wanted to, you can see if I scroll down here, when we create the client, we have the [Vertex](../../Skills/Software%20Development/Vertex.md) AI service, which is the set of services inside of the [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) that allows you to work with AI models, including Gemini. And notice project and location are blank, so you would have to fill those in with your project and your location and you'd have to set that up. So, that is something when you're going to go ahead and run, you have to have a run location, and the reason for that is the thinking is you're going to be testing it at scale. Do notice though in the sample code, what has been done here is the model has been pulled in, the text and the information, including the thinking. So, everything from this interface has been pulled in so that you can then work with it with the API, so it's really something
>
> **[3:08](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-colab-jupyter-notebook?u=76281980&t=188)** you need to think about as a developer. Do I want to work with a notebook environment, do I want to work CoLab? Do I want to work in Google Cloud Project, do I want to work with VS Code or some other IDE when I'm done working in this interface?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (3), [Google](../../Glossary/Service/Google.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (2), [Vertex](../../Skills/Software%20Development/Vertex.md) (1), [Google cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **Env Vars:** api (12), ide (2), llm (1)
> **Tools:** colab (4), vs code (2)
> **UI Navigation:** click on (2), scroll down (1)
> **Exercise Files:** sample code (2), template (1)
> **CLI Commands:** make (1)
> **Cross-References:** go back to (1)
> **Definitions:** is a  (1)


### 2. Gemini Prompts

[↑ Back to Table of Contents](#table-of-contents)

#### [Design and test language model prompts](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/design-and-test-language-model-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/design-and-test-language-model-prompts?u=76281980&t=0)** - [Instructor] As we dig into designing prompts, I have an additional tool for us in addition to this [Google](../../Glossary/Service/Google.md) AI for Developers documentation around prompting. And this tool for prompting is actually designed for end users, but I really like it because it helps marry the two capabilities together, what your end users are asking for, and then what you can do as a developer. In particular, this page two is just excellent. So you can see the four areas to consider when writing an effective prompt are persona, task, context, and format. And as we work through what you can do in the Google AI Studio tool to refine your prompts and get them ready for your applications, I really recommend that you give this entire guide, this 68 pages, to your business user and have them work through this, and then you as a developer, work through the API guide. And this is a great starting point. Now, in order to work with this, what I have done is I have taken a sample prompt and the sample prompt I just got from over in the prompt gallery, and it's the prompt down here. Where is it here? It's more code-y like it is to use a confusion matrix in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). And then when I pulled it up, it by default pulled up the [Gemini](../../Skills/Software%20Development/Gemini.md) 1.5 model, and I switched that to the Gemini 2.5 Pro because I wanted to work with Thinking. So I went ahead and ran it. And basically the problem is to generate some code. So I'm a student learning ML. I've trained a model to predict whether an image is cat, dog, or squirrel. These are the predictions I've gotten from the model and ground truth.
>
> **[1:32](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/design-and-test-language-model-prompts?u=76281980&t=92)** And then the data is zero for cat, one for dog, and two for squirrel. Here's a little dataset. I'd like to make a confusion matrix using Sklearn. I'd like to output metrics like precision, recall, and accuracy, and I'd like to visualize the confusion matrix by plotting it. The plot should show the class names, instead of the numeric labels. Can you generate the code? So it's a pretty good prompt using, you know, the basic persona, task, context and format guidelines here. And it generates a pretty good result. So you can see the result here, which at this point I'm less concerned with. The thing that I want to really share with you in this tool and using this type of model, Gemini 2.5, is this Thinking. So I want to expand this out. And the way you use this when you are developing your prompts is validation. So I'm not going to read all these, but just to show you the ones that to me are the most interesting. Understand the Goal, and if you read that, does that goal actually match what you thought you were asking for? And if it doesn't, then you are going to go back and change the prompt. So that is one great place to check. And then obviously, can go into the detail, the libraries, the input data, the step-by-step plan. The Refinement and the Self-Correction/Double Check to me are the most interesting parts of this, because this is where the model is telling you where are the edge cases. And literally in this case, it is an edge case. So consider edge cases. What if there were classes with no predictions or no true labels? So as important as what is here is what is not here. So if you, with your domain knowledge,
>
> **[3:07](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/design-and-test-language-model-prompts?u=76281980&t=187)** see that there's some edge case not being considered, then you need to figure out if you're going to change your prompt or you're going to do something else in your application to handle that. Like nulls or bad values or something like that in this case. And then the self-correction/double check to me is the most interesting part of this. Does the confusion matrix order match Sklearn's convention? Are the class names aligned correctly? Are all the requested outputs generated? This is what it is checking. Again, what is important is not so much what is here, but what is not here. If there's something you expected to be here that is not, then you need to go back and change the prompt or figure out how to handle this another way. And working with this Thinking I find is relatively new. Wasn't available publicly until recently. And it's a superpower when you are working with LLMs because the better the prompt, the better the application. So as we continue to drill into the capabilities of this tool, when you have the ability to work with models that show their thinking, and again, if you remember from the previous movie that in the Flash Preview here, it's interesting that you can set it to Thinking or Non-Thinking mode. Thinking would be the default in this tool and Non-Thinking is probably what you would use in production because you don't need to pay for that output after you've done this evaluation. So super, super important and add to your toolkit for prompting in models that expose their thinking.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (3), [Google](../../Glossary/Service/Google.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** cat (2), python (1), make (1), find (1)
> **Versions:** 2.5 (2), 1.5 (1)
> **Definitions:** is a  (1), is an  (1)
> **Env Vars:** api (1)
> **Speakers:** - [instructor] (1)

#### [Use system instructions with prompts](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-system-instructions-with-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-system-instructions-with-prompts?u=76281980&t=0)** - [Instructor] Another way to augment your prompts is to use a capacity called system instructions and the documentation for this is actually on [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) under [Vertex](../../Skills/Software%20Development/Vertex.md) AI, but it applies to the [Google](../../Glossary/Service/Google.md) AI Studio as well. So what are these? System instructions, It says "A set of instructions that tell the model processes before it processes prompts." So you use it to tell the model how you want it to behave and how you want it to respond. You can include things like the role or persona context and formatting instructions. Basically you can use it to make prompts shorter because you can see here in this prompting guide, Persona could be put into every prompt or you could just simply say you are a certain role. And that's something that I commonly do when I'm testing just to make my prompts a little bit shorter. So this is pretty simple to do. We've got examples on this page as well, like you are a friendly and helpful assistant. But we'll go back to Google AI Studio and I'll show you how this works inside of here. So we have this same prompt or student learning ML, which we could take this just out of here if we wanted to. If we wanted to edit the prompt here and we could take this out and system instructions. Oops, let me just get this. You are a college student learning machine learning with SKlearn, and then we could basically take that out of the prompt. And once we have that,
>
> **[1:34](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-system-instructions-with-prompts?u=76281980&t=94)** that can make our prompts a little bit shorter. So once we have that, then we can go ahead and rerun our prompt. And now that we have those instructions rerun, consider system instructions as part of the rerun prompt.
>
> **[2:05](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-system-instructions-with-prompts?u=76281980&t=125)** And again, we get the thinking and it's like very subtle, but it's interesting because you can see it thinks I'm younger. Okay, cool, let's break this down and get the code working using SKlearn. This is exactly the kind of stuff we're learning, which, I mean, I'm kind of joking around 'cause it's a little bit maybe not good in this case and people have made fun of this, but I personally use it very, very frequently with certain technical areas. Like you are a bioinformatician, you work with cancer research for human health, you know, that kind of stuff. And it helps to focus the the model and it helps to improve the quality of the prompt and then I don't have to write that in every single prompt. It's a small technique, but it's one that is important part of your toolkit when you are working with prompts in the early stages of your LLM app development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Vertex](../../Skills/Software%20Development/Vertex.md) (1)
> **CLI Commands:** make (3)
> **Env Vars:** llm (1)
> **Cross-References:** go back to (1)
> **Documentation:** the documentation (1)
> **Analogies:** it's like (1)
> **Speakers:** - [instructor] (1)

#### [Use Gemini compare mode](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-gemini-compare-mode?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-gemini-compare-mode?u=76281980&t=0)** - [Instructor] Alright, the next thing that you might want to do when you're working in your app dev in [Google](../../Glossary/Service/Google.md) AI Studio is you might want to compare the output from your prompt from more than one model. You might be trying to figure out which model version to use. And there is a useful capability inside of this tool for that purpose as well, and that tool is called Compare mode. So if I click this button, then what I get is I get my prompt, but I have the ability to use a different model to compare. So we can go ahead and compare Flash preview, [Gemini](../../Skills/Software%20Development/Gemini.md) 2.5, to Pro preview. And I can type something like: Okay, thanks. Please generate code to add unit tests for the code you previously generated. And I can see, when I click Run, what is going to be the output of both of these models. And this is just something I use constantly. It's just so helpful, because you can test in here to see which model is going to be the best fit for your particular use case. So you can see, first of all, Flash preview runs faster. Not a big surprise. It's designed to be more lightweight. So notice, the system instructions are showing up here, that we put in from the previous movie. And when we get the output, which is important, and we would obviously look at,
>
> **[1:33](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-gemini-compare-mode?u=76281980&t=93)** in addition to looking at the output, because these are 2.5 models, if I scroll up, I get, in addition to the output, the thinking, which is great for figuring out what the model thought you were saying. And if we compare this, we can really start to understand the capabilities of the models in addition to how the model is understanding our prompt. So I'm just reading across these, the goals. On Flash, it's the user wants unit tests for [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code I provided, which calculates metrics; the user wants unit tests from the previous Python. Okay, so that seems okay. So identify key functionalities, identify the code. Okay. And you can see what I'm doing here. I'm looking at what is being considered in the creation of the tests. This is interesting, [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md), the visual output is complex and not done with unit test. Is this one even going to do that at all? So the Flash preview is generating a test for the matrix, but is it generating a test for the visualization? This is a really good example of using a different model for a different task. Do you need one, right? Choosing a testing framework, precalculate, okay, accuracy. And then I'm looking at the self-correction here to see where the model is telling you
>
> **[3:07](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-gemini-compare-mode?u=76281980&t=187)** that it has edges, refine and review. Okay. Self-correction. You can see, it's a complete different process. You would think of this almost as a deterministic task, like a unit test, a unit test, and unit test. But it's not because there's language involved. So it's not so much what code was generated I'm trying to show you here. I mean, obviously, that is important in the real world. I'm trying to show you the process of how to use the tools so that you can figure out how effective your prompt is. Because if your prompt is missing some information and if the model isn't the best fit for your prompt, you're not going to get to the best result. So this is just like my normal workflow. I think that the Compare button is just fantastic, and I'm going to show you where it is again. So it is right there. So this Compare mode, and this is relatively new. It's something I use all the time when I use AI Studio, so I wanted to include it in this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2), [Google](../../Glossary/Service/Google.md) (1), [Gemini](../../Skills/Software%20Development/Gemini.md) (1), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** python (2)
> **Versions:** 2.5 (2)
> **UI Navigation:** scroll up (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### [Design and test multimodal prompts](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/design-and-test-multimodal-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/design-and-test-multimodal-prompts?u=76281980&t=0)** - [Instructor] Up till now we've been working just with text prompting. A whole new area is [Multimodal Prompting](../../Skills/Artificial%20Intelligence%20(AI)/Multimodal%20Prompting.md). And again, I'm really finding a lack of imagination because people are just not using LLMs day in and day out. And so the first thing I would challenge you as a developer is to just use LLMs as much as you can. Use it as much as you use a search engine like [Google](../../Glossary/Service/Google.md). And you will develop this intuition for what's possible and then you'll help to convey that to the business side of your work and help them to learn about what's possible. So in order to do that, this tool I think can be useful not only for developing your app, but also just for, I would call it just playing around. So to give you an example of how to get started, if you click the plus button here, and this is always changing, so this may be different by the time you look at this. You can do prompting now with a number of capabilities. You can type in the text, obviously we've been doing that and set the system instructions. You can get information from MyDrive and those are usually PDFs and a few other kinds of text files. You can upload a file, you can record audio, you can upload a picture, you can specify YouTube video. And to understand all these capabilities, I really like to take a look at the sample media. And this is a relatively new, it's like a gallery basically. So you can see at the top, you've got videos and then you have different photos, right? So I'm going to take this last one here, American Museum of Natural History. It's a YouTube video. I'm going to add it to the prompt. Now, I could just say nothing,
>
> **[1:33](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/design-and-test-multimodal-prompts?u=76281980&t=93)** but it's going to have a better result if I put some words with it. So this would be the simplest possible multimodal prompt. So if I say act as a high school teacher, and I could of course put this in system information. If I was doing this over and over. Summarize this video in a one sentence fun summary
>
> **[1:58](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/design-and-test-multimodal-prompts?u=76281980&t=118)** for ninth graders. And I'm pulling really everything together that we've talked about in the simplest possible way. The persona, the task, the context, the output, and then doing this multimodally. And so if we click run and we're using [Gemini](../../Skills/Software%20Development/Gemini.md) 2.5 Flash here, we can see the thinking if we want to see that. All right, class, get ready for a super fast tour through museum hall packed with skeletons of giant dinosaurs, flying, whatever it is in ancient swimming reptiles. And do you remember if we wanted to use a different model, what we would do here? We could use our fun compare tool and we could set this to Gemini 2.0 preview, and then I could just say, do it again. And then we could see which model will work best for this use case. Well, I mean pretty obvious here. We can see that this model is not going to work this time. And I'm not sure if it's a rate limit thing or this model doesn't work with video or what, but fast way to find out, right? And you can see, here's the second round. All right, class gather round for super fast tour dah, dah, dah, dah da. It's just a fun way of using all the different tools as you're developing your own fluency with LLMs. And then extending that to be able to create the customization that will be used as part of your customer's LLM based applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (2), [Multimodal Prompting](../../Skills/Artificial%20Intelligence%20(AI)/Multimodal%20Prompting.md) (1), [Google](../../Glossary/Service/Google.md) (1)
> **Versions:** 2.5 (1), 2.0 (1)
> **Analogies:** picture (1), it's like (1)
> **CLI Commands:** find (1)
> **Env Vars:** llm (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 3. Gemini Model Settings

[↑ Back to Table of Contents](#table-of-contents)

#### [Configure model temperature](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/configure-model-temperature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/configure-model-temperature?u=76281980&t=0)** - [Narrator] As you're working with different prompts and models, you're going to want to try out different model run settings. And there's a reason that Temperature is right up near the top. So, what is Temperature, and how does it work? Here's some documentation from, again, [Vertex](../../Skills/Software%20Development/Vertex.md) AI. They talk about another parameter first. So, I'm just going to skip to the, "Temperature controls the degree of randomness "in token selection," and "Lower temperatures are good "for prompts that require a less open-ended "or creative response." So, more towards deterministic, "while higher temperatures can lead to more diverse "or creative results. "A temperature of 0 means that the highest [Probability](../../Skills/Data%20Science/Probability.md) "[Tokens](../../Skills/Web%20Development/Tokens.md) are always selected." But it's still not deterministic. That's important. "In this case, responses for a given prompt "are mostly deterministic, "but a small amount of variation is still possible." And why would you adjust this or use it? As they tell you here, "If the model returns a response that's too generic, "too short, or the model gives a fallback response, "try increasing the temperature." Notice that each model has its own temperature range and default value. So, let's see how this works Using AI Studio, with our familiar flower shop prompt. So, we're using [Gemini](../../Skills/Software%20Development/Gemini.md) 2.5 Pro Preview model. The default temperature setting is 2. So, we'll go ahead and just run the prompt really quick, like. Actually, I probably should have used Flash so we can get a quicker response, but it's pretty quick. So go ahead and take a look at the names. Now, if we switch the Temperature to something really, really low, look at these names, and let's see if the names are going to change.
>
> **[1:34](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/configure-model-temperature?u=76281980&t=94)** And I'll say try again, and it'll use the new Temperature setting here. So, let's take a look. Everlasting Blooms, Preserve Petals. It's a little bit tricky to tell with this list. If we had something that outputted some text, we could probably could tell a little bit more quickly. Again, you can look at the thoughts if you want to. Let's try this with a different model. Let's try this with Flash Preview. And you see the default Temperature is set to 1. So, let's see. Try again. And this should come back faster, and it did. Okay, so again, different name options. And then if we want to make it more open-ended, try again, and we'll take a look here. And then I'm going to take a look at the Thoughts to see if there's anything interesting in the thought process here. Notice this is interesting, "5 names for a flower shop specializing in dried flowers." They asked me to try again three times. So, it is having a memory, basically, which is another new aspect of some of these newer models. But again, the Temperature setting can really impact the variety of the results. And depending on the use case and all, that all-important use case. You have, for example, idea generation for marketing, you might want a really high temperature. If you have evaluation and summary, of let's say like, one of my customers patient's medical records,
>
> **[3:06](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/configure-model-temperature?u=76281980&t=186)** you want a really low temperature setting. There's a very compelling reason that this is the first model run setting parameter that is made available for you to work with. And in case you're wondering, our experiment here, so we can just slide it. But in a production application, you would normally fix the temperature, and that would be a fixed model parameter, and you would benchmark against a fixed temperature setting. So that's part of LLM app development as you move further down the chain.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Vertex](../../Skills/Software%20Development/Vertex.md) (1), [Probability](../../Skills/Data%20Science/Probability.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Gemini](../../Skills/Software%20Development/Gemini.md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** llm (1)
> **Versions:** 2.5 (1)
> **Definitions:** means that (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Configure model safety settings](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/configure-model-safety-settings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/configure-model-safety-settings?u=76281980&t=0)** - [Instructor] An important set of model parameters around safety settings, and here's the documentation talking about what filters are available for configuration, and the categories, and the descriptions. And this is from the API documentation. Also, this is exposed in our AI Studio interface, and we'll look at that in just a second. So in addition to this, there is an excellent guidance here, safety guidance, that I really highly recommend that when you're moving from proof of concept to user testing, that you review the safety guidance. And this talks about how you automate the testing of the performance as to your safety settings. So let's actually look at that. And to do that, we're going to use one of the samples. So in the prompt gallery, I'll say, "Analyze the sentiment of texts." And I'll set this to, we'll use 2.5 Flash. And then down here, we'll see that we have safety settings. And if we click edit on the run settings, you can see that we can set these settings. So let's go ahead and our settings are block none, block few, block some, or block most. We'll say for this particular setting. And then we'll go ahead, and we'll say something really bad and see what happens here in our tweet, positive, negative, or neutral analyzer. We'll see if the setting blocks it. 'Kay, it says it as negative, but it doesn't block it. I hesitate to say anything too negative in a video,
>
> **[1:35](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/configure-model-safety-settings?u=76281980&t=95)** but I think you understand how this works. So I would have to test this to get this filter to run, but I really don't want to use those kind of language in a public video. I think you understand. Unfortunately, you do have to do this kind of testing. It does take a toll on people. So be mindful of the difficulty of the work in testing this. I know at the big companies, they do a lot of rotation of people who have to test this kind of stuff 'cause it's grim. But the filters are there, and the first step is for you to configure them. And then the second step is for you to manually test. And the third step is to follow the safety guidance and automate the testing. And it's highly recommended that anything that's public facing, you're going to go ahead and configure this to one of these levels of blocking. Notice, by default they are turned off.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (2)
> **Env Vars:** api (1)
> **Versions:** 2.5 (1)
> **Documentation:** the documentation (1)
> **Definitions:** is an  (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Configure model parameters](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/configure-model-parameters?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/configure-model-parameters?u=76281980&t=0)** - [Instructor] There are additional parameters to safety settings and temperature, and they do vary by model. Again, the documentation doesn't exactly match some of the newer models here, but this is the base documentation. So you can see that you can set the max output [Tokens](../../Skills/Web%20Development/Tokens.md). So a token is approximately four characters. We looked at temperature. And notice the temperature controls the degree of randomness. It's used for sampling during response generation, which occurs when topP and topK are applied. So what is topP and topK? TopK changes how the model selects tokens for output. TopK of one means the selected token is the most probable among the vocabulary. While a topK of three means the next token is selected from among the three most probable. Now, some models will expose this parameter, some don't anymore. TopP is still there. TopP changes how the model selects tokens for output. Tokens are selected from the most to the least probable until the sum of their probabilities equals the topP value. They give an example, if tokens A, B, and C have a [Probability](../../Skills/Data%20Science/Probability.md) of 0.3, 0.2 and 0.1 and the topP is 0.5, then the model will select A or B as the next token by using the temperature and exclude C as a candidate. So the default topP value is 0.95. And then, the last parameter is a stop sequence, that can tell the model to stop generating content and it can be a sequence of any characters. And then, obviously, you don't want to use the sequence of characters that may appear in the generated content. So what does this look like? So if we go back over to our interface here,
>
> **[1:34](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/configure-model-parameters?u=76281980&t=94)** and we are working with [Gemini](../../Skills/Software%20Development/Gemini.md) 2.5 Pro, you can see that in the advanced settings, which you can open and close, we looked at safety, so we could add a stop sequence, and, again, it tells you if you've forgotten, an output length, and our Top P, and this is set by default to 0.95. Now, a really interesting thing, and again this is pretty darn new as of this new model release, is if you switch to a different model, let's go to Flash Preview, you also now have the ability to set thinking mode and thinking budget. And if you remember back to when we first looked at this on the model card, we talked about this idea of using thinking during really this phase of development when you are working with figuring out your prompt and your model settings, and then switching to nonthinking when you move it to production, 'cause you really don't need that output. This is brand new. I hadn't actually seen this until I got ready preparing for this course. So you can set a thinking budget of tokens, which is pretty cool, of how many you want to have, because obviously these API calls cost money. So all these various parameters are going to impact the output of the model. But, the most important one, as mentioned in a previous movie, is temperature, and temperature does work in combination with Top P. So, again, if you forget how this works and you're struggling to test this in your model, go back to this particular page and I think this explains it pretty well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Tokens](../../Skills/Web%20Development/Tokens.md) (6), [Probability](../../Skills/Data%20Science/Probability.md) (1), [Gemini](../../Skills/Software%20Development/Gemini.md) (1)
> **Code Identifiers:** topp (5), topk (3)
> **Versions:** 0.95 (2), 0.3 (1), 0.2 (1), 0.1 (1), 0.5 (1)
> **Cross-References:** we talked about (1), go back to (1)
> **UI Navigation:** switch to (1), go to (1)
> **Env Vars:** api (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)

#### [Use the AI Studio dashboard](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-the-ai-studio-dashboard?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-the-ai-studio-dashboard?u=76281980&t=0)** - [Instructor] Alright, inside of the AI Studio tool, in addition to the interface where you can work with prompts I mentioned earlier, but I want to show the capabilities in the dashboard because again, this is new in the UI released relatively recently. So if you've used the tool before, it has been updated. So you have three sections in the dashboard currently, you have the API keys where you can click the blue button to create API keys and get your key for use with the [Gemini](../../Skills/Software%20Development/Gemini.md) API, you have a change log, which is helpful, because you can then see when releases occur, which is very frequent. So I recommend that you just about weekly take a look at this just to see what's new because it's a very, very fast cadence. So the other things link to the documentation and then you have a settings menu. And I always like to turn on auto save so that I don't lose any of my work. And this is the UI at this point, I will say that [Google](../../Glossary/Service/Google.md) is iterating quite frequently on this ui. So when you are watching this course, if it's been updated, Google and the whole world of LLMs is moving very, very fast. And so the capabilities that generally don't go away, they just add capabilities, but sometimes they change in where they are at in the ui. So do be aware of that when you're working with this tool for development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (2), [Gemini](../../Skills/Software%20Development/Gemini.md) (1)
> **Env Vars:** api (3)
> **Documentation:** the documentation (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)


### 4. Gemini Model Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Use structured output](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-structured-output?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-structured-output?u=76281980&t=0)** - [Instructor] The next thing that we want to work with in terms of model run settings are the tools, and you can see that we have four tools that are exposed in the AI studio: structured output, code execution, function, calling, and grounding with [Google](../../Glossary/Service/Google.md) Search. Now the availability of the tools does vary by model. And so I'll show you here, if I go to [Gemini](../../Skills/Software%20Development/Gemini.md) 2 Flash, you can see that some of the tools are not available. Flashlight, for example. So it varies by model. So I'm going to go ahead and do Gemini 2.5 Flash preview, and then we're going to use a sample to look at structured output. So in the prompt gallery, we're going to bring up this sample which actually uses this, and then we'll run a prompt so you can see how this works to list recipes in a [JSON](../../Skills/Web%20Development/JSON.md) format. So you can see that the prompt is, "Generate a list of cookie recipes. Make the outputs in JSON format," and this is associated to Gemini 1.5. And it has unstructured output that we can edit. And you can see here's the recipes, and it's just a simple nested JSON. And if I wanted to augment this, I would say, "Add one for white chocolate," chocolate, and let's run that. And you can see it adds that white chocolate, yummy macadamia nut cookies. Now we're using Gemini 1.5, so let's see if this'll work with 2.5 Flash. And you can see we have the structured output available here.
>
> **[1:33](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-structured-output?u=76281980&t=93)** And if we click on this to take a look at it, you can see that this example includes this structured output, and it basically is giving the format that the output should be in. And there's both a code editor and a visual editor here where you can see that we have these properties of the certain types, and it accounts for nested properties as well. And we can edit this. Also, we have a link to the API documentation, and as we work with this in our examples, we probably will build more complex JSON. And so you would probably move to working with this documentation so that you could properly build your structure and then test it inside of the AI studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (4), [JSON](../../Skills/Web%20Development/JSON.md) (4), [Google](../../Glossary/Service/Google.md) (1)
> **Env Vars:** json (4), api (1)
> **Versions:** 2.5 (2), 1.5 (2)
> **UI Navigation:** go to (1), click on (1)
> **CLI Commands:** make (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Use code execution](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-code-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-code-execution?u=76281980&t=0)** - [Instructor] To work with our next model tool, we're going to use the prompt, create a regex from text input. And then basically this is a prompt that's telling us that we're an expert in this and we are going to convert the user's natural language and constraints in the form of the regex, and after generating the string, provide an explanation with examples. And then it has some limits put on it and it has a user query. So we're going to use this with Code Execution. And so we're going to go ahead and set this first with our more modern model. A lot of these samples haven't been updated yet. And I'm going to say do this for my date of birth. Let's make it very obscure and see if it gets it. And click Run. And I can check the thinking here. Yeah, it didn't really get that it's date of birth. That's okay. Okay, there's the pattern. Okay, so now here's the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) code with the pattern and I can turn on Code Execution and I can say, "run this code "and show me the result." And it's showing different strings and whether it matches or not. So I didn't really give the greatest example there.
>
> **[1:33](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-code-execution?u=76281980&t=93)** I thought it might get date of birth, but it's just using the characters basically and it then runs the code. So the way that this works, here's the documentation. Notice [Gemini](../../Skills/Software%20Development/Gemini.md) is only able to execute code in Python. You can ask Gemini to generate code in another language. The model can't use the code execution to run it. It's a little quick validation tool to check to see if the Python code that was generated, let me go up to the Python code, that was generated by your prompt is going to produce the result that you think that you are going to have. So it's basically a handy little tool if you use a lot of Python, and a lot of my clients do, so I wanted to include it. It's not available with all models, so sometimes it's turned off. You have to check by the different model. But it does work very nicely if you have a Python use case.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [Gemini](../../Skills/Software%20Development/Gemini.md) (2)
> **CLI Commands:** python (6), make (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Use function calling](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-function-calling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-function-calling?u=76281980&t=0)** - [Instructor] The next tool we have available is super powerful but a little bit complicated. So, I tried to make a simpler example 'cause even [Google](../../Glossary/Service/Google.md)'s basic example is pretty long. So, I simplified, and I'll show you in a second. But what is it? It's Function Calling. So, Function Calling let's you connect models to external tools and APIs. This is where we really get into the world of agentic AI, which is so hot right now. You're basically connecting your LLM and your prompt to other types of tools so that you can create entire workflows. So, instead of generating text responses, the model understands when to call specific functions and provide the necessary parameters to execute real world actions. And as you can see, it can be called in the construction of the prompt when the output comes. I mean this is kind of a really powerful extension of [Gemini](../../Skills/Software%20Development/Gemini.md) and really all LLMs. So, the model can act as a bridge between natural language and real world actions and data. So, there's three primary use cases and the first one is to augment knowledge, access information from external sources like [Databases](../../Skills/Software%20Development/Databases.md), APIs, and knowledge bases. Super powerful to, in essence, ground the response, to extend capabilities to use external tools to perform computations and extend the limitations of the model, such as using an actual calculator or creating charts, and to take actions. So, interact with external systems using APIs, such as scheduling appointments, creating invoices, sending emails, or controlling smart home devices. So, this is really where the [Application Development](../../Skills/Software%20Development/Application%20Development.md) piece
>
> **[1:36](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-function-calling?u=76281980&t=96)** comes into play. And there are three different examples in this documentation. They're a little bit incomplete. So, again, I wanted to make a simpler one. The other thing that I like in this documentation is they have, for the different examples, we're going to do the get weather, I'm a diagram kind of person and they have a useful diagram here, where you can see the application has a prompt and then it uses a function definition which calls to Gemini. Gemini decides what to respond, has a final answer to completion. And then there's also a function name and an argument and that can be parsed. And then another prompt, result of the function call, and then a final answer. So, you can see very nicely drawn out here kind of to use a function or not to use a function. So, with this weather example, what I did is I set this up, I just used flash and I turned on Function Calling. And I use the default structure. If you just press Tab, you'll get this structure, it's a weather call. And you can see you have a visual editor as well. So, it's called function declaration. And once you have this, then here's an example of how you could call it. So, you can see that you have the role as user, the parts are texts, and what's the weather like in Fargo where I am today. And then we have the config. And then we have on the response [await.AI](https://await.AI).models.generateContent. And when I ran this, it called the function and got the parsed, got the city of Fargo, and then I put that it was cold,
>
> **[3:09](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-function-calling?u=76281980&t=189)** and then it created the output, which is it's cold in Fargo, (laughs) which it always is, right? But anyway, so this is a new type of prompt. So, you can see this type of prompt isn't something a user would write, this would come from an application. So, you know, we're moving from the world of just typing in prompts to creating prompt templates basically. And there are a lot of tools out there that I know I've used like [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) and some other tools as you're building these multi-part applications. But having Function Calling integrated inside of AI Studio is again a really handy developer feature that I think once you wrap your head around it, you will use. And just be patient with yourself working through the example. 'Cause, you know, you've got a lot of power here. You know, you've got Parallel Function Calling, Compositional, Automatic, Schemas, like a lot of different capabilities. And always, always read the Best Practices because that's there for a reason. Things like using strong typing because [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), of course, is not strongly typed by default are going to help you. So, in working with this new world of Function Calling really work through this entire example. Start with my simple weather search and then you can build in your particular scenario.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (3), [Google](../../Glossary/Service/Google.md) (1), [Databases](../../Skills/Software%20Development/Databases.md) (1), [Application Development](../../Skills/Software%20Development/Application%20Development.md) (1), [LangChain](../../Skills/Artificial%20Intelligence%20(AI)/LangChain.md) (1)
> **CLI Commands:** make (2), python (1)
> **Analogies:** such as (2)
> **Code Identifiers:** generatecontent (1)
> **URLs:** [await.ai](https://await.ai) (1)
> **Env Vars:** llm (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Use model grounding](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-model-grounding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-model-grounding?u=76281980&t=0)** - [Instructor] And to round out our tour of the tools available in AI Studio, we're going to look at my favorite tool, which is grounding with [Google](../../Glossary/Service/Google.md) Search. How often have we, in using some [gen AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) tool, went and done a manual Google search to look at the quality of the output? Well, this is so nicely integrated both in this tool set and also, of course, in the API. So let's pull up a prompt to try it out. I'm going to go to the bottom here. And the sample that Google has is set to work with [Gemini](../../Skills/Software%20Development/Gemini.md) 1.5 Pro. It's when is the next total solar eclipse? And where's the best location for viewing? Notice the grounding is set up and set to be Google Search. If I want to use a more modern model, as I do, I will use 2.5 Flash and then I will turn on grounding. Notice, I cannot edit it. Then I can just say, when is it? So tell me, so tell me. And it's going to show me its thinking, 'cause it's a thinking model. And it's going to give me a list of citations that I can look up. Super, super handy. Now, if I go back to the 1.5 and 1.5 Flash and I ground, notice, I can ground. And it gives me a lot of different options for grounding. So I'm going to go ahead and acknowledge that. And here I can edit and I can specify the level of retrieval for Google Search. So this is similar kind of to a temperature
>
> **[1:34](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-model-grounding?u=76281980&t=94)** and I can set the level, which that's kind of interesting. That's not yet available in the 2.5 series. So in addition to the grounding with Google Search, which I use constantly in here and also is available via the API, this really opens up a whole world of model output verification that, as I continue to make more courses in Gemini, I will be showing how I work with customers. But to give you a little preview of this, I do encourage that you read this excellently written grounding overview. And it has a number of examples. Notice in the table of contents here, you can ground with all kinds of things. Google Search, you can ground with Google Maps. Here's the really exciting one, ground with your own data. So in other words, you can pin the answers of a model that is generated to information that's found in data you provide. This to me is really exciting because it can ramp up the usability of [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) by dramatically reducing hallucinations if you ground with your data. Now, not every use case needs that. But like I said, I do a lot of work in healthcare, and a lot of the ones I work in do. You can ground with [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md), and you have web grounding for enterprise. And you can even use Google Search suggestions, kind of bringing the [products](../../Skills/Software%20Development/Microsoft%20Products.md) together. So this is an area that Google has been expanding, adding to their API. And I think it's really, really exciting because it has the potential to make LLM applications more applicable in more domains
>
> **[3:09](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/use-model-grounding?u=76281980&t=189)** because of the ability to ground. So it's something I highly recommend that you spend a good bit of time to become very, very familiar with. And a great place to start is by using the grounding tool inside of AI Studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (10), [Gemini](../../Skills/Software%20Development/Gemini.md) (2), [Gen ai](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1), [Elasticsearch](../../Skills/Software%20Development/Elasticsearch.md) (1)
> **Versions:** 1.5 (3), 2.5 (2)
> **Env Vars:** api (3), llm (1)
> **CLI Commands:** make (2)
> **Definitions:** in other words (1), is an  (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)


### 5. Gemini Model Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Generate videos with Veo 2](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/generate-videos-with-veo2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/generate-videos-with-veo2?u=76281980&t=0)** - [Instructor] A recently released capability of the [Google](../../Glossary/Service/Google.md) family of [large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) has gathered a lot of excitement. And that is the release of Veo or Veo 2, which is a video generator. Now, I was a trusted tester for this, so I've seen some features of this that are not yet released to the public, and I can tell you this is a game changing technology. And the current release is a small subset and it is really carefully sort of curated and throttled, really to let people get a sense of what is possible. So, this documentation allows you to get started. It was really recently released, and so there's new features coming very, very rapidly. And it's very much throttled because it does take a lot of resources. So, don't be frustrated if this isn't production-ready for you in this tool. If you have a use case where you want to use it, reach out to your Google representative because they do have more capabilities. They're just not quite releasing it to the general public as of this recording. That being said, what can you do with it? Well, I went ahead and generated a video here using the Video Gen 'cause it did take a minute or so, and I didn't want you guys to have to wait. So, I selected Veo 2, that's my only option. And I can go from one to two results. I can set the aspect ratio to one of these choices. The video durations are really tiny. I call 'em micro videos.
>
> **[1:32](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/generate-videos-with-veo2?u=76281980&t=92)** For some social media and some promotion, this might already be useful. Google demonstrated at their recent Cloud Next that they have greater capability. They're working the sphere in Las Vegas on the "Wizard of Oz" film, work on the sphere using Veo. So, it's pretty interesting to see. You should actually look at that sample to see what capability they are using internally. Eventually you'll be able to set the frame rate, Notice it's coming soon and the resolution. And also, you can specify what you don't want. So in this case, this is a multimodal. I just used one of the samples. Create a video with an image. A cute creature with snow leopard-like fur is walking in a winter forest. And this was the image. And this is just from their sample. Notice they have safety in place. Veo 2 does not currently support uploading images with people. There could be a lot of societal implications there. And then once you run it, you can see you get this adorable cat. And it's just really, really short. Eight seconds. Now, if I wanted to use a different aspect ratio, let's see if I'm throttled or I can actually just run it again. And see, it goes to a queue. So, it's really almost kind of like a teaser functionality. But let me tell you, this really is yet another game changer in this world of LLMs because when we can generate not only texts and images, but also these very, very interesting videos, this can really augment a lot of different creation scenarios. So, you can see this one is taking a minute here too. I'll just keep talking through this and see if it comes up within 40 seconds or so. There it does. Okay.
>
> **[3:05](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/generate-videos-with-veo2?u=76281980&t=185)** And so, there's my different aspect ratio. And again, I've been internal partner, tester with this for a while. And I'm just telling you, if this is an area you're interested in, please pay attention. I do anticipate making more coursework as more of this is released later in the year because it's an area that I have customers that are really interested. So, it's fun to play with too. So, you can start exploring video creation with Veo 2 inside of AI Studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [Large language models](../../Skills/Artificial%20Intelligence%20(AI)/Large%20Language%20Models%20(LLM).md) (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** cat (1)
> **Cross-References:** later in (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Test Gemini Live](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=0)** - [Instructor] So the next capability is the ability to literally talk to [Gemini](../../Skills/Software%20Development/Gemini.md). And this is pretty darn new and I'm still getting my head around it. You have the ability in this [Google](../../Glossary/Service/Google.md) AI studio to talk, share your webcam or share your screen and notice you are going to be interacting with the Gemini 2.0 flash model. That's the only one available at this time. The output can be audio and text or it can be text. So it's as if you're talking to a model who can talk back and here are the different voices. You can set the language. Then you have media resolution, you have two different settings, you have turn coverage, session context can shorten the chat history. And then I don't think these tools work. Let's see. Let's see if grounding with Google search works. I haven't actually tried it and once I start talking to this, I have to talk to it and not to you, my listener. So I'm going to talk to it and then stop the stream and come back to talk to you. So let's see how it goes. (Gemini beeps) Hey Gemini, how you doing?
>
> **[1:05](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=65)** - [Gemini] Hey, I'm doing well.
>
> **[1:07](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=67)** - [Instructor] I am wondering if you can find out the weather where I am today.
>
> **[1:12](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=72)** - [Gemini] Sure. I can help you with that. Can you tell me your current location?
>
> **[1:15](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=75)** - [Instructor] I'm in Fargo, North Dakota.
>
> **[1:19](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=79)** - [Gemini] Okay, the weather in Fargo, North Dakota is currently cloudy. The temperature is 46 degrees Fahrenheit, but it feels like 39 degrees Fahrenheit. There is a 40% chance of rain. Also, there is a wind advisory in effect from 10:00 AM central daylight saving time today until midnight.
>
> **[1:35](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=95)** - [Instructor] Great, thanks. I really appreciate it.
>
> **[1:38](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=98)** - [Gemini] You're welcome. Is there anything else I can help you with today?
>
> **[1:42](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=102)** - [Instructor] Yeah, I'm getting hungry. I have some vegetables in my fridge. I'm wondering what you would suggest that I can cook for dinner.
>
> **[1:52](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=112)** - [Gemini] Okay, I can help with that. What kind of vegetables do you have in your fridge?
>
> **[1:56](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=116)** - [Instructor] I have some spinach, onions, garlic, carrot, and a tomato.
>
> **[2:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=120)** - [Gemini] With those ingredients you could make a simple sauteed vegetable dish, saute the onions and garlic in a pan with some olive oil, then add the carrots and tomato. Once those have softened a bit, stir in the spinach until it wilts, season with salt and pepper to taste. Would you like me to find a specific recipe for this or perhaps explore other options?
>
> **[2:20](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=140)** - [Instructor] Nope. That's really helpful, thanks. Have a really good day.
>
> **[2:23](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=143)** - [Gemini] You're very welcome. Have a great day too. (Gemini beeps)
>
> **[2:28](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-gemini-live?u=76281980&t=148)** - [Instructor] Okay, so that is the new world we're in. You can see that I turned on the grounding with Google search and you know, first I asked about the weather and we had executable code 'cause it was calling a function and I was looking up information. This function was written by Google and then here we have the associated sources and then for the recipe again we had the executed code and looked up information on Google search and returned to result. So all of these new capabilities are really just opening the possibilities is to what we as developers can build. I'm just really loving the interaction in Google AI Studio so that I can experiment and I can share my experiments with my business owners again to get those use cases so we can build our LLM apps together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (12), [Google](../../Glossary/Service/Google.md) (6)
> **Speakers:** - [instructor] (8), - [gemini] (7)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (2)
> **Non-Speech:** (gemini beeps) (2)
> **Ports:** :00 (1)
> **Env Vars:** llm (1)
> **Versions:** 2.0 (1)

#### [Test a Gemini app](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-a-gemini-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-a-gemini-app?u=76281980&t=0)** - [Instructor] Yet another new capability in the [Google](../../Glossary/Service/Google.md) AI Studio is, starter apps. So we have some demo apps, we have our apps, and FAQ, and we have this button to create an app. And these are basically templates, very basic to help us get started to build different types of apps. And I really like these. This has only been out for like a month or two since [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) next this year as of this recording. So I'm sure Google will be adding more. But if I just go in and go to this one, count [Tokens](../../Skills/Web%20Development/Tokens.md), this is a real simple one. You can see that this interface allows you to see the TypeScript. It's set up to autorun the [HTML](../../Skills/Web%20Development/HTML.md), and we don't have any CSS here other than the fact that the text is black and I can change it to red there. And you can see this actually executes in real time. So it's counting the tokens using flash. And if I change this again, it's going to execute in real time. So what this does is it gives you this boilerplate code, which can get you up and going really quickly for these different types of applications. And you can see you've got prompts, live, chat, count tokens, embeddings, very useful for rag or retrieval, augmented generative applications, code execution, function calling, streaming, a [react](../../Skills/Web%20Development/React.js.md) example, and OpenAI, SDK compatibility. I also think it's really fun to look at the demo apps. I'm showing my age here, but I like this [Gemini](../../Skills/Software%20Development/Gemini.md) 95. It's kind of cracks me up. Yes, I was around during this time
>
> **[1:33](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/test-a-gemini-app?u=76281980&t=93)** and what this is is an interface here that is using LLMs to generate, but it has this archaic interface, which just makes me kind of laugh. And again, here you can see the code and you can see all the associated files. So maybe I need to get some new hobbies, but I spent a good amount of time playing around with this. I thought it was pretty fun. And I do like to use things that I think are fun to learn, so I wanted to share it with you as well. So Starter Apps is super new, and I'm sure Google will be adding more examples to the templates and to the demo apps. So do take a look here when you're working with the AI Studio.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [Tokens](../../Skills/Web%20Development/Tokens.md) (3), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [HTML](../../Skills/Web%20Development/HTML.md) (1), [React](../../Skills/Web%20Development/React.js.md) (1)
> **Env Vars:** faq (1), html (1), css (1), sdk (1)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** boilerplate (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/google-gemini-for-developers-25832309/next-steps?u=76281980&t=0)** - [Lynn] Thanks for going with me on the journey of yet another course on [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) Learning. I'm having so much fun using [Google](../../Glossary/Service/Google.md) AI Studio. It really is evolving quickly, so when you work with it, it might have even more features. I recommend for more learning that you are always taking a look at not only the documentation, but there's a link here that I look at probably, oh gosh, every week or two. It's the Cookbook and this links out to a [GitHub](../../Skills/Software%20Development/GitHub.md) repo that Google maintains. And you can see it's pretty updated. If I look at the updates over here, we've got updates that were last week, 14 hours ago, and we have lots and lots of examples, and you can see this pretty good README. So when you are going beyond what you're doing in the Google AI Studio and moving to a production situation, probably using [Vertex](../../Skills/Software%20Development/Vertex.md) AI and [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), because you've got your own data, this is going to help you make that transition. As always, keep learning. And I love to interact with my students, so share what you've built. And I'm Lynn Langit. Have a great day.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Google](../../Glossary/Service/Google.md) (3), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Vertex](../../Skills/Software%20Development/Vertex.md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1)
> **CLI Commands:** make (1)
> **Env Vars:** readme (1)
> **Documentation:** the documentation (1)
> **Tools:** github (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [lynn] (1)


## Instructor

- [Lynn Langit](../../Instructors/Software%20Development/Lynn%20Langit.md)

## Resources

- Exercise files available

## Skills Covered

- Generative AI
- Artificial Intelligence (AI)
- Large Language Models (LLM)
- Google Gemini

## Path Context

### In [Develop Your AI Skills with Google Gemini and Google Cloud Platform](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20AI%20Skills%20with%20Google%20Gemini%20and%20Google%20Cloud%20Platform.md)
**1 of 7** | [Prompt Engineering with Gemini (2024)](Prompt%20Engineering%20with%20Gemini%20(2024).md) →

### In [A Developer's Guide to Google Gemini](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/A%20Developer's%20Guide%20to%20Google%20Gemini.md)
← [Programming with the Gemini Flash API](Programming%20with%20the%20Gemini%20Flash%20API.md) | **5 of 8** | [Advanced Gemini for Developers](Advanced%20Gemini%20for%20Developers.md) →

## Appears In

- [Develop Your AI Skills with Google Gemini and Google Cloud Platform](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/Develop%20Your%20AI%20Skills%20with%20Google%20Gemini%20and%20Google%20Cloud%20Platform.md)
- [A Developer's Guide to Google Gemini](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/A%20Developer's%20Guide%20to%20Google%20Gemini.md)

## Related Courses

_Courses sharing skills:_

- [Advanced Gemini for Developers](Advanced%20Gemini%20for%20Developers.md) — Generative AI, Artificial Intelligence (AI), Google Gemini
- [LLMOps in Practice- A Deep Dive](LLMOps%20in%20Practice-%20A%20Deep%20Dive.md) — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [Generative Ai And Llmops Building Blocks And Applications](Generative%20Ai%20And%20Llmops%20Building%20Blocks%20And%20Applications.md) — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [Programming with the Gemini Flash API](Programming%20with%20the%20Gemini%20Flash%20API.md) — Generative AI, Artificial Intelligence (AI), Google Gemini
- [Getting Started with the Google Gemini API](Getting%20Started%20with%20the%20Google%20Gemini%20API.md) — Generative AI, Artificial Intelligence (AI), Google Gemini

---

[↑ Back to top](#)