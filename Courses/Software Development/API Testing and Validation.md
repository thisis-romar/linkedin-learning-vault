---
type: course
cssclasses:
  - lle-course
slug: api-testing-and-validation-22610641
url: "https://www.linkedin.com/learning/api-testing-and-validation-22610641"
duration_minutes: 104
duration: 1h 44m
exercise_files: false
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQEkqQwIdKXdbg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687799290970?e=2147483647&amp;v=beta&amp;t=upDE8G-Q_voOTnLJbQSA-Sbe-OeeCZTMeGgeNh-pPF0"
linkedin_topic: Software Development
learning_paths:
  - '[[Become a RESTful API Developer]]'
prev_courses:
  - '[[Designing RESTful APIs]]'
next_courses:
  - '[[Web Security- OAuth and OpenID Connect]]'
path_nav: '[{"path":"Become a RESTful API Developer","position":4,"total":5,"prev":"Designing RESTful APIs","next":"Web Security- OAuth and OpenID Connect"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/API%20Testing%20and%20Validation.md)

![API Testing and Validation](https://media.licdn.com/dms/image/v2/D560DAQEkqQwIdKXdbg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687799290970?e=2147483647&amp;v=beta&amp;t=upDE8G-Q_voOTnLJbQSA-Sbe-OeeCZTMeGgeNh-pPF0)

# API Testing and Validation

> How do you test your API to ensure it's working as intended and solving business problems? Most API testing doesn't actually test the API. In this course, Keith Casey teaches you how to test and validate your API by using behavior-driven development, or BDD, to test APIs via their external endpoints. Keith looks at the API from the consumer’s point of view, confirming that problems experienced by 

> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641) | 1h 44m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (4 videos)
- **[[#1. Behavior Testing with Cucumber and Gherkin]]** (5 videos)
- **[[#2. Build Your First API Test]]** (3 videos)
- **[[#3. Handling Authentication in API Testing]]** (5 videos)
- **[[#4. Advanced API Testing in Practice]]** (7 videos)
- **[[#5. Planning Your API Testing Strategy]]** (6 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Be an API testing and validation MVP
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980&t=0)** - Most people test their APIs by clicking around or making a few requests via Postman and calling it done.
>
> **[0:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980&t=5)** At best, it's inefficient.
>
> **[0:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980&t=7)** At worst, it's completely worthless.
>
> **[0:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980&t=9)** In this course, I'll teach you how to use behavior-driven development or BDD to test your APIs via their external endpoints.
>
> **[0:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980&t=16)** Even better, this doesn't require us to know anything about the API's internals.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980&t=21)** Hi, I'm Keith Casey, the API problem solver.
>
> **[0:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980&t=23)** I've solved a lot of API problems over the years but the hardest is uncertainty.
>
> **[0:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980&t=27)** Is my API working?
>
> **[0:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980&t=29)** Is my API working the same as yesterday?
>
> **[0:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980&t=31)** Join me to see how we can learn, explore, and prove that our APIs are working exactly as we expect today, tomorrow, and continuously.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), bdd (1)
> **Code Keywords:** require (1)
> **Tools:** postman (1)
> **Speakers:** - most (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=0)** - [Instructor] In this course, you'll need just a few tools and concepts.
>
> **[0:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=3)** On the concept side, you'll need to know how to get to your command line and how to run commands, move around in directories, and potentially copy or move files.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=12)** Then you'll need to know the basic mechanics of HTTP requests and responses.
>
> **[0:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=16)** You don't need to be extremely deep in any of those, but you need to be past a hello world level of understanding.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=22)** If you do want to get deep into API design, check out my course on that.
>
> **[0:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=26)** On the tooling side, you'll need a GitHub account.
>
> **[0:28](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=28)** Not only will you need to have some basic vocabulary around repositories, but will generate access tokens and use them constantly.
>
> **[0:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=35)** Then you'll want an IDE or some other way to keep your code organized.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=39)** I use Sublime Text throughout this course.
>
> **[0:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=41)** It has a generous free version, but VS Code, JetBrains, and many others are fine too.
>
> **[0:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=46)** In this course, the most useful part will be the code completion and syntax error highlighting, but most can integrate with your testing tools.
>
> **[0:53](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=53)** Check that out when you get a chance.
>
> **[0:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=56)** Next, I'd recommend an HTTP request tool like Postman or Insomnia.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=61)** We won't use them in this course, but if you get stuck or want to see the details of how something works, it's great to be able to open those up and explore.
>
> **[1:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=69)** Next, you'll need a development environment.
>
> **[1:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=71)** In this course, we'll be using PHP 8.2, so all the code, examples, and explanation target that.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=77)** Alternatively, the Gherkin Syntax which we'll talk about in a moment, that tooling supports any modern language, so you can dig in with your language of choice if you prefer.
>
> **[1:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=86)** Finally, you need Gherkin or a BDD framework for your language of choice.
>
> **[1:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=90)** In PHP, we're going to use Behat 3.12, which we'll set up through Composer.
>
> **[1:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=95)** The install instructions are already in the course and in the Read me, so you don't have to figure that out yourself.

> [!info]- Semantic Content
>
> **Prerequisites:** you'll need (5), you need to have (1), set up (1), install (1)
> **Env Vars:** http (2), php (2), api (1), ide (1), bdd (1)
> **Tools:** command line (1), github (1), sublime (1), vs code (1), postman (1)
> **CLI Commands:** php (2), composer (1)
> **Versions:** php 8 (1), 3.12 (1)
> **Code Keywords:** finally, (1)
> **Speakers:** - [instructor] (1)

#### API overview
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=0)** - [Instructor] The GitHub API is our testing target for this course.
>
> **[0:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=3)** Their API isn't perfect.
>
> **[0:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=5)** There really isn't a perfect one, so don't worry about that.
>
> **[0:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=8)** It is pretty great though.
>
> **[0:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=9)** The power of this API is that our personal repositories gives us space to work and play with no side effects or impact on other users.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=17)** It's also publicly available, free to use, and you're likely already familiar with GitHub, so we can focus on our efforts on the API and the test instead of explaining what a repository is.
>
> **[0:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=27)** If you're not familiar with GitHub at all, I suggest you check out one of the introductory courses but a basic understanding is sufficient.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=33)** The goal of this course will be to build out a series of API tests step-by-step using an API endpoint and validating it worked as expected.
>
> **[0:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=42)** Therefore, we're going to keep our API interactions pretty simple.
>
> **[0:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=46)** We're not going to get into all the complexity or depths of this API.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=49)** Instead, we're going to focus on a handful of specific tasks, authentication, repositories, and stars.
>
> **[0:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=55)** And even then we'll use an SDK.
>
> **[0:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=58)** There are many, many other endpoints we could use but these will demonstrate our goals.
>
> **[1:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=63)** At the end of this course, I recommend you explore and play around with other endpoints and see how you apply these same concepts again.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=70)** But wait until you get there.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), sdk (1)
> **Tools:** github (3)
> **Speakers:** - [instructor] (1)

#### Exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=0)** - [Instructor] To get set up with the exercise files for this course we have three steps.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=4)** We get the code, we run the setup, and we initialize the setup.
>
> **[0:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=7)** It should only take a few minutes.
>
> **[0:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=9)** First, we need to get the code.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=11)** You can get the code from my repository AP testing and validation.
>
> **[0:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=15)** This will always have the latest and greatest.
>
> **[0:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=18)** You can either download a zip file here or open it in GitHub Desktop.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=22)** I'll be using GitHub Desktop for this.
>
> **[0:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=26)** This automatically will clone this into our working directory, so you have that.
>
> **[0:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=30)** Again, it should just take a moment.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=33)** Now we need to go to the command line to run our setup scripts.
>
> **[0:37](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=37)** So go into our API testing and validation folder and we'll go into our API testing workspace.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=45)** There's also the API testing course folder.
>
> **[0:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=48)** That's where all the examples for the rest of this course will be.
>
> **[0:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=50)** Those are all the completed samples and code, not where we'll be working on a regular basis.
>
> **[0:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=54)** So we'll go into the workspace folder and now here we need to set up Composer.
>
> **[1:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=60)** If we just set up Composer like this.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=62)** If you already have it installed, great.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=64)** In this case, I don't have it installed so we'll go to the Composer website to go ahead and grab it.
>
> **[1:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=69)** We copy and paste this command right back to the command line.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=77)** And again, it should just take a moment to get set up.
>
> **[1:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=80)** Now, when we run Composer.phar we say install, it'll go ahead and set up all of our dependencies for us so we don't have to do them manually.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=89)** Again, it should just take a moment.
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=93)** Finally, we run vendor bin behat to initialize our environment here.
>
> **[1:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=103)** Now we can pop back to Sublime.
>
> **[1:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=105)** We'll go ahead and we'll open this up in our API testing folder here.
>
> **[1:53](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=113)** And two things I want to call your attention to.
>
> **[1:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=115)** First of all, we'll be doing all of our work during this course in the API testing workspace.
>
> **[2:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=120)** Everything is set up there, and in fact that behat command set up our first class for us.
>
> **[2:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=127)** Now, there's also the API testing course folder.
>
> **[2:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=131)** If we expand this out, we can see there's an individual file for every single code lesson that we'll be doing during this course.
>
> **[2:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=138)** If you ever get stuck, if you ever want to see what the completed solution looks like, pop over to that folder, open it up, look at it.
>
> **[2:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=144)** And in fact, if you configure this folder you'll be able to run the examples live.
>
> **[2:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=149)** And on that note, remember, each lesson of this course builds on the previous lessons.
>
> **[2:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=153)** So you can't really skip around.
>
> **[2:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=155)** If you're building this out, you want to go to 1 to 2, 32, 33, 34.
>
> **[2:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=160)** You cannot skip around.
>
> **[2:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=162)** You'll end up with incomplete code that doesn't work and you'll end up doing a lot more work.
>
> **[2:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=167)** And now that we have everything working, let's get onto the fun stuff, testing.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (7), setup (3), install (1), configure (1)
> **Env Vars:** api (6)
> **Code Keywords:** this. (2), case, (1), finally, (1), let (1)
> **Tools:** github (2), command line (2), sublime (1)
> **CLI Commands:** composer (4)
> **UI Navigation:** go to (3)
> **Exercise Files:** exercise files (1), zip file (1)
> **Speakers:** - [instructor] (1)


### 1. Behavior Testing with Cucumber and Gherkin

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Acceptance testing
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=0)** - [Narrator] In these lessons, we'll talk about one major concept and a tool to support that concept.
>
> **[0:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=5)** On the concept side.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=6)** Let's jump into acceptance testing.
>
> **[0:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=9)** Acceptance testing is an approach to validate the overall behavior of the system from the customer, user, or consumer's perspective.
>
> **[0:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=16)** And note that I say consumer here.
>
> **[0:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=18)** In addition to customer and user, we think about APIs.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=21)** Our consumer is rarely an end user.
>
> **[0:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=24)** More likely it's a downstream app or integration dependent on that API.
>
> **[0:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=29)** Acceptance or behavioral testing is different than unit testing.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=33)** In unit testing, you work with small, discrete chunks of code, usually a method or function to confirm it is working as expected.
>
> **[0:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=41)** More importantly, you probably test this unit code in isolation.
>
> **[0:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=44)** You don't use the end user UI to trigger it.
>
> **[0:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=47)** You don't communicate across a network, you don't hit the database and most likely, you run the test on the same machine or in the same memory where your code is running.
>
> **[0:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=56)** When we think of the overall behavior of the system from the user's perspective, it gets wildly more complex.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=62)** You need to think of the UI, you need to think of and address network latency.
>
> **[1:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=66)** You need to hit the database.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=67)** What this comes down to is that acceptance testing that is testing the overall behavior of the system involves much more than just your system.
>
> **[1:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=75)** There are all kinds of external components that you have to consider as you test.
>
> **[1:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=81)** The easiest way to understand the distinction between unit and acceptance testing is a shopping cart.
>
> **[1:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=86)** Unit testing will confirm, you can add an item to your cart while acceptance testing will confirm, you can browse items, add an item to your cart, review your cart, checkout and pay.
>
> **[1:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=96)** Basically, can you make money with this cart?
>
> **[1:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=99)** Both are useful and often used together but in this course, we're focused on acceptance or behavioral testing, not unit testing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), function (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### Explanation of Gherkin
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=0)** - [Instructor] Throughout these lessons, you'll hear me talk about Gherkin.
>
> **[0:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=3)** Unfortunately, I don't mean pickles.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=6)** When I mention Gherkin, I mean a syntax that is used to describe the behavior of the system.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=11)** When we think about what that means, there's some great and useful aspects that come out of it.
>
> **[0:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=16)** Because we're talking about behavior or an external view of the system instead of an internal view, we could be language agnostic.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=22)** After all, your API users don't care if you used Python, Go, or .NET behind the scenes.
>
> **[0:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=27)** It's irrelevant to them.
>
> **[0:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=29)** Further, as a common description language, Gherkin drives Cucumber SpecFlow, and behave, among others.
>
> **[0:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=36)** Another nice thing is that it's almost human readable.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=39)** That's being kind in some parts, but it's generally consistent as a common communication medium for stakeholders, developers, and testers to define software behavior in a simple and understandable manner.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=51)** And as a result, you can use in a lot of places, from APIs, to your user interface, to backend processes.
>
> **[0:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=59)** Unfortunately, Gherkin doesn't solve all your problems, but it's useful for defining those interaction's behaviors.
>
> **[1:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=65)** If you have activities in your system that are hard to define in steps, they'll be hard to define here, so you don't get away from having good communication and well-defined interfaces and contracts throughout your system.
>
> **[1:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=79)** The Gherkin syntax is based on three types of predefined keywords that fit the two categories describing a behavior and then defining it.
>
> **[1:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=87)** The first, feature and scenario, those keywords are set to group or describe a behavior.
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=93)** The second area, the definition area, use words like given, when, and then.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=99)** They define the before state, what causes the change, and the after state of the system.
>
> **[1:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=105)** And the final keywords, and and but, add color and clarity to the behavior and draw some boundaries around it.
>
> **[1:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=111)** When used with BDD frameworks like Cucumber, Gherkin scenarios are translating to executable code, making it easier to implement test automation and ensure that the software behaves exactly as expected.

