---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: building-monorepos-on-github-17057806
url: "https://www.linkedin.com/learning/building-monorepos-on-github-17057806"
level: Advanced
updated: 7/30/2025
learners: 39390
skills:
  - GitHub
exercise_files: true
github: "https://github.com/LinkedInLearning/building-monorepos-on-GitHub-3086076"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFhDmiByitrFw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667582740341?e=2147483647&amp;v=beta&amp;t=aGad4_rlXhSKDVLguVCHNzM1zFaccHsM8J0Qu91Wsrk"
linkedin_topic: DevOps
learning_paths:
  - '[[Essential New Skills in Software Engineering]]'
next_courses:
  - '[[Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines]]'
path_nav: '[{"path":"Essential New Skills in Software Engineering","position":1,"total":4,"prev":null,"next":"Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines"}]'
path_count: 1
tags:
  - course
  - topic/devops
  - topic/software-development
  - skill/github
status: not-started
created: 2026-04-29
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/DevOps/Building%20Monorepos%20On%20Github.md)

![Building Monorepos On Github](https://media.licdn.com/dms/image/v2/D560DAQFhDmiByitrFw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667582740341?e=2147483647&amp;v=beta&amp;t=aGad4_rlXhSKDVLguVCHNzM1zFaccHsM8J0Qu91Wsrk)

# Building Monorepos On Github

> If you’re a developer or system administrator, you’re always looking for easier and more collaborative ways to manage a large codebase for your organization. Monorepos allow you to manage code for many projects on a single repository. In this course, Carlos Solís teaches you how to build and host monorepos on GitHub. Discover how monorepos can help you reduce complexity, avoid code dependencies, a

> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806) | Advanced | 39K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#Introduction]]** (3 videos)
- **[[#1. Creating and Building Monorepos]]** (7 videos)
- **[[#2. Tools to Manage Your Monorepos]]** (4 videos)
- **[[#3. GitHub Actions for Monorepos]]** (6 videos)
- **[[#4. Best Practices]]** (2 videos)
- **[[#Conclusion]]** (1 videos)

### Introduction

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Managing code in monorepos
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/managing-code-in-monorepos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/managing-code-in-monorepos?u=76281980&t=0)** - [Instructor] The use of modified code repositories or mono repos is becoming more and more popular because of the advantage of having just one place to store all your code, system conflicts, and tests.
>
> **[0:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/managing-code-in-monorepos?u=76281980&t=13)** In this course, we'll learn how to create mono repos from the basics.
>
> **[0:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/managing-code-in-monorepos?u=76281980&t=17)** We will go from zero to build an automated deployment process of applications.
>
> **[0:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/managing-code-in-monorepos?u=76281980&t=23)** I'm Carlos Solis, author and web developer for almost 20 years, working on applications of different size all over the world, and I can wait to show you how to get the most out of your mono repos by using best practices, improving performance, and managing all your apps and dependencies in just one place.

> [!info]- Semantic Content
>
> **Speakers:** - [instructor] (1)

#### What is a monorepo, and why should you use one?
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=0)** - [Instructor] Before we start working on monorepos, let's begin defining what a repository is.
>
> **[0:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=6)** Commonly known as repos, they could contain one or several software package that include any kind of software piece and they could hold a website, a mobile app, or an API.
>
> **[0:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=19)** Repos can have one or many programming languages.
>
> **[0:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=23)** A mobile app, for example, could use mainly one programming language such as Java, Kotlin, or Swift.
>
> **[0:30](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=30)** One of the most important part of a repository is version control: a system to store and manage every change made in the code that allows developers to revert the software to any previous state.
>
> **[0:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=44)** You can think that a repo is a container for a project which is one of the most common use cases.
>
> **[0:51](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=51)** For example, a repo can hold every line of code needed to create a full-stack app.
>
> **[0:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=57)** Things start to get complex when you need to create a project with different codebases.
>
> **[1:02](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=62)** For example, if a web app has a team working exclusively on the frontend and another separate team dealing with the backend, the most common solution here is to create separate repositories with different team members, workflows, and deploy tools.
>
> **[1:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=79)** The more complex the software gets, the more code units are required, like in this example, using microservices architecture, where different teams manage every microservice.
>
> **[1:32](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=92)** Same happens here, with microfrontends architecture applied in the frontend.
>
> **[1:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=97)** Several independent micro apps are running in parallel.
>
> **[1:40](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=100)** The complexity of handling this kind of software could be significant and require extensive time and resources.
>
> **[1:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=108)** There are different options to manage this kind of problem.
>
> **[1:52](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=112)** One of them is using a polyrepo or multirepo approach.
>
> **[1:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=117)** Polyrepos are multiple repositories that are part of the same app.
>
> **[2:02](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=122)** Every repo contains a part of the app, maintained, usually, by different teams.
>
> **[2:08](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=128)** There are no strict rules about organizing a polyrepo, but usually each repo groups code that is part of a logic unit.
>
> **[2:16](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=136)** Each repo should be decoupled, allowing teams to deploy their changes independently.
>
> **[2:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=142)** Here, in this example, we can see that if a team makes a change on the repo before it's available to the rest of the app, it needs to be compiled or integrated.
>
> **[2:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=153)** That requires a form of orchestrator or building task that can run on demand or schedule, for example, once or twice a day.
>
> **[2:43](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=163)** As with every solution, polyrepo have trade-offs, but it allows teams to work independently, there is a risk of ending with too many repos.
>
> **[2:53](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=173)** Every time a project needs a common dependency, it will be duplicated, increasing the size of the repo.
>
> **[3:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=180)** Finally, when a change affects more than one repo needs to be implemented in phases, to make sure every required part is already deployed.
>
> **[3:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=191)** Monorepos are a different approach.
>
> **[3:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=193)** Here, instead of having multirepositories, everything is grouped in the same repo.
>
> **[3:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=199)** Every part of the code is under the same version control.
>
> **[3:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=203)** A monorepo is designed to hold large projects, sharing the same libraries and models, reducing duplicated dependencies.
>
> **[3:32](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=212)** In this example, we can see how a monorepo works.
>
> **[3:35](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=215)** The code is one massive block and every time a developer introduce a change on a model or section of the app, the whole system is updated.
>
> **[3:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=226)** Monorepos reduce code complexity, code duplicates, and the number of steps required to deploy new features.
>
> **[3:54](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=234)** If we need to compare both approaches, the most important point is that there is no silver bullet.
>
> **[4:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=240)** The perfect solution depends on the details and requirements of each project.
>
> **[4:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=245)** Both cases have trade-offs.
>
> **[4:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=247)** While monorepos reduce code duplication, they can become too big and require governance and attention to good practices.
>
> **[4:15](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=255)** On the other hand, polyrepos could be easier to handle, but working across repo makes changes slow and prone to hard-to-track errors.
>
> **[4:25](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/what-is-a-monorepo-and-why-should-you-use-it?u=76281980&t=265)** Finally, since monorepos are recommended for large projects with multiple teams, running a small website or a single mobile app will not benefit from a monorepo approach.

> [!info]- Semantic Content
>
> **Code Keywords:** require (2), finally, (2), let (1)
> **Analogies:** for example (4), such as (1)
> **Definitions:** is a  (2), known as (1)
> **Prerequisites:** before we start (1), required to (1)
> **CLI Commands:** make (1)
> **Env Vars:** api (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] This is Ravi del Lobos, senior staff instructor at LinkedIn Learning, and I'm going to show you how to work with LinkedIn Learning courses using GitHub Codespaces.
>
> **[0:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=9)** Codespaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:14](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=14)** It allows for real world hands on practice that mirrors software development in the workplace.
>
> **[0:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=19)** This course was created using GitHub Codespaces.
>
> **[0:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=22)** Using Codespaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:29](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=29)** One click and you're ready to go.
>
> **[0:32](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=32)** To practice along with the course, you can create a codespace directly from the course overview page.
>
> **[0:38](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=38)** First, click open next to GitHub Codespaces.
>
> **[0:42](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=42)** If you're already logged in, you'll be directed to a Getting Started with GitHub Codespaces page.
>
> **[0:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=48)** If you're not logged in, you'll be prompted to log in or create a free GitHub account first.
>
> **[0:53](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=53)** From this page, click on create codespace on main.
>
> **[0:58](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=58)** The first time you open up a codespace, it might take a few minutes to create the virtual machine.
>
> **[1:04](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=64)** Once it's done, you'll enter the code editor environment.
>
> **[1:08](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=68)** If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers.
>
> **[1:15](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=75)** Your course can have one or more extensions pre-installed based on the course you're taking.
>
> **[1:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=80)** Those can be found in the extensions panel.
>
> **[1:25](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=85)** Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[1:31](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=91)** If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=97)** You can always get the codespace back for this repo right here.
>
> **[1:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=106)** Notice that it even remembered that I had opened the extensions panel.
>
> **[1:51](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=111)** An alternate way to create a codespace is directly from one of our course's GitHub repositories.
>
> **[1:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=117)** From here, click code and then create codespace on main.
>
> **[2:02](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=122)** You can also restart a previous codespace from this location.
>
> **[2:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=126)** GitHub Codespaces is compatible on devices with smaller screen sizes, like mobile phones or tablets, but it is optimized for larger screens, so we recommend that you practice along with this course on a laptop or desktop computer.
>
> **[2:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=142)** The sample course I'm looking at is what is known as a flat branch repository.
>
> **[2:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=147)** You can tell because there's a single branch when you click on the branch icon on the status bar.
>
> **[2:32](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=152)** You can also tell because there are different folders for each of the videos in the course.
>
> **[2:38](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=158)** This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks.
>
> **[2:45](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=165)** If you go to the branch icon on the status bar, you can see that there's more than one branch.
>
> **[2:50](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=170)** You can switch to the different branches using this menu.
>
> **[2:54](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=174)** The branches are named with the chapter and the video number you're watching.
>
> **[2:58](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=178)** If you see a B at the end of the branch, that's how the code looked at the beginning.
>
> **[3:02](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=182)** If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=186)** Let's switch to how the code looked on chapter two in the third video.
>
> **[3:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=192)** I'll choose the beginning branch.
>
> **[3:15](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=195)** As you work through a course, you might make some changes on a branch.
>
> **[3:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=199)** I'm going to make a minor edit on the index.html file right here.
>
> **[3:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=207)** I'm going to go ahead and save that, and you can see that I've modified this file, because there's an M right here and the branch name now has an asterisk on it.
>
> **[3:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=217)** If I try to switch to another branch that causes major changes, like, say, 0703E, I may see a dialog box like this.
>
> **[3:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=229)** If you don't care about saving your changes, you can simply hit the force checkout button.
>
> **[3:54](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=234)** It will let you switch to that branch.
>
> **[3:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=237)** You can then choose to discard the changes on this file.
>
> **[4:01](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=241)** Your instructor will let you know what the folder structure is for your course.
>
> **[4:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=246)** Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the codespace.
>
> **[4:16](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=256)** To create your own fork, you can click on the fork button on their repository.
>
> **[4:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=263)** I'm going to hit create fork.
>
> **[4:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=267)** Now I have my own copy of this repository, and if I want to, I can start a new codespace on that fork.
>
> **[4:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=279)** This forked version is almost exactly like the original repository, but it will let you push your own changes.
>
> **[4:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=286)** Notice that the URL of the repository is slightly different.
>
> **[4:50](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=290)** Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it.
>
> **[5:03](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=303)** You'll note that there is an M right here, as well as an asterisk on this branch.
>
> **[5:08](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=308)** In the source control panel, you can also see a 1 for the change that we just made.
>
> **[5:14](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=314)** Let's go ahead and try to commit this change.
>
> **[5:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=320)** I'm going to hit the commit button, and I'll ask it to go ahead and stage the changes.
>
> **[5:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=328)** And then I'm going to hit this button here.
>
> **[5:32](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=332)** I'll hit OK.
>
> **[5:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=334)** You can also let it go ahead and run git fetch.
>
> **[5:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=337)** That way, it'll automatically sync with your forked repo.
>
> **[5:41](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=341)** Now that change will be stored in your own version of this repository.
>
> **[5:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=346)** Don't worry if you forget to fork a repo and then try to push changes.
>
> **[5:50](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=350)** Codespaces will also ask you if you want to create a fork automatically.
>
> **[5:55](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=355)** Look for additional course-specific tips from the instructor.
>
> **[5:58](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-github-codespaces-with-this-course?u=76281980&t=358)** Now let's get back to the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (4), this. (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (2), go to (1)
> **Definitions:** is a  (4), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)


### 1. Creating and Building Monorepos

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Creating your first monorepo
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=0)** - [Instructor] We're going to create your first monorepo, but before we begin, make sure you have an active repository on your workspace.
>
> **[0:08](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=8)** Use the comments git init to initialize a new repository, or git clone with the URL where you want to download your original repository.
>
> **[0:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=23)** I already have my repository initialized and connected with GitHub.
>
> **[0:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=28)** Now you need to install Rush on your system.
>
> **[0:31](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=31)** Rush is a Monorepo manager that is reliable and scalable.
>
> **[0:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=36)** You can find more information about it on [rush.io](https://rush.io).
>
> **[0:40](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=40)** I'm working on Visual Studio Code, and we'll use the terminal.
>
> **[0:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=44)** The first thing I'll do is to install Rush with the command npm install -g.
>
> **[0:53](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=53)** This means the application will be globally available on your whole system.
>
> **[0:58](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=58)** Now include the name of the package, in this case, Microsoft/rush.
>
> **[1:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=66)** Hit enter, and this will install Rush on your system.
>
> **[1:10](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=70)** To ensure everything is installed properly, let's run these two commands.
>
> **[1:16](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=76)** First type node --version.
>
> **[1:21](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=81)** Here you see the node version installed, and second type rush --h.
>
> **[1:30](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=90)** This way, we know that both Rush and Node are up and running.
>
> **[1:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=94)** Now that we have all the settings required, we need to run the first command to initialize the monorepo.
>
> **[1:40](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=100)** Here in the terminal type rush init and hit enter.
>
> **[1:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=109)** This will start our first monorepo, and let's peruse the files that Rush created for you.
>
> **[1:56](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=116)** First, you'll find the common folder with configuration settings we can use across all the different applications in this Monorepo.
>
> **[2:03](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=123)** We also have different configuration files, especially the Rush.json file that manages the configuration of the whole project.
>
> **[2:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=133)** Now that the repo is successfully created, it's time to save the changes in a GitHub repository.
>
> **[2:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=140)** I'm going to clean the terminal with command + K and type git add .to stage all the different files we just created, and commit the changes with Git Commit -M and include a new message init repo.
>
> **[2:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=164)** Now all your files are stored in the main repository.
>
> **[2:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-your-first-monorepo-26274110?u=76281980&t=168)** If you followed these steps, congratulations, you just created the monorepo using rush.

> [!info]- Semantic Content
>
> **CLI Commands:** git (4), node (3), find (2), make (1), npm (1)
> **Tools:** terminal (3), github (2), visual studio (1)
> **Prerequisites:** install (4), make sure you have (1)
> **Code Keywords:** let (2), case, (1)
> **File Paths:** rush.json (1)
> **URLs:** [rush.io](https://rush.io) (1)
> **Env Vars:** url (1)
> **Definitions:** is a  (1)

#### Setting up config files
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=0)** - [Instructor] Configuration settings are key to keep your monorepo organized and consistent.
>
> **[0:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=5)** In a Rush based monorepo, these settings are stored in the rush.json file.
>
> **[0:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=11)** When you open this file for the first time in Visual Studio Code, you're likely to see some syntax errors.
>
> **[0:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=17)** To fix that, go to the lower right corner of the screen and select the language mode.
>
> **[0:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=23)** Click here. You might say JSON, and then JSONC, select the JSON with comments option.
>
> **[0:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=34)** This enable support for comments inside JSON files and removes those error messages.
>
> **[0:40](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=40)** If you run into issues building your app, make sure the rush.json file includes matching versions for Rush No JS and PMPM.
>
> **[0:50](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=50)** The easiest way to check is by typing in the terminal rush --version to verify the current version of your system.
>
> **[1:01](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=61)** Right after that, you can run node --version and look on the rush.json file, the value node supported version range.
>
> **[1:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=79)** Compare it with your current node version, and if it's within the specified range, Rush will work without issues or update if necessary.
>
> **[1:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/setting-up-config-files-26270150?u=76281980&t=88)** Keep this in mind anytime you upgrade node or work with an older config file and make sure to update this version range so everything runs smoothly.

> [!info]- Semantic Content
>
> **CLI Commands:** node (4), make (2)
> **Env Vars:** json (3), jsonc (1), pmpm (1)
> **File Paths:** rush.json (3)
> **UI Navigation:** select the (2), go to (1)
> **Tools:** visual studio (1), terminal (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Adding a new project
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=0)** - [Instructor] Let's create a new project and add it to your monorepo.
>
> **[0:04](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=4)** First, I want to modify this project.
>
> **[0:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=7)** I will create a new folder called Monorepos, and inside this folder, I want to include the name of this lesson.
>
> **[0:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=19)** I will move the rush.json file and the Common folder.
>
> **[0:31](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=31)** Those are the configuration files for Rush.
>
> **[0:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=34)** Now we can handle Rush monorepo inside this folder.
>
> **[0:38](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=38)** Let's start by creating a new folder called Apps.
>
> **[0:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=44)** This folder will be the host of all the applications in this monorepo.
>
> **[0:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=49)** To open this monorepo, just select the folder, right click and select the option Open in Integrated Terminal.
>
> **[1:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=60)** As you can see, we are inside this folder and every comment we include here only affects this monorepo.
>
> **[1:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=69)** So let's create a new project.
>
> **[1:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=72)** Let's go to the new folder called Apps with the command cd apps and include the command npm create vite customers.
>
> **[1:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=87)** This will create a new project using vite, and the project will be called Customers, hit Enter.
>
> **[1:35](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=95)** In this case, I want to select React project based on JavaScript.
>
> **[1:40](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=100)** There's no need to run npm install.
>
> **[1:43](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=103)** Rush will handle all the dependencies for you.
>
> **[1:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=106)** Now, let's add your projects to this monorepo.
>
> **[1:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=109)** Open the rush.json file and find the project's value.
>
> **[1:59](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=119)** Here we can include all the projects for this monorepo.
>
> **[2:03](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=123)** We need to include two values.
>
> **[2:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=125)** First, the package name, we can copy here, the package name, and the other value it's project folder.
>
> **[2:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=137)** For the package name, this should match the name registered in the app package JSON file.
>
> **[2:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=143)** So let's open the new app called Customers, locate the package, the JSON file, and find the name value, in this case customers.
>
> **[2:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=156)** So including here, and the project folder in this case is apps/customers.
>
> **[2:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=166)** Save and if you want to add more apps, just repeat this process, and here comes the best part of setting up a monorepo using Rush, it's running the command rush update, hit Enter.
>
> **[3:02](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=182)** This command pulls together the dependencies of all your configured projects and install them in one central location.
>
> **[3:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=189)** Run this command every time you start working on a new project or make dependency changes.
>
> **[3:14](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=194)** Check the Commons folder of this project.
>
> **[3:18](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=198)** Inside it, you find the Temp folder and here is located a Node_models folder where all the dependencies are located.
>
> **[3:30](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=210)** If you check your project Node_models folder, you'll notice they only contain the most essential dependencies.
>
> **[3:40](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/adding-a-new-project?u=76281980&t=220)** These setup make it easier to maintain, update, and scale your projects efficiently.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), npm (2), make (2), cd (1)
> **Code Keywords:** let (6), case, (1)
> **UI Navigation:** select the (2), open the (2), go to (1)
> **Prerequisites:** install (2), setup (1)
> **File Paths:** rush.json (2)
> **Env Vars:** json (2)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Running commands
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=0)** - [Instructor] Running rush comments is a crucial part of the development workflow in a monorepo environment.
>
> **[0:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=5)** Let me show you how to do it.
>
> **[0:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=7)** First, locate the folder that contains your monorepo.
>
> **[0:10](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=10)** In this case, I have the name of this lesson, right click on it and select the option Open in Integrated Terminal.
>
> **[0:18](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=18)** This will open a terminal session with access to all rush comments.
>
> **[0:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=23)** The first thing you should do is to update the project dependencies.
>
> **[0:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=27)** In the terminal type rush update.
>
> **[0:31](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=31)** Hit Enter.
>
> **[0:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=33)** This comment, make sure all dependencies are installed correctly and your workspace is up to date.
>
> **[0:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=39)** If you encounter any issues running this comment, try resetting and install dependencies with the following comment.
>
> **[0:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=46)** Type rush, update and include the argument --perch.
>
> **[0:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=57)** This comment clears the existing state and reinstalls packages, which often resolves set of problems.
>
> **[1:04](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=64)** Next, navigate to the application folder you want to work on.
>
> **[1:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=67)** For example, here we are working on an application called Customers Inside an Apps folder.
>
> **[1:15](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=75)** So to navigate there type cd apps/customers.
>
> **[1:24](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=84)** Once you incite the folder, you can run local development comments using rushx.
>
> **[1:32](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=92)** If you open the package, the JSON file of this project, you can find a list of available comments.
>
> **[1:41](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=101)** For example, if you want to run the dev comment type rushx and then the comment, dev.
>
> **[1:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=109)** This will make the app start in local mode with shared dependencies stored on the monorepo.
>
> **[1:55](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=115)** With this comment, you can debug the code of a single application of a monorepo.
>
> **[1:59](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-commands?u=76281980&t=119)** Now you're ready to run comments and manage your apps using rush.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), cd (1), find (1)
> **UI Navigation:** click on (1), select the (1), navigate to (1), open the (1)
> **Tools:** terminal (3)
> **Code Keywords:** let (1), case, (1)
> **Analogies:** for example (2)
> **Env Vars:** json (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)

#### Building your monorepo
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=0)** - [Instructor] Building projects is essential for testing and deploying your applications.
>
> **[0:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=5)** I have two projects that need to be added to this monorepo.
>
> **[0:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=9)** So first, I locate the monorepo for this lesson and locate the rush.json file.
>
> **[0:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=19)** Here I have one project included, and in the apps folder, I include two more called Finance and Shop.
>
> **[0:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=28)** So to make sure the name of the package, just open the project, select package to JSON, and verify the name of the project.
>
> **[0:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=39)** In this case, I include a finance application located in apps/finance.
>
> **[0:52](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=52)** I repeat the process one more time for a shop application located in apps/shop.
>
> **[1:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=65)** Save the changes.
>
> **[1:08](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=68)** Right click on my monorepo folder, open in integrated terminal, and here I can run the command rush update.
>
> **[1:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=80)** This install all dependencies in a shared folder.
>
> **[1:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=83)** And now you can start the building process.
>
> **[1:26](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=86)** This is way to build a process using rush is by running the command rush, build.
>
> **[1:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=94)** Here, rush start building your projects.
>
> **[1:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=97)** This means it creates an optimized or compiled version of each application.
>
> **[1:43](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=103)** For example, in the rush.json file, you can see that I have a package named customers.
>
> **[1:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=109)** To build only this package, run rush, build -o
>
> **[1:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=117)** and the name of the package, customers.
>
> **[2:01](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=121)** This command builds only that one application.
>
> **[2:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=125)** Rush has a built-in cache system.
>
> **[2:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=127)** If you build a project with no changes, the process is much faster.
>
> **[2:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=131)** Rush simply checks that everything is already built and up to date, so skips unnecessary steps.
>
> **[2:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=137)** If you make a change in one of your application, rush will detect it and rebuild only that modified app.
>
> **[2:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-your-monorepo-26273169?u=76281980&t=143)** This way, every time you run the build process, you get faster and more efficient results.

