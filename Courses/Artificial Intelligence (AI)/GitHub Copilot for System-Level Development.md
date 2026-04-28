---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: github-copilot-for-system-level-development
url: "https://www.linkedin.com/learning/github-copilot-for-system-level-development"
duration_minutes: 67
duration: 1h 7m
level: Advanced
updated: 11/25/2025
learners: 3298
skills:
  - Configuration Management
  - Artificial Intelligence (AI)
  - GitHub Copilot
  - Infrastructure as code (IaC)
  - Code Refactoring
exercise_files: true
github: "https://github.com/paiml/ghcp-for-systems-level-development"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQEiOE4zLSamSA/learning-public-crop_675_1200/B4EZq3xl0EHgAg-/0/1764019822781?e=2147483647&amp;v=beta&amp;t=q7q7NxNA-jEl2tx_EWMP0t-pMCrhKuEYepSex2HPb4k"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development]]'
prev_courses:
  - '[[Advanced Prompting With Github Copilot]]'
next_courses:
  - '[[Responsible AI Development with GitHub Copilot]]'
path_nav: '[{"path":"GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development","position":2,"total":4,"prev":"Advanced Prompting With Github Copilot","next":"Responsible AI Development with GitHub Copilot"}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - skill/configuration-management
  - skill/artificial-intelligence-ai
  - skill/github-copilot
  - skill/infrastructure-as-code-iac
  - skill/code-refactoring
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/GitHub%20Copilot%20for%20System-Level%20Development.md)

![GitHub Copilot for System-Level Development](https://media.licdn.com/dms/image/v2/D4E0DAQEiOE4zLSamSA/learning-public-crop_675_1200/B4EZq3xl0EHgAg-/0/1764019822781?e=2147483647&amp;v=beta&amp;t=q7q7NxNA-jEl2tx_EWMP0t-pMCrhKuEYepSex2HPb4k)

# GitHub Copilot for System-Level Development

> Dive into the nuances of advanced system-level development with GitHub Copilot. This course outlines advanced prompting techniques; offers challenges that give you hands-on experience in areas like AI-assisted test-driven development (TDD); and shares strategies for debugging and working efficiently with large codebases. Discover the importance of automation as a foundational skill for developers 

> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development) | 1h 7m | Advanced | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (1 videos)
- **2. Module 1: AI-Augmented Test-Driven Development (TDD)** (6 videos)
- **3. Module 2: Large-Scale Refactoring** (6 videos)
- **4. Module 3: Infrastructure as Code (IaC) with Copilot** (4 videos)

### 1. Introduction

#### Course introduction
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-introducton?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-introducton?u=76281980&t=0)** - Welcome to this course in GitHub Copilot Advanced System Level Development.
>
> **[0:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-introducton?u=76281980&t=6)** We're going to cover a few different things from advanced prompting to certain techniques that you can apply to test-driven development.
>
> **[0:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-introducton?u=76281980&t=14)** Then we will go into, well, debugging and doing more advanced techniques while you are developing.
>
> **[0:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-introducton?u=76281980&t=22)** Like say for example, you're working with large codebases, and by the end of it, we will do a little bit of automation.
>
> **[0:31](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-introducton?u=76281980&t=31)** It's something that I tell my students all the time, automation is the foundation on becoming a better developer.
>
> **[0:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-introducton?u=76281980&t=37)** And we're going to leverage GitHub Copilot to help us get there in a faster way and in a more robust way.
>
> **[0:44](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-introducton?u=76281980&t=44)** And we'll learn some of the techniques, patterns, and workflows that you can apply to your own codebases when you're done with this course.

> [!info]- Semantic Content
>
> **Tools:** github (2)
> **Analogies:** for example (1)
> **Speakers:** - welcome (1)


### 2. Module 1: AI-Augmented Test-Driven Development (TDD)

#### Introduction to AI-assisted TDD
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=0)** - [Instructor] Test-driven development, also known as TDD or referred to as TDD, is the way we can run some test, write tests before a specific feature is available.
>
> **[0:15](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=15)** In this case, we have here some existing tests.
>
> **[0:20](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=20)** If I run the tests, you will see that they're all passing.
>
> **[0:24](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=24)** I'm going to collapse here the chat window, and you can see everything is passing, everything's good, everything's tested, so that is actually something good.
>
> **[0:35](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=35)** So say, for example, this is testing something, function called str_to_bool, meaning string to bool, and the thing here is that it is testing the ability of passing a string and getting either a true or a false.
>
> **[0:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=52)** But pretty simple, if actually I go in and show you main.py, I'm going to close this pane for a second.
>
> **[1:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=60)** If I show you these, the function is pretty specific.
>
> **[1:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=63)** It accepts true values.
>
> **[1:04](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=64)** But let's say, for example, I wanted to implement something like a 1 for a true value.
>
> **[1:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=70)** Like I wanted to make sure that if a 1 is passing in as a string, then that would work.
>
> **[1:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=77)** So the way you would do that with TDD is write a test that says, well, I'm going to say def test_one_is_true(): Now as soon as I do that, you can see that I'm getting suggestions from Copilot.
>
> **[1:33](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=93)** That is fine. I'm going to accept this.
>
> **[1:35](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=95)** And although this is not exactly what I want, I'm going to accept it, and then I'm going to say, I'm going to change that yes for a 1.
>
> **[1:44](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=104)** So I'm going to save now this file, I'm going to save this file, and then now I'm going to run the test.
>
> **[1:50](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=110)** So I can click to run the test, and then you can see now it's red.
>
> **[1:54](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=114)** It's a failure.
>
> **[1:55](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=115)** The way to make this work, of course, I will have to go here and perhaps add a 1, which Copilot basically picks up right away.
>
> **[2:04](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=124)** I can accept that and save.
>
> **[2:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=126)** And now if I go back to the test and I try to run it again, now it's passing.
>
> **[2:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=131)** Now everything is good.
>
> **[2:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=133)** That is the essence of test-driven development, and that is kind of like the workflow that I'm going to demonstrate by going back and forth between writing a test first that, well, doesn't work, that fails to show exactly that things are not quite correct, and then I am going to head over to implement that thing that is not there, that is quite missing, and we want to, well, make it slightly better.
>
> **[2:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=163)** So that is the strategy that we want to use.
>
> **[2:47](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=167)** That is what we're going to be applying.
>
> **[2:49](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=169)** And as you can see here, we were able to get some suggestions from Copilot already to implement the thing that was missing.
>
> **[2:57](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=177)** So there was already kind of like a little bit of context that is happening behind the scenes while I'm in the editor, while I'm jumping back and forth between these files to implement the feature that is actually failing.
>
> **[3:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=189)** So we'll see, based on this TDD, on this test-driven development technique, how we can leverage AI to help us out when we're trying to develop new features.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), case, (1), let (1), this. (1)
> **Env Vars:** tdd (4)
> **Analogies:** for example (2), kind of like (2)
> **CLI Commands:** make (3)
> **Code Identifiers:** str_to_bool (1), test_one_is_true (1)
> **File Paths:** main.py (1)
> **Cross-References:** go back to (1)
> **Definitions:** known as (1)