> [!info]- Semantic Content
>
> **Env Vars:** api (1), net (1), bdd (1)
> **CLI Commands:** python (1)
> **Code Keywords:** interface (1)
> **Speakers:** - [instructor] (1)

#### Set up your test environment
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=0)** - [Narrator] All right.
>
> **[0:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=1)** Now let's get your environment set up.
>
> **[0:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=2)** I'm going to start from the assumption that you have PHP installed successfully.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=6)** If not, go back and set that up before you proceed.
>
> **[0:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=9)** I'm doing this on a Mac and using the free version of MAMP, that's M-A-M-P, with PHP 8.3.14 installed.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=17)** As long as you have 8.3 or above, you should be in good shape.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=21)** Now, make sure you have Composer installed.
>
> **[0:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=23)** You can get that from [getcomposer.org](https://getcomposer.org).
>
> **[0:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=26)** Now, let's start with this code specific to this course.
>
> **[0:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=30)** From the command line, move into the API testing course folder, and from there, run composer install.
>
> **[0:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=42)** Your specific composer path may vary just a little bit based on your configuration, so double check yours before you just run it.
>
> **[0:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=54)** Now, if you run vendor/bin/behat right now, you should get some errors, but you should also notice a couple different things.
>
> **[1:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=63)** First, notice you have different colored text, light green shows information, dark green shows success, red shows errors, and blue shows things that didn't execute because they're blocked by those errors.
>
> **[1:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=75)** If you see a few of each color, you're in good shape and you may have to scroll up to see some of those.
>
> **[1:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=80)** It's quite possible in your configuration, you'll see an error that says "Undefined reiki GitHub token."
>
> **[1:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=85)** That's expected at the moment.
>
> **[1:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=87)** Later in the course, you'll set up the access token to populate that value.
>
> **[1:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=91)** Now that we have our environment setup, let's move into the next video and build some features.

> [!info]- Semantic Content
>
> **CLI Commands:** composer (3), php (2), make (1)
> **Prerequisites:** set up (2), make sure you have (1), install (1), setup (1)
> **Env Vars:** php (2), mamp (1), api (1)
> **Code Keywords:** let (3)
> **Versions:** php 8 (1), 3.14 (1), 8.3 (1)
> **Cross-References:** later in (1), next video (1)
> **Tools:** command line (1), github (1)
> **URLs:** [getcomposer.org](https://getcomposer.org) (1)

#### Create your first feature description
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=0)** - [Instructor] Our first test is going to be the simplest test we write.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=4)** More than anything, we must know that our testing environment is working as expected, so we're going to test the smallest thing we possibly can.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=12)** We don't want a lot of complexity or other things outside our control right now.
>
> **[0:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=16)** Once we prove our environment is working, we'll add HTTP requests, JSON responses and more later on.
>
> **[0:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=23)** This is how we'll approach building tests throughout this course, one step or component at a time.
>
> **[0:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=30)** Therefore, let's verify our environment is working by a simple math test of two plus two.
>
> **[0:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=35)** Each test needs three separate pieces that work together.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=39)** First, we have the feature we're testing.
>
> **[0:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=41)** What you name it is less important than the fact that you name it.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=45)** For this test, we'll call our feature: establish my environment, so we can keep it separate from everything else.
>
> **[0:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=52)** Second, we need to describe our scenario.
>
> **[0:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=55)** The scenario is just a readable explanation of what this test is going to prove.
>
> **[0:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=59)** It doesn't affect the test itself.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=61)** In this case, we'll say, I want to prove my environment is working as expected.
>
> **[1:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=66)** The last part is the most important and made up of three steps: the given, the when, and the then.
>
> **[1:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=72)** They set up the setup, the change, and confirm the change after the fact.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=77)** To dive into this further, first we have the given.
>
> **[1:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=80)** This establishes the initial conditions of our test.
>
> **[1:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=83)** In this case, we'll say, given I have 2 monkeys.
>
> **[1:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=87)** Two important notes about this line.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=89)** First, you must start it with given, so our tools will recognize this as the context.
>
> **[1:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=94)** Second, notice that I use the number 2 and not the word two.
>
> **[1:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=98)** This is because our tools are smart enough to see a number as a variable, and we'll automatically interpret that as a parameter for the code behind the scenes.
>
> **[1:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=106)** Don't worry, we'll get into that code in a moment.
>
> **[1:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=109)** The second step of our test is the when.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=112)** When describes the action I take or the change I make.
>
> **[1:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=115)** In browser testing, it might be when I click this button, but here we're going to keep it simple with when I get 2 more monkeys.
>
> **[2:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=123)** Again, the structure is important.
>
> **[2:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=124)** You must start it with when so we can identify the change we'll make.
>
> **[2:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=129)** The third and final step of our test is describing the result which we do with a then statement.
>
> **[2:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=135)** In this case, we'll use, then I should have 4 monkeys, and note again that the line must begin with then and we use a numeral instead of the word four.
>
> **[2:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=145)** When we take this as a whole, this is what it looks like.
>
> **[2:28](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=148)** Establish my environment.
>
> **[2:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=149)** The scenario is, I want to prove my environment is working as expected.
>
> **[2:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=154)** Given I have 2 monkeys.
>
> **[2:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=156)** When I get 2 more monkeys.
>
> **[2:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=158)** Then I should have 4 monkeys.
>
> **[2:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=161)** Regardless of what programming language we're working in, this syntax called Gherkin will be exactly the same.
>
> **[2:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=167)** So in the next video, we're going to write some code.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (3), let (1), else. (1)
> **CLI Commands:** make (2)
> **Env Vars:** http (1), json (1)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Write your first test
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=0)** - [Instructor] In our last video we wrote a feature description to test our environment.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=4)** Now let's actually test it.
>
> **[0:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=7)** Vendor, bin behat.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=12)** And if it works as expected we should get a result that looks something like this.
>
> **[0:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=16)** We have one scenario, which is undefined three steps that are undefined, and with this opportunity to generate a feature context down below.
>
> **[0:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=24)** So we can go ahead and generate that and we can see it generates three placeholder functions for us.
>
> **[0:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=29)** This resolves that undefined question we had just a moment ago.
>
> **[0:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=34)** So we can go ahead and we can copy and paste this directly into our editor.
>
> **[0:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=38)** We add these to the feature context file and now if all goes well, we can run that same command again on the command line and we should get a different message.
>
> **[0:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=48)** This time the message was "fatal error class pending exception not found" which means behat itself is finding the methods it's supposed to, there's just nothing behind them there's no logic to fill them in and to actually execute.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=61)** So let's go back to the editor and start filling that in.
>
> **[1:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=65)** First, let's make a class property.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=67)** So we'll make a protected variable called monkeyCount and we'll initialize that to zero.
>
> **[1:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=78)** And now down below in the given I have monkeys function we'll go ahead and add that.
>
> **[1:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=84)** Say this monkeyCount equals, let's make sure we cast this to an integer just to be clean about it.
>
> **[1:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=98)** So now if we go back to our command line we should see something different.
>
> **[1:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=102)** We run the same command that we did before and now this time notice we have a green line and the red line is the second line.
>
> **[1:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=111)** The red line is the when statement this time, because we've defined our given statement so making a little bit of progress but we have to keep going.
>
> **[2:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=121)** So back in our editor we go ahead and say, "I get more monkeys."
>
> **[2:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=125)** We define this.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=126)** So we say this monkeyCount, and then we can add we'll cast this to an integer and we'll add arg1 to it.
>
> **[2:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=138)** So we're not doing anything particularly fancy here.
>
> **[2:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=140)** We're making this as simple and straightforward as possible.
>
> **[2:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=142)** We're just adding this new group of monkeys to our previous group of monkeys and now we need to check to see how many monkeys we have.
>
> **[2:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=151)** So we can use a PHP function called assert and let's make sure our monkeyCount is equal to our line.
>
> **[2:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=163)** And then we should put a useful error message here.
>
> **[2:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=165)** So we can say "we expected this many monkeys, but found this many".
>
> **[3:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=182)** And now if all goes well as we expected when we go back to the command line we should run and eventually pass this test.
>
> **[3:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=194)** And it turns out we have an error.
>
> **[3:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=195)** This is a common thing in development.
>
> **[3:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=198)** So instead of asset, we should say assert.
>
> **[3:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=201)** It turns out your code has to be correct to run correctly.
>
> **[3:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=206)** Now when we run this we can see that this all passed as expected.
>
> **[3:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=210)** So we've proven from beginning to end that our environment is set up correctly it's working as predicted.
>
> **[3:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=215)** And in fact, if we want to test this we can go back to our feature and we can change it.
>
> **[3:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=221)** So in our feature, we can say, "given I have two monkeys when I get two more monkeys, I should have five monkeys".
>
> **[3:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=227)** Now we know two plus two equals four but what happens when we actually run this test?
>
> **[3:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=234)** And you can see we got a fatal error.
>
> **[3:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=236)** "We expected five monkeys, but found four."
>
> **[3:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=239)** So we can definitively prove and understand that this test is working as expected which means our environment is working as expected.
>
> **[4:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=246)** Now let's get on and build some real API tests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), this. (2), function (2), assert (2), protected (1)
> **CLI Commands:** make (4), php (1)
> **Code Identifiers:** monkeycount (4)
> **Cross-References:** go back to (4)
> **Tools:** command line (3)
> **Env Vars:** php (1), api (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)


### 2. Build Your First API Test

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Make your first request
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=1)** - [Instructor] Now let's build our first API test.
>
> **[0:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=3)** I promise that from now on, the bulk of this course will be spent in our editor writing code or on the command line running code.
>
> **[0:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=10)** There'll be a few slides here and there, but I want you to spend time with your hands on the keyboard, not looking through slides.
>
> **[0:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=16)** With that, let's actually build that first test.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=22)** Each time we build out a test, we'll do three steps.
>
> **[0:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=25)** First, we write the feature description, then we write the supporting code for it to pass.
>
> **[0:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=30)** And finally, we refactor one or both while running the test continuously.
>
> **[0:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=35)** Since we only want to confirm that we can successfully request data from GitHub, we're going to keep this as simple as possible, skipping authentication, authorization, testing read write access, and many other things.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=49)** Therefore, the easiest thing to test is to see if we can read the issues from a public repository.
>
> **[0:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=56)** So our feature will be get a list of issues.
>
> **[0:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=58)** Our scenario is I want to get a list of the issues for the Symfony repository.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=64)** Given I am an anonymous user.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=67)** Like I said, we're not dealing with authentication.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=70)** When I request a list of issues for the Symfony repository from user Symfony, then I should find at least one result.
>
> **[1:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=79)** The feature writeup could use a little bit of work but we'll get to that later.
>
> **[1:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=83)** On the PHP side of things we run the same command that we did before, vendor bin behat.
>
> **[1:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=91)** This will generate the same sort of test that we saw before where our first scenario, establish my environment, continues to work.
>
> **[1:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=98)** But now we've got an additional set of features that have been tested.
>
> **[1:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=102)** We can go ahead and hit enter and it'll generate the functions for us once again.
>
> **[1:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=107)** We can copy and paste those and move to our editor.
>
> **[1:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=111)** Within our editor we can go ahead and just copy and paste those, drop them right in, and now we can start implementing them.
>
> **[1:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=118)** For our first one of, iAmAnAnonymousUser, we don't have to do anything.
>
> **[2:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=123)** By default every user in GitHub is an anonymous user.
>
> **[2:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=131)** Next up, we want to make our first request.
>
> **[2:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=133)** So we can say issues equals this client issues all,
>
> **[2:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=145)** and then we can go ahead and look for the Symfony user and the Symfony repository.
>
> **[2:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=155)** It'll say, this results equals issues.
>
> **[2:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=160)** Now, one quick thing here.
>
> **[2:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=162)** We have this creation here.
>
> **[2:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=164)** We haven't previously defined that, so let's go back up and define that.
>
> **[2:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=169)** From our supporting libraries we can go ahead and define that with the GitHub library.
>
> **[2:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=175)** So new GitHub Client.
>
> **[3:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=181)** And then let's make sure that that's included above with protected client equals null.
>
> **[3:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=189)** And then we also add another parameter in here of results.
>
> **[3:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=193)** So let's go ahead and make sure that we've initialized that also.
>
> **[3:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=201)** So now we're moving into a known good state with everything.
>
> **[3:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=204)** Now we come back here to, iShouldGetAtLeastOneResult.
>
> **[3:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=212)** So in this case, we just make sure that the count of results that we grabbed up here above is the same as what we use here.
>
> **[3:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=219)** Say if count of results is less than arg1,
>
> **[3:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=231)** which means it's less than what we expected, that's a problem.
>
> **[3:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=235)** So we'll throw new exception.
>
> **[3:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=239)** And just like before let's have an expressive error message here.
>
> **[4:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=243)** So we'd say expected at least one result, but got back,
>
> **[4:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=251)** and then let's put what we actually got back.
>
> **[4:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=253)** So count this results.
>
> **[4:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=261)** We save this and then we go back to our command line.
>
> **[4:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=266)** If all goes well here, we should be able to run this and let's see what happens.
>
> **[4:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=272)** So we have a fun issue here of, this is an undefined constant of issues.
>
> **[4:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=276)** This happens all the time as we're building stuff.
>
> **[4:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=278)** So let's pop back to our editor for a moment.
>
> **[4:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=291)** It's a very subtle mistake, but here I use the variable issues and here I used a constant.
>
> **[4:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=296)** So we drop a dollar sign here and we move back to our command line.
>
> **[5:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=300)** And this time when we run we should have all green across the board.
>
> **[5:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=303)** With that, we've completed our first API test and we're making live requests against the GitHub API.
>
> **[5:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=309)** But there's a lot of work we can do so let's clean that up now.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (1), finally, (1), public (1), protected (1)
> **Tools:** github (5), command line (3)
> **CLI Commands:** make (4), find (1), php (1)
> **Env Vars:** api (3), php (1)
> **Code Identifiers:** iamananonymoususer (1), ishouldgetatleastoneresult (1)
> **Definitions:** is an  (2)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)

