---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: openai-chatgpt-creating-custom-gpts
url: "https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts"
level: Intermediate
updated: 11/28/2023
learners: 12474
skills:
  - Custom GPTs
  - OpenAI Products
  - Artificial Intelligence (AI)
  - ChatGPT
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEgFqptlvCtTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1701193175841?e=2147483647&amp;v=beta&amp;t=KtRvJKoZQXKqPIzg28i2gZprrhs4UzqZlX1jU0GJtlY"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Getting Started with Custom GPTs, Copilots, and AI Agents]]'
next_courses:
  - '[[ChatGPT- Publishing GPTs on the GPT Store]]'
path_nav: '[{"path":"Getting Started with Custom GPTs, Copilots, and AI Agents","position":1,"total":5,"prev":null,"next":"ChatGPT- Publishing GPTs on the GPT Store"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - skill/custom-gpts
  - skill/openai-products
  - skill/artificial-intelligence-ai
  - skill/chatgpt
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Openai%20Chatgpt%20Creating%20Custom%20Gpts.md)

![Openai Chatgpt Creating Custom Gpts](https://media.licdn.com/dms/image/v2/D560DAQEgFqptlvCtTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1701193175841?e=2147483647&amp;v=beta&amp;t=KtRvJKoZQXKqPIzg28i2gZprrhs4UzqZlX1jU0GJtlY)

# Openai Chatgpt Creating Custom Gpts

> GPTs allow you to create custom versions of ChatGPT with their own instructions, knowledge retrieval, and actions for highly specialized and targeted functionality using natural language instructions and basic uploads. In this course you’ll learn how to harness the power of custom GPTs for everything from small personal tasks to large enterprise use cases.

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts) | Intermediate | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (1 videos)
- **[[#1. Creating Custom GPTs]]** (7 videos)
- **[[#2. Going Further]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Build your own custom GPTs with ChatGPT
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/build-your-own-custom-gpts-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/build-your-own-custom-gpts-with-chatgpt?u=76281980&t=0)** - Let me guess.
>
> **[0:01](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/build-your-own-custom-gpts-with-chatgpt?u=76281980&t=1)** One of the very first questions you had when you started working with ChatGBT was, how do I make a custom version of this, one that I can come back to later?
>
> **[0:08](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/build-your-own-custom-gpts-with-chatgpt?u=76281980&t=8)** One that I can customize to perform specific tasks in a specific way, and one that I can share with my colleagues, my friends, or even with the world?
>
> **[0:16](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/build-your-own-custom-gpts-with-chatgpt?u=76281980&t=16)** Now we have an answer in the form of GPTs.
>
> **[0:19](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/build-your-own-custom-gpts-with-chatgpt?u=76281980&t=19)** Let me explain.
>
> **[0:20](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/build-your-own-custom-gpts-with-chatgpt?u=76281980&t=20)** GPTs are a new feature of ChatGBT that allows you to create custom versions of ChatGPT with custom instructions, custom knowledge, and custom actions.
>
> **[0:30](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/build-your-own-custom-gpts-with-chatgpt?u=76281980&t=30)** This unlocks a whole new marketplace of ideas for AI, and coincidentally, will also be available through a real marketplace.
>
> **[0:39](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/build-your-own-custom-gpts-with-chatgpt?u=76281980&t=39)** Whether we create them, use them, or both, GPTs, give us all new AI capabilities and I'm here to show you how to get it right.
>
> **[0:46](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/build-your-own-custom-gpts-with-chatgpt?u=76281980&t=46)** Let's get crackin'.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1)
> **CLI Commands:** make (1)
> **Speakers:** - let (1)


### 1. Creating Custom GPTs

> [[#Table of Contents|↑ Back to Table of Contents]]

#### What is a GPT?
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=0)** - Before we get started, a quick personal note from me, GPTs are a brand new feature in a brand new field in a brand new segment of technology.
>
> **[0:11](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=11)** And because it is so new, there's likely to be significant changes even between the time I record this course and you watch it.
>
> **[0:19](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=19)** And I say that because in the past five days, the interface I'm about to show you was changed three times.
>
> **[0:27](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=27)** So there's a high likelihood that what you see on your screen won't match what you see on my screen exactly, and it will remain like that for the foreseeable future as all of these technologies evolve and mature and new use cases emerge and the features are extended.
>
> **[0:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=43)** So as you work with AI tools of any kind, and especially with something like GPTs, you have to embrace the uncertainty and the constant change and try to just keep up with the core features and functionality.
>
> **[0:57](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=57)** Because the key to this is while the interface may change and while buttons may move around and while new features may be added or old features be removed, the core functionality will not change.
>
> **[1:08](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=68)** And the core functionality of GPTs is to customize your own version of ChatGPT to make it more specialized.
>
> **[1:18](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=78)** GPTs were introduced in November, 2023, exactly one week ago from when I'm recording this.
>
> **[1:24](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=84)** And the idea of GPTs is you go into ChatGPT and create your own specialized version that does a specific task or performs some sort of process in a specific way every time.
>
> **[1:36](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=96)** The examples that are provided here on the website are things like a creative writing coach or a laundry buddy or a tech advisor.
>
> **[1:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=103)** And looking at these examples, you get the overall idea.
>
> **[1:46](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=106)** When you create a GPT, you're basically setting up your own version of ChatGPT with a set of specialized instructions, and you don't have to know how to write these prompts.
>
> **[1:56](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=116)** The system will actually help you write them.
>
> **[1:58](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=118)** You just talk to the system and it'll write the prompt for you.
>
> **[2:01](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=121)** Then if you want extended functionality, like for example, let the bot go and look up things on the internet, you can activate web search.
>
> **[2:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=129)** If you wanted to generate images, you can activate Dall-E 3, And if you wanted to process information, for example, process spreadsheets or even run some code, you can activate the code interpreter.
>
> **[2:21](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=141)** On top of that, you can also upload reference documents into the system, so when you ask it questions, it'll reference those documents and provide answers.
>
> **[2:31](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=151)** This is a much asked for feature in ChatGPT and something that you normally would only get in a custom built application.
>
> **[2:38](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=158)** And finally, you can also build something called custom actions.
>
> **[2:41](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=161)** Now, I say this with a bit of a caveat, because as I'm recording this, the custom actions function does not work very well, so the example I'll provide later on the course is fairly trivial, but there's enormous potential for this.
>
> **[2:55](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=175)** The idea is you can plug your GPT into an external API or an external service and tell the bot to be the natural language interface between the human user and some complex machinery on the backend.
>
> **[3:10](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=190)** So you can ping a system and pull data out of it, and then get that data processed by the GPT.
>
> **[3:16](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=196)** There is huge potential in this new technology, especially in how it democratizes use of advanced AI models, because once you create a GPT, you can choose to share it with others and they can take advantage of it.
>
> **[3:29](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=209)** And in the near future, there will also be a marketplace where people can share their GPTs and also share their GPTs for a price.
>
> **[3:36](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=216)** So this will result in people that just build things to share with others, and for companies to build customized solutions, and you're likely to see ChatGPT and GPTs become its own marketplace of not only ideas, but functionality that allow you to talk directly to external services.
>
> **[3:54](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=234)** This all makes me really excited about our shared future with AI and how we will build that future together.
>
> **[3:59](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=239)** So in the rest of the course, we'll take a deep dive and look at how to use GPTs, how to build your own GPTS, and how to leverage all of this advanced functionality.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (3), this. (2), new, (1), let (1), finally, (1)
> **Env Vars:** gpt (4), api (1), gpts (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** caveat (1)
> **Speakers:** - before (1)

#### Using existing GPTs
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=0)** - GPTs are part of ChatGPT.
>
> **[0:02](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=2)** And to get to them, you go to ChatGPT.
>
> **[0:04](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=4)** And right now you find them under this button here in the sidebar called Explore.
>
> **[0:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=9)** Right Now when you open Explore, you get a list first of My GPTs.
>
> **[0:13](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=13)** These are any GPT you've created.
>
> **[0:16](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=16)** Then Recently Used GPTs.
>
> **[0:17](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=17)** These are any GPT you've used recently.
>
> **[0:20](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=20)** And finally, a list of example GPTs that are generated by OpenAI.
>
> **[0:25](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=25)** So these demonstrate how GPTs work and how they can do different things.
>
> **[0:29](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=29)** Now, OpenAI has said that they will create a marketplace for GPTs that will be released within the month.
>
> **[0:34](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=34)** So right now it's November, 2023.
>
> **[0:36](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=36)** That means if you're watching this in December, 2023, by their own stipulation, there should be a marketplace available.
>
> **[0:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=43)** And I have to assume that that marketplace will exist in this same page in some form.
>
> **[0:48](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=48)** It's also a good chance it won't look exactly like what you're seeing on my screen, but there will be a marketplace here and you will be able to interact with it.
>
> **[0:55](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=55)** And from that marketplace, you will be able to select different GPTs to use.
>
> **[0:59](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=59)** So let's do just that.
>
> **[1:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=60)** I'll go up and find a GPT I created.
>
> **[1:04](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=64)** We'll be building out a similar GPT to this one in this course.
>
> **[1:06](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=66)** And the purpose of this particular GPT is to explain complex film production terms.
>
> **[1:12](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=72)** Next time you watch a film, pay close attention to the credits, and you'll notice that a lot of people have very interesting titles like Gaffer and Best Boy and things like that.
>
> **[1:21](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=81)** This GPT uses real knowledge that I've uploaded into the system to explain what these terms mean.
>
> **[1:28](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=88)** So for example, I can go in here and say, what is a gaffer?
>
> **[1:32](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=92)** And because of how I've set up the system, it's also saying gaffer is related to other things.
>
> **[1:38](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=98)** Do you also want to know information about those other things?
>
> **[1:40](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=100)** In this case, best boy and gaffer tapes.
>
> **[1:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=103)** I can say what is a best boy?
>
> **[1:46](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=106)** And again, the system will go look at its in initial knowledge, search through that knowledge, and then combine the knowledge with the language capability to create a response that matches my criteria.
>
> **[1:58](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=118)** And that's really all there is to it.
>
> **[1:59](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=119)** A GPT is a custom version of ChatGPT specialized to perform a specific task or meet a specific goal.
>
> **[2:06](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=126)** So as you build your own, you'll be able to identify what task you want and then customize it to do exactly that task really well.
>
> **[2:13](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=133)** And as other people start sharing theirs and there will be a marketplace, you'll be able to find a GPT that meets whatever goal you're trying to accomplish or connect to whatever service you're trying to connect to.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (8)
> **CLI Commands:** find (3)
> **Code Keywords:** finally, (1), let (1), case, (1)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1), in the sidebar (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - gpts (1)

#### Creating a GPT from scratch
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=0)** - All right, let's create a GPT from scratch.
>
> **[0:03](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=3)** To do that, you go to ChatGPT, go to Explore, and then select Create a GPT.
>
> **[0:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=9)** Here you have two options.
>
> **[0:10](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=10)** You can either use a conversational interface to talk to the GPT builder and have it build the GPT out for you, or you can go to configure it manually by giving it a name, adding a photo, giving you a description, and putting in the prompt yourself.
>
> **[0:24](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=24)** But you don't have to choose here.
>
> **[0:26](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=26)** You can start in the create column and then switch over to configure to refine your information, then go back to create and continue creating.
>
> **[0:33](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=33)** These two features work together to help you create your GPT.
>
> **[0:37](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=37)** So in my example, I want to create a GPT that helps me write better code for web development projects, and importantly sources information from trusted sources on the web to do so.
>
> **[0:48](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=48)** First, I'll give it some basic instructions.
>
> **[0:50](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=50)** So it's asking me, what would you like to make?
>
> **[0:52](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=52)** And I'll say web development assistant that gives me tips on how to build standards based accessible front and web projects.
>
> **[1:13](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=73)** When I send off this request, the GPT builder will figure out what I'm trying to do and start building out not only the GPT, but also the main prompt for the GPT.
>
> **[1:23](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=83)** Once it's done, its initial work, it asks me, what do you want to call this GPT and it gives me a suggestion.
>
> **[1:28](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=88)** Web Dev Wizard.
>
> **[1:29](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=89)** I can choose to use that by just saying yes or I can give it another name so I'll just say yes.
>
> **[1:34](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=94)** And you'll notice when I say yes, it'll apply this name to the GPT.
>
> **[1:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=103)** Once the name is created, it'll also start generating an automatic profile picture for me.
>
> **[1:47](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=107)** And for this, it uses DALL-E three.
>
> **[1:52](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=112)** When the generation is complete, it asks me, is this a good image or do you want me to do another one?
>
> **[1:57](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=117)** Do you want to make any changes or do you want to try something else?
>
> **[2:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=120)** So here I can either accept the image as is, or I can ask it to make changes to it.
>
> **[2:04](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=124)** So I'll just say, use this one.
>
> **[2:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=129)** Now the system starts asking me questions about how the GPT should behave, and here you can be as descriptive as you want.
>
> **[2:15](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=135)** Now keep in mind this is a chat bot and you're really talking to ChatGPT here, so it'll be quite wordy and you can actually like intercept it and just tell it what you want.
>
> **[2:24](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=144)** You don't need to wait for it to type out the entire instruction because quite honestly, it talks too much and it can be really annoying.
>
> **[2:32](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=152)** But I'll give it some instructions here to just give it a general direction of where I want to go.
>
> **[2:42](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=162)** The core piece of this particular bot is I always wanted to consult MDN web docs for further reading and provide relevant links to the examples.
>
> **[2:51](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=171)** So this instruction needs to be very clearly stated in the instructions to the GPT.
>
> **[2:55](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=175)** Now, keep in mind you're working with a large language model here, not an actual person.
>
> **[3:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=180)** So even if you're giving it super strict instructions here, it will not always follow those instructions exactly as I'm sure you'll see when we run some examples on this.
>
> **[3:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=189)** Okay, now it says, now let's think about Web Dev Wizard should interact with its users.
>
> **[3:13](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=193)** How do you envision a tone style of communication?
>
> **[3:16](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=196)** Should it be strictly professional and straightforward or more friendly and casual, especially when explaining complex concepts?
>
> **[3:21](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=201)** I'll say professional, curt, to the point as just because I like documentation that just gets to the point right away.
>
> **[3:38](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=218)** Then the GPT builder goes into two questions that seem to be programmed into the system.
>
> **[3:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=223)** The first one is, is there anything specific you'd like this GPT to avoid discussing or doing?
>
> **[3:48](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=228)** Like is there a certain topic you don't want to touch on or is there a certain type of advice you don't want?
>
> **[3:53](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=233)** So this is a way of constraining the bot so that the user can't like help the bot walk out across the fence and do other things.
>
> **[4:02](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=242)** So I'll say stick to front and Web Dev topics only, and the system will try to confine itself to those topics.
>
> **[4:13](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=253)** Again, it's a large language model so it won't always succeed, but at least this gives some level of confinement of the subject matter.
>
> **[4:26](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=266)** And the final question it usually asks is some form of how do you want to respond when the user isn't giving enough information?
>
> **[4:34](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=274)** Or in this case, should it address users in a specific way or adjust its responses based on the user's skill level in web development?
>
> **[4:41](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=281)** So I'll say based on the skill.
>
> **[4:45](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=285)** Alright, so now I'll let the system finish that instruction and once it's done, we can test it right in this interface to see if it's creating the output we're looking for.
>
> **[4:55](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=295)** The initial build process is now complete and we can start testing it.
>
> **[4:58](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=298)** So here in the preview, you see the Web Dev Wizard has four starter questions we can choose from how do I make a website more accessible?
>
> **[5:06](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=306)** What are the most best practices for responsive design and so on.
>
> **[5:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=309)** So I'm going to ask you something very specific.
>
> **[5:12](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=312)** How do I make CSS gradient?
>
> **[5:17](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=317)** Now based on my instructions, the system should now go and not only give me a code example, but also reference documentation from MDN.
>
> **[5:27](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=327)** So let's see if it does that and look at that.
>
> **[5:31](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=331)** Here we have documentation directly from MDN, which means the system not only answered my question to my specifications, but also went online and found relevant information from the source I specified.
>
> **[5:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=343)** Now that the initial state is complete, we can go look at the configure tab to see what actually happened.
>
> **[5:48](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=348)** We got a profile picture, we got a name.
>
> **[5:50](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=350)** You can edit that name to anything you want.
>
> **[5:52](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=352)** A short description.
>
> **[5:53](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=353)** This is the description that appears in the initial display.
>
> **[5:57](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=357)** Then we have the instruction.
>
> **[5:58](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=358)** So this is the initial prompt here.
>
> **[6:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=360)** You can go in and edit the prompt in any way you want, add anything you want in addition, and basically do whatever you want.
>
> **[6:06](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=366)** This is prompt engineering. This is where you do it.
>
> **[6:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=369)** Then below we have a series of conversations starters.
>
> **[6:12](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=372)** So those are the starters that you saw when we started working with the bot.
>
> **[6:15](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=375)** And here you can edit them or change them or add in new ones if you want to.
>
> **[6:19](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=379)** These again are just strings of texts.
>
> **[6:21](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=381)** There's no actual functionality associated with them.
>
> **[6:23](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=383)** So you can really write whatever you want.
>
> **[6:25](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=385)** This is just to get users started using the GPT.
>
> **[6:29](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=389)** And then finally below here you have some additional features we'll talk about more later, including uploading knowledge, capabilities and actions.
>
> **[6:37](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=397)** So in this case, because this bot is doing searches on the web, I'm going to activate just web browsing.
>
> **[6:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=403)** So I'll go in here and turn off DALL-E image generation and quote interpreter.
>
> **[6:47](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=407)** When I do that, you'll notice the preview changes because I'm changing the bot and I can now safely just save and exit.
>
> **[6:56](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=416)** Now, when I choose to save, I have three options.
>
> **[6:59](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=419)** I can save this GPT only for me, meaning I'm the only one who can use it.
>
> **[7:02](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=422)** I'm the only one who sees it.
>
> **[7:03](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=423)** I can save it for only people with a link, meaning you can send the link to others and they'll be able to use it or I can save it publicly.
>
> **[7:10](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=430)** And if I do, this GPT may appear in the GPT store or marketplace, which will be coming soon.
>
> **[7:18](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=438)** So if you want to just share your GPT with the world and have other people discover it organically, you choose this option.
>
> **[7:24](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=444)** For me, I'll select only me and click confirm.
>
> **[7:27](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=447)** This saves my GPT and I go back to ChatGPT with the GPT activated in the browser.
>
> **[7:33](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=453)** So now I can play around with this GPT, and if I go back to explore, you'll see it sits right here, Web Dev Wizard.
>
> **[7:40](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=460)** You can also see that it says that it's locked, so only I can use it.
>
> **[7:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=463)** And if I want to, I can go and delete it right from this interface.
>
> **[7:47](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=467)** I can click edit to go back into the editing interface where I can keep chatting with it and give it new instructions to alter its behavior.
>
> **[7:54](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=474)** I can go in and configure it more specifically if I want to, and I can also delete it from right within here.
>
> **[8:01](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=481)** That's the entire process of creating a GPT.
>
> **[8:03](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=483)** So if you're just looking to create a customized interface of some kind, inside ChatGPT the process I just walked you through is all you have to do.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (24), mdn (3), dall (2), css (1)
> **Code Keywords:** interface (5), let (4), case, (2), delete (2), switch (1)
> **CLI Commands:** make (5)
> **Prerequisites:** configure (4)
> **Cross-References:** go back to (3)
> **Documentation:** mdn (3)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2)

#### Adding web browsing, image creation, and data processing
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=0)** - One of the features that make GPT so powerful is your ability to control which advanced capabilities each GPT has.
>
> **[0:08](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=8)** Let me show you.
>
> **[0:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=9)** I'll create a new GPT and this time I'll go directly to configure and call it color, Adult Coloring GPT.
>
> **[0:21](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=21)** This GPT will use the DALL-E 3 capability to generate adult coloring pages.
>
> **[0:26](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=26)** First, we need to put in an instruction, so this is the prompt.
>
> **[0:32](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=32)** And then we scroll down to capabilities and activate just the capability we want.
>
> **[0:37](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=37)** In this case, DALL-E image generation.
>
> **[0:40](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=40)** Now I can immediately test my GPT to see what it outputs.
>
> **[0:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=43)** So I'll say quaint modern house in a snowy landscape.
>
> **[0:52](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=52)** Because I've activated the DALL-E image generation capability, the GPT now automatically calls DALL-E 3 to generate the image for me, even though I didn't explicitly say that that's what I wanted, I just said a quaint modern house in a snowy landscape.
>
> **[1:06](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=66)** The response I get is a generated image that fits the criteria, both of the original instructions and of my request.
>
> **[1:13](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=73)** Now, looking at this, I can see immediately that my instructions are correct, but my request was not specific enough.
>
> **[1:20](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=80)** And then I can go in and either change my instructions to be more specific or I can go change my request to be more specific.
>
> **[1:27](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=87)** But as you can see, the capability automatically kicks in when I activate it.
>
> **[1:31](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=91)** The key here is each GPT you build can have one of, two of, or all three of these advanced capabilities activated, web browsing, image generation, and advanced code interpretation.
>
> **[1:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=103)** The advanced code interpretation feature is actually quite interesting because it allows the GPT to run code on its own.
>
> **[1:50](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=110)** So for example, you can upload a spreadsheet and ask it to do something with the data, and it'll do that.
>
> **[1:56](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=116)** Again, this relies heavily on your instructions and the input the user makes, but this gives you the capability of turning on and off these capabilities for each individual GPT to further customize its behavior.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (10), dall (4)
> **Code Keywords:** let (1), case, (1), this, (1)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - one (1)

