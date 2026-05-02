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
created: 2026-05-02
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

#### Software testing assistance with GitHub Copilot AI
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/software-testing-assistance-with-github-copilot-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/software-testing-assistance-with-github-copilot-ai?u=76281980&t=0)** - Would you like to deploy code to production without fear that you will accidentally break something critical?
>
> **[0:05](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/software-testing-assistance-with-github-copilot-ai?u=76281980&t=5)** Automated testing will change the way you write code, and there's no faster way to get started than with AI.
>
> **[0:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/software-testing-assistance-with-github-copilot-ai?u=76281980&t=11)** We know AI isn't going anywhere, and adding GitHub Copilot to your tool belt is not hard.
>
> **[0:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/software-testing-assistance-with-github-copilot-ai?u=76281980&t=17)** I was blown away by the GitHub Copilot technical preview.
>
> **[0:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/software-testing-assistance-with-github-copilot-ai?u=76281980&t=20)** It changed how I think about my code.
>
> **[0:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/software-testing-assistance-with-github-copilot-ai?u=76281980&t=22)** When you add tests, you'll have even more confidence in your code.
>
> **[0:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/software-testing-assistance-with-github-copilot-ai?u=76281980&t=26)** I'm Gary Kovar and I've shipped code for some of the largest websites on this planet and beyond.
>
> **[0:32](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/software-testing-assistance-with-github-copilot-ai?u=76281980&t=32)** So enough chitchat.
>
> **[0:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/software-testing-assistance-with-github-copilot-ai?u=76281980&t=34)** Let's learn about automated testing with AI using GitHub Copilot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (3), [[GitHub Copilot]] (3)
> **Tools:** github (3)
> **Speakers:** - would (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-you-should-know?u=76281980&t=0)** - [Narrator] To get the most value out of this course, there are a couple things you should keep in mind.
>
> **[0:04](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-you-should-know?u=76281980&t=4)** You should be a developer, in any language, with an interest in test-driven development.
>
> **[0:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-you-should-know?u=76281980&t=10)** My examples will be in PHP, but feel free to work in whatever language you prefer.
>
> **[0:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-you-should-know?u=76281980&t=16)** Familiarity with writing AI prompts might also help, but it's definitely not a requirement.
>
> **[0:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-you-should-know?u=76281980&t=22)** The LinkedIn Learning library of AI courses is always expanding, and Programming Fundamentals is a great way to get started as a developer.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ai (2), [[Test-Driven Development]] (1), [[PHP]] (1), [[LinkedIn]] (1), [[Programming]] (1)
> **CLI Commands:** php (1)
> **Env Vars:** php (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/using-the-exercise-files?u=76281980&t=0)** - [Instructor] The files I use in this course are stored on GitHub.
>
> **[0:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/using-the-exercise-files?u=76281980&t=3)** There are branches for most videos in the format of chapter_video_B or underscore E, B for beginning state and E for end.
>
> **[0:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/using-the-exercise-files?u=76281980&t=16)** This course uses GitHub Code Spaces.
>
> **[0:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/using-the-exercise-files?u=76281980&t=19)** If you aren't familiar, Code Spaces is a great way to work in your browser.
>
> **[0:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/using-the-exercise-files?u=76281980&t=24)** When you click on code, you can clone locally, like you normally do, or under the Code Spaces tab, look and see if you have a Code Space already running.
>
> **[0:32](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/using-the-exercise-files?u=76281980&t=32)** If you have one on another branch, feel free to open that instead of creating another space on the current branch.
>
> **[0:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/using-the-exercise-files?u=76281980&t=41)** And within Code Spaces, you can easily check out branches for other videos.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2)
> **Tools:** github (2)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 1. Overview

