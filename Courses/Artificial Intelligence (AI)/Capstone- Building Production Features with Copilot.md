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
  - '[[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development]]'
prev_courses:
  - '[[Responsible AI Development with GitHub Copilot]]'
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
created: 2026-04-21
---

![Capstone: Building Production Features with Copilot](https://media.licdn.com/dms/image/v2/D4E0DAQFU4QN0jCeNSA/learning-public-crop_675_1200/B4EZq32w6IHUAY-/0/1764021178841?e=2147483647&amp;v=beta&amp;t=4VF2e5EUVMTxkkGLxZzTG33EPeEdA9b3_qwxyUZjct8)

# Capstone: Building Production Features with Copilot

> Embark on a journey to craft production-level solutions with Copilot in this capstone project-based course. Get started with strategic project planning and setup, before diving into full-stack implementation, honing your skills in API layer construction and data validation, and mastering complex business logic. Explore ORM and data persistence techniques to solidify your implementation's data laye

> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot) | 1h 8m | Advanced | 3K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Pragmatic AI Labs]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/paiml/GitHub-Copilot-Mastery-Capstone)

## Skills Covered

- Data Validation
- Full-Stack Development
- Artificial Intelligence (AI)
- GitHub Copilot
- Capstone

## Table of Contents

### Introduction

#### Capstone project overview
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=5)** - [Instructor] Let's walk through this Capstone project.
>
> **[0:08](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=8)** Starting first at the flow, which is on the left here, the developer workflow, the quality gates, the server start, the client requests, the testing, the production workflow.
>
> **[0:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=19)** All these fit into a pipeline where one by one you are ensuring that you have high quality and that you have a feedback loop that shows the quality of your testing.
>
> **[0:31](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=31)** We can start with this with make quality.
>
> **[0:34](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=34)** This is a single command that allows us to tie everything together from the unit testing to the mutation testing to the server initialization as well.
>
> **[0:45](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=45)** All this can go together in one quality control command.
>
> **[0:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=49)** Now, in terms of the client interaction, this is where you would have a browser UI for a demo page and also look at the API requests.
>
> **[0:57](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=57)** And then in terms of the comprehensive testing, you could go through and look not just at the unit test, but the in-the-end test as well.
>
> **[1:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=65)** And in terms of production readiness, this is where we have a make file that allows us to abstract the commands that we're running.
>
> **[1:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=73)** In terms of the server architecture on the right side here, this is where we have step-by-step the components.
>
> **[1:20](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=80)** First we have the framework layer, and this framework layer is the middleware pipeline for all of the requests, the validation, the logging, the air handling.
>
> **[1:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=90)** In terms of the API layer, we have a health check, and this is a good way to start with building an application, is to also have a simple health check without getting into the complexity of more advanced health checks.
>
> **[1:44](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=104)** Does anything work is essentially the simple health check.
>
> **[1:47](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=107)** In terms of API docs using the open API 3.0 specification, we can actually go through and run the API docs.
>
> **[1:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=116)** We can look at the invoice API as well.
>
> **[1:59](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=119)** In terms of the business layer, this is a place where we can look at the currency, the rules, the audit trails.
>
> **[2:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=125)** And then in terms of the data layer, this would be the base repository, so CRUD operations.
>
> **[2:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=131)** Also, looking at things like storage and the production system, is that using, let's say, Postgres or Dynamo?
>
> **[2:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=139)** And then finally, in terms of the key concepts at the bottom, we want to look at a okay for success, error for failure, no exceptions, thrones, we want type safe errors.
>
> **[2:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=150)** And then in terms of the quality metrics, this is something that is demonstrated throughout.
>
> **[2:35](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=155)** The code base is extremely high coverage, a very high mutation score.
>
> **[2:40](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=160)** The tests are totaled as well, so you know how many tests are included.
>
> **[2:44](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=164)** And then you have the concept of a zero defect enforcement.
>
> **[2:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=168)** So you don't want anything to pass through to production.
>
> **[2:52](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=172)** And this is something that's critical with agentic coding.
>
> **[2:55](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=175)** Finally, if you get to the bottom here, you can look at some of the core components.
>
> **[2:59](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/capstone-project-overview?u=76281980&t=179)** We have Deno runtime for TypeScript, sub 100 millisecond performance, and we also use standards like the RFC 7807 for errors.

> [!info]- Semantic Content
>
> **Env Vars:** api (6), crud (1), rfc (1)
> **Code Keywords:** let (2), finally, (2), abstract (1), pass (1)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **Documentation:** specification (1), rfc (1)
> **Versions:** 3.0 (1)
> **Prerequisites:** initialization (1)
> **Speakers:** - [instructor] (1)


### 1. Project Planning and Setup