> [!info]- Semantic Content
>
> **File Paths:** rush.json (2)
> **CLI Commands:** make (2)
> **UI Navigation:** open the (1), click on (1)
> **Code Keywords:** case, (1)
> **Env Vars:** json (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)

#### Monorepo Git hooks
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=0)** - [Instructor] Working on Monorepos is about large code bases and independent teams working on different parts of the code.
>
> **[0:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=7)** You need to make sure every new change meet the standards and Git Hooks can help.
>
> **[0:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=12)** Git Hooks are simple task that you can attach to your Git events.
>
> **[0:18](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=18)** Here is a list of possible Git events.
>
> **[0:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=22)** You can install Git Hooks on your Monorepos just by following a couple of simple steps.
>
> **[0:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=27)** Let me show you.
>
> **[0:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=28)** First, locate the common folder and inside it the Git Hooks folder.
>
> **[0:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=33)** If you want to create a hook for a specific event just select the event.
>
> **[0:38](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=38)** In this case, I want to create a hook for the pre-commit event and go to the Git Hooks folder, create the new file and name it as the event that you want to track.
>
> **[0:52](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=52)** Keep in mind that we don't need to include any extension.
>
> **[0:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=57)** Git Hooks can analyze your code or run arbitrary tasks.
>
> **[1:02](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=62)** For example, I want to run at node common here just by running node and including the path to a script that I already created in this case common scripts my task dot JS.
>
> **[1:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=82)** So every time a user try to commit any change to my repository, this no task will run into my system.
>
> **[1:31](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=91)** So, the task that I have here is just a simple message that will be displayed on the terminal.
>
> **[1:40](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=100)** Before I can run this, I want to make sure that my Git Hook it's ready to run on my system.
>
> **[1:47](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=107)** So, I want to make sure that I have permissions.
>
> **[1:51](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=111)** And in this case, I want to go to CD common Git Hooks and make sure that I have the permissions with the common CH mode plus X and the name of the file, in this case pre commit.
>
> **[2:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=133)** Now I'm ready to run this hook into my system but I need to rush, run this code into all my applications that are contained on my Monorepo.
>
> **[2:24](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=144)** So, I need to run the command rush install.
>
> **[2:30](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=150)** Now my Git Hook it's available on all my applications.
>
> **[2:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=154)** Let's test it.
>
> **[2:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=156)** Running the common kit, add point, and git commit.
>
> **[2:47](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=167)** So when I try to commit anything to my repository at Split Center, you can see that the message included on my task is visible on the terminal.
>
> **[2:59](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=179)** You can also include different hooks for the same Monorepo.
>
> **[3:03](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=183)** Let's create another one.
>
> **[3:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=185)** Go to the Gits Hook folder, create a new file.
>
> **[3:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=189)** And in this case we're going to process the commit message.
>
> **[3:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=193)** So, we're going to include the commit dash MSG and here we're going to include a code that will verify the commit message.
>
> **[3:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=207)** And in case we have less than three words it will show an invalid message.
>
> **[3:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=213)** So this way we can include any standard.
>
> **[3:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=216)** Let's save it.
>
> **[3:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=219)** Make sure that we have permissions.
>
> **[3:43](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=223)** So we run the CH mode, plus X and the commit dash MSG
>
> **[3:52](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=232)** commit.
>
> **[3:53](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=233)** Let's run the rush install comment to make sure that this hook is available all across my Monorepo.
>
> **[4:03](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=243)** And let's move to another part of this Monorepo.
>
> **[4:10](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=250)** Now I'm going to include one change in my code just to make sure that something to commit.
>
> **[4:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=260)** And here in the terminal, I'm going to commit with git at everything and git commit dash M.
>
> **[4:35](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=275)** And in this case I'm just going to include one single word in order to trigger the git hook that validates the message.
>
> **[4:47](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=287)** So press enter.
>
> **[4:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=289)** And as you can see here we have no JS task that can run anything on my computer, for example, optimizing images or changing or building something additional to make sure that my Monorepo can run.
>
> **[5:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=306)** And also the standards here, verifying that I have at least three words every time I commit.
>
> **[5:15](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/monorepo-git-hooks?u=76281980&t=315)** Using Git Hooks can help you to scale your process by automating task across projects.

