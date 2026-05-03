---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: software-testing-assistance-with-github-copilot-ai
url: "https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai"
duration_minutes: 76
duration: 1h 16m
level: Intermediate
updated: 8/23/2024
learners: 81700
skills:
  - Software Testing
  - AI Software Development
  - Artificial Intelligence (AI)
  - GitHub Copilot
exercise_files: true
github: "https://github.com/LinkedInLearning/software-testing-assistance-with-GitHub-Copilot-AI-3904213/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGFjs4Kmb0Kzg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724431008438?e=2147483647&amp;v=beta&amp;t=DDT7dUamNhtod1CfmaAd4XM317xt1nmzouoccrmbf5E"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Transform Your Programming with AI Coding Tools]]'
  - '[[Master GitHub Copilot]]'
prev_courses:
  - '[[ChatGPT and SQL]]'
  - '[[Refactoring with GitHub Copilot]]'
next_courses:
  - '[[Responsible GitHub Copilot- Creating Reliable Code Ethically]]'
  - null
path_nav: '[{"path":"Transform Your Programming with AI Coding Tools","position":5,"total":7,"prev":"ChatGPT and SQL","next":"Responsible GitHub Copilot- Creating Reliable Code Ethically"},{"path":"Master GitHub Copilot","position":8,"total":8,"prev":"Refactoring with GitHub Copilot","next":null}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/software-testing
  - skill/ai-software-development
  - skill/artificial-intelligence-ai
  - skill/github-copilot
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Software%20Testing%20Assistance%20with%20GitHub%20Copilot%20AI.md)

