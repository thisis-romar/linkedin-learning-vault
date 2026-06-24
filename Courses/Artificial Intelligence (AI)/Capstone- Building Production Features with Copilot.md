---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: capstone-building-production-features-with-copilot
url: "https://www.linkedin.com/learning/capstone-building-production-features-with-copilot"
duration_minutes: 68
duration: 1h 8m
level: Advanced
updated: 11/25/2025
learners: 3298
skills:
  - Data Validation
  - Full-Stack Development
  - Artificial Intelligence (AI)
  - GitHub Copilot
  - Capstone
exercise_files: true
github: "https://github.com/paiml/GitHub-Copilot-Mastery-Capstone"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQFU4QN0jCeNSA/learning-public-crop_675_1200/B4EZq32w6IHUAY-/0/1764021178841?e=2147483647&amp;v=beta&amp;t=4VF2e5EUVMTxkkGLxZzTG33EPeEdA9b3_qwxyUZjct8"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/GitHub%20Copilot%20Mastery-%20From%20Advanced%20Prompting%20to%20Full-Stack%20AI%20Development.md)'
prev_courses:
  - '[Responsible AI Development with GitHub Copilot](Responsible%20AI%20Development%20with%20GitHub%20Copilot.md)'
path_nav: '[{"path":"GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development","position":4,"total":4,"prev":"Responsible AI Development with GitHub Copilot","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/data-validation
  - skill/full-stack-development
  - skill/artificial-intelligence-ai
  - skill/github-copilot
  - skill/capstone
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Capstone-%20Building%20Production%20Features%20with%20Copilot.md)