> [!info]- Semantic Content
>
> **CLI Commands:** git (16), make (8), node (2), cd (1)
> **Code Keywords:** let (6), case, (2), this, (1)
> **UI Navigation:** go to (3), select the (1)
> **Tools:** terminal (3)
> **Prerequisites:** install (3)
> **Env Vars:** msg (2)
> **Analogies:** for example (2)
> **Definitions:** is a  (1)

#### Installing shared components
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=0)** - Sharing and reusing code is one of the most important things when using a monorepo.
>
> **[0:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=6)** This lesson will show you how to create and install one common component into your monorepo.
>
> **[0:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=13)** Here in this monorepo, I created a folder called libs.
>
> **[0:18](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=18)** Inside it and included a new UI component.
>
> **[0:21](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=21)** In this case, a button based on React.
>
> **[0:25](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=25)** I'm going to share this new component with another app on my monorepo.
>
> **[0:31](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=31)** The first step is to register this new component into my Rush project.
>
> **[0:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=36)** So I will copy one of the current items in the Rush Jason file.
>
> **[0:43](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=43)** And include the settings for this new component.
>
> **[0:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=48)** In the package name, we need to include the name of the package we have for this component.
>
> **[0:54](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=54)** We need to verify the name on the package, Jason, in this case, is at my libs slash component.
>
> **[1:03](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=63)** I'm going to copy this value and include it in here.
>
> **[1:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=67)** The project to folder in this case is libs slash component.
>
> **[1:14](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=74)** I'm going to save this file and now I need to run the rush update comment That will update my monorepo installing every dependency and external library this new component may have.
>
> **[1:30](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=90)** Now let's install the new UI component on one of my apps.
>
> **[1:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=94)** To do so, I need to edit the source code.
>
> **[1:38](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=98)** In this case, I'm going to find the apps shop and then the folder is RC.
>
> **[1:47](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=107)** Inside this, you can find the app dot JES file.
>
> **[1:51](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=111)** Here we are working on a React application and I need to import my share library.
>
> **[1:56](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=116)** In this case, the new component called the big red button.
>
> **[2:01](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=121)** So I need to import it, use it import and the name of the library, which in this case is Big red button from the name of the package, in this case @ my libs slash component
>
> **[2:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=147)** And now that I have imported it, I can include the new component in the code.
>
> **[2:32](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=152)** Here, I can have the big red button.
>
> **[2:47](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=167)** And save it.
>
> **[2:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=169)** The new share component is ready to use but I need to run two more steps.
>
> **[2:55](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=175)** The first, is to run, rush build.
>
> **[3:04](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=184)** This way I can ensure that my application and the new component are already built and available to use.
>
> **[3:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=192)** And as you may notice, here, I have an error.
>
> **[3:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=197)** That's because I didn't registry my new library.
>
> **[3:21](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=201)** To register a library into one of my apps I need to run one specific comment.
>
> **[3:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=207)** And I need to browse to this application.
>
> **[3:30](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=210)** In this case, I need to type CD apps slash shop.
>
> **[3:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=219)** And I need to run the common rush add dash dash package.
>
> **[3:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=228)** And here I need to include the name of the package in this case @ my dash libs slash component.
>
> **[4:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=246)** Now my app can access the shared library.
>
> **[4:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=251)** And since we're working on a monorepo, changes are synchronized.
>
> **[4:16](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=256)** Every change in the common library will appear on every app using it.
>
> **[4:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=262)** Let's see the final result by running the common rush X start Rush X allows me to run specific comments inside one application.
>
> **[4:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=277)** For example, here, in the package to Jason of the shop app, we have a start comment.
>
> **[4:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/installing-shared-components?u=76281980&t=286)** And here I finally have the big red button import from a common library.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (5), let (2), this, (1)
> **CLI Commands:** find (2), cd (1)
> **Prerequisites:** install (2)
> **Env Vars:** jes (1)
> **Exercise Files:** source code (1)
> **Analogies:** for example (1)
> **Speakers:** - sharing (1)


