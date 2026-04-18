---
type: course
slug: refactoring-with-github-copilot
url: "https://www.linkedin.com/learning/refactoring-with-github-copilot"
duration_minutes: 61
duration: 1h 1m
level: Intermediate
updated: 1/21/2025
learners: 13203
skills:
  - Artificial Intelligence (AI)
  - GitHub Copilot
  - PHP
  - Code Refactoring
exercise_files: true
github: "https://github.com/LinkedInLearning/refactoring-with-github-copilot-3951237/codespaces"
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/artificial-intelligence-ai
  - skill/github-copilot
  - skill/php
  - skill/code-refactoring
status: not-started
created: 2026-04-17
---

# Refactoring with GitHub Copilot

> GitHub Copilot can create code, but it can also help you improve, clean up, and remove existing code. Refactoring is a crucial but often challenging aspect of maintaining applications, and Copilot can make it easier for you to explore how code changes might look. In this course, instructor Gary Kovar takes you through using Copilot in a few different situations, working with different aspects of p

> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot) | 1h 1m | Intermediate | 13K learners

## Instructor

- [[Gary Kovar]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/refactoring-with-github-copilot-3951237/codespaces)

## Skills Covered

- Artificial Intelligence (AI)
- GitHub Copilot
- PHP
- Code Refactoring

## Table of Contents

### Introduction

#### Refactoring with the GitHub Copilot AI
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-github-copilot-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-github-copilot-ai?u=76281980&t=0)** Have you worked in a dirty codebase, one you dread opening because of how confusing or unorganized it is?
>
> **[0:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-github-copilot-ai?u=76281980&t=7)** No developer sets out to build a project like that.
>
> **[0:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-github-copilot-ai?u=76281980&t=10)** I love digging through a codebase like a research expedition and uncovering the layers of work before me.
>
> **[0:16](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-github-copilot-ai?u=76281980&t=16)** I'm Gary Kovar and I've shipped code for some of the largest websites on this planet and beyond.
>
> **[0:21](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-github-copilot-ai?u=76281980&t=21)** I was blown away by the GitHub Copilot technical preview.
>
> **[0:25](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-github-copilot-ai?u=76281980&t=25)** It changed how I think about my code.
>
> **[0:27](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-github-copilot-ai?u=76281980&t=27)** Watch this course to learn how to continually improve all of your codebases.
>
> **[0:31](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-github-copilot-ai?u=76281980&t=31)** Now let's get to refactoring.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Tools:** github (1)

