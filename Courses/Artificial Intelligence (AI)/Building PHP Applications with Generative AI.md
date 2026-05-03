---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: building-php-applications-with-generative-ai
url: "https://www.linkedin.com/learning/building-php-applications-with-generative-ai"
duration_minutes: 83
duration: 1h 23m
level: Intermediate
updated: 4/5/2024
learners: 5399
skills:
  - Web Development
  - Generative AI
  - Artificial Intelligence (AI)
  - PHP
exercise_files: true
github: "https://github.com/LinkedInLearning/4515339-building-php-applications-ai"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFNS19neoqiYw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712337853048?e=2147483647&amp;v=beta&amp;t=4MYtPZ6gF_yOeIclOpcBdMphzUqvsb4F6ljcfbTLpv8"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Generative AI Skills for Web Developers]]'
prev_courses:
  - '[[Prompting ChatGPT with Multimodal Techniques]]'
next_courses:
  - '[[Integrating Generative AI into JavaScript Web Projects]]'
path_nav: '[{"path":"Building Generative AI Skills for Web Developers","position":5,"total":10,"prev":"Prompting ChatGPT with Multimodal Techniques","next":"Integrating Generative AI into JavaScript Web Projects"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - topic/web-development
  - skill/web-development
  - skill/generative-ai
  - skill/artificial-intelligence-ai
  - skill/php
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Building%20PHP%20Applications%20with%20Generative%20AI.md)