#### Introduce variables in requests
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=0)** - [Instructor] When we built the test in the last video we started with this story, which weren't but had a pretty significant problem.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=6)** We have a repository end user embed in the function names themselves.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=11)** This makes our code fragile and not reusable.
>
> **[0:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=14)** Imagine trying to check a different repository like one of our own, and we would have to write an entirely new function, that's silly and repetitive.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=21)** So let's get into variables.
>
> **[0:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=24)** A variable is simply something that can change.
>
> **[0:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=26)** Pretty wild, huh?
>
> **[0:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=27)** By the way I love frameworks that use standard definitions of words.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=31)** The less time you have to spend wrapping your mind and understanding around a particular tool the more time you can spend solving your problem.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=39)** In Gurkin, there are two ways to identify variables.
>
> **[0:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=43)** First, numbers are already assumed to be variables.
>
> **[0:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=46)** That's why we use the numeral one in our story.
>
> **[0:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=48)** It was automatically passed into that function.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=51)** The second way is to put double quotes around it for strings, that's your only approach, but for numbers, it's optional.
>
> **[0:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=58)** I recommend that you always use quotes, though it's not required, but it'll make your stories a little more readable.
>
> **[1:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=65)** With that in mind, this is how we modify the story.
>
> **[1:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=69)** Notice that I made two changes to the when line.
>
> **[1:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=72)** I added quotes around our important strings and I rephrase the sentence itself.
>
> **[1:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=78)** I only rephrase it.
>
> **[1:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=79)** So this method can coexist with the previous method.
>
> **[1:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=82)** So that's not the important part.
>
> **[1:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=84)** But now let's jump into the test behind the scenes on the PHP side of things, we run our normal command And you can see this time it did stop once it hit our second well technically our third test here and we generated a new missing undefined function notice.
>
> **[1:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=106)** So we can go ahead and automatically generate that and we copy and paste that function back into our class just like we had before.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=112)** Now, conveniently, we have this line above.
>
> **[1:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=116)** We can go ahead and grab this and fill this in and then we can go ahead and we can fill in the arguments that we're getting from the function itself.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=126)** We'll have to say arg2, sorry, arg1 and arg2
>
> **[2:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=134)** And then we want to make sure that we're passing this in just as we did before.
>
> **[2:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=138)** So we copy and paste this down here.
>
> **[2:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=141)** You can see there's very little difference between these functions.
>
> **[2:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=144)** Now when we go back, we run our test again.
>
> **[2:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=147)** If all goes well we should get three passes just like we had before.
>
> **[2:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=152)** Now we haven't radically changed the functionality of what we're doing here, but we made it a lot more useful.
>
> **[2:37](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=157)** So making our method a little bit more abstract is a good start, but it still isn't great.
>
> **[2:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=163)** Instead of just checking for issues, what if we check to make sure the API works in the first place?
>
> **[2:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=168)** After all, that's the point of this course.
>
> **[2:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=170)** So now let's make one more revision to this test.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (3), abstract (1)
> **CLI Commands:** make (4), php (1)
> **Analogies:** just like (2), imagine (1)
> **Env Vars:** php (1), api (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Validate responses
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=0)** - If you've been following along in this course so far, we've taken a simple story and added layers and tests to flesh it out, and make sure we're testing the right things in the right ways.
>
> **[0:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=9)** So let's do it again.
>
> **[0:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=10)** Going back to my last video, here's what we have.
>
> **[0:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=13)** We have a very simple feature that's getting a list of issues from a repository.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=17)** Skipping down to line 4, given I am an anonymous user, when I request issues from the "Symfony" repository from user "Symfony", then I should get at least one result.
>
> **[0:28](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=28)** We're not going to change anything on this side this time around.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=31)** Instead, let's think about what's happening behind the scenes.
>
> **[0:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=34)** And the line that begins when I request a list of issues, our app is using some sort of HTTP connection, connecting to GitHub, and requesting issues from a repository.
>
> **[0:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=46)** What if we had a typo, and instead of pointing at a valid user, valid repository, we point an invalid one?
>
> **[0:53](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=53)** As is, that line would pass, and we'd be confused why we're getting zero results on the last line.
>
> **[0:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=59)** So let's make our test a little bit more robust with a simple check of our HTTP status code.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=64)** If we accidentally point at the wrong repository, we'd probably get a 404.
>
> **[1:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=68)** So let's focus on the happy path of 200 OK.
>
> **[1:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=72)** So, moving over to our editor, we can make a couple changes here.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=77)** First of all, we want to get back our status code.
>
> **[1:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=79)** Say, statusCode equals, we use the same HTTP GitHub client we had before.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=85)** We want to get the LastResponse.
>
> **[1:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=90)** And we want to get the StatusCode itself.
>
> **[1:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=95)** And like I said, if it's anything other than a 200, we have a problem.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=99)** So let's make this test very simple.
>
> **[1:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=101)** If it's not equal to 200, let's throw an error.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=112)** But let's be very specific with our error, and say "Expected a 200 status code but got statusCode instead!"
>
> **[2:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=127)** Now, when we run this test, if all goes well, it should pass, exactly as it did before.
>
> **[2:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=133)** And sure enough, it passes.
>
> **[2:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=135)** But if we go back to our original story, of the feature description itself, we can make one change.
>
> **[2:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=141)** We can add some garbage at the end of the string, and see what happens.
>
> **[2:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=149)** And sure enough, it fails exactly where we expected it to.
>
> **[2:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=153)** Now we have a safeguard earlier in our test, instead of waiting until the end.
>
> **[2:37](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=157)** At first glance, this doesn't seem like a big deal.
>
> **[2:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=160)** But now we have a very clear distinction between requesting a resource that doesn't exist, versus successfully requesting a resource with a count of zero.
>
> **[2:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=168)** That level of specificity will become very important as we build more and deeper tests.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), pass (2), throw (1)
> **CLI Commands:** make (5)
> **Env Vars:** http (3)
> **Code Identifiers:** statuscode (2)
> **Cross-References:** go back to (1), earlier in (1)
> **Tools:** github (2)
> **Speakers:** - if (1)


### 3. Handling Authentication in API Testing

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Expand your testing environment
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=0)** - [Instructor] If you've followed along so far you have a couple tests that show our environment works.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=4)** We can make an API request and get data back and we can examine the response headers.
>
> **[0:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=9)** We can mix and match those skills to accomplish quite a bit with public APIs.
>
> **[0:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=13)** But in the real world, most of our APIs are going to be protected in some way.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=17)** So let's talk about authentication.
>
> **[0:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=20)** As a reminder, authentication is establishing who you are.
>
> **[0:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=23)** There's also the related concept of authorization, establishing what you're allowed to do.
>
> **[0:28](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=28)** We will not cover that in this course.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=31)** Every API is going to expect you to authenticate yourself but many don't have any real form of authorization.
>
> **[0:37](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=37)** If you want to explore that concept, check out my OAuth and Open ID Connect course where we can discuss those in detail.
>
> **[0:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=44)** Now, back to credentials.
>
> **[0:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=46)** First of all, do not embed credentials in your test.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=49)** Don't embed them in your repository.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=51)** Both are a bad idea.
>
> **[0:53](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=53)** Not only do you expose them to everyone on your team or everyone who can see your repository, but now you need to update them every time their credentials change.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=61)** That's a huge pain and pretty much miserable.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=64)** After all that, the best way to handle credentials in your test is to pull them in from your environment.
>
> **[1:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=69)** That'll keep them outside your repository but still let you use them at runtime.
>
> **[1:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=74)** Now, let's try it out.
>
> **[1:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=76)** On the PHP side of things, I've included in a file called behat.dist.yml.
>
> **[1:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=81)** It's available right here in your directory.
>
> **[1:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=84)** Take that file and rename it to behat.yml.
>
> **[1:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=87)** Just get rid of the .dist.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=89)** This is where we're going to put our credential in just a moment.
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=93)** Now we need to go over to [github.com](https://github.com) to get that credential.
>
> **[1:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=96)** When you visit GitHub, I've included the link to go to in your behat.dist.yml file.
>
> **[1:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=102)** But if you want to navigate it to it directly, you can go to your Profile, Settings, all the way down on the left-hand side, Developer Settings, Personal Access Token, Fine-grained Tokens.
>
> **[1:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=116)** Now, unfortunately, these permissions, these authorizations that we're going to set up here is one of the hardest things in this course.
>
> **[2:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=123)** It's easy to get them wrong.
>
> **[2:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=125)** So let's go ahead and generate it right here right now, so you can see how it works.
>
> **[2:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=129)** We'll generate a new token.
>
> **[2:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=133)** The name itself doesn't matter.
>
> **[2:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=139)** Expiration of 30 days is fine for now.
>
> **[2:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=141)** Description is fine.
>
> **[2:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=142)** And now we need to make a few different changes.
>
> **[2:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=145)** First of all, instead of public repositories, let's choose all repositories.
>
> **[2:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=150)** Let's give it access to all of your repositories.
>
> **[2:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=154)** Then under Repository Permissions, we want to give it Read/Write access on administration side.
>
> **[2:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=162)** And then finally, under Account Permissions we want to give it star access Read/Write and watch access Read/Write, and we want to generate that token.
>
> **[2:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=174)** Now, quick note here, this is the only time it's ever going to show this token to you, so please copy and paste it immediately.
>
> **[3:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=182)** And also, you must protect it.
>
> **[3:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=184)** If somebody had access to this token, they would be able to take action on your account.
>
> **[3:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=188)** Nobody wants that.
>
> **[3:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=190)** So we copy and paste this token and we go back to our editor.
>
> **[3:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=193)** In our editor, we go ahead and replace the value here of GitHub token with the token we just copy and pasted.
>
> **[3:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=198)** I won't do that here because I already set this up previously.
>
> **[3:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=202)** Now we have one more step to do.
>
> **[3:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=204)** In our FeatureContext.php, we need to tell this constructor right here that we need it to load this parameters.
>
> **[3:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=213)** So here we say array parameters equals and we'll go ahead and set that in array.
>
> **[3:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=221)** And we want to make sure that these set of parameters actually get used and stored within our class.
>
> **[3:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=228)** Say params equal parameters.
>
> **[3:53](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=233)** And then to complete this one, we want to make sure that we have this stored above.
>
> **[3:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=238)** Protected params and we'll just initialize an empty array.
>
> **[4:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=247)** And that's all it takes.
>
> **[4:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=249)** So now from our behat.yml file, this GitHub token is going to be loaded into the feature context into the parameters variable whenever we run a test.
>
> **[4:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=258)** Now on the GitHub side, we could also change these permissions as we go.
>
> **[4:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=261)** So even if we didn't get it perfect the first time, we can go back and tweak it.
>
> **[4:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=265)** So we go back to GitHub, we can review those permissions at any time.
>
> **[4:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=269)** In fact, if we want to see exactly what it looks like, if you've properly configured your access token this is what it'll look like after.
>
> **[4:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=279)** These are the user permissions and the repository permissions we'll need for the rest of this course.
>
> **[4:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=284)** Now, the permissions here are very simple.
>
> **[4:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=286)** We're not going to damage much though we could if we're sloppy with our token.
>
> **[4:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=290)** When you start testing your own API, I recommend being very careful around any API that touches money, deletes data or performs an outside action like sending an email or a text message.
>
> **[5:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=301)** Any of those are likely to cause problems in pretty ugly places.
>
> **[5:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=305)** So when you test your API, please be careful with the API and the permissions you've given it and what test you actually write.
>
> **[5:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=312)** You don't want to accidentally spam people or accidentally transfer money that you didn't intend to.
>
> **[5:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=317)** In this case, we're pretty limited scope so we're not going to cause many problems.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), public (2), protected (2), finally, (1), class. (1)
> **Env Vars:** api (6), php (1)
> **CLI Commands:** make (4), php (2)
> **Tools:** github (6)
> **File Paths:** behat.dist.yml (2), behat.yml (2), featurecontext.php (1)
> **Cross-References:** go back to (2)
> **URLs:** [github.com](https://github.com) (1)
> **UI Navigation:** go to (1)

#### Making an authenticated request
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=0)** - [Instructor] To get rolling with an authenticate test, let's do the absolute minimum that we have available.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=6)** A couple videos ago we got a list of issues on a specific repository.
>
> **[0:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=10)** Now let's shift that idea and get a list of repositories from our accounts and determine if a private repository is there.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=17)** Since it's a private repository that'll be a clear indication that our authentication worked.
>
> **[0:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=23)** By the way, if you haven't set up your personal access token, go back to the last lesson to get that set up right now.
>
> **[0:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=29)** Now, with that in mind, let's go through this line by line.
>
> **[0:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=32)** The given line is quite a bit different.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=33)** This time we're ensuring that we have an authenticated user.
>
> **[0:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=36)** Then we get a list of repositories.
>
> **[0:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=40)** Finally, we're going to look through that list of repositories to find a specific private one.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=45)** Now that we know our goal, let's go ahead and dive in.
>
> **[0:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=48)** Before we implement this test, let's go back to our GitHub account and make sure this could pass.
>
> **[0:53](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=53)** So within GitHub, we go ahead and come over to our repository list.
>
> **[0:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=57)** We'll create a new one, we want to call this one is-your-api-misbehaving.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=64)** Make sure to mark this private.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=67)** And then we create it.
>
> **[1:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=68)** We don't need any other settings or information or content in this repository.
>
> **[1:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=72)** We just need to make sure it exists.
>
> **[1:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=75)** And now we head back to the command line.
>
> **[1:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=78)** On the command line we do our normal thing, vendor bin behat.
>
> **[1:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=83)** And if all goes well our previous tests should continue to pass.
>
> **[1:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=87)** It's a good sign.
>
> **[1:28](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=88)** And we should get back to the thing where we have undefined functions.
>
> **[1:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=92)** We go ahead and execute that.
>
> **[1:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=95)** We can copy and paste this code directly into our editor.
>
> **[1:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=102)** So we copy and paste this just as we did before.
>
> **[1:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=105)** Now we need to go ahead and implement these things.
>
> **[1:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=109)** So this time we need to implement iAmAnAuthenticatedUser.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=112)** We'll do this using our client that we've already created.
>
> **[1:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=116)** We'll tell it to authenticate.
>
> **[1:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=119)** And then we use the parameters that we set up in the last lesson.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=126)** So we use our GitHub token, second parameter's null, and then we tell this to use GitHub AuthMethod.
>
> **[2:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=137)** And we want to use access token.
>
> **[2:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=140)** And that just goes ahead and sets up what we're expecting there so that we'll be authenticated.
>
> **[2:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=145)** Now we've set up this function we don't know if it actually works or not.
>
> **[2:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=149)** So we still need to do a little bit of work here.
>
> **[2:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=151)** We'll go to our next method of, iRequestAListOfMyRepositories, and we retrieve this information.
>
> **[2:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=158)** So let's grab our repositories.
>
> **[2:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=162)** We use the client that we've already set up.
>
> **[2:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=167)** We use the API capability on it using the current user context.
>
> **[2:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=176)** And we get a list of repositories.
>
> **[3:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=183)** Now, the GitHub library behind the scenes is doing a lot of work for us.
>
> **[3:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=186)** We really don't care about that this time around but it's something to keep in mind.
>
> **[3:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=193)** Previously, when we got a list of issues, our first pass was just use this information to say, this results equals repositories.
>
> **[3:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=204)** This is sufficient, but it leaves us open to the possibilities of this request didn't work.
>
> **[3:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=209)** We're not going to detect it here.
>
> **[3:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=210)** So let's add a way of detecting it right now.
>
> **[3:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=213)** So we'll do the same thing we did before with status code.
>
> **[3:37](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=217)** We'll use our client.
>
> **[3:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=220)** We want to get the last response.
>
> **[3:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=223)** And we want to get the status code from that.
>
> **[3:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=227)** And if it's anything other than a 200 we want to throw an error.
>
> **[3:53](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=233)** So we check to see if it's not a 200.
>
> **[3:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=236)** And if it's not, we'll go ahead and throw an exception.
>
> **[4:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=240)** And we'll say, explicitly expected a 200 status code but got a different one instead.
>
> **[4:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=255)** All right, so now if all's going well, we've authenticated properly, we've gone ahead and gotten a list of repositories, if that generated anything other than a 200 Okay, we'll know about it immediately.
>
> **[4:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=267)** Now we need to iterate over this list of repositories and make sure that we're finding the right one.
>
> **[4:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=275)** So now we'll go ahead and implement this method.
>
> **[4:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=278)** So we'll say for each, we'll go over the results that we have.
>
> **[4:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=286)** We'll get each repo individually.
>
> **[4:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=291)** And we want to make sure that our arg, the input, the actual repository that we're looking for, is one of the repositories in this list.
>
> **[5:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=305)** And if it worked we want to return true.
>
> **[5:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=309)** Otherwise, if we didn't find a match on this list let's throw a new exception.
>
> **[5:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=316)** And this one will just say what we expected to happen.
>
> **[5:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=319)** Expected to find a repository.
>
> **[5:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=326)** Repository called arg1.
>
> **[5:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=332)** But it doesn't exist.
>
> **[5:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=336)** Quick, simple message.
>
> **[5:37](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=337)** If all's worked out at this point we'll go back to the command line, we'll execute this test, and we'll see some successes.
>
> **[5:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=344)** So go ahead and run the same command we had.
>
> **[5:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=346)** We have a syntax error, so let's go back to our editor and figure out exactly where we messed this up.
>
> **[5:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=352)** Turns out you need a semicolon at the end of each line.
>
> **[5:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=354)** Amazing that.
>
> **[5:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=356)** So now let's go back to the command line again.
>
> **[6:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=360)** Once again, we run our tests.
>
> **[6:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=362)** The first couple passed as expected, and it turns out they all passed exactly the way we expected.
>
> **[6:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=367)** Now to make sure we're not fooling ourselves here let's go back to our feature spec and change the repository we're looking for to see if this still passes.
>
> **[6:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=375)** So we'll go back to our editor.
>
> **[6:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=377)** So we'll just add a two here just to make it different.
>
> **[6:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=379)** And now we'll go back to the command line and run the exact same command again.
>
> **[6:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=387)** And hopefully this fails exactly where we expect it to.
>
> **[6:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=389)** And sure enough it does.
>
> **[6:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=391)** So we don't have a repository called is-your-api-misbehaving2.
>
> **[6:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=395)** So this worked and failed exactly where we expected to.
>
> **[6:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=398)** This is great.
>
> **[6:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=400)** That was a lot of work but we accomplished quite a bit there.
>
> **[6:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=403)** And I don't just mean with code.
>
> **[6:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=404)** We proved that we could authenticate with our API test by retrieving information that an anonymous user couldn't access.
>
> **[6:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=411)** That's a huge accomplishment and a fundamental part of API testing.
>
> **[6:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=415)** So in the next lesson, let's go ahead and take the next step and write to our API.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), private (4), pass (3), throw (3), finally, (1)
> **CLI Commands:** make (7), find (3)
> **Tools:** github (5), command line (5)
> **Cross-References:** go back to (5), in the last (1), in the next (1)
> **Prerequisites:** set up (5)
> **Env Vars:** api (4)
> **Code Identifiers:** iamanauthenticateduser (1), irequestalistofmyrepositories (1)
> **Documentation:** spec (1)