#### Prerequisites
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/prerequisites-24291832?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/prerequisites-24291832?u=76281980&t=0)** To get the most value out of this course, there are a couple of things you should keep in mind.
>
> **[0:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/prerequisites-24291832?u=76281980&t=5)** You need to be a developer in any language with an interest in refactoring.
>
> **[0:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/prerequisites-24291832?u=76281980&t=9)** My examples will be in PHP and JavaScript, but feel free to work in whatever language you prefer.
>
> **[0:15](https://www.linkedin.com/learning/refactoring-with-github-copilot/prerequisites-24291832?u=76281980&t=15)** Familiarity with writing AI prompts might also help, but it's definitely not a requirement.
>
> **[0:20](https://www.linkedin.com/learning/refactoring-with-github-copilot/prerequisites-24291832?u=76281980&t=20)** The LinkedIn Learning library of AI courses is always expanding, and programming fundamentals is a great way to get started as a developer.

> [!info]- Semantic Content
>
> **CLI Commands:** php (1)
> **Env Vars:** php (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)

#### How to use Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-use-codespaces-24291831?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-use-codespaces-24291831?u=76281980&t=0)** The files I use for this course are stored on GitHub.
>
> **[0:04](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-use-codespaces-24291831?u=76281980&t=4)** There are branches for most videos in the format of chapter_video_b or _e, b for beginning state and e for end state.
>
> **[0:15](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-use-codespaces-24291831?u=76281980&t=15)** This course uses Codespaces.
>
> **[0:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-use-codespaces-24291831?u=76281980&t=18)** If you aren't familiar with Codespaces, it's a game changer and a great way to work in your browser.
>
> **[0:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-use-codespaces-24291831?u=76281980&t=23)** When you click on code, you can clone locally like you normally do, or under Codespaces, look and see if you have a codespace running.
>
> **[0:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-use-codespaces-24291831?u=76281980&t=30)** If you have one on another branch, feel free to open that instead of creating another space on the current branch.
>
> **[0:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-use-codespaces-24291831?u=76281980&t=36)** And within Codespaces, you can easily check out branches for other videos.

> [!info]- Semantic Content
>
> **Code Identifiers:** chapter_video_b (1)
> **Tools:** github (1)
> **UI Navigation:** click on (1)


### 1. GitHub Copilot and Refactoring Basics

#### What is GitHub Copilot?
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=0)** GitHub Copilot is an AI coding assistant.
>
> **[0:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=3)** By limiting scope to code, this AI is most useful for code completion, identifying bugs, and understanding code.
>
> **[0:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=10)** This is the [GitHub.com](https://GitHub.com) Copilot features page.
>
> **[0:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=13)** There are some interesting screenshots, tons of stats, and examples on how amazing Copilot is.
>
> **[0:21](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=21)** More valuable are the GitHub Copilot Docs.
>
> **[0:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=24)** You will probably find that you interface with Copilot in your IDE, but it's also available via command line and in GitHub Mobile.
>
> **[0:31](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=31)** Broadly, Copilot does two things: code completion and chat.
>
> **[0:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=36)** While there are different paid plans for Copilot, I will be talking only about the individual plan in this course.
>
> **[0:42](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=42)** Once you've signed up for Copilot, you need to enable it in your IDE.
>
> **[0:46](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=46)** This course is using Codespaces and enabling Copilot only requires adding the Copilot extension.
>
> **[0:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=52)** The same holds true for the desktop version of VS Code.
>
> **[0:56](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=56)** A Copilot extension can also be installed in JetBrains IDEs.
>
> **[1:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=60)** Once installed, the only setup Copilot needs is to connect to your GitHub account.
>
> **[1:04](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=64)** I'm not going to walk through this because every IDE I've used drops you right into a wizard for setup after installing the Copilot extension.
>
> **[1:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=71)** Your first interaction with Copilot will probably be code completion.
>
> **[1:15](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=75)** When you start to type a function or leave a comment about the next line of code, Copilot will suggest solution in GhostText.
>
> **[1:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=83)** If you like what you saw, like I did, tap Tab and that code is now in place.
>
> **[1:28](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=88)** This is how I work with Copilot most of the time.
>
> **[1:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=90)** Sometimes the suggestion is exactly what I need, but it is AI, there will be mistakes.
>
> **[1:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=96)** Another way to interact with Copilot is via chat.
>
> **[1:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=99)** In your IDE, you can ask Copilot to do things like explain this code or change the snippet to another language.
>
> **[1:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=108)** Even things like create a DTO class from this JSON.
>
> **[1:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=112)** One bonus that I really enjoy, GitHub CLI has a Copilot extension available.
>
> **[1:58](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=118)** This allows you to create complex shell commands with the help of Copilot.
>
> **[2:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=123)** Copilot is an amazing AI coding assistant.
>
> **[2:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=125)** It's a very robust tool that continues to improve.
>
> **[2:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/what-is-github-copilot-24295480?u=76281980&t=129)** Understanding how to leverage it is a superpower.

> [!info]- Semantic Content
>
> **Tools:** github (6), command line (1), vs code (1)
> **Env Vars:** ide (4), dto (1), json (1), cli (1)
> **Definitions:** is an  (2), is a  (1)
> **Code Keywords:** interface (1), function (1)
> **Prerequisites:** setup (2)
> **CLI Commands:** find (1)
> **URLs:** [github.com](https://github.com) (1)

#### Chatting with Copilot
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=0)** Copilot Chat is a powerful feature for code explanation, generation, and insights.
>
> **[0:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=6)** It allows you to harness Copilot in places external to the codebase.
>
> **[0:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=10)** The first example I like to do is highlight a section of code and open the chat, which is this button right here, and I'll ask Copilot to write a comment for this function.
>
> **[0:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=19)** Write a comment for the highlighted code.
>
> **[0:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=24)** This output is probably more verbose than something I would write as a comment, and skimming, it seems completely accurate.
>
> **[0:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=32)** I highly encourage you to double-check the work of Copilot everywhere.
>
> **[0:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=36)** Also note, there's an option here to copy to your clipboard.
>
> **[0:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=39)** Another prompt you can pass to Copilot as a request to explain.
>
> **[0:44](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=44)** So I'll ask it to explain the highlighted code.
>
> **[0:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=48)** I want to pause for a moment.
>
> **[0:49](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=49)** This function was generated by Copilot.
>
> **[0:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=52)** A moment ago, Copilot created the DocBlock and now it's explaining how this function works.
>
> **[0:58](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=58)** I frequently search the internet for simple things, problems I've solved before, but I don't quite remember.
>
> **[1:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=63)** With Copilot, I don't need to leave my IDE.
>
> **[1:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=66)** For example, I can ask, what is the Git command to select a single commit from another branch?
>
> **[1:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=78)** Now, Google may or may not have answered that for me, but not only does Copilot remind me that it's called cherry-picking, but it also provides the syntax for it.
>
> **[1:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=86)** I'm going to use a lot of PHP in this course, so it would be logical to have to create a class in PHP, and pending the PHP version that can be somewhat verbose.
>
> **[1:35](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=95)** So I'll ask Copilot to create a class that looks like a person.
>
> **[1:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=99)** Create a PHP 8.0 class that has the following properties: age, integer, name, string, and email string.
>
> **[1:57](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=117)** The output is valid, and it's PHP 8.0, which is what I asked for.
>
> **[2:02](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=122)** But I can convert that to 8.3 with constructor property promotion by telling it, use PHP 8.3 constructor property promotion.
>
> **[2:15](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=135)** Copilot knows I'm talking about the class that it just generated and gives me the updated version.
>
> **[2:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=139)** I haven't called this class a person, but that's what Copilot decided it should be.
>
> **[2:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=144)** Using that, I can ask it to create a person interface in TypeScript.
>
> **[2:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=149)** Create a person.
>
> **[2:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=152)** And this should unlock a new line of thinking.
>
> **[2:34](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=154)** How would I rewrite the highlighted code in Python, or in Ruby, in Ada 83, in COBOL?
>
> **[2:47](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=167)** I don't really know those last two, so I can't confirm.
>
> **[2:50](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=170)** But it's fair to say that Copilot knows many languages, even pretty obscure stuff.
>
> **[2:55](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=175)** I did a course about automated testing, so it stands to reason.
>
> **[2:58](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=178)** I could ask Copilot to write a test for the highlighted code.
>
> **[3:04](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=184)** Copilot Chat is powerful.
>
> **[3:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=186)** The last part I want to call out are slash commands.
>
> **[3:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=189)** I can type slash to see the available slash commands and a short description for each.
>
> **[3:14](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=194)** I'm going to remove a semicolon in this, and I'll run /fix.
>
> **[3:21](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=201)** As expected, Copilot finds the problem.
>
> **[3:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=204)** Now, in trickier bugs, Copilot may or may not be able to identify it with the entire file.
>
> **[3:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=209)** You might have to hone in on specific areas.
>
> **[3:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=212)** The last slash command that I want to call out is optimize.
>
> **[3:37](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=217)** In this case, there's not a lot to optimize, but something that has pretty difficult logic in conditional paths, Copilot can recommend faster ways and more readable code.
>
> **[3:46](https://www.linkedin.com/learning/refactoring-with-github-copilot/chatting-with-copilot-24295482?u=76281980&t=226)** So Copilot Chat is really useful, and because it's context-aware, it can really help move things forward quickly.

> [!info]- Semantic Content
>
> **CLI Commands:** php (6), git (1), python (1), ruby (1)
> **Code Keywords:** function (3), pass (1), for. (1), interface (1), this, (1)
> **Env Vars:** php (6), ide (1), cobol (1)
> **Versions:** php 8 (3), 8.3 (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)

#### Refactoring explained
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=0)** Refactoring is changing code without changing the way it behaves.
>
> **[0:04](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=4)** That second part is important.
>
> **[0:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=5)** It means that when code is refactored, it is for the benefit of developers, not users.
>
> **[0:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=11)** I want to start with some simple examples of refactoring.
>
> **[0:14](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=14)** I'll add two functions, function foo, thanks, Copilot, and I'll add function bar.
>
> **[0:25](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=25)** One console logs foo, one console logs bar.
>
> **[0:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=32)** And then I'll call them, and not surprisingly, the output is foo and bar.
>
> **[0:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=39)** Now, to refactor, when I look at this, I have two functions that have similar functionality.
>
> **[0:44](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=44)** I could probably create one function and pass in the string to echo.
>
> **[0:49](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=49)** So I'll simply create a display string function with the help of Copilot, a lot less keystrokes.
>
> **[1:01](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=61)** And then I'll update the calls to foo and bar to use the new function.
>
> **[1:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=69)** And at this point, I can delete the old functions that aren't called anymore.
>
> **[1:15](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=75)** When I call the file again, not surprisingly, the output is identical.
>
> **[1:20](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=80)** This is a super simple example of refactoring.
>
> **[1:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=83)** Note that the output didn't change, but I removed two functions and shrunk the file by about 30 percent.
>
> **[1:28](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=88)** Now, refactoring is not about removing code.
>
> **[1:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=90)** Sometimes, that is the shape that it takes, but it can also be about adding code.
>
> **[1:35](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=95)** First, I'm going to create a new file called add code to work in, and I'm going to type out a function that returns a discounted price on a product.
>
> **[1:46](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=106)** Imagine this in an e-commerce situation.
>
> **[1:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=108)** So function apply_discount().
>
> **[1:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=112)** And we'll take a string which is the product type, and a float, which is the price.
>
> **[2:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=123)** I'm going to ignore Copilot's prompt so I can talk through this while I'm doing it.
>
> **[2:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=127)** If product type, let's say clothing, then we'll return price times, sure, I'll take 0.9, and then, else if, product type is grocery.
>
> **[2:33](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=153)** I will return 80 and I'll add one more.
>
> **[2:42](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=162)** Sure, I can take that.
>
> **[2:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=168)** Oh, fix some formatting here.
>
> **[2:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=172)** Let me spell that correctly.
>
> **[2:56](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=176)** And I'll return, sure, I'll take all of that.
>
> **[3:01](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=181)** Now, you're probably thinking this might be a pain to maintain.
>
> **[3:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=185)** What if more categories are added?
>
> **[3:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=187)** I'm going to add a wrinkle.
>
> **[3:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=188)** It would not be surprising if I needed to display the discount percentage somewhere.
>
> **[3:12](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=192)** So I'll add that function.
>
> **[3:16](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=196)** And this time, I will let Copilot auto-complete it for me; it has enough context.
>
> **[3:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=206)** And it was able to infer that from the previous function that I had written.
>
> **[3:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=210)** A logical step here would be a function that returns the value of the discount for each category.
>
> **[3:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=216)** That way I can use them both in apply_discount() and display_discount_percent_for_product().
>
> **[3:40](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=220)** So I'll call this get_discount_for_product_type().
>
> **[3:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=228)** With that in place, the body for apply_discount() becomes, get_discount_by_product_type, and then, I return the price, minus the price, times the discount.
>
> **[4:02](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=242)** And for display_discount _percentage, it's similar.
>
> **[4:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=247)** I don't know why Copilot thinks we need that echo, but there we are.
>
> **[4:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=250)** Now, the behavior of those functions didn't change from when I created them until now, but their source is no longer hard-coded.
>
> **[4:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=257)** And that means the get_discount_for_product_type is ready for me to connect to an external data source or a JSON file instead of hard-coding it.
>
> **[4:27](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=267)** Now, these were both simple examples in this video, but the key takeaway is that refactoring is for the benefit of developers.
>
> **[4:34](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-explained-9708449?u=76281980&t=274)** The user experience should not change.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (3), type, (2), this, (1), pass (1)
> **Code Identifiers:** apply_discount (3), get_discount_for_product_type (2), display_discount_percent_for_product (1), get_discount_by_product_type (1), display_discount (1)
> **Definitions:** means that (1), is a  (1)
> **Env Vars:** json (1)
> **Versions:** 0.9 (1)
> **Analogies:** imagine (1)
> **Warnings:** note that (1)

#### Code smells
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=0)** You are familiar with code smells, even if you don't know that phrase by name.
>
> **[0:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=5)** Code smells are not bugs, but they are things that just don't seem right.
>
> **[0:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=9)** This first function, process order, is 40 lines long.
>
> **[0:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=13)** Long functions can be a code smell.
>
> **[0:16](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=16)** It might be okay, but it's worth looking at.
>
> **[0:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=19)** I'm going to walk through this function.
>
> **[0:20](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=20)** The comments indicate that it has four responsibilities: validate order, calculate total price, apply shipping, and send notification.
>
> **[0:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=32)** If I was going to refactor this function, I'd use those each as jumping-off points.
>
> **[0:37](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=37)** This isn't, of course, about testing, but imagine having to write unit tests for this function, a nightmare.
>
> **[0:43](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=43)** The next function, createUser, is an example of too many arguments.
>
> **[0:49](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=49)** Just look at the signature, it has 11 or 12 parameters.
>
> **[0:53](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=53)** I'm not sure I'd even remember if email or phone number comes first.
>
> **[0:58](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=58)** And do I have to pass an empty string for args I don't intend to use?
>
> **[1:01](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=61)** Imagine a use case where a business logic requires adding a title to the user.
>
> **[1:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=66)** Then you'd have to update all calls to it.
>
> **[1:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=68)** Okay, I'm going to jump over to PHP for a moment.
>
> **[1:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=71)** There are three classes in here: checkout, invoice, and report.
>
> **[1:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=77)** Now each one has some hard-coded logic about tax.
>
> **[1:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=83)** Fixing this might require creating a new tax class or even some kind of global constant.
>
> **[1:28](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=88)** This code smell is often called shotgun surgery, because updating the tax rate would require updating a value on line 37, on line 24, and on line 9.
>
> **[1:41](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=101)** I sure hope we got them all.
>
> **[1:43](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=103)** I'm going to show one more example.
>
> **[1:45](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=105)** Imagine a blog system, there's a user or author object and a blog post object.
>
> **[1:51](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=111)** This is arguably not a terrible code smell.
>
> **[1:54](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=114)** The blog post is formatting the author details for use in the blog.
>
> **[1:59](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=119)** But, since the blog author has been established, this is actually called feature envy.
>
> **[2:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=125)** The author class should be responsible for generating the string, and then the blog class should call that method.
>
> **[2:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=131)** There's also things to consider about property visibility here.
>
> **[2:15](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=135)** All the properties on author are public, which means they could be changed.
>
> **[2:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=138)** I didn't cover all code smells here, not even close.
>
> **[2:21](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=141)** But I flagged some of the more common things that are worth looking for.
>
> **[2:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=144)** Code smells can be strong or faint, and they don't always indicate a problem, but they might.
>
> **[2:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/code-smells-9708448?u=76281980&t=150)** This means they are worth looking into when considering refactoring.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), require (2), pass (1), public (1), for. (1)
> **Analogies:** imagine (3)
> **CLI Commands:** php (1)
> **Code Identifiers:** createuser (1)
> **Env Vars:** php (1)
> **Definitions:** is an  (1)