![Building PHP Applications with Generative AI](https://media.licdn.com/dms/image/v2/D560DAQFNS19neoqiYw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1712337853048?e=2147483647&amp;v=beta&amp;t=4MYtPZ6gF_yOeIclOpcBdMphzUqvsb4F6ljcfbTLpv8)

# Building PHP Applications with Generative AI

> Generative AI can be a powerful assistant for all digital workers, including web application developers. With the rapid development of generative AI tools, it’s important for web developers to understand how these tools work and how they can be leveraged for code writing, validation, and testing. In this course, Joe Casabona—college-accredited course developer and founder of Creator Courses—covers

> [LinkedIn Learning](https://www.linkedin.com/learning/building-php-applications-with-generative-ai) | 1h 23m | Intermediate | 5K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [How can generative AI help with PHP?](#how-can-generative-ai-help-with-php)
  - [What you should know](#what-you-should-know)
  - [How this course works](#how-this-course-works)
- [**1. Planning**](#1-planning) (6 videos)
  - [Defining requirements](#defining-requirements)
  - [Use cases](#use-cases)
  - [User stories](#user-stories)
  - [Creating timelines](#creating-timelines)
  - [Challenge: Generate a requirements document](#challenge-generate-a-requirements-document)
  - [Solution: Generate a requirements document](#solution-generate-a-requirements-document)
- [**2. Writing Code**](#2-writing-code) (5 videos)
  - [Using ChatGPT to get code snippets](#using-chatgpt-to-get-code-snippets)
  - [Working with GitHub's Copilot](#working-with-githubs-copilot)
  - [Other code-writing tools](#other-code-writing-tools)
  - [Challenge: Writing a PHP class sorter](#challenge-writing-a-php-class-sorter)
  - [Solution: Writing a PHP class sorter](#solution-writing-a-php-class-sorter)
- [**3. Testing Your Code**](#3-testing-your-code) (5 videos)
  - [Automated testing vs. AI testing](#automated-testing-vs-ai-testing)
  - [Writing unit tests with AI](#writing-unit-tests-with-ai)
  - [Generating test data](#generating-test-data)
  - [Challenge: Generate test data for the provided class](#challenge-generate-test-data-for-the-provided-class)
  - [Solution: Generate test data for the provided class](#solution-generate-test-data-for-the-provided-class)
- [**4. Documentation**](#4-documentation) (3 videos)
  - [Types of documentation](#types-of-documentation)
  - [Creating Doc Blocks](#creating-doc-blocks)
  - [Creating comments for code](#creating-comments-for-code)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [How can generative AI help with PHP?](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/how-can-generative-ai-help-with-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/how-can-generative-ai-help-with-php?u=76281980&t=0)** - "[[PHP]] and [[MySQL]] for the Absolute Beginner" was a book that basically had a permanent spot on my desk when I first started programming. Then that got replaced by online manuals like [php.net](https://php.net). Then various websites with specific code examples, and even an in-browser way to test code code. Now it seems [[Generative AI]] is the go-to for writing basic code, but you still need to understand that code. While we can get the basics down, it can't write all of the code for us. Plus, AI has way more utility beyond writing code. From planning to testing, AI can assist developers throughout the entire development lifecycle, and that's exactly what we're going to cover in this course. Hi, I'm Joe Casabona, a web developer and educator who's been making websites since 2001. So join me in my [[LinkedIn]] Learning course, which will show you how to leverage generative AI to build PHP applications.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (3), [[Generative AI]] (2), [[MySQL]] (1), [[LinkedIn]] (1)
> **CLI Commands:** php (3), mysql (1)
> **Env Vars:** php (2)
> **URLs:** [php.net](https://php.net) (1)

#### [What you should know](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/what-you-should-know?u=76281980&t=0)** - The main goal of this course is to teach you how to leverage AI in your [[PHP]] development efforts. This does not teach coding concepts. You should already know PHP, how to set up a coding environment and writing and troubleshooting code. Similarly, while we will be leveraging AI tools, we will not dive into exactly how [[Large Language Models (LLM)|large language models]] work or how to craft your prompts. If you need a primer on either, don't worry. We have lots of resources in the [[LinkedIn]] Learning Library for that, including our developer learning paths, essentials training courses, and several on [[Prompt Engineering]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Large Language Models (LLM)|Large language models]] (1), [[LinkedIn]] (1), [[Prompt Engineering]] (1)
> **CLI Commands:** php (2)
> **Env Vars:** php (2)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)

#### [How this course works](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/how-this-course-works?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/how-this-course-works?u=76281980&t=0)** - This course isn't just about the code. It's about the [[Application Development]] lifecycle from requirements planning to testing. As a result, we'll look at a wide range of AI tools, including [[ChatGPT]] to help us plan requirements, write [[PHP]] code and more. There will also be challenges and solutions. Due to the nature of [[Generative AI]], we'll focus more on the prompting than the actual output. Though we'll still make sure that the output is correct by testing it. Since we're working with a server-based technology, you'll need to set up either a local development environment or a server for you to write and test your code. If you need help with that, don't worry. We have lots of resources in the [[LinkedIn]] Learning Library. Finally, all of the code that I generate will be available in the [[GitHub]] Repository for this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Application Development]] (1), [[ChatGPT]] (1), [[PHP]] (1), [[Generative AI]] (1), [[LinkedIn]] (1)
> **CLI Commands:** php (1), make (1)
> **Prerequisites:** you'll need (1), set up (1)
> **Env Vars:** php (1)
> **Tools:** github (1)
> **Speakers:** - this (1)


### 1. Planning

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining requirements](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/defining-requirements?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/defining-requirements?u=76281980&t=0)** - [Instructor] No matter how simple or complicated, every good software project starts with a list of requirements. This allows you and your team to get a good understanding of the size and scope of the project, as well as prioritize features. It's also worth noting that requirements are more than just a feature list. Requirements are often high-level descriptions of what the application should do, how it should behave for different users, and any constraints. They can be functional or non-Functional. Features relate to some specific functionality, so the requirement might be user must be able to securely log into a web interface and send their coach messages that are two-way encrypted. This translates to a feature set that looks like this, login page that accepts a username and password, database to store username and fully encrypted password, SSL certificate to securely send and receive data, inbox where user can see all messages sent to them, [[Jetpack Compose|compose]] window where user can select coach, write a message and send it, and more. And while I don't advise people do anything that fully relies on AI, I am all about leveraging AI to help generate ideas and inspire. So how can we leverage AI? I think there's a couple of ways.
>
> **[1:34](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/defining-requirements?u=76281980&t=94)** First, we want to clearly define our project and ask AI to generate a requirements document. I'll be using [[ChatGPT]] for this, but you could use whatever AI tool you are most comfortable with. So my prompt is I'm working on a [[PHP]] application and would like to generate a requirements document. The system is a client documents management system. Each user should be able to securely log in, access document and text associated with their account and post their own documents and text. The documents can be images, PDFs, and standard [[Microsoft Office|Office]] documents. Can you help me generate a requirements document based on that? What am I missing? Once we put in this prompt, ChatGPT will give us some text, as well as a draft of a document structured into various sections. So looking at what it's generated, it gives us an introduction with a purpose and scope, general requirements, functional requirements, non-functional requirements, system integration, security measures, and additional considerations. It's important to note that this outlines core requirements and considerations, but we need to refine this. This gives us a good starting point for things that we might not have thought of. For example, maybe we didn't consider what security audits and compliance with data protection might look like. Maybe we didn't consider GDPR or HIPAA, for example.
>
> **[3:10](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/defining-requirements?u=76281980&t=190)** My follow-up prompt might be: Thanks. Based on my description, are there any major features I haven't considered?
>
> **[3:28](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/defining-requirements?u=76281980&t=208)** So now ChatGPT or the AI is going to give us some features that I didn't include in my initial paragraph, like advanced searching and filtering. That's a great one. Collaboration features for sharing documents, notifications and alerts. Previews, bulk operations. Bulk operations are often forgotten in early beta of an app, and a lot more. This is the brainstorming phase and so getting a list like this is fantastic. It gives us a lot to consider and it will ensure that our requirements document that we come up with is better with more considerations and aspects of the project so that nothing gets forgotten and that we catch more things early on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (3), [[Jetpack Compose|Compose]] (1), [[PHP]] (1), [[Microsoft Office|Office]] (1)
> **Env Vars:** ssl (1), php (1), gdpr (1), hipaa (1)
> **Analogies:** for example (2)
> **CLI Commands:** php (1)
> **Definitions:** is a  (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Use cases](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/use-cases?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/use-cases?u=76281980&t=0)** - [Instructor] Along with requirements, we should consider use cases. That is, how people will actually use the software. This is an important step in the [[Software Development]] process because it helps us understand how end users will interact with our software. But not only that; it'll help us understand how different types of end users interact with our software. For example, how will a non-logged-in user interact with the home page versus a logged-in user? Is there an admin role, and if so, how will that admin interact with the website? The more complex a project, the more use cases there are. So let's see how AI can help us. We're going to continue our conversation that we started in the requirements documents video. And we've added all of the requirements that [[ChatGPT]] in this instance came up with so that it has a full context for what we need from our use cases. So let's create our prompt. We should also come up with some use cases for the application. What are some basic use cases we should consider? Notice I keep saying the [[Microsoft Word|word]] consider. That's because we don't want the AI to fully come up with the document for us. We want it to give us ideas that we should think about and think through as we plan to write this software.
>
> **[1:38](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/use-cases?u=76281980&t=98)** Notice that ChatGPT is using the format of actor, that is who the user is, the goal, what they want to do for a specific use case, and the main flow. We see new user, registered user, logged-in user for these various features that we worked through during the requirements phase. Now, if you are working on a project by yourself or you've never worked in a team or enterprise setting, this is going to give you a bunch of different perspectives you may not have thought of. For example, audit logs and compliance are something that bigger companies do think about, but solopreneurs or freelancers might not. So use case seven, audit logs and compliance, where the actor is the administrator, really illuminates some areas that could be blind spots for some developers. Now let's define our own use case and see what AI can come up with. We'll say, since the system allows for text-based communication between a user and a coach, let's come up with a use case for direct messaging. Now, we may not have explicitly stated in our original document that we want direct messaging, but we did say that we want to allow
>
> **[3:13](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/use-cases?u=76281980&t=193)** for text-based documents to be uploaded. So this is going to go through and create a use case for direct messaging. The actors will be the user or the client and the coach. The goal is defined, as well as the pre-conditions, and then, it will go through multiple main flows here: initiating, receiving and responding, and the ongoing communications. Then it will come up with post-conditions, which I think is pretty nifty. In our specific use case, it also comes up with alternative flows and exception flows. For example, with a non-responsive coach or technical issues. It goes through special requirements for security and [[Privacy]] in notifications. So again, a very thorough look at an initial use case for something that we came up with. And as a reminder, it's up to us to come up with the finalized list of use cases for our software. We need to talk to the [[Representational State Transfer (REST)|rest]] of the team, project managers, and any stakeholders. But AI can provide alternative points of view and help us think of a more complete document to hand over to those project managers and stakeholders.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2), [[Software Development]] (1), [[Microsoft Word|Word]] (1), [[Privacy]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** for example (3)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [User stories](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/user-stories?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/user-stories?u=76281980&t=0)** - [Narrator] One overlooked aspect of [[Software Development]] is generating user stories. While use cases are more detailed accounts of how features work and who is using those features, user stories are more succinct personas with a specific goal in mind. They often follow the format of, as a user, I want to action, so that goal. This is another way to think about the [[User Experience (UX)|user experience]]. You might even name your users. For example, Abby is a weight loss coach. As a coach, she wants to send automated check-ins to her clients so that she can help them be accountable. We may have just unlocked a new potential feature here and a use case, scheduling messages and repeatable messages. And this is yet another place where we can leverage AI to help us build out a feature set focused on our users. Here is the prompt. Can you generate some user stories for the system we've described so far? You can see that [[ChatGPT]] is breaking up our user stories into major headings for features or requirements. So user registration, as a new user, I want to register for an account
>
> **[1:32](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/user-stories?u=76281980&t=92)** so I can securely manage and store my documents. Secure document management, as a user, I need to categorize and tag my documents for easy retrieval. If we get down to notifications, as a coach, I want to be alerted about new documents shared with me for review or feedback. This is a really thorough list of potential user stories that we can use. I'm going to add ours to the list. Add this user story to our list. So now with all of this, the requirements, the use cases, and the user stories, we can even have AI summarize what we have so far and give us a new starting point for our requirements document. This is all great. Can you summarize the system we've built so far,
>
> **[2:33](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/user-stories?u=76281980&t=153)** taking all of the requirements, features, use cases, and user stories into account, then create a new requirements document from it? This is all great. Can you summarize the system we've built so far, taking all of the requirements, features, use cases, and user stories into account, then create a new requirements document from it? So now we have a pretty comprehensive summary of what we've built here, and of course the better the input, the better the output. So using all of this, we can refine what we have again, create a proper requirement document, then prompt AI again, iterating until we have something really solid.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Software Development]] (1), [[User Experience (UX)|User experience]] (1), [[ChatGPT]] (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### [Creating timelines](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-timelines?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-timelines?u=76281980&t=0)** - [Presenter] Now it's time for an incredibly important part of the process, creating the project timeline. At this point, the AI has a pretty good idea of the scope of the project, but it would be best to give it everything you know about the project up until this point. Features, use cases, number of developers, any milestones and known potential issues, et cetera. I've prefilled a lot of that information in, so we can move on to actually creating the timeline. Using that information you can ask the AI to give it a high level timeline. So we'll say, "If I wanted to create a general timeline for this project, could you help me with that? Please create a four month, six month, and 12 month timeline for this project."
>
> **[1:07](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-timelines?u=76281980&t=67)** So now the AI, [[ChatGPT]] in this case, is going to go through and create a high level overview for a timeline for each of those things. I picked four months because given the most basic scope of this project, four months is probably the least amount of time you'll spend on it, six months is probably a good timeline to shoot for, and 12 months is probably the most likely timeline for this project. You can see the AI doesn't do exactly what we asked it to do here. It does create a four month timeline where it has one month for planning and design, development kickoff, one month which feels like a lot for kickoff but you see that we've got some weekly breakdowns here. In month three core feature development, in month four initial testing and review. Then it adds months five and six where we do advanced feature development, so it takes the entire timeline and breaks it into 12 months. So I'm going to say, "I fear you misunderstood me. I'd like timelines where the entire project can be completed in four months, six months, or 12 months."
>
> **[2:38](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-timelines?u=76281980&t=158)** So we'll ask it to clarify here where it hopefully creates a full four month timeline. And you can already see the results are are better here, rapid development and launch is the four month timeline. The six month timeline is standard development and enhanced testing, so it looks like the AI and I are aligned on the expectations for development timelines here. And then a 12 month timeline, phase development with extensive testing and refinement. It then gives us some editorializing on the timeline and how each one of them will work. What you should do here is review the timelines it came up with and see how well they work. The next thing I'm going to do here is add some contingency time. So I'll say, "Can you build in extra time to each of these timelines for unforeseen circumstances?"
>
> **[3:45](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-timelines?u=76281980&t=225)** What we're hoping here is that the timelines will get extended a little bit, maybe four months will extend to five months, six months maybe will extend to eight months, because this happens in every development cycle and every development project. Very few actually launch on time and on budget, sadly, so we want to consider that upfront as we're building out the calendar for this project. So it says here, "Each timeline includes buffer periods to manage unforeseen circumstances." It's still on the same amount of time, so if we just scroll up and look at the four month timeline, Week one is project kickoff, then rapid [[Prototyping]] for two to three weeks, and week four is technology stack selection. And if we look at month one of the accelerated timeline, you could see that we're not doing technology stack here in week four, we are finalizing requirements then developing essential features, and then development buffer for unforeseen issues. It kind of explicitly builds this in to the same timeframe, so it's assuming here that we have a four, six, or 12 month deadline and then incorporates that. So, again, this is a starting point, this is what AI is best at, giving us some ideas and starting points. So let's say we really like the six month standard timeline here. Let's ask the AI now to format this into a table with specific dates starting on a specific date.
>
> **[5:21](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-timelines?u=76281980&t=321)** So I'll say, "I really like the six month standard timeline
>
> **[5:30](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-timelines?u=76281980&t=330)** with some buffer time built-in. Can you format that timeline into, spell timeline right,
>
> **[5:42](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-timelines?u=76281980&t=342)** into a table with specific dates, assuming the project kicks off on, let's say, July first." So this is going to take the AI a little bit of extra time 'cause it needs to reference a calendar for the current year, do some math to determine the dates that align with the timeline it comes up with, and then build out the table. So you could see it's starting to develop a timeline. I didn't specify a year so it picked 2023, likely based on some internal model for how it's handling dates. You could specify a year to get more accurate results, but for this it's fine. So you could see we have the tasks start and end dates, and then we have a timeline going through until February 10th, 2024. This timeline includes buffer times to address unforeseen circumstances, ensuring the project has flexibility to adapt to challenges without derailing the overall schedule. The last thing I'll do here, since I am using a version of ChatGPT that can generate images, I'm going to ask it one more thing and that is to turn this into a Gantt chart, which is a common way for [[Software Projects]] to be laid out. "Great. Can you turn this table into a Gantt chart?"
>
> **[7:10](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-timelines?u=76281980&t=430)** And while ChatGPT create that, I'll say, "From here you can take this table and move the timeline into your own project planner, take the Gantt chart it's going to spit out and move it into your project management system, and much more." All right, so here we have a Gantt chart based on the table that ChatGPT generated for us. You can see that there's very little overlap. The big benefit of a Gantt chart is generally to show overlap between tasks, so each bar indicates the duration of a specific task over the timeline, again, with that built-in buffer time. From here you can take the table or the Gantt chart, move those into your own project planner, and keep in mind that this is a very basic timeline to give us some potential ideas for milestones, but you should always seek the input of your development team, project managers, and stakeholders to come up with a finalized timeline for the project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (4), [[Prototyping]] (1), [[Software Projects]] (1)
> **Definitions:** is a  (3)
> **UI Navigation:** scroll up (1)
> **Best Practices:** you should always (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [presenter] (1)

#### [Challenge: Generate a requirements document](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/challenge-generate-a-requirements-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/challenge-generate-a-requirements-document?u=76281980&t=0)** - [Instructor] Using what we've learned, let's create a requirements document for a software project. This project will be a simple, self-hosted web-based photo library. We'll have two use cases, hobbyists who want to share their photos with friends and family, and professionals who want to use this as a portfolio site. The most basic requirements that could be turned into features are the ability to log in, upload photos, create albums, and share links. Since this is self-hosted, it also needs to be easily installable by a non-technical user. So here's your challenge. Using these descriptions and requirements, craft one or more prompts to come up with a near-feature complete requirements document. Consider that hobbyists and professionals will have different needs, and work that into your prompts as well. Then watch the next video to see my solution.

> [!info]- Semantic Content
>
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Generate a requirements document](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-a-requirements-document?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-a-requirements-document?u=76281980&t=0)** (upbeat energetic music)
>
> **[0:05](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-a-requirements-document?u=76281980&t=5)** - [Instructor] All right, I hope you got some good results. Here are the prompts that I came up with. A couple of notes. I'm using [[ChatGPT]]-4 for this. I started a new chat so that the AI would not have the context of anything we've worked on previously. And please note that your results, even for these exact prompts, will vary based on the model when you do the prompts, the AI that's being used, and a whole bunch of other factors. So don't be alarmed if you're not getting the same exact results that I do, but these are the prompts that I used. So here's the first one. It's basically the requirements that I laid out in the challenge. I'm working on a simple, self-hosted, web-based photo library. We have two cases, hobbyists who want to share their photos with friends and family and professionals who want to use this as a portfolio. The most basic features are the ability to log in, upload photos, create albums, and share links. Since it's self-hosted, it also needs to be easily installable by a non-technical, I'm going to specify that here, technical user. Now onto the part that wasn't included in the challenge slides. However, I recognize that hobbyists and professionals will have different uses for this. Can you come up with user stories for a hobby photographer and a professional photographer to use a system like this, understanding that it's self-hosted. I really want to drive home the point that this is self-hosted
>
> **[1:37](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-a-requirements-document?u=76281980&t=97)** because maybe the photographer is non-technical. And it shouldn't be very hard. It shouldn't require a lot of technical know-how to use a self-hosted system. Also, notice that the only thing I asked it to do was come up with user stories for this. I'm starting with the user stories here because the user stories are going to help us uncover potential features that we may not have thought of. I gave it the basic features we have, but user stories help us uncover new features that we could add that will be very useful. So it came up with seven user stories for the hobbyist photographer. It's coming up with user stories for the professional photographer now. And you see it's coming up with even more user stories for the professional, at least one more user story, for the professional photographer. So just reviewing these really quick, as a hobbyist photographer, I want to easily install a photo library on my personal server so I can start uploading photos. These are not directly mapped to features or requirements yet. These are just things that a photographer, hobbyist, or professional, might want to do in the system. So now what I'm going to say is, these are great. Can you take these stories and convert them into a comprehensive feature list for me?
>
> **[3:15](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-a-requirements-document?u=76281980&t=195)** All right, so it's getting to work now. Core features for both user groups. Easy install and setup. Secure user login, photo upload. Much more additional features for hobbyist photographers. Friends and family interactions. Option for viewers to leave comments and feedback. Photo download permissions for friends and family. Love that. And then a much longer feature list for professional photographers that include copyright and distribution control, social media and SEO, analytics and insights. And then some general admin features. I think this is really good. This is already more than I would've thought of if I were just coding this on weekends, let's say. Okay, so now I'm going to take these features with the user stories and turn it into a requirements document, and I'm going to add a little extra context here. So we'll say, wonderful. Now can you take these features and turn them into a requirements document? The system will be built with [[PHP]] and [[MySQL]]. By the way, this is not something I mentioned in the challenge video. This is something I'm adding. If you decided to use a different language, that's perfectly fine. It's important to include this information when you're creating the requirements document, though. And use [[HTML]] and CSS with [[JavaScript]]. The installation file
>
> **[4:51](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-a-requirements-document?u=76281980&t=291)** should build the database, which may require the user to create a database. So I'm going to include that based on my personal experience with these self-hosted installation processes. Most PHP scripts can't create a database on its own, but we're going to include that in the requirements document. Maybe we have some clever engineers who know how to tap into the command line to create the database itself. All right, so this is going to give us a more robust version than we've seen in previous videos, probably because we reversed our approach for this assignment. We created the user stories, which in turn created features. We didn't do use cases yet, but this information, the AI, has more context going into creating the requirements document versus create a requirements document for me based on this project that I thought of. So we're getting, again, a much more in-depth requirements document here because we gave it a lot more context before creating the initial document. Okay, so this I think is a really great starting point. It has an introduction, a system overview, the technical requirements, software requirements. It shows PHP 7.4 or higher.
>
> **[6:25](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-a-requirements-document?u=76281980&t=385)** At the time of this recording, both PHP and MySQL are on much later versions. So this is probably a result of just when the learning model ended. So as always, I'm not going to say that this is as is, go ahead, take this, use it, send it to the stakeholders, but it is a good starting place. So I'd probably bump this up to the current version of PHP, which is in the 8's as we record this. Development tools, a code editor or IDE. [[Git]] for [[Version Control]]. Great. And then we've got our core features section based on the features that we outlined earlier. The features for the hobbyists, the features for the professional, general and admin system, and non-functional requirements are really good here. Implementation guidelines. Follow MVC architecture. This is good. It's not recommending technology. But just the fact that it's telling us to follow MVC based on the fact that we asked for PHP would imply some framework like [[Laravel]]. That's not a requirement of course. This is just some ideation, testing requirements, deployment, and maintenance and support. So this is the results I got based on the prompts. I think this is really good. I think the way to go is do the user stories, come up with the features, and then maybe create use cases. We skipped that part. But create use cases. Then ask it to come with the requirements document. There will be a lot more context for you to get a more robust result from the AI that you're using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (6), [[MySQL]] (2), [[ChatGPT]] (1), [[HTML]] (1), [[JavaScript]] (1)
> **Env Vars:** php (6), mvc (2), seo (1), html (1), css (1)
> **CLI Commands:** php (6), mysql (2), git (1)
> **Prerequisites:** install (2), setup (1)
> **Cross-References:** coming up (2)
> **Definitions:** is a  (2)
> **Versions:** php 7 (1)
> **Tools:** command line (1)


### 2. Writing Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Using ChatGPT to get code snippets](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/using-chatgpt-to-get-code-snippets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/using-chatgpt-to-get-code-snippets?u=76281980&t=0)** - [Instructor] Okay, let's start writing some code. One quick note is that I'm going to start here in [[ChatGPT]], but we will change to a different tool in later videos. And I am going to continue in the conversation from the challenge and solution. The reason is that some of the code I'm going to have generated here is inspired by that challenge project, and ChatGPT now has a bunch of context for that project. It may not matter, but it may help. The more context that we can give an AI, the better. So we want to do this modularly and be as specific as we can. Let's start with a simple form upload. Since we're not going to be building [[Databases]] in this course, we're going to stick with straight [[PHP]] so that those are the modules that we will have the AI write for us. Can you generate a simple [[HTML]] form to upload a file where the PHP processing the form will be the same page the form is embedded on? So this is important here. Can you generate a simple HTML form to upload a file where the PHP processing the form will be the same page the form is embedded on? If we don't specify that last part of this prompt, the AI will likely make the form action something like process.php, and we want everything to be in the same file.
>
> **[1:33](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/using-chatgpt-to-get-code-snippets?u=76281980&t=93)** We're also not specifying the type of file yet. That's something that we are going to check in PHP. So you can see that ChatGPT here says after the form, I'll show a basic PHP script that processes the uploaded file. We're going to ignore that because we want to be a little bit more specific in the type of files that we're going to accept. You could see that this is actually all commented out. This is included in the same code block, so we'll have to delete some information. It's also going to give us a note about security, telling us that in a production environment we should add more security measures, such as validating file types, for example. All right, so let's go ahead and take this code and add it to our repo. All of the code that is generated here and provided will be in the [[GitHub]] repository for this course. I'm just going to call this index.php to make things easier. So let's go ahead and delete that PHP, just leaving us with the form here. We'll go ahead and check this in the browser, just to make sure it looks okay. All right, and we can see a very basic form with no styles. If you want to dress this up with styles, feel free. I'm just going to keep going with the example. So now that we have the form, let's go ahead and ask for some PHP to process this. Using this form, please generate a PHP function
>
> **[3:10](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/using-chatgpt-to-get-code-snippets?u=76281980&t=190)** that looks at the uploaded file. Checks to make sure it's a valid image. That is, JPEG, PNG or TIFF. Those will be the three that we accept. So it is going to create this script for us. It is telling us to enhance the PHP script. I didn't tell it to forget the PHP that it wrote. That might've been a better way to prompt, but I did ask it to create a function. So it's basically going to rewrite the entire function and then we'll have to do some checking. Couple of notes here. I didn't give it a format for variables. It looks to be using a combination of underscores and camel case. My preference is underscores and not camel case. I think it's easier to read, but I will leave that totally up to you. We are going to use the code more or less that the GPT or the AI gives us. So it's explaining, validate and upload image. Takes an uploaded file array as an argument and performs the check image type validation. And then usage, this function is called when the form is submitted, which is great. So ensure that the uploads directory exists. So this is assuming that we're going to store it in an uploads directory. So we will make sure that we have that in our file structure or our server.
>
> **[4:45](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/using-chatgpt-to-get-code-snippets?u=76281980&t=285)** So let's go back here, that's the first thing I'll do. I'll create a folder called uploads. Uploads might not be writeable, but we'll see what happens when we add this code. So I'm going to add the code above the HTML. That is my preference. The code did not include the opening and closing PHP tag, so we'll add that as well. And I'm just going to run through this code really quick to see if anything stands out for me. It's going to accept a file, it's going to grab the file name and then do some standardization on the text. It's going to check the file size to make sure that there's actually a file. So the first thing it's going to do here, which I wouldn't have thought of, I don't think, at least not on an initial go, check if image file is actual image or fake image. There appears to be a built-in PHP function called getimagesize. And if that comes back false, then it's not an image. And then we're going to make sure that the image file type is a JPEG, PNG, or TIFF, 'cause those are the ones that we specified. If does not upload, it'll say, sorry, your file wasn't upload. Otherwise, it'll move it to our uploaded folder. And then for usage, if POST, right, that's our method, and isset FILES, files to upload, which is the name of the form field here, then we will call the validateAndUploadImage function. Okay, so let's see how this code works out of the box.
>
> **[6:21](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/using-chatgpt-to-get-code-snippets?u=76281980&t=381)** I'm going to click Choose File. I'm going to grab an image that I took from a recent snowstorm on my desktop and click Upload. It says File is an image. Sorry, only JPG and PNG and TIFF are allowed. That was unexpected behavior, most likely because this extension is JPEG with the e. So let's remove the e and then the see if this works, just to eliminate that bug, 'cause that's an easy thing to fix. All right, so this image has been uploaded. If we go back to our code editor, the image is here in the file. So the one thing that I'll do here, and this was based on my requirement, is we'll just add a new condition here to include JPEG. Now, there is a more elegant way to write this. We can create an array of all of the extensions and see if image file type is in that array. This is a very basic way to do it, but we do have working code here and it does give us a starting point that then we can refactor and make better as we prepare it for production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (14), [[ChatGPT]] (3), [[HTML]] (3), [[Databases]] (1), [[GitHub]] (1)
> **Env Vars:** php (12), jpeg (4), html (3), png (3), tiff (3)
> **CLI Commands:** php (14), make (8)
> **Definitions:** is a  (3), is called (1), is an  (1)
> **File Paths:** process.php (1), index.php (1)
> **Analogies:** such as (1), for example (1)
> **Code Identifiers:** validateanduploadimage (1)
> **Cross-References:** go back to (1)

#### [Working with GitHub's Copilot](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/working-with-github-s-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/working-with-github-s-copilot?u=76281980&t=0)** - [Instructor] Let's look at another helpful AI tool for programmers, and that is [[GitHub]]'s [[Microsoft Copilot|Copilot]]. Copilot is an AI that lives in your code editor and allows you to chat with it, but beyond that, you can highlight code and ask it to modify, test, and expand upon the code you have. At the time of this recording, it is $10 per month for personal use with a free 30 day free trial. And the way it works is you download the extension for your code editor. I've been using VS Code and you get two new features. One is the chat box which sits right next to your coding area and you can ask it questions about your code or code in general. So with the code that we generated from [[ChatGPT]] up here. So one thing that we can have Copilot do is review the code. I'm going to highlight the code here. I've run into some issues where it got confused with what I was asking it and then in the chat box I'll say, can you review this code to make sure it's well written? So it will look at the code, you could see it's evaluating lines one through 58 and it tells me what it does, and then it'll tell me how I can improve the code. So you can see it's recommending a number of things that to be fair to ChatGPT, it also recommended, but you can also see that Copilot is rewriting this code. And one of the things,
>
> **[1:34](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/working-with-github-s-copilot?u=76281980&t=94)** if we expand this chat box out a little bit, we'll make this split screen. You can see that one of the things Copilot did was something I recommended when we evaluated this code was create an array of allowed types and then see if the image file type is in allowed types. So what we could do is take all of this and move it over and then we can perform another test to see if it works. So why don't we do that? We can click insert at [[Cursor]] and it's just replaced all of the code that we had. So let's actually test this to see if the new version of our code that Copilot has provided works. I'll refresh this page to make sure we're getting the latest version of the code. I'll upload the same image, so we have a controlled test. And it says the file has been uploaded. If we go back in uploads, we now see two versions of the image. It looks like one of them has been renamed. So if we look at our old version, you can see that the script that ChatGPT provided does not rename, but our Copilot code generates a unique name, which is a little bit better, right? It's more or less sanitizing the name of the image. And it also has some error checking here. So really great job by Copilot creating a new version of this code that is more secure.
>
> **[3:13](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/working-with-github-s-copilot?u=76281980&t=193)** The other feature that we get from Copilot is an in line editor. So you could see if I highlight something, these two stars show up, that's Copilot. So what I'm going to have Copilot do is review some old code here that I wrote about three years ago to see if it's good. And then we will do a kind of targeted rewrite here. So first, I will ask it to review this code. I'll give it the same exact prompt. Can you review this code and make sure it's well written? It tells us what it does and then it'll make some recommendations for how to improve. And you could see that it rewrites the code. It also sorts the live streams by date, something that I didn't necessarily do. So we're not going to take this. Instead I want to show you how it can help us rewrite the code a little bit better in line. So I'm going to highlight this, click on the two stars, and I'm going to say, can you rewrite this code to be more secure,
>
> **[4:28](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/working-with-github-s-copilot?u=76281980&t=268)** validated, and sanitized? So what it's done here is rewrite the code, doing exactly what I asked it to do, and you could see it's going to filter and sanitize the strings, change the output. And so if we accept this. Okay, so you can see that it has rewritten this code to grab the elements of each line, sanitize everything, and then output it a little bit better. I'm going to accept those changes. And then if we go and test this code, you can see something strange has happened here, it is trying to call an undefined function. And indeed, if we look at our code, we have a validate date and validate URL function that we don't have defined anywhere. These are not built into [[PHP]]. So something that we could try here and actually you'll see Copilot do something else and that is try to predict the code that we want to write here. And indeed, this is what I was going to ask it to do, create a validate date function. So if I press tab, it'll write that and then I'm willing to bet, yep, validate URL. It'll do that too. So if I save that and go back to our browser and refresh, now we have a list of all of the live streams with links out to where they go. All thanks to some rewritten code by Copilot
>
> **[6:05](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/working-with-github-s-copilot?u=76281980&t=365)** and then some functions that Copilot wrote.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (14), [[ChatGPT]] (3), [[GitHub]] (1), [[PHP]] (1)
> **CLI Commands:** make (5), php (1)
> **Env Vars:** url (2), php (1)
> **Definitions:** is an  (2), is a  (1)
> **Tools:** github (1), vs code (1)
> **Best Practices:** recommended (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)

#### [Other code-writing tools](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/other-code-writing-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/other-code-writing-tools?u=76281980&t=0)** - [Instructor] [[ChatGPT]] and [[Microsoft Copilot|Copilot]] are common AI tools used in coding, but let's look at a few other helpful tools. There are lots out there, but how do you find them? How do you know what works, what doesn't, what's defunct, and what you can trust? True story, when I was planning another course, from the time I wrote the table of contents to the time I was ready to record the video, the tool I was going to use shut down. So instead, you can see the latest tools on this super interesting website called There's An AI For That. This site will allow you to search by name, description, and category, tell you what's trending, and tell you what's recent. So if you're looking for tools to help you with [[PHP]], you can search PHP and see what is available. You can see that there are lots of tools available, and this nifty icon here tells you what is a ChatGPT add-on and what isn't. There are general helpers, framework-specific tools for [[Laravel]] and other things, and much, much more. So if you have a plan that allows for, say, Chat GBT plugins, you can use those tools as well. However, you can also search for specific add-ons, so if I search for VS Code. So with our VS Code results, you could see, for example, SnippetHub, there's this tag for coding in VS Code. If I click on that, we'll see all of the AIs that have that as the primary task. It's pretty comprehensive and regularly updated.
>
> **[1:36](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/other-code-writing-tools?u=76281980&t=96)** It's an aggregating site, so no matter what tool you're looking for, There's An AI For That can point you in the right direction.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[ChatGPT]] (2), [[PHP]] (2), [[Microsoft Copilot|Copilot]] (1), [[Laravel]] (1)
> **CLI Commands:** php (2), find (1)
> **Env Vars:** php (2), gbt (1)
> **Tools:** vs code (3)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Writing a PHP class sorter](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/challenge-writing-a-php-class-sorter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/challenge-writing-a-php-class-sorter?u=76281980&t=0)** (light music)
>
> **[0:05](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/challenge-writing-a-php-class-sorter?u=76281980&t=5)** - [Instructor] It's time for another challenge. Using AI, we're going to write a [[PHP]] class sorter to use in our programs. As needed, we'll test and confirm everything works. Here are the requirements. Provided are a person class and a list of person objects in an index.php file. We want to use the provided code and AI to write a function that sorts first by age, then by name if the ages match. Next, we want a function that will take the list of person objects and separate it into two lists, one for professionals and one for hobbyists. Use whatever AI you'd like to help you generate the code, but make sure to test. You can find the starting code in the [[GitHub]] repository, and of course, come back to see my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[GitHub]] (1)
> **CLI Commands:** php (2), make (1), find (1)
> **File Paths:** index.php (1)
> **Env Vars:** php (1)
> **Tools:** github (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (light music) (1)

#### [Solution: Writing a PHP class sorter](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-writing-a-php-class-sorter?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-writing-a-php-class-sorter?u=76281980&t=0)** - [Instructor] All right, I hope you got some good code. Here's what I came up with. Also, remember, even if we use the same exact prompts, we might get different results. Now, I'm using [[GitHub]]'s [[Microsoft Copilot|Copilot]]. If you used something like [[ChatGPT]], you'll have to go through this process as well, as you likely found. GitHub's Copilot cannot read a full directory, which means that if I wanted to use some code I've already written, I need to give that code to the AI. So that's the first thing I'm going to do. I'm going to highlight the Person class, and in my chat box, I'm going to say, here's the Person class, and actually, I'm going to highlight this, and then I'm going to move over to index, 'cause that's the main file I want to work in. Here's the Person class I am using in the open index.[[PHP]] file, and then I'll come over here, copy this, make sure it's copied, and paste it in. So now, [[GitHub Copilot]] knows that this class exists. It has the context, it's learning about it, and now it knows the name of the functions I'm using. Now I'm going to place my [[Cursor]] here in the file just so it knows what I'm working with. And I'm going to say, using the provided Person class, please write a sorting function
>
> **[1:37](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-writing-a-php-class-sorter?u=76281980&t=97)** that sorts the people array first by age, then by name. Something really interesting here that I want to point out is that it looks like Copilot has adopted my naming convention. As I mentioned in an earlier video, I prefer to use underscores between words and the function it wrote here matches that style. So that's great, always good to know. And let's go ahead and take this, and then we'll use our little insert icon to add it here. Now, this wrote the function, and actually I want to move this above the [[Representational State Transfer (REST)|rest]] of the information below the Person class so that this knows what the Person class is. And then next up, I want to call that function, which Copilot is properly predicting here. And then it is also properly predicting that I want to write a list of the sorted_people because I want to make sure that the results are correct. So let's go ahead and save and see how it did. Okay, so let's see. 1, 3, 6, 30, 2, 33, 33, with Diane coming before Rob, 34, 36, 38, 46, 61, 74.
>
> **[3:13](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-writing-a-php-class-sorter?u=76281980&t=193)** That is a proper sort by age and then by name. Great work Copilot. So now let's ask it to do the second task. Great. Now, can you write some code that takes our people array and break it into two lists, hobbyists and professionals based on the role property of the Person class. I'm not sure I need to specify that, but as always, more context for the AI is better. So asking you to take the code, break it into two lists, one by hobbyist, one by professional based on the role property. This is important, right, because it needs to know to check that role in the class. So here's the code. Let's go ahead and insert that inline. It created a function, right? So again, I have inserted it in the wrong place here. So let's add this below our sorting function. And then we want to print those results as well. Separate people, separate by role, and then echo hobbyist. I'm not typing any of this. I am simply letting Copilot predict what I want it to do.
>
> **[4:48](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-writing-a-php-class-sorter?u=76281980&t=288)** So far, it is doing very well. So it has now separated by role and is grabbing the two arrays. For a quick reference here, it creates two arrays in the function, sorts the people, and then returns an array of arrays, returns a two-dimensional array, which is what's being referenced in these foreach loops. So now I will go back and refresh. Remember, we sorted the list already by the time we get here. So we have all of the hobbyists and the professionals, Theresa, Diane, Phil, Peter, and Annie are in fact the professionals. So this was all code completely generated by Copilot with no changes from me, and it did exactly what I asked it to do. I hope you got similar results.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (7), [[GitHub]] (2), [[ChatGPT]] (1), [[PHP]] (1), [[GitHub Copilot]] (1)
> **CLI Commands:** make (2), php (1)
> **Tools:** github (3)
> **Definitions:** means that (1), is a  (1)
> **File Paths:** index.php (1)
> **Code Identifiers:** sorted_people (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 3. Testing Your Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Automated testing vs. AI testing](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/automated-testing-vs-ai-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/automated-testing-vs-ai-testing?u=76281980&t=0)** - [Instructor] Automated testing has been around in programming for a while, but with AI being a bigger part of the development process, it's worth clearly defining automated testing versus testing with AI. Automated testing generally refers to using tools and predefined tests to ensure code is functioning properly. For example, you can write a test that your code should accept two integers as input, and that the output will be one integer, which is the sum of those two integers. There are lots of ways to perform automated testing. You can test specific functions, which is called [[Unit Testing]], or you can test how well parts of a system work together, which is called [[Integration Testing]]. The key here is that you're writing the tests. There are ultimately facts about your code, and the tests verify those facts. If you want to learn more about automated testing, check out our courses in the [[LinkedIn]] Learning Library. Testing code with AI is different because it's not as rigid or predefined as automated testing. Where automated tests validate the code, adheres to specific requirements, testing with AI can assist in writing and uncovering issues within the code. AI testing is more flexible. It could write code, it could uncover issues with code, it could even write the tests, or help create data sets. In the video with [[GitHub]]'s [[Microsoft Copilot|Copilot]], Copilot identified ways to make the code I wrote more secure.
>
> **[1:35](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/automated-testing-vs-ai-testing?u=76281980&t=95)** It provided the how, which I was able to integrate into my code, thanks to an assist from Copilot. And like I said, AI can also help create data sets, or even write automated tests for us based on the code we give it. The two can work together to help you write the best possible code for your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (3), [[Unit Testing]] (1), [[Integration Testing]] (1), [[LinkedIn]] (1), [[GitHub]] (1)
> **Definitions:** is called (2)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Writing unit tests with AI](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/writing-unit-tests-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/writing-unit-tests-with-ai?u=76281980&t=0)** - [Instructor] One great way AI can help us test is by actually writing the unit tests. A unit test tests a specific component of an application. In [[PHP]], this could be functions or methods inside of a class. These are great for testing to make sure you're getting the expected results before building important aspects of an application on top of those functions. Let's create a unit test using the Person class from an earlier video. And I should point out that I have PHPUnit installed and configured on my machine. If you want more guidance on how to install and use it, check out our videos on [[Unit Testing]] and PHPUnit in the [[LinkedIn]] Learning Library. So let's go to our files here in VS Code. You can see in the repo there will be some composer files that are used to properly configure PHPUnit. So now we will say, "Please create..." Actually, let's make sure we have our Person class open and I will just make sure the entire text is highlighted. So I'll say, "Please create a unit test for the get_age function in this Person class. It should successfully calculate the difference
>
> **[1:30](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/writing-unit-tests-with-ai?u=76281980&t=90)** in years between the DOB for date of birth property
>
> **[1:40](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/writing-unit-tests-with-ai?u=76281980&t=100)** and today's date." "Please create a unit test for the get_age function in this Person class. It should successfully calculate the difference in years between the DOB property and today's date." Okay, so it has created a unit test for us with the Person test extending the test case. This is why we need PHPUnit installed because it's a whole testing framework. What we're going to do from here is click on the three dots to insert into a new file. So we are going to save this as PersonTest.php. We'll make sure it's in the proper folder with the right files that we want to use. And then if we're unsure, we could always say, "How would I run this test?" So it'll give us the full rundown of how to run the test, including how to run the Person test or how to run just the test get-age function. Because again, this is a class. We can have multiple tests in this class. So let's go ahead and run get_age here. Going to open up the terminal here. Let's see if this works. All right, so I am getting an error here and that's because we are in a root directory. We are not in the right folder.
>
> **[3:12](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/writing-unit-tests-with-ai?u=76281980&t=192)** So we could always go to the correct folder where we want to run these tests. Traditionally tests would be in a test folder. And from here, we should be able to run. Nope. And now that we're in the right folder, let's go ahead and using this as a guidance. We're not getting the results that we want. We'll type phpunit and then we'll actually run the PersonTest file. So it found an error, "Person class not found." We have not included that here in this test, so we do need to make an adjustment. So I will include the require Person file here and then we'll run our test again and our test worked. So we can also have [[Microsoft Copilot|Copilot]] expand on these tests. So we'll place our [[Cursor]] in the class and then we could ask it. "Please generate five more tests for the Person class."
>
> **[4:26](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/writing-unit-tests-with-ai?u=76281980&t=266)** Now, notice here it says it's making some assumptions about our Person class, which means that it's not picking up the Person class. So I'm going to go back over here, copy this, paste it in and say, "Here is our Person class." Paste it in and then say, "Please come up with five unit tests for this class."
>
> **[4:55](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/writing-unit-tests-with-ai?u=76281980&t=295)** So now it has our Person class. You can see each of these tests is creating a person to actually run the functions. So let's go back here. We want to pick and choose a little bit here because we already have the skeleton. So we have test get-age that's already here. So I'll grab the [[Representational State Transfer (REST)|rest]] of the functions and paste them inside our class. Save this, and then run the PersonTest phpunit command again. Five tests, five assertions, they all passed.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Unit Testing]] (1), [[LinkedIn]] (1), [[Microsoft Copilot|Copilot]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (5), php (2), composer (1)
> **Code Identifiers:** get_age (3)
> **Env Vars:** dob (2), php (1)
> **UI Navigation:** go to (2), click on (1)
> **Tools:** vs code (1), terminal (1)
> **Definitions:** is a  (1), means that (1)
> **Prerequisites:** install (1), configure (1)

#### [Generating test data](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/generating-test-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/generating-test-data?u=76281980&t=0)** - [Instructor] Another common problem is creating test data for our programs. Let's see how AI can help us here. Let's test the person class by creating a set of objects designed to stretch the limits of the class. So the first thing I'll do is let [[Microsoft Copilot|Copilot]] know that we have a person class. "Here is a person class, "I'd like to create some test data for. "Please create 20 person objects "designed to test the class, each function, "and find issues with the code." Alright, so here's our person class, please create 20 person objects designed to test the class, each function, and find issues with the code. Alright, so this created a pretty comprehensive file. Actually, I'm going to just delete what I have here. And have this code take over this file, so if we run through this really quick, assuming person class is in Person.[[PHP]], accurate. Creates a blank array, then a for each loop, to create a bunch of different pieces of data to generate different birthdays and names and roles. Then it prints out each piece of information, and even creates some test info, so create from format, invalid DOB format,
>
> **[1:37](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/generating-test-data?u=76281980&t=97)** expects year, month, day, expected age, age calculation is incorrect, so. With this, let's just save this and run it and see what happens. Okay, so it looks like we have a good set of data here.
>
> **[1:58](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/generating-test-data?u=76281980&t=118)** Let's do one thing, because this printed new lines instead of breaks. So let's highlight this. And, "Please replace the new line character
>
> **[2:19](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/generating-test-data?u=76281980&t=139)** "with a line break." See if it could do this. Great. Accept. And then we will also echo a line to better differentiate everything. Alright, so going through here, it looks like we don't have any errors. Let's ask it to create a few more. "Please create seven more person objects, "with malformed data. "Like long dates, improper characters, et cetera."
>
> **[3:07](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/generating-test-data?u=76281980&t=187)** So now we're explicitly asking it to create a few broken people objects, or person objects. Alright, so we'll paste this, and then maybe we could ask it to, yeah, add person objects with malformed data, and then we will run this test. Alright, so you can see that we have caught some errors here. From here, we'd probably want to validate some of our errors, right, so, here age calculation is incorrect, or maybe we would want to, in the setter here, say something like, "Please validate DOB is a properly formed date."
>
> **[4:03](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/generating-test-data?u=76281980&t=243)** And it looks like there is even a set command, to use fix for this. So then we have a try catch here, which should allow us to properly validate all of this, which means, that we may get an error before the malformed data. So yeah, so it looks like now we only have age calculation is incorrect errors, so, there you have it, there is a great way to leverage AI to create some test data for us to find and then subsequently fix our errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (1), [[PHP]] (1)
> **CLI Commands:** find (3), php (1)
> **Definitions:** is a  (3)
> **Env Vars:** dob (2)
> **File Paths:** person.php (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Generate test data for the provided class](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/challenge-generate-test-data-for-the-provided-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/challenge-generate-test-data-for-the-provided-class?u=76281980&t=0)** - [Instructor] Now it's your turn. I've extended the person class we've been using to also have a student class, so provided for you for this challenge, the person class, the extended student class, and a file with a function that calculates the average GPA. Using your AI tool of choice, create a set of data that will allow you to rigorously test this student class. If you have PHPUnit set up, you can also come up with a unit test or set of unit tests for the provided GPA function. Give it a try, then come back to see my solution.

> [!info]- Semantic Content
>
> **Env Vars:** gpa (2)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Generate test data for the provided class](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-test-data-for-the-provided-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-test-data-for-the-provided-class?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-test-data-for-the-provided-class?u=76281980&t=5)** - [Instructor] All right, let's create some test data. As a reminder, your results may vary even if you use my exact prompts using the exact AI tool. Be sure to test any code you get from AI to ensure it works as expected. I'll be using [[GitHub]]'s [[Microsoft Copilot|Copilot]]. So, the first thing I'll do is feed in both classes. So, I'll say here is a Person class and a Student class that extends the Person class. Just running through the Student class here, you can see that the things that we add are the graduation year and the GPA, and then a couple of extra getters and setters for setting and getting the GPA and graduation year. So first, I'll just feed this in. Copilot will go through and describe the class. This is helpful to make sure it understands the code that I've fed into it, and then it doesn't hallucinate anything. In the Student class, the construct method, I can ask other questions about it. This is great if you're adopting somebody else's code. But now I'll just say, "Please generate 30 student objects designed to test the properties and functions of the Student class."
>
> **[1:43](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-test-data-for-the-provided-class?u=76281980&t=103)** All right, so it gave us a full script here. I am going to copy this code and paste it into the index. We can get rid of some of these lines because they are redundant. So, you could see the test generates random date of birth, random-ish graduation year, and a random GPA between zero and 4.0 because it's divided by a hundred here. Then it creates the new students, and then it will print out that student information. Okay, so let's make one slight adjustment to this foreach loop and ask it to replace the new line characters with an actual line break. "Please replace the new line character with the [[HTML]] line break." So, this should just rewrite this. Perfect. So, now we'll accept that. Save this and see how it looks. All right, so we have student, graduation years, GPAs. Everything looks pretty good here. This poor Student5 didn't do so hot. Okay, so let's go back here. Now, let's ask it to create a set of students designed to break the class. "Can you generate 10 more student objects with malformed or unexpected data. For example, long dates, wrong dates, or strings submitted for GPA."
>
> **[3:26](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-test-data-for-the-provided-class?u=76281980&t=206)** All right, so you could see it's generating a very long, non-four digit year, for example. A completely empty student. Okay, so it creates a malformed student array, a malformed data array, and then a foreach to create students from the malformed data, and then prints that information out. We can mostly take this information here and put it right underneath our first for loop, because we can say instead of malformed students, we could just say students here. So, we can add them right to the end of the students array and then print it out with the [[Representational State Transfer (REST)|rest]] of our data. So, let's see how that looks. We get down here and we get a fatal error because the parse time string is incorrect. So with that, we would want to use this information to fix the class here. So, we're seeing that it's in the Person class that we see this error. So, just like in a previous video, we'd want to go through and ask the AI to fix this function or fix the function ourself. The last thing we'll do here, which [[Unit Testing]] can also help us with is create a unit test for our class average function. So I'm going to highlight this, and then I will say, "Please
>
> **[5:02](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-test-data-for-the-provided-class?u=76281980&t=302)** create a unit test for the class average function.
>
> **[5:11](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-test-data-for-the-provided-class?u=76281980&t=311)** It should accept an array of student objects and average the GPA of all students." Okay, so it has created a unit test for us. Let's have it create a new file. We'll call that file class AverageTest, and then we will open up the command line, move into our appropriate folder, and copy the command here. Oh, and you can see we are getting one error because it's pulling in the index file, and it's already requiring students. So, we can just get rid of that, save it, and rerun this test. Okay, so you could see actually based on our test data, we're throwing an error. So, what I'm going to do here is grab our class average function. I'll grab all of this top matter and move it into our test for simplicity's sake. And now we should be able to run the test. All right, one test, one assertion works out. Now, I would say beware here. The first time I ran this during a test, it didn't generate a unit test, and I said, "Hey, this isn't a unit test." It said, "My bad," basically, and then created the unit test. So, just be on the lookout for that. Again, AI is a great assister or assistant,
>
> **[6:47](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/solution-generate-test-data-for-the-provided-class?u=76281980&t=407)** but it doesn't always give us the results that we expect.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (2), [[GitHub]] (1), [[HTML]] (1), [[Representational State Transfer (REST)|Rest]] (1), [[Unit Testing]] (1)
> **Env Vars:** gpa (5), html (1)
> **Analogies:** for example (2), just like (1)
> **CLI Commands:** make (2)
> **Tools:** github (1), command line (1)
> **Definitions:** is a  (2)
> **Versions:** 4.0 (1)
> **Cross-References:** previous video (1)


### 4. Documentation

[↑ Back to Table of Contents](#table-of-contents)

#### [Types of documentation](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/types-of-documentation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/types-of-documentation?u=76281980&t=0)** - [Instructor] Documenting our code is super important, but can feel like a hassle. The good news is AI can help. But first, let's look at different types of documentation. First, there's lots of documentation we're not going to look at. Manuals, readme files, and API documentation to name a few. These require more nuance and specific audiences in mind. Readme files could be for developers or for end users. Manuals could be for stakeholders. And well, we just don't have an API to document in this course. We're going to focus fully on inline or in-code comments. That means we're looking at two big ones. The first is inline comments. That is comments next to or above the code to describe what those lines or set of lines does. And doc blocks. These are documentation blocks you usually find above functions that explain what the function does, the parameters it accepts, and the expected return value. This is much more structured, and generally provided for documentation generators to create a basic version of those manuals. While there are lots of documentation tools out there, I'll be sticking with [[Microsoft Copilot|Copilot]] because the tool integrates directly with VS Code and works really, really well. If you want to find a different tool, there are lots over at "There's An AI For That."

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (1)
> **CLI Commands:** find (2)
> **Env Vars:** api (2)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)

#### [Creating Doc Blocks](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-doc-blocks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-doc-blocks?u=76281980&t=0)** - [Instructor] Docblocks describe functions, what they do, the arguments they take, and what they return. There are lots of tools that help us generate these for our code, but AI, especially [[GitHub]]'s [[Microsoft Copilot|Copilot]] with VSCode come in very handy here. Let's document the person class we've been using, and this is where Copilot is pretty great. I'm going to highlight the get_age function here, click on the two stars, and then type /doc. This is going to generate a docblock for us. And you can see this one is pretty simple, doesn't accept any parameters, returns and int, and it tells us what the function does. So I'm going to accept this. I'll do the same thing for the constructor and, in fact, something else it does really well here is, I can highlight multiple functions. Click the two stars, click doc, and then it'll generate docblock for all of those functions. So you can see that it actually documented the entire class here, which is a bit strange 'cause I didn't highlight the whole class. So I want to make sure that I'm not messing up my code in any way. So I'm actually going to undo this, and I will just highlight everything up here because that's what the AI thinks, and if it knows it's highlighted, then we can at least account for that in what we're replacing. So now we have that, we have that code set,
>
> **[1:33](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-doc-blocks?u=76281980&t=93)** and we have the documentation for each function. I'm going to click Accept. And now we have a fully documented person class. We do want to make sure... It looks like we did get a weird peren here, so you still do want to check what's being generated so that we don't have any errors in our code. The last thing we'll do here is our sort_people_by_age_and_name function that was generated in a previous video accepts parameters and returns. So this'll be a fuller looking docblock. So we'll highlight this, click doc, and the documentation will be generated. Sorts an array of people objects by name and age. The parameter is an array of people, and it returns the sorted array. We'll accept that, and now we have more documentation for our code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (2), [[GitHub]] (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** get_age (1), sort_people_by_age_and_name (1)
> **Documentation:** the documentation (2)
> **Definitions:** is a  (1), is an  (1)
> **Cross-References:** previous video (1)
> **Tools:** github (1)
> **UI Navigation:** click on (1)

#### [Creating comments for code](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-comments-for-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-comments-for-code?u=76281980&t=0)** - [Instructor] Inline comments are a bit more subjective than docblocks, but AI can help us nonetheless. Let's see what we can come up with. So I'm going to highlight the code here in the get_age function. Click on the star and say, "Can you generate some inline comments describing what this code does?" All right, so you can see it gets, like, a little strange here. And it's telling us (chuckles) the file path, which I don't think we really need. But then these comments are good, right? It tells us exactly what's happening here. If you click the refresh button, it'll try again. So it might take some attempts to get some good comments. This is a little bit better. So we'll try one more time. Create new DateTime objects, so this is okay. What I want to do here is remove this block because we basically have that already, right? And then it looks like it didn't replace our variables. It just added some extra variables. So your mileage may vary on these inline comments. Let's look at another example with no comments in it. And that is a login script I wrote a very long time ago.
>
> **[1:35](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-comments-for-code?u=76281980&t=95)** So let's just do some litmus testing here. And I said class. This is a login file, not a class. So let's create a docblock for this top function, "Generates logins and stores them in a file." Right, so nothing is actually returned or accepted here, which, that makes sense. So let's highlight this for-each loop and ask it to document it, and I'll try the /doc here. "This code block iterates over an array." So yeah, that's pretty good, so we'll keep that. So down here, I am going to highlight these, the cookie-setting lines, and say, "Please generate inline comments to describe what this code does." So it still creates a docblock. We can accept that. I would like something here, right? I would like, like, a side-by-side comment. "Comment this line." Not really what I meant. Let's discard that and try again. "Write a comment describing what this line does." So you could see, [[Microsoft Copilot|Copilot]]'s pretty bullish on document blocks instead of inline, single-line comments. We can accept that.
>
> **[3:11](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/creating-comments-for-code?u=76281980&t=191)** Of course, now we get the double line again. So this is, again, more subjective, not as clear, or not as straightforward as, say, the docblocks. But all in all, pretty good job of actually describing what's happening here, right? The line of code is used. The password is also trimmed. So this is pretty good, what is being commented here. Just remember that your mileage may vary. You need to definitely double-check the comments to make sure the documentation is correct. But this could be helpful for documenting your own code or to get a sense of how code that you've inherited works as well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (1)
> **Code Identifiers:** get_age (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-php-applications-with-generative-ai/next-steps?u=76281980&t=0)** - Congratulations, you are well on your way to creating great [[PHP]] applications with the help of [[Generative AI]]. If you want to dive deeper into PHP, we have a great selection of courses and videos in the [[LinkedIn]] Learning Library for you to check out. If you're more interested in the AI parts, we have lots of courses on that too. I recommend the [[Prompt Engineering]] course to really dive deep on how to create great prompts and get even better results, and definitely check out [[GitHub Copilot]]. It's a truly fantastic tool for coders. If you want to learn more about me, you can head on over to [casabona.org](https://casabona.org). Thanks so much for watching and until next time, get out there and build something.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Generative AI]] (1), [[LinkedIn]] (1), [[Prompt Engineering]] (1), [[GitHub Copilot]] (1)
> **CLI Commands:** php (2)
> **Env Vars:** php (2)
> **URLs:** [casabona.org](https://casabona.org) (1)
> **Tools:** github (1)
> **Speakers:** - congratulations (1)


## Instructor

- [[Joe Casabona]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/4515339-building-php-applications-ai)

## Skills Covered

- Web Development
- Generative AI
- Artificial Intelligence (AI)
- PHP

## Path Context

### In [[Building Generative AI Skills for Web Developers]]
← [[Prompting ChatGPT with Multimodal Techniques]] | **5 of 10** | [[Integrating Generative AI into JavaScript Web Projects]] →

## Appears In

- [[Building Generative AI Skills for Web Developers]]

## Related Courses

_Courses sharing skills:_

- [[Integrating Generative AI into JavaScript Web Projects]] — Web Development, Generative AI, Artificial Intelligence (AI)
- [[Advanced LLMOps- Deploying and Managing LLMs in Production]] — Generative AI, Artificial Intelligence (AI)
- [[LLMOps in Practice- A Deep Dive]] — Generative AI, Artificial Intelligence (AI)
- [[Generative Ai And Llmops Building Blocks And Applications]] — Generative AI, Artificial Intelligence (AI)
- [[Advanced Gemini for Developers]] — Generative AI, Artificial Intelligence (AI)

---

[↑ Back to top](#)