### 2. Tools to Manage Your Monorepos

> [[#Table of Contents|↑ Back to Table of Contents]]

#### How to migrate projects to your monorepo
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=0)** - [Instructor] Your monorepo is where all your projects live together sharing code and dependencies.
>
> **[0:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=5)** In this lesson, I will show you how to grow your monorepo by importing new projects.
>
> **[0:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=11)** Here in the apps folder, I have a new application called 'new_app'.
>
> **[0:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=17)** Let's pretend I just copy this 'new_app' into my monorepo.
>
> **[0:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=22)** Even if the app is running properly, it could contain system file from its older repository.
>
> **[0:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=28)** That means even if we have the new code inside our monorepo folders, the app could be (indistinct) We need to remove any trace of previous repositories.
>
> **[0:43](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=43)** So, to clean this folder, first we need to browse to this new application.
>
> **[0:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=49)** To, so, I need to go to the terminal and type: cd apps/new_app Here I am inside the 'new _app' and I need to remove any traces from git by typing: rm dash (-) rf dot (.)
>
> **[1:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=73)** git This will remove the git folder with possibly outdated info.
>
> **[1:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=83)** We also need to remove system files that could affect dependencies.
>
> **[1:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=88)** In this case, I will remove files that are often present on external repos.
>
> **[1:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=94)** Here I will include a command that will remove files such as 'package-lock.json' or 'shrinkwrap.yaml'.
>
> **[1:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=106)** Now I need to ensure that the project is include in the rush, the 'json' file, by adding a new entry for my new project.
>
> **[1:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=117)** Here I'm included the package name, in this case 'new_app' and the path to the project folder in this case 'apps/new_app'.
>
> **[2:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=129)** Now we're ready for a fresh start.
>
> **[2:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=132)** To do so, we need to run these commands.
>
> **[2:15](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=135)** First, we need to run rush install, then rush update, and finally, rush build.
>
> **[2:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=154)** The first command will take all the common configurations.
>
> **[2:38](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=158)** For example, the git hooks and copy them into my new project.
>
> **[2:42](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=162)** Once I have run the rushing style, we need to update all the dependencies on the monorepo.
>
> **[2:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=168)** So we need to run the rush update and build commands.
>
> **[2:53](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=173)** Now, the new project, it's imported and it's part of our monorepo.
>
> **[2:58](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=178)** Imported new projects, it's an easy process to make your monorepo grow.
>
> **[3:02](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-migrate-projects-to-your-monorepo?u=76281980&t=182)** Just remember to run your test before merging the code to prevent errors.

> [!info]- Semantic Content
>
> **CLI Commands:** git (4), cd (1), rm (1), make (1)
> **Code Identifiers:** new_app (5)
> **Code Keywords:** let (1), type: (1), case, (1), finally, (1)
> **File Paths:** package-lock.json (1), shrinkwrap.yaml (1)
> **Analogies:** such as (1), for example (1)
> **Tools:** terminal (1)
> **UI Navigation:** go to (1)
> **Best Practices:** remember to (1)

#### Running custom commands on your monorepo
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=0)** - [Instructor] Switching projects and running different commands across your monorepo could be confusing.
>
> **[0:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=5)** This lesson will show you how to create global, custom commands.
>
> **[0:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=9)** Let me show you one problem.
>
> **[0:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=11)** Here, I have a monorepo with multiple apps, and I need to run unit test on every application, but to do so, I have to browse one by one the folders that contains my applications.
>
> **[0:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=23)** For example, I need to go to cd apps/customers to open one of my applications, then open the package.json file and find the scripts section.
>
> **[0:45](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=45)** In this case, I need the test script.
>
> **[0:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=48)** So, I can use rushx and then call the script, in this case, test.
>
> **[0:56](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=56)** And this is a manual process that I need to repeat for each application of my monorepo, and it's not scalable.
>
> **[1:04](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=64)** That's why we can use global commands.
>
> **[1:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=67)** Here, I have the command-line-json file.
>
> **[1:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=73)** You can find it on the command/config/rush folder.
>
> **[1:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=79)** To create a new global command, find the commands section and include an entry.
>
> **[1:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=88)** In the commandKind property, you can add the value bulk.
>
> **[1:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=93)** This means I'm creating a bulk command that will run on each of my applications.
>
> **[1:40](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=100)** Here in the name, I'm going to name it testrush.
>
> **[1:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=109)** These combinations means rush will try to run the command called testrush on each app of the monorepo.
>
> **[1:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=117)** We can also include different properties, such as a summary and description, and enable them to run in parallel, allowing the bulk process to run faster.
>
> **[2:08](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=128)** Before running this command, we must ensure it's present on all the applications.
>
> **[2:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=133)** So I will open the package.json file of each application and include this new process in the scripts section.
>
> **[2:21](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=141)** In my case, the new command is called testrush.
>
> **[2:25](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=145)** So I will go to the scripts section and include this new task, testrush.
>
> **[2:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=153)** Here, I copy the test command because I want to run the unit test, but I need to include an additional value which is --watchAll =false.
>
> **[2:59](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=179)** This will ensure the process close once the tests are finished and don't crash my bulk command.
>
> **[3:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=187)** I'm going to save this file.
>
> **[3:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=189)** And remember to repeat this process on the package.json file on every other application.
>
> **[3:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=197)** Let's see the new command in action.
>
> **[3:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=200)** Let's go to the terminal and remove this command and type rush, which is a global command, and now we can call the new custom command, in this case, testrush.
>
> **[3:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/running-custom-commands-on-your-monorepo?u=76281980&t=217)** You can change it or include new shared commands to fit the needs of each project to create customer workflows on your monorepos.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (4), let (3)
> **UI Navigation:** go to (3), open the (2)
> **CLI Commands:** find (3), cd (1)
> **File Paths:** package.json (3)
> **Definitions:** is a  (2), is called (1)
> **Code Identifiers:** commandkind (1), watchall (1)
> **Analogies:** for example (1), such as (1)
> **Tools:** terminal (1)

