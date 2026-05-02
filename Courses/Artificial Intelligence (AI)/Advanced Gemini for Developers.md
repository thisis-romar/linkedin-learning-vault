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
created: 2026-05-02
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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/creating-enterprise-genai-apps-with-google-gemini?u=76281980&t=0)** - [Lynn] Are you wondering how to build [[Google Gemini]]-based GenAI applications using your enterprise data?
>
> **[0:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/creating-enterprise-genai-apps-with-google-gemini?u=76281980&t=7)** With [[Google Cloud Platform (GCP)|Google Cloud]]'s [[Vertex]] AI suite of tools, you will accelerate time to value as you create and iterate on [[Gemini]]-based AI applications.
>
> **[0:16](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/creating-enterprise-genai-apps-with-google-gemini?u=76281980&t=16)** You'll learn to use Vertex AI tools for testing and managing prompt and model versions.
>
> **[0:22](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/creating-enterprise-genai-apps-with-google-gemini?u=76281980&t=22)** Also, you'll see how to use the agent garden to build agentic AI apps.
>
> **[0:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/creating-enterprise-genai-apps-with-google-gemini?u=76281980&t=27)** My name is Lynn Langit.
>
> **[0:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/creating-enterprise-genai-apps-with-google-gemini?u=76281980&t=28)** I'm a Cloud Architect and AI Developer.
>
> **[0:31](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/creating-enterprise-genai-apps-with-google-gemini?u=76281980&t=31)** I'm looking forward to sharing my experience building enterprise GenAI apps using Gemini on Google Cloud with you.
>
> **[0:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/creating-enterprise-genai-apps-with-google-gemini?u=76281980&t=38)** Let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Vertex]] (2), [[Gemini]] (2), [[Google Gemini]] (1)
> **Speakers:** - [lynn] (1)


### 1. Test Prompts

