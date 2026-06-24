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
  - '[GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/GitHub%20Copilot%20Mastery-%20From%20Advanced%20Prompting%20to%20Full-Stack%20AI%20Development.md)'
prev_courses:
  - '[Advanced Prompting With Github Copilot](Advanced%20Prompting%20With%20Github%20Copilot.md)'
next_courses:
  - '[Responsible AI Development with GitHub Copilot](Responsible%20AI%20Development%20with%20GitHub%20Copilot.md)'
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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/GitHub%20Copilot%20for%20System-Level%20Development.md)

![GitHub Copilot for System-Level Development](https://media.licdn.com/dms/image/v2/D4E0DAQEiOE4zLSamSA/learning-public-crop_675_1200/B4EZq3xl0EHgAg-/0/1764019822781?e=2147483647&amp;v=beta&amp;t=q7q7NxNA-jEl2tx_EWMP0t-pMCrhKuEYepSex2HPb4k)

# GitHub Copilot for System-Level Development

> Dive into the nuances of advanced system-level development with GitHub Copilot. This course outlines advanced prompting techniques; offers challenges that give you hands-on experience in areas like AI-assisted test-driven development (TDD); and shares strategies for debugging and working efficiently with large codebases. Discover the importance of automation as a foundational skill for developers 

> [LinkedIn Learning](https://www.linkedin.com/learning/github-copilot-for-system-level-development) | 1h 7m | Advanced | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (1 videos)
  - [Course introduction](#course-introduction)
- [**Module 1: AI-Augmented Test-Driven Development (TDD)**](#module-1-ai-augmented-test-driven-development-tdd) (6 videos)
  - [Introduction to AI-assisted TDD](#introduction-to-ai-assisted-tdd)
  - [Generating complex test suites](#generating-complex-test-suites)
  - [Mocking dependencies with Copilot](#mocking-dependencies-with-copilot)
  - [Challenge: TDD for a new feature](#challenge-tdd-for-a-new-feature)
  - [Solution: TDD for a new feature](#solution-tdd-for-a-new-feature)
  - [Evaluating test coverage](#evaluating-test-coverage)
- [**Module 2: Large-Scale Refactoring**](#module-2-large-scale-refactoring) (6 videos)
  - [Strategic use of workspace](#strategic-use-of-workspace)
  - [Analyzing cross-file dependencies](#analyzing-cross-file-dependencies)
  - [Challenge: System-wide code cleanup](#challenge-system-wide-code-cleanup)
  - [Solution: System-wide code cleanup](#solution-system-wide-code-cleanup)
  - [Enforcing styles and constraints](#enforcing-styles-and-constraints)
  - [Generating guidelines for specific tasks](#generating-guidelines-for-specific-tasks)
- [**Module 3: Infrastructure as Code (IaC) with Copilot**](#module-3-infrastructure-as-code-iac-with-copilot) (4 videos)
  - [Generating IaC configurations](#generating-iac-configurations)
  - [Creating Dockerfiles with AI](#creating-dockerfiles-with-ai)
  - [Terraform configuration generation](#terraform-configuration-generation)
  - [Course wrap-up](#course-wrap-up)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Course introduction](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-introducton?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-introducton?u=76281980&t=0)** - Welcome to this course in [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) Advanced System Level Development. We're going to cover a few different things from advanced prompting to certain techniques that you can apply to [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md). Then we will go into, well, debugging and doing more advanced techniques while you are developing. Like say for example, you're working with large codebases, and by the end of it, we will do a little bit of automation. It's something that I tell my students all the time, automation is the foundation on becoming a better developer. And we're going to leverage GitHub Copilot to help us get there in a faster way and in a more robust way. And we'll learn some of the techniques, patterns, and workflows that you can apply to your own codebases when you're done with this course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (2), [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (1)
> **Tools:** github (2)
> **Analogies:** for example (1)
> **Speakers:** - welcome (1)


### Module 1: AI-Augmented Test-Driven Development (TDD)

[↑ Back to Table of Contents](#table-of-contents)

#### [Introduction to AI-assisted TDD](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=0)** - [Instructor] [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md), also known as TDD or referred to as TDD, is the way we can run some test, write tests before a specific feature is available. In this case, we have here some existing tests. If I run the tests, you will see that they're all passing. I'm going to collapse here the chat window, and you can see everything is passing, everything's good, everything's tested, so that is actually something good. So say, for example, this is testing something, function called str_to_bool, meaning string to bool, and the thing here is that it is testing the ability of passing a string and getting either a true or a false. But pretty simple, if actually I go in and show you main.py, I'm going to close this pane for a second. If I show you these, the function is pretty specific. It accepts true values. But let's say, for example, I wanted to implement something like a 1 for a true value. Like I wanted to make sure that if a 1 is passing in as a string, then that would work. So the way you would do that with TDD is write a test that says, well, I'm going to say def test_one_is_true(): Now as soon as I do that, you can see that I'm getting suggestions from [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md). That is fine. I'm going to accept this.
>
> **[1:35](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=95)** And although this is not exactly what I want, I'm going to accept it, and then I'm going to say, I'm going to change that yes for a 1. So I'm going to save now this file, I'm going to save this file, and then now I'm going to run the test. So I can click to run the test, and then you can see now it's red. It's a failure. The way to make this work, of course, I will have to go here and perhaps add a 1, which Copilot basically picks up right away. I can accept that and save. And now if I go back to the test and I try to run it again, now it's passing. Now everything is good. That is the essence of test-driven development, and that is kind of like the workflow that I'm going to demonstrate by going back and forth between writing a test first that, well, doesn't work, that fails to show exactly that things are not quite correct, and then I am going to head over to implement that thing that is not there, that is quite missing, and we want to, well, make it slightly better. So that is the strategy that we want to use. That is what we're going to be applying. And as you can see here, we were able to get some suggestions from Copilot already to implement the thing that was missing. So there was already kind of like a little bit of context that is happening behind the scenes while I'm in the editor, while I'm jumping back and forth between these files to implement the feature that is actually failing.
>
> **[3:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/introduction-to-ai-assisted-tdd?u=76281980&t=189)** So we'll see, based on this TDD, on this test-driven development technique, how we can leverage AI to help us out when we're trying to develop new features.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (3), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (3)
> **Env Vars:** tdd (4)
> **Analogies:** for example (2), kind of like (2)
> **CLI Commands:** make (3)
> **Code Identifiers:** str_to_bool (1), test_one_is_true (1)
> **File Paths:** main.py (1)
> **Cross-References:** go back to (1)
> **Definitions:** known as (1)

#### [Generating complex test suites](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=0)** - [Presenter] Test suites can get very complex. And one of the things that I want to show you is how to accomplish these with assistive AI tooling like [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md). In this case, this tool called the jformat is a tool that basically takes an input, which is usually a file. You can see here some of the options. It will take a file, and it will reformat [JSON](../../Skills/Web%20Development/JSON.md) input to try to get you nice readable JSON. Sometimes JSON is not very readable, and it does this using a formatter. So, you know, pretty straightforward. And, but however, the tests are only focusing on one thing, which is just the ability to convert the string to a boolean. So, some of these things need to be better. And, you know, this can get very complicated. So, what we're going to do, is I'm going to collapse the explorer here. What I'm going to do is to actually leverage [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md), so that it can help me out try to, well, produce a very, a more robust way, in a complex test suite, that will help me test the command line interaction, which is really not tested at all. So, what I'm going to do is I'm going to toggle these and notice, I'm going to just use the default model. My recommendation is to just use whatever
>
> **[1:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=94)** is more comfortable with you and try them out. Try them all out and see what works best. So, in here, I'm going to say I need to create more tests to verify the interaction in the command line. This has to show that the different options, like --file and --inline will work. So, I'm in agent mode. That means that multiple different files and multiple different things will be able to work with GitHub Copilot. And you can see there's a plan right now. It's actually building a to-do review existing [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) tests, a test for file, inline, combined options, and run all the tests to validate the changes. So, this is already somewhat complex, and it would take someone like me, like someone that build this project. Well, it would take me a little bit of time if I had to do this manually. So, I'm going to rely on GitHub Copilot to get that going. So, you can see that it's building the things that he's trying to do. And he has already made some changes in not only in the test CLI, but also in the reformat.py, which it was already a test that existed. All right, the model wants to run test in test CLI. That's fine. I'm providing permission, so that the tool can actually run and do these things as it tries to make progress. All right, so, additional tests for the command-line interface have been created. Let's take a look. I'm going to keep all of the changes. You have the ability to keep or undo certain changes. These looks okay to me.
>
> **[3:09](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=189)** So, I'm going to do keep, this is the new test_cli file. You can see certain things are being passed in. EXAMPLE JSON run the CLI. It's up to you on how to accept or reformat some of these suggestions as you start making progress, but you can see some of these tests. Well, they're kind of okay, but we'll take a look at what's going on in a second. All right, so, this is okay. I'm going to make sure it's saved. And now, I'm going to verify that these things are working. So, one of the things that I highly recommend is I'm going to collapse here or toggle the chat pane off. And I'm going to say toggle the terminal. So, now, I'm going to run pytest and see if tests are working. Pytest is a way to, the test framework, and the test CLI for [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) that I prefer. And it is how I run the test. And if I run it, you can see tests are passing, so this is good. The test CLI has three tests passing, and that, well, makes me feel very good. Things are good and things are working according to what was suggested. Now, I don't necessarily trust blindly the output that I got from Copilot. And let's take a quick look at what's being actually passed in. So we have some EXAMPLE JSON, and that is coming from this file. So, I'm going to make some changes here.
>
> **[4:42](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=282)** First, there is actually no need to do something like this. I mean, I'm going to allow it for now. It is trying to figure out what the path is, and it's including the example.json, let's just, let it pass for now. Now, when when you have things that require certain files to be present and then files to be removed, then it is better to make some changes to try to make the tests slightly better, right? So, instead of having these try and finally and remove the path, do you see that pattern being repeated and things are being added and then removed? Well, we can actually improve these by using internal features of pytest. So, I can say, I believe that pytest has some features that can help in creating the temporary files as well as taking care of removing them. Help me address these in these CLI tests. So, I'm not exactly saying what are the things that I need to do, but I'm just letting the AI agent do them. So, I'm going to run these, I'm going to execute these, and I am going to wait for the refactoring of these tests to make them look slightly better. So, in this case, it's adding 17 lines, removing 21. It seems to me that this might be a little bit better. Let's take a look. It's using fixtures. It looks okay. I'm going to say keep, and I'm going to allow running the test.
>
> **[6:19](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-complex-test-suites?u=76281980&t=379)** It says that it's running now and things look correct. This is still not quite good. You can see here that it's importing pytest. That's not necessary. It's already imported up here. So, again, one of the things to make sure, to understand is that you are in control. You are in the driver's seat, and it's important to verify the things that you're getting. But this is already quite complex. I think we made them slightly better. And this will allow you to keep improving on the test that you're receiving.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (7), [JSON](../../Skills/Web%20Development/JSON.md) (6), [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (3), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **Env Vars:** cli (7), json (5), example (2)
> **CLI Commands:** make (7), python (1)
> **Tools:** github (3), command line (2), terminal (1)
> **UI Navigation:** toggle (3)
> **Definitions:** is a  (2), means that (1)
> **File Paths:** reformat.py (1), example.json (1)
> **Code Identifiers:** test_cli (1)

#### [Mocking dependencies with Copilot](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=0)** - [Instructor] Marking dependencies is a crucial way of dealing with tests, specifically, when certain things can get out of control. In this case, for example, the run_cli is calling on [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3. This is doing a system call. We can do a little bit better. There's a problem here where if for whatever reason, Python 3 does not exist in the system where this test is being run, we're going to get into trouble here. Now, these are particulars of Python. It requires a runtime. There's several different things that would need to come to be true in a system in order for this to run correctly. I want to avoid that. And so, I've written this prompt, which is this test [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md).py file is calling Python 3 directly. I want to avoid relying on Python 3 executable being available in the system. So, I want to create a mock that can act on behalf of the CLI being called directly. So, I want to fake that in order to avoid calling the system. So, I'm going to run this. I'm going to see that there's a little bit of output, and I'm going to try to see what we can do here. All right, so there's a suggestion here. It didn't add that to the file. So, there's an example of how to mock subprocess run for your CLI tests. This looks, you know, slightly better. So, let's just try to add that. So, I'm going to ask, okay, this looks reasonable. Please add it to the file. So, we're going to make the agent. Sometimes the agent needs a little bit of a push
>
> **[1:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=94)** in order to get the changes exactly where you want them. And then we see that we have them here. I'm going to keep them. This looks correct and now I need to run the test. So in order to do that, well, we can actually go and see if we can run some of these tests. We can try to run this one. Again, we see some progress here. And I think, this looks kind of okay, so what is this doing behind the scenes? So let's just walk through some of the changes that we've received. So it is simulating the output, and it's allowing me to pass context and pass options, and flags as if this was the system. And with this, comes the ability of producing output. So, in this case, you can see that it is actually patching subprocess, but we don't necessarily need to patch the process. The process is the part of the Python library that will allow you to get you a system call to run. But in this case, it's patching that, you know, there's all kinds of different things here. This is one approach, and you might feel like you want to do something slightly different. For example, having a helper function that does something similar. In this case, it's using mock, which is a utility from the standard library. It's coming from unittest.mock, and allows you to create something that, like an object that will behave in any way that you can. And then you can make asserts
>
> **[3:07](https://www.linkedin.com/learning/github-copilot-for-system-level-development/mocking-dependencies-with-copilot?u=76281980&t=187)** based on the things that mock was doing. It's also helpful for that. So, this is kind of like how you would go around creating a mock a system library, or in this case, patch something that you want to behave a slightly different to avoid making a system call.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (6), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (3)
> **CLI Commands:** python (6), make (2)
> **Versions:** python 3 (4)
> **Analogies:** for example (2), kind of like (1)
> **Env Vars:** cli (2)
> **Definitions:** is a  (2)
> **File Paths:** cli.py (1)
> **Code Identifiers:** run_cli (1)

#### [Challenge: TDD for a new feature](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=0)** - [Instructor] There are a couple of things I want to implement for this function, the string to Boolean function that is taking a string and providing us either a true or a false. And in the worst case scenario, if it's absolutely miserable with what's coming in, it will return or raise, rather, a value error. Okay, so in this case, there's a couple things I want to do. First is that I want to allow not only a one, but I also want to allow a zero. And then the other aspect of this is that I want to allow for spaces, like say for example, if yes is sent like this, well, I want to support that and make sure that that works, as well. So what are we going to do? Well, we're going to create a prompt and that prompt is going to help us out implement all of the failing test cases to implement that missing zero. So in this case, we already have the one, so we would have to implement the zero. So I'm going to write that prompt. I want to use TDD to implement accepting zero as a false value. Do not make the changes to str_to_bool yet. Only implement the failing test. So I'm going to run this and I'm going to hopefully see what we're going to be able to add that so that we can get a failing test. So there, let's see, test_zero_is_false. This looks actually correct
>
> **[1:33](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-tdd-for-a-new-feature?u=76281980&t=93)** and I think that this is going to fail, which is what we're looking for. Remember, [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) is about making this fail. So, perfect. It is failing. It is what is expected and that will allow us to go back to the other function and try to make sure that, well, it is passing. So I'm going to say I want to keep these and that is going to be sufficient for what we're trying to do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** str_to_bool (1), test_zero_is_false (1)
> **Env Vars:** tdd (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Solution: TDD for a new feature](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=0)** - [Narrator] Now that we have for a failing test, it is time to go and we'll make it pass. In this case, we could, 100%, write a prompt and let [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md), the AI tooling, help us out. But this is pretty straightforward. So let's just do this manually. When we go here to the str_to_bool function, really the only thing we need to do is we'll add a zero, right? So you can see here that even then, GitHub Copilot is helping us out. And if you go back to test_main, and we want to run these tests again, well, it's going to pass. Of course, it passes now because it allows that as well. Now, there's one more thing that I want to do, and that is I want to use this parameterize function, this helper from pytest, this a framework thing. You don't need to be an specialist in [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or pytest or what we're trying to do here, but I'm going to go briefly what is the actual thing that we're doing. You can see here that the values are y, yes, and zero. So what this is doing is passing multiple different values and do the same assertion, which is actually pretty useful instead of doing it this way where you're passing a one, passing a y. So you can actually do them all at once. So, what I'm going to do is I'm going to select these and I'm going to say, "I want to implement the same strategy with parameterize, but using trailing and leading whitespace." Whitespace is not accounted for, I want to make sure I have coverage for that. And I want to also use parameterize
>
> **[1:33](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=93)** for all the false values. So I'm going to run these, and I'm expecting to see some changes here. Let's see if it is all to my liking. All right, so, it went ahead and added not only the leading and trailing whitespace, it added tabs, which seems pretty awesome. I didn't think of that, and that seems okay to me. And it's actually deleting all the false ones and adding the false values. So this is interesting. I really like what it's done. It's actually gone and added all of these things. Now, it did remove the value error. I want to keep that. So, we'll, how about this? We're going to accept them. And then I am going to ask for the value error to be put back together. So, these changes are still going, and it's asking me if I want to run. And yes, I want to run this. It is actually going to try to run the tests. All right, so there's a mistake here. "There are leftover, incomplete function definitions." Yes, yes, there are. You can see that there's one right here. So we can actually, you know, not everything is 100% perfect. We're going to toggle the terminal and see if we can actually run some tests. And we can see now that we have lots and lots of failures. And do you know why? Well, because we've added all of these extra cases. So, this is great. We have tons of different ones.
>
> **[3:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-tdd-for-a-new-feature?u=76281980&t=192)** This is actually good. This is exactly what we wanted. So now let's go ahead and make those fixes, right? So let's make sure that this is cleaned out, right? And there, save that. And now we can say, "Add the handling for the tabs, new lines, and whitespace for the str_to_bool function so these tests pass. Run the tests to verify." So I'm going to run this and I'm going to, well, effectively be implementing TDD. Now, the thing with TDD is that perhaps you are going into smaller implementations having multiple different files and changes, but more of like more narrow focus. But in this case, I think it's good to demonstrate. Let's take a look. I mean, this looks correct. And so now what we can do is, I mean, toggle the terminal again. And we're going to toggle the terminal, run the tests, and we're going to see that now we have a lot of them are passing now. So this is actually very, very good. So there you go. That is how you would solve this with TDD. Add the tests, the failing test first. And in this case, we added way more, and we added this, supporting this new feature, which is allowing for whitespace, leading whitespace, trailing whitespace, new lines, and tab characters.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (2), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1)
> **CLI Commands:** make (4), python (1)
> **Tools:** terminal (3), github (2)
> **Code Identifiers:** str_to_bool (2), test_main (1)
> **Env Vars:** tdd (3)
> **UI Navigation:** toggle (3)
> **Cross-References:** go back to (1)
> **Speakers:** - [narrator] (1)

#### [Evaluating test coverage](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=0)** - [Instructor] When you're working with tests and when you're making progress, implementing your features, adding your features, doing the refactoring, one of the important aspects is to understand coverage. In this case, I'm going to use pytest, which is the [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) test runner that I've chosen to use. This is a test runner and a test library as well. There are plugins, and in this case I'm going to use the cov plugin, which is the coverage plugin. So what is going to happen behind the scenes is going to run all the tests and then analyze what statements are covered for my test and what statements are not covered. So in here you can see a list of files with their statements which ones are missing and what is the coverage in the percentage in coverage. And you can see here that main has only 49% coverage and reformat is 50, so what does these mean? Well, it means that there is code in a reformat that, for example, that is not being used by tests. So you can use this output in order to enhance. Now this is a kind of thought sometimes when some of the reported output includes the tests themselves. So this is not necessarily crucial or important for me. I want to take a look at some of these things. So let's get the 77% up and we're going to use a prompt to help us get there. So the first thing I'm going to do is I'm going to copy this and put it as part of our prompt.
>
> **[1:36](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=96)** Alright, so my prompt says the test coverage is at 77%, which we know, and I want to increase this. There is code that is not covered by tests in reformat.py as well as main.py. Add some tests to increase the test coverage. This is useful. I'm going to paste here the results. I could do something fancy by including this into the prompt, but pasting is 100% fine. Now, [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) is going to go ahead and read all these files and try to produce something meaningful and useful, so let's wait until it completes. All right, it completed it. It added these test_main_extra. I don't think I would put more tests in there, up to me how I want to move tests around. But let's not run these right here. Let's actually run it here so that we can see the output and we can see now that we have some failures, right? We have some failures here which is not okay, but look at that, we have 85% of the test coverage.
>
> **[2:40](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=160)** So we got a little bit of extra and let's just go ahead and allow the agent to run the coverage so that it understands because it will now read this output as part of what it ran. So that is actually useful so let's allow it again. We still have a little bit of extra, I mean, I don't think this is really necessary to keep these things to be so complex. But look at this, we were able to get this bumped. Specifically, reformat is now at 100% before it was at 50% if I remember correctly. Now it didn't touch I think main.py, that's fine. But that is kind of like the workflow that you should expect when you're working with coverage. You're making some tests, adding some tests, and trying to look for files that don't have the coverage that you're looking for, in this case, like say for example, if you say 56% is unreasonable, let's add a couple more tests. That is actually something that you can do. When you have things that are uncovered in tests, that is very suspicious. That means that there's things that are not, if I go here and I say keep, keep everything, in test_main_extra, there might be things that are not covered. So in this case, if I had to say what might not be covered, this might look like it's not even used. Do you see how it's not accessed?
>
> **[4:13](https://www.linkedin.com/learning/github-copilot-for-system-level-development/evaluating-test-coverage?u=76281980&t=253)** Pylens is telling me there. We could try to get it out, right? Save it, and run the coverage again, toggle the terminal, run with coverage, and look at that. So it was adding things that were not being used and now we got our coverage up. So that's the workflow. That is what you should expect when you're working with coverage and tests and inspect what things are being used and what things are not being used.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (1)
> **Definitions:** is a  (2), means that (2)
> **File Paths:** main.py (2), reformat.py (1)
> **Analogies:** for example (2), kind of like (1)
> **Code Identifiers:** test_main_extra (2)
> **CLI Commands:** python (1)
> **Tools:** terminal (1)
> **UI Navigation:** toggle (1)


### Module 2: Large-Scale Refactoring

[↑ Back to Table of Contents](#table-of-contents)

#### [Strategic use of workspace](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=0)** - [Instructor] Large code basis are a challenge and can be extremely challenging, not only for regular engineering, but well for machine learning models, AI models, [natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) models that require to have an an input context in other words, to produce meaningful results. Well, it's kind of tricky because models will have a limited amount of, limited amount of context that you can use. And the problem with that is that, well, if you have a code base, like in this projects that has 10,000 files, well guess what? Things are going to be complicated. You cannot just go ahead and say, hey, you know, where's, you know, if I go ahead and say, "Where is logging enabled?" It's a very generic way of asking for something you don't know anything, you're relying on, on [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) to try and figure that one out but it's 10,000 files. I mean, how feasible it is that it's exactly, it's exactly what you need and exactly what the problem is. And in this case, this code base is not only, it's not a single language. It has Shell, it has [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), it has even [JavaScript](../../Skills/Software%20Development/JavaScript.md), TypeScript, but it's mostly C++. So what are we looking for, right? So you can see here. Logging is enabled via Ceph config options. For Python tools and modules,
>
> **[1:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=92)** logging is enabled programmatically in their respective setup of functions. For OpenStack related QA logging is enabled in the .conf files. So there's a lot of different things. So the challenge with this is, well, you have to narrow the focus. Now you can do certain things, like say for example, use workspace. And workspace allows you to encompass absolutely everything in as much context as it can. And now most of the time by default, workspace will be included. So you can ask about your workspace. I mean I think, that's not entirely the whole thing. It's basically means that you will try to do as best as possible to go into a lot of different files and try to figure it out. So now if I say for example, "I want to know about logging levels and what are all the ones available?" Then, and because it's using workspace, it will try to gather more information. Now it's, you can see, now it's 52 references and you can see all of the different things. So now it, you went on to look into some documentation files, which is also useful. Now the best technique and the best recommendation that I have for you is that whenever you're dealing with a code base like this, try to narrow it down. Like you have to have some sort of like a level of understanding of on how that works. So one of the things is to include a path to a specific file. So for example, if I say ceph volume, which I know is a Python project within the larger project of ceph,
>
> **[3:08](https://www.linkedin.com/learning/github-copilot-for-system-level-development/strategic-use-of-workspace?u=76281980&t=188)** I can say ceph volume. And when I say ceph volume, you can see, there we go. So it starts popping, it's kind of like a fussy matching search that you can do within the code space, within the workspace rather. And then I can say src ceph volume is exactly what I want and I can say "How is logging enabled here?" And then I can narrow the focus, right? Because ceph volume will be much smaller in this case. I know it's much smaller and you can see the responses, well almost immediate. So those are a couple of things that you can do and tools that you can use and strategies that you can apply when you're dealing with a very large code base. Use work at workspace whenever you can, especially if you want to include more context and you're not entirely sure, but if you have some sort of idea, well try to reduce that scope well try to reduce that scope and make it, make it so that you can actually get to smaller amount of files. And in this case we can say, you know, 500 files in this subdirectory. Not at, I mean still quite a lot, but not 10,000, right? So models will be able to work better, faster and give you more accurate answers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Natural language processing](../../Skills/Artificial%20Intelligence%20(AI)/Natural%20Language%20Processing%20(NLP).md) (1), [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (1), [JavaScript](../../Skills/Software%20Development/JavaScript.md) (1)
> **CLI Commands:** python (3), make (2)
> **Analogies:** for example (3), kind of like (1)
> **Definitions:** in other words (1), basically means (1), is a  (1)
> **Tools:** github (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### [Analyzing cross-file dependencies](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=0)** - [Instructor] Sometimes we get into trouble with dependencies. And one way that you can get into trouble is when you are dealing with a code base that, well, in this case it's a very old code base and it's using libraries that, well, they've changed names and they no longer exist. How can I know for sure? Well, if I run my tests, let's take a look at this. Well, we have errors and there's... The error message is actually very useful. It's telling. Module ConfigParser has no attribute SafeConfigParser. Did you mean RawConfigParser? And so it's hinting as that, "Eh, this is probably, you know, something that I need to update." So that is fine. In this case, we're looking at [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3.12. This is not important what Python version is. It doesn't even matter if you are a proficient in Python or you're using a different type of language. In this case, the language is not relevant because what we're trying to do here is to try to analyze cross file dependencies. So let's use the power of [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md), and I'm going to be using agent mode, but I'm going to be also using @workspace to go really deep into the context of this project called ceph-volume. I'm using @workspace. And I say I need to understand the dependency of SafeConfigParser and how it is used because it is causing test failures. And this is going to allow me to go into...
>
> **[1:36](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=96)** Gaining an understanding. And you can see it's collecting the workspace information and collecting that information will provide a, hopefully, what it is a thorough analysis on the usage of this config parser thing. So let's take a look. I'm going to, well, it's producing a lot of output. It's very verbose and it's a legacy class from Python 2's config parser model. Okay, so I suspected as much, it's in Python 3 was renamed to SafeConfigParser is deprecated. It just ConfigParser is fine. And it tries to do that. Now I can actually say... And it gives you, it gives you a lot of... This is this pattern of try accept, this is very common to try to deal with this. Why would the attribute error mentioned that I perhaps need RawConfigParser. So now I'm kind of like analyzing, investigating, doing a little bit of spelunking. Investigation, going deep into why some of these recent, so SafeConfigParser is just an alias for Config Parser. Okay? And both are deprecating in favor of ConfigParser and RawConfigParcer. So, okay, that's pretty clear. But you know, it seems that this might be, if I don't want interpolation, I could use RawConfigParser. That type of analysis, that type of inspection and understanding the cross file dependencies is crucial so that you can make informed decisions.
>
> **[3:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/analyzing-cross-file-dependencies?u=76281980&t=190)** Now using AI tooling, like AI Copilot will help you out trying to get out of situations like this where things are similarly complex and they span multiple different files. So now we have a good understanding and that is the first step in order to fix this problematic code base.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (5), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (2)
> **CLI Commands:** python (5), make (1)
> **Versions:** python 3 (2), python 2 (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: System-wide code cleanup](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=0)** - [Instructor] Now that we have a good understanding of what's going on, let's actually dig deeper and get a good understanding. So the recommendation was, well, depending if you need interpolation, which is a feature of this library or this module, then depending on that, maybe you need it, maybe you don't. Some like, "Eh, analyze the code and tell me if I really need interpolation or not." So like, I have a better informed decision. So it says, well, you know, you're parsing as playing strings and code explicitly strips common and splits balance, but does not use or expect interpolation. So yeah, I do not need... And using raw config, I don't need interpolation. So using raw config parser is appropriate for what I'm trying to do. Okay, so go ahead and help me update the code to [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) 3 standards and use raw config parser. So there's a couple things here. We are looking into things that have been that need to go to Python 3, but we might not know if this is going to be sufficient. So test failures are due to the use of deprecated readfp. So we're getting into other kinds of different issues. And you can see here things are starting to get slightly more complex. I'm going to clear these, I'm going to run the test so that you can see what is going on. So there's a little bit of errors right now. I'm going to clear this again because this happens when you're trying to run tests and things are not quite correct. So there are, look at these package resources. So there's things starting to collapse now
>
> **[1:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=98)** because they're not quite correct. So let's take a look. We're trying to get... We're trying to get this thing to pass and let's run the test again and look at this, we have a set volume test main, interrupted, one error during collection. So there are certain things that are not quite correct. All tests now pass. So there's a difference here into what is going on and to what is needed. So let's once again run this and confirm that that's the case. It seems that there are package resources requirement and causing issues here. So let's try to go ahead and fix those and try to see if we are going to be able to get those resolved. So being able to kind of like get into trouble, a little bit here, while we're trying to make this refactoring. Well, it's essential to have tests to fall back. It's not a simple matter of just making changes and applying them and say, "Well, hope for the best." Essentially, we want to make sure that this is correctly done, and make sure that we're in good shape to try to solve this situation. All right, so once again, let's see if we can get some things working. And you can see here, well we have now tests that are running and we're having tests that are, well, getting into trouble here because they're taking a very long time. So I think this gives me enough confidence to say that we've made some updates.
>
> **[3:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/challenge-system-wide-code-cleanup?u=76281980&t=190)** We made a little bit of a refactoring, and we have things that are quite working now. Some of these things are errors, a lot of failures we still have, but nothing like what we had in the beginning. We fixed this configuration module or library that we were using in the beginning, and I feel confident that we've moved past that and we have the test to validate that that is in fact something that is not working correctly.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (2)
> **CLI Commands:** make (3), python (2)
> **Versions:** python 3 (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Solution: System-wide code cleanup](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=0)** - [Narrator] Now let's make sure that the changes we've done are going to be good enough. I think we still have lots of failures, and I want to leave these code base in pristine conditions. So, what can we do? Well, let's actually go ahead and run all the tests and tell the agent. Now, the reason why I want to do this with the agent is that it will be able to see, like in this case, you can see running tests, 692 passed, or 692 tests passed out of 705 tests. So there are some failures and some decorator tests exist, "Fail due to an expected exceptions or exit behavior." So if I want to look at them visually, you'll see that's how it looks. And we have this ceph_volume decorator, and it's raising a runtime error. So sometimes, again, [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) will need a little bit of a push. "Go ahead and fix the test_decorators tests." So, we're looking into like some side effects of kind of like the things that have happened before, and we need to make sure that this will actually work. So, it's asking me about MCP server. That sounds fine. It looks like pylance to make sure that there's compliance with [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md). That's fine, it's not necessarily super interesting,
>
> **[1:36](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=96)** but let's take a look. "The model wants to run test in test_decorators." Let's allow that while we wait and see what's going on. So it seems that the assertions are including this line over here. There's an arrow. It looks, this is kind of suspicious. I mean, I don't think that's exactly what I'm looking for. And what I'm going to do here is I'm going to clear and run pytest again. So there's still some failures. Five failed. So we're still seeing some of those failures. But let's take a look if ceph_volume will have a little bit of passing tests. So you can see that there's some updates happening. We can run those tests again and make sure that they're passing. So now they're passing. And the thing, the changes here are that, well, let's take a look here. The root cause, "decorator only writes to standard error and calls sys.exit." Well, that's very bad. This is very bad for tests. Now, when you're raising a system exit like this, if you're trying to run these process with another Python process, like in this case with tests, you'll get into trouble. But what we're trying to do here is just go back and forth and try to get into a cleanup stage. And you can see here that we're trying to, well, make that a little bit safer, right? So now if we run pytest, we'll have less failures. So I think we're getting to a point
>
> **[3:10](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=190)** where things are slightly better. I believe there is problems in the assertions for the help menu here. So we can actually try and fix that as well. "The help menu for some tests like test_main_shows_full_help is failing because the help output is slightly different." Let's take a look and see how we can actually get rid of that and fix it and try to have a clean code base. Like we've done a major refactoring, we've been cleaning up and bringing this code base up to the latest version of Python, which can be, well, very, very daunting. So, it's going to make some changes. it's going to actually make sure that those are passing now. And let's take a look. All right, so now, it passed. So we can try and see if we can get some of these passing. So we are down to only one failed. And that one failed is, "No valid ceph configuration while file was loaded in a getattr right here." And we have a configuration problem. So, there is one last test to fix. "Find it and fix it." Now, we're relying, we're definitely relying a little bit, slightly blindly relying on the output. I'll have to check this thoroughly. But you can see this is more or less the process that you will be expecting.
>
> **[4:41](https://www.linkedin.com/learning/github-copilot-for-system-level-development/solution-system-wide-code-cleanup?u=76281980&t=281)** You're going back and forth between the suggestions, applying the changes, taking a look at the changes as they're happening, and getting a good understanding of what is going on. In this case, it's mocking the method to try to get rid of that problem. That sounds correct to me. And it seems that the tests are now passing. So, if we go here, I don't want to run the test, I want to run the test manually and get to see. Look at these, 697 test passing. So I'm very happy with this. I don't need to allow the test to run anymore because I can see that this is now actually working correctly and I like it. So, I'm happy within a major refactoring. It took quite the effort. I'm happy that the tests are in line and correctly asserting that things are correct and not broken. And I think this should be good now to perhaps submit a pull request and do a more in-depth review. This time, no longer with AI, but having some engineers take a look at the changes and making sure that I didn't introduced anything weird or odd or unexpected.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (1)
> **CLI Commands:** make (7), python (3), find (1)
> **Code Identifiers:** ceph_volume (2), test_decorators (2), test_main_shows_full_help (1)
> **Env Vars:** mcp (1)
> **Analogies:** kind of like (1)
> **Speakers:** - [narrator] (1)

#### [Enforcing styles and constraints](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=0)** - [Presenter] This particular code base has lots of different things that are in place. There's a specific structure, and there are a lot of conventions. And for a new developer, this might be daunting. You can see here, well, this is the lvm.py file, and it's very well-documented, and it's looking actually pretty, pretty good. Now, one of the things is that, you know, for a new developer, this might be overwhelming and certain things might be, well, a little bit too much. In this case, what we want to do here is we want to make sure that certain things are following a specific style, a specific constraint. So, in this case, we have, you know, this is the System D directory. And within the System D directory, there's a main one, there's a main.py, there's a systemctl, and all of these things are, well, in this case, it's running a process and doing certain actions. This looks pretty good. I think, when this was designed, for example, the exceptions right here, you could see they're very well-defined. The errors are pretty clear and there are certain parameters that are happening. So, in this case, we could actually enforce certain styles, but because I don't quite remember every single thing
>
> **[1:38](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=98)** that might be good here, let's ask [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) to help us out. Help me out, in this case, by providing me an analysis on some of the stylistic things that are happening in this code base. I'm going to use the workspace key, and I'm going to say, provide a short stylistic analysis on this code base and highlight the most common patterns you can identify. So, I'm going to run these, and I'm going to let Copilot go and do some investigation on all of these files and start doing some analysis on all of these things that are happening. And with these analysis, what I'm going to be able to do is I'm going to be able to create certain constraints. So say, for example, decorator usage, catches, and needs root, are used for exception handling. That looks pretty good. Logging is handled by [python](../../Skills/Software%20Development/Python%20(Programming%20Language).md)'s logging module. That's also okay. Most command modules, like main.Simple and inventory encapsulate logic clauses with a main method supporting [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) commands and argument parsing. So, what do we do with this, right? What do we do with this information? Well, there is a way that we can enforce this style when we want to actually try to do something similar, extend this, or start augmenting this to follow the same pattern. So say, for example, the object-oriented design and the argument parsing.
>
> **[3:12](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=192)** So, what we can do is we can actually go ahead, and I'm going to copy paste this. I'm going to copy paste, copy in this case, and then I'm going to toggle this to give us a little bit more room. And I am going to go, and within this project, I am going to create a new file. And this file is going to be .[GitHub](../../Skills/Software%20Development/GitHub.md), and this is going to be called copilot instructions.md. So, within that GitHub, Copilot instructions is going to exist. And in here, I am going to paste this right here. So, these copilot instructions are going to help enforce certain stylistic changes. So, say for example, the logging, and it will be a Python's logging module and a decorator usage. Now, this is good and I'm going to try, I'm going to try make something here, specifically, the command modules, right? Like the devices simple main and inventory. So, I am going to, in this case, this is devices. So, you can see here you have lvm and simple. Well, how about we try to create something that says complex, right, or advanced? How about we have simple, we have lvm, and simple has activate, main, scan. So, we are going to see if the copilot instructions
>
> **[4:48](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=288)** that we defined are going to be followed. So, I'm going to type in a new prompt that will create something more advanced. So, I'm saying create an advanced command module in ceph_volume/devices. And I'm not giving any context, right? So, let's see what's going to happen when I do this. Now, when I do this, you will notice that here it says use one reference. What does that reference? That reference is copilot instructions.md. This is great because what is going on here is that it is using this context to actually create that advanced module. If I click on this advanced module, let's take a look at what we have. You will see class Advanced and is using the same parameters, the same, you remember the catches decorator? If you don't know Python, this is fine. It's okay. And you can see here advanced deep scan logic, and all of those things will be respected. But let's be a little bit more intentional. And I'm going to be slightly silly with what I'm going to be doing. So, I'm going to say every single class name should be prefixed with the name of ceph volume. All methods should be prefixed with ceph. This is kind of silly. I understand that this is not necessarily how you would run production, but let's just see what happens. When I go to the advanced, I'm going to go ahead and create a new class, and let's see what actually happens without doing any chat interactions.
>
> **[6:25](https://www.linkedin.com/learning/github-copilot-for-system-level-development/enforcing-styles-and-constraints?u=76281980&t=385)** When I say class and look at this, class CephVolumeAdvanced, like why is this happening? Well, this is happening because I'm saying that every single class name should be prefixed like that, so this looks good. And then I'm going to do a method, and let's see what happens when I do a method here. And I'm going to say, well, it doesn't like to create a method. So, I'm going to do a comment and create a method that parses the message, sure. And returns the first [word](../../Skills/Cloud%20Computing/Microsoft%20Word.md). Sure, why not? Well, in this case, it didn't work correctly because let me see copilot instructions. All methods should be prefixed with ceph. It didn't quite do that. So, we can actually try and remove these, and see if the constraints will work with the chat. Create a method in CephVolumeAdvancedError that returns the message, and let's see what happens. Let's see if that actually, thus, this uses the reference and look at this, it does produce that ceph_get message. So, that is how you could set certain constraints and enforce them with Copilot instructions.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (9), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (3), [GitHub](../../Skills/Software%20Development/GitHub.md) (2), [CLI](../../Skills/Network%20and%20System%20Administration/CLI.md) (1), [Word](../../Skills/Cloud%20Computing/Microsoft%20Word.md) (1)
> **CLI Commands:** python (3), make (2), systemctl (1)
> **File Paths:** instructions.md (2), lvm.py (1), main.py (1)
> **Analogies:** for example (4)
> **UI Navigation:** toggle (1), click on (1), go to (1)
> **Code Identifiers:** ceph_volume (1), ceph_get (1)
> **Tools:** github (2)
> **Env Vars:** cli (1)

#### [Generating guidelines for specific tasks](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=0)** - [Instructor] Generating guidelines for specific tasks is crucial when you want to define more than specific constraints. In this case, I want to do [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) and I want to implement TDD. And in these [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) instructions, I'm going to say, "Be very strict with following TDD, including these steps right here." All right, so create a unit test first, then run the test, and make sure it fails. Right, that's very important: Execute the test suite to ensure that the new test fails. Implement the Function, and then we run the test suite. So, I think this is crucial. It allows the [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) to try to follow the process. And now we're going to see how that is going to work. I'm going to go here to this validator. It sets certain classes and makes sure that these classes will have a call. And that call will allow it to do certain things. And we essentially want to implement the new one, and I will just come up with a new one on the fly. I'm going to create a new prompt here, and I'm going to define what that arg_validator is going to be. All right, create a new validator that requires paths to start with/dev/ which is for devices. So, let's see if it captures the instructions in Copilot instructions. It generates the test first. It reads those, and you can see here that this is actually working.
>
> **[1:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=94)** So now it's asking me to run the tests. Yes, I actually want to run the tests. That would be basically what we need in order to get this working. So we get our read, the tests are failing, which is exactly what we want, and now it's going to do the implementation in arg_validators. it's going to actually make those paths. So it's adding the changes to the validators, and you can see things are now correct. So although it plays the tests in the wrong spot, you can see here that the validators will go into the right place. So, let's actually scroll all the way down and see if the device is actually correct, and we will see, let's take a look: dev_path_validator, which is actually this one. I mean, this is not 100% correct. I would say the placement is odd, right? So that would probably not go there. I would probably put it somewhere right here, but this is more of, like a stylistic thing. Perhaps the linter would actually complain if it knew that it was putting things over there. Now, actually, that type of styling and constraints should be something that you can actually put in Copilot instructions. Now, this is a good way to structure how your guidelines should be. Again, doing this in Copilot instructions is the best way, you don't necessarily need to have just a single type of guideline. You can have multiple ones in multiple different files.
>
> **[3:07](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-guidelines-for-specific-tasks?u=76281980&t=187)** And have you seen that I didn't need to specify that? That reference on Copilot instructions is used automatically. So again, it was able to generate the test. It ran the test, it saw that it was actually failing. It did the implementation, got it to pass. And now, well, that's essentially TDD. Again, these guidelines could be anything from [Web Development](../../Topics/Web%20Development.md) to any sort of development, any sort of factions that you want Copilot to follow. Not only specific guidelines on code generation, but also on processing workflows.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (6), [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (1), [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (1), [Web Development](../../Topics/Web%20Development.md) (1)
> **Code Identifiers:** arg_validator (1), arg_validators (1), dev_path_validator (1)
> **Env Vars:** tdd (3)
> **CLI Commands:** make (2)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### Module 3: Infrastructure as Code (IaC) with Copilot

[↑ Back to Table of Contents](#table-of-contents)

#### [Generating IaC configurations](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=0)** - [Instructor] [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) is very important when you are developing, especially things that are going to end up in a production environment. What we have here is a Ross project that is also an API. So if I open up the read me and I close the file explorer here for a second, it is a simple microservice that will accept [JSON](../../Skills/Web%20Development/JSON.md) string as input and return JSON string with a personal identifiable file for information redacted based on regular expressions stored as JSON. A very simple microservice, it's HTTP. We need to deploy this. How do we do this? Well, I've created a prompt where I'm asking to generate a deployment procedure for this application. I want to use [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md). Ansible is one of the many different frameworks that you can use to create infrastructure as code, which is essentially configuring and deploying, doing the whole process of deployment with code. Since the deployment process doesn't exist yet, only focus on deploying this on a server. Create a single Ansible file possible and keep things as simple as possible while it being effective. So what's happening here is that I'm actually going to ask to keep things simple just so that we can have something that we can review later. So it seems like this was completed. Let's actually take a look and I'm going to toggle, I'm going to click on keep, and I'm going to toggle the chat so that we can take a look.
>
> **[1:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=92)** Ansible is known for being extremely readable and and easy to parse. So let's take a look at what we have here. Deploy redactr application. hosts all, so this is basically saying whatever hosts, I'm going to pass these. It will just deploy to all of them. And then it's going to have certain variables. What are the options here for the user and the directory and what are the tasks? Ensure required packages are installed. So that's pretty good. So [Git](../../Skills/Software%20Development/Git.md), build essential, and cargo, those should be present. Ensure application user exists. So it goes on to list all of the different tasks that are required. In this case, we'll create a systemd service file. So it assumes that it's [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md), that's fine. I would probably end up using Linux as well myself, and it would ensure that the systemd is reloaded so that these service can get started. So this looks pretty good and this gives you like a starting point whenever you are actually trying to get things working. Infrastructure as code can get complicated very easily when you start adding more constraints and more things that you want to actually do. In this case, it is, for example, building the binary and then placing the binary. But before it builds the binary, it's also cloning the repository.
>
> **[3:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/generating-iac-configurations?u=76281980&t=186)** Now, those steps can be probably minimized if you have some other process that is built in the binary before. In this case, this is Ross, so you end up building a binary. You are not supposed to run the code directly, but in some more programming languages, like say for example, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md), that doesn't exist. That process of doing a build doesn't exist. So you'll have to adapt what you see here to the language and the environments that you're working with.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Ansible](../../Skills/Network%20and%20System%20Administration/Ansible.md) (4), [Infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md) (3), [JSON](../../Skills/Web%20Development/JSON.md) (3), [Linux](../../Skills/Network%20and%20System%20Administration/Linux.md) (2), [Git](../../Skills/Software%20Development/Git.md) (1)
> **CLI Commands:** ansible (4), git (1), cargo (1), python (1)
> **Env Vars:** json (3), api (1), http (1)
> **UI Navigation:** toggle (2), click on (1)
> **Definitions:** is a  (2)
> **Analogies:** for example (2)
> **Speakers:** - [instructor] (1)

#### [Creating Dockerfiles with AI](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=0)** - [Instructor] Reading Dockerfiles is also an important thing that you can consider, especially because containers are, well, they're everywhere, and they're very easy to manage and sometimes easier to deploy as well. So in this case, we're with the same [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) project where we're going to build a binary. We don't have a Dockerfile yet, but I'm going to ask to get that going. So I want to containerize this project. To do so, I want to use a distroless approach, which I like. A distroless container, if you've never used it before, is a container that has the least amount of dependencies inside the container. And because this is a binary, this is something that is very appropriate for Rust because there, there's no need for a runtime, as opposed to programming languages like, say for example, [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) or Ruby, where they need the runtime and the runtime has its own system dependency. So it will make the resulting container very small. Make sure the Dockerfile works correctly with the binary being built and then placed in a separate step into the container. So this is a rather simple application, but what I'm asking is slightly complex. We're going to be doing a multi-stage stage Dockerfile, which is with distroless. That is correct. And then it's going to create that. I don't know if I want to go ahead and do this. I want to actually take a look at the Dockerfile. So let's take a look.
>
> **[1:32](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=92)** So it's going to use the Rust container first. That is correct. The builder stage looks accurate. And then the runtime stage is using [gcr.io](https://gcr.io), which is the [Google](../../Glossary/Service/Google.md) Container Registry. Those are... That's the registry that has the distroless containers. And then it's going to copy the resulting binary into that container. And it's going to do the entry point as /redactr, that looks correct. And sure, why not? Let's just try to build and see what happens when I finish building. Let's take a second until this completes. All right, so this had an issue here when it was building. There was, there was a warning found, and then it failed to build of course. So I am going to do the cargo version. So now we're getting into situations where certain things might or might not work correctly. So in this case, it is actually looking forward to try to see exactly what is going on. And of course, my local cargo is a different version. So one of the things that you might want to consider when you are dealing with these situations is that you can use AI, in this case it can help [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) to help you out, figure out what are some of the differences. So this is a pretty crucial situation that we have here when my current system has a much better version, or much newer version of Rust. And in this case, cargo, which is 1.90,
>
> **[3:11](https://www.linkedin.com/learning/github-copilot-for-system-level-development/creating-dockerfiles-with-ai?u=76281980&t=191)** where the slim image for a container is 1.75. So you could use the Dockerfile to use a new Rust image or you could just try the 1.90. So up to you to decide. We're now going to go into the specifics on trying to solve this particular problem, but this actually builds exactly what I want and this, it's something that you would want to, well try to change and specifically, if you want to use the 1.90 slim, that would work there as well. So that's how you would go back and forth, creating a docker file, verifying it works, and making sure that these versions, well, are going to work when you're building your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Rust](../../Skills/Software%20Development/Rust%20(Programming%20Language).md) (5), [Python](../../Skills/Software%20Development/Python%20(Programming%20Language).md) (1), [Google](../../Glossary/Service/Google.md) (1), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (1)
> **CLI Commands:** cargo (3), make (2), python (1), ruby (1), docker (1)
> **Definitions:** is a  (5)
> **Versions:** 1.90 (3), 1.75 (1)
> **URLs:** [gcr.io](https://gcr.io) (1)
> **Analogies:** for example (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Terraform configuration generation](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=0)** - [Instructor] Finally, one of the things that I want to explore is to try to get this containerized app or actually this app that can be containerized because we now have a very good, very solid Docker file here. I want to explore how would I do that with [Terraform](../../Skills/DevOps/Terraform.md). So what I've started with here in my prompt is, I want to explore Terraform to deploy this application in a containerized way. Provide me a setup that will create and push the container to the [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) Container Registry. Now know that I'm seeing Azure Container Registry. It could be any other cloud. It could be very well be [Amazon Web Services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) or perhaps the [Google Cloud platform](../../Skills/Software%20Development/Google%20Cloud%20Platform%20(GCP).md), but additionally create a separate workflow to deploy to the Azure Container Apps service. So one is to actually build the container and the other one is to deploy it. Depending on where you're at with [infrastructure as code](../../Skills/Software%20Development/Infrastructure%20as%20code%20(IaC).md), perhaps building the container is not a very good idea. With Terraform, I want to explore. I want to push a [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) to do something that perhaps might not make that much sense. Now if this is, if this product is in [GitHub](../../Skills/Software%20Development/GitHub.md), my recommendation would be to, for example, do a little bit of work with GitHub actions and try to build a container and push the resulting container into a registry. And then perhaps with something like Terraform to try to get those deployed to an a production environment, like in this case it could be Azure container apps, or if you're in a different cloud provider, well
>
> **[1:34](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=94)** use any of the other destinations as well. Alright, so that seemed like it completed. Let's take a look at what we have. So it added an infra, an infra directory. I'm going to collapse the chat and I'm going to start exploring some of the things that we have. So you can see that it added the provider, in this case it's the Azure RM that looks very good. The resource groups, of course, you will start like depending on the cloud provider using Azure use, uses the resource groups you'll have to edit these to reflect the fact of the things that you want to do and the reality of the environment that you want to choose. In this case, it added the gitignore perhaps maybe that's a good idea, especially because of all of the artifacts that Terraform is going to be creating. But these looks are pretty good. Ah, and look at this, actually, GitHub copilot was smart enough to do the things that I was actually thinking. In this case's, it's going to build and push the container from this repository to the Azure Container Registry, which is actually what I wanted. I've done that in the past and that this is kind of like how you would do this and you would perhaps have to massage this a little bit, but it will get you started pretty fast and pretty easily. So let's just accept these so that we can review them. And this looks pretty good. Look at this, set up terraform.
>
> **[3:06](https://www.linkedin.com/learning/github-copilot-for-system-level-development/teraform-configuratio-generation?u=76281980&t=186)** So it will actually set up a different instance to run Terraform. And I really like this approach. This is exactly how would I envision deploying, building these containers and deploying them into production. But then again, it would require you to pay attention to all of these variables and to make sure that this is going to be correct. Now, one of the things that you can do is to try to run some of these things locally, well, as much as you can, and try to get to a good point, where you can deploy them and put them into GitHub actions. And then try to gather some logs, especially if you're getting into trouble. So there you go. That is how you would generate Terraform resources and variables to try to deploy these to Azure container apps. Depends on the Azure, on the cloud provider that you may want to do, but in this case we picked Azure and I think this is working very well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [Azure](../../Skills/Cloud%20Computing/Microsoft%20Azure.md) (10), [Terraform](../../Skills/DevOps/Terraform.md) (8), [GitHub](../../Skills/Software%20Development/GitHub.md) (3), [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (2), [Amazon web services](../../Skills/Cloud%20Computing/Amazon%20Web%20Services%20(AWS).md) (1)
> **CLI Commands:** terraform (8), make (2), docker (1), rm (1)
> **Tools:** github (5)
> **Prerequisites:** set up (2), setup (1)
> **Analogies:** for example (1), kind of like (1)
> **Speakers:** - [instructor] (1)

#### [Course wrap-up](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-copilot-for-system-level-development/course-wrapup?u=76281980&t=0)** - Okay, so that's a wrap in this [GitHub](../../Skills/Software%20Development/GitHub.md) course on advanced system level development. We saw how you can use [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) and leverage it to do [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md). We then took it to the next level to do some debugging and refactoring on large code bases. It is sometimes a little bit challenging to deal with large code bases when you're using AI tooling. In this specific case, we were using AI [copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) to help us out, and now hopefully these patterns will help you get there. And finally, we saw a little bit of automation. I tend to really like automation. It's something that I teach my students a lot. I think it's the foundation to get better results and more robust results, especially when you're looking forward to get your code into production. So hopefully this course will get you to the next level, and you can apply these patterns, these workflows, to your own code bases and to your own projects and get to the next level when you're applying AI tooling.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [GitHub](../../Skills/Software%20Development/GitHub.md) (1), [GitHub Copilot](../../Skills/Software%20Development/GitHub%20Copilot.md) (1), [Test-Driven Development](../../Skills/Software%20Development/Test-Driven%20Development.md) (1), [Copilot](../../Skills/Cloud%20Computing/Microsoft%20Copilot.md) (1)
> **Tools:** github (2)
> **Speakers:** - okay (1)


## Instructor

- [Pragmatic AI Labs](../../Instructors/Artificial%20Intelligence%20(AI)/Pragmatic%20AI%20Labs.md)

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

### In [GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/GitHub%20Copilot%20Mastery-%20From%20Advanced%20Prompting%20to%20Full-Stack%20AI%20Development.md)
← [Advanced Prompting With Github Copilot](Advanced%20Prompting%20With%20Github%20Copilot.md) | **2 of 4** | [Responsible AI Development with GitHub Copilot](Responsible%20AI%20Development%20with%20GitHub%20Copilot.md) →

## Appears In

- [GitHub Copilot Mastery- From Advanced Prompting to Full-Stack AI Development](../../Paths/Artificial%20Intelligence%20(AI)/Learning%20Paths/GitHub%20Copilot%20Mastery-%20From%20Advanced%20Prompting%20to%20Full-Stack%20AI%20Development.md)

## Related Courses

_Courses sharing skills:_

- [Refactoring with GitHub Copilot](Refactoring%20with%20GitHub%20Copilot.md) — Artificial Intelligence (AI), GitHub Copilot, Code Refactoring
- [Creating a Book Search Engine from Scratch Using Java and GitHub Copilot](Creating%20a%20Book%20Search%20Engine%20from%20Scratch%20Using%20Java%20and%20GitHub%20Copilot.md) — Artificial Intelligence (AI), GitHub Copilot
- [Exploring the Future of Development with GitHub Copilot Workspace](Exploring%20the%20Future%20of%20Development%20with%20GitHub%20Copilot%20Workspace.md) — Artificial Intelligence (AI), GitHub Copilot
- [Practical GitHub Copilot](../Software%20Development/Practical%20GitHub%20Copilot.md) — Artificial Intelligence (AI), GitHub Copilot
- [AI Pair Programming with GitHub Copilot](AI%20Pair%20Programming%20with%20GitHub%20Copilot.md) — Artificial Intelligence (AI), GitHub Copilot

---

[↑ Back to top](#)