#### Dependabot pull requests
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=0)** - [Instructor] Dependabot is a GitHub tool to keep your dependencies secure and up to date.
>
> **[0:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=6)** To install Dependabot, go to GitHub, select your repo, and click on Insights.
>
> **[0:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=13)** You can find the Dependency graph, which is a list of all the dependencies you have in use.
>
> **[0:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=20)** Find the Dependabot tab, and if you haven't created yet, click on the Enable Dependabot.
>
> **[0:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=28)** Now, we need to create a config file.
>
> **[0:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=33)** Dependabot scans your dependency files for outdated or insecure dependencies.
>
> **[0:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=39)** Here, we can set up the settings for that process.
>
> **[0:43](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=43)** Here, I have one code previously made where I'm going to include some settings.
>
> **[0:50](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=50)** The first one is to include the package ecosystem.
>
> **[0:54](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=54)** In this case, I am using a React-based application so I need to include the value npm.
>
> **[1:03](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=63)** The directory is the place where we store the package.json files.
>
> **[1:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=67)** So, in this case, we can set the schedule for this process to run again.
>
> **[1:16](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=76)** In this case, I want to set it daily.
>
> **[1:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=80)** And it's possible to define reviewers, commit message, and even limit the number of open pull requests.
>
> **[1:30](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=90)** Now, let's save this config file clicking on Commit new file, and Dependabot now starts scanning and creating pull requests for dependencies that need an update.
>
> **[1:42](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=102)** If you want to edit the scan settings, find the .github folder, and inside this, the dependabot.yml file.
>
> **[1:53](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=113)** Here, you can edit the settings for your Dependabot.
>
> **[1:58](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=118)** Make sure that you have Dependabot alerts enabled on Settings, Security and analysis, and click on Enable Dependabot alerts.
>
> **[2:14](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=134)** Here, I have a similar repo after the Dependabot scan is finished.
>
> **[2:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=140)** As you may notice, we have security issues, and if we click on the Dependabot alerts, we can check and detect what are the problems.
>
> **[2:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=153)** We have also pull request for my outdated dependencies.
>
> **[2:41](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=161)** Even if the process is automatic, you can manually review, test and merge dependable changes.
>
> **[2:47](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/dependabot-pull-requests?u=76281980&t=167)** Dependabot is an easy automatic tool to keep your monorepo secure and updated.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3), npm (1), make (1)
> **Code Keywords:** case, (3), let (1), this, (1)
> **UI Navigation:** click on (4), go to (1)
> **Tools:** github (3)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** package.json (1), dependabot.yml (1)
> **Prerequisites:** install (1), set up (1)
> **Speakers:** - [instructor] (1)

#### Other tools to manage monorepos
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=0)** - [Instructor] In this lesson, we're going to talk about the tools to build your monorepos.
>
> **[0:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=5)** The most important thing to remember is that monorepos are not monoliths.
>
> **[0:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=11)** Monoliths are massive blocks of code that builds all at once.
>
> **[0:16](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=16)** Monorepos, on the other hand, are just a group of apps, develop and deployed separately.
>
> **[0:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=22)** Each app on a monorepo needs to be flexible and independent, and that's why building tools are crucial.
>
> **[0:29](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=29)** Building tools can make or break a project.
>
> **[0:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=33)** Each monorepo has its own developer culture, requirements and constraints, and every tool has its strength.
>
> **[0:41](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=41)** That's why there is no silver bullet.
>
> **[0:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=44)** I want to show you a list of monorepo managers, so you can have more options to choose how to build your project.
>
> **[0:52](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=52)** The first tool is Bazel, an open-source tool supported by Google.
>
> **[0:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=57)** It supports multiple languages such as Java C++ or Python.
>
> **[1:02](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=62)** It is widely used for machine-learning projects.
>
> **[1:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=65)** Since TensorFlow, a popular machine learning platform used Bazel to build Python projects.
>
> **[1:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=72)** Bazel used the Starlark language to manage configuration and settings.
>
> **[1:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=77)** Next, we have Lerna.
>
> **[1:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=80)** Lerna is designed for JavaScript projects.
>
> **[1:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=83)** It has a good integration with the Babel compiler and in learner, all projects are packages and advantages repos as multipackage repositories.
>
> **[1:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=94)** Buck is another tool that is designed and used by Facebook.
>
> **[1:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=99)** Buck users, such as Airbnb or Uber report benchmarks of up to 50% faster builds and smaller apps.
>
> **[1:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=108)** Buck is commonly used for Android and iOS development.
>
> **[1:53](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=113)** Finally, we have Rush, sponsored by Microsoft.
>
> **[1:56](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=116)** This monorepo manager is designed for JavaScript projects.
>
> **[2:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=120)** It scans and organized dependencies and move them to a single place to keep better track, prevent duplicates and phantom dependencies.
>
> **[2:10](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/other-tools-to-manage-monorepos?u=76281980&t=130)** Rush is the tool that we are using in discourse because it's easy to build, test, and deploy monorepos.

> [!info]- Semantic Content
>
> **CLI Commands:** python (2), make (1)
> **Analogies:** such as (2)
> **Code Keywords:** finally, (1)
> **Code Identifiers:** ios (1)
> **Speakers:** - [instructor] (1)