[↑ Back to Table of Contents](#table-of-contents)

#### What is GitHub Copilot?
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=0)** - [Narrator] GitHub Copilot is an AI coding assistant.
>
> **[0:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=3)** By limiting scope to code, this AI is most useful for code completion, identifying bugs, and understanding code.
>
> **[0:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=12)** This is the [github.com](https://github.com) Copilot features page.
>
> **[0:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=15)** There's some interesting screenshots, tons of stats, and examples of how amazing Copilot is.
>
> **[0:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=24)** More valuable, are the GitHub Copilot docs.
>
> **[0:28](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=28)** You'll probably find that you interface with Copilot in your IDE, but it's also available via command line and in GitHub mobile.
>
> **[0:36](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=36)** Broadly, Copilot does two things, code completion and chat.
>
> **[0:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=41)** While there are different paid plans for Copilot, I'll be talking only about the individual plan in this course.
>
> **[0:47](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=47)** Once you've signed up for Copilot, you need to enable it in your IDE.
>
> **[0:51](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=51)** This course is using code spaces and enabling Copilot only requires adding the Copilot extension.
>
> **[0:57](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=57)** The same holds true for the desktop version of VS code.
>
> **[1:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=61)** A Copilot extension can also be installed in JetBrains IDEs.
>
> **[1:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=66)** Once installed, the only setup Copilot needs is to connect to your GitHub account.
>
> **[1:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=70)** I'm not going to walk through this, because every IDE I've used, drops you right into the wizard for setup after installing the Copilot extension.
>
> **[1:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=78)** Your first interaction with Copilot will probably be code completion.
>
> **[1:23](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=83)** When you start to type a function or leave a comment about the next line of code, Copilot will suggest a solution in ghost text.
>
> **[1:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=98)** If you like what you see, tap tab and that code is now in place.
>
> **[1:43](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=103)** This is how I work with Copilot most of the time.
>
> **[1:46](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=106)** Sometimes the suggestion is exactly what I need, but it is AI, and there will be mistakes.
>
> **[1:53](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=113)** Another way to interact with Copilot is via chat.
>
> **[1:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=116)** In your IDE, you can ask Copilot to do things like explain this code, or change the snippet to another language, even things like create a data transfer object class from this JSON.
>
> **[2:14](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=134)** One bonus that I really enjoy, GitHub CLI has a Copilot extension available.
>
> **[2:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=140)** This allows you to create complex shell commands with the help of Copilot.
>
> **[2:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=144)** Copilot is an AI coding assistant.
>
> **[2:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=146)** It's a very robust tool that continues to improve.
>
> **[2:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/what-is-github-copilot?u=76281980&t=150)** Understanding how to leverage it is a superpower.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (19), ai (4), [[GitHub]] (4), [[GitHub Copilot]] (2), next (1)
> **Tools:** github (6), command line (1), vs code (1)
> **Env Vars:** ide (4), json (1), cli (1)
> **Definitions:** is an  (2), is a  (1)
> **Prerequisites:** setup (2)
> **CLI Commands:** find (1)
> **URLs:** [github.com](https://github.com) (1)
> **Speakers:** - [narrator] (1)

#### Copilot for code completion
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=0)** - [Instructor] Code completion is where you will interact with CoPilot the most.
>
> **[0:04](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=4)** Once installed, CoPilot will start suggesting code immediately.
>
> **[0:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=8)** Code completion can mean a lot of things.
>
> **[0:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=10)** There are times where CoPilot will understand you returning a bull and complete a conditional for you.
>
> **[0:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=15)** Other times you can type a comment and CoPilot will attempt to infer your meaning and provide code for that.
>
> **[0:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=22)** Here's a simple example in PHP.
>
> **[0:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=24)** I'll start a function and give it a simple name, alphabetize by last name and I'll type hint it as an array of names.
>
> **[0:37](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=37)** There are a ton of ways to solve this problem.
>
> **[0:40](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=40)** You can probably think of two or three, along with questions about the data format in the array.
>
> **[0:51](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=51)** For now, we'll take co-pilot's approach.
>
> **[0:55](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=55)** Another approach to prompt and co-pilot is to write a comment.
>
> **[0:59](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=59)** I'll add a comment here.
>
> **[1:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=60)** Validate the string is an email address.
>
> **[1:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=68)** The ghost text shows a suggestion of a function, but I can be more explicit in my comment and suggest I want to reg exit.
>
> **[1:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=80)** Being AI sometimes it's difficult to work with and there's ways we can solve this.
>
> **[1:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=85)** Generally in this course, I'm not going to use frameworks, but for the purpose of this example, I think it's helpful.
>
> **[1:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=94)** This is a Laravel model for a blog post.
>
> **[1:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=98)** It has title, content, and an author id.
>
> **[1:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=104)** I run the command to create a migration, and now I need to go populate the migration.
>
> **[1:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=118)** When I'm in the migration file Co-pilot knows about the post model and suggests appropriate columns.
>
> **[2:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=126)** CoPilot doesn't really care how you prompt it For code completion, I started a function and it made a suggestion.
>
> **[2:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=132)** I wrote a comment and it made a suggestion, an incorrect one, but a suggestion.
>
> **[2:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=138)** Finally, I created a new file that has a relationship with another file and it made a suggestion.
>
> **[2:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=144)** Code completion is powerful.
>
> **[2:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/copilot-for-code-completion?u=76281980&t=145)** It takes a little getting used to, and you can't blindly accept everything CoPilot suggests, but it will increase your output significantly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (6), prompt (2), [[PHP]] (1), data (1), ai (1)
> **Definitions:** is an  (1), is a  (1)
> **CLI Commands:** php (1)
> **Env Vars:** php (1)
> **Speakers:** - [instructor] (1)

#### Chatting with Copilot
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=0)** - [Instructor] Copilot Chat is a powerful feature for code explanation, generation, and insights.
>
> **[0:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=6)** It allows you to harness Copilot in places external to the code base.
>
> **[0:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=11)** The first example I like is to highlight a section of code and then open chat.
>
> **[0:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=16)** I'll ask Copilot to write a comment for this function.
>
> **[0:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=25)** The output is more verbose than something I could write as a comment, and skimming, it seems accurate.
>
> **[0:35](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=35)** I highly encourage you to double check the work of Copilot everywhere.
>
> **[0:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=39)** Also note that there is an option here to copy to clipboard, so I can paste it right in.
>
> **[0:48](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=48)** And another prompt you can pass a Copilot is a request to explain.
>
> **[0:53](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=53)** I'll take the same section of code,
>
> **[1:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=62)** and Copilot will explain what this is doing and how it works.
>
> **[1:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=66)** I want to pause a moment.
>
> **[1:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=70)** This function was originally generated by Copilot.
>
> **[1:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=73)** A moment ago, Copilot created the doc block, and now it's explaining to me how it works.
>
> **[1:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=79)** I frequently search the internet for simple things, problems I've solved before, but I don't quite remember.
>
> **[1:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=85)** With Copilot, I don't need to leave my IDE.
>
> **[1:28](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=88)** For example, "I can ask what is the Git command to select a single commit from another branch?"
>
> **[1:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=104)** Now, Google may or may not have answered that for me, but not only does Copilot remind me it's called cherry picking, but also the syntax for it.
>
> **[1:54](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=114)** I'm using PHP for this course, so it would be logical to have to create classes, and pending PHP version, that can be somewhat verbose.
>
> **[2:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=122)** So I'll ask Copilot to create a class that looks like a person.
>
> **[2:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=128)** Create a PHP 8.0 class that has age, which is an integer, and name, an email that are strings.
>
> **[2:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=139)** The output is valid, but it's PHP 8.0, which is what I asked for, but I can convert that to PHP 8.3 with constructor property promotion by saying use PHP 8.3 constructor property promotion.
>
> **[2:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=162)** Copilot knows that I'm talking about the class that it just generated.
>
> **[2:47](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=167)** Oh, actually it doesn't.
>
> **[2:48](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=168)** It thinks I'm using the function.
>
> **[2:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=172)** So I'll say using the person class above.
>
> **[3:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=181)** I never called this class person, but that is what Copilot decided it should be.
>
> **[3:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=187)** Using that, I can ask it to create a person interface and typescript.
>
> **[3:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=195)** And there it is, and this should unlock a new line of thinking.
>
> **[3:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=200)** How would I write the highlighted code in Python or Ruby, in JavaScript, or AW3, or COBOL?
>
> **[3:32](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=212)** I don't really know the last two languages, so I can't confirm, but it's fair to say that Copilot knows many more languages than you or I, even really obscure stuff.
>
> **[3:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=222)** And this course is about automated testing, so it stands to reason I could ask it to write a test for the highlighted code.
>
> **[3:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=236)** Copilot Chat is powerful.
>
> **[3:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=238)** The last thing I want to call out is slash commands.
>
> **[4:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=242)** I can type slash to see available slash commands and a short description of each.
>
> **[4:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=248)** I'm going to remove a semicolon here, and then I'm going to type /fix.
>
> **[4:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=259)** And as expected, Copilot finds the issue and fixes it.
>
> **[4:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=264)** If I were to copy this, the semicolon will be replaced here.
>
> **[4:28](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=268)** I'm going to restore that semicolon myself and make a trickier change, say return name, just return a instead of name.
>
> **[4:45](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=285)** Let's see if Copilot catches it.
>
> **[4:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=292)** It did, and sometimes it's good at that and sometimes it's not.
>
> **[5:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=301)** And the last one I'm going to use is optimize.
>
> **[5:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=303)** So let me highlight this function again.
>
> **[5:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=310)** And Copilot is looking for areas for faster execution.
>
> **[5:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=313)** I'd caution that this may send you down a path of less readable code, and I don't think it made any changes.
>
> **[5:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=322)** It did add a return type of array, so that's cool.
>
> **[5:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/chatting-with-copilot?u=76281980&t=326)** Copilot chat is really useful, and because it's context aware, it can really help move things forward quickly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (19), [[PHP]] (6), feature (1), prompt (1), [[Search]] (1)
> **CLI Commands:** php (6), git (1), python (1), ruby (1), make (1)
> **Env Vars:** php (6), ide (1), aw3 (1), cobol (1)
> **Versions:** php 8 (4)
> **Definitions:** is a  (2), is an  (2)
> **Warnings:** note that (1), caution (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Automated testing explained
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=0)** - [Instructor] Automated testing is the process of creating statements of fact about your code.
>
> **[0:05](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=5)** This means that if you make a change that violates those facts, you'll know.
>
> **[0:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=9)** I want to illustrate this idea very simply.
>
> **[0:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=12)** I'm going to revisit the simple add function.
>
> **[0:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=15)** This function expects two integers and returns an integer.
>
> **[0:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=20)** To demonstrate this function, I'll just go to the end of this file and call add directly and I'll pass it five and two.
>
> **[0:29](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=29)** And Copilot really wants me to add a comment that shows that it's seven.
>
> **[0:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=33)** When I run this through the php interpreter, the output is seven.
>
> **[0:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=39)** This is not revolutionary code, I realize.
>
> **[0:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=42)** I'm going to compose and install a package called phpunit.
>
> **[0:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=52)** More on that in future videos, but the important thing to know is that phpunit is a test framework, meaning it provides the functionality you need to test your code.
>
> **[1:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=63)** Now that testing framework is installed, I'm going to write a test.
>
> **[1:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=67)** Remember, we are testing a simple function, so our test is going to be simple as well.
>
> **[1:14](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=74)** First, I need a test directory, and then I'll create a new PHP class called Add_Test.
>
> **[1:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=87)** For this to work, it needs to extend TestCase.
>
> **[1:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=93)** And note, Copilot wants to autocomplete.
>
> **[1:36](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=96)** The issue is if I accept that I'm going to miss the import when I select the appropriate TestCase class.
>
> **[1:46](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=106)** Now I need to add the setUp method.
>
> **[1:55](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=115)** And sometimes Copilot will realize that it needs to call the parent and sometimes it won't.
>
> **[2:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=121)** And to require this file, I need to include everything above it.
>
> **[2:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=137)** Now I'll write the first test.
>
> **[2:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=139)** Well, in this case, Copilot wants to write the first test, but I want to name this something a little different, test_add_function.
>
> **[2:32](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=152)** And I was going to write this assertion, an assertion is how a test is identified as passing or failing, but Copilot beat me to the punch.
>
> **[2:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=161)** In this case, I will assert that seven equals five plus two.
>
> **[2:45](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=165)** Now I'll run the test using phpunit tests.
>
> **[2:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=176)** This tells me I have one passing test with one assertion.
>
> **[2:59](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=179)** Cool.
>
> **[3:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=181)** To review, I've created somewhat normal code with this add function, I included a testing framework, phpunit, and I've written one test and one assertion.
>
> **[3:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=196)** While simple, this is very instructive.
>
> **[3:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=199)** By itself this test has no value.
>
> **[3:21](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=201)** It, like all PHP code, has to be executed to actually do anything.
>
> **[3:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=206)** Writing tests that aren't executed often doesn't provide a lot of value.
>
> **[3:31](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=211)** Also, I want to point out that this test is not complete.
>
> **[3:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=214)** The single assertion assumes perfect intentions.
>
> **[3:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=218)** What happens when you add an emoji and a string, or a float and an object?
>
> **[3:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=224)** Because I didn't type into the args and the response those are valid TestCases.
>
> **[3:50](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=230)** Very simply, automated tests are code that document how the code in your project should behave.
>
> **[3:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/automated-testing-explained?u=76281980&t=236)** Automated tests can help prevent regressions, but only if there are tests that cover that particular regression.

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

