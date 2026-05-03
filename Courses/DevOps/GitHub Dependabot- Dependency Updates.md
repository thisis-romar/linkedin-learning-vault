---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: github-dependabot-dependency-updates
url: "https://www.linkedin.com/learning/github-dependabot-dependency-updates"
duration_minutes: 51
duration: 51m
level: Intermediate
updated: 1/6/2022
learners: 5671
skills:
  - GitHub
  - Dependency Management
exercise_files: true
github: "https://github.com/LinkedInLearning/dependabot-3009234"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQF-995_A-N8Ag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1641250840162?e=2147483647&amp;v=beta&amp;t=jVN6_WOanS07uW55d2p6jBwSUt9XsLWJO-qZJuq-hT4"
linkedin_topic: DevOps
learning_paths:
  - '[[Essential New Skills in Software Engineering]]'
prev_courses:
  - '[[Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines]]'
next_courses:
  - '[[Software Design- From Requirements to Release]]'
path_nav: '[{"path":"Essential New Skills in Software Engineering","position":3,"total":4,"prev":"Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines","next":"Software Design- From Requirements to Release"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/github
  - skill/dependency-management
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/GitHub%20Dependabot-%20Dependency%20Updates.md)

![GitHub Dependabot: Dependency Updates](https://media.licdn.com/dms/image/v2/C560DAQF-995_A-N8Ag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1641250840162?e=2147483647&amp;v=beta&amp;t=jVN6_WOanS07uW55d2p6jBwSUt9XsLWJO-qZJuq-hT4)

# GitHub Dependabot: Dependency Updates

> Did you know that GitHub has a tool for managing and tracking software dependencies, updates, and security issues? It’s called Dependabot, and it’s become very popular among developers working in front-end and web-app development. In this course, Carlos Rivas shows you how to use Dependabot with the help of a small demonstration project.Learn more about the functionality of Dependabot. Find out ho

> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates) | 51m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (2 videos)
  - [Get started with Dependabot](#get-started-with-dependabot)
  - [What you should know](#what-you-should-know)
- [**1. Dependabot Features and Use Cases**](#1-dependabot-features-and-use-cases) (5 videos)
  - [GitHub and Dependabot features](#github-and-dependabot-features)
  - [Dependabot advanced features](#dependabot-advanced-features)
  - [Ideal uses cases for Dependabot](#ideal-uses-cases-for-dependabot)
  - [Challenge: Dependabot anti-patterns](#challenge-dependabot-anti-patterns)
  - [Solution: Dependabot anti-patterns](#solution-dependabot-anti-patterns)
- [**2. Dependabot and Python**](#2-dependabot-and-python) (5 videos)
  - [Python project architecture](#python-project-architecture)
  - [requirements.txt](#requirementstxt)
  - [dependabot.yml for Python](#dependabotyml-for-python)
  - [Challenge: Dependabot pull requests for Python](#challenge-dependabot-pull-requests-for-python)
  - [Solution: Dependabot pull requests for Python](#solution-dependabot-pull-requests-for-python)
- [**3. Dependabot and PHP**](#3-dependabot-and-php) (5 videos)
  - [PHP project architecture](#php-project-architecture)
  - [composer.json](#composerjson)
  - [dependabot.yml for PHP and branches](#dependabotyml-for-php-and-branches)
  - [Challenge: Dependabot pull requests for PHP](#challenge-dependabot-pull-requests-for-php)
  - [Solution: Dependabot pull requests for PHP](#solution-dependabot-pull-requests-for-php)
- [**4. Dependabot and JavaScript**](#4-dependabot-and-javascript) (5 videos)
  - [JavaScript project architecture](#javascript-project-architecture)
  - [package.json](#packagejson)
  - [dependabot.yml for JavaScript projects](#dependabotyml-for-javascript-projects)
  - [Challenge: Dependabot pull requests for JavaScript](#challenge-dependabot-pull-requests-for-javascript)
  - [Solution: Dependabot pull requests for JavaScript](#solution-dependabot-pull-requests-for-javascript)
- [**Conclusion**](#conclusion) (2 videos)
  - [Links and resources](#links-and-resources)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Get started with Dependabot](https://www.linkedin.com/learning/github-dependabot-dependency-updates/get-started-with-dependabot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/get-started-with-dependabot?u=76281980&t=0)** - [Carlos] If you've done any sort of [[Web Development]] projects or [[Python (Programming Language)|Python]] scripting in recent years, chances are you're using some really cool open source libraries that your code depends on to get the job done. Problem is, once you go pass a handful of these libraries, it can become time consuming to track updates, security patches, and new releases for all the libraries that you may be using. Enter Dependabot. Dependabot is a tool within [[GitHub]] that you can use to manage your dependencies automatically, including updates, patching, and keeping your depository up-to-date. Hi, my name is Carlos and I'm a software engineer, cloud architect, and I'm all about productivity and efficiency when it comes to [[Software Development]] practices. Please join me in my [[LinkedIn]] learning course. Let me show you how to use Dependabot and GitHub to manage dependencies in all your programming projects. Let's go.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Web Development]] (1), [[Python (Programming Language)|Python]] (1), [[Software Development]] (1), [[LinkedIn]] (1)
> **Tools:** github (2)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - [carlos] (1)

#### [What you should know](https://www.linkedin.com/learning/github-dependabot-dependency-updates/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you proceed since we're going to be using [[GitHub]], it's useful to have a prior understanding of [[Version Control]], including branching, ample requests. If you need a refresher there's plenty of information, around [[Git]] and GitHub here in the [[LinkedIn]] Learning Library. Any programming language that you use is totally fine. I'll be doing demos using [[Python (Programming Language)|Python]], PHB, and [[JavaScript]]. But if you're using another language that also happens to be supported by Dependabot such as Ruby or [[Java]], that's okay too. The same principles and benefits will apply to you and your code. And finally, ideally you have a project in progress that you can start moving to GitHub if it's not already there and I'll show you how to enable Dependabot for it. If you don't that's okay too, I'll provide you with my sample code that you can use to test Dependabot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Version Control]] (1), [[Git]] (1), [[LinkedIn]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** git (1), python (1), ruby (1)
> **Tools:** github (3)
> **Env Vars:** phb (1)
> **Exercise Files:** sample code (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Dependabot Features and Use Cases

[↑ Back to Table of Contents](#table-of-contents)

#### [GitHub and Dependabot features](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=0)** [Instructor] If you are watching this course on Dependabot, chances are you already know what [[GitHub]] is. Here's a quick refresh. GitHub provides hosting and [[Version Control]] for [[Software Development]] projects. Locally, in your development environment, you have a tool such as [[Git]] that can help you manage versions and send your code updates to the centralized location, GitHub, in this case. You can use it this way as a safeguard location for your code, or even better, use it as a way to keep a remote team working in sync while developing the same projects. Branching is an important feature of using GitHub, because it allows you to make changes on a copy of the code, called a branch. And in this branch, you can implement bug fixes, release new features, or anything in between. Once this is done, and you're happy with the new code, you merge your code changes back to the main branch. This is a way to keep the main branch sanitized, and that work in progress doesn't have undesired side effects. An even better way to keep the main branch clean is by using GitHub pull request, which is essentially a process that allows your peers to review the changes that you want to merge from your branch to the main branch. This is an opportunity to detect potential issues before they get included in the next release of your software, for example. If the pull request is rejected, nothing gets merged, and you can continue to work on your branch. You may open another pull request when you're ready, and once approved, the branches merge,
>
> **[1:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=94)** and it disappears, and the code changes become an official part of the main branch. This brings us to Dependabot, which is a tool that creates pull requests for your code, in order to keep your dependencies up to date. It keeps track of security patches and new versions of the dependencies that you use in your code and lets you know when these are available to merge into your main branch, by automatically creating the aforementioned pull request. Best of all, Dependabot is really easy to use, you can set it up by including a simple configuration file in your repository, and it supports plenty of languages such as [[Java]], [[Python (Programming Language)|Python]], [[PHP]], and [[JavaScript]]. And it can even update your Docker file if you're into building Docker containers.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (5), [[Version Control]] (1), [[Software Development]] (1), [[Git]] (1), [[Java]] (1)
> **CLI Commands:** docker (2), git (1), make (1), python (1), php (1)
> **Tools:** github (5)
> **Definitions:** is an  (2), is a  (2)
> **Analogies:** such as (2), for example (1)
> **Env Vars:** php (1)
> **Cross-References:** in the next (1)

#### [Dependabot advanced features](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=0)** - [Instructor] Here are a few things that would be considered a little bit more advanced than going beyond the basics. Starting with using the Dependabot [[GitHub]] actions integration. This includes the ability to run automated events, such as tests, assigning team members to review pull requests, downloading additional artifacts, and so on. Dependabot supports the handling of sensitive data, such as passwords and access [[Tokens]] that you may need when downloading files from certain sources, such as your AWS cloud stores, for example. This way you can refer to these secrets from your dependable configuration files, without having to hard code them in there directly. You will be able to securely pull them when needed, and [[Representational State Transfer (REST)|rest]] assured that they won't be stored in your call repository. This is considered an industry standard best practice. Also be aware that you can customize your dependency updates. You can schedule updates for Mondays only for example, because Fridays are too risky for updates when some personnel may already be out for the weekend. You can also have those updates happen only to a specific branch. So if you have three branches, let's call them development, tests, and production, you may want Dependabots pull requests only occur against the development branch. This way. The code update gets promoted to test an production in a more organic and unexpected fashion.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1), [[Tokens]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Analogies:** such as (3), for example (2)
> **CLI Commands:** aws (1)
> **Env Vars:** aws (1)
> **Tools:** github (1)
> **Best Practices:** best practice (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### [Ideal uses cases for Dependabot](https://www.linkedin.com/learning/github-dependabot-dependency-updates/ideal-uses-cases-for-dependabot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/ideal-uses-cases-for-dependabot?u=76281980&t=0)** - [Instructor] So given what we know so far, what's the ideal use case for Dependabot? If you're starting from nothing, this is perfect for you. You will likely use the latest version of your dependencies because you don't have compatibility issues just yet, but perhaps you won't have legacy integration concerns either. So letting Dependabot handle things for you from the get-go is just perfect. Another great use case for Dependabot is when your application is already established and is in production, perhaps, and you're looking to keep an eye on vulnerabilities and fixes for those vulnerabilities that may have been published recently. In this case, you'll reject Dependabot's updates unless they're security related. Finally, if you're a big fan of CI/CD automation and your software has a fairly solid, automated testing suite, you can use Dependabot's updates as a trigger to fire up your test, and if all your tests pass successively, you can go ahead and merge Dependabot's pull requests automatically without fear of your software breaking. In my opinion, this is the level we all want to reach when using Dependabot, a complete testing, merging, and deploying pipeline.

> [!info]- Semantic Content
>
> **CLI Commands:** cd (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Dependabot anti-patterns](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-anti-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-anti-patterns?u=76281980&t=0)** - All right. It's time for your first challenge. We have seen what Dependabot can do. Now let's talk about what we shouldn't do. There are some scenarios when automated [[Dependency Management]] is just not the way to go. So before I tell you, I want you to take a couple of minutes and think of a use case or two when using a tool such as Dependabot is not as useful. So if you're ready to take on this challenge, go ahead and give it a try. It should take you about three minutes to complete. And when you're ready, come back and watch my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Dependency Management]] (1)
> **Analogies:** such as (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Dependabot anti-patterns](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=0)** - [Instructor] Let's talk about dependabot anti-patterns and just to make it clear, let's start with the definition. An anti-pattern is a common response to a recurrent problem that is usually ineffective and risks being highly counterproductive. In other words, when is it not useful to set up this tool? I can quickly think of three possible scenarios. First off, end-of-life libraries. These are software libraries that you're allowed to use but they're simply not updated at all anymore. Examples would be libraries to manage and control industrial equipment or interface with legacy [[Hardware]] that is not supported anymore. This is actually very common in industries that don't keep up pace with changing technology because everything they do works just fine as is for years and sometimes even decades. So a tool for [[Dependency Management]] in this case, wouldn't add any value, at least for this particular software dependency because you'll be forever pinned to a specific version that is never going to change. Another example that you can probably relate to is working in an isolated environment. If you work with highly sensitive data, such as credit card information or medical records, chances are that you, or the dependabot for that matter, just can't go on the internet and download the latest and greatest because there's no outbound connection to the public internet. And this ties in to my next point, which is a highly secure environment. Have you noticed that your personal computer is ready to receive software updates as soon as they become available?
>
> **[1:31](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=91)** And this is not the case for your corporate laptop? The reason why is probably because your updates needs to be approved by your IT department before they get into your work laptop. In some environments, this is going to also be said about [[Software Development]] libraries, that you just can't go online and download whatever you like and just proceed to use it, there's often an approval process to make sure it doesn't have any obvious vulnerabilities and that it doesn't perform any functions outside of this spec, this scope. In this case, using a dependency update tool such as dependabot can certainly help just not as fast because you'll need to wait on approvals for every single update. And that's my solution to this challenge and I hope it helps you determine whether dependabot can add value to your project or not.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Hardware]] (1), [[Dependency Management]] (1), [[Software Development]] (1)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Prerequisites:** set up (1), you'll need (1)
> **Documentation:** spec (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 2. Dependabot and Python

[↑ Back to Table of Contents](#table-of-contents)

#### [Python project architecture](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=0)** - [Instructor] Here we have a small [[Python (Programming Language)|Python]] project that we're going to use as our subject for dependabot. We also have a matching [[GitHub]] repository that we're going to use to keep track of changes to this code, but more on that later when we get to the dependabot dashboard. Anyways, this is an application that uses two external libraries or dependencies to check a couple of blogs to see if they're up to date. If the blogs are up to date, we can choose to visit to read the latest articles or perhaps trigger some automation that will look for keywords. In this particular case, we're using the arrow library, which you can see here on line three and also refer to on line eight as well as line 18. This library what it does is it prints date and time formats in a user-friendly way. So we're going to use that to display when were these blogs last updated. Looking at line number two here, we have the module called htmldate. And what it does is it goes to certain URLs to look for daytime stamps which then we can use to determine if the pages were updated. In this case, we're going to the AWS official blog to see if there's any updates as well as the [[Microsoft Azure]] blog to see if there's updates there as well. This is the code and as you can see there's not much to it. Let's now go to the command prompt and I'll show you the application running. Here we are in the command prompt and I'll execute the code by typing Python getdata.py. And as you can see we get the results that we're looking for which is AWS official blog updated a day ago. This is a really nice way to print a particular date
>
> **[1:36](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=96)** in reference to what date it is right now. NSS Microsoft Azure official blog updated two days ago. Now, I'll type the command pip freeze. And this is going to show us the list of dependencies. Keep in mind that we may not be using all of these dependencies directly in our code, but the dependencies themselves they may have dependencies as well. So for example, we have arrow which we mentioned and is 1.1.0. And we also have htmldate shown here as 0.9.1. The issue at the moment is that these dependencies are stored locally. So before we can tell dependabot to keep track of updates for this libraries, we need a way to tell dependabot and the [[Representational State Transfer (REST)|rest]] of our development team for that matter, which dependencies we're using. And we can do that in Python by using a requirements file.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (3), [[Microsoft Azure]] (2), [[GitHub]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** python (3), aws (2), pip (1)
> **Env Vars:** aws (2), nss (1)
> **Tools:** command prompt (2), github (1)
> **Versions:** 1.1.0 (1), 0.9.1 (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** getdata.py (1)
> **Cross-References:** we mentioned (1)

#### [requirements.txt](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=0)** - [Instructor] Here we are looking at the official user guide for Pip, which is the tool that you use to install additional modules into your [[Python (Programming Language)|Python]] environment. Now, if we scroll down here, it says that you can specify a requirements file, which is nothing more than a list of items to be installed by Pip. Now, if you look here, it says requirements file format. Let's go ahead and click on that. And we're going to scroll all the way down until we see an actual example. Here's the example, essentially, just a list of modules. And I see that we can specify comments. That's really nice, especially if you want to group your modules in a way that makes sense. You can specify comments for that reason, also it's good to specify comments if you want to use a specific version of certain modules, for example, in this case, you are specifying version 0.6.1 of this module. And of course it will be nice to have a comment explaining why you're doing that, in this example, we're using version greater than or equal to 4.1.1 of this module. And my favorite is the one where you can specify anything that is compatible with the current version. So this is great when you still want to receive updates, but you don't want updates that will be very impactful in terms of changes that may break your code. With this information, now let's get back to Visual Studio Code and take a look at our requirements file. Here we are in Visual Studio Code, and as you can see, our file contains arrow and [[HTML]] date in addition to a couple of comments there.
>
> **[1:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=93)** If we go back to our code, you can see that I have the daytime module and is not specified in our requirements txt file simply because that daytime module is part of the standard Python library. So it's not a third party library that we want the panda bot to keep track of. With our module specified here, the [[Representational State Transfer (REST)|rest]] of the development team, or even just yourself from another computer can go ahead and execute something like pip install -R requirements. I'll type it out for you, .txt, and your modules will be installed and you can rest assure your code will compile and execute properly. That's it, the panda bot is not yet enabled and it will not run until we provide one more configuration file. So let's go ahead and do that right now.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Python (Programming Language)|Python]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[HTML]] (1)
> **CLI Commands:** pip (3), python (2)
> **Versions:** version 0 (1), 6.1 (1), 4.1.1 (1)
> **Tools:** visual studio (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Prerequisites:** install (2)
> **Env Vars:** html (1)
> **Cross-References:** go back to (1)

#### [dependabot.yml for Python](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=0)** - [Instructor] At this point in time our code is ready to be checked in to [[GitHub]] for bursting control, but dependabot is not yet enabled and it would be nice to have since we want it to track updates and security patches related to our dependencies. So how do we enable it? Easy. We don't even need to move away from our code editor. Let me show you. I'll go here to the main level of my repository and I'll click on this icon here to create a folder. I'm going to call this folder .github. (keyboard clicks) This is a special folder where you're going to specify certain files that GitHub is going to look for and take actions based on what configuration you have in there. In this case, we want to create a file inside a folder, and it's going to be, right-click, New File, and it's going to be called dependabot.yml. Now this file is going to contain configuration to tell dependabot what to do in relation to this particular project. So let's go line by line, starting with version, (keyboard clicks) in this case two. This is the only version that you can specify at the moment. So don't worry about the number two. And this is related to the dependabot.yml file. This has nothing to do with [[Python (Programming Language)|Python]] version or anything specific to your project. This is a version number for this file format. I also need to specify updates. In this case, this is going to be project specific. So let's start with the very first thing, which is the ecosystem (keyboard clicks) package-ecosystem, in this case pip, so that it knows we're using pip
>
> **[1:36](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=96)** to manage our Python modules. Next up would be directory. And in this case just slash. But this means is in the root directory of this repository is where you're going to be looking for requirements.txt. If you're using some other languages, you may have a self folders where your files are located. In this case, the main folder is just fine. Let's also specify the schedule. In this case is going to be interval daily. (keyboard clicks) If you have a ton of dependencies checking every single day might be too much. So you might want to set this to weekly or monthly, but for our purposes, and our example here, daily is just fine. Now let's talk about allow. (keyboard clicks) We're going to say dependency type is going to be all. (keyboard clicks) What this means is we want to specify that anything and everything inside requirements.txt should be checked by dependabot, not just cell files, but absolutely everything. Let's go ahead and save this file now and let's go ahead and commit our changes. Enabling dependabot, (keyboard clicks) and we're going to hit commit and synchronize. And that's it. With that, we have enabled dependabot. At this time I will go to GitHub and check the page for this particular repository to verify that it's working. But before we do that, allow me to present to you a challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (4), [[Python (Programming Language)|Python]] (2)
> **File Paths:** dependabot.yml (2), requirements.txt (2)
> **CLI Commands:** python (2), pip (2)
> **Tools:** github (4)
> **UI Navigation:** click on (1), right-click (1), go to (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Dependabot pull requests for Python](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-python?u=76281980&t=0)** - All right. It's time for your first hands-on Dependabot challenge. In this challenge, I want you to intentionally specify an old version of one of the modules on requirements.tx and go ahead and commit and push those changes to [[GitHub]]. Once you do this, this should trigger Dependabot to start working. You're going to end up with a brand new pull request created by Dependabot, and I want you to go ahead and merge that pull request into the main branch. You can go the extra mile by pulling that brand new main branch into your local environment and of course, installing the module as recommended by Dependabot. This will be your first end-to-end demo of Dependabot in action. This will take you about 20 minutes to complete. And once you're done with that, you can come back and watch my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (1)
> **Tools:** github (1)
> **Best Practices:** recommended (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Dependabot pull requests for Python](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=0)** - [Instructor] Alright, let me show you my solutions to the challenge. I went ahead and looked for PIP Arrow, trying to suggest, "Hey, do you know this is a PIP library "for [[Python (Programming Language)|Python]] and it's called Arrow." And we got lucky and got the result on the very first line. I'm going to click on it and right away we know that the latest is 1.2.1. And if we go down here and click on released history, we can see all the previously published versions of this particular library. I'm going to choose 1.1.0 just a few months behind the latest version. So let's go ahead and make that change in our code. Let's go to Visual Studio code now. Here we are in our editor and if you remember, all I need to do is ==1.1.0 and save my file. And this is going to force this library to be pinned to this particular version. Of course, Dependabot is not going to like that and it's going to suggest that we update to the latest, which is what we're after in this case. Now I'll go here to [[Version Control]] and stage might change and give it a name say, old version test. I'm going to commit my changes. Now when I press the sync changes button, it's going to send the changes to the main branch and get help. So let's go ahead and do that. Okay, that's completed. Now let's go ahead and check in with [[GitHub]]
>
> **[1:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=93)** and we're going to force Dependabot to detect what just happened. Here we are in GitHub. Let me go ahead and make sure that this is refreshed and ready to go. So you can see requirements.txt has just been updated, that's good. Now I'm going to click on insights and then here where it says dependency graph, you can click on Dependabot. And I'm going to click on requirements.txt and as you can see we have this value here. So now I'll go back inside Dependabot, and I'm going to click here where it says last checked one hour ago. I'm going to click on it and I'm going to click check for updates. Now remember Dependabot is going to run once per day, but as you can see we can force it to run now. Now of course, it's going to notice that change that we did for version 1.1.0 and if it doesn't like it, which that's what we're expecting, we should see a new pull request being created by Dependabot, so now we wait. After waiting a few seconds, we can see that now we have a pull request. Let's take a look at that. Perfect, it says bump arrow from 1.1.0 to 1.2.1, let's go ahead and click there. I'm going to click where it says files change. As you can see the only change that is doing is on requirements.txt and it's changing the version number from 1.1.0 to 1.2.1, that's perfect,
>
> **[3:09](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=189)** that's exactly what we want. So let's go back to pull requests and I'm going to select it and we should have a button here that says merge pull requests. As you can see this branch has no conflicts with the base branch. So we can go ahead and accept this change and click on confirm. And as you can see pull requests successfully merge and close. So if we go back to the main branch here, let's see, refresh to make sure everything is ready to go. I'm going to click on requirements.txt and as you can see now it says 1.2.1. There's one more thing that we need to do and let's go back to our Visual Studio to make sure it reflects the latest change. So let's go ahead and do that. Here we are still reflecting 1.1.0 but I'm going to go ahead and click the refresh button here and just like that now is 1.2.1, perfect. And that's my solution to this challenge. You just saw how arrow got updated by Dependabot and you just experienced the whole workflow end-to-end.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[Python (Programming Language)|Python]] (1), [[Version Control]] (1)
> **Versions:** 1.2.1 (5), 1.1.0 (5), version 1 (1), 1.0 (1)
> **UI Navigation:** click on (8), go to (1)
> **CLI Commands:** make (4), pip (2), python (1)
> **File Paths:** requirements.txt (4)
> **Tools:** visual studio (2), github (2)
> **Cross-References:** go back to (3)
> **Env Vars:** pip (2)


### 3. Dependabot and PHP

[↑ Back to Table of Contents](#table-of-contents)

#### [PHP project architecture](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=0)** - [Lecturer] We're looking at Sculpin here, which is a static website generator. It's essentially a [[PHP]] application that allows you to generate [[HTML]] files from templates that you provide. This way, for example, you can host a blog without the need for a database or dynamic code, which makes it very, very fast. This is an open source project, it's available on [[GitHub]], and it will be the use case for this chapter. I have the GitHub page right here, and we're going to dive a little bit deeper into Dependabot. So we're going to be using this open source project, which is fairly mature. What this means is, it will probably have a very large manifest files with lots of dependencies. And also because of the same reason, there's a risk that we could break something by simply accepting Dependabot's updates. So how do we plan to mitigate this risk? We're going to be using branches precisely for that reason, so that we can make changes in a specific branch and not worry that we may be breaking something that's happening in the main branch. We're going to learn how to configure Dependabot to use a specific branch. So right away, let's just get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (2), [[PHP]] (1), [[HTML]] (1)
> **CLI Commands:** php (1), make (1)
> **Env Vars:** php (1), html (1)
> **Tools:** github (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [lecturer] (1)

#### [composer.json](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=0)** - [Tutor] All right, since we are interested in [[Dependency Management]] for our project, let's go ahead and scroll down to the manifest file. In this case is composer.[[JSON]], and this is the equivalent of the requirements.txt file that we saw in [[Python (Programming Language)|Python]]. If we scroll through here, you'll see there's a require key. And within require, there's quite a bit of dependencies that you can see. For example symphony, [[React.js|react]]/http, some apache modules and several others. So how do we understand this format, this JSON formatted document? Let's go to composer here. This is the official page for composer, which is the dependency management for [[PHP]]. We're going to go ahead and click on documentation. And then here, we'll go to basic usage and you'll see composer.json right away. Let's click on that. And you can tell here that really the requirement is the require key. Once you have the require key in your JSON formatted document, you can go ahead and specify the name of the package that you're interested in, and then a version constraint. This is called a version constraint. In this particular example, we have, 2.0.*, meaning that it could be anything that starts with 2.0. in this case. In fact, I can show you. We'll go to versions and then writing version constraints.
>
> **[1:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=93)** So in this case, for example, I can specify greater than, greater than or equal to, and so on. You can also specify a double pipe, which is an logical OR. And if we go back to our composer.json, you'll see that in use here right away. This is basically saying, I need PHP 8.0 or 7.3, right. Now, what is the symbol? This caret symbol, what does it mean? Let's go back to documentation, and we'll scroll down until we find it here. Here we go, caret version range. What it says is, that you can use it to allow non-breaking updates. So let's say for example, here we have, ^1.2.3, it will accept updates all the way to 2.0, not including 2.0. So in this case, you can get all the bug fixes and security patches and so on without actually affecting functionality. Once you go from 1.0 to 2.0, you are at risk that you may need to change your code to be able to support the new version of any one given package. So let's go back here. As you can see, you also have the option of specifying a require-dev, which you may have certain dependencies that are not ready yet for production, but you may be using in a development environment or development version of your software. With that, let's take a look at the dependent bot configuration for PHP.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (5), [[PHP]] (3), [[Dependency Management]] (2), [[Python (Programming Language)|Python]] (1), [[React.js|React]] (1)
> **CLI Commands:** composer (5), php (3), python (1), apache (1), find (1)
> **Versions:** 2.0 (5), php 8 (1), 7.3 (1), 1.2.3 (1), 1.0 (1)
> **UI Navigation:** go to (3), scroll down (2), click on (2)
> **Env Vars:** php (3), json (2)
> **File Paths:** composer.json (3), requirements.txt (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (2)

#### [dependabot.yml for PHP and branches](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=0)** - [Lecturer] This is our original [[Python (Programming Language)|Python]], dependabot.ymi file and we're going to do a quick conversion to [[PHP]] just for illustration purposes only because this is going to be part of the challenge that's coming up for you. So let's get started right away. As I mentioned, a version never changes, it's always going to be version two, at least at this time. Then we have updates, that line stays the same. But once we get to ecosystem, you may be tempted to type php here, which would be incorrect. What you're looking for is composer. That's the change that you want. The directory is the same, We're going to keep it as the main directory of the repository to look for composer.[[JSON]] in this case. The schedule we're going to leave it as daily, that's fine. And the same for the allow statements. But now, as I mentioned, we want our changes, our pull requests coming from Dependabot to be applied to a specific branch. So, let's go ahead and do that. That's going to be a clause called target branch, target branch, and we're going to call it develop. So keep this name in mind, cause we're going to need it, once we create the branch, it needs to be the exact same name that you see here. I'm just going to call it develop. We're going to add a label as well. Let's call this one composer updates by Dependabot, so that we know it could be any other information such as development. And you can add as many labels as needed
>
> **[1:35](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=95)** to keep things organized. These are the changes that we need for this particular file. Now I just need to save it and commit it to the repo, but like I said. We're not going to do that just yet. So first let's take a look at our challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[Python (Programming Language)|Python]] (1), [[JSON]] (1)
> **CLI Commands:** composer (3), php (2), python (1)
> **File Paths:** composer.json (1)
> **Cross-References:** coming up (1)
> **Analogies:** such as (1)
> **Speakers:** - [lecturer] (1)

#### [Challenge: Dependabot pull requests for PHP](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:06](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=6)** - [Instructor] All right. We're ready for the next challenge, which is going to be a Dependabot branching challenge. Obviously, we can not work directly over the Sculpin [[GitHub]] repository. So I want you to go ahead, and fork a copy into your own GitHub repository, and then perhaps download it to your local environment when you can go ahead, and create a development branch. Once you have your development branch, I want you to go ahead and configure the Dependabot to only work on this particular branch. And then finally, let's go ahead and test this to make sure that it's working properly. A little bit tricky here is that when you configure the Dependabot with the Dependabot file, you may want to do this in your main branch. So keep that in mind. And finally, Dependabot may fire on its own once you check in the changes back to GitHub. So be aware of that. If it doesn't, I want you to go ahead and fire it up manually. This should take you about 30 minutes to complete, and when you're ready, come back and watch my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3)
> **Tools:** github (3)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat instrumental music) (1)

#### [Solution: Dependabot pull requests for PHP](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=0)** - [Instructor] Here we are in the open source [[GitHub]] repo for Sculpin. As you probably know, we cannot make any changes directly here. What we can do is make our own copy and make those changes. So, I'll click on Fork and select my personal GitHub and make a copy of this repository. Once I have it here, I'm going to do a clone operation so I can bring it to my local development environment where I can use Visual Studio Code. I'll click on Code here and select this value. Now, I'll meet you at the command prompt. Here at the command prompt, I'll type [[Git]] clone and the value, of course. Now, we have a local copy. I'll go in there, type cd sculpin and now I'll fire up my code editor. Perfect. Now we're here in Visual Studio Code and we can start making those changes. The first things you'll notice is that we have composer.[[JSON]] in the main directory of the repository. This is important to know because we need that for the Dependabot YAML file, even though there is a source directory, but we don't care about that, we just care of the location of composer.json. I also noticed there is a .github folder here, but there is no dependabot.yml. So, let's go ahead and click on new here. Let's see. No, that's not what we want, because in this case, you see, if I created this file, let's just call it file, it would fall under this particular workflows folder.
>
> **[1:38](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=98)** We don't want that. So, let me go ahead and undo this change by deleting the file. Yes, remove it. We want to make sure we are under GitHub, right? In this case, then we can click new file and then type dependabot.yml, and I can verify by hovering over the file that it is under .github and not under .github workflows. That's perfect. Now, I'll go ahead and paste in the contents of this file. I can see I have a typo in the file name, so I'll fix it. I'll do rename and remove the extra letter here. Perfect. You can tell right away that it is detected as a YAML document and everything seems properly formatted. Let's go over the contents here. The first line to note is that it says composer and not pip or [[PHP]]. The directory is the main of the repo and that's the location of composer.json. We still have a daily checking interval for Dependabot. But this time we added a label just for the sake of having a label there to show what the purpose is and perhaps organization or whatever you need to use labels for in your particular project. We also have the branch, in this case, develop. So, keep that in mind that at this time, we don't have a develop branch. So, we're going to save this file, but we're going to keep it local here for the time being, okay?
>
> **[3:11](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=191)** Let me go ahead and go to Source Control and stage those changes. I'm going to say adding Dependabot YML and commit those changes. Now we have the option of synchronizing those changes, and in fact, I'm going to do it now just to show you what happens. I'll click on synchronize. Again, we're sending this to GitHub which may trigger Dependabot right away, but there is no development branch, so keep that in mind. What we're going to do now is just create that branch. So, create branch and call it develop. So, at this time, we may have Dependabot trying to run and not finding the development branch, which may result in an error. That's not a big deal, we're creating that branch right now. We're not going to make any changes, we just need to have that branch. In fact, it's a good practice to have a development branch and keep it there at all times because that way, you have a distinction between your main branch, which is your production branch or could be your production branch and any changes that you are doing at all times, which need to happen within the development branch. Let's go ahead and publish. That's all we needed to do here in this particular environment. So, let's go back to the GitHub console. All right, back here on GitHub, I'm going to refresh. Let's take a look at the branches first. Let's see what else. I see a branch called develop. Perfect, we know it's here, that's good.
>
> **[4:43](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=283)** Now, let's go back to our main repository here and let me just make sure that we have the files here. I'll click on this .github and verify that we have a dependabot.yml and you can see it right there. So, let's go to Insights and then Dependency graph, I usually see Dependabot right here. Now, it says last checked, two minutes ago. Let's take a look. It says, "Dependabot couldn't find the branch develop." That's great, because that means we checked in this dependabot.yml before we created the branch. That's not a problem. We just need to trigger the check again by clicking here on Check for updates and off it goes. So, we'll see what happens in a few seconds. And of course, after a few moments, here we are, we completed the check with Dependabot. Let's see what it says, because we have this little warning here. It says, "Cannot open any more pull requests." That's okay, the default limit is five, and anyways, you don't want to do any more than five changes all at once, because it can get very tricky, especially if you're doing a ton of updates at the same time, you could end up in a situation where something breaks and you don't know the exact reason why it broke because you have all these changes happening at the same time. So, let's go to Pull requests. Like I said, we're limited to five here, but what that means is because we just pulled this project off of GitHub,
>
> **[6:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=378)** and it may have a ton more version updates, as you can see. So, in this case, we could complete this five one by one slowly and once we're happy with this, Dependabot is going to run again, in this case in 24 hours per the configuration that we did, and when that happens, you may have another batch of five or maybe just three, depending on the necessary updates that are required by the publishers of the dependencies. Anyways, let's go into one of them to make sure that this actually works. So, if I click on any one of these, and I'm going to look at the files that are changed, Dependabot wants to change composer.json and composer.lock. And of course, it's just a little version update here. What I want you to pay attention to is that it says develop here, right? Meaning that if I accept these changes, they're not going to the main branch of the project, which is the desire effect that we wanted. This is absolutely awesome. You can make changes and be [[Representational State Transfer (REST)|rest]] assured that you won't have to deal with this stuff in your main branch. Like I said, it could be your production branch and you don't want changes happening without proper testing. So, we want these changes to go to develop main branch and they can go from there. In fact, let's go ahead and accept one of these and verify that it actually works. I'll go back to Pull requests, I'll select the first one, for example, and go to Merge, and I'm going to confirm the merge. With the merge completed,
>
> **[7:51](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=471)** let's go back to Visual Studio Code and pull the changes, make sure that everything actually worked, okay? So, here we are in the develop branch. I'm going to click on the synchronize button. Perfect, looked like it worked. Let's verify that it did. I'll go to files and I'll go to composer.json, and we should see a version update right here. Sure enough, here you see the 5.3.7 that was reflected in the pull request. That's my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (11), [[JSON]] (5), [[Git]] (1), [[PHP]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** make (10), composer (7), git (1), cd (1), pip (1)
> **Tools:** github (11), visual studio (3), command prompt (2)
> **UI Navigation:** click on (7), go to (7), select the (1)
> **File Paths:** composer.json (5), dependabot.yml (4), composer.lock (1)
> **Cross-References:** go back to (4)
> **Env Vars:** yaml (2), yml (1)
> **Versions:** 5.3.7 (1)


### 4. Dependabot and JavaScript

[↑ Back to Table of Contents](#table-of-contents)

#### [JavaScript project architecture](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=0)** - [Instructor] I've chosen this [[Vue.js]]-based project as our last one for [[JavaScript]] simply because Vue.js is a very, very popular library. By the way, if you want to learn Vue.js, you can do so right here in the [[LinkedIn]] Learning Library, there's amazing courses to learn this particular framework. In our case, of course we're talking about dependabot, and since JavaScript is a front end type of language, you are exposed to security vulnerabilities. Fortunately for us, dependabot can certainly help with those as well. So we're going to start by forking this particular project to our own [[Git]] repo. This is just a 'Hello world' type of application in Vue.js by the way. And once we have it here, I will do the same, I'm going to clone it to my local environment so that we can take a look in Visual Studio Code. Here we are in the console, I'll type 'git clone' is the value. And I will go into the folder now and start Visual Studio Code. And when working with JavaScript projects, you're going to be working with a file call package.[[JSON]] and that's the one that's going to contain your list of dependencies. I'm also noticing here, there is no .gethub folder. So we need to take care of that when we create the dependabot.yml file. But for now let's take a look at package.json, it's format, the documentation, and its official website.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Vue.js]] (4), [[JavaScript]] (3), [[Git]] (2), [[JSON]] (2), [[LinkedIn]] (1)
> **File Paths:** vue.js (4), package.json (2), dependabot.yml (1)
> **CLI Commands:** git (2)
> **Tools:** visual studio (2)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### [package.json](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=0)** - [Instructor] So, if we look up a repository here, it has the package.[[JSON]] file. Let's take a look at that. As you can see the format is very, very similar, if not identical to the one that we use for PHB using composer and here you have dependencies and you have dev dependencies, essentially the same thing. You specify a name of the package and a version number. Even the use of the carrot symbol in the version number is exactly the same where you are accepting updates up to and not including the next major update. So even that is consistent with the format that we use for [[PHP]]. Now, how do we actually use this? Well, you need a tool called [[npm]], stands for a [[Node.js]] package manager. This is essentially a software registry where you're going to find most, if not all [[JavaScript]] libraries and dependencies. So it's a great tool to use. However, if you're going to let Dependabot take care of you, you don't even need to worry about this. Dependabot is going to check with the MPM registry to make sure that you're up to date when it comes to security patches and latest releases.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (1), [[PHP]] (1), [[npm]] (1), [[Node.js]] (1), [[JavaScript]] (1)
> **CLI Commands:** composer (1), php (1), npm (1), node (1), find (1)
> **Env Vars:** json (1), phb (1), php (1), npm (1), mpm (1)
> **File Paths:** package.json (1), node.js (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### [dependabot.yml for JavaScript projects](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=0)** - [Tutor] Now it's time to configure Dependabot for [[JavaScript]]. So let's go ahead and do that. We're looking at package.[[JSON]], and I want you to pay attention to something. We have devDependencies as well as dependencies. So we have this two groups here. So, I just want you to remember that. And right now let's go ahead and go to the top level here. We're going to start by creating a folder and you can probably guess the name by now. It's going to be .[[GitHub]]. And inside this folder, we're going to go right ahead, right click, new file. And it's going to be dependabot.yml, and the same format apply. So, version two, updates, and then let's do package ecosystem. In this case is going to be N-P-M. This is for our JavaScript [[Package Management]]. The directory is going to be the same. It's going to be slash for the root. And we can confirm that by looking here and seeing that we have package.json in the root folder right here. For the schedule, we're going to do interval daily as we have done in the past. And now let me show you a little bit different use of the keyword Allow. I'll just type allow, and I'll try, let's see, dependency type. And I'll choose production. Let me explain what that means. I'll go to package.json here,
>
> **[1:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=94)** and since we have a group here on line three that says dependencies and another group on line 14 that says devDependencies, Dependabot will recognize that and it will understand that the one above is a production one and the other one is for development purposes. So even if you don't have a separate development branch, Dependabot is smart enough to know that you have these two groups here and it would allow you to manage them individually. So let's get back to our file. So in this dependency type, production, it will only touch, or scan rather, the ones that are in the first group or the production dependency group. Another key [[Microsoft Word|word]] for you is the key word Ignore, which is used very similar to allow. In this case, I will type the dependency name, and say, for example, Axios. Let's go back to package.json. So we have this library here. And for some reason, let's just say that I'm using a legacy version of this library. I don't want to use any other version. It needs to be this specific version. Of course I would not have the caret symbol here. I would just have the straight up version number of that. And like I said, I don't want Dependabot to let me know of any updates or changes to this, it will never change, so I want Dependabot to ignore it. So the way you do that is by specifying a name directly here in the Ignore clause.
>
> **[3:11](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=191)** With that change complete, now we can hit safe, and I'll go here to source control, stage the changes, and I'll type a comment. Adding Dependabot yml. I'll click on comment. I can synchronize those changes back to [[Git]] Hub. And that's how you enable package management for JavaScript using the Dependabot.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (4), [[JavaScript]] (3), [[Package Management]] (2), [[Microsoft Word|Word]] (2), [[GitHub]] (1)
> **File Paths:** package.json (4), dependabot.yml (1)
> **UI Navigation:** go to (2), click on (1)
> **Code Identifiers:** devdependencies (2)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** git (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)

#### [Challenge: Dependabot pull requests for JavaScript](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980&t=0)** - [Instructor] All right, it's time for your final's challenge of this dependabot course. What we're going to do now is we're going to expand dependabot.yml. We're going to do that by adding an additional ecosystem to an existing file. So in this case what we're trying to simulate is that you have a project that uses [[JavaScript]] for the front end, and let's say you have [[PHP]] or [[Python (Programming Language)|Python]] for the backend. And in this case you're going to configure both using a single dependabot.yml file. Now, if you add let's say PHP, you may need an additional composer.[[JSON]] file so that dependabot doesn't error out when trying to look for this file. Another thing we're going to try here is the allow and ignore commands of the dependabot.yml file. This is to simulate that one of your dependencies is a legacy dependency that you're not interested in updating, is never going to change, is always going to be the same, so you want dependabot to leave it alone, and you can do that with ignore commands. So I want you to try that change as well. It'll take you about 15 minutes to complete this challenge. Go ahead and give it a try and when you're done, come back and watch my solution.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[PHP]] (2), [[JavaScript]] (1), [[Python (Programming Language)|Python]] (1), [[JSON]] (1)
> **File Paths:** dependabot.yml (3), composer.json (1)
> **CLI Commands:** php (2), python (1), composer (1)
> **Env Vars:** php (2)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Dependabot pull requests for JavaScript](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=0)** - It's time to implement the solution to this challenge. Let me show you. So we have this package.[[JSON]], which contains [[JavaScript]] dependencies, but we also want to extend our dependabot.yml. Let's say that we want to use [[PHP]] as the backend and JavaScript as the front end for our application while we want to just keep it to a single file. So let's take a look. Of course, as we mentioned, we already have the allow and ignore, which is part of the challenge, but you already saw how to do this. So you can implement this in your own solution. But you know, this is perfect, it already works as it is for JavaScript. How do I extend it? Well, you already have the version clause and you have the updates clause. So what you need to do is add an additional ecosystem. So I'll type package-ecosystem and we'll go back to PHP. So it's going to be composer. I'll add directory. So as you can see, nothing really changes. You're just extending the dependabot.yml configuration file. Of course we need the schedule. Please, note that it will not reuse this schedule that you have above. You need to specify it here as well. So interval. Daily. So at this time, this is pretty much done. You already extended this. However, there's an issue now. Once you check this in, dependabot is going to start checking for a composer.json file as well,
>
> **[1:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=94)** because you just said, "Hey, we're managing not only JavaScript packages, but now we have the PHP as well. So how do we fix it?" Well, we can go here to the main folder with a right click and add a new file. We're going to call it composer.json, just login any other PHP based project. So now in this case, let's go ahead and paste in the value here. This is essentially the same composer.json that we use in the previous project. Of course, I trim it down to the bare minimum just to show PHP 8.0 or 7.3. Essentially, just to avoid any errors when dependabot goes looking for a composer.json file that may not be there, so now we can guarantee that it's going to be there. So we have this file. I'm going to go ahead and save it. Make sure that we save our changes here as well. Now we'll go to source control. Stage our changes. And then add a comment, extending dependabot to include PHP. We're going to commit and synchronize our changes. Let's go now to [[GitHub]] to verify that it worked. Here we are in GitHub, and as you can see, it says one minute ago, click on GitHub. We'll see that's our dependabot.yml with our commit message. And now let's go to insights. Click on dependency graph and dependabot.
>
> **[3:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=188)** And as you can see, we have package.json with the [[npm]] logo there and composer.json with a PHP logo there. So as you can see, dependendabot has no problem if you're using [[Python (Programming Language)|Python]], [[Java]], JavaScript, it doesn't matter the language, or a combination of them, you can manage all of those dependencies from a single location. So please do that. This is the best tool you can have, especially, if you have a ton of dependencies to manage. And that's my solution to this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JSON]] (7), [[PHP]] (7), [[JavaScript]] (5), [[GitHub]] (3), [[npm]] (1)
> **CLI Commands:** php (7), composer (6), make (1), npm (1), python (1)
> **File Paths:** composer.json (5), dependabot.yml (3), package.json (2)
> **Env Vars:** php (7), npm (1)
> **UI Navigation:** go to (2), click on (2)
> **Tools:** github (3)
> **Versions:** php 8 (1), 7.3 (1)
> **Cross-References:** we mentioned (1), go back to (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Links and resources](https://www.linkedin.com/learning/github-dependabot-dependency-updates/links-and-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/links-and-resources?u=76281980&t=0)** - Real quick before we go, let me give you some resources that are useful to me and you'll likely find useful as well. First of all, the official documentation for our [[GitHub]] Dependabot is very user-friendly and to the point, so I highly recommend it. And of course, if you're still learning about GitHub, GitHub actions, [[Git]] in general and [[Continuous Integration (CI)|continuous integration]], the [[LinkedIn]] learning library is just an amazing resource. If you need to get specifics about the needs of a particular computer language on Dependabot, here's a short list based on the code that we just went through. The user guide to [[Python (Programming Language)|Python]]'s PIP package manager has a link to requirements.txt, where it explains way more than you'll ever need to know about [[Dependency Management]] and versioning using PIP. The same can be said about package.[[JSON]], which you can find in the [[npm]] official documentation page. And finally, since we also played with [[PHP]], here's your link to PHPs composer documentation.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Git]] (1), [[Continuous Integration (CI)|Continuous integration]] (1), [[LinkedIn]] (1), [[Python (Programming Language)|Python]] (1)
> **CLI Commands:** find (2), pip (2), git (1), python (1), npm (1)
> **Env Vars:** pip (2), npm (1), php (1)
> **Tools:** github (3)
> **File Paths:** requirements.txt (1), package.json (1)
> **Speakers:** - real (1)

#### [Next steps](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980&t=0)** - [Instructor] We have reached the end of this course, and here are my recommendations for you as your next steps. First and foremost, you're going to need practice, patience, and more practice. Where you're using Dependabot for real projects, the updates and pull requests will come, and you'll see the benefits of having this automation in place. However, just remember to be patient because your dependencies will not get as many updates as you think they will. But I promise you, the best tools are the one that just work, and you don't have to think about them, and Dependabot is one of those tools. Dependabot plays really well, we get top actions. So if you're an advanced user of [[GitHub]], and you are comfortable with GitHub Actions, consider integrating these two tools. You can learn more about GitHub Actions in the [[LinkedIn]] Learning Library. Finally, should you have questions or feedback, please use the Q&A section of this course, and I'll be glad to help you out. I hope this course has been helpful to you, and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[LinkedIn]] (1)
> **Tools:** github (3)
> **Cross-References:** in the next (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Carlos Rivas]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/dependabot-3009234)

## Skills Covered

- GitHub
- Dependency Management

## Path Context

### In [[Essential New Skills in Software Engineering]]
← [[Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines]] | **3 of 4** | [[Software Design- From Requirements to Release]] →

## Appears In

- [[Essential New Skills in Software Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Practical GitHub Code Search]] — GitHub
- [[Practical GitHub Project Management and Collaboration]] — GitHub
- [[Creating a Book Search Engine from Scratch Using Java and GitHub Copilot]] — GitHub
- [[Benefits of GitHub Community]] — GitHub
- [[GitHub Foundations- Privacy, Security, and Administration]] — GitHub

---

[↑ Back to top](#)