#### Task 0: The planning phase
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=5)** - [Instructor] Test-driven development is a common term that many software developers understand.
>
> **[0:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=11)** It stands for test-driven development or TDD.
>
> **[0:15](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=15)** And if you take a look at what that means, it means that you first write a test and then you implement the functionality afterwards.
>
> **[0:22](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=22)** Before the LLM coding phase, there were lots of different approaches to doing this.
>
> **[0:29](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=29)** Many times it was more trouble than it seemed like it was worth.
>
> **[0:32](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=32)** If you're rapidly changing and the human is building the code and the tests at the same time.
>
> **[0:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=38)** But in the era of generative AI and AI programming tools, it starts to make a lot more sense because you're writing a lot more code.
>
> **[0:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=48)** And as a result, you need to spend more of your time writing tests.
>
> **[0:52](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=52)** And this extreme test-driven development style is a way to, from the very beginning, plan to make zero defects.
>
> **[1:01](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=61)** How would you do this?
>
> **[1:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=62)** To start with, you create a ticket.
>
> **[1:04](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=64)** And this ticket would be a managed ticket.
>
> **[1:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=67)** So you would have a tool, for example, PMAT or some other type of tool that would manage and enforce that all tasks are performed with a ticket.
>
> **[1:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=76)** And then inside of this YAML file, it would have a description of everything you're going to build.
>
> **[1:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=81)** Once you have that ticket in place, you would then go ahead and write a test.
>
> **[1:25](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=85)** And this is where the classic test-driven development mindset comes into play.
>
> **[1:29](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=89)** It makes your code a lot cleaner because of the fact that you're defining exactly what it is you're trying to solve.
>
> **[1:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=97)** Then you would verify that the test fails.
>
> **[1:39](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=99)** So you'd go ahead and do a red mode.
>
> **[1:41](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=101)** So you would go ahead, run the test, notice that it fails, okay, great.
>
> **[1:45](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=105)** Let's go ahead and implement it.
>
> **[1:47](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=107)** Now, when you're implementing the code to make this pass, what's really important is to do it in a quality manner.
>
> **[1:55](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=115)** So this is where tools like PMAT or Cyclomatic Complexity Tools or other tools that are monitoring the quality of the code come into play because they can look at things like how complex the code is, if there's self-admitted technical dead, or if there's some kind of other defect inside of the code, for example, maybe a lint warning.
>
> **[2:17](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=137)** It's really important from the very beginning to write this high quality code.
>
> **[2:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=141)** Then you go through on the next step, which is verify.
>
> **[2:25](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=145)** You make sure that things are green.
>
> **[2:26](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=146)** Then you go through to the documentation and then update it and say, great, we were able to pass this particular component.
>
> **[2:35](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=155)** And then you're not done though with the extreme test-driven development style because you still need to build end-to-end tests.
>
> **[2:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=163)** And the end-to-end test would make the entire system be tested within the component that you just built.
>
> **[2:50](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=170)** And this would also catch many subtle bugs.
>
> **[2:54](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=174)** Still though, you're not done because even if you wrote a unit test, there are also negative and positive scenarios where you would miss some of the things that you need to do.
>
> **[3:04](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=184)** And this is where property testing, mutation testing and fuzz testing come into play.
>
> **[3:10](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=190)** So what it means is that if you subtly change the code, do the tests still pass?
>
> **[3:15](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=195)** If they still pass and you've made subtle changes to the code, like a mutation, that's a problem.
>
> **[3:20](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=200)** Or in the case of a property test, you're going to test many different invariants so that you're able to summarize exactly what it is you're building when you're running through this test.
>
> **[3:32](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=212)** And that's what's nice about thinking beyond just the test itself, but how good is the test to verify what you're trying to build.
>
> **[3:40](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=220)** Finally, you go through and you are able to build zero-defect code.
>
> **[3:46](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=226)** So this methodology is a mandatory methodology in the world of agentic coding.
>
> **[3:53](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=233)** The reason for this is that it's a lot like a table saw where if you are an expert, you can build things very quickly with a table saw.
>
> **[4:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=242)** But if you're an amateur, you could easily lose a finger.
>
> **[4:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=245)** And this is very common.
>
> **[4:06](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=246)** And what people do is they have safety mechanisms that prevent these kinds of defects from occurring when a human interacts with a table saw.
>
> **[4:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=256)** So similar with the extreme test-driven style, the idea here is to prevent the defect by design versus just going through, trying to build code as quickly as possible.
>
> **[4:27](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-0-the-planning-phase?u=76281980&t=267)** In this case, you're trying to test as much of the surface area and even go beyond normal testing so that you're building things in a thoughtful way where it's very difficult to create defects.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), this. (1), let (1), self (1), finally, (1)
> **CLI Commands:** make (5)
> **Env Vars:** pmat (2), tdd (1), llm (1), yaml (1)
> **Definitions:** is a  (3), stands for (1), means that (1)
> **Analogies:** for example (2)
> **Documentation:** the documentation (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Understanding the zero context
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=5)** - [Instructor] Let's start walking through this well structured and very deterministic project capstone.
>
> **[0:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=13)** To start with, we can look at the make file.
>
> **[0:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=16)** The make file in many ways is like a map, or it could be like the yellow pages, it could be an index.
>
> **[0:23](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=23)** There's lots of different analogies, but the idea here is that it tells you exactly what's going on in your project.
>
> **[0:29](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=29)** And if you take a look at a make file that has a help menu, for example, if we type in make help, it instantly tells you all of the components.
>
> **[0:39](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=39)** For example, testing, we have make test for quality gates.
>
> **[0:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=43)** We can run, make quality for doing build and deploy.
>
> **[0:47](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=47)** We can do make build to clean up. We do make clean.
>
> **[0:50](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=50)** This type of index or flow allows for a very simple way to interact with the entire system.
>
> **[0:58](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=58)** For example, if I type in make info, it gives us the information about the project.
>
> **[1:04](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=64)** Or if I type in make lint, I can instantly get a lint of everything and we see, oh look, there's some minor warnings here about some CSS, but the TypeScript files here are all passing, which is great.
>
> **[1:18](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=78)** We can also do a make test, which is a great way to start when you're building out things, is to see if anything works.
>
> **[1:26](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=86)** And here we see something, woo, we have some test failures here.
>
> **[1:29](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=89)** Let's go ahead and clean those up. Wow.
>
> **[1:31](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=91)** We have a failure here where the health check is not giving us exactly what we need to do.
>
> **[1:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=98)** So what I would typically do in a scenario like this is actually stop it and then use some kind of coding assistant.
>
> **[1:47](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=107)** It could be Copilot, for example.
>
> **[1:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=109)** If we go through here and we say, Hey, what's going on?
>
> **[1:53](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=113)** You know, in this case we have make test failures.
>
> **[1:59](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=119)** Why?
>
> **[2:01](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=121)** What's nice about this style of a make file is that everything that a project does is considered inside of the make file.
>
> **[2:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=131)** If I ask an agent about what's happening, it has all of the context it needs in order to run it.
>
> **[2:17](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=137)** So in this case, we're going to go and we're going to say, make test.
>
> **[2:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=141)** It's going to look through and verify what are the different things that are happening, how does it actually run?
>
> **[2:28](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=148)** And then we can debug it from there.
>
> **[2:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=150)** So I can think of the make file as the most efficient or compressed way to deal with what's happening in my project.
>
> **[2:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=158)** And if you look at a failure here, it's a great way to get started with debugging it and using an agent to exactly fix what the problem is.
>
> **[2:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=168)** Now, the next step that I would do after something like this is build, for example, a ticket and then solve that ticket and then move to the next step.
>
> **[2:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=176)** Now I'm going to kill this for a second here and show that the other thing that's really important when you're dealing with a project like this is to also take a look at the README file.
>
> **[3:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=187)** If we look at the README file as well, the README file should show at a high level everything that's happening in the project, how to actually use the make file so they work together to provide the correct context so that I know how to debug the project and how to build it not just with one agent, but maybe I want to debug it with multiple agents at the same time.
>
> **[3:27](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=207)** In this case, we already have the acceptance here that I can run, which says accept all.
>
> **[3:34](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=214)** Let's go ahead and run it again. We type in make test here.
>
> **[3:39](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=219)** After we do this acceptance, we easily can start to do debugging where we do pair programming.
>
> **[3:46](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=226)** In this case, it looks like we're a little bit further down the road here, and in fact, I could even toggle between a different tool.
>
> **[3:53](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=233)** Now we've actually dived into another tool.
>
> **[3:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=236)** In this case it's cloud code. And you can see here that I can actually use two tools at the same time.
>
> **[4:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=242)** So I can start with, for example, GitHub Copilot, start to get a particular scenario solved and maybe crosscheck it with a separate tool, in this case cloud code.
>
> **[4:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=253)** And again, because we have the make file, it makes it very easy to cross reference those two tools because the make file is a central context, and that central context can be run by GitHub Copilot, it could be run by Cloud Code, it could be run by some other tool like Gemini.
>
> **[4:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=270)** It could be run by a third party tool or an Open Source tool.
>
> **[4:34](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=274)** And it could also be run by a human because the make file itself is separate from all those tools.
>
> **[4:42](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=282)** Even the context that each of those agents has is separated.
>
> **[4:46](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=286)** So this is what's powerful about this make file style, is that I can actually build lots of different solutions using many different coding agents.
>
> **[4:55](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/understanding-the-xero-context?u=76281980&t=295)** And I don't have to worry that all of my solutions are only tied to one particular context because the make file itself is the context that I help generate for this particular project.

> [!info]- Semantic Content
>
> **CLI Commands:** make (23)
> **Code Keywords:** let (3), case, (3)
> **Analogies:** for example (6)
> **Env Vars:** readme (3), css (1)
> **Documentation:** the readme (3)
> **Tools:** github (2)
> **Definitions:** is a  (2)
> **UI Navigation:** toggle (1)

#### Querying internal knowledge bases
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=5)** - [Instructor] One interesting way to work with agents is to think about previous high-quality code repos as an internal knowledge base.
>
> **[0:15](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=15)** One of the reasons why they're high quality is that they've been around for a while.
>
> **[0:20](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=20)** They have institutional knowledge, and if they're done in an extreme TDD way, for example, the code has very clear tickets.
>
> **[0:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=30)** There are static analysis tools, 80 or higher percent test coverage, mutation testing, linting, deployment recipes, makefile, advanced tooling that is built with agentic coding in mind.
>
> **[0:47](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=47)** If all that stuff is baked into a project and the project is successfully deployed, that's a really good starting point for you to build a new repo that can communicate with that repo.
>
> **[0:59](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=59)** And if you have a second repo, for example, you want to build a composite of two different API services or two different components that talk to each other, this is a good way to start, as you point the agent at these two repos, you then ask it a few questions.
>
> **[1:14](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=74)** You say, look, I want you to do X, Y, Z, I then want you to build doc's specifications, tool number six or whatever tool it is that you're building.
>
> **[1:26](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=86)** And then you want to say to that tool, I want you to use these best practices, extreme technical defects elimination.
>
> **[1:34](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=94)** I want you to make sure that you have a make file that has all these different commands.
>
> **[1:40](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=100)** I want all of the tasks to be done with tickets.
>
> **[1:42](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=102)** So if you have a recipe, essentially a bulletproof formula that has already been applied to those other repos, you can then say, this is how I want to build this composite tool.
>
> **[1:54](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=114)** And in many ways, this is one of the best ways to build this spec is to first analyze it.
>
> **[2:00](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=120)** Again, what I typically do is I'll create this third repo and I'll put doc's specifications and then the name of the tool that I'm building.
>
> **[2:08](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=128)** Once it built that tool, another really interesting component is to then cross reference that specifications with another type of agentic coding tool.
>
> **[2:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=139)** For example, if you use Claude to generate that particular tool, maybe you cross reference it with Gemini, and then that particular different tool is going to think about things in a little bit different of a way.
>
> **[2:32](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=152)** You almost red team it.
>
> **[2:33](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=153)** You say, look, I want you to find a critical code review of this particular specification.
>
> **[2:40](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=160)** I also want you to look at it in the frame of, I assume things are going to be wrong and I want you to find five things that are wrong with this specification.
>
> **[2:50](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=170)** And then I also want you to look at, let's say, 10 different computer science peer-reviewed papers and cite the different things that are supporting your points about the critical review.
>
> **[3:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=182)** And once you start to build this iterative style, then it makes it a lot easier to quickly build high-performance tools.
>
> **[3:10](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=190)** So this is a form of querying these internal knowledge bases and turn them into a specification.
>
> **[3:17](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=197)** Now the specification is only as good as the implementation, right?
>
> **[3:22](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=202)** So they're both going to play together.
>
> **[3:25](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=205)** In the case of the specification, you're able to get a higher-quality specification by pulling from these two repos and then red teaming it.
>
> **[3:34](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=214)** But then still you need to have the implementation correct.
>
> **[3:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=217)** And this is where, again, a makefile going through and verifying step by step, okay, here's my ticket.
>
> **[3:45](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=225)** What is the test that I'm going to build?
>
> **[3:47](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=227)** You build the test. Okay, great.
>
> **[3:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=229)** The test passed because now I've built the code that will make this TDD workflow work.
>
> **[3:55](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=235)** But then I still want to do mutation testing to make sure that these are good unit tests, not just okay unit tests.
>
> **[4:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=242)** And then again, I'll add property tests.
>
> **[4:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=245)** I'll also look at linting. I'll also do end-to-end testing.
>
> **[4:09](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=249)** Also go through and look at the static analysis.
>
> **[4:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=251)** So I'm essentially looking at it with a really critical eye, but also leveraging the history of these other projects that have had lots of success because they've had this great formula.
>
> **[4:25](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=265)** So what you'll find is if you do have extreme detail when you're creating projects and you have the highest of standards, and it's a little bit difficult to have these high standards because it's so tempting to write sloppy code.
>
> **[4:39](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=279)** But if you do, what'll happen is it's like a snowball.
>
> **[4:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=283)** As you push the snowball downhill, the future projects that you build will be able to leverage all of that institutional knowledge, all of those best practices, and it makes it easier to build high-quality code.
>
> **[4:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=296)** The reverse is true as well is if you're sloppily building a repos that have very low standards of excellence, eventually, you'll hit a critical component where all of the systems will have big issues and then the development work will stop.
>
> **[5:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/querying-internal-knowledge-bases?u=76281980&t=313)** And so it's a really critical way to think about how to query internal knowledge bases is feed them really high-quality work from the very beginning, make sure that you're doing these best practices and then the subsequent repos that you create can really leverage that institutional knowledge.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5), find (3)
> **Documentation:** specification (6), spec (1)
> **Code Keywords:** static (2), while. (1), let (1)
> **Analogies:** for example (3), it's like (1)
> **Env Vars:** tdd (2), api (1)
> **Definitions:** is a  (2)
> **Prerequisites:** you need to have (1)
> **Speakers:** - [instructor] (1)