### 3. GitHub Actions for Monorepos

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Getting familiar with GitHub Actions
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=0)** - [Instructor] GitHub Actions are powerful tools that allows you to automate tasks, and design workflows to build and deploy applications.
>
> **[0:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=9)** To install GitHub Actions, go to GitHub, select your repo, and click on Actions.
>
> **[0:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=17)** Here you can find pre-made workflows for popular services and stacks.
>
> **[0:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=23)** Let's create a simple GitHub action.
>
> **[0:25](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=25)** I'm going to click here on set up a workflow yourself.
>
> **[0:30](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=30)** Here we have a very basic example of a GitHub action.
>
> **[0:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=36)** Let's start including a name.
>
> **[0:40](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=40)** Now, we have what will trigger this action.
>
> **[0:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=44)** In this case, we have two different events, the push and the pull request.
>
> **[0:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=49)** That means every time someone push code to the main branch, or someone make a pull request to the main branch, we will trigger this action.
>
> **[0:59](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=59)** If you want to include new branches, you can just add it in here.
>
> **[1:04](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=64)** Next, we have the workflow_dispatch.
>
> **[1:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=67)** I will show you this later.
>
> **[1:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=71)** Then we have the jobs.
>
> **[1:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=73)** That means a list of different tasks that we can run in parallel.
>
> **[1:18](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=78)** For example here, we have a build task.
>
> **[1:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=80)** Actions use code packages in Docker to run operative systems.
>
> **[1:25](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=85)** So we can select here, the operative system, in this case, Ubuntu.
>
> **[1:30](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=90)** Once we have our container running, we can run steps.
>
> **[1:35](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=95)** For example here, we are checking out the code from a repo, and then running comments inside the container.
>
> **[1:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=104)** Let's press on Start commit to save the changes.
>
> **[1:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=109)** And now, we just created our first GitHub action.
>
> **[1:53](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=113)** If you want to modify this file, just go to the GitHub folder workflows, and then select the file with the name of your action, dot yml.
>
> **[2:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=127)** If we check this code again, we know it is that, one of the things that trigger this action , is when someone push code to the main branch, and that is what we just did, by editing this file, we just pushed the changes of this action to the main branch.
>
> **[2:26](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=146)** That means we just trigger the action that we just created.
>
> **[2:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=153)** And if you notice here, we have an icon, that means the action runs successfully.
>
> **[2:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=159)** It's clicking here, and if we click on the job built, here we have details of every step or action just made.
>
> **[2:56](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=176)** If we come back here to the build process, and select on Actions, we can select My Workflo, which is the action that we just created.
>
> **[3:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=191)** In this case, we included the workflow_dispatch, so that means we can run this action manually.
>
> **[3:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=200)** For example, clicking here, and we can select a specific branch to run it, and clicking on Run, that will trigger again my action.
>
> **[3:35](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/getting-familiar-with-github-actions?u=76281980&t=215)** With GitHub Actions, you can create complex workflows, test on different operative systems, and automate tasks for any part of your monorepo.

> [!info]- Semantic Content
>
> **Tools:** github (8)
> **Code Keywords:** let (3), case, (3)
> **UI Navigation:** go to (2), click on (2), select the (1)
> **CLI Commands:** find (1), make (1), docker (1)
> **Analogies:** for example (3)
> **Code Identifiers:** workflow_dispatch (2)
> **Prerequisites:** install (1), set up (1)
> **Speakers:** - [instructor] (1)

#### Creating the perfect workflow for your monorepo
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=0)** - [Instructor] Githubs are powerful tools but to make the perfect workflow for your monorepo, you need to change into its specific parts.
>
> **[0:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=9)** Triggers, for example, define when the workflow starts.
>
> **[0:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=13)** They can be activated by Git events such as pushing code, manually, or even schedule.
>
> **[0:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=20)** When you work with a monorepo with dozens of projects, it's important to know what and when to build or deploy your projects, and triggers can use filters for this.
>
> **[0:32](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=32)** In this example, we have a code that only triggers when the code is pushed to the main branch and the changes were made inside the apps folder.
>
> **[0:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=44)** This, for example, can start building all my apps only when I modify their code but not when a library or configuration files were modified.
>
> **[0:55](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=55)** We can filter even more and define one specific path.
>
> **[0:59](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=59)** In this scenario, the action will be triggered only when a change is pushed from my-app folder and any other change on any other app will be ignored.
>
> **[1:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=72)** Let's talk about the action jobs.
>
> **[1:15](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=75)** Jobs are group of tasks that can be run in parallel.
>
> **[1:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=79)** One important thing of the jobs is that we can run them on multiple operative systems.
>
> **[1:25](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=85)** Here we have a list of three different jobs.
>
> **[1:29](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=89)** All of them can be run in parallel.
>
> **[1:32](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=92)** Here we can, for example, define one specific node that matches with the one we use for development the code.
>
> **[1:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=99)** Jobs can create Docker containers stacked with an operative system and frameworks.
>
> **[1:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=106)** Inside the jobs, we can include steps.
>
> **[1:50](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=110)** Steps are comments that can be executed on a container terminal.
>
> **[1:56](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=116)** We can use almost the same comments that we can use on local.
>
> **[2:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=120)** Using multiple steps, we can compose complex actions.
>
> **[2:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=125)** Here, in this example, we are using several steps.
>
> **[2:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=129)** The first one, it's checking out the code that is on our monorepo.
>
> **[2:14](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=134)** Then installed Node.js and finally, we can run rush comments.
>
> **[2:21](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=141)** As I mentioned, we can use almost the same code as local.
>
> **[2:26](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=146)** We can use in some cases, some changes.
>
> **[2:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=148)** For example here, we are using the install-run-rush.js script.
>
> **[2:35](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=155)** This is a way to expose rush comments on a remote terminal.
>
> **[2:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=159)** When using this format, you can call any rush comment.
>
> **[2:43](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=163)** We can also use custom comments.
>
> **[2:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=166)** For example, here we're using a custom comment that is included on the command-line.json.
>
> **[2:53](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=173)** Any comment that is defined there can be called on the terminal using this format.
>
> **[2:58](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-the-perfect-workflow-for-your-monorepo?u=76281980&t=178)** By using a combination of these tools, you can build workflows on GitHub to filter, build, and deploy any single or group of applications.

> [!info]- Semantic Content
>
> **Analogies:** for example (5), such as (1)
> **CLI Commands:** node (2), make (1), git (1), docker (1)
> **Code Keywords:** this. (1), this, (1), let (1), finally, (1)
> **Tools:** terminal (3), github (1)
> **File Paths:** node.js (1), install-run-rush.js (1), command-line.json (1)
> **Definitions:** is a  (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Creating workflows for your apps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=0)** - [Instructor] You can run a workflow for your monorepos using GitHub actions.
>
> **[0:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=5)** Let me show you how.
>
> **[0:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=6)** Here, I have my monorepo, using Rush, and I am about to modify one action.
>
> **[0:15](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=15)** In this case, I am on the folder, .github/workflows/main.yml or the name of your action .yml, including the name for this action in this case, will be called Run Rush app.
>
> **[0:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=37)** Now, we need to define what will trigger this action.
>
> **[0:42](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=42)** Here, we're going to use, that every time, a user push code from the main branch or we have a pull request for the main branch, this action will be triggered.
>
> **[0:58](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=58)** I'm going to create a job.
>
> **[1:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=60)** In this case, it will be called test.
>
> **[1:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=66)** Before we can start this job, I need to define that we will run it on an ubuntu container.
>
> **[1:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=73)** I need to define the node version as well and define that we're working on a continuous integration environment.
>
> **[1:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=82)** It's time to work on the steps.
>
> **[1:26](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=86)** The first step, it's to check out the code.
>
> **[1:29](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=89)** We need to get the code from our monorepo into the container.
>
> **[1:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=94)** Next step, it's to use and install Node.js.
>
> **[1:40](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=100)** Here, we're going to use Node.js version 14.
>
> **[1:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=106)** Finally, I'm going to run the Rush commands.
>
> **[1:50](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=110)** In this case, I am using the install-run-rush.js interface to expose the Rush commands into my container.
>
> **[2:03](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=123)** So first, I'm going to install and build my application, using Rush.
>
> **[2:10](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=130)** And once I have my application fully functional on the container, I can run custom commands.
>
> **[2:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=137)** For example, here, I'm going to test my code.
>
> **[2:21](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=141)** So now, I'm going to use the install script and call a test command.
>
> **[2:29](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=149)** I am ready to find this custom command into the settings of my project.
>
> **[2:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=154)** To start running this action, let's click on start commit, go to actions, and here, you can see the action is running.
>
> **[2:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=168)** Let's check another action I just run, so you can see how it looks.
>
> **[2:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=177)** Here's the job that I'm running, the test code, and if you notice, here we are running a rush test.
>
> **[3:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=187)** What happens if we want to run just one application?
>
> **[3:10](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=190)** Let's go to the actions and edit the main file.
>
> **[3:18](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=198)** If we want to run just one application, we need to modify one thing.
>
> **[3:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=203)** Find a build command and include an argument called, dash, dash, to and the name of the application that you want to run.
>
> **[3:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=216)** For example, here, I have one application called red-app.
>
> **[3:42](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=222)** This will run only the red-app application and its dependencies.
>
> **[3:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/creating-workflows-for-your-apps?u=76281980&t=229)** GitHub actions can automate testing for your monorepos, improve quality code and prevent possible errors.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (4), finally, (1), interface (1)
> **CLI Commands:** node (3), find (2)
> **File Paths:** node.js (2), github/workflows/main.yml (1), install-run-rush.js (1)
> **Prerequisites:** install (4)
> **Tools:** github (3)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** for example (2)
> **Versions:** version 14 (1)