#### Configuring a test suite
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=0)** - [Instructor] Testing's a very broad discipline and something devs don't do enough of.
>
> **[0:05](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=5)** You can spend a lot of time trying to define the types of tests and determining the best approach.
>
> **[0:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=10)** At the end of the day, any tests are better than no tests.
>
> **[0:14](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=14)** In this course, I'm using PHP, so I'll use PHP unit as a starting point.
>
> **[0:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=19)** But this video is not specifically about PHP, it's about how to think about tests and test configuration.
>
> **[0:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=25)** Before I even get into the test suite configuration, I want to encourage you to find the test conventions in your language.
>
> **[0:32](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=32)** For example, in Go, tests are always in the same folder as the code they're testing.
>
> **[0:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=38)** PHP will typically have a test directory with tests in it that are set up to match the directory structure of what is under test.
>
> **[0:46](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=46)** Taking that a step further, Laravel groups tests as feature and unit.
>
> **[0:51](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=51)** Again, I don't want to get too bogged down into what type of tests you're writing.
>
> **[0:55](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=55)** If you're testing a single method, it's probably unit test, but it might not be if that method or function uses many other parts of the system.
>
> **[1:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=63)** This feature test validates the homepage returns a 200 response.
>
> **[1:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=68)** An acronym to remember is AAA, arrange, act, assert.
>
> **[1:14](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=74)** Arrange is about configuring the test system to work with, setting up objects, globals, getting the application to the specific state necessary to test.
>
> **[1:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=84)** This can include things like prepping a test database.
>
> **[1:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=87)** In Laravel, this is done with a refresh database trait.
>
> **[1:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=94)** Act is performing the action or operation under test.
>
> **[1:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=99)** This could involve invoking a function, calling a method, or simulating a user interaction.
>
> **[1:45](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=105)** In this test, act is line 19, making the request.
>
> **[1:50](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=110)** This get.
>
> **[1:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=112)** Assert.
>
> **[1:53](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=113)** Finally, this compares the outcome of the act with the correct value.
>
> **[1:57](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=117)** And line 21 is the assertion here.
>
> **[2:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=122)** Let's run this test.
>
> **[2:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=133)** And once you've run a test, you'll see some indication of success or failure.
>
> **[2:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=137)** Many test suites will abort testing at the first test failure that can often be configured to continue if that fits your use case better.
>
> **[2:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=147)** The first a, arrange, might have caused you to pause, getting the application into a state necessary to test.
>
> **[2:35](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=155)** If your app is making external calls or has some other external services to work with, you might need to use mocking in your testing.
>
> **[2:43](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=163)** In PHP unit, you can set some globals, including a separate database for testing.
>
> **[2:50](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=170)** A mocking utility lets you mock the external dependencies so you can test the logic in isolation.
>
> **[2:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=176)** Most testing suites offer mocking or a third party tool will cover it for you.
>
> **[3:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=181)** One last call out.
>
> **[3:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=182)** Some frameworks support testing better than others.
>
> **[3:05](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=185)** If your framework supports testing out of the box, but it seems to violate some sensibilities you have, it's easier to comply than fight it.
>
> **[3:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=192)** Your code will be better for having tests.
>
> **[3:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/configuring-a-test-suite?u=76281980&t=195)** Regardless of language, learning to write tests is more about understanding test conventions and writing testable code than it is about learning new syntax.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (5), database (3), [[Laravel]] (2), feature (2), application (2)
> **CLI Commands:** php (5), find (1)
> **Env Vars:** php (5), aaa (1)
> **Analogies:** for example (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### AI and automated testing
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=0)** - [Instructor] This is the heart of this course.
>
> **[0:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=2)** You know that you or your team probably don't write enough tests and Copilot can help.
>
> **[0:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=8)** To be clear, this is about using AI to support traditional automated testing.
>
> **[0:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=13)** The first step to adding tests is finding the right things to test.
>
> **[0:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=17)** Not all functions or classes are in a testable state.
>
> **[0:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=22)** Identifying the right place to start with will help you continue to write tests once you get going.
>
> **[0:28](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=28)** Asking Copilot to write tests for a function or method is a way to quickly see how complex the test will be.
>
> **[0:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=41)** And this test looks pretty simple.
>
> **[0:43](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=43)** It passes an array and compares it to the expected sorted array.
>
> **[0:47](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=47)** A tip, usually the first test I write in every app is a test that asserts that true equals true.
>
> **[1:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=63)** This is so I can test that the tests we harness is correctly configured.
>
> **[1:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=72)** That'll help a lot.
>
> **[1:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=80)** From there, I can be confident that as I add tests and assertions, there will be value in running them.
>
> **[1:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=86)** So I'll say tests.
>
> **[1:29](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=89)** Test, tests, run, and I will assert that true equals true.
>
> **[1:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=101)** Now, in this directory, I already had a working test, but this acts as a debug that my test config is valid.
>
> **[1:50](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=110)** And when I run this, I need a composer install before I run this.
>
> **[1:59](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=119)** But when I run this, we have two tests and two assertions.
>
> **[2:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=127)** Once I have some tests in place, I can start using tests to help me refactor more complex pieces into testable logic.
>
> **[2:14](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=134)** A quick way to do this is to select a function and ask Copilot how to refactor it.
>
> **[2:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=147)** You'll end up with a handful of tinier functions that can then be tested.
>
> **[2:32](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=152)** Using Copilot Chat directly for refactoring will get you started on the right foot, but also the explained slash command and the simplify command also bring a lot of value to landing the code in a testable state.
>
> **[2:47](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=167)** Now that you're committed to writing tests, you don't have to always write them in response to the code you've written.
>
> **[2:53](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=173)** You can start by documenting business logic in a test.
>
> **[2:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=176)** Let me show you what I mean.
>
> **[3:04](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=184)** First, I'll write a subtraction function test, test, subtract, and of course, Copilot knows what the intent is.
>
> **[3:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=199)** My IDE highlights that there's no subtract function that exists in this code base yet.
>
> **[3:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=205)** So, I'll go over to example where the add function exists and Copilot infers from the test that I wrote, what the appropriate function is to make the tests pass.
>
> **[3:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=219)** From that point, you can rinse and repeat, add a little more context in business logic, generate code, update tests.
>
> **[3:48](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/ai-and-automated-testing?u=76281980&t=228)** By using AI to help write tests, you will have better test coverage.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (6), ai (2), business (2)
> **CLI Commands:** composer (1), make (1)
> **Definitions:** is a  (2)
> **Env Vars:** ide (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)


### 2. Adding Tests to Existing Code with Copilot