#### Refactoring strategies
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=0)** Before I dive into using Copilot to aid in refactoring, I want to high-level some ways to think about refactoring.
>
> **[0:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=7)** One of my favorite sites on the internet is refactoring.guru.
>
> **[0:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=10)** They have a catalog of refactoring techniques.
>
> **[0:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=13)** Looking at the first one here, composing methods, you can see they define this as correctly composing logic.
>
> **[0:20](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=20)** The first strategy is to extract methods, followed by the next strategy for inlining methods.
>
> **[0:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=26)** Extracting a method in TypeScript shows taking a small piece of logic and creating a new function with it.
>
> **[0:33](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=33)** So the print details function is new.
>
> **[0:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=36)** Jumping to the inverse, take a small method called once and move it inline.
>
> **[0:41](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=41)** At first, it seems like these are opposites, but the factor that makes them different is what is driving the need.
>
> **[0:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=48)** Now, I'm not going to jump through all of these, but know that this resource exists.
>
> **[0:54](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=54)** Scrolling down, there's moving features between objects.
>
> **[0:56](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=56)** The next portion is about organizing data, and it hits one of my biggest flags in PHP.
>
> **[1:02](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=62)** If you're using an associative array, replace it with a small class.
>
> **[1:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=67)** Organizing data is about how you think about data structure within your code.
>
> **[1:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=71)** After that, it pokes at simplifying conditionals.
>
> **[1:14](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=74)** This seems straightforward.
>
> **[1:16](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=76)** In my experience, conditionals aren't refactored often enough.
>
> **[1:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=79)** It's an easy place to start to add clarity to a codebase.
>
> **[1:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=83)** Simplifying Method Calls touches on too many arguments, but also borders on things like the Factory Design Pattern; essentially, how the different pieces of business logic interact with each other.
>
> **[1:34](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=94)** And finally, dealing with generalization.
>
> **[1:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=96)** When I write code, and I'm not thinking at the appropriate layer of abstraction, I often find I have to write much more code to accomplish the routine I'm working on.
>
> **[1:45](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=105)** You don't have to memorize or even understand all of these to put together a plan to refactor.
>
> **[1:50](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=110)** I'm going to return to an example from the video about code smells.
>
> **[1:53](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=113)** This has three classes that all share logic about tax values.
>
> **[1:59](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=119)** Note that for the purpose of this course, these are all commented.
>
> **[2:02](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=122)** And if I were working in a codebase, I might take the same approach.
>
> **[2:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=126)** Adding comments about duplicated logic or features can be the first step to refactoring.
>
> **[2:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=131)** Now, the next logical step here could be a global function all these classes have access to.
>
> **[2:16](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=136)** Returns a value of tax.
>
> **[2:20](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=140)** Currently 0.1. In fact, I'll just add that.
>
> **[2:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=144)** Now where it's hard-coded, I can update to use the function and remove the comments.
>
> **[2:34](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=154)** Something important just happened.
>
> **[2:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=156)** Tax rate now functions as a new seam that I can inject logic.
>
> **[2:42](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=162)** It, of course, doesn't have context, but I could look up rates or I could stand up an entire other set of rules based on the logged-in user.
>
> **[2:49](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=169)** As you think about refactoring, the best refactoring accomplishes two things at the same time.
>
> **[2:55](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=175)** First, make the code easier to understand, and next, make it easier to update in the future.
>
> **[3:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-strategies-24291830?u=76281980&t=180)** If your plan accomplishes those, pull the trigger on the refactor.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), new. (1), class. (1), finally, (1)
> **CLI Commands:** make (2), php (1), find (1)
> **Env Vars:** php (1)
> **Versions:** 0.1 (1)
> **Warnings:** note that (1)