![Capstone: Building Production Features with Copilot](https://media.licdn.com/dms/image/v2/D4E0DAQFU4QN0jCeNSA/learning-public-crop_675_1200/B4EZq32w6IHUAY-/0/1764021178841?e=2147483647&amp;v=beta&amp;t=4VF2e5EUVMTxkkGLxZzTG33EPeEdA9b3_qwxyUZjct8)

# Capstone: Building Production Features with Copilot

> Embark on a journey to craft production-level solutions with Copilot in this capstone project-based course. Get started with strategic project planning and setup, before diving into full-stack implementation, honing your skills in API layer construction and data validation, and mastering complex business logic. Explore ORM and data persistence techniques to solidify your implementation's data laye

> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot) | 1h 8m | Advanced | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Capstone project overview](#capstone-project-overview)
- [**1. Project Planning and Setup**](#1-project-planning-and-setup) (3 videos)
  - [Task 0: The planning phase](#task-0-the-planning-phase)
  - [Understanding the zero context](#understanding-the-zero-context)
  - [Querying internal knowledge bases](#querying-internal-knowledge-bases)
- [**2. Full-Stack Implementation**](#2-full-stack-implementation) (6 videos)
  - [Task 1: The API layer](#task-1-the-api-layer)
  - [Implementing data validation](#implementing-data-validation)
  - [Task 2: The business logic](#task-2-the-business-logic)
  - [Handling complex business rules](#handling-complex-business-rules)
  - [Task 3: The data layer](#task-3-the-data-layer)
  - [Working with ORMs and persistence](#working-with-orms-and-persistence)
- [**3. Testing and Validation**](#3-testing-and-validation) (5 videos)
  - [Task 4: The test suite](#task-4-the-test-suite)
  - [End-to-end testing strategies](#end-to-end-testing-strategies)
  - [Reviewing your implementation](#reviewing-your-implementation)
  - [Comparing with best practices](#comparing-with-best-practices)
  - [Final reflections and next steps](#final-reflections-and-next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Capstone project overview](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=5)** - [Instructor] Let's walk through this [Capstone](../../Skills/Software%20Development/Capstone.md) project. Starting first at the flow, which is on the left here, the developer workflow, the quality gates, the server start, the client requests, the testing, the production workflow. All these fit into a pipeline where one by one you are ensuring that you have high quality and that you have a feedback loop that shows the quality of your testing. We can start with this with make quality. This is a single command that allows us to tie everything together from the [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) to the mutation testing to the server initialization as well. All this can go together in one quality control command. Now, in terms of the client interaction, this is where you would have a browser UI for a demo page and also look at the API requests. And then in terms of the comprehensive testing, you could go through and look not just at the unit test, but the in-the-end test as well. And in terms of production readiness, this is where we have a make file that allows us to abstract the commands that we're running. In terms of the server architecture on the right side here, this is where we have step-by-step the components. First we have the framework layer, and this framework layer is the middleware pipeline for all of the requests, the validation, the logging, the air handling. In terms of the API layer, we have a health check, and this is a good way to start with building an application, is to also have
>
> **[1:39](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=99)** a simple health check without getting into the complexity of more advanced health checks. Does anything work is essentially the simple health check. In terms of API docs using the open API 3.0 specification, we can actually go through and run the API docs. We can look at the invoice API as well. In terms of the business layer, this is a place where we can look at the currency, the rules, the audit trails. And then in terms of the data layer, this would be the base repository, so CRUD operations. Also, looking at things like storage and the production system, is that using, let's say, [Postgres](../../Skills/Software%20Development/PostgreSQL.md) or Dynamo? And then finally, in terms of the key concepts at the bottom, we want to look at a okay for success, error for failure, no exceptions, thrones, we want type safe errors. And then in terms of the quality metrics, this is something that is demonstrated throughout. The code base is extremely high coverage, a very high mutation score. The tests are totaled as well, so you know how many tests are included. And then you have the concept of a zero defect enforcement. So you don't want anything to pass through to production. And this is something that's critical with agentic coding. Finally, if you get to the bottom here, you can look at some of the core components. We have Deno runtime for TypeScript, sub 100 millisecond performance, and we also use standards like the RFC 7807 for errors.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Capstone](../../Skills/Software%20Development/Capstone.md) (1), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1), [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (1)
> **Env Vars:** api (6), crud (1), rfc (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Documentation:** specification (1), rfc (1)
> **Versions:** 3.0 (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)


### 1. Project Planning and Setup

[↑ Back to Table of Contents](#table-of-contents)

#### [Task 0: The planning phase](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=5)** - [Instructor] [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) is a common term that many software developers understand. It stands for test-driven development or TDD. And if you take a look at what that means, it means that you first write a test and then you implement the functionality afterwards. Before the LLM coding phase, there were lots of different approaches to doing this. Many times it was more trouble than it seemed like it was worth. If you're rapidly changing and the human is building the code and the tests at the same time. But in the era of [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) and AI programming tools, it starts to make a lot more sense because you're writing a lot more code. And as a result, you need to spend more of your time writing tests. And this extreme test-driven development style is a way to, from the very beginning, plan to make zero defects. How would you do this? To start with, you create a ticket. And this ticket would be a managed ticket. So you would have a tool, for example, PMAT or some other type of tool that would manage and enforce that all tasks are performed with a ticket. And then inside of this YAML file, it would have a description of everything you're going to build. Once you have that ticket in place, you would then go ahead and write a test. And this is where the classic test-driven development mindset comes into play. It makes your code a lot cleaner because of the fact that you're defining exactly what it is you're trying to solve. Then you would verify that the test fails.
>
> **[1:39](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=99)** So you'd go ahead and do a red mode. So you would go ahead, run the test, notice that it fails, okay, great. Let's go ahead and implement it. Now, when you're implementing the code to make this pass, what's really important is to do it in a quality manner. So this is where tools like PMAT or Cyclomatic Complexity Tools or other tools that are monitoring the quality of the code come into play because they can look at things like how complex the code is, if there's self-admitted technical dead, or if there's some kind of other defect inside of the code, for example, maybe a lint warning. It's really important from the very beginning to write this high quality code. Then you go through on the next step, which is verify. You make sure that things are green. Then you go through to the documentation and then update it and say, great, we were able to pass this particular component. And then you're not done though with the extreme test-driven development style because you still need to build end-to-end tests. And the end-to-end test would make the entire system be tested within the component that you just built. And this would also catch many subtle bugs. Still though, you're not done because even if you wrote a unit test, there are also negative and positive scenarios where you would miss some of the things that you need to do. And this is where property testing, mutation testing and fuzz testing come into play. So what it means is that if you subtly change the code,
>
> **[3:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=193)** do the tests still pass? If they still pass and you've made subtle changes to the code, like a mutation, that's a problem. Or in the case of a property test, you're going to test many different invariants so that you're able to summarize exactly what it is you're building when you're running through this test. And that's what's nice about thinking beyond just the test itself, but how good is the test to verify what you're trying to build. Finally, you go through and you are able to build zero-defect code. So this methodology is a mandatory methodology in the world of agentic coding. The reason for this is that it's a lot like a table saw where if you are an expert, you can build things very quickly with a table saw. But if you're an amateur, you could easily lose a finger. And this is very common. And what people do is they have safety mechanisms that prevent these kinds of defects from occurring when a human interacts with a table saw. So similar with the extreme test-driven style, the idea here is to prevent the defect by design versus just going through, trying to build code as quickly as possible. In this case, you're trying to test as much of the surface area and even go beyond normal testing so that you're building things in a thoughtful way where it's very difficult to create defects.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (5), [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (1)
> **CLI Commands:** make (5)
> **Env Vars:** pmat (2), tdd (1), llm (1), yaml (1)
> **Definitions:** is a  (3), stands for (1), means that (1)
> **Analogies:** for example (2)
> **Documentation:** the documentation (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the zero context](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=5)** - [Instructor] Let's start walking through this well structured and very deterministic project [Capstone](../../Skills/Software%20Development/Capstone.md). To start with, we can look at the make file. The make file in many ways is like a map, or it could be like the yellow pages, it could be an index. There's lots of different analogies, but the idea here is that it tells you exactly what's going on in your project. And if you take a look at a make file that has a help menu, for example, if we type in make help, it instantly tells you all of the components. For example, testing, we have make test for quality gates. We can run, make quality for doing build and deploy. We can do make build to clean up. We do make clean. This type of index or flow allows for a very simple way to interact with the entire system. For example, if I type in make info, it gives us the information about the project. Or if I type in make lint, I can instantly get a lint of everything and we see, oh look, there's some minor warnings here about some CSS, but the TypeScript files here are all passing, which is great. We can also do a make test, which is a great way to start when you're building out things, is to see if anything works. And here we see something, woo, we have some test failures here. Let's go ahead and clean those up. Wow. We have a failure here where the health check is not giving us exactly what we need to do.
>
> **[1:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=98)** So what I would typically do in a scenario like this is actually stop it and then use some kind of coding assistant. It could be [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md), for example. If we go through here and we say, Hey, what's going on? You know, in this case we have make test failures. Why? What's nice about this style of a make file is that everything that a project does is considered inside of the make file. If I ask an agent about what's happening, it has all of the context it needs in order to run it. So in this case, we're going to go and we're going to say, make test. It's going to look through and verify what are the different things that are happening, how does it actually run? And then we can debug it from there. So I can think of the make file as the most efficient or compressed way to deal with what's happening in my project. And if you look at a failure here, it's a great way to get started with debugging it and using an agent to exactly fix what the problem is. Now, the next step that I would do after something like this is build, for example, a ticket and then solve that ticket and then move to the next step. Now I'm going to kill this for a second here and show that the other thing that's really important when you're dealing with a project like this is to also take a look at the README file. If we look at the README file as well, the README file should show at a high level everything
>
> **[3:12](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=192)** that's happening in the project, how to actually use the make file so they work together to provide the correct context so that I know how to debug the project and how to build it not just with one agent, but maybe I want to debug it with multiple agents at the same time. In this case, we already have the acceptance here that I can run, which says accept all. Let's go ahead and run it again. We type in make test here. After we do this acceptance, we easily can start to do debugging where we do pair programming. In this case, it looks like we're a little bit further down the road here, and in fact, I could even toggle between a different tool. Now we've actually dived into another tool. In this case it's cloud code. And you can see here that I can actually use two tools at the same time. So I can start with, for example, [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md), start to get a particular scenario solved and maybe crosscheck it with a separate tool, in this case cloud code. And again, because we have the make file, it makes it very easy to cross reference those two tools because the make file is a central context, and that central context can be run by GitHub Copilot, it could be run by Cloud Code, it could be run by some other tool like [Gemini](../../Skills/Software%20Development/Gemini.md). It could be run by a third party tool or an Open Source tool. And it could also be run by a human because the make file itself is separate from all those tools. Even the context that each of those agents has is separated.
>
> **[4:46](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=286)** So this is what's powerful about this make file style, is that I can actually build lots of different solutions using many different coding agents. And I don't have to worry that all of my solutions are only tied to one particular context because the make file itself is the context that I help generate for this particular project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (2), [Capstone](../../Skills/Software%20Development/Capstone.md) (1), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (1), [Gemini](../../Skills/Software%20Development/Gemini.md) (1)
> **CLI Commands:** make (23)
> **Analogies:** for example (6)
> **Env Vars:** readme (3), css (1)
> **Documentation:** the readme (3)
> **Tools:** github (2)
> **Definitions:** is a  (2)
> **UI Navigation:** toggle (1)

#### [Querying internal knowledge bases](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=5)** - [Instructor] One interesting way to work with agents is to think about previous high-quality code repos as an internal knowledge base. One of the reasons why they're high quality is that they've been around for a while. They have institutional knowledge, and if they're done in an extreme TDD way, for example, the code has very clear tickets. There are static analysis tools, 80 or higher percent test coverage, mutation testing, linting, deployment recipes, makefile, advanced tooling that is built with agentic coding in mind. If all that stuff is baked into a project and the project is successfully deployed, that's a really good starting point for you to build a new repo that can communicate with that repo. And if you have a second repo, for example, you want to build a composite of two different API services or two different components that talk to each other, this is a good way to start, as you point the agent at these two repos, you then ask it a few questions. You say, look, I want you to do X, Y, Z, I then want you to build doc's specifications, tool number six or whatever tool it is that you're building. And then you want to say to that tool, I want you to use these best practices, extreme technical defects elimination. I want you to make sure that you have a make file that has all these different commands.
>
> **[1:40](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=100)** I want all of the tasks to be done with tickets. So if you have a recipe, essentially a bulletproof formula that has already been applied to those other repos, you can then say, this is how I want to build this composite tool. And in many ways, this is one of the best ways to build this spec is to first analyze it. Again, what I typically do is I'll create this third repo and I'll put doc's specifications and then the name of the tool that I'm building. Once it built that tool, another really interesting component is to then cross reference that specifications with another type of agentic coding tool. For example, if you use Claude to generate that particular tool, maybe you cross reference it with [Gemini](../../Skills/Software%20Development/Gemini.md), and then that particular different tool is going to think about things in a little bit different of a way. You almost red team it. You say, look, I want you to find a critical [Code Review](../../Skills/Software%20Development/Code%20Review.md) of this particular specification. I also want you to look at it in the frame of, I assume things are going to be wrong and I want you to find five things that are wrong with this specification. And then I also want you to look at, let's say, 10 different computer science peer-reviewed papers and cite the different things that are supporting your points about the critical review. And once you start to build this iterative style, then it makes it a lot easier to quickly build high-performance tools. So this is a form of querying these internal knowledge bases
>
> **[3:14](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=194)** and turn them into a specification. Now the specification is only as good as the implementation, right? So they're both going to play together. In the case of the specification, you're able to get a higher-quality specification by pulling from these two repos and then [Red Teaming](../../Skills/Cybersecurity/Red%20Teaming.md) it. But then still you need to have the implementation correct. And this is where, again, a makefile going through and verifying step by step, okay, here's my ticket. What is the test that I'm going to build? You build the test. Okay, great. The test passed because now I've built the code that will make this TDD workflow work. But then I still want to do mutation testing to make sure that these are good unit tests, not just okay unit tests. And then again, I'll add property tests. I'll also look at linting. I'll also do [End-to-end Testing](../../Skills/Software%20Development/End-to-end%20Testing.md). Also go through and look at the static analysis. So I'm essentially looking at it with a really critical eye, but also leveraging the history of these other projects that have had lots of success because they've had this great formula. So what you'll find is if you do have extreme detail when you're creating projects and you have the highest of standards, and it's a little bit difficult to have these high standards because it's so tempting to write sloppy code. But if you do, what'll happen is it's like a snowball. As you push the snowball downhill, the future projects that you build
>
> **[4:47](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=287)** will be able to leverage all of that institutional knowledge, all of those best practices, and it makes it easier to build high-quality code. The reverse is true as well is if you're sloppily building a repos that have very low standards of excellence, eventually, you'll hit a critical component where all of the systems will have big issues and then the development work will stop. And so it's a really critical way to think about how to query internal knowledge bases is feed them really high-quality work from the very beginning, make sure that you're doing these best practices and then the subsequent repos that you create can really leverage that institutional knowledge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Gemini](../../Skills/Software%20Development/Gemini.md) (1), [Code Review](../../Skills/Software%20Development/Code%20Review.md) (1), [Red Teaming](../../Skills/Cybersecurity/Red%20Teaming.md) (1), [End-to-end Testing](../../Skills/Software%20Development/End-to-end%20Testing.md) (1)
> **CLI Commands:** make (5), find (3)
> **Documentation:** specification (6), spec (1)
> **Analogies:** for example (3), it's like (1)
> **Env Vars:** tdd (2), api (1)
> **Definitions:** is a  (2)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### 2. Full-Stack Implementation

[↑ Back to Table of Contents](#table-of-contents)

#### [Task 1: The API layer](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=5)** - [Instructor] Let's go ahead and start to build out a way to test our APIs and to get into interactive coding with agents. First up here, I'm going to open up this chat and you can see here that I already have the make file listed and I asked a question. I said, what does actually make dev do? In this case it says it starts a development server using Deno. So I'm going to say, Hey, run that for me. So basically run that for me and show me, because the make file is such a great interface for interacting with different components of my workflow, it's nice to be able to work and pair program with an agent in this case, Hey look, we can actually take a look at this running server and now that I've got this working, I can toggle over to that running demo and take a look. So, ah, okay, here we go. Let's go ahead and refresh this. There we go. We have this demo interface here and this is an invoice reconciliation engine and the key components are make quality, make build, make dev, and the health check is the first place that I would go ahead and take a look at. And this case we can see that it is in fact healthy. It's running on this /health endpoint. And the other thing I'm going to take a look at is the overall API documentation. At this point, what we can do is take a look at the /API docs here
>
> **[1:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=97)** and it has all of the high level interfaces available. So this is a great way to understand in one quick page all the different API endpoints and what they surface. But if I go over to the Swagger interface in this case, this is a really good way to interactively explore and even execute the different endpoints. In fact, the get endpoint is probably one of the easiest ones to try. If we take a look at this, it says the response code 200, great, the service is healthy, we have the type application [JSON](../../Skills/Web%20Development/JSON.md). Let's go ahead and try it out. In this case, if we say execute, we see the actual curl command, we see the request URL, and we also see more information about the result. In this case, great, this timestamp says that it was a status healthy, we have an actual timestamp that we could use. And then I also could go down to the other components as well. For example, a crud operation right here, I can go ahead and try this one out, I can execute it. And what's nice about these is that it's a great interactive way to play around with the interface and I can also from a user acceptance standpoint, take a look at these APIs. So it's more than just using, let's say, a curl command or running an end-to-end test. When you have an interactive interface like this, it really adds a lot of power to your ability to understand if what you built works.
>
> **[3:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=191)** And in the case of Swagger, it's a good interface that mixes those two components. Now, let's go ahead and toggle back this interface here. And you can see one of the cool things about pair programming with an agent is that even though I was testing it myself, I could also ask it to test it as well. So if we go through here, we say connect, oh look, the connection refused. So in this case, the actual agent was not curling the correct command. I'm going to say, Hey, this is running on port 9001.
>
> **[3:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=236)** So you can think of it in many ways, like very similar to some of the stuff that you would do yourself when you're working with another person. In this case, look, we see that the port 9001 here, we can actually go ahead and try that. Ah, okay, here we go. We've got the right result here starting, but look, in this case it's already in use. Let's go ahead and test the running server. So we have a very realistic scenario here where some of the things that you're doing would already be in line with, let's say a coworker or something like that. And so this kind of pair programming style is a pretty good style. And one of the ways that it makes it work is that the ability to have extremely good documentation with things like Swagger also have very good testing. Again, if we go ahead and we say, you know, make test right here, you can see we can actually look and run all of the different unit tests and end tests, but then also because we have the make file, it makes the whole package together be much more powerful. In this case, we can see that we have a failing test. Oh, let's go ahead and dive into it, take a look at it and actually fix it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** make (8), curl (2)
> **Env Vars:** api (3), json (1), url (1)
> **Definitions:** is a  (3), is an  (1)
> **Ports:** port 9001 (2)
> **UI Navigation:** toggle (2)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)

#### [Implementing data validation](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=5)** - [Instructor] One of the ways to be highly productive with Agentic coding is to leverage highly productive tools, especially tools that have extremely high quality. A good example is Deno It's the runtime built in [rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) for TypeScript. And in the case of Zod, it's a type script first schema validation library. So what it does is it validates data at runtime, so it checks the actual values and it infers TypeScript types automatically, and it returns clear error messages when validation fails. So why would you want to use this? It's going to have runtime safety, so it'll validate the API inputs, the form data, the environmental variables. In terms of type safety, you have one schema and the TypeScript types and validation logic as well. In terms of developer experience, there's a chainable API with clear errors. If you take a look at the key benefit, it's type-safe validation without maintaining separate types of validators. And if the case of implementing this, what you could do is first install it... Install Zod via MPM, then go in and import it in a route file. This would be the first step here. And then define the user registration requirements. So in terms of this basic schema, you would create a z.object for the user data. And then at this point, [copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) could suggest a field type. You could also add .email for email validation,
>
> **[1:42](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=102)** .min for password length, and .int positive for age. And with custom validators, you can do add.refine for the password strength. And then if you go through and you iterate through, over and over again, the prompts are going to be really apparent because of the strong safety you've got built into your project. This is really the way to leverage and limit the complexity of using Agentic coding. In the case of Copilot, you would say check uppercase in numbers, and then Copilot would say, "Hey, here's a Regex suggestion for you." You could add clear error messages, so you're getting this type safety, plus the compile time runtime safety, plus you also get the completion with Copilot. And in the case of testing, you would then test the valid data with curl. So you're starting to do [End-to-end Testing](../../Skills/Software%20Development/End-to-end%20Testing.md), and then you would show the 200. Okay, you would do a test and valid email format, show the 400 error with a field path, and then do a test weak password, and then show this custom error message. So really you're putting something on top of what is already high quality. That's really the secret ingredient here, is you build something that's got really good safety, really good quality, in the case of the validation for the API, you're getting that in there. Do standard best development practices. So you do end-to-end testing with an API, and then finally you put it all together. And then you ask the Agentic coding tool
>
> **[3:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=196)** to help fill in the little details. You're not doing it all with Agentic coding for the beginning. You're really almost putting frosting on the cake, versus building the cake with the Agentic tool. And the key takeaways here are Zod is going to be TypeScript inference plus runtime checks. The Copilot is going to accelerate the schema creation, but not necessarily build everything from scratch. And then the .refine adds the business logic, the clear errors improve the [user experience](../../Skills/Web%20Development/User%20Experience%20(UX).md). And then in terms of the test, you would also test the golden path or the happy path, but you also want to test the failure. And this is also where you get into things like mutation testing that can also test things that you didn't even consider. For example, does your test pass and it shouldn't pass because something was mutated or there's a different value that was passed in. So when you put all this together, that's really the power of using Agentic coding, is leveraging the best practices that have been around for a long time and leveraging the best tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (5), [End-to-end Testing](../../Skills/Software%20Development/End-to-end%20Testing.md) (2), [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) (1), [User experience](../../Skills/Web%20Development/User%20Experience%20(UX).md) (1)
> **Env Vars:** api (4), mpm (1)
> **Prerequisites:** install (2)
> **CLI Commands:** curl (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Task 2: The business logic](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=5)** - [Instructor] One significant issue in building things with agentic coding tools is you can get into a bad habit. First, you start trying to build something by using human language, and going through and iteratively trying some ideas out, but the problem is, you may not know yet yourself what it is you're trying to solve, and by asking an agent to build it, you're both guessing together. But if we take a look at this diagram here, if from the very beginning, you have a workflow of how you build code, you say, "Here's a ticket", and this ticket is going to define exactly what I want the agent to build, and then I'm going to afterwards write a test that verifies the expectations in this very specific ticket, in this case, it's a calculator, will pass, then we know that we've actually got the contract and the validation. Afterwards, you would go through and ensure that that test would fail. So, for example, in the case of the ticket we're building, it would have add, subtract, multiply, division, right? And we also have an error, and then in terms of the test, all those should fail. Afterwards, if we go through here and we build this calculator class, it should make each of those tests pass. And so we have a very specific and deterministic workflow that's quite different than just playing around at a terminal and asking an agent to build something.
>
> **[1:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=98)** At the very end, we have the validation. So, let's take a look at what that ticket could look like. In the case of a ticket, one of the great ways that you could think about building tickets is to use something like YAML. What's nice about YAML is that you can put a title, a description, also an acceptance criteria. You can put the very specific test case that you want, an operation ad, I want an input. So, you're using a combination of human-readable form so somebody that isn't a programmer can look at it, potentially even add some acceptance criteria to it, but also, you can use some programming tools like a linter to verify that, "Hey, this is actually formatted correctly.' So, it's got a good mix of both scenarios. And then, afterwards, you go through here and you build this test. In this case, again, we would first make these failing tests. Okay, we want to add two numbers, we want to subtract two numbers, we want to divide two numbers, et cetera. And then when we get into the [JavaScript](../../Skills/Software%20Development/JavaScript.md), here's where each of these methods on the calculator class would then correspond directly to the failing test and make them pass. So, this is a very different way to code that is a recommended way to code in terms of using agent coding. And what's different about it is that the logic is already defined at the very beginning, so the agent is not building the logic, they're building the implementation of the logic
>
> **[3:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=193)** that you designed from an architectural standpoint at the very beginning. I think this takes a little bit of time to adjust to this kind of development style, but if you find yourself using this style with, let's say, a YAML ticket, a failing test, and then making the test pass, you'll get much better and much more deterministic output when coding with agents.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** yaml (3)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### [Handling complex business rules](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=5)** - [Instructor] One thing that's a little bit unclear when you're coding with agents is, what is the mechanism to update your code? Let's say that you have a project that has everything in place, it's working properly, you have really good test coverage, you have really good quality, and then it turns out that there's a piece of functionality that's missing. What's scary is, if you're going to use an agent to go through and update it, what is the mechanism that you would use in order to do that? Let's take a look at this concept of BDD, or behavioral-driven development. A human discovers a bug or a human discovers there's a feature missing. In this case, the [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) shows that, "Whoops, we actually should match 99.9.50 to 1,000", right? That's a tolerance rule that we need, so we would go ahead and build this BDD spec. And then, when we look at this, the first place to do this is with a ticket. So, the ticket would then have the tolerance rule, the acceptance criteria, we would add some labels to it, and then once we've got that workflow set up, then we would want to turn this into the technical implementation. So, the next thing we would do is we would want to have the ticket get converted into logic, so this would be the code. The code would have to match the tests exactly, so the test would be written first. And then finally, this is one of the things that's a little bit tricky
>
> **[1:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=97)** when working with agents is, are you looking at the complexity of your code? Are you looking at the self-admitted technical debt? Are you looking at the lint? Are you looking at the code coverage? All of these metrics that have been in place for decades with computer science really make a big difference when you're coding with agents, because even if you defined everything correctly, did tickets, et cetera, you still need to enforce quality. So, let's take a look at what this ticket could look like. In this case, we would have a YAML file that has everything inside, the business requirements, a bunch of test cases defined. Somebody else on your team that's a product manager could come in, update some of these test cases, and then now we get to the code itself. So, based on the existing code in your code base, plus that ticket, there should be enough context for an agent to go through and define this new rule, and this rule could fit directly inside of the existing rule engine. And again, if the test was written first, it would be easy to then implement this one piece of logic that goes through and implements this rule. And then we go to the test here. Again, the test would describe exactly what's happening. They would be written first, and these tests would then be verified against the logic that is coded inside of the application. And then, finally, as we're looking through
>
> **[3:12](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=192)** and we're looking at the things that we're building, we should be looking at the Quality Gates. So, formatting the code, linting the code, testing the code, verifying that the test coverage is actually accurate by doing mutation testing. So, the mutation testing could change a plus to an equal or change a minus to an equal. It could go through and slightly mutate the code so that the logic is going to be verified if there's something really subtly wrong inside of the test. And this is a great way to get a much more realistic code-coverage scenario. You could also add property testing as well to test lots of different conditions. And then finally, in terms of the cyclomatic complexity, self-admitted technical debt, all kinds of other metrics like churn, you could have specialized tools that will go through and check the quality of the code. And then finally, at the very end, you would get a report that would show you exactly what's happening. So, this is a very different style of development when you're thinking about updating is first, what is the logic? Like, who is the person that came through and developed that criteria, and then how do you define that into a spec? And then finally, how do you actually implement it? You need to have extreme rigor. There should be very high quality in terms of a code base. If there's already an existing code base with high quality, then adding these small, little, incremental changes are going to be trivial, especially if you have guardrails that enforce
>
> **[4:45](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=285)** the quality of your code, and you have tests that enforce the logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Manual Testing](../../Skills/Software%20Development/Manual%20Testing.md) (1)
> **Env Vars:** bdd (2), yaml (1)
> **Documentation:** spec (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1), you need to have (1)
> **CLI Commands:** make (1)
> **Versions:** 99.9.50 (1)
> **UI Navigation:** go to (1)

#### [Task 3: The data layer](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=6)** - [Instructor] A major issue in the world of agentic coding is what to focus on. One place to focus on is to look at the runtime itself. Many interpreted languages have severe legacy issues because the binary itself is huge. So in the case of, for example, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), oftentimes it could be a hundred or maybe 200 megabytes just to get everything into a container runtime. Same with scripting languages. For example, Deno TypeScript. It's going to bundle the entire V8 runtime inside, and you're going to have close to a hundred megabyte runtime. If you look at interpreted languages, they're really an issue in terms of the size. A binary though, especially for a modern-compiled language like Go or [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md), is tiny, and so the runtime bloat is essentially non-existent. And if you look at the startup time, this really plays a role with [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) execution or deploying it into production. You also eliminate the runtime dependency hell, the surface attack area, also cold start latency and memory overhead. Now let's go ahead and take a look at some real code here in this repo. And if I take a look at the README here, we can again dive into the Python NumPy problem versus a compiled binary. So if you're going to do some kind of scientific coding, if you're playing around in a notebook or you're playing around with an interpreter, the Python + NumPy is an interesting use case because it's got all that bundled inside.
>
> **[1:39](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=99)** But if you're trying to deploy it somewhere, actually using a language like Rust or Go or some other language that is a modern-compiled language to build a tiny binary, for example, it could be 400K binary, you're going to get a lot better output as a result. So in practice, we can go ahead and run this and take a look at what this means. Well, if we look at the benchmark results here, we have different interpreted languages like Ruchy, we have Rust, we have Go, Deno, Python, Julia. And in terms of a chart that shows all these together, we have the mean time here. C is the standard, but Rust and Go, these languages get very close. But then if you put in the binary size, all of a sudden, things get much, much different because in the case of a Docker image, you could have 700 megabytes or 100 megabytes or 250 megabytes. But in the case of the modern-compiled languages, they're tiny. Let's go ahead and take a look at this Makefile here. This Makefile has all of the different components of the project that we can actually benchmark. And if we type in make help, this is a good place to get started. And you can see here we have make deploy, make coverage. We have lints for all these things. In this case though, we're going to go ahead and do a make bench-cli. Let's go ahead and run that. And if we type in make bench-cli, this will go through and run all of the different benchmarks against these different containers.
>
> **[3:14](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=194)** And we can see here that in terms of the compiled languages, they run so fast that you almost can't see what's happening. The interpreted languages are going to run a lot slower. And then we see here the results at the very end. So, C is the fastest. We also have Rust, which is extremely fast. And languages like Ruchy, that transpiled to Rust, are also very fast. But then the scripting languages, the ones that run with interpreters like TypeScript and Julia and Python are going to have a impact because of how slow the interpreter is, which is essentially just a big executable. And so, really, to summarize everything here, if we take a look at what this means is that we can build out in terms of a chart a performance visualization. So in terms of execution time, you're going to get much faster execution time with compiled languages, modern-compiled languages. Also, because of the advances in safety and security, a lot of organizations are switching to these modern-compiled languages. C is fast, but it has many different situations that cause security issues. In terms of the binary size, though, this is something that is a little bit less obvious until you benchmark it. But in terms of a modern-compiled language, you can see here that you have essentially a third of a megabyte runtime here for some of these modern-compiled languages. In terms of the scripting languages, we're talking 100, 300, a thousand times larger runtime. And so over time, this starts to really play a role
>
> **[4:51](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=291)** in terms of cost and efficiency. And so these may be useful in [Prototyping](../../Skills/Software%20Development/Prototyping.md), but in terms of production, they can cause big issues. So this is something to consider with agentic coding when you can easily convert from one language to another or figure out more automation, where should you be spending your time? Should you be spending your time building very inefficient and slow solutions? Or should you be spending your time modernizing your system so that the stuff that's slow doesn't matter because it's not in production, but the stuff that's fast, you do spend your time automating, benchmarking, looking at these kinds of things. So runtimes are going to be a big factor of the future with agentic coding because why would you build something that is super slow? Or why would you build something that takes lots of energy or takes lots of disk storage? That's all stuff you're going to pay for. But with agentic coding, you can spend your time making things more efficient.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) (6), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (3), [Prototyping](../../Skills/Software%20Development/Prototyping.md) (1)
> **CLI Commands:** python (5), make (5), docker (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (3)
> **Env Vars:** cli (1), readme (1)
> **Documentation:** the readme (1)
> **Speakers:** - [instructor] (1)

#### [Working with ORMs and persistence](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=5)** - [Instructor] One way to get started with coding a new component in your system is to first take a look at the thing you want to build and dive into the code manually. So in this case, we have a source directory, and I want to go into the repository and look at base. Now I have a particular abstract class here, which is in-memory repository. And I want to dig into a little bit more about how I could use this as the starting point to build persistence. So let's say I wanted to use [Postgres](../../Skills/Software%20Development/PostgreSQL.md) database or [SQL](../../Skills/Data%20Science/SQL.md) Light or some other kind of system. What I could do is I could go over to the agent and then notice that it's highlighted here. It says that you're referring to Base.ts. And I'll go ahead and ask what this code does first. Now, the reason this is helpful is that by asking even if you understand it yourself, what the code does, you're setting the proper context for other questions that you're going to do in the future. And so in this case, it shows us that this is an abstract base class. It's has an implementation of repository interface, and it maintains an internal map called data to store entities by their ID. Now that I know exactly what this code does and the agent knows what this code does, let's talk about how we could set up a persistent layer. So I'll go ahead and ask that question. What is the technique for doing a Postgres layer instead?
>
> **[1:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=108)** Show me an example without editing the file. So in this case, I want to start to get into what it would look like to implement this new feature. In this case, it says, this uses the PG package to connect to Postgres, and it takes a connection pool and table in the constructor. So we already have some good ideas here. And then if I look at this, this is a great way to start to prototype out what change I would want to make. Now what I could do as well is instead of doing anything in terms of the coding, I could say, great, let's go ahead and build a TDD component first. In this case, why don't we go ahead and say, great, show me what a mocked TDD test would look like
>
> **[2:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=168)** that would make this a red workflow that the code you showed me would pass, right? So we're now getting way deep into the complexity of testing, which is a much better place to start with in terms of what we want to do to augment the functionality. Because even though I know that I want to change this code to do something with a persistent database, all I have to do is then start at the very end and say, look, I actually want to write a fully mocked out test first. In this case, we can see that there's a mock implementation of a Postgres repository, and it's going to write the test here that shows exactly how the return statements would work, should return, okay with entity when found. And then I could go through and look at this implementation and then say, okay, great. This is really where I want to start. I don't want to start with the logic. I don't want to start with the agent editing the code. What I want to start with is several steps down, which is the mocked test. And I could even go further and I could say, perfect. Now I can go even a step further and build out a ticket that does everything we just talked about. So we'll say build a ticket. Now we can fully implement all the steps together
>
> **[4:22](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=262)** by creating a ticket. So we'll say create ticket called Ticket-postgres.yaml, and put the steps we went over. And then also I want to see it before we submit it to [GitHub](../../Skills/Software%20Development/GitHub.md). Okay, let's go ahead and take a look at what this YAML ticket could look like. In this case, here we go. We see that we're going to implement a Postgres SQL pattern here's the technical details, here's the implementation, here's the test implementation. We're going to create a mock pool for testing. Here's our acceptance criteria, and here's the implementation file. And then again, I can attach to that ticket, the exact source code and the test that's going to make the the source code and the test work together. And then we also have the dependencies as well, and we could even attach that. So this is a much different way to develop with agents is to really on a reverse basis, think about what I'm developing, and I haven't even touched the code at all. I'm just designing based on using the agent to interrogate and ask lots of different questions that later will give me a really great result because of how thoughtful and how careful I am when I'm building a new solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Postgres](../../Skills/Software%20Development/PostgreSQL.md) (6), [SQL](../../Skills/Data%20Science/SQL.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **Env Vars:** sql (2), tdd (2), yaml (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (3)
> **File Paths:** base.ts (1), ticket-postgres.yaml (1)
> **Exercise Files:** source code (2)
> **Tools:** github (1)
> **Prerequisites:** set up (1)


### 3. Testing and Validation

[↑ Back to Table of Contents](#table-of-contents)

#### [Task 4: The test suite](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=5)** - [Instructor] Let's extend our unit test structure by first looking at the output of make coverage. So the make file here is our friend, because it gives us a centralized interface to look at all of the code. And you can see here, we have the output from the test. We also have the ability to see if any of 'em failed. They're all passing, and this make coverage command is really easy to remember. I just run make coverage. Now, in this case, we see that we have extremely good coverage, but could we do a little bit more? For example, this branch coverage here of 83%. Could we actually improve it? I don't know. Let's go ahead and see if we can. First up, what I could do is I could look at the source directory and then I could go to the business reconciliation. So we'll go to business and we'll go to reconciliation. And we see that there's a matcher.ts here. Now what I would do at this point is I would take the output, in this case, this command here, and then I would copy it and I would go over to [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) and I'm going to say, this is our coverage. Let's improve a little bit. And then what's nice about this is that we should be able to extend one of these tests. In this case, we're going to look at the existing tests and it was able to find that matcher, test.ts is the one.
>
> **[1:40](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=100)** And it says, look, we don't have tests for when matches are found. We don't have a test for currency mismatch. So in this case, it's a really good way to explore the capabilities of what an agent can do because we already have really good test coverage. We already have a high quality project. At this point, we're going to extend what we're doing and we're going to actually accept this change if we validate it. In this case, it's going to say, look, here's another test here, and I can review this test and we can see that it's going to add some additional conditions, like it mentioned. It should handle different currencies. Great. And we can go through and review all these different examples here, and we can either accept them or deny them. Let's go ahead and accept all. All right, now that we've got that working, let's go ahead and run the coverage again. And now we can see that we've increased the branch as well as line coverage for that particular function. What's nice about this is that this is a strong use case for using coding assistance. You already have something that's very strong. You already have something that has high quality. You ask for a little bit more based on what you've already built, and this is a great way to get to that final component or get to the final test that will make your system more reliable. So that's a different way to think about coding with agents is how do I make my system more reliable versus how do I write more code?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (1)
> **CLI Commands:** make (6), find (1)
> **UI Navigation:** go to (3)
> **File Paths:** matcher.ts (1), test.ts (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [End-to-end testing strategies](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=5)** - [Instructor] Let's take a look at [End-to-end Testing](../../Skills/Software%20Development/End-to-end%20Testing.md). This is really when you've already built a high-quality product. You have lots of [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md), and property testing, and mutation testing, linting, quality analysis. You also want to look at how the application itself runs. What I like to do is put this into a Makefile target, so I'll say test-e2e. And then here, we see, I tag it with deno test, and then I go ahead and I run this particular test. Now we can actually see this, if I type in make test-e2e, we'll go through here and run one by one all of these individual tests. And what's nice about the end-to-end test is they're very logical. So is the page going to load? Is the health check endpoint returning the correct status? What about the CRUD operation? Are we building a POST request, a GET request? Are we listing all the invoices? So it's testing the things that are natural behavioral type issues with your application. And what's nice about this as well is it's easy to read. So let's go ahead and take a look. We can see here, from this particular example, it's in tests/e2e/index_page.test.ts. Here we go, we've got this open. And if we scroll through here, it's very easy to read. It sounds a little bit like human logic if you say describe Index Page.
>
> **[1:39](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=99)** And then we can look at some of the options, right? In this case, the Index Page end-to-end test has a Page Load, and we describe here and we say, does the page load successfully, and then at the very end, does it return back at 200? Okay, what about the title of the page? Great. The title says Invoice Reconciliation Engine. Okay, what about navigation links? Do we have navigation links that are correct, what are the different navigation links that we care about? Health check, great. We have an API docs link, does that work? This is really helpful because not only does the API check help me in terms of the code behind it, like the logic, but it also helps me in terms of a behavioral issue with whatever departments I'm working with or clients that I'm working with. I can say, "These are the things that I care about, and I want to have a whole end-to-end test built." Now, I also could, if I wanted to, open up an agent, and I could say, "Look," you know, "What does this do?" or, "What are some other things that we can add as a behavioral test?" or, "What tests am I missing?" But really, it starts with having the infrastructure in place. Once you've got this infrastructure in place, it's easy to enhance it or add the cherry on the sundae because I've done all the hard work. I have the Makefile, I have the end-to-end test, I've been able to run it, they're successful. And then I can incrementally increase the quality even more and add as many behavioral components to the test
>
> **[3:14](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=194)** that I need to, so that I have a system that not only has a fundamental basis in it, but when I present it to a user, we know that the user is going to get the types of actions and clicks that are going to be normal, and from a behavioral perspective, will work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [End-to-end Testing](../../Skills/Software%20Development/End-to-end%20Testing.md) (1), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1)
> **Env Vars:** api (2), crud (1), post (1)
> **API Endpoints:** post  (1), get  (1)
> **File Paths:** tests/e2e/index_page.test.ts (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** index_page (1)
> **Speakers:** - [instructor] (1)

#### [Reviewing your implementation](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=5)** - [Speaker] Once you have a fully working product, a fully working repository, or you have something that you want to test, the next step that is very useful with the agents is to go through and interrogate the project. So in this case, I already have a tool that I use to analyze the quality of my project called PMAT. And if I type in PMAT, you can see here this is a quantitative scaffolding and analysis kit and it has lots of different things it can do. It can look at code metrics, it can look at enforcing things. For example, quality gates. We can mutate code, but I can actually just take for example, some of the things that it does and I can put 'em in here and I could say, "Look, I want you to look at the quality of my project." So look at the quality of this code base. Next here, we're going to see that I can analyze the code quality by running some of these commands in this case. First up, we look at the deno.[JSON](../../Skills/Web%20Development/JSON.md) file, and we can see that the structure looks good. We have comprehensive test suite, so unit tests, E2E tests, mutation tests. We also can look at code quality checks. We have strong TypeScript configuration. There's good documentation, good dependencies. There's also code quality metrics by looking at some of the files here. And we also have tools like deno format, deno lint,
>
> **[1:40](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=100)** and we also have quality gates. And PMAT is one of those quality gates. We see some ideas here though for improvement in memory storage, et cetera. And then if we want to go further, it's going to give us some suggestions, but I want to say, I want you to run PMAT. There we go. So we can see PMAT analyze complexity. Great. Let's go ahead and test that out. And look, we're able to see that there are some things that could be fixed. For example, this anonymous function here is got a pretty high-level of complexity, and we can also look at self-admitted technical debt as well. This is also something that we could take a look at and we could also look at dead code, for example. And what's really nice about this style is that if you're using tools that are designed to use non-agentic coding techniques, it's a great way to compliment some of the things that these agentic tools are good at doing. So, for example, context here will give us the entire context of the project, and then once we have a context of the project, we can also dive in and look at other types of characteristics. So this is a great way to get the best of both worlds. We have quantitative tools that don't require agents like looking at complexity that's just a mathematical routine or looking at the churn or how many times things have changed in terms of a project from check-ins. And then you can compliment that with an agent
>
> **[3:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=193)** and the two together make a really good way of reviewing the quality of your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** pmat (5), e2e (1)
> **Analogies:** for example (5)
> **Definitions:** is a  (2)
> **File Paths:** deno.json (1)
> **CLI Commands:** make (1)
> **Speakers:** - [speaker] (1)

#### [Comparing with best practices](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=5)** - [Instructor] In getting to the final stages of delivering a project, one of the things to take a look at is a maturity model. One of the maturity models for web services is the Richardson Maturity Model. If you look at level zero, this is the Swamp. And you have a single URL, you also have a single HTTP method. This is not going to be a great experience for other developers that have to use this. With level one, you have Resources, so you have multiple URLs, you also have single methods. And then in the case of level two, this would be Verbs, right? You're using multiple ways of interfacing with HTTP methods. And then level three, you have discoverable APIs. Now, in terms of API review checklist here, some of the things to take a look at would include [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) principles, also OpenAPI documentation, input validation with Zod for example, RFC error handling, API versioning, security headers, rate limiting. So these are all things that are a checklist of quality, or standards of excellence. And then if we look at the metrics from tools like PMET, okay, what about code coverage, mutation score, cyclomatic complexity? What are the total tests that I have? What about lint validation? What is the tech debt ratio that I have? What's the response time as well? These are things that are really important when you're building out services that have to work at scale, and these are things that are not negotiable. And so this is something
>
> **[1:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=97)** that even though you use an agent to develop your code, it doesn't mean that this checklist needs to go away. In fact, it's even more important because you may not have done all of the code yourself, and so it's really critical to have a checklist of the different things that ya need to measure in your application. Now, let's go ahead and take a look at another aspect, which is deployment. Here, we have a repo that does some analysis of the runtime of a serverless OS. In this case, it's the Lambda OS. It could be [Google Cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) functions, or [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Cloud functions, or some other service that does functions. But the idea here is to look at what we can do to improve the performance in terms of runtime. So not only should you be looking at the checklist of the best practices for the API, but what about the runtime of the service you're delivering? One of the things that I'm measuring here is that different [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md), or C++, or Go, or [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) runtimes have startup time differences. So in the case of Rust, you can get a 10-millisecond response time, or Go, maybe it's a 50-millisecond starttime. But then in terms of Python, you have almost a 100-millisecond response, so you're getting roughly around 10 times worse startup performance. A lot of this has to do with the binary size. If you look at the runtime that's loaded by default with a interpreter, you get a huge runtime. And this is a problem in terms of the startup time, and then also in terms of the memory as well.
>
> **[3:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=191)** You can see that in the case of Python versus Rust, it could be three times more memory. So these are all things to factor into a cost perspective. And then if ya go to the actual performance of the system, both locally and then also when you're doing benchmarks, you can look at things like the Fibonacci execution time, for example. An interpreted language is going to be much slower than a compiled language. So looking at modern compiled languages potentially after you've done the initial [Prototyping](../../Skills/Software%20Development/Prototyping.md) could be a good strategy. And then if you look at the local benchmarking as well, it takes out the factor of the external service that you're running to. So these are things to think about when you're building a service, is not only are you going to do a checklist, but also, can you measure the local execution times and also the remote execution times, so you know the performance characteristics of the service that you're building?

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) (3), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Google cloud](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md) (1), [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (1)
> **Env Vars:** api (3), http (2), url (1), rest (1), rfc (1)
> **CLI Commands:** python (3)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Documentation:** rfc (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Final reflections and next steps](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=5)** - [Presenter] Welcome to the end of the course. Let's go ahead and wrap up everything that we covered in this course in terms of final reflections and next steps. We have a [Capstone](../../Skills/Software%20Development/Capstone.md) Project that is ready for you to enhance to look at some of the quality metrics and improve them. Now, we also talked about extreme, [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md). The idea here is with agents, you have to go above and beyond even what you did before. And this extreme, test-driven development lifecycle is you first build out a ticket, then you build out a test, you make the implementation, mass the test. Then you also look at things like mutation testing and property testing, and example testing. The idea here is that you have extreme rigidity when you're building things with agents, not less rigidity. Now, if we think about what agents are in terms of a carpenter, a carpenter can be an expert at a table saw. So, a table saw is literally a table with a saw on it. And if you're a expert carpenter, you have experience with making furniture and making really complex items. But if you're an amateur, and you just bought a table saw, there's a chance that you could seriously injure yourself. And some of the latest table saws have mechanisms that will prevent your finger from getting sliced by a table saw. So, this safety mechanism is one of the ways that they prevent defects. We should think of agentic coating in a similar way. We need those safety mechanisms to prevent defects. Now, in terms of zero defect enforcement,
>
> **[1:40](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=100)** one of the ways that you can do this is by ensuring that you have quality gates that stop things from getting pushed into even a branch. One of the ways you can do this is with a pre-commit hook. That's one of the best ways to stop it, even from being in your local repo. You can also have a CICD system as well that enforces the quality when you push the code into a build system. And then at a granular level have lots of different things like complexity checking and defect checking and test runs, and all these kinds of checks that are built into your quality gates. Now, the Makefile is a map for your project, and it's a central context for all your tools. It's very confusing if you're working with an agent, and you tell it one particular command and then it does something slightly different. And you could be catching your tail, essentially, because you're constantly doing something slightly different. But if you use a make file command, it's an abstraction that allows you to say, look, make run or make coverage, or make lint, or make format. There's a very specific thing that maps to a more complex tool. In terms of best tools and best practices, the best way to think about working with agents is that you don't want it to build the cake. You want to make the cake yourself, but then put the frosting on top of the cake with the agent. So the structure is already there. You already use high-quality ingredients, and then you're enhancing it by using an agent. In terms of tickets, the tickets are where you can define your logic. Even before Agentic AI, it was a good idea
>
> **[3:15](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=195)** to build out a roadmap, build out tickets. But with Agentic AI, it's really important to have all the details of what you're trying to build first, so that that defines the logic. Quality is something you can measure with your code. If you look at complexity, churn, self-amended technical debt, you look at the response times. You look at the test coverage. You look at the mutation coverage. All these kinds of things will give you the quality measurements. And there is a very quantitative way to measure this. It's not squishy, it isn't a feeling. You can actually measure the quality. And so, with agents, you should be producing higher quality code than you did before agents, not more code with lower quality. Runtime size also matters. This is something that is another capability of agents is if you're going to be rewriting your code or converting your code, why not have the smallest possible runtime, use modern compile languages? You're going to save your company lots of money. You're going to decrease the likelihood of attacks or bugs in deploying your software. In terms of querying your internal knowledge basis, another idea here is that the quality is going to compound over time. So, if you have lots of really good repos or really good example of projects with the highest of standards of quality at the very beginning, the next types of projects you build will be easier because they can leverage all of that institutional knowledge. So it's a little bit of a chicken and egg problem where if you start off with low quality, you're going to get worse and worse quality over time.
>
> **[4:50](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=290)** If you start off with extremely high quality, you're going to get higher quality over time. In terms of pair programming with AI, the important thing is context is everything. So, again, if you have really high quality, you're going to get a much better result. In terms of the paradigm shift, the idea here isn't that you're writing more code, it's that you're writing better code, and you're potentially moving faster because you have even more high quality systems in place, more quality gates. And so, it's a very different way of thinking, which is instead of lowering the bar, because you're writing lots of agentic code, you should be raising the bar and making even higher quality code. In terms of production ready, it's always important to have a checklist where you go through and you look at all the best practices, look at the runtime, look at the costs associated, make sure that you have monitoring in place. And then in terms of the secret, this is really, I think, the big takeaway is that the AI will amplify what you're doing, not autopilot what you're doing. So, if you're building very sloppy projects, your AI will amplify the sloppiness. If you're building extremely high-quality projects with extreme attention to detail, the AI will amplify that extreme level of quality across your organization. All right, that's it for this course. Let's go ahead and build something amazing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (2), [Capstone](../../Skills/Software%20Development/Capstone.md) (1)
> **CLI Commands:** make (8)
> **Definitions:** is a  (2)
> **Env Vars:** cicd (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [presenter] (1)


## Instructor

- [Pragmatic AI Labs](../../Instructors/Artificial%20Intelligence%20(AI)/Pragmatic%20AI%20Labs.md)

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/paiml/GitHub-Copilot-Mastery-Capstone)

## Skills Covered

- Data Validation
- Full-Stack Development
- Artificial Intelligence (AI)
- GitHub Copilot
- Capstone

## Path Context

### In [GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/GitHub%20Copilot%20Mastery-%20From%20Advanced%20Prompting%20to%20Full-Stack%20AI%20Development.md)
← [Responsible AI Development with GitHub Copilot](Responsible%20AI%20Development%20with%20GitHub%20Copilot.md) | **4 of 4**

## Appears In

- [GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/GitHub%20Copilot%20Mastery-%20From%20Advanced%20Prompting%20to%20Full-Stack%20AI%20Development.md)

## Related Courses

_Courses sharing skills:_

- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Artificial Intelligence (AI), GitHub Copilot
- [Exploring the Future of Development with GitHub Copilot Workspace](Exploring%20the%20Future%20of%20Development%20with%20GitHub%20Copilot%20Workspace.md) — Artificial Intelligence (AI), GitHub Copilot
- [Practical GitHub Copilot](../Software%20Development/Practical%20GitHub%20Copilot.md) — Artificial Intelligence (AI), GitHub Copilot
- [AI Pair Programming with GitHub Copilot](AI%20Pair%20Programming%20with%20GitHub%20Copilot.md) — Artificial Intelligence (AI), GitHub Copilot
- [Responsible AI Development with GitHub Copilot](Responsible%20AI%20Development%20with%20GitHub%20Copilot.md) — Artificial Intelligence (AI), GitHub Copilot

---

[↑ Back to top](#)