#### Generating complex test suites
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=0)** - [Presenter] Test suites can get very complex.
>
> **[0:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=3)** And one of the things that I want to show you is how to accomplish these with assistive AI tooling like GitHub Copilot.
>
> **[0:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=11)** In this case, this tool called the jformat is a tool that basically takes an input, which is usually a file.
>
> **[0:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=21)** You can see here some of the options.
>
> **[0:24](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=24)** It will take a file, and it will reformat JSON input to try to get you nice readable JSON.
>
> **[0:33](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=33)** Sometimes JSON is not very readable, and it does this using a formatter.
>
> **[0:39](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=39)** So, you know, pretty straightforward.
>
> **[0:41](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=41)** And, but however, the tests are only focusing on one thing, which is just the ability to convert the string to a boolean.
>
> **[0:53](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=53)** So, some of these things need to be better.
>
> **[0:57](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=57)** And, you know, this can get very complicated.
>
> **[1:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=60)** So, what we're going to do, is I'm going to collapse the explorer here.
>
> **[1:04](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=64)** What I'm going to do is to actually leverage Copilot, so that it can help me out try to, well, produce a very, a more robust way, in a complex test suite, that will help me test the command line interaction, which is really not tested at all.
>
> **[1:23](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=83)** So, what I'm going to do is I'm going to toggle these and notice, I'm going to just use the default model.
>
> **[1:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=92)** My recommendation is to just use whatever is more comfortable with you and try them out.
>
> **[1:36](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=96)** Try them all out and see what works best.
>
> **[1:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=98)** So, in here, I'm going to say I need to create more tests to verify the interaction in the command line.
>
> **[1:44](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=104)** This has to show that the different options, like --file and --inline will work.
>
> **[1:51](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=111)** So, I'm in agent mode.
>
> **[1:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=112)** That means that multiple different files and multiple different things will be able to work with GitHub Copilot.
>
> **[2:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=121)** And you can see there's a plan right now.
>
> **[2:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=123)** It's actually building a to-do review existing CLI tests, a test for file, inline, combined options, and run all the tests to validate the changes.
>
> **[2:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=131)** So, this is already somewhat complex, and it would take someone like me, like someone that build this project.
>
> **[2:20](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=140)** Well, it would take me a little bit of time if I had to do this manually.
>
> **[2:23](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=143)** So, I'm going to rely on GitHub Copilot to get that going.
>
> **[2:27](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=147)** So, you can see that it's building the things that he's trying to do.
>
> **[2:33](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=153)** And he has already made some changes in not only in the test CLI, but also in the reformat.py, which it was already a test that existed.
>
> **[2:45](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=165)** All right, the model wants to run test in test CLI.
>
> **[2:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=168)** That's fine.
>
> **[2:49](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=169)** I'm providing permission, so that the tool can actually run and do these things as it tries to make progress.
>
> **[2:58](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=178)** All right, so, additional tests for the command-line interface have been created.
>
> **[3:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=181)** Let's take a look. I'm going to keep all of the changes.
>
> **[3:04](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=184)** You have the ability to keep or undo certain changes.
>
> **[3:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=186)** These looks okay to me.
>
> **[3:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=189)** So, I'm going to do keep, this is the new test_cli file.
>
> **[3:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=194)** You can see certain things are being passed in.
>
> **[3:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=197)** EXAMPLE JSON run the CLI.
>
> **[3:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=201)** It's up to you on how to accept or reformat some of these suggestions as you start making progress, but you can see some of these tests.
>
> **[3:33](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=213)** Well, they're kind of okay, but we'll take a look at what's going on in a second.
>
> **[3:39](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=219)** All right, so, this is okay. I'm going to make sure it's saved.
>
> **[3:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=223)** And now, I'm going to verify that these things are working.
>
> **[3:47](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=227)** So, one of the things that I highly recommend is I'm going to collapse here or toggle the chat pane off.
>
> **[3:53](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=233)** And I'm going to say toggle the terminal.
>
> **[3:54](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=234)** So, now, I'm going to run pytest and see if tests are working.
>
> **[3:58](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=238)** Pytest is a way to, the test framework, and the test CLI for Python that I prefer.
>
> **[4:04](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=244)** And it is how I run the test.
>
> **[4:05](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=245)** And if I run it, you can see tests are passing, so this is good.
>
> **[4:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=250)** The test CLI has three tests passing, and that, well, makes me feel very good.
>
> **[4:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=257)** Things are good and things are working according to what was suggested.
>
> **[4:23](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=263)** Now, I don't necessarily trust blindly the output that I got from Copilot.
>
> **[4:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=270)** And let's take a quick look at what's being actually passed in.
>
> **[4:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=274)** So we have some EXAMPLE JSON, and that is coming from this file.
>
> **[4:39](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=279)** So, I'm going to make some changes here.
>
> **[4:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=282)** First, there is actually no need to do something like this.
>
> **[4:49](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=289)** I mean, I'm going to allow it for now.
>
> **[4:51](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=291)** It is trying to figure out what the path is, and it's including the example.json, let's just, let it pass for now.
>
> **[4:59](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=299)** Now, when when you have things that require certain files to be present and then files to be removed, then it is better to make some changes to try to make the tests slightly better, right?
>
> **[5:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=318)** So, instead of having these try and finally and remove the path, do you see that pattern being repeated and things are being added and then removed?
>
> **[5:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=329)** Well, we can actually improve these by using internal features of pytest.
>
> **[5:35](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=335)** So, I can say, I believe that pytest has some features that can help in creating the temporary files as well as taking care of removing them.
>
> **[5:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=342)** Help me address these in these CLI tests.
>
> **[5:45](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=345)** So, I'm not exactly saying what are the things that I need to do, but I'm just letting the AI agent do them.
>
> **[5:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=352)** So, I'm going to run these, I'm going to execute these, and I am going to wait for the refactoring of these tests to make them look slightly better.
>
> **[6:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=361)** So, in this case, it's adding 17 lines, removing 21.
>
> **[6:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=366)** It seems to me that this might be a little bit better.
>
> **[6:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=369)** Let's take a look. It's using fixtures. It looks okay.
>
> **[6:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=374)** I'm going to say keep, and I'm going to allow running the test.
>
> **[6:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=379)** It says that it's running now and things look correct.
>
> **[6:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=382)** This is still not quite good.
>
> **[6:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=385)** You can see here that it's importing pytest.
>
> **[6:27](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=387)** That's not necessary. It's already imported up here.
>
> **[6:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=390)** So, again, one of the things to make sure, to understand is that you are in control.
>
> **[6:35](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=395)** You are in the driver's seat, and it's important to verify the things that you're getting.
>
> **[6:41](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=401)** But this is already quite complex.
>
> **[6:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=403)** I think we made them slightly better.
>
> **[6:45](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=405)** And this will allow you to keep improving on the test that you're receiving.

> [!info]- Semantic Content
>
> **Env Vars:** cli (7), json (5), example (2)
> **Code Keywords:** let (5), case, (2), interface (1), this. (1), pass (1)
> **CLI Commands:** make (7), python (1)
> **Tools:** github (3), command line (2), terminal (1)
> **UI Navigation:** toggle (3)
> **Definitions:** is a  (2), means that (1)
> **File Paths:** reformat.py (1), example.json (1)
> **Code Identifiers:** test_cli (1)

#### Mocking dependencies with Copilot
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=0)** - [Instructor] Marking dependencies is a crucial way of dealing with tests, specifically, when certain things can get out of control.
>
> **[0:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=9)** In this case, for example, the run_cli is calling on Python 3.
>
> **[0:15](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=15)** This is doing a system call.
>
> **[0:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=17)** We can do a little bit better.
>
> **[0:20](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=20)** There's a problem here where if for whatever reason, Python 3 does not exist in the system where this test is being run, we're going to get into trouble here.
>
> **[0:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=29)** Now, these are particulars of Python. It requires a runtime.
>
> **[0:33](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=33)** There's several different things that would need to come to be true in a system in order for this to run correctly.
>
> **[0:40](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=40)** I want to avoid that.
>
> **[0:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=42)** And so, I've written this prompt, which is this test cli.py file is calling Python 3 directly.
>
> **[0:49](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=49)** I want to avoid relying on Python 3 executable being available in the system.
>
> **[0:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=52)** So, I want to create a mock that can act on behalf of the CLI being called directly.
>
> **[0:57](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=57)** So, I want to fake that in order to avoid calling the system.
>
> **[1:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=61)** So, I'm going to run this.
>
> **[1:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=61)** I'm going to see that there's a little bit of output, and I'm going to try to see what we can do here.
>
> **[1:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=69)** All right, so there's a suggestion here.
>
> **[1:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=71)** It didn't add that to the file.
>
> **[1:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=73)** So, there's an example of how to mock subprocess run for your CLI tests.
>
> **[1:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=78)** This looks, you know, slightly better.
>
> **[1:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=82)** So, let's just try to add that.
>
> **[1:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=85)** So, I'm going to ask, okay, this looks reasonable.
>
> **[1:28](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=88)** Please add it to the file.
>
> **[1:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=90)** So, we're going to make the agent.
>
> **[1:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=92)** Sometimes the agent needs a little bit of a push in order to get the changes exactly where you want them.
>
> **[1:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=97)** And then we see that we have them here. I'm going to keep them.
>
> **[1:41](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=101)** This looks correct and now I need to run the test.
>
> **[1:44](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=104)** So in order to do that, well, we can actually go and see if we can run some of these tests.
>
> **[1:51](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=111)** We can try to run this one.
>
> **[1:53](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=113)** Again, we see some progress here.
>
> **[1:58](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=118)** And I think, this looks kind of okay, so what is this doing behind the scenes?
>
> **[2:04](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=124)** So let's just walk through some of the changes that we've received.
>
> **[2:07](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=127)** So it is simulating the output, and it's allowing me to pass context and pass options, and flags as if this was the system.
>
> **[2:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=138)** And with this, comes the ability of producing output.
>
> **[2:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=141)** So, in this case, you can see that it is actually patching subprocess, but we don't necessarily need to patch the process.
>
> **[2:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=150)** The process is the part of the Python library that will allow you to get you a system call to run.
>
> **[2:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=157)** But in this case, it's patching that, you know, there's all kinds of different things here.
>
> **[2:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=162)** This is one approach, and you might feel like you want to do something slightly different.
>
> **[2:47](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=167)** For example, having a helper function that does something similar.
>
> **[2:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=172)** In this case, it's using mock, which is a utility from the standard library.
>
> **[2:59](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=179)** It's coming from unittest.mock, and allows you to create something that, like an object that will behave in any way that you can.
>
> **[3:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=186)** And then you can make asserts based on the things that mock was doing.
>
> **[3:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=191)** It's also helpful for that.
>
> **[3:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=192)** So, this is kind of like how you would go around creating a mock a system library, or in this case, patch something that you want to behave a slightly different to avoid making a system call.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (5), let (2), pass (2), this. (1), this, (1)
> **CLI Commands:** python (6), make (2)
> **Versions:** python 3 (4)
> **Analogies:** for example (2), kind of like (1)
> **Env Vars:** cli (2)
> **Definitions:** is a  (2)
> **File Paths:** cli.py (1)
> **Code Identifiers:** run_cli (1)