#### Refactoring with Copilot
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=0)** If you're taking the time to refactor, it can be easy to just jump in, but taking a couple minutes to understand the code might uncover hidden things to refactor.
>
> **[0:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=8)** And this is where Copilot can be super useful.
>
> **[0:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=11)** This is an example of code smells.
>
> **[0:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=13)** There's a processOrder() function and the createUser() function.
>
> **[0:16](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=16)** I'm going to delete the createUser() function for this video.
>
> **[0:20](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=20)** So the first thing I'm going to do here is ask Copilot, how would I refactor this?
>
> **[0:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=30)** The output of its example is sometimes incomplete, that is, it expects you to know how to make this work.
>
> **[0:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=39)** I could ask it for all the code.
>
> **[0:40](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=40)** In this case, I think I can just copy and paste this extracted, validate order, and process order, and left to calculate total price and further processing.
>
> **[0:51](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=51)** But shipping is gone.
>
> **[0:53](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=53)** This is why we have to look.
>
> **[0:54](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=54)** I'm not going to paste that. I'll leave it as it is.
>
> **[0:57](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=57)** You get the idea.
>
> **[0:58](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=58)** I can ask again, what else should I refactor?
>
> **[1:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=63)** And this is using the context of the open file.
>
> **[1:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=67)** Now this time, it identifies that these comments: calculate total price, apply shipping, and send notification are separate processes, and it gets most of them.
>
> **[1:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=78)** It doesn't get send notification.
>
> **[1:21](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=81)** Sometimes, in Copilot, you experience hallucinations like this.
>
> **[1:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=84)** When I was testing this early on, it suggested in the validateOrder() function to return early, but change nothing but the return error string.
>
> **[1:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=92)** So it doesn't totally understand your code.
>
> **[1:34](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=94)** Interestingly, it never suggested extracting the notify logic when I tested this, and it's continuing to have that problem.
>
> **[1:41](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=101)** Some of the things you can ask is, would any of this be confusing to a new developer?
>
> **[1:50](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=110)** It suggests comments and function names are self-explanatory.
>
> **[1:54](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=114)** And in this case, it does preserve send notification.
>
> **[1:57](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=117)** Another way you can ask this is, how can I make this easier to extend in the future?
>
> **[2:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=126)** And this suggested constants this time.
>
> **[2:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=130)** And again, refactoring out some logic.
>
> **[2:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=133)** And then, finally, it did call out the notification system that we should have a function for that.
>
> **[2:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=139)** I can also ask, are there any code smells in this file?
>
> **[2:27](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=147)** And so there's some overlap.
>
> **[2:28](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=148)** Again, it pointed out magic numbers.
>
> **[2:31](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=151)** It talked about repetitive code and single responsibilities principle that the process order was doing too much.
>
> **[2:38](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=158)** We already knew that.
>
> **[2:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=159)** But it's nice to see Copilot identifies some of the things.
>
> **[2:42](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=162)** And there's a different perspective in all three questions.
>
> **[2:46](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=166)** Not everything Copilot suggests will make sense in your codebase.
>
> **[2:49](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=169)** There is a law of diminishing returns.
>
> **[2:51](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=171)** The fact that you are asking about refactoring immediately biases results in favor of refactoring.
>
> **[2:57](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-with-copilot-24295484?u=76281980&t=177)** So you need to make the decision and own the results.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), case, (2), super (1), delete (1), this. (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** createuser (2), processorder (1), validateorder (1)
> **Definitions:** is an  (1), is a  (1)


### 2. Refactoring Techniques with AI

#### Simplifying functionality
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=0)** As a codebase grows, it becomes more complex.
>
> **[0:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=3)** Much of your refactoring will be to simplify the functionality.
>
> **[0:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=7)** What this simplification looks like can vary greatly based on business logic.
>
> **[0:12](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=12)** Here are two example PHP classes, obviously incomplete: author and blog post.
>
> **[0:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=18)** Note the comment on line 82 that indicates this method is too interested in the author class properties.
>
> **[0:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=24)** In PHP 8 and below, I could change the property to be private.
>
> **[0:28](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=28)** In 8.1, I could make them read-only.
>
> **[0:31](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=31)** Both of those are helpful language constructs, but they don't solve the root issue.
>
> **[0:35](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=35)** Even if I were to wrap these properties in a method to return the value, I wouldn't have solved the issue of the blog class method doing too much with the author information.
>
> **[0:44](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=44)** I'm going to show two ways to simplify this.
>
> **[0:47](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=47)** First, I can move the logic to a new method in the author class.
>
> **[0:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=52)** We'll call it formatted author.
>
> **[0:56](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=56)** And it figured out that that's what I wanted to do.
>
> **[0:59](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=59)** And then I can call that on line 87.
>
> **[1:04](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=64)** Thanks, Copilot.
>
> **[1:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=66)** That solves what was identified as feature envy.
>
> **[1:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=69)** But has it actually simplified anything?
>
> **[1:12](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=72)** Well, maybe.
>
> **[1:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=73)** It depends how complex the rest of the codebase is.
>
> **[1:16](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=76)** This might be okay, but if there is a situation where I need to display author details in different contexts, I can approach this another way.
>
> **[1:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=84)** I'm going to add a new class to display the author.
>
> **[1:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=89)** And it's going to have a function called displayAuthorDetails().
>
> **[1:38](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=98)** And this takes an author object and returns the formatted author.
>
> **[1:46](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=106)** But I'm going to go a step further.
>
> **[1:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=108)** I'm going to add AuthorDisplayTexturizerInterface.
>
> **[1:55](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=115)** We'll call that the texturizer.
>
> **[1:57](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=117)** And then, on the constructor, I'll accept that.
>
> **[2:02](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=122)** So now I actually need this interface.
>
> **[2:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=125)** This is a common idea in most object-oriented programming languages.
>
> **[2:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=129)** In Swift, it's called a protocol.
>
> **[2:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=131)** But in C#, Java, TypeScript, and a few others, it's an interface.
>
> **[2:15](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=135)** This is a contract.
>
> **[2:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=137)** Anything implementing it must have this public function, texturizeAuthor().
>
> **[2:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=143)** I accepted what Copilot suggested, but I actually want that.
>
> **[2:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=149)** I need to update the AuthorDisplay class to use that public method on the interface.
>
> **[2:37](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=157)** And my new interface implementation should look like that.
>
> **[2:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=168)** I'm going to clear this out for now.
>
> **[3:01](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=181)** And this is identifying that I'm missing the texturizeAuthor() method.
>
> **[3:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=186)** And that's going to look like that, which happens to match what's happening in the formatted_author call.
>
> **[3:14](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=194)** Now, before I add another implementation, I need to clean up some old logic.
>
> **[3:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=198)** I can delete this formatted_author from the author class; should no longer be called.
>
> **[3:25](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=205)** In the blog class, I can instantiate the author string.
>
> **[3:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=209)** I'll have a new texturizer that's private.
>
> **[3:37](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=217)** And then, I will have AuthorDisplay, and that takes the AuthorStringDisplayTexturizer.
>
> **[3:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=232)** It shouldn't be in the constructor, it should be in the getAuthorDetails().
>
> **[4:04](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=244)** And now, what I can do is return authorDisplay->display.
>
> **[4:14](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=254)** There's a point to this, I promise.
>
> **[4:16](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=256)** So AuthorDisplay.
>
> **[4:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=264)** Now, this has become a ridiculous amount of simplification, right?
>
> **[4:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=269)** I started with author and there was a method to display the author string that blog post called.
>
> **[4:37](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=277)** But now, in the getAuthorDetails() method, a texturizer is instantiated that's passed to AuthorDisplay, which calls displayAuthorDetails that uses this texturizer, which in this case is AuthorDisplayTexturizerInterface of AuthorStringDisplayTexturizer, which is calling the same method as earlier.
>
> **[4:59](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=299)** I said I would add an implementation of the display because it would help my case.
>
> **[5:04](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=304)** I'm not actually going to do that.
>
> **[5:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=306)** If you check out the final branch of this video, you'll see a linked author display texturizer, and that will improve on this idea and justify why it happened.
>
> **[5:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=317)** There are, of course, other obvious refactors here.
>
> **[5:20](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=320)** Classes and directories would be a good first step, and blog post's call to getAuthorDetails() is kind of terrible.
>
> **[5:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=326)** That actually could use a factory after all the texturizing stuff.
>
> **[5:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/simplifying-functionality-24296434?u=76281980&t=330)** Now throughout this, I relied on Copilot to auto-complete and my naming led it in the direction of what I was hoping to accomplish with this.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (4), private (2), this. (2), function (2), public (2)
> **Code Identifiers:** getauthordetails (3), displayauthordetails (2), texturizeauthor (2), formatted_author (2), authordisplay (1)
> **CLI Commands:** php (2), make (1)
> **Definitions:** is a  (3)
> **Env Vars:** php (2)
> **Versions:** php 8 (1), 8.1 (1)