[↑ Back to Table of Contents](#table-of-contents)

#### [Test prompts with Prompt Tool](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=0)** - [Instructor] When you get ready to start building gen AI applications with your own enterprise data, how do you do that?
>
> **[0:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=6)** Well, hopefully, you've watched my previous course, which is focused on understanding the capabilities of [[Gemini]], and it uses the [[Google]] AI Studio, which you can see is mentioned here in the API documentation.
>
> **[0:20](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=20)** I've got an entire separate course that goes through the fundamentals so that you can collaborate with your business product owners and develop your use cases before you're ready to build with your actual enterprise data.
>
> **[0:31](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=31)** Since you've gone through that, and if you haven't watched that, please stop and watch that 'cause it is a prerequisite to this course.
>
> **[0:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=38)** Then what you're going to want to do is you're going to want to have an environment where you can work that has the security around your data.
>
> **[0:43](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=43)** Now, what would that environment be?
>
> **[0:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=45)** That would be most likely a [[Google Cloud Platform (GCP)|Google Cloud]] project.
>
> **[0:49](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=49)** So for this course, you can either watch my example or you can set up your own project.
>
> **[0:54](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=54)** Please be mindful that resources can cost money.
>
> **[0:57](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=57)** And so be aware of the charges you can incur.
>
> **[1:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=60)** Google does have a new capability though, that I'll show you in just a second, that can mitigate that.
>
> **[1:05](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=65)** So to get started, you want to set up a Google Cloud project for learning, and you can see right on the front dashboard page, to work with Gemini, you just click this blue button, Try Gemini, and that's going to take you into the suite of tools that is called [[Vertex]] AI.
>
> **[1:21](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=81)** Now, Vertex AI isn't just for [[Generative AI]] or for Gemini and other models.
>
> **[1:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=87)** It's for other more traditional machine learning models.
>
> **[1:30](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=90)** The area where we're going to be working, or the areas, is the Vertex AI Studio, you can see on the left, the notebooks and the model garden.
>
> **[1:39](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=99)** Also, we are going to take a preview look at the agent builder.
>
> **[1:42](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=102)** But you can see there's other areas in Vertex AI that do not relate to generative AI.
>
> **[1:49](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=109)** So it's for both traditional and generative AI.
>
> **[1:53](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=113)** It does take you when you click that Use Gemini into their prompting environment, which looks by design a lot like the other tool, the Google AI Studio.
>
> **[2:04](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=124)** So you can see inside of here, we have the different models that we can work with, and we have the latest models.
>
> **[2:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=130)** We have Gemini models.
>
> **[2:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=132)** And if we pass our mouse over 'em, we get the model cards just like you do in Google AI Studio.
>
> **[2:17](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=137)** But the difference here is we're going to have a focus on separating out the production ready or the GA from the experimental, because the idea here is you're moving to a production environment.
>
> **[2:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=149)** Now, I said Google had a mitigating offer that looks like it's new, so I want to make sure and call that out.
>
> **[2:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=154)** When you set up for a Google Cloud, you can get an initial free tier, and they have created a free tier specifically for Vertex AI.
>
> **[2:43](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=163)** So this is new.
>
> **[2:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=165)** And if you want to set up your own learning environment, this is something I think that you might want to take advantage of.
>
> **[2:50](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=170)** So you can see here, it's separate from the Google Cloud free program, and you then have access, I think it's for 90 days, if I remember correctly.
>
> **[3:01](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=181)** And you get, yeah, 90 days in express mode.
>
> **[3:03](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=183)** It is a subset, but it is a step in the ladder moving from experimenting into production if you're new to Google Cloud in particular.
>
> **[3:11](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=191)** So in this course, we're going to be working with Vertex AI.
>
> **[3:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=195)** To kick us off, we can just, you know, put in a prompt here.
>
> **[3:19](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=199)** Notice it has prompt assistance.
>
> **[3:22](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=202)** So, what is [[Google Gemini]]?
>
> **[3:24](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=204)** I'll just do a little prompt just so we can see how this works, and we'll be working with this prompt environment quite a bit.
>
> **[3:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=213)** It's very similar to Google AI Studio but not identical.
>
> **[3:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=217)** Notice I'll just call out to get us started thinking and looking at the interface.
>
> **[3:42](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=222)** You might remember from the previous course that rounding was available in Google, but notice you have this ability here to ground your model responses with your data turned off right now, but.
>
> **[3:53](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-prompts-with-prompt-tool?u=76281980&t=233)** So again, the whole idea is this is the next step in your progression towards production and that you are keeping your data on the Google Cloud probably in buckets or BigQuery, or some other data store, and then you're going to create your generative AI application in a Google Cloud project.

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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=0)** - [Instructor] Now as you're working in [[Vertex]] AI, you maybe are starting here, maybe you haven't used [[Google]] AI Studio.
>
> **[0:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=6)** One thing that I want to point out is the different documentation for the different [[Microsoft Products|products]].
>
> **[0:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=10)** Previous movie, we looked at the [[Gemini]] API documentation, the prompt guidance, which is important, but I also want to call out that we have the [[Generative AI]] on Vertex AI documentation, which to me is a step up from some of the API documentation.
>
> **[0:26](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=26)** It has the enterprise information that you're going to need around securing your application on more rigorous testing.
>
> **[0:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=34)** So there's really two levels of documentation, and I consider the API documentation kind of for proof of concepts and getting started.
>
> **[0:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=41)** And the Vertex AI documentation is what you're going to need for Enterprise.
>
> **[0:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=45)** So let's look at our first topic, which is prompting, which is where you're going to start.
>
> **[0:49](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=49)** Notice that you have the ability to work in different environments.
>
> **[0:52](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=52)** You can use Colab, Colab Enterprise, which is associated with your [[Google Cloud Platform (GCP)|Google Cloud]] project, and we will be using.
>
> **[0:58](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=58)** We can open in a Vertex AI Workbench or a View on [[GitHub]].
>
> **[1:02](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=62)** I really like this [[Prompt Engineering]] workflow because when you're moving from ideation to your first minimum viable LLM application, you're going to put some engineering rigor around prompt management.
>
> **[1:16](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=76)** So you can see here, this shows you basic best practices to define tasks, write prompts, and then test the prompts using Vertex AI services and Gemini APIs.
>
> **[1:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=87)** Evaluate the results, refine the prompts, and then eventually ship.
>
> **[1:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=92)** And then, this is very well written, that's why I wanted to include it in this course.
>
> **[1:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=97)** So content and structure are the key components, and they give you examples.
>
> **[1:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=101)** And then there's a sample prompt template, which is again, very well written, shows an objective and persona, instructions, constraints, output, few shot examples, and then the all important best practices.
>
> **[1:56](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=116)** You know, I've said this in almost every iteration of this Gemini courses that I'm creating, but out in the real world, I see that engineers move quickly, too quickly beyond prompting into model tuning and model refinement and deployment.
>
> **[2:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=130)** And it really takes away from the quality of the applications.
>
> **[2:13](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=133)** [[Large Language Models (LLM)|Large language models]] are based on language.
>
> **[2:17](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=137)** So this focus on prompt engineering and giving it adequate time during the application lifecycle is really the differentiator between whether you're LLM application is going to provide actual business value or not.
>
> **[2:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=152)** Because these are not our traditional [[Algorithms]], these are a new type of approach to computation, and they do require this care and consideration.
>
> **[2:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=161)** So you want to follow everything that's listed here.
>
> **[2:44](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=164)** And notice over to the left, you've got a whole bunch of examples.
>
> **[2:48](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=168)** So match that to your business case.
>
> **[2:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=171)** You know, if you're going to, for example, need the structured output, then you are going to look at the structure of your prompt.
>
> **[2:57](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=177)** Breaking down complex tasks in multiple prompts is another one I see being done incorrectly and affecting the quality of the results.
>
> **[3:05](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=185)** So you can't skip, basically, you need to go through all of these different steps.
>
> **[3:09](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=189)** So the environment itself is designed to have rapid iteration with humans in the loop, initially, because it's got the Web UI.
>
> **[3:18](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=198)** Of course, everything here also has a programmatic element to it.
>
> **[3:22](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=202)** So if I wanted to say, update this based on the persona of a college student, for example, then I could just quickly do that.
>
> **[3:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=215)** And it's just sort of a back and forth.
>
> **[3:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=218)** And it has the sort of, I guess, style change that it thinks college students would like better.
>
> **[3:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=225)** Inside of here, as with the other prompt testing tools, you can switch models, you can see the model cards so that you can understand what Google recommends the model for.
>
> **[3:58](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=238)** You have rate limits, pricing, knowledge cutoffs, so all the information you need.
>
> **[4:02](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=242)** And then you also have the model parameters.
>
> **[4:05](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=245)** So again, if this is all new to you, do see my other course, I go into this in detail, the Structured output, Grounding with Google, and then Safety Filters, Temperature, Token limit, Top-P, and all the other sort of typical parameters that you are going to configure when you work with models in your prompts.
>
> **[4:23](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=263)** Something new that we'll be working with next is this idea of prompt management.
>
> **[4:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/configure-prompt-tool?u=76281980&t=268)** This is a very newly released tool, and the idea here is as you iterate and you go from manual processes to automating testing, you're going to start using this prompt management tool.

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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=0)** - [Instructor] Now as you're moving from prompt testing to application building, you are going to want to take your work from this interface and you're going to want to capture it as code so that you can check it into source control and integrate it to your application.
>
> **[0:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=15)** And [[Google]] has added some capability to make that even easier in this release of [[Vertex]] AI.
>
> **[0:22](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=22)** So if I look at this prompt and I want to move to the next step, I have this new build with code button and I have a couple of options.
>
> **[0:30](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=30)** I can get the code, I can deploy it as an app, or I can open it as a Jupyter Notebook powered by Colab Enterprise.
>
> **[0:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=40)** And in case you're not familiar, I know a lot of people have used Google's public [[SaaS]] Colab, which is a pay for the service, and Google hosts it for many, many years.
>
> **[0:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=51)** Relatively recently, they created a version of Colab called Colab Enterprise, which is notebooks as a service, but inside of Vertex AI.
>
> **[1:01](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=61)** So it's the same idea.
>
> **[1:03](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=63)** It's a Jupyter Notebook, but, and if I click here, you can see it's integrated in [[Google Cloud Platform (GCP)|Google Cloud platform]] via Vertex AI.
>
> **[1:11](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=71)** And it's integrated also to BigQuery as well.
>
> **[1:14](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=74)** So inside of here, if I say yes, I like this prompt, I've done a lot of work on it, I want to open this as a notebook, you will notice that it will open a new Vertex AI window and it will open a Colab Enterprise notebook.
>
> **[1:31](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=91)** And inside of here, you can just start running this, and it will first install the required library.
>
> **[1:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=100)** And I have to authenticate here.
>
> **[1:43](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=103)** So it's pip installing Google Gen AI.
>
> **[1:46](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=106)** And then I'm going to use the library.
>
> **[1:50](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=110)** And notice I have a client, and it's using my current project name [[Gemini]]-langit in us-central1.
>
> **[1:56](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=116)** And here it's capturing the message2_text1 variable, the response.
>
> **[2:03](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=123)** And then down lower here we have in the call to gemini-2.0 -flash in this case, the types.Part.from_text variable is my prompt.
>
> **[2:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=135)** And then notice the update there.
>
> **[2:17](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=137)** Update this based on the persona of a college student.
>
> **[2:20](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=140)** So if I go ahead, after this finishes, and run this, then I will have the API code so that I can start integrating this.
>
> **[2:30](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=150)** Notice it does have the settings as well.
>
> **[2:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=152)** So the temperature, top_p, max_tokens, all that, and that's picked up from that UI.
>
> **[2:39](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=159)** So the idea is, and I have to restart this, the idea is that after you've iterated in that GUI interface, you can capture the code and then you can start integrating this into your [[Application Development]] using this notebook format.
>
> **[2:54](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-colab-enterprise-with-the-gemini-api?u=76281980&t=174)** And once this runs, it'll then show the result.

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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=0)** - [Instructor] So in addition to using Colab Enterprise notebooks, a very new capability in [[Vertex]] AI is the ability to deploy as a Cloud Run app.
>
> **[0:11](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=11)** This is so cool; I don't know how else to say it.
>
> **[0:14](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=14)** So it did take a couple of minutes.
>
> **[0:16](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=16)** I took the prompt that I worked with rather than this example, and this is just a weather example, and I went in the prompt gallery, build with code, and I clicked on deploy as app.
>
> **[0:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=28)** I had to redeploy it twice for it to work properly.
>
> **[0:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=32)** So this is brand new; I'm sure some of the kinks will get worked out here, but the idea is once you have your prompting worked out to push it all the way through, again, for validation from your business owner.
>
> **[0:44](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=44)** It's super neat.
>
> **[0:46](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=46)** So I did get it to work and what happens is it deploys as a Cloud Run service.
>
> **[0:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=51)** So once the deployment is successful, you can see that it shows inside of Cloud Run that it was deployed from Vertex AI.
>
> **[0:58](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=58)** One of the tricky things is you don't want to hit this URL because of the way security is set up.
>
> **[1:04](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=64)** You want to work with the app inside of Vertex AI.
>
> **[1:08](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=68)** So once you have built it, and you have to save the prompt, and you also will be prompted from [[Google]] to turn on all the APIs like Cloud Build and Cloud Run that are needed to have this deployment; it's a one-time process.
>
> **[1:22](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=82)** It took me about 5, 10 minutes for this to get set up.
>
> **[1:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=85)** Then over in this build with code button, this is how you access it.
>
> **[1:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=89)** So a little bit tricky.
>
> **[1:30](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=90)** So you're going to open the app and it builds you a little test harness for a business unit user.
>
> **[1:36](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=96)** So this is our chat.
>
> **[1:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=98)** Remember, we set it up for college students.
>
> **[1:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=100)** So what else can you tell me about [[Gemini]] 2.5 models?
>
> **[1:48](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=108)** You know, it's just a simple little interactive environment that you can use based on your work in the prompt gallery.
>
> **[1:57](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=117)** I think it's a great feature.
>
> **[1:58](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=118)** I can see myself using this with my business product owners really, really frequently.
>
> **[2:04](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=124)** So the documentation is pretty good.
>
> **[2:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=126)** Like I said, I just had to kind of kickstart it a little bit on the deployment.
>
> **[2:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=130)** I think it was two or three times I had to redeploy, and I got error messages, and I just redeployed it.
>
> **[2:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=135)** So hopefully this will work well for you.
>
> **[2:17](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=137)** I would really encourage you to try it out.
>
> **[2:19](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=139)** And, again, the usability tip I would tell you is you have to access this app inside of Vertex AI.
>
> **[2:26](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=146)** Those of us who are familiar with Cloud Run, you know, my first instinct was to go to the URL in Cloud Run, and if you do that, it's going to say don't access this here; the security's not set up.
>
> **[2:36](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-cloudrun-with-the-gemini-api?u=76281980&t=156)** And maybe Google will merge these two as this capability matures, but for right now, this app is deployed and managed and the code for it is available through this interface inside of Vertex AI.

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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=0)** - [Host] Now we've been working in [[Vertex]] AI creating the prompt in this window, and there's a new capability.
>
> **[0:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=6)** And here's the documentation for it, called prompt management.
>
> **[0:11](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=11)** And this is very recently released.
>
> **[0:14](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=14)** It has a web UI in Vertex AI. It also has a new class.
>
> **[0:18](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=18)** So you can see the Vertex AI SDK includes the Vertex AI preview prompts module, so that prompts can work with generative models.
>
> **[0:26](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=26)** The idea here is the web UI helps you to understand the capabilities, but you probably start moving programmatically into working with prompts as basically a data object.
>
> **[0:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=37)** And so you can see that you have an example here of the code to programmatically work with prompts.
>
> **[0:44](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=44)** You can see on the right side you'd save prompt, load, retrieve a prompt, list prompts, list prompt versions, restore a prompt version.
>
> **[0:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=51)** So it's a way of programmatically working with prompts.
>
> **[0:55](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=55)** So in addition to that, you have some other capabilities.
>
> **[0:58](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=58)** If we look at this prompt management web UI and some of them are integrated and [[Google]] is working to integrate more and more, you can see at the time of this recording, for example, the optimize is still in preview.
>
> **[1:09](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=69)** So this is a prompt lifecycle management.
>
> **[1:11](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=71)** So you have write, compare, optimize, and evaluate.
>
> **[1:14](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=74)** And that's what we're going to look at in this section.
>
> **[1:17](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=77)** So the first thing is when you save a prompt in the prompt window where it says create prompt, that's going to be available here.
>
> **[1:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=85)** You could also create a prompt from this prompt management location and that would just open that create prompt window.
>
> **[1:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=92)** You can import a prompt and there's a certain format that you need and that's shown here.
>
> **[1:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=98)** We also have this help on writing.
>
> **[1:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=100)** So this is integrated into this UI and also the create prompt UI.
>
> **[1:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=105)** If I click this and I click open and we say, write your prompt example, what is [[Gemini]] 2.X model capabilities?
>
> **[1:58](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=118)** Okay, and then I'm going to generate prompt.
>
> **[2:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=120)** This isn't going to make a call out to the model and answer the question.
>
> **[2:04](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=124)** This is going to rewrite the prompt.
>
> **[2:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=127)** And so we have a suggested system instruction and then we have a suggested prompt.
>
> **[2:13](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=133)** So the thinking around this again, is this whole idea of how to talk to the models is new for most people.
>
> **[2:21](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=141)** And so this is actually using GenAI to optimize the prompt for GenAI.
>
> **[2:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=147)** It's kind of meta, it's something that a lot of my customers are finding useful.
>
> **[2:31](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=151)** And then if you want to, you can insert and where will it insert?
>
> **[2:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=155)** It inserted it into the create prompt window.
>
> **[2:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=158)** And then you can go ahead and run this prompt and see if this is something that you're interested in, if it looks good.
>
> **[2:48](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=168)** And then once it's complete, it's pretty extensive here.
>
> **[2:54](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=174)** You can refine it if you want to, or you can save it and it gives it a title.
>
> **[3:02](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=182)** You have the ability to auto save if you want to.
>
> **[3:04](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=184)** And once you save it, where are you going to find it?
>
> **[3:08](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=188)** Once it saves, you're going to find it in the prompt management area.
>
> **[3:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=192)** And it does take a minute to save. Again, new functionality.
>
> **[3:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=195)** I'm sure Google will be optimizing this.
>
> **[3:18](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=198)** Let's see if it's already there.
>
> **[3:21](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=201)** No, we have to wait for it to save.
>
> **[3:24](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=204)** So I'll give it a minute to save. Oh, there we go.
>
> **[3:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=207)** And it's a little bit un-intuitive.
>
> **[3:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=209)** It has that popup that says is not saved, and it really is, again, these are little rough edges that I'm sure Google will refine.
>
> **[3:36](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=216)** And then here you have your prompt that you could work with.
>
> **[3:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=218)** So notice back in the create prompt, you also have the help me write, which looks the same way.
>
> **[3:44](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-write-prompts?u=76281980&t=224)** And this is something I'd really recommend that you use because it's not going to hurt, and it could help in the structure of your prompting as you're forming that and building your application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vertex]] (4), [[Google]] (3), [[Gemini]] (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** sdk (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [host] (1)