#### Challenge: TDD for a new feature
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=0)** - [Instructor] There are a couple of things I want to implement for this function, the string to Boolean function that is taking a string and providing us either a true or a false.
>
> **[0:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=11)** And in the worst case scenario, if it's absolutely miserable with what's coming in, it will return or raise, rather, a value error.
>
> **[0:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=21)** Okay, so in this case, there's a couple things I want to do.
>
> **[0:26](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=26)** First is that I want to allow not only a one, but I also want to allow a zero.
>
> **[0:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=34)** And then the other aspect of this is that I want to allow for spaces, like say for example, if yes is sent like this, well, I want to support that and make sure that that works, as well.
>
> **[0:50](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=50)** So what are we going to do?
>
> **[0:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=52)** Well, we're going to create a prompt and that prompt is going to help us out implement all of the failing test cases to implement that missing zero.
>
> **[1:05](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=65)** So in this case, we already have the one, so we would have to implement the zero.
>
> **[1:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=69)** So I'm going to write that prompt.
>
> **[1:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=70)** I want to use TDD to implement accepting zero as a false value.
>
> **[1:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=74)** Do not make the changes to str_to_bool yet.
>
> **[1:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=78)** Only implement the failing test.
>
> **[1:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=79)** So I'm going to run this and I'm going to hopefully see what we're going to be able to add that so that we can get a failing test.
>
> **[1:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=89)** So there, let's see, test_zero_is_false.
>
> **[1:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=90)** This looks actually correct and I think that this is going to fail, which is what we're looking for.
>
> **[1:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=97)** Remember, test-driven development is about making this fail.
>
> **[1:41](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=101)** So, perfect. It is failing.
>
> **[1:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=103)** It is what is expected and that will allow us to go back to the other function and try to make sure that, well, it is passing.
>
> **[1:54](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=114)** So I'm going to say I want to keep these and that is going to be sufficient for what we're trying to do.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), case, (2), raise (1), this, (1), let (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** str_to_bool (1), test_zero_is_false (1)
> **Env Vars:** tdd (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Solution: TDD for a new feature
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=0)** - [Narrator] Now that we have for a failing test, it is time to go and we'll make it pass.
>
> **[0:05](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=5)** In this case, we could, 100%, write a prompt and let GitHub Copilot, the AI tooling, help us out.
>
> **[0:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=13)** But this is pretty straightforward.
>
> **[0:15](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=15)** So let's just do this manually.
>
> **[0:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=17)** When we go here to the str_to_bool function, really the only thing we need to do is we'll add a zero, right?
>
> **[0:24](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=24)** So you can see here that even then, GitHub Copilot is helping us out.
>
> **[0:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=29)** And if you go back to test_main, and we want to run these tests again, well, it's going to pass.
>
> **[0:35](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=35)** Of course, it passes now because it allows that as well.
>
> **[0:39](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=39)** Now, there's one more thing that I want to do, and that is I want to use this parameterize function, this helper from pytest, this a framework thing.
>
> **[0:51](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=51)** You don't need to be an specialist in Python or pytest or what we're trying to do here, but I'm going to go briefly what is the actual thing that we're doing.
>
> **[1:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=60)** You can see here that the values are y, yes, and zero.
>
> **[1:04](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=64)** So what this is doing is passing multiple different values and do the same assertion, which is actually pretty useful instead of doing it this way where you're passing a one, passing a y.
>
> **[1:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=74)** So you can actually do them all at once.
>
> **[1:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=77)** So, what I'm going to do is I'm going to select these and I'm going to say, "I want to implement the same strategy with parameterize, but using trailing and leading whitespace."
>
> **[1:27](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=87)** Whitespace is not accounted for, I want to make sure I have coverage for that.
>
> **[1:31](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=91)** And I want to also use parameterize for all the false values.
>
> **[1:36](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=96)** So I'm going to run these, and I'm expecting to see some changes here.
>
> **[1:40](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=100)** Let's see if it is all to my liking.
>
> **[1:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=103)** All right, so, it went ahead and added not only the leading and trailing whitespace, it added tabs, which seems pretty awesome.
>
> **[1:55](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=115)** I didn't think of that, and that seems okay to me.
>
> **[2:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=120)** And it's actually deleting all the false ones and adding the false values.
>
> **[2:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=126)** So this is interesting.
>
> **[2:08](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=128)** I really like what it's done.
>
> **[2:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=130)** It's actually gone and added all of these things.
>
> **[2:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=133)** Now, it did remove the value error.
>
> **[2:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=138)** I want to keep that.
>
> **[2:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=139)** So, we'll, how about this?
>
> **[2:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=141)** We're going to accept them.
>
> **[2:24](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=144)** And then I am going to ask for the value error to be put back together.
>
> **[2:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=149)** So, these changes are still going, and it's asking me if I want to run.
>
> **[2:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=154)** And yes, I want to run this.
>
> **[2:36](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=156)** It is actually going to try to run the tests.
>
> **[2:39](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=159)** All right, so there's a mistake here.
>
> **[2:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=162)** "There are leftover, incomplete function definitions."
>
> **[2:45](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=165)** Yes, yes, there are.
>
> **[2:46](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=166)** You can see that there's one right here.
>
> **[2:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=168)** So we can actually, you know, not everything is 100% perfect.
>
> **[2:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=172)** We're going to toggle the terminal and see if we can actually run some tests.
>
> **[2:57](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=177)** And we can see now that we have lots and lots of failures.
>
> **[3:02](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=182)** And do you know why?
>
> **[3:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=183)** Well, because we've added all of these extra cases.
>
> **[3:08](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=188)** So, this is great. We have tons of different ones.
>
> **[3:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=192)** This is actually good. This is exactly what we wanted.
>
> **[3:16](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=196)** So now let's go ahead and make those fixes, right?
>
> **[3:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=201)** So let's make sure that this is cleaned out, right?
>
> **[3:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=205)** And there, save that.
>
> **[3:26](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=206)** And now we can say, "Add the handling for the tabs, new lines, and whitespace for the str_to_bool function so these tests pass. Run the tests to verify."
>
> **[3:35](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=215)** So I'm going to run this and I'm going to, well, effectively be implementing TDD.
>
> **[3:41](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=221)** Now, the thing with TDD is that perhaps you are going into smaller implementations having multiple different files and changes, but more of like more narrow focus.
>
> **[3:53](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=233)** But in this case, I think it's good to demonstrate.
>
> **[3:56](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=236)** Let's take a look. I mean, this looks correct.
>
> **[3:59](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=239)** And so now what we can do is, I mean, toggle the terminal again.
>
> **[4:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=243)** And we're going to toggle the terminal, run the tests, and we're going to see that now we have a lot of them are passing now.
>
> **[4:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=249)** So this is actually very, very good.
>
> **[4:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=252)** So there you go.
>
> **[4:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=253)** That is how you would solve this with TDD.
>
> **[4:16](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=256)** Add the tests, the failing test first.
>
> **[4:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=259)** And in this case, we added way more, and we added this, supporting this new feature, which is allowing for whitespace, leading whitespace, trailing whitespace, new lines, and tab characters.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (4), pass (3), case, (3), for, (1)
> **CLI Commands:** make (4), python (1)
> **Tools:** terminal (3), github (2)
> **Code Identifiers:** str_to_bool (2), test_main (1)
> **Env Vars:** tdd (3)
> **UI Navigation:** toggle (3)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### Evaluating test coverage
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=0)** - [Instructor] When you're working with tests and when you're making progress, implementing your features, adding your features, doing the refactoring, one of the important aspects is to understand coverage.
>
> **[0:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=11)** In this case, I'm going to use pytest, which is the Python test runner that I've chosen to use.
>
> **[0:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=17)** This is a test runner and a test library as well.
>
> **[0:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=19)** There are plugins, and in this case I'm going to use the cov plugin, which is the coverage plugin.
>
> **[0:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=25)** So what is going to happen behind the scenes is going to run all the tests and then analyze what statements are covered for my test and what statements are not covered.
>
> **[0:35](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=35)** So in here you can see a list of files with their statements which ones are missing and what is the coverage in the percentage in coverage.
>
> **[0:46](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=46)** And you can see here that main has only 49% coverage and reformat is 50, so what does these mean?
>
> **[0:56](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=56)** Well, it means that there is code in a reformat that, for example, that is not being used by tests.
>
> **[1:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=63)** So you can use this output in order to enhance.
>
> **[1:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=66)** Now this is a kind of thought sometimes when some of the reported output includes the tests themselves.
>
> **[1:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=74)** So this is not necessarily crucial or important for me.
>
> **[1:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=79)** I want to take a look at some of these things.
>
> **[1:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=81)** So let's get the 77% up and we're going to use a prompt to help us get there.
>
> **[1:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=90)** So the first thing I'm going to do is I'm going to copy this and put it as part of our prompt.
>
> **[1:36](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=96)** Alright, so my prompt says the test coverage is at 77%, which we know, and I want to increase this.
>
> **[1:41](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=101)** There is code that is not covered by tests in reformat.py as well as main.py.
>
> **[1:45](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=105)** Add some tests to increase the test coverage.
>
> **[1:47](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=107)** This is useful. I'm going to paste here the results.
>
> **[1:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=112)** I could do something fancy by including this into the prompt, but pasting is 100% fine.
>
> **[1:59](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=119)** Now, Copilot is going to go ahead and read all these files and try to produce something meaningful and useful, so let's wait until it completes.
>
> **[2:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=129)** All right, it completed it. It added these test_main_extra.
>
> **[2:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=132)** I don't think I would put more tests in there, up to me how I want to move tests around.
>
> **[2:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=139)** But let's not run these right here.
>
> **[2:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=142)** Let's actually run it here so that we can see the output and we can see now that we have some failures, right?
>
> **[2:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=149)** We have some failures here which is not okay, but look at that, we have 85% of the test coverage.
>
> **[2:40](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=160)** So we got a little bit of extra and let's just go ahead and allow the agent to run the coverage so that it understands because it will now read this output as part of what it ran.
>
> **[2:54](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=174)** So that is actually useful so let's allow it again.
>
> **[2:58](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=178)** We still have a little bit of extra, I mean, I don't think this is really necessary to keep these things to be so complex.
>
> **[3:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=186)** But look at this, we were able to get this bumped.
>
> **[3:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=190)** Specifically, reformat is now at 100% before it was at 50% if I remember correctly.
>
> **[3:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=197)** Now it didn't touch I think main.py, that's fine.
>
> **[3:20](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=200)** But that is kind of like the workflow that you should expect when you're working with coverage.
>
> **[3:26](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=206)** You're making some tests, adding some tests, and trying to look for files that don't have the coverage that you're looking for, in this case, like say for example, if you say 56% is unreasonable, let's add a couple more tests.
>
> **[3:40](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=220)** That is actually something that you can do.
>
> **[3:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=223)** When you have things that are uncovered in tests, that is very suspicious.
>
> **[3:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=228)** That means that there's things that are not, if I go here and I say keep, keep everything, in test_main_extra, there might be things that are not covered.
>
> **[4:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=243)** So in this case, if I had to say what might not be covered, this might look like it's not even used.
>
> **[4:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=251)** Do you see how it's not accessed?
>
> **[4:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=253)** Pylens is telling me there.
>
> **[4:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=254)** We could try to get it out, right?
>
> **[4:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=258)** Save it, and run the coverage again, toggle the terminal, run with coverage, and look at that.
>
> **[4:26](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=266)** So it was adding things that were not being used and now we got our coverage up.
>
> **[4:31](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=271)** So that's the workflow.
>
> **[4:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=272)** That is what you should expect when you're working with coverage and tests and inspect what things are being used and what things are not being used.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (3), this. (1), this, (1), for, (1)
> **Definitions:** is a  (2), means that (2)
> **File Paths:** main.py (2), reformat.py (1)
> **Analogies:** for example (2), kind of like (1)
> **Code Identifiers:** test_main_extra (2)
> **CLI Commands:** python (1)
> **Tools:** terminal (1)
> **UI Navigation:** toggle (1)