#### Enhancing naming and readability
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=0)** Have you ever started working in an existing codebase and felt like you had to learn a different language?
>
> **[0:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=5)** One way to avoid that is with Copilot AI.
>
> **[0:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=8)** This is code I worked on when talking about simplifying.
>
> **[0:12](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=12)** There's an author class and an interface, and there's two classes that implement the interface, followed by an AuthorDisplay class and then the actual BlogPost class.
>
> **[0:25](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=25)** And if I were new to this project, I would kind of get what it's trying to accomplish.
>
> **[0:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=30)** I'm going to invite Copilot to the party, and I'm going to ask it to rename classes in this file.
>
> **[0:35](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=35)** Rename classes in this file to make things clearer.
>
> **[0:42](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=42)** Now let it be known I am not some kind of mastermind.
>
> **[0:44](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=44)** I didn't choose those terrible names in prep for this video.
>
> **[0:47](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=47)** This is real feedback from Copilot.
>
> **[0:51](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=51)** It suggests getting rid of the whole texturizer thing and updating AuthorDisplay to actually be AuthorDetailsDisplay.
>
> **[0:58](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=58)** Oh, I didn't expect that.
>
> **[1:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=60)** And then it shows what the updated snippet would be like.
>
> **[1:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=63)** And the warning at the bottom, make sure to update the rest of your codebase to reflect these new class names.
>
> **[1:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=67)** Now, because we're using Codespaces, if I were to refactor this, it would just work.
>
> **[1:12](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=72)** Let's do that.
>
> **[1:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=73)** AuthorDisplayStringTexturizer and refactor.
>
> **[1:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=79)** Oh, change all occurrences, there it is, to AuthorTextFormatter.
>
> **[1:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=89)** Now, I'm just going to ask directly how I would improve readability.
>
> **[1:33](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=93)** Improve readability in this file.
>
> **[1:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=99)** It suggests to use consistent naming conventions, add comments to explain the purpose, and ensure proper indentation and spacing.
>
> **[1:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=108)** When I wrote this script, some of the spacing suggestions suggested opening the class, brace, on the same line as the class name, and it doesn't do that this time.
>
> **[1:59](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=119)** Working with AI can be fun.
>
> **[2:01](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=121)** If you're picky about code formatting, asking Copilot to format your code can be a little bit maddening.
>
> **[2:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=126)** And then the final thing I'm going to do, I'm going to jump into here, and I'm going to ask it to make this easier to understand.
>
> **[2:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=133)** In the process of refactoring, extracting AuthorDisplay, LinkedAuthorDisplayTexturizer, AuthorTextFormatter, and AuthorDisplayTexturizerInterface, the getAuthorDetails() method got a little bit gross.
>
> **[2:33](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=153)** And Copilot suggests making the variable names more descriptive and adding comments to explain each step.
>
> **[2:41](https://www.linkedin.com/learning/refactoring-with-github-copilot/enhancing-naming-and-readability-24294567?u=76281980&t=161)** Using Copilot AI can help make a codebase understandable and accessible to new developers or old developers who are exploring new parts of the codebase.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (2), let (2), class. (1), this, (1), class, (1)
> **CLI Commands:** make (4)
> **Code Identifiers:** getauthordetails (1)
> **Best Practices:** make sure to (1)
> **Warnings:** warning (1)

#### Removing dead code
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=0)** As a codebase grows, functions can be replaced, especially when refactoring.
>
> **[0:04](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=4)** As a result, dead code that is code that can't be reached, can make it into your project.
>
> **[0:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=10)** This is a simple exercise.
>
> **[0:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=11)** This function accepts a price and if a user is a member.
>
> **[0:16](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=16)** If the price is greater than 100, a 10 percent discount, and if they're a member, another five percent discount, then a check on if the amount is negative.
>
> **[0:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=24)** If it is, they get a 50 percent discount.
>
> **[0:27](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=27)** But how could a price be negative?
>
> **[0:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=29)** Okay. So it's a dumb example, but it will work here.
>
> **[0:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=32)** I'll ask Copilot, is there dead code here?
>
> **[0:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=39)** Now this is cool.
>
> **[0:41](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=41)** A static analyzer would not catch something like this, whereas Copilot, an AI with context, sees the price is less than zero and says it's logically incorrect and unnecessary.
>
> **[0:53](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=53)** Now, just for the fun of it, I'm going to change the variable names and function call to something without context.
>
> **[0:59](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=59)** Price becomes number and member
>
> **[1:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=68)** becomes a bool.
>
> **[1:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=73)** I'm going to call all the comments.
>
> **[1:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=79)** And I will call this a new number and we'll rename this just calc.
>
> **[1:31](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=91)** And so again, I'll ask, is there dead code in this file?
>
> **[1:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=96)** There's no context that indicates this is a calculation related to discounts, money, or membership.
>
> **[1:43](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=103)** Well, it turns out there is.
>
> **[1:46](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=106)** If the number is negative, it will override the value of a new number, which might have been set by a bool previously.
>
> **[1:54](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=114)** Now, this is kind of confusing because the variables give us no business logic to work with.
>
> **[1:59](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=119)** Perhaps that's actually a valid use case.
>
> **[2:01](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=121)** But that was the point of removing context.
>
> **[2:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=123)** To show that Copilot will, just like we do, bias toward finding something when asked a question.
>
> **[2:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=130)** I want to flag that while writing this particular video, Copilot suggested a refactor that removed the first conditional check and set the value to 0.1 for a new number.
>
> **[2:20](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=140)** That doesn't make a lot of sense, because a number could be less than 100 but still greater than zero.
>
> **[2:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=146)** While Copilot will give you code to copy and paste, it's vital that you read and understand what that code is doing.
>
> **[2:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=152)** Asking specifically about dead code will suggest to Copilot that you think there might be dead code.
>
> **[2:38](https://www.linkedin.com/learning/refactoring-with-github-copilot/removing-dead-code-24291833?u=76281980&t=158)** It will likely find something.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), static (1), this, (1), override (1), case. (1)
> **CLI Commands:** make (2), find (1)
> **Definitions:** is a  (3)
> **Versions:** 0.1 (1)
> **Analogies:** just like (1)

#### Optimizing conditionals and loops
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=0)** Two areas ripe for refactoring are conditionals and loops.
>
> **[0:04](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=4)** And, of course, Copilot can help guide the way.
>
> **[0:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=7)** Here's an example of a function that calculates a discount.
>
> **[0:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=10)** Some initial thoughts on line 4, 16, and 22, it's checking the customer type.
>
> **[0:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=18)** Could that logic be related to customer type, specific functions?
>
> **[0:21](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=21)** Actually, slowing down a bit.
>
> **[0:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=24)** This is three levels deep.
>
> **[0:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=26)** And yikes, the isHoliday bool causes that, but it's also checked quite a few times, six, 12, 18, 20, 23.
>
> **[0:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=36)** I have opinions on how to refactor this function, and I'm sure you do as well.
>
> **[0:40](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=40)** I'm going to see what Copilot thinks.
>
> **[0:42](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=42)** Refactor the conditionals.
>
> **[0:46](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=46)** When I was writing this course, I tested and Copilot completely dropped logic around the VIP customer post type.
>
> **[0:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=52)** Let's see if it does that again.
>
> **[0:55](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=55)** Yes, interesting.
>
> **[0:58](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=58)** It suggests the regular and premium and creates wrapper functions, which seems logical, but VIP is gone again.
>
> **[1:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=65)** Maybe instead of asking for a refactor, I should ask to simplify it.
>
> **[1:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=69)** Copilot does like switch statements.
>
> **[1:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=71)** Let's see if that's what it comes up with.
>
> **[1:14](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=74)** Yes. Finally, I'll ask, are there other ways to simplify this?
>
> **[1:21](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=81)** And this is interesting.
>
> **[1:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=84)** This results in a discount rates object that has customer types and high and low pricing based on if there's holiday.
>
> **[1:34](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=94)** One other common area to refactor is conditionals with multiple conditions.
>
> **[1:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=99)** This is a super simple example.
>
> **[1:41](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=101)** If the user is logged in and user is admin.
>
> **[1:44](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=104)** In your head, I want you to see this as two nested conditionals like this.
>
> **[1:51](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=111)** That's a good way to identify how complex a conditional is and whether or not to refactor.
>
> **[1:57](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=117)** Also, a simple sample here.
>
> **[2:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=120)** If I highlight this and I ask Copilot, I'm just going to say simplify.
>
> **[2:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=126)** And it goes back to the version that I had previously.
>
> **[2:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=129)** Moving on to loops.
>
> **[2:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=133)** All right.
>
> **[2:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=133)** This function generates a CSV from a very ugly array.
>
> **[2:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=139)** Before I go on with this, I want to flag that to build the CSV, all of the data will need to be accessed.
>
> **[2:25](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=145)** So refactoring isn't actually going to eliminate loops, it's going to make it easier to understand.
>
> **[2:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=150)** I'll ask, how would I simplify this so it is not three nested loops?
>
> **[2:40](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=160)** In testing, I had to explicitly say, I do not want to see three nested foreach loops, and then Copilot created some helper function's foreach loops.
>
> **[2:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=168)** I do not want to see three nested foreach.
>
> **[2:56](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=176)** And it still doesn't really get it.
>
> **[2:59](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=179)** So here's what I recommend: if possible, limit each function or method to one loop, even if that means calling a helper function.
>
> **[3:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=187)** The benefit is traceability and the ability to surgically fix and refactor going forward.
>
> **[3:14](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=194)** Copilot will cover just the basics of refactoring conditionals and loops.
>
> **[3:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/optimizing-condtionals-and-loops-24298068?u=76281980&t=198)** You will likely be able to take it quite a bit further.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), type. (2), let (2), type, (1), switch (1)
> **Env Vars:** vip (2), csv (2)
> **CLI Commands:** make (1)
> **Code Identifiers:** isholiday (1)
> **Definitions:** is a  (1)

#### Refactoring data structures
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=0)** Behind all your code are data structures.
>
> **[0:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=3)** Some are simple, some are complex.
>
> **[0:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=5)** Sometimes these tend to get out of hand.
>
> **[0:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=8)** I'm going to walk through how I've dealt with these using Copilot.
>
> **[0:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=11)** This is a sample data structure.
>
> **[0:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=13)** Purposely broke some rules here, but you'll see why as I talk through this.
>
> **[0:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=17)** First, I'll identify some of the problems.
>
> **[0:20](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=20)** Details is ambiguous.
>
> **[0:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=23)** Why can't these values like price and stock and categories and discount be at the root?
>
> **[0:28](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=28)** Or why can't price and discount be moved to a pricing object?
>
> **[0:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=32)** Also, discount is null, but on the second item, it's a string.
>
> **[0:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=36)** And on the final item, it's missing entirely.
>
> **[0:40](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=40)** Note that categories is either a string or an array.
>
> **[0:46](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=46)** Back to a string here.
>
> **[0:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=48)** I'm going to be pretty explicit to Copilot and I'll see how far I can get.
>
> **[0:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=52)** I need to pull stock and categories to the root of each product.
>
> **[0:59](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=59)** Also, categories should always be in array.
>
> **[1:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=68)** Copilot suggested a function to change it.
>
> **[1:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=71)** I'm actually going to ask it to change the code.
>
> **[1:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=73)** I need to change the actual array.
>
> **[1:20](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=80)** Change the value of the inventory variable.
>
> **[1:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=83)** I asked it to change the array and it gave me the same function again.
>
> **[1:28](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=88)** Well, one way to deal with this, because it wants to execute code, is I can rename the file to JSON, and then I can do that.
>
> **[1:44](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=104)** And I'll say make this valid JSON so I can copy and paste.
>
> **[1:53](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=113)** And now it's valid JSON.
>
> **[1:54](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=114)** And now I can ask the same question.
>
> **[1:56](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=116)** Let's see.
>
> **[1:57](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=117)** I need to pull stock and categories to the root of each product, also categories should always be an array.
>
> **[2:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=133)** Okay. So that removed the details object entirely.
>
> **[2:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=137)** Weird, but fine.
>
> **[2:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=138)** And price still exists, stock still exists, categories is still around, discount still exists.
>
> **[2:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=144)** Note that it's only showing the first two items.
>
> **[2:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=146)** I did have three. Somewhere I lost the third item.
>
> **[2:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=149)** Another thing to be careful of when you're working with Copilot.
>
> **[2:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=152)** Now one thing to call out is tags are duplicative of categories.
>
> **[2:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=156)** So I can ask it to do, remove tags that duplicate category.
>
> **[2:45](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=165)** And so, electronics is gone and clothing and apparel would work.
>
> **[2:50](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=170)** When I have to deal with data shape conversion which is what would happen here, we would have changed the data shape of the original product to this new product.
>
> **[2:58](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=178)** I always write a converter the first time.
>
> **[3:01](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=181)** And then the second time I have to do it on a project, not only do I write a converter, I also create a versioned definition.
>
> **[3:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=187)** So I'm going to ask Copilot to do the same, which is what it suggested when this file was previously a JavaScript file and not a JSON file.
>
> **[3:14](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=194)** Can you create a converter function to move from the original format to this form?
>
> **[3:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=206)** And here's that convert data function.
>
> **[3:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=209)** As always, double-check Copilot's work.
>
> **[3:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=212)** Copilot is great at code.
>
> **[3:34](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=214)** My initial thought when I have to fix or remap a data structure is to write a function to do that.
>
> **[3:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=219)** But Copilot can often handle fixes iteratively through discussion in the source file itself.
>
> **[3:45](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=225)** Obviously, pay attention and don't lose a product like I did.
>
> **[3:49](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-data-structures-24290991?u=76281980&t=229)** This might be faster than writing a function in some cases.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), this. (1), this, (1), let (1)
> **Env Vars:** json (4)
> **Warnings:** note that (2), be careful (1)
> **CLI Commands:** make (1)
> **Definitions:** is a  (1)