#### Adding knowledge to GPTs by uploading data
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=0)** - GPTs introduced some new advanced features to ChatGPT interaction that have not been available in ChatGPT until now and still are not available in ChatGPT.
>
> **[0:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=9)** They're only available in GPTs.
>
> **[0:12](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=12)** One of those features is the ability to upload knowledge, so files with information into the system that the system then refers to anytime you ask questions.
>
> **[0:21](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=21)** This is really important because when you're working with ChatGPT in general and you just ask it a question without providing any type of context, the system is just bubbling to the surface statistical models of language that look like they are the correct answer, but might not actually be.
>
> **[0:38](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=38)** And unless you then provide a bunch of additional information, either in your prompt or by referring to things on the internet and saying, go look it up on the internet, you don't know for sure if the information you are getting is actually accurate information or just a language construct that looks accurate but is in fact just made up, a so-called hallucination.
>
> **[0:57](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=57)** One way to get around this problem is by using retrieval augmented generation or RAG for short.
>
> **[1:04](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=64)** Now, RAG refers to the LLM model, the large language model, pinging a document and pulling content out of that document and then using that content in its response.
>
> **[1:15](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=75)** That's what we can do using this knowledge feature in GPTs, upload documents and then have the GPT refer to those documents in its responses.
>
> **[1:24](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=84)** Let me show you how that works.
>
> **[1:26](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=86)** I'll create a brand new GPT here and I'll go to configure and call it movie term explainer.
>
> **[1:35](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=95)** And just to save some time, I've already written the prompt here, is just saying friendly helper that explains film terminology and some other information about it being short and concise.
>
> **[1:44](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=104)** Now, all I need to do is go down here to knowledge and upload a file.
>
> **[1:49](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=109)** Now, technically you can upload multiple files if you want to, I'll just upload this one.
>
> **[1:52](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=112)** It's a document of film terminology I found on the internet.
>
> **[1:56](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=116)** My experience is if you upload more than one file, the system is less likely to go looking in the files, but this depends on what type of file it is and how the files are structured.
>
> **[2:07](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=127)** If they're very different files, then it operates differently from with, they are very structured for example.
>
> **[2:14](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=134)** Okay, now that the file is uploaded, I'll go down and turn off all the other capabilities so that the system won't go out and try to do things on the internet or generate images or try to interpret the code that's inside this file.
>
> **[2:26](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=146)** And then I'll ask a question.
>
> **[2:30](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=150)** Now, because I've activated the knowledge feature, the GPT will go looking in the uploaded knowledge to see if it can find answers to my questions, and then it retrieves that information, augments it using its language model and outputs a response to match my query.
>
> **[2:48](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=168)** This is enormously powerful because with the ability to upload documents into the system and then talk to those documents, you unlock a whole new world of interactions.
>
> **[3:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=180)** For example, if you have a complex document that you need to refer to anytime you're performing a task, you can upload that document in and then just ask for specifics.
>
> **[3:10](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=190)** For example, if you have documentation on how to run a complex operation system or if you have documentation on how to write a specific programming language, or if you have a help desk documentation or something like that, you can upload it into the system and then use the system as a natural language interface to those documents and ask them questions.
>
> **[3:30](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=210)** And there's more.
>
> **[3:31](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=211)** If you're a student and you are working with a complex textbook and you have the rights to that textbook in a digital format that you can upload into the system, you can upload the textbook into the system and then talk to the textbook.
>
> **[3:45](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=225)** Now, as I say this, there's one caveat beyond the copyright thing that if you upload a very large textbook, then it won't perform as well as if you have a smaller one.
>
> **[3:55](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=235)** So I would right now recommend this is more for like academic articles than it is for entire textbooks, but it's still enormously powerful because you can for example, upload an article and say, summarize the article or quiz me on the article, or give me the highlights of this section within the article, and it'll be able to respond.
>
> **[4:13](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=253)** And since you can create as many GPTs as you want, you can create a GPT for every single article or every single textbook or every single documentation that you're working with.
>
> **[4:23](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=263)** Pretty cool, eh?