### 3. Module 2: Large-Scale Refactoring

#### Strategic use of workspace
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=0)** - [Instructor] Large code basis are a challenge and can be extremely challenging, not only for regular engineering, but well for machine learning models, AI models, natural language processing models that require to have an an input context in other words, to produce meaningful results.
>
> **[0:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=21)** Well, it's kind of tricky because models will have a limited amount of, limited amount of context that you can use.
>
> **[0:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=30)** And the problem with that is that, well, if you have a code base, like in this projects that has 10,000 files, well guess what?
>
> **[0:41](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=41)** Things are going to be complicated.
>
> **[0:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=42)** You cannot just go ahead and say, hey, you know, where's, you know, if I go ahead and say, "Where is logging enabled?"
>
> **[0:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=52)** It's a very generic way of asking for something you don't know anything, you're relying on, on Github copilot to try and figure that one out but it's 10,000 files.
>
> **[1:05](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=65)** I mean, how feasible it is that it's exactly, it's exactly what you need and exactly what the problem is.
>
> **[1:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=74)** And in this case, this code base is not only, it's not a single language.
>
> **[1:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=79)** It has Shell, it has Python, it has even JavaScript, TypeScript, but it's mostly C++.
>
> **[1:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=85)** So what are we looking for, right?
>
> **[1:27](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=87)** So you can see here.
>
> **[1:28](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=88)** Logging is enabled via Ceph config options.
>
> **[1:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=90)** For Python tools and modules, logging is enabled programmatically in their respective setup of functions.
>
> **[1:35](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=95)** For OpenStack related QA logging is enabled in the .conf files.
>
> **[1:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=98)** So there's a lot of different things.
>
> **[1:40](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=100)** So the challenge with this is, well, you have to narrow the focus.
>
> **[1:45](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=105)** Now you can do certain things, like say for example, use workspace.
>
> **[1:50](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=110)** And workspace allows you to encompass absolutely everything in as much context as it can.
>
> **[1:56](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=116)** And now most of the time by default, workspace will be included.
>
> **[2:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=121)** So you can ask about your workspace.
>
> **[2:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=123)** I mean I think, that's not entirely the whole thing.
>
> **[2:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=126)** It's basically means that you will try to do as best as possible to go into a lot of different files and try to figure it out.
>
> **[2:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=133)** So now if I say for example, "I want to know about logging levels and what are all the ones available?"
>
> **[2:24](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=144)** Then, and because it's using workspace, it will try to gather more information.
>
> **[2:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=149)** Now it's, you can see, now it's 52 references and you can see all of the different things.
>
> **[2:35](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=155)** So now it, you went on to look into some documentation files, which is also useful.
>
> **[2:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=162)** Now the best technique and the best recommendation that I have for you is that whenever you're dealing with a code base like this, try to narrow it down.
>
> **[2:49](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=169)** Like you have to have some sort of like a level of understanding of on how that works.
>
> **[2:55](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=175)** So one of the things is to include a path to a specific file.
>
> **[3:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=180)** So for example, if I say ceph volume, which I know is a Python project within the larger project of ceph, I can say ceph volume.
>
> **[3:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=190)** And when I say ceph volume, you can see, there we go.
>
> **[3:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=192)** So it starts popping, it's kind of like a fussy matching search that you can do within the code space, within the workspace rather.
>
> **[3:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=201)** And then I can say src ceph volume is exactly what I want and I can say "How is logging enabled here?"
>
> **[3:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=209)** And then I can narrow the focus, right?
>
> **[3:31](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=211)** Because ceph volume will be much smaller in this case.
>
> **[3:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=214)** I know it's much smaller and you can see the responses, well almost immediate.
>
> **[3:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=218)** So those are a couple of things that you can do and tools that you can use and strategies that you can apply when you're dealing with a very large code base.
>
> **[3:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=228)** Use work at workspace whenever you can, especially if you want to include more context and you're not entirely sure, but if you have some sort of idea, well try to reduce that scope well try to reduce that scope and make it, make it so that you can actually get to smaller amount of files.
>
> **[4:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=249)** And in this case we can say, you know, 500 files in this subdirectory.
>
> **[4:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=254)** Not at, I mean still quite a lot, but not 10,000, right?
>
> **[4:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=258)** So models will be able to work better, faster and give you more accurate answers.