### 3. Advanced Refactoring for Long-Lived Code Bases

#### Dealing with legacy code
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=0)** Legacy code. What is it?
>
> **[0:02](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=2)** I've been on teams that define legacy code as anything not built here, and I've worked on codebases that are 15 years old but continually refactored that don't feel like legacy.
>
> **[0:12](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=12)** One of the first indicators to me is the language features in use.
>
> **[0:16](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=16)** I'm going to start by asking Copilot what has changed in JavaScript in the last 12 years?
>
> **[0:25](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=25)** Knowing what features were introduced and when can help indicate the age of a project, but that doesn't necessarily make them legacy.
>
> **[0:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=32)** Have you worked in JavaScript codebases without arrow functions?
>
> **[0:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=36)** Or how about async await?
>
> **[0:38](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=38)** One area that often seems to be in a state of decay is dependency management.
>
> **[0:43](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=43)** This is a package.json file used for handling dependencies.
>
> **[0:47](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=47)** When I try to install it, it tells me I have an issue.
>
> **[0:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=52)** I can just paste this into Copilot and it tells me how to fix it.
>
> **[1:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=63)** Now, this case was somewhat obvious, I had a mismatched dependency on React and ReactDOM, mismatched versions.
>
> **[1:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=70)** So what I'm going to do is I'm going to accept what Copilot has here, and run another install.
>
> **[1:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=77)** Often in larger package management systems, this becomes a cascading process.
>
> **[1:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=83)** One update causes another, which causes another.
>
> **[1:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=86)** But if you're in a project that has some outdated dependencies, try and see if Copilot can iteratively help you upgrade.
>
> **[1:33](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=93)** Legacy code is often untested.
>
> **[1:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=96)** Jumping back to my favorite code smells file, I can ask for automated tests on the author class.
>
> **[1:50](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=110)** Not only does Copilot provide the tests, it also tells me how to require PHPUnit so that I can run tests.
>
> **[1:57](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=117)** And finally, how to execute the tests.
>
> **[2:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=120)** I could also ask, create tests for all classes.
>
> **[2:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=129)** Now, just like any other code that Copilot generates, you need to take the time to go through and confirm that what it created actually makes sense and functions like you expect it to.
>
> **[2:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=138)** The last thing to keep in mind about legacy code is that it didn't happen overnight.
>
> **[2:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=143)** The codebase grew.
>
> **[2:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/dealing-with-legacy-code-24298067?u=76281980&t=144)** So take small steps to refactor into a better codebase, and grow it into the kind of code you would like to work with going forward.

> [!info]- Semantic Content
>
> **Code Keywords:** async (1), await (1), class. (1), require (1), finally, (1)
> **Prerequisites:** install (2)
> **File Paths:** package.json (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the last (1)
> **Definitions:** is a  (1)
> **Analogies:** just like (1)
> **Warnings:** keep in mind (1)

#### Refactoring for performance
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=0)** By now you've probably noticed a pattern; identify an issue in code and ask Copilot about it.
>
> **[0:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=6)** Here's a check for duplicates in an array.
>
> **[0:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=9)** It's a slow implementation.
>
> **[0:11](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=11)** It iterates over the array, and during each step, iterates over all items to see if there's a match.
>
> **[0:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=17)** On line 6, the second part of the condition is iterating the list of duplicates.
>
> **[0:22](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=22)** So this just won't scale.
>
> **[0:25](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=25)** All right, Copilot, let us know what you think.
>
> **[0:27](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=27)** Improve performance.
>
> **[0:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=30)** Of course, Copilot is not only going to give me an improved algorithm, it's also going to explain why.
>
> **[0:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=36)** If you aren't familiar, a set stores unique values.
>
> **[0:40](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=40)** So the collection will grow slower in cases of the original array has lots of duplicate items.
>
> **[0:45](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=45)** As you can see, this has turned into one for loop rather than two.
>
> **[0:50](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=50)** Also, with that duplicates.include call.
>
> **[0:53](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=53)** So that's all well and good.
>
> **[0:56](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=56)** But this refactoring is very specific to the example implementation.
>
> **[1:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=60)** What can we do about application-level performance?
>
> **[1:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=63)** Well, one of the first things we do in web development is turn to caching.
>
> **[1:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=68)** If this set or any other data needs to be accessed multiple times during a request or on subsequent requests, so I'll ask, how could I cache the findDuplicates result set?
>
> **[1:25](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=85)** And Copilot provides an example answer.
>
> **[1:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=89)** One thing I want to call out is that if you are implementing cache in an application, you should do it application-wide and not at a function level like this.
>
> **[1:37](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=97)** There are use cases at the function level.
>
> **[1:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=99)** You'll need to decide.
>
> **[1:41](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=101)** Now, as usual, Copilot provided a huge chunk of code for us to work with.
>
> **[1:45](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=105)** Some of it needs to be refactored.
>
> **[1:47](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-for-performance-24295481?u=76281980&t=107)** The responsibility, as always, falls on you to make sure that the implementation is appropriate.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), match. (1), let (1), this. (1)
> **CLI Commands:** make (1)
> **Code Identifiers:** findduplicates (1)
> **Prerequisites:** you'll need (1)