### 2. Full-Stack Implementation

#### Task 1: The API layer
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=5)** - [Instructor] Let's go ahead and start to build out a way to test our APIs and to get into interactive coding with agents.
>
> **[0:14](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=14)** First up here, I'm going to open up this chat and you can see here that I already have the make file listed and I asked a question.
>
> **[0:23](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=23)** I said, what does actually make dev do?
>
> **[0:26](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=26)** In this case it says it starts a development server using Deno.
>
> **[0:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=30)** So I'm going to say, Hey, run that for me.
>
> **[0:36](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=36)** So basically run that for me and show me, because the make file is such a great interface for interacting with different components of my workflow, it's nice to be able to work and pair program with an agent in this case, Hey look, we can actually take a look at this running server and now that I've got this working, I can toggle over to that running demo and take a look.
>
> **[1:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=62)** So, ah, okay, here we go.
>
> **[1:03](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=63)** Let's go ahead and refresh this.
>
> **[1:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=65)** There we go.
>
> **[1:06](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=66)** We have this demo interface here and this is an invoice reconciliation engine and the key components are make quality, make build, make dev, and the health check is the first place that I would go ahead and take a look at.
>
> **[1:20](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=80)** And this case we can see that it is in fact healthy.
>
> **[1:23](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=83)** It's running on this /health endpoint.
>
> **[1:27](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=87)** And the other thing I'm going to take a look at is the overall API documentation.
>
> **[1:32](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=92)** At this point, what we can do is take a look at the /API docs here and it has all of the high level interfaces available.
>
> **[1:41](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=101)** So this is a great way to understand in one quick page all the different API endpoints and what they surface.
>
> **[1:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=109)** But if I go over to the Swagger interface in this case, this is a really good way to interactively explore and even execute the different endpoints.
>
> **[1:59](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=119)** In fact, the get endpoint is probably one of the easiest ones to try.
>
> **[2:03](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=123)** If we take a look at this, it says the response code 200, great, the service is healthy, we have the type application JSON.
>
> **[2:12](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=132)** Let's go ahead and try it out.
>
> **[2:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=133)** In this case, if we say execute, we see the actual curl command, we see the request URL, and we also see more information about the result.
>
> **[2:23](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=143)** In this case, great, this timestamp says that it was a status healthy, we have an actual timestamp that we could use.
>
> **[2:32](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=152)** And then I also could go down to the other components as well.
>
> **[2:35](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=155)** For example, a crud operation right here, I can go ahead and try this one out, I can execute it.
>
> **[2:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=163)** And what's nice about these is that it's a great interactive way to play around with the interface and I can also from a user acceptance standpoint, take a look at these APIs.
>
> **[2:55](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=175)** So it's more than just using, let's say, a curl command or running an end-to-end test.
>
> **[3:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=182)** When you have an interactive interface like this, it really adds a lot of power to your ability to understand if what you built works.
>
> **[3:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=191)** And in the case of Swagger, it's a good interface that mixes those two components.
>
> **[3:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=196)** Now, let's go ahead and toggle back this interface here.
>
> **[3:20](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=200)** And you can see one of the cool things about pair programming with an agent is that even though I was testing it myself, I could also ask it to test it as well.
>
> **[3:31](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=211)** So if we go through here, we say connect, oh look, the connection refused.
>
> **[3:35](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=215)** So in this case, the actual agent was not curling the correct command.
>
> **[3:41](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=221)** I'm going to say, Hey, this is running on port 9001.
>
> **[3:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=236)** So you can think of it in many ways, like very similar to some of the stuff that you would do yourself when you're working with another person.
>
> **[4:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=247)** In this case, look, we see that the port 9001 here, we can actually go ahead and try that.
>
> **[4:14](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=254)** Ah, okay, here we go.
>
> **[4:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=256)** We've got the right result here starting, but look, in this case it's already in use.
>
> **[4:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=261)** Let's go ahead and test the running server.
>
> **[4:24](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=264)** So we have a very realistic scenario here where some of the things that you're doing would already be in line with, let's say a coworker or something like that.
>
> **[4:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=277)** And so this kind of pair programming style is a pretty good style.
>
> **[4:41](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=281)** And one of the ways that it makes it work is that the ability to have extremely good documentation with things like Swagger also have very good testing.
>
> **[4:50](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=290)** Again, if we go ahead and we say, you know, make test right here, you can see we can actually look and run all of the different unit tests and end tests, but then also because we have the make file, it makes the whole package together be much more powerful.
>
> **[5:06](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=306)** In this case, we can see that we have a failing test.
>
> **[5:09](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-1-the-api-layer?u=76281980&t=309)** Oh, let's go ahead and dive into it, take a look at it and actually fix it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), interface (7), case, (7), this, (2), this. (1)
> **CLI Commands:** make (8), curl (2)
> **Env Vars:** api (3), json (1), url (1)
> **Definitions:** is a  (3), is an  (1)
> **Ports:** port 9001 (2)
> **UI Navigation:** toggle (2)
> **Analogies:** for example (1), similar to (1)
> **Speakers:** - [instructor] (1)