[↑ Back to Table of Contents](#table-of-contents)

#### Identifying testable code
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=0)** - [Instructor] All code is testable.
>
> **[0:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=2)** Some code is much harder to test than other code.
>
> **[0:04](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=4)** If you think about writing your code in a way to make testing easier, you'll start to see some patterns emerge.
>
> **[0:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=11)** I'm going to show an example in this video from a project I recently shipped.
>
> **[0:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=15)** Here are three examples of link arrays I had to work with.
>
> **[0:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=19)** Structurally they are simple, an ID and a full URL.
>
> **[0:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=24)** The first item has an ID and a full URL.
>
> **[0:28](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=28)** The second has no ID and a relative path.
>
> **[0:31](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=31)** Finally, the third looks like the first but has no ID.
>
> **[0:35](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=35)** There are a million ways data can end up in this state and none actually matter.
>
> **[0:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=39)** I'm going to pseudo code this thing.
>
> **[0:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=42)** So I'll have a function generate_link_from_array
>
> **[0:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=52)** that will take an array called $link_array,
>
> **[1:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=61)** and I'll say, if $link_array['id'] equals false,
>
> **[1:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=78)** I can return $link_array['url'].
>
> **[1:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=90)** Otherwise, I can return get_link_by_id, and use $link_array['id'].
>
> **[1:40](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=100)** Ignore that get_link_by_id is not a real function.
>
> **[1:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=104)** In the project I was working on, it resolved to something.
>
> **[1:47](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=107)** So what's wrong with this logic?
>
> **[1:49](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=109)** Well, if the ID is false, I'm returning the URL, whether it's relative or the full URL.
>
> **[1:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=116)** So I can fix that by checking to see if the URL is a valid URL and if not building one.
>
> **[2:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=122)** So I will pass in the $link_array['url'], and I will FILTER_VALIDATE_URL,
>
> **[2:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=142)** and in that case I'll return $link_array.
>
> **[2:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=145)** Otherwise I will return build_home_url
>
> **[2:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=159)** with $link_array.
>
> **[2:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=164)** Again, another function that doesn't exist.
>
> **[2:47](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=167)** Let me introduce something that's going to frustrate you as it did to me.
>
> **[2:51](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=171)** A reminder, this is a real world example.
>
> **[2:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=176)** $example_link_array_4 looked like this.
>
> **[3:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=186)** After shipping a function to deal with some of these weird situations, a subset of link arrays was discovered that had the relative URL in the ID space.
>
> **[3:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=196)** If I jump back to this sort of code here, I can address this in a few ways.
>
> **[3:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=202)** I opted to add a check that I was dealing with an ID, or I'm sorry, an in integer.
>
> **[3:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=214)** And then I can handle building the URL in the else portion.
>
> **[3:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=218)** From here I need to update the else.
>
> **[3:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=219)** I assume the ID could be a relative URL, it could also be a full URL.
>
> **[3:43](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=223)** So I need to add the following down here.
>
> **[3:53](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=233)** And if this is false,
>
> **[4:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=247)** this function grew from simple to gross pretty quickly.
>
> **[4:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=251)** There's similar logic in both conditions, but somewhat inverted.
>
> **[4:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=256)** And due to the rate that it grew, the PRs for this were small and logical, but the net function is just bad.
>
> **[4:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=264)** This can be tested, but it will need to be handled with at least six test cases.
>
> **[4:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=270)** I'm just going to delete the entire function and approach this from a TDD perspective.
>
> **[4:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=279)** First, I need to write a test.
>
> **[4:50](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=290)** And this will be class Link_Presenter_Test,
>
> **[4:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=298)** and it has to extend TestCase, and I need my setUp function.
>
> **[5:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=315)** Very nice that Copilot figured out how to include the appropriate path.
>
> **[5:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=325)** And I'm going to add my first test here.
>
> **[5:28](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=328)** The test_can_generate_link_from_array.
>
> **[5:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=338)** So I will create an example link.
>
> **[5:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=342)** The array looks good, but I need to fix the assertion.
>
> **[5:46](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=346)** So I'll say $url = generate_link_from_array,
>
> **[5:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=358)** $example_link_array.
>
> **[6:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=361)** And then my assertion will be, I actually don't want the markup, just the URL.
>
> **[6:14](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=374)** And if I run this, it's going to fail, because I deleted this function entirely.
>
> **[6:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=385)** I'm going to go back here and add this function back in.
>
> **[6:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=394)** And Copilot did what I would do. I want you to note this.
>
> **[6:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=398)** Instead of building logic into the function, it basically hard-coded results.
>
> **[6:46](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=406)** So if I were to run my tests,
>
> **[6:55](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=415)** this, along with my other tests, pass.
>
> **[7:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=420)** So now I'll add another test case.
>
> **[7:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=431)** And I'll say $url = get_url_for_link, and I'll say 1.
>
> **[7:28](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=448)** Actually, I need to call that function that exists.
>
> **[7:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=453)** This still passes, even though what I'm calling is not an array, because I didn't type hint it.
>
> **[7:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=459)** And so, because the URL is empty, we get the static string back.
>
> **[7:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=464)** The original function though, generate_link_from_array, needs to handle non integer values for id.
>
> **[7:51](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=471)** So I'm going to create a new function called create_url, which will look like this,
>
> **[8:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=486)** and I'll put in some of that original logic, filter_var.
>
> **[8:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=498)** I do want to return the URL there.
>
> **[8:23](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=503)** If not, I can return build_url with the $url.
>
> **[8:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=514)** And I need to function build_url now.
>
> **[8:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=521)** So by parsing this out into pieces and adding these tests in here, my tests still pass.
>
> **[8:49](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=529)** And I know that this case when I'm calling generate_link_from_array and only passing in an ID, that's eventually calling build_url and returning that same static string.
>
> **[9:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=542)** We can test that by removing this.
>
> **[9:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=550)** Ooh, it failed.
>
> **[9:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=555)** Oh, I need to update this to call create_url.
>
> **[9:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=566)** And the test fails, although it's pretty darn close.
>
> **[9:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=570)** In this case, it's failing, because it expects my string to not have a trailing slash in my assertion.
>
> **[9:37](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=577)** When it's built in the link presenter, it includes a trailing slash.
>
> **[9:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=582)** So when I make that a simple adjustment in the assertion, it runs again.
>
> **[9:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=592)** By working from the test, I can add all the assertions appropriate to the different shapes of array that I have and grow out a set of functions that I can use to handle this crazy use case.
>
> **[10:05](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=605)** I've grown it this far.
>
> **[10:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=606)** You can imagine that a few more functions will be put in place to determine if the URL key in the array is empty, and if so, used to create URL with an id.
>
> **[10:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=615)** I'll leave that to you.
>
> **[10:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=617)** The key piece to recognize is that the logic in every function is now super simple.
>
> **[10:23](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=623)** Will it always stay that way? Probably not.
>
> **[10:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/identifying-testable-code?u=76281980&t=627)** But that is the refactoring portion that we get out of test-driven development.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (2), data (1), [[Test-Driven Development]] (1)
> **Code Identifiers:** link_array (7), generate_link_from_array (4), build_url (3), get_link_by_id (2), create_url (2)
> **Env Vars:** url (15), filter_validate_url (1), tdd (1)
> **CLI Commands:** make (2)
> **Definitions:** is a  (2)
> **Analogies:** imagine (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Generate your first tests
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=0)** - [Instructor] The first step to automated testing is writing a test.
>
> **[0:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=3)** Wait, don't leave yet.
>
> **[0:05](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=5)** I know that's obvious, but it's an important concept.
>
> **[0:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=8)** I'm going to show you how to do that.
>
> **[0:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=11)** I already set up the test framework.
>
> **[0:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=13)** In the opening chapter, I used a terrible example with these add and subtract functions.
>
> **[0:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=19)** I'm going to push the idea further in this video using a common function in PHP frameworks, slugify.
>
> **[0:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=26)** Generally speaking, the slugify function accepts a string and converts to a URL slug.
>
> **[0:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=33)** This is slugify logic that I copied directly from Stack Overflow.
>
> **[0:37](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=37)** It accepts a string, runs a regular expression, search/replace, trims, and then sets to lowercase before returning.
>
> **[0:45](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=45)** Now, I run it and the output is what I expect.
>
> **[0:51](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=51)** An example article name from an example article name.
>
> **[0:55](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=55)** I told you this code came from Stack Overflow, but you can imagine this as logic in a new code base or code you wrote months ago.
>
> **[1:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=62)** To move forward with confidence, it should be tested.
>
> **[1:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=67)** First, I ask Copilot to create a test for this.
>
> **[1:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=75)** And once that test is in place, I'll run it.
>
> **[1:23](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=83)** Slugify_Test.
>
> **[1:28](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=88)** I'll fix that.
>
> **[1:35](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=95)** And Copilot is jumping ahead in this video.
>
> **[1:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=98)** I'm going to comment out these three.
>
> **[1:40](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=100)** We'll come back to those in a moment.
>
> **[1:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=101)** But this first assertion is an-example-article-name, and passed an example article name.
>
> **[1:51](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=111)** Puts out what we expect.
>
> **[1:54](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=114)** So before I run this test, instead of running all these, I'm going to ask Copilot to remind me how to run one specific test.
>
> **[2:04](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=124)** I'll use the file path in this case.
>
> **[2:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=127)** So vendor/bin/phpunit tests/Slugify_Test.
>
> **[2:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=142)** And this will fail because I did not set this up to include the slug file.
>
> **[2:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=154)** Isn't amazing, Copilot realized the same thing as I did.
>
> **[2:40](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=160)** And now our test passes.
>
> **[2:43](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=163)** So this is great.
>
> **[2:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=164)** It's a test and it works.
>
> **[2:49](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=169)** And I was going to say, now we can go wild, but Copilot beat me to the punch.
>
> **[2:55](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=175)** I was going to duplicate the original assertion and add all sorts of ideas onto this, one with an exclamation point and question mark, leading spaces, trailing spaces, extra spaces.
>
> **[3:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=187)** So let me uncomment these and let's see what happens.
>
> **[3:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=197)** Hmm, when I run tests, I see that I hit a failure on line, where does it say?
>
> **[3:32](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=212)** Line 17?
>
> **[3:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=214)** So two assertions are run, one test, one failure.
>
> **[3:37](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=217)** It didn't run 18 or 19 at all.
>
> **[3:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=221)** What happens in those next assertions?
>
> **[3:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=224)** I don't know.
>
> **[3:45](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=225)** So the correct approach here is to limit assertions per test and add more tests by adding more methods to the class.
>
> **[3:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=232)** So I could write a test for this failure.
>
> **[3:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=236)** What I'll do here is finish this one and I'll make this, that was not the method name I was going to use, but it feels pretty good.
>
> **[4:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=249)** PHP unit does require test underscore, but otherwise, let's see what happens.
>
> **[4:14](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=254)** And now my failure moves to line 20 as expected.
>
> **[4:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=257)** I won't elevate each of these to a method by itself.
>
> **[4:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=260)** You get the point, but it's important to note that each test runs the setup, tear-down methods.
>
> **[4:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=266)** So if your setup requires a lot of database work, you may find that you're writing a few assertions per test to skip slow setup step.
>
> **[4:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=274)** For something like this that doesn't require database work, a single assertion per test is okay.
>
> **[4:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=281)** Also, as I called out, each test method has to start with test_ and has to be public.
>
> **[4:46](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=286)** This is how PHP unit knows that it's working with a test.
>
> **[4:50](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=290)** This class extends TestCase, also a requirement, and the class has a suffix of _Test, the final requirement.
>
> **[4:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=298)** Note that I didn't talk about fixing the slugify function.
>
> **[5:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=301)** This video is about adding tests to existing logic.
>
> **[5:05](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-your-first-tests?u=76281980&t=305)** A failing test tells you that your logic isn't quite right.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (5), [[PHP]] (3), database (2), [[Search]] (1), hit (1)
> **CLI Commands:** php (3), make (1), find (1)
> **Env Vars:** php (3), url (1)
> **Prerequisites:** setup (3), set up (1)
> **Documentation:** stack overflow (2)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Refactor with tests
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=0)** - [Instructor] Refactoring is about making tiny changes that cumulatively improve the code base.
>
> **[0:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=6)** You probably already do this by default, identifying tiny issues as you work.
>
> **[0:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=11)** Refactoring is an entire discipline.
>
> **[0:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=12)** I'm going to focus on four things that make testing easier and make for a cleaner code base.
>
> **[0:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=18)** First, identify a brittle function and add tests.
>
> **[0:21](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=21)** This redirect function is responsible for the list of redirects, determining if redirects should take place, on line 13, and finally, returning the redirect.
>
> **[0:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=34)** This might require extra mocking initially, and that's okay.
>
> **[0:37](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=37)** The purpose of these initial tests is to lock into place how something works.
>
> **[0:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=41)** This prevents you from adding hidden regressions.
>
> **[0:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=44)** So I'm going to highlight this and ask Copilot to create tests for that.
>
> **[0:57](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=57)** Now, not only will it create the test, it's going to explain what's being tested.
>
> **[1:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=63)** And now I'll just copy this and drop it in our test directory.
>
> **[1:14](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=74)** I'm going to add a new folder for redirects.
>
> **[1:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=87)** And pasting in what Copilot came up with.
>
> **[1:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=94)** It looks like it might not be going up enough levels, but it didn't know I was creating a redirects directory.
>
> **[1:45](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=105)** And I'm going to go ahead and run these tests.
>
> **[1:49](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=109)** I haven't given them much review, but let's see what happens.
>
> **[1:59](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=119)** Now let me flag here that I'm testing something with header output in PHP, and PHP in it is complex, and it needs output buffering to solve this.
>
> **[2:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=129)** So I'm going to leave this as is with a test that gives us no useful output because on redirect we're returning header and dying before any test can run.
>
> **[2:23](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=143)** This leads me to refactoring.
>
> **[2:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=144)** I'm going to extract some functionality.
>
> **[2:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=147)** I already showed that briefly, but I'm going to dig in further.
>
> **[2:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=150)** This function has too much responsibility and so I'll highlight it and ask Copilot to refactor.
>
> **[2:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=164)** I actually don't think refactor is a slash command, but that's okay, it figured out what I meant.
>
> **[2:48](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=168)** And no surprise, the first thing Copilot does is extract the responsibility for providing the redirect maps, as it called them.
>
> **[2:59](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=179)** So let's grab that,
>
> **[3:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=187)** and drop that in place.
>
> **[3:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=192)** And I'm going to ask Copilot to write a test for this.
>
> **[3:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=202)** Copilot is still trying to test everything.
>
> **[3:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=207)** Tests for the highlighted function.
>
> **[3:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=213)** Now this is pretty straightforward because it's a hard coded array, but in a situation where you're building this from other information, this test would be extremely useful.
>
> **[3:43](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=223)** I'm going to take a quick detour.
>
> **[3:46](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=226)** Copilot is also helpful at simplifying conditionals.
>
> **[3:51](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=231)** Paste this code in here.
>
> **[3:55](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=235)** Now imagine this is where I started.
>
> **[3:59](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=239)** If it ends with lil, return this.
>
> **[4:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=242)** Otherwise, if it ends with learning, return this, otherwise return null.
>
> **[4:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=248)** I'm just going to see what Copilot comes up with here.
>
> **[4:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=257)** And it converts this into a for each, returning null by default unless a key exists.
>
> **[4:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=265)** One of my favorite things to do in PHP is replace associative arrays with objects.
>
> **[4:31](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=271)** With Copilot, that's even easier.
>
> **[4:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=273)** So let me go back to this map and take an array and let me prompt Copilot to create a value object from it.
>
> **[4:46](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=286)** This is an array of redirects with a from slug and a to url, make it make a value object.
>
> **[5:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=303)** I'll roll this value object out in the future, but this is a cool trick that can modernize a PHP code base.
>
> **[5:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=310)** Imagine how easy it is to test this value object versus this array.
>
> **[5:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/refactor-with-tests?u=76281980&t=317)** Leaning on Copilot to refactor is a great way to extract single responsibility functions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (11), [[PHP]] (4), prompt (1)
> **CLI Commands:** make (4), php (4)
> **Definitions:** is a  (3), is an  (2)
> **Env Vars:** php (4)
> **Analogies:** imagine (2)
> **Cross-References:** go back to (1)
> **Speakers:** - [instructor] (1)