#### Considerations refactoring large code bases
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=0)** Thus far, all of my examples have been very concise and short.
>
> **[0:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=5)** The idea is to show the effects and before/after state of a refactor.
>
> **[0:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=9)** But most projects are more than a dozen lines of code.
>
> **[0:12](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=12)** How do you approach refactoring then?
>
> **[0:14](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=14)** I'm going to download a large legacy project, WordPress.
>
> **[0:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=17)** I want to be clear that I'm not picking on WordPress, it's a long-lived codebase and perfect for the example here. And I'll unzip.
>
> **[0:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=26)** Most of the logic in WordPress is in wp-includes.
>
> **[0:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=30)** I don't have any files open, so I just open wp-includes and ask, is there any code in here that is not DRY?
>
> **[0:43](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=43)** Hmm. This isn't helpful.
>
> **[0:46](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=46)** Copilot is answering questions for a closed file.
>
> **[0:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=52)** I'm going to rephrase my prompt.
>
> **[0:56](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=56)** Scan the open directory and tell me what files are not DRY.
>
> **[1:02](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=62)** DRY, of course, stands for Don't Repeat Yourself, duplicated code.
>
> **[1:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=66)** Now, here's a bit of a gotcha.
>
> **[1:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=69)** Copilot cannot and does not scan the file system.
>
> **[1:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=73)** The only context it has is what is open in the IDE and what it can infer from that.
>
> **[1:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=78)** If I were to open all the files in this directory, Copilot would have more context, but there are too many files to do that with reasonably.
>
> **[1:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=86)** Let me show you one trick I like to use.
>
> **[1:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=89)** I'm going to open the WP_Query class, and I ask what design patterns could be used to improve the code.
>
> **[1:40](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=100)** And no surprise, Copilot has opinions.
>
> **[1:43](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=103)** The first entry here, the builder pattern, is one I add to most WordPress projects because it makes WP_Query a lot easier to use.
>
> **[1:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=112)** Now, of course, we can't open a PR to WordPress to include this, but in your own codebases, this is a solid approach to move forward.
>
> **[2:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=120)** I'm going to ask what else can be refactored.
>
> **[2:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=126)** Don't be surprised if this answer includes suggestions to use design patterns.
>
> **[2:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=130)** Copilot is a big fan of Copilot's previous ideas, and the question is part of the context under consideration.
>
> **[2:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=138)** So the first answer is encapsulation and data hiding.
>
> **[2:21](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=141)** And then the second answer is builder pattern, more design patterns.
>
> **[2:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=146)** And finally, single responsibility principle.
>
> **[2:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=150)** Another approach is to be direct.
>
> **[2:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=152)** Ask, what methods have too many responsibilities?
>
> **[2:40](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=160)** If you have a large class or collections of functions, this might help you determine where to start your refactoring.
>
> **[2:47](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=167)** At first, Copilot may appear to have some limitations in a large project, however, most large projects have a few key classes or functions.
>
> **[2:56](https://www.linkedin.com/learning/refactoring-with-github-copilot/considerations-refactoring-large-code-bases-24294568?u=76281980&t=176)** Starting there with Copilot's help is a good path forward.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), class, (1), this, (1), finally, (1)
> **Env Vars:** dry (3), ide (1)
> **Definitions:** is a  (3), stands for (1)
> **CLI Commands:** unzip (1)
> **UI Navigation:** open the (1)
> **Warnings:** gotcha (1)

#### Refactoring and automated testing
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=0)** You know that you and your team probably don't write enough tests, and that's okay.
>
> **[0:04](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=4)** Most people don't.
>
> **[0:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=5)** But Copilot can help.
>
> **[0:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=7)** To be clear, this is about using AI to support traditional automated testing.
>
> **[0:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=13)** The first step to adding tests is finding the right things to test.
>
> **[0:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=17)** Not all functions or classes are in a testable state.
>
> **[0:20](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=20)** Identifying the right place to start will help you continue to write tests once you get going.
>
> **[0:25](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=25)** Asking Copilot to write tests for a function or method is a way to quickly see how complex the tests will be.
>
> **[0:37](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=37)** This looks fairly straightforward.
>
> **[0:40](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=40)** A tip though, usually the first test I write in every app is a test that true = true.
>
> **[0:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=48)** This is so I can test that the test suite harness is correctly configured.
>
> **[0:53](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=53)** From there, I can be confident that as I add tests and assertions, there will be value in running them.
>
> **[0:59](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=59)** And this is that test.
>
> **[1:01](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=61)** I need a composer install.
>
> **[1:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=68)** Okay. Now I can use TestCase.
>
> **[1:28](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=88)** And I will assertTrue is true.
>
> **[1:38](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=98)** Now to run the tests, PHPUnit tests.
>
> **[1:44](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=104)** And no surprise, it passes.
>
> **[1:46](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=106)** Now I'll go ahead and copy the tests that it generated for the alphabetized_by_name() function.
>
> **[1:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=112)** And I will create a new file.
>
> **[1:54](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=114)** I'm calling it testable code because it's testing the functions in the TestableCode file.
>
> **[2:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=120)** And I will paste.
>
> **[2:02](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=122)** I haven't reviewed this code, I'm just going to blindly run the tests.
>
> **[2:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=127)** Ah, and they don't pass because I have not included the file under test.
>
> **[2:14](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=134)** Public function set up.
>
> **[2:27](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=147)** And we'll run again.
>
> **[2:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=150)** Oh. Great. And they pass.
>
> **[2:35](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=155)** The seven is a result of output that's hard-coded calling this function.
>
> **[2:43](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=163)** Okay. So I have one, two, three tests, all with one assertion that Copilot generated.
>
> **[2:53](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=173)** I'm going to delete these and do something a little bit easier to demonstrate, though.
>
> **[2:58](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=178)** Well, I was going to type public function testAdd, but I'll auto-complete and take what Copilot has.
>
> **[3:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=185)** And now we have two passing tests.
>
> **[3:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=188)** A key idea in writing tests is creating the test first so that it fails.
>
> **[3:15](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=195)** I'm going to do that here.
>
> **[3:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=197)** I'll type public function testSub.
>
> **[3:27](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=207)** Of course, Copilot auto-completed the assertion.
>
> **[3:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=210)** However, it's calling a function that doesn't yet exist.
>
> **[3:33](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=213)** If I jump over to testable code, though, Copilot cannot wait to generate that function for us.
>
> **[3:42](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=222)** It has the context from the test, so it can generate the function.
>
> **[3:45](https://www.linkedin.com/learning/refactoring-with-github-copilot/refactoring-and-automated-testing-24296435?u=76281980&t=225)** If you feel like test coverage is lacking in your project, and it probably is, there is no faster way to move forward than to work iteratively with Copilot to grow your test coverage.

> [!info]- Semantic Content
>
> **Code Keywords:** function (9), public (3), pass (2), continue (1), delete (1)
> **Code Identifiers:** asserttrue (1), alphabetized_by_name (1), testadd (1), testsub (1)
> **Definitions:** is a  (3)
> **Prerequisites:** install (1), set up (1)
> **CLI Commands:** composer (1)


### 4. Refactoring in the Real World

#### How to convince your team to refactor
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=0)** By now, you're convinced, not only do you want to refactor your codebase but you want to use Copilot to do it.
>
> **[0:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=6)** The only problem is your team might not see it as productive work.
>
> **[0:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=10)** I'm going to highlight some of the pieces that I've shown along the way.
>
> **[0:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=13)** In this code smells file, I created a bunch of new classes and an interface.
>
> **[0:21](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=21)** While this might work on some projects, it's likely overkill.
>
> **[0:25](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=25)** If you have a task adjacent to this kind of work, start by adding comments.
>
> **[0:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=30)** Comments are step zero to refactoring.
>
> **[0:33](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=33)** Better yet, ask Copilot to do it for you.
>
> **[0:36](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=36)** That's a simple addition to a PR, and the reviewing developer will really appreciate the effort that you put forth.
>
> **[0:44](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=44)** Once your team becomes accustomed to your PRs, having small improvements with comments, it's time to start making real improvements.
>
> **[0:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=52)** Refactor some conditionals.
>
> **[0:54](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=54)** In this case, breaking it into three functions, one per user type as step 1.
>
> **[0:59](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=59)** A subsequent step would be to normalize those into individual files containing the discount rules.
>
> **[1:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=65)** Remember, refactoring does not change functionality.
>
> **[1:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=69)** Finally, adding a test suite, if one does not exist, is a great first step.
>
> **[1:15](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=75)** It doesn't have to auto-run on every PR in your CI/CD.
>
> **[1:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=79)** Start small and build.
>
> **[1:21](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=81)** On some projects, I've never been able to convince the team to spend the time implementing test automation.
>
> **[1:27](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=87)** Even if the tests are a separate repo that are only on your local, you've left the code in a better place than you found it, and you can confirm with each change you make that you introduce no regressions.
>
> **[1:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=99)** Refactoring is safest and works best for everyone when the changes are small.
>
> **[1:45](https://www.linkedin.com/learning/refactoring-with-github-copilot/how-to-convince-your-team-to-refactor-24290992?u=76281980&t=105)** You may see a clear path forward, but to prevent regressions, move slowly.

> [!info]- Semantic Content
>
> **Code Keywords:** interface (1), case, (1), finally, (1)
> **CLI Commands:** cd (1), make (1)
> **Definitions:** is a  (1)

#### Pay down technical debt
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=0)** Refactoring is a scary word to managers.
>
> **[0:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=3)** It sounds like labor that has no appreciable improvement to the product.
>
> **[0:06](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=6)** But we know better.
>
> **[0:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=8)** One way developers often explain barriers to code is with the phrase technical debt.
>
> **[0:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=13)** This Stack Overflow article is a great read, suggesting we stop using that phrase.
>
> **[0:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=19)** Referring to brittle or hard-to-change code as technical debt might not be an accurate, but it's also not helpful.
>
> **[0:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=26)** After spending time refactoring and fixing, you will have passed the current problem only to uncover the next hurdle.
>
> **[0:33](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=33)** If you're getting pushback from leadership on TDD and refactoring, stop talking about those things in developer language and start talking about them in business language.
>
> **[0:41](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=41)** And start tracking them.
>
> **[0:44](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=44)** In my course on advanced PHP debugging, I suggest a few ways to capture that data.
>
> **[0:49](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=49)** You and your team can keep track of regressions after releases.
>
> **[0:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=52)** See if adding tests and incremental refactoring influences the trend.
>
> **[0:57](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=57)** One metric that is used in DevOps is deploy frequency.
>
> **[1:01](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=61)** This is one blog article in the topic, but there are tons out there.
>
> **[1:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=65)** Teams that release multiple times per day have seven times lower regressions.
>
> **[1:12](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=72)** And when regressions occur, they are corrected 2,600 times faster than teams that release weekly.
>
> **[1:21](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=81)** To get to that point, a culture of incremental changes, testing, and constant refactoring is necessary, and metrics like that make a compelling argument to leadership at all levels to change the approach.
>
> **[1:34](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=94)** This video is a bit less technical, but I would encourage you to own refactoring as a part of how you build software.
>
> **[1:41](https://www.linkedin.com/learning/refactoring-with-github-copilot/pay-down-technical-debt-24291835?u=76281980&t=101)** It's not an activity on its own that needs to be accounted for in sprint planning.

> [!info]- Semantic Content
>
> **Definitions:** is a  (3)
> **CLI Commands:** php (1), make (1)
> **Env Vars:** tdd (1), php (1)
> **Documentation:** stack overflow (1)

#### Keep devs happy
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=0)** What's your favorite project to work on?
>
> **[0:02](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=2)** I think most devs would prefer building something new versus maintaining existing code.
>
> **[0:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=7)** Imagine the worst codebase you've worked in.
>
> **[0:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=10)** No one set out for it to be that difficult.
>
> **[0:12](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=12)** It just grew that way, and no time was spent refactoring along the way.
>
> **[0:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=17)** This is the app directory from a Laravel project.
>
> **[0:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=19)** The purpose of this project was to be a dashboard for sales information from multiple e-commerce sites.
>
> **[0:25](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=25)** This is code I wrote several years ago for a client; the site is no longer online.
>
> **[0:29](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=29)** E-commerce sites in this network would write to the API, and this controller was responsible for ingesting the data and storing it.
>
> **[0:38](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=38)** But the problematic part was in need to calculate averages on sales for different ranges of time.
>
> **[0:47](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=47)** This CLI command was responsible for that.
>
> **[0:50](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=50)** It's a cool to do, output might be nice.
>
> **[0:53](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=53)** The generate_averages method is really interesting to me in hindsight.
>
> **[0:57](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=57)** Specifically, line 44, iterating through each of the ranges to run some raw database queries.
>
> **[1:02](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=62)** This is very brittle.
>
> **[1:04](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=64)** I didn't include the test directory for this project because it was empty.
>
> **[1:09](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=69)** Now, the last thing I want to look at is the sales average model.
>
> **[1:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=73)** First, line 30 and 31, range and ranges.
>
> **[1:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=79)** It's not immediately clear how they're used, but it gets more confusing.
>
> **[1:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=83)** On line 67, there's a static method that seems to return an integer of seconds for each range, and this is used in the CLI that I showed earlier.
>
> **[1:35](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=95)** This is tight coupling, confusing logic, and really a pretty good example of spaghetti code.
>
> **[1:42](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=102)** Based on the things I've covered in this course, my first move would be to get some test coverage around that static method in the model.
>
> **[1:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=108)** I don't know where it should live, but it's definitely not where it is now.
>
> **[1:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=112)** And I do that by asking Copilot for help.
>
> **[1:54](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=114)** Remember, one of the things we want to do is create seams in the code.
>
> **[1:58](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=118)** To me, that indicates the logic around ranges.
>
> **[2:01](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=121)** Needs to be a service of its own.
>
> **[2:04](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=124)** Back in the command, the reason this ran as a CLI command to generate the values is that it took several minutes for the CLI command to complete.
>
> **[2:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=133)** Laravel has native logic to handle some of this through task runners.
>
> **[2:17](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=137)** That would be a good way to improve speed while also breaking complex functions into smaller pieces.
>
> **[2:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=143)** In real-world examples, the path forward can be a lot less obvious.
>
> **[2:27](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=147)** Don't let that dissuade you from making the codebase better.
>
> **[2:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/keep-devs-happy-24290990?u=76281980&t=150)** You only need to find one small improvement to start moving forward.