#### Using multiple workflows for your apps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=0)** - In this monorepo, I have two different applications.
>
> **[0:04](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=4)** Is it possible to run both in the same action?
>
> **[0:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=7)** Let me show you how to do this.
>
> **[0:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=9)** First, locate your action.
>
> **[0:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=12)** Remember, the GitHub actions are located on the dot GitHub folder, slash workflows, and the name, of your action.
>
> **[0:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=20)** In this case, main, dot yaml.
>
> **[0:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=23)** Here, I have one action that will be triggered every time someone push or send a full request to the main branch.
>
> **[0:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=33)** Here, I have a job with a series of steps that eventually run the common rush build.
>
> **[0:41](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=41)** In this case, I am using the dash, dash, two argument, to only run one of the applications, in this case, red app.
>
> **[0:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=49)** Let's modify this action, to run both applications.
>
> **[0:55](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=55)** First, I'm going to modify the triggers.
>
> **[0:59](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=59)** I want to include a filter, here, called pathes.
>
> **[1:04](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=64)** And this will only trigger the action, if the changes are made on the app's folder with the name of my applications.
>
> **[1:18](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=78)** In this case, I have the red app.
>
> **[1:21](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=81)** This in text means that everything inside the red app, will trigger this action and I want to include as well, my blue app.
>
> **[1:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=96)** Now we have here, the jobs.
>
> **[1:38](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=98)** Jobs are tasks, that can be run in parallel.
>
> **[1:41](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=101)** So, I want to copy this job,
>
> **[1:57](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=117)** and change it for blue build.
>
> **[2:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=129)** Here, I'm going to repeat the same actions to build the red application.
>
> **[2:16](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=136)** The first change, it's to modify the build command to run, the blue app.
>
> **[2:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=147)** Next, I'm going to remove the test.
>
> **[2:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=153)** Now, this action will only trigger if we have changes on any of those applications and will run both of them at the same time.
>
> **[2:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=164)** When I click on start commit and commit my changes, this application will start running.
>
> **[2:51](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/using-multiple-workflows-for-your-apps?u=76281980&t=171)** This is how we can run multiple applications using GitHub actions.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (4), let (2), this. (1)
> **Tools:** github (3)
> **UI Navigation:** click on (1)
> **Definitions:** means that (1)
> **Speakers:** - in (1)

#### Building and deploying monorepos with Netlify
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=0)** - In this lesson we are going to prepare our monorepo to deploy applications.
>
> **[0:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=7)** I'm going to use [netlify.com](https://netlify.com) to deploy my application.
>
> **[0:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=13)** You can create a free account, and once you have it, click on New site from Git.
>
> **[0:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=19)** We need to use the same name of our repository to create one site.
>
> **[0:32](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=32)** Here, I'm going to copy the name of my repo, select it, select the branch, where it's going to take the code to deploy.
>
> **[0:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=48)** I'm going to leave the base directory blank.
>
> **[0:52](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=52)** And here, we need to include a build command.
>
> **[0:56](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=56)** We're going to run this code inside an external container.
>
> **[0:59](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=59)** That means we need to run the installing process from scratch.
>
> **[1:04](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=64)** So we need to start with npm install dash g @Microsoft/rush
>
> **[1:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=79)** That will install Rush.
>
> **[1:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=82)** We also have to include rush, install,
>
> **[1:31](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=91)** rush build, rush deploy,
>
> **[1:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=99)** with the argument, dash dash overwrite, dash p to select a package and the name of the package or application in this case, Red App.
>
> **[1:55](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=115)** This will create the application inside this container.
>
> **[1:59](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=119)** Now we need to build it using the Rush X command.
>
> **[2:03](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=123)** So first, we need to go to the folder where our application is created using CD common slash deploy slash apps
>
> **[2:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=140)** and the name of the app.
>
> **[2:26](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=146)** I'm going to copy this, cuz we are going to use it in a minute.
>
> **[2:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=154)** And finally I need to add the command, rush X build.
>
> **[2:45](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=165)** In the Publish Directory, the common deploy apps, the name of the app and slash build, is the value that we need to include.
>
> **[3:01](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=181)** We're ready to deploy this site and at this current moment it is possible that we have errors since we need to configure GitHub.
>
> **[3:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=191)** But first, let's go to site settings and copy the API ID value.
>
> **[3:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=202)** Let's go to our repo, select settings, go to Secrets, and create a New repository secret.
>
> **[3:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=216)** Here, I already created the value NETLIFY_SITE_ID with the value that we just copied.
>
> **[3:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=224)** Now, we need to create another value called NETLIFY_AUTH_TOKIN.
>
> **[3:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=229)** To get this value, we need to go to User settings Applications and create a token.
>
> **[4:01](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=241)** Once you have it, copy the value go to GitHub and include it here, on this secret.
>
> **[4:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/building-and-deploying-monorepos-with-netlify?u=76281980&t=253)** Now, we have our Netlify account and GitHub account ready to deploy applications.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (6), click on (1), select the (1)
> **Code Keywords:** let (2), case, (1), this, (1), include. (1)
> **Prerequisites:** install (3), configure (1)
> **CLI Commands:** git (1), npm (1), cd (1)
> **Env Vars:** api (1), netlify_site_id (1), netlify_auth_tokin (1)
> **Tools:** github (3)
> **URLs:** [netlify.com](https://netlify.com) (1)
> **Speakers:** - in (1)

#### Deploying monorepos with GitHub actions
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=1)** - [Instructor] In this lesson, I will show you how to deploy an application using Rush.
>
> **[0:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=5)** Here, I have a Rush based monorepo.
>
> **[0:08](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=8)** Inside it, I have several apps.
>
> **[0:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=11)** The first step of this process is to select one app to deploy.
>
> **[0:16](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=16)** To do so, I need to select the folder where my monorepo is.
>
> **[0:24](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=24)** Click on Open in Integrated Terminal.
>
> **[0:30](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=30)** And type the comment rush init-deploy --project
>
> **[0:43](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=43)** and the name of the project I want to deploy.
>
> **[0:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=46)** In this case, red-app.
>
> **[0:51](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=51)** This will create a config file called deploy.json on your monorepo's common folder.
>
> **[0:58](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=58)** Now we need to run two more comments, rush build && rush deploy.
>
> **[1:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=72)** Once it's finished, the app is now ready for deploying.
>
> **[1:16](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=76)** Commit all the changes selecting the Source Control Tool.
>
> **[1:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=82)** Include a commit message.
>
> **[1:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=87)** Click on commit.
>
> **[1:29](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=89)** And remember to sync your change with GitHub.
>
> **[1:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=94)** In this example, my Monorepo is located on a sub folder.
>
> **[1:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=99)** So, I will select that folder, right click, and choose Copy Relative Path.
>
> **[1:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=109)** I'm using a Netlify free account to deploy this app, and I need to include this path by clicking on Site Settings, Build and Deploy.
>
> **[2:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=120)** Find Build settings.
>
> **[2:02](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=122)** Click on Edit.
>
> **[2:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=126)** Include my path on the base directory.
>
> **[2:10](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=130)** Now click on Save, and before we leave, make sure that you have your Netlify auth token and site ID.
>
> **[2:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=137)** I already have those values stored on GitHub under Settings, Secrets, Actions, using these to Action secrets.
>
> **[2:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=153)** Now we're ready to create that GitHub action to automate this app deploy.
>
> **[2:39](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=159)** Go to GitHub Actions.
>
> **[2:43](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=163)** Select New workflow.
>
> **[2:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=168)** And click on set up a workflow yourself.
>
> **[2:54](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=174)** Find the jobs section, and under it the build job.
>
> **[3:01](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=181)** Select the code after this.
>
> **[3:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=187)** And remove it.
>
> **[3:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=189)** We're going to replace this code.
>
> **[3:13](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=193)** Let's start creating a virtual machine based on Ubuntu.
>
> **[3:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=197)** Then set up Node.js.
>
> **[3:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=199)** We need it to run Rush comments.
>
> **[3:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=202)** Before running these comments, remember in this example, my monorepo is under a sub folder.
>
> **[3:29](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=209)** So I need to browse there, so I need to browse there first by typing cd and the path to my monorepo.
>
> **[3:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=217)** Now I can run the Rush install and build comments and then tell Rush to deploy my app.
>
> **[3:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=226)** In this case, the name is red-app.
>
> **[3:51](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=231)** Finally, I need to send the app to Netlify by including its libraries.
>
> **[3:58](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=238)** I included the AUTH_TOKEN and SITE_ID I previously stored as Secrets on my repo.
>
> **[4:05](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=245)** Now we are good to go.
>
> **[4:08](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=248)** Change the workflow name to deploy-red-app.yml.
>
> **[4:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=260)** Click on Start commit.
>
> **[4:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=262)** You can include a message and then click on Commit new file.
>
> **[4:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=268)** Now, every time code is merged on the main branch, this GitHub action will be triggered and deployed to Netlify.
>
> **[4:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=276)** Here is the Netlify application using my GitHub code.
>
> **[4:40](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/deploying-monorepos-with-github-actions?u=76281980&t=280)** And if I click here, we can see the application I built with Rush is already up and running.