#### Implementing data validation
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=5)** - [Instructor] One of the ways to be highly productive with Agentic coding is to leverage highly productive tools, especially tools that have extremely high quality.
>
> **[0:17](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=17)** A good example is Deno It's the runtime built in rust for TypeScript.
>
> **[0:22](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=22)** And in the case of Zod, it's a type script first schema validation library.
>
> **[0:28](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=28)** So what it does is it validates data at runtime, so it checks the actual values and it infers TypeScript types automatically, and it returns clear error messages when validation fails.
>
> **[0:41](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=41)** So why would you want to use this?
>
> **[0:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=43)** It's going to have runtime safety, so it'll validate the API inputs, the form data, the environmental variables.
>
> **[0:51](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=51)** In terms of type safety, you have one schema and the TypeScript types and validation logic as well.
>
> **[0:58](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=58)** In terms of developer experience, there's a chainable API with clear errors.
>
> **[1:04](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=64)** If you take a look at the key benefit, it's type-safe validation without maintaining separate types of validators.
>
> **[1:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=71)** And if the case of implementing this, what you could do is first install it... Install Zod via MPM, then go in and import it in a route file.
>
> **[1:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=81)** This would be the first step here.
>
> **[1:23](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=83)** And then define the user registration requirements.
>
> **[1:27](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=87)** So in terms of this basic schema, you would create a z.object for the user data.
>
> **[1:33](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=93)** And then at this point, copilot could suggest a field type.
>
> **[1:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=98)** You could also add .email for email validation, .min for password length, and .int positive for age.
>
> **[1:47](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=107)** And with custom validators, you can do add.refine for the password strength.
>
> **[1:53](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=113)** And then if you go through and you iterate through, over and over again, the prompts are going to be really apparent because of the strong safety you've got built into your project.
>
> **[2:04](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=124)** This is really the way to leverage and limit the complexity of using Agentic coding.
>
> **[2:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=131)** In the case of Copilot, you would say check uppercase in numbers, and then Copilot would say, "Hey, here's a Regex suggestion for you."
>
> **[2:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=139)** You could add clear error messages, so you're getting this type safety, plus the compile time runtime safety, plus you also get the completion with Copilot.
>
> **[2:28](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=148)** And in the case of testing, you would then test the valid data with curl.
>
> **[2:32](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=152)** So you're starting to do end-to-end testing, and then you would show the 200.
>
> **[2:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=157)** Okay, you would do a test and valid email format, show the 400 error with a field path, and then do a test weak password, and then show this custom error message.
>
> **[2:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=168)** So really you're putting something on top of what is already high quality.
>
> **[2:53](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=173)** That's really the secret ingredient here, is you build something that's got really good safety, really good quality, in the case of the validation for the API, you're getting that in there.
>
> **[3:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=185)** Do standard best development practices.
>
> **[3:08](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=188)** So you do end-to-end testing with an API, and then finally you put it all together.
>
> **[3:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=193)** And then you ask the Agentic coding tool to help fill in the little details.
>
> **[3:18](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=198)** You're not doing it all with Agentic coding for the beginning.
>
> **[3:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=201)** You're really almost putting frosting on the cake, versus building the cake with the Agentic tool.
>
> **[3:28](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=208)** And the key takeaways here are Zod is going to be TypeScript inference plus runtime checks.
>
> **[3:33](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=213)** The Copilot is going to accelerate the schema creation, but not necessarily build everything from scratch.
>
> **[3:39](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=219)** And then the .refine adds the business logic, the clear errors improve the user experience.
>
> **[3:46](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=226)** And then in terms of the test, you would also test the golden path or the happy path, but you also want to test the failure.
>
> **[3:54](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=234)** And this is also where you get into things like mutation testing that can also test things that you didn't even consider.
>
> **[4:01](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=241)** For example, does your test pass and it shouldn't pass because something was mutated or there's a different value that was passed in.
>
> **[4:08](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/implementing-data-validation?u=76281980&t=248)** So when you put all this together, that's really the power of using Agentic coding, is leveraging the best practices that have been around for a long time and leveraging the best tools.

> [!info]- Semantic Content
>
> **Env Vars:** api (4), mpm (1)
> **Code Keywords:** pass (2), this, (1), type. (1)
> **Prerequisites:** install (2)
> **CLI Commands:** curl (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Task 2: The business logic
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=5)** - [Instructor] One significant issue in building things with agentic coding tools is you can get into a bad habit.
>
> **[0:12](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=12)** First, you start trying to build something by using human language, and going through and iteratively trying some ideas out, but the problem is, you may not know yet yourself what it is you're trying to solve, and by asking an agent to build it, you're both guessing together.
>
> **[0:31](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=31)** But if we take a look at this diagram here, if from the very beginning, you have a workflow of how you build code, you say, "Here's a ticket", and this ticket is going to define exactly what I want the agent to build, and then I'm going to afterwards write a test that verifies the expectations in this very specific ticket, in this case, it's a calculator, will pass, then we know that we've actually got the contract and the validation.
>
> **[1:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=62)** Afterwards, you would go through and ensure that that test would fail.
>
> **[1:06](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=66)** So, for example, in the case of the ticket we're building, it would have add, subtract, multiply, division, right?
>
> **[1:15](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=75)** And we also have an error, and then in terms of the test, all those should fail.
>
> **[1:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=79)** Afterwards, if we go through here and we build this calculator class, it should make each of those tests pass.
>
> **[1:27](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=87)** And so we have a very specific and deterministic workflow that's quite different than just playing around at a terminal and asking an agent to build something.
>
> **[1:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=98)** At the very end, we have the validation.
>
> **[1:41](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=101)** So, let's take a look at what that ticket could look like.
>
> **[1:45](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=105)** In the case of a ticket, one of the great ways that you could think about building tickets is to use something like YAML.
>
> **[1:52](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=112)** What's nice about YAML is that you can put a title, a description, also an acceptance criteria.
>
> **[1:59](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=119)** You can put the very specific test case that you want, an operation ad, I want an input.
>
> **[2:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=125)** So, you're using a combination of human-readable form so somebody that isn't a programmer can look at it, potentially even add some acceptance criteria to it, but also, you can use some programming tools like a linter to verify that, "Hey, this is actually formatted correctly.'
>
> **[2:23](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=143)** So, it's got a good mix of both scenarios.
>
> **[2:27](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=147)** And then, afterwards, you go through here and you build this test.
>
> **[2:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=150)** In this case, again, we would first make these failing tests.
>
> **[2:35](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=155)** Okay, we want to add two numbers, we want to subtract two numbers, we want to divide two numbers, et cetera.
>
> **[2:41](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=161)** And then when we get into the JavaScript, here's where each of these methods on the calculator class would then correspond directly to the failing test and make them pass.
>
> **[2:53](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=173)** So, this is a very different way to code that is a recommended way to code in terms of using agent coding.
>
> **[3:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=182)** And what's different about it is that the logic is already defined at the very beginning, so the agent is not building the logic, they're building the implementation of the logic that you designed from an architectural standpoint at the very beginning.
>
> **[3:17](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-2-the-business-logic?u=76281980&t=197)** I think this takes a little bit of time to adjust to this kind of development style, but if you find yourself using this style with, let's say, a YAML ticket, a failing test, and then making the test pass, you'll get much better and much more deterministic output when coding with agents.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), case, (2), let (2), class, (1)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** yaml (3)
> **Definitions:** is a  (2)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Handling complex business rules
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=5)** - [Instructor] One thing that's a little bit unclear when you're coding with agents is, what is the mechanism to update your code?
>
> **[0:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=13)** Let's say that you have a project that has everything in place, it's working properly, you have really good test coverage, you have really good quality, and then it turns out that there's a piece of functionality that's missing.
>
> **[0:28](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=28)** What's scary is, if you're going to use an agent to go through and update it, what is the mechanism that you would use in order to do that?
>
> **[0:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=37)** Let's take a look at this concept of BDD, or behavioral-driven development.
>
> **[0:42](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=42)** A human discovers a bug or a human discovers there's a feature missing.
>
> **[0:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=48)** In this case, the manual testing shows that, "Whoops, we actually should match 99.9.50 to 1,000", right?
>
> **[0:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=56)** That's a tolerance rule that we need, so we would go ahead and build this BDD spec.
>
> **[1:03](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=63)** And then, when we look at this, the first place to do this is with a ticket.
>
> **[1:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=67)** So, the ticket would then have the tolerance rule, the acceptance criteria, we would add some labels to it, and then once we've got that workflow set up, then we would want to turn this into the technical implementation.
>
> **[1:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=81)** So, the next thing we would do is we would want to have the ticket get converted into logic, so this would be the code.
>
> **[1:29](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=89)** The code would have to match the tests exactly, so the test would be written first.
>
> **[1:34](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=94)** And then finally, this is one of the things that's a little bit tricky when working with agents is, are you looking at the complexity of your code?
>
> **[1:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=103)** Are you looking at the self-admitted technical debt?
>
> **[1:46](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=106)** Are you looking at the lint?
>
> **[1:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=109)** Are you looking at the code coverage?
>
> **[1:52](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=112)** All of these metrics that have been in place for decades with computer science really make a big difference when you're coding with agents, because even if you defined everything correctly, did tickets, et cetera, you still need to enforce quality.
>
> **[2:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=127)** So, let's take a look at what this ticket could look like.
>
> **[2:10](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=130)** In this case, we would have a YAML file that has everything inside, the business requirements, a bunch of test cases defined.
>
> **[2:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=139)** Somebody else on your team that's a product manager could come in, update some of these test cases, and then now we get to the code itself.
>
> **[2:27](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=147)** So, based on the existing code in your code base, plus that ticket, there should be enough context for an agent to go through and define this new rule, and this rule could fit directly inside of the existing rule engine.
>
> **[2:45](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=165)** And again, if the test was written first, it would be easy to then implement this one piece of logic that goes through and implements this rule.
>
> **[2:54](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=174)** And then we go to the test here.
>
> **[2:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=176)** Again, the test would describe exactly what's happening.
>
> **[3:00](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=180)** They would be written first, and these tests would then be verified against the logic that is coded inside of the application.
>
> **[3:09](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=189)** And then, finally, as we're looking through and we're looking at the things that we're building, we should be looking at the Quality Gates.
>
> **[3:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=196)** So, formatting the code, linting the code, testing the code, verifying that the test coverage is actually accurate by doing mutation testing.
>
> **[3:24](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=204)** So, the mutation testing could change a plus to an equal or change a minus to an equal.
>
> **[3:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=210)** It could go through and slightly mutate the code so that the logic is going to be verified if there's something really subtly wrong inside of the test.
>
> **[3:41](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=221)** And this is a great way to get a much more realistic code-coverage scenario.
>
> **[3:46](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=226)** You could also add property testing as well to test lots of different conditions.
>
> **[3:50](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=230)** And then finally, in terms of the cyclomatic complexity, self-admitted technical debt, all kinds of other metrics like churn, you could have specialized tools that will go through and check the quality of the code.
>
> **[4:04](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=244)** And then finally, at the very end, you would get a report that would show you exactly what's happening.
>
> **[4:09](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=249)** So, this is a very different style of development when you're thinking about updating is first, what is the logic?
>
> **[4:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=259)** Like, who is the person that came through and developed that criteria, and then how do you define that into a spec?
>
> **[4:26](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=266)** And then finally, how do you actually implement it?
>
> **[4:28](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=268)** You need to have extreme rigor.
>
> **[4:31](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=271)** There should be very high quality in terms of a code base.
>
> **[4:35](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/handling-complex-business-rules?u=76281980&t=275)** If there's already an existing code base with high quality, then adding these small, little, incremental changes are going to be trivial, especially if you have guardrails that enforce the quality of your code, and you have tests that enforce the logic.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (5), let (3), case, (2), self (2), this, (1)
> **Env Vars:** bdd (2), yaml (1)
> **Documentation:** spec (2)
> **Definitions:** is a  (2)
> **Prerequisites:** set up (1), you need to have (1)
> **CLI Commands:** make (1)
> **Versions:** 99.9.50 (1)
> **UI Navigation:** go to (1)

