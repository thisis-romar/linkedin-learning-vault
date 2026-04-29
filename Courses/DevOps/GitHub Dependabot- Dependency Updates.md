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
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/GitHub%20Dependabot-%20Dependency%20Updates.md)

![GitHub Dependabot: Dependency Updates](https://media.licdn.com/dms/image/v2/C560DAQF-995_A-N8Ag/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1641250840162?e=2147483647&amp;v=beta&amp;t=jVN6_WOanS07uW55d2p6jBwSUt9XsLWJO-qZJuq-hT4)

# GitHub Dependabot: Dependency Updates

> Did you know that GitHub has a tool for managing and tracking software dependencies, updates, and security issues? It’s called Dependabot, and it’s become very popular among developers working in front-end and web-app development. In this course, Carlos Rivas shows you how to use Dependabot with the help of a small demonstration project.Learn more about the functionality of Dependabot. Find out ho

> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates) | 51m | Intermediate | 6K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (2 videos)
- **[[#1. Dependabot Features and Use Cases]]** (5 videos)
- **[[#2. Dependabot and Python]]** (5 videos)
- **[[#3. Dependabot and PHP]]** (5 videos)
- **[[#4. Dependabot and JavaScript]]** (5 videos)
- **[[#Conclusion]]** (2 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Get started with Dependabot
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/get-started-with-dependabot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/get-started-with-dependabot?u=76281980&t=0)** - [Carlos] If you've done any sort of web development projects or Python scripting in recent years, chances are you're using some really cool open source libraries that your code depends on to get the job done.
>
> **[0:11](https://www.linkedin.com/learning/github-dependabot-dependency-updates/get-started-with-dependabot?u=76281980&t=11)** Problem is, once you go pass a handful of these libraries, it can become time consuming to track updates, security patches, and new releases for all the libraries that you may be using.
>
> **[0:21](https://www.linkedin.com/learning/github-dependabot-dependency-updates/get-started-with-dependabot?u=76281980&t=21)** Enter Dependabot.
>
> **[0:23](https://www.linkedin.com/learning/github-dependabot-dependency-updates/get-started-with-dependabot?u=76281980&t=23)** Dependabot is a tool within GitHub that you can use to manage your dependencies automatically, including updates, patching, and keeping your depository up-to-date.
>
> **[0:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/get-started-with-dependabot?u=76281980&t=33)** Hi, my name is Carlos and I'm a software engineer, cloud architect, and I'm all about productivity and efficiency when it comes to software development practices.
>
> **[0:41](https://www.linkedin.com/learning/github-dependabot-dependency-updates/get-started-with-dependabot?u=76281980&t=41)** Please join me in my LinkedIn learning course.
>
> **[0:43](https://www.linkedin.com/learning/github-dependabot-dependency-updates/get-started-with-dependabot?u=76281980&t=43)** Let me show you how to use Dependabot and GitHub to manage dependencies in all your programming projects.
>
> **[0:50](https://www.linkedin.com/learning/github-dependabot-dependency-updates/get-started-with-dependabot?u=76281980&t=50)** Let's go.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (1)
> **Tools:** github (2)
> **CLI Commands:** python (1)
> **Definitions:** is a  (1)
> **Speakers:** - [carlos] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/what-you-should-know?u=76281980&t=0)** - [Instructor] Before you proceed since we're going to be using GitHub, it's useful to have a prior understanding of version control, including branching, ample requests.
>
> **[0:09](https://www.linkedin.com/learning/github-dependabot-dependency-updates/what-you-should-know?u=76281980&t=9)** If you need a refresher there's plenty of information, around Git and GitHub here in the LinkedIn Learning Library.
>
> **[0:15](https://www.linkedin.com/learning/github-dependabot-dependency-updates/what-you-should-know?u=76281980&t=15)** Any programming language that you use is totally fine.
>
> **[0:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/what-you-should-know?u=76281980&t=18)** I'll be doing demos using Python, PHB, and JavaScript.
>
> **[0:22](https://www.linkedin.com/learning/github-dependabot-dependency-updates/what-you-should-know?u=76281980&t=22)** But if you're using another language that also happens to be supported by Dependabot such as Ruby or Java, that's okay too.
>
> **[0:29](https://www.linkedin.com/learning/github-dependabot-dependency-updates/what-you-should-know?u=76281980&t=29)** The same principles and benefits will apply to you and your code.
>
> **[0:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/what-you-should-know?u=76281980&t=33)** And finally, ideally you have a project in progress that you can start moving to GitHub if it's not already there and I'll show you how to enable Dependabot for it.
>
> **[0:41](https://www.linkedin.com/learning/github-dependabot-dependency-updates/what-you-should-know?u=76281980&t=41)** If you don't that's okay too, I'll provide you with my sample code that you can use to test Dependabot.

> [!info]- Semantic Content
>
> **CLI Commands:** git (1), python (1), ruby (1)
> **Tools:** github (3)
> **Code Keywords:** finally, (1)
> **Env Vars:** phb (1)
> **Exercise Files:** sample code (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)


### 1. Dependabot Features and Use Cases

> [[#Table of Contents|↑ Back to Table of Contents]]

#### GitHub and Dependabot features
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=0)** [Instructor] If you are watching this course on Dependabot, chances are you already know what GitHub is.
>
> **[0:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=5)** Here's a quick refresh.
>
> **[0:07](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=7)** GitHub provides hosting and version control for software development projects.
>
> **[0:12](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=12)** Locally, in your development environment, you have a tool such as Git that can help you manage versions and send your code updates to the centralized location, GitHub, in this case.
>
> **[0:22](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=22)** You can use it this way as a safeguard location for your code, or even better, use it as a way to keep a remote team working in sync while developing the same projects.
>
> **[0:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=34)** Branching is an important feature of using GitHub, because it allows you to make changes on a copy of the code, called a branch.
>
> **[0:42](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=42)** And in this branch, you can implement bug fixes, release new features, or anything in between.
>
> **[0:48](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=48)** Once this is done, and you're happy with the new code, you merge your code changes back to the main branch.
>
> **[0:55](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=55)** This is a way to keep the main branch sanitized, and that work in progress doesn't have undesired side effects.
>
> **[1:02](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=62)** An even better way to keep the main branch clean is by using GitHub pull request, which is essentially a process that allows your peers to review the changes that you want to merge from your branch to the main branch.
>
> **[1:16](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=76)** This is an opportunity to detect potential issues before they get included in the next release of your software, for example.
>
> **[1:23](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=83)** If the pull request is rejected, nothing gets merged, and you can continue to work on your branch.
>
> **[1:29](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=89)** You may open another pull request when you're ready, and once approved, the branches merge, and it disappears, and the code changes become an official part of the main branch.
>
> **[1:39](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=99)** This brings us to Dependabot, which is a tool that creates pull requests for your code, in order to keep your dependencies up to date.
>
> **[1:46](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=106)** It keeps track of security patches and new versions of the dependencies that you use in your code and lets you know when these are available to merge into your main branch, by automatically creating the aforementioned pull request.
>
> **[1:59](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=119)** Best of all, Dependabot is really easy to use, you can set it up by including a simple configuration file in your repository, and it supports plenty of languages such as Java, Python, PHP, and JavaScript.
>
> **[2:11](https://www.linkedin.com/learning/github-dependabot-dependency-updates/github-and-dependabot-features?u=76281980&t=131)** And it can even update your Docker file if you're into building Docker containers.

> [!info]- Semantic Content
>
> **CLI Commands:** docker (2), git (1), make (1), python (1), php (1)
> **Tools:** github (5)
> **Definitions:** is an  (2), is a  (2)
> **Analogies:** such as (2), for example (1)
> **Code Keywords:** case. (1), continue (1)
> **Env Vars:** php (1)
> **Cross-References:** in the next (1)

#### Dependabot advanced features
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=0)** - [Instructor] Here are a few things that would be considered a little bit more advanced than going beyond the basics.
>
> **[0:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=5)** Starting with using the Dependabot GitHub actions integration.
>
> **[0:09](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=9)** This includes the ability to run automated events, such as tests, assigning team members to review pull requests, downloading additional artifacts, and so on.
>
> **[0:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=18)** Dependabot supports the handling of sensitive data, such as passwords and access tokens that you may need when downloading files from certain sources, such as your AWS cloud stores, for example.
>
> **[0:30](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=30)** This way you can refer to these secrets from your dependable configuration files, without having to hard code them in there directly.
>
> **[0:37](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=37)** You will be able to securely pull them when needed, and rest assured that they won't be stored in your call repository.
>
> **[0:43](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=43)** This is considered an industry standard best practice.
>
> **[0:46](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=46)** Also be aware that you can customize your dependency updates.
>
> **[0:50](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=50)** You can schedule updates for Mondays only for example, because Fridays are too risky for updates when some personnel may already be out for the weekend.
>
> **[0:59](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=59)** You can also have those updates happen only to a specific branch.
>
> **[1:03](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=63)** So if you have three branches, let's call them development, tests, and production, you may want Dependabots pull requests only occur against the development branch.
>
> **[1:13](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=73)** This way.
>
> **[1:14](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-advanced-features?u=76281980&t=74)** The code update gets promoted to test an production in a more organic and unexpected fashion.

> [!info]- Semantic Content
>
> **Analogies:** such as (3), for example (2)
> **CLI Commands:** aws (1)
> **Code Keywords:** let (1)
> **Env Vars:** aws (1)
> **Tools:** github (1)
> **Best Practices:** best practice (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)

#### Ideal uses cases for Dependabot
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/ideal-uses-cases-for-dependabot?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/ideal-uses-cases-for-dependabot?u=76281980&t=0)** - [Instructor] So given what we know so far, what's the ideal use case for Dependabot?
>
> **[0:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/ideal-uses-cases-for-dependabot?u=76281980&t=5)** If you're starting from nothing, this is perfect for you.
>
> **[0:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/ideal-uses-cases-for-dependabot?u=76281980&t=8)** You will likely use the latest version of your dependencies because you don't have compatibility issues just yet, but perhaps you won't have legacy integration concerns either.
>
> **[0:17](https://www.linkedin.com/learning/github-dependabot-dependency-updates/ideal-uses-cases-for-dependabot?u=76281980&t=17)** So letting Dependabot handle things for you from the get-go is just perfect.
>
> **[0:22](https://www.linkedin.com/learning/github-dependabot-dependency-updates/ideal-uses-cases-for-dependabot?u=76281980&t=22)** Another great use case for Dependabot is when your application is already established and is in production, perhaps, and you're looking to keep an eye on vulnerabilities and fixes for those vulnerabilities that may have been published recently.
>
> **[0:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/ideal-uses-cases-for-dependabot?u=76281980&t=34)** In this case, you'll reject Dependabot's updates unless they're security related.
>
> **[0:39](https://www.linkedin.com/learning/github-dependabot-dependency-updates/ideal-uses-cases-for-dependabot?u=76281980&t=39)** Finally, if you're a big fan of CI/CD automation and your software has a fairly solid, automated testing suite, you can use Dependabot's updates as a trigger to fire up your test, and if all your tests pass successively, you can go ahead and merge Dependabot's pull requests automatically without fear of your software breaking.
>
> **[0:58](https://www.linkedin.com/learning/github-dependabot-dependency-updates/ideal-uses-cases-for-dependabot?u=76281980&t=58)** In my opinion, this is the level we all want to reach when using Dependabot, a complete testing, merging, and deploying pipeline.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (1), finally, (1), pass (1)
> **CLI Commands:** cd (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Dependabot anti-patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-anti-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-anti-patterns?u=76281980&t=0)** - All right. It's time for your first challenge.
>
> **[0:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-anti-patterns?u=76281980&t=8)** We have seen what Dependabot can do.
>
> **[0:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-anti-patterns?u=76281980&t=10)** Now let's talk about what we shouldn't do.
>
> **[0:12](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-anti-patterns?u=76281980&t=12)** There are some scenarios when automated dependency management is just not the way to go.
>
> **[0:17](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-anti-patterns?u=76281980&t=17)** So before I tell you, I want you to take a couple of minutes and think of a use case or two when using a tool such as Dependabot is not as useful.
>
> **[0:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-anti-patterns?u=76281980&t=26)** So if you're ready to take on this challenge, go ahead and give it a try.
>
> **[0:29](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-anti-patterns?u=76281980&t=29)** It should take you about three minutes to complete.
>
> **[0:32](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-anti-patterns?u=76281980&t=32)** And when you're ready, come back and watch my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), try. (1)
> **Analogies:** such as (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Dependabot anti-patterns
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=0)** - [Instructor] Let's talk about dependabot anti-patterns and just to make it clear, let's start with the definition.
>
> **[0:11](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=11)** An anti-pattern is a common response to a recurrent problem that is usually ineffective and risks being highly counterproductive.
>
> **[0:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=18)** In other words, when is it not useful to set up this tool?
>
> **[0:21](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=21)** I can quickly think of three possible scenarios.
>
> **[0:24](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=24)** First off, end-of-life libraries.
>
> **[0:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=26)** These are software libraries that you're allowed to use but they're simply not updated at all anymore.
>
> **[0:32](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=32)** Examples would be libraries to manage and control industrial equipment or interface with legacy hardware that is not supported anymore.
>
> **[0:40](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=40)** This is actually very common in industries that don't keep up pace with changing technology because everything they do works just fine as is for years and sometimes even decades.
>
> **[0:50](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=50)** So a tool for dependency management in this case, wouldn't add any value, at least for this particular software dependency because you'll be forever pinned to a specific version that is never going to change.
>
> **[1:02](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=62)** Another example that you can probably relate to is working in an isolated environment.
>
> **[1:07](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=67)** If you work with highly sensitive data, such as credit card information or medical records, chances are that you, or the dependabot for that matter, just can't go on the internet and download the latest and greatest because there's no outbound connection to the public internet.
>
> **[1:21](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=81)** And this ties in to my next point, which is a highly secure environment.
>
> **[1:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=86)** Have you noticed that your personal computer is ready to receive software updates as soon as they become available?
>
> **[1:31](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=91)** And this is not the case for your corporate laptop?
>
> **[1:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=94)** The reason why is probably because your updates needs to be approved by your IT department before they get into your work laptop.
>
> **[1:43](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=103)** In some environments, this is going to also be said about software development libraries, that you just can't go online and download whatever you like and just proceed to use it, there's often an approval process to make sure it doesn't have any obvious vulnerabilities and that it doesn't perform any functions outside of this spec, this scope.
>
> **[2:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=120)** In this case, using a dependency update tool such as dependabot can certainly help just not as fast because you'll need to wait on approvals for every single update.
>
> **[2:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-anti-patterns?u=76281980&t=130)** And that's my solution to this challenge and I hope it helps you determine whether dependabot can add value to your project or not.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (2), interface (1), public (1)
> **Definitions:** is a  (2), in other words (1)
> **CLI Commands:** make (2)
> **Analogies:** such as (2)
> **Prerequisites:** set up (1), you'll need (1)
> **Documentation:** spec (1)
> **Exercise Files:** download the (1)
> **Speakers:** - [instructor] (1)


### 2. Dependabot and Python

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Python project architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=0)** - [Instructor] Here we have a small Python project that we're going to use as our subject for dependabot.
>
> **[0:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=5)** We also have a matching GitHub repository that we're going to use to keep track of changes to this code, but more on that later when we get to the dependabot dashboard.
>
> **[0:13](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=13)** Anyways, this is an application that uses two external libraries or dependencies to check a couple of blogs to see if they're up to date.
>
> **[0:20](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=20)** If the blogs are up to date, we can choose to visit to read the latest articles or perhaps trigger some automation that will look for keywords.
>
> **[0:27](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=27)** In this particular case, we're using the arrow library, which you can see here on line three and also refer to on line eight as well as line 18.
>
> **[0:39](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=39)** This library what it does is it prints date and time formats in a user-friendly way.
>
> **[0:45](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=45)** So we're going to use that to display when were these blogs last updated.
>
> **[0:50](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=50)** Looking at line number two here, we have the module called htmldate.
>
> **[0:55](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=55)** And what it does is it goes to certain URLs to look for daytime stamps which then we can use to determine if the pages were updated.
>
> **[1:04](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=64)** In this case, we're going to the AWS official blog to see if there's any updates as well as the Microsoft Azure blog to see if there's updates there as well.
>
> **[1:12](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=72)** This is the code and as you can see there's not much to it.
>
> **[1:15](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=75)** Let's now go to the command prompt and I'll show you the application running.
>
> **[1:19](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=79)** Here we are in the command prompt and I'll execute the code by typing Python getdata.py.
>
> **[1:27](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=87)** And as you can see we get the results that we're looking for which is AWS official blog updated a day ago.
>
> **[1:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=93)** This is a really nice way to print a particular date in reference to what date it is right now.
>
> **[1:40](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=100)** NSS Microsoft Azure official blog updated two days ago.
>
> **[1:44](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=104)** Now, I'll type the command pip freeze.
>
> **[1:49](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=109)** And this is going to show us the list of dependencies.
>
> **[1:53](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=113)** Keep in mind that we may not be using all of these dependencies directly in our code, but the dependencies themselves they may have dependencies as well.
>
> **[2:02](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=122)** So for example, we have arrow which we mentioned and is 1.1.0.
>
> **[2:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=128)** And we also have htmldate shown here as 0.9.1.
>
> **[2:15](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=135)** The issue at the moment is that these dependencies are stored locally.
>
> **[2:19](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=139)** So before we can tell dependabot to keep track of updates for this libraries, we need a way to tell dependabot and the rest of our development team for that matter, which dependencies we're using.
>
> **[2:29](https://www.linkedin.com/learning/github-dependabot-dependency-updates/python-project-architecture?u=76281980&t=149)** And we can do that in Python by using a requirements file.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3), aws (2), pip (1)
> **Code Keywords:** case, (2), module (1), let (1)
> **Env Vars:** aws (2), nss (1)
> **Tools:** command prompt (2), github (1)
> **Versions:** 1.1.0 (1), 0.9.1 (1)
> **Definitions:** is an  (1), is a  (1)
> **File Paths:** getdata.py (1)
> **Cross-References:** we mentioned (1)

#### requirements.txt
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=0)** - [Instructor] Here we are looking at the official user guide for Pip, which is the tool that you use to install additional modules into your Python environment.
>
> **[0:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=8)** Now, if we scroll down here, it says that you can specify a requirements file, which is nothing more than a list of items to be installed by Pip.
>
> **[0:17](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=17)** Now, if you look here, it says requirements file format.
>
> **[0:20](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=20)** Let's go ahead and click on that.
>
> **[0:22](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=22)** And we're going to scroll all the way down until we see an actual example.
>
> **[0:25](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=25)** Here's the example, essentially, just a list of modules.
>
> **[0:29](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=29)** And I see that we can specify comments.
>
> **[0:32](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=32)** That's really nice, especially if you want to group your modules in a way that makes sense.
>
> **[0:35](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=35)** You can specify comments for that reason, also it's good to specify comments if you want to use a specific version of certain modules, for example, in this case, you are specifying version 0.6.1 of this module.
>
> **[0:51](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=51)** And of course it will be nice to have a comment explaining why you're doing that, in this example, we're using version greater than or equal to 4.1.1 of this module.
>
> **[1:03](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=63)** And my favorite is the one where you can specify anything that is compatible with the current version.
>
> **[1:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=70)** So this is great when you still want to receive updates, but you don't want updates that will be very impactful in terms of changes that may break your code.
>
> **[1:20](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=80)** With this information, now let's get back to Visual Studio Code and take a look at our requirements file.
>
> **[1:25](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=85)** Here we are in Visual Studio Code, and as you can see, our file contains arrow and HTML date in addition to a couple of comments there.
>
> **[1:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=93)** If we go back to our code, you can see that I have the daytime module and is not specified in our requirements txt file simply because that daytime module is part of the standard Python library.
>
> **[1:46](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=106)** So it's not a third party library that we want the panda bot to keep track of.
>
> **[1:51](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=111)** With our module specified here, the rest of the development team, or even just yourself from another computer can go ahead and execute something like pip install -R requirements.
>
> **[2:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=120)** I'll type it out for you, .txt, and your modules will be installed and you can rest assure your code will compile and execute properly.
>
> **[2:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=130)** That's it, the panda bot is not yet enabled and it will not run until we provide one more configuration file.
>
> **[2:16](https://www.linkedin.com/learning/github-dependabot-dependency-updates/requirements-txt?u=76281980&t=136)** So let's go ahead and do that right now.

> [!info]- Semantic Content
>
> **Code Keywords:** module (5), let (3), case, (1)
> **CLI Commands:** pip (3), python (2)
> **Versions:** version 0 (1), 6.1 (1), 4.1.1 (1)
> **Tools:** visual studio (2)
> **UI Navigation:** scroll down (1), click on (1)
> **Prerequisites:** install (2)
> **Env Vars:** html (1)
> **Cross-References:** go back to (1)

#### dependabot.yml for Python
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=0)** - [Instructor] At this point in time our code is ready to be checked in to GitHub for bursting control, but dependabot is not yet enabled and it would be nice to have since we want it to track updates and security patches related to our dependencies.
>
> **[0:12](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=12)** So how do we enable it?
>
> **[0:13](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=13)** Easy.
>
> **[0:14](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=14)** We don't even need to move away from our code editor.
>
> **[0:16](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=16)** Let me show you.
>
> **[0:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=18)** I'll go here to the main level of my repository and I'll click on this icon here to create a folder.
>
> **[0:25](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=25)** I'm going to call this folder .github. (keyboard clicks) This is a special folder where you're going to specify certain files that GitHub is going to look for and take actions based on what configuration you have in there.
>
> **[0:38](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=38)** In this case, we want to create a file inside a folder, and it's going to be, right-click, New File, and it's going to be called dependabot.yml.
>
> **[0:49](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=49)** Now this file is going to contain configuration to tell dependabot what to do in relation to this particular project.
>
> **[0:57](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=57)** So let's go line by line, starting with version, (keyboard clicks) in this case two.
>
> **[1:03](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=63)** This is the only version that you can specify at the moment.
>
> **[1:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=65)** So don't worry about the number two.
>
> **[1:07](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=67)** And this is related to the dependabot.yml file.
>
> **[1:11](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=71)** This has nothing to do with Python version or anything specific to your project.
>
> **[1:16](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=76)** This is a version number for this file format.
>
> **[1:20](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=80)** I also need to specify updates.
>
> **[1:22](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=82)** In this case, this is going to be project specific.
>
> **[1:25](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=85)** So let's start with the very first thing, which is the ecosystem (keyboard clicks) package-ecosystem, in this case pip, so that it knows we're using pip to manage our Python modules.
>
> **[1:38](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=98)** Next up would be directory.
>
> **[1:41](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=101)** And in this case just slash.
>
> **[1:44](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=104)** But this means is in the root directory of this repository is where you're going to be looking for requirements.txt.
>
> **[1:52](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=112)** If you're using some other languages, you may have a self folders where your files are located.
>
> **[1:56](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=116)** In this case, the main folder is just fine.
>
> **[2:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=120)** Let's also specify the schedule.
>
> **[2:02](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=122)** In this case is going to be interval daily. (keyboard clicks) If you have a ton of dependencies checking every single day might be too much.
>
> **[2:11](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=131)** So you might want to set this to weekly or monthly, but for our purposes, and our example here, daily is just fine.
>
> **[2:19](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=139)** Now let's talk about allow. (keyboard clicks) We're going to say dependency type is going to be all. (keyboard clicks) What this means is we want to specify that anything and everything inside requirements.txt should be checked by dependabot, not just cell files, but absolutely everything.
>
> **[2:38](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=158)** Let's go ahead and save this file now and let's go ahead and commit our changes.
>
> **[2:43](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=163)** Enabling dependabot, (keyboard clicks) and we're going to hit commit and synchronize.
>
> **[2:51](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=171)** And that's it.
>
> **[2:51](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=171)** With that, we have enabled dependabot.
>
> **[2:54](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=174)** At this time I will go to GitHub and check the page for this particular repository to verify that it's working.
>
> **[2:59](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-python?u=76281980&t=179)** But before we do that, allow me to present to you a challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), case, (3), self (1)
> **File Paths:** dependabot.yml (2), requirements.txt (2)
> **CLI Commands:** python (2), pip (2)
> **Tools:** github (4)
> **UI Navigation:** click on (1), right-click (1), go to (1)
> **Definitions:** is a  (2)
> **Speakers:** - [instructor] (1)

#### Challenge: Dependabot pull requests for Python
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-python?u=76281980&t=0)** - All right.
>
> **[0:07](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-python?u=76281980&t=7)** It's time for your first hands-on Dependabot challenge.
>
> **[0:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-python?u=76281980&t=10)** In this challenge, I want you to intentionally specify an old version of one of the modules on requirements.tx and go ahead and commit and push those changes to GitHub.
>
> **[0:20](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-python?u=76281980&t=20)** Once you do this, this should trigger Dependabot to start working.
>
> **[0:24](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-python?u=76281980&t=24)** You're going to end up with a brand new pull request created by Dependabot, and I want you to go ahead and merge that pull request into the main branch.
>
> **[0:31](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-python?u=76281980&t=31)** You can go the extra mile by pulling that brand new main branch into your local environment and of course, installing the module as recommended by Dependabot.
>
> **[0:40](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-python?u=76281980&t=40)** This will be your first end-to-end demo of Dependabot in action.
>
> **[0:45](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-python?u=76281980&t=45)** This will take you about 20 minutes to complete.
>
> **[0:47](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-python?u=76281980&t=47)** And once you're done with that, you can come back and watch my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** this, (1), module (1)
> **Tools:** github (1)
> **Best Practices:** recommended (1)
> **Speakers:** - all (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Dependabot pull requests for Python
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=0)** - [Instructor] Alright, let me show you my solutions to the challenge.
>
> **[0:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=8)** I went ahead and looked for PIP Arrow, trying to suggest, "Hey, do you know this is a PIP library "for Python and it's called Arrow."
>
> **[0:16](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=16)** And we got lucky and got the result on the very first line.
>
> **[0:20](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=20)** I'm going to click on it and right away we know that the latest is 1.2.1.
>
> **[0:25](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=25)** And if we go down here and click on released history, we can see all the previously published versions of this particular library.
>
> **[0:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=34)** I'm going to choose 1.1.0 just a few months behind the latest version.
>
> **[0:40](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=40)** So let's go ahead and make that change in our code.
>
> **[0:43](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=43)** Let's go to Visual Studio code now.
>
> **[0:45](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=45)** Here we are in our editor and if you remember, all I need to do is ==1.1.0 and save my file.
>
> **[0:55](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=55)** And this is going to force this library to be pinned to this particular version.
>
> **[1:01](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=61)** Of course, Dependabot is not going to like that and it's going to suggest that we update to the latest, which is what we're after in this case.
>
> **[1:09](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=69)** Now I'll go here to version control and stage might change and give it a name say, old version test.
>
> **[1:19](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=79)** I'm going to commit my changes.
>
> **[1:21](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=81)** Now when I press the sync changes button, it's going to send the changes to the main branch and get help.
>
> **[1:27](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=87)** So let's go ahead and do that.
>
> **[1:29](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=89)** Okay, that's completed.
>
> **[1:30](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=90)** Now let's go ahead and check in with GitHub and we're going to force Dependabot to detect what just happened.
>
> **[1:38](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=98)** Here we are in GitHub.
>
> **[1:39](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=99)** Let me go ahead and make sure that this is refreshed and ready to go.
>
> **[1:44](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=104)** So you can see requirements.txt has just been updated, that's good.
>
> **[1:48](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=108)** Now I'm going to click on insights and then here where it says dependency graph, you can click on Dependabot.
>
> **[1:56](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=116)** And I'm going to click on requirements.txt and as you can see we have this value here.
>
> **[2:01](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=121)** So now I'll go back inside Dependabot, and I'm going to click here where it says last checked one hour ago.
>
> **[2:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=130)** I'm going to click on it and I'm going to click check for updates.
>
> **[2:16](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=136)** Now remember Dependabot is going to run once per day, but as you can see we can force it to run now.
>
> **[2:22](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=142)** Now of course, it's going to notice that change that we did for version 1.1.0 and if it doesn't like it, which that's what we're expecting, we should see a new pull request being created by Dependabot, so now we wait.
>
> **[2:39](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=159)** After waiting a few seconds, we can see that now we have a pull request.
>
> **[2:43](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=163)** Let's take a look at that.
>
> **[2:45](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=165)** Perfect, it says bump arrow from 1.1.0 to 1.2.1, let's go ahead and click there.
>
> **[2:54](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=174)** I'm going to click where it says files change.
>
> **[2:57](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=177)** As you can see the only change that is doing is on requirements.txt and it's changing the version number from 1.1.0 to 1.2.1, that's perfect, that's exactly what we want.
>
> **[3:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=190)** So let's go back to pull requests and I'm going to select it and we should have a button here that says merge pull requests.
>
> **[3:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=198)** As you can see this branch has no conflicts with the base branch.
>
> **[3:21](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=201)** So we can go ahead and accept this change and click on confirm.
>
> **[3:28](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=208)** And as you can see pull requests successfully merge and close.
>
> **[3:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=213)** So if we go back to the main branch here, let's see, refresh to make sure everything is ready to go.
>
> **[3:40](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=220)** I'm going to click on requirements.txt and as you can see now it says 1.2.1.
>
> **[3:45](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=225)** There's one more thing that we need to do and let's go back to our Visual Studio to make sure it reflects the latest change.
>
> **[3:51](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=231)** So let's go ahead and do that.
>
> **[3:53](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=233)** Here we are still reflecting 1.1.0 but I'm going to go ahead and click the refresh button here and just like that now is 1.2.1, perfect.
>
> **[4:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=245)** And that's my solution to this challenge.
>
> **[4:07](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-python?u=76281980&t=247)** You just saw how arrow got updated by Dependabot and you just experienced the whole workflow end-to-end.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), case. (1)
> **Versions:** 1.2.1 (5), 1.1.0 (5), version 1 (1), 1.0 (1)
> **UI Navigation:** click on (8), go to (1)
> **CLI Commands:** make (4), pip (2), python (1)
> **File Paths:** requirements.txt (4)
> **Tools:** visual studio (2), github (2)
> **Cross-References:** go back to (3)
> **Env Vars:** pip (2)


### 3. Dependabot and PHP

> [[#Table of Contents|↑ Back to Table of Contents]]

#### PHP project architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=0)** - [Lecturer] We're looking at Sculpin here, which is a static website generator.
>
> **[0:03](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=3)** It's essentially a PHP application that allows you to generate HTML files from templates that you provide.
>
> **[0:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=10)** This way, for example, you can host a blog without the need for a database or dynamic code, which makes it very, very fast.
>
> **[0:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=18)** This is an open source project, it's available on GitHub, and it will be the use case for this chapter.
>
> **[0:24](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=24)** I have the GitHub page right here, and we're going to dive a little bit deeper into Dependabot.
>
> **[0:30](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=30)** So we're going to be using this open source project, which is fairly mature.
>
> **[0:35](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=35)** What this means is, it will probably have a very large manifest files with lots of dependencies.
>
> **[0:42](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=42)** And also because of the same reason, there's a risk that we could break something by simply accepting Dependabot's updates.
>
> **[0:49](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=49)** So how do we plan to mitigate this risk?
>
> **[0:52](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=52)** We're going to be using branches precisely for that reason, so that we can make changes in a specific branch and not worry that we may be breaking something that's happening in the main branch.
>
> **[1:03](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=63)** We're going to learn how to configure Dependabot to use a specific branch.
>
> **[1:07](https://www.linkedin.com/learning/github-dependabot-dependency-updates/php-project-architecture?u=76281980&t=67)** So right away, let's just get started.

> [!info]- Semantic Content
>
> **CLI Commands:** php (1), make (1)
> **Code Keywords:** static (1), let (1)
> **Env Vars:** php (1), html (1)
> **Tools:** github (2)
> **Definitions:** is a  (1), is an  (1)
> **Analogies:** for example (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [lecturer] (1)

#### composer.json
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=0)** - [Tutor] All right, since we are interested in dependency management for our project, let's go ahead and scroll down to the manifest file.
>
> **[0:09](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=9)** In this case is composer.json, and this is the equivalent of the requirements.txt file that we saw in Python.
>
> **[0:19](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=19)** If we scroll through here, you'll see there's a require key.
>
> **[0:24](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=24)** And within require, there's quite a bit of dependencies that you can see.
>
> **[0:29](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=29)** For example symphony, react/http, some apache modules and several others.
>
> **[0:37](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=37)** So how do we understand this format, this JSON formatted document?
>
> **[0:42](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=42)** Let's go to composer here.
>
> **[0:44](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=44)** This is the official page for composer, which is the dependency management for PHP.
>
> **[0:48](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=48)** We're going to go ahead and click on documentation.
>
> **[0:50](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=50)** And then here, we'll go to basic usage and you'll see composer.json right away.
>
> **[0:57](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=57)** Let's click on that.
>
> **[0:58](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=58)** And you can tell here that really the requirement is the require key.
>
> **[1:03](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=63)** Once you have the require key in your JSON formatted document, you can go ahead and specify the name of the package that you're interested in, and then a version constraint.
>
> **[1:13](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=73)** This is called a version constraint.
>
> **[1:15](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=75)** In this particular example, we have, 2.0.*, meaning that it could be anything that starts with 2.0. in this case.
>
> **[1:25](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=85)** In fact, I can show you.
>
> **[1:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=86)** We'll go to versions and then writing version constraints.
>
> **[1:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=93)** So in this case, for example, I can specify greater than, greater than or equal to, and so on.
>
> **[1:40](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=100)** You can also specify a double pipe, which is an logical OR.
>
> **[1:44](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=104)** And if we go back to our composer.json, you'll see that in use here right away.
>
> **[1:50](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=110)** This is basically saying, I need PHP 8.0 or 7.3, right.
>
> **[1:57](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=117)** Now, what is the symbol?
>
> **[1:58](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=118)** This caret symbol, what does it mean?
>
> **[2:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=120)** Let's go back to documentation, and we'll scroll down until we find it here.
>
> **[2:04](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=124)** Here we go, caret version range.
>
> **[2:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=128)** What it says is, that you can use it to allow non-breaking updates.
>
> **[2:14](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=134)** So let's say for example, here we have, ^1.2.3, it will accept updates all the way to 2.0, not including 2.0.
>
> **[2:25](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=145)** So in this case, you can get all the bug fixes and security patches and so on without actually affecting functionality.
>
> **[2:32](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=152)** Once you go from 1.0 to 2.0, you are at risk that you may need to change your code to be able to support the new version of any one given package.
>
> **[2:44](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=164)** So let's go back here.
>
> **[2:46](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=166)** As you can see, you also have the option of specifying a require-dev, which you may have certain dependencies that are not ready yet for production, but you may be using in a development environment or development version of your software.
>
> **[3:03](https://www.linkedin.com/learning/github-dependabot-dependency-updates/composer-json?u=76281980&t=183)** With that, let's take a look at the dependent bot configuration for PHP.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), require (5), case, (2), case. (1)
> **CLI Commands:** composer (5), php (3), python (1), apache (1), find (1)
> **Versions:** 2.0 (5), php 8 (1), 7.3 (1), 1.2.3 (1), 1.0 (1)
> **UI Navigation:** go to (3), scroll down (2), click on (2)
> **Env Vars:** php (3), json (2)
> **File Paths:** composer.json (3), requirements.txt (1)
> **Analogies:** for example (3)
> **Cross-References:** go back to (2)

#### dependabot.yml for PHP and branches
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=0)** - [Lecturer] This is our original Python, dependabot.ymi file and we're going to do a quick conversion to php just for illustration purposes only because this is going to be part of the challenge that's coming up for you.
>
> **[0:13](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=13)** So let's get started right away.
>
> **[0:14](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=14)** As I mentioned, a version never changes, it's always going to be version two, at least at this time.
>
> **[0:20](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=20)** Then we have updates, that line stays the same.
>
> **[0:23](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=23)** But once we get to ecosystem, you may be tempted to type php here, which would be incorrect.
>
> **[0:30](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=30)** What you're looking for is composer.
>
> **[0:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=33)** That's the change that you want.
>
> **[0:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=34)** The directory is the same, We're going to keep it as the main directory of the repository to look for composer.json in this case.
>
> **[0:42](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=42)** The schedule we're going to leave it as daily, that's fine.
>
> **[0:44](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=44)** And the same for the allow statements.
>
> **[0:47](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=47)** But now, as I mentioned, we want our changes, our pull requests coming from Dependabot to be applied to a specific branch.
>
> **[0:55](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=55)** So, let's go ahead and do that.
>
> **[0:57](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=57)** That's going to be a clause called target branch, target branch, and we're going to call it develop.
>
> **[1:07](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=67)** So keep this name in mind, cause we're going to need it, once we create the branch, it needs to be the exact same name that you see here.
>
> **[1:15](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=75)** I'm just going to call it develop.
>
> **[1:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=78)** We're going to add a label as well.
>
> **[1:20](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=80)** Let's call this one composer updates by Dependabot, so that we know it could be any other information such as development.
>
> **[1:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=93)** And you can add as many labels as needed to keep things organized.
>
> **[1:37](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=97)** These are the changes that we need for this particular file.
>
> **[1:40](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=100)** Now I just need to save it and commit it to the repo, but like I said.
>
> **[1:45](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=105)** We're not going to do that just yet.
>
> **[1:46](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-php-and-branches?u=76281980&t=106)** So first let's take a look at our challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** composer (3), php (2), python (1)
> **Code Keywords:** let (4), case. (1)
> **File Paths:** composer.json (1)
> **Cross-References:** coming up (1)
> **Analogies:** such as (1)
> **Speakers:** - [lecturer] (1)

#### Challenge: Dependabot pull requests for PHP
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=0)** (upbeat instrumental music)
>
> **[0:06](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=6)** - [Instructor] All right.
>
> **[0:07](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=7)** We're ready for the next challenge, which is going to be a Dependabot branching challenge.
>
> **[0:12](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=12)** Obviously, we can not work directly over the Sculpin GitHub repository.
>
> **[0:17](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=17)** So I want you to go ahead, and fork a copy into your own GitHub repository, and then perhaps download it to your local environment when you can go ahead, and create a development branch.
>
> **[0:28](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=28)** Once you have your development branch, I want you to go ahead and configure the Dependabot to only work on this particular branch.
>
> **[0:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=34)** And then finally, let's go ahead and test this to make sure that it's working properly.
>
> **[0:39](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=39)** A little bit tricky here is that when you configure the Dependabot with the Dependabot file, you may want to do this in your main branch.
>
> **[0:48](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=48)** So keep that in mind.
>
> **[0:49](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=49)** And finally, Dependabot may fire on its own once you check in the changes back to GitHub.
>
> **[0:55](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=55)** So be aware of that.
>
> **[0:56](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=56)** If it doesn't, I want you to go ahead and fire it up manually.
>
> **[1:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-php?u=76281980&t=60)** This should take you about 30 minutes to complete, and when you're ready, come back and watch my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), let (1)
> **Tools:** github (3)
> **Prerequisites:** configure (2)
> **CLI Commands:** make (1)
> **Warnings:** be aware (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat instrumental music) (1)

#### Solution: Dependabot pull requests for PHP
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=0)** - [Instructor] Here we are in the open source GitHub repo for Sculpin.
>
> **[0:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=10)** As you probably know, we cannot make any changes directly here.
>
> **[0:13](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=13)** What we can do is make our own copy and make those changes.
>
> **[0:17](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=17)** So, I'll click on Fork and select my personal GitHub and make a copy of this repository.
>
> **[0:25](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=25)** Once I have it here, I'm going to do a clone operation so I can bring it to my local development environment where I can use Visual Studio Code.
>
> **[0:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=33)** I'll click on Code here and select this value.
>
> **[0:36](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=36)** Now, I'll meet you at the command prompt.
>
> **[0:39](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=39)** Here at the command prompt, I'll type git clone and the value, of course.
>
> **[0:46](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=46)** Now, we have a local copy.
>
> **[0:48](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=48)** I'll go in there, type cd sculpin and now I'll fire up my code editor.
>
> **[0:54](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=54)** Perfect.
>
> **[0:55](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=55)** Now we're here in Visual Studio Code and we can start making those changes.
>
> **[0:59](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=59)** The first things you'll notice is that we have composer.json in the main directory of the repository.
>
> **[1:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=65)** This is important to know because we need that for the Dependabot YAML file, even though there is a source directory, but we don't care about that, we just care of the location of composer.json.
>
> **[1:16](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=76)** I also noticed there is a .github folder here, but there is no dependabot.yml.
>
> **[1:23](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=83)** So, let's go ahead and click on new here.
>
> **[1:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=86)** Let's see.
>
> **[1:27](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=87)** No, that's not what we want, because in this case, you see, if I created this file, let's just call it file, it would fall under this particular workflows folder.
>
> **[1:38](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=98)** We don't want that.
>
> **[1:39](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=99)** So, let me go ahead and undo this change by deleting the file.
>
> **[1:45](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=105)** Yes, remove it.
>
> **[1:46](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=106)** We want to make sure we are under GitHub, right?
>
> **[1:50](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=110)** In this case, then we can click new file and then type dependabot.yml, and I can verify by hovering over the file that it is under .github and not under .github workflows.
>
> **[2:07](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=127)** That's perfect.
>
> **[2:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=128)** Now, I'll go ahead and paste in the contents of this file.
>
> **[2:13](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=133)** I can see I have a typo in the file name, so I'll fix it.
>
> **[2:16](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=136)** I'll do rename and remove the extra letter here.
>
> **[2:21](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=141)** Perfect.
>
> **[2:22](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=142)** You can tell right away that it is detected as a YAML document and everything seems properly formatted.
>
> **[2:28](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=148)** Let's go over the contents here.
>
> **[2:30](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=150)** The first line to note is that it says composer and not pip or php.
>
> **[2:35](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=155)** The directory is the main of the repo and that's the location of composer.json.
>
> **[2:41](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=161)** We still have a daily checking interval for Dependabot.
>
> **[2:46](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=166)** But this time we added a label just for the sake of having a label there to show what the purpose is and perhaps organization or whatever you need to use labels for in your particular project.
>
> **[2:58](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=178)** We also have the branch, in this case, develop.
>
> **[3:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=180)** So, keep that in mind that at this time, we don't have a develop branch.
>
> **[3:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=185)** So, we're going to save this file, but we're going to keep it local here for the time being, okay?
>
> **[3:11](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=191)** Let me go ahead and go to Source Control and stage those changes.
>
> **[3:16](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=196)** I'm going to say adding Dependabot YML and commit those changes.
>
> **[3:23](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=203)** Now we have the option of synchronizing those changes, and in fact, I'm going to do it now just to show you what happens.
>
> **[3:31](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=211)** I'll click on synchronize.
>
> **[3:32](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=212)** Again, we're sending this to GitHub which may trigger Dependabot right away, but there is no development branch, so keep that in mind.
>
> **[3:41](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=221)** What we're going to do now is just create that branch.
>
> **[3:44](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=224)** So, create branch and call it develop.
>
> **[3:49](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=229)** So, at this time, we may have Dependabot trying to run and not finding the development branch, which may result in an error.
>
> **[3:57](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=237)** That's not a big deal, we're creating that branch right now.
>
> **[4:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=240)** We're not going to make any changes, we just need to have that branch.
>
> **[4:03](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=243)** In fact, it's a good practice to have a development branch and keep it there at all times because that way, you have a distinction between your main branch, which is your production branch or could be your production branch and any changes that you are doing at all times, which need to happen within the development branch.
>
> **[4:21](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=261)** Let's go ahead and publish.
>
> **[4:23](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=263)** That's all we needed to do here in this particular environment.
>
> **[4:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=266)** So, let's go back to the GitHub console.
>
> **[4:30](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=270)** All right, back here on GitHub, I'm going to refresh.
>
> **[4:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=274)** Let's take a look at the branches first.
>
> **[4:37](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=277)** Let's see what else.
>
> **[4:38](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=278)** I see a branch called develop.
>
> **[4:41](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=281)** Perfect, we know it's here, that's good.
>
> **[4:43](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=283)** Now, let's go back to our main repository here and let me just make sure that we have the files here.
>
> **[4:50](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=290)** I'll click on this .github and verify that we have a dependabot.yml and you can see it right there.
>
> **[4:58](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=298)** So, let's go to Insights and then Dependency graph, I usually see Dependabot right here.
>
> **[5:06](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=306)** Now, it says last checked, two minutes ago.
>
> **[5:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=308)** Let's take a look.
>
> **[5:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=310)** It says, "Dependabot couldn't find the branch develop."
>
> **[5:14](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=314)** That's great, because that means we checked in this dependabot.yml before we created the branch.
>
> **[5:21](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=321)** That's not a problem.
>
> **[5:22](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=322)** We just need to trigger the check again by clicking here on Check for updates and off it goes.
>
> **[5:28](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=328)** So, we'll see what happens in a few seconds.
>
> **[5:32](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=332)** And of course, after a few moments, here we are, we completed the check with Dependabot.
>
> **[5:38](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=338)** Let's see what it says, because we have this little warning here.
>
> **[5:41](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=341)** It says, "Cannot open any more pull requests."
>
> **[5:45](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=345)** That's okay, the default limit is five, and anyways, you don't want to do any more than five changes all at once, because it can get very tricky, especially if you're doing a ton of updates at the same time, you could end up in a situation where something breaks and you don't know the exact reason why it broke because you have all these changes happening at the same time.
>
> **[6:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=368)** So, let's go to Pull requests.
>
> **[6:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=370)** Like I said, we're limited to five here, but what that means is because we just pulled this project off of GitHub, and it may have a ton more version updates, as you can see.
>
> **[6:22](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=382)** So, in this case, we could complete this five one by one slowly and once we're happy with this, Dependabot is going to run again, in this case in 24 hours per the configuration that we did, and when that happens, you may have another batch of five or maybe just three, depending on the necessary updates that are required by the publishers of the dependencies.
>
> **[6:45](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=405)** Anyways, let's go into one of them to make sure that this actually works.
>
> **[6:50](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=410)** So, if I click on any one of these, and I'm going to look at the files that are changed, Dependabot wants to change composer.json and composer.lock.
>
> **[6:59](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=419)** And of course, it's just a little version update here.
>
> **[7:02](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=422)** What I want you to pay attention to is that it says develop here, right?
>
> **[7:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=428)** Meaning that if I accept these changes, they're not going to the main branch of the project, which is the desire effect that we wanted.
>
> **[7:16](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=436)** This is absolutely awesome.
>
> **[7:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=438)** You can make changes and be rest assured that you won't have to deal with this stuff in your main branch.
>
> **[7:24](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=444)** Like I said, it could be your production branch and you don't want changes happening without proper testing.
>
> **[7:31](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=451)** So, we want these changes to go to develop main branch and they can go from there.
>
> **[7:35](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=455)** In fact, let's go ahead and accept one of these and verify that it actually works.
>
> **[7:40](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=460)** I'll go back to Pull requests, I'll select the first one, for example, and go to Merge, and I'm going to confirm the merge.
>
> **[7:50](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=470)** With the merge completed, let's go back to Visual Studio Code and pull the changes, make sure that everything actually worked, okay?
>
> **[7:58](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=478)** So, here we are in the develop branch.
>
> **[8:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=480)** I'm going to click on the synchronize button.
>
> **[8:02](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=482)** Perfect, looked like it worked.
>
> **[8:03](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=483)** Let's verify that it did.
>
> **[8:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=485)** I'll go to files and I'll go to composer.json, and we should see a version update right here.
>
> **[8:14](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=494)** Sure enough, here you see the 5.3.7 that was reflected in the pull request.
>
> **[8:21](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-php?u=76281980&t=501)** That's my solution to this challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), case, (4), else. (1), this . (1), this, (1)
> **CLI Commands:** make (10), composer (7), git (1), cd (1), pip (1)
> **Tools:** github (11), visual studio (3), command prompt (2)
> **UI Navigation:** click on (7), go to (7), select the (1)
> **File Paths:** composer.json (5), dependabot.yml (4), composer.lock (1)
> **Cross-References:** go back to (4)
> **Env Vars:** yaml (2), yml (1)
> **Versions:** 5.3.7 (1)


### 4. Dependabot and JavaScript

> [[#Table of Contents|↑ Back to Table of Contents]]

#### JavaScript project architecture
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=0)** - [Instructor] I've chosen this Vue.js-based project as our last one for JavaScript simply because Vue.js is a very, very popular library.
>
> **[0:09](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=9)** By the way, if you want to learn Vue.js, you can do so right here in the LinkedIn Learning Library, there's amazing courses to learn this particular framework.
>
> **[0:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=18)** In our case, of course we're talking about dependabot, and since JavaScript is a front end type of language, you are exposed to security vulnerabilities.
>
> **[0:28](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=28)** Fortunately for us, dependabot can certainly help with those as well.
>
> **[0:31](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=31)** So we're going to start by forking this particular project to our own Git repo.
>
> **[0:38](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=38)** This is just a 'Hello world' type of application in Vue.js by the way.
>
> **[0:43](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=43)** And once we have it here, I will do the same, I'm going to clone it to my local environment so that we can take a look in Visual Studio Code.
>
> **[0:51](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=51)** Here we are in the console, I'll type 'git clone' is the value.
>
> **[0:58](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=58)** And I will go into the folder now and start Visual Studio Code.
>
> **[1:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=65)** And when working with JavaScript projects, you're going to be working with a file call package.json and that's the one that's going to contain your list of dependencies.
>
> **[1:15](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=75)** I'm also noticing here, there is no .gethub folder.
>
> **[1:20](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=80)** So we need to take care of that when we create the dependabot.yml file.
>
> **[1:25](https://www.linkedin.com/learning/github-dependabot-dependency-updates/javascript-project-architecture?u=76281980&t=85)** But for now let's take a look at package.json, it's format, the documentation, and its official website.

> [!info]- Semantic Content
>
> **File Paths:** vue.js (4), package.json (2), dependabot.yml (1)
> **CLI Commands:** git (2)
> **Code Keywords:** case, (1), let (1)
> **Tools:** visual studio (2)
> **Definitions:** is a  (2)
> **Documentation:** the documentation (1)
> **Speakers:** - [instructor] (1)

#### package.json
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=0)** - [Instructor] So, if we look up a repository here, it has the package.JSON file.
>
> **[0:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=5)** Let's take a look at that.
>
> **[0:07](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=7)** As you can see the format is very, very similar, if not identical to the one that we use for PHB using composer and here you have dependencies and you have dev dependencies, essentially the same thing.
>
> **[0:22](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=22)** You specify a name of the package and a version number.
>
> **[0:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=26)** Even the use of the carrot symbol in the version number is exactly the same where you are accepting updates up to and not including the next major update.
>
> **[0:37](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=37)** So even that is consistent with the format that we use for PHP.
>
> **[0:42](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=42)** Now, how do we actually use this?
>
> **[0:44](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=44)** Well, you need a tool called NPM, stands for a node.JS package manager.
>
> **[0:49](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=49)** This is essentially a software registry where you're going to find most, if not all JavaScript libraries and dependencies.
>
> **[0:56](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=56)** So it's a great tool to use.
>
> **[0:59](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=59)** However, if you're going to let Dependabot take care of you, you don't even need to worry about this.
>
> **[1:03](https://www.linkedin.com/learning/github-dependabot-dependency-updates/package-json?u=76281980&t=63)** Dependabot is going to check with the MPM registry to make sure that you're up to date when it comes to security patches and latest releases.

> [!info]- Semantic Content
>
> **CLI Commands:** composer (1), php (1), npm (1), node (1), find (1)
> **Env Vars:** json (1), phb (1), php (1), npm (1), mpm (1)
> **Code Keywords:** let (2), this. (1)
> **File Paths:** package.json (1), node.js (1)
> **Definitions:** stands for (1)
> **Speakers:** - [instructor] (1)

#### dependabot.yml for JavaScript projects
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=0)** - [Tutor] Now it's time to configure Dependabot for JavaScript.
>
> **[0:04](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=4)** So let's go ahead and do that.
>
> **[0:06](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=6)** We're looking at package.json, and I want you to pay attention to something.
>
> **[0:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=10)** We have devDependencies as well as dependencies.
>
> **[0:15](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=15)** So we have this two groups here.
>
> **[0:16](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=16)** So, I just want you to remember that.
>
> **[0:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=18)** And right now let's go ahead and go to the top level here.
>
> **[0:22](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=22)** We're going to start by creating a folder and you can probably guess the name by now.
>
> **[0:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=26)** It's going to be .GitHub.
>
> **[0:30](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=30)** And inside this folder, we're going to go right ahead, right click, new file.
>
> **[0:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=34)** And it's going to be dependabot.yml, and the same format apply.
>
> **[0:40](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=40)** So, version two, updates, and then let's do package ecosystem.
>
> **[0:49](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=49)** In this case is going to be N-P-M.
>
> **[0:52](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=52)** This is for our JavaScript package management.
>
> **[0:55](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=55)** The directory is going to be the same.
>
> **[0:57](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=57)** It's going to be slash for the root.
>
> **[1:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=60)** And we can confirm that by looking here and seeing that we have package.json in the root folder right here.
>
> **[1:07](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=67)** For the schedule, we're going to do interval daily as we have done in the past.
>
> **[1:13](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=73)** And now let me show you a little bit different use of the keyword Allow.
>
> **[1:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=78)** I'll just type allow, and I'll try, let's see, dependency type.
>
> **[1:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=86)** And I'll choose production.
>
> **[1:29](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=89)** Let me explain what that means.
>
> **[1:31](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=91)** I'll go to package.json here, and since we have a group here on line three that says dependencies and another group on line 14 that says devDependencies, Dependabot will recognize that and it will understand that the one above is a production one and the other one is for development purposes.
>
> **[1:53](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=113)** So even if you don't have a separate development branch, Dependabot is smart enough to know that you have these two groups here and it would allow you to manage them individually.
>
> **[2:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=125)** So let's get back to our file.
>
> **[2:06](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=126)** So in this dependency type, production, it will only touch, or scan rather, the ones that are in the first group or the production dependency group.
>
> **[2:17](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=137)** Another key word for you is the key word Ignore, which is used very similar to allow.
>
> **[2:24](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=144)** In this case, I will type the dependency name, and say, for example, Axios.
>
> **[2:31](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=151)** Let's go back to package.json.
>
> **[2:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=154)** So we have this library here.
>
> **[2:35](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=155)** And for some reason, let's just say that I'm using a legacy version of this library.
>
> **[2:42](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=162)** I don't want to use any other version.
>
> **[2:44](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=164)** It needs to be this specific version.
>
> **[2:47](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=167)** Of course I would not have the caret symbol here.
>
> **[2:50](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=170)** I would just have the straight up version number of that.
>
> **[2:53](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=173)** And like I said, I don't want Dependabot to let me know of any updates or changes to this, it will never change, so I want Dependabot to ignore it.
>
> **[3:03](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=183)** So the way you do that is by specifying a name directly here in the Ignore clause.
>
> **[3:11](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=191)** With that change complete, now we can hit safe, and I'll go here to source control, stage the changes, and I'll type a comment.
>
> **[3:21](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=201)** Adding Dependabot yml.
>
> **[3:24](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=204)** I'll click on comment.
>
> **[3:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=206)** I can synchronize those changes back to Git Hub.
>
> **[3:29](https://www.linkedin.com/learning/github-dependabot-dependency-updates/dependabot-yml-for-javascript-projects?u=76281980&t=209)** And that's how you enable package management for JavaScript using the Dependabot.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), try, (1), type. (1), type, (1), case, (1)
> **File Paths:** package.json (4), dependabot.yml (1)
> **UI Navigation:** go to (2), click on (1)
> **Code Identifiers:** devdependencies (2)
> **Analogies:** similar to (1), for example (1)
> **CLI Commands:** git (1)
> **Cross-References:** go back to (1)
> **Tools:** github (1)

#### Challenge: Dependabot pull requests for JavaScript
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980&t=0)** - [Instructor] All right, it's time for your final's challenge of this dependabot course.
>
> **[0:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980&t=10)** What we're going to do now is we're going to expand dependabot.yml.
>
> **[0:14](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980&t=14)** We're going to do that by adding an additional ecosystem to an existing file.
>
> **[0:19](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980&t=19)** So in this case what we're trying to simulate is that you have a project that uses JavaScript for the front end, and let's say you have PHP or Python for the backend.
>
> **[0:29](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980&t=29)** And in this case you're going to configure both using a single dependabot.yml file.
>
> **[0:35](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980&t=35)** Now, if you add let's say PHP, you may need an additional composer.json file so that dependabot doesn't error out when trying to look for this file.
>
> **[0:45](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980&t=45)** Another thing we're going to try here is the allow and ignore commands of the dependabot.yml file.
>
> **[0:51](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980&t=51)** This is to simulate that one of your dependencies is a legacy dependency that you're not interested in updating, is never going to change, is always going to be the same, so you want dependabot to leave it alone, and you can do that with ignore commands.
>
> **[1:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980&t=65)** So I want you to try that change as well.
>
> **[1:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980&t=68)** It'll take you about 15 minutes to complete this challenge.
>
> **[1:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/challenge-dependabot-pull-requests-for-javascript?u=76281980&t=70)** Go ahead and give it a try and when you're done, come back and watch my solution.

> [!info]- Semantic Content
>
> **File Paths:** dependabot.yml (3), composer.json (1)
> **CLI Commands:** php (2), python (1), composer (1)
> **Code Keywords:** let (2)
> **Env Vars:** php (2)
> **Definitions:** is a  (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Dependabot pull requests for JavaScript
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=0)** - It's time to implement the solution to this challenge.
>
> **[0:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=8)** Let me show you.
>
> **[0:09](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=9)** So we have this package.json, which contains JavaScript dependencies, but we also want to extend our dependabot.yml.
>
> **[0:17](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=17)** Let's say that we want to use PHP as the backend and JavaScript as the front end for our application while we want to just keep it to a single file.
>
> **[0:24](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=24)** So let's take a look.
>
> **[0:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=26)** Of course, as we mentioned, we already have the allow and ignore, which is part of the challenge, but you already saw how to do this.
>
> **[0:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=33)** So you can implement this in your own solution.
>
> **[0:36](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=36)** But you know, this is perfect, it already works as it is for JavaScript.
>
> **[0:40](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=40)** How do I extend it?
>
> **[0:42](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=42)** Well, you already have the version clause and you have the updates clause.
>
> **[0:47](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=47)** So what you need to do is add an additional ecosystem.
>
> **[0:52](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=52)** So I'll type package-ecosystem and we'll go back to PHP.
>
> **[0:57](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=57)** So it's going to be composer.
>
> **[1:01](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=61)** I'll add directory.
>
> **[1:04](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=64)** So as you can see, nothing really changes.
>
> **[1:06](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=66)** You're just extending the dependabot.yml configuration file.
>
> **[1:10](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=70)** Of course we need the schedule.
>
> **[1:12](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=72)** Please, note that it will not reuse this schedule that you have above.
>
> **[1:16](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=76)** You need to specify it here as well.
>
> **[1:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=78)** So interval. Daily.
>
> **[1:22](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=82)** So at this time, this is pretty much done.
>
> **[1:24](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=84)** You already extended this.
>
> **[1:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=86)** However, there's an issue now.
>
> **[1:28](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=88)** Once you check this in, dependabot is going to start checking for a composer.json file as well, because you just said, "Hey, we're managing not only JavaScript packages, but now we have the PHP as well.
>
> **[1:42](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=102)** So how do we fix it?"
>
> **[1:43](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=103)** Well, we can go here to the main folder with a right click and add a new file.
>
> **[1:49](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=109)** We're going to call it composer.json, just login any other PHP based project.
>
> **[1:55](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=115)** So now in this case, let's go ahead and paste in the value here.
>
> **[2:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=120)** This is essentially the same composer.json that we use in the previous project.
>
> **[2:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=125)** Of course, I trim it down to the bare minimum just to show PHP 8.0 or 7.3.
>
> **[2:13](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=133)** Essentially, just to avoid any errors when dependabot goes looking for a composer.json file that may not be there, so now we can guarantee that it's going to be there.
>
> **[2:23](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=143)** So we have this file.
>
> **[2:25](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=145)** I'm going to go ahead and save it.
>
> **[2:26](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=146)** Make sure that we save our changes here as well.
>
> **[2:30](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=150)** Now we'll go to source control.
>
> **[2:32](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=152)** Stage our changes.
>
> **[2:35](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=155)** And then add a comment, extending dependabot to include PHP.
>
> **[2:43](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=163)** We're going to commit and synchronize our changes.
>
> **[2:46](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=166)** Let's go now to GitHub to verify that it worked.
>
> **[2:50](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=170)** Here we are in GitHub, and as you can see, it says one minute ago, click on GitHub.
>
> **[2:57](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=177)** We'll see that's our dependabot.yml with our commit message.
>
> **[3:02](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=182)** And now let's go to insights.
>
> **[3:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=185)** Click on dependency graph and dependabot.
>
> **[3:08](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=188)** And as you can see, we have package.json with the NPM logo there and composer.json with a PHP logo there.
>
> **[3:18](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=198)** So as you can see, dependendabot has no problem if you're using Python, Java, JavaScript, it doesn't matter the language, or a combination of them, you can manage all of those dependencies from a single location.
>
> **[3:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=213)** So please do that.
>
> **[3:34](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=214)** This is the best tool you can have, especially, if you have a ton of dependencies to manage.
>
> **[3:40](https://www.linkedin.com/learning/github-dependabot-dependency-updates/solution-dependabot-pull-requests-for-javascript?u=76281980&t=220)** And that's my solution to this challenge.

> [!info]- Semantic Content
>
> **CLI Commands:** php (7), composer (6), make (1), npm (1), python (1)
> **File Paths:** composer.json (5), dependabot.yml (3), package.json (2)
> **Code Keywords:** let (6), this. (2), case, (1)
> **Env Vars:** php (7), npm (1)
> **UI Navigation:** go to (2), click on (2)
> **Tools:** github (3)
> **Versions:** php 8 (1), 7.3 (1)
> **Cross-References:** we mentioned (1), go back to (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Links and resources
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/links-and-resources?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/links-and-resources?u=76281980&t=0)** - Real quick before we go, let me give you some resources that are useful to me and you'll likely find useful as well.
>
> **[0:06](https://www.linkedin.com/learning/github-dependabot-dependency-updates/links-and-resources?u=76281980&t=6)** First of all, the official documentation for our GitHub Dependabot is very user-friendly and to the point, so I highly recommend it.
>
> **[0:14](https://www.linkedin.com/learning/github-dependabot-dependency-updates/links-and-resources?u=76281980&t=14)** And of course, if you're still learning about GitHub, GitHub actions, Git in general and continuous integration, the LinkedIn learning library is just an amazing resource.
>
> **[0:25](https://www.linkedin.com/learning/github-dependabot-dependency-updates/links-and-resources?u=76281980&t=25)** If you need to get specifics about the needs of a particular computer language on Dependabot, here's a short list based on the code that we just went through.
>
> **[0:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/links-and-resources?u=76281980&t=33)** The user guide to Python's PIP package manager has a link to requirements.txt, where it explains way more than you'll ever need to know about dependency management and versioning using PIP.
>
> **[0:47](https://www.linkedin.com/learning/github-dependabot-dependency-updates/links-and-resources?u=76281980&t=47)** The same can be said about package.json, which you can find in the NPM official documentation page.
>
> **[0:54](https://www.linkedin.com/learning/github-dependabot-dependency-updates/links-and-resources?u=76281980&t=54)** And finally, since we also played with PHP, here's your link to PHPs composer documentation.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), pip (2), git (1), python (1), npm (1)
> **Env Vars:** pip (2), npm (1), php (1)
> **Tools:** github (3)
> **File Paths:** requirements.txt (1), package.json (1)
> **Code Keywords:** let (1), finally, (1)
> **Speakers:** - real (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980&t=0)** - [Instructor] We have reached the end of this course, and here are my recommendations for you as your next steps.
>
> **[0:05](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980&t=5)** First and foremost, you're going to need practice, patience, and more practice.
>
> **[0:09](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980&t=9)** Where you're using Dependabot for real projects, the updates and pull requests will come, and you'll see the benefits of having this automation in place.
>
> **[0:17](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980&t=17)** However, just remember to be patient because your dependencies will not get as many updates as you think they will.
>
> **[0:23](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980&t=23)** But I promise you, the best tools are the one that just work, and you don't have to think about them, and Dependabot is one of those tools.
>
> **[0:31](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980&t=31)** Dependabot plays really well, we get top actions.
>
> **[0:33](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980&t=33)** So if you're an advanced user of GitHub, and you are comfortable with GitHub Actions, consider integrating these two tools.
>
> **[0:42](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980&t=42)** You can learn more about GitHub Actions in the LinkedIn Learning Library.
>
> **[0:46](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980&t=46)** Finally, should you have questions or feedback, please use the Q&A section of this course, and I'll be glad to help you out.
>
> **[0:52](https://www.linkedin.com/learning/github-dependabot-dependency-updates/next-steps?u=76281980&t=52)** I hope this course has been helpful to you, and I'll see you in the next one.

> [!info]- Semantic Content
>
> **Tools:** github (3)
> **Code Keywords:** finally, (1)
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