> [!info]- Semantic Content
>
> **Code Keywords:** require (1), case, (1), for, (1), default, (1), this, (1)
> **CLI Commands:** python (3), make (2)
> **Analogies:** for example (3), kind of like (1)
> **Definitions:** in other words (1), basically means (1), is a  (1)
> **Tools:** github (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Analyzing cross-file dependencies
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=0)** - [Instructor] Sometimes we get into trouble with dependencies.
>
> **[0:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=3)** And one way that you can get into trouble is when you are dealing with a code base that, well, in this case it's a very old code base and it's using libraries that, well, they've changed names and they no longer exist.
>
> **[0:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=19)** How can I know for sure?
>
> **[0:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=21)** Well, if I run my tests, let's take a look at this.
>
> **[0:24](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=24)** Well, we have errors and there's... The error message is actually very useful.
>
> **[0:31](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=31)** It's telling.
>
> **[0:33](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=33)** Module ConfigParser has no attribute SafeConfigParser.
>
> **[0:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=37)** Did you mean RawConfigParser?
>
> **[0:40](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=40)** And so it's hinting as that, "Eh, this is probably, you know, something that I need to update."
>
> **[0:46](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=46)** So that is fine.
>
> **[0:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=48)** In this case, we're looking at Python 3.12.
>
> **[0:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=52)** This is not important what Python version is.
>
> **[0:55](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=55)** It doesn't even matter if you are a proficient in Python or you're using a different type of language.
>
> **[1:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=61)** In this case, the language is not relevant because what we're trying to do here is to try to analyze cross file dependencies.
>
> **[1:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=70)** So let's use the power of Copilot, and I'm going to be using agent mode, but I'm going to be also using @workspace to go really deep into the context of this project called ceph-volume.
>
> **[1:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=85)** I'm using @workspace.
>
> **[1:26](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=86)** And I say I need to understand the dependency of SafeConfigParser and how it is used because it is causing test failures.
>
> **[1:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=92)** And this is going to allow me to go into... Gaining an understanding.
>
> **[1:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=98)** And you can see it's collecting the workspace information and collecting that information will provide a, hopefully, what it is a thorough analysis on the usage of this config parser thing.
>
> **[1:53](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=113)** So let's take a look.
>
> **[1:54](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=114)** I'm going to, well, it's producing a lot of output.
>
> **[1:56](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=116)** It's very verbose and it's a legacy class from Python 2's config parser model.
>
> **[2:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=123)** Okay, so I suspected as much, it's in Python 3 was renamed to SafeConfigParser is deprecated.
>
> **[2:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=133)** It just ConfigParser is fine.
>
> **[2:15](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=135)** And it tries to do that.
>
> **[2:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=137)** Now I can actually say... And it gives you, it gives you a lot of... This is this pattern of try accept, this is very common to try to deal with this.
>
> **[2:27](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=147)** Why would the attribute error mentioned that I perhaps need RawConfigParser.
>
> **[2:31](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=151)** So now I'm kind of like analyzing, investigating, doing a little bit of spelunking.
>
> **[2:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=157)** Investigation, going deep into why some of these recent, so SafeConfigParser is just an alias for Config Parser.
>
> **[2:44](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=164)** Okay?
>
> **[2:45](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=165)** And both are deprecating in favor of ConfigParser and RawConfigParcer.
>
> **[2:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=168)** So, okay, that's pretty clear.
>
> **[2:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=172)** But you know, it seems that this might be, if I don't want interpolation, I could use RawConfigParser.
>
> **[3:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=180)** That type of analysis, that type of inspection and understanding the cross file dependencies is crucial so that you can make informed decisions.
>
> **[3:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=190)** Now using AI tooling, like AI Copilot will help you out trying to get out of situations like this where things are similarly complex and they span multiple different files.
>
> **[3:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=205)** So now we have a good understanding and that is the first step in order to fix this problematic code base.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this. (2), case, (2), module (1)
> **CLI Commands:** python (5), make (1)
> **Versions:** python 3 (2), python 2 (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### Challenge: System-wide code cleanup
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of what's going on, let's actually dig deeper and get a good understanding.
>
> **[0:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=6)** So the recommendation was, well, depending if you need interpolation, which is a feature of this library or this module, then depending on that, maybe you need it, maybe you don't.
>
> **[0:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=19)** Some like, "Eh, analyze the code and tell me if I really need interpolation or not."
>
> **[0:23](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=23)** So like, I have a better informed decision.
>
> **[0:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=25)** So it says, well, you know, you're parsing as playing strings and code explicitly strips common and splits balance, but does not use or expect interpolation.
>
> **[0:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=34)** So yeah, I do not need... And using raw config, I don't need interpolation.
>
> **[0:39](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=39)** So using raw config parser is appropriate for what I'm trying to do.
>
> **[0:44](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=44)** Okay, so go ahead and help me update the code to Python 3 standards and use raw config parser.
>
> **[0:50](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=50)** So there's a couple things here.
>
> **[0:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=52)** We are looking into things that have been that need to go to Python 3, but we might not know if this is going to be sufficient.
>
> **[1:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=63)** So test failures are due to the use of deprecated readfp.
>
> **[1:08](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=68)** So we're getting into other kinds of different issues.
>
> **[1:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=71)** And you can see here things are starting to get slightly more complex.
>
> **[1:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=74)** I'm going to clear these, I'm going to run the test so that you can see what is going on.
>
> **[1:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=78)** So there's a little bit of errors right now.
>
> **[1:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=82)** I'm going to clear this again because this happens when you're trying to run tests and things are not quite correct.
>
> **[1:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=90)** So there are, look at these package resources.
>
> **[1:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=94)** So there's things starting to collapse now because they're not quite correct.
>
> **[1:41](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=101)** So let's take a look.
>
> **[1:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=102)** We're trying to get... We're trying to get this thing to pass and let's run the test again and look at this, we have a set volume test main, interrupted, one error during collection.
>
> **[1:55](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=115)** So there are certain things that are not quite correct.
>
> **[1:58](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=118)** All tests now pass.
>
> **[1:59](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=119)** So there's a difference here into what is going on and to what is needed.
>
> **[2:05](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=125)** So let's once again run this and confirm that that's the case.
>
> **[2:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=131)** It seems that there are package resources requirement and causing issues here.
>
> **[2:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=134)** So let's try to go ahead and fix those and try to see if we are going to be able to get those resolved.
>
> **[2:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=142)** So being able to kind of like get into trouble, a little bit here, while we're trying to make this refactoring.
>
> **[2:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=150)** Well, it's essential to have tests to fall back.
>
> **[2:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=152)** It's not a simple matter of just making changes and applying them and say, "Well, hope for the best."
>
> **[2:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=158)** Essentially, we want to make sure that this is correctly done, and make sure that we're in good shape to try to solve this situation.
>
> **[2:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=168)** All right, so once again, let's see if we can get some things working.
>
> **[2:53](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=173)** And you can see here, well we have now tests that are running and we're having tests that are, well, getting into trouble here because they're taking a very long time.
>
> **[3:05](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=185)** So I think this gives me enough confidence to say that we've made some updates.
>
> **[3:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=190)** We made a little bit of a refactoring, and we have things that are quite working now.
>
> **[3:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=197)** Some of these things are errors, a lot of failures we still have, but nothing like what we had in the beginning.
>
> **[3:23](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=203)** We fixed this configuration module or library that we were using in the beginning, and I feel confident that we've moved past that and we have the test to validate that that is in fact something that is not working correctly.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), module (2), pass (2), this, (1), case. (1)
> **CLI Commands:** make (3), python (2)
> **Versions:** python 3 (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### Solution: System-wide code cleanup
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=0)** - [Narrator] Now let's make sure that the changes we've done are going to be good enough.
>
> **[0:05](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=5)** I think we still have lots of failures, and I want to leave these code base in pristine conditions.
>
> **[0:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=12)** So, what can we do?
>
> **[0:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=13)** Well, let's actually go ahead and run all the tests and tell the agent.
>
> **[0:20](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=20)** Now, the reason why I want to do this with the agent is that it will be able to see, like in this case, you can see running tests, 692 passed, or 692 tests passed out of 705 tests.
>
> **[0:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=37)** So there are some failures and some decorator tests exist, "Fail due to an expected exceptions or exit behavior."
>
> **[0:45](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=45)** So if I want to look at them visually, you'll see that's how it looks.
>
> **[0:51](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=51)** And we have this ceph_volume decorator, and it's raising a runtime error.
>
> **[0:55](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=55)** So sometimes, again, Copilot will need a little bit of a push.
>
> **[1:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=61)** "Go ahead and fix the test_decorators tests."
>
> **[1:07](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=67)** So, we're looking into like some side effects of kind of like the things that have happened before, and we need to make sure that this will actually work.
>
> **[1:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=82)** So, it's asking me about MCP server.
>
> **[1:26](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=86)** That sounds fine.
>
> **[1:27](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=87)** It looks like pylance to make sure that there's compliance with Python.
>
> **[1:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=92)** That's fine, it's not necessarily super interesting, but let's take a look.
>
> **[1:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=97)** "The model wants to run test in test_decorators."
>
> **[1:39](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=99)** Let's allow that while we wait and see what's going on.
>
> **[1:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=103)** So it seems that the assertions are including this line over here.
>
> **[1:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=108)** There's an arrow.
>
> **[1:50](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=110)** It looks, this is kind of suspicious.
>
> **[1:54](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=114)** I mean, I don't think that's exactly what I'm looking for.
>
> **[1:58](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=118)** And what I'm going to do here is I'm going to clear and run pytest again.
>
> **[2:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=123)** So there's still some failures. Five failed.
>
> **[2:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=126)** So we're still seeing some of those failures.
>
> **[2:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=129)** But let's take a look if ceph_volume will have a little bit of passing tests.
>
> **[2:15](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=135)** So you can see that there's some updates happening.
>
> **[2:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=139)** We can run those tests again and make sure that they're passing.
>
> **[2:23](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=143)** So now they're passing.
>
> **[2:24](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=144)** And the thing, the changes here are that, well, let's take a look here.
>
> **[2:31](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=151)** The root cause, "decorator only writes to standard error and calls sys.exit."
>
> **[2:35](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=155)** Well, that's very bad.
>
> **[2:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=158)** This is very bad for tests.
>
> **[2:40](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=160)** Now, when you're raising a system exit like this, if you're trying to run these process with another Python process, like in this case with tests, you'll get into trouble.
>
> **[2:51](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=171)** But what we're trying to do here is just go back and forth and try to get into a cleanup stage.
>
> **[2:57](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=177)** And you can see here that we're trying to, well, make that a little bit safer, right?
>
> **[3:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=183)** So now if we run pytest, we'll have less failures.
>
> **[3:08](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=188)** So I think we're getting to a point where things are slightly better.
>
> **[3:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=193)** I believe there is problems in the assertions for the help menu here.
>
> **[3:20](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=200)** So we can actually try and fix that as well.
>
> **[3:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=202)** "The help menu for some tests like test_main_shows_full_help is failing because the help output is slightly different."
>
> **[3:28](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=208)** Let's take a look and see how we can actually get rid of that and fix it and try to have a clean code base.
>
> **[3:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=217)** Like we've done a major refactoring, we've been cleaning up and bringing this code base up to the latest version of Python, which can be, well, very, very daunting.
>
> **[3:47](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=227)** So, it's going to make some changes.
>
> **[3:51](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=231)** it's going to actually make sure that those are passing now.
>
> **[3:58](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=238)** And let's take a look.
>
> **[4:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=240)** All right, so now, it passed.
>
> **[4:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=241)** So we can try and see if we can get some of these passing.
>
> **[4:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=246)** So we are down to only one failed.
>
> **[4:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=249)** And that one failed is, "No valid ceph configuration while file was loaded in a getattr right here."
>
> **[4:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=257)** And we have a configuration problem.
>
> **[4:20](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=260)** So, there is one last test to fix.
>
> **[4:26](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=266)** "Find it and fix it."
>
> **[4:28](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=268)** Now, we're relying, we're definitely relying a little bit, slightly blindly relying on the output.
>
> **[4:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=274)** I'll have to check this thoroughly.
>
> **[4:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=278)** But you can see this is more or less the process that you will be expecting.
>
> **[4:41](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=281)** You're going back and forth between the suggestions, applying the changes, taking a look at the changes as they're happening, and getting a good understanding of what is going on.
>
> **[4:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=292)** In this case, it's mocking the method to try to get rid of that problem.
>
> **[4:58](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=298)** That sounds correct to me.
>
> **[5:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=300)** And it seems that the tests are now passing.
>
> **[5:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=303)** So, if we go here, I don't want to run the test, I want to run the test manually and get to see.
>
> **[5:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=310)** Look at these, 697 test passing.
>
> **[5:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=313)** So I'm very happy with this.
>
> **[5:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=314)** I don't need to allow the test to run anymore because I can see that this is now actually working correctly and I like it.
>
> **[5:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=322)** So, I'm happy within a major refactoring.
>
> **[5:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=325)** It took quite the effort.
>
> **[5:27](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=327)** I'm happy that the tests are in line and correctly asserting that things are correct and not broken.
>
> **[5:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=334)** And I think this should be good now to perhaps submit a pull request and do a more in-depth review.
>
> **[5:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=343)** This time, no longer with AI, but having some engineers take a look at the changes and making sure that I didn't introduced anything weird or odd or unexpected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), case, (2), super (1), for. (1), this, (1)
> **CLI Commands:** make (7), python (3), find (1)
> **Code Identifiers:** ceph_volume (2), test_decorators (2), test_main_shows_full_help (1)
> **Env Vars:** mcp (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [narrator] (1)

#### Enforcing styles and constraints
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=0)** - [Presenter] This particular code base has lots of different things that are in place.
>
> **[0:08](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=8)** There's a specific structure, and there are a lot of conventions.
>
> **[0:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=14)** And for a new developer, this might be daunting.
>
> **[0:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=18)** You can see here, well, this is the lvm.py file, and it's very well-documented, and it's looking actually pretty, pretty good.
>
> **[0:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=29)** Now, one of the things is that, you know, for a new developer, this might be overwhelming and certain things might be, well, a little bit too much.
>
> **[0:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=38)** In this case, what we want to do here is we want to make sure that certain things are following a specific style, a specific constraint.
>
> **[0:51](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=51)** So, in this case, we have, you know, this is the System D directory.
>
> **[0:56](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=56)** And within the System D directory, there's a main one, there's a main.py, there's a systemctl, and all of these things are, well, in this case, it's running a process and doing certain actions.
>
> **[1:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=72)** This looks pretty good.
>
> **[1:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=73)** I think, when this was designed, for example, the exceptions right here, you could see they're very well-defined.
>
> **[1:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=81)** The errors are pretty clear and there are certain parameters that are happening.
>
> **[1:27](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=87)** So, in this case, we could actually enforce certain styles, but because I don't quite remember every single thing that might be good here, let's ask Copilot to help us out.
>
> **[1:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=102)** Help me out, in this case, by providing me an analysis on some of the stylistic things that are happening in this code base.
>
> **[1:53](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=113)** I'm going to use the workspace key, and I'm going to say, provide a short stylistic analysis on this code base and highlight the most common patterns you can identify.
>
> **[2:02](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=122)** So, I'm going to run these, and I'm going to let Copilot go and do some investigation on all of these files and start doing some analysis on all of these things that are happening.
>
> **[2:15](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=135)** And with these analysis, what I'm going to be able to do is I'm going to be able to create certain constraints.
>
> **[2:23](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=143)** So say, for example, decorator usage, catches, and needs root, are used for exception handling.
>
> **[2:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=149)** That looks pretty good.
>
> **[2:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=150)** Logging is handled by python's logging module.
>
> **[2:33](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=153)** That's also okay.
>
> **[2:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=157)** Most command modules, like main.Simple and inventory encapsulate logic clauses with a main method supporting CLI commands and argument parsing.
>
> **[2:47](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=167)** So, what do we do with this, right?
>
> **[2:51](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=171)** What do we do with this information?
>
> **[2:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=172)** Well, there is a way that we can enforce this style when we want to actually try to do something similar, extend this, or start augmenting this to follow the same pattern.
>
> **[3:07](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=187)** So say, for example, the object-oriented design and the argument parsing.
>
> **[3:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=192)** So, what we can do is we can actually go ahead, and I'm going to copy paste this.
>
> **[3:20](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=200)** I'm going to copy paste, copy in this case, and then I'm going to toggle this to give us a little bit more room.
>
> **[3:27](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=207)** And I am going to go, and within this project, I am going to create a new file.
>
> **[3:36](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=216)** And this file is going to be .github, and this is going to be called copilot instructions.md.
>
> **[3:47](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=227)** So, within that GitHub, Copilot instructions is going to exist.
>
> **[3:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=232)** And in here, I am going to paste this right here.
>
> **[3:57](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=237)** So, these copilot instructions are going to help enforce certain stylistic changes.
>
> **[4:04](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=244)** So, say for example, the logging, and it will be a Python's logging module and a decorator usage.
>
> **[4:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=250)** Now, this is good and I'm going to try, I'm going to try make something here, specifically, the command modules, right?
>
> **[4:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=259)** Like the devices simple main and inventory.
>
> **[4:24](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=264)** So, I am going to, in this case, this is devices.
>
> **[4:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=269)** So, you can see here you have lvm and simple.
>
> **[4:33](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=273)** Well, how about we try to create something that says complex, right, or advanced?
>
> **[4:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=278)** How about we have simple, we have lvm, and simple has activate, main, scan.
>
> **[4:44](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=284)** So, we are going to see if the copilot instructions that we defined are going to be followed.
>
> **[4:50](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=290)** So, I'm going to type in a new prompt that will create something more advanced.
>
> **[4:57](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=297)** So, I'm saying create an advanced command module in ceph_volume/devices.
>
> **[5:02](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=302)** And I'm not giving any context, right?
>
> **[5:05](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=305)** So, let's see what's going to happen when I do this.
>
> **[5:07](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=307)** Now, when I do this, you will notice that here it says use one reference.
>
> **[5:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=311)** What does that reference?
>
> **[5:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=312)** That reference is copilot instructions.md.
>
> **[5:15](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=315)** This is great because what is going on here is that it is using this context to actually create that advanced module.
>
> **[5:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=325)** If I click on this advanced module, let's take a look at what we have.
>
> **[5:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=329)** You will see class Advanced and is using the same parameters, the same, you remember the catches decorator?
>
> **[5:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=337)** If you don't know Python, this is fine. It's okay.
>
> **[5:41](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=341)** And you can see here advanced deep scan logic, and all of those things will be respected.
>
> **[5:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=348)** But let's be a little bit more intentional.
>
> **[5:51](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=351)** And I'm going to be slightly silly with what I'm going to be doing.
>
> **[5:55](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=355)** So, I'm going to say every single class name should be prefixed with the name of ceph volume.
>
> **[6:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=361)** All methods should be prefixed with ceph.
>
> **[6:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=363)** This is kind of silly.
>
> **[6:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=366)** I understand that this is not necessarily how you would run production, but let's just see what happens.
>
> **[6:15](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=375)** When I go to the advanced, I'm going to go ahead and create a new class, and let's see what actually happens without doing any chat interactions.
>
> **[6:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=385)** When I say class and look at this, class CephVolumeAdvanced, like why is this happening?
>
> **[6:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=390)** Well, this is happening because I'm saying that every single class name should be prefixed like that, so this looks good.
>
> **[6:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=397)** And then I'm going to do a method, and let's see what happens when I do a method here.
>
> **[6:44](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=404)** And I'm going to say, well, it doesn't like to create a method.
>
> **[6:49](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=409)** So, I'm going to do a comment and create a method that parses the message, sure.
>
> **[6:57](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=417)** And returns the first word. Sure, why not?
>
> **[6:59](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=419)** Well, in this case, it didn't work correctly because let me see copilot instructions.
>
> **[7:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=423)** All methods should be prefixed with ceph.
>
> **[7:05](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=425)** It didn't quite do that.
>
> **[7:07](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=427)** So, we can actually try and remove these, and see if the constraints will work with the chat.
>
> **[7:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=432)** Create a method in CephVolumeAdvancedError that returns the message, and let's see what happens.
>
> **[7:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=437)** Let's see if that actually, thus, this uses the reference and look at this, it does produce that ceph_get message.
>
> **[7:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=445)** So, that is how you could set certain constraints and enforce them with Copilot instructions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), case, (8), module (5), this, (5), this. (2)
> **CLI Commands:** python (3), make (2), systemctl (1)
> **File Paths:** instructions.md (2), lvm.py (1), main.py (1)
> **Analogies:** for example (4)
> **UI Navigation:** toggle (1), click on (1), go to (1)
> **Code Identifiers:** ceph_volume (1), ceph_get (1)
> **Tools:** github (2)
> **Env Vars:** cli (1)