#### Task 3: The data layer
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=6)** - [Instructor] A major issue in the world of agentic coding is what to focus on.
>
> **[0:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=11)** One place to focus on is to look at the runtime itself.
>
> **[0:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=16)** Many interpreted languages have severe legacy issues because the binary itself is huge.
>
> **[0:23](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=23)** So in the case of, for example, Python, oftentimes it could be a hundred or maybe 200 megabytes just to get everything into a container runtime.
>
> **[0:33](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=33)** Same with scripting languages.
>
> **[0:35](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=35)** For example, Deno TypeScript.
>
> **[0:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=37)** It's going to bundle the entire V8 runtime inside, and you're going to have close to a hundred megabyte runtime.
>
> **[0:44](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=44)** If you look at interpreted languages, they're really an issue in terms of the size.
>
> **[0:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=49)** A binary though, especially for a modern-compiled language like Go or Rust, is tiny, and so the runtime bloat is essentially non-existent.
>
> **[0:59](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=59)** And if you look at the startup time, this really plays a role with CLI execution or deploying it into production.
>
> **[1:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=67)** You also eliminate the runtime dependency hell, the surface attack area, also cold start latency and memory overhead.
>
> **[1:15](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=75)** Now let's go ahead and take a look at some real code here in this repo.
>
> **[1:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=79)** And if I take a look at the README here, we can again dive into the Python NumPy problem versus a compiled binary.
>
> **[1:27](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=87)** So if you're going to do some kind of scientific coding, if you're playing around in a notebook or you're playing around with an interpreter, the Python + NumPy is an interesting use case because it's got all that bundled inside.
>
> **[1:39](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=99)** But if you're trying to deploy it somewhere, actually using a language like Rust or Go or some other language that is a modern-compiled language to build a tiny binary, for example, it could be 400K binary, you're going to get a lot better output as a result.
>
> **[1:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=116)** So in practice, we can go ahead and run this and take a look at what this means.
>
> **[2:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=122)** Well, if we look at the benchmark results here, we have different interpreted languages like Ruchy, we have Rust, we have Go, Deno, Python, Julia.
>
> **[2:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=133)** And in terms of a chart that shows all these together, we have the mean time here.
>
> **[2:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=139)** C is the standard, but Rust and Go, these languages get very close.
>
> **[2:25](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=145)** But then if you put in the binary size, all of a sudden, things get much, much different because in the case of a Docker image, you could have 700 megabytes or 100 megabytes or 250 megabytes.
>
> **[2:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=158)** But in the case of the modern-compiled languages, they're tiny.
>
> **[2:41](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=161)** Let's go ahead and take a look at this Makefile here.
>
> **[2:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=163)** This Makefile has all of the different components of the project that we can actually benchmark.
>
> **[2:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=168)** And if we type in make help, this is a good place to get started.
>
> **[2:52](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=172)** And you can see here we have make deploy, make coverage.
>
> **[2:55](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=175)** We have lints for all these things.
>
> **[2:57](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=177)** In this case though, we're going to go ahead and do a make bench-cli.
>
> **[3:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=182)** Let's go ahead and run that.
>
> **[3:03](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=183)** And if we type in make bench-cli, this will go through and run all of the different benchmarks against these different containers.
>
> **[3:14](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=194)** And we can see here that in terms of the compiled languages, they run so fast that you almost can't see what's happening.
>
> **[3:23](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=203)** The interpreted languages are going to run a lot slower.
>
> **[3:25](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=205)** And then we see here the results at the very end.
>
> **[3:28](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=208)** So, C is the fastest.
>
> **[3:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=210)** We also have Rust, which is extremely fast.
>
> **[3:33](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=213)** And languages like Ruchy, that transpiled to Rust, are also very fast.
>
> **[3:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=217)** But then the scripting languages, the ones that run with interpreters like TypeScript and Julia and Python are going to have a impact because of how slow the interpreter is, which is essentially just a big executable.
>
> **[3:52](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=232)** And so, really, to summarize everything here, if we take a look at what this means is that we can build out in terms of a chart a performance visualization.
>
> **[4:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=242)** So in terms of execution time, you're going to get much faster execution time with compiled languages, modern-compiled languages.
>
> **[4:10](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=250)** Also, because of the advances in safety and security, a lot of organizations are switching to these modern-compiled languages.
>
> **[4:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=259)** C is fast, but it has many different situations that cause security issues.
>
> **[4:24](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=264)** In terms of the binary size, though, this is something that is a little bit less obvious until you benchmark it.
>
> **[4:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=270)** But in terms of a modern-compiled language, you can see here that you have essentially a third of a megabyte runtime here for some of these modern-compiled languages.
>
> **[4:41](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=281)** In terms of the scripting languages, we're talking 100, 300, a thousand times larger runtime.
>
> **[4:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=288)** And so over time, this starts to really play a role in terms of cost and efficiency.
>
> **[4:54](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=294)** And so these may be useful in prototyping, but in terms of production, they can cause big issues.
>
> **[5:00](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=300)** So this is something to consider with agentic coding when you can easily convert from one language to another or figure out more automation, where should you be spending your time?
>
> **[5:10](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=310)** Should you be spending your time building very inefficient and slow solutions?
>
> **[5:15](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=315)** Or should you be spending your time modernizing your system so that the stuff that's slow doesn't matter because it's not in production, but the stuff that's fast, you do spend your time automating, benchmarking, looking at these kinds of things.
>
> **[5:29](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=329)** So runtimes are going to be a big factor of the future with agentic coding because why would you build something that is super slow?
>
> **[5:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=337)** Or why would you build something that takes lots of energy or takes lots of disk storage?
>
> **[5:41](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=341)** That's all stuff you're going to pay for.
>
> **[5:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-3-the-data-layer?u=76281980&t=343)** But with agentic coding, you can spend your time making things more efficient.

> [!info]- Semantic Content
>
> **CLI Commands:** python (5), make (5), docker (1)
> **Code Keywords:** let (3), super (1), for. (1)
> **Definitions:** is a  (3), is an  (1)
> **Analogies:** for example (3)
> **Env Vars:** cli (1), readme (1)
> **Documentation:** the readme (1)
> **Speakers:** - [instructor] (1)