#### Changing your API and target via your requests
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=0)** - [Instructor] As we build and test our API, read access is great and will let us do quite a few things, but the real value, the real importance, is making sure we can write to the API and modify the items we expect.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=12)** Now, this is where things get a little scary.
>
> **[0:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=14)** If you're working with a payments API, you must be careful not to unexpectedly charge someone or change account balances.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=21)** If you're working with an API that sends text messages or emails, you don't want to accidentally spam someone.
>
> **[0:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=27)** So testing write access requires us to be thoughtful and deliberate about how and where we test.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=33)** Unless your API has a sandbox mode which won't create side effects, stay away from payment processing, emails, texts or anything else sensitive.
>
> **[0:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=41)** For this test, we're going to do the simplest thing possible with zero risk.
>
> **[0:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=46)** We're going to start the private repository that we had from our last video.
>
> **[0:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=50)** When you run this test, if you get an error that says, resource non-accessible by personal access token, go back to the first lesson of this chapter to get your access token permission set correctly.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=61)** And remember, let's be careful.
>
> **[1:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=63)** Now let's go to our editor and see the test we're actually going to implement.
>
> **[1:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=68)** In this case, the test is pretty simple.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=70)** Say given, I'm an authenticated user, when I star my is your API misbehaving repository, then my is your API misbehaving repository will list me as a stargazer.
>
> **[1:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=81)** Immediately, we should see that our given line is the same as last time around.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=85)** So we only have two functions to implement, the starring and then validating it.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=89)** So let's move to command line and get this started.
>
> **[1:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=92)** And once again, we run the command we've run many times at this point.
>
> **[1:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=96)** Vendor bin behat.
>
> **[1:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=101)** And if all's going well and we haven't broken anything, which happens occasionally, we should go ahead and see all of our test pass and a couple of ours aren't implemented yet.
>
> **[1:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=110)** And sure enough there's two functions that we need to implement.
>
> **[1:53](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=113)** So we copy and paste these and head back to our editor.
>
> **[1:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=119)** In our editor, it really doesn't matter where we put these.
>
> **[2:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=123)** We'll put them at the bottom just before our monkey test.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=126)** But don't worry, we're going to clean this up later.
>
> **[2:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=129)** Now we need to go ahead and implement this function just as we have before.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=134)** So let's do GitHub user equals, we'll say this, we'll use the client that we've been using all along.
>
> **[2:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=142)** We'll use the API under the current user context, and we'll get the information of that user.
>
> **[2:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=152)** So we'll show the login.
>
> **[2:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=154)** So this will give us back the actual user who's logged in which should be us.
>
> **[2:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=159)** Then we go ahead and we use the client again, use the API, the current context.
>
> **[2:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=177)** We'll now use the starring interface to star our GitHub user's repository and that particular repository.
>
> **[3:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=191)** Now we want to make sure that this repository lists us as a stargazer.
>
> **[3:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=197)** So we'll use the same GitHub user command that we had before.
>
> **[3:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=201)** So just copy and paste this line of code.
>
> **[3:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=210)** So now we need to go ahead and build out the actual repository we're looking for.
>
> **[3:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=214)** We'll say our repo is the GitHub user, and we'll concatenate this string to make sure that we're looking for the right endpoint here.
>
> **[3:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=227)** Arg1.
>
> **[3:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=230)** We'll get our list of stargazers from that repository.
>
> **[3:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=235)** So again, we'll hit the API itself.
>
> **[3:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=238)** So do a client.
>
> **[4:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=241)** We'll hit the repo endpoint.
>
> **[4:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=245)** We'll get the list of Stargazers, and we'll get all of them for GitHub user
>
> **[4:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=259)** on this particular repository.
>
> **[4:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=266)** Let's scroll down a little bit so we move this all in space.
>
> **[4:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=269)** So then we'll iterate over these and we'll go through each stargazer.
>
> **[4:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=279)** We'll say, if our GitHub user equals the Stargazers, login.
>
> **[4:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=290)** We'll return true.
>
> **[4:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=292)** Now, if we don't have a match in any of that collection, we'll go ahead and throw our new exception 'cause we have a problem that we need to address.
>
> **[5:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=301)** So we expected GitHub user to be a stargazer,
>
> **[5:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=311)** and we'll go ahead and make sure we're specific about what repository we're looking at.
>
> **[5:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=319)** All right, so that was a lot of work.
>
> **[5:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=322)** If you're feeling like that was a lot of typing, a lot of analysis, or a lot of explanation, it absolutely was.
>
> **[5:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=329)** But don't worry, one of our later lessons is about refactoring it and cleaning this up to make sure it's a lot simpler.
>
> **[5:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=335)** So with that, let's go back to the command line and run this and see how it works.
>
> **[5:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=343)** And once again, if all's going well, our tests should pass, and sure enough they do.
>
> **[5:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=348)** Now this is a little bit different one.
>
> **[5:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=349)** Notice, we've starred, we haven't unstarred it.
>
> **[5:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=352)** So if we go back to GitHub, we should see ourselves on the stargazer list.
>
> **[5:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=356)** So let's do that now.
>
> **[5:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=359)** We have one repository, so it should be pretty easy to find in my case.
>
> **[6:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=363)** And look, somebody has starred, in fact, I've starred it.
>
> **[6:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=366)** Alright, so we've proven we've accomplished something huge.
>
> **[6:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=369)** We've modified something via our API test and it worked.
>
> **[6:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=372)** Generally, I'd say stop and take a break to celebrate, but we have a different problem.
>
> **[6:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=376)** What happens the next time we run this test?
>
> **[6:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=379)** Or to put it more specifically, now we have a test that changed the state of our data, changed the state of our system, but we never cleaned up afterwards.
>
> **[6:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=386)** Therefore, the next time we run this test, we've already starred it.
>
> **[6:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=389)** So then I star at step doesn't actually do anything.
>
> **[6:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=394)** Therefore, it worked and it didn't work, may look exactly the same, that's a problem.
>
> **[6:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=399)** So let's create a new test and clean up after ourselves.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), pass (2), private (1), case, (1), function (1)
> **Env Vars:** api (11)
> **Tools:** github (8), command line (2)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** go to (1), scroll down (1)
> **Warnings:** be careful (2)
> **Definitions:** is a  (1)

