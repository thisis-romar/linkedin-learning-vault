---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: advanced-gemini-for-developers-25833582
url: "https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582"
duration_minutes: 71
duration: 1h 11m
level: Advanced
updated: 5/22/2025
learners: 3659
skills:
  - Generative AI
  - Artificial Intelligence (AI)
  - Large Language Models (LLM)
  - Google Gemini
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEshb8nqs80JA/learning-public-crop_675_1200/B4EZbPqixaHcAY-/0/1747240759192?e=2147483647&amp;v=beta&amp;t=EQn4fkXcLjum3XMCLiWtSqsP6g0aA_mhH7mw1h2mMtA"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[A Developer''s Guide to Google Gemini]]'
prev_courses:
  - '[[Google Gemini For Developers]]'
next_courses:
  - '[[Building with Google Gemini Advanced and Ultra]]'
path_nav: '[{"path":"A Developer''s Guide to Google Gemini","position":6,"total":8,"prev":"Google Gemini For Developers","next":"Building with Google Gemini Advanced and Ultra"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/generative-ai
  - skill/artificial-intelligence-ai
  - skill/large-language-models-llm
  - skill/google-gemini
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Advanced%20Gemini%20for%20Developers.md)

![Advanced Gemini for Developers](https://media.licdn.com/dms/image/v2/D4E0DAQEshb8nqs80JA/learning-public-crop_675_1200/B4EZbPqixaHcAY-/0/1747240759192?e=2147483647&amp;v=beta&amp;t=EQn4fkXcLjum3XMCLiWtSqsP6g0aA_mhH7mw1h2mMtA)

# Advanced Gemini for Developers

> In this course, learn to use Google Gemini applications patterns and scenarios for building LLM-based applications. These include patterns for prompt validation, effective RAG and LLM application building. Instructor Lynn Langit also includes comparisons using Model Garden with other foundation LLMs for your application scenarios.

> [LinkedIn Learning](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582) | 1h 11m | Advanced | 4K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Creating enterprise GenAI apps with Google Gemini](#creating-enterprise-genai-apps-with-google-gemini)
- [**1. Test Prompts**](#1-test-prompts) (4 videos)
  - [Test prompts with Prompt Tool](#test-prompts-with-prompt-tool)
  - [Configure Prompt Tool](#configure-prompt-tool)
  - [Use Colab Enterprise with the Gemini API](#use-colab-enterprise-with-the-gemini-api)
  - [Use CloudRun with the Gemini API](#use-cloudrun-with-the-gemini-api)
- [**2. Manage Prompts**](#2-manage-prompts) (4 videos)
  - [Use Prompt Management to write prompts](#use-prompt-management-to-write-prompts)
  - [Use Prompt Management to compare prompts](#use-prompt-management-to-compare-prompts)
  - [Use Prompt Management to optimize prompts](#use-prompt-management-to-optimize-prompts)
  - [Use Prompt Management to evaluate prompts](#use-prompt-management-to-evaluate-prompts)
- [**3. Use Model Garden**](#3-use-model-garden) (4 videos)
  - [Test Gemini and Gemma models](#test-gemini-and-gemma-models)
  - [Test open source models](#test-open-source-models)
  - [Test Hugging Face](#test-hugging-face)
  - [Test medical open source models](#test-medical-open-source-models)
- [**4. Build AI Applications**](#4-build-ai-applications) (4 videos)
  - [Explore AI applications and Vertex AI Search](#explore-ai-applications-and-vertex-ai-search)
  - [Set up datastore for Vertex AI Search custom app](#set-up-datastore-for-vertex-ai-search-custom-app)
  - [Build Vertex AI Search custom app](#build-vertex-ai-search-custom-app)
  - [Explore Agent Garden capabilities](#explore-agent-garden-capabilities)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating enterprise GenAI apps with Google Gemini](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/creating-enterprise-genai-apps-with-google-gemini?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/creating-enterprise-genai-apps-with-google-gemini?u=76281980&t=0)** - [Lynn] Are you wondering how to build [[Google Gemini]]-based [[Generative AI|GenAI]] applications using your enterprise data? With [[Google Cloud Platform (GCP)|Google Cloud]]'s [[Vertex]] AI suite of tools, you will accelerate time to value as you create and iterate on [[Gemini]]-based AI applications. You'll learn to use Vertex AI tools for testing and managing prompt and model versions. Also, you'll see how to use the agent garden to build agentic AI apps. My name is Lynn Langit. I'm a Cloud Architect and AI Developer. I'm looking forward to sharing my experience building enterprise GenAI apps using Gemini on Google Cloud with you. Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Generative AI|Genai]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Vertex]] (2), [[Gemini]] (2), [[Google Gemini]] (1)
> **Speakers:** - [lynn] (1)


### 1. Test Prompts

[↑ Back to Table of Contents](#table-of-contents)

#### [Test prompts with Prompt Tool](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=0)** - [Instructor] When you get ready to start building [[Generative AI|gen AI]] applications with your own enterprise data, how do you do that? Well, hopefully, you've watched my previous course, which is focused on understanding the capabilities of [[Gemini]], and it uses the [[Google]] AI Studio, which you can see is mentioned here in the API documentation. I've got an entire separate course that goes through the fundamentals so that you can collaborate with your business product owners and develop your use cases before you're ready to build with your actual enterprise data. Since you've gone through that, and if you haven't watched that, please stop and watch that 'cause it is a prerequisite to this course. Then what you're going to want to do is you're going to want to have an environment where you can work that has the security around your data. Now, what would that environment be? That would be most likely a [[Google Cloud Platform (GCP)|Google Cloud]] project. So for this course, you can either watch my example or you can set up your own project. Please be mindful that resources can cost money. And so be aware of the charges you can incur. Google does have a new capability though, that I'll show you in just a second, that can mitigate that. So to get started, you want to set up a Google Cloud project for learning, and you can see right on the front dashboard page, to work with Gemini, you just click this blue button, Try Gemini, and that's going to take you into the suite of tools that is called [[Vertex]] AI. Now, Vertex AI isn't just for [[Generative AI]] or for Gemini and other models. It's for other more traditional machine learning models. The area where we're going to be working,
>
> **[1:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=92)** or the areas, is the Vertex AI Studio, you can see on the left, the notebooks and the model garden. Also, we are going to take a preview look at the agent builder. But you can see there's other areas in Vertex AI that do not relate to generative AI. So it's for both traditional and generative AI. It does take you when you click that Use Gemini into their prompting environment, which looks by design a lot like the other tool, the Google AI Studio. So you can see inside of here, we have the different models that we can work with, and we have the latest models. We have Gemini models. And if we pass our mouse over 'em, we get the model cards just like you do in Google AI Studio. But the difference here is we're going to have a focus on separating out the production ready or the GA from the experimental, because the idea here is you're moving to a production environment. Now, I said Google had a mitigating offer that looks like it's new, so I want to make sure and call that out. When you set up for a Google Cloud, you can get an initial free tier, and they have created a free tier specifically for Vertex AI. So this is new. And if you want to set up your own learning environment, this is something I think that you might want to take advantage of. So you can see here, it's separate from the Google Cloud free program, and you then have access, I think it's for 90 days, if I remember correctly. And you get, yeah, 90 days in express mode. It is a subset, but it is a step in the ladder
>
> **[3:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=186)** moving from experimenting into production if you're new to Google Cloud in particular. So in this course, we're going to be working with Vertex AI. To kick us off, we can just, you know, put in a prompt here. Notice it has prompt assistance. So, what is [[Google Gemini]]? I'll just do a little prompt just so we can see how this works, and we'll be working with this prompt environment quite a bit. It's very similar to Google AI Studio but not identical. Notice I'll just call out to get us started thinking and looking at the interface. You might remember from the previous course that rounding was available in Google, but notice you have this ability here to ground your model responses with your data turned off right now, but. So again, the whole idea is this is the next step in your progression towards production and that you are keeping your data on the Google Cloud probably in buckets or BigQuery, or some other data store, and then you're going to create your generative AI application in a Google Cloud project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (7), [[Google Cloud Platform (GCP)|Google cloud]] (7), [[Gemini]] (6), [[Vertex]] (6), [[Generative AI]] (4)
> **Prerequisites:** set up (4), prerequisite (1)
> **Definitions:** is a  (3), is called (1)
> **Analogies:** just like (1), similar to (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Configure Prompt Tool](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=0)** - [Instructor] Now as you're working in [[Vertex]] AI, you maybe are starting here, maybe you haven't used [[Google]] AI Studio. One thing that I want to point out is the different documentation for the different [[Microsoft Products|products]]. Previous movie, we looked at the [[Gemini]] API documentation, the prompt guidance, which is important, but I also want to call out that we have the [[Generative AI]] on Vertex AI documentation, which to me is a step up from some of the API documentation. It has the enterprise information that you're going to need around securing your application on more rigorous testing. So there's really two levels of documentation, and I consider the API documentation kind of for proof of concepts and getting started. And the Vertex AI documentation is what you're going to need for Enterprise. So let's look at our first topic, which is prompting, which is where you're going to start. Notice that you have the ability to work in different environments. You can use Colab, Colab Enterprise, which is associated with your [[Google Cloud Platform (GCP)|Google Cloud]] project, and we will be using. We can open in a Vertex AI Workbench or a View on [[GitHub]]. I really like this [[Prompt Engineering]] workflow because when you're moving from ideation to your first minimum viable LLM application, you're going to put some engineering rigor around prompt management. So you can see here, this shows you basic best practices to define tasks, write prompts, and then test the prompts using Vertex AI services and Gemini APIs. Evaluate the results, refine the prompts, and then eventually ship. And then, this is very well written,
>
> **[1:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=94)** that's why I wanted to include it in this course. So content and structure are the key components, and they give you examples. And then there's a sample prompt template, which is again, very well written, shows an objective and persona, instructions, constraints, output, few shot examples, and then the all important best practices. You know, I've said this in almost every iteration of this Gemini courses that I'm creating, but out in the real world, I see that engineers move quickly, too quickly beyond prompting into model tuning and model refinement and deployment. And it really takes away from the quality of the applications. [[Large Language Models (LLM)|Large language models]] are based on language. So this focus on prompt engineering and giving it adequate time during the application lifecycle is really the differentiator between whether you're LLM application is going to provide actual business value or not. Because these are not our traditional [[Algorithms]], these are a new type of approach to computation, and they do require this care and consideration. So you want to follow everything that's listed here. And notice over to the left, you've got a whole bunch of examples. So match that to your business case. You know, if you're going to, for example, need the structured output, then you are going to look at the structure of your prompt. Breaking down complex tasks in multiple prompts is another one I see being done incorrectly and affecting the quality of the results. So you can't skip, basically,
>
> **[3:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=187)** you need to go through all of these different steps. So the environment itself is designed to have rapid iteration with humans in the loop, initially, because it's got the Web UI. Of course, everything here also has a programmatic element to it. So if I wanted to say, update this based on the persona of a college student, for example, then I could just quickly do that. And it's just sort of a back and forth. And it has the sort of, I guess, style change that it thinks college students would like better. Inside of here, as with the other prompt testing tools, you can switch models, you can see the model cards so that you can understand what Google recommends the model for. You have rate limits, pricing, knowledge cutoffs, so all the information you need. And then you also have the model parameters. So again, if this is all new to you, do see my other course, I go into this in detail, the Structured output, Grounding with Google, and then Safety Filters, Temperature, Token limit, Top-P, and all the other sort of typical parameters that you are going to configure when you work with models in your prompts. Something new that we'll be working with next is this idea of prompt management. This is a very newly released tool, and the idea here is as you iterate and you go from manual processes to automating testing, you're going to start using this prompt management tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (5), [[Google]] (3), [[Gemini]] (3), [[Prompt Engineering]] (2), [[Microsoft Products|Products]] (1)
> **Env Vars:** api (3), llm (2)
> **Tools:** colab (2), github (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Prerequisites:** getting started (1), configure (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Use Colab Enterprise with the Gemini API](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=0)** - [Instructor] Now as you're moving from prompt testing to application building, you are going to want to take your work from this interface and you're going to want to capture it as code so that you can check it into source control and integrate it to your application. And [[Google]] has added some capability to make that even easier in this release of [[Vertex]] AI. So if I look at this prompt and I want to move to the next step, I have this new build with code button and I have a couple of options. I can get the code, I can deploy it as an app, or I can open it as a Jupyter Notebook powered by Colab Enterprise. And in case you're not familiar, I know a lot of people have used Google's public [[SaaS]] Colab, which is a pay for the service, and Google hosts it for many, many years. Relatively recently, they created a version of Colab called Colab Enterprise, which is notebooks as a service, but inside of Vertex AI. So it's the same idea. It's a Jupyter Notebook, but, and if I click here, you can see it's integrated in [[Google Cloud Platform (GCP)|Google Cloud platform]] via Vertex AI. And it's integrated also to BigQuery as well. So inside of here, if I say yes, I like this prompt, I've done a lot of work on it, I want to open this as a notebook, you will notice that it will open a new Vertex AI window and it will open a Colab Enterprise notebook. And inside of here, you can just start running this,
>
> **[1:36](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=96)** and it will first install the required library. And I have to authenticate here. So it's pip installing Google [[Generative AI|Gen AI]]. And then I'm going to use the library. And notice I have a client, and it's using my current project name [[Gemini]]-langit in us-central1. And here it's capturing the message2_text1 variable, the response. And then down lower here we have in the call to gemini-2.0 -flash in this case, the types.Part.from_text variable is my prompt. And then notice the update there. Update this based on the persona of a college student. So if I go ahead, after this finishes, and run this, then I will have the API code so that I can start integrating this. Notice it does have the settings as well. So the temperature, top_p, max_tokens, all that, and that's picked up from that UI. So the idea is, and I have to restart this, the idea is that after you've iterated in that GUI interface, you can capture the code and then you can start integrating this into your [[Application Development]] using this notebook format. And once this runs, it'll then show the result.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (4), [[Vertex]] (4), [[Gemini]] (2), [[SaaS]] (1), [[Google Cloud Platform (GCP)|Google cloud platform]] (1)
> **Tools:** colab (5), jupyter (2)
> **CLI Commands:** make (1), pip (1)
> **Code Identifiers:** from_text (1), max_tokens (1)
> **Env Vars:** api (1), gui (1)
> **Versions:** 2.0 (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)

#### [Use CloudRun with the Gemini API](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=0)** - [Instructor] So in addition to using Colab Enterprise notebooks, a very new capability in [[Vertex]] AI is the ability to deploy as a Cloud Run app. This is so cool; I don't know how else to say it. So it did take a couple of minutes. I took the prompt that I worked with rather than this example, and this is just a weather example, and I went in the prompt gallery, build with code, and I clicked on deploy as app. I had to redeploy it twice for it to work properly. So this is brand new; I'm sure some of the kinks will get worked out here, but the idea is once you have your prompting worked out to push it all the way through, again, for validation from your business owner. It's super neat. So I did get it to work and what happens is it deploys as a Cloud Run service. So once the deployment is successful, you can see that it shows inside of Cloud Run that it was deployed from Vertex AI. One of the tricky things is you don't want to hit this URL because of the way security is set up. You want to work with the app inside of Vertex AI. So once you have built it, and you have to save the prompt, and you also will be prompted from [[Google]] to turn on all the APIs like Cloud Build and Cloud Run that are needed to have this deployment; it's a one-time process. It took me about 5, 10 minutes for this to get set up. Then over in this build with code button, this is how you access it. So a little bit tricky. So you're going to open the app
>
> **[1:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=92)** and it builds you a little test harness for a business unit user. So this is our chat. Remember, we set it up for college students. So what else can you tell me about [[Gemini]] 2.5 models?
>
> **[1:48](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=108)** You know, it's just a simple little interactive environment that you can use based on your work in the prompt gallery. I think it's a great feature. I can see myself using this with my business product owners really, really frequently. So the documentation is pretty good. Like I said, I just had to kind of kickstart it a little bit on the deployment. I think it was two or three times I had to redeploy, and I got error messages, and I just redeployed it. So hopefully this will work well for you. I would really encourage you to try it out. And, again, the usability tip I would tell you is you have to access this app inside of Vertex AI. Those of us who are familiar with Cloud Run, you know, my first instinct was to go to the URL in Cloud Run, and if you do that, it's going to say don't access this here; the security's not set up. And maybe Google will merge these two as this capability matures, but for right now, this app is deployed and managed and the code for it is available through this interface inside of Vertex AI.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (5), [[Google]] (2), [[Gemini]] (1)
> **Prerequisites:** set up (3)
> **Env Vars:** url (2)
> **UI Navigation:** open the (1), go to (1)
> **Versions:** 2.5 (1)
> **Documentation:** the documentation (1)
> **Tools:** colab (1)
> **Speakers:** - [instructor] (1)


### 2. Manage Prompts

[↑ Back to Table of Contents](#table-of-contents)

#### [Use Prompt Management to write prompts](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=0)** - [Host] Now we've been working in [[Vertex]] AI creating the prompt in this window, and there's a new capability. And here's the documentation for it, called prompt management. And this is very recently released. It has a web UI in Vertex AI. It also has a new class. So you can see the Vertex AI SDK includes the Vertex AI preview prompts module, so that prompts can work with generative models. The idea here is the web UI helps you to understand the capabilities, but you probably start moving programmatically into working with prompts as basically a data object. And so you can see that you have an example here of the code to programmatically work with prompts. You can see on the right side you'd save prompt, load, retrieve a prompt, list prompts, list prompt versions, restore a prompt version. So it's a way of programmatically working with prompts. So in addition to that, you have some other capabilities. If we look at this prompt management web UI and some of them are integrated and [[Google]] is working to integrate more and more, you can see at the time of this recording, for example, the optimize is still in preview. So this is a prompt lifecycle management. So you have write, compare, optimize, and evaluate. And that's what we're going to look at in this section. So the first thing is when you save a prompt in the prompt window where it says create prompt, that's going to be available here. You could also create a prompt from this prompt management location and that would just open that create prompt window. You can import a prompt
>
> **[1:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=94)** and there's a certain format that you need and that's shown here. We also have this help on writing. So this is integrated into this UI and also the create prompt UI. If I click this and I click open and we say, write your prompt example, what is [[Gemini]] 2.X model capabilities?
>
> **[1:58](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=118)** Okay, and then I'm going to generate prompt. This isn't going to make a call out to the model and answer the question. This is going to rewrite the prompt. And so we have a suggested system instruction and then we have a suggested prompt. So the thinking around this again, is this whole idea of how to talk to the models is new for most people. And so this is actually using [[Generative AI|GenAI]] to optimize the prompt for GenAI. It's kind of meta, it's something that a lot of my customers are finding useful. And then if you want to, you can insert and where will it insert? It inserted it into the create prompt window. And then you can go ahead and run this prompt and see if this is something that you're interested in, if it looks good. And then once it's complete, it's pretty extensive here. You can refine it if you want to, or you can save it and it gives it a title. You have the ability to auto save if you want to. And once you save it, where are you going to find it? Once it saves, you're going to find it in the prompt management area. And it does take a minute to save. Again, new functionality. I'm sure Google will be optimizing this. Let's see if it's already there. No, we have to wait for it to save. So I'll give it a minute to save. Oh, there we go. And it's a little bit un-intuitive. It has that popup that says is not saved,
>
> **[3:31](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=211)** and it really is, again, these are little rough edges that I'm sure Google will refine. And then here you have your prompt that you could work with. So notice back in the create prompt, you also have the help me write, which looks the same way. And this is something I'd really recommend that you use because it's not going to hurt, and it could help in the structure of your prompting as you're forming that and building your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (4), [[Google]] (3), [[Generative AI|Genai]] (2), [[Gemini]] (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** sdk (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [host] (1)

#### [Use Prompt Management to compare prompts](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=0)** - [Host] The next step in prompt management is to use the new compare prompt tool. And there's two ways to access this through the Web UI. You can either open it from prompt management, however, it's not as intuitive as if you open it from the create prompt and I'll show you what I mean. If I wanted to take one of these saved prompts and I wanted to use that as a basis for comparison, I can't for some reason here. So if I say compare a save prompt, it says I can't do this if I have a history from within this tool. So I thought, okay, I want to see if I can do it from the other interface, and it does work that way. So again, this is probably something that [[Google]] will update over time. So if I open this prompt and I open the compare tool from the prompt, and I say continue, it will load it in, which is what I wanted it to do. So the idea here is that I can compare both prompts and different models. So right now the tool is executing the prompt against the model that's shown. Now if I want to compare a new prompt, it's going to load the existing prompt, which is the behavior that I want. So the way I would use this is I would open it, not from prompt management, I would open it from create prompt currently. So again, just to kind of make an artificial example, I'm just going to make this really simple and then take out all the instructions and not even put a question mark. I'll use the same model for right now, and then I'm going to say apply. So now I can submit the prompts or it looks like it's going to auto submit.
>
> **[1:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=94)** And I could then review the output to see which one was a better fit. Also inside of here, I could edit and I could change the model. I love this. I mean, this is something that I'll use just all the time because this is the way that I work. It's a great tool and I really thank Google for making it. So it's something that hasn't been available for very long, and there were less automated ways to do this before this tool was available, so this is something that I think will be a part of everybody's development lifecycle. Again, there are APIs behind this, so once you become more advanced as a developer, you can do this programmatically. But I really like this idea of having the Web UI in prompt management so that you can get a sense of the life cycle 'cause this is new for all of us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2)
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [host] (1)

#### [Use Prompt Management to optimize prompts](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=0)** - [Instructor] The next step in prompt management is to optimize the prompt, and notice this is in preview at the time of this recording. This is a set of APIs and best practices to programmatically optimize your prompt before you evaluate the model performance, which again, goes all the way back to what I've been saying throughout this course, the importance of appropriate engineered prompt management and engineering. So the way that this works is it uses a notebook, but before we go there, I want to go to the documentation. So you can see this is really, really early in its release, so I'm sure some of the features are going to have some of the rough edges smoothed out by the time you watch this. So you can see that this is explaining how this works, so [[Vertex]] AI prompt optimizer to automatically optimize prompt performance by improving the system instructions for a set of prompts, and you can improve your prompts at scale without manually rewriting system instructions or individual prompts. Super useful. So you got a lot of different examples here, and the key concept is, we are going to improve prompts by evaluating the model's response to sample prompts against specified evaluation metrics. To use this, you have to have your set of sample prompts, and again, in the docs here, it says you can run it with as few as like examples, but they recommend 50 to 100, system instructions, and a prompt template. So then they have an example, so they're talking about being a chef. Here is your template, question, and facts,
>
> **[1:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=95)** and you have some sample prompts. and then I think this is really the meat of this. How this actually works is you choose an optimization mode, evaluation metric, and target model, and you want to say, for the mode, are you optimizing for the system instructions, those sample prompts, or both? The metric, so you're going to select which metric you're going to evaluate against, and then the target model. So as you can see, at the end of the job, the Vertex AI prompt optimizer outputs the optimized system instructions with their evaluation score, and so it'll show the instructions, and this is supported for [[Gemini]] and Gemini Experimental models, so the 2.X series, and here's a list, I think this is pretty important to understand how this works, of supported evaluation metrics, so you have model-based, things like summarization, question answering, coherence, safety, groundedness. That's one I definitely use. How grounded is the response? I have a lot of use cases that appropriate use of groundedness. Human healthcare, for example, is really, really important for the business use case. Computation-based is the tool use and function calling occurring, as you would think, and the general text generation, and here, it gives you the process of how you set this up, and then in the optimized prompts, it talks about this example notebook. So if you click this open notebook, it's going to open in Colab Enterprise. and you are just going to go ahead and authenticate, install packages and libraries,
>
> **[3:08](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=188)** then create your prompt template, configure your project settings, your input and output. Your input is where you're going to have your samples, and they have to be in a certain format, and here's the link to where you'd use that, and here's where they're saying use 50 to 100 samples. So I'll certainly be trying this out, either when I have a customer that needs it or when [[Google]] provides me with a sample library, and then you configure the optimization settings. so the target, model, the optimization mode, evaluation metrics, translation source field name, and then you can do advanced optimization, and gives a reference, and then you run the prompt optimizer, and then you get the results. So I'm really excited to try this out because it is an automated way of looking at the prompt, and this is something that I haven't really had in my toolbox, so as I continue to work with this, I will post on my [[GitHub]] repo with my progress.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (2), [[Gemini]] (2), [[Google]] (1), [[GitHub]] (1)
> **Exercise Files:** template (3), github repo (1)
> **Prerequisites:** configure (2), install (1)
> **Documentation:** the documentation (1), the docs (1)
> **Tools:** colab (1), github (1)
> **Definitions:** is a  (1), is an  (1)
> **UI Navigation:** go to (1)
> **Analogies:** for example (1)

#### [Use Prompt Management to evaluate prompts](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=0)** - [Narrator] Automating the evaluation of model performance is really the crown jewel of all the tools in the Prompt Management suite. This is such a powerful set of tools that I have been exploring with my customers and really excited to share with you here. This is something that could actually warrant a course all on its own because [[Google]] provides a number of very configurable and powerful tools to automate the evaluation of different models, different prompts, as you are building. So to start, before we go into the notebook, you should take a look at the evaluation process because again, in the world of LLM application building, automating and applying engineering principles to this is so new that I find that I really don't have any customers that have their heads around this yet. So we're all in the beginning phases. So read through the process. You have to define the metrics and in particular the second bullet there. Evaluate a single model pointwise or determine the winner when comparing two models, pairwise. That's really important. Pointwise or pairwise comparison. And then we can have custom metrics as well. Then you need an evaluation data set. You run evaluations and then you interpret the results. Notice under the optional here. You can use something called a judge model and also some advanced techniques. So if I open that up, what's a judge model? A judge model, as it says here, is a augmentation
>
> **[1:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=95)** to using human judges. There's always going to be human in the loop for all of our LLM app development, as there should, but it can be really expensive. In my case, you know, working with doctors and pathologists, their time is very, very valuable. So augmenting their evaluation with a judge model is something that I am really looking forward to sharing with my clients in human healthcare. So judge model is more scalable. The [[Generative AI|Gen AI]] evaluation service uses a configured [[Gemini]] 2.0 flash model by default as a judge model. But you can customize that and here it talks about how to prepare. So I will tell you that when you go to this notebook, I spent, oh gosh, I think two hours and I didn't get all the way through it. So you're going to want to plan an afternoon to really understand how this works. But just to kind of get us started with this, we're not going to go all the way through it, you know, do open the table contents. So you're going to use the [[Vertex]] AI [[Python (Programming Language)|Python]] SDK for Gen AI evaluation for models, including Gemini and also some other models at the end, they have some third party models. So the Gen AI Evaluation Service. You can assess and enhance your models and applications. You can use this for your ideal model, helping to pick the right model, the model type, the model version, optimizing your prompt template, evaluating fine tuned checkpoints. So you got all these engineering tools. So in this tutorial we've got three use cases. We can run an evaluation on 1P models,
>
> **[3:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=190)** so we can learn how to evaluate Gemini models and we can explore different metrics and techniques. And we can leverage the SDK for in depth analysis and comparison of Gemini model variants. And since this is a Gemini course, we'll focus on that. I do know though, and I do have customers that use third party and open models such as [[LLaMA]]. And then we also have Claude 3.5 here. So this really long example has the third party models at the end. And then we have [[Prompt Engineering]]. Explore the impact of prompt design on model performance. 'Cause these two things go hand in hand and then links to the documentation. So the first thing is you have to pip install the service. So it's [[Google Cloud Platform (GCP)|Google Cloud]] AI platform evaluation, and then install, you know, if you're using Anthropic, in this case, an open AI. And then restart the runtime. And I ran all these steps in advance. And then because we're in Google Cloud, we just have to set our project and our location. And then this is the libraries that we're going to use. And then we're going to load an evaluation data set. We're going to use 10 samples from the first a hundred rows of the train split of OpenOrca dataset. And it's a collection of augmented FLAN collection data. And there is 1 million [[GPT-4]] completions and 3.2 million GPT 3.5 completions. It's tabularized in alignment with the distributions presented in the Orca paper, and currently represents a partial completion of the full intended data set. So training and evaluation. So we're just loading the data set and then we preview it and basically we can see it's a prompt
>
> **[4:44](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=284)** with a question and a reference. So on the first party models, the Gemini models, which is where we're focusing here. So we're going to run the evaluation. And again, we can do this to quickly evaluate different Gemini models, 2.0, 2.5, flash versus pro, and we can analyze prompt templates. So we've got this eval task class. This is our core component. It allows us to define and run evaluation jobs, providing us with a structured way to measure the performance. So this is a blueprint for evaluation. So this is really the key and core of this. So supported metrics are available. So the datasets can be [[Pandas (Software)|pandas]] data frame, Python dictionaries or file path your eyes. So you have bring your own response, performing model inference without a prompt template or performing model inference with a prompt template. So we're going to define a model. Here we're using 2.0 flash and we've got the model config, the temperature, so on and so forth. And then here's our eval task. So we're using the metric that's defined there. And a tip I'll give you, when I clicked on view evaluation results, I had to add, create a bucket and add it. And it told me that, otherwise you can only see them down here. But if you want to see them integrated, and you can see this is the score that was produced by this metric. And then you can see the scoring for each of the point-wise evaluation results, you need to have that bucket and add that line. And it'll tell you that when you run this.
>
> **[6:18](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=378)** You can also then see those same results by just calling display. And here's using pointwise metrics. So it's the pairwise or the pointwise. And this is listed over here. So that's one important aspect of this. And then again, you have the different metrics, and these are all defined in the documentation. So you can look at the pre-built metrics and you can run your evaluation. And again, if you add a line to your bucket to this particular code block, then you can view the evaluation results. And you can see for the metric. I just went with the coherence, and then you can see the coherence scores. So you kind of get the basic flow. You need to figure out the metric, create an eval task, and you need to figure out pairwise or pointwise. And then you can run your samples against it. And you can see here, again, there's the output, and you can also build your own point-wise metric. So you've got the built-in ones and you can build your own. This functionality is really game changing, and this is something that if you take away nothing else from this course, rewatch this module, work on this notebook until you can start to use it. Because automating the model evaluation is a key differentiator in the quality of your LLM applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (7), [[Generative AI|Gen ai]] (3), [[Python (Programming Language)|Python]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Google]] (1)
> **Env Vars:** llm (3), sdk (2), gpt (2), flan (1)
> **Versions:** 2.0 (3), 3.5 (2), 3.2 (1), 2.5 (1)
> **CLI Commands:** python (2), find (1), pip (1)
> **Definitions:** is a  (4)
> **Exercise Files:** template (3)
> **Prerequisites:** install (2), you need to have (1)
> **Documentation:** the documentation (2)


### 3. Use Model Garden

[↑ Back to Table of Contents](#table-of-contents)

#### [Test Gemini and Gemma models](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=0)** - [Instructor] In addition to using [[Gemini]] in your LLM application, it's becoming increasingly common to use multiple types of [[Generative AI]] models, because there are different categories. There are open source, there are task-specific, and [[Vertex]] AI interface accounts for this in the Model Garden. So the Model Garden has access to Gemini in its model families, but it also has access to literally hundreds of other types of models. So if I were to click on Gemini, it's just going to take us back where we've already been, which it was the Vertex AI Studio, so that's familiar territory. But if we wanted to see what models were available other than Gemini, sort of a typical use case that I have for my customers who are health researchers is, they might start with Gemini, and then they might want to use some of Gemini's capabilities in an open model, and that model is Gemma. So this is talked about in the Model Garden overview here. Gemma is the open version of Gemini, so it is commonly used in research publications and when custom data is added via [[Fine Tuning]]. So let's take a look at that process. So if we go back to the Model Garden, if we weren't aware of what models were there, we could go to the filters here, and we could say, okay, I want to use some sort of [[Google]] model, and I want to use an open source model, what should I use? And here's our recommendation to use Gemma 3. And this talks about the differences between Gemma and Gemini.
>
> **[1:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=93)** And to work with these models, what you need to do is, you need to deploy them to an endpoint. And an endpoint is basically a hosting environment where you can make [[Representational State Transfer (REST)|rest]] calls or API calls and test them out. So you can deploy here to just an endpoint, or if you want to scale this up, you can deploy to [[Kubernetes]]. And once you deploy, then you can select the endpoint in this interface and just quickly test. Now, one of the things that I found is, even though this appears to be deployed, I can't select this interface, which is a little bit annoying. And I'll show you what I mean. So if I go back to the Model Garden and I look at View my endpoints & models, 'cause I did this deployment, I do have an endpoint for Gemma here that is active. So I think that's just something Google needs to address in the Web UI, because this is actually active. So you can use that Web UI to test it, or what you can do is, and I'll just search, there's Gemma, once you have the deployment set up, is you can work with a notebook. And again, I ran this a little bit earlier. Let me just go to Colab, 'cause there's so many different notebooks here. And I ran this notebook for Gemma, and I had a couple of just scotches here, so I just want to share that with you. So basically this notebook is how you deploy to that endpoint. So, you set your [[Google Cloud Platform (GCP)|Google Cloud]] project, and it warns you about quota, because you're going to be using GPUs,
>
> **[3:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=186)** so make sure you have a quota in the project. And then you select the base model, and of course there's different capabilities in the model. And then, I didn't get this first thing to work, and it did take well over an hour, so if you're trying to use this notebook, there's two options for deployment, and the second one appeared to work, and then I was able to do a prediction through the notebook, and then get my response, basically. So you had to kind of coax it along a little bit, but that's the sort of process for this. So once you pick your model, you're going to deploy it to an endpoint, and then most of these models have sample notebooks that you then are going to work with in Colab Enterprise. And once the endpoint, let me go back here and show you where you can see the endpoints, once the endpoint and the model are deployed, then you use the notebook to have API calls to test. So you can see, I've actually got another one that I'll be showing later here, but I have the Gemma model, and I have the Gemma endpoint here. Now do be aware, if you're doing this on your own, these endpoints are basically running on [[Virtual Machines]], and so they will incur charges. So make sure that when you're done testing this out, that you delete the endpoints and remove them from your project, 'cause you don't want to have unexpected charges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (8), [[Vertex]] (2), [[Google]] (2), [[Generative AI]] (1), [[Fine Tuning]] (1)
> **UI Navigation:** go to (2), select the (2), click on (1)
> **CLI Commands:** make (3)
> **Env Vars:** api (2), llm (1)
> **Cross-References:** go back to (2)
> **Tools:** colab (2)
> **Prerequisites:** set up (1), make sure you have (1)
> **Definitions:** is a  (1)

#### [Test open source models](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=0)** - [Instructor] So this question of, "Which model should I use as I am building out my LLM application?" is a really difficult one. And I built this course in order of the way that I'm actually working with my customers. We generally start with [[Google Gemini]], because they have their data in [[Google Cloud Platform (GCP)|Google Cloud]] and the ecosystem around [[Gemini]] is most fully mature. And for some business use cases, that works just great. Now, there are some more complex cases, and then I also work with researchers, who need to publish their findings. And so they will maybe start with a commercial model, and then they might augment or add with open-source models. And they might use Gemma, but the one that is getting a lot of attention is [[LLaMA]]. And you can see that, if you look at the interface here, it's right at the top, Llama 4. Now, one of the things that's really interesting, and of course, this is an open-source model from Meta, is that, if I click on View model here, I have a service. So what [[Google]] has done, it's interesting, is they have set this up as a service and deployed it for you so that you don't have to go through the process of deploying an endpoint, like I had to do for Gemma. And you know, it took an hour or so and was kind of back-and-forth to get it set up. So if I click on this service, and the first time that you do it, you have to agree to their service terms and all that kind of stuff. You just have to click Yes a couple of times. So you can work in a notebook, but you can try out the service with an endpoint that is provided by Google.
>
> **[1:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=94)** Now, of course, this is very throttled. This is just for you to get started. And if you're going to do any sort of [[Load Testing]], you're going to have to deploy your own endpoint. But if I say, "What is Meta Llama 4 best used for?" some generic prompt here, this can get me started. And I can just have this quick little interface, which is really kind of handy. That's why there's no region here, because this is actually hosted by Google. It's a service. And again, notice they're going to be charging you for this. If you were doing your quick interactive testing and you wanted to then build your own test harness for your use case, then you would open a notebook. And I'm sure you know where this is going to open, in Colab Enterprise. And in here, you would then follow the steps here to set up, and you wouldn't have to set up an endpoint, 'cause you're using this Llama 4 service. So this is kind of a new paradigm. Most of the other models, like 99% of the models in Model Garden, you have to set up the endpoint, which is basically a VM infrastructure that Google sets up for you. So I kind of like this. I hope they do more of this, because it makes testing really, really easy. One thing I want to point out is that a huge number of models in the Model Garden and the filters. So you can see on the left side, you have filters around modalities, filters around tasks. And Google is adding to this like constantly. Model collections, the providers.
>
> **[3:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=190)** You can see they have 22 models from Meta. That's pretty impressive. Anthropic is another really popular one for a source model. And then the features, which ones are integrated to [[Vertex]] AI Studio. That's the prompt environment. Which ones have an API available, which ones are open source. That's a really common requirement. Which ones have deployability for Google [[Kubernetes]] Engine and which ones have a demo. So really usable interface to find models, whether you're just looking for a set of open-source models, you know, in the Llama family, or if you look in the partners here, you know, Anthropic or models that are hosted on [[Hugging Face]] or models that are very task-specific. So this is a direction that I'm seeing a lot of my customers go in. Like I said, they'll start with Gemini if they're coming from Google platform, and then they will kind of branch off and augment their applications with additional models. So there'll be a multi-model, which is used in agentic solutions, 'cause agents are using different models for different tasks. So this is really the cutting edge of LLM app development, but looking in the Model Garden and at least looking what's there before you go to this process of trying to fine-tune or tune another model. There could be, for example, if you have something in the medical realm, you have a radiology model, you have pathology model, now a dermatology model. You might want to at least take a look at those before you go and fine-tune on a model that is more generic.
>
> **[4:42](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=282)** And that's just something that's really seeing more and more opportunity to use these task-specific models, and I wanted to call that out in this section.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (7), [[LLaMA]] (5), [[Gemini]] (2), [[Google Gemini]] (1), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Prerequisites:** set up (4)
> **Env Vars:** llm (2), api (1)
> **UI Navigation:** click on (2), go to (1)
> **Definitions:** is a  (2), is an  (1)
> **Analogies:** kind of like (1), for example (1)
> **CLI Commands:** find (1)
> **Tools:** colab (1)

#### [Test Hugging Face](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=0)** - [Instructor] All right, let's say that I have a human biology specific task that I need to do as part of my LLM application and I want to search to see in Model Garden if there are any models that are going to help me. So if I start typing the [[Microsoft Word|word]] bio, I can see that I've got two models that have bio in the name, which is helpful, but might not meet my specific need. So I have BioGPT and BiomedCLIP. One is about literature and the other one is about vision. Also, notice I could click over here to Radiology, for example. And if that was my use case, I could take a look at that foundational model, and I could say, "Okay, are these my use cases? Do I need this kind of classification?" Notice for deployment, I would have to deploy to an endpoint. And again, once I would do that, I'll show what that UI looks like. I would just specify in which location, what type of VM, and this is really a misnomer. It often takes an hour or more to deploy. It's just not a quick process. I mean, it's not terrible, but it's not instantaneous. I noticed you have Advanced settings as well, so you can have availability on policies and whether the endpoint is public. The idea here is that you're creating a wrapper around this particular service so you can call it via a [[Representational State Transfer (REST)|REST]] call or a regular type of a call. And you can also deploy this programmatically. It shows you the code on how to do that. So anyway, so once that's deployed,
>
> **[1:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=94)** then you would use your notebook and then you can work with the model. Well, in addition to the models that are available from the Model Garden, I mentioned in the previous video and now we'll talk about it in a little bit more detail, you have this partnership with [[Hugging Face]]. And if you're not familiar with Hugging Face, this is a model and data registry that has literally more than 1 million models. So if we go over to Models, and we type bio, just to show you the difference, in Model Garden, we had two. Here we have 5,091. I don't know if that's better (laughs) because, you know, I'm not going to look at all 5,000 of them. But the point is there's a greater variety here. Now, for certain of the models, there's an integration. What does that mean? So I have a subset of the models. So if I type bio, and here I have, I don't know how many, but some number of them. And if I want OpenBioLLM, this seems good to me. What do I have to do to be able to use this on my data in [[Google Cloud Platform (GCP)|Google Cloud]]? I have to deploy it to a [[Vertex]] AI endpoint. So that's the sort of commonality here. Now, why do we have this interface? Because there is some libraries in Hugging Face that these models that are deployable have, they're basically like wrapper libraries, and this is talking about quota. And again, same type of idea. They need to change that to many minutes to deploy. But anyway, (laughs) once this is deployed, then you're going to have a sample notebook as well.
>
> **[3:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=186)** So it's basically the open models on Hugging Face that are deployable from the Model Garden have a little bit more [[Metadata]] to make it simpler to deploy. Now, if you're on the Hugging Face side, and I pick a model here, just pick BioGPT, notice you can deploy to some of the other major clouds, but they don't have a Google Cloud interface inside of Hugging Face. So that's one reason that you have this interface inside of the Model Garden. So if this is daunting to you, you're not alone. In this wild, wild west of LLMs, it is very hard to keep up. And that's why having tools such as Model Garden, which if you have a Hugging Face model that you can see in here, you know it's deployable, and it has basically the metadata that you need. And also the simple things like the filters can really help. But I will tell you that you really want to come in here and search, like, all the time during the life cycle of building your application, because [[Google]] is adding more and more models here, which is great, because then you have this standard, you know, if I click on any of 'em, I have this standard interface on how to deploy them. And then once they're deployed, I have the example notebook which helps you get up and running, 'cause you don't have that in some of the other environments where models are. So, my recommendation is, if you're going to use a Hugging Face model, try to use the models that have been set up to be deployed from the Model Garden first, rather than going out to Hugging Face and trying to figure out how to do it for any model that you might find here.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hugging Face]] (9), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Metadata]] (2), [[Microsoft Word|Word]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** llm (1), rest (1)
> **Analogies:** for example (1), such as (1)
> **Cross-References:** previous video (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)

#### [Test medical open source models](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=0)** - [Instructor] A key question around building LLM applications is when should you use a commercial model like [[Gemini]] and when should you use an open source model? It's a hard question. So I'm working a lot in the medical domain and I'm working with both researchers and clinicians and different situations have different use cases 'cause you have in some cases PHI or patient information. In some cases, it's anonymized. In some cases you can use public data. So all these things come into play when you're building your application. So one of the things that I've been working on lately is analyzing not only text but images. So DICOM images. So one of the things that I was working on, I just wanted to show in here because it gives a real world scenario in using both Gemini models and other types of models. So the model, and I can't remember the name now, it's called Path Foundation. So the model is for analyzing images. So Path Foundation produces embeddings that can be used to efficiently train classifier models for pathology analysis tasks on HE patches from whole slides. So great, this model is here, fantastic. And it was something that I wanted to work with. So the first thing that I would need to do to work with this model is what, do you remember? I would have to deploy it and I would to deploy it to an end point. So I did that and it took an hour and a half or so. And once that was done and the way that I was validating that, let me just show you here, let me go back to the model garden, is I was waiting for the model.
>
> **[1:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=95)** There's the model to be deployed and the endpoint. Then once I had that, then let me go back. I wanted to work with the sample notebook and I thought, great, I'm ready to go. Well I'm showing you this 'cause it's not always so easy, particularly depending on the type of data that you have. So I clicked open notebook and I started working on the notebook and I ran the import. I set up [[Google Cloud Platform (GCP)|Google cloud]] environment and I used this library for the type of image data, DICOM data. I imported the deployed model. I had to fill in the endpoint ID and the region that I got from that previous screen. And then I was saying, okay great, I can do my predictions. So it uses the path foundation model and it leverages the library to generate embeddings for a single patch and it's using information stored in the cloud, healthcare DICOM store and [[Cloud Storage]]. And I was ready to go, but unfortunately I got blocked. Because of the nature of this data, I had to get approval to access a research endpoint, which I'm running out of time for this course. So I'm not going to wait to do that. But the reason that I'm taking you down this path is because on these custom LLMs, whether it's access to the model itself, depending on where it's hosted or whether it's access to the data that you can use to test or work with the model, there's often complexities there that are not obvious until you get into it.
>
> **[3:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=190)** So you really want to monitor the amount of time it takes you to work with these open models and the authorizations and the setup you have to do and balance that with the commercial model. Going back to Gemini. Now, Gemini is not going to work, for example, for published research cases 'cause the model needs to be part of the research. But for some of the clinical cases, for example, it could work just fine and it could be a lot more efficient than some of these customized models, which require a lot more of the authorizations and the setups and a lot more steps to work with and don't have the libraries and the tools and the testing that I showed in earlier parts of this course for Gemini automated evaluation and prompt guidance and all that kind of stuff. So this is really a key aspect of enterprise LLM application creation in that figuring out at what point or points to use open models and at what point to use Gemini 'cause you might've been surprised that I'm talking about this open models so much in this Gemini course, but this is really reflective of my real world experience building with customers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (7), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Cloud Storage]] (1)
> **Env Vars:** dicom (3), llm (2), phi (1)
> **Analogies:** for example (2)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)


### 4. Build AI Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [Explore AI applications and Vertex AI Search](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=0)** - [Instructor] Two weeks ago, at the time of this recording, the annual [[Google Cloud Platform (GCP)|Google Cloud]] Next conference, [[Google]] announced a number of new features around agentic AI [[Application Development]]. You can think of this section of this course as a preview. As you'll see, a lot of the capabilities are early in the UI and not fully integrated. And again, we all make software here, so I understand in the application lifecycle Google was really anxious to get this out. So when you are working with this, please read the documentation and the UI will probably be updated and more integrated. So let's talk about this. The first concept for us to understand is this idea of AI applications. And this is a change, as it says here, "What happened to Agent Builder?" The original [[Vertex]] AI Agent Builder product has been renamed to AI Applications. And you're going to see this in the product console documentation in marketing. You'll see Agent Builder as a sub-menu. So inside of this, what are these? So AI Applications allow us to tap into the power of Google's foundational models, so [[Gemini]], search expertise and [[Conversational AI]] technologies to create enterprise-grade [[Generative AI|GenAI]] applications. So it's a set of tools that allow us to combine in an agentic fashion all these different capabilities to create sophisticated applications which integrate Gemini and the associated model family. So what kind of scenarios do we have? Well, we have conversational agents,
>
> **[1:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=92)** so AI-driven conversational user interfaces, and we have Vertex AI Search. So this is powered by Gemini and it enables us to build AI-enabled search and recommendation experiences. And we have search apps. Using Vertex AI Search, we can quickly build Google quality search app on the data and embed a search bar in our webpages, and we can integrate this, you'll see in the example that I have, with these Gemini models to enhance the search. So we can search against our own data using the power of Google's traditional search engine, along with the integration of LLMs for natural-language interaction with enterprise data. This is what people have been wanting for a really long time, so it is a very compelling set of offerings. So you have a currently generic search. So you can search websites, data stores, with enterprise proprietary data. You can have media search, so video libraries and things like that. And something that obviously makes me pay attention is healthcare search. So you can search healthcare records that are stored in FHIR data stores and you can import FHIR resources that contain clinical data from the cloud. Healthcare API FHIR store. And that's a standard basically here in the United States. So that is really got some potential to speed up the development of agentic AI applications in these different domains, including healthcare. So you can build recommenders, media recommenders,
>
> **[3:04](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=184)** generic recommenders. Again, they're warning you, this is pre-GA, so not for production yet, very, very early. What do you get? You get out-of-the-box, natural-language understanding and [[Semantic Search]], and that's where the LLM is integrated, out-of-the-box capabilities to understand synonyms, spellings, auto-suggest [[Generative AI]], recommendations, you get a new AI applications console and APIs, and you get the ability to add search widgets on to a webpage. So this is super, super compelling. That's why I wanted to include it, even though there's some definite rough edges, when I was trying to build the example, I'll talk to you about in a subsequent movie. Now, to augment this information, you want to take a look at this Vertex AI Search. So the concept, as it says up here, is informational retrieval using AI and LLMs. So as it says here, with Vertex AI Search, you can build a Google quality search app on the data you control. And the idea here from a real high level is basically it's making RAG much, much, much simpler. All of the kind of low-level RAG stuff that we were doing last year, creating embeddings in VectorDB [[Databases]] and all that kind of stuff you'll see is automated. So to have us take a look at where we'd work with this, the initial console has got some of the UI inside of Vertex AI, under Agent Builder. We have Vertex AI Search and we have something called the Agent Garden. The Agent Engine isn't yet up as of this recording.
>
> **[4:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=278)** But what you'll find as we look at this in subsequent movies, both these areas, the Vertex AI Search and the Agent Garden, point to a new console basically that is called the AI Applications Console, and I'm sure that'll be integrated with this main console. That's kind of the way that Google works with bringing in new feature sets. So right now they're two separate consoles and it's a little bit tricky to navigate. So in subsequent movies, I'll show you how it's working right now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (8), [[Google]] (7), [[Gemini]] (4), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Application Development]] (1)
> **Env Vars:** fhir (3), rag (2), api (1), llm (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (1), find (1)
> **Documentation:** the documentation (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Set up datastore for Vertex AI Search custom app](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=0)** - [Instructor] So in order to build a working sample, we could start either in Agent Garden or in Vector AI Search, but it's a little bit backward because you are having to create a data store first. And so if you click here, what you'll see is this takes you into the AI Applications interface, which as I said is not integrated. And it is creating a search app and it talks to you about the enterprise edition features, the LLM features. You have to give an app name, and I'll just put any old name in here and a lineal company name so you can see what happens in the next step. And then you have to have a data store. So what I found in working with this is it's easier actually if you create a data store first. So let me just go back. And I really didn't find much usefulness working in this area 'cause all of this functionality is in the AI Applications interface. Same thing with the Agent Garden, although we'll come back to that in just a second. So in working with this example, this is a recommender app, and when I was working with this, I couldn't get the indexing to kick off. So the first thing that I had to do is I had to create two versions of the set, as you'll see. So again, this is early preview, and maybe I'm doing something wrong, that's possible as well. So I followed the steps here and I enabled the APIs, I enabled AI Applications by clicking the button. And then I went to create a data store per the directions.
>
> **[1:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=95)** And they have a sample that's in the required format, which I'm going to show you this in just a second. It's really important to set this up correctly. So this sample I was able to use, however, when I went to assign the key properties, I had to make a change as well. So I'll just show you the couple changes I had to make to get this to work. So first thing I did to create a data store is click CREATE DATA STORE. And then notice here that you have all these various sources. We're going to use [[Cloud Storage]] of, course, but you have BigQuery website, FHIR, API, Cloud [[SQL]], Spanner, Bigtable, FHIR Store, LADB, and Workspace Sources, [[Google Drive]], Gmail, Sites, Calendar, and [[Google]] Groups. So all your enterprise data. So when you click into the source, then it's going to give you information about the configuration. So let's click Cloud Storage. And again, this is why you have to start with the data, 'cause the data has to be structured appropriately before you can create an app on top of it. So in this case we had JSONL, and then it'll be synchronized from the bucket, and we can say folder or file. In our case, we had a file. And let me just grab that information. And then inside of here, it's going to try to infer the schema. But you still have to specify the key properties. And I found that if I tried to specify a multi-key value, it threw an error. So I did get it to work, I guess, can kind of hacking the example here, by trial and error, by just having a single value.
>
> **[3:08](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=188)** So I will let Google know, maybe they can update their documentation. And once that's done, then your data store will be created. Now, once you have a data store, I'll show you what it looks like. So I made this data store for search. And this is that [[JSON]] file. And you can see that I have the documents, 'cause I did this a while ago, it's already been indexed. And you can view each of the documents. So that's the format of the JSON. And you can look at the schema, you can make modifications to the schema. Notice it will trigger a re-index. And here we have the activity. So we've got 45,000 items in our example here. So once you have this data store, then the workflow is that you create an application. It's just a little bit, like I said, unintuitive, because if you click in here, it's like start with an app, while you have to have your data set up in the appropriate format. And again, just 'cause I know some of you will be interested in BigQuery, BigQuery has these values for your data structured with [[Metadata]] media, unstructured healthcare, and then you have your BigQuery table. So I guess my old DBA colors are showing here, you have to have the data structured appropriately before you can build any app, and even working with LLMs doesn't change that. So following the appropriate requirements for the data store is key to any app development, including [[Generative AI]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Cloud Storage]] (2), [[Google]] (2), [[JSON]] (2), [[SQL]] (1), [[Google Drive]] (1)
> **Env Vars:** fhir (2), json (2), llm (1), create (1), data (1)
> **CLI Commands:** make (3), find (1)
> **Cross-References:** in the next (1)
> **Definitions:** is a  (1)
> **Analogies:** it's like (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Build Vertex AI Search custom app](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=0)** - [Instructor] Now in continuing to work with this sample, the next step here was to create an app of type recommender, which I did do. And then I was supposed to be able to preview my app. And again, I don't know if I missed a step or something, but I'll just show you what happened. So here's my dataset and then I created an app of type recommender, which is down on the bottom here, recommendation engine. And so put in the value and then you put in the data store. I don't have any because I already have one associated to it. So if I go to my app, you'll see that I was supposed to be able to have a preview, but it just kind of gets stuck there. And if I go to look at the data that's associated with it, it is telling me that it actually won't work with this. It says that the document is ingested, but the indexing is not enabled because the data store is connected to a search or chat app. So this kind of contradicts the documentation. So I wanted to build something that would show you the functionality. So I just kind of took a shot at it. And what I did is I created a second dataset here that just basically duplicated the same thing. I just created one because you can't use the dataset, can't connect it to more than one application. So I created a second dataset and then I created an app of type search. And so when I worked on that one, that worked just swimmingly. So this is a preview of this new functionality and you can actually see that you can test this and you can say, list the movies here,
>
> **[1:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=98)** just something really simple. And I associated it with [[Gemini]], so it's kind of a nonsense response. So here's the [[Generative AI]] response and here's the response. And you can see anywhere but here from the [[JSON]]. So you have the combination. So it looks like [[Google]] basically, and pretty easy to build. And I could tell that the data was being indexed because it told me nicely that it was indexed. So again, it could be me just missing steps, but I kind of hacked this example and I created a dataset using this dataset. And then remember I just used the one field name and then instead of associating this to a recommender, well, I did and it didn't seem to work, I associated it to a generic search. Now the additional configuration that I did with the generic search is, and again this down here could be a whole nother course, is I was just taking a look at all these different options. And this is really literally like weeks old. And I was looking at the serve option and I noticed that you could associate the search with an answer. And that's where I had the option to associate Gemini with this. And that's how I got basically the configuration in my example. So also kind of cool, it also has a mobile thing right there. So this is a very fast introduction to this really powerful AI applications that is really just the beginning of the next generation of agentic AI applications with Gemini.
>
> **[3:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=192)** And I would really encourage you to try to take a look at this UI and work through these different steps to see what tools are available. I know I'm going to be working with actual customers on this next week, actually because of some of the time deadlines we have. Hopefully we can speed up some of our projects using some of these new tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (3), [[Generative AI]] (1), [[JSON]] (1), [[Google]] (1)
> **UI Navigation:** go to (2)
> **Definitions:** is a  (2)
> **Env Vars:** json (1)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [Explore Agent Garden capabilities](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=0)** - [Instructor] So, the newest of the new is the [[Vertex]] AI Agent Builder set of tools, and there are a lot of them. This is the announcement, basically, and you can see that we have not only tools in the [[Google Cloud Platform (GCP)|Google Cloud]] console in Vertex AI, but we have libraries and code examples aplenty, basically. One thing that was announced recently is the ADK, or the Agent Development Kit. This is a set of libraries that allow you to quickly deploy and develop [[AI Agents]], and it's just a PIP install. So, PIP install [[Google]] ADK. There's quickstarts and tutorials and lots and lots of examples, here. This was announced at Next. In addition to that, we have the Agent Garden. So, if I go to the Agent Garden, these are basically just links to [[GitHub]]. For example, if I click RAG, which is a common one, you can see that it has just a little bit of documentation. But honestly you're going to go to the GitHub, and here's where you're going to have the actual architecture and the examples. So, this is not only RAG, but it's RAG using these new tools, so RAG using the Agent Development Toolkit. Notice here with ADK, you can choose your preferred model or deployment target. You can also use open source, like [[LangChain]], LangGraph, some of the other ones. Another thing that was announced that it was highly anticipated is the Agent2Agent protocol. This is designed to connect agents together so that you can build automated multi-LLM agentic applications more rapidly.
>
> **[1:36](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=96)** And more tools you can see. And something new called the Agent Engine that, in the UI, just says coming soon, basically. (laughs) So, what it is, it is a runtime that eliminates deployment complexity. The idea, again, is tools, tools, tools. This used to be called LangChain on Vertex AI or Vertex AI Reasoning Engine. So, the idea here is that you have a fully managed, enterprise-ready environment to more quickly deploy. And here's a good architecture diagram, or useful one, how this might be deployed. You can see in the front of it, which was probably the most anticipated announcement at Google Next, this idea of enterprise agents called Agentspace. And in fact, this is an area that I will be creating courseware and building actual applications with customers later this year, so look for some course information from me on this as well. But the idea is to take all these various tools and to really empower enterprises to build these combination agentic AI applications with the level of precision and security that they need. So, lots and lots of new words, if nothing else, and lots of new tools to explore. And then, again, I think that's pretty much everything that was announced, but it was a lot of announcements around agentic AI this year at Next. So, to start working with the console that I showed you,
>
> **[3:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=192)** if I go to See existing apps, that'll take me there. It's a little bit tricky to get there in the AI applications console, and I would say it all starts with the data. So, build data stores, and then learn how to build the different app types on top of the data stores, which, this is just a superset of what you see for Vertex AI search. It's got the search, and it also now has the conversation agents and the recommenders. So, that is the starting point before you get into some of these more advanced capabilities, like Agentspaces and the Agent Development Kit.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (5), [[Google]] (2), [[GitHub]] (2), [[LangChain]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (1)
> **Env Vars:** rag (4), adk (3), pip (2), llm (1)
> **Definitions:** is a  (3), is an  (1)
> **UI Navigation:** go to (3)
> **CLI Commands:** pip (2)
> **Tools:** github (2)
> **Prerequisites:** install (2)
> **Analogies:** for example (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=0)** - [Narrator] Thanks for coming along with me on this journey, learning about [[Gemini]] in [[Vertex]] AI and [[Google Cloud Platform (GCP)|Google Cloud]]. To learn more, I've got a couple of resources. First in the API documents, there is a cookbook that [[Google]] constantly updates. It's a [[GitHub]] repo that has really a large amount of examples that are very, very useful, and it's something that you're going to want to take a look at when you are learning and it's well indexed. You can see down here and you can actually open it up in CoLab. So CoLab Enterprise, if you are using [[Google Cloud Platform (GCP)|Google Cloud platform]] for your dev environment. In addition, there are a couple of exciting announcements that there will be more functionality and more courseware coming from me later this year. The first one is the Agent2Agent protocol, which makes agentic [[Generative AI|GenAI]] [[Application Development]] even more fast, basically. So this was launched as of this recording just a couple weeks ago, and you can see that it is a set of tools and libraries that help for agentic AI app development. And then the one that I'm most excited about is the public announcement around Agentspaces, which is the enterprise set of tools that are integrated into Vertex AI that allow enterprises to build agentic AI applications for the enterprise. So this is an area that I'm doing some work in and like I said, I will be also creating some content. So do look for this as you're continuing your journey, learning about Gemini AI applications.
>
> **[1:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=95)** I'm Lynn Langit, thanks for listening.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (2), [[Vertex]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (1), [[Google]] (1), [[GitHub]] (1)
> **Tools:** colab (2), github (1)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** api (1)
> **Exercise Files:** github repo (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Lynn Langit]]

## Skills Covered

- Generative AI
- Artificial Intelligence (AI)
- Large Language Models (LLM)
- Google Gemini

## Path Context

### In [[A Developer's Guide to Google Gemini]]
← [[Google Gemini For Developers]] | **6 of 8** | [[Building with Google Gemini Advanced and Ultra]] →

## Appears In

- [[A Developer's Guide to Google Gemini]]

## Related Courses

_Courses sharing skills:_

- [[Google Gemini For Developers]] — Generative AI, Artificial Intelligence (AI), Google Gemini
- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI), Large Language Models (LLM)
- [[Programming with the Gemini Flash API]] — Generative AI, Artificial Intelligence (AI), Google Gemini
- [[Getting Started with the Google Gemini API]] — Generative AI, Artificial Intelligence (AI), Google Gemini

---

[↑ Back to top](#)