![Software Testing Assistance with GitHub Copilot AI](https://media.licdn.com/dms/image/v2/D560DAQGFjs4Kmb0Kzg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1724431008438?e=2147483647&amp;v=beta&amp;t=DDT7dUamNhtod1CfmaAd4XM317xt1nmzouoccrmbf5E)

# Software Testing Assistance with GitHub Copilot AI

> Discover how to leverage AI, specifically GitHub Copilot, to enhance automated testing in your software development process. Instructor Gary Kovar demonstrates how to write, refactor, and generate tests efficiently, ensuring code quality and stability. Gary starts by exploring the capabilities of Copilot, the principles of automated testing, and how AI can significantly bolster your test coverage 

> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai) | 1h 16m | Intermediate | 82K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Software testing assistance with GitHub Copilot AI](#software-testing-assistance-with-github-copilot-ai)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Overview**](#1-overview) (6 videos)
  - [What is GitHub Copilot?](#what-is-github-copilot)
  - [Copilot for code completion](#copilot-for-code-completion)
  - [Chatting with Copilot](#chatting-with-copilot)
  - [Automated testing explained](#automated-testing-explained)
  - [Configuring a test suite](#configuring-a-test-suite)
  - [AI and automated testing](#ai-and-automated-testing)
- [**2. Adding Tests to Existing Code with Copilot**](#2-adding-tests-to-existing-code-with-copilot) (4 videos)
  - [Identifying testable code](#identifying-testable-code)
  - [Generate your first tests](#generate-your-first-tests)
  - [Refactor with tests](#refactor-with-tests)
  - [Use Copilot slash commands](#use-copilot-slash-commands)
- [**3. Use Copilot to Generate Code from Tests**](#3-use-copilot-to-generate-code-from-tests) (3 videos)
  - [Write your tests to document business logic](#write-your-tests-to-document-business-logic)
  - [Generate code from tests](#generate-code-from-tests)
  - [Update functionality by writing more tests](#update-functionality-by-writing-more-tests)
- [**4. Real-World Benefits**](#4-real-world-benefits) (3 videos)
  - [Code quality](#code-quality)
  - [Running tests in CI/CD](#running-tests-in-cicd)
  - [Limiting risk by limiting exposure](#limiting-risk-by-limiting-exposure)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Software testing assistance with GitHub Copilot AI](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/software-testing-assistance-with-github-copilot-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/software-testing-assistance-with-github-copilot-ai?u=76281980&t=0)** - Would you like to deploy code to production without fear that you will accidentally break something critical? Automated testing will change the way you write code, and there's no faster way to get started than with AI. We know AI isn't going anywhere, and adding [[GitHub Copilot]] to your tool belt is not hard. I was blown away by the GitHub Copilot technical preview. It changed how I think about my code. When you add tests, you'll have even more confidence in your code. I'm Gary Kovar and I've shipped code for some of the largest websites on this planet and beyond. So enough chitchat. Let's learn about automated testing with AI using GitHub Copilot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub Copilot]] (3)
> **Tools:** github (3)
> **Speakers:** - would (1)

#### [What you should know](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-you-should-know?u=76281980&t=0)** - [Narrator] To get the most value out of this course, there are a couple things you should keep in mind. You should be a developer, in any language, with an interest in [[Test-Driven Development]]. My examples will be in [[PHP]], but feel free to work in whatever language you prefer. Familiarity with writing AI prompts might also help, but it's definitely not a requirement. The [[LinkedIn]] Learning library of AI courses is always expanding, and Programming Fundamentals is a great way to get started as a developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (1), [[PHP]] (1), [[LinkedIn]] (1)
> **CLI Commands:** php (1)
> **Env Vars:** php (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### [Using the exercise files](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The files I use in this course are stored on [[GitHub]]. There are branches for most videos in the format of chapter_video_B or underscore E, B for beginning state and E for end. This course uses GitHub Code Spaces. If you aren't familiar, Code Spaces is a great way to work in your browser. When you click on code, you can clone locally, like you normally do, or under the Code Spaces tab, look and see if you have a Code Space already running. If you have one on another branch, feel free to open that instead of creating another space on the current branch. And within Code Spaces, you can easily check out branches for other videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2)
> **Tools:** github (2)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Overview

[↑ Back to Table of Contents](#table-of-contents)

#### [What is GitHub Copilot?](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=0)** - [Narrator] [[GitHub Copilot]] is an AI coding assistant. By limiting scope to code, this AI is most useful for code completion, identifying bugs, and understanding code. This is the [github.com](https://github.com) [[Microsoft Copilot|Copilot]] features page. There's some interesting screenshots, tons of stats, and examples of how amazing Copilot is. More valuable, are the GitHub Copilot docs. You'll probably find that you interface with Copilot in your IDE, but it's also available via command line and in [[GitHub]] mobile. Broadly, Copilot does two things, code completion and chat. While there are different paid plans for Copilot, I'll be talking only about the individual plan in this course. Once you've signed up for Copilot, you need to enable it in your IDE. This course is using code spaces and enabling Copilot only requires adding the Copilot extension. The same holds true for the desktop version of VS code. A Copilot extension can also be installed in JetBrains IDEs. Once installed, the only setup Copilot needs is to connect to your GitHub account. I'm not going to walk through this, because every IDE I've used, drops you right into the wizard for setup after installing the Copilot extension. Your first interaction with Copilot will probably be code completion. When you start to type a function or leave a comment about the next line of code, Copilot will suggest a solution in ghost text.
>
> **[1:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=98)** If you like what you see, tap tab and that code is now in place. This is how I work with Copilot most of the time. Sometimes the suggestion is exactly what I need, but it is AI, and there will be mistakes. Another way to interact with Copilot is via chat. In your IDE, you can ask Copilot to do things like explain this code, or change the snippet to another language, even things like create a data transfer object class from this [[JSON]]. One bonus that I really enjoy, GitHub [[CLI]] has a Copilot extension available. This allows you to create complex shell commands with the help of Copilot. Copilot is an AI coding assistant. It's a very robust tool that continues to improve. Understanding how to leverage it is a superpower.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (19), [[GitHub]] (4), [[GitHub Copilot]] (2), [[JSON]] (1), [[CLI]] (1)
> **Tools:** github (6), command line (1), vs code (1)
> **Env Vars:** ide (4), json (1), cli (1)
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** setup (2)
> **CLI Commands:** find (1)
> **URLs:** [github.com](https://github.com) (1)
> **Speakers:** - [narrator] (1)

#### [Copilot for code completion](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=0)** - [Instructor] Code completion is where you will interact with [[Microsoft Copilot|CoPilot]] the most. Once installed, CoPilot will start suggesting code immediately. Code completion can mean a lot of things. There are times where CoPilot will understand you returning a bull and complete a conditional for you. Other times you can type a comment and CoPilot will attempt to infer your meaning and provide code for that. Here's a simple example in [[PHP]]. I'll start a function and give it a simple name, alphabetize by last name and I'll type hint it as an array of names. There are a ton of ways to solve this problem. You can probably think of two or three, along with questions about the data format in the array.
>
> **[0:51](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=51)** For now, we'll take co-pilot's approach. Another approach to prompt and co-pilot is to write a comment. I'll add a comment here. Validate the string is an email address. The ghost text shows a suggestion of a function, but I can be more explicit in my comment and suggest I want to reg exit. Being AI sometimes it's difficult to work with and there's ways we can solve this. Generally in this course, I'm not going to use frameworks, but for the purpose of this example, I think it's helpful. This is a [[Laravel]] model for a blog post. It has title, content, and an author id. I run the command to create a migration, and now I need to go populate the migration.
>
> **[1:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=118)** When I'm in the migration file Co-pilot knows about the post model and suggests appropriate columns. CoPilot doesn't really care how you prompt it For code completion, I started a function and it made a suggestion. I wrote a comment and it made a suggestion, an incorrect one, but a suggestion. Finally, I created a new file that has a relationship with another file and it made a suggestion. Code completion is powerful. It takes a little getting used to, and you can't blindly accept everything CoPilot suggests, but it will increase your output significantly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (6), [[PHP]] (1), [[Laravel]] (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** php (1)
> **Env Vars:** php (1)
> **Speakers:** - [instructor] (1)

#### [Chatting with Copilot](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=0)** - [Instructor] [[Microsoft Copilot|Copilot]] Chat is a powerful feature for code explanation, generation, and insights. It allows you to harness Copilot in places external to the code base. The first example I like is to highlight a section of code and then open chat. I'll ask Copilot to write a comment for this function.
>
> **[0:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=25)** The output is more verbose than something I could write as a comment, and skimming, it seems accurate. I highly encourage you to double check the work of Copilot everywhere. Also note that there is an option here to copy to clipboard, so I can paste it right in. And another prompt you can pass a Copilot is a request to explain. I'll take the same section of code,
>
> **[1:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=62)** and Copilot will explain what this is doing and how it works. I want to pause a moment. This function was originally generated by Copilot. A moment ago, Copilot created the doc block, and now it's explaining to me how it works. I frequently search the internet for simple things, problems I've solved before, but I don't quite remember. With Copilot, I don't need to leave my IDE. For example, "I can ask what is the [[Git]] command to select a single commit from another branch?"
>
> **[1:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=104)** Now, [[Google]] may or may not have answered that for me, but not only does Copilot remind me it's called cherry picking, but also the syntax for it. I'm using [[PHP]] for this course, so it would be logical to have to create classes, and pending PHP version, that can be somewhat verbose. So I'll ask Copilot to create a class that looks like a person. Create a PHP 8.0 class that has age, which is an integer, and name, an email that are strings. The output is valid, but it's PHP 8.0, which is what I asked for, but I can convert that to PHP 8.3 with constructor property promotion by saying use PHP 8.3 constructor property promotion.
>
> **[2:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=162)** Copilot knows that I'm talking about the class that it just generated. Oh, actually it doesn't. It thinks I'm using the function. So I'll say using the person class above.
>
> **[3:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=181)** I never called this class person, but that is what Copilot decided it should be. Using that, I can ask it to create a person interface and typescript. And there it is, and this should unlock a new line of thinking. How would I write the highlighted code in [[Python (Programming Language)|Python]] or Ruby, in [[JavaScript]], or AW3, or COBOL? I don't really know the last two languages, so I can't confirm, but it's fair to say that Copilot knows many more languages than you or I, even really obscure stuff. And this course is about automated testing, so it stands to reason I could ask it to write a test for the highlighted code. Copilot Chat is powerful. The last thing I want to call out is slash commands. I can type slash to see available slash commands and a short description of each. I'm going to remove a semicolon here, and then I'm going to type /fix. And as expected, Copilot finds the issue and fixes it. If I were to copy this, the semicolon will be replaced here. I'm going to restore that semicolon myself and make a trickier change, say return name,
>
> **[4:37](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=277)** just return a instead of name.
>
> **[4:45](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=285)** Let's see if Copilot catches it. It did, and sometimes it's good at that and sometimes it's not. And the last one I'm going to use is optimize. So let me highlight this function again. And Copilot is looking for areas for faster execution. I'd caution that this may send you down a path of less readable code, and I don't think it made any changes. It did add a return type of array, so that's cool. Copilot chat is really useful, and because it's context aware, it can really help move things forward quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (19), [[PHP]] (6), [[Git]] (1), [[Google]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** php (6), git (1), python (1), ruby (1), make (1)
> **Env Vars:** php (6), ide (1), aw3 (1), cobol (1)
> **Versions:** php 8 (4)
> **Definitions:** is a  (2), is an  (2)
> **Warnings:** note that (1), caution (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Automated testing explained](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=0)** - [Instructor] Automated testing is the process of creating statements of fact about your code. This means that if you make a change that violates those facts, you'll know. I want to illustrate this idea very simply. I'm going to revisit the simple add function. This function expects two integers and returns an integer. To demonstrate this function, I'll just go to the end of this file and call add directly and I'll pass it five and two. And [[Microsoft Copilot|Copilot]] really wants me to add a comment that shows that it's seven. When I run this through the [[PHP]] interpreter, the output is seven. This is not revolutionary code, I realize. I'm going to [[Jetpack Compose|compose]] and install a package called phpunit.
>
> **[0:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=52)** More on that in future videos, but the important thing to know is that phpunit is a test framework, meaning it provides the functionality you need to test your code. Now that testing framework is installed, I'm going to write a test. Remember, we are testing a simple function, so our test is going to be simple as well. First, I need a test directory, and then I'll create a new PHP class called Add_Test.
>
> **[1:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=87)** For this to work, it needs to extend TestCase. And note, Copilot wants to autocomplete. The issue is if I accept that I'm going to miss the import when I select the appropriate TestCase class. Now I need to add the setUp method.
>
> **[1:55](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=115)** And sometimes Copilot will realize that it needs to call the parent and sometimes it won't. And to require this file, I need to include everything above it.
>
> **[2:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=137)** Now I'll write the first test. Well, in this case, Copilot wants to write the first test, but I want to name this something a little different, test_add_function. And I was going to write this assertion, an assertion is how a test is identified as passing or failing, but Copilot beat me to the punch. In this case, I will assert that seven equals five plus two. Now I'll run the test using phpunit tests.
>
> **[2:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=176)** This tells me I have one passing test with one assertion. Cool. To review, I've created somewhat normal code with this add function, I included a testing framework, phpunit, and I've written one test and one assertion. While simple, this is very instructive. By itself this test has no value. It, like all PHP code, has to be executed to actually do anything. Writing tests that aren't executed often doesn't provide a lot of value. Also, I want to point out that this test is not complete. The single assertion assumes perfect intentions. What happens when you add an emoji and a string, or a float and an object? Because I didn't type into the args and the response those are valid TestCases. Very simply, automated tests are code that document how the code in your project should behave. Automated tests can help prevent regressions, but only if there are tests that cover that particular regression.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (5), [[PHP]] (3), [[Jetpack Compose|Compose]] (1)
> **CLI Commands:** php (3), make (1)
> **Code Identifiers:** setup (1), test_add_function (1)
> **Env Vars:** php (2)
> **UI Navigation:** go to (1), select the (1)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** install (1), setup (1)
> **Speakers:** - [instructor] (1)

#### [Configuring a test suite](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=0)** - [Instructor] Testing's a very broad discipline and something devs don't do enough of. You can spend a lot of time trying to define the types of tests and determining the best approach. At the end of the day, any tests are better than no tests. In this course, I'm using [[PHP]], so I'll use PHP unit as a starting point. But this video is not specifically about PHP, it's about how to think about tests and test configuration. Before I even get into the test suite configuration, I want to encourage you to find the test conventions in your language. For example, in Go, tests are always in the same folder as the code they're testing. PHP will typically have a test directory with tests in it that are set up to match the directory structure of what is under test. Taking that a step further, [[Laravel]] groups tests as feature and unit. Again, I don't want to get too bogged down into what type of tests you're writing. If you're testing a single method, it's probably unit test, but it might not be if that method or function uses many other parts of the system. This feature test validates the homepage returns a 200 response. An acronym to remember is AAA, arrange, act, assert. Arrange is about configuring the test system to work with, setting up objects, globals, getting the application to the specific state necessary to test. This can include things like prepping a test database. In Laravel, this is done with a refresh database trait. Act is performing the action or operation under test.
>
> **[1:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=99)** This could involve invoking a function, calling a method, or simulating a user interaction. In this test, act is line 19, making the request. This get. Assert. Finally, this compares the outcome of the act with the correct value. And line 21 is the assertion here. Let's run this test.
>
> **[2:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=133)** And once you've run a test, you'll see some indication of success or failure. Many test suites will abort testing at the first test failure that can often be configured to continue if that fits your use case better. The first a, arrange, might have caused you to pause, getting the application into a state necessary to test. If your app is making external calls or has some other external services to work with, you might need to use mocking in your testing. In PHP unit, you can set some globals, including a separate database for testing. A mocking utility lets you mock the external dependencies so you can test the logic in isolation. Most testing suites offer mocking or a third party tool will cover it for you. One last call out. Some frameworks support testing better than others. If your framework supports testing out of the box, but it seems to violate some sensibilities you have, it's easier to comply than fight it. Your code will be better for having tests. Regardless of language, learning to write tests is more about understanding test conventions and writing testable code than it is about learning new syntax.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), [[Laravel]] (2)
> **CLI Commands:** php (5), find (1)
> **Env Vars:** php (5), aaa (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [AI and automated testing](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=0)** - [Instructor] This is the heart of this course. You know that you or your team probably don't write enough tests and [[Microsoft Copilot|Copilot]] can help. To be clear, this is about using AI to support traditional automated testing. The first step to adding tests is finding the right things to test. Not all functions or classes are in a testable state. Identifying the right place to start with will help you continue to write tests once you get going. Asking Copilot to write tests for a function or method is a way to quickly see how complex the test will be.
>
> **[0:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=41)** And this test looks pretty simple. It passes an array and compares it to the expected sorted array. A tip, usually the first test I write in every app is a test that asserts that true equals true.
>
> **[1:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=63)** This is so I can test that the tests we harness is correctly configured. That'll help a lot. From there, I can be confident that as I add tests and assertions, there will be value in running them. So I'll say tests. Test, tests, run, and I will assert that true equals true. Now, in this directory, I already had a working test, but this acts as a debug that my test config is valid. And when I run this, I need a composer install before I run this. But when I run this, we have two tests and two assertions. Once I have some tests in place, I can start using tests to help me refactor more complex pieces into testable logic. A quick way to do this is to select a function and ask Copilot how to refactor it.
>
> **[2:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=147)** You'll end up with a handful of tinier functions that can then be tested. Using Copilot Chat directly for refactoring will get you started on the right foot, but also the explained slash command and the simplify command also bring a lot of value to landing the code in a testable state. Now that you're committed to writing tests, you don't have to always write them in response to the code you've written. You can start by documenting business logic in a test. Let me show you what I mean.
>
> **[3:04](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=184)** First, I'll write a subtraction function test, test, subtract, and of course, Copilot knows what the intent is. My IDE highlights that there's no subtract function that exists in this code base yet. So, I'll go over to example where the add function exists and Copilot infers from the test that I wrote, what the appropriate function is to make the tests pass. From that point, you can rinse and repeat, add a little more context in business logic, generate code, update tests. By using AI to help write tests, you will have better test coverage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (6)
> **CLI Commands:** composer (1), make (1)
> **Definitions:** is a  (2)
> **Env Vars:** ide (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 2. Adding Tests to Existing Code with Copilot

[↑ Back to Table of Contents](#table-of-contents)

#### [Identifying testable code](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=0)** - [Instructor] All code is testable. Some code is much harder to test than other code. If you think about writing your code in a way to make testing easier, you'll start to see some patterns emerge. I'm going to show an example in this video from a project I recently shipped. Here are three examples of link arrays I had to work with. Structurally they are simple, an ID and a full URL. The first item has an ID and a full URL. The second has no ID and a relative path. Finally, the third looks like the first but has no ID. There are a million ways data can end up in this state and none actually matter. I'm going to pseudo code this thing. So I'll have a function generate_link_from_array
>
> **[0:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=52)** that will take an array called $link_array,
>
> **[1:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=61)** and I'll say, if $link_array['id'] equals false,
>
> **[1:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=78)** I can return $link_array['url'].
>
> **[1:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=90)** Otherwise, I can return get_link_by_id, and use $link_array['id']. Ignore that get_link_by_id is not a real function. In the project I was working on, it resolved to something. So what's wrong with this logic? Well, if the ID is false, I'm returning the URL, whether it's relative or the full URL. So I can fix that by checking to see if the URL is a valid URL and if not building one. So I will pass in the $link_array['url'], and I will FILTER_VALIDATE_URL,
>
> **[2:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=142)** and in that case I'll return $link_array. Otherwise I will return build_home_url
>
> **[2:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=159)** with $link_array. Again, another function that doesn't exist. Let me introduce something that's going to frustrate you as it did to me. A reminder, this is a real world example. $example_link_array_4 looked like this.
>
> **[3:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=186)** After shipping a function to deal with some of these weird situations, a subset of link arrays was discovered that had the relative URL in the ID space. If I jump back to this sort of code here, I can address this in a few ways. I opted to add a check that I was dealing with an ID, or I'm sorry, an in integer. And then I can handle building the URL in the else portion. From here I need to update the else. I assume the ID could be a relative URL, it could also be a full URL. So I need to add the following down here.
>
> **[3:53](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=233)** And if this is false,
>
> **[4:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=247)** this function grew from simple to gross pretty quickly. There's similar logic in both conditions, but somewhat inverted. And due to the rate that it grew, the PRs for this were small and logical, but the net function is just bad. This can be tested, but it will need to be handled with at least six test cases. I'm just going to delete the entire function and approach this from a TDD perspective. First, I need to write a test.
>
> **[4:50](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=290)** And this will be class Link_Presenter_Test,
>
> **[4:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=298)** and it has to extend TestCase, and I need my setUp function.
>
> **[5:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=315)** Very nice that [[Microsoft Copilot|Copilot]] figured out how to include the appropriate path.
>
> **[5:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=325)** And I'm going to add my first test here. The test_can_generate_link_from_array.
>
> **[5:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=338)** So I will create an example link. The array looks good, but I need to fix the assertion. So I'll say $url = generate_link_from_array,
>
> **[5:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=358)** $example_link_array. And then my assertion will be, I actually don't want the markup, just the URL. And if I run this, it's going to fail, because I deleted this function entirely.
>
> **[6:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=385)** I'm going to go back here and add this function back in.
>
> **[6:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=394)** And Copilot did what I would do. I want you to note this. Instead of building logic into the function, it basically hard-coded results. So if I were to run my tests,
>
> **[6:55](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=415)** this, along with my other tests, pass. So now I'll add another test case.
>
> **[7:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=431)** And I'll say $url = get_url_for_link, and I'll say 1.
>
> **[7:28](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=448)** Actually, I need to call that function that exists. This still passes, even though what I'm calling is not an array, because I didn't type hint it. And so, because the URL is empty, we get the static string back. The original function though, generate_link_from_array, needs to handle non integer values for id. So I'm going to create a new function called create_url, which will look like this,
>
> **[8:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=486)** and I'll put in some of that original logic, filter_var.
>
> **[8:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=498)** I do want to return the URL there. If not, I can return build_url with the $url. And I need to function build_url now. So by parsing this out into pieces and adding these tests in here, my tests still pass. And I know that this case when I'm calling generate_link_from_array and only passing in an ID, that's eventually calling build_url and returning that same static string. We can test that by removing this.
>
> **[9:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=550)** Ooh, it failed. Oh, I need to update this to call create_url. And the test fails, although it's pretty darn close. In this case, it's failing, because it expects my string to not have a trailing slash in my assertion. When it's built in the link presenter, it includes a trailing slash. So when I make that a simple adjustment in the assertion, it runs again. By working from the test, I can add all the assertions appropriate to the different shapes of array that I have and grow out a set of functions that I can use to handle this crazy use case. I've grown it this far. You can imagine that a few more functions will be put in place to determine if the URL key in the array is empty, and if so, used to create URL with an id. I'll leave that to you. The key piece to recognize is that the logic in every function is now super simple. Will it always stay that way? Probably not. But that is the refactoring portion that we get out of [[Test-Driven Development]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (2), [[Test-Driven Development]] (1)
> **Code Identifiers:** link_array (7), generate_link_from_array (4), build_url (3), get_link_by_id (2), create_url (2)
> **Env Vars:** url (15), filter_validate_url (1), tdd (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Generate your first tests](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=0)** - [Instructor] The first step to automated testing is writing a test. Wait, don't leave yet. I know that's obvious, but it's an important concept. I'm going to show you how to do that. I already set up the test framework. In the opening chapter, I used a terrible example with these add and subtract functions. I'm going to push the idea further in this video using a common function in [[PHP]] frameworks, slugify. Generally speaking, the slugify function accepts a string and converts to a URL slug. This is slugify logic that I copied directly from Stack Overflow. It accepts a string, runs a regular expression, search/replace, trims, and then sets to lowercase before returning. Now, I run it and the output is what I expect. An example article name from an example article name. I told you this code came from Stack Overflow, but you can imagine this as logic in a new code base or code you wrote months ago. To move forward with confidence, it should be tested. First, I ask [[Microsoft Copilot|Copilot]] to create a test for this. And once that test is in place, I'll run it.
>
> **[1:23](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=83)** Slugify_Test. I'll fix that. And Copilot is jumping ahead in this video. I'm going to comment out these three. We'll come back to those in a moment. But this first assertion is an-example-article-name, and passed an example article name. Puts out what we expect. So before I run this test, instead of running all these, I'm going to ask Copilot to remind me how to run one specific test. I'll use the file path in this case. So vendor/bin/phpunit tests/Slugify_Test.
>
> **[2:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=142)** And this will fail because I did not set this up to include the slug file.
>
> **[2:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=154)** Isn't amazing, Copilot realized the same thing as I did. And now our test passes. So this is great. It's a test and it works. And I was going to say, now we can go wild, but Copilot beat me to the punch. I was going to duplicate the original assertion and add all sorts of ideas onto this, one with an exclamation point and question mark, leading spaces, trailing spaces, extra spaces. So let me uncomment these and let's see what happens.
>
> **[3:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=197)** Hmm, when I run tests, I see that I hit a failure on line, where does it say? Line 17? So two assertions are run, one test, one failure. It didn't run 18 or 19 at all. What happens in those next assertions? I don't know. So the correct approach here is to limit assertions per test and add more tests by adding more methods to the class. So I could write a test for this failure. What I'll do here is finish this one and I'll make this, that was not the method name I was going to use, but it feels pretty good. PHP unit does require test underscore, but otherwise, let's see what happens. And now my failure moves to line 20 as expected. I won't elevate each of these to a method by itself. You get the point, but it's important to note that each test runs the setup, tear-down methods. So if your setup requires a lot of database work, you may find that you're writing a few assertions per test to skip slow setup step. For something like this that doesn't require database work, a single assertion per test is okay. Also, as I called out, each test method has to start with test_ and has to be public. This is how PHP unit knows that it's working with a test. This class extends TestCase, also a requirement,
>
> **[4:54](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=294)** and the class has a suffix of _Test, the final requirement. Note that I didn't talk about fixing the slugify function. This video is about adding tests to existing logic. A failing test tells you that your logic isn't quite right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (5), [[PHP]] (3)
> **CLI Commands:** php (3), make (1), find (1)
> **Env Vars:** php (3), url (1)
> **Prerequisites:** setup (3), set up (1)
> **Documentation:** stack overflow (2)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### [Refactor with tests](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=0)** - [Instructor] Refactoring is about making tiny changes that cumulatively improve the code base. You probably already do this by default, identifying tiny issues as you work. Refactoring is an entire discipline. I'm going to focus on four things that make testing easier and make for a cleaner code base. First, identify a brittle function and add tests. This redirect function is responsible for the list of redirects, determining if redirects should take place, on line 13, and finally, returning the redirect. This might require extra mocking initially, and that's okay. The purpose of these initial tests is to lock into place how something works. This prevents you from adding hidden regressions. So I'm going to highlight this and ask [[Microsoft Copilot|Copilot]] to create tests for that. Now, not only will it create the test, it's going to explain what's being tested. And now I'll just copy this and drop it in our test directory.
>
> **[1:14](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=74)** I'm going to add a new folder for redirects.
>
> **[1:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=87)** And pasting in what Copilot came up with. It looks like it might not be going up enough levels, but it didn't know I was creating a redirects directory.
>
> **[1:45](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=105)** And I'm going to go ahead and run these tests. I haven't given them much review, but let's see what happens.
>
> **[1:59](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=119)** Now let me flag here that I'm testing something with header output in [[PHP]], and PHP in it is complex, and it needs output buffering to solve this. So I'm going to leave this as is with a test that gives us no useful output because on redirect we're returning header and dying before any test can run. This leads me to refactoring. I'm going to extract some functionality. I already showed that briefly, but I'm going to dig in further. This function has too much responsibility and so I'll highlight it and ask Copilot to refactor. I actually don't think refactor is a slash command, but that's okay, it figured out what I meant. And no surprise, the first thing Copilot does is extract the responsibility for providing the redirect maps, as it called them. So let's grab that,
>
> **[3:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=187)** and drop that in place. And I'm going to ask Copilot to write a test for this. Copilot is still trying to test everything. Tests for the highlighted function. Now this is pretty straightforward because it's a hard coded array, but in a situation where you're building this from other information, this test would be extremely useful. I'm going to take a quick detour. Copilot is also helpful at simplifying conditionals. Paste this code in here. Now imagine this is where I started. If it ends with lil, return this. Otherwise, if it ends with learning, return this, otherwise return null. I'm just going to see what Copilot comes up with here.
>
> **[4:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=257)** And it converts this into a for each, returning null by default unless a key exists. One of my favorite things to do in PHP is replace associative arrays with objects. With Copilot, that's even easier. So let me go back to this map and take an array and let me prompt Copilot to create a value object from it. This is an array of redirects with a from slug and a to url, make it make a value object. I'll roll this value object out in the future, but this is a cool trick that can modernize a PHP code base. Imagine how easy it is to test this value object versus this array. Leaning on Copilot to refactor is a great way to extract single responsibility functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (11), [[PHP]] (4)
> **CLI Commands:** make (4), php (4)
> **Definitions:** is a  (3), is an  (2)
> **Env Vars:** php (4)
> **Analogies:** imagine (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### [Use Copilot slash commands](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=0)** - [Instructor] I touched on / commands earlier, but they are so powerful, they are worth revisiting here. [[Microsoft Copilot|Copilot]] seems to add and remove / commands with regularity. In some cases, a single [[Microsoft Word|word]] works just as well. There used to be a /doc / command, and the first one I would turn to when looking at a new code base. Instead of using doc, I'll highlight a function and just type docblock. These kind of updates are a simple way to practice [[Git]] flow on a new project, but second, the generated docs are similar to how [[GitHub]] explains code. There definitely is a /explain command. In cases where an entire function or method doesn't need to be documented, maybe a single line or a few lines, you can read through the explanation and determine what documentation or inline comments might be necessary. I haven't mentioned it before, but Copilot often suggests some follow up questions. These can lead you down a rabbit hole if you aren't careful, or they can give you just what you need. In this case, Copilot knows that I'm recording a course about PHPUnit, so the prompt that it's asking me is how can I run unit tests for my [[PHP]] code using PHPUnit in Visual Studio Code? Not something pertinent to this conversation. Fix is great for when you paste some code that just doesn't quite work.
>
> **[1:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=93)** This is great for syntax issues. I've used its great effect for locating a missing closing tag. Running help is a good idea from time to time. It's how I bumped into the optimize command, but it also explains what is being taken into account. On top of files, Copilot takes different parts of your IDE into consideration when answering questions. This includes, but is not limited to, test results and failures, build and runtime logs, Active Git Repository, as well as details of the open project. Optimize is used to improve the runtime of selected code. This can get out of hand if you chase every optimization. Don't ever forget that code is for humans first and computers second. Keep your code legible for your team and for your future self. In this case, one of the first things Copilot suggests is using exit instead of die for clarity. Both exit and die are equivalent, but exit is often preferred for clarity. And of course, the last command that we've looked at is tests. To use the output of tests, you have to know how to run tests in a system. If I were to test some [[WordPress]] code here, I'd have a hard time actually running it without things like WP Browser configured. This is where writing testable code really pays off.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (5), [[Git]] (2), [[Microsoft Word|Word]] (1), [[GitHub]] (1), [[PHP]] (1)
> **CLI Commands:** git (2), php (1)
> **Env Vars:** php (1), ide (1)
> **Tools:** github (1), visual studio (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 3. Use Copilot to Generate Code from Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [Write your tests to document business logic](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=0)** - [Instructor] While automated testing is a step to limiting risk and preventing regressions, another major value is documenting the intent of business logic directly in your code base. I'm going to continue working with redirect logic. Here, I have existing logic and I could highlight some parts of it and ask co-pilot to generate tests. Instead, another wrinkle is to document code intent via tests. First, I'll create a new empty test function. And the first method I'll create is to capture the intended logic. This method is basic redirection, and in there I'll add a comment to indicate what I'm trying to test for. In this case, I'm testing that certain keywords always redirect to an external site.
>
> **[1:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=61)** Now I'm using [[PHP]] unit, which is [[Unit Testing]]. I don't have a test library to make a remote get request and observe the header response. That's okay because I can test the should redirect and redirect value logic. So I add a new method. Test should redirect.
>
> **[1:37](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=97)** And because it's a bool [[Microsoft Copilot|copilot]] has the context. So it suggests a pretty solid test. Let's add one more in here and now I'll add the test for redirect value because I just looked at that function and I wrote a test for should redirect. Copilot wants to automatically write a test for redirect value, so I'll accept that and let's look and see what it looks like. It seems solid. So now I'll run the tests.
>
> **[2:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=137)** And I see failures. What I want to flag is that the tests are now documenting breakage. Look at the test method as an entire piece, then think about what it would be like to be a new developer to the project. You can construct a pretty clear mental model from this test alone. Looking at test redirect value, we see that null does not match redirect learning on line 39, and that logic is because we're using string ends with. I'm not going to fix that now. Leaving that in place gives us something to fix in the future and it documents the breakage. I am going to add a method to test that invalid redirects do not redirect. So I'll call this public function test invalid redirects should not redirect.
>
> **[3:21](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=201)** We already know this redirect will fail, but it's captured in here and when we fix it in redirect value, that will resolve itself. As a developer, one of the first questions I would have for this feature to the product owner are what about trailing slashes followed by query arts be passed? So I'm going to add a test for trailing slash redirect.
>
> **[3:50](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=230)** And this I'm going to say, mark test incomplete.
>
> **[4:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=240)** That message is fine, but of course you could put something more specific in there. And I'll do the same for query arts and copilot, of course, has seen me do this in the process of recording this course so it wants to suggest the test with redirect, with query params. That's okay. In your use case, it might not have that context, so it may not suggest that, but that's where I was headed anyway. Now, if I run the tests, the same failures are in there and two are marked as incomplete. This is informative and I have two places to document business logic when the decision is made, how to handle trailing slashes, and query params. As you can see, documenting business logic and tests cannot only serve as a way to quickly get up to speed on a project, it can also document decisions that need to be made. And of course, copilot helped and led every step of the way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (4), [[PHP]] (1), [[Unit Testing]] (1)
> **CLI Commands:** php (1), make (1)
> **Env Vars:** php (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Generate code from tests](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=0)** - [Instructor] In true test driven development, tests are written first. This of course, means the first time you run them they fail. Then you write the least amount of code necessary to make them pass and run tests again. While this can feel extreme, it can be an effective way to write a lot of code in a hurry. I'm going to pick up where I left off and add test logic for dealing with a trailing slash. So this assert true should redirect foo
>
> **[0:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=41)** and foo with a trailing slash. This will of course fail when I run the tests because no logic has been implemented to deal with trailing slashes. And this time I'm going to call the test directly and as expected, failure. So the next step is to update should redirect. I'll add a comment about stripping the trailing slash and of course, co-pilot prompts the changes necessary. Now, this test was incomplete and I'm only testing should redirect, but it fails. And this failure points out a logic error I made. The error is that the array is fixed. I'm testing foo expecting bar, and that's nowhere in this code. The array should be injected to the should redirect function. So I'll update the signature and add an empty array for redirects. And then I was going to say, I'll check if it's empty, but [[Microsoft Copilot|Copilot]] will check if it's empty and get redirects from the function. And now I just need to remove that call. Now I need to update the test to inject the foo bar array.
>
> **[2:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=140)** Let's see if Copilot does it. Not quite, but pretty close. This should return bar.
>
> **[2:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=158)** I was waiting for it to auto complete that, and it didn't. And now the test pass. That handle should redirect, but the redirect value function will also need the same logic. So this has been a bit bi-directional, I've had co-pilot generate tests and then change code and make the test pass. I hope you recognize repeated code would be a code smell, doing the trailing slash check twice and injecting the redirect array. I could also take the same approach with query args, that's obviously going to add more duplicate logic. Definitely the wrong path. This thing has become really hard coded. Now, this is just scratching the surface on how to use tests to generate code. I'm going to take a chance to convert this procedural approach into an [[Object-Oriented Programming (OOP)|object-oriented programming]] approach. I want to think of redirects as a value object. If you aren't familiar, a value object is an immutable object that represents a specific value with no identity. So in this case, the value object will have a destination and a response status. So why not start by creating a test for the value object?
>
> **[3:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=238)** So I'll say the redirect VO equals new redirect VO of foo.
>
> **[4:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=251)** And this assert equals, I was going to call it key instead of URL, but close enough and we'll assert equals that if you get value, it'll be bar. Sure. And let's assert that the response header is a 301.
>
> **[4:36](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=276)** Look at that, it assumes status. So, of course, this will fail because redirect VO doesn't exist. But I'll ask Copilot, create the redirect VO class.
>
> **[4:54](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=294)** And this generates what I would expect. I could put this redirect value object into the redirects directory, I could use it. Interesting that when it generated it, the constructor accepts key value and status. And when I created this, I only included the key. Of course, that won't work, but pretty close. I hope you see here how generated tests with Copilot can turn into generated code. You still have to double check along the way. This output was quickly generated and sends us down a path to refactor and remove that duplicate logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (4), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### [Update functionality by writing more tests](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=0)** - [[Microsoft Copilot|Copilot]] uses the context of the code you have open to generate code. So if the code you have open are tests, it gives copilot the info necessary to build up your code base. I created a value object for redirects. Value objects come from domain-driven design. And this is not technically a value object because of the setter methods. A VO is immutable. Equality is not based on identity. This is not immutable. How important is that here? Well, not very. However, the generated code has too much extra stuff. First, I'm going to run the existing value object test and this should pass test redirect value, object in test redirect.
>
> **[1:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=63)** I spelled object wrong. While there is a copilot utility for the command line, it's not going to help with things like that. So these tests pass, but how do I tell a copilot to remove code? There's not really a way. I have tests, so I can manually remove these extra methods. I'll do that. And whenever I delete code, I always like to run the test again to make sure I didn't get something I didn't mean to. To make this a true VO, I need to add the ability to check equality. So in here in the test, I will add a new assertion.
>
> **[1:49](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=109)** This assert equals, actually I need assert true,
>
> **[1:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=118)** redirect VO equivalent, and this will be a new redirect VO.
>
> **[2:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=133)** Now, I'll jump over here and no surprise, copilot prompts the equivalent method. Now I've left the concept of redirect in a really messy state. There's duplicated logic and should redirect and redirect value. This is worth flagging. I could go over to redirect test and I could implement with query ARGs or copilot could, but the code is a mess. It needs to be cleaned up first. I have this silly redirect value object that's not even used in here. This is where I slow down. There are multiple ways to move forward, but I start by documenting some other relationships, even just in comments. I'll add a note around how to deal with A URL or at least part of the request. Query ARGs are, and the fragment is something.
>
> **[3:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=206)** This isn't a [[PHP]] course, but if it were, I'd call out that there's a common library for this kind of thing in PSR 18. Most web languages or libraries have something similar to this. I'm not going to implement that, but it's a very common pattern. What else? Well, I only need to check the redirect VO path and return to redirect VO object and then assemble the redirect from the request and the value object. So check if the path is in redirects,
>
> **[4:05](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=245)** and then I need to remove duplication in the functions. If it is, return a new redirect VO object,
>
> **[4:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=259)** and when I remove those, I should put those into a class. The next step is even further document the logic, and I'm going to do that in the same comment here. Path is compared to collection. Collection seems like an important idea of redirects of VOs if it matches. A new URL is built with the query ARGs and fragment.
>
> **[4:53](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=293)** Skimming this I see three new classes here. Request object, collection of value objects, and some kind of class to manage it all. Now, how would I create them? I'll write tests. I know you're shocked. I'm not going to implement each one of these here, but by taking the time to document in comments and not jumping right into code, I've given myself a path forward, either via test driven development or writing code directly in my IDE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (6), [[PHP]] (1)
> **Env Vars:** url (2), php (1), psr (1), ide (1)
> **CLI Commands:** make (2), php (1)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **Analogies:** similar to (1)
> **Speakers:** - copilot (1)


### 4. Real-World Benefits

[↑ Back to Table of Contents](#table-of-contents)

#### [Code quality](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=0)** - [Narrator] Tested code is higher quality code. The act of writing tests forces you to think through execution paths and simplify logic. I'm starting with the branch from chapter two, video three. This is the original logic for dealing with redirects. And at a glance it's mostly fine. It works. It only works with a specific array structure and get params aren't handled. Now I'm going to jump to branch chapter four, video one. And this was the final state I left this redirect file in. Previously it was 43 lines. Now it's only 46, so not a ton more. I'm going to call some parts out. First, there's this function should redirect that returns a bull that tells whether we should or shouldn't redirect. Then there's a redirect value that returns the value of the redirect. Both have repetitive logic, but the thing I really want to call attention to here are the tests. For a moment, ignore what this does and think through new developer experience. In the original, the logic was direct, but this is one of those files that can grow in a hurry. And when that happens, they tend to have momentum, slowly growing bigger and bigger, but never refactoring. These kinds of files also tend to be owned by one dev,
>
> **[1:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=93)** making it harder to change. By virtue of testing, I now have a bunch of functions that are documented with tests. If you're working with a specific function, you can come in here and see what it's supposed to do, perhaps add tests to figure out what it's not supposed to do. In addition, I have this new concept called a redirect value object, not implemented anywhere. Back in the test, I want to call out two things that testing exposed. First, what to do with trailing slashes. And second, what about query arcs? Now, I implemented logic for test to pass with trailing slashes. And when I jump over here, that's the duplicate logic, line 23 and line 34. This course is about how to use AI for such things. So I'm just going to ask [[Microsoft Copilot|Copilot]]. Line 23 and 34 are the same. How can I refactor that? This time, Copilot called it process URL. In previous tests of this, it called this a normalized URL function. Before I do that, I need to be able to store query arcs somewhere. And this is functional, so we really, then we need to pass 'em around from function to function. I'm going to ask Copilot to convert this into a class. Not only does it provide the output,
>
> **[3:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=186)** it renamed this to redirect handler. In previous tests, it called it URL handler. And logically, it doesn't take a lot to see the potential here. In fact, if I updated the constructor to pass in the array and the URL, I could put the value object to use. So I'm going to ask Copilot to do that. Can you update this? So a redirect VO is passed to the constructor, and the normalized URL is stored as a property. In some of my testing, Copilot didn't know about the redirect value object that I had created, so I had to ask it to use the existing redirect value object. And if I were to drop this in place, I'd have to update my tests to use the object created from this class rather than direct function calls. But I think this serves to demonstrate how Copilot is a useful tool. You need to know what you're shooting for and it will help generate quality code accordingly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (6)
> **Env Vars:** url (5)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### [Running tests in CI/CD](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=0)** - [Instructor] Automated tests are great. I hope at this point you're interested in including them in your project. But they only work if they are run regularly, and that's where CI/CD comes in. If you aren't familiar, CI/CD, [[Continuous Integration (CI)|continuous integration]] and [[Continuous Delivery (CD)|continuous delivery]], is a dev practice that enables shipping small changes quickly to production. There are many courses and videos about CI/CD here on [[LinkedIn]] Learning. Now part of using CI/CD requires shipping bug-free code. Wait, stop laughing. I know that's not actually a thing, but there is an entire class of bugs we can avoid with automated testing, that is, new regressions. I'm going to focus on [[GitHub]] Actions but only for syntax. There are many CI/CD providers. Here's an overview of how an action works. You define a workflow, which I see in the YAML file. It contains jobs which have steps, and they're triggered on an event. In this example, the event is push, but it could be a PR or many other things. So I'm going to my code base. First, you would need to create a directory, .github, with a directory, workflows, inside. This project already had some actions, so I didn't need to create it. Create a new file. This is a YAML file. GitHub Actions are always YAML files. And I'll ask [[Microsoft Copilot|Copilot]].
>
> **[1:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=99)** This is a GitHub Action file. Create the workflow and steps to run phpunit on each pull request.
>
> **[1:57](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=117)** Let's drop this in and take a look. It assumed pull requests to branches of main. This is using an older version of [[PHP]], and running PHP unit after composer install. This is pretty close to what I expected. PHP version not current, but this seems like it would work. I do want to warn you, as helpful as Copilot is, when I update YAML files, I find it does a lousy job of preserving indentation. Now, CI/CD is a vital part of automated testing, that is, running tests often. Using something like GitHub Actions allows you to run them automatically and on every PR. This will allow you to avoid regressions on anything you have tested and expose new areas to tests when bugs sneak through. I have often said, "How is that possible when running code with a test suite in place?" No matter how dry my code is, I find a way to break isolated things. Running my test suite in CI/CD prevents that from happening more frequently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[PHP]] (3), [[Microsoft Copilot|Copilot]] (2), [[Continuous Integration (CI)|Continuous integration]] (1), [[Continuous Delivery (CD)|Continuous delivery]] (1)
> **CLI Commands:** cd (7), php (3), find (2), composer (1)
> **Env Vars:** yaml (4), php (3)
> **Tools:** github (5)
> **Definitions:** is a  (4), is an  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### [Limiting risk by limiting exposure](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=0)** - [Instructor] Tests limit risk. Tests are the earliest indication that you have made a change that has side effects. Some of the best developers I've worked with had, what seemed to me, to be an ability to see the future and identify future project needs. By writing code that solves only the problem in front of you, you end up with small tested functions and classes you can assemble into something bigger. Kent Beck literally wrote the book on TDD. He's the originator of the idea. In the first chapter of his book, he walks through an example on dealing with money in an [[E-Commerce]] app. One of the things that surprised me was how much structure was underlying the logic on the front end. I'm going to follow Kent's example with the idea of a time off request. First before writing any code, I capture the feature and a to-do list. The feature. Update the HR system to allow employees to request time off. This request should include start/end date, employee, supervisor and status. Now you and I are developers. You probably started to think about architecture just like I did. Are employee and supervisor the same class? What status is available? Beck warns us to start with tests. So what are some simple things to test here? Well, start date must be in the future.
>
> **[1:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=102)** End date must be after start date. Employee and supervisor cannot be the same person. There is of course more to do. This list is the place to capture it. First I start by picking one. I'll just say I'm going to check the dates. Under the to do, I add the actual test logic. Test that a date is after another date. Think of your favorite programming language. How is date implemented? That will probably direct how you write this test and then the function to make it pass. But does comparing two dates worry you? Probably not. I'm going to add some more items to the to do list. Confirm the employee does not already have time off for those dates. Hmm, I don't know if that's a test. It's a test, but I don't know if it's specific enough as a function. I could also confirm the employee has enough time off available.
>
> **[3:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=193)** Both of those require knowing something about the underlying structure. Well, this one seems to indicate to me that there's a test there. Test that date ranges are not overlapping. That's a test that I can easily write. And the next part is asking, count the days off
>
> **[3:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=219)** and make sure it is not more than available. But available assumes that I understand what available means here. Those are three clear tests that provide building blocks for the time off request. And because these building blocks will have test coverage, the interaction at the abstraction layers that I build above it will be more stable and predictable. The discipline of distilling features down to the simplest tests underneath leaves you a to do list of known risks. Personally, I like to commit this list in the repo, but even keeping it in a local document is helpful. I encourage you to go try and write some tests for this feature, or rather I encourage you to go ask [[Microsoft Copilot|Copilot]] to write some tests for this feature.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[E-Commerce]] (1), [[Microsoft Copilot|Copilot]] (1)
> **CLI Commands:** make (2)
> **Env Vars:** tdd (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/next-steps?u=76281980&t=0)** - You did it, way to go. If you haven't already, install [[GitHub Copilot]] in your IDE and start writing code with the help of AI. Better yet, write automated tests first, then write code. If [[PHP]] is your language of choice, check out my course, Writing and Refactoring Testable PHP. If you prefer another language, there are tons of courses on [[Test-Driven Development]] in the library. I'd love to see the cool stuff you're building, so follow me on [[LinkedIn]].

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[GitHub Copilot]] (1), [[Test-Driven Development]] (1), [[LinkedIn]] (1)
> **Env Vars:** php (2), ide (1)
> **CLI Commands:** php (2)
> **Tools:** github (1)
> **Prerequisites:** install (1)
> **Speakers:** - you (1)


## Instructor

- [[Gary Kovar]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/software-testing-assistance-with-GitHub-Copilot-AI-3904213/codespaces)

## Skills Covered

- Software Testing
- AI Software Development
- Artificial Intelligence (AI)
- GitHub Copilot

## Path Context

### In [[Transform Your Programming with AI Coding Tools]]
← [[ChatGPT and SQL]] | **5 of 7** | [[Responsible GitHub Copilot- Creating Reliable Code Ethically]] →

### In [[Master GitHub Copilot]]
← [[Refactoring with GitHub Copilot]] | **8 of 8**

## Appears In

- [[Transform Your Programming with AI Coding Tools]]
- [[Master GitHub Copilot]]

## Related Courses

_Courses sharing skills:_

- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), AI Software Development, GitHub Copilot
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Practical GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[AI Orchestration- Foundations]] — Artificial Intelligence (AI), AI Software Development
- [[Welcome To The Building Ai Products Understanding The Workflow Professional Certificate]] — Artificial Intelligence (AI), AI Software Development

---

[↑ Back to top](#)