#### Generating guidelines for specific tasks
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=0)** - [Instructor] Generating guidelines for specific tasks is crucial when you want to define more than specific constraints.
>
> **[0:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=9)** In this case, I want to do test-driven development and I want to implement TDD.
>
> **[0:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=14)** And in these Copilot instructions, I'm going to say, "Be very strict with following TDD, including these steps right here."
>
> **[0:28](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=28)** All right, so create a unit test first, then run the test, and make sure it fails.
>
> **[0:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=34)** Right, that's very important: Execute the test suite to ensure that the new test fails.
>
> **[0:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=38)** Implement the Function, and then we run the test suite.
>
> **[0:40](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=40)** So, I think this is crucial.
>
> **[0:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=42)** It allows the GitHub Copilot to try to follow the process.
>
> **[0:47](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=47)** And now we're going to see how that is going to work.
>
> **[0:50](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=50)** I'm going to go here to this validator.
>
> **[0:54](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=54)** It sets certain classes and makes sure that these classes will have a call.
>
> **[1:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=61)** And that call will allow it to do certain things.
>
> **[1:04](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=64)** And we essentially want to implement the new one, and I will just come up with a new one on the fly.
>
> **[1:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=69)** I'm going to create a new prompt here, and I'm going to define what that arg_validator is going to be.
>
> **[1:15](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=75)** All right, create a new validator that requires paths to start with/dev/ which is for devices.
>
> **[1:20](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=80)** So, let's see if it captures the instructions in Copilot instructions.
>
> **[1:26](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=86)** It generates the test first.
>
> **[1:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=90)** It reads those, and you can see here that this is actually working.
>
> **[1:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=94)** So now it's asking me to run the tests.
>
> **[1:36](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=96)** Yes, I actually want to run the tests.
>
> **[1:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=98)** That would be basically what we need in order to get this working.
>
> **[1:44](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=104)** So we get our read, the tests are failing, which is exactly what we want, and now it's going to do the implementation in arg_validators.
>
> **[1:53](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=113)** it's going to actually make those paths.
>
> **[1:56](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=116)** So it's adding the changes to the validators, and you can see things are now correct.
>
> **[2:02](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=122)** So although it plays the tests in the wrong spot, you can see here that the validators will go into the right place.
>
> **[2:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=131)** So, let's actually scroll all the way down and see if the device is actually correct, and we will see, let's take a look: dev_path_validator, which is actually this one.
>
> **[2:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=145)** I mean, this is not 100% correct.
>
> **[2:28](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=148)** I would say the placement is odd, right?
>
> **[2:31](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=151)** So that would probably not go there.
>
> **[2:33](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=153)** I would probably put it somewhere right here, but this is more of, like a stylistic thing.
>
> **[2:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=158)** Perhaps the linter would actually complain if it knew that it was putting things over there.
>
> **[2:44](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=164)** Now, actually, that type of styling and constraints should be something that you can actually put in Copilot instructions.
>
> **[2:51](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=171)** Now, this is a good way to structure how your guidelines should be.
>
> **[2:57](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=177)** Again, doing this in Copilot instructions is the best way, you don't necessarily need to have just a single type of guideline.
>
> **[3:05](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=185)** You can have multiple ones in multiple different files.
>
> **[3:07](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=187)** And have you seen that I didn't need to specify that?
>
> **[3:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=191)** That reference on Copilot instructions is used automatically.
>
> **[3:15](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=195)** So again, it was able to generate the test.
>
> **[3:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=198)** It ran the test, it saw that it was actually failing.
>
> **[3:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=202)** It did the implementation, got it to pass.
>
> **[3:26](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=206)** And now, well, that's essentially TDD.
>
> **[3:29](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=209)** Again, these guidelines could be anything from web development to any sort of development, any sort of factions that you want Copilot to follow.
>
> **[3:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=218)** Not only specific guidelines on code generation, but also on processing workflows.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1), function (1), pass (1)
> **Code Identifiers:** arg_validator (1), arg_validators (1), dev_path_validator (1)
> **Env Vars:** tdd (3)
> **CLI Commands:** make (2)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 4. Module 3: Infrastructure as Code (IaC) with Copilot