#### [Use Prompt Management to compare prompts](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=0)** - [Host] The next step in prompt management is to use the new compare prompt tool.
>
> **[0:04](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=4)** And there's two ways to access this through the Web UI.
>
> **[0:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=7)** You can either open it from prompt management, however, it's not as intuitive as if you open it from the create prompt and I'll show you what I mean.
>
> **[0:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=15)** If I wanted to take one of these saved prompts and I wanted to use that as a basis for comparison, I can't for some reason here.
>
> **[0:22](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=22)** So if I say compare a save prompt, it says I can't do this if I have a history from within this tool.
>
> **[0:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=28)** So I thought, okay, I want to see if I can do it from the other interface, and it does work that way.
>
> **[0:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=34)** So again, this is probably something that [[Google]] will update over time.
>
> **[0:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=38)** So if I open this prompt and I open the compare tool from the prompt, and I say continue, it will load it in, which is what I wanted it to do.
>
> **[0:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=51)** So the idea here is that I can compare both prompts and different models.
>
> **[0:55](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=55)** So right now the tool is executing the prompt against the model that's shown.
>
> **[0:59](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=59)** Now if I want to compare a new prompt, it's going to load the existing prompt, which is the behavior that I want.
>
> **[1:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=66)** So the way I would use this is I would open it, not from prompt management, I would open it from create prompt currently.
>
> **[1:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=72)** So again, just to kind of make an artificial example, I'm just going to make this really simple and then take out all the instructions and not even put a question mark.
>
> **[1:24](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=84)** I'll use the same model for right now, and then I'm going to say apply.
>
> **[1:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=88)** So now I can submit the prompts or it looks like it's going to auto submit.
>
> **[1:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=94)** And I could then review the output to see which one was a better fit.
>
> **[1:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=100)** Also inside of here, I could edit and I could change the model.
>
> **[1:44](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=104)** I love this.
>
> **[1:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=105)** I mean, this is something that I'll use just all the time because this is the way that I work.
>
> **[1:50](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=110)** It's a great tool and I really thank Google for making it.
>
> **[1:54](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=114)** So it's something that hasn't been available for very long, and there were less automated ways to do this before this tool was available, so this is something that I think will be a part of everybody's development lifecycle.
>
> **[2:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=127)** Again, there are APIs behind this, so once you become more advanced as a developer, you can do this programmatically.
>
> **[2:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-compare-prompts?u=76281980&t=135)** But I really like this idea of having the Web UI in prompt management so that you can get a sense of the life cycle 'cause this is new for all of us.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Google]] (2)
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1)
> **Speakers:** - [host] (1)

