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
  - '[Become a RESTful API Developer](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20RESTful%20API%20Developer.md)'
prev_courses:
  - '[Designing RESTful APIs](Designing%20RESTful%20APIs.md)'
next_courses:
  - '[Web Security- OAuth and OpenID Connect](Web%20Security-%20OAuth%20and%20OpenID%20Connect.md)'
path_nav: '[{"path":"Become a RESTful API Developer","position":4,"total":5,"prev":"Designing RESTful APIs","next":"Web Security- OAuth and OpenID Connect"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/API%20Testing%20and%20Validation.md)

![API Testing and Validation](https://media.licdn.com/dms/image/v2/D560DAQEkqQwIdKXdbg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1687799290970?e=2147483647&amp;v=beta&amp;t=upDE8G-Q_voOTnLJbQSA-Sbe-OeeCZTMeGgeNh-pPF0)

# API Testing and Validation

> How do you test your API to ensure it's working as intended and solving business problems? Most API testing doesn't actually test the API. In this course, Keith Casey teaches you how to test and validate your API by using behavior-driven development, or BDD, to test APIs via their external endpoints. Keith looks at the API from the consumer’s point of view, confirming that problems experienced by 

> [LinkedIn Learning](https://www.linkedin.com/learning/api-testing-and-validation-22610641) | 1h 44m
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [Be an API testing and validation MVP](#be-an-api-testing-and-validation-mvp)
  - [What you should know](#what-you-should-know)
  - [API overview](#api-overview)
  - [Exercise files](#exercise-files)
- [**1. Behavior Testing with Cucumber and Gherkin**](#1-behavior-testing-with-cucumber-and-gherkin) (5 videos)
  - [Acceptance testing](#acceptance-testing)
  - [Explanation of Gherkin](#explanation-of-gherkin)
  - [Set up your test environment](#set-up-your-test-environment)
  - [Create your first feature description](#create-your-first-feature-description)
  - [Write your first test](#write-your-first-test)
- [**2. Build Your First API Test**](#2-build-your-first-api-test) (3 videos)
  - [Make your first request](#make-your-first-request)
  - [Introduce variables in requests](#introduce-variables-in-requests)
  - [Validate responses](#validate-responses)
- [**3. Handling Authentication in API Testing**](#3-handling-authentication-in-api-testing) (5 videos)
  - [Expand your testing environment](#expand-your-testing-environment)
  - [Making an authenticated request](#making-an-authenticated-request)
  - [Changing your API and target via your requests](#changing-your-api-and-target-via-your-requests)
  - [Validate responses](#validate-responses)
  - [Refactor the tests](#refactor-the-tests)
- [**4. Advanced API Testing in Practice**](#4-advanced-api-testing-in-practice) (7 videos)
  - [Writing to the API](#writing-to-the-api)
  - [Establishing a system state for tests](#establishing-a-system-state-for-tests)
  - [Solution: Validating system state](#solution-validating-system-state)
  - [Handling response codes](#handling-response-codes)
  - [Using extensions](#using-extensions)
  - [Starting with GraphQL testing](#starting-with-graphql-testing)
  - [Testing GraphQL mutations](#testing-graphql-mutations)
- [**5. Planning Your API Testing Strategy**](#5-planning-your-api-testing-strategy) (6 videos)
  - [Mapping your API](#mapping-your-api)
  - [Documenting your API](#documenting-your-api)
  - [Prioritizing your endpoints](#prioritizing-your-endpoints)
  - [Structuring your tests](#structuring-your-tests)
  - [Generating your tests from OpenAPI](#generating-your-tests-from-openapi)
  - [Refining your BDD tests](#refining-your-bdd-tests)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Be an API testing and validation MVP](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/be-an-api-testing-and-validation-mvp?u=76281980&t=0)** - Most people test their APIs by clicking around or making a few requests via Postman and calling it done. At best, it's inefficient. At worst, it's completely worthless. In this course, I'll teach you how to use behavior-driven development or BDD to test your APIs via their external endpoints. Even better, this doesn't require us to know anything about the API's internals. Hi, I'm Keith Casey, the API problem solver. I've solved a lot of API problems over the years but the hardest is uncertainty. Is my API working? Is my API working the same as yesterday? Join me to see how we can learn, explore, and prove that our APIs are working exactly as we expect today, tomorrow, and continuously.

> [!info]- Semantic Content
>
> **Env Vars:** api (5), bdd (1)
> **Tools:** postman (1)
> **Speakers:** - most (1)

#### [What you should know](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=0)** - [Instructor] In this course, you'll need just a few tools and concepts. On the concept side, you'll need to know how to get to your command line and how to run commands, move around in directories, and potentially copy or move files. Then you'll need to know the basic mechanics of HTTP requests and responses. You don't need to be extremely deep in any of those, but you need to be past a hello world level of understanding. If you do want to get deep into API design, check out my course on that. On the tooling side, you'll need a [GitHub](../../Skills/Software%20Development/GitHub.md) account. Not only will you need to have some basic vocabulary around repositories, but will generate access [Tokens](../../Skills/Web%20Development/Tokens.md) and use them constantly. Then you'll want an IDE or some other way to keep your code organized. I use Sublime Text throughout this course. It has a generous free version, but VS Code, JetBrains, and many others are fine too. In this course, the most useful part will be the code completion and syntax error highlighting, but most can integrate with your testing tools. Check that out when you get a chance. Next, I'd recommend an HTTP request tool like Postman or Insomnia. We won't use them in this course, but if you get stuck or want to see the details of how something works, it's great to be able to open those up and explore. Next, you'll need a development environment. In this course, we'll be using [PHP](../../Skills/Software%20Development/PHP.md) 8.2, so all the code, examples, and explanation target that. Alternatively, the Gherkin Syntax which we'll talk about in a moment, that tooling supports any modern language, so you can dig in with your language of choice if you prefer. Finally, you need Gherkin or a BDD framework for your language of choice. In PHP, we're going to use Behat 3.12, which we'll set up through Composer.
>
> **[1:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/what-you-should-know?u=76281980&t=95)** The install instructions are already in the course and in the Read me, so you don't have to figure that out yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Tokens](../../Skills/Web%20Development/Tokens.md) (1)
> **Prerequisites:** you'll need (5), you need to have (1), set up (1), install (1)
> **Env Vars:** http (2), php (2), api (1), ide (1), bdd (1)
> **Tools:** command line (1), github (1), sublime (1), vs code (1), postman (1)
> **CLI Commands:** php (2), composer (1)
> **Versions:** php 8 (1), 3.12 (1)
> **Speakers:** - [instructor] (1)

#### [API overview](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/api-overview?u=76281980&t=0)** - [Instructor] The [GitHub](../../Skills/Software%20Development/GitHub.md) API is our testing target for this course. Their API isn't perfect. There really isn't a perfect one, so don't worry about that. It is pretty great though. The power of this API is that our personal repositories gives us space to work and play with no side effects or impact on other users. It's also publicly available, free to use, and you're likely already familiar with GitHub, so we can focus on our efforts on the API and the test instead of explaining what a repository is. If you're not familiar with GitHub at all, I suggest you check out one of the introductory courses but a basic understanding is sufficient. The goal of this course will be to build out a series of API tests step-by-step using an API endpoint and validating it worked as expected. Therefore, we're going to keep our API interactions pretty simple. We're not going to get into all the complexity or depths of this API. Instead, we're going to focus on a handful of specific tasks, authentication, repositories, and stars. And even then we'll use an SDK. There are many, many other endpoints we could use but these will demonstrate our goals. At the end of this course, I recommend you explore and play around with other endpoints and see how you apply these same concepts again. But wait until you get there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3)
> **Env Vars:** api (8), sdk (1)
> **Tools:** github (3)
> **Speakers:** - [instructor] (1)

#### [Exercise files](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=0)** - [Instructor] To get set up with the exercise files for this course we have three steps. We get the code, we run the setup, and we initialize the setup. It should only take a few minutes. First, we need to get the code. You can get the code from my repository AP testing and validation. This will always have the latest and greatest. You can either download a zip file here or open it in [GitHub](../../Skills/Software%20Development/GitHub.md) Desktop. I'll be using GitHub Desktop for this. This automatically will clone this into our working directory, so you have that. Again, it should just take a moment. Now we need to go to the command line to run our setup scripts. So go into our [API Testing](../../Skills/Software%20Development/API%20Testing.md) and validation folder and we'll go into our API testing workspace. There's also the API testing course folder. That's where all the examples for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course will be. Those are all the completed samples and code, not where we'll be working on a regular basis. So we'll go into the workspace folder and now here we need to set up Composer. If we just set up Composer like this. If you already have it installed, great. In this case, I don't have it installed so we'll go to the Composer website to go ahead and grab it. We copy and paste this command right back to the command line. And again, it should just take a moment to get set up. Now, when we run Composer.phar we say install, it'll go ahead and set up all of our dependencies for us so we don't have to do them manually. Again, it should just take a moment. Finally, we run vendor
>
> **[1:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/exercise-files?u=76281980&t=96)** bin behat to initialize our environment here. Now we can pop back to Sublime. We'll go ahead and we'll open this up in our API testing folder here. And two things I want to call your attention to. First of all, we'll be doing all of our work during this course in the API testing workspace. Everything is set up there, and in fact that behat command set up our first class for us. Now, there's also the API testing course folder. If we expand this out, we can see there's an individual file for every single code lesson that we'll be doing during this course. If you ever get stuck, if you ever want to see what the completed solution looks like, pop over to that folder, open it up, look at it. And in fact, if you configure this folder you'll be able to run the examples live. And on that note, remember, each lesson of this course builds on the previous lessons. So you can't really skip around. If you're building this out, you want to go to 1 to 2, 32, 33, 34. You cannot skip around. You'll end up with incomplete code that doesn't work and you'll end up doing a lot more work. And now that we have everything working, let's get onto the fun stuff, testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [API Testing](../../Skills/Software%20Development/API%20Testing.md) (6), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Prerequisites:** set up (7), setup (3), install (1), configure (1)
> **Env Vars:** api (6)
> **Tools:** github (2), command line (2), sublime (1)
> **CLI Commands:** composer (4)
> **UI Navigation:** go to (3)
> **Exercise Files:** exercise files (1), zip file (1)
> **Speakers:** - [instructor] (1)


### 1. Behavior Testing with Cucumber and Gherkin

[↑ Back to Table of Contents](#table-of-contents)

#### [Acceptance testing](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=0)** - [Narrator] In these lessons, we'll talk about one major concept and a tool to support that concept. On the concept side. Let's jump into acceptance testing. Acceptance testing is an approach to validate the overall behavior of the system from the customer, user, or consumer's perspective. And note that I say consumer here. In addition to customer and user, we think about APIs. Our consumer is rarely an end user. More likely it's a downstream app or integration dependent on that API. Acceptance or behavioral testing is different than [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md). In unit testing, you work with small, discrete chunks of code, usually a method or function to confirm it is working as expected. More importantly, you probably test this unit code in isolation. You don't use the end user UI to trigger it. You don't communicate across a network, you don't hit the database and most likely, you run the test on the same machine or in the same memory where your code is running. When we think of the overall behavior of the system from the user's perspective, it gets wildly more complex. You need to think of the UI, you need to think of and address network latency. You need to hit the database. What this comes down to is that acceptance testing that is testing the overall behavior of the system involves much more than just your system. There are all kinds of external components that you have to consider as you test. The easiest way to understand the distinction between unit and acceptance testing is a shopping cart. Unit testing will confirm, you can add an item to your cart while acceptance testing will confirm, you can browse items, add an item
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/acceptance-testing?u=76281980&t=93)** to your cart, review your cart, checkout and pay. Basically, can you make money with this cart? Both are useful and often used together but in this course, we're focused on acceptance or behavioral testing, not unit testing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (4)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Explanation of Gherkin](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=0)** - [Instructor] Throughout these lessons, you'll hear me talk about Gherkin. Unfortunately, I don't mean pickles. When I mention Gherkin, I mean a syntax that is used to describe the behavior of the system. When we think about what that means, there's some great and useful aspects that come out of it. Because we're talking about behavior or an external view of the system instead of an internal view, we could be language agnostic. After all, your API users don't care if you used [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), Go, or .NET behind the scenes. It's irrelevant to them. Further, as a common description language, Gherkin drives Cucumber SpecFlow, and behave, among others. Another nice thing is that it's almost human readable. That's being kind in some parts, but it's generally consistent as a common communication medium for stakeholders, developers, and testers to define software behavior in a simple and understandable manner. And as a result, you can use in a lot of places, from APIs, to your user interface, to backend processes. Unfortunately, Gherkin doesn't solve all your problems, but it's useful for defining those interaction's behaviors. If you have activities in your system that are hard to define in steps, they'll be hard to define here, so you don't get away from having good communication and well-defined interfaces and contracts throughout your system. The Gherkin syntax is based on three types of predefined keywords that fit the two categories describing a behavior and then defining it. The first, feature and scenario, those keywords are set to group or describe a behavior. The second area, the definition area,
>
> **[1:37](https://www.linkedin.com/learning/api-testing-and-validation-22610641/explanation-of-gherkin?u=76281980&t=97)** use words like given, when, and then. They define the before state, what causes the change, and the after state of the system. And the final keywords, and and but, add color and clarity to the behavior and draw some boundaries around it. When used with BDD frameworks like Cucumber, Gherkin scenarios are translating to executable code, making it easier to implement [Test Automation](../../Skills/Software%20Development/Test%20Automation.md) and ensure that the software behaves exactly as expected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Test Automation](../../Skills/Software%20Development/Test%20Automation.md) (1)
> **Env Vars:** api (1), net (1), bdd (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### [Set up your test environment](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=0)** - [Narrator] All right. Now let's get your environment set up. I'm going to start from the assumption that you have [PHP](../../Skills/Software%20Development/PHP.md) installed successfully. If not, go back and set that up before you proceed. I'm doing this on a Mac and using the free version of MAMP, that's M-A-M-P, with PHP 8.3.14 installed. As long as you have 8.3 or above, you should be in good shape. Now, make sure you have Composer installed. You can get that from [getcomposer.org](https://getcomposer.org). Now, let's start with this code specific to this course. From the command line, move into the [API Testing](../../Skills/Software%20Development/API%20Testing.md) course folder, and from there, run composer install. Your specific composer path may vary just a little bit based on your configuration, so double check yours before you just run it.
>
> **[0:54](https://www.linkedin.com/learning/api-testing-and-validation-22610641/set-up-your-test-environment-29775512?u=76281980&t=54)** Now, if you run vendor/bin/behat right now, you should get some errors, but you should also notice a couple different things. First, notice you have different colored text, light green shows information, dark green shows success, red shows errors, and blue shows things that didn't execute because they're blocked by those errors. If you see a few of each color, you're in good shape and you may have to scroll up to see some of those. It's quite possible in your configuration, you'll see an error that says "Undefined reiki [GitHub](../../Skills/Software%20Development/GitHub.md) token." That's expected at the moment. Later in the course, you'll set up the access token to populate that value. Now that we have our environment setup, let's move into the next video and build some features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (2), [API Testing](../../Skills/Software%20Development/API%20Testing.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** composer (3), php (2), make (1)
> **Prerequisites:** set up (2), make sure you have (1), install (1), setup (1)
> **Env Vars:** php (2), mamp (1), api (1)
> **Versions:** php 8 (1), 3.14 (1), 8.3 (1)
> **Cross-References:** later in (1), next video (1)
> **Tools:** command line (1), github (1)
> **URLs:** [getcomposer.org](https://getcomposer.org) (1)

#### [Create your first feature description](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=0)** - [Instructor] Our first test is going to be the simplest test we write. More than anything, we must know that our testing environment is working as expected, so we're going to test the smallest thing we possibly can. We don't want a lot of complexity or other things outside our control right now. Once we prove our environment is working, we'll add HTTP requests, [JSON](../../Skills/Web%20Development/JSON.md) responses and more later on. This is how we'll approach building tests throughout this course, one step or component at a time. Therefore, let's verify our environment is working by a simple math test of two plus two. Each test needs three separate pieces that work together. First, we have the feature we're testing. What you name it is less important than the fact that you name it. For this test, we'll call our feature: establish my environment, so we can keep it separate from everything else. Second, we need to describe our scenario. The scenario is just a readable explanation of what this test is going to prove. It doesn't affect the test itself. In this case, we'll say, I want to prove my environment is working as expected. The last part is the most important and made up of three steps: the given, the when, and the then. They set up the setup, the change, and confirm the change after the fact. To dive into this further, first we have the given. This establishes the initial conditions of our test. In this case, we'll say, given I have 2 monkeys. Two important notes about this line. First, you must start it with given, so our tools will recognize this as the context.
>
> **[1:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/create-your-first-feature-description?u=76281980&t=94)** Second, notice that I use the number 2 and not the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) two. This is because our tools are smart enough to see a number as a variable, and we'll automatically interpret that as a parameter for the code behind the scenes. Don't worry, we'll get into that code in a moment. The second step of our test is the when. When describes the action I take or the change I make. In browser testing, it might be when I click this button, but here we're going to keep it simple with when I get 2 more monkeys. Again, the structure is important. You must start it with when so we can identify the change we'll make. The third and final step of our test is describing the result which we do with a then statement. In this case, we'll use, then I should have 4 monkeys, and note again that the line must begin with then and we use a numeral instead of the word four. When we take this as a whole, this is what it looks like. Establish my environment. The scenario is, I want to prove my environment is working as expected. Given I have 2 monkeys. When I get 2 more monkeys. Then I should have 4 monkeys. Regardless of what programming language we're working in, this syntax called Gherkin will be exactly the same. So in the next video, we're going to write some code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (2), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **CLI Commands:** make (2)
> **Env Vars:** http (1), json (1)
> **Prerequisites:** set up (1), setup (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### [Write your first test](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=0)** - [Instructor] In our last video we wrote a feature description to test our environment. Now let's actually test it. Vendor, bin behat. And if it works as expected we should get a result that looks something like this. We have one scenario, which is undefined three steps that are undefined, and with this opportunity to generate a feature context down below. So we can go ahead and generate that and we can see it generates three placeholder functions for us. This resolves that undefined question we had just a moment ago. So we can go ahead and we can copy and paste this directly into our editor. We add these to the feature context file and now if all goes well, we can run that same command again on the command line and we should get a different message. This time the message was "fatal error class pending exception not found" which means behat itself is finding the methods it's supposed to, there's just nothing behind them there's no logic to fill them in and to actually execute. So let's go back to the editor and start filling that in. First, let's make a class property. So we'll make a protected variable called monkeyCount and we'll initialize that to zero. And now down below in the given I have monkeys function we'll go ahead and add that. Say this monkeyCount equals, let's make sure we cast this to an integer just to be clean about it. So now if we go back to our command line
>
> **[1:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=99)** we should see something different. We run the same command that we did before and now this time notice we have a green line and the red line is the second line. The red line is the when statement this time, because we've defined our given statement so making a little bit of progress but we have to keep going. So back in our editor we go ahead and say, "I get more monkeys." We define this. So we say this monkeyCount, and then we can add we'll cast this to an integer and we'll add arg1 to it. So we're not doing anything particularly fancy here. We're making this as simple and straightforward as possible. We're just adding this new group of monkeys to our previous group of monkeys and now we need to check to see how many monkeys we have. So we can use a [PHP](../../Skills/Software%20Development/PHP.md) function called assert and let's make sure our monkeyCount is equal to our line.
>
> **[2:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=163)** And then we should put a useful error message here. So we can say "we expected this many monkeys, but found this many".
>
> **[3:02](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=182)** And now if all goes well as we expected when we go back to the command line we should run and eventually pass this test.
>
> **[3:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/write-your-first-test?u=76281980&t=194)** And it turns out we have an error. This is a common thing in development. So instead of asset, we should say assert. It turns out your code has to be correct to run correctly. Now when we run this we can see that this all passed as expected. So we've proven from beginning to end that our environment is set up correctly it's working as predicted. And in fact, if we want to test this we can go back to our feature and we can change it. So in our feature, we can say, "given I have two monkeys when I get two more monkeys, I should have five monkeys". Now we know two plus two equals four but what happens when we actually run this test? And you can see we got a fatal error. "We expected five monkeys, but found four." So we can definitively prove and understand that this test is working as expected which means our environment is working as expected. Now let's get on and build some real API tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** make (4), php (1)
> **Code Identifiers:** monkeycount (4)
> **Cross-References:** go back to (4)
> **Tools:** command line (3)
> **Env Vars:** php (1), api (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)


### 2. Build Your First API Test

[↑ Back to Table of Contents](#table-of-contents)

#### [Make your first request](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=1)** - [Instructor] Now let's build our first API test. I promise that from now on, the bulk of this course will be spent in our editor writing code or on the command line running code. There'll be a few slides here and there, but I want you to spend time with your hands on the keyboard, not looking through slides. With that, let's actually build that first test. Each time we build out a test, we'll do three steps. First, we write the feature description, then we write the supporting code for it to pass. And finally, we refactor one or both while running the test continuously. Since we only want to confirm that we can successfully request data from [GitHub](../../Skills/Software%20Development/GitHub.md), we're going to keep this as simple as possible, skipping authentication, authorization, testing read write access, and many other things. Therefore, the easiest thing to test is to see if we can read the issues from a public repository. So our feature will be get a list of issues. Our scenario is I want to get a list of the issues for the Symfony repository. Given I am an anonymous user. Like I said, we're not dealing with authentication. When I request a list of issues for the Symfony repository from user Symfony, then I should find at least one result. The feature writeup could use a little bit of work but we'll get to that later. On the [PHP](../../Skills/Software%20Development/PHP.md) side of things we run the same command that we did before, vendor bin behat. This will generate the same sort of test that we saw before
>
> **[1:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=95)** where our first scenario, establish my environment, continues to work. But now we've got an additional set of features that have been tested. We can go ahead and hit enter and it'll generate the functions for us once again. We can copy and paste those and move to our editor. Within our editor we can go ahead and just copy and paste those, drop them right in, and now we can start implementing them. For our first one of, iAmAnAnonymousUser, we don't have to do anything. By default every user in GitHub is an anonymous user. Next up, we want to make our first request. So we can say issues equals this client issues all,
>
> **[2:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=145)** and then we can go ahead and look for the Symfony user and the Symfony repository. It'll say, this results equals issues. Now, one quick thing here. We have this creation here. We haven't previously defined that, so let's go back up and define that. From our supporting libraries we can go ahead and define that with the GitHub library. So new GitHub Client. And then let's make sure that that's included above with protected client equals null. And then we also add another parameter in here of results. So let's go ahead and make sure that we've initialized that also. So now we're moving into a known good state with everything. Now we come back here to, iShouldGetAtLeastOneResult. So in this case, we just make sure that the count of results that we grabbed up here above is the same as what we use here. Say if count of results is less than arg1,
>
> **[3:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=231)** which means it's less than what we expected, that's a problem. So we'll throw new exception. And just like before let's have an expressive error message here. So we'd say expected at least one result, but got back,
>
> **[4:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=251)** and then let's put what we actually got back. So count this results. We save this and then we go back to our command line. If all goes well here, we should be able to run this and let's see what happens. So we have a fun issue here of, this is an undefined constant of issues. This happens all the time as we're building stuff. So let's pop back to our editor for a moment.
>
> **[4:51](https://www.linkedin.com/learning/api-testing-and-validation-22610641/make-your-first-request?u=76281980&t=291)** It's a very subtle mistake, but here I use the variable issues and here I used a constant. So we drop a dollar sign here and we move back to our command line. And this time when we run we should have all green across the board. With that, we've completed our first API test and we're making live requests against the GitHub API. But there's a lot of work we can do so let's clean that up now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (5), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Tools:** github (5), command line (3)
> **CLI Commands:** make (4), find (1), php (1)
> **Env Vars:** api (3), php (1)
> **Code Identifiers:** iamananonymoususer (1), ishouldgetatleastoneresult (1)
> **Definitions:** is an  (2)
> **Cross-References:** go back to (1)
> **Analogies:** just like (1)

#### [Introduce variables in requests](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=0)** - [Instructor] When we built the test in the last video we started with this story, which weren't but had a pretty significant problem. We have a repository end user embed in the function names themselves. This makes our code fragile and not reusable. Imagine trying to check a different repository like one of our own, and we would have to write an entirely new function, that's silly and repetitive. So let's get into variables. A variable is simply something that can change. Pretty wild, huh? By the way I love frameworks that use standard definitions of words. The less time you have to spend wrapping your mind and understanding around a particular tool the more time you can spend solving your problem. In Gurkin, there are two ways to identify variables. First, numbers are already assumed to be variables. That's why we use the numeral one in our story. It was automatically passed into that function. The second way is to put double quotes around it for strings, that's your only approach, but for numbers, it's optional. I recommend that you always use quotes, though it's not required, but it'll make your stories a little more readable. With that in mind, this is how we modify the story. Notice that I made two changes to the when line. I added quotes around our important strings and I rephrase the sentence itself. I only rephrase it. So this method can coexist with the previous method. So that's not the important part. But now let's jump into the test behind the scenes on the [PHP](../../Skills/Software%20Development/PHP.md) side of things, we run our normal command And you can see this time it did stop once it hit our second
>
> **[1:38](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=98)** well technically our third test here and we generated a new missing undefined function notice. So we can go ahead and automatically generate that and we copy and paste that function back into our class just like we had before. Now, conveniently, we have this line above. We can go ahead and grab this and fill this in and then we can go ahead and we can fill in the arguments that we're getting from the function itself. We'll have to say arg2, sorry, arg1 and arg2
>
> **[2:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/introduce-variables-in-requests?u=76281980&t=134)** And then we want to make sure that we're passing this in just as we did before. So we copy and paste this down here. You can see there's very little difference between these functions. Now when we go back, we run our test again. If all goes well we should get three passes just like we had before. Now we haven't radically changed the functionality of what we're doing here, but we made it a lot more useful. So making our method a little bit more abstract is a good start, but it still isn't great. Instead of just checking for issues, what if we check to make sure the API works in the first place? After all, that's the point of this course. So now let's make one more revision to this test.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** make (4), php (1)
> **Analogies:** just like (2), imagine (1)
> **Env Vars:** php (1), api (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Validate responses](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=0)** - If you've been following along in this course so far, we've taken a simple story and added layers and tests to flesh it out, and make sure we're testing the right things in the right ways. So let's do it again. Going back to my last video, here's what we have. We have a very simple feature that's getting a list of issues from a repository. Skipping down to line 4, given I am an anonymous user, when I request issues from the "Symfony" repository from user "Symfony", then I should get at least one result. We're not going to change anything on this side this time around. Instead, let's think about what's happening behind the scenes. And the line that begins when I request a list of issues, our app is using some sort of HTTP connection, connecting to [GitHub](../../Skills/Software%20Development/GitHub.md), and requesting issues from a repository. What if we had a typo, and instead of pointing at a valid user, valid repository, we point an invalid one? As is, that line would pass, and we'd be confused why we're getting zero results on the last line. So let's make our test a little bit more robust with a simple check of our HTTP status code. If we accidentally point at the wrong repository, we'd probably get a 404. So let's focus on the happy path of 200 OK. So, moving over to our editor, we can make a couple changes here. First of all, we want to get back our status code. Say, statusCode equals, we use the same HTTP GitHub client we had before. We want to get the LastResponse. And we want to get the StatusCode itself.
>
> **[1:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=95)** And like I said, if it's anything other than a 200, we have a problem. So let's make this test very simple. If it's not equal to 200, let's throw an error.
>
> **[1:52](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses-18993807?u=76281980&t=112)** But let's be very specific with our error, and say "Expected a 200 status code but got statusCode instead!" Now, when we run this test, if all goes well, it should pass, exactly as it did before. And sure enough, it passes. But if we go back to our original story, of the feature description itself, we can make one change. We can add some garbage at the end of the string, and see what happens. And sure enough, it fails exactly where we expected it to. Now we have a safeguard earlier in our test, instead of waiting until the end. At first glance, this doesn't seem like a big deal. But now we have a very clear distinction between requesting a resource that doesn't exist, versus successfully requesting a resource with a count of zero. That level of specificity will become very important as we build more and deeper tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (2)
> **CLI Commands:** make (5)
> **Env Vars:** http (3)
> **Code Identifiers:** statuscode (2)
> **Cross-References:** go back to (1), earlier in (1)
> **Tools:** github (2)
> **Speakers:** - if (1)


### 3. Handling Authentication in API Testing

[↑ Back to Table of Contents](#table-of-contents)

#### [Expand your testing environment](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=0)** - [Instructor] If you've followed along so far you have a couple tests that show our environment works. We can make an API request and get data back and we can examine the response headers. We can mix and match those skills to accomplish quite a bit with public APIs. But in the real world, most of our APIs are going to be protected in some way. So let's talk about authentication. As a reminder, authentication is establishing who you are. There's also the related concept of authorization, establishing what you're allowed to do. We will not cover that in this course. Every API is going to expect you to authenticate yourself but many don't have any real form of authorization. If you want to explore that concept, check out my OAuth and Open ID Connect course where we can discuss those in detail. Now, back to credentials. First of all, do not embed credentials in your test. Don't embed them in your repository. Both are a bad idea. Not only do you expose them to everyone on your team or everyone who can see your repository, but now you need to update them every time their credentials change. That's a huge pain and pretty much miserable. After all that, the best way to handle credentials in your test is to pull them in from your environment. That'll keep them outside your repository but still let you use them at runtime. Now, let's try it out. On the [PHP](../../Skills/Software%20Development/PHP.md) side of things, I've included in a file called behat.dist.yml. It's available right here in your directory. Take that file and rename it to behat.yml. Just get rid of the .dist. This is where we're going to put our credential in just a moment.
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=93)** Now we need to go over to [github.com](https://github.com) to get that credential. When you visit [GitHub](../../Skills/Software%20Development/GitHub.md), I've included the link to go to in your behat.dist.yml file. But if you want to navigate it to it directly, you can go to your Profile, Settings, all the way down on the left-hand side, Developer Settings, Personal Access Token, Fine-grained [Tokens](../../Skills/Web%20Development/Tokens.md). Now, unfortunately, these permissions, these authorizations that we're going to set up here is one of the hardest things in this course. It's easy to get them wrong. So let's go ahead and generate it right here right now, so you can see how it works. We'll generate a new token. The name itself doesn't matter. Expiration of 30 days is fine for now. Description is fine. And now we need to make a few different changes. First of all, instead of public repositories, let's choose all repositories. Let's give it access to all of your repositories. Then under Repository Permissions, we want to give it Read/Write access on administration side. And then finally, under Account Permissions we want to give it star access Read/Write and watch access Read/Write, and we want to generate that token. Now, quick note here, this is the only time it's ever going to show this token to you, so please copy and paste it immediately. And also, you must protect it. If somebody had access to this token,
>
> **[3:06](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=186)** they would be able to take action on your account. Nobody wants that. So we copy and paste this token and we go back to our editor. In our editor, we go ahead and replace the value here of GitHub token with the token we just copy and pasted. I won't do that here because I already set this up previously. Now we have one more step to do. In our FeatureContext.php, we need to tell this constructor right here that we need it to load this parameters. So here we say array parameters equals and we'll go ahead and set that in array. And we want to make sure that these set of parameters actually get used and stored within our class. Say params equal parameters. And then to complete this one, we want to make sure that we have this stored above. Protected params and we'll just initialize an empty array. And that's all it takes. So now from our behat.yml file, this GitHub token is going to be loaded into the feature context into the parameters variable whenever we run a test. Now on the GitHub side, we could also change these permissions as we go. So even if we didn't get it perfect the first time, we can go back and tweak it. So we go back to GitHub, we can review those permissions at any time. In fact, if we want to see exactly what it looks like, if you've properly configured your access token this is what it'll look like after.
>
> **[4:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/expand-your-testing-environment?u=76281980&t=279)** These are the user permissions and the repository permissions we'll need for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this course. Now, the permissions here are very simple. We're not going to damage much though we could if we're sloppy with our token. When you start testing your own API, I recommend being very careful around any API that touches money, deletes data or performs an outside action like sending an email or a text message. Any of those are likely to cause problems in pretty ugly places. So when you test your API, please be careful with the API and the permissions you've given it and what test you actually write. You don't want to accidentally spam people or accidentally transfer money that you didn't intend to. In this case, we're pretty limited scope so we're not going to cause many problems.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (6), [PHP](../../Skills/Software%20Development/PHP.md) (2), [Tokens](../../Skills/Web%20Development/Tokens.md) (1), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** api (6), php (1)
> **CLI Commands:** make (4), php (2)
> **Tools:** github (6)
> **File Paths:** behat.dist.yml (2), behat.yml (2), featurecontext.php (1)
> **Cross-References:** go back to (2)
> **URLs:** [github.com](https://github.com) (1)
> **UI Navigation:** go to (1)

#### [Making an authenticated request](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=0)** - [Instructor] To get rolling with an authenticate test, let's do the absolute minimum that we have available. A couple videos ago we got a list of issues on a specific repository. Now let's shift that idea and get a list of repositories from our accounts and determine if a private repository is there. Since it's a private repository that'll be a clear indication that our authentication worked. By the way, if you haven't set up your personal access token, go back to the last lesson to get that set up right now. Now, with that in mind, let's go through this line by line. The given line is quite a bit different. This time we're ensuring that we have an authenticated user. Then we get a list of repositories. Finally, we're going to look through that list of repositories to find a specific private one. Now that we know our goal, let's go ahead and dive in. Before we implement this test, let's go back to our [GitHub](../../Skills/Software%20Development/GitHub.md) account and make sure this could pass. So within GitHub, we go ahead and come over to our repository list. We'll create a new one, we want to call this one is-your-api-misbehaving. Make sure to mark this private. And then we create it. We don't need any other settings or information or content in this repository. We just need to make sure it exists. And now we head back to the command line. On the command line we do our normal thing, vendor bin behat. And if all goes well our previous tests should continue to pass. It's a good sign. And we should get back to the thing where we have undefined functions. We go ahead and execute that.
>
> **[1:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=95)** We can copy and paste this code directly into our editor. So we copy and paste this just as we did before. Now we need to go ahead and implement these things. So this time we need to implement iAmAnAuthenticatedUser. We'll do this using our client that we've already created. We'll tell it to authenticate. And then we use the parameters that we set up in the last lesson. So we use our GitHub token, second parameter's null, and then we tell this to use GitHub AuthMethod. And we want to use access token. And that just goes ahead and sets up what we're expecting there so that we'll be authenticated. Now we've set up this function we don't know if it actually works or not. So we still need to do a little bit of work here. We'll go to our next method of, iRequestAListOfMyRepositories, and we retrieve this information. So let's grab our repositories. We use the client that we've already set up. We use the API capability on it using the current user context. And we get a list of repositories. Now, the GitHub library behind the scenes is doing a lot of work for us. We really don't care about that this time around
>
> **[3:08](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=188)** but it's something to keep in mind. Previously, when we got a list of issues, our first pass was just use this information to say, this results equals repositories. This is sufficient, but it leaves us open to the possibilities of this request didn't work. We're not going to detect it here. So let's add a way of detecting it right now. So we'll do the same thing we did before with status code. We'll use our client. We want to get the last response. And we want to get the status code from that. And if it's anything other than a 200 we want to throw an error. So we check to see if it's not a 200. And if it's not, we'll go ahead and throw an exception. And we'll say, explicitly expected a 200 status code but got a different one instead.
>
> **[4:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=255)** All right, so now if all's going well, we've authenticated properly, we've gone ahead and gotten a list of repositories, if that generated anything other than a 200 Okay, we'll know about it immediately. Now we need to iterate over this list of repositories and make sure that we're finding the right one. So now we'll go ahead and implement this method. So we'll say for each, we'll go over the results that we have. We'll get each repo individually. And we want to make sure that our arg, the input, the actual repository that we're looking for, is one of the repositories in this list.
>
> **[5:05](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=305)** And if it worked we want to return true. Otherwise, if we didn't find a match on this list let's throw a new exception. And this one will just say what we expected to happen. Expected to find a repository. Repository called arg1. But it doesn't exist. Quick, simple message. If all's worked out at this point we'll go back to the command line, we'll execute this test, and we'll see some successes. So go ahead and run the same command we had. We have a syntax error, so let's go back to our editor and figure out exactly where we messed this up. Turns out you need a semicolon at the end of each line. Amazing that. So now let's go back to the command line again. Once again, we run our tests. The first couple passed as expected, and it turns out they all passed exactly the way we expected. Now to make sure we're not fooling ourselves here let's go back to our feature spec and change the repository we're looking for to see if this still passes. So we'll go back to our editor. So we'll just add a two here just to make it different. And now we'll go back to the command line and run the exact same command again. And hopefully this fails exactly where we expect it to. And sure enough it does. So we don't have a repository called is-your-api-misbehaving2. So this worked and failed exactly where we expected to. This is great.
>
> **[6:40](https://www.linkedin.com/learning/api-testing-and-validation-22610641/making-an-authenticated-request?u=76281980&t=400)** That was a lot of work but we accomplished quite a bit there. And I don't just mean with code. We proved that we could authenticate with our API test by retrieving information that an anonymous user couldn't access. That's a huge accomplishment and a fundamental part of [API Testing](../../Skills/Software%20Development/API%20Testing.md). So in the next lesson, let's go ahead and take the next step and write to our API.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (5), [API Testing](../../Skills/Software%20Development/API%20Testing.md) (1)
> **CLI Commands:** make (7), find (3)
> **Tools:** github (5), command line (5)
> **Cross-References:** go back to (5), in the last (1), in the next (1)
> **Prerequisites:** set up (5)
> **Env Vars:** api (4)
> **Code Identifiers:** iamanauthenticateduser (1), irequestalistofmyrepositories (1)
> **Documentation:** spec (1)

#### [Changing your API and target via your requests](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=0)** - [Instructor] As we build and test our API, read access is great and will let us do quite a few things, but the real value, the real importance, is making sure we can write to the API and modify the items we expect. Now, this is where things get a little scary. If you're working with a payments API, you must be careful not to unexpectedly charge someone or change account balances. If you're working with an API that sends text messages or emails, you don't want to accidentally spam someone. So testing write access requires us to be thoughtful and deliberate about how and where we test. Unless your API has a sandbox mode which won't create side effects, stay away from payment processing, emails, texts or anything else sensitive. For this test, we're going to do the simplest thing possible with zero risk. We're going to start the private repository that we had from our last video. When you run this test, if you get an error that says, resource non-accessible by personal access token, go back to the first lesson of this chapter to get your access token permission set correctly. And remember, let's be careful. Now let's go to our editor and see the test we're actually going to implement. In this case, the test is pretty simple. Say given, I'm an authenticated user, when I star my is your API misbehaving repository, then my is your API misbehaving repository will list me as a stargazer. Immediately, we should see that our given line is the same as last time around. So we only have two functions to implement, the starring and then validating it. So let's move to command line and get this started. And once again,
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=93)** we run the command we've run many times at this point. Vendor bin behat. And if all's going well and we haven't broken anything, which happens occasionally, we should go ahead and see all of our test pass and a couple of ours aren't implemented yet. And sure enough there's two functions that we need to implement. So we copy and paste these and head back to our editor. In our editor, it really doesn't matter where we put these. We'll put them at the bottom just before our monkey test. But don't worry, we're going to clean this up later. Now we need to go ahead and implement this function just as we have before. So let's do [GitHub](../../Skills/Software%20Development/GitHub.md) user equals, we'll say this, we'll use the client that we've been using all along. We'll use the API under the current user context, and we'll get the information of that user. So we'll show the login. So this will give us back the actual user who's logged in which should be us. Then we go ahead and we use the client again, use the API, the current context.
>
> **[2:57](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=177)** We'll now use the starring interface to star our GitHub user's repository and that particular repository. Now we want to make sure that this repository lists us as a stargazer. So we'll use the same GitHub user command that we had before. So just copy and paste this line of code.
>
> **[3:30](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=210)** So now we need to go ahead and build out the actual repository we're looking for. We'll say our repo is the GitHub user, and we'll concatenate this string to make sure that we're looking for the right endpoint here. Arg1. We'll get our list of stargazers from that repository. So again, we'll hit the API itself. So do a client. We'll hit the repo endpoint. We'll get the list of Stargazers, and we'll get all of them for GitHub user
>
> **[4:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=259)** on this particular repository. Let's scroll down a little bit so we move this all in space. So then we'll iterate over these and we'll go through each stargazer. We'll say, if our GitHub user equals the Stargazers, login.
>
> **[4:50](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=290)** We'll return true. Now, if we don't have a match in any of that collection, we'll go ahead and throw our new exception 'cause we have a problem that we need to address. So we expected GitHub user to be a stargazer,
>
> **[5:11](https://www.linkedin.com/learning/api-testing-and-validation-22610641/changing-your-api-and-target-via-your-requests?u=76281980&t=311)** and we'll go ahead and make sure we're specific about what repository we're looking at. All right, so that was a lot of work. If you're feeling like that was a lot of typing, a lot of analysis, or a lot of explanation, it absolutely was. But don't worry, one of our later lessons is about refactoring it and cleaning this up to make sure it's a lot simpler. So with that, let's go back to the command line and run this and see how it works. And once again, if all's going well, our tests should pass, and sure enough they do. Now this is a little bit different one. Notice, we've starred, we haven't unstarred it. So if we go back to GitHub, we should see ourselves on the stargazer list. So let's do that now. We have one repository, so it should be pretty easy to find in my case. And look, somebody has starred, in fact, I've starred it. Alright, so we've proven we've accomplished something huge. We've modified something via our API test and it worked. Generally, I'd say stop and take a break to celebrate, but we have a different problem. What happens the next time we run this test? Or to put it more specifically, now we have a test that changed the state of our data, changed the state of our system, but we never cleaned up afterwards. Therefore, the next time we run this test, we've already starred it. So then I star at step doesn't actually do anything. Therefore, it worked and it didn't work, may look exactly the same, that's a problem. So let's create a new test and clean up after ourselves.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (8)
> **Env Vars:** api (11)
> **Tools:** github (8), command line (2)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** go back to (3)
> **UI Navigation:** go to (1), scroll down (1)
> **Warnings:** be careful (2)
> **Definitions:** is a  (1)

#### [Validate responses](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=0)** - [Instructor] In our last test, we proved that we could star a repository and then checked it afterward to see that it had changed. It was great, but our tests need to clean up after themselves so we can both start and end in a known good state. So let's focus on that. We'll use a variation of the feature that we wrote last time around. And this time, two things have changed. Now we're unstarring our repository and we are not going to be listed as a stargazer. That's really the only changes between last time around and this time around. Now let's go to the command line and make it happen. So we run the same command we've run many times here before. And once again, it should go ahead and generate everything. Everything's working as expected. That's a good sign. We copy and paste these functions and then we head back to our editor. Once again, we can put these functions anywhere we want to in our class. We'll just put 'em here. Now, if you're starting to feel like this is getting sloppy, I completely agree. Don't worry about that. We'll clean that up in the next lesson. Now we just have to implement our class before. Since so little has changed, let's make this easy on ourselves. Let's copy and paste this directly in here. And now this time we'll just say unstar. So that's a good sign that's working out as expected. Now we need to tweak this logic just a little bit. So let's go ahead and grab the exact same function
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=93)** that we had before. Now remember, in this function, we're saying this will list me as a stargazer. And now this time this says this will not list me as a stargazer. And now we need to flip our results. So we need to move the return true down to here and we need to throw the exception if there is a match. Now, again, this is starting to feel really sloppy. It really feels weird to have all this sort of stuff around and to have all this duplication. I know, I completely agree. We will clean it up, don't worry. So we take that. So now we're doing exactly the inverse of what we did before. So this time we're unstarring, just like the function says here, and then we're making sure that we're not listed as a stargazer. So if we are listed as a stargazer, we get this error message. In fact, we should change this error message, because right now it's not correct. So expected [GitHub](../../Skills/Software%20Development/GitHub.md) user to not be a stargazer, but they were. Now, if you don't remember to update that, you're going to get a really odd error message. Remember, please update that. And now we'll go back to the command line and execute this. And let's see how it went. Okay, now it seems to have passed. Now when we ran the test in the last lesson and we starred a repository, remember we went to [github.com](https://github.com)
>
> **[3:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/validate-responses?u=76281980&t=187)** and we could see that the repository had still been starred under our profile. So let's go back to GitHub and see if it's still starred. So here's our repository. You can see it's starred from last time around. I haven't refreshed this. Now I'll refresh. And sure enough, it's now unstarred. So, because in the previous lesson we proved that starring works and we could see that in effect, now we just proved that unstarring works because, well, it were not starred. So that, I know you're feeling really odd, you're feeling really frustrated that we have so much duplication in our test. Let's go ahead and clean that up in our next lesson.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (3)
> **Tools:** github (3), command line (2)
> **Cross-References:** go back to (2), in the next (1), in the last (1)
> **CLI Commands:** make (2)
> **URLs:** [github.com](https://github.com) (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)

#### [Refactor the tests](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=0)** - [Narrator] From the previous couple lessons, we ended up with a bunch of test methods that look quite a bit alike. In fact, they're almost mirror images of each other. While this isn't a catastrophic problem, we've ended up with some cross test dependencies, a lot of duplication, and generally it's starting to feel messy. So in this time around, we're not going to write any new tests. Instead we're going to refactor or clean up what we already have. So before we change anything, let's go to the command line and make sure all the tests pass as expected. So we run our normal command, a vendor/bin/behat. And if all's going well, all right, we know we haven't broken anything so far. That's a good sign. Now let's go back to our editor. The first thing I'm going to do is I'm going to move this unstar function back to go with this star function. There's really no value in this other than keeping alike things together. And we can also see how duplicated these functions are. We can also see how duplicated these two functions are. The myRepositoryWillListMeAsAStargazer and myRepositoryWillNotListMeAsAStargazer look a lot alike. So let's clean those up first. Let's create a new function. We'll have a protected function and we'll just call this one isAStargazer. And let's take two parameters here. Let's take a user and a repository. We'll do a couple quick things here.
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=93)** First of all, let's get an array of the existing stargazers on or in the existing repository. So use our client as we have before. We'll use our API to hit the repo endpoint. We'll get our list of stargazers and we'll get all of them
>
> **[1:56](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=116)** for that particular repository on that particular user. Then we're going to use a little bit of [PHP](../../Skills/Software%20Development/PHP.md) trickery here to simplify some of our logic. So we'll use, create a new stargazers array and we'll use the array column function. What this is going to do is this is going to iterate over the stargazers array and pluck out a particular value that we're looking for. So we feed in the array of stargazers. We tell it to grab the value of login and put it in a new value, login. And now we're going to do one last thing. We're going to return isset stargazers, and then look for this particular user. So the way this works is this is going to build an array called stargazers, where the key and the value are both the user login. And then this function is going to check to see if we have a stargazer with a particular key of the user we're looking for. Now we've got this entire check down here. We can clean up quite a bit up top. So let's come up here and we'll say if this is a stargazer,
>
> **[3:16](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=196)** 'cause remember in this particular function we're checking to see if we've been removed as a stargazer, so the error is if we haven't been removed. So check our [GitHub](../../Skills/Software%20Development/GitHub.md) user for that particular repository. And if we find a match, we'll throw in exception.
>
> **[3:42](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=222)** And in fact, we don't even need to return true here. The way Behat works is it assumes no news is good news. And we'll change one variable here to make sure that that's there. Now before we do anything else, what should we do? Yes, you're right. Use our tests. So let's go back to the command line and run our tests and make sure this is working as expected. We run the exact same command that we have dozens of times at this point. And if all's going well, sure enough, all of our tests pass. Once again, that means we haven't broken anything. We're on a good path here but we still need to update that other function. So let's go back and clean that one up, too. Now this one is the exact opposite logic. So instead of checking to see if we are a stargazer, we're checking to see if we are not a stargazer. So this one we'll go ahead and copy and paste this check. We'll come up here. We can delete most of this. And now previously what we would've done is we would've had return true here. But there's a really easy way we can simplify this because if we just put a not, so if they are not a stargazer, we can throw our exception here. That's an easy thing to overlook. It's an easy refactoring to skip.
>
> **[5:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refactor-the-tests?u=76281980&t=314)** It's an easy thing to get mixed up in the documentation. So be careful using this sort of construct. But it works very consistently every time. So we'll say arg1, and if all has gone well, when we go back to our tests and run them, this will work again. So once again, we run our tests and everything is working. This is a great sign. It means we're cleaning things up. We haven't written any new tests, but we're simplifying and streamlining our functionality. As we build and refactor these tests, we should actively look for opportunities to simplify, to eliminate things. If we do, our tests will occasionally get messy but they'll regularly trend towards being neat and organized. If we don't, our tests are just going to get more messy over time which makes them harder to run, harder to maintain, and really just harder to do everything with them. So in our next chapter, we're going to dive into some more advanced concepts and get to even more refactorings.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** make (3), php (1), find (1)
> **Cross-References:** go back to (3), next chapter (1)
> **Code Identifiers:** myrepositorywilllistmeasastargazer (1), myrepositorywillnotlistmeasastargazer (1), isastargazer (1)
> **Tools:** command line (2), github (1)
> **Env Vars:** api (1), php (1)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)


### 4. Advanced API Testing in Practice

[↑ Back to Table of Contents](#table-of-contents)

#### [Writing to the API](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=0)** - [Instructor] If you've been following along in this course so far, we start from the bare bones simple test of two plus two equals four. We started making read-only requests to our API and then we changed something in our system. But even then, we've been playing it safe by just starring and unstarring our repository. Let's do something a little riskier. Let's create a repository. Actually, let me take that back a second. Creating a repository isn't all that risky. In fact, if you stop and think about it, if you try to create a repository that exists, we get an error. The scary part is cleaning up the repository after. Any time we get something that includes an automated delete, we should get a little nervous. It could be a little scary. So we're going to build some safeguards throughout our process, but we're going to start with a bare simple, create a repository. So let's go back to our editor. Here's the feature description that we're going to use. Given I'm an authenticated user, when I create a repository called something-cool and I request a list of repositories, then the results should include a repository named something-cool. Pretty simple and straightforward. Now let's go to the command line and see this in action. We run the exact same command that we've run a number of times. And by the way, if you get an error that says resource non-accessible by personal access token, go back to the first lesson, the previous chapter to get your [GitHub](../../Skills/Software%20Development/GitHub.md) access token set up correctly. So just as before, Bhat detected that this function didn't exist and generated a template for us. Now, this is a little bit different though.
>
> **[1:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=92)** Notice up here, it stopped on the second line, it acknowledged these two, but then it skipped them and then down below, it only generated one new function. That's because because of our previous tests, we already have that. That's one of the great things about BDD or Bhat specifically. We don't have to re-implement functions if we've run into them before. So if we use this iterative process of building one step at a time, it turns out this works really well 'cause then we only have to build one step at a time. It's a great place to be. So let's copy and paste this into our editor and get started. So we'll go ahead and drop this back into our feature context, which we've been working in all along. And let's just put this near the bottom. And yes, we'll work on another refactoring in just a moment. So we'll put this here and then we'll go ahead and create a function to back it up. In this case, we fill in the function like this. We say we use the client that we've been using all along. We hit the repo endpoint of the API and then we want to create a new repository. So in this case, we'll say arg1 and we'll say this is the repo description. Then we want to provide a sample URL. So we'll say [http://linkedin.com](http://linkedin.com).
>
> **[3:07](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=187)** We need one parameter of true. All right, so now we've done the bare minimum to make this pass but you may notice we don't actually know if this worked or not until later on if we see if it existed. So let's add one more aspect just as we did a few lessons ago. Let's get the status code and make sure that the command we ran actually worked. So we'll still use the client. We'll get the last response just as we did previously and then we'll get the status code from this. Now, previously we were looking for status code 200, which is 200 OK. And this time, we're creating something. So our API will instead give us a status code of 201, which literally means status code created. So we'll throw a new exception if we don't get this back. We'll say, expected a 201 status code but got statusCode instead. Let's go ahead and close off that line. Now let's go back to the command line. If everything worked well, it'll be a great day and we'll see this work for the first time. So back in the command line, we run the command that we've run many times at this point and it worked. Well, we think it worked. Let's double check. So let's go ahead and go back to GitHub and see if this worked as what we expected.
>
> **[4:41](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=281)** So go to GitHub and look at this. I've got a brand new repository here that works. In fact, if we go to our repository list, you can see this was updated now. So this is a brand new repository. It just got created. Now let's do something special. Let's go back to the command line and see what happens next time we run it.
>
> **[5:14](https://www.linkedin.com/learning/api-testing-and-validation-22610641/writing-to-the-api?u=76281980&t=314)** Ooh, now we have a problem. So if we look at this, this errored out because the name already exists on this account. So we tried to create the repository, and sure enough, the repository already existed. So now our test failed. So in order to run this test again, we would have to manually go in and delete this from GitHub. While that's a safe approach to testing, it's really annoying. No one wants to have to go manually delete something every single time they run their test because the quick thing is they'll just stop running their tests. So let's add one more step in our next test to make sure that we clean up after ourselves. Like I said, it starts to get a little bit scary when we delete things but don't worry, we'll put some safeguards in place.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [LinkedIn](../../Skills/Web%20Development/LinkedIn.md) (1)
> **Tools:** command line (4), github (4)
> **Env Vars:** api (3), bdd (1), url (1)
> **Cross-References:** go back to (4), previous chapter (1)
> **CLI Commands:** make (3)
> **UI Navigation:** go to (3)
> **Definitions:** is a  (2)
> **Code Identifiers:** statuscode (1)

#### [Establishing a system state for tests](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=0)** - [Instructor] In the last lesson, we not only changed the underlying state of the system, or specifically our [GitHub](../../Skills/Software%20Development/GitHub.md) account but we left our system in a state where running the test again will fail unless we manually go in and delete the repository ourselves. That's no good. If we can't run our test quickly and easily without manual steps in between we're definitely going to have problems. So let's take that same feature description and tweak it a little bit for another one. So instead of just saying create a repository let's delete a repository. So our story here is I want to delete a repository give an IAM authenticated user and I request a list of my repositories, and the results should include a repository named "something cool". When I delete a repository called "something cool" and I request a list of my repositories, then the results should not include a repository named "something cool". That's a mouthful. Couple things I want to pull your attention to though. First of all, we're deleting our repository by name. Never, ever, ever delete something on a loop unless you intend to. Since we're deleting something by name even if we do something catastrophically bad we're not going to cause catastrophic damage to our system. We're not going to delete every single repository we have. Always, always, always delete things by name. ID, some unique identifier, not star not everything, that's asking for trouble. One other thing that's important is we request a new list of repositories, in terms of our implementation.
>
> **[1:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=96)** When we get this list of repositories up above we snapshot that and we hold that in memory. So we have to refresh that and get a new list. It's an important thing to do. And finally, notice that this line of then the results should not include a repository name "Something cool", is the exact opposite of this line. From an earlier lesson we saw what we can do when we're dealing with exact opposites of one another. It's a great place for some refactoring. So that let's go ahead and go to the command line and see what we get. We go to the command line. We should be able to run our bhat program just like we have before. And if all is going well, we should air on one. There we go, and we get a skip on the other. So first of all, we're getting an error on this creator repository test because as it says here, the name already exists. So this is the same state we left our test in last time around, and now we have some new capabilities here that we need to implement. So let's go ahead and generate those functions and then go back and fill them in. So we copy and paste this into our editor.
>
> **[2:47](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=167)** So just like before we need to start implementing this delete capabilities. And luckily delete is just the opposite of create. So let's go ahead and grab this function here and we'll put it right here. So we'll copy and paste this into our function. Now instead of using the create function call, we use remove.
>
> **[3:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=199)** We also need this parameter, or sorry this function actually takes two parameters. So GitHub user and the name of the repository itself. So we need to get our GitHub user function. We've got that in a variety of different places here. So let's go ahead and grab that. We'll pull it down here. Now here's an important thing. Previously when we were creating a new repository we got back a 201 created response code. When we're deleting a repository we don't get back a 201 created. We get back a 204, no content. So let's go ahead and make sure we update this error message. And now we need to implement the results should not include a repository named whatever. We should be able to go back up and find where we have that repository check. Looking for a specific named repository. So let's go to up above.
>
> **[4:25](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=265)** Here we go. This is, "the results should include a repository named whatever our argument is". So let's just copy and paste this again. Copy and paste this. We'll bring it back down over here. And now remember, if we do find a match we want to throw the exception. If we don't find a match, we want it to be okay. So we'll go ahead and do that, return true. And let's make sure our error message still makes sense. Expected not to find a repository called ARG one but it does exist. So now we've built the inverse of the previous function we had before. And if everything checks out, we can run this on the command line and we'll see what happens. We run our command just like we did before. Our create should still air because we haven't deleted it yet. And our delete, it appears to have worked. Now let's make sure this actually did work. If we run it again now our create should work the second time. So let's go ahead and try that. The tests are running exactly as we expect them before create, weren't and delete weren't. So now let's go to back to our browser to GitHub and see if our repository's still there. This looks like it's here, but if we refresh, it's gone. So now since we know our create work before now we know our delete work. So now every time we run these tests
>
> **[5:58](https://www.linkedin.com/learning/api-testing-and-validation-22610641/establishing-a-system-state-for-tests?u=76281980&t=358)** we're leaving the system in a nice, repeatable, reusable state. We don't have to manually do anything in between. Now let's go back to our editor for one quick moment. And now again, we're starting to get some duplicate code. There are numerous places we could do some refactoring. So let's focus on one in particular. Let's clean up the "the results should not include repository named". That's a mouthful. That's a ugly mess right now. So let's clean that up a little bit. I'd recommend a new method, have that one called Repository Exists that takes two input parameters. I'll leave it to you to figure out the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of the details. If you need inspiration, check out our previous is a Stargazer method for a little bit of detail and some thought process around that. And when you're ready, check out the next lesson so we can talk about the solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **CLI Commands:** find (4), make (3)
> **Tools:** github (4), command line (3)
> **UI Navigation:** go to (3)
> **Env Vars:** iam (1), arg (1)
> **Cross-References:** in the last (1), go back to (1)
> **Analogies:** just like (2)
> **Definitions:** is a  (1)

#### [Solution: Validating system state](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=0)** - [Instructor] In our previous lesson, we added a test to safely delete our target repository and only our target repository. But we realized we are duplicating a lot of code again, so I laid out a challenge. The challenge was implement a repository exist method with two input parameters that we could refactor into. So let's look at a solution here. I'll go ahead and lay this out live. We'll have a protected function, repository exists. In this case, let's have the first input parameter be the repository array, and then the repo name. So effectively what we're doing is we're saying, let's pass in a set of repositories that we'll look through and find a repo name to match. So now let's build a new repositories array and we'll use the array column function that we used before. So we'll call this repo arrays, we'll pull out the name of that array, and we'll pull out the name into the value. So we have name-value pairs going into this new array of the actual name of the containing arrays. It's a little bit of a mouthful, don't worry about it. We'll get to it in just a second. Now, we'll return is set and we'll look in our new array and say, do we have an array named "repo array?" Oh, "repo name," excuse me. All right, there we go.
>
> **[1:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=92)** If you are looking closely, you notice this is very similar to our is stargazer method. Now we need to go back and actually use this. So, let's go ahead and clean this up a little bit. Let's say, if this, and we'll say repository exists, we'll feed in two parameters. First, we'll feed in the results that we were using before and we'll feed in our "arg." So that's the actual array we're looking for. We'll go ahead and make sure we've got some curly braces there and we'll drop this into the body of that method
>
> **[2:19](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=139)** and we can delete the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this function. And now we'll do the exact same thing for the results, should include a repository named function. It's a little bit of a mouthful, because, well we're doing very complex things at this point. So let's go ahead and copy and paste this and now we'll find the results should include, all right, there we go.
>
> **[2:48](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=168)** Now remember, we need to flip this around, because if it doesn't include, if it doesn't exist; that's what we're checking for, remember. If this doesn't exist, we need to go ahead and throw this error message, so we fill that in. And now we can delete this and we'll go back to our command line and make sure that these tests still pass as expected. We run our vendor behat. And if all goes well, everything passes as it did before. Now, there are a couple other ways we could approach this one. Going back to our editor, let's go back to the method itself, here.
>
> **[3:43](https://www.linkedin.com/learning/api-testing-and-validation-22610641/solution-validating-system-state?u=76281980&t=223)** All right, so here's our repository exists. There are a couple other ways we could approach this one. First glance, we may want to have this repository exist method retrieve a list of repositories itself. That might work, except now, we have to pass in the context for searching or retrieving that list. That could be as simple as a repository name, if we assume the repository is on our account, but that's a big assumption. It turns out that passing in the array is an easy, flexible approach, for now. We might be proven wrong later, and that's perfectly fine. Now, there are other numerous places we may want to refactor right now. For example, every place we have the [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) "me" or "mine," or method names. Odds are you want to replace those with a more generic user you can specify in a feature description. Wait, don't refactor those. It's important to remember that as you build these tests and use the API, you can only act as yourself. After all, your [GitHub](../../Skills/Software%20Development/GitHub.md) token is tied to your account. If you abstract out the user, it may make the function more reusable for other tests, or it may just require you to pass in more information for each of those tests. So in the next lesson, we'll address one more place where we can do some quick refactoring, almost for free.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1)
> **CLI Commands:** make (3), find (2)
> **Cross-References:** go back to (2), in the next (1)
> **Tools:** command line (1), github (1)
> **Analogies:** similar to (1), for example (1)
> **Env Vars:** api (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### [Handling response codes](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=0)** - [Instructor] If you follow along so far, we now have a bunch of methods with some similar code for checking response codes. While we could leave these checks in place, it's starting to feel kind of messy and just asking for trouble if we have to make changes or update things later on. So let's dive into one approach for doing this. Let's create another protected function, and we'll call this simply checkResponseCode. And we'll specify one field incoming of expected. And now we have to think about how we've been getting the response codes a date. So we'll say statusCode equals this. We'll get the client that we've been using. We'll get the last response, and then we'll get the status code from that. Now let's make this real simple. So let's say assert expected equals statusCode. And, if that's not true, that means we have an error. So let's go ahead and come up with a very simple error message of Expected, the expected, status code but we got statusCode instead. Quick, sweet, simple to the point. Not a whole lot of complexity here, but now we need to go ahead and we need to embed this throughout the functions that we've used before
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=93)** to make use of this refactoring. So let's go ahead and we'll say checkResponseCode, and let's go ahead and scroll up. We could do this the easy way. Oh, here's one right here. So let's say this checkResponseCode and the only parameter it takes is the expected response code. So now we can simply delete all that. And, even better, we don't need to get the status code up front. We're doing that in the function itself, so we can delete that line too. Now, we could do the same refactoring in other places, so we can get rid of this one where we expected a 201. We can delete this place we are expecting at 201 and just put 201 here. There's a few more places we can do this. Let's see here's another one where we're expecting a 200, so let's go ahead and say 200. And I think, yeah, here's one more. We're pretty close to the end of this. Let's make sure we are expecting the 200 again. All right, and that should be it. So now, if we've done this correctly, we can go back to the command line, run our test, and make sure everything works as before. So let's test that. All right, we run our tests, and it looks like things are working pretty well so far.
>
> **[3:09](https://www.linkedin.com/learning/api-testing-and-validation-22610641/handling-response-codes?u=76281980&t=189)** Hey, that's a good sign. We didn't break anything, or at least we didn't break anything that we found so far. This is always one of the fun things about testing and refactoring. As long as we have good tests, we can have a lot of confidence as we build or refactor things because we know if it worked before and we make a change, it should work after. Unless we made a breaking change, then we have another problem. But now we have one other capability in hands. Let's go back to our editor and look and check and see what we can do. So now we have all these other places. This, for example, I request a list of issues. Now, previously we weren't doing any checks around this. We could go ahead and add this check response code 200 to that almost for free. Now we could just drop that in wherever we need it, and we could apply this check in just about everywhere, quickly, simply, easily, without a whole lot of thought. And, in fact, we could do other refactorings here. I'm not going to go through all of them, but here, this if could just be replaced by an assert. Think of all the things we could do. Look for opportunities to refactor your code and clean things up because not only is it easier to maintain when it's nice and clean and predictable, but it's also easier to update, easier to extend. And generally your tests, when they're easier to maintain, extend, and update, people are going to keep them up to date. And, with that, let's go ahead and dive into how we extend and expand our testing with other external libraries.

> [!info]- Semantic Content
>
> **CLI Commands:** make (6)
> **Code Identifiers:** checkresponsecode (3), statuscode (3)
> **Cross-References:** go back to (2)
> **Tools:** command line (1)
> **UI Navigation:** scroll up (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Using extensions](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=0)** - Now that we understand the basics of Behat, there are a ton of directions we can go. If we want to stay with Behat within the [PHP](../../Skills/Software%20Development/PHP.md) ecosystem, we can use extensions to build arrays and loop through requests and compare collections of data coming back. It's probably something we'd only want to use for batch operations, but it's useful nonetheless. On the extension side, we can go both internally and externally. On the internal side, we can tightly integrate with the PHP frameworks we're using, while on the external side, we can extend to use specific websites and APIs more easily. Check out their [GitHub](../../Skills/Software%20Development/GitHub.md) page for more details and projects. But more importantly, while we've been using Behat, remember that underneath those tools, we're using Gherkin to do behavioral testing of the API. Gherkin is supported in numerous languages and use cases, so you can use it internally, like for [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md), or externally, as we've done. One of the most powerful areas are the [JavaScript](../../Skills/Software%20Development/JavaScript.md) extensions that test our UI. Just like we pulled individual fields out of our [JSON](../../Skills/Web%20Development/JSON.md) payloads, you can use those extensions to retrieve individual elements out of your [HTML](../../Skills/Web%20Development/HTML.md) DOM. If you can describe an activity in specific, concrete steps, you can probably test it. When in doubt, check out Cucumber in GitHub for more ideas, tools, and capabilities. One of my favorite use cases for Gherkin isn't even additional testing, but using it to generate SDKs or libraries for APIs. In this course, we use PHP with the GitHub SDK, but imagine we didn't have that library. What would we have done? Turns out, we don't have to guess. We can take our existing feature files and bring them to another language, Ruby, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), or [Java](../../Skills/Software%20Development/Java.md),
>
> **[1:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/using-extensions?u=76281980&t=94)** and see what capabilities our libraries wouldn't have to support. We'd run the test command, see which of our methods failed, and start building them step by step, just as we've done so far. As we build the underlying logic and start extracting out common methods and reuse them, that starts looking like an SDK. It's not a perfect process, but a way to start thinking about the design and overall implementations of your SDKs. For bonus points, include your Gherkin test in your documentation to show people common use cases. After all, it's easy for people to run them and confirm everything is working.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [PHP](../../Skills/Software%20Development/PHP.md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [Unit Testing](../../Skills/Software%20Development/Unit%20Testing.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1), [JSON](../../Skills/Web%20Development/JSON.md) (1)
> **Env Vars:** php (3), sdk (2), api (1), json (1), html (1)
> **CLI Commands:** php (3), ruby (1), python (1)
> **Tools:** github (3)
> **Analogies:** just like (1), imagine (1)
> **Speakers:** - now (1)

#### [Starting with GraphQL testing](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=0)** - [Instructor] So far in this course, we've tested pretty straightforward [REST](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md)-style patterns. These are great and will take us a long way with most APIs, but there's another pattern that we need to tackle, [GraphQL](../../Skills/Web%20Development/GraphQL.md). Now, personally, I'm not a fan of GraphQL because while it gives us full [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) with fewer requests, all of which are great, by the way, it also gives us a variable response format all coming from a single endpoint. Specifically, that means that every request goes to the same URL, but the response data structure will be variable based on the request parameters we gave it. In short, that means extreme variability, which is not fun to test. Before our simple test, let's make sure we can make an authenticated request via the GraphQL endpoint, get a list of repositories, and then validate them. Conceptually, we're going to follow similar steps as we did as an earlier video, so we can focus on just the execution part. First, we'll go ahead and copy from Session 3.2 and make one tweak. For the When line, we'll specify using the GraphQL endpoint. It's not ideal, but we're going to try to be explicit here. Now, when we run it, just as before, it generates a new template function for us.
>
> **[1:22](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=82)** Now, over in our IDE, we have to write the function, but the cool thing is with Visual Studio and a properly configured B hat library, it's going to handle some pieces for us.
>
> **[1:39](https://www.linkedin.com/learning/api-testing-and-validation-22610641/starting-with-graphql-testing?u=76281980&t=99)** In our IDE, we now need to write the function, but the cool thing is that with Visual Studio and our [GitHub](../../Skills/Software%20Development/GitHub.md) [PHP](../../Skills/Software%20Development/PHP.md) library loaded, it suggests the function content for us. Pretty cool, except for one tweak. In mine, I had to change the query function to execute. At first glance, this seems like enough, but it's not. To see this in action, let's go ahead and go and run it. (keyboard clacking) When we come over here and run it just as we did before, let's see what happens. Sure enough, we do get an error. In this case, there's a deprecated function. That's not a big deal, but one of the things you might see is that the data structure coming back from our query is not the same data structure that we were expecting. If we look back at our feature, you could see that we used the exact same structure that we did before, so remember, that structure's expecting a particular data format, and this request may not generate the same thing, so we need to be prepared to transform this to make sure they match.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (4), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Data Structures](../../Skills/Software%20Development/Data%20Structures.md) (1), [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **CLI Commands:** make (4), php (1)
> **Env Vars:** ide (2), rest (1), url (1), php (1)
> **Tools:** visual studio (2), github (1)
> **Versions:** 3.2 (1)
> **Exercise Files:** template (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### [Testing GraphQL mutations](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=0)** - [Speaker] Now that we know we can retrieve data, let's make sure we can modify it. In the [GraphQL](../../Skills/Web%20Development/GraphQL.md) world, these are called mutations. We retrieve an object, modify it in some way, and then we write it back to our API. For the [GitHub](../../Skills/Software%20Development/GitHub.md) API to form a mutation, we have to specify three things. First, the mutation name. Think of this as a function name that describes the operation you are planning to perform. Then you give it the input object, which is a list of all the input fields that you plan to modify. Finally, the payload object or what you expect as a response. Since before we start a repository via the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API, let's do it again, but in GraphQL. Once again, we start by copying the feature file from the earlier lesson that we had last time around. But this time, we explicitly tell it to use the GraphQL endpoint. Just as before, when we run it, we can generate a stub function just for us.
>
> **[1:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/testing-graphql-mutations?u=76281980&t=60)** So we can go ahead and we can grab this from the command line itself, and then we'll go over to our editor. And once again, with Visual Studio code in our GitHub [PHP](../../Skills/Software%20Development/PHP.md) library loaded, it suggests the function content for us. We just hit the little check box here and it goes ahead and accepts everything. But again, one change I had to make, star repository is not the function name specified in the GraphQL description. Instead, it's called add star. And now let's go ahead and go back to the command line and run this again. And when I run it, what happens? It turns out we have an error for some reason. Let's go back to the code to look really quickly, see what's going on. In this case, this function is expecting a repository ID as an input. If we go back to the feature itself, let's look at that, but the feature description itself is giving the repository name. So obviously we have a mismatch here. So before we call this mutation, we're going to have to run a query to turn that repository name into a repository ID. I'll leave you to fill that in yourself.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GraphQL](../../Skills/Web%20Development/GraphQL.md) (4), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [PHP](../../Skills/Software%20Development/PHP.md) (1)
> **Env Vars:** api (3), php (1)
> **Tools:** github (2), visual studio (1), command line (1)
> **CLI Commands:** make (2), php (1)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (1), we call this (1)
> **Prerequisites:** before we start (1)
> **Speakers:** - [speaker] (1)


### 5. Planning Your API Testing Strategy

[↑ Back to Table of Contents](#table-of-contents)

#### [Mapping your API](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=0)** - [Instructor] So far, this entire course has been from the perspective of having an existing API with good documentation, or maybe even adding tests as we're building the API itself. Those two scenarios are the best by far. In fact, if you have one of those, you can skip the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of this video and go onto the next one, and go directly to prioritizing your endpoints. But for the rest of us, keep watching. If you have an existing, well-documented API, or are actively building your API now, that's awesome. But the third scenario, the third scenario comes up a little more often and is way more painful. In this case, we have an existing, poorly documented API, which is critical to our systems, app, or even company as a whole. Frankly, this is the worst of all worlds. The API is critical to our business and we need it to be online and functional, but we still have to maintain it. Even worse, we probably have to update and extend this API over time. Unfortunately, after many years of building APIs, I found this is the most common situation by far. So how do we test and verify this API? It turns out, one step at a time. When we start mapping our API, the goal is to understand what endpoints our API has and which are actually used. If we have an API gateway or some sort of proxy, we should be able to see the individual URLs and potentially even see and review the parameters and payloads. If we're lucky, the API uses hypermedia, and all the URLs of the API are in the payload itself, but unfortunately, that's not very common. More likely, we're going to have to get more creative. My favorite approach is to review the source code of our applications and see what URLs are embedded in them.
>
> **[1:35](https://www.linkedin.com/learning/api-testing-and-validation-22610641/mapping-your-api?u=76281980&t=95)** For apps that use static fixed strings, we should be able to find most of them. For apps that construct URLs, we may have to search for the base URL or host name, and expand our search from there. We still need to understand the request and responses, but then, we still need to understand the request and responses. We can add a local proxy, like Charles, Squid, or ngrok, and update the application to use that URL instead of our API directly. The proxy can then capture all the requests and responses and log them. Now we can review the endpoints and see which ones we use, and what data they actually take in return. Alternatively, there is some magic you can work with DNS, IP address [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md), and proxies that's well beyond the scope of this course. But getting into the flow of the API requests gives you a huge amount of power and insight. Whichever approach you choose, once you're collecting real live information, make sure to collect production usage and use cases that are as close to the real world as possible. Specifically, you need the URLs your apps use and the parameters and payloads that move back and forth. You need to figure out what API endpoints your app actually cares about. And there's a subtle final point in there. Odds are our proxies, logging, and whatever approach we use will not get every endpoint possible from the API. Instead, it will capture the URLs most commonly used, or the ones used by the most important capabilities, and completely miss others. That's fine. Frankly, I don't believe in writing tests for code that never gets used. Now that we have our endpoints, we can move on to our next step, documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (2), [Routing](../../Skills/Network%20and%20System%20Administration/Routing.md) (1)
> **Env Vars:** api (17), url (2), dns (1)
> **CLI Commands:** find (1), make (1)
> **Exercise Files:** source code (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### [Documenting your API](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=0)** - [Instructor] If you followed the previous video and captured real live production usage of your API, that's great. Now we want to turn the data from those logs into actionable information. To be successful, you need to finish the step with three items, URLs, parameters, and payloads. The URLs are the easiest by far. They're in your logs and may be in the source code for your apps. Depending on your API and the apps and the complexity they support, this may be a handful of URLs or it may be dozens. It's rare that you'll have more than that, and if you do, you probably have duplicates. So collect and extract those patterns, and then start collapsing those. Specifically, those patterns will probably look something like this. Don't think of those separately. Instead, think of the patterns behind them. Those URLs probably collapse down to something like this. Now we have the hardest step, collecting the request parameters. On GET requests, those should be in the URL, and they're easy to find and list out. On POST requests, those are more likely to be in the form elements or in a POST body itself. Either way, you'll need to use the data you captured from your proxies in the last step to understand this data. And while PUT and DELETE are possible, they're pretty uncommon. And those parameters should be on the URL itself, occasionally in the form elements. So if you've addressed the first two of GET and POST, you should cover those also. Now within the data types itself and the payloads, again, we want to look for patterns, not just in the URLs, but in the parameters and the POST bodies. And this time you need to think about those data types. Start separating out the strings versus the integers
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/documenting-your-api?u=76281980&t=93)** versus the timestamps, and list them all out. Bonus points if you have example values from your data to demonstrate with. By the way, don't do that with sensitive data like credit card numbers, national ID numbers, and similar. Be very sensitive and careful with that. You shouldn't have them at all. And finally, we have the third item we need to document, the responses. We have the HTTP response codes themselves. Most of the time those will be a simple 200, 201, 404, and a few others. But on top of those responses, now we need to evaluate the payloads for both the structure and the data types. And most likely, we don't care about every piece of data equally, there are some that are more important to our app and customers, and others that are effectively irrelevant. Once we know the important ones, those are the ones we must test for. Now that we know our URLs, the most common and important requests, and the structure and the contents of the payload, we can move on to the next step, prioritization.

> [!info]- Semantic Content
>
> **Env Vars:** post (4), api (2), url (2), put (1), delete (1)
> **API Endpoints:** post  (3), get  (2), put  (1), delete  (1)
> **Cross-References:** previous video (1), in the last (1)
> **CLI Commands:** find (1)
> **Exercise Files:** source code (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Prioritizing your endpoints](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=0)** - [Instructor] Now that you've collected your endpoints, you're probably overwhelmed. You have so many endpoints, so many different parameters, and so many different payloads and really you don't know where to begin. Okay, stop and take a deep breath. The good news is that there isn't one right, single correct answer. The bad news is there isn't also one single correct answer. In short, the best way to test your API is to start thinking about the most important things people do with your API, the aspects that are changing regularly or what are the riskiest and most sensitive activities. If there are three things that every customer does, build tests for those. You want to ensure that those things work consistently with every update, release, and change. Whenever possible, do what we have in this course. Start as simple as we did and build your test step-by-step. Try a simple request, then try a simple read request, then a read/write request, then something that changes something important. It's not going to be perfect, but it's going to be a strong start and gives you a win at every step of the process. Alternatively, you can prioritize by risk. If there are specific parts of your API that are critical and must work every single time no matter what, please test it. If your API touches money, that's a good place. Just make sure you don't build loops that transfer funds over and over and over again. This may be a good time to start looking into some advanced concepts like mock objects or other testing tools, and frankly, this is a great time
>
> **[1:32](https://www.linkedin.com/learning/api-testing-and-validation-22610641/prioritizing-your-endpoints?u=76281980&t=92)** to consider having a sandbox for your API where changes don't talk to production environments. Whichever route you choose, it's going to feel a bit wrong. You're going to see other things you want to test. You're going to feel like you're doing it wrong, and that's entirely possible you are. Sorry, I know that's not fun to consider, but guess what? Some tests are better than no tests. Incomplete tests are better than no test. Every test you write makes your system a little bit better, a little more stable, and builds your skills and confidence. Just keep going. Now, let's tackle the final core concept here, structuring your tests.

> [!info]- Semantic Content
>
> **Env Vars:** api (5)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Structuring your tests](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=0)** - [Instructor] Now that you have a bunch of tests you're going to have to think more and more about how you structure them. Once again, I have good news and bad news for you. The good news is there's not a single right approach. There are numerous logical, predictable ways to structure tests. The bad news is there's not a single right approach. What seems logical and predictable to you may not be for the [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) of your team, or even to yourself when you come back to this project in six months. Each BDD tool is a little bit different so if you depend on the tooling, it'll vary based on your specific tool, configuration, et cetera. While that works, I recommend a different approach. Segment and structure your test based on the interfaces they use or the API itself. I lean towards what's called the single-responsibility principle. The single-responsibility principle, or SRP, comes from the [object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) method. It's the idea that every class covers one, and only one area of the system. Each thing is responsible for itself and only itself. Effectively, it prevents spaghetti code where a given class touches a bunch of unrelated things. We need to do the same here. For example, for restructuring the [GitHub](../../Skills/Software%20Development/GitHub.md) API tests from this course, I'd likely separate my tests by the endpoints they cover. There should be one set of tests for the repository endpoint, that includes reading, writing, editing, cleanup, whatever. There should be another set of tests for GitHub Actions and yet another for pull requests. Alternatively, you could separate by workflows. The workflow of submitting a pull request, reviewing it, and merging it, is one's distinct set of tests
>
> **[1:36](https://www.linkedin.com/learning/api-testing-and-validation-22610641/structuring-your-tests?u=76281980&t=96)** that you often do together and needs to work from end to end. Odds are you have many areas like that in your system. Use those, design around those. There are probably a bunch of other divisions, but you get the point. Beyond SRP, another strength of this approach is understanding which tests you may have to change as you improve or modify your endpoints. One key thing throughout this entire process, keep running your tests, a lot. Run them regularly and repeatedly. Whenever you refactor, run the tests, before you close your editor for the day, run your tests, when you get back from lunch, run your tests. You saw me run our test before I did anything significant, even if it was a simple task. And then I did it immediately afterwards to confirm I hadn't broken anything. It's almost impossible to run your tests too often. When in doubt, run them again.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1), [Object-oriented programming](../../Skills/Software%20Development/Object-Oriented%20Programming%20(OOP).md) (1)
> **Env Vars:** api (2), srp (2), bdd (1)
> **Tools:** github (2)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Generating your tests from OpenAPI](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=0)** - [Instructor] One of the hardest things about testing your API isn't the requests or even the payloads. After all, both are documented, right? No, the hardest point is the sheer number of different tests you may need. Remember in a [rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) API, for every resource you could have a get, put, post and delete. Then when you go deeper into collections, you can have filters, pagination, and even complex query structures, including numerous parameters and even different ranges for those parameters. And even that is assuming your post is only performing one action on your resource. When you think about a graph QL interface, we have a similar problem with all the mutations. Either way, in order to get better coverage of our API, we need to operate with both speed and scale. In that case, I start to lean on [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md). In my course creating better SDKs with Generative AI, I go into it in detail, but let's get some of the basics out of the way here. First, telling your AI, "Generate test based on this API," isn't going to be enough. We need to get the open API spec to do anything useful. Then we need to teach the large language model what we want to do. Luckily we have all these great behavior tests we've just written. To see it in action, let's open our favorite Generative AI, in this case I'll use Claude, and give it some instructions. So first, let's give it the open API spec doc. First, let's give it the open API spec doc. Then let's tell it to generate some tests.
>
> **[1:33](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=93)** And while this looks like it worked, we also made a major mistake. If we tell a generative AI to just write every test for our entire API, it's unlikely to work because it doesn't have the context and the specific use cases that we care about. Because remember, just because we have an endpoint doesn't necessarily mean that we need to test it to make sure it works. It may not be something we use very often. So let's go ahead and stop this, and we'll start over. In this case, we're still going to keep our open API spec, and let's make one change. So let's generate the BDD style tests.
>
> **[2:15](https://www.linkedin.com/learning/api-testing-and-validation-22610641/generating-your-tests-from-openapi?u=76281980&t=135)** This time we made one major tweak. Instead of telling it to generate every test for every endpoint of our API, we're just focusing in on one collection of endpoints, specifically the stargazers. Now this is a much more manageable request, and we're more likely to get a good result. But what if we could get more creative to test a specific use case we're likely see in the real world? That's where generative AI really shines. So once again, let's stop this, and now I'm going to copy and paste this command because it's quite a bit longer. In this case, we'll generate the BDD style test for a workflow. That includes forking a repository, making a commit and submitting a pull request using this open API document that describes the API endpoints. Once again, this represents a real use case that we're likely to see. And just as we expect, this is a much more complex set of tests, but we have a set of tests that represent a use case that represent real world usage. I'll leave you to explore more, but this is only limited by what you can come up with. If you'd like to explore more, definitely check out my other course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Generative AI](../../Skills/Artificial%20Intelligence%20(AI)/Generative%20AI.md) (5), [Rest](../../Skills/Web%20Development/Representational%20State%20Transfer%20(REST).md) (1)
> **Env Vars:** api (12), bdd (2)
> **Documentation:** spec (4)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Refining your BDD tests](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=0)** - [Instructor] Throughout this course, you've written a bunch of given, when and then statements, and now we have a problem. Odds are you varied them slightly over time. Well, this is because we are being sloppy, multiple people are writing tests or we improved our practice as we went on, it doesn't matter, we're going to start having problems. To be clear, I'm not talking about necessarily errors here. Instead, those little variations could be as simple as this should get at least one result, and then maybe then I will get one or more results or many other possibilities. When we read these statements, we know that they're the same, but unfortunately, our tooling generate different functions for each. Even worse, odds are we further modified them over time, and now we have very similar functions with slightly different implementations drifting apart as we go. So how do we clean this up? The good news is this is one of the easiest problems we have. If we have an example like this, we have one line difference, the fix is easy. We simply update this to the version we want. Unfortunately, life is never that easy. In the real world, our variations are going to be more subtle, which makes them even more important to detect and standardize. So here's a different one. In this case, notice that the functions are completely different and most of the individual lines are completely different. But here we have near duplication and we should standardize it. So here's a quick approach. We note that first user as a variable, so our script knows what to replace later. Remember that we'll change the function signature in our feature context class, and then we update the second instance to match the first, and finally back in our code,
>
> **[1:34](https://www.linkedin.com/learning/api-testing-and-validation-22610641/refining-your-bdd-tests?u=76281980&t=94)** we should add a check that looks something like this. So we can go ahead and we can check for the myself user. And if so, we replace the existing user with the logged in user. A little bit different, but it works well. And now we have some standardization across our tests.

> [!info]- Semantic Content
>
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/api-testing-and-validation-22610641/next-steps?u=76281980&t=0)** - [Instructor] If you made it this far in this course, congrats. You're almost done. So I'll close this out with a few tips and ideas for you to explore. First, while this course has pushed the idea of testing your API, remember that we tested against [GitHub](../../Skills/Software%20Development/GitHub.md). That means you can test any API. If your app is dependent on external APIs and most modern apps are, write tests for those. After all, something is going wrong in your app, it's great to know where the problem is and isn't. Next, as you write test, remember that you'll discover better ways of doing things, that's the nature of [Software Development](../../Topics/Software%20Development.md). When you figure out a better approach, don't hesitate to refactor and improve your approach. The best part of having tests is you can refactor with confidence. Regardless, celebrate that you've learned something and apply it. Next, if you'd like to learn more, we have a few great resources. I serve as editor on a weekly newsletter covering API news, tools and development. It comes out every Thursday morning, US time, and has since early 2014. While I co-authored a book on API design, I'm proud to say my co-author has since gone on and published as a part of the Addison Wesley signature series along such writers of Martin Fowler and many others. And finally, check out Nordic APIs and the Postman blog for great articles on [API Testing](../../Skills/Software%20Development/API%20Testing.md), security and best practices in general. Finally, remember to enjoy this. Every test you write is improving the overall stability of your API, that makes your system easier to use, easier to extend, gives you and your team the ability to refactor with confidence and improves your user's experience. Just remember to keep building and running your tests.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [Software Development](../../Topics/Software%20Development.md) (1), [API Testing](../../Skills/Software%20Development/API%20Testing.md) (1)
> **Env Vars:** api (6)
> **Tools:** github (1), postman (1)
> **Best Practices:** remember to (2)
> **Speakers:** - [instructor] (1)


## Instructor

- [Keith Casey](../../Instructors/Software%20Development/Keith%20Casey.md)

## Path Context

### In [Become a RESTful API Developer](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20RESTful%20API%20Developer.md)
← [Designing RESTful APIs](Designing%20RESTful%20APIs.md) | **4 of 5** | [Web Security- OAuth and OpenID Connect](Web%20Security-%20OAuth%20and%20OpenID%20Connect.md) →

## Appears In

- [Become a RESTful API Developer](../../Paths/Software%20Development/Learning%20Paths/Become%20a%20RESTful%20API%20Developer.md)

---

[↑ Back to top](#)