#### Use Copilot slash commands
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=0)** - [Instructor] I touched on / commands earlier, but they are so powerful, they are worth revisiting here.
>
> **[0:05](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=5)** Copilot seems to add and remove / commands with regularity.
>
> **[0:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=9)** In some cases, a single word works just as well.
>
> **[0:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=12)** There used to be a /doc / command, and the first one I would turn to when looking at a new code base.
>
> **[0:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=19)** Instead of using doc, I'll highlight a function and just type docblock.
>
> **[0:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=27)** These kind of updates are a simple way to practice Git flow on a new project, but second, the generated docs are similar to how GitHub explains code.
>
> **[0:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=41)** There definitely is a /explain command.
>
> **[0:46](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=46)** In cases where an entire function or method doesn't need to be documented, maybe a single line or a few lines, you can read through the explanation and determine what documentation or inline comments might be necessary.
>
> **[1:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=60)** I haven't mentioned it before, but Copilot often suggests some follow up questions.
>
> **[1:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=66)** These can lead you down a rabbit hole if you aren't careful, or they can give you just what you need.
>
> **[1:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=71)** In this case, Copilot knows that I'm recording a course about PHPUnit, so the prompt that it's asking me is how can I run unit tests for my PHP code using PHPUnit in Visual Studio Code?
>
> **[1:23](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=83)** Not something pertinent to this conversation.
>
> **[1:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=87)** Fix is great for when you paste some code that just doesn't quite work.
>
> **[1:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=93)** This is great for syntax issues.
>
> **[1:35](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=95)** I've used its great effect for locating a missing closing tag.
>
> **[1:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=99)** Running help is a good idea from time to time.
>
> **[1:43](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=103)** It's how I bumped into the optimize command, but it also explains what is being taken into account.
>
> **[1:49](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=109)** On top of files, Copilot takes different parts of your IDE into consideration when answering questions.
>
> **[1:57](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=117)** This includes, but is not limited to, test results and failures, build and runtime logs, Active Git Repository, as well as details of the open project.
>
> **[2:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=130)** Optimize is used to improve the runtime of selected code.
>
> **[2:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=135)** This can get out of hand if you chase every optimization.
>
> **[2:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=140)** Don't ever forget that code is for humans first and computers second.
>
> **[2:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=145)** Keep your code legible for your team and for your future self.
>
> **[2:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=150)** In this case, one of the first things Copilot suggests is using exit instead of die for clarity.
>
> **[2:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=158)** Both exit and die are equivalent, but exit is often preferred for clarity.
>
> **[2:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=164)** And of course, the last command that we've looked at is tests.
>
> **[2:50](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=170)** To use the output of tests, you have to know how to run tests in a system.
>
> **[2:55](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=175)** If I were to test some WordPress code here, I'd have a hard time actually running it without things like WP Browser configured.
>
> **[3:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/use-copliot-slash-commands?u=76281980&t=182)** This is where writing testable code really pays off.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (5), [[Git]] (2), [[Microsoft Word|Word]] (1), [[GitHub]] (1), prompt (1)
> **CLI Commands:** git (2), php (1)
> **Env Vars:** php (1), ide (1)
> **Tools:** github (1), visual studio (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)