#### Working with ORMs and persistence
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=5)** - [Instructor] One way to get started with coding a new component in your system is to first take a look at the thing you want to build and dive into the code manually.
>
> **[0:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=16)** So in this case, we have a source directory, and I want to go into the repository and look at base.
>
> **[0:22](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=22)** Now I have a particular abstract class here, which is in-memory repository.
>
> **[0:28](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=28)** And I want to dig into a little bit more about how I could use this as the starting point to build persistence.
>
> **[0:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=37)** So let's say I wanted to use Postgres database or SQL Light or some other kind of system.
>
> **[0:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=43)** What I could do is I could go over to the agent and then notice that it's highlighted here.
>
> **[0:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=49)** It says that you're referring to Base.ts.
>
> **[0:53](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=53)** And I'll go ahead and ask what this code does first.
>
> **[1:00](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=60)** Now, the reason this is helpful is that by asking even if you understand it yourself, what the code does, you're setting the proper context for other questions that you're going to do in the future.
>
> **[1:12](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=72)** And so in this case, it shows us that this is an abstract base class.
>
> **[1:17](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=77)** It's has an implementation of repository interface, and it maintains an internal map called data to store entities by their ID.
>
> **[1:25](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=85)** Now that I know exactly what this code does and the agent knows what this code does, let's talk about how we could set up a persistent layer.
>
> **[1:34](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=94)** So I'll go ahead and ask that question.
>
> **[1:36](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=96)** What is the technique for doing a Postgres layer instead?
>
> **[1:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=108)** Show me an example without editing the file.
>
> **[1:55](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=115)** So in this case, I want to start to get into what it would look like to implement this new feature.
>
> **[2:03](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=123)** In this case, it says, this uses the PG package to connect to Postgres, and it takes a connection pool and table in the constructor.
>
> **[2:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=131)** So we already have some good ideas here.
>
> **[2:14](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=134)** And then if I look at this, this is a great way to start to prototype out what change I would want to make.
>
> **[2:20](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=140)** Now what I could do as well is instead of doing anything in terms of the coding, I could say, great, let's go ahead and build a TDD component first.
>
> **[2:33](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=153)** In this case, why don't we go ahead and say, great, show me what a mocked TDD test would look like
>
> **[2:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=168)** that would make this a red workflow that the code you showed me would pass, right?
>
> **[3:03](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=183)** So we're now getting way deep into the complexity of testing, which is a much better place to start with in terms of what we want to do to augment the functionality.
>
> **[3:17](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=197)** Because even though I know that I want to change this code to do something with a persistent database, all I have to do is then start at the very end and say, look, I actually want to write a fully mocked out test first.
>
> **[3:33](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=213)** In this case, we can see that there's a mock implementation of a Postgres repository, and it's going to write the test here that shows exactly how the return statements would work, should return, okay with entity when found.
>
> **[3:47](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=227)** And then I could go through and look at this implementation and then say, okay, great.
>
> **[3:51](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=231)** This is really where I want to start.
>
> **[3:53](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=233)** I don't want to start with the logic.
>
> **[3:55](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=235)** I don't want to start with the agent editing the code.
>
> **[3:58](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=238)** What I want to start with is several steps down, which is the mocked test.
>
> **[4:04](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=244)** And I could even go further and I could say, perfect.
>
> **[4:10](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=250)** Now I can go even a step further and build out a ticket that does everything we just talked about.
>
> **[4:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=256)** So we'll say build a ticket.
>
> **[4:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=259)** Now we can fully implement all the steps together by creating a ticket.
>
> **[4:24](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=264)** So we'll say create ticket called Ticket-postgres.yaml, and put the steps we went over.
>
> **[4:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=278)** And then also I want to see it before we submit it to GitHub.
>
> **[4:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=283)** Okay, let's go ahead and take a look at what this YAML ticket could look like.
>
> **[4:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=288)** In this case, here we go.
>
> **[4:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=289)** We see that we're going to implement a Postgres SQL pattern here's the technical details, here's the implementation, here's the test implementation.
>
> **[4:59](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=299)** We're going to create a mock pool for testing.
>
> **[5:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=302)** Here's our acceptance criteria, and here's the implementation file.
>
> **[5:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=305)** And then again, I can attach to that ticket, the exact source code and the test that's going to make the the source code and the test work together.
>
> **[5:17](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=317)** And then we also have the dependencies as well, and we could even attach that.
>
> **[5:20](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=320)** So this is a much different way to develop with agents is to really on a reverse basis, think about what I'm developing, and I haven't even touched the code at all.
>
> **[5:31](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/working-with-orms-and-persistence?u=76281980&t=331)** I'm just designing based on using the agent to interrogate and ask lots of different questions that later will give me a really great result because of how thoughtful and how careful I am when I'm building a new solution.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (7), let (4), abstract (2), class. (1), interface (1)
> **Env Vars:** sql (2), tdd (2), yaml (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (3)
> **File Paths:** base.ts (1), ticket-postgres.yaml (1)
> **Exercise Files:** source code (2)
> **Tools:** github (1)
> **Prerequisites:** set up (1)


### 3. Testing and Validation

#### Task 4: The test suite
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=5)** - [Instructor] Let's extend our unit test structure by first looking at the output of make coverage.
>
> **[0:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=13)** So the make file here is our friend, because it gives us a centralized interface to look at all of the code.
>
> **[0:20](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=20)** And you can see here, we have the output from the test.
>
> **[0:23](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=23)** We also have the ability to see if any of 'em failed.
>
> **[0:26](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=26)** They're all passing, and this make coverage command is really easy to remember.
>
> **[0:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=30)** I just run make coverage.
>
> **[0:32](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=32)** Now, in this case, we see that we have extremely good coverage, but could we do a little bit more?
>
> **[0:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=38)** For example, this branch coverage here of 83%.
>
> **[0:42](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=42)** Could we actually improve it? I don't know.
>
> **[0:44](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=44)** Let's go ahead and see if we can.
>
> **[0:46](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=46)** First up, what I could do is I could look at the source directory and then I could go to the business reconciliation.
>
> **[0:52](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=52)** So we'll go to business and we'll go to reconciliation.
>
> **[0:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=56)** And we see that there's a matcher.ts here.
>
> **[1:00](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=60)** Now what I would do at this point is I would take the output, in this case, this command here, and then I would copy it and I would go over to Copilot and I'm going to say, this is our coverage.
>
> **[1:20](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=80)** Let's improve a little bit.
>
> **[1:24](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=84)** And then what's nice about this is that we should be able to extend one of these tests.
>
> **[1:32](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=92)** In this case, we're going to look at the existing tests and it was able to find that matcher, test.ts is the one.
>
> **[1:40](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=100)** And it says, look, we don't have tests for when matches are found.
>
> **[1:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=103)** We don't have a test for currency mismatch.
>
> **[1:46](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=106)** So in this case, it's a really good way to explore the capabilities of what an agent can do because we already have really good test coverage.
>
> **[1:55](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=115)** We already have a high quality project.
>
> **[1:58](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=118)** At this point, we're going to extend what we're doing and we're going to actually accept this change if we validate it.
>
> **[2:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=127)** In this case, it's going to say, look, here's another test here, and I can review this test and we can see that it's going to add some additional conditions, like it mentioned.
>
> **[2:18](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=138)** It should handle different currencies.
>
> **[2:20](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=140)** Great.
>
> **[2:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=141)** And we can go through and review all these different examples here, and we can either accept them or deny them.
>
> **[2:28](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=148)** Let's go ahead and accept all.
>
> **[2:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=150)** All right, now that we've got that working, let's go ahead and run the coverage again.
>
> **[2:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=158)** And now we can see that we've increased the branch as well as line coverage for that particular function.
>
> **[2:46](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=166)** What's nice about this is that this is a strong use case for using coding assistance.
>
> **[2:51](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=171)** You already have something that's very strong.
>
> **[2:53](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=173)** You already have something that has high quality.
>
> **[2:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=176)** You ask for a little bit more based on what you've already built, and this is a great way to get to that final component or get to the final test that will make your system more reliable.
>
> **[3:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/task-4-the-test-suite?u=76281980&t=187)** So that's a different way to think about coding with agents is how do I make my system more reliable versus how do I write more code?

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), case, (5), interface (1), function (1)
> **CLI Commands:** make (6), find (1)
> **UI Navigation:** go to (3)
> **File Paths:** matcher.ts (1), test.ts (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### End-to-end testing strategies
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=5)** - [Instructor] Let's take a look at end-to-end testing.
>
> **[0:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=7)** This is really when you've already built a high-quality product.
>
> **[0:12](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=12)** You have lots of unit testing, and property testing, and mutation testing, linting, quality analysis.
>
> **[0:18](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=18)** You also want to look at how the application itself runs.
>
> **[0:22](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=22)** What I like to do is put this into a Makefile target, so I'll say test-e2e.
>
> **[0:29](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=29)** And then here, we see, I tag it with deno test, and then I go ahead and I run this particular test.
>
> **[0:36](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=36)** Now we can actually see this, if I type in make test-e2e, we'll go through here and run one by one all of these individual tests.
>
> **[0:50](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=50)** And what's nice about the end-to-end test is they're very logical.
>
> **[0:54](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=54)** So is the page going to load?
>
> **[0:57](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=57)** Is the health check endpoint returning the correct status?
>
> **[1:01](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=61)** What about the CRUD operation?
>
> **[1:03](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=63)** Are we building a POST request, a GET request?
>
> **[1:06](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=66)** Are we listing all the invoices?
>
> **[1:08](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=68)** So it's testing the things that are natural behavioral type issues with your application.
>
> **[1:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=76)** And what's nice about this as well is it's easy to read.
>
> **[1:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=79)** So let's go ahead and take a look.
>
> **[1:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=81)** We can see here, from this particular example, it's in tests/e2e/index_page.test.ts.
>
> **[1:28](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=88)** Here we go, we've got this open.
>
> **[1:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=90)** And if we scroll through here, it's very easy to read.
>
> **[1:33](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=93)** It sounds a little bit like human logic if you say describe Index Page.
>
> **[1:39](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=99)** And then we can look at some of the options, right?
>
> **[1:42](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=102)** In this case, the Index Page end-to-end test has a Page Load, and we describe here and we say, does the page load successfully, and then at the very end, does it return back at 200?
>
> **[1:54](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=114)** Okay, what about the title of the page?
>
> **[1:57](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=117)** Great.
>
> **[1:57](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=117)** The title says Invoice Reconciliation Engine.
>
> **[2:00](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=120)** Okay, what about navigation links?
>
> **[2:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=122)** Do we have navigation links that are correct, what are the different navigation links that we care about?
>
> **[2:09](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=129)** Health check, great.
>
> **[2:10](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=130)** We have an API docs link, does that work?
>
> **[2:13](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=133)** This is really helpful because not only does the API check help me in terms of the code behind it, like the logic, but it also helps me in terms of a behavioral issue with whatever departments I'm working with or clients that I'm working with.
>
> **[2:32](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=152)** I can say, "These are the things that I care about, and I want to have a whole end-to-end test built."
>
> **[2:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=158)** Now, I also could, if I wanted to, open up an agent, and I could say, "Look," you know, "What does this do?"
>
> **[2:45](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=165)** or, "What are some other things that we can add as a behavioral test?" or, "What tests am I missing?"
>
> **[2:52](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=172)** But really, it starts with having the infrastructure in place.
>
> **[2:55](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=175)** Once you've got this infrastructure in place, it's easy to enhance it or add the cherry on the sundae because I've done all the hard work.
>
> **[3:03](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=183)** I have the Makefile, I have the end-to-end test, I've been able to run it, they're successful.
>
> **[3:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/end-to-end-testing-strategies?u=76281980&t=187)** And then I can incrementally increase the quality even more and add as many behavioral components to the test that I need to, so that I have a system that not only has a fundamental basis in it, but when I present it to a user, we know that the user is going to get the types of actions and clicks that are going to be normal, and from a behavioral perspective, will work.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), case, (1)
> **Env Vars:** api (2), crud (1), post (1)
> **API Endpoints:** post  (1), get  (1)
> **File Paths:** tests/e2e/index_page.test.ts (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** index_page (1)
> **Speakers:** - [instructor] (1)

#### Reviewing your implementation
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=5)** - [Speaker] Once you have a fully working product, a fully working repository, or you have something that you want to test, the next step that is very useful with the agents is to go through and interrogate the project.
>
> **[0:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=21)** So in this case, I already have a tool that I use to analyze the quality of my project called PMAT.
>
> **[0:27](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=27)** And if I type in PMAT, you can see here this is a quantitative scaffolding and analysis kit and it has lots of different things it can do.
>
> **[0:36](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=36)** It can look at code metrics, it can look at enforcing things.
>
> **[0:40](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=40)** For example, quality gates.
>
> **[0:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=43)** We can mutate code, but I can actually just take for example, some of the things that it does and I can put 'em in here and I could say, "Look, I want you to look at the quality of my project."
>
> **[0:57](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=57)** So look at the quality of this code base.
>
> **[1:03](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=63)** Next here, we're going to see that I can analyze the code quality by running some of these commands in this case.
>
> **[1:10](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=70)** First up, we look at the deno.json file, and we can see that the structure looks good.
>
> **[1:17](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=77)** We have comprehensive test suite, so unit tests, E2E tests, mutation tests.
>
> **[1:23](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=83)** We also can look at code quality checks.
>
> **[1:26](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=86)** We have strong TypeScript configuration.
>
> **[1:28](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=88)** There's good documentation, good dependencies.
>
> **[1:31](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=91)** There's also code quality metrics by looking at some of the files here.
>
> **[1:36](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=96)** And we also have tools like deno format, deno lint, and we also have quality gates.
>
> **[1:42](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=102)** And PMAT is one of those quality gates.
>
> **[1:44](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=104)** We see some ideas here though for improvement in memory storage, et cetera.
>
> **[1:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=109)** And then if we want to go further, it's going to give us some suggestions, but I want to say, I want you to run PMAT.
>
> **[1:58](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=118)** There we go.
>
> **[1:59](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=119)** So we can see PMAT analyze complexity.
>
> **[2:01](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=121)** Great.
>
> **[2:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=122)** Let's go ahead and test that out.
>
> **[2:03](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=123)** And look, we're able to see that there are some things that could be fixed.
>
> **[2:08](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=128)** For example, this anonymous function here is got a pretty high-level of complexity, and we can also look at self-admitted technical debt as well.
>
> **[2:18](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=138)** This is also something that we could take a look at and we could also look at dead code, for example.
>
> **[2:24](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=144)** And what's really nice about this style is that if you're using tools that are designed to use non-agentic coding techniques, it's a great way to compliment some of the things that these agentic tools are good at doing.
>
> **[2:42](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=162)** So, for example, context here will give us the entire context of the project, and then once we have a context of the project, we can also dive in and look at other types of characteristics.
>
> **[2:53](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=173)** So this is a great way to get the best of both worlds.
>
> **[2:58](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=178)** We have quantitative tools that don't require agents like looking at complexity that's just a mathematical routine or looking at the churn or how many times things have changed in terms of a project from check-ins.
>
> **[3:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/reviewing-your-implementation?u=76281980&t=191)** And then you can compliment that with an agent and the two together make a really good way of reviewing the quality of your project.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), case. (1), let (1), function (1), self (1)
> **Env Vars:** pmat (5), e2e (1)
> **Analogies:** for example (5)
> **Definitions:** is a  (2)
> **File Paths:** deno.json (1)
> **CLI Commands:** make (1)
> **Speakers:** - [speaker] (1)