> [!info]- Semantic Content
>
> **UI Navigation:** click on (7), select the (2), go to (1)
> **Tools:** github (6), terminal (1)
> **CLI Commands:** find (2), make (1), node (1), cd (1)
> **Code Keywords:** case, (2), this. (1), let (1), finally, (1)
> **File Paths:** deploy.json (1), node.js (1), deploy-red-app.yml (1)
> **Prerequisites:** set up (2), install (1)
> **Env Vars:** auth_token (1), site_id (1)
> **Best Practices:** remember to (1)


### 4. Best Practices

> [[#Table of Contents|↑ Back to Table of Contents]]

#### How to design your monorepo
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=0)** - [Narrator] Before you add the first line of code it's crucial to plan and design your monorepo.
>
> **[0:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=7)** The first step is to select the right tools.
>
> **[0:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=9)** Detect the specifics of your project.
>
> **[0:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=12)** Such as constraints, risk, and requirements before.
>
> **[0:16](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=16)** Every tool has trade offs, a clear picture of your project needs will help you to choose wiser.
>
> **[0:23](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=23)** Big monorepos could put any tool to its limits.
>
> **[0:26](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=26)** So before choosing any monorepo manager run performance test on the realistic scenarios and compare results.
>
> **[0:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=34)** Always ask your DevOps for suggestions.
>
> **[0:38](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=38)** They understand the project needs an infrastructure and could provide critical feedback.
>
> **[0:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=44)** Every project needs order and naming conventions are fundamental.
>
> **[0:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=48)** A global naming convention could help team members add elements faster and create a standard set of rules to make it easier to understand the project.
>
> **[0:59](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=59)** There are no specific rules on monorepo structure.
>
> **[1:02](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=62)** So a unified directory organization where apps, libraries and common files located in predictable places reduces the learning curve for new developers.
>
> **[1:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=72)** Create a document with detailed information about those rules, examples, and resources and make it available for all developers.
>
> **[1:22](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=82)** And regarding documentation, make it easy to access for everyone involved in the project.
>
> **[1:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=88)** Keep it updated and provide as many examples and use cases as possible.
>
> **[1:34](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=94)** Automation should be a part of your plan.
>
> **[1:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=97)** Monorepos can become very complex with several teams and project introducing changes constantly.
>
> **[1:44](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=104)** Automation can help to test and analyze every comment.
>
> **[1:49](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=109)** For repetitive, mindless tasks such as monitor dependencies, you can use GitHub Dependabot.
>
> **[1:55](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=115)** GitHub actions can help you to improve visibility on important changes by tracking critical files and notifying other members of a full request.
>
> **[2:04](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=124)** You can use code linters and githooks to enforce testing and best practices on every comment.
>
> **[2:12](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=132)** Finally, teamwork is crucial to create a successful monorepo.
>
> **[2:17](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=137)** Try to include as many voices as possible.
>
> **[2:20](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=140)** Architects, developers, managers, user feedback to understand better the monorepo requirements.
>
> **[2:27](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=147)** Use a codeowner's file to define which team or individual owns a project on the monorepo and can review all the changes made there.
>
> **[2:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=157)** And as I mentioned before, always ask for DevOps feedback about your monorepos.
>
> **[2:43](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/how-to-design-your-monorepo?u=76281980&t=163)** They have a clear picture of the delivery pipeline.

> [!info]- Semantic Content
>
> **Analogies:** such as (2), picture (2)
> **CLI Commands:** make (3)
> **Tools:** github (2)
> **Code Keywords:** finally, (1)
> **UI Navigation:** select the (1)
> **Speakers:** - [narrator] (1)

#### Architectural governance in your monorepo
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=0)** - [Instructor] Monorepos need close control to avoid an accumulation of technical depth.
>
> **[0:06](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=6)** Creating governance policies is crucial.
>
> **[0:09](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=9)** Monorepos must deal with team projects and developers working separately.
>
> **[0:15](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=15)** In this kind of environment, it's easy to lose track of standards or adopt too many different guidelines.
>
> **[0:21](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=21)** This practice can affect architecture, performance, and lower the overall quality of the code.
>
> **[0:28](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=28)** There are three different areas of your monorepo to keep close control.
>
> **[0:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=33)** First, embrace a coding standard.
>
> **[0:36](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=36)** Choose a style guide and stick to it.
>
> **[0:38](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=38)** Avoid using different standards for different projects.
>
> **[0:42](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=42)** Improve consistency by implementing configuration files, such as .editorconfig.
>
> **[0:48](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=48)** This way, you can enforce all your users to follow the same coding rules.
>
> **[0:53](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=53)** Global link to rules can prevent code errors and encourage this practice.
>
> **[0:59](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=59)** Most of the problems of monorepos come from dependencies.
>
> **[1:03](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=63)** Keep close track of outdated dependencies.
>
> **[1:07](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=67)** Tools like GitHub's Dependabot can automate this process.
>
> **[1:11](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=71)** Track and audit your code, remove large unused dependencies, and monitor for security issues.
>
> **[1:19](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=79)** Finally, one trick to ensure you have control of dependencies, is to monitor files such as package.json, and create GitHub actions to assign architects and team leads to every pull request, including your dependencies.
>
> **[1:35](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=95)** Pull requests are great for discussion.
>
> **[1:37](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=97)** You can use GitHub actions to track sensitive changes, auto-assign team members, and discuss architecture guidelines on every pull request.
>
> **[1:46](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/architectural-governance-in-your-monorepo?u=76281980&t=106)** And always remember to include DevOps on infrastructure and work-flow changes.

> [!info]- Semantic Content
>
> **Tools:** github (3)
> **Analogies:** such as (2)
> **File Paths:** package.json (1)
> **Code Keywords:** finally, (1)
> **Best Practices:** remember to (1)
> **Speakers:** - [instructor] (1)


### Conclusion

> [[#Table of Contents|↑ Back to Table of Contents]]

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/next-steps?u=76281980&t=0)** - [Instructor] We reached the end of this training, and I hope that you have a clear picture of what is a monorepo, and how to use GitHub to manage and automate your code.
>
> **[0:10](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/next-steps?u=76281980&t=10)** If you want to learn more about Rush and how to manage your monorepos, I recommend checking the Documents section.
>
> **[0:18](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/next-steps?u=76281980&t=18)** I encourage you to test other monorepo managers, such as Lerna in case you're looking for JavaScript projects, or Bazel, if you're looking for multiple languages.
>
> **[0:29](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/next-steps?u=76281980&t=29)** Compare the results and choose the better options for you.
>
> **[0:33](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/next-steps?u=76281980&t=33)** To learn more about git hooks, check out [githooks.com](https://githooks.com), with detailed information and examples.
>
> **[0:41](https://www.linkedin.com/learning/building-monorepos-on-github-17057806/next-steps?u=76281980&t=41)** Finally, you can find on GitHub extensive documentation about GitHub actions and its syntax to take your workflows to the next level.

> [!info]- Semantic Content
>
> **Tools:** github (3)
> **CLI Commands:** git (1), find (1)
> **Analogies:** picture (1), such as (1)
> **Code Keywords:** finally, (1)
> **URLs:** [githooks.com](https://githooks.com) (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/building-monorepos-on-GitHub-3086076)

## Skills Covered

- GitHub

## Path Context

### In [[Essential New Skills in Software Engineering]]
**1 of 4** | [[Introduction to Agile Development Practices- Bring Agile to Your Development Pipelines]] →

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