### 3. Use Copilot to Generate Code from Tests

[↑ Back to Table of Contents](#table-of-contents)

#### Write your tests to document business logic
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=0)** - [Instructor] While automated testing is a step to limiting risk and preventing regressions, another major value is documenting the intent of business logic directly in your code base.
>
> **[0:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=10)** I'm going to continue working with redirect logic.
>
> **[0:14](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=14)** Here, I have existing logic and I could highlight some parts of it and ask co-pilot to generate tests.
>
> **[0:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=20)** Instead, another wrinkle is to document code intent via tests.
>
> **[0:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=27)** First, I'll create a new empty test function.
>
> **[0:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=34)** And the first method I'll create is to capture the intended logic.
>
> **[0:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=38)** This method is basic redirection, and in there I'll add a comment to indicate what I'm trying to test for.
>
> **[0:49](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=49)** In this case, I'm testing that certain keywords always redirect to an external site.
>
> **[1:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=61)** Now I'm using PHP unit, which is unit testing.
>
> **[1:05](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=65)** I don't have a test library to make a remote get request and observe the header response.
>
> **[1:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=70)** That's okay because I can test the should redirect and redirect value logic.
>
> **[1:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=80)** So I add a new method.
>
> **[1:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=87)** Test should redirect.
>
> **[1:37](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=97)** And because it's a bool copilot has the context.
>
> **[1:40](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=100)** So it suggests a pretty solid test.
>
> **[1:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=104)** Let's add one more in here and now I'll add the test for redirect value because I just looked at that function and I wrote a test for should redirect.
>
> **[1:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=118)** Copilot wants to automatically write a test for redirect value, so I'll accept that and let's look and see what it looks like.
>
> **[2:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=126)** It seems solid.
>
> **[2:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=128)** So now I'll run the tests.
>
> **[2:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=137)** And I see failures.
>
> **[2:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=140)** What I want to flag is that the tests are now documenting breakage.
>
> **[2:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=144)** Look at the test method as an entire piece, then think about what it would be like to be a new developer to the project.
>
> **[2:32](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=152)** You can construct a pretty clear mental model from this test alone.
>
> **[2:36](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=156)** Looking at test redirect value, we see that null does not match redirect learning on line 39, and that logic is because we're using string ends with.
>
> **[2:54](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=174)** I'm not going to fix that now.
>
> **[2:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=176)** Leaving that in place gives us something to fix in the future and it documents the breakage.
>
> **[3:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=181)** I am going to add a method to test that invalid redirects do not redirect.
>
> **[3:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=186)** So I'll call this public function test invalid redirects should not redirect.
>
> **[3:21](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=201)** We already know this redirect will fail, but it's captured in here and when we fix it in redirect value, that will resolve itself.
>
> **[3:31](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=211)** As a developer, one of the first questions I would have for this feature to the product owner are what about trailing slashes followed by query arts be passed?
>
> **[3:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=221)** So I'm going to add a test for trailing slash redirect.
>
> **[3:50](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=230)** And this I'm going to say, mark test incomplete.
>
> **[4:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=240)** That message is fine, but of course you could put something more specific in there.
>
> **[4:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=243)** And I'll do the same for query arts and copilot, of course, has seen me do this in the process of recording this course so it wants to suggest the test with redirect, with query params.
>
> **[4:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=256)** That's okay.
>
> **[4:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=258)** In your use case, it might not have that context, so it may not suggest that, but that's where I was headed anyway.
>
> **[4:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=265)** Now, if I run the tests, the same failures are in there and two are marked as incomplete.
>
> **[4:31](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=271)** This is informative and I have two places to document business logic when the decision is made, how to handle trailing slashes, and query params.
>
> **[4:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=279)** As you can see, documenting business logic and tests cannot only serve as a way to quickly get up to speed on a project, it can also document decisions that need to be made.
>
> **[4:48](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/write-your-tests-to-document-business-logic?u=76281980&t=288)** And of course, copilot helped and led every step of the way.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (4), business (3), [[PHP]] (1), [[Unit Testing]] (1), feature (1)
> **CLI Commands:** php (1), make (1)
> **Env Vars:** php (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Generate code from tests
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=0)** - [Instructor] In true test driven development, tests are written first.
>
> **[0:04](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=4)** This of course, means the first time you run them they fail.
>
> **[0:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=7)** Then you write the least amount of code necessary to make them pass and run tests again.
>
> **[0:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=12)** While this can feel extreme, it can be an effective way to write a lot of code in a hurry.
>
> **[0:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=18)** I'm going to pick up where I left off and add test logic for dealing with a trailing slash.
>
> **[0:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=25)** So this assert true should redirect foo
>
> **[0:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=41)** and foo with a trailing slash.
>
> **[0:46](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=46)** This will of course fail when I run the tests because no logic has been implemented to deal with trailing slashes.
>
> **[0:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=56)** And this time I'm going to call the test directly and as expected, failure.
>
> **[1:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=67)** So the next step is to update should redirect.
>
> **[1:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=73)** I'll add a comment about stripping the trailing slash and of course, co-pilot prompts the changes necessary.
>
> **[1:28](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=88)** Now, this test was incomplete and I'm only testing should redirect, but it fails.
>
> **[1:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=94)** And this failure points out a logic error I made.
>
> **[1:37](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=97)** The error is that the array is fixed.
>
> **[1:43](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=103)** I'm testing foo expecting bar, and that's nowhere in this code.
>
> **[1:47](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=107)** The array should be injected to the should redirect function.
>
> **[1:53](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=113)** So I'll update the signature and add an empty array for redirects.
>
> **[2:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=121)** And then I was going to say, I'll check if it's empty, but Copilot will check if it's empty and get redirects from the function.
>
> **[2:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=129)** And now I just need to remove that call.
>
> **[2:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=132)** Now I need to update the test to inject the foo bar array.
>
> **[2:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=140)** Let's see if Copilot does it.
>
> **[2:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=147)** Not quite, but pretty close.
>
> **[2:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=150)** This should return bar.
>
> **[2:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=158)** I was waiting for it to auto complete that, and it didn't.
>
> **[2:45](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=165)** And now the test pass.
>
> **[2:47](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=167)** That handle should redirect, but the redirect value function will also need the same logic.
>
> **[2:57](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=177)** So this has been a bit bi-directional, I've had co-pilot generate tests and then change code and make the test pass.
>
> **[3:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=183)** I hope you recognize repeated code would be a code smell, doing the trailing slash check twice and injecting the redirect array.
>
> **[3:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=191)** I could also take the same approach with query args, that's obviously going to add more duplicate logic.
>
> **[3:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=197)** Definitely the wrong path.
>
> **[3:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=198)** This thing has become really hard coded.
>
> **[3:21](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=201)** Now, this is just scratching the surface on how to use tests to generate code.
>
> **[3:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=205)** I'm going to take a chance to convert this procedural approach into an object-oriented programming approach.
>
> **[3:32](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=212)** I want to think of redirects as a value object.
>
> **[3:35](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=215)** If you aren't familiar, a value object is an immutable object that represents a specific value with no identity.
>
> **[3:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=222)** So in this case, the value object will have a destination and a response status.
>
> **[3:47](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=227)** So why not start by creating a test for the value object?
>
> **[3:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=238)** So I'll say the redirect VO equals new redirect VO of foo.
>
> **[4:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=251)** And this assert equals, I was going to call it key instead of URL, but close enough and we'll assert equals that if you get value, it'll be bar.
>
> **[4:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=264)** Sure.
>
> **[4:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=266)** And let's assert that the response header is a 301.
>
> **[4:36](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=276)** Look at that, it assumes status.
>
> **[4:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=281)** So, of course, this will fail because redirect VO doesn't exist.
>
> **[4:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=284)** But I'll ask Copilot, create the redirect VO class.
>
> **[4:54](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=294)** And this generates what I would expect.
>
> **[4:57](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=297)** I could put this redirect value object into the redirects directory, I could use it.
>
> **[5:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=302)** Interesting that when it generated it, the constructor accepts key value and status.
>
> **[5:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=306)** And when I created this, I only included the key.
>
> **[5:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=309)** Of course, that won't work, but pretty close.
>
> **[5:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=312)** I hope you see here how generated tests with Copilot can turn into generated code.
>
> **[5:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=317)** You still have to double check along the way.
>
> **[5:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/generate-code-from-tests?u=76281980&t=319)** This output was quickly generated and sends us down a path to refactor and remove that duplicate logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (4), next (1), bi (1), [[Object-Oriented Programming (OOP)|Object-oriented programming]] (1)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** url (1)
> **Speakers:** - [instructor] (1)