#### [Use Prompt Management to optimize prompts](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=0)** - [Instructor] The next step in prompt management is to optimize the prompt, and notice this is in preview at the time of this recording.
>
> **[0:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=7)** This is a set of APIs and best practices to programmatically optimize your prompt before you evaluate the model performance, which again, goes all the way back to what I've been saying throughout this course, the importance of appropriate engineered prompt management and engineering.
>
> **[0:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=25)** So the way that this works is it uses a notebook, but before we go there, I want to go to the documentation.
>
> **[0:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=32)** So you can see this is really, really early in its release, so I'm sure some of the features are going to have some of the rough edges smoothed out by the time you watch this.
>
> **[0:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=41)** So you can see that this is explaining how this works, so [[Vertex]] AI prompt optimizer to automatically optimize prompt performance by improving the system instructions for a set of prompts, and you can improve your prompts at scale without manually rewriting system instructions or individual prompts.
>
> **[0:59](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=59)** Super useful.
>
> **[1:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=60)** So you got a lot of different examples here, and the key concept is, we are going to improve prompts by evaluating the model's response to sample prompts against specified evaluation metrics.
>
> **[1:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=72)** To use this, you have to have your set of sample prompts, and again, in the docs here, it says you can run it with as few as like examples, but they recommend 50 to 100, system instructions, and a prompt template.
>
> **[1:26](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=86)** So then they have an example, so they're talking about being a chef.
>
> **[1:30](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=90)** Here is your template, question, and facts, and you have some sample prompts.
>
> **[1:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=97)** and then I think this is really the meat of this.
>
> **[1:39](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=99)** How this actually works is you choose an optimization mode, evaluation metric, and target model, and you want to say, for the mode, are you optimizing for the system instructions, those sample prompts, or both?
>
> **[1:54](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=114)** The metric, so you're going to select which metric you're going to evaluate against, and then the target model.
>
> **[2:02](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=122)** So as you can see, at the end of the job, the Vertex AI prompt optimizer outputs the optimized system instructions with their evaluation score, and so it'll show the instructions, and this is supported for [[Gemini]] and Gemini Experimental models, so the 2.X series, and here's a list, I think this is pretty important to understand how this works, of supported evaluation metrics, so you have model-based, things like summarization, question answering, coherence, safety, groundedness.
>
> **[2:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=149)** That's one I definitely use. How grounded is the response?
>
> **[2:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=152)** I have a lot of use cases that appropriate use of groundedness.
>
> **[2:36](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=156)** Human healthcare, for example, is really, really important for the business use case.
>
> **[2:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=161)** Computation-based is the tool use and function calling occurring, as you would think, and the general text generation, and here, it gives you the process of how you set this up, and then in the optimized prompts, it talks about this example notebook.
>
> **[2:57](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=177)** So if you click this open notebook, it's going to open in Colab Enterprise.
>
> **[3:02](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=182)** and you are just going to go ahead and authenticate, install packages and libraries, then create your prompt template, configure your project settings, your input and output.
>
> **[3:14](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=194)** Your input is where you're going to have your samples, and they have to be in a certain format, and here's the link to where you'd use that, and here's where they're saying use 50 to 100 samples.
>
> **[3:24](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=204)** So I'll certainly be trying this out, either when I have a customer that needs it or when [[Google]] provides me with a sample library, and then you configure the optimization settings.
>
> **[3:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=213)** so the target, model, the optimization mode, evaluation metrics, translation source field name, and then you can do advanced optimization, and gives a reference, and then you run the prompt optimizer, and then you get the results.
>
> **[3:53](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-optimize-prompts?u=76281980&t=233)** So I'm really excited to try this out because it is an automated way of looking at the prompt, and this is something that I haven't really had in my toolbox, so as I continue to work with this, I will post on my [[GitHub]] repo with my progress.

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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=0)** - [Narrator] Automating the evaluation of model performance is really the crown jewel of all the tools in the Prompt Management suite.
>
> **[0:09](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=9)** This is such a powerful set of tools that I have been exploring with my customers and really excited to share with you here.
>
> **[0:18](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=18)** This is something that could actually warrant a course all on its own because [[Google]] provides a number of very configurable and powerful tools to automate the evaluation of different models, different prompts, as you are building.
>
> **[0:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=33)** So to start, before we go into the notebook, you should take a look at the evaluation process because again, in the world of LLM application building, automating and applying engineering principles to this is so new that I find that I really don't have any customers that have their heads around this yet.
>
> **[0:53](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=53)** So we're all in the beginning phases.
>
> **[0:56](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=56)** So read through the process.
>
> **[0:57](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=57)** You have to define the metrics and in particular the second bullet there.
>
> **[1:03](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=63)** Evaluate a single model pointwise or determine the winner when comparing two models, pairwise.
>
> **[1:08](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=68)** That's really important.
>
> **[1:09](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=69)** Pointwise or pairwise comparison.
>
> **[1:11](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=71)** And then we can have custom metrics as well.
>
> **[1:14](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=74)** Then you need an evaluation data set.
>
> **[1:16](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=76)** You run evaluations and then you interpret the results.
>
> **[1:20](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=80)** Notice under the optional here.
>
> **[1:21](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=81)** You can use something called a judge model and also some advanced techniques.
>
> **[1:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=87)** So if I open that up, what's a judge model?
>
> **[1:30](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=90)** A judge model, as it says here, is a augmentation to using human judges.
>
> **[1:36](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=96)** There's always going to be human in the loop for all of our LLM app development, as there should, but it can be really expensive.
>
> **[1:43](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=103)** In my case, you know, working with doctors and pathologists, their time is very, very valuable.
>
> **[1:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=111)** So augmenting their evaluation with a judge model is something that I am really looking forward to sharing with my clients in human healthcare.
>
> **[2:01](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=121)** So judge model is more scalable.
>
> **[2:03](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=123)** The Gen AI evaluation service uses a configured [[Gemini]] 2.0 flash model by default as a judge model.
>
> **[2:09](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=129)** But you can customize that and here it talks about how to prepare.
>
> **[2:14](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=134)** So I will tell you that when you go to this notebook, I spent, oh gosh, I think two hours and I didn't get all the way through it.
>
> **[2:22](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=142)** So you're going to want to plan an afternoon to really understand how this works.
>
> **[2:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=148)** But just to kind of get us started with this, we're not going to go all the way through it, you know, do open the table contents.
>
> **[2:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=155)** So you're going to use the [[Vertex]] AI [[Python (Programming Language)|Python]] SDK for Gen AI evaluation for models, including Gemini and also some other models at the end, they have some third party models.
>
> **[2:47](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=167)** So the Gen AI Evaluation Service.
>
> **[2:49](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=169)** You can assess and enhance your models and applications.
>
> **[2:52](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=172)** You can use this for your ideal model, helping to pick the right model, the model type, the model version, optimizing your prompt template, evaluating fine tuned checkpoints.
>
> **[3:02](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=182)** So you got all these engineering tools.
>
> **[3:04](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=184)** So in this tutorial we've got three use cases.
>
> **[3:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=187)** We can run an evaluation on 1P models, so we can learn how to evaluate Gemini models and we can explore different metrics and techniques.
>
> **[3:16](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=196)** And we can leverage the SDK for in depth analysis and comparison of Gemini model variants.
>
> **[3:21](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=201)** And since this is a Gemini course, we'll focus on that.
>
> **[3:24](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=204)** I do know though, and I do have customers that use third party and open models such as [[LLaMA]].
>
> **[3:30](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=210)** And then we also have Claude 3.5 here.
>
> **[3:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=213)** So this really long example has the third party models at the end.
>
> **[3:39](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=219)** And then we have [[Prompt Engineering]].
>
> **[3:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=221)** Explore the impact of prompt design on model performance.
>
> **[3:43](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=223)** 'Cause these two things go hand in hand and then links to the documentation.
>
> **[3:48](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=228)** So the first thing is you have to pip install the service.
>
> **[3:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=231)** So it's [[Google Cloud Platform (GCP)|Google Cloud]] AI platform evaluation, and then install, you know, if you're using Anthropic, in this case, an open AI.
>
> **[3:58](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=238)** And then restart the runtime.
>
> **[4:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=240)** And I ran all these steps in advance.
>
> **[4:02](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=242)** And then because we're in Google Cloud, we just have to set our project and our location.
>
> **[4:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=247)** And then this is the libraries that we're going to use.
>
> **[4:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=250)** And then we're going to load an evaluation data set.
>
> **[4:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=252)** We're going to use 10 samples from the first a hundred rows of the train split of OpenOrca dataset.
>
> **[4:18](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=258)** And it's a collection of augmented FLAN collection data.
>
> **[4:22](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=262)** And there is 1 million [[GPT-4]] completions and 3.2 million GPT 3.5 completions.
>
> **[4:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=267)** It's tabularized in alignment with the distributions presented in the Orca paper, and currently represents a partial completion of the full intended data set.
>
> **[4:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=275)** So training and evaluation.
>
> **[4:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=277)** So we're just loading the data set and then we preview it and basically we can see it's a prompt with a question and a reference.
>
> **[4:46](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=286)** So on the first party models, the Gemini models, which is where we're focusing here.
>
> **[4:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=291)** So we're going to run the evaluation.
>
> **[4:54](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=294)** And again, we can do this to quickly evaluate different Gemini models, 2.0, 2.5, flash versus pro, and we can analyze prompt templates.
>
> **[5:03](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=303)** So we've got this eval task class.
>
> **[5:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=306)** This is our core component.
>
> **[5:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=307)** It allows us to define and run evaluation jobs, providing us with a structured way to measure the performance.
>
> **[5:14](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=314)** So this is a blueprint for evaluation.
>
> **[5:16](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=316)** So this is really the key and core of this.
>
> **[5:19](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=319)** So supported metrics are available.
>
> **[5:23](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=323)** So the datasets can be [[Pandas (Software)|pandas]] data frame, Python dictionaries or file path your eyes.
>
> **[5:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=328)** So you have bring your own response, performing model inference without a prompt template or performing model inference with a prompt template.
>
> **[5:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=340)** So we're going to define a model.
>
> **[5:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=341)** Here we're using 2.0 flash and we've got the model config, the temperature, so on and so forth.
>
> **[5:46](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=346)** And then here's our eval task.
>
> **[5:48](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=348)** So we're using the metric that's defined there.
>
> **[5:53](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=353)** And a tip I'll give you, when I clicked on view evaluation results, I had to add, create a bucket and add it.
>
> **[5:59](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=359)** And it told me that, otherwise you can only see them down here.
>
> **[6:02](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=362)** But if you want to see them integrated, and you can see this is the score that was produced by this metric.
>
> **[6:08](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=368)** And then you can see the scoring for each of the point-wise evaluation results, you need to have that bucket and add that line.
>
> **[6:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=375)** And it'll tell you that when you run this.
>
> **[6:18](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=378)** You can also then see those same results by just calling display.
>
> **[6:24](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=384)** And here's using pointwise metrics.
>
> **[6:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=387)** So it's the pairwise or the pointwise.
>
> **[6:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=389)** And this is listed over here.
>
> **[6:31](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=391)** So that's one important aspect of this.
>
> **[6:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=395)** And then again, you have the different metrics, and these are all defined in the documentation.
>
> **[6:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=401)** So you can look at the pre-built metrics and you can run your evaluation.
>
> **[6:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=405)** And again, if you add a line to your bucket to this particular code block, then you can view the evaluation results.
>
> **[6:53](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=413)** And you can see for the metric.
>
> **[6:54](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=414)** I just went with the coherence, and then you can see the coherence scores.
>
> **[6:58](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=418)** So you kind of get the basic flow.
>
> **[7:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=420)** You need to figure out the metric, create an eval task, and you need to figure out pairwise or pointwise.
>
> **[7:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=426)** And then you can run your samples against it.
>
> **[7:09](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=429)** And you can see here, again, there's the output, and you can also build your own point-wise metric.
>
> **[7:17](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=437)** So you've got the built-in ones and you can build your own.
>
> **[7:20](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=440)** This functionality is really game changing, and this is something that if you take away nothing else from this course, rewatch this module, work on this notebook until you can start to use it.
>
> **[7:30](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/use-prompt-management-to-evaluate-prompts?u=76281980&t=450)** Because automating the model evaluation is a key differentiator in the quality of your LLM applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Gemini]] (7), [[Python (Programming Language)|Python]] (2), [[Google Cloud Platform (GCP)|Google cloud]] (2), [[Google]] (1), [[Vertex]] (1)
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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=0)** - [Instructor] In addition to using [[Gemini]] in your LLM application, it's becoming increasingly common to use multiple types of [[Generative AI]] models, because there are different categories.
>
> **[0:11](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=11)** There are open source, there are task-specific, and [[Vertex]] AI interface accounts for this in the Model Garden.
>
> **[0:19](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=19)** So the Model Garden has access to Gemini in its model families, but it also has access to literally hundreds of other types of models.
>
> **[0:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=29)** So if I were to click on Gemini, it's just going to take us back where we've already been, which it was the Vertex AI Studio, so that's familiar territory.
>
> **[0:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=38)** But if we wanted to see what models were available other than Gemini, sort of a typical use case that I have for my customers who are health researchers is, they might start with Gemini, and then they might want to use some of Gemini's capabilities in an open model, and that model is Gemma.
>
> **[0:56](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=56)** So this is talked about in the Model Garden overview here.
>
> **[1:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=60)** Gemma is the open version of Gemini, so it is commonly used in research publications and when custom data is added via [[Fine Tuning]].
>
> **[1:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=70)** So let's take a look at that process.
>
> **[1:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=72)** So if we go back to the Model Garden, if we weren't aware of what models were there, we could go to the filters here, and we could say, okay, I want to use some sort of [[Google]] model, and I want to use an open source model, what should I use?
>
> **[1:26](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=86)** And here's our recommendation to use Gemma 3.
>
> **[1:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=89)** And this talks about the differences between Gemma and Gemini.
>
> **[1:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=93)** And to work with these models, what you need to do is, you need to deploy them to an endpoint.
>
> **[1:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=100)** And an endpoint is basically a hosting environment where you can make [[Representational State Transfer (REST)|rest]] calls or API calls and test them out.
>
> **[1:48](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=108)** So you can deploy here to just an endpoint, or if you want to scale this up, you can deploy to [[Kubernetes]].
>
> **[1:54](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=114)** And once you deploy, then you can select the endpoint in this interface and just quickly test.
>
> **[2:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=120)** Now, one of the things that I found is, even though this appears to be deployed, I can't select this interface, which is a little bit annoying.
>
> **[2:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=127)** And I'll show you what I mean.
>
> **[2:09](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=129)** So if I go back to the Model Garden and I look at View my endpoints & models, 'cause I did this deployment, I do have an endpoint for Gemma here that is active.
>
> **[2:21](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=141)** So I think that's just something Google needs to address in the Web UI, because this is actually active.
>
> **[2:26](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=146)** So you can use that Web UI to test it, or what you can do is, and I'll just search, there's Gemma, once you have the deployment set up, is you can work with a notebook.
>
> **[2:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=158)** And again, I ran this a little bit earlier.
>
> **[2:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=161)** Let me just go to Colab, 'cause there's so many different notebooks here.
>
> **[2:46](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=166)** And I ran this notebook for Gemma, and I had a couple of just scotches here, so I just want to share that with you.
>
> **[2:54](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=174)** So basically this notebook is how you deploy to that endpoint.
>
> **[2:59](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=179)** So, you set your [[Google Cloud Platform (GCP)|Google Cloud]] project, and it warns you about quota, because you're going to be using GPUs, so make sure you have a quota in the project.
>
> **[3:08](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=188)** And then you select the base model, and of course there's different capabilities in the model.
>
> **[3:13](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=193)** And then, I didn't get this first thing to work, and it did take well over an hour, so if you're trying to use this notebook, there's two options for deployment, and the second one appeared to work, and then I was able to do a prediction through the notebook, and then get my response, basically.
>
> **[3:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=212)** So you had to kind of coax it along a little bit, but that's the sort of process for this.
>
> **[3:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=217)** So once you pick your model, you're going to deploy it to an endpoint, and then most of these models have sample notebooks that you then are going to work with in Colab Enterprise.
>
> **[3:48](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=228)** And once the endpoint, let me go back here and show you where you can see the endpoints, once the endpoint and the model are deployed, then you use the notebook to have API calls to test.
>
> **[4:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=240)** So you can see, I've actually got another one that I'll be showing later here, but I have the Gemma model, and I have the Gemma endpoint here.
>
> **[4:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=247)** Now do be aware, if you're doing this on your own, these endpoints are basically running on [[Virtual Machines]], and so they will incur charges.
>
> **[4:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-gemini-and-gemma-models?u=76281980&t=255)** So make sure that when you're done testing this out, that you delete the endpoints and remove them from your project, 'cause you don't want to have unexpected charges.

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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=0)** - [Instructor] So this question of, "Which model should I use as I am building out my LLM application?" is a really difficult one.
>
> **[0:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=7)** And I built this course in order of the way that I'm actually working with my customers.
>
> **[0:13](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=13)** We generally start with [[Google Gemini]], because they have their data in [[Google Cloud Platform (GCP)|Google Cloud]] and the ecosystem around [[Gemini]] is most fully mature.
>
> **[0:23](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=23)** And for some business use cases, that works just great.
>
> **[0:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=27)** Now, there are some more complex cases, and then I also work with researchers, who need to publish their findings.
>
> **[0:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=34)** And so they will maybe start with a commercial model, and then they might augment or add with open-source models.
>
> **[0:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=41)** And they might use Gemma, but the one that is getting a lot of attention is [[LLaMA]].
>
> **[0:46](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=46)** And you can see that, if you look at the interface here, it's right at the top, Llama 4.
>
> **[0:52](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=52)** Now, one of the things that's really interesting, and of course, this is an open-source model from Meta, is that, if I click on View model here, I have a service.
>
> **[1:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=60)** So what [[Google]] has done, it's interesting, is they have set this up as a service and deployed it for you so that you don't have to go through the process of deploying an endpoint, like I had to do for Gemma.
>
> **[1:13](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=73)** And you know, it took an hour or so and was kind of back-and-forth to get it set up.
>
> **[1:18](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=78)** So if I click on this service, and the first time that you do it, you have to agree to their service terms and all that kind of stuff.
>
> **[1:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=85)** You just have to click Yes a couple of times.
>
> **[1:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=87)** So you can work in a notebook, but you can try out the service with an endpoint that is provided by Google.
>
> **[1:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=94)** Now, of course, this is very throttled.
>
> **[1:36](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=96)** This is just for you to get started.
>
> **[1:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=98)** And if you're going to do any sort of [[Load Testing]], you're going to have to deploy your own endpoint.
>
> **[1:43](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=103)** But if I say, "What is Meta Llama 4 best used for?"
>
> **[1:50](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=110)** some generic prompt here, this can get me started.
>
> **[1:55](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=115)** And I can just have this quick little interface, which is really kind of handy.
>
> **[1:59](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=119)** That's why there's no region here, because this is actually hosted by Google.
>
> **[2:02](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=122)** It's a service.
>
> **[2:03](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=123)** And again, notice they're going to be charging you for this.
>
> **[2:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=126)** If you were doing your quick interactive testing and you wanted to then build your own test harness for your use case, then you would open a notebook.
>
> **[2:16](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=136)** And I'm sure you know where this is going to open, in Colab Enterprise.
>
> **[2:20](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=140)** And in here, you would then follow the steps here to set up, and you wouldn't have to set up an endpoint, 'cause you're using this Llama 4 service.
>
> **[2:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=152)** So this is kind of a new paradigm.
>
> **[2:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=154)** Most of the other models, like 99% of the models in Model Garden, you have to set up the endpoint, which is basically a VM infrastructure that Google sets up for you.
>
> **[2:46](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=166)** So I kind of like this.
>
> **[2:47](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=167)** I hope they do more of this, because it makes testing really, really easy.
>
> **[2:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=171)** One thing I want to point out is that a huge number of models in the Model Garden and the filters.
>
> **[2:57](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=177)** So you can see on the left side, you have filters around modalities, filters around tasks.
>
> **[3:03](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=183)** And Google is adding to this like constantly.
>
> **[3:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=186)** Model collections, the providers.
>
> **[3:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=190)** You can see they have 22 models from Meta.
>
> **[3:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=192)** That's pretty impressive.
>
> **[3:13](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=193)** Anthropic is another really popular one for a source model.
>
> **[3:17](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=197)** And then the features, which ones are integrated to [[Vertex]] AI Studio.
>
> **[3:21](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=201)** That's the prompt environment.
>
> **[3:24](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=204)** Which ones have an API available, which ones are open source.
>
> **[3:26](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=206)** That's a really common requirement.
>
> **[3:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=209)** Which ones have deployability for Google [[Kubernetes]] Engine and which ones have a demo.
>
> **[3:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=214)** So really usable interface to find models, whether you're just looking for a set of open-source models, you know, in the Llama family, or if you look in the partners here, you know, Anthropic or models that are hosted on [[Hugging Face]] or models that are very task-specific.
>
> **[3:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=231)** So this is a direction that I'm seeing a lot of my customers go in.
>
> **[3:55](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=235)** Like I said, they'll start with Gemini if they're coming from Google platform, and then they will kind of branch off and augment their applications with additional models.
>
> **[4:05](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=245)** So there'll be a multi-model, which is used in agentic solutions, 'cause agents are using different models for different tasks.
>
> **[4:13](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=253)** So this is really the cutting edge of LLM app development, but looking in the Model Garden and at least looking what's there before you go to this process of trying to fine-tune or tune another model.
>
> **[4:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=268)** There could be, for example, if you have something in the medical realm, you have a radiology model, you have pathology model, now a dermatology model.
>
> **[4:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-open-source-models?u=76281980&t=275)** You might want to at least take a look at those before you go and fine-tune on a model that is more generic.
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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=0)** - [Instructor] All right, let's say that I have a human biology specific task that I need to do as part of my LLM application and I want to search to see in Model Garden if there are any models that are going to help me.
>
> **[0:14](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=14)** So if I start typing the [[Microsoft Word|word]] bio, I can see that I've got two models that have bio in the name, which is helpful, but might not meet my specific need.
>
> **[0:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=25)** So I have BioGPT and BiomedCLIP.
>
> **[0:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=28)** One is about literature and the other one is about vision.
>
> **[0:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=32)** Also, notice I could click over here to Radiology, for example.
>
> **[0:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=37)** And if that was my use case, I could take a look at that foundational model, and I could say, "Okay, are these my use cases?
>
> **[0:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=45)** Do I need this kind of classification?"
>
> **[0:48](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=48)** Notice for deployment, I would have to deploy to an endpoint.
>
> **[0:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=51)** And again, once I would do that, I'll show what that UI looks like.
>
> **[0:56](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=56)** I would just specify in which location, what type of VM, and this is really a misnomer.
>
> **[1:02](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=62)** It often takes an hour or more to deploy.
>
> **[1:05](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=65)** It's just not a quick process.
>
> **[1:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=67)** I mean, it's not terrible, but it's not instantaneous.
>
> **[1:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=70)** I noticed you have Advanced settings as well, so you can have availability on policies and whether the endpoint is public.
>
> **[1:17](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=77)** The idea here is that you're creating a wrapper around this particular service so you can call it via a [[Representational State Transfer (REST)|REST]] call or a regular type of a call.
>
> **[1:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=85)** And you can also deploy this programmatically.
>
> **[1:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=87)** It shows you the code on how to do that.
>
> **[1:30](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=90)** So anyway, so once that's deployed, then you would use your notebook and then you can work with the model.
>
> **[1:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=98)** Well, in addition to the models that are available from the Model Garden, I mentioned in the previous video and now we'll talk about it in a little bit more detail, you have this partnership with [[Hugging Face]].
>
> **[1:49](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=109)** And if you're not familiar with Hugging Face, this is a model and data registry that has literally more than 1 million models.
>
> **[1:58](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=118)** So if we go over to Models, and we type bio, just to show you the difference, in Model Garden, we had two.
>
> **[2:05](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=125)** Here we have 5,091.
>
> **[2:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=127)** I don't know if that's better (laughs) because, you know, I'm not going to look at all 5,000 of them.
>
> **[2:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=132)** But the point is there's a greater variety here.
>
> **[2:16](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=136)** Now, for certain of the models, there's an integration.
>
> **[2:19](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=139)** What does that mean?
>
> **[2:21](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=141)** So I have a subset of the models.
>
> **[2:23](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=143)** So if I type bio, and here I have, I don't know how many, but some number of them.
>
> **[2:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=149)** And if I want OpenBioLLM, this seems good to me.
>
> **[2:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=153)** What do I have to do to be able to use this on my data in [[Google Cloud Platform (GCP)|Google Cloud]]?
>
> **[2:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=157)** I have to deploy it to a [[Vertex]] AI endpoint.
>
> **[2:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=160)** So that's the sort of commonality here.
>
> **[2:43](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=163)** Now, why do we have this interface?
>
> **[2:44](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=164)** Because there is some libraries in Hugging Face that these models that are deployable have, they're basically like wrapper libraries, and this is talking about quota.
>
> **[2:57](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=177)** And again, same type of idea.
>
> **[2:59](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=179)** They need to change that to many minutes to deploy.
>
> **[3:01](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=181)** But anyway, (laughs) once this is deployed, then you're going to have a sample notebook as well.
>
> **[3:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=186)** So it's basically the open models on Hugging Face that are deployable from the Model Garden have a little bit more [[Metadata]] to make it simpler to deploy.
>
> **[3:16](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=196)** Now, if you're on the Hugging Face side, and I pick a model here, just pick BioGPT, notice you can deploy to some of the other major clouds, but they don't have a Google Cloud interface inside of Hugging Face.
>
> **[3:31](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=211)** So that's one reason that you have this interface inside of the Model Garden.
>
> **[3:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=217)** So if this is daunting to you, you're not alone.
>
> **[3:39](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=219)** In this wild, wild west of LLMs, it is very hard to keep up.
>
> **[3:44](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=224)** And that's why having tools such as Model Garden, which if you have a Hugging Face model that you can see in here, you know it's deployable, and it has basically the metadata that you need.
>
> **[3:56](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=236)** And also the simple things like the filters can really help.
>
> **[4:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=240)** But I will tell you that you really want to come in here and search, like, all the time during the life cycle of building your application, because [[Google]] is adding more and more models here, which is great, because then you have this standard, you know, if I click on any of 'em, I have this standard interface on how to deploy them.
>
> **[4:17](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=257)** And then once they're deployed, I have the example notebook which helps you get up and running, 'cause you don't have that in some of the other environments where models are.
>
> **[4:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-hugging-face?u=76281980&t=265)** So, my recommendation is, if you're going to use a Hugging Face model, try to use the models that have been set up to be deployed from the Model Garden first, rather than going out to Hugging Face and trying to figure out how to do it for any model that you might find here.

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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=0)** - [Instructor] A key question around building LLM applications is when should you use a commercial model like [[Gemini]] and when should you use an open source model?
>
> **[0:08](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=8)** It's a hard question.
>
> **[0:09](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=9)** So I'm working a lot in the medical domain and I'm working with both researchers and clinicians and different situations have different use cases 'cause you have in some cases PHI or patient information.
>
> **[0:23](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=23)** In some cases, it's anonymized.
>
> **[0:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=25)** In some cases you can use public data.
>
> **[0:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=27)** So all these things come into play when you're building your application.
>
> **[0:30](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=30)** So one of the things that I've been working on lately is analyzing not only text but images.
>
> **[0:36](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=36)** So DICOM images.
>
> **[0:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=37)** So one of the things that I was working on, I just wanted to show in here because it gives a real world scenario in using both Gemini models and other types of models.
>
> **[0:48](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=48)** So the model, and I can't remember the name now, it's called Path Foundation.
>
> **[0:52](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=52)** So the model is for analyzing images.
>
> **[0:57](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=57)** So Path Foundation produces embeddings that can be used to efficiently train classifier models for pathology analysis tasks on HE patches from whole slides.
>
> **[1:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=67)** So great, this model is here, fantastic.
>
> **[1:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=70)** And it was something that I wanted to work with.
>
> **[1:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=72)** So the first thing that I would need to do to work with this model is what, do you remember?
>
> **[1:17](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=77)** I would have to deploy it and I would to deploy it to an end point.
>
> **[1:20](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=80)** So I did that and it took an hour and a half or so.
>
> **[1:23](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=83)** And once that was done and the way that I was validating that, let me just show you here, let me go back to the model garden, is I was waiting for the model.
>
> **[1:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=95)** There's the model to be deployed and the endpoint.
>
> **[1:39](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=99)** Then once I had that, then let me go back.
>
> **[1:43](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=103)** I wanted to work with the sample notebook and I thought, great, I'm ready to go.
>
> **[1:47](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=107)** Well I'm showing you this 'cause it's not always so easy, particularly depending on the type of data that you have.
>
> **[1:52](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=112)** So I clicked open notebook and I started working on the notebook and I ran the import.
>
> **[2:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=120)** I set up [[Google Cloud Platform (GCP)|Google cloud]] environment and I used this library for the type of image data, DICOM data.
>
> **[2:08](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=128)** I imported the deployed model.
>
> **[2:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=130)** I had to fill in the endpoint ID and the region that I got from that previous screen.
>
> **[2:16](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=136)** And then I was saying, okay great, I can do my predictions.
>
> **[2:20](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=140)** So it uses the path foundation model and it leverages the library to generate embeddings for a single patch and it's using information stored in the cloud, healthcare DICOM store and [[Cloud Storage]].
>
> **[2:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=154)** And I was ready to go, but unfortunately I got blocked.
>
> **[2:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=160)** Because of the nature of this data, I had to get approval to access a research endpoint, which I'm running out of time for this course.
>
> **[2:50](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=170)** So I'm not going to wait to do that.
>
> **[2:52](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=172)** But the reason that I'm taking you down this path is because on these custom LLMs, whether it's access to the model itself, depending on where it's hosted or whether it's access to the data that you can use to test or work with the model, there's often complexities there that are not obvious until you get into it.
>
> **[3:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=190)** So you really want to monitor the amount of time it takes you to work with these open models and the authorizations and the setup you have to do and balance that with the commercial model.
>
> **[3:22](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=202)** Going back to Gemini.
>
> **[3:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=205)** Now, Gemini is not going to work, for example, for published research cases 'cause the model needs to be part of the research.
>
> **[3:31](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=211)** But for some of the clinical cases, for example, it could work just fine and it could be a lot more efficient than some of these customized models, which require a lot more of the authorizations and the setups and a lot more steps to work with and don't have the libraries and the tools and the testing that I showed in earlier parts of this course for Gemini automated evaluation and prompt guidance and all that kind of stuff.
>
> **[3:55](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/test-medical-open-source-models?u=76281980&t=235)** So this is really a key aspect of enterprise LLM application creation in that figuring out at what point or points to use open models and at what point to use Gemini 'cause you might've been surprised that I'm talking about this open models so much in this Gemini course, but this is really reflective of my real world experience building with customers.

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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=0)** - [Instructor] Two weeks ago, at the time of this recording, the annual [[Google Cloud Platform (GCP)|Google Cloud]] Next conference, [[Google]] announced a number of new features around agentic AI [[Application Development]].
>
> **[0:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=10)** You can think of this section of this course as a preview.
>
> **[0:14](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=14)** As you'll see, a lot of the capabilities are early in the UI and not fully integrated.
>
> **[0:20](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=20)** And again, we all make software here, so I understand in the application lifecycle Google was really anxious to get this out.
>
> **[0:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=27)** So when you are working with this, please read the documentation and the UI will probably be updated and more integrated.
>
> **[0:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=35)** So let's talk about this.
>
> **[0:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=37)** The first concept for us to understand is this idea of AI applications.
>
> **[0:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=41)** And this is a change, as it says here, "What happened to Agent Builder?"
>
> **[0:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=45)** The original [[Vertex]] AI Agent Builder product has been renamed to AI Applications.
>
> **[0:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=51)** And you're going to see this in the product console documentation in marketing.
>
> **[0:55](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=55)** You'll see Agent Builder as a sub-menu.
>
> **[0:58](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=58)** So inside of this, what are these?
>
> **[1:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=60)** So AI Applications allow us to tap into the power of Google's foundational models, so [[Gemini]], search expertise and [[Conversational AI]] technologies to create enterprise-grade GenAI applications.
>
> **[1:13](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=73)** So it's a set of tools that allow us to combine in an agentic fashion all these different capabilities to create sophisticated applications which integrate Gemini and the associated model family.
>
> **[1:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=88)** So what kind of scenarios do we have?
>
> **[1:30](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=90)** Well, we have conversational agents, so AI-driven conversational user interfaces, and we have Vertex AI Search.
>
> **[1:39](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=99)** So this is powered by Gemini and it enables us to build AI-enabled search and recommendation experiences.
>
> **[1:46](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=106)** And we have search apps.
>
> **[1:48](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=108)** Using Vertex AI Search, we can quickly build Google quality search app on the data and embed a search bar in our webpages, and we can integrate this, you'll see in the example that I have, with these Gemini models to enhance the search.
>
> **[2:04](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=124)** So we can search against our own data using the power of Google's traditional search engine, along with the integration of LLMs for natural-language interaction with enterprise data.
>
> **[2:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=135)** This is what people have been wanting for a really long time, so it is a very compelling set of offerings.
>
> **[2:22](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=142)** So you have a currently generic search.
>
> **[2:24](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=144)** So you can search websites, data stores, with enterprise proprietary data.
>
> **[2:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=149)** You can have media search, so video libraries and things like that.
>
> **[2:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=153)** And something that obviously makes me pay attention is healthcare search.
>
> **[2:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=157)** So you can search healthcare records that are stored in FHIR data stores and you can import FHIR resources that contain clinical data from the cloud.
>
> **[2:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=165)** Healthcare API FHIR store.
>
> **[2:47](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=167)** And that's a standard basically here in the United States.
>
> **[2:50](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=170)** So that is really got some potential to speed up the development of agentic AI applications in these different domains, including healthcare.
>
> **[3:01](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=181)** So you can build recommenders, media recommenders, generic recommenders.
>
> **[3:05](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=185)** Again, they're warning you, this is pre-GA, so not for production yet, very, very early.
>
> **[3:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=190)** What do you get?
>
> **[3:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=192)** You get out-of-the-box, natural-language understanding and [[Semantic Search]], and that's where the LLM is integrated, out-of-the-box capabilities to understand synonyms, spellings, auto-suggest [[Generative AI]], recommendations, you get a new AI applications console and APIs, and you get the ability to add search widgets on to a webpage.
>
> **[3:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=213)** So this is super, super compelling.
>
> **[3:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=215)** That's why I wanted to include it, even though there's some definite rough edges, when I was trying to build the example, I'll talk to you about in a subsequent movie.
>
> **[3:43](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=223)** Now, to augment this information, you want to take a look at this Vertex AI Search.
>
> **[3:48](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=228)** So the concept, as it says up here, is informational retrieval using AI and LLMs.
>
> **[3:55](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=235)** So as it says here, with Vertex AI Search, you can build a Google quality search app on the data you control.
>
> **[4:02](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=242)** And the idea here from a real high level is basically it's making RAG much, much, much simpler.
>
> **[4:10](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=250)** All of the kind of low-level RAG stuff that we were doing last year, creating embeddings in VectorDB [[Databases]] and all that kind of stuff you'll see is automated.
>
> **[4:19](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=259)** So to have us take a look at where we'd work with this, the initial console has got some of the UI inside of Vertex AI, under Agent Builder.
>
> **[4:30](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=270)** We have Vertex AI Search and we have something called the Agent Garden.
>
> **[4:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=274)** The Agent Engine isn't yet up as of this recording.
>
> **[4:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=278)** But what you'll find as we look at this in subsequent movies, both these areas, the Vertex AI Search and the Agent Garden, point to a new console basically that is called the AI Applications Console, and I'm sure that'll be integrated with this main console.
>
> **[4:54](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=294)** That's kind of the way that Google works with bringing in new feature sets.
>
> **[4:58](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=298)** So right now they're two separate consoles and it's a little bit tricky to navigate.
>
> **[5:01](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-ai-applications-vertex-ai-search?u=76281980&t=301)** So in subsequent movies, I'll show you how it's working right now.

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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=0)** - [Instructor] So in order to build a working sample, we could start either in Agent Garden or in Vector AI Search, but it's a little bit backward because you are having to create a data store first.
>
> **[0:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=12)** And so if you click here, what you'll see is this takes you into the AI Applications interface, which as I said is not integrated.
>
> **[0:21](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=21)** And it is creating a search app and it talks to you about the enterprise edition features, the LLM features.
>
> **[0:27](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=27)** You have to give an app name, and I'll just put any old name in here and a lineal company name so you can see what happens in the next step.
>
> **[0:36](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=36)** And then you have to have a data store.
>
> **[0:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=38)** So what I found in working with this is it's easier actually if you create a data store first.
>
> **[0:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=45)** So let me just go back.
>
> **[0:49](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=49)** And I really didn't find much usefulness working in this area 'cause all of this functionality is in the AI Applications interface.
>
> **[1:02](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=62)** Same thing with the Agent Garden, although we'll come back to that in just a second.
>
> **[1:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=66)** So in working with this example, this is a recommender app, and when I was working with this, I couldn't get the indexing to kick off.
>
> **[1:14](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=74)** So the first thing that I had to do is I had to create two versions of the set, as you'll see.
>
> **[1:20](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=80)** So again, this is early preview, and maybe I'm doing something wrong, that's possible as well.
>
> **[1:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=85)** So I followed the steps here and I enabled the APIs, I enabled AI Applications by clicking the button.
>
> **[1:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=93)** And then I went to create a data store per the directions.
>
> **[1:35](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=95)** And they have a sample that's in the required format, which I'm going to show you this in just a second.
>
> **[1:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=100)** It's really important to set this up correctly.
>
> **[1:43](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=103)** So this sample I was able to use, however, when I went to assign the key properties, I had to make a change as well.
>
> **[1:50](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=110)** So I'll just show you the couple changes I had to make to get this to work.
>
> **[1:53](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=113)** So first thing I did to create a data store is click CREATE DATA STORE.
>
> **[1:57](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=117)** And then notice here that you have all these various sources.
>
> **[2:01](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=121)** We're going to use [[Cloud Storage]] of, course, but you have BigQuery website, FHIR, API, Cloud [[SQL]], Spanner, Bigtable, FHIR Store, LADB, and Workspace Sources, [[Google Drive]], Gmail, Sites, Calendar, and [[Google]] Groups.
>
> **[2:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=135)** So all your enterprise data.
>
> **[2:17](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=137)** So when you click into the source, then it's going to give you information about the configuration.
>
> **[2:23](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=143)** So let's click Cloud Storage.
>
> **[2:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=145)** And again, this is why you have to start with the data, 'cause the data has to be structured appropriately before you can create an app on top of it.
>
> **[2:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=153)** So in this case we had JSONL, and then it'll be synchronized from the bucket, and we can say folder or file.
>
> **[2:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=160)** In our case, we had a file.
>
> **[2:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=161)** And let me just grab that information.
>
> **[2:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=165)** And then inside of here, it's going to try to infer the schema.
>
> **[2:51](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=171)** But you still have to specify the key properties.
>
> **[2:54](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=174)** And I found that if I tried to specify a multi-key value, it threw an error.
>
> **[2:59](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=179)** So I did get it to work, I guess, can kind of hacking the example here, by trial and error, by just having a single value.
>
> **[3:08](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=188)** So I will let Google know, maybe they can update their documentation.
>
> **[3:11](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=191)** And once that's done, then your data store will be created.
>
> **[3:16](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=196)** Now, once you have a data store, I'll show you what it looks like.
>
> **[3:19](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=199)** So I made this data store for search.
>
> **[3:23](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=203)** And this is that [[JSON]] file.
>
> **[3:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=205)** And you can see that I have the documents, 'cause I did this a while ago, it's already been indexed.
>
> **[3:31](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=211)** And you can view each of the documents.
>
> **[3:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=213)** So that's the format of the JSON.
>
> **[3:36](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=216)** And you can look at the schema, you can make modifications to the schema.
>
> **[3:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=221)** Notice it will trigger a re-index.
>
> **[3:43](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=223)** And here we have the activity.
>
> **[3:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=225)** So we've got 45,000 items in our example here.
>
> **[3:49](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=229)** So once you have this data store, then the workflow is that you create an application.
>
> **[3:57](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=237)** It's just a little bit, like I said, unintuitive, because if you click in here, it's like start with an app, while you have to have your data set up in the appropriate format.
>
> **[4:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=246)** And again, just 'cause I know some of you will be interested in BigQuery, BigQuery has these values for your data structured with [[Metadata]] media, unstructured healthcare, and then you have your BigQuery table.
>
> **[4:18](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=258)** So I guess my old DBA colors are showing here, you have to have the data structured appropriately before you can build any app, and even working with LLMs doesn't change that.
>
> **[4:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/setup-datastore-for-vertex-ai-search-custom-app?u=76281980&t=268)** So following the appropriate requirements for the data store is key to any app development, including [[Generative AI]].

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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=0)** - [Instructor] Now in continuing to work with this sample, the next step here was to create an app of type recommender, which I did do.
>
> **[0:08](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=8)** And then I was supposed to be able to preview my app.
>
> **[0:11](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=11)** And again, I don't know if I missed a step or something, but I'll just show you what happened.
>
> **[0:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=15)** So here's my dataset and then I created an app of type recommender, which is down on the bottom here, recommendation engine.
>
> **[0:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=25)** And so put in the value and then you put in the data store.
>
> **[0:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=29)** I don't have any because I already have one associated to it.
>
> **[0:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=32)** So if I go to my app, you'll see that I was supposed to be able to have a preview, but it just kind of gets stuck there.
>
> **[0:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=40)** And if I go to look at the data that's associated with it, it is telling me that it actually won't work with this.
>
> **[0:49](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=49)** It says that the document is ingested, but the indexing is not enabled because the data store is connected to a search or chat app.
>
> **[0:55](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=55)** So this kind of contradicts the documentation.
>
> **[0:57](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=57)** So I wanted to build something that would show you the functionality.
>
> **[1:01](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=61)** So I just kind of took a shot at it.
>
> **[1:03](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=63)** And what I did is I created a second dataset here that just basically duplicated the same thing.
>
> **[1:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=72)** I just created one because you can't use the dataset, can't connect it to more than one application.
>
> **[1:16](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=76)** So I created a second dataset and then I created an app of type search.
>
> **[1:21](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=81)** And so when I worked on that one, that worked just swimmingly.
>
> **[1:24](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=84)** So this is a preview of this new functionality and you can actually see that you can test this and you can say, list the movies here, just something really simple.
>
> **[1:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=100)** And I associated it with [[Gemini]], so it's kind of a nonsense response.
>
> **[1:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=105)** So here's the [[Generative AI]] response and here's the response.
>
> **[1:49](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=109)** And you can see anywhere but here from the [[JSON]].
>
> **[1:52](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=112)** So you have the combination.
>
> **[1:54](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=114)** So it looks like [[Google]] basically, and pretty easy to build.
>
> **[1:59](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=119)** And I could tell that the data was being indexed because it told me nicely that it was indexed.
>
> **[2:04](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=124)** So again, it could be me just missing steps, but I kind of hacked this example and I created a dataset using this dataset.
>
> **[2:13](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=133)** And then remember I just used the one field name and then instead of associating this to a recommender, well, I did and it didn't seem to work, I associated it to a generic search.
>
> **[2:24](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=144)** Now the additional configuration that I did with the generic search is, and again this down here could be a whole nother course, is I was just taking a look at all these different options.
>
> **[2:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=157)** And this is really literally like weeks old.
>
> **[2:40](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=160)** And I was looking at the serve option and I noticed that you could associate the search with an answer.
>
> **[2:47](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=167)** And that's where I had the option to associate Gemini with this.
>
> **[2:52](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=172)** And that's how I got basically the configuration in my example.
>
> **[2:56](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=176)** So also kind of cool, it also has a mobile thing right there.
>
> **[3:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=180)** So this is a very fast introduction to this really powerful AI applications that is really just the beginning of the next generation of agentic AI applications with Gemini.
>
> **[3:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=192)** And I would really encourage you to try to take a look at this UI and work through these different steps to see what tools are available.
>
> **[3:21](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=201)** I know I'm going to be working with actual customers on this next week, actually because of some of the time deadlines we have.
>
> **[3:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/build-vertex-ai-search-custom-app?u=76281980&t=208)** Hopefully we can speed up some of our projects using some of these new tools.

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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=0)** - [Instructor] So, the newest of the new is the [[Vertex]] AI Agent Builder set of tools, and there are a lot of them.
>
> **[0:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=6)** This is the announcement, basically, and you can see that we have not only tools in the [[Google Cloud Platform (GCP)|Google Cloud]] console in Vertex AI, but we have libraries and code examples aplenty, basically.
>
> **[0:19](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=19)** One thing that was announced recently is the ADK, or the Agent Development Kit.
>
> **[0:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=25)** This is a set of libraries that allow you to quickly deploy and develop [[AI Agents]], and it's just a PIP install.
>
> **[0:34](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=34)** So, PIP install [[Google]] ADK.
>
> **[0:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=37)** There's quickstarts and tutorials and lots and lots of examples, here.
>
> **[0:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=41)** This was announced at Next.
>
> **[0:43](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=43)** In addition to that, we have the Agent Garden.
>
> **[0:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=45)** So, if I go to the Agent Garden, these are basically just links to [[GitHub]].
>
> **[0:49](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=49)** For example, if I click RAG, which is a common one, you can see that it has just a little bit of documentation.
>
> **[0:55](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=55)** But honestly you're going to go to the GitHub, and here's where you're going to have the actual architecture and the examples.
>
> **[1:03](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=63)** So, this is not only RAG, but it's RAG using these new tools, so RAG using the Agent Development Toolkit.
>
> **[1:11](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=71)** Notice here with ADK, you can choose your preferred model or deployment target.
>
> **[1:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=75)** You can also use open source, like [[LangChain]], LangGraph, some of the other ones.
>
> **[1:19](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=79)** Another thing that was announced that it was highly anticipated is the Agent2Agent protocol.
>
> **[1:25](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=85)** This is designed to connect agents together so that you can build automated multi-LLM agentic applications more rapidly.
>
> **[1:36](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=96)** And more tools you can see.
>
> **[1:41](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=101)** And something new called the Agent Engine that, in the UI, just says coming soon, basically. (laughs) So, what it is, it is a runtime that eliminates deployment complexity.
>
> **[1:56](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=116)** The idea, again, is tools, tools, tools.
>
> **[1:59](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=119)** This used to be called LangChain on Vertex AI or Vertex AI Reasoning Engine.
>
> **[2:05](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=125)** So, the idea here is that you have a fully managed, enterprise-ready environment to more quickly deploy.
>
> **[2:12](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=132)** And here's a good architecture diagram, or useful one, how this might be deployed.
>
> **[2:17](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=137)** You can see in the front of it, which was probably the most anticipated announcement at Google Next, this idea of enterprise agents called Agentspace.
>
> **[2:26](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=146)** And in fact, this is an area that I will be creating courseware and building actual applications with customers later this year, so look for some course information from me on this as well.
>
> **[2:38](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=158)** But the idea is to take all these various tools and to really empower enterprises to build these combination agentic AI applications with the level of precision and security that they need.
>
> **[2:53](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=173)** So, lots and lots of new words, if nothing else, and lots of new tools to explore.
>
> **[3:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=180)** And then, again, I think that's pretty much everything that was announced, but it was a lot of announcements around agentic AI this year at Next.
>
> **[3:07](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=187)** So, to start working with the console that I showed you, if I go to See existing apps, that'll take me there.
>
> **[3:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=195)** It's a little bit tricky to get there in the AI applications console, and I would say it all starts with the data.
>
> **[3:20](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=200)** So, build data stores, and then learn how to build the different app types on top of the data stores, which, this is just a superset of what you see for Vertex AI search.
>
> **[3:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=209)** It's got the search, and it also now has the conversation agents and the recommenders.
>
> **[3:33](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/explore-agent-garden-capabilities?u=76281980&t=213)** So, that is the starting point before you get into some of these more advanced capabilities, like Agentspaces and the Agent Development Kit.

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
> **[0:00](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=0)** - [Narrator] Thanks for coming along with me on this journey, learning about [[Gemini]] in [[Vertex]] AI and [[Google Cloud Platform (GCP)|Google Cloud]].
>
> **[0:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=6)** To learn more, I've got a couple of resources.
>
> **[0:09](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=9)** First in the API documents, there is a cookbook that [[Google]] constantly updates.
>
> **[0:15](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=15)** It's a [[GitHub]] repo that has really a large amount of examples that are very, very useful, and it's something that you're going to want to take a look at when you are learning and it's well indexed.
>
> **[0:28](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=28)** You can see down here and you can actually open it up in CoLab.
>
> **[0:32](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=32)** So CoLab Enterprise, if you are using [[Google Cloud Platform (GCP)|Google Cloud platform]] for your dev environment.
>
> **[0:37](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=37)** In addition, there are a couple of exciting announcements that there will be more functionality and more courseware coming from me later this year.
>
> **[0:45](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=45)** The first one is the Agent2Agent protocol, which makes agentic GenAI [[Application Development]] even more fast, basically.
>
> **[0:55](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=55)** So this was launched as of this recording just a couple weeks ago, and you can see that it is a set of tools and libraries that help for agentic AI app development.
>
> **[1:06](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=66)** And then the one that I'm most excited about is the public announcement around Agentspaces, which is the enterprise set of tools that are integrated into Vertex AI that allow enterprises to build agentic AI applications for the enterprise.
>
> **[1:23](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=83)** So this is an area that I'm doing some work in and like I said, I will be also creating some content.
>
> **[1:29](https://www.linkedin.com/learning/advanced-gemini-for-developers-25833582/next-steps?u=76281980&t=89)** So do look for this as you're continuing your journey, learning about Gemini AI applications.
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