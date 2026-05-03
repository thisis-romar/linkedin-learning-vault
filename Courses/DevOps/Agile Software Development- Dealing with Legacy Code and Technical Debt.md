---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: agile-software-development-dealing-with-legacy-code-and-technical-debt
url: "https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt"
duration_minutes: 62
duration: 1h 2m
level: Intermediate
updated: 11/1/2019
learners: 259141
skills:
  - Agile Software Development
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQGQ1fUouicSpg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1572474974966?e=2147483647&amp;v=beta&amp;t=L40ED0kqNMkWbIgzx7VqyITB0tEul2pBNbJmxcwaFIY"
linkedin_topic: DevOps
learning_paths:
  - '[[Getting Started with Agile Software Development]]'
prev_courses:
  - '[[Agile Software Development- Creating an Agile Culture]]'
next_courses:
  - '[[Agile Software Development- Transforming Your Organization]]'
path_nav: '[{"path":"Getting Started with Agile Software Development","position":8,"total":10,"prev":"Agile Software Development- Creating an Agile Culture","next":"Agile Software Development- Transforming Your Organization"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/agile-software-development
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Agile%20Software%20Development-%20Dealing%20with%20Legacy%20Code%20and%20Technical%20Debt.md)

![Agile Software Development: Dealing with Legacy Code and Technical Debt](https://media.licdn.com/dms/image/v2/C4E0DAQGQ1fUouicSpg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1572474974966?e=2147483647&amp;v=beta&amp;t=L40ED0kqNMkWbIgzx7VqyITB0tEul2pBNbJmxcwaFIY)

# Agile Software Development: Dealing with Legacy Code and Technical Debt

> In nearly every organization, developers are forced to grapple with old code that gets in the way of writing new features. Is legacy code limiting your development team's agility? If so, let this course be your guide for how to embrace a legacy system and improve it while paying down technical debt. Instructor Scott Ford explains how to review legacy code and fence in the technical debt by creatin

> [LinkedIn Learning](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt) | 1h 2m | Intermediate | 259K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Embrace the legacy and tackle the debt](#embrace-the-legacy-and-tackle-the-debt)
  - [What you should know](#what-you-should-know)
  - [Definitions](#definitions)
- [**1. Getting Started: Review the Technical Debt**](#1-getting-started-review-the-technical-debt) (5 videos)
  - [Familiarize yourself](#familiarize-yourself)
  - [Remember the prime directive](#remember-the-prime-directive)
  - [Take ownership](#take-ownership)
  - [Set up a dev environment](#set-up-a-dev-environment)
  - [Skim the code](#skim-the-code)
- [**2. Fence in the Technical Debt**](#2-fence-in-the-technical-debt) (6 videos)
  - [Technical debt grows without tests](#technical-debt-grows-without-tests)
  - [Create a test suite (if one is missing)](#create-a-test-suite-if-one-is-missing)
  - [Run the test suite](#run-the-test-suite)
  - [Handle failing tests](#handle-failing-tests)
  - [Build out test coverage](#build-out-test-coverage)
  - [Build dependency behavior tests](#build-dependency-behavior-tests)
- [**3. Improve Your Tools**](#3-improve-your-tools) (3 videos)
  - [Aging tools make technical debt worse](#aging-tools-make-technical-debt-worse)
  - [Introduce dependency management](#introduce-dependency-management)
  - [Update dependencies and tools](#update-dependencies-and-tools)
- [**4. Pay Down Technical Debt**](#4-pay-down-technical-debt) (4 videos)
  - [Remove noise and distractions](#remove-noise-and-distractions)
  - [Read by refactoring](#read-by-refactoring)
  - [Isolate external services and devices](#isolate-external-services-and-devices)
  - [Code like a scientist](#code-like-a-scientist)
- [**5. Keep Technical Debt at Bay**](#5-keep-technical-debt-at-bay) (5 videos)
  - [Technical debt will grow like weeds](#technical-debt-will-grow-like-weeds)
  - [Stay test driven](#stay-test-driven)
  - [Practice refactoring](#practice-refactoring)
  - [Keep code clean](#keep-code-clean)
  - [Monitor code quality](#monitor-code-quality)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Embrace the legacy and tackle the debt](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/embrace-the-legacy-and-tackle-the-debt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/embrace-the-legacy-and-tackle-the-debt?u=76281980&t=0)** - [Scott] Legacy code and technical debt, two topics that go hand in hand. Primarily because the solutions for addressing them are largely the same. You are working with code that was likely abandoned by the people who created it, and it's now your responsibility to take ownership and transform the system into one that will be recognized as modern. This is a significant undertaking, and will likely take you years to achieve. This effort can seem so daunting, that many teams will advocate giving up and just building something brand new from scratch. Building new from scratch is very tempting, but it comes with a ton of other challenges. You can avoid these challenges by embracing the legacy system that you have and to making a commitment to pay down technical debt while making improvements to it. Hi, I'm M. Scott Ford, co-founder of Corgibytes, an organization that works exclusively on legacy code [[Microsoft Products|products]]. Come join me in my [[LinkedIn]] Learning course, on dealing with legacy code and technical debt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Products|Products]] (1), [[LinkedIn]] (1)
> **Definitions:** is a  (1)
> **Speakers:** - [scott] (1)

#### [What you should know](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/what-you-should-know?u=76281980&t=1)** - [Instructor] In order to get the most out of this course, there are a few things that you need to know ahead of time. Code editing techniques in at least one program editor. I'll be working with Visual Studio Code and RubyMine in this course. Experience with at least one modern programming language. This course focuses on Ruby, but the techniques apply to any language. You'll need to know your way around the terminal. Nothing super advanced, but we will be using it from time to time. Intermediate programming experience in at least one language is important, as is being comfortable writing and reading unit tests. If you want to level up your skills in any of these areas, I encourage you to browse through the [[Representational State Transfer (REST)|rest]] of the library. There are many different courses which cover these topics in detail. While not required, you might want to watch my [[Agile Software Development]]: Clean Code Practices course. The material on that course pairs nicely with what is covered in this one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Agile Software Development]] (1)
> **Tools:** visual studio (1), terminal (1)
> **CLI Commands:** ruby (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Definitions](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=1)** - [Instructor] There are two terms that are central to this course, legacy code and technical debt. When you mention legacy code, many people assume that you're talking about really old code that was created decades ago, but that's not always the case. Many newer projects also have the problems that are associated with these older projects. There are many different definitions of legacy code, with the most popular one being by Michael Feathers, which is simply that legacy code is code without tests. I think that's an oversimplification, though. The definition that I like best was developed by my business partner, Andrea Goulet. She says that legacy code is code without sufficient communication artifacts to explain its intent. And while tests are an excellent communication artifact, there are other communication artifacts, such as written documentation, and guess what? The code itself is also a communication artifact. All of these artifacts need to be nurtured to ensure that intent is preserved for the future. The term technical debt was coined by Ward Cunningham. He was attempting to find a metaphor which described the impact of a common practice he was noticing organizations follow. They were cutting corners in a hope that it would help them ship new features faster, but while that may have worked in the short-term, it started to fail because the negative impact of cutting corners started to slow people down. He likened this slowdown to having to pay interest on money that you've borrowed. If you don't pay down the debt, the interest will continue to accumulate and soon, all of your efforts will be focused on making interest payments and very little will go towards paying down the principal.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/definitions?u=76281980&t=95)** This term has become extremely popular in the software industry and many organizations are coming to terms with the amount of technical debt that they need to pay down. Every now and then, a team will decide that the only solution is to just rewrite the software system. This is similar to having to declare bankruptcy to get out from underneath a very high debt load and it similarly does not always work. If it is not paired with a behavior change, there's a very good chance the problem will repeat itself.

> [!info]- Semantic Content
>
> **Analogies:** such as (1), similar to (1)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)


### 1. Getting Started: Review the Technical Debt

[↑ Back to Table of Contents](#table-of-contents)

#### [Familiarize yourself](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=1)** - [Instructor] Suppose you've just been handed a code base that you've never worked on before. You're probably wondering how you should get started and there is no one who can answer any questions that you might have. That's a very intimidating and overwhelming situation, but you can get through it. You just need to start hunting for the information that you need. There are a few things you should look for right away. How to build and run the application in a development environment. You need to know how to build and run a development version of the code that you're working on. You'll need to discover if there are any third-party applications or libraries that you need to install to get things going. The information you'll need is most frequently found in a README file in the project's directory. If there's no README file, or if it doesn't help, then look for other text files in the project's directory tree. Sometimes there will be other text files at the root of a project or in a docs directory. You might also find this information in a project wiki. If you're not able to find any such instructions, then you'll have to figure that out later, but for now, it's best to keep looking around. Another important thing to learn is whether or not the application has a test suite and what you need to do to run it. You'll most likely find this in the same spot that you found the build and run instructions. If not, then you can look for a test directory or any files with test in their name. I find that it's pretty common to inherit a project that doesn't have any tests, so don't get too alarmed if it doesn't have one. You'll also need to know how people use the project. Any documentation that is targeted at an end user will be helpful on your journey.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/familiarize-yourself?u=76281980&t=95)** Sometimes this information will be in the README, but I find that it's more commonly found in user-facing documentation, which might be located in a project wiki, a project website, or a manual that's embedded into the application itself. The previous developers will have made a lot of small decisions along the way, and there's a good chance they've left you some notes about why they made them. Dig around and see if you can find the source of their insights. Some good places to look are in a project wiki, an issue tracker, and the source code repository's commit history. Finally, and very importantly, you need to gain some insight into how and where the application is deployed. I find this most often in a project wiki, but it can sometimes be found in a README or a deployment script. If you weren't able to find any of that information, that's okay. Now you know that you'll need to do some digging and some research to figure out the answers, but it's best to search for the obvious locations first. Be sure to set some time aside to tackle the unknowns that you discover. After looking for these bits of information, you're much smarter about the state of your project than you were before you started. You probably found information that you weren't even looking for, but which might come in handy later.

> [!info]- Semantic Content
>
> **CLI Commands:** find (8)
> **Env Vars:** readme (4)
> **Prerequisites:** you'll need (3), install (1)
> **Best Practices:** it's best to (2)
> **Documentation:** the readme (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)

#### [Remember the prime directive](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=1)** - [Instructor] In the fictional Star Trek universe, the characters have one rule that is more important than all of the others. They call it the Prime Directive. Its details are not all that important for our discussion here, but what is important to know is that in the Star Trek universe, the Prime Directive is taking very seriously and is treated with a lot of respect. Inspired by the idea of having one rule that's more important than all others, Norm Kerth crafted a prime directive for [[Agile Development|Agile]] teams to use during a retrospective. "Regardless of what we discover, "we understand and truly believe "that everyone did the best job they could, "given what they knew at the time, "their skills and abilities, "the resources available, "and the situation at hand." Tackling technical debt and working on legacy code is very similar to a retrospective exercise. You're going to find yourself surrounded by the remnants of past decisions. You're going to look at chunks of code and you're instantly going to think of better ways that it could have been constructed. You're going to look at files and scratch your head, wondering why its contents were written that way. And as you move through the historical artifacts that have been left behind for your discovery, ti's important to not judge the people who used to work on the project. It can be extremely temping to find yourself asking disparaging questions like what idiot wrote this? But your job isn't to point fingers and figure out who is to blame. You're there to make the project better. The best way to do that is to move forward, and moving forward is going to be easiest
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remember-the-prime-directive?u=76281980&t=94)** when you assume that everyone did their best. You're going to do your best, right? Of course you are. No one shows up and intentionally makes poor decisions. They make the best decisions they can, and you will, too. Any time you spend thinking otherwise is a waste of time and energy.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Agile Development|Agile]] (1)
> **CLI Commands:** find (2), make (2)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Speakers:** - [instructor] (1)

#### [Take ownership](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=1)** - [Narrator] When you inherit an older code base, it's important to realize that it's now yours. Any of the bugs that are found are going to be your responsibility to fix. And any new features that need to be added will need to be added by you. It can be tempting to simply complain about all the decisions that were made differently than you would have made them. Instead of doing that, it's much more productive to simply embrace your ownership of the application and take charge of it. Let's consider a simple example. Say you open the project and you find a bunch of files that are formatted differently than you would have formatted them. In some cases, the difference between your preferred formatting and the one in the code is so different that you're finding it hard to read. How should you handle that? One way would be to force yourself to read the code the way it is. This approach will likely slow you down and frustrate you. You might even make mistakes because important, subtle details are hard to spot. You could be tempted to blame these mistakes on the people who came before you and keep suffering through. A better approach is to just reformat the code so that it's easier for you to read. It doesn't matter that your preferences are different than the original developer's preferences, they are not working on the code anymore. You get to make the decisions about how things should be formatted, and it makes the most sense to pick a format that works best for you. This kind of approach works for more than just the simple things like how to format chunks of code. It's important to adopt this way of thinking for other aspects of the application as well.
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/take-ownership?u=76281980&t=94)** You don't like the way a part of the system is architected? You can change it. Don't like the version of a library that's being used? You can upgrade it. Don't like the testing tool that's being used? You can switch to a different one. The important thing to remember is that you are in control. You have the power to make the code better, and you get to decide what that means to you. The project is yours now, own it.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **UI Navigation:** open the (1), switch to (1)
> **Speakers:** - [narrator] (1)

#### [Set up a dev environment](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=1)** - [Instructor] In order to get any work done on your inherited project, you need to set up a development environment. On many projects this can be particularly challenging. Documentation can be missing. Tools can be outdated or hard to install, or might not even be available for the operating system that you're running it on. Numerous third-party libraries may be needed. On some projects, sorting out all of these details can take days or weeks, and this time can be additionally stressful because it's nearly impossible to predict how long it's going to take to sort through it all. This makes it very difficult to set expectations for people who are waiting for improvements to the system that you're working on. Worse still, if another team member joins your project, they are likely to have all of the same problems. So it's important to capture everything that you learn in a way that can be repeated in the future. And when you have to replace your work station that information will come in handy even if you don't add another team member. On many projects, Docker and Docker [[Jetpack Compose|Compose]] are the perfect technologies to help address these issues. Many teams discount using Docker for their development environment because they have no plans to use it in production. However, these tools can yield impressive benefits, even on projects that will never use Docker in production. Let's take a peek at what's required to use Docker and Docker Compose to work on an old Ruby project. Here we're working with version 1.0 of the Sinatra project which was released in March of 2010. Our goal is to be able to run the test suite without any failures
>
> **[1:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=92)** and without having to change any of the library's code. To do that we're using Docker and Docker Compose to construct a development environment that is very similar to what a developer might have used when the code was released. This was prepared ahead of time. But let's walk through everything that was done. We'll start by looking at the Dockerfile. The first line of this file is a FROM statement which specifies the Docker image to use as a starting point. Here, we're using a community-provided image, which is designed to allow active development on projects that require using Ruby 1.9.3. which was the Ruby version available at around the time the code that we're working on was released. Other than specifying a Ruby version to use, the [[Representational State Transfer (REST)|rest]] of this file just ensures that an app directory is created for us to work with. Let's peek at the docker-compose.yaml file. The first line specifies the version of the file format we're working with. The services section is where we specify any services that are needed to run the app that we're working on. Here we only have one service, but if we were working with a database, we'd add a service for launching the database engine. We're specifying that the app service should be built using the Dockerfile in the same directory as the docker-compose.yaml file. The next line down specifies a script to run each time the container starts. Next is the volume configuration. We mirror the current source directory inside the container as the app directory. And the rest of this file configures caches which will be used to install any Ruby gems by bundler.
>
> **[3:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=188)** This will ensure that they don't need to be installed every time the app container starts. Now let's take a peek at the docker-entrypoint.sh file which runs each time the app container is started. This script simply checks to see if the dependencies have been installed and if not, goes ahead and installs them. Now we can get a command line shell inside of our development environment by running docker-compose run app bash. The very first time that this command is run it'll build a docker image using the details that we specified in the Dockerfile. And then it'll start the container and run the entrypoint script which installs all of the gems first. Once all the gems are installed we'll have a command shell inside of an isolated development environment for our application. And if we want to make any changes to how the environment is built we just need to alter the Dockerfile. This creates a form of documentation for our development environment which is executable. And now we can run the test suite and see that everything is passing. One final note, in order to get those tests passing, I had to add extra restrictions on the version numbers that this library is depending on.
>
> **[4:28](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/set-up-a-dev-environment?u=76281980&t=268)** I limited the dependencies to ones that were released at around the same time that this code was. Before doing this, almost all of the tests were failing. This exercise is pretty representative of how to use Docker and Docker Compose for creating a development environment for an older project. And now that there's an isolated container to work within, it will be easier to make improvements to the project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Jetpack Compose|Compose]] (7), [[Representational State Transfer (REST)|Rest]] (2)
> **CLI Commands:** docker (16), ruby (5), make (2)
> **File Paths:** docker-compose.yaml (2), docker-entrypoint.sh (1)
> **Versions:** version 1 (1), ruby 1 (1), 9.3 (1)
> **Prerequisites:** install (2), set up (1)
> **Tools:** command line (1), bash (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)

#### [Skim the code](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=1)** - [Instructor] When you start working on our project it's important to quickly build up a mental model of how the project is structured. What's the basic purpose of the different files? How are they organized? Which part of the system is responsible for interacting with end users? These are all really important questions but most projects have more code in them than one person could possibly read. So how can you quickly gain a basic understanding of the project so that you can become more productive with it? My preferred technique is to skim through files without trying to understand all of the details that I encounter. There are many details that I come across that I won't understand. Instead of trying to gain a complete understanding I make a note about these and then I keep reading. The goal of this process is to open a bunch of different files and look at them. Files can be selected randomly or you can just let your curiosity guide you. You're not going to open up every file but you should try to open up at least one file from each of the different sections of the application. Let's walk through a concrete example by looking at the source code for Sinatra version 1.0 a Ruby web application framework which was released back in 2010. By reading through the file list we can see that there are no .rb files in the project's root directory so all of the code must live in different folders. This project has two of them; lib and test. From those names we can guess at what we might find. The lib directory probably contains the library's implementation and the test directory likely contains the project's test suite.
>
> **[1:32](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=92)** We're making some assumptions here but that's common at this point. As you scan through your own project make a note of the assumptions that you're making so that you can go and validate them later. Let's take a peek at the lib directory. Here we see a folder and a file, sinatra and sinatra.rb. My guess is that sinatra.rb is meant to serve as an interface for all of the files in the Sinatra directory. Let's open that file and see if this assumption is correct. Looks like a valid assumption. Let's expand the sinatra folder. Here we see a few files. The last file that we looked at, sinatra.rb, referenced the main .rb in this folder. So, let's start by taking a peek at it. Skimming through it looks like this file is primarily responsible for handling command line parameters that are specified when a program using Sinatra is run. On line one we see that it's referencing base.rb so let's take a peek at that file. By quickly skimming through we see that base.rb contains several different classes which we can assume are working closely together. This file has over one thousand lines in it so it's likely where we're going to spend the bulk of our time when we're working on this project. The next thing to do would be to continue to skim through the classes in the base.rb file and try to gain an understanding of how they are all working together. After that, a good thing to do would be to examine
>
> **[3:05](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/skim-the-code?u=76281980&t=185)** the different files that are being referenced at the top of base.rb. With this technique we're not trying to gain an exhaustive understanding of the code base, that would take way too long, we're just trying to get a sense of where things are.

> [!info]- Semantic Content
>
> **File Paths:** base.rb (4), sinatra.rb (3)
> **CLI Commands:** make (2), ruby (1), find (1)
> **Versions:** version 1 (1)
> **Tools:** command line (1)
> **Exercise Files:** source code (1)
> **Speakers:** - [instructor] (1)


### 2. Fence in the Technical Debt

[↑ Back to Table of Contents](#table-of-contents)

#### [Technical debt grows without tests](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-grows-without-tests?u=76281980&t=1)** - [Instructor] Automated tests are vitally important for making improvements to our code basis. They act as a welcomed safety net, allowing us to make the changes that are needed to reduce technical debt without having to worry as much about unintended consequences. When we get started on a project that we've inherited, before we try to make any improvements ourselves, we have to evaluate the quality of the system's test suite. This evaluation is likely to uncover several different problems. In an ideal world, every project that we inherit will have a healthy test suite which is easy to run, has only tests that pass, and has a code coverage metric that is sufficiently high for the parts of the application that need to change. However, I frequently encounter systems that have no test suite, have a test suite with no clear way of running it, or have a test suite where some or all of the tests are failing. And rarely do the systems I inherit have test suites with high coverage in the areas that I want to make improvements to. There are a few ways to conquer this problem. We can create test suites if we find one is missing. We can discover how to run an undocumented test suite. We can handle any failing test that we come across. We can build out test coverage if we find it to be lacking. So don't despair if the state of the test suite isn't where you want it to be. You'll get it there.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (2)
> **Speakers:** - [instructor] (1)

#### [Create a test suite (if one is missing)](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=1)** - [Instructor] The first thing that we need to investigate about our project's test suite is whether or not it even has one. If it does have one, great. We'll cover the improvements that we can make to it in further videos. But, if it doesn't have one, then it's important for us to create one. Creating a test suite may sound daunting, but it really doesn't have to be. You might be imaging creating a test suite with a high degree of test coverage, but that's not a reasonable goal when you're just getting started. Instead, we need to focus on creating an automated test suite that contains just one test. Why are we starting so small? Well, there are a lot of small, but important, details that we'll sort out along the way towards creating a test suite with just a single test in it. First, we need to decide which testing framework we're going to use. The language that you're working in might have a bunch of different choices to choose from, which is how it is in the Ruby ecosystem. Other language ecosystems may limit your choice to just one testing framework. Regardless, we need to pick one and get it installed. Second, we need to write a very simple failing test with the testing tool that we selected. I typically make this test validate something that couldn't possibly be true, like asserting that one equals two. That's something that we know is going to fail. I think of this as a hello world program for a test suite, and I start with a failing test because I want to observe what failing tests look like in the testing framework that I've selected. Finally, we can replace our failing test by writing a simple passing test
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/create-a-test-suite-if-one-is-missing?u=76281980&t=94)** that validates a tiny aspect of the program that we're working with. This will ensure that our testing code is able to ask questions about the system we're testing. Once we've done all of that, we'll have a test suite with just a single passing test. But, in creating that super simple test suite, we'll have built a small foundation that we can continue to build upon as we work with the project.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), ruby (1)
> **Prerequisites:** getting started (1)
> **Speakers:** - [instructor] (1)

#### [Run the test suite](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/run-the-test-suite?u=76281980&t=1)** - [Instructor] After you take the time to verify that your system has a test suite, the next step is figuring out how to run it. On some projects, you'll find documentation for how to run the test suite in the project's readme. But if that documentation does not work, or if it's not there at all, then you'll have to do some investigation to figure out how to run the test suite. A good first place to start if you're using an IDE is to try to run the test suite from there. This can often be done by right-clicking on one of the test files and choosing the menu items that mentions running the test file that you've selected. Here we see we got an error, which suggests this IDE does not integrate well with the test suite that's being used. If you're not using an IDE or your IDE does not support running tests directly, then you'll need to find another program to run your tests. Most modern test frameworks give you the option of running tests from the command line. You'll need to find the documentation for the test framework that your project is using to find the exact details. For this project, there's a rake file script that has been set up to run the test, and simply running that command will run the test for us. Getting the test to run is a task that will likely require a fair bit of trial and error. Stick with it and you'll figure it out. And remember, the goal right now isn't to get the test passing, just running. We'll work on getting them passing later.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4)
> **Env Vars:** ide (4)
> **Prerequisites:** you'll need (2), set up (1)
> **Documentation:** the documentation (1)
> **Tools:** command line (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Handle failing tests](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=1)** - [Instructor] It's very common to inherit a project that has a test suite but when you run those tests you discover some of them are failing. It's important that you get the test suite into a state where all of the tests are passing. This will allow you to trust the test suite when you encounter a failure and you can confidently use it as a tool to help you make improvements to the system. There are a couple of ways that you can handle the situation but before we go over them we need to talk about how we're going to treat the failing test that we encounter on the project. It's going to be unclear how old the tests are and it's very possible the test suite has just been ignored by the previous developers. This mean the tests have very likely gotten out of sync with the production code they are evaluating but the system is very likely still being used or else no one would ask you to work on it. And that means the people who use the system are the ultimate authority on whether or not it's working correctly. So in the event of confusion about which is correct, the test code or the production code, we are going to assume the production code is correct. That assumption is going to inform the choices that we are going to make as we tackle cleaning up the failing tests. So how do we go about cleaning up the failing tests? We tackle each one at a time and for each one we follow a series of steps to determine what to do. First, we check to see if a dependency is causing the problem. The version that you have might be too new and is not compatible with the code that's under test. Explore this scenario in detail, especially if the failure is caused by an exception.
>
> **[1:33](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/handle-failing-tests?u=76281980&t=93)** Next, make an attempt to fix the failing test. Sometimes the fix is as simple as changing a constant value that's specified in an assertion statement. In these cases it is fairly clear which changes need to be made to get the test passing again so we make changes until the test is passing. If there was no clarity about how to fix the test then we move onto the next step where we simply just delete the failing test. This situation often comes up when working on a code base that has undergone significant architectural changes since the test was originally written. In that case the test is simply too far out of sync with the production code to provide any meaningful value. Deleting the test is the best thing to do in that situation. We repeat those steps for each failing test until we're left with a test suite that contains only passing tests and then we're ready to make improvements to the application with the confidence that any future failures we see in the test suite will be the result of changes that we've made to the production code.

> [!info]- Semantic Content
>
> **CLI Commands:** make (5)
> **Speakers:** - [instructor] (1)

#### [Build out test coverage](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=1)** - [Instructor] Test coverage is a measure of how much of your production code is executed when your test is run. There is a healthy debate about how much test coverage is enough. But in general, more is better than less or none. While 100% is going to be impossible to reach for many projects. When you go to clean up a chunk of code, it's very important to have high code coverage for that chunk of code. Even if coverage is low across the [[Representational State Transfer (REST)|rest]] of the code base. The trouble is, not all code is easy to test, especially using traditional [[Unit Testing]] techniques. That's where employing a different testing technique can be a big help. One solution that works really well, is the Approval Tests testing library. Approval Tests allow you to capture an artifact of the code's current behavior and then compare that artifact against one that you captured earlier and declared was correct. This is sometimes referred to as the golden master technique. Let's walk through an example of doing that with an older Ruby gem for parsing dates, called Chronic. While this code is written in Ruby, you can find an implementation of the Approval Tests library in almost any language. Here I have a test that I created which uses the Approval's Ruby gem. This test loops over a large set of examples, which I copied and pasted from the Chronic README. In then builds a hash containing the parsed date for each of those examples. Notice that I'm not actually specifying any expected output in this test, I only specify the inputs.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=95)** So let's run this test.
>
> **[1:44](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-out-test-coverage?u=76281980&t=104)** Here we see that this test is failing because it's looking for an approved file which contains the expected output. Let's look at the received file that it create for us. Here we see all of the examples that we specified earlier in the result of running them through our test. To make our test pass, let's do a save as and change the name to include approved instead of received. Now we can run the test and see that it's passing. Let's go back to the code and make a small change to the test to simulate what the output would look like if this test caught a bug. Here we're just changing the date that's used to simulate now. We go back and run the test suite again and here we get an error saying that the received file doesn't match the approved file. If we open up both of them in the text editor, we can see that the reason that they don't match is because the contents in the received file are a year off the contents of the approved file. Which is consistent with the change that we made to simulate the failure. This can be a great technique for adding a lot of coverage really fast.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Unit Testing]] (1)
> **CLI Commands:** ruby (3), make (2), find (1)
> **Definitions:** is a  (2)
> **Env Vars:** readme (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** go to (1)
> **Speakers:** - [instructor] (1)

#### [Build dependency behavior tests](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=1)** - [Narrator] Chances are, your project relies on a lot of external libraries to implement all of the functionality that's contained inside of it. There are libraries for interacting with [[Databases]], reading XML documents, making HTTP, the list goes on. These libraries reduce the amount of code that you have to write in order for your project to do its job. And that's good because it allows your project to focus on the things that it does well. All of these dependencies do have a shadow side though. If you don't keep them up to date, they become their own form of technical debt. You'll likely find yourself in a situation where you need to upgrade one of these dependencies. This often happens when a security vulnerability has been patched. Another common scenario is to have to switch to a different but similar dependency. This can happen when the old dependecy is no longer supported and receiving updates. Changes of this type can be stressful, because you'll find yourself wondering if the project will break when you switch the newer version of the dependecy, if your library is still supported, and it becomes even more stressful when you find yourself in a situation where you have to switch to an entirely different dependency. In these situations, having a lot of tests that wrap your external dependencies can be very helpful. The goal of these tests is not to exhaustively test your external dependencies, instead, these tests are used to test the parts of those dependencies that you consume. And these don't need to be run all the time either. They can be reserved for a part of your build process that only gets run when a dependecy is updated.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/build-dependency-behavior-tests?u=76281980&t=95)** Once you have these tests in place, updating your dependencies will much less stressful. When you find yourself needing to switch to a different dependency, you'll also have a good template for evaluating how much of your system will need to change to adopt the different dependency. These tests could also form a template for helping you build out a facade that sits between your app and the third-party dependecy. That's a good design choice when you want to insulate your application from the dependencies that it's using.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Databases]] (1)
> **CLI Commands:** find (4)
> **Env Vars:** xml (1), http (1)
> **Exercise Files:** template (2)
> **Speakers:** - [narrator] (1)


### 3. Improve Your Tools

[↑ Back to Table of Contents](#table-of-contents)

#### [Aging tools make technical debt worse](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=1)** - [Instructor] Imagine you're making improvements to a house that was built 200 years ago. Before you get started, would you go to the store and buy a bunch of 200-year-old tools? Hand drills and saws? Nails fashioned by the local blacksmith from sheets of iron where you'd be lucky to have two nails that are the exact same shape and size? No, of course not. You would get the most modern tools that you can buy. That likely means drills and saws that are powered by electricity and utilize electric motors that do most of the work, and all of the nails that you'd buy would be the result of mass production and high-precision and machined manufacturing, ensuring that each nail is almost exactly like all the others in the box. So what does all this have to do with software? Well, time and time again when people get started on a project that they've inherited, they hunt down all the old tools that were used by the previous team and then they just keep using them. Language versions that are 10 years out of date, frameworks that are no longer maintained because the companies that created them have ceased operations, integrated develop environments that are incompatible with the latest operating system versions, no automated tests because there were no automated testing frameworks available when the original code was developed. And too many teams just accept this as their reality when they inherit an older project. They keep working day after day on an old code base using old tools and they resent it because they feel the [[Representational State Transfer (REST)|rest]] of the industry is rapidly leaving them behind, making it incredibly hard for them to get another job if their current one gets canceled.
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/aging-tools-make-technical-debt-worse?u=76281980&t=94)** Tolerating old tools is the easiest way to hate working on a project that you've inherited from someone else. So what should you do instead when you find yourself working on a project with aging tools? Go to the [[Hardware]] store and grab some upgrades. Figure out how to make them part of your workflow. Find creative ways to get the older code running in a new context. This can be an incredibly rewarding challenge and the benefits can be astounding. Once you've modernized all of the tooling, you'll have a much easier time researching solutions to problems, you'll stop worrying about your skills becoming stagnant, and you'll be able to take advantage of newer techniques that have been developed to make your life easier. This transition is not always easy and it is very rarely fast. So you may have to continue working on your project in less than ideal conditions. But you should also take the time to chart a course towards using newer tools. The key is to never tolerate the status quo. Constantly find ways to improve your tools, even after you've adopted the latest versions that are available. That creates an opportunity for you to craft new tools that are specific to your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1), [[Hardware]] (1)
> **CLI Commands:** find (3), make (2)
> **UI Navigation:** go to (2)
> **Analogies:** imagine (1)
> **Best Practices:** the key is (1)
> **Speakers:** - [instructor] (1)

#### [Introduce dependency management](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=1)** - [Instructor] On many older projects, third party dependencies are managed in a wide variety of ways. Some projects copy these dependencies directly into the project source tree. Some projects rely on manually running installation packages which might be stored in a team accessible file sharing service, such as a simple FTP server. Other projects simply list the dependencies in a README file, and trust that the people who are working on the project will know where to access the dependencies and how to install them. And worst of all, some projects have no documentation for what third party dependencies are used. Regardless of what state you find the project you're working with, it's best to move towards keeping track of all of the dependencies using some form of [[Dependency Management]] system. These systems exist for almost every programming language environment, and their most basic purpose is to allow you to specify the dependencies that you are using, including the exact version and often a range of versions that are expected to be compatible. Since this information is then used by a script to acquire and install all of these dependencies for you, you now have your dependencies to find in an executable form that is also human readable. Executable documentation is my favorite kind of documentation. Dependency management systems are not just limited to being aware of your projects direct dependencies, but they are also aware of the dependencies of the packages that you're asking for. The system will detect when there are incompatibilities between the packages that are specified
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=94)** and will prevent you from installing them. For example, if your system is designed to work with packages Alpha 2.0 and Beta 1.5, and both of those packages at those versions require different incompatible versions of a package named Delta, then the [[Package Management]] system will detect this for you and alert you that you need to make some adjustment to the version of either package Alpha or package Beta. Examples of these dependency management systems are Bundler for Ruby, pip for [[Python (Programming Language)|Python]], Cargo for [[Rust (Programming Language)|Rust]], [[npm]] or Yarn for [[JavaScript]], Composer for [[PHP]], Buckaroo or Conan for C++, NuGet for C# or any other .NET language, and Maven or [[Gradle]] for [[Java]] and other JVM languages. There are many, many more systems that I have not named. If you find yourself working with a language that doesn't have such a system, I encourage you to consider building one. The community that's working with a language will surely thank you. Moving towards a dependency management system is something that does need to be done with care. Make sure you have enough test coverage so that you feel comfortable with the effort. Once you feel you have enough test coverage, take it slow. One dependency at a time is best. For each one, make sure the dependency manager is configured to use the exact same version of the dependency that's being used by your system already. Run the test suite often and make sure that everything is still passing. If you encounter a stumbling block with a particular dependency, just skip it and proceed with another one.
>
> **[3:08](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/introduce-dependency-management?u=76281980&t=188)** After you take care of all the easy ones, you can loop around and tackle the harder dependencies.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Management]] (4), [[Package Management]] (1), [[Python (Programming Language)|Python]] (1), [[Rust (Programming Language)|Rust]] (1), [[npm]] (1)
> **CLI Commands:** make (4), find (3), ruby (1), pip (1), python (1)
> **Env Vars:** ftp (1), readme (1), php (1), net (1), jvm (1)
> **Prerequisites:** install (2), make sure you have (1)
> **Versions:** 2.0 (1), 1.5 (1)
> **Analogies:** such as (1), for example (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### [Update dependencies and tools](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=1)** - [Instructor] There is no need to tolerate working with old tools on an older project. So don't. There are a couple of things that you need to care of before you dive in and start upgrading though. You need to make sure that your test suite provides enough coverage for you to be comfortable with the effort. If you're not there yet, then you'll need to continue working with the older dependencies until you are. Along with the test coverage, it's also a good idea to make sure that you're third party dependencies are managed by a [[Dependency Management]] system. If you're not there yet, then it's best to make that transition before you start upgrading anything. Assuming that you've got decent test coverage and all of your dependencies are managed by a dependency management system, then you're ready to start upgrading. Probably the best place to start, is with your integrated development environment, or IDE, assuming your project is using one. Upgrade to the newest version of the IDE that's available. IDE manufacturers are constantly shipping out new features and improvements to increase developer productivity and it's very, very rare that a newer version is less capable than an older version. So everything should work out fine. After you've done the IDE upgrade, make sure your project builds and that the test suite is still passing. If you run into a snag, chances are you are not the first person who encountered an issue when upgrading. Do some research and hunt for a work around. Don't just give up because you hit a small snag. If your project isn't using an IDE, do some research to see if there are some language and tool specific integrations for the editor that you're using. Again, these are designed to make you more productive, so it's worth spending a little more time to hunt
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=95)** and do a little bit of research. Once you've got an editing environment that you're happy with, it's time to start upgrading the dependencies that your project is working with. Take these one at a time. Pick one and bump the version number. Run your test suite. If everything passed, then awesome. Check in your progress and move onto the next one. If you hit a snag, skip it, and move on to the next one. The goal is to just update one dependency and run the test suite. This way, if the test suite fails, you'll have a good idea about which dependency is causing the failure. Change too many dependencies at once, and it becomes next to impossible to determine which of your dependencies is causing the failure. You'll typically encounter a situation where multiple dependencies have to be upgraded at the same time because one of them depends on the other. In that situation, you will have to upgrade more than one dependency at once. But save these situations until you've upgraded everything else first. You're also likely to run into a situation where one of the dependencies isn't maintained anymore, and it'll block your progress to upgrade other dependencies. In that situation, there's usually a migration path to a different dependency that performs a similar function. Again, do a little bit of research to find alternatives. And remember that you're probably not the first person to take on such a challenge. Also, having dependency behavior tests will be really helpful if you find yourself having to switch from one dependency to another. Eventually, you will hit the point where everything is up to date. This effort may take months or years, and it's probably not something
>
> **[3:07](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/update-dependencies-and-tools?u=76281980&t=187)** you're going to have enough energy to tackle all at once. That's okay. Slow and steady, you'll get it done eventually. And once you have everything up to date, you'll be much happier. You'll have less stress about security vulnerabilities. You'll be working with the latest versions, so documentation and community help will be easier to find. You won't feel like your skills are stagnating. I could go on. The short version is that it will be worth it when you're done. So stick with it.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Management]] (2)
> **CLI Commands:** make (5), find (3)
> **Env Vars:** ide (5)
> **Best Practices:** it's best to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)


### 4. Pay Down Technical Debt

[↑ Back to Table of Contents](#table-of-contents)

#### [Remove noise and distractions](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=1)** - [Instructor] It's very hard to read a book or write an article when you're surrounded by noise and distractions. They make it hard to concentrate, think, and focus. They slow you down. You can still get the task done, but it's much harder than it needs to be. The same is true when you're working with code. What's even worse, is when the code that you're working on, is the very source of the noise and distraction that you're fighting against. There are several [[Forms]] of noise and distraction that you need to remove with impunity. Don't ask for permission, either. Just do it. Remember, this is your project, and you've made a commitment to take ownership of it. Commented out code should just be deleted as soon as you see it. Finding it is a sign of either a past developer who was in a hurry, or a sign of someone who was afraid that knowledge would get lost. At this point, you have no way of knowing which of these two scenarios created the commented out code. But in either case, it's perfectly safe for you to delete the comment. If it was the first scenario, the developer meant to delete it, but forgot. In the second scenario, the developer was afraid of losing the code. But it's in the source control system, the ultimate arbiter of the code's history. So next time you see commented out code, delete it. Don't think about it, just delete it. Poorly formatted code can be extremely difficult to read. If you come across such code, just reformat it. Chances are you IDE or text editor has the ability to reformat large chunks of code for you. The only caution here is to try to avoid making any logic changes as part of the seem commit, which includes formatting changes.
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=94)** Doing so can make logic changes harder to read. Instead, keep the formatting changes in their own commit. This way, anyone who is curious about your logic changes will be able to see those in their own commit and won't have to decipher the formatting changes at the same time. If you're working with a complied language, it's important to pay attention to compiler warnings. These are designed to alert you to potential mistakes that might exist in the code. Typically, when I start working on an older project, there are hundreds of such warnings. If your project is in that state, sitting down to address all the compiler warnings is not very practical. Instead, make a commitment to address the compiler warnings for any files that you change. Hopefully, you'll eventually hit the point where there are none. And if you aren't able to get there, most compilers provide the option to treat warnings as if they are errors. This ensures that you're not able to ignore the warnings and makes it more likely that they'll be addressed in the future. Similar to compiler warnings, runtime warnings are another source of noise. In dynamic languages, the content of these warnings is very similar to what would be reported in a compiled language. In both complied and dynamic languages, runtime warnings are likely to include information about features that have been deprecated and will be removed in the future. Such messages often have guidance about how best to address them. Since runtime warnings are only generated when your application is running, you'll need to make sure that you're paying attention to them. Sometimes, that will mean storing such messages
>
> **[3:06](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/remove-noise-and-distractions?u=76281980&t=186)** in a place that they can be read later. Luckily, if you've accumulated significant test coverage, the test runners output will likely include warning messages. This will make the runtime warnings easier to spot and confirm that they've been addressed. In general, it's important to remove any noise that you come across. When there's a bunch of noise, it's not feasible to remove it all at once. Instead, just chip away at the noise in the files that you're working on. This will ensure the distractions are getting removed as you're making other important improvements to the project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Forms]] (1)
> **CLI Commands:** make (5)
> **Warnings:** caution (1), warning (1)
> **Env Vars:** ide (1)
> **Definitions:** is a  (1)
> **Analogies:** similar to (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Read by refactoring](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=0)** - [Instructor] Chances are that you've encountered a chunk of code that was so difficult to understand, you didn't even know where to begin. Situations like that are perfect candidates for the read by refactoring technique that was first created by Arlo Belshee. As the name implies, this technique involves employing refactoring to make changes to the code as you're reading it. More specifically, the changes that you're making are very small. And each one is attempting to capture some understanding that you've gained from reading the code. For example, if you encounter a variable with a name that doesn't clearly indicate how it's used, you can study the code a little bit to gain a better understanding of what that variable is doing. And then use the renamed variable refactoring to improve the variables name. Here on the screen, we have a small method from the Ruby Sinatra library. We're specifically looking at version 1.0, which was released back in 2010. This method has a variable named "op." Which might cause some confusion. Is it short for operation or operator? Or is it meant to indicate that it's instance of options parser. I think it's the latter, but I want to make that more clear by renaming the variable to parser. There, that's better. Here's another example. Suppose you're looking at a very complex method and you're trying to understand what's going on. What often happens in these cases, is that the code inside the method is chunked into lines that resemble paragraphs, because of the spacing that's used to separate them from the surrounding code. You can use the extract method refactoring to move that chunk of code into a method. And when you name it method,
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=94)** you attempt to describe what that chunk of code does. The invoke method on the screen is a good example of such a method. On the first line of the method, a call is made, and the result of that call is stored in a variable named res. There [[Representational State Transfer (REST)|rest]] of the method focuses on how that result should be handled. Let's extract some methods to make it more clear what's going on. This first block is dealing with a scenario when res is a string. So we'll extract that into a method called handle string. This message is asking us if we want to replace similar instances in our code. We're going to say no here, 'cause we want to just focus on this area. This next block is handling the scenario when res is an array. So we'll extract that into a method named handle array. This block is dealing with the situation when res is an enumerable. So we'll extract it into handle enumerable. And again we're going to say no. And finally, this block is for when a response is an http status code. So we're going to extract it into a method called handle status code. And again, say no. And finally, we can go ahead and extract this whole chunk into a method. And we'll call it handle result.
>
> **[3:14](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/read-by-refactoring?u=76281980&t=194)** Now the invoke method is a little bit easier to understand because those chunks of code have been replaced with a simple method call. What you're left with, is code that's not only easier to understand, but is imbued with the insights that you've gained while reading through it. This is a fantastic technique for working with older code and I encourage you to practice it as often as you can.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (4), is an  (3), short for (1)
> **CLI Commands:** make (3), ruby (1)
> **Versions:** version 1 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Isolate external services and devices](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=1)** - [Narrator] Many software systems interact with services and devices that the development team has very little control over. These external services and devices likely contribute a very important part of the end user's overall experience. But since they are outside of the development team's control, it's difficult to predict how the software system will [[React.js|react]] in every scenario. This makes testing very difficult, especially because it can be a challenge to force the external system to behave in unpredictable ways. External devices have other issues. Many of them are expensive making it difficult to purchase one for every member of your team. Some of them are very large, an industrial CNC machine is not something that you can have sitting on your desk. Connecting them to a [[Continuous Integration (CI)|continuous integration]] environment can be a challenge, especially if your team wants to use a continuous integration service that's hosted in the cloud. The cloud providers don't publish an address where you have [[Hardware]] shipped and then connected to their servers. Both services and devices also add difficulty when new versions are released. The new version could have behavior changes that are not compatible with assumptions that are built into your app. There are a few things that you can implement which will alleviate most of the problems which arise when working with external services and devices. The first is to try to build a facade, or a part of the software system that handles all communication with the service or device. And this part of your project is the only part that talks to the service or device directly. It's one consistent interface for all of your project to use to communicate with a service or device. Now that you have that separation built,
>
> **[1:34](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/isolate-external-services-and-devices?u=76281980&t=94)** you can start to do some interesting things with it. You can build a simulator for your service or device. Ideally, you'll be able to set this simulator to behave in different ways, behaviors that are difficult to get the actual device to do. And because this simulator is controlled by your team, you can make changes to it as needed. You can also use the simulator for building out tests that run in an isolated environment without needing access to the actual service or device. Now this won't cover all kinds of testing, you'll still want to be able to run some tests, both manual and operated, with an actual service or device. Extra flexibility that you'll gain from having a simulator will be a big benefit in the long run. Similar to simulating the service or device, you can use the interface between your project and the service or device, to simulate your app. This could allow you to write scripts that behave similarly to how your app would behave, allowing you to write tests to verify the functionality of the service or device. This capability will come in handy whenever you need to upgrade to a new version of the service or the next edition of a device. By moving in the direction of these techniques, you'll be unlocking a lot of flexibility for your project. Getting there won't happen overnight, but it will be well worth the effort once you're done.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (2), [[React.js|React]] (1), [[Hardware]] (1)
> **CLI Commands:** make (1)
> **Env Vars:** cnc (1)
> **Analogies:** similar to (1)
> **Speakers:** - [narrator] (1)

#### [Code like a scientist](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=1)** - [Instructor] "I don't always test my code, "but when I do, it's in production." I'm not sure who I should attribute this quote to, but it's always made me laugh. I have worked with people over the years who've shared this attitude. Heck, I was a person with that attitude long, long ago, before I discovered how much I enjoyed testing. But what if this wasn't a joke? What if you could actually test in production? Turns out with the right tools, you can. A few years ago, [[GitHub]] released a Ruby library that they aptly called Scientist. This library lets you craft an experiment to see if a refactoring behaves exactly the same as the code that it's replacing. The experiment is safely conducted in production using production computing resources and production data. The results of running the experiment will let you know whether or not your refactored code has the same behavior as the original that it's meant to replace. And if you're not working with Ruby, you're in luck, because Scientist has been ported to a long list of programming languages, and if it hasn't been ported to the language that you're using, then perhaps you could be the person who creates such a port. The specifics of how Scientist works are pretty simple. The original code is always run. The experimental refactoring is sometimes run. It's only run sometimes so that your application's performance doesn't suffer too much by doing extra work. That's a detail that you can adjust to make the experimental code run more or less often. The result of running the original code is always used, but that result is compared to the result that's returned by the experimental version. If the resulting values are different,
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/code-like-a-scientist?u=76281980&t=95)** then the results are logged. Scientist also provides protection from exceptions being thrown in the experiment. If an exception is detected, it's logged without halting program execution. This can help protect against the accidental introduction of a divide by zero error or something similar. After the experiment has run in production for a sufficient amount of time, you can safely delete the original code and leave just the replacement in its place. Here we have a hypothetical situation. Let's say there's a new I/O library called FAST I/O that we want to use because it's, well, faster. But we want to make sure that it's going to work in all situations in production. This is what such an experiment would look like. The block that's passed to use is the original version and the block that's passed to try is the experimental version. Make sure you don't skip the call to experiment.run, because that's what actually triggers the experiment to run. Scientist is a critical tool to have in your toolbox when you encounter code that is very difficult to test but still needs to be replaced. By introducing experiments that can be safely run in production, you can gain confidence that your refactorings are truly behaving exactly the same as the code they are replacing.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **CLI Commands:** make (3), ruby (2)
> **Env Vars:** fast (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 5. Keep Technical Debt at Bay

[↑ Back to Table of Contents](#table-of-contents)

#### [Technical debt will grow like weeds](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/technical-debt-will-grow-like-weeds?u=76281980&t=1)** - [Narrator] Technical debt is not something that you just address once and stays gone forever. Instead, it's a lot like weeding a garden. After you take the time to remove all of the weeds in your garden, they will not stay gone forever. The weeds will come back. Slowly at first, but then before you know it, your garden will be overrun again. The best way to address this is to spend a little bit of time weeding your garden every day. There are some specific practices that you can make part of your team's daily and weekly repertoire to keep technical debt to a minimum. One of the critical practices for your team to embrace is [[Test-Driven Development]]. You write tests to describe the behavior you want out of your code before you write the code that passes the test, but just writing automated tests isn't enough. A critical component of test-driven development often gets overlooked, that's the refactoring step, and it's next in the set of practices that your team needs to keep on its radar. Your team needs to take the time to simplify their code, using the test as a guide to ensure that you haven't broken anything during the simplification process. Clean [[Coding Practices]] will help give you a set of guidelines to follow when deciding what needs to be refactored. And finally, your team needs to pay attention to your code's quality on a regular basis and employ the right tools to do so. Sticking with these practices and following them on a regular basis will help the technical debt weeds from growing wild and taking over your software garden.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (2), [[Coding Practices]] (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)

#### [Stay test driven](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=1)** - [Instructor] Write a test, watch it fail, make it pass, refactor, repeat. The basics of [[Test-Driven Development]] can be described so simply, but practicing it, especially on an existing project, can be quite a challenge. One of the advantages of following test-driven development is that you are practically guaranteed to end up with code that is easy to test. If your project already has a ton of tests, then it's important to maintain the momentum by continuing to build upon them. The tests that are already there and the tests that you will add form a safety net that helps you ship changes faster with more confidence that no bugs have slipped through the cracks. If you're not already familiar with test-driven development, then take some time to get familiar. There are many different courses right here in the library which cover test-driven development. One of my favorites is Neelam Dwivedi's course, [[Programming Foundations- Test-Driven Development]]. Another way to level up you TDD skills is to practice following TDD in a more controlled setting. There are many different Kata that you can follow which will guide you through a series of simple exercises that are designed to increase your comfort level with test-driven development. There are even some Kata that are designed to simulate working with existing codebases. My favorite is the Gilded Rose Kata, which was originally created by Terry Hughes, but has since been ported to a large number of languages by Emily Bache and friends. While the Gilded Rose Kata is primarily designed for refactoring, it's also a great example codebase for you to practice test-driven development techniques.
>
> **[1:35](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/stay-test-driven?u=76281980&t=95)** Apply your learnings on your own project as often as you can.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Test-Driven Development]] (7), [[Programming Foundations]] (1)
> **Env Vars:** tdd (2)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)

#### [Practice refactoring](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=1)** - [Instructor] When you've inherited a project, you'll find yourself surrounded by things you want to change, designs that you feel could be implemented more concisely, [[Algorithms]] which you feel could be more efficient, chunks of code which should be made more easier to understand. These are just some of the valid reasons that you might have for wanting to make changes to the project without actually changing its behavior, a practice that's more commonly referred to as refactoring. The most important thing to remember when refactoring is that the goal is to leave the behavior exactly the same as you found it. It can be very tempting to start making structure and design changes at the same time that you are introducing new behavior, but these two practices should not be mixed. Instead, either add the new behavior and then refactor or refactor and then add the new behavior. Do not attempt to do both at the same time because, if you introduce a bug, you won't know what has caused it, the new behavior or something that went wrong with the refactoring. By separating these two steps, you can more clearly pinpoint the cause of any failures. There are many great resources for learning more about refactoring here in the library. Richard Kasperowski's "[[Agile Software Development]]: "Refactoring" is a great place to start. Richard's course even covers some techniques which will be useful when working with existing code bases. Another favorite resource of mine is Martin Fowler's book "Refactoring," which has been updated in an impressive second edition. Judiciously applied, refactoring is a technique that will allow you to slowly transform the project you have to work on
>
> **[1:33](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/practice-refactoring?u=76281980&t=93)** into the project that you want to work on. Stick with it and you'll be glad that you did.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Algorithms]] (1), [[Agile Software Development]] (1)
> **CLI Commands:** find (1), make (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Keep code clean](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/keep-code-clean?u=76281980&t=1)** - [Instructor] Code can get messy, real messy. Following clean code practices can help provide some concrete guidance for identifying what needs to be cleaned up. Some of the details include guidelines for how things in your code should be named, how your files should be formatted, and how your tests should be authored. Following these guidelines will help ensure that your team has a consistent way of evaluating when something in your project needs to be refactored. There are many different resources for practicing clean coding guidelines. Here in the library, I've developed another course that focuses on those guidelines and covers how to transform messy code into clean code. If you want more concrete practice, there are some Clean Code Kata which you can try. David Losert has one that is worth checking out. The clean [[Coding Practices]] are the closest to weeding a garden that you're going to find. Each guideline is very small and is targeted at a very specific change. Each one by itself may seem insignificant but when applied broadly, the techniques can transform a code base into a project that is a joy to work on.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Coding Practices]] (1)
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### [Monitor code quality](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/monitor-code-quality?u=76281980&t=0)** - [Instructor] When you're handed an existing project, the amount of work in front of you can be beyond overwhelming. There was so much clean-up work that needs to be done. Not only is it hard to figure out where to start, it can be very difficult to determine whether or not your efforts have made anything better. There are many different code quality tools that can help you figure out where to direct your efforts, and there are other tools that can help you determine if you're making progress over time. The bulk of these are static analysis tools. The different ones are good at specific tasks. There are linters, style cops, code coverage analyzers, tools that compute how long it's going to take to clean up technical debt, and some that alert you about security vulnerabilities in your dependencies. Here in the library, you can take a look at my tools-focused course on code quality to learn about some of the different tools that are available and how you might be able to use them to transform your project into one that your team can be proud of. You may also want to check out the Awesome Static Analysis repository on [[GitHub]]. It's a very impressive list of tools and services for analyzing your code. The tools are broken out by language, and at last count, there were over 35 different languages listed. If you're looking for a code quality tool to use, chances are good that you'll find it there. It's important to maintain your focus on your code's quality over time. For most metrics, an individual value is less important than the trend over time, and focusing on slow and steady improvement over time is more important than trying to fix everything all at once.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **CLI Commands:** find (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/agile-software-development-dealing-with-legacy-code-and-technical-debt/next-steps?u=76281980&t=0)** - [Scott] Thanks for joining me. Now that you've finished this course, here's a resource you can use to go even deeper on this topic. Michael Feathers' book Working Effectively with Legacy Code, is a must read for anyone who is coping with technical debt. Also, it's important to remember to take things slow when you're tackling legacy code and technical debt. The problems that you're facing weren't built quickly, and they're not going to be solved quickly. Feel free to connect with me on [[LinkedIn]]. I'm happy to have conversations on different ways to tackle legacy code and technical debt. I also co-host a podcast called Legacy Code Rocks. Check it out if you find legacy code and technical debt interesting and want to learn more. We also have a newsletter, a [[Slack]] workspace, and a weekly virtual meetup group. Lots of different ways to engage with other people who are passionate about legacy code and paying down technical debt. Thanks a bunch for following along.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (1), [[Slack]] (1)
> **CLI Commands:** find (1)
> **Tools:** slack (1)
> **Definitions:** is a  (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [scott] (1)


## Instructor

- [[M. Scott Ford]]

## Resources

- Exercise files available

## Skills Covered

- Agile Software Development

## Path Context

### In [[Getting Started with Agile Software Development]]
← [[Agile Software Development- Creating an Agile Culture]] | **8 of 10** | [[Agile Software Development- Transforming Your Organization]] →

## Appears In

- [[Getting Started with Agile Software Development]]

## Related Courses

_Courses sharing skills:_

- [[Agile Software Development- Remote Teams (2019)]] — Agile Software Development
- [[Agile Software Development- Kanban for Developers (2019)]] — Agile Software Development
- [[Agile Software Development- Extreme Programming]] — Agile Software Development
- [[Agile Software Development- Scrum for Developers]] — Agile Software Development

---

[↑ Back to top](#)