#### Update functionality by writing more tests
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=0)** - Copilot uses the context of the code you have open to generate code.
>
> **[0:04](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=4)** So if the code you have open are tests, it gives copilot the info necessary to build up your code base.
>
> **[0:11](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=11)** I created a value object for redirects.
>
> **[0:14](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=14)** Value objects come from domain-driven design.
>
> **[0:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=17)** And this is not technically a value object because of the setter methods.
>
> **[0:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=24)** A VO is immutable. Equality is not based on identity.
>
> **[0:29](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=29)** This is not immutable. How important is that here?
>
> **[0:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=33)** Well, not very.
>
> **[0:35](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=35)** However, the generated code has too much extra stuff.
>
> **[0:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=39)** First, I'm going to run the existing value object test and this should pass test redirect value, object in test redirect.
>
> **[1:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=63)** I spelled object wrong.
>
> **[1:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=69)** While there is a copilot utility for the command line, it's not going to help with things like that.
>
> **[1:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=76)** So these tests pass, but how do I tell a copilot to remove code?
>
> **[1:21](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=81)** There's not really a way.
>
> **[1:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=82)** I have tests, so I can manually remove these extra methods.
>
> **[1:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=87)** I'll do that.
>
> **[1:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=90)** And whenever I delete code, I always like to run the test again to make sure I didn't get something I didn't mean to.
>
> **[1:35](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=95)** To make this a true VO, I need to add the ability to check equality.
>
> **[1:40](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=100)** So in here in the test, I will add a new assertion.
>
> **[1:49](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=109)** This assert equals, actually I need assert true,
>
> **[1:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=118)** redirect VO equivalent, and this will be a new redirect VO.
>
> **[2:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=133)** Now, I'll jump over here and no surprise, copilot prompts the equivalent method.
>
> **[2:23](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=143)** Now I've left the concept of redirect in a really messy state.
>
> **[2:31](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=151)** There's duplicated logic and should redirect and redirect value.
>
> **[2:36](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=156)** This is worth flagging.
>
> **[2:38](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=158)** I could go over to redirect test and I could implement with query ARGs or copilot could, but the code is a mess.
>
> **[2:46](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=166)** It needs to be cleaned up first.
>
> **[2:48](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=168)** I have this silly redirect value object that's not even used in here.
>
> **[2:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=176)** This is where I slow down.
>
> **[2:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=178)** There are multiple ways to move forward, but I start by documenting some other relationships, even just in comments.
>
> **[3:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=190)** I'll add a note around how to deal with A URL or at least part of the request.
>
> **[3:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=196)** Query ARGs are, and the fragment is something.
>
> **[3:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=206)** This isn't a PHP course, but if it were, I'd call out that there's a common library for this kind of thing in PSR 18.
>
> **[3:35](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=215)** Most web languages or libraries have something similar to this.
>
> **[3:40](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=220)** I'm not going to implement that, but it's a very common pattern.
>
> **[3:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=224)** What else?
>
> **[3:45](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=225)** Well, I only need to check the redirect VO path and return to redirect VO object and then assemble the redirect from the request and the value object.
>
> **[3:54](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=234)** So check if the path is in redirects,
>
> **[4:05](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=245)** and then I need to remove duplication in the functions.
>
> **[4:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=248)** If it is, return a new redirect VO object,
>
> **[4:19](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=259)** and when I remove those, I should put those into a class.
>
> **[4:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=262)** The next step is even further document the logic, and I'm going to do that in the same comment here.
>
> **[4:29](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=269)** Path is compared to collection.
>
> **[4:32](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=272)** Collection seems like an important idea of redirects of VOs if it matches.
>
> **[4:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=282)** A new URL is built with the query ARGs and fragment.
>
> **[4:53](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=293)** Skimming this I see three new classes here.
>
> **[4:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=296)** Request object, collection of value objects, and some kind of class to manage it all.
>
> **[5:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=303)** Now, how would I create them? I'll write tests.
>
> **[5:07](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=307)** I know you're shocked.
>
> **[5:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/update-functionality-by-writing-more-tests?u=76281980&t=308)** I'm not going to implement each one of these here, but by taking the time to document in comments and not jumping right into code, I've given myself a path forward, either via test driven development or writing code directly in my IDE.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (6), [[PHP]] (1), web (1), next (1)
> **Env Vars:** url (2), php (1), psr (1), ide (1)
> **CLI Commands:** make (2), php (1)
> **Definitions:** is a  (2)
> **Tools:** command line (1)
> **Analogies:** similar to (1)
> **Speakers:** - copilot (1)


### 4. Real-World Benefits

[↑ Back to Table of Contents](#table-of-contents)

#### Code quality
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=0)** - [Narrator] Tested code is higher quality code.
>
> **[0:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=3)** The act of writing tests forces you to think through execution paths and simplify logic.
>
> **[0:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=9)** I'm starting with the branch from chapter two, video three.
>
> **[0:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=13)** This is the original logic for dealing with redirects.
>
> **[0:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=16)** And at a glance it's mostly fine.
>
> **[0:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=18)** It works.
>
> **[0:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=20)** It only works with a specific array structure and get params aren't handled.
>
> **[0:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=25)** Now I'm going to jump to branch chapter four, video one.
>
> **[0:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=39)** And this was the final state I left this redirect file in.
>
> **[0:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=42)** Previously it was 43 lines.
>
> **[0:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=44)** Now it's only 46, so not a ton more.
>
> **[0:48](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=48)** I'm going to call some parts out.
>
> **[0:51](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=51)** First, there's this function should redirect that returns a bull that tells whether we should or shouldn't redirect.
>
> **[0:59](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=59)** Then there's a redirect value that returns the value of the redirect.
>
> **[1:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=63)** Both have repetitive logic, but the thing I really want to call attention to here are the tests.
>
> **[1:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=70)** For a moment, ignore what this does and think through new developer experience.
>
> **[1:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=77)** In the original, the logic was direct, but this is one of those files that can grow in a hurry.
>
> **[1:23](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=83)** And when that happens, they tend to have momentum, slowly growing bigger and bigger, but never refactoring.
>
> **[1:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=90)** These kinds of files also tend to be owned by one dev, making it harder to change.
>
> **[1:35](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=95)** By virtue of testing, I now have a bunch of functions that are documented with tests.
>
> **[1:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=101)** If you're working with a specific function, you can come in here and see what it's supposed to do, perhaps add tests to figure out what it's not supposed to do.
>
> **[1:50](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=110)** In addition, I have this new concept called a redirect value object, not implemented anywhere.
>
> **[1:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=118)** Back in the test, I want to call out two things that testing exposed.
>
> **[2:04](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=124)** First, what to do with trailing slashes.
>
> **[2:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=129)** And second, what about query arcs?
>
> **[2:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=132)** Now, I implemented logic for test to pass with trailing slashes.
>
> **[2:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=136)** And when I jump over here, that's the duplicate logic, line 23 and line 34.
>
> **[2:22](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=142)** This course is about how to use AI for such things.
>
> **[2:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=145)** So I'm just going to ask Copilot.
>
> **[2:29](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=149)** Line 23 and 34 are the same.
>
> **[2:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=154)** How can I refactor that?
>
> **[2:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=159)** This time, Copilot called it process URL.
>
> **[2:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=162)** In previous tests of this, it called this a normalized URL function.
>
> **[2:48](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=168)** Before I do that, I need to be able to store query arcs somewhere.
>
> **[2:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=172)** And this is functional, so we really, then we need to pass 'em around from function to function.
>
> **[2:58](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=178)** I'm going to ask Copilot to convert this into a class.
>
> **[3:04](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=184)** Not only does it provide the output, it renamed this to redirect handler.
>
> **[3:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=189)** In previous tests, it called it URL handler.
>
> **[3:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=192)** And logically, it doesn't take a lot to see the potential here.
>
> **[3:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=196)** In fact, if I updated the constructor to pass in the array and the URL, I could put the value object to use.
>
> **[3:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=204)** So I'm going to ask Copilot to do that.
>
> **[3:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=206)** Can you update this?
>
> **[3:29](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=209)** So a redirect VO is passed to the constructor, and the normalized URL is stored as a property.
>
> **[3:51](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=231)** In some of my testing, Copilot didn't know about the redirect value object that I had created, so I had to ask it to use the existing redirect value object.
>
> **[4:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=240)** And if I were to drop this in place, I'd have to update my tests to use the object created from this class rather than direct function calls.
>
> **[4:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=249)** But I think this serves to demonstrate how Copilot is a useful tool.
>
> **[4:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/code-quality?u=76281980&t=253)** You need to know what you're shooting for and it will help generate quality code accordingly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Copilot|Copilot]] (6), ai (1), functional (1)
> **Env Vars:** url (5)
> **Definitions:** is a  (1)
> **Speakers:** - [narrator] (1)