#### Comparing with best practices
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=5)** - [Instructor] In getting to the final stages of delivering a project, one of the things to take a look at is a maturity model.
>
> **[0:12](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=12)** One of the maturity models for web services is the Richardson Maturity Model.
>
> **[0:18](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=18)** If you look at level zero, this is the Swamp.
>
> **[0:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=21)** And you have a single URL, you also have a single HTTP method.
>
> **[0:26](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=26)** This is not going to be a great experience for other developers that have to use this.
>
> **[0:31](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=31)** With level one, you have Resources, so you have multiple URLs, you also have single methods.
>
> **[0:37](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=37)** And then in the case of level two, this would be Verbs, right?
>
> **[0:40](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=40)** You're using multiple ways of interfacing with HTTP methods.
>
> **[0:46](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=46)** And then level three, you have discoverable APIs.
>
> **[0:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=49)** Now, in terms of API review checklist here, some of the things to take a look at would include REST principles, also OpenAPI documentation, input validation with Zod for example, RFC error handling, API versioning, security headers, rate limiting.
>
> **[1:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=67)** So these are all things that are a checklist of quality, or standards of excellence.
>
> **[1:12](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=72)** And then if we look at the metrics from tools like PMET, okay, what about code coverage, mutation score, cyclomatic complexity?
>
> **[1:20](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=80)** What are the total tests that I have?
>
> **[1:22](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=82)** What about lint validation?
>
> **[1:23](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=83)** What is the tech debt ratio that I have?
>
> **[1:26](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=86)** What's the response time as well?
>
> **[1:28](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=88)** These are things that are really important when you're building out services that have to work at scale, and these are things that are not negotiable.
>
> **[1:36](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=96)** And so this is something that even though you use an agent to develop your code, it doesn't mean that this checklist needs to go away.
>
> **[1:44](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=104)** In fact, it's even more important because you may not have done all of the code yourself, and so it's really critical to have a checklist of the different things that ya need to measure in your application.
>
> **[1:55](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=115)** Now, let's go ahead and take a look at another aspect, which is deployment.
>
> **[2:01](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=121)** Here, we have a repo that does some analysis of the runtime of a serverless OS.
>
> **[2:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=127)** In this case, it's the Lambda OS.
>
> **[2:09](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=129)** It could be Google Cloud functions, or Azure Cloud functions, or some other service that does functions.
>
> **[2:15](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=135)** But the idea here is to look at what we can do to improve the performance in terms of runtime.
>
> **[2:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=141)** So not only should you be looking at the checklist of the best practices for the API, but what about the runtime of the service you're delivering?
>
> **[2:30](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=150)** One of the things that I'm measuring here is that different Rust, or C++, or Go, or Python runtimes have startup time differences.
>
> **[2:39](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=159)** So in the case of Rust, you can get a 10-millisecond response time, or Go, maybe it's a 50-millisecond starttime.
>
> **[2:47](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=167)** But then in terms of Python, you have almost a 100-millisecond response, so you're getting roughly around 10 times worse startup performance.
>
> **[2:57](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=177)** A lot of this has to do with the binary size.
>
> **[3:00](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=180)** If you look at the runtime that's loaded by default with a interpreter, you get a huge runtime.
>
> **[3:06](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=186)** And this is a problem in terms of the startup time, and then also in terms of the memory as well.
>
> **[3:11](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=191)** You can see that in the case of Python versus Rust, it could be three times more memory.
>
> **[3:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=196)** So these are all things to factor into a cost perspective.
>
> **[3:20](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=200)** And then if ya go to the actual performance of the system, both locally and then also when you're doing benchmarks, you can look at things like the Fibonacci execution time, for example.
>
> **[3:31](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=211)** An interpreted language is going to be much slower than a compiled language.
>
> **[3:35](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=215)** So looking at modern compiled languages potentially after you've done the initial prototyping could be a good strategy.
>
> **[3:42](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=222)** And then if you look at the local benchmarking as well, it takes out the factor of the external service that you're running to.
>
> **[3:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/comparing-with-best-practices?u=76281980&t=229)** So these are things to think about when you're building a service, is not only are you going to do a checklist, but also, can you measure the local execution times and also the remote execution times, so you know the performance characteristics of the service that you're building?