> [!info]- Semantic Content
>
> **Env Vars:** cli (4), api (1)
> **Code Keywords:** static (2), let (1)
> **CLI Commands:** find (1)
> **Code Identifiers:** generate_averages (1)
> **Analogies:** imagine (1)

#### Lower TCO on the project
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=0)** Let me know if this sounds familiar to you.
>
> **[0:03](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=3)** You have a local instance of a project.
>
> **[0:05](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=5)** There is one command or database query that's slow on your local, so you trim down the data you're working with so you can validate your work more quickly.
>
> **[0:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=13)** But stop for a moment, if it's slow on your local, how does it work on production?
>
> **[0:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=18)** Use-case-specific servers are much more powerful than your laptop, but it's still clear there's a problem.
>
> **[0:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=24)** The first thing I want to call out is that servers cost money, and reducing CPU time lowers server utilization.
>
> **[0:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=30)** In the video about refactoring performance, I showed this example.
>
> **[0:33](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=33)** One of the things I suggested was asking Copilot how to refactor for performance.
>
> **[0:38](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=38)** If you have a slow script, command, or task, I'd start there, asking how to make it faster.
>
> **[0:44](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=44)** Reducing CPU time and server time is something tangible to show management at a refactoring.
>
> **[0:49](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=49)** Less tangible is dev time.
>
> **[0:52](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=52)** Here is a function to sort users by purchases.
>
> **[0:55](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=55)** I guess an immediate refactor would be to call them customers, but I digress.
>
> **[1:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=60)** This creates a temporary array.
>
> **[1:02](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=62)** Then it uses a bubble sort which is fast in smaller datasets.
>
> **[1:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=67)** From that point, it creates a new array based on the sort order.
>
> **[1:10](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=70)** It returns the sorted users.
>
> **[1:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=73)** It's decently commented, but it's a lot of code.
>
> **[1:16](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=76)** Now check out this implementation.
>
> **[1:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=78)** This uses the core PHP function you sort.
>
> **[1:22](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=82)** This implements quick sort.
>
> **[1:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=84)** It might be a bit less performant than bubble sort for smaller data sets, but which one do you want the new dev on your team digging through for a bug fix?
>
> **[1:32](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=92)** Which is likelier to have a bug.
>
> **[1:35](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=95)** When weighing the total cost of ownership to justify refactoring, dev time needs to be the first consideration.
>
> **[1:41](https://www.linkedin.com/learning/refactoring-with-github-copilot/lower-tco-on-the-project-24295483?u=76281980&t=101)** A potential tiny increase in CPU time here, will prevent hours of debugging in the future.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1), implements (1)
> **Env Vars:** cpu (3), php (1)
> **CLI Commands:** make (1), php (1)
> **Definitions:** is a  (1)

#### The impact of ai on refactoring
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=0)** Not only can AI speed up refactoring, AI can help uncover refactoring ideas you have not noticed.
>
> **[0:07](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=7)** Always start by asking, how can I refactor this?
>
> **[0:12](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=12)** You don't have to agree with or implement any of the responses, but it will influence your thinking.
>
> **[0:19](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=19)** I'd also ask, how can I improve code readability?
>
> **[0:28](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=28)** This is a great trick for code you've just written.
>
> **[0:31](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=31)** You've refactored before your first pull request.
>
> **[0:35](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=35)** Not surprisingly, it suggests adding comments, consistent formatting using constants separating concerns.
>
> **[0:41](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=41)** Another thing you can ask, am I mixing abstraction layers?
>
> **[0:48](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=48)** There will be an inherent bias Copilot will look for in the context, something that justifies a positive response here.
>
> **[0:57](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=57)** Regardless, it may give you something to think about.
>
> **[1:01](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=61)** Unsurprising, in here, we have this process order which calls apply shipping, calculate total price, validate order.
>
> **[1:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=68)** Process order does seem one abstraction level above the functions that it's calling.
>
> **[1:13](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=73)** Another one I like to ask is, is this code DRY?
>
> **[1:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=78)** I might also ask things like is this code secure when it deals with transactions of any sort?
>
> **[1:23](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=83)** Another thing I like to do is ask for a code review.
>
> **[1:26](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=86)** Of course, it will only review the open file and not everything in your PR.
>
> **[1:30](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=90)** At the time of writing, there's a waitlist for Copilot to review entire PRs on GitHub.
>
> **[1:35](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=95)** It'll be interesting to see how that impacts my PRs and my reviews.
>
> **[1:39](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=99)** Finally, the big warning and reminder, you and you alone are responsible for your code.
>
> **[1:45](https://www.linkedin.com/learning/refactoring-with-github-copilot/the-impact-of-ai-on-refactoring-24290989?u=76281980&t=105)** As a professional in this industry, it's important to remember that AI is a tool, but your name is on the commits in the repo.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (1)
> **Env Vars:** dry (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Warnings:** warning (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/refactoring-with-github-copilot/next-steps-24290988?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/refactoring-with-github-copilot/next-steps-24290988?u=76281980&t=0)** You did it! Way to go.
>
> **[0:02](https://www.linkedin.com/learning/refactoring-with-github-copilot/next-steps-24290988?u=76281980&t=2)** If you haven't already, install Copilot in your IDE and start refactoring with the help of AI.
>
> **[0:08](https://www.linkedin.com/learning/refactoring-with-github-copilot/next-steps-24290988?u=76281980&t=8)** Better yet, ask Copilot what it thinks you should refactor then write some code.
>
> **[0:12](https://www.linkedin.com/learning/refactoring-with-github-copilot/next-steps-24290988?u=76281980&t=12)** If PHP is your language of choice, check out my course, Writing and Refactoring Testable PHP.
>
> **[0:18](https://www.linkedin.com/learning/refactoring-with-github-copilot/next-steps-24290988?u=76281980&t=18)** And if you like this course, have a look at my course on AI-Aided Test-Driven Development.
>
> **[0:24](https://www.linkedin.com/learning/refactoring-with-github-copilot/next-steps-24290988?u=76281980&t=24)** Follow me on LinkedIn and let me know what cool stuff you are building.

> [!info]- Semantic Content
>
> **Env Vars:** php (2), ide (1)
> **CLI Commands:** php (2)
> **Code Keywords:** let (1)
> **Prerequisites:** install (1)


## Path Context

### In [[Transform Your Programming with AI Coding Tools]]
← [[Using AI in the Design to Full-Stack Development Life Cycle]] | **3 of 7** | [[ChatGPT and SQL]] →

### In [[Career Essentials in GitHub Copilot Professional Certificate]]
← [[Supercharge the Development Process with GitHub Extensions for Copilot Chat]] | **3 of 4** | [[Responsible GitHub Copilot- Creating Reliable Code Ethically]] →

### In [[Master GitHub Copilot]]
← [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] | **7 of 8** | [[Software Testing Assistance with GitHub Copilot AI]] →

## Part of

- [[Career Essentials in GitHub Copilot Professional Certificate]]

## Appears In

- [[Transform Your Programming with AI Coding Tools]]
- [[Career Essentials in GitHub Copilot Professional Certificate]]
- [[Master GitHub Copilot]]

## Related Courses

_Courses sharing skills:_

- [[GitHub Copilot for System-Level Development]] — Artificial Intelligence (AI), GitHub Copilot, Code Refactoring
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), GitHub Copilot
- [[Practical GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[AI Pair Programming with GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