#### Validate responses
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=0)** - [Instructor] In our last test, we proved that we could star a repository and then checked it afterward to see that it had changed.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=6)** It was great, but our tests need to clean up after themselves so we can both start and end in a known good state.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=12)** So let's focus on that.
>
> **[0:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=14)** We'll use a variation of the feature that we wrote last time around.
>
> **[0:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=18)** And this time, two things have changed.
>
> **[0:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=20)** Now we're unstarring our repository and we are not going to be listed as a stargazer.
>
> **[0:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=26)** That's really the only changes between last time around and this time around.
>
> **[0:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=30)** Now let's go to the command line and make it happen.
>
> **[0:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=35)** So we run the same command we've run many times here before.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=39)** And once again, it should go ahead and generate everything.
>
> **[0:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=42)** Everything's working as expected.
>
> **[0:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=44)** That's a good sign.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=45)** We copy and paste these functions and then we head back to our editor.
>
> **[0:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=54)** Once again, we can put these functions anywhere we want to in our class.
>
> **[0:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=57)** We'll just put 'em here.
>
> **[0:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=58)** Now, if you're starting to feel like this is getting sloppy, I completely agree.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=62)** Don't worry about that.
>
> **[1:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=63)** We'll clean that up in the next lesson.
>
> **[1:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=65)** Now we just have to implement our class before.
>
> **[1:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=69)** Since so little has changed, let's make this easy on ourselves.
>
> **[1:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=73)** Let's copy and paste this directly in here.
>
> **[1:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=81)** And now this time we'll just say unstar.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=85)** So that's a good sign that's working out as expected.
>
> **[1:28](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=88)** Now we need to tweak this logic just a little bit.
>
> **[1:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=91)** So let's go ahead and grab the exact same function that we had before.
>
> **[1:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=95)** Now remember, in this function, we're saying this will list me as a stargazer.
>
> **[1:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=100)** And now this time this says this will not list me as a stargazer.
>
> **[1:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=104)** And now we need to flip our results.
>
> **[1:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=108)** So we need to move the return true down to here and we need to throw the exception if there is a match.
>
> **[1:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=119)** Now, again, this is starting to feel really sloppy.
>
> **[2:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=122)** It really feels weird to have all this sort of stuff around and to have all this duplication.
>
> **[2:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=127)** I know, I completely agree.
>
> **[2:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=129)** We will clean it up, don't worry.
>
> **[2:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=132)** So we take that.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=134)** So now we're doing exactly the inverse of what we did before.
>
> **[2:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=137)** So this time we're unstarring, just like the function says here, and then we're making sure that we're not listed as a stargazer.
>
> **[2:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=145)** So if we are listed as a stargazer, we get this error message.
>
> **[2:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=150)** In fact, we should change this error message, because right now it's not correct.
>
> **[2:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=155)** So expected GitHub user to not be a stargazer, but they were.
>
> **[2:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=164)** Now, if you don't remember to update that, you're going to get a really odd error message.
>
> **[2:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=167)** Remember, please update that.
>
> **[2:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=169)** And now we'll go back to the command line and execute this.
>
> **[2:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=176)** And let's see how it went.
>
> **[2:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=179)** Okay, now it seems to have passed.
>
> **[3:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=182)** Now when we ran the test in the last lesson and we starred a repository, remember we went to [github.com](https://github.com) and we could see that the repository had still been starred under our profile.
>
> **[3:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=191)** So let's go back to GitHub and see if it's still starred.
>
> **[3:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=195)** So here's our repository.
>
> **[3:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=196)** You can see it's starred from last time around.
>
> **[3:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=198)** I haven't refreshed this.
>
> **[3:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=199)** Now I'll refresh.
>
> **[3:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=201)** And sure enough, it's now unstarred.
>
> **[3:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=204)** So, because in the previous lesson we proved that starring works and we could see that in effect, now we just proved that unstarring works because, well, it were not starred.
>
> **[3:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=214)** So that, I know you're feeling really odd, you're feeling really frustrated that we have so much duplication in our test.
>
> **[3:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=221)** Let's go ahead and clean that up in our next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (3), this. (2), class. (1), throw (1)
> **Tools:** github (3), command line (2)
> **Cross-References:** go back to (2), in the next (1), in the last (1)
> **CLI Commands:** make (2)
> **URLs:** [github.com](https://github.com) (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### Refactor the tests
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=0)** - [Narrator] From the previous couple lessons, we ended up with a bunch of test methods that look quite a bit alike.
>
> **[0:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=5)** In fact, they're almost mirror images of each other.
>
> **[0:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=8)** While this isn't a catastrophic problem, we've ended up with some cross test dependencies, a lot of duplication, and generally it's starting to feel messy.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=17)** So in this time around, we're not going to write any new tests.
>
> **[0:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=20)** Instead we're going to refactor or clean up what we already have.
>
> **[0:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=24)** So before we change anything, let's go to the command line and make sure all the tests pass as expected.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=31)** So we run our normal command, a vendor/bin/behat.
>
> **[0:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=34)** And if all's going well, all right, we know we haven't broken anything so far.
>
> **[0:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=40)** That's a good sign.
>
> **[0:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=41)** Now let's go back to our editor.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=45)** The first thing I'm going to do is I'm going to move this unstar function back to go with this star function.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=51)** There's really no value in this other than keeping alike things together.
>
> **[0:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=55)** And we can also see how duplicated these functions are.
>
> **[0:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=59)** We can also see how duplicated these two functions are.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=62)** The myRepositoryWillListMeAsAStargazer and myRepositoryWillNotListMeAsAStargazer look a lot alike.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=70)** So let's clean those up first.
>
> **[1:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=73)** Let's create a new function.
>
> **[1:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=75)** We'll have a protected function and we'll just call this one isAStargazer.
>
> **[1:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=82)** And let's take two parameters here.
>
> **[1:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=84)** Let's take a user and a repository.
>
> **[1:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=91)** We'll do a couple quick things here.
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=93)** First of all, let's get an array of the existing stargazers on or in the existing repository.
>
> **[1:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=101)** So use our client as we have before.
>
> **[1:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=103)** We'll use our API to hit the repo endpoint.
>
> **[1:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=107)** We'll get our list of stargazers and we'll get all of them
>
> **[1:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=116)** for that particular repository on that particular user.
>
> **[2:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=120)** Then we're going to use a little bit of PHP trickery here to simplify some of our logic.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=126)** So we'll use, create a new stargazers array and we'll use the array column function.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=134)** What this is going to do is this is going to iterate over the stargazers array and pluck out a particular value that we're looking for.
>
> **[2:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=141)** So we feed in the array of stargazers.
>
> **[2:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=144)** We tell it to grab the value of login and put it in a new value, login.
>
> **[2:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=151)** And now we're going to do one last thing.
>
> **[2:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=153)** We're going to return isset stargazers, and then look for this particular user.
>
> **[2:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=162)** So the way this works is this is going to build an array called stargazers, where the key and the value are both the user login.
>
> **[2:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=170)** And then this function is going to check to see if we have a stargazer with a particular key of the user we're looking for.
>
> **[2:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=178)** Now we've got this entire check down here.
>
> **[3:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=181)** We can clean up quite a bit up top.
>
> **[3:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=184)** So let's come up here and we'll say if this is a stargazer,
>
> **[3:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=196)** 'cause remember in this particular function we're checking to see if we've been removed as a stargazer, so the error is if we haven't been removed.
>
> **[3:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=204)** So check our GitHub user for that particular repository.
>
> **[3:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=210)** And if we find a match, we'll throw in exception.
>
> **[3:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=222)** And in fact, we don't even need to return true here.
>
> **[3:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=225)** The way Behat works is it assumes no news is good news.
>
> **[3:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=230)** And we'll change one variable here to make sure that that's there.
>
> **[3:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=236)** Now before we do anything else, what should we do?
>
> **[4:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=240)** Yes, you're right.
>
> **[4:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=240)** Use our tests.
>
> **[4:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=242)** So let's go back to the command line and run our tests and make sure this is working as expected.
>
> **[4:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=249)** We run the exact same command that we have dozens of times at this point.
>
> **[4:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=254)** And if all's going well, sure enough, all of our tests pass.
>
> **[4:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=256)** Once again, that means we haven't broken anything.
>
> **[4:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=258)** We're on a good path here but we still need to update that other function.
>
> **[4:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=262)** So let's go back and clean that one up, too.
>
> **[4:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=267)** Now this one is the exact opposite logic.
>
> **[4:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=270)** So instead of checking to see if we are a stargazer, we're checking to see if we are not a stargazer.
>
> **[4:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=280)** So this one we'll go ahead and copy and paste this check.
>
> **[4:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=284)** We'll come up here.
>
> **[4:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=285)** We can delete most of this.
>
> **[4:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=291)** And now previously what we would've done is we would've had return true here.
>
> **[4:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=297)** But there's a really easy way we can simplify this because if we just put a not, so if they are not a stargazer, we can throw our exception here.
>
> **[5:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=311)** That's an easy thing to overlook.
>
> **[5:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=312)** It's an easy refactoring to skip.
>
> **[5:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=314)** It's an easy thing to get mixed up in the documentation.
>
> **[5:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=317)** So be careful using this sort of construct.
>
> **[5:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=319)** But it works very consistently every time.
>
> **[5:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=322)** So we'll say arg1, and if all has gone well, when we go back to our tests and run them, this will work again.
>
> **[5:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=331)** So once again, we run our tests and everything is working.
>
> **[5:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=336)** This is a great sign.
>
> **[5:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=338)** It means we're cleaning things up.
>
> **[5:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=339)** We haven't written any new tests, but we're simplifying and streamlining our functionality.
>
> **[5:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=344)** As we build and refactor these tests, we should actively look for opportunities to simplify, to eliminate things.
>
> **[5:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=351)** If we do, our tests will occasionally get messy but they'll regularly trend towards being neat and organized.
>
> **[5:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=357)** If we don't, our tests are just going to get more messy over time which makes them harder to run, harder to maintain, and really just harder to do everything with them.
>
> **[6:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=366)** So in our next chapter, we're going to dive into some more advanced concepts and get to even more refactorings.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), function (8), pass (2), for. (2), throw (2)
> **CLI Commands:** make (3), php (1), find (1)
> **Cross-References:** go back to (3), next chapter (1)
> **Code Identifiers:** myrepositorywilllistmeasastargazer (1), myrepositorywillnotlistmeasastargazer (1), isastargazer (1)
> **Tools:** command line (2), github (1)
> **Env Vars:** api (1), php (1)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)


### 4. Advanced API Testing in Practice

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Writing to the API
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=0)** - [Instructor] If you've been following along in this course so far, we start from the bare bones simple test of two plus two equals four.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=6)** We started making read-only requests to our API and then we changed something in our system.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=11)** But even then, we've been playing it safe by just starring and unstarring our repository.
>
> **[0:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=16)** Let's do something a little riskier.
>
> **[0:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=18)** Let's create a repository.
>
> **[0:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=20)** Actually, let me take that back a second.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=22)** Creating a repository isn't all that risky.
>
> **[0:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=25)** In fact, if you stop and think about it, if you try to create a repository that exists, we get an error.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=31)** The scary part is cleaning up the repository after.
>
> **[0:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=34)** Any time we get something that includes an automated delete, we should get a little nervous.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=39)** It could be a little scary.
>
> **[0:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=40)** So we're going to build some safeguards throughout our process, but we're going to start with a bare simple, create a repository.
>
> **[0:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=47)** So let's go back to our editor.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=49)** Here's the feature description that we're going to use.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=51)** Given I'm an authenticated user, when I create a repository called something-cool and I request a list of repositories, then the results should include a repository named something-cool.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=62)** Pretty simple and straightforward.
>
> **[1:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=65)** Now let's go to the command line and see this in action.
>
> **[1:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=71)** We run the exact same command that we've run a number of times.
>
> **[1:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=74)** And by the way, if you get an error that says resource non-accessible by personal access token, go back to the first lesson, the previous chapter to get your GitHub access token set up correctly.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=85)** So just as before, Bhat detected that this function didn't exist and generated a template for us.
>
> **[1:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=90)** Now, this is a little bit different though.
>
> **[1:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=92)** Notice up here, it stopped on the second line, it acknowledged these two, but then it skipped them and then down below, it only generated one new function.
>
> **[1:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=104)** That's because because of our previous tests, we already have that.
>
> **[1:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=107)** That's one of the great things about BDD or Bhat specifically.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=112)** We don't have to re-implement functions if we've run into them before.
>
> **[1:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=115)** So if we use this iterative process of building one step at a time, it turns out this works really well 'cause then we only have to build one step at a time.
>
> **[2:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=125)** It's a great place to be.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=126)** So let's copy and paste this into our editor and get started.
>
> **[2:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=131)** So we'll go ahead and drop this back into our feature context, which we've been working in all along.
>
> **[2:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=136)** And let's just put this near the bottom.
>
> **[2:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=139)** And yes, we'll work on another refactoring in just a moment.
>
> **[2:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=143)** So we'll put this here and then we'll go ahead and create a function to back it up.
>
> **[2:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=149)** In this case, we fill in the function like this.
>
> **[2:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=152)** We say we use the client that we've been using all along.
>
> **[2:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=158)** We hit the repo endpoint of the API and then we want to create a new repository.
>
> **[2:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=166)** So in this case, we'll say arg1 and we'll say this is the repo description.
>
> **[2:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=177)** Then we want to provide a sample URL.
>
> **[2:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=178)** So we'll say [http://linkedin.com](http://linkedin.com).
>
> **[3:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=187)** We need one parameter of true.
>
> **[3:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=191)** All right, so now we've done the bare minimum to make this pass but you may notice we don't actually know if this worked or not until later on if we see if it existed.
>
> **[3:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=199)** So let's add one more aspect just as we did a few lessons ago.
>
> **[3:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=203)** Let's get the status code and make sure that the command we ran actually worked.
>
> **[3:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=210)** So we'll still use the client.
>
> **[3:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=213)** We'll get the last response just as we did previously and then we'll get the status code from this.
>
> **[3:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=220)** Now, previously we were looking for status code 200, which is 200 OK.
>
> **[3:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=224)** And this time, we're creating something.
>
> **[3:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=226)** So our API will instead give us a status code of 201, which literally means status code created.
>
> **[3:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=237)** So we'll throw a new exception if we don't get this back.
>
> **[4:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=244)** We'll say, expected a 201 status code but got statusCode instead.
>
> **[4:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=257)** Let's go ahead and close off that line.
>
> **[4:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=258)** Now let's go back to the command line.
>
> **[4:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=260)** If everything worked well, it'll be a great day and we'll see this work for the first time.
>
> **[4:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=267)** So back in the command line, we run the command that we've run many times at this point and it worked.
>
> **[4:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=275)** Well, we think it worked.
>
> **[4:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=276)** Let's double check.
>
> **[4:37](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=277)** So let's go ahead and go back to GitHub and see if this worked as what we expected.
>
> **[4:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=281)** So go to GitHub and look at this.
>
> **[4:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=285)** I've got a brand new repository here that works.
>
> **[4:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=292)** In fact, if we go to our repository list, you can see this was updated now.
>
> **[4:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=296)** So this is a brand new repository.
>
> **[4:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=298)** It just got created.
>
> **[4:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=299)** Now let's do something special.
>
> **[5:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=304)** Let's go back to the command line and see what happens next time we run it.
>
> **[5:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=314)** Ooh, now we have a problem.
>
> **[5:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=317)** So if we look at this, this errored out because the name already exists on this account.
>
> **[5:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=323)** So we tried to create the repository, and sure enough, the repository already existed.
>
> **[5:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=327)** So now our test failed.
>
> **[5:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=329)** So in order to run this test again, we would have to manually go in and delete this from GitHub.
>
> **[5:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=335)** While that's a safe approach to testing, it's really annoying.
>
> **[5:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=338)** No one wants to have to go manually delete something every single time they run their test because the quick thing is they'll just stop running their tests.
>
> **[5:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=346)** So let's add one more step in our next test to make sure that we clean up after ourselves.
>
> **[5:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=351)** Like I said, it starts to get a little bit scary when we delete things but don't worry, we'll put some safeguards in place.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), delete (4), function (4), this. (3), case, (2)
> **Tools:** command line (4), github (4)
> **Env Vars:** api (3), bdd (1), url (1)
> **Cross-References:** go back to (4), previous chapter (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2)
> **Code Identifiers:** statuscode (1)