#### Running tests in CI/CD
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=0)** - [Instructor] Automated tests are great.
>
> **[0:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=2)** I hope at this point you're interested in including them in your project.
>
> **[0:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=6)** But they only work if they are run regularly, and that's where CI/CD comes in.
>
> **[0:12](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=12)** If you aren't familiar, CI/CD, continuous integration and continuous delivery, is a dev practice that enables shipping small changes quickly to production.
>
> **[0:23](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=23)** There are many courses and videos about CI/CD here on LinkedIn Learning.
>
> **[0:28](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=28)** Now part of using CI/CD requires shipping bug-free code.
>
> **[0:32](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=32)** Wait, stop laughing.
>
> **[0:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=33)** I know that's not actually a thing, but there is an entire class of bugs we can avoid with automated testing, that is, new regressions.
>
> **[0:43](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=43)** I'm going to focus on GitHub Actions but only for syntax.
>
> **[0:46](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=46)** There are many CI/CD providers.
>
> **[0:50](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=50)** Here's an overview of how an action works.
>
> **[0:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=52)** You define a workflow, which I see in the YAML file.
>
> **[0:56](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=56)** It contains jobs which have steps, and they're triggered on an event.
>
> **[1:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=63)** In this example, the event is push, but it could be a PR or many other things.
>
> **[1:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=69)** So I'm going to my code base.
>
> **[1:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=73)** First, you would need to create a directory, .github, with a directory, workflows, inside.
>
> **[1:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=78)** This project already had some actions, so I didn't need to create it.
>
> **[1:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=84)** Create a new file.
>
> **[1:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=87)** This is a YAML file.
>
> **[1:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=90)** GitHub Actions are always YAML files.
>
> **[1:34](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=94)** And I'll ask Copilot.
>
> **[1:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=99)** This is a GitHub Action file.
>
> **[1:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=102)** Create the workflow and steps to run phpunit on each pull request.
>
> **[1:57](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=117)** Let's drop this in and take a look.
>
> **[2:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=123)** It assumed pull requests to branches of main.
>
> **[2:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=128)** This is using an older version of PHP, and running PHP unit after composer install.
>
> **[2:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=138)** This is pretty close to what I expected.
>
> **[2:21](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=141)** PHP version not current, but this seems like it would work.
>
> **[2:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=144)** I do want to warn you, as helpful as Copilot is, when I update YAML files, I find it does a lousy job of preserving indentation.
>
> **[2:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=153)** Now, CI/CD is a vital part of automated testing, that is, running tests often.
>
> **[2:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=159)** Using something like GitHub Actions allows you to run them automatically and on every PR.
>
> **[2:44](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=164)** This will allow you to avoid regressions on anything you have tested and expose new areas to tests when bugs sneak through.
>
> **[2:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=172)** I have often said, "How is that possible when running code with a test suite in place?"
>
> **[2:57](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=177)** No matter how dry my code is, I find a way to break isolated things.
>
> **[3:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/running-tests-in-ci-cd?u=76281980&t=181)** Running my test suite in CI/CD prevents that from happening more frequently.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** ci (7), cd (7), [[GitHub]] (5), [[PHP]] (3), [[Microsoft Copilot|Copilot]] (2)
> **CLI Commands:** cd (7), php (3), find (2), composer (1)
> **Env Vars:** yaml (4), php (3)
> **Tools:** github (5)
> **Definitions:** is a  (4), is an  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Limiting risk by limiting exposure
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=0)** - [Instructor] Tests limit risk.
>
> **[0:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=3)** Tests are the earliest indication that you have made a change that has side effects.
>
> **[0:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=8)** Some of the best developers I've worked with had, what seemed to me, to be an ability to see the future and identify future project needs.
>
> **[0:16](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=16)** By writing code that solves only the problem in front of you, you end up with small tested functions and classes you can assemble into something bigger.
>
> **[0:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=24)** Kent Beck literally wrote the book on TDD.
>
> **[0:27](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=27)** He's the originator of the idea.
>
> **[0:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=30)** In the first chapter of his book, he walks through an example on dealing with money in an e-commerce app.
>
> **[0:36](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=36)** One of the things that surprised me was how much structure was underlying the logic on the front end.
>
> **[0:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=42)** I'm going to follow Kent's example with the idea of a time off request.
>
> **[0:47](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=47)** First before writing any code, I capture the feature and a to-do list.
>
> **[0:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=52)** The feature.
>
> **[0:54](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=54)** Update the HR system to allow employees to request time off.
>
> **[1:04](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=64)** This request should include start/end date, employee, supervisor and status.
>
> **[1:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=75)** Now you and I are developers.
>
> **[1:18](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=78)** You probably started to think about architecture just like I did.
>
> **[1:21](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=81)** Are employee and supervisor the same class?
>
> **[1:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=84)** What status is available?
>
> **[1:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=86)** Beck warns us to start with tests.
>
> **[1:29](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=89)** So what are some simple things to test here?
>
> **[1:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=93)** Well, start date must be in the future.
>
> **[1:42](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=102)** End date must be after start date.
>
> **[1:49](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=109)** Employee and supervisor cannot be the same person.
>
> **[1:59](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=119)** There is of course more to do.
>
> **[2:01](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=121)** This list is the place to capture it.
>
> **[2:04](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=124)** First I start by picking one.
>
> **[2:06](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=126)** I'll just say I'm going to check the dates.
>
> **[2:08](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=128)** Under the to do, I add the actual test logic.
>
> **[2:15](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=135)** Test that a date is after another date.
>
> **[2:21](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=141)** Think of your favorite programming language.
>
> **[2:23](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=143)** How is date implemented?
>
> **[2:25](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=145)** That will probably direct how you write this test and then the function to make it pass.
>
> **[2:30](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=150)** But does comparing two dates worry you?
>
> **[2:33](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=153)** Probably not.
>
> **[2:35](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=155)** I'm going to add some more items to the to do list.
>
> **[2:41](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=161)** Confirm the employee does not already have time off for those dates.
>
> **[2:52](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=172)** Hmm, I don't know if that's a test.
>
> **[2:57](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=177)** It's a test, but I don't know if it's specific enough as a function.
>
> **[3:02](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=182)** I could also confirm the employee has enough time off available.
>
> **[3:13](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=193)** Both of those require knowing something about the underlying structure.
>
> **[3:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=197)** Well, this one seems to indicate to me that there's a test there.
>
> **[3:21](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=201)** Test that date ranges are not overlapping.
>
> **[3:28](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=208)** That's a test that I can easily write.
>
> **[3:31](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=211)** And the next part is asking, count the days off
>
> **[3:39](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=219)** and make sure it is not more than available.
>
> **[3:45](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=225)** But available assumes that I understand what available means here.
>
> **[3:53](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=233)** Those are three clear tests that provide building blocks for the time off request.
>
> **[3:59](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=239)** And because these building blocks will have test coverage, the interaction at the abstraction layers that I build above it will be more stable and predictable.
>
> **[4:09](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=249)** The discipline of distilling features down to the simplest tests underneath leaves you a to do list of known risks.
>
> **[4:17](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=257)** Personally, I like to commit this list in the repo, but even keeping it in a local document is helpful.
>
> **[4:24](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/limiting-risk-by-limiting-exposure?u=76281980&t=264)** I encourage you to go try and write some tests for this feature, or rather I encourage you to go ask Copilot to write some tests for this feature.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** feature (4), [[E-Commerce]] (1), hr (1), [[Programming]] (1), next (1)
> **CLI Commands:** make (2)
> **Env Vars:** tdd (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/next-steps?u=76281980&t=0)** - You did it, way to go.
>
> **[0:03](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/next-steps?u=76281980&t=3)** If you haven't already, install GitHub Copilot in your IDE and start writing code with the help of AI.
>
> **[0:10](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/next-steps?u=76281980&t=10)** Better yet, write automated tests first, then write code.
>
> **[0:14](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/next-steps?u=76281980&t=14)** If PHP is your language of choice, check out my course, Writing and Refactoring Testable PHP.
>
> **[0:20](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/next-steps?u=76281980&t=20)** If you prefer another language, there are tons of courses on test-driven development in the library.
>
> **[0:26](https://www.linkedin.com/learning/software-testing-assistance-with-github-copilot-ai/next-steps?u=76281980&t=26)** I'd love to see the cool stuff you're building, so follow me on LinkedIn.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[GitHub Copilot]] (1), ai (1), [[Test-Driven Development]] (1), [[LinkedIn]] (1)
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