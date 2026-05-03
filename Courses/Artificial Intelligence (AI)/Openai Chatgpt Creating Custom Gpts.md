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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Openai%20Chatgpt%20Creating%20Custom%20Gpts.md)

![Openai Chatgpt Creating Custom Gpts](https://media.licdn.com/dms/image/v2/D560DAQEgFqptlvCtTA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1701193175841?e=2147483647&amp;v=beta&amp;t=KtRvJKoZQXKqPIzg28i2gZprrhs4UzqZlX1jU0GJtlY)

# Openai Chatgpt Creating Custom Gpts

> GPTs allow you to create custom versions of ChatGPT with their own instructions, knowledge retrieval, and actions for highly specialized and targeted functionality using natural language instructions and basic uploads. In this course you’ll learn how to harness the power of custom GPTs for everything from small personal tasks to large enterprise use cases.

> [LinkedIn Learning](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts) | Intermediate | 12K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Build your own custom GPTs with ChatGPT](#build-your-own-custom-gpts-with-chatgpt)
- [**1. Creating Custom GPTs**](#1-creating-custom-gpts) (7 videos)
  - [What is a GPT?](#what-is-a-gpt)
  - [Using existing GPTs](#using-existing-gpts)
  - [Creating a GPT from scratch](#creating-a-gpt-from-scratch)
  - [Adding web browsing, image creation, and data processing](#adding-web-browsing-image-creation-and-data-processing)
  - [Adding knowledge to GPTs by uploading data](#adding-knowledge-to-gpts-by-uploading-data)
  - [Exploring privacy and copyright](#exploring-privacy-and-copyright)
  - [Adding custom actions](#adding-custom-actions)
- [**2. Going Further**](#2-going-further) (1 videos)
  - [Going further](#going-further)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Build your own custom GPTs with ChatGPT](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/build-your-own-custom-gpts-with-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/build-your-own-custom-gpts-with-chatgpt?u=76281980&t=0)** - Let me guess. One of the very first questions you had when you started working with ChatGBT was, how do I make a custom version of this, one that I can come back to later? One that I can customize to perform specific tasks in a specific way, and one that I can share with my colleagues, my friends, or even with the world? Now we have an answer in the form of GPTs. Let me explain. GPTs are a new feature of ChatGBT that allows you to create custom versions of [[ChatGPT]] with custom instructions, custom knowledge, and custom actions. This unlocks a whole new marketplace of ideas for AI, and coincidentally, will also be available through a real marketplace. Whether we create them, use them, or both, GPTs, give us all new AI capabilities and I'm here to show you how to get it right. Let's get crackin'.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - let (1)


### 1. Creating Custom GPTs

[↑ Back to Table of Contents](#table-of-contents)

#### [What is a GPT?](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=0)** - Before we get started, a quick personal note from me, GPTs are a brand new feature in a brand new field in a brand new segment of technology. And because it is so new, there's likely to be significant changes even between the time I record this course and you watch it. And I say that because in the past five days, the interface I'm about to show you was changed three times. So there's a high likelihood that what you see on your screen won't match what you see on my screen exactly, and it will remain like that for the foreseeable future as all of these technologies evolve and mature and new use cases emerge and the features are extended. So as you work with AI tools of any kind, and especially with something like GPTs, you have to embrace the uncertainty and the constant change and try to just keep up with the core features and functionality. Because the key to this is while the interface may change and while buttons may move around and while new features may be added or old features be removed, the core functionality will not change. And the core functionality of GPTs is to customize your own version of [[ChatGPT]] to make it more specialized. GPTs were introduced in November, 2023, exactly one week ago from when I'm recording this. And the idea of GPTs is you go into ChatGPT and create your own specialized version that does a specific task or performs some sort of process
>
> **[1:34](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=94)** in a specific way every time. The examples that are provided here on the website are things like a creative writing coach or a laundry buddy or a tech advisor. And looking at these examples, you get the overall idea. When you create a GPT, you're basically setting up your own version of ChatGPT with a set of specialized instructions, and you don't have to know how to write these prompts. The system will actually help you write them. You just talk to the system and it'll write the prompt for you. Then if you want extended functionality, like for example, let the bot go and look up things on the internet, you can activate web search. If you wanted to generate images, you can activate [[DALL-E]] 3, And if you wanted to process information, for example, process spreadsheets or even run some code, you can activate the code interpreter. On top of that, you can also upload reference documents into the system, so when you ask it questions, it'll reference those documents and provide answers. This is a much asked for feature in ChatGPT and something that you normally would only get in a custom built application. And finally, you can also build something called custom actions. Now, I say this with a bit of a caveat, because as I'm recording this, the custom actions function does not work very well, so the example I'll provide later on the course is fairly trivial, but there's enormous potential for this. The idea is you can plug your GPT into an external API or an external service and tell the bot to be the natural language interface between the human user
>
> **[3:07](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/what-is-a-gpt?u=76281980&t=187)** and some complex machinery on the backend. So you can ping a system and pull data out of it, and then get that data processed by the GPT. There is huge potential in this new technology, especially in how it democratizes use of advanced AI models, because once you create a GPT, you can choose to share it with others and they can take advantage of it. And in the near future, there will also be a marketplace where people can share their GPTs and also share their GPTs for a price. So this will result in people that just build things to share with others, and for companies to build customized solutions, and you're likely to see ChatGPT and GPTs become its own marketplace of not only ideas, but functionality that allow you to talk directly to external services. This all makes me really excited about our shared future with AI and how we will build that future together. So in the [[Representational State Transfer (REST)|rest]] of the course, we'll take a deep dive and look at how to use GPTs, how to build your own GPTS, and how to leverage all of this advanced functionality.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (5), [[DALL-E]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** gpt (4), api (1), gpts (1)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Warnings:** caveat (1)
> **Speakers:** - before (1)

#### [Using existing GPTs](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=0)** - GPTs are part of [[ChatGPT]]. And to get to them, you go to ChatGPT. And right now you find them under this button here in the sidebar called Explore. Right Now when you open Explore, you get a list first of My GPTs. These are any GPT you've created. Then Recently Used GPTs. These are any GPT you've used recently. And finally, a list of example GPTs that are generated by OpenAI. So these demonstrate how GPTs work and how they can do different things. Now, OpenAI has said that they will create a marketplace for GPTs that will be released within the month. So right now it's November, 2023. That means if you're watching this in December, 2023, by their own stipulation, there should be a marketplace available. And I have to assume that that marketplace will exist in this same page in some form. It's also a good chance it won't look exactly like what you're seeing on my screen, but there will be a marketplace here and you will be able to interact with it. And from that marketplace, you will be able to select different GPTs to use. So let's do just that. I'll go up and find a GPT I created. We'll be building out a similar GPT to this one in this course. And the purpose of this particular GPT is to explain complex film production terms. Next time you watch a film, pay close attention to the credits, and you'll notice that a lot of people have very interesting titles like Gaffer and Best Boy and things like that. This GPT uses real knowledge that I've uploaded into the system to explain what these terms mean. So for example, I can go in here and say, what is a gaffer? And because of how I've set up the system,
>
> **[1:34](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/using-existing-gpts?u=76281980&t=94)** it's also saying gaffer is related to other things. Do you also want to know information about those other things? In this case, best boy and gaffer tapes. I can say what is a best boy? And again, the system will go look at its in initial knowledge, search through that knowledge, and then combine the knowledge with the language capability to create a response that matches my criteria. And that's really all there is to it. A GPT is a custom version of ChatGPT specialized to perform a specific task or meet a specific goal. So as you build your own, you'll be able to identify what task you want and then customize it to do exactly that task really well. And as other people start sharing theirs and there will be a marketplace, you'll be able to find a GPT that meets whatever goal you're trying to accomplish or connect to whatever service you're trying to connect to.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (3)
> **Env Vars:** gpt (8)
> **CLI Commands:** find (3)
> **Definitions:** is a  (3)
> **UI Navigation:** go to (1), in the sidebar (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - gpts (1)

#### [Creating a GPT from scratch](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=0)** - All right, let's create a GPT from scratch. To do that, you go to [[ChatGPT]], go to Explore, and then select Create a GPT. Here you have two options. You can either use a conversational interface to talk to the GPT builder and have it build the GPT out for you, or you can go to configure it manually by giving it a name, adding a photo, giving you a description, and putting in the prompt yourself. But you don't have to choose here. You can start in the create column and then switch over to configure to refine your information, then go back to create and continue creating. These two features work together to help you create your GPT. So in my example, I want to create a GPT that helps me write better code for [[Web Development]] projects, and importantly sources information from trusted sources on the web to do so. First, I'll give it some basic instructions. So it's asking me, what would you like to make? And I'll say web development assistant that gives me tips on how to build standards based accessible front and web projects. When I send off this request, the GPT builder will figure out what I'm trying to do and start building out not only the GPT, but also the main prompt for the GPT. Once it's done, its initial work, it asks me, what do you want to call this GPT and it gives me a suggestion. Web Dev Wizard. I can choose to use that by just saying yes or I can give it another name
>
> **[1:33](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=93)** so I'll just say yes. And you'll notice when I say yes, it'll apply this name to the GPT. Once the name is created, it'll also start generating an automatic profile picture for me. And for this, it uses [[DALL-E]] three. When the generation is complete, it asks me, is this a good image or do you want me to do another one? Do you want to make any changes or do you want to try something else? So here I can either accept the image as is, or I can ask it to make changes to it. So I'll just say, use this one. Now the system starts asking me questions about how the GPT should behave, and here you can be as descriptive as you want. Now keep in mind this is a chat bot and you're really talking to ChatGPT here, so it'll be quite wordy and you can actually like intercept it and just tell it what you want. You don't need to wait for it to type out the entire instruction because quite honestly, it talks too much and it can be really annoying. But I'll give it some instructions here to just give it a general direction of where I want to go.
>
> **[2:42](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=162)** The core piece of this particular bot is I always wanted to consult MDN web docs for further reading and provide relevant links to the examples. So this instruction needs to be very clearly stated in the instructions to the GPT. Now, keep in mind you're working with a large language model here, not an actual person. So even if you're giving it super strict instructions here, it will not always follow those instructions exactly as I'm sure you'll see when we run some examples on this. Okay, now it says, now let's think about Web Dev Wizard should interact with its users. How do you envision a tone style of communication? Should it be strictly professional and straightforward or more friendly and casual, especially when explaining complex concepts? I'll say professional, curt, to the point as just because I like documentation that just gets to the point right away.
>
> **[3:38](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=218)** Then the GPT builder goes into two questions that seem to be programmed into the system. The first one is, is there anything specific you'd like this GPT to avoid discussing or doing? Like is there a certain topic you don't want to touch on or is there a certain type of advice you don't want? So this is a way of constraining the bot so that the user can't like help the bot walk out across the fence and do other things. So I'll say stick to front and Web Dev topics only, and the system will try to confine itself to those topics. Again, it's a large language model so it won't always succeed, but at least this gives some level of confinement of the subject matter. And the final question it usually asks is some form of how do you want to respond when the user isn't giving enough information? Or in this case, should it address users in a specific way or adjust its responses based on the user's skill level in web development? So I'll say based on the skill. Alright, so now I'll let the system finish that instruction and once it's done, we can test it right in this interface to see if it's creating the output we're looking for. The initial build process is now complete and we can start testing it. So here in the preview, you see the Web Dev Wizard has four starter questions we can choose from how do I make a website more accessible? What are the most best practices for responsive design and so on. So I'm going to ask you something very specific.
>
> **[5:12](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=312)** How do I make CSS gradient? Now based on my instructions, the system should now go and not only give me a code example, but also reference documentation from MDN. So let's see if it does that and look at that. Here we have documentation directly from MDN, which means the system not only answered my question to my specifications, but also went online and found relevant information from the source I specified. Now that the initial state is complete, we can go look at the configure tab to see what actually happened. We got a profile picture, we got a name. You can edit that name to anything you want. A short description. This is the description that appears in the initial display. Then we have the instruction. So this is the initial prompt here. You can go in and edit the prompt in any way you want, add anything you want in addition, and basically do whatever you want. This is [[Prompt Engineering]]. This is where you do it. Then below we have a series of conversations starters. So those are the starters that you saw when we started working with the bot. And here you can edit them or change them or add in new ones if you want to. These again are just strings of texts. There's no actual functionality associated with them. So you can really write whatever you want. This is just to get users started using the GPT. And then finally below here you have some additional features we'll talk about more later, including uploading knowledge, capabilities and actions. So in this case, because this bot is doing searches on the web, I'm going to activate just web browsing. So I'll go in here and turn off DALL-E image generation
>
> **[6:46](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/creating-a-gpt-from-scratch?u=76281980&t=406)** and quote interpreter. When I do that, you'll notice the preview changes because I'm changing the bot and I can now safely just save and exit. Now, when I choose to save, I have three options. I can save this GPT only for me, meaning I'm the only one who can use it. I'm the only one who sees it. I can save it for only people with a link, meaning you can send the link to others and they'll be able to use it or I can save it publicly. And if I do, this GPT may appear in the GPT store or marketplace, which will be coming soon. So if you want to just share your GPT with the world and have other people discover it organically, you choose this option. For me, I'll select only me and click confirm. This saves my GPT and I go back to ChatGPT with the GPT activated in the browser. So now I can play around with this GPT, and if I go back to explore, you'll see it sits right here, Web Dev Wizard. You can also see that it says that it's locked, so only I can use it. And if I want to, I can go and delete it right from this interface. I can click edit to go back into the editing interface where I can keep chatting with it and give it new instructions to alter its behavior. I can go in and configure it more specifically if I want to, and I can also delete it from right within here. That's the entire process of creating a GPT. So if you're just looking to create a customized interface of some kind, inside ChatGPT the process I just walked you through is all you have to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (4), [[Web Development]] (3), [[DALL-E]] (2), [[Prompt Engineering]] (1)
> **Env Vars:** gpt (24), mdn (3), dall (2), css (1)
> **CLI Commands:** make (5)
> **Prerequisites:** configure (4)
> **Cross-References:** go back to (3)
> **Documentation:** mdn (3)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2)

#### [Adding web browsing, image creation, and data processing](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=0)** - One of the features that make GPT so powerful is your ability to control which advanced capabilities each GPT has. Let me show you. I'll create a new GPT and this time I'll go directly to configure and call it color, Adult Coloring GPT. This GPT will use the [[DALL-E]] 3 capability to generate adult coloring pages. First, we need to put in an instruction, so this is the prompt. And then we scroll down to capabilities and activate just the capability we want. In this case, DALL-E image generation. Now I can immediately test my GPT to see what it outputs. So I'll say quaint modern house in a snowy landscape. Because I've activated the DALL-E image generation capability, the GPT now automatically calls DALL-E 3 to generate the image for me, even though I didn't explicitly say that that's what I wanted, I just said a quaint modern house in a snowy landscape. The response I get is a generated image that fits the criteria, both of the original instructions and of my request. Now, looking at this, I can see immediately that my instructions are correct, but my request was not specific enough. And then I can go in and either change my instructions to be more specific or I can go change my request to be more specific. But as you can see, the capability automatically kicks in when I activate it. The key here is each GPT you build
>
> **[1:34](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-web-browsing-image-creation-and-data-processing?u=76281980&t=94)** can have one of, two of, or all three of these advanced capabilities activated, web browsing, image generation, and advanced [[Code Interpretation]]. The advanced code interpretation feature is actually quite interesting because it allows the GPT to run code on its own. So for example, you can upload a spreadsheet and ask it to do something with the data, and it'll do that. Again, this relies heavily on your instructions and the input the user makes, but this gives you the capability of turning on and off these capabilities for each individual GPT to further customize its behavior.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[DALL-E]] (4), [[Code Interpretation]] (2)
> **Env Vars:** gpt (10), dall (4)
> **CLI Commands:** make (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - one (1)

#### [Adding knowledge to GPTs by uploading data](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=0)** - GPTs introduced some new advanced features to [[ChatGPT]] interaction that have not been available in ChatGPT until now and still are not available in ChatGPT. They're only available in GPTs. One of those features is the ability to upload knowledge, so files with information into the system that the system then refers to anytime you ask questions. This is really important because when you're working with ChatGPT in general and you just ask it a question without providing any type of context, the system is just bubbling to the surface statistical models of language that look like they are the correct answer, but might not actually be. And unless you then provide a bunch of additional information, either in your prompt or by referring to things on the internet and saying, go look it up on the internet, you don't know for sure if the information you are getting is actually accurate information or just a language construct that looks accurate but is in fact just made up, a so-called hallucination. One way to get around this problem is by using retrieval augmented generation or RAG for short. Now, RAG refers to the LLM model, the large language model, pinging a document and pulling content out of that document and then using that content in its response. That's what we can do using this knowledge feature in GPTs, upload documents and then have the GPT refer to those documents in its responses. Let me show you how that works. I'll create a brand new GPT here and I'll go to configure and call it movie term explainer. And just to save some time,
>
> **[1:36](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=96)** I've already written the prompt here, is just saying friendly helper that explains film terminology and some other information about it being short and concise. Now, all I need to do is go down here to knowledge and upload a file. Now, technically you can upload multiple files if you want to, I'll just upload this one. It's a document of film terminology I found on the internet. My experience is if you upload more than one file, the system is less likely to go looking in the files, but this depends on what type of file it is and how the files are structured. If they're very different files, then it operates differently from with, they are very structured for example. Okay, now that the file is uploaded, I'll go down and turn off all the other capabilities so that the system won't go out and try to do things on the internet or generate images or try to interpret the code that's inside this file. And then I'll ask a question. Now, because I've activated the knowledge feature, the GPT will go looking in the uploaded knowledge to see if it can find answers to my questions, and then it retrieves that information, augments it using its language model and outputs a response to match my query. This is enormously powerful because with the ability to upload documents into the system and then talk to those documents, you unlock a whole new world of interactions. For example, if you have a complex document that you need to refer to anytime you're performing a task, you can upload that document in
>
> **[3:08](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-knowledge-to-gpts-by-uploading-data?u=76281980&t=188)** and then just ask for specifics. For example, if you have documentation on how to run a complex operation system or if you have documentation on how to write a specific programming language, or if you have a help desk documentation or something like that, you can upload it into the system and then use the system as a natural language interface to those documents and ask them questions. And there's more. If you're a student and you are working with a complex textbook and you have the rights to that textbook in a digital format that you can upload into the system, you can upload the textbook into the system and then talk to the textbook. Now, as I say this, there's one caveat beyond the copyright thing that if you upload a very large textbook, then it won't perform as well as if you have a smaller one. So I would right now recommend this is more for like academic articles than it is for entire textbooks, but it's still enormously powerful because you can for example, upload an article and say, summarize the article or quiz me on the article, or give me the highlights of this section within the article, and it'll be able to respond. And since you can create as many GPTs as you want, you can create a GPT for every single article or every single textbook or every single documentation that you're working with. Pretty cool, eh?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (4)
> **Env Vars:** gpt (4), rag (2), llm (1)
> **Analogies:** for example (4)
> **Definitions:** refers to (2)
> **CLI Commands:** find (1)
> **UI Navigation:** go to (1)
> **Warnings:** caveat (1)
> **Prerequisites:** configure (1)

#### [Exploring privacy and copyright](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=0)** - Okay, when I first saw this knowledge feature, I had an immediate question and there's a good chance you have the same question, so let's address it. What exactly happens to copyright and [[Privacy]] when you upload documents into a GPT, especially if that GPT is shared with other people? Does OpenAI protect the privacy and is OpenAI looking into the files? This is a really complicated question because it relates to copyright and AI, something that is currently being battled in courts around the world, and it's not settled law. And I am not a lawyer, so I can't provide any legal advice. What I'll do instead is point at the features that exist inside the interface and also what OpenAI has said publicly about this, and then you can use that information to make your own decisions about how to work with this system. Now, to understand what is happening with the knowledge inside GPTs, we first have to take a look at what is happening to your regular interactions in [[ChatGPT]]. If you open ChatGPT, click on your name at the bottom, then go to Settings and Beta, you get a series of settings, including this one here, Data Controls. And this is where you choose whether you want to share your chat history and training data with OpenAI. This feature is turned on by default, and if you turn it off, you lose your history. So you won't see all the chats you've previously done in the sidebar here. What happens if you have it turned on, though, is OpenAI can look at your chats. They can look at what you input and what the system outputs. And there's a good reason for that. First of all, ChatGPT was originally a research project
>
> **[1:36](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=96)** from OpenAI to see how people would interact with an LLM model like this. So therefore, it was always meant to collect data and look at these interchanges. Secondly, because we are now working with non-deterministic systems, these [[Large Language Models (LLM)|large language models]] are unpredictable in their behavior, so it's very important for the people who are building these systems to know how they interact and observe when people are trying to do the same thing many times and not getting the results they want. So we're in a bit of a dilemma here as users. If we don't share our data, the systems can't improve. But if we do share our data, they can see what we're doing. And that requires a high level of trust from each individual user. But like I said, this setting is turned on by default, and most users are unaware of it, and they're just using the system. So that means if you create a GPT and you share it with other people, and they have this setting turned on, then they are sharing their data from their interactions with your GPT with OpenAI. So when you upload a document to the knowledge section in the GPT, a new section appears at the very bottom called additional settings. And under here, we have a pre-checked box that says use conversation data in your GPT to improve our models. This message here says, basically, we can look at the conversation that's coming out of this GPT, including the conversations that are surfacing information from your documents. So if you're uploading a document and you don't want OpenAI to see what's in the document,
>
> **[3:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=189)** you need to uncheck that box. And that also applies if this is a private GPT that only you can see. Now, this box only appears if you upload a document, because if you just have a regular GPT that doesn't have a document, then all OpenAI is seeing is the instructions and your actual chat. So there's no risk of leaking personal information or private information from a document, for example. But there's another layer to this. What happens if you upload a document that you have the rights to read on your own, but you don't have the rights to share? That's where things get really interesting. So according to OpenAI in conversation, they say if you create a GPT and you share it publicly, then they will run it through some form of copyright check. So my assumption here is if you upload a book, for example, there's a high likelihood that the system will discover, hey, this is a book that is under copyright, and then take the GPT down, or at least remove it from the public marketplace. And once they open the GPT store, they definitely have to run those kinds of checks on anything. But in conversation, they also say they don't run those types of checks on private GPTs because they are private and people can do whatever they want with their own data. And they won't do it on a ChatGPT enterprise accounts because that's inside the enterprise bubble. And there's even more. At OpenAI Dev Day, they made a lot of announcements. And one of those announcements can be found quite far down in the blog posts. Let's see, where is it? It is here, copyright shield, where it says OpenAI is committed
>
> **[4:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/exploring-privacy-and-copyright?u=76281980&t=283)** to protecting our customers with built-in copyright safeguards in our systems. Today, we're going one step further by introducing copyright shield. We will now step in and defend our customers and pay the cost incurred if you face legal claims around copyright infringement. And then it says, this applies to generally available features of ChatGPT Enterprise and our developer platform, which is understood as the API. That means to my reading, as a non-legal expert and not a lawyer, this does not apply to regular ChatGPT accounts. I might be wrong, but it very specifically states ChatGPT Enterprise and our developer platform, which is the API. It does not state ChatGPT. So from that, it sounds like the copyright protection does not extend to regular users. Then again, regular users probably wouldn't need that level of copyright protection unless they are deliberately uploading content that is not their property and then trying to share that out, in which case the system should catch it. Like I said, this is complicated and untested even in courts. So your miles will vary, as they say.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (8), [[Privacy]] (2), [[Large Language Models (LLM)|Large language models]] (1)
> **Env Vars:** gpt (12), api (2), llm (1)
> **UI Navigation:** click on (1), go to (1), in the sidebar (1), open the (1)
> **Definitions:** is a  (3)
> **Analogies:** for example (2)
> **CLI Commands:** make (1)
> **Speakers:** - okay (1)

#### [Adding custom actions](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=0)** - The second new feature introduced by GPT is actions, and I think this is the feature that's going to change the entire landscape around both [[ChatGPT]], GPTs and how we interact with AI, here's why. Actions allow us to use GPTs to talk to external services and their APIs. That's a very technical way of saying if you have an external service, let's say your email provider or a weather service, or a sports service, or anything else that you can programmatically talk to, you can use a GPT as the conversational layer between yourself and that service. So you can say to a GPT, go look up the weather for today, and the GPT will go call a service externally and get normal weather data and then bring it in and contextualize it for you in real time. This is huge because it introduces a whole new set of capabilities to ChatGPT and GPTs, and it's extensible to whatever developers want it to be. It's also a developer-centric feature and well outside scope of this course, so I'll just show you how it works and then you can go look at it yourself later. In my GPTs, I've created a new GPT called sunscreen or no, that tells me whether or not I should wear sunscreen, and all I have to do here is put in a location. So I'll say Burnaby, which is where I live, and then sunscreen or no will go to an external service called OpenUV and look up the UV index for my current location. Once that comes back, it'll tell me what the UV index is, it says it's relatively low,
>
> **[1:34](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=94)** the weather here is not great today, and then it tells me whether or not I should be wearing sunscreen. So it says it's not particularly sunny and the need for sunscreen is minimal. Now, how does this work? Well, let's take a look on the backend. The GPT has a very simple set of instructions. Check the UV index for the given location and say if it's sunny and if the user needs to wear sunscreen. Of course I could expand on this and make it more useful, but this is for demonstration purposes. What's key to this GPT is this part down here, actions. You see it's pointing at api.[openuv.io](https://openuv.io). Well, if I open this, here we have the open API schema for Open UV. This schema describes how the GPT will talk to the API, what information goes in and what information comes out. And scrolling down, you'll see here there is one endpoint available. The action is a get action that is sent to the api/v1/uv endpoint, and with that I send along an API key. If I click on this, you'll see we have different options here. You can say no authentication. You can pass an API key or an OAuth key, and then in this case, I need to pass a custom key with the header name, X-access-token, and the key is hidden here. So what happens here is whenever I ask this GPT a question, it captures the question, contextualizes it to figure out what exactly I'm asking. Then goes and looks at this open API schema to figure out what the system, the API, needs to be able to operate. Then it collates that data and sends it off to the API.
>
> **[3:09](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=189)** The API responds and sends data back, and then the GPT contextualizes that information with my prompt and outputs the content. Let's run it and see what happens. So I'll say Vancouver this time and here we get a better view of what is actually happening in the interaction between the GPT and the external API. So first we call the HTTP endpoint. So here you see what is actually being called. We have api.[openuv.io](https://openuv.io). It's a get request, and we go to API/v1/uv and the operation is GetUVIndex, which is this operation over here. Now what's important here is the GPT is taking the input, which is Vancouver, and figuring out the latitude and longitude of Vancouver, and then passing that information on. Then we get the response, so here you can see what the response looks like. This is the full response. So this is [[JSON]] data about the UV index in the location. So you know, we could just return this, but this is not human readable unless you really know what you're doing. So instead, the GPT is grabbing that information, interpreting it, and creating a human language output. Now that you see what's possible here, you see why I'm saying this is going to be revolutionary? Because while this is a really trivial example that just goes and gets some UV data and returns it to us, this same functionality can be used for things like controlling [[IoT]] devices, or populating [[Databases]] or pulling data from databases or interacting with automation services. The opportunity here is boundless
>
> **[4:43](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/adding-custom-actions?u=76281980&t=283)** because we are now just using the GPT as a conversational layer to external services, and we can build those external services in any way we want. That's why actions are exciting, and I think there's going to be a lot of stuff happening in this space.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2), [[Databases]] (2), [[JSON]] (1), [[IoT]] (1)
> **Env Vars:** gpt (14), api (10), http (1), json (1), iot (1)
> **UI Navigation:** go to (2), click on (1)
> **URLs:** [openuv.io](https://openuv.io) (2)
> **API Endpoints:** /v1/uv (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Best Practices:** the key is (1)


### 2. Going Further

[↑ Back to Table of Contents](#table-of-contents)

#### [Going further](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=0)** - All right, I got you all excited about GPTs. Now, before you go out and try to do this on your own, a couple of things to keep in mind. Number one, as of this recording in November 2023, GPTs are only available to [[ChatGPT]] Plus and ChatGPT Enterprise subscribers. That means paid subscribers. They are also in a rollout phase, so they're not available to all paid subscribers yet, but that will likely happen soon. So if you're on a free account, you might not have access to it and it's still unclear whether these features will be rolled out to everyone for free. And I think that probably will happen once the marketplace comes online. But it's unclear because we don't have a marketplace yet and everything about this is in constant evolution. And that's number two. All of this stuff is moving really fast. So there's a chance that by the time this course comes out and you see it, things will have changed from what I showed you. But the core functionality of GPTs will stay the same because they are very much custom instructions, custom knowledge, and custom actions. And those are the key pieces to getting these things to work. And even if the user interface changes or some of the features are added or moved or changed in some way, the core functionality will stay the same. Now, if you want to know more about GPTs, there are two sources of information right now that I can point you to. The first one is the blog post "Introducing GPTs" that has a full breakdown of what was announced in November 2023 and instructions and links about how to use this feature.
>
> **[1:33](https://www.linkedin.com/learning/openai-chatgpt-creating-custom-gpts/going-further?u=76281980&t=93)** The second is the documentation for the actions in GPTs. And again, this is a fast moving space and this documentation is quite sparse at the moment, but is clearly being built out as people start using these features. So I anticipate, especially in the actions space, that a lot of things will change and a lot of functionality will come online in the near future. On top of that, we have lots of courses on how to use ChatGPT, how to use [[Large Language Models (LLM)|large language models]] and how to use AI, in particular courses on things like [[Prompt Engineering]]. And all of this still applies to GPTs. So if you're interested in working with GPTs and you also want to figure out how to make things work better with AI, go check out our other courses in the library. Now all that's left for me to say is (instructor speaking in foreign language), go build some amazing things with GPTs and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (3), [[Large Language Models (LLM)|Large language models]] (1), [[Prompt Engineering]] (1)
> **CLI Commands:** make (1), go build (1)
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