#### Establishing a system state for tests
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=0)** - [Instructor] In the last lesson, we not only changed the underlying state of the system, or specifically our GitHub account but we left our system in a state where running the test again will fail unless we manually go in and delete the repository ourselves.
>
> **[0:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=13)** That's no good.
>
> **[0:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=15)** If we can't run our test quickly and easily without manual steps in between we're definitely going to have problems.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=21)** So let's take that same feature description and tweak it a little bit for another one.
>
> **[0:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=27)** So instead of just saying create a repository let's delete a repository.
>
> **[0:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=32)** So our story here is I want to delete a repository give an IAM authenticated user and I request a list of my repositories, and the results should include a repository named "something cool".
>
> **[0:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=44)** When I delete a repository called "something cool" and I request a list of my repositories, then the results should not include a repository named "something cool".
>
> **[0:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=54)** That's a mouthful.
>
> **[0:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=55)** Couple things I want to pull your attention to though.
>
> **[0:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=58)** First of all, we're deleting our repository by name.
>
> **[1:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=63)** Never, ever, ever delete something on a loop unless you intend to.
>
> **[1:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=68)** Since we're deleting something by name even if we do something catastrophically bad we're not going to cause catastrophic damage to our system.
>
> **[1:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=76)** We're not going to delete every single repository we have.
>
> **[1:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=79)** Always, always, always delete things by name.
>
> **[1:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=82)** ID, some unique identifier, not star not everything, that's asking for trouble.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=89)** One other thing that's important is we request a new list of repositories, in terms of our implementation.
>
> **[1:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=96)** When we get this list of repositories up above we snapshot that and we hold that in memory.
>
> **[1:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=100)** So we have to refresh that and get a new list.
>
> **[1:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=102)** It's an important thing to do.
>
> **[1:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=104)** And finally, notice that this line of then the results should not include a repository name "Something cool", is the exact opposite of this line.
>
> **[1:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=114)** From an earlier lesson we saw what we can do when we're dealing with exact opposites of one another.
>
> **[1:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=119)** It's a great place for some refactoring.
>
> **[2:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=121)** So that let's go ahead and go to the command line and see what we get.
>
> **[2:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=125)** We go to the command line.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=126)** We should be able to run our bhat program just like we have before.
>
> **[2:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=130)** And if all is going well, we should air on one.
>
> **[2:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=134)** There we go, and we get a skip on the other.
>
> **[2:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=137)** So first of all, we're getting an error on this creator repository test because as it says here, the name already exists.
>
> **[2:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=144)** So this is the same state we left our test in last time around, and now we have some new capabilities here that we need to implement.
>
> **[2:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=153)** So let's go ahead and generate those functions and then go back and fill them in.
>
> **[2:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=159)** So we copy and paste this into our editor.
>
> **[2:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=167)** So just like before we need to start implementing this delete capabilities.
>
> **[2:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=171)** And luckily delete is just the opposite of create.
>
> **[2:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=176)** So let's go ahead and grab this function here and we'll put it right here.
>
> **[3:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=185)** So we'll copy and paste this into our function.
>
> **[3:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=189)** Now instead of using the create function call, we use remove.
>
> **[3:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=199)** We also need this parameter, or sorry this function actually takes two parameters.
>
> **[3:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=205)** So GitHub user and the name of the repository itself.
>
> **[3:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=210)** So we need to get our GitHub user function.
>
> **[3:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=214)** We've got that in a variety of different places here.
>
> **[3:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=218)** So let's go ahead and grab that.
>
> **[3:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=219)** We'll pull it down here.
>
> **[3:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=225)** Now here's an important thing.
>
> **[3:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=227)** Previously when we were creating a new repository we got back a 201 created response code.
>
> **[3:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=232)** When we're deleting a repository we don't get back a 201 created.
>
> **[3:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=236)** We get back a 204, no content.
>
> **[3:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=239)** So let's go ahead and make sure we update this error message.
>
> **[4:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=243)** And now we need to implement the results should not include a repository named whatever.
>
> **[4:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=250)** We should be able to go back up and find where we have that repository check.
>
> **[4:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=254)** Looking for a specific named repository.
>
> **[4:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=257)** So let's go to up above.
>
> **[4:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=265)** Here we go.
>
> **[4:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=266)** This is, "the results should include a repository named whatever our argument is".
>
> **[4:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=270)** So let's just copy and paste this again.
>
> **[4:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=275)** Copy and paste this.
>
> **[4:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=276)** We'll bring it back down over here.
>
> **[4:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=281)** And now remember, if we do find a match we want to throw the exception.
>
> **[4:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=287)** If we don't find a match, we want it to be okay.
>
> **[4:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=290)** So we'll go ahead and do that, return true.
>
> **[4:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=294)** And let's make sure our error message still makes sense.
>
> **[4:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=296)** Expected not to find a repository called ARG one but it does exist.
>
> **[5:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=305)** So now we've built the inverse of the previous function we had before.
>
> **[5:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=307)** And if everything checks out, we can run this on the command line and we'll see what happens.
>
> **[5:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=314)** We run our command just like we did before.
>
> **[5:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=316)** Our create should still air because we haven't deleted it yet.
>
> **[5:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=320)** And our delete, it appears to have worked.
>
> **[5:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=323)** Now let's make sure this actually did work.
>
> **[5:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=326)** If we run it again now our create should work the second time.
>
> **[5:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=331)** So let's go ahead and try that.
>
> **[5:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=334)** The tests are running exactly as we expect them before create, weren't and delete weren't.
>
> **[5:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=340)** So now let's go to back to our browser to GitHub and see if our repository's still there.
>
> **[5:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=346)** This looks like it's here, but if we refresh, it's gone.
>
> **[5:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=352)** So now since we know our create work before now we know our delete work.
>
> **[5:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=356)** So now every time we run these tests we're leaving the system in a nice, repeatable, reusable state.
>
> **[6:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=361)** We don't have to manually do anything in between.
>
> **[6:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=365)** Now let's go back to our editor for one quick moment.
>
> **[6:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=368)** And now again, we're starting to get some duplicate code.
>
> **[6:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=371)** There are numerous places we could do some refactoring.
>
> **[6:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=373)** So let's focus on one in particular.
>
> **[6:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=376)** Let's clean up the "the results should not include repository named".
>
> **[6:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=381)** That's a mouthful.
>
> **[6:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=381)** That's a ugly mess right now.
>
> **[6:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=384)** So let's clean that up a little bit.
>
> **[6:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=386)** I'd recommend a new method, have that one called Repository Exists that takes two input parameters.
>
> **[6:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=393)** I'll leave it to you to figure out the rest of the details.
>
> **[6:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=395)** If you need inspiration, check out our previous is a Stargazer method for a little bit of detail and some thought process around that.
>
> **[6:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=402)** And when you're ready, check out the next lesson so we can talk about the solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), delete (12), function (6), finally, (1), this. (1)
> **CLI Commands:** find (4), make (3)
> **Tools:** github (4), command line (3)
> **UI Navigation:** go to (3)
> **Env Vars:** iam (1), arg (1)
> **Cross-References:** in the last (1), go back to (1)
> **Analogies:** just like (2)
> **Definitions:** is a  (1)

#### Solution: Validating system state
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=0)** - [Instructor] In our previous lesson, we added a test to safely delete our target repository and only our target repository.
>
> **[0:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=7)** But we realized we are duplicating a lot of code again, so I laid out a challenge.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=11)** The challenge was implement a repository exist method with two input parameters that we could refactor into.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=17)** So let's look at a solution here.
>
> **[0:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=20)** I'll go ahead and lay this out live.
>
> **[0:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=23)** We'll have a protected function, repository exists.
>
> **[0:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=30)** In this case, let's have the first input parameter be the repository array, and then the repo name.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=39)** So effectively what we're doing is we're saying, let's pass in a set of repositories that we'll look through and find a repo name to match.
>
> **[0:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=49)** So now let's build a new repositories array and we'll use the array column function that we used before.
>
> **[0:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=57)** So we'll call this repo arrays, we'll pull out the name of that array, and we'll pull out the name into the value.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=67)** So we have name-value pairs going into this new array of the actual name of the containing arrays.
>
> **[1:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=72)** It's a little bit of a mouthful, don't worry about it.
>
> **[1:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=74)** We'll get to it in just a second.
>
> **[1:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=76)** Now, we'll return is set and we'll look in our new array and say, do we have an array named "repo array?"
>
> **[1:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=87)** Oh, "repo name," excuse me.
>
> **[1:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=91)** All right, there we go.
>
> **[1:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=92)** If you are looking closely, you notice this is very similar to our is stargazer method.
>
> **[1:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=98)** Now we need to go back and actually use this.
>
> **[1:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=100)** So, let's go ahead and clean this up a little bit.
>
> **[1:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=106)** Let's say, if this, and we'll say repository exists, we'll feed in two parameters.
>
> **[1:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=117)** First, we'll feed in the results that we were using before and we'll feed in our "arg."
>
> **[2:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=123)** So that's the actual array we're looking for.
>
> **[2:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=127)** We'll go ahead and make sure we've got some curly braces there and we'll drop this into the body of that method
>
> **[2:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=139)** and we can delete the rest of this function.
>
> **[2:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=143)** And now we'll do the exact same thing for the results, should include a repository named function.
>
> **[2:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=149)** It's a little bit of a mouthful, because, well we're doing very complex things at this point.
>
> **[2:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=153)** So let's go ahead and copy and paste this and now we'll find the results should include, all right, there we go.
>
> **[2:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=168)** Now remember, we need to flip this around, because if it doesn't include, if it doesn't exist; that's what we're checking for, remember.
>
> **[2:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=175)** If this doesn't exist, we need to go ahead and throw this error message, so we fill that in.
>
> **[3:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=184)** And now we can delete this and we'll go back to our command line and make sure that these tests still pass as expected.
>
> **[3:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=194)** We run our vendor behat.
>
> **[3:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=198)** And if all goes well, everything passes as it did before.
>
> **[3:23](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=203)** Now, there are a couple other ways we could approach this one.
>
> **[3:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=206)** Going back to our editor, let's go back to the method itself, here.
>
> **[3:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=223)** All right, so here's our repository exists.
>
> **[3:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=225)** There are a couple other ways we could approach this one.
>
> **[3:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=227)** First glance, we may want to have this repository exist method retrieve a list of repositories itself.
>
> **[3:53](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=233)** That might work, except now, we have to pass in the context for searching or retrieving that list.
>
> **[3:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=238)** That could be as simple as a repository name, if we assume the repository is on our account, but that's a big assumption.
>
> **[4:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=244)** It turns out that passing in the array is an easy, flexible approach, for now.
>
> **[4:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=249)** We might be proven wrong later, and that's perfectly fine.
>
> **[4:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=252)** Now, there are other numerous places we may want to refactor right now.
>
> **[4:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=256)** For example, every place we have the word "me" or "mine," or method names.
>
> **[4:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=260)** Odds are you want to replace those with a more generic user you can specify in a feature description.
>
> **[4:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=265)** Wait, don't refactor those.
>
> **[4:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=267)** It's important to remember that as you build these tests and use the API, you can only act as yourself.
>
> **[4:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=273)** After all, your GitHub token is tied to your account.
>
> **[4:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=276)** If you abstract out the user, it may make the function more reusable for other tests, or it may just require you to pass in more information for each of those tests.
>
> **[4:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=285)** So in the next lesson, we'll address one more place where we can do some quick refactoring, almost for free.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), function (5), pass (4), delete (3), include, (2)
> **CLI Commands:** make (3), find (2)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** command line (1), github (1)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** api (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Handling response codes
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=0)** - [Instructor] If you follow along so far, we now have a bunch of methods with some similar code for checking response codes.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=6)** While we could leave these checks in place, it's starting to feel kind of messy and just asking for trouble if we have to make changes or update things later on.
>
> **[0:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=15)** So let's dive into one approach for doing this.
>
> **[0:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=19)** Let's create another protected function, and we'll call this simply checkResponseCode.
>
> **[0:28](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=28)** And we'll specify one field incoming of expected.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=33)** And now we have to think about how we've been getting the response codes a date.
>
> **[0:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=38)** So we'll say statusCode equals this.
>
> **[0:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=43)** We'll get the client that we've been using.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=45)** We'll get the last response, and then we'll get the status code from that.
>
> **[0:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=54)** Now let's make this real simple.
>
> **[0:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=55)** So let's say assert expected equals statusCode.
>
> **[1:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=66)** And, if that's not true, that means we have an error.
>
> **[1:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=69)** So let's go ahead and come up with a very simple error message of Expected, the expected, status code but we got statusCode instead.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=85)** Quick, sweet, simple to the point.
>
> **[1:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=87)** Not a whole lot of complexity here, but now we need to go ahead and we need to embed this throughout the functions that we've used before to make use of this refactoring.
>
> **[1:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=96)** So let's go ahead and we'll say checkResponseCode, and let's go ahead and scroll up.
>
> **[1:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=101)** We could do this the easy way.
>
> **[1:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=102)** Oh, here's one right here.
>
> **[1:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=105)** So let's say this checkResponseCode and the only parameter it takes is the expected response code.
>
> **[1:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=115)** So now we can simply delete all that.
>
> **[1:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=119)** And, even better, we don't need to get the status code up front.
>
> **[2:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=122)** We're doing that in the function itself, so we can delete that line too.
>
> **[2:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=126)** Now, we could do the same refactoring in other places, so we can get rid of this one where we expected a 201.
>
> **[2:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=135)** We can delete this place we are expecting at 201 and just put 201 here.
>
> **[2:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=141)** There's a few more places we can do this.
>
> **[2:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=147)** Let's see here's another one where we're expecting a 200, so let's go ahead and say 200.
>
> **[2:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=158)** And I think, yeah, here's one more.
>
> **[2:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=161)** We're pretty close to the end of this.
>
> **[2:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=163)** Let's make sure we are expecting the 200 again.
>
> **[2:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=169)** All right, and that should be it.
>
> **[2:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=170)** So now, if we've done this correctly, we can go back to the command line, run our test, and make sure everything works as before.
>
> **[2:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=177)** So let's test that.
>
> **[3:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=182)** All right, we run our tests, and it looks like things are working pretty well so far.
>
> **[3:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=189)** Hey, that's a good sign.
>
> **[3:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=190)** We didn't break anything, or at least we didn't break anything that we found so far.
>
> **[3:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=193)** This is always one of the fun things about testing and refactoring.
>
> **[3:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=196)** As long as we have good tests, we can have a lot of confidence as we build or refactor things because we know if it worked before and we make a change, it should work after.
>
> **[3:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=206)** Unless we made a breaking change, then we have another problem.
>
> **[3:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=209)** But now we have one other capability in hands.
>
> **[3:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=211)** Let's go back to our editor and look and check and see what we can do.
>
> **[3:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=216)** So now we have all these other places.
>
> **[3:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=218)** This, for example, I request a list of issues.
>
> **[3:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=221)** Now, previously we weren't doing any checks around this.
>
> **[3:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=224)** We could go ahead and add this check response code 200 to that almost for free.
>
> **[3:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=229)** Now we could just drop that in wherever we need it, and we could apply this check in just about everywhere, quickly, simply, easily, without a whole lot of thought.
>
> **[3:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=237)** And, in fact, we could do other refactorings here.
>
> **[3:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=239)** I'm not going to go through all of them, but here, this if could just be replaced by an assert.
>
> **[4:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=245)** Think of all the things we could do.
>
> **[4:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=247)** Look for opportunities to refactor your code and clean things up because not only is it easier to maintain when it's nice and clean and predictable, but it's also easier to update, easier to extend.
>
> **[4:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=259)** And generally your tests, when they're easier to maintain, extend, and update, people are going to keep them up to date.
>
> **[4:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=265)** And, with that, let's go ahead and dive into how we extend and expand our testing with other external libraries.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), this. (5), delete (3), function (2), assert (2)
> **CLI Commands:** make (6)
> **Code Identifiers:** checkresponsecode (3), statuscode (3)
> **Cross-References:** go back to (2)
> **Tools:** command line (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using extensions
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=0)** - Now that we understand the basics of Behat, there are a ton of directions we can go.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=4)** If we want to stay with Behat within the PHP ecosystem, we can use extensions to build arrays and loop through requests and compare collections of data coming back.
>
> **[0:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=14)** It's probably something we'd only want to use for batch operations, but it's useful nonetheless.
>
> **[0:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=18)** On the extension side, we can go both internally and externally.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=22)** On the internal side, we can tightly integrate with the PHP frameworks we're using, while on the external side, we can extend to use specific websites and APIs more easily.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=31)** Check out their GitHub page for more details and projects.
>
> **[0:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=34)** But more importantly, while we've been using Behat, remember that underneath those tools, we're using Gherkin to do behavioral testing of the API.
>
> **[0:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=42)** Gherkin is supported in numerous languages and use cases, so you can use it internally, like for unit testing, or externally, as we've done.
>
> **[0:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=50)** One of the most powerful areas are the JavaScript extensions that test our UI.
>
> **[0:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=54)** Just like we pulled individual fields out of our JSON payloads, you can use those extensions to retrieve individual elements out of your HTML DOM.
>
> **[1:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=62)** If you can describe an activity in specific, concrete steps, you can probably test it.
>
> **[1:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=68)** When in doubt, check out Cucumber in GitHub for more ideas, tools, and capabilities.
>
> **[1:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=72)** One of my favorite use cases for Gherkin isn't even additional testing, but using it to generate SDKs or libraries for APIs.
>
> **[1:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=80)** In this course, we use PHP with the GitHub SDK, but imagine we didn't have that library.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=85)** What would we have done?
>
> **[1:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=87)** Turns out, we don't have to guess.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=89)** We can take our existing feature files and bring them to another language, Ruby, Python, or Java, and see what capabilities our libraries wouldn't have to support.
>
> **[1:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=98)** We'd run the test command, see which of our methods failed, and start building them step by step, just as we've done so far.
>
> **[1:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=104)** As we build the underlying logic and start extracting out common methods and reuse them, that starts looking like an SDK.
>
> **[1:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=111)** It's not a perfect process, but a way to start thinking about the design and overall implementations of your SDKs.
>
> **[1:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=118)** For bonus points, include your Gherkin test in your documentation to show people common use cases.
>
> **[2:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=123)** After all, it's easy for people to run them and confirm everything is working.