> [!info]- Semantic Content
>
> **Env Vars:** api (3), http (2), url (1), rest (1), rfc (1)
> **Code Keywords:** this. (1), let (1), case, (1), lambda (1)
> **CLI Commands:** python (3)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Documentation:** rfc (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### Final reflections and next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=5)** - [Presenter] Welcome to the end of the course.
>
> **[0:07](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=7)** Let's go ahead and wrap up everything that we covered in this course in terms of final reflections and next steps.
>
> **[0:15](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=15)** We have a Capstone Project that is ready for you to enhance to look at some of the quality metrics and improve them.
>
> **[0:23](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=23)** Now, we also talked about extreme, test-driven development.
>
> **[0:26](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=26)** The idea here is with agents, you have to go above and beyond even what you did before.
>
> **[0:32](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=32)** And this extreme, test-driven development lifecycle is you first build out a ticket, then you build out a test, you make the implementation, mass the test.
>
> **[0:42](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=42)** Then you also look at things like mutation testing and property testing, and example testing.
>
> **[0:47](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=47)** The idea here is that you have extreme rigidity when you're building things with agents, not less rigidity.
>
> **[0:54](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=54)** Now, if we think about what agents are in terms of a carpenter, a carpenter can be an expert at a table saw.
>
> **[1:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=62)** So, a table saw is literally a table with a saw on it.
>
> **[1:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=65)** And if you're a expert carpenter, you have experience with making furniture and making really complex items.
>
> **[1:12](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=72)** But if you're an amateur, and you just bought a table saw, there's a chance that you could seriously injure yourself.
>
> **[1:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=79)** And some of the latest table saws have mechanisms that will prevent your finger from getting sliced by a table saw.
>
> **[1:26](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=86)** So, this safety mechanism is one of the ways that they prevent defects.
>
> **[1:31](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=91)** We should think of agentic coating in a similar way.
>
> **[1:34](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=94)** We need those safety mechanisms to prevent defects.
>
> **[1:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=98)** Now, in terms of zero defect enforcement, one of the ways that you can do this is by ensuring that you have quality gates that stop things from getting pushed into even a branch.
>
> **[1:50](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=110)** One of the ways you can do this is with a pre-commit hook.
>
> **[1:52](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=112)** That's one of the best ways to stop it, even from being in your local repo.
>
> **[1:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=116)** You can also have a CICD system as well that enforces the quality when you push the code into a build system.
>
> **[2:03](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=123)** And then at a granular level have lots of different things like complexity checking and defect checking and test runs, and all these kinds of checks that are built into your quality gates.
>
> **[2:16](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=136)** Now, the Makefile is a map for your project, and it's a central context for all your tools.
>
> **[2:22](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=142)** It's very confusing if you're working with an agent, and you tell it one particular command and then it does something slightly different.
>
> **[2:29](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=149)** And you could be catching your tail, essentially, because you're constantly doing something slightly different.
>
> **[2:36](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=156)** But if you use a make file command, it's an abstraction that allows you to say, look, make run or make coverage, or make lint, or make format.
>
> **[2:45](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=165)** There's a very specific thing that maps to a more complex tool.
>
> **[2:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=169)** In terms of best tools and best practices, the best way to think about working with agents is that you don't want it to build the cake.
>
> **[2:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=176)** You want to make the cake yourself, but then put the frosting on top of the cake with the agent.
>
> **[3:00](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=180)** So the structure is already there.
>
> **[3:02](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=182)** You already use high-quality ingredients, and then you're enhancing it by using an agent.
>
> **[3:08](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=188)** In terms of tickets, the tickets are where you can define your logic.
>
> **[3:12](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=192)** Even before Agentic AI, it was a good idea to build out a roadmap, build out tickets.
>
> **[3:17](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=197)** But with Agentic AI, it's really important to have all the details of what you're trying to build first, so that that defines the logic.
>
> **[3:27](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=207)** Quality is something you can measure with your code.
>
> **[3:29](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=209)** If you look at complexity, churn, self-amended technical debt, you look at the response times.
>
> **[3:35](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=215)** You look at the test coverage.
>
> **[3:36](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=216)** You look at the mutation coverage.
>
> **[3:38](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=218)** All these kinds of things will give you the quality measurements.
>
> **[3:42](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=222)** And there is a very quantitative way to measure this.
>
> **[3:45](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=225)** It's not squishy, it isn't a feeling.
>
> **[3:48](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=228)** You can actually measure the quality.
>
> **[3:49](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=229)** And so, with agents, you should be producing higher quality code than you did before agents, not more code with lower quality.
>
> **[3:58](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=238)** Runtime size also matters.
>
> **[4:00](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=240)** This is something that is another capability of agents is if you're going to be rewriting your code or converting your code, why not have the smallest possible runtime, use modern compile languages?
>
> **[4:12](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=252)** You're going to save your company lots of money.
>
> **[4:14](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=254)** You're going to decrease the likelihood of attacks or bugs in deploying your software.
>
> **[4:19](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=259)** In terms of querying your internal knowledge basis, another idea here is that the quality is going to compound over time.
>
> **[4:27](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=267)** So, if you have lots of really good repos or really good example of projects with the highest of standards of quality at the very beginning, the next types of projects you build will be easier because they can leverage all of that institutional knowledge.
>
> **[4:43](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=283)** So it's a little bit of a chicken and egg problem where if you start off with low quality, you're going to get worse and worse quality over time.
>
> **[4:50](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=290)** If you start off with extremely high quality, you're going to get higher quality over time.
>
> **[4:56](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=296)** In terms of pair programming with AI, the important thing is context is everything.
>
> **[5:00](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=300)** So, again, if you have really high quality, you're going to get a much better result.
>
> **[5:05](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=305)** In terms of the paradigm shift, the idea here isn't that you're writing more code, it's that you're writing better code, and you're potentially moving faster because you have even more high quality systems in place, more quality gates.
>
> **[5:21](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=321)** And so, it's a very different way of thinking, which is instead of lowering the bar, because you're writing lots of agentic code, you should be raising the bar and making even higher quality code.
>
> **[5:33](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=333)** In terms of production ready, it's always important to have a checklist where you go through and you look at all the best practices, look at the runtime, look at the costs associated, make sure that you have monitoring in place.
>
> **[5:44](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=344)** And then in terms of the secret, this is really, I think, the big takeaway is that the AI will amplify what you're doing, not autopilot what you're doing.
>
> **[5:54](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=354)** So, if you're building very sloppy projects, your AI will amplify the sloppiness.
>
> **[6:00](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=360)** If you're building extremely high-quality projects with extreme attention to detail, the AI will amplify that extreme level of quality across your organization.
>
> **[6:12](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=372)** All right, that's it for this course.
>
> **[6:14](https://www.linkedin.com/learning/capstone-building-production-features-with-copilot/final-reflections-and-next-steps?u=76281980&t=374)** Let's go ahead and build something amazing.

> [!info]- Semantic Content
>
> **CLI Commands:** make (8)
> **Code Keywords:** let (2), self (1), this. (1)
> **Definitions:** is a  (2)
> **Env Vars:** cicd (1)
> **Cross-References:** we covered (1)
> **Speakers:** - [presenter] (1)


## Path Context

### In [[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development]]
← [[Responsible AI Development with GitHub Copilot]] | **4 of 4**

## Appears In

- [[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development]]

## Related Courses

_Courses sharing skills:_

- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), GitHub Copilot
- [[Practical GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[AI Pair Programming with GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Responsible AI Development with GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot

---

[↑ Back to top](#)