#### Generating IaC configurations
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=0)** - [Instructor] Infrastructure as code is very important when you are developing, especially things that are going to end up in a production environment.
>
> **[0:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=9)** What we have here is a Ross project that is also an API.
>
> **[0:15](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=15)** So if I open up the read me and I close the file explorer here for a second, it is a simple microservice that will accept JSON string as input and return JSON string with a personal identifiable file for information redacted based on regular expressions stored as JSON.
>
> **[0:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=32)** A very simple microservice, it's HTTP.
>
> **[0:35](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=35)** We need to deploy this. How do we do this?
>
> **[0:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=37)** Well, I've created a prompt where I'm asking to generate a deployment procedure for this application.
>
> **[0:44](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=44)** I want to use Ansible.
>
> **[0:45](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=45)** Ansible is one of the many different frameworks that you can use to create infrastructure as code, which is essentially configuring and deploying, doing the whole process of deployment with code.
>
> **[1:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=60)** Since the deployment process doesn't exist yet, only focus on deploying this on a server.
>
> **[1:04](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=64)** Create a single Ansible file possible and keep things as simple as possible while it being effective.
>
> **[1:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=70)** So what's happening here is that I'm actually going to ask to keep things simple just so that we can have something that we can review later.
>
> **[1:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=82)** So it seems like this was completed.
>
> **[1:24](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=84)** Let's actually take a look and I'm going to toggle, I'm going to click on keep, and I'm going to toggle the chat so that we can take a look.
>
> **[1:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=92)** Ansible is known for being extremely readable and and easy to parse.
>
> **[1:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=97)** So let's take a look at what we have here.
>
> **[1:40](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=100)** Deploy redactr application.
>
> **[1:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=102)** hosts all, so this is basically saying whatever hosts, I'm going to pass these.
>
> **[1:46](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=106)** It will just deploy to all of them.
>
> **[1:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=108)** And then it's going to have certain variables.
>
> **[1:51](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=111)** What are the options here for the user and the directory and what are the tasks?
>
> **[1:57](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=117)** Ensure required packages are installed.
>
> **[1:59](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=119)** So that's pretty good.
>
> **[2:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=121)** So git, build essential, and cargo, those should be present.
>
> **[2:04](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=124)** Ensure application user exists.
>
> **[2:07](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=127)** So it goes on to list all of the different tasks that are required.
>
> **[2:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=133)** In this case, we'll create a systemd service file.
>
> **[2:16](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=136)** So it assumes that it's Linux, that's fine.
>
> **[2:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=138)** I would probably end up using Linux as well myself, and it would ensure that the systemd is reloaded so that these service can get started.
>
> **[2:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=152)** So this looks pretty good and this gives you like a starting point whenever you are actually trying to get things working.
>
> **[2:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=163)** Infrastructure as code can get complicated very easily when you start adding more constraints and more things that you want to actually do.
>
> **[2:54](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=174)** In this case, it is, for example, building the binary and then placing the binary.
>
> **[3:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=181)** But before it builds the binary, it's also cloning the repository.
>
> **[3:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=186)** Now, those steps can be probably minimized if you have some other process that is built in the binary before.
>
> **[3:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=194)** In this case, this is Ross, so you end up building a binary.
>
> **[3:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=198)** You are not supposed to run the code directly, but in some more programming languages, like say for example, Python, that doesn't exist.
>
> **[3:28](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=208)** That process of doing a build doesn't exist.
>
> **[3:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=212)** So you'll have to adapt what you see here to the language and the environments that you're working with.