> [!info]- Semantic Content
>
> **Env Vars:** gpt (4), rag (2), llm (1)
> **Analogies:** for example (4)
> **Code Keywords:** let (1), interface (1), this, (1)
> **Definitions:** refers to (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Warnings:** caveat (1)
> **Prerequisites:** configure (1)

#### Exploring privacy and copyright
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=0)** - Okay, when I first saw this knowledge feature, I had an immediate question and there's a good chance you have the same question, so let's address it.
>
> **[0:07](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=7)** What exactly happens to copyright and privacy when you upload documents into a GPT, especially if that GPT is shared with other people?
>
> **[0:17](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=17)** Does OpenAI protect the privacy and is OpenAI looking into the files?
>
> **[0:22](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=22)** This is a really complicated question because it relates to copyright and AI, something that is currently being battled in courts around the world, and it's not settled law.
>
> **[0:34](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=34)** And I am not a lawyer, so I can't provide any legal advice.
>
> **[0:37](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=37)** What I'll do instead is point at the features that exist inside the interface and also what OpenAI has said publicly about this, and then you can use that information to make your own decisions about how to work with this system.
>
> **[0:49](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=49)** Now, to understand what is happening with the knowledge inside GPTs, we first have to take a look at what is happening to your regular interactions in ChatGPT.
>
> **[0:58](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=58)** If you open ChatGPT, click on your name at the bottom, then go to Settings and Beta, you get a series of settings, including this one here, Data Controls.
>
> **[1:07](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=67)** And this is where you choose whether you want to share your chat history and training data with OpenAI.
>
> **[1:14](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=74)** This feature is turned on by default, and if you turn it off, you lose your history.
>
> **[1:19](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=79)** So you won't see all the chats you've previously done in the sidebar here.
>
> **[1:23](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=83)** What happens if you have it turned on, though, is OpenAI can look at your chats.
>
> **[1:27](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=87)** They can look at what you input and what the system outputs.
>
> **[1:30](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=90)** And there's a good reason for that.
>
> **[1:32](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=92)** First of all, ChatGPT was originally a research project from OpenAI to see how people would interact with an LLM model like this.
>
> **[1:41](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=101)** So therefore, it was always meant to collect data and look at these interchanges.
>
> **[1:45](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=105)** Secondly, because we are now working with non-deterministic systems, these large language models are unpredictable in their behavior, so it's very important for the people who are building these systems to know how they interact and observe when people are trying to do the same thing many times and not getting the results they want.
>
> **[2:03](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=123)** So we're in a bit of a dilemma here as users.
>
> **[2:07](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=127)** If we don't share our data, the systems can't improve.
>
> **[2:11](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=131)** But if we do share our data, they can see what we're doing.
>
> **[2:15](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=135)** And that requires a high level of trust from each individual user.
>
> **[2:20](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=140)** But like I said, this setting is turned on by default, and most users are unaware of it, and they're just using the system.
>
> **[2:27](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=147)** So that means if you create a GPT and you share it with other people, and they have this setting turned on, then they are sharing their data from their interactions with your GPT with OpenAI.
>
> **[2:40](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=160)** So when you upload a document to the knowledge section in the GPT, a new section appears at the very bottom called additional settings.
>
> **[2:48](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=168)** And under here, we have a pre-checked box that says use conversation data in your GPT to improve our models.
>
> **[2:55](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=175)** This message here says, basically, we can look at the conversation that's coming out of this GPT, including the conversations that are surfacing information from your documents.
>
> **[3:05](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=185)** So if you're uploading a document and you don't want OpenAI to see what's in the document, you need to uncheck that box.
>
> **[3:11](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=191)** And that also applies if this is a private GPT that only you can see.
>
> **[3:15](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=195)** Now, this box only appears if you upload a document, because if you just have a regular GPT that doesn't have a document, then all OpenAI is seeing is the instructions and your actual chat.
>
> **[3:27](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=207)** So there's no risk of leaking personal information or private information from a document, for example.
>
> **[3:33](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=213)** But there's another layer to this.
>
> **[3:34](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=214)** What happens if you upload a document that you have the rights to read on your own, but you don't have the rights to share?
>
> **[3:41](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=221)** That's where things get really interesting.
>
> **[3:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=223)** So according to OpenAI in conversation, they say if you create a GPT and you share it publicly, then they will run it through some form of copyright check.
>
> **[3:54](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=234)** So my assumption here is if you upload a book, for example, there's a high likelihood that the system will discover, hey, this is a book that is under copyright, and then take the GPT down, or at least remove it from the public marketplace.
>
> **[4:07](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=247)** And once they open the GPT store, they definitely have to run those kinds of checks on anything.
>
> **[4:13](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=253)** But in conversation, they also say they don't run those types of checks on private GPTs because they are private and people can do whatever they want with their own data.
>
> **[4:21](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=261)** And they won't do it on a ChatGPT enterprise accounts because that's inside the enterprise bubble.
>
> **[4:27](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=267)** And there's even more.
>
> **[4:29](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=269)** At OpenAI Dev Day, they made a lot of announcements.
>
> **[4:32](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=272)** And one of those announcements can be found quite far down in the blog posts.
>
> **[4:36](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=276)** Let's see, where is it?
>
> **[4:38](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=278)** It is here, copyright shield, where it says OpenAI is committed to protecting our customers with built-in copyright safeguards in our systems.
>
> **[4:47](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=287)** Today, we're going one step further by introducing copyright shield.
>
> **[4:50](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=290)** We will now step in and defend our customers and pay the cost incurred if you face legal claims around copyright infringement.
>
> **[4:57](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=297)** And then it says, this applies to generally available features of ChatGPT Enterprise and our developer platform, which is understood as the API.
>
> **[5:08](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=308)** That means to my reading, as a non-legal expert and not a lawyer, this does not apply to regular ChatGPT accounts.
>
> **[5:19](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=319)** I might be wrong, but it very specifically states ChatGPT Enterprise and our developer platform, which is the API.
>
> **[5:26](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=326)** It does not state ChatGPT.
>
> **[5:28](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=328)** So from that, it sounds like the copyright protection does not extend to regular users.
>
> **[5:34](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=334)** Then again, regular users probably wouldn't need that level of copyright protection unless they are deliberately uploading content that is not their property and then trying to share that out, in which case the system should catch it.
>
> **[5:48](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=348)** Like I said, this is complicated and untested even in courts.
>
> **[5:53](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=353)** So your miles will vary, as they say.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (12), api (2), llm (1)
> **Code Keywords:** private (4), let (2), default, (2), this. (2), interface (1)
> **UI Navigation:** click on (1), go to (1), in the sidebar (1), open the (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - okay (1)

#### Adding custom actions
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=0)** - The second new feature introduced by GPT is actions, and I think this is the feature that's going to change the entire landscape around both ChatGPT, GPTs and how we interact with AI, here's why.
>
> **[0:13](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=13)** Actions allow us to use GPTs to talk to external services and their APIs.
>
> **[0:21](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=21)** That's a very technical way of saying if you have an external service, let's say your email provider or a weather service, or a sports service, or anything else that you can programmatically talk to, you can use a GPT as the conversational layer between yourself and that service.
>
> **[0:39](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=39)** So you can say to a GPT, go look up the weather for today, and the GPT will go call a service externally and get normal weather data and then bring it in and contextualize it for you in real time.
>
> **[0:50](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=50)** This is huge because it introduces a whole new set of capabilities to ChatGPT and GPTs, and it's extensible to whatever developers want it to be.
>
> **[1:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=60)** It's also a developer-centric feature and well outside scope of this course, so I'll just show you how it works and then you can go look at it yourself later.
>
> **[1:08](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=68)** In my GPTs, I've created a new GPT called sunscreen or no, that tells me whether or not I should wear sunscreen, and all I have to do here is put in a location.
>
> **[1:17](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=77)** So I'll say Burnaby, which is where I live, and then sunscreen or no will go to an external service called OpenUV and look up the UV index for my current location.
>
> **[1:30](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=90)** Once that comes back, it'll tell me what the UV index is, it says it's relatively low, the weather here is not great today, and then it tells me whether or not I should be wearing sunscreen.
>
> **[1:40](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=100)** So it says it's not particularly sunny and the need for sunscreen is minimal.
>
> **[1:44](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=104)** Now, how does this work?
>
> **[1:45](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=105)** Well, let's take a look on the backend.
>
> **[1:50](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=110)** The GPT has a very simple set of instructions.
>
> **[1:53](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=113)** Check the UV index for the given location and say if it's sunny and if the user needs to wear sunscreen.
>
> **[1:58](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=118)** Of course I could expand on this and make it more useful, but this is for demonstration purposes.
>
> **[2:03](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=123)** What's key to this GPT is this part down here, actions.
>
> **[2:08](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=128)** You see it's pointing at api.[openuv.io](https://openuv.io).
>
> **[2:11](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=131)** Well, if I open this, here we have the open API schema for Open UV.
>
> **[2:16](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=136)** This schema describes how the GPT will talk to the API, what information goes in and what information comes out.
>
> **[2:23](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=143)** And scrolling down, you'll see here there is one endpoint available.
>
> **[2:27](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=147)** The action is a get action that is sent to the api/v1/uv endpoint, and with that I send along an API key.
>
> **[2:35](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=155)** If I click on this, you'll see we have different options here.
>
> **[2:37](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=157)** You can say no authentication.
>
> **[2:39](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=159)** You can pass an API key or an OAuth key, and then in this case, I need to pass a custom key with the header name, X-access-token, and the key is hidden here.
>
> **[2:49](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=169)** So what happens here is whenever I ask this GPT a question, it captures the question, contextualizes it to figure out what exactly I'm asking.
>
> **[2:57](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=177)** Then goes and looks at this open API schema to figure out what the system, the API, needs to be able to operate.
>
> **[3:05](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=185)** Then it collates that data and sends it off to the API.
>
> **[3:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=189)** The API responds and sends data back, and then the GPT contextualizes that information with my prompt and outputs the content.
>
> **[3:18](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=198)** Let's run it and see what happens.
>
> **[3:19](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=199)** So I'll say Vancouver this time and here we get a better view of what is actually happening in the interaction between the GPT and the external API.
>
> **[3:29](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=209)** So first we call the HTTP endpoint.
>
> **[3:31](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=211)** So here you see what is actually being called.
>
> **[3:33](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=213)** We have api.[openuv.io](https://openuv.io).
>
> **[3:36](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=216)** It's a get request, and we go to API/v1/uv and the operation is GetUVIndex, which is this operation over here.
>
> **[3:44](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=224)** Now what's important here is the GPT is taking the input, which is Vancouver, and figuring out the latitude and longitude of Vancouver, and then passing that information on.
>
> **[3:55](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=235)** Then we get the response, so here you can see what the response looks like.
>
> **[3:58](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=238)** This is the full response.
>
> **[4:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=240)** So this is JSON data about the UV index in the location.
>
> **[4:04](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=244)** So you know, we could just return this, but this is not human readable unless you really know what you're doing.
>
> **[4:10](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=250)** So instead, the GPT is grabbing that information, interpreting it, and creating a human language output.
>
> **[4:16](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=256)** Now that you see what's possible here, you see why I'm saying this is going to be revolutionary?
>
> **[4:21](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=261)** Because while this is a really trivial example that just goes and gets some UV data and returns it to us, this same functionality can be used for things like controlling IOT devices, or populating databases or pulling data from databases or interacting with automation services.
>
> **[4:40](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=280)** The opportunity here is boundless because we are now just using the GPT as a conversational layer to external services, and we can build those external services in any way we want.
>
> **[4:52](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=292)** That's why actions are exciting, and I think there's going to be a lot of stuff happening in this space.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (14), api (10), http (1), json (1), iot (1)
> **Code Keywords:** let (3), this, (3), pass (2), case, (1)
> **UI Navigation:** go to (2), click on (1)
> **URLs:** [openuv.io](https://openuv.io) (2)
> **API Endpoints:** /v1/uv (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Best Practices:** the key is (1)


### 2. Going Further

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Going further
> [LinkedIn Learning](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=0)** - All right, I got you all excited about GPTs.
>
> **[0:03](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=3)** Now, before you go out and try to do this on your own, a couple of things to keep in mind.
>
> **[0:07](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=7)** Number one, as of this recording in November 2023, GPTs are only available to ChatGPT Plus and ChatGPT Enterprise subscribers.
>
> **[0:16](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=16)** That means paid subscribers.
>
> **[0:18](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=18)** They are also in a rollout phase, so they're not available to all paid subscribers yet, but that will likely happen soon.
>
> **[0:26](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=26)** So if you're on a free account, you might not have access to it and it's still unclear whether these features will be rolled out to everyone for free.
>
> **[0:34](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=34)** And I think that probably will happen once the marketplace comes online.
>
> **[0:38](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=38)** But it's unclear because we don't have a marketplace yet and everything about this is in constant evolution.
>
> **[0:45](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=45)** And that's number two.
>
> **[0:47](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=47)** All of this stuff is moving really fast.
>
> **[0:49](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=49)** So there's a chance that by the time this course comes out and you see it, things will have changed from what I showed you.
>
> **[0:56](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=56)** But the core functionality of GPTs will stay the same because they are very much custom instructions, custom knowledge, and custom actions.
>
> **[1:06](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=66)** And those are the key pieces to getting these things to work.
>
> **[1:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=69)** And even if the user interface changes or some of the features are added or moved or changed in some way, the core functionality will stay the same.
>
> **[1:17](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=77)** Now, if you want to know more about GPTs, there are two sources of information right now that I can point you to.
>
> **[1:22](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=82)** The first one is the blog post "Introducing GPTs" that has a full breakdown of what was announced in November 2023 and instructions and links about how to use this feature.
>
> **[1:33](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=93)** The second is the documentation for the actions in GPTs.
>
> **[1:38](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=98)** And again, this is a fast moving space and this documentation is quite sparse at the moment, but is clearly being built out as people start using these features.
>
> **[1:47](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=107)** So I anticipate, especially in the actions space, that a lot of things will change and a lot of functionality will come online in the near future.
>
> **[1:56](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=116)** On top of that, we have lots of courses on how to use ChatGPT, how to use large language models and how to use AI, in particular courses on things like prompt engineering.
>
> **[2:06](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=126)** And all of this still applies to GPTs.
>
> **[2:08](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=128)** So if you're interested in working with GPTs and you also want to figure out how to make things work better with AI, go check out our other courses in the library.
>
> **[2:17](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=137)** Now all that's left for me to say is (instructor speaking in foreign language), go build some amazing things with GPTs and I'll see you in the next course.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1), go build (1)
> **Code Keywords:** interface (1)
> **Cross-References:** in the next (1)
> **Documentation:** the documentation (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - all (1)


## Skills Covered

- Custom GPTs
- OpenAI Products
- Artificial Intelligence (AI)
- ChatGPT

## Path Context

### In [[Getting Started with Custom GPTs, Copilots, and AI Agents]]
**1 of 5** | [[ChatGPT- Publishing GPTs on the GPT Store]] →

## Appears In

- [[Getting Started with Custom GPTs, Copilots, and AI Agents]]

## Related Courses

_Courses sharing skills:_

- [[Better Relationships and More Sales- Using ChatGPT to Sell]] — Artificial Intelligence (AI), ChatGPT
- [[Prompt Engineering and AI Agents with ChatGPT]] — Artificial Intelligence (AI), ChatGPT
- [[Power BI- Working Together with ChatGPT]] — Artificial Intelligence (AI), ChatGPT
- [[Learning ChatGPT for Business Analysis]] — Artificial Intelligence (AI), ChatGPT
- [[Generative AI for Data Engineering- ChatGPT Power Tips]] — Artificial Intelligence (AI), ChatGPT

---

[↑ Back to top](#)