> [!info]- Semantic Content
>
> **Env Vars:** php (3), sdk (2), api (1), json (1), html (1)
> **CLI Commands:** php (3), ruby (1), python (1)
> **Tools:** github (3)
> **Analogies:** just like (1), imagine (1)
> **Speakers:** - now (1)

#### Starting with GraphQL testing
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=0)** - [Instructor] So far in this course, we've tested pretty straightforward REST-style patterns.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=4)** These are great and will take us a long way with most APIs, but there's another pattern that we need to tackle, GraphQL.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=11)** Now, personally, I'm not a fan of GraphQL because while it gives us full data structures with fewer requests, all of which are great, by the way, it also gives us a variable response format all coming from a single endpoint.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=22)** Specifically, that means that every request goes to the same URL, but the response data structure will be variable based on the request parameters we gave it.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=31)** In short, that means extreme variability, which is not fun to test.
>
> **[0:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=35)** Before our simple test, let's make sure we can make an authenticated request via the GraphQL endpoint, get a list of repositories, and then validate them.
>
> **[0:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=43)** Conceptually, we're going to follow similar steps as we did as an earlier video, so we can focus on just the execution part.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=51)** First, we'll go ahead and copy from Session 3.2 and make one tweak.
>
> **[0:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=55)** For the When line, we'll specify using the GraphQL endpoint.
>
> **[0:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=59)** It's not ideal, but we're going to try to be explicit here.
>
> **[1:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=63)** Now, when we run it, just as before, it generates a new template function for us.
>
> **[1:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=82)** Now, over in our IDE, we have to write the function, but the cool thing is with Visual Studio and a properly configured B hat library, it's going to handle some pieces for us.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=99)** In our IDE, we now need to write the function, but the cool thing is that with Visual Studio and our GitHub PHP library loaded, it suggests the function content for us.
>
> **[1:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=109)** Pretty cool, except for one tweak.
>
> **[1:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=110)** In mine, I had to change the query function to execute.
>
> **[1:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=116)** At first glance, this seems like enough, but it's not.
>
> **[1:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=118)** To see this in action, let's go ahead and go and run it.
>
> **[2:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=122)** (keyboard clacking) When we come over here and run it just as we did before, let's see what happens.
>
> **[2:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=128)** Sure enough, we do get an error.
>
> **[2:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=129)** In this case, there's a deprecated function.
>
> **[2:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=131)** That's not a big deal, but one of the things you might see is that the data structure coming back from our query is not the same data structure that we were expecting.
>
> **[2:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=140)** If we look back at our feature, you could see that we used the exact same structure that we did before, so remember, that structure's expecting a particular data format, and this request may not generate the same thing, so we need to be prepared to transform this to make sure they match.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (3), case, (1), match. (1)
> **CLI Commands:** make (4), php (1)
> **Env Vars:** ide (2), rest (1), url (1), php (1)
> **Tools:** visual studio (2), github (1)
> **Versions:** 3.2 (1)
> **Exercise Files:** template (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Testing GraphQL mutations
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=0)** - [Speaker] Now that we know we can retrieve data, let's make sure we can modify it.
>
> **[0:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=4)** In the GraphQL world, these are called mutations.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=6)** We retrieve an object, modify it in some way, and then we write it back to our API.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=11)** For the GitHub API to form a mutation, we have to specify three things.
>
> **[0:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=15)** First, the mutation name.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=17)** Think of this as a function name that describes the operation you are planning to perform.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=21)** Then you give it the input object, which is a list of all the input fields that you plan to modify.
>
> **[0:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=26)** Finally, the payload object or what you expect as a response.
>
> **[0:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=30)** Since before we start a repository via the rest API, let's do it again, but in GraphQL.
>
> **[0:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=36)** Once again, we start by copying the feature file from the earlier lesson that we had last time around.
>
> **[0:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=41)** But this time, we explicitly tell it to use the GraphQL endpoint.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=45)** Just as before, when we run it, we can generate a stub function just for us.
>
> **[1:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=60)** So we can go ahead and we can grab this from the command line itself, and then we'll go over to our editor.
>
> **[1:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=69)** And once again, with Visual Studio code in our GitHub PHP library loaded, it suggests the function content for us.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=77)** We just hit the little check box here and it goes ahead and accepts everything.
>
> **[1:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=82)** But again, one change I had to make, star repository is not the function name specified in the GraphQL description.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=89)** Instead, it's called add star.
>
> **[1:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=92)** And now let's go ahead and go back to the command line and run this again.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=99)** And when I run it, what happens?
>
> **[1:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=100)** It turns out we have an error for some reason.
>
> **[1:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=102)** Let's go back to the code to look really quickly, see what's going on.
>
> **[1:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=106)** In this case, this function is expecting a repository ID as an input.
>
> **[1:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=111)** If we go back to the feature itself, let's look at that, but the feature description itself is giving the repository name.
>
> **[1:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=119)** So obviously we have a mismatch here.
>
> **[2:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=121)** So before we call this mutation, we're going to have to run a query to turn that repository name into a repository ID.
>
> **[2:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=128)** I'll leave you to fill that in yourself.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (5), finally, (1), case, (1)
> **Env Vars:** api (3), php (1)
> **Tools:** github (2), visual studio (1), command line (1)
> **CLI Commands:** make (2), php (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1), we call this (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [speaker] (1)


### 5. Planning Your API Testing Strategy

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Mapping your API
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=0)** - [Instructor] So far, this entire course has been from the perspective of having an existing API with good documentation, or maybe even adding tests as we're building the API itself.
>
> **[0:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=10)** Those two scenarios are the best by far.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=12)** In fact, if you have one of those, you can skip the rest of this video and go onto the next one, and go directly to prioritizing your endpoints.
>
> **[0:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=19)** But for the rest of us, keep watching.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=22)** If you have an existing, well-documented API, or are actively building your API now, that's awesome.
>
> **[0:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=27)** But the third scenario, the third scenario comes up a little more often and is way more painful.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=33)** In this case, we have an existing, poorly documented API, which is critical to our systems, app, or even company as a whole.
>
> **[0:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=40)** Frankly, this is the worst of all worlds.
>
> **[0:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=42)** The API is critical to our business and we need it to be online and functional, but we still have to maintain it.
>
> **[0:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=48)** Even worse, we probably have to update and extend this API over time.
>
> **[0:53](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=53)** Unfortunately, after many years of building APIs, I found this is the most common situation by far.
>
> **[0:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=58)** So how do we test and verify this API?
>
> **[1:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=61)** It turns out, one step at a time.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=64)** When we start mapping our API, the goal is to understand what endpoints our API has and which are actually used.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=70)** If we have an API gateway or some sort of proxy, we should be able to see the individual URLs and potentially even see and review the parameters and payloads.
>
> **[1:18](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=78)** If we're lucky, the API uses hypermedia, and all the URLs of the API are in the payload itself, but unfortunately, that's not very common.
>
> **[1:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=86)** More likely, we're going to have to get more creative.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=89)** My favorite approach is to review the source code of our applications and see what URLs are embedded in them.
>
> **[1:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=95)** For apps that use static fixed strings, we should be able to find most of them.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=99)** For apps that construct URLs, we may have to search for the base URL or host name, and expand our search from there.
>
> **[1:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=106)** We still need to understand the request and responses, but then, we still need to understand the request and responses.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=112)** We can add a local proxy, like Charles, Squid, or ngrok, and update the application to use that URL instead of our API directly.
>
> **[2:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=120)** The proxy can then capture all the requests and responses and log them.
>
> **[2:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=124)** Now we can review the endpoints and see which ones we use, and what data they actually take in return.
>
> **[2:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=129)** Alternatively, there is some magic you can work with DNS, IP address routing, and proxies that's well beyond the scope of this course.
>
> **[2:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=136)** But getting into the flow of the API requests gives you a huge amount of power and insight.
>
> **[2:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=141)** Whichever approach you choose, once you're collecting real live information, make sure to collect production usage and use cases that are as close to the real world as possible.
>
> **[2:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=151)** Specifically, you need the URLs your apps use and the parameters and payloads that move back and forth.
>
> **[2:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=156)** You need to figure out what API endpoints your app actually cares about.
>
> **[2:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=160)** And there's a subtle final point in there.
>
> **[2:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=162)** Odds are our proxies, logging, and whatever approach we use will not get every endpoint possible from the API.
>
> **[2:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=169)** Instead, it will capture the URLs most commonly used, or the ones used by the most important capabilities, and completely miss others.
>
> **[2:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=176)** That's fine.
>
> **[2:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=178)** Frankly, I don't believe in writing tests for code that never gets used.
>
> **[3:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=181)** Now that we have our endpoints, we can move on to our next step, documentation.

> [!info]- Semantic Content
>
> **Env Vars:** api (17), url (2), dns (1)
> **Code Keywords:** case, (1), static (1), return. (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** source code (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Documenting your API
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=0)** - [Instructor] If you followed the previous video and captured real live production usage of your API, that's great.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=6)** Now we want to turn the data from those logs into actionable information.
>
> **[0:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=10)** To be successful, you need to finish the step with three items, URLs, parameters, and payloads.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=17)** The URLs are the easiest by far.
>
> **[0:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=19)** They're in your logs and may be in the source code for your apps.
>
> **[0:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=22)** Depending on your API and the apps and the complexity they support, this may be a handful of URLs or it may be dozens.
>
> **[0:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=29)** It's rare that you'll have more than that, and if you do, you probably have duplicates.
>
> **[0:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=33)** So collect and extract those patterns, and then start collapsing those.
>
> **[0:37](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=37)** Specifically, those patterns will probably look something like this.
>
> **[0:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=41)** Don't think of those separately.
>
> **[0:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=43)** Instead, think of the patterns behind them.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=45)** Those URLs probably collapse down to something like this.
>
> **[0:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=48)** Now we have the hardest step, collecting the request parameters.
>
> **[0:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=52)** On GET requests, those should be in the URL, and they're easy to find and list out.
>
> **[0:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=57)** On POST requests, those are more likely to be in the form elements or in a POST body itself.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=61)** Either way, you'll need to use the data you captured from your proxies in the last step to understand this data.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=67)** And while PUT and DELETE are possible, they're pretty uncommon.
>
> **[1:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=71)** And those parameters should be on the URL itself, occasionally in the form elements.
>
> **[1:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=75)** So if you've addressed the first two of GET and POST, you should cover those also.
>
> **[1:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=79)** Now within the data types itself and the payloads, again, we want to look for patterns, not just in the URLs, but in the parameters and the POST bodies.
>
> **[1:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=87)** And this time you need to think about those data types.
>
> **[1:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=90)** Start separating out the strings versus the integers versus the timestamps, and list them all out.
>
> **[1:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=95)** Bonus points if you have example values from your data to demonstrate with.
>
> **[1:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=100)** By the way, don't do that with sensitive data like credit card numbers, national ID numbers, and similar.
>
> **[1:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=105)** Be very sensitive and careful with that.
>
> **[1:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=107)** You shouldn't have them at all.
>
> **[1:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=108)** And finally, we have the third item we need to document, the responses.
>
> **[1:53](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=113)** We have the HTTP response codes themselves.
>
> **[1:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=116)** Most of the time those will be a simple 200, 201, 404, and a few others.
>
> **[2:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=121)** But on top of those responses, now we need to evaluate the payloads for both the structure and the data types.
>
> **[2:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=127)** And most likely, we don't care about every piece of data equally, there are some that are more important to our app and customers, and others that are effectively irrelevant.
>
> **[2:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=135)** Once we know the important ones, those are the ones we must test for.
>
> **[2:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=140)** Now that we know our URLs, the most common and important requests, and the structure and the contents of the payload, we can move on to the next step, prioritization.

> [!info]- Semantic Content
>
> **Env Vars:** post (4), api (2), url (2), put (1), delete (1)
> **API Endpoints:** post  (3), get  (2), put  (1), delete  (1)
> **Code Keywords:** this. (2), delete (1), finally, (1), for. (1)
> **Cross-References:** previous video (1), in the last (1)
> **CLI Commands:** find (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Prioritizing your endpoints
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=0)** - [Instructor] Now that you've collected your endpoints, you're probably overwhelmed.
>
> **[0:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=3)** You have so many endpoints, so many different parameters, and so many different payloads and really you don't know where to begin.
>
> **[0:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=10)** Okay, stop and take a deep breath.
>
> **[0:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=12)** The good news is that there isn't one right, single correct answer.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=17)** The bad news is there isn't also one single correct answer.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=21)** In short, the best way to test your API is to start thinking about the most important things people do with your API, the aspects that are changing regularly or what are the riskiest and most sensitive activities.
>
> **[0:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=34)** If there are three things that every customer does, build tests for those.
>
> **[0:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=39)** You want to ensure that those things work consistently with every update, release, and change.
>
> **[0:45](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=45)** Whenever possible, do what we have in this course.
>
> **[0:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=47)** Start as simple as we did and build your test step-by-step.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=51)** Try a simple request, then try a simple read request, then a read/write request, then something that changes something important.
>
> **[1:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=60)** It's not going to be perfect, but it's going to be a strong start and gives you a win at every step of the process.
>
> **[1:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=66)** Alternatively, you can prioritize by risk.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=70)** If there are specific parts of your API that are critical and must work every single time no matter what, please test it.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=77)** If your API touches money, that's a good place.
>
> **[1:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=80)** Just make sure you don't build loops that transfer funds over and over and over again.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=85)** This may be a good time to start looking into some advanced concepts like mock objects or other testing tools, and frankly, this is a great time to consider having a sandbox for your API where changes don't talk to production environments.
>
> **[1:37](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=97)** Whichever route you choose, it's going to feel a bit wrong.
>
> **[1:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=100)** You're going to see other things you want to test.
>
> **[1:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=103)** You're going to feel like you're doing it wrong, and that's entirely possible you are.
>
> **[1:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=107)** Sorry, I know that's not fun to consider, but guess what?
>
> **[1:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=110)** Some tests are better than no tests.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=112)** Incomplete tests are better than no test.
>
> **[1:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=115)** Every test you write makes your system a little bit better, a little more stable, and builds your skills and confidence.
>
> **[2:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=121)** Just keep going.
>
> **[2:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=122)** Now, let's tackle the final core concept here, structuring your tests.

> [!info]- Semantic Content
>
> **Env Vars:** api (5)
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Structuring your tests
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=0)** - [Instructor] Now that you have a bunch of tests you're going to have to think more and more about how you structure them.
>
> **[0:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=5)** Once again, I have good news and bad news for you.
>
> **[0:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=8)** The good news is there's not a single right approach.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=11)** There are numerous logical, predictable ways to structure tests.
>
> **[0:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=15)** The bad news is there's not a single right approach.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=17)** What seems logical and predictable to you may not be for the rest of your team, or even to yourself when you come back to this project in six months.
>
> **[0:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=26)** Each BDD tool is a little bit different so if you depend on the tooling, it'll vary based on your specific tool, configuration, et cetera.
>
> **[0:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=34)** While that works, I recommend a different approach.
>
> **[0:37](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=37)** Segment and structure your test based on the interfaces they use or the API itself.
>
> **[0:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=43)** I lean towards what's called the single-responsibility principle.
>
> **[0:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=46)** The single-responsibility principle, or SRP, comes from the object-oriented programming method.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=51)** It's the idea that every class covers one, and only one area of the system.
>
> **[0:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=56)** Each thing is responsible for itself and only itself.
>
> **[0:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=59)** Effectively, it prevents spaghetti code where a given class touches a bunch of unrelated things.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=64)** We need to do the same here.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=67)** For example, for restructuring the GitHub API tests from this course, I'd likely separate my tests by the endpoints they cover.
>
> **[1:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=75)** There should be one set of tests for the repository endpoint, that includes reading, writing, editing, cleanup, whatever.
>
> **[1:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=81)** There should be another set of tests for GitHub Actions and yet another for pull requests.
>
> **[1:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=87)** Alternatively, you could separate by workflows.
>
> **[1:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=90)** The workflow of submitting a pull request, reviewing it, and merging it, is one's distinct set of tests that you often do together and needs to work from end to end.
>
> **[1:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=100)** Odds are you have many areas like that in your system.
>
> **[1:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=103)** Use those, design around those.
>
> **[1:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=106)** There are probably a bunch of other divisions, but you get the point.
>
> **[1:49](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=109)** Beyond SRP, another strength of this approach is understanding which tests you may have to change as you improve or modify your endpoints.
>
> **[1:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=117)** One key thing throughout this entire process, keep running your tests, a lot.
>
> **[2:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=123)** Run them regularly and repeatedly.
>
> **[2:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=125)** Whenever you refactor, run the tests, before you close your editor for the day, run your tests, when you get back from lunch, run your tests.
>
> **[2:12](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=132)** You saw me run our test before I did anything significant, even if it was a simple task.
>
> **[2:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=137)** And then I did it immediately afterwards to confirm I hadn't broken anything.
>
> **[2:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=141)** It's almost impossible to run your tests too often.
>
> **[2:24](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=144)** When in doubt, run them again.

> [!info]- Semantic Content
>
> **Env Vars:** api (2), srp (2), bdd (1)
> **Tools:** github (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Generating your tests from OpenAPI
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=0)** - [Instructor] One of the hardest things about testing your API isn't the requests or even the payloads.
>
> **[0:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=5)** After all, both are documented, right?
>
> **[0:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=7)** No, the hardest point is the sheer number of different tests you may need.
>
> **[0:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=11)** Remember in a rest API, for every resource you could have a get, put, post and delete.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=17)** Then when you go deeper into collections, you can have filters, pagination, and even complex query structures, including numerous parameters and even different ranges for those parameters.
>
> **[0:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=26)** And even that is assuming your post is only performing one action on your resource.
>
> **[0:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=31)** When you think about a graph QL interface, we have a similar problem with all the mutations.
>
> **[0:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=35)** Either way, in order to get better coverage of our API, we need to operate with both speed and scale.
>
> **[0:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=42)** In that case, I start to lean on generative AI.
>
> **[0:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=44)** In my course creating better SDKs with Generative AI, I go into it in detail, but let's get some of the basics out of the way here.
>
> **[0:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=52)** First, telling your AI, "Generate test based on this API," isn't going to be enough.
>
> **[0:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=57)** We need to get the open API spec to do anything useful.
>
> **[1:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=60)** Then we need to teach the large language model what we want to do.
>
> **[1:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=64)** Luckily we have all these great behavior tests we've just written.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=67)** To see it in action, let's open our favorite Generative AI, in this case I'll use Claude, and give it some instructions.
>
> **[1:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=74)** So first, let's give it the open API spec doc.
>
> **[1:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=79)** First, let's give it the open API spec doc.
>
> **[1:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=82)** Then let's tell it to generate some tests.
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=93)** And while this looks like it worked, we also made a major mistake.
>
> **[1:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=96)** If we tell a generative AI to just write every test for our entire API, it's unlikely to work because it doesn't have the context and the specific use cases that we care about.
>
> **[1:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=106)** Because remember, just because we have an endpoint doesn't necessarily mean that we need to test it to make sure it works.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=112)** It may not be something we use very often.
>
> **[1:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=114)** So let's go ahead and stop this, and we'll start over.
>
> **[1:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=119)** In this case, we're still going to keep our open API spec, and let's make one change.
>
> **[2:04](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=124)** So let's generate the BDD style tests.
>
> **[2:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=135)** This time we made one major tweak.
>
> **[2:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=137)** Instead of telling it to generate every test for every endpoint of our API, we're just focusing in on one collection of endpoints, specifically the stargazers.
>
> **[2:26](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=146)** Now this is a much more manageable request, and we're more likely to get a good result.
>
> **[2:31](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=151)** But what if we could get more creative to test a specific use case we're likely see in the real world?
>
> **[2:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=155)** That's where generative AI really shines.
>
> **[2:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=158)** So once again, let's stop this, and now I'm going to copy and paste this command because it's quite a bit longer.
>
> **[2:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=168)** In this case, we'll generate the BDD style test for a workflow.
>
> **[2:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=171)** That includes forking a repository, making a commit and submitting a pull request using this open API document that describes the API endpoints.
>
> **[2:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=179)** Once again, this represents a real use case that we're likely to see.
>
> **[3:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=188)** And just as we expect, this is a much more complex set of tests, but we have a set of tests that represent a use case that represent real world usage.
>
> **[3:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=196)** I'll leave you to explore more, but this is only limited by what you can come up with.
>
> **[3:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=201)** If you'd like to explore more, definitely check out my other course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), case, (3), this, (2), delete (1), interface (1)
> **Env Vars:** api (12), bdd (2)
> **Documentation:** spec (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Refining your BDD tests
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=0)** - [Instructor] Throughout this course, you've written a bunch of given, when and then statements, and now we have a problem.
>
> **[0:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=6)** Odds are you varied them slightly over time.
>
> **[0:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=8)** Well, this is because we are being sloppy, multiple people are writing tests or we improved our practice as we went on, it doesn't matter, we're going to start having problems.
>
> **[0:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=17)** To be clear, I'm not talking about necessarily errors here.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=21)** Instead, those little variations could be as simple as this should get at least one result, and then maybe then I will get one or more results or many other possibilities.
>
> **[0:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=30)** When we read these statements, we know that they're the same, but unfortunately, our tooling generate different functions for each.
>
> **[0:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=36)** Even worse, odds are we further modified them over time, and now we have very similar functions with slightly different implementations drifting apart as we go.
>
> **[0:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=46)** So how do we clean this up?
>
> **[0:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=48)** The good news is this is one of the easiest problems we have.
>
> **[0:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=51)** If we have an example like this, we have one line difference, the fix is easy.
>
> **[0:55](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=55)** We simply update this to the version we want.
>
> **[0:59](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=59)** Unfortunately, life is never that easy.
>
> **[1:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=61)** In the real world, our variations are going to be more subtle, which makes them even more important to detect and standardize.
>
> **[1:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=68)** So here's a different one.
>
> **[1:10](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=70)** In this case, notice that the functions are completely different and most of the individual lines are completely different.
>
> **[1:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=75)** But here we have near duplication and we should standardize it.
>
> **[1:20](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=80)** So here's a quick approach.
>
> **[1:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=81)** We note that first user as a variable, so our script knows what to replace later.
>
> **[1:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=85)** Remember that we'll change the function signature in our feature context class, and then we update the second instance to match the first, and finally back in our code, we should add a check that looks something like this.
>
> **[1:37](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=97)** So we can go ahead and we can check for the myself user.
>
> **[1:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=100)** And if so, we replace the existing user with the logged in user.
>
> **[1:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=104)** A little bit different, but it works well.
>
> **[1:46](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=106)** And now we have some standardization across our tests.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), case, (1), function (1), class, (1), this. (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=0)** - [Instructor] If you made it this far in this course, congrats.
>
> **[0:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=2)** You're almost done.
>
> **[0:03](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=3)** So I'll close this out with a few tips and ideas for you to explore.
>
> **[0:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=7)** First, while this course has pushed the idea of testing your API, remember that we tested against GitHub.
>
> **[0:13](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=13)** That means you can test any API.
>
> **[0:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=15)** If your app is dependent on external APIs and most modern apps are, write tests for those.
>
> **[0:21](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=21)** After all, something is going wrong in your app, it's great to know where the problem is and isn't.
>
> **[0:27](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=27)** Next, as you write test, remember that you'll discover better ways of doing things, that's the nature of software development.
>
> **[0:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=32)** When you figure out a better approach, don't hesitate to refactor and improve your approach.
>
> **[0:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=36)** The best part of having tests is you can refactor with confidence.
>
> **[0:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=40)** Regardless, celebrate that you've learned something and apply it.
>
> **[0:44](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=44)** Next, if you'd like to learn more, we have a few great resources.
>
> **[0:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=48)** I serve as editor on a weekly newsletter covering API news, tools and development.
>
> **[0:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=52)** It comes out every Thursday morning, US time, and has since early 2014.
>
> **[0:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=56)** While I co-authored a book on API design, I'm proud to say my co-author has since gone on and published as a part of the Addison Wesley signature series along such writers of Martin Fowler and many others.
>
> **[1:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=67)** And finally, check out Nordic APIs and the Postman blog for great articles on API testing, security and best practices in general.
>
> **[1:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=75)** Finally, remember to enjoy this.
>
> **[1:17](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=77)** Every test you write is improving the overall stability of your API, that makes your system easier to use, easier to extend, gives you and your team the ability to refactor with confidence and improves your user's experience.
>
> **[1:29](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=89)** Just remember to keep building and running your tests.

> [!info]- Semantic Content
>
> **Env Vars:** api (6)
> **Code Keywords:** finally, (2), this. (1)
> **Tools:** github (1), postman (1)
> **Best Practices:** remember to (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Keith Casey]]

## Path Context

### In [[Become a RESTful API Developer]]
← [[Designing RESTful APIs]] | **4 of 5** | [[Web Security- OAuth and OpenID Connect]] →

## Appears In

- [[Become a RESTful API Developer]]

---

[↑ Back to top](#)