> [!info]- Semantic Content
>
> **CLI Commands:** ansible (4), git (1), cargo (1), python (1)
> **Code Keywords:** case, (3), let (2), this. (1), pass (1)
> **Env Vars:** json (3), api (1), http (1)
> **UI Navigation:** toggle (2), click on (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### Creating Dockerfiles with AI
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=0)** - [Instructor] Reading Dockerfiles is also an important thing that you can consider, especially because containers are, well, they're everywhere, and they're very easy to manage and sometimes easier to deploy as well.
>
> **[0:16](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=16)** So in this case, we're with the same Rust project where we're going to build a binary.
>
> **[0:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=21)** We don't have a Dockerfile yet, but I'm going to ask to get that going.
>
> **[0:27](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=27)** So I want to containerize this project.
>
> **[0:28](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=28)** To do so, I want to use a distroless approach, which I like.
>
> **[0:31](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=31)** A distroless container, if you've never used it before, is a container that has the least amount of dependencies inside the container.
>
> **[0:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=42)** And because this is a binary, this is something that is very appropriate for Rust because there, there's no need for a runtime, as opposed to programming languages like, say for example, Python or Ruby, where they need the runtime and the runtime has its own system dependency.
>
> **[0:58](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=58)** So it will make the resulting container very small.
>
> **[1:01](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=61)** Make sure the Dockerfile works correctly with the binary being built and then placed in a separate step into the container.
>
> **[1:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=66)** So this is a rather simple application, but what I'm asking is slightly complex.
>
> **[1:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=73)** We're going to be doing a multi-stage stage Dockerfile, which is with distroless.
>
> **[1:20](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=80)** That is correct.
>
> **[1:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=82)** And then it's going to create that.
>
> **[1:23](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=83)** I don't know if I want to go ahead and do this.
>
> **[1:28](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=88)** I want to actually take a look at the Dockerfile.
>
> **[1:30](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=90)** So let's take a look.
>
> **[1:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=92)** So it's going to use the Rust container first.
>
> **[1:36](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=96)** That is correct.
>
> **[1:37](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=97)** The builder stage looks accurate.
>
> **[1:40](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=100)** And then the runtime stage is using [gcr.io](https://gcr.io), which is the Google Container Registry.
>
> **[1:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=108)** Those are... That's the registry that has the distroless containers.
>
> **[1:53](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=113)** And then it's going to copy the resulting binary into that container.
>
> **[1:57](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=117)** And it's going to do the entry point as /redactr, that looks correct.
>
> **[2:02](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=122)** And sure, why not?
>
> **[2:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=123)** Let's just try to build and see what happens when I finish building.
>
> **[2:08](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=128)** Let's take a second until this completes.
>
> **[2:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=130)** All right, so this had an issue here when it was building.
>
> **[2:15](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=135)** There was, there was a warning found, and then it failed to build of course.
>
> **[2:22](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=142)** So I am going to do the cargo version.
>
> **[2:26](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=146)** So now we're getting into situations where certain things might or might not work correctly.
>
> **[2:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=152)** So in this case, it is actually looking forward to try to see exactly what is going on.
>
> **[2:40](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=160)** And of course, my local cargo is a different version.
>
> **[2:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=163)** So one of the things that you might want to consider when you are dealing with these situations is that you can use AI, in this case it can help Copilot to help you out, figure out what are some of the differences.
>
> **[2:56](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=176)** So this is a pretty crucial situation that we have here when my current system has a much better version, or much newer version of Rust.
>
> **[3:07](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=187)** And in this case, cargo, which is 1.90, where the slim image for a container is 1.75.
>
> **[3:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=197)** So you could use the Dockerfile to use a new Rust image or you could just try the 1.90.
>
> **[3:26](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=206)** So up to you to decide.
>
> **[3:28](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=208)** We're now going to go into the specifics on trying to solve this particular problem, but this actually builds exactly what I want and this, it's something that you would want to, well try to change and specifically, if you want to use the 1.90 slim, that would work there as well.
>
> **[3:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=228)** So that's how you would go back and forth, creating a docker file, verifying it works, and making sure that these versions, well, are going to work when you're building your project.

> [!info]- Semantic Content
>
> **CLI Commands:** cargo (3), make (2), python (1), ruby (1), docker (1)
> **Code Keywords:** case, (3), let (3), this. (1), this, (1)
> **Definitions:** is a  (5)
> **Versions:** 1.90 (3), 1.75 (1)
> **URLs:** [gcr.io](https://gcr.io) (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Terraform configuration generation
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=0)** - [Instructor] Finally, one of the things that I want to explore is to try to get this containerized app or actually this app that can be containerized because we now have a very good, very solid Docker file here.
>
> **[0:14](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=14)** I want to explore how would I do that with Terraform.
>
> **[0:17](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=17)** So what I've started with here in my prompt is, I want to explore Terraform to deploy this application in a containerized way.
>
> **[0:24](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=24)** Provide me a setup that will create and push the container to the Azure Container Registry.
>
> **[0:28](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=28)** Now know that I'm seeing Azure Container Registry.
>
> **[0:31](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=31)** It could be any other cloud.
>
> **[0:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=32)** It could be very well be Amazon Web Services or perhaps the Google Cloud platform, but additionally create a separate workflow to deploy to the Azure Container Apps service.
>
> **[0:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=43)** So one is to actually build the container and the other one is to deploy it.
>
> **[0:50](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=50)** Depending on where you're at with infrastructure as code, perhaps building the container is not a very good idea.
>
> **[0:57](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=57)** With Terraform, I want to explore.
>
> **[0:59](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=59)** I want to push a GitHub copilot to do something that perhaps might not make that much sense.
>
> **[1:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=66)** Now if this is, if this product is in GitHub, my recommendation would be to, for example, do a little bit of work with GitHub actions and try to build a container and push the resulting container into a registry.
>
> **[1:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=81)** And then perhaps with something like Terraform to try to get those deployed to an a production environment, like in this case it could be Azure container apps, or if you're in a different cloud provider, well use any of the other destinations as well.
>
> **[1:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=98)** Alright, so that seemed like it completed.
>
> **[1:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=102)** Let's take a look at what we have.
>
> **[1:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=103)** So it added an infra, an infra directory.
>
> **[1:47](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=107)** I'm going to collapse the chat and I'm going to start exploring some of the things that we have.
>
> **[1:53](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=113)** So you can see that it added the provider, in this case it's the Azure RM that looks very good.
>
> **[2:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=120)** The resource groups, of course, you will start like depending on the cloud provider using Azure use, uses the resource groups you'll have to edit these to reflect the fact of the things that you want to do and the reality of the environment that you want to choose.
>
> **[2:18](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=138)** In this case, it added the gitignore perhaps maybe that's a good idea, especially because of all of the artifacts that Terraform is going to be creating.
>
> **[2:26](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=146)** But these looks are pretty good.
>
> **[2:28](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=148)** Ah, and look at this, actually, GitHub copilot was smart enough to do the things that I was actually thinking.
>
> **[2:36](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=156)** In this case's, it's going to build and push the container from this repository to the Azure Container Registry, which is actually what I wanted.
>
> **[2:46](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=166)** I've done that in the past and that this is kind of like how you would do this and you would perhaps have to massage this a little bit, but it will get you started pretty fast and pretty easily.
>
> **[3:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=180)** So let's just accept these so that we can review them.
>
> **[3:03](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=183)** And this looks pretty good.
>
> **[3:04](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=184)** Look at this, set up terraform.
>
> **[3:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=186)** So it will actually set up a different instance to run Terraform.
>
> **[3:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=190)** And I really like this approach.
>
> **[3:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=192)** This is exactly how would I envision deploying, building these containers and deploying them into production.
>
> **[3:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=199)** But then again, it would require you to pay attention to all of these variables and to make sure that this is going to be correct.
>
> **[3:27](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=207)** Now, one of the things that you can do is to try to run some of these things locally, well, as much as you can, and try to get to a good point, where you can deploy them and put them into GitHub actions.
>
> **[3:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=218)** And then try to gather some logs, especially if you're getting into trouble.
>
> **[3:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=222)** So there you go.
>
> **[3:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=223)** That is how you would generate Terraform resources and variables to try to deploy these to Azure container apps.
>
> **[3:52](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=232)** Depends on the Azure, on the cloud provider that you may want to do, but in this case we picked Azure and I think this is working very well.

> [!info]- Semantic Content
>
> **CLI Commands:** terraform (8), make (2), docker (1), rm (1)
> **Code Keywords:** let (2), this, (2), finally, (1), case, (1), require (1)
> **Tools:** github (5)
> **Prerequisites:** set up (2), setup (1)
> **Analogies:** for example (1), kind of like (1)
> **Speakers:** - [instructor] (1)

#### Course wrap-up
> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980&t=0)** - Okay, so that's a wrap in this GitHub course on advanced system level development.
>
> **[0:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980&t=6)** We saw how you can use GitHub Copilot and leverage it to do test-driven development.
>
> **[0:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980&t=13)** We then took it to the next level to do some debugging and refactoring on large code bases.
>
> **[0:21](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980&t=21)** It is sometimes a little bit challenging to deal with large code bases when you're using AI tooling.
>
> **[0:27](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980&t=27)** In this specific case, we were using AI copilot to help us out, and now hopefully these patterns will help you get there.
>
> **[0:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980&t=34)** And finally, we saw a little bit of automation.
>
> **[0:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980&t=38)** I tend to really like automation.
>
> **[0:41](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980&t=41)** It's something that I teach my students a lot.
>
> **[0:43](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980&t=43)** I think it's the foundation to get better results and more robust results, especially when you're looking forward to get your code into production.
>
> **[0:53](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980&t=53)** So hopefully this course will get you to the next level, and you can apply these patterns, these workflows, to your own code bases and to your own projects and get to the next level when you're applying AI tooling.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), finally, (1)
> **Tools:** github (2)
> **Speakers:** - okay (1)


## Instructor

- [[Pragmatic AI Labs]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/paiml/ghcp-for-systems-level-development)

## Skills Covered

- Configuration Management
- Artificial Intelligence (AI)
- GitHub Copilot
- Infrastructure as code (IaC)
- Code Refactoring

## Path Context

### In [[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development]]
← [[Advanced Prompting With Github Copilot]] | **2 of 4** | [[Responsible AI Development with GitHub Copilot]] →

## Appears In

- [[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development]]

## Related Courses

_Courses sharing skills:_

- [[Refactoring with GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot, Code Refactoring
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[Exploring the Future of Development with GitHub Copilot Workspace]] — Artificial Intelligence (AI), GitHub Copilot
- [[Practical GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot
- [[AI Pair Programming with GitHub Copilot]] — Artificial Intelligence (AI), GitHub Copilot

---

[↑ Back to top](#)