---
type: course
cssclasses:
  - lle-course
  - lle-level-beginner
slug: angular-essential-training-22884621
url: "https://www.linkedin.com/learning/angular-essential-training-22884621"
level: Beginner
updated: 6/11/2025
learners: 20776
skills:
  - Angular
exercise_files: true
github: "https://github.com/LinkedInLearning/angular-essential-training-3266043/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG0p3shexhy_g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696456346503?e=2147483647&amp;v=beta&amp;t=3Y8eyRjTW4ND7kQ6n1GPAINVjkAqTWUBl-wtk43gqfQ"
linkedin_topic: Software Development
learning_paths:
  - '[[Explore Web Development with Angular]]'
next_courses:
  - '[[Learning the Angular CLI]]'
path_nav: '[{"path":"Explore Web Development with Angular","position":1,"total":6,"prev":null,"next":"Learning the Angular CLI"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/angular
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Angular%20Essential%20Training.md)

![Angular Essential Training](https://media.licdn.com/dms/image/v2/D560DAQG0p3shexhy_g/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1696456346503?e=2147483647&amp;v=beta&amp;t=3Y8eyRjTW4ND7kQ6n1GPAINVjkAqTWUBl-wtk43gqfQ)

# Angular Essential Training

> Angular helps developers and programmers build and maintain complex applications. The popular, widely used JavaScript platform gives you a solid foundation of web-based functionality, letting you take care of the design and implementation details as you go.In this course, instructor Derek Peruo introduces you to the essentials of this incredible platform, including some of its most powerful featur

> [LinkedIn Learning](https://www.linkedin.com/learning/angular-essential-training-22884621) | Beginner | 21K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (4 videos)
  - [More than just a framework](#more-than-just-a-framework)
  - [What you should know](#what-you-should-know)
  - [Using the example code and codespaces](#using-the-example-code-and-codespaces)
  - [Application overview](#application-overview)
- [**1. Overview of Angular**](#1-overview-of-angular) (5 videos)
  - [History and ownership](#history-and-ownership)
  - [Release and support cycles](#release-and-support-cycles)
  - [Angular licensing](#angular-licensing)
  - [Out of the box](#out-of-the-box)
  - [Workflow and tooling](#workflow-and-tooling)
- [**2. Core Building Blocks**](#2-core-building-blocks) (8 videos)
  - [Angular decorators](#angular-decorators)
  - [Angular modules](#angular-modules)
  - [Angular component decorator](#angular-component-decorator)
  - [Angular component classes](#angular-component-classes)
  - [Reference variables and data binding in Angular templates](#reference-variables-and-data-binding-in-angular-templates)
  - [Structural directives in Angular templates](#structural-directives-in-angular-templates)
  - [Angular standalone components](#angular-standalone-components)
  - [Angular without ZoneJS (Zoneless)](#angular-without-zonejs-zoneless)
- [**3. Common Patterns**](#3-common-patterns) (7 videos)
  - [Overview of Angular pipes](#overview-of-angular-pipes)
  - [Using built-in Angular pipes](#using-built-in-angular-pipes)
  - [Using custom Angular pipes](#using-custom-angular-pipes)
  - [Angular services and the injectable decorator](#angular-services-and-the-injectable-decorator)
  - [Angular service classes](#angular-service-classes)
  - [Angular directive decorator](#angular-directive-decorator)
  - [Angular directive classes](#angular-directive-classes)
- [**4. Coding Essentials**](#4-coding-essentials) (7 videos)
  - [Angular project configuration](#angular-project-configuration)
  - [Application environments and build targets](#application-environments-and-build-targets)
  - [Injecting dependencies using dependency injection](#injecting-dependencies-using-dependency-injection)
  - [Declaring dependencies using dependency injection](#declaring-dependencies-using-dependency-injection)
  - [Providing dependencies using dependency injection](#providing-dependencies-using-dependency-injection)
  - [Angular change detection strategies](#angular-change-detection-strategies)
  - [Angular component lifecycle hooks](#angular-component-lifecycle-hooks)
- [**5. Routing and Navigation**](#5-routing-and-navigation) (6 videos)
  - [Defining routes for Angular Router](#defining-routes-for-angular-router)
  - [Using routes with Angular's Router module](#using-routes-with-angulars-router-module)
  - [Lazy loading Angular routes](#lazy-loading-angular-routes)
  - [Dynamic route parameters in Angular routes](#dynamic-route-parameters-in-angular-routes)
  - [Preloading strategies for Angular Router](#preloading-strategies-for-angular-router)
  - [Using Angular Router with Angular templates](#using-angular-router-with-angular-templates)
- [**6. Reactive Programming**](#6-reactive-programming) (5 videos)
  - [Angular signals and the Signal function](#angular-signals-and-the-signal-function)
  - [Angular signals and the Computed function](#angular-signals-and-the-computed-function)
  - [Angular signals and the Effect function](#angular-signals-and-the-effect-function)
  - [Angular's async pipe](#angulars-async-pipe)
  - [RxJS and Reactive programming in Angular](#rxjs-and-reactive-programming-in-angular)
- [**7. Testing and Debugging**](#7-testing-and-debugging) (4 videos)
  - [Overview of unit testing](#overview-of-unit-testing)
  - [Unit testing without dependency injection](#unit-testing-without-dependency-injection)
  - [Unit testing with dependency injection](#unit-testing-with-dependency-injection)
  - [Static code linting in Angular](#static-code-linting-in-angular)
- [**Conclusion**](#conclusion) (1 videos)
  - [A deeper look at Angular](#a-deeper-look-at-angular)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [More than just a framework](https://www.linkedin.com/learning/angular-essential-training-22884621/more-than-just-a-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/more-than-just-a-framework?u=76281980&t=0)** - Maybe you just joined a team already building an [[Angular]] project or maybe you're about to start a side hustle and think Angular would be a great choice to use as your framework. Either way, I think you'll like this course. My name is Derek Peruo and I've worked with Angular for over a decade. Come with me as we dive into the core techniques every Angular developer needs to build and debug a project. The official website positions Angular as a platform, not just a framework and I think this description is accurate because you can build any type of application at scale, right out of the box. Are you ready? Then let's get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (5)
> **Speakers:** - maybe (1)

#### [What you should know](https://www.linkedin.com/learning/angular-essential-training-22884621/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/what-you-should-know?u=76281980&t=0)** - [Instructor] To get the most out of this course, you should have a good idea of what TypeScript is and how it works. Because we write [[Angular]] code using TypeScript. You should also know how to write [[HTML]] and CSS because we use those languages when writing Angular components. It's a good idea to know how to use [[npm]] because Angular uses Node and npm under the hood to help streamline your project's workflow. You can always check out our course library for more info on TypeScript, NTML, CSS, and Node. Angular comes with full support for all modern browsers and operating systems. I'll use [[Google]] Chrome and Mac OS during this course because that's what I'm most comfortable with. But you can use any browser and operating system that works well for you.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (4), [[npm]] (2), [[HTML]] (1), [[Google]] (1)
> **CLI Commands:** npm (2), node (2)
> **Env Vars:** css (2), html (1), ntml (1)
> **Speakers:** - [instructor] (1)

#### [Using the example code and codespaces](https://www.linkedin.com/learning/angular-essential-training-22884621/using-the-example-code-and-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/using-the-example-code-and-codespaces?u=76281980&t=0)** - [Speaker] In this course, we'll look at all the essential skills and techniques you need when building an [[Angular]] application at any size. I organized this course by topic, so feel free to skip around and watch the content that's most relevant for you or watch all the way through start to finish for a full rundown of all the essential skills and techniques. I included a downloadable file with links to more information about some of the topics we'll cover. I sorted the links by chapter and video to make it easy to find what you're looking for. Whenever possible, I linked to the official documentation for each technique or tool. Official documentation is the best source for up-to-date info on everything covered in this course. You can also follow along using the example code which we host on [[GitHub]] at this URL. There's only one branch in this repo, the main branch and all the videos in this course use the same code. Feel free to make new branches to explore on your own. While you could clone the repo to your local machine, I recommend using GitHub's [[Codespaces]] instead, if you can. Codespaces are secure development environments hosted in the cloud on GitHub's servers. They give you and your team all the power of Visual Studio Code but without downloading anything to your local machine. This makes it easy to control access, share settings and guarantees that everyone uses the same environment when writing and running code. As of this recording, you'll need a GitHub account to use Codespaces. After you log in, make sure you're on the main page for the repo and click this green dropdown menu where it says Code.
>
> **[1:33](https://www.linkedin.com/learning/angular-essential-training-22884621/using-the-example-code-and-codespaces?u=76281980&t=93)** Inside the menu, you'll have options to clone the repo to your local machine or use a codespace. You can click this plus sign here to make a new Codespace or click the name of an existing Codespace if you have one. Or you might see a big green button that says Create Codespace. Click it to make a new Codespace. I'll click on my existing Codespace to launch it. Any way you do it, GitHub will launch the environment and get everything set up. It may take a moment, so please be patient. Once everything is up and running, we're ready to write and execute code. By default, the interface for the Codespace looks and feels very much like Visual Studio Code. If you're familiar with VS code, you'll feel right at home inside a codespace. Here are three things to keep in mind when working with Codespaces. First, GitHub hosts all Codespaces on their secure remote servers. This means you won't have access to your local tools or configurations unless you upload them to GitHub. Check out GitHub's official documentation for how to do that. Second, when launching a dev server using ng Serve, you must set the host option to 0.0.0.0. You should also disable the host check. We need to do this because of how Codespace's [[Virtual Machines]] forward ports from inside the container to your browser. I updated the [[npm]] start command to do this for you. Let me show you what that looks like.
>
> **[3:06](https://www.linkedin.com/learning/angular-essential-training-22884621/using-the-example-code-and-codespaces?u=76281980&t=186)** I'll open up a new terminal here in our Codespace, type npm start, and then hit enter. [[Angular CLI]] will compile the code and launch the server. This alert here in the lower right hand corner tells me I have a successful connection to the dev server. I can click this blue button to launch a new browser tab or I can command click this URL here to do the same thing. Either way, our project opens in a new tab so we can see our changes in real time when we write our code. Last thing to keep in mind is that GitHub puts limits on the size, speed and number of code spaces you can have running at one time. The limits vary based on the type of account you have. For many projects, especially public open source projects, the free monthly quota available with all accounts is plenty of computing power to get the job done. Consider upgrading to a paid plan. If you need Codespaces for private repos or you're working with a large number of team members. Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (9), [[Codespaces]] (6), [[npm]] (2), [[Angular]] (1), [[Virtual Machines]] (1)
> **Tools:** github (9), visual studio (2), vs code (1), terminal (1)
> **CLI Commands:** make (5), npm (2), find (1)
> **Env Vars:** url (2), cli (1)
> **Exercise Files:** clone the repo (2), exercise files (1)
> **UI Navigation:** dropdown (1), click on (1)
> **Warnings:** keep in mind (2)
> **Prerequisites:** you'll need (1), set up (1)

#### [Application overview](https://www.linkedin.com/learning/angular-essential-training-22884621/application-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/application-overview?u=76281980&t=0)** - [Instructor] This is the example app we'll work with in this course. It's an online gaming platform called Gem Finder. On launch, the app takes us to the all players page. From here, we can search for users by name. For example, I'll start typing Davis. The list will update automatically to filter the list based on the search term. We can clear the list using this button here. The lightning bolt next to some of the names tell us which players are online right now. Clicking on any of the names brings up the profile page for that player. The game tracks two pieces of info for each player, their current score and how many gems they collected. We can also see the player's unique ID here. Clicking the all players tab on the left here takes us back to the all players page. Clicking the center tab here takes us to the leader boards page. The game has two leader boards. The first shows the top five highest scores and the second shows the top five players who collected the most gems. We can click on any name here and it takes us to the profile for that user. The URL and page title updates when we navigate to any page in the game. This makes it easy to bookmark specific pages and navigate using the browser's history. Clicking this tab here on the right takes us to the message inbox. Clicking the little close icon to the right of each message deletes that message from the list
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/application-overview?u=76281980&t=94)** and updates the unread messages count in the app and in the browser tab. Let's take a look at the code. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course. For now, just think of them as an easy way to share and write code without installing anything on your local machine. At the root of the project folder are all our configuration files. This is where we store settings for [[Angular]], [[npm]], the TypeScript Compiler, and our code editor. We'll talk more about some of these files later in this course. The source folder is where we keep all our custom application code. I'll go to the source folder and click on index.[[HTML]] to open that file. This file is a pretty standard HTML file. We load the actual Angular application using this app-root element on line 22. Bootstrap is a popular open source toolkit that helps make the CSS in our project look a little nicer. Bootstrap works very well with Angular applications but it's not required. Angular will work just fine without Bootstrap. The app-root element is a custom selector Angular looks for when loading our application. We could call this element anything we like but it's usually called app-root. Next, I'll go to the source folder and click on main.ts to open the file. This file tells Angular which module to load first on application launch. We'll talk more about modules in the bootstrap process later in this course. Let's also take a look at the styles.css file.
>
> **[3:10](https://www.linkedin.com/learning/angular-essential-training-22884621/application-overview?u=76281980&t=190)** This file is our main style sheet for the project. All pages and components have access to styles defined in this file. We're using it in this project to override Bootstraps defaults with our custom fonts and colors, but you can put any valid CSS in here. Let's take a look at our mock data. I'll go to source, assets and click on players.[[JSON]]. This file has all the static data that represents the players in our app. We're using mock data in this course to avoid the need for a real remote server. The same goes for this messages.json file in the same folder it has all the static data that represents unread messages. Finally, there's the app folder. This is where most of our custom application code lives. You'll spend most of your time in this folder when building an Angular project. I wrote the code for this example app to look and feel like code you might see when working on a real project. That said, there are a few ways to organize files and your project might look a little different. That's okay. The topics we'll cover in this course are still valid and will work no matter what folder structure you use.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (7), [[HTML]] (2), [[JSON]] (2), [[GitHub]] (1), [[npm]] (1)
> **UI Navigation:** click on (4), go to (3), navigate to (1), open the (1)
> **File Paths:** index.html (1), main.ts (1), styles.css (1), players.json (1), messages.json (1)
> **Env Vars:** css (2), url (1), npm (1), html (1)
> **Cross-References:** later in (2), earlier in (1)
> **Definitions:** is a  (3)
> **CLI Commands:** npm (1), make (1)
> **Tools:** github (1)


### 1. Overview of Angular

[↑ Back to Table of Contents](#table-of-contents)

#### [History and ownership](https://www.linkedin.com/learning/angular-essential-training-22884621/history-and-ownership?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/history-and-ownership?u=76281980&t=0)** - Every project starts because there's a problem that needs to be solved. [[Angular]] is no different. Knowing the history and philosophy of Angular may help you understand why we write Angular code in certain ways. Angular started life at [[Google]] as a side project to help employees build internal web apps. What made Angular unique was its focus on extending [[HTML]] markup with custom attributes and dynamic content, instead of using [[JavaScript]] to generate the HTML at runtime. This was a revolutionary way of writing code, and it allowed developers to keep templates separate from controllers. Google released version one of Angular to the public back in 2010, and the community loved it. I've worked with Angular for over a decade, and I've seen firsthand how it's matured into a stable platform with full support for everything you need to build web applications at scale. As of this recording, the Angular framework still has a strong focus on keeping HTML and JavaScript separate. I like this separation of concerns, and it's one of the reasons Angular is my framework of choice for new projects. Google's full-time Angular team maintains the framework with the help of a large community of open-source contributors, and Google still currently owns the copyright.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (10), [[Google]] (4), [[HTML]] (3), [[JavaScript]] (2)
> **Env Vars:** html (3)
> **Speakers:** - every (1)

#### [Release and support cycles](https://www.linkedin.com/learning/angular-essential-training-22884621/release-and-support-cycles?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/release-and-support-cycles?u=76281980&t=0)** - No matter how big your project is, the [[JavaScript]] framework you used must be stable and secure. The more stable the framework, the more you and your team can plan long-term releases for your project. This is why it's vital, to know the release and support cycles, for the frameworks you might use, including [[Angular]]. Angular uses semantic versioning, to track changes, and releases. Semantic versioning, SEM VER for short, is both a strategy and a naming convention. It helps you and everyone else know, exactly what to expect from each new release. This makes it easier to plan upgrades in your project. There are always three types of releases when using SEM VER. Major releases, minor releases, and patch releases, and while there are official definitions, for each type of release, Angular has its own unique flavor. In Angular, major releases contain big new features. This type of release is sometimes called a breaking change, because you may need to learn new APIs, refactor your code or update config files. Angular publishes a new major release every six months, and they usually include an upgrade path, for previous versions. Minor releases contain smaller, new features, that are backwards compatible with previous versions. There's usually no need to refactor code, when upgrading to a new minor release. Patch releases are usually low risk fixes, for bugs and security. It's a good idea to upgrade, to the latest patch release as soon as you can. Angular publishes one to three minor releases, for each major release, but there's no fixed release dates. Angular publishes a new patch release about once per week.
>
> **[1:36](https://www.linkedin.com/learning/angular-essential-training-22884621/release-and-support-cycles?u=76281980&t=96)** The Angular team supports each new major release, for 18 months. The first six months are considered active support, with both minor and patch releases, and the next 12 months are considered long-term support, with only patch releases. One more thing to keep in mind. The Angular team usually releases a new version, of all their [[npm]] packages, whenever they release a new version of the core framework. This helps make sure that all the packages work together, and makes it easy to upgrade all of your Angular dependencies at once. Using the NG update command, from Angular's official [[CLI]] tool.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (11), [[JavaScript]] (1), [[npm]] (1), [[CLI]] (1)
> **Env Vars:** sem (2), ver (2), npm (1), cli (1)
> **CLI Commands:** npm (1), make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - no (1)

#### [Angular licensing](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-licensing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-licensing?u=76281980&t=0)** - A software license is a legal document that governs where and how you can use a piece of code owned by someone else. Some licenses have a lot of restrictions that require payment to use the software. Other licenses are more permissive. And some developers release their software into the public domain, which has no restrictions at all. The type of license that comes with your [[JavaScript]] framework matters. This is especially true if you're building an application that includes proprietary code or that end users will pay for. Some licenses won't let you do that. Lucky for us, as of this recording, [[Angular]] is released under a very permissive license called the MIT license. This license started back in the late 1980s at the Massachusetts Institute of Technology, hence the name, MIT. Some places call it the Expat license or the X11 license, but the terms of use are mostly the same. It's one of the most popular licenses out there for open-source projects, and it's also one of the shortest, at only about 165 words. The license gives you and your team the freedom to use the software free of charge for whatever you want, as long as you include the copyright notice and license info. The MIT license is compatible with the GNU General Public License, as well as Debian's free software guidelines. And it's approved by the Free Software Foundation and the Open Source Initiative. Depending on other software you use in your project, you may need this extra compatibility and approval. The only downside of such a permissive license might be its lack of warranty. Software released under the MIT license is provided as is,
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-licensing?u=76281980&t=94)** and the copyright holders cannot be held liable if something goes wrong when you use the software. That might sound scary, but many developers, including me, feel the benefits of using software available under an MIT license outweigh its lack of warranty. While every project is unique, I've never had an issue using MIT license software in my work. Your needs might be different, and you may need to use software that comes with a warranty. I recommend you speak with your legal team to confirm if the MIT license will work for your specific needs.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Angular]] (1)
> **Env Vars:** mit (7), x11 (1), gnu (1)
> **Definitions:** is a  (1)
> **Speakers:** - a (1)

#### [Out of the box](https://www.linkedin.com/learning/angular-essential-training-22884621/out-of-the-box?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/out-of-the-box?u=76281980&t=0)** - The [[Angular]] framework was built to solve specific types of problems when it comes to web applications. This means a fresh install comes with its own benefits and limitations. Angular was originally designed to build single-page applications, or SPAs, for short. SPAs, at their core. are just websites where the content updates dynamically without the need to refresh the browser. This makes the website feel more like a native app experience. What made Angular unique was its focus on extending [[HTML]] Markup, with custom attributes and dynamic content. This was a revolutionary way of writing code, and it allowed developers to keep templates separate from controllers. With many frameworks, developers had to embed the HTML templates inside [[JavaScript]] files and manipulate the DOM directly. Some modern frameworks still embrace this strategy, and there's nothing wrong with it. It's just that Angular does things differently. Today, Angular is still great for single-page applications, but the ecosystem's evolved. Now, there's reusable components, standard libraries, and [[Routing]]. This is different from other modern frameworks that focus on just building complex user interfaces or maximizing compatibility with other libraries and frameworks. The official website positions Angular as a platform, not just a framework. And I think this description is accurate because you can build any type of application at scale, right out of the box.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[HTML]] (2), [[JavaScript]] (1), [[Routing]] (1)
> **Env Vars:** html (2), dom (1)
> **Prerequisites:** install (1)
> **Speakers:** - the (1)

#### [Workflow and tooling](https://www.linkedin.com/learning/angular-essential-training-22884621/workflow-and-tooling?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/workflow-and-tooling?u=76281980&t=0)** - As of this recording, [[Angular]] comes with its own ecosystem of developer tools and workflows. Many Angular projects use this ecosystem, and all Angular developers should know how it works. [[Angular CLI]] is the official command line tool for Angular projects. It's open source and release under the MIT License. The Angular team releases a new major version of the [[CLI]] tool, when they release a new major version of the framework itself. They release minor and patch versions as needed, independent of the framework. The major version of the CLI tool usually has the same number as the framework it works with. So version 15 of the CLI tool works with version 15 of the framework and so on. This makes it easy to upgrade all of your project's dependencies at once when needed. Angular's command line tool is called ng. It's a robust utility you can use to do all sorts of things in your project. There are a lot of commands but here are five I use all the time in my work. ng build to compile code and output files into a bill directory, ng serve to compile code, launch a dev server and watch for file changes, ng generate to add new files using Angular's built-in boilerplates, and finally, ng lint and ng test to run Angular's linting and [[Unit Testing]] tools. There are three more tools you should know about in addition to the command line tool. The Angular Language Service tells code editors how to work with Angular code. Many popular text editors, like Visual Studio Code, already include support for Angular projects, but you can always add support
>
> **[1:33](https://www.linkedin.com/learning/angular-essential-training-22884621/workflow-and-tooling?u=76281980&t=93)** by installing the correct extension or plugin for your IDE of choice, if available. Every text editor is a little different, so check the documentation for your text editor for details on Language Service support. Angular Dev Tools is a browser extension that gives you detailed debugging info in real time when running your application in a browser. And finally, there's Schematics, which are collections of custom codes you want to reuse across multiple projects. For example, the ng generate command uses Schematics under the hood to populate new files with the correct boilerplate content. The Angular team does everything they can to streamline the process of writing code, deploying apps, and managing multiple projects. I recommend you check out the official documentation for all the ways you can use Angular's ecosystem in your work.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (14), [[CLI]] (3), [[Angular CLI]] (1), [[Unit Testing]] (1)
> **Env Vars:** cli (4), mit (1), ide (1)
> **Tools:** command line (3), visual studio (1)
> **Definitions:** is a  (2), is called (1)
> **Versions:** version 15 (2)
> **Documentation:** the documentation (1)
> **Exercise Files:** boilerplate (1)
> **Analogies:** for example (1)


### 2. Core Building Blocks

[↑ Back to Table of Contents](#table-of-contents)

#### [Angular decorators](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-decorators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-decorators?u=76281980&t=0)** - [Instructor] Decorators are functions that return functions. They're not specific to the [[Angular]] framework, but they are a core piece of all Angular projects. You cannot use Angular without using decorators. Decorators in Angular supply [[Metadata]] about a piece of code telling Angular what the code should do, and how it should inject that code into other parts of the application. Decorators are marked by placing an @ symbol in front of the decorator name. They're invoked at runtime, and expect arguments to be passed in either between the parentheses or immediately after the closing parentheses of the decorator. This is why semicolons are left off the end of the decorator expressions and why parentheses even empty ones, always follow the decorator's name. Common built-in decorators are NgModule to define modules. Component to define components. Injectable to define services. Pipe to define pipes. Directive to define directives, and input and output to define properties that send and receive data from the dom. We'll look at some of these decorators in detail later in this course. There are many built-in decorators available in Angular, and many properties on each decorator. I recommend reading Angular official documentation for more info on all the decorators, and how they work in Angular projects. Common decorator errors include missing parentheses, missing properties, missing values, and adding a semicolon at the end of the decorator statement. In older versions of Angular, decorator errors were hard to diagnose because Angular emitted errors to the console
>
> **[1:33](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-decorators?u=76281980&t=93)** on execution and not a compile time. It's much easier to find issues in newer versions of Angular because of helpful feedback from the compiler. Use the ng build and ng serve commands that come with the [[Angular CLI]] tool to take advantage of the error reporting. Ng build compiles your code, and halts if there are errors. Ng serve compiles your code, reports errors, and watches for changes. Code editors like Visual Studio Code are also helpful because they can reason about your files, and give you real time feedback without compiling the code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (11), [[Metadata]] (1), [[Angular CLI]] (1)
> **CLI Commands:** find (1)
> **Env Vars:** cli (1)
> **Cross-References:** later in (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### [Angular modules](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-modules?u=76281980&t=0)** - [Instructor] [[Angular]] modules represent a collection of closely related files that work together. This might include things like components, services, or even pipes. They help Angular figure out how all the parts of your application work together. Starting in Angular version 14, you can use something called standalone components, which lets you use files in your project without assigning them to a module. We'll talk more about standalone components later in this course. As of this recording, standalone components are still new, and most existing projects will likely use modules to organize their code. This is why all Angular developers should know how to use modules. I opened our project here in a [[GitHub]] Codespace. I talk about why we use [[Codespaces]] earlier in this course, so for now, just think of them as an easy way to share and write code without installing anything on your local machine. Let's take a look at the app module file, which is the first module Angular loads at app launch. I'll go to the source folder, open up the app folder, and click on app.module.ts. Always use the module.ts ending when naming your module files. The [[Angular CLI]] tool does this for you when you generate new files using the command line tool. Angular modules are always TypeScript classes. We use the NGModule decorator, here on line nine, to declare a class as a module. I talked about decorators earlier in this course. For now, just think of them as [[Metadata]] that tells Angular what your code should do and how to inject that code into the [[Representational State Transfer (REST)|rest]] of the application.
>
> **[1:32](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-modules?u=76281980&t=92)** The NGModule decorator takes a configuration object as its only argument. The declaration's property is an array of all the components, directives, and pipes that belong to this module. In our case, we have only one file, the app component. You can declare as many items as you need here, but keep in mind that code belongs to only one module at a time. You'll get a compiler error if you try to assign code to more than one module. The imports property is an array of all the external modules we want to make available inside this module's template. Here, we import the AppRoutingModule, which gives us access to Angular's page navigation features. The BrowserModule, which is all the low-level infrastructure Angular needs in all projects. The common module, which has all of Angular's built-in pipes and directives, and the HTTP client module, which gives us access to the HTTP client service for making [[Fetch]] requests. The next config option is called exports, and it's an array of all the code in this module we want to make available for use in other modules. This module doesn't export anything, which is why the value is an empty array. The provider's property is an array of all the code we want to make available in this module through Angular's [[Dependency Injection]]. This is different from importing a module for use in the template. As a general rule, you put modules in the imports array and things like services in the providers array. We'll talk more about services later in this course. Finally, here's a special property called bootstrap.
>
> **[3:08](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-modules?u=76281980&t=188)** This property tells Angular which components to load when you launch your application. In our case, we load only one component, the app component. When using a module architecture, you must have at least one module in your project. We call this module the root module, and this is the only place you should ever declare a bootstrap property. All properties in the module config are optional, which means you can leave properties with empty arrays, like this, or get rid of them, like this. Both styles are correct and you can use whichever style you like. I'll reset it to keep the empty arrays. We export the module class itself on line 23. Our module class is called AppModule, and it's an empty class. You could use this class to do work very early in the bootstrap process, but that's rare. I've never seen it. This class is usually empty because all it needs to do is tell Angular which components to load on app launch. To actually launch the application, we export the module class here and import it into the main.ts file here. We pass the AppModule into this bootstrapModule method on Line six. Bootstrap module does all the work of actually loading our code into memory and displaying components in the dom. The bootstrap module function can take a configuration object as an optional second argument. This is where you might set global settings like view encapsulation, or a missing translation strategy. Check out Angular's official documentation to find out more about all the things you can do with Angular modules and the bootstrap process.
>
> **[4:43](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-modules?u=76281980&t=283)** There are several modules in our example app here. I recommend you take some time and explore the code to see how all the modules interact with each other and with Angular.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (16), [[GitHub]] (1), [[Codespaces]] (1), [[Angular CLI]] (1), [[Metadata]] (1)
> **Definitions:** is an  (4), is called (2), we call this (1)
> **CLI Commands:** make (3), find (1)
> **File Paths:** app.module.ts (1), module.ts (1), main.ts (1)
> **Env Vars:** http (2), cli (1)
> **Cross-References:** earlier in (2), later in (1)
> **Tools:** github (1), command line (1)
> **UI Navigation:** go to (1), click on (1)

#### [Angular component decorator](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-component-decorator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-component-decorator?u=76281980&t=0)** - [Speaker] [[Angular]] components are the main building blocks in all Angular applications. You can't use Angular without using components and all Angular developers should know what they are and how to use them. Components have four parts; an [[HTML]] template that defines the UI for the component, CSS styles you want to apply to the template. A TypeScript class that controls the component's behavior and a component selector that tells Angular where to put the component in the DOM. In my work, we use components to do mostly two things; to build the pages that users navigate to and to build small bits of UI we might want to reuse across multiple pages in the app. We write components in the same way no matter how we use them and what we talk about in this video will work for any use case you might have. Let's take a look at a component controller. We'll look at the HTML templates later in this course. I opened our project here in a [[GitHub]] Codespace. I talk about why we use [[Codespaces]] earlier in this course so for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder, open the app folder, click on pages, players and click on the players.component.ts file to open it. Always use the component.ts ending when naming your components controller file. The [[Angular CLI]] tool does this for you when you generate new components using the ng generate component command. This file is the controller for our players page.
>
> **[1:36](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-component-decorator?u=76281980&t=96)** Component controllers are always TypeScript classes. We use the component decorator here on line six to declare a class as a component. I talked about decorators earlier in this course. For now, just think of them as [[Metadata]] that tells Angular what your coach should do and how to inject it into the [[Representational State Transfer (REST)|rest]] of your application. The component decorator takes a configuration object as its only argument. The selector property tells Angular where to use the component in the DOM. While you could use any valid CSS selector as the target, I usually see a custom HTML element like this one here, app dash players. Make sure you have at least one dash in your custom element name. This is a convention that helps prevent naming collisions with standard HTML elements like button or input. The template URL property tells Angular which file to use as the HTML for this component. You can use any relative or absolute path here but templates are usually saved in the same folder as the rest of the components code. You might see a template property here instead of a template URL property. The only difference is template URL points to another file. While template is the HTML itself. Here's what that looks like. I'll delete the template URL property, add a template property and set its value to some HTML, maybe a header. You can use template or template URL but not both at the same time.
>
> **[3:08](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-component-decorator?u=76281980&t=188)** I recommend using the template URL property when possible to keep things consistent. I'll just reset our component here to use that property. The style URLs property is an array of files that define CSS styles for this component. Again, you can use any relative or absolute URL here but the CSS files usually are saved in the same folder as the rest of the components code. You might also see a Styles property. The only difference is that Style URLs points to another file while Styles is an array of CSS itself. That might look something like this. I'll add the Styles property here under the Style URLs property and use a string to define some CSS. Maybe set a color. Unlike the template properties, you can use the styles and style URLs property together at the same time. You can also use global CSS as long as the component doesn't use a shadow DOM. As of this recording, Angular components don't use Shadow DOM by default so you should be able to use global CSS in most use cases. I'll reset our component here to use just the style URLs property. There are many more options available on the component decorator and I recommend you check out Angular's official documentation for details on all the things you can do.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (10), [[HTML]] (7), [[Representational State Transfer (REST)|Rest]] (3), [[GitHub]] (1), [[Codespaces]] (1)
> **Env Vars:** css (8), html (7), url (7), dom (4), cli (1)
> **Exercise Files:** template (13)
> **UI Navigation:** click on (2), navigate to (1), go to (1), open the (1)
> **Cross-References:** earlier in (2), later in (1)
> **Definitions:** is an  (2), is a  (1)
> **File Paths:** players.component.ts (1), component.ts (1)
> **CLI Commands:** make (1)

#### [Angular component classes](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-component-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-component-classes?u=76281980&t=0)** - [Instructor] [[Angular]] components are the main building blocks in all angular applications. You can't use Angular without using components. Earlier in this course, we looked at Angulars component decorator and common properties you'll see when using it. In this video, we'll look at the component class itself. I opened our project here in a [[GitHub]] code space. I talked about why we use code spaces earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder and go to the app pages players directory and click on players.component.ts to open the file. We export the component class itself on line 11. This is a standard TypeScript class, and we use it to inject dependencies, tap into lifecycle hooks and make data available in the template. We'll take a look at some of these things in detail later in this course. For now, just know that you can access all public or protected class members from inside the [[HTML]] template. This is how Angular makes the UI dynamic and interactive. Our component has this public player's dollar sign property on line 12. It has an initial value of an observable that returns undefined. We'll talk more about observables and reactive programming later in this course. So for now, just think of them as a type of promise. But for data that returns more than once. Putting the dollar sign at the end of the property name is a standard convention when working with observables in Angular.
>
> **[1:32](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-component-classes?u=76281980&t=92)** It's not required, but I like using the dollar sign because it makes it clear in the template that the property isn't observable and I'll need to unwrap it to get to the data Lines 14 through 16 are the constructor for our components class. This is where you inject dependencies and initialize code. We'll talk more about [[Dependency Injection]] later in this course. So for now, just know that Angular calls the constructor only once for each component service or other dependency. Here we use the constructor to inject our custom apiService as a private class member on line 15. We don't have any code to initialize so we leave the body of the constructor empty. I like to use private class members when possible to make it easy to delete dead code, but you can use public or protected class members if that works better for you. The ng on a knit method line 18 is a lifecycle hook built into angular. We'll talk more about lifecycle hooks later in this course. So for now, just think of them as a way to tell Angular when to execute certain pieces of code. On line 19, we use the get all players method on our apiService to well get all the players and we assign the return value to the player's dollar sign property on our component class. Note, the use of the dollar sign at the end of the method name. Remember, this isn't required, but it makes it clear that the service returns an observable of some kind. We also have this public update method on lines 22 through 24, which updates the player's dollar sign property when we filter the list by calling the Get Players
>
> **[3:05](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-component-classes?u=76281980&t=185)** by Name Method on our apiService, again the dollar sign tells us this method returns an observable. Keep in mind that this is just one way to organize the code for your component. Angular gives you the freedom to write the code in a way that works best for you. I recommend you take some time and explore this example app to see how all the components interact with each other and with Angular. You can also check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (10), [[GitHub]] (1), [[HTML]] (1), [[Dependency Injection]] (1)
> **Cross-References:** later in (4), earlier in (2)
> **UI Navigation:** go to (2), click on (1), open the (1)
> **Exercise Files:** template (3), exercise files (1)
> **Code Identifiers:** apiservice (3)
> **Definitions:** is a  (3)
> **CLI Commands:** make (2)
> **File Paths:** players.component.ts (1)

#### [Reference variables and data binding in Angular templates](https://www.linkedin.com/learning/angular-essential-training-22884621/reference-variables-and-data-binding-in-angular-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/reference-variables-and-data-binding-in-angular-templates?u=76281980&t=0)** - [Instructor] [[Angular]] components are the main building block in Angular applications, and you can't use components without an [[HTML]] template. All Angular developers should know how to use component templates. I opened our project here in a [[GitHub]] codespace. I talked about why we use [[Codespaces]] earlier in this course, so for now, just think of them as an easy way to share and write code without installing anything on your local machine. Let's take a look at the HTML template for one of our components. I'll go to the source folder, open up the app folder, pages, players, and click on players.component.html to open the file. Always use the component.html ending for the file names for your component templates. The [[Angular CLI]] tool does this for you when you generate new components using the ng generate component command. You can use any valid HTML for a components template. Angular extends this HTML with its own custom attributes and syntax to make the content interactive and dynamic. There's a lot you can do with Angular's template syntax. Our template here uses only a few of the most common things you'll find when working in an Angular project. As a quick side note you can use any CSS you want inside an Angular project. The CSS class names used in this template here all come from Bootstrap CSS. Bootstrap is a popular open source toolkit and I've used it for years but Angular will work just fine without Bootstrap and you can use any CSS that works well for your needs. I'm going to scroll to the right here
>
> **[1:31](https://www.linkedin.com/learning/angular-essential-training-22884621/reference-variables-and-data-binding-in-angular-templates?u=76281980&t=91)** and on line two, we have something called a template reference variable, which is this hash symbol, also called a pound sign, followed by the [[Microsoft Word|word]] filter. Template reference variables or template variables for short are a quick way to use data from one part of a template in other parts of the same template without having to pass that data into the components controller class. Template variables always start with a hash and are followed by a custom string. They always reference the element they are attached to and give us access to that element's DOM structure and data. In our case here, we use the template variable to access the value of the input when users type a search string into the UI. We then pass this value into the keyup binding here on the same line. There are three common types of data binding in Angular, event binding, property binding, and interpolation. Event binding lets us quickly assign actions to DOM events like keyup and click. We declare event bindings with parentheses like these here. We put the name of the event inside the parentheses, keyup in our case, and assign one or more actions to run when that event happens on this element. Here, we pass the value of the template reference variable into the update method on our components controller class. The method filters the list of players and returns a new list back to the DOM. On line three, we bind to the click event here.
>
> **[3:07](https://www.linkedin.com/learning/angular-essential-training-22884621/reference-variables-and-data-binding-in-angular-templates?u=76281980&t=187)** This binding does two things. First, it passes an empty string into the update method which returns all the player names, and second it sets the value of the template reference variable to an empty string. This resets the user input. Property binding lets us dynamically assign values to the attributes on a standard HTML element or to properties on an Angular component. We declare property bindings with square brackets like the ones here on line seven. We put the name of the attribute or property inside the square brackets and assign it a value. In our case, we use a property binding for our custom app online status directive and assign it the player.online property from our list of players. Angular will set the value of this attribute dynamically at runtime for each player in our list. We also use a property binding on line eight to set a dynamic URL for the anchor tag. We'll talk more about app [[Routing]] later in this course. Interpolation lets us display dynamic content as text in the UI. We declare interpolated content by using double curly braces and we put a reference to the value we want to display inside those braces. Here we use interpolation to get the value of the player.name property for each player in our list and display it as text for that list item in the DOM. Each player has a unique name
>
> **[4:41](https://www.linkedin.com/learning/angular-essential-training-22884621/reference-variables-and-data-binding-in-angular-templates?u=76281980&t=281)** and Angular will set the value of the list item dynamically at runtime for each player in the list. There are several HTML templates in our example app and I recommend you take some time and explore the code to see how we use data binding and reference variables to make content interactive and dynamic. You can also check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (12), [[HTML]] (8), [[GitHub]] (1), [[Codespaces]] (1), [[Angular CLI]] (1)
> **Env Vars:** html (6), css (4), dom (4), cli (1), url (1)
> **Exercise Files:** template (15), exercise files (1)
> **CLI Commands:** make (2), find (1)
> **UI Navigation:** go to (1), click on (1), open the (1)
> **File Paths:** players.component.html (1), component.html (1)
> **Cross-References:** later in (1)
> **Tools:** github (1)

#### [Structural directives in Angular templates](https://www.linkedin.com/learning/angular-essential-training-22884621/structural-directives-in-angular-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/structural-directives-in-angular-templates?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at using template reference variables and data binding inside component templates to make content dynamic and interactive. In this video, we'll look at using structural directives to add and remove content in the DOM. I opened our project here in a [[GitHub]] code space. I talked about why we use code spaces earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. Let's take a look at the [[HTML]] template for one of our components. I'll go to the source folder. Open up the app folder, pages, players, and click on players.component.html to open the file. Always use the component.html ending for the file names for your component templates. The [[Angular CLI]] tool does this for you when you generate new components using the NG generate component command. You can use any valid HTML for a component's template. [[Angular]] extends this HTML with its own custom attributes and syntax to make the content interactive and dynamic. There's a lot you can do with Angular's template syntax. Our template here uses only a few of the most common things you'll find when working in an Angular project. As a quick side note, you can use any CSS you want inside an Angular project. The CSS class names used in this template here all come from Bootstrap CSS. Bootstrap is a popular open source toolkit and I've used it for years. But Angular will work just fine without Bootstrap and you can use any CSS that works well for your needs. Structural directives.
>
> **[1:35](https://www.linkedin.com/learning/angular-essential-training-22884621/structural-directives-in-angular-templates?u=76281980&t=95)** Change the layout of your UI by adding and removing DOM elements. These directives always start with an asterisk followed by the directive name. We use two common structural directives here on line six and seven, ngIf and ngFor. Use the ngIf directive to add or remove DOM elements based on a Boolean value. NgIf adds the DOM element if the condition is true and it removes the element if the condition is false. You can use an optional else binding to specify an alternate template to use when the ngIf conditional is falsey. Here in our template, we use the else binding to reference an alternate template called loading. We define the loading template on lines 12 through 14 using an NG template element and the hash loading template reference variable. NG template is a special component that comes with the Angular framework. It lets you define a template that doesn't render by default. The template needs a trigger of some kind to render the content. In our case here, that trigger is the else binding inside the ngIf directive on line six. If the ngIf directive is falsey, Angular will render the content of this loading component. Here, it's just a paragraph with a loading message, but the alternate template could be any valid HTML code. Use the ngFor directive to iterate over items in an array. We use this directive on line seven to loop over the player's array
>
> **[3:07](https://www.linkedin.com/learning/angular-essential-training-22884621/structural-directives-in-angular-templates?u=76281980&t=187)** on our components controller. Use the let and of keywords to assign a variable name to items in the array. You can then use this variable name to access the data inside each array item. So in our case, we tell the ngFor directive to use the keyword player for each item in the array called players. For each item in this array, we assign the value of player.online to our custom app online status directive and display the value of player.name as the content of each list item. Let's see what all this looks like in the browser. Inside our code space, I'll open a new terminal window and use the [[npm]] start command to launch a dev server. This might take some time to run, so please be patient. This alert here in the lower right hand corner tells me I have a successful connection to the dev server inside the code space. I can click this blue button here to launch a new browser tab or I can command click this URL here to do the same thing. Either way, our project opens in a new tab, so we can see our changes in real time. Let's take a look. Here, we see the list of players as expected. And we can look at the HTML output to verify this. We can see the unordered list in our HTML because the player's property on our components controller is a truthy value.
>
> **[4:39](https://www.linkedin.com/learning/angular-essential-training-22884621/structural-directives-in-angular-templates?u=76281980&t=279)** We would see the loading indicator if the property was falsey. Let's see what this looks like. I'll go back to the code and open the players.component.ts file. We looked at this file in detail earlier in this course. So for now, we'll focus on just updating the code we need to force a loading state. I'll go to line 19 and set the value to an observable that returns undefined. And I'll do the same on line 23. We'll talk more about observables and reactive programming later in this course. Back in the browser, we can see that the page is empty except for the loading indicator we defined in the NG template element. We can also see in the HTML output that the unordered list element no longer exists. This is an important point to remember. NgIf doesn't just change the visibility of DOM elements. It actually adds or removes them from the DOM. I'll reset the values for our player's property so we can see the list of players again. NgIf and ngFor are powerful structural directives that give you a lot of control of the content in your UI. I recommend you check out Angular's official documentation to learn all the things you can do with these directives.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (9), [[Angular]] (8), [[GitHub]] (1), [[Angular CLI]] (1), [[npm]] (1)
> **Env Vars:** html (7), dom (6), css (4), cli (1), npm (1)
> **Exercise Files:** template (17)
> **Code Identifiers:** ngif (5), ngfor (4)
> **UI Navigation:** go to (2), open the (2), click on (1)
> **CLI Commands:** make (2), find (1), npm (1)
> **Cross-References:** earlier in (2), go back to (1), later in (1)
> **Definitions:** is a  (3), is an  (1)

#### [Angular standalone components](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-standalone-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-standalone-components?u=76281980&t=0)** - [Instructor] As of [[Angular]] version 14 you can use something called standalone components which lets you use files in your project without assigning them to a module. As of this recording, standalone components are still new and most existing projects will likely use modules to organize their code but standalone components are a powerful tool that make your code simpler and easier to work with. All angular developers should know how to use standalone components. I opened our project here in a [[GitHub]] code space. I talked about why we use code spaces earlier in this course, so for now, just think of them as an easy way to share and write code without installing anything on your local machine. Let's take a look at some code. I'll go to the source folder. Open the app folder, components, high scores, and click on high scores.component.TS to open the file. To mark any component, pipe, or directive as standalone, Add the standalone property to the decorator for that file like we do here on line 14. As of Angular version 16, this property is false by default so you must set the property as true in each file where you want to use standalone components. You can also use the dash dash standalone flag when generating new files using angulars command line tool. Standalone components must declare their own imports and providers. The imports property is an array of all the directives, components, pipes and modules you want to use in this components template.
>
> **[1:35](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-standalone-components?u=76281980&t=95)** Here on line 15, we import the common module which has all of angulars built-in pipes and directives. The online status directive which is a custom directive that adds [[HTML]] to the DOM when a given player is online, right now. The router link with H ref module which comes from the Angular router package and lets us define anchor links to navigate between pages in our app and the sort by score module which is a custom pipe for sorting a list of players by high score. The provider's property, is an array of all the code we want to make available in this component through angulars [[Dependency Injection]]. I talk about dependency injection in detail later in this course. For now, just know that it's a [[Software Design]] pattern and a core concept in the Angular framework. Our component doesn't have any injected dependencies so we can get rid of this property or leave it as an empty array like you see here. To actually use this standalone component, we export the class here on line 19 and import it into other files as needed. In our case, we use this component in the leaderboards page, which is an angular module. I'll go to the source app, pages, leaderboards folder and click on leaderboards.module.TS to open the file. Standalone components are backwards compatible with angular modules. This means you can start using standalone components without changing your entire code base.
>
> **[3:07](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-standalone-components?u=76281980&t=187)** You can see the high scores component on line 18 in the imports array, for this module. We would do the same thing if we used it in other components, directives or pipes. Testing standalone components is very similar to testing module based components. Let me show you what that looks like. I'll go back to source, app, components, high scores, and click on highscores.component.spec.TS to open the file. We look at [[Unit Testing]] in detail later in this course. For now, just know that testing standalone components are mostly the same as testing any other file. The big difference is how you inject the dependencies. Angular comes with a collection of functions that help you set up dependencies without using modules. We use two of these functions here on lines 15 and 16. The provide HTTP client function configures angulars HTTP client service for our project and the provide HTTP client testing function mocks API calls when we run our unit tests. You would use a similar pattern for other dependencies like angulars router, or service workers. You might also use these types of functions when bootstrapping your real application or injecting dependencies into other parts of your project. Take a moment and think about where you might be able to use standalone components in your project. Any place where you don't absolutely need an angular module might be a good candidate for a standalone component. Remember to check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (9), [[Dependency Injection]] (2), [[GitHub]] (1), [[HTML]] (1), [[Software Design]] (1)
> **UI Navigation:** open the (4), go to (2), click on (1)
> **Env Vars:** http (3), html (1), dom (1), api (1)
> **Definitions:** is an  (3), is a  (2)
> **File Paths:** scores.component.ts (1), leaderboards.module.ts (1), highscores.component.spec.ts (1)
> **Cross-References:** later in (2), go back to (1)
> **CLI Commands:** make (2)
> **Versions:** version 14 (1), version 16 (1)

#### [Angular without ZoneJS (Zoneless)](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-without-zonejs-zoneless?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-without-zonejs-zoneless?u=76281980&t=0)** - [Narrator] Starting in [[Angular]] version 18, you can opt in for a new zoneless architecture. This is a huge change because Angular's been using ZoneJS since version 2.0. The introduction of zoneless Angular means fewer change detection cycles, smaller app bundle sizes, faster startup times, better debugging, and better compatibility with third-party APIs. The biggest risk is that as of this recording, zoneless Angular is an experimental feature. The API is incomplete, unstable, and could change at any time. It also requires changes to your project dependencies and may require refactoring of code and unit tests to make them compatible with the new API. Check out Angular's official documentation for more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (5)
> **Env Vars:** api (2)
> **Versions:** version 18 (1), version 2 (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Speakers:** - [narrator] (1)


### 3. Common Patterns

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of Angular pipes](https://www.linkedin.com/learning/angular-essential-training-22884621/overview-of-angular-pipes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/overview-of-angular-pipes?u=76281980&t=0)** - [Instructor] Pipes are one of [[Angular]]'s most powerful features. They're easy to write, they're easy to test, and they keep your application fast and performant. All Angular developers should know how to use pipes. You can use pipes anytime you need to manipulate content in the UI. This could be something simple, like making text uppercase or localizing numbers and date formats. but you can also use pipes for more complex things, like joining an array of data into one big string or parsing error codes into a more meaningful description. I love pipes because they meet all my criteria for great code. They do one thing well. I can [[Jetpack Compose|compose]] them together, passing the output of one pipe as the input to another, and they're pure functions by default. Let's talk about that last point real quick. Pure functions, by definition, always return the same output for the same set of inputs. This means if you already ran the code for a set of inputs, you don't need to run the code again because you already know the result. Angular takes full advantage of this to make change detection faster and more performant. We'll talk about change detection later in this course. For now, just know that by default, Angular executes pipes only if there was a change in a primitive value, like a string or a Boolean, or if there was a change in a reference to an object or an array. Angular ignores changes to data inside objects and arrays by default because it's much faster to check primitives and references than it is to do a deep scan on every change detection cycle. With pure pipes, you must replace the reference to the object or array to run the pipe again.
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/overview-of-angular-pipes?u=76281980&t=94)** You can also mark a pipe as impure, and Angular will execute that pipe every time it detects a keyboard or mouse input. But impure pipes can slow down your app, so use them with caution. I recommend sticking with pure pipes whenever possible. Take a moment and think about where you might be able to use pipes in your project. Any time you manipulate data before showing it in the UI might be a good candidate for a pipe. As of this recording, Angular includes 13 standard pipes with all new projects. These pipes help format things, like dates, numbers, and text. We'll look at some of these pipes later in this course. Check out the Exercise Files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (7), [[Jetpack Compose|Compose]] (1)
> **Cross-References:** later in (2)
> **CLI Commands:** make (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** caution (1)
> **Speakers:** - [instructor] (1)

#### [Using built-in Angular pipes](https://www.linkedin.com/learning/angular-essential-training-22884621/using-built-in-angular-pipes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/using-built-in-angular-pipes?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at [[Angular]] pipes and why you might use them. In this video, we'll look at two of Angular's Standard built-in pipes. The first, will limit the list to only five players and the second will show each player's score in percent format. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course, so for now, just think of them as an easy way to share and write code without installing anything on your local machine. Let's take a look at the [[HTML]] template for one of our components. I'll go to the source folder. Open up the app folder, components, high scores and click on high scores dot component dot html to open the file. Always use the component dot HTML ending for your components template file. The [[Angular CLI]] tool does this for you when you generate new components using the NG generate component command. Pipes work inside angular templates. You can use pipes in most places where you have an expression or a reference. You can use built-in pipes in any template right out of the box. No extra code required. To use pipes, Insert a vertical line also called a pipe symbol after the reference followed by the name of the pipe you want to use. Angular comes with a built-in pipe called Slice. It works just like the slice method in [[JavaScript]]. We use the pipe here on line four. inside the NG four directive. We take the full list of players and chain it through two pipes. Angular always chains pipes together left to right.
>
> **[1:35](https://www.linkedin.com/learning/angular-essential-training-22884621/using-built-in-angular-pipes?u=76281980&t=95)** We first pass the list of players into our custom sort by score pipe, and then we take the output of that pipe and pass it into Angular's slice pipe. We'll look at custom pipes later in this course. Some pipes like Slice need us to pass in additional arguments. In this case we need to specify the starting index and the number of items we want to show. To declare an argument, insert a colon after the pipe name, followed by the argument's value. To declare more than one argument insert more colons and more values as needed. We use the high scores component on the leaderboard's page. Let's see what all this looks like in the browser. Inside our code space, I'll open a new terminal window and use the [[npm]] Start command to launch a dev server. This command might take some time, so please be patient. This alert here in the lower right hand corner tells me I have a successful connection to the dev server Inside the code space. I can click this blue button to launch a new browser tab or I can command click this URL here to do the same thing. Either way, our project opens in a new tab so we can see our changes in real time. Inside the app here, I'll click on the second tab which takes us to the leaderboard page, and as expected we see the list of only five users sorted by high score. We can look at the HTML output to verify this. Let's go back to the code.
>
> **[3:10](https://www.linkedin.com/learning/angular-essential-training-22884621/using-built-in-angular-pipes?u=76281980&t=190)** We use angulars built-in percent pipe on line six. To format each player's score as a percent. We take the value of player.score and pass it into the percent pipe. By default, the percent pipe uses the browser's locale settings to format the value. For me, that means US English. For you, it might be something different. That's one of the cool things about many of angulars built-in pipes. You get automatic localization. Built right in. The percent pipe accepts a string as an optional second argument. The string takes a special format that tells angular how to display the numbers. This string here says always show at least one digit before the decimal point and always show only one digit after the decimal point. If I change the first number to three, like this, then angular would always display three digits before the decimal point, even if those digits were zero. If I changed the second and third numbers to four and five then angular would display at least four digits after the decimal point, but never more than five. Let's see what all this looks like in the browser. And here we are. So many zeros. Okay, so we probably don't need this kind of formatting for high scores but you can see how easy it is to change the display of the data without modifying the data in the database or writing custom TypeScript functions. Let me reset the display to what we had before. We'll take one more look in the browser.
>
> **[4:46](https://www.linkedin.com/learning/angular-essential-training-22884621/using-built-in-angular-pipes?u=76281980&t=286)** Oh, much better. Be sure to check out the official documentation for more info on all the things you can do with angulars built-in standard pipes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (9), [[HTML]] (4), [[GitHub]] (1), [[Angular CLI]] (1), [[JavaScript]] (1)
> **Env Vars:** html (3), cli (1), npm (1), url (1)
> **UI Navigation:** click on (2), go to (1), open the (1)
> **Cross-References:** earlier in (1), later in (1), go back to (1)
> **Exercise Files:** template (3)
> **Tools:** github (1), terminal (1)
> **CLI Commands:** npm (1)
> **Analogies:** just like (1)

#### [Using custom Angular pipes](https://www.linkedin.com/learning/angular-essential-training-22884621/using-custom-angular-pipes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/using-custom-angular-pipes?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at [[Angular]] pipes and why you might use them. In this video, we'll look at one of our three custom pipes and how we built it. I opened our project here in a [[GitHub]] code space. I talked about why we use code spaces earlier in this course, so for now, just think of them as an easy way to share and write code without installing anything on your local machine. Let's take a look at our custom pipe. I'll go to the source folder, open up the app folder, pipes, sort-by-score, and click on sort-by-score.pipe.ts to open the file. Always use the pipe.ts ending for your pipe files. The [[Angular CLI]] tool does this for you when you generate new pipes using the ng generate pipe command. Angular pipes are always TypeScript classes. We use the @Pipe decorator here on line 4 to declare a class has an Angular pipe. We looked at decorators earlier in this course in detail. For now, just think of them as [[Metadata]] that tells Angular what your code should do and how to inject it into the [[Representational State Transfer (REST)|rest]] of the application. The @Pipe decorator takes a configuration object as its only argument. The name property tells Angular how you will reference the pipe in your templates. It's good practice to use camel case when naming your pipes. The Angular CLI tool does this for you when you generate new pipe files using the [[CLI]] command. Avoid hyphens in the name property. Angular reserves that character for components and directives. You'll get a build error
>
> **[1:31](https://www.linkedin.com/learning/angular-essential-training-22884621/using-custom-angular-pipes?u=76281980&t=91)** if you try to use hyphens for a pipe name. The pure property tells Angular if the pipe is pure or not. I talk about the difference between pure and non-pure pipes earlier in this course. So for now, just know that Angular pipes are pure by default to make change detection faster and more performant. This property is optional, and you can leave it out of the decorator to use Angular's default settings. The last option is the standalone property. If your project uses Angular modules, you can leave this property out of the decorator to use Angular's default settings. As of this recording, you must set the standalone property as true here in the pipe if your project uses a standalone component architecture. I talked about standalone components in detail earlier in this course. For now, just know that modules are still the default behavior when generating new custom pipes. We export the pipe class itself on line 9. You can call your pipe class as anything you like, but it's good practice to end the class name with the [[Microsoft Word|word]] pipe. And while not technically required, it's also good practice to implement the PipeTransform interface from the Angular core package. This helps with autocompletion and type safety. The most important part of any pipe is the transform method. Angular looks for a method with this name and errors out if it can't find it. The transform method takes at least one argument. The first argument is always the value from the template you want to change. In our case, this will be the list of players we want to sort. Additional arguments are always the extra parameters
>
> **[3:08](https://www.linkedin.com/learning/angular-essential-training-22884621/using-custom-angular-pipes?u=76281980&t=188)** you want to pass into the pipe, if any. You must always return a value from a pipe, even if the value is null or undefined. You'll get a build error if there's no return value. If your project uses a module architecture, you must declare your custom pipes in at least one module to use them. If your project uses standalone components, you don't need to declare the pipe in a module file. This pipe has its own module called sort-by-score.module.ts. I'll open that now. We add the SortByScorePipe class to the declarations array on line 7 and export the same class on line 13. This makes it available for use in other modules. You can then import this SortByScoreModule class into other modules as needed. I love using pipes, and I recommend you and your team experiment with them as much as you can. Pipes can do any kind of transformation you need, but it's good practice to write pipes that do only one thing. This makes them easy to test. It also makes them easy to chain together in the template. The output of one pipe becomes the input of the next. Pipes that do too much are hard to chain together. But doing one thing well doesn't mean you're limited to only simple things like sorting arrays. Take a moment and think about your own project. Any place where you manipulate data before showing it in the UI might be a good candidate for a pipe. Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (13), [[Angular CLI]] (2), [[GitHub]] (1), [[Metadata]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Cross-References:** earlier in (5)
> **Best Practices:** good practice (4)
> **File Paths:** sort-by-score.pipe.ts (1), pipe.ts (1), sort-by-score.module.ts (1)
> **Env Vars:** cli (3)
> **UI Navigation:** go to (1), click on (1), open the (1)
> **Exercise Files:** template (2), exercise files (1)
> **CLI Commands:** make (1), find (1)

#### [Angular services and the injectable decorator](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-services-and-the-injectable-decorator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-services-and-the-injectable-decorator?u=76281980&t=0)** - [[Angular]] services are a way to separate and reuse code across different parts of your application. You don't need to use services to use Angular but I've seen them in every project I've worked on and all Angular developers should be familiar with how they work. Services work best for things that don't change the UI directly. This might be things like API calls or complex calculations. This keeps your components small and focused only on showing data in the UI. Services are also flexible. You can inject services into other services. You can inject services into components. You can inject services into the entire app or only into one or two specific places. The choice is yours. Services and Angular [[Dependency Injection]] are closely linked. You can't use one without the other. In this video, we'll look at a common pattern for building and using services. We'll look at Dependency Injection in detail later in this course. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. Let's take a look at our custom API service. I'll go to the source folder. Open up the app folder services and click on api.service.ts to open the file. Always use the service.ts ending for your custom service files. The [[Angular CLI]] tool does this for you when you generate new services using the ng generate service command. Also, keep in mind that this is just one way to
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-services-and-the-injectable-decorator?u=76281980&t=94)** organize the files in your code base. Services can live anywhere you need them under the source directory. Angular services are usually TypeScript classes. We use the Injectable Decorator here on line six to declare a class as an Angular service. We looked at decorators in detail earlier in this course. For now, just think of them as [[Metadata]] that tells Angular what your code should do and how it should inject it into the [[Representational State Transfer (REST)|rest]] of your application. The Injectable Decorator takes a configuration object as its only argument the provided in property tells Angular what parts of your project have access to this service. By default, the value of this property is null which means you must add the service to a module to use it. In my work, we usually set the value as root like you see here which tells Angular to create one instance of the service for all parts of the app. The [[CLI]] tool does this for you when you generate new services using the CLI command having one instance of a service is a powerful feature of how Angular's Dependency Injection works. Since the project has only one instance of the service, sometimes called a singleton, all parts of the app have access to the same data stored in the service. This makes it easy to cache values or shared data between pages. Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (10), [[Dependency Injection]] (3), [[CLI]] (2), [[GitHub]] (1), [[Angular CLI]] (1)
> **Env Vars:** cli (3), api (2)
> **Cross-References:** earlier in (2), later in (1)
> **UI Navigation:** go to (1), click on (1), open the (1)
> **File Paths:** api.service.ts (1), service.ts (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Definitions:** is a  (1)

#### [Angular service classes](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-service-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-service-classes?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at the injectable decorator and how to use it to build [[Angular]] services. In this video, we'll look at one way to write a service class. I opened our project here in a [[GitHub]] codespace. I talked about why we use [[Codespaces]] earlier in this course, so for now, just think of them as an easy way to share and write code without installing anything on your local machine. Let's take a look at our custom API service. I'll go to the source folder, open up the app folder, services, and click on API dot service dot TS to open the file. Always use the service dot TS ending for your custom service files. The [[Angular CLI]] tool does this for you when you generate new services using the NG generate service command. Also, keep in mind that this is just one way to organize the files in your code base. Services can live anywhere you need them under the source directory. We export the service class itself on line nine. You can call your service classes anything you'd like, but it's good practice to end the class name with the [[Microsoft Word|word]] service. Lines 11 through 13 are the constructor for our service class. This is where we inject dependencies and initialize code. Here we use the constructor to inject Angular's HTTP client service as a private class member. We don't have any code to initialize, so we leave the body of the constructor empty. I like to use private class members whenever possible to make it easy to delete dead code, but you can use public or protected class members if that works better for you.
>
> **[1:33](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-service-classes?u=76281980&t=93)** If you're using a module architecture, remember to import the HTTP client module into your main app module to get access to the HTTP client class. We looked at modules and how to use them earlier in this course. The get all players method on line 15 is how we communicate with the database to get the info about all the players. Putting the dollar sign at the end of the method name is a standard convention when working with observables in Angular. We'll talk more about observables and reactive programming later in this course. For now, just think of them as a type of promise, but for data that returns more than once. It's not required, but I like using the dollar sign because it makes it clear that the method is an observable and I'll need to unwrap it to get to the data. On line 16, we use the instance of Angular's HTTP client to make a get request to the database for our data. The HTTP instance gives us access to all the [[Representational State Transfer (REST)|rest]] methods we need to work with the database. The get method takes two arguments. The first argument is a string representing the URL for our data. This can be any valid URL including a local URL like we have here. The second argument is an object of optional request settings. We don't have any custom settings for this request, so we don't need it here. While not required, it's also a good idea to set the return type of the get method like this. This helps with auto completion and type safety. We'll get a generic object back from the get method
>
> **[3:09](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-service-classes?u=76281980&t=189)** if we don't set the return value. This pipe method here, chained to our get request, is a built-in for working with observables. It lets you transform data inside the observable by composing functions together. The output of each function becomes the input of the next. Here we pipe the response from our get request into a function called delay, which we imported from the RXJS library. We're using delay here to simulate network lags so we can see the loading states in our app. In my work, we usually use the pipe method to map and filter data as well as catch errors. The next two methods on our service, get players by ID and get players by name, do just that. On line 20, we call the get all players method and pipe it into the RXJS map function on line 21. This takes a callback function that gives us access to the data inside the observable. We then iterate over each item in the list of players and return the first player that matches the ID. We do something similar on line 27. We use the RXJS map function to get access to the data inside the observable and then iterate over each item in the list of players filtering the list to include only the players that match by name. Keep in mind that this is just one way to write an Angular service. You can use services for all sorts of complex calculations or business logic. To actually use the service,
>
> **[4:42](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-service-classes?u=76281980&t=282)** we use Angular's [[Dependency Injection]] to inject it into the classes that need them. We'll talk more about dependency injection later in this course. For now, just know that it's a [[Software Design]] pattern where classes or functions request dependencies from an external source rather than creating their own. Let me show you what that looks like. I'll go to source, app, pages, players, and click on players dot component dot TS to open the file. This is the controller for our players page. We import the API service on line four and inject it into the class constructor on line 15 as a private member. We then use the service on lines 19 and 23 to update the list of players as needed. We use this pattern several times throughout the example app. I recommend you take some time and explore the code to see how all the pages and components interact with the API service. And remember to check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[Dependency Injection]] (2), [[GitHub]] (1), [[Codespaces]] (1), [[Angular CLI]] (1)
> **Env Vars:** http (5), api (4), url (3), rxjs (3), cli (1)
> **UI Navigation:** go to (2), click on (2), open the (2)
> **Cross-References:** earlier in (3), later in (2)
> **Definitions:** is a  (3), is an  (2)
> **Best Practices:** remember to (2), good practice (1)
> **CLI Commands:** make (2)
> **Warnings:** keep in mind (2)

#### [Angular directive decorator](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-directive-decorator?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-directive-decorator?u=76281980&t=0)** - [Instructor] Directives let you attach custom behavior to elements in your [[Angular]] templates. All Angular developers should be familiar with directives and how they work. This behavior can be as simple or as complex as you need it to be. I remember one project where we wrote a custom directive for an entire secret menu full of tools used by the dev team. Using a directive meant we could access this secret menu from anywhere in the app. I opened our project here in a [[GitHub]] [[Codespaces]]. I talk about why we use Codespaces earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. Let's take a look at our custom directive. I'll go to the src folder, open the app folder, directives, click on online-status.directive.ts to open the file. Always use the directive.ts ending for your directive file names. The [[Angular CLI]] tool does this for you when you generate new directives using the ng generate directive command. Angular directives are always TypeScript classes. We use the directive decorator here on line three to declare a class as a directive. I talk about decorators earlier in this course, so for now just think of them as [[Metadata]] that tells Angular what your code should do and how to inject it into the [[Representational State Transfer (REST)|rest]] of your application. The directive decorator takes a configuration object as its only argument. The selector property tells Angular what CSS selector to use to identify the directive in your templates. You can use any valid CSS selector,
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-directive-decorator?u=76281980&t=94)** but I usually see custom directives use an attribute selector like we do here. The provider's property is an array of all the code we want to make available in this directive through Angular's [[Dependency Injection]]. I talk about dependency injection in detail later in this course. For now, just know that it's a [[Software Design]] pattern and a core concept in the Angular framework. Our directive here doesn't have any injected dependencies so we can get rid of the property if we want to or leave it as an empty array like you see here. Another option is the standalone property. If your project uses Angular modules, you can leave this property out of the decorator to use Angular's default settings. As of this recording, you must set the standalone property as true here in the directive if your project uses a standalone component architecture. I talked about standalone components in detail earlier in this course. For now, just know that modules are still the default behavior when generating new custom directives. What you see here are the properties I use most often in my work. There are lots more ways to configure directives and I recommend you check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (9), [[Codespaces]] (2), [[Dependency Injection]] (2), [[GitHub]] (1), [[Angular CLI]] (1)
> **Cross-References:** earlier in (3), later in (1)
> **UI Navigation:** open the (2), go to (1), click on (1)
> **Env Vars:** css (2), cli (1)
> **File Paths:** online-status.directive.ts (1), directive.ts (1)
> **CLI Commands:** make (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)

#### [Angular directive classes](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-directive-classes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-directive-classes?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at the directive decorator and how to use it to build [[Angular]] directives. In this video, we'll look at one way to write a directive class. I opened our project here in a [[GitHub]] codespace. I talk about why we use [[Codespaces]] earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the src folder. Open up the app folder, directives and click on online-status.directive.ts to open the file. Always use the directive.ts ending for your directive file names. The [[Angular CLI]] tool does this for you when you generate new directives using the ng generate directive command. We export the directive class itself on line 8. You can call your directive classes anything you like but it's good practice to end the class name with the [[Microsoft Word|word]] directive. This class implements the AfterContentInit interface which is a lifecycle hook that comes from the Angular core package. We use this interface for the ngAfterContentInit method starting on line 15. I talk about lifecycle hooks in detail later in this course. For now, just know that we use the hook to guarantee Angular initialized all the content on the page before we execute the code in our directive. This method checks to see if the value of the app online status property is true. If it is, it adds some custom [[HTML]] in the correct place in the dom.
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-directive-classes?u=76281980&t=94)** There's a lot going on here, so let's break it down. I declare a public property on line 9 and use the input decorator to tell Angular that the value for this property is dynamic and that it comes from a data binding in the parent component. I talk about data binding in detail earlier in this course so for now, just think of it as a way for parent components to talk with child components. The approach you see here is the simplest way to work with inputs where the class property and the selector share the same name. Depending on your needs, you may want to point the class property to an alias in the HTML template where you use the directive. There's a few ways to do this, and I recommend you check out Angular's official documentation for details. On line 12, we inject the ElementRef class and assign it to a private property in the constructor. ElementRef comes from Angulars core package and it gives us access to the DOM element that uses this directive. On line 17, we use the instance of the element Ref to access the underlying native HTML element and append the custom HTML to the existing dom. Let's see what all this looks like in the browser. Inside our codespace, I'll open a new terminal window and use the [[npm]] start command to launch a dev server. This might take a moment, so please be patient. This alert here in the lower right hand corner,
>
> **[3:09](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-directive-classes?u=76281980&t=189)** tells me I have a successful connection to the dev server inside the codespace. I can click this blue button to launch a new browser tab or I can command click on this URL here to do the same thing. Either way, our project opens in a new tab so we can see our changes in real time. This is the main list of all the players. The lightning bolt next to some of the names tells us which players are online right now. I'll right click on one of those lightning bolts to inspect the element. You can see here the custom HTML added by our directive and if we look at the element below it, you can see our custom HTML isn't there. This works because Angular makes a new instance of the directive for each player in our list which means the ElementRef is unique for each instance. Keep in mind that this is just one way to write a directive. Your directives may look different, and that's okay. The principles stay the same, no matter what you're working on. Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[HTML]] (6), [[GitHub]] (1), [[Codespaces]] (1), [[Angular CLI]] (1)
> **Env Vars:** html (6), cli (1), dom (1), url (1)
> **Cross-References:** earlier in (3), later in (1)
> **UI Navigation:** go to (1), open the (1), click on (1)
> **File Paths:** online-status.directive.ts (1), directive.ts (1)
> **Tools:** github (1), terminal (1)
> **Exercise Files:** template (1), exercise files (1)
> **CLI Commands:** npm (1)


### 4. Coding Essentials

[↑ Back to Table of Contents](#table-of-contents)

#### [Angular project configuration](https://www.linkedin.com/learning/angular-essential-training-22884621/angularpproject-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angularpproject-configuration?u=76281980&t=0)** - [Instructor] In [[Angular]], the two main configuration files are tsconfig.[[JSON]] and angular.json. All Angular developers should be familiar with these files. I opened our project here in a [[GitHub]] Codespace. I talked about why we use [[Codespaces]] earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine, I'll go to the root of our project and click on tsconfig.json to open the file. We write Angular apps using TypeScript. And this file tells the TypeScript compiler how to generate [[JavaScript]] code. The [[Angular CLI]] tool configures sensible defaults when you start a new project, but you can always change the settings if needed. The two properties I customize most often are compiler options and Angular compiler options. Use the compiler options property to tell TypeScript how to compile your code. And use the Angular compiler options property to define TypeScript options specific to compiling Angular projects. You may have more than one tsconfig file, like we do here. That's okay. This lets you have more than one configuration depending on what you need. Here, we have this main tsconfig file, as well as separate configurations for building the app and running our suite of unit tests. There are lots of ways to customize your tsconfig files, and I recommend you check out the official documentation for more info.
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/angularpproject-configuration?u=76281980&t=94)** Next, let's take a look at angular.json, which is also in the root of the project. This file is where you tell Angular CLI how to configure and build your project. Again, this file is full of sensible defaults when you start a new project using the [[CLI]] tool. Use the projects property to define all the apps in your workspace, as well as build targets. A workspace is just a collection of one or more projects you want to manage through this one configuration file. In my work, we usually have one Angular app per workspace, but your project may be different and you may choose to break your code into many smaller implementations. Build targets lets you change the configuration and optimization of your code depending on where you want to deploy it. Angular comes with production and development targets by default, but you can add or remove targets as needed.
>
> **[2:33](https://www.linkedin.com/learning/angular-essential-training-22884621/angularpproject-configuration?u=76281980&t=153)** Again, there are lots of ways to customize Angular's workspace settings, so be sure to check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (11), [[JSON]] (4), [[Angular CLI]] (2), [[GitHub]] (1), [[Codespaces]] (1)
> **File Paths:** tsconfig.json (2), angular.json (2)
> **Env Vars:** cli (3)
> **UI Navigation:** go to (1), click on (1), open the (1)
> **Cross-References:** earlier in (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Prerequisites:** configure (1)

#### [Application environments and build targets](https://www.linkedin.com/learning/angular-essential-training-22884621/application-environments-and-build-targets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/application-environments-and-build-targets?u=76281980&t=0)** - [Instructor] [[Angular]] lets you define something called a build target, which lets you change the configuration and optimization of your code depending on where you want to deploy it. Build targets use something called an application environment to modify values used in your code without the need for conditional logic. All Angular developers should know how to work with application environments and build targets. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder, environments, and click on environments dot ts. This is the application environment for our production builds. This is also this environment dot development dot ts file, which is for our development builds. Each file exports a single variable called environment, which is just a standard object literal. In my work, these configuration objects are usually simple key value pairs like you see here for things like API keys or server URLs. But anything you can do in an object literal you can do here. So feel free to experiment with raises, nested objects, and even methods. Just make sure all your configurations have the same properties and property types. This way you avoid errors at runtime. To use the configuration, we import the environment variable into the files that need them. Let me show you what that looks like. I'll go to source, app, and click on app dot component dot ts to open the file. Import the variable on line two
>
> **[1:35](https://www.linkedin.com/learning/angular-essential-training-22884621/application-environments-and-build-targets?u=76281980&t=95)** and reference the app footer property on line 11. Notice that we import the environment variable from the production environment file and not the development environment file. You have to do it this way because at build time, Angular looks for all the import statements to this file and replaces it with import statements for other configurations as needed based on the build target. This may seem complicated, but everything happens behind the scenes when you run NG Build, NG Serve, or any other command that accepts a configuration. Let me show you what that looks like. Inside our code space, I'll go to the terminal and use the [[npm]] Start Command to launch a dev server. This may take a moment, so please be patient. This alert here in the lower right hand corner tells me I have a successful connection to the dev server inside the code space. I can click this blue button to launch a new browser tab, or I can command click on this URL to do the same thing. Either way, our project opens in a new tab so we can see our changes in real time. This is the main list for all of the players. Notice the text in the footer here that says copyright Gem Finder LLC, and then the words development build. This tells me that Angular loaded the configuration for our development environment. If I go back to the terminal, hit control C to kill the dev server, I can use a different command to use the production configuration. I'll type NPM run start colon production and hit enter.
>
> **[3:15](https://www.linkedin.com/learning/angular-essential-training-22884621/application-environments-and-build-targets?u=76281980&t=195)** Back in the example app, we can see a different footer without the words development build. This tells me that Angular loaded the configuration for our production environment and not the dev environment. I'll go back to the terminal, kill the dev server, and go back to the controller for our app component. Notice that there's no conditional logic in this file. This is the great thing about using environments and build targets. You can have as many targets as you need, reference the environment configuration where you need, and Angular will load the correct values automatically at build time. What an amazing thing! Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[npm]] (2), [[GitHub]] (1)
> **UI Navigation:** go to (3), click on (3), open the (1)
> **Env Vars:** npm (2), api (1), url (1), llc (1)
> **Cross-References:** go back to (3), earlier in (1)
> **Tools:** terminal (3), github (1)
> **CLI Commands:** npm (2), make (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### [Injecting dependencies using dependency injection](https://www.linkedin.com/learning/angular-essential-training-22884621/injecting-dependencies-using-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/injecting-dependencies-using-dependency-injection?u=76281980&t=0)** - [Instructor] [[Dependency Injection]], DI for short, is a [[Software Design]] pattern where classes and functions request dependencies from an external source rather than creating their own instances. It's not specific to the [[Angular]] framework, but it's a core concept and every Angular developer should know how it works. You can't use Angular without DI. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder, open the app folder, pages, profile, and click on profile.component.ts to open the file. This is the component controller for our profile page. We looked at components in detail earlier in this course. For now, just know that they're the main building blocks for all Angular applications. To use the dependency, we declare it in the class constructor as an argument. There's a few ways to do this depending on what you inject. For services, you can use the shorthand syntax you see here on lines 21 and 22. The private keyword comes from TypeScript. It tells Angular that these dependencies are for internal use only and should not be made available outside the class. As of this recording, the keyword is optional. You can leave it off like this. And dependencies will be public by default. Keep in mind that only public and protected class members are available in a components [[HTML]] template. I like to use the private class members when possible
>
> **[1:35](https://www.linkedin.com/learning/angular-essential-training-22884621/injecting-dependencies-using-dependency-injection?u=76281980&t=95)** to make it easy to delete dead code, but you could make these dependencies public or protected and access them directly in the template if you wanted to. Take some time and experiment with the code to see which option works for you. Next, after the private keyword is a unique name we use to reference the instance of each dependency. You can use any name you like, but I like to keep things short and easy to understand. On Line 21, I use api for the API service. And on line 22, I use route for Angular's activated route service. The next part is where the magic happens. Right after each name, I add a type annotation. Angular uses this type info to figure out which dependency we want and it automatically injects that dependency into our class. Let's break this down. Angular keeps a collection of key value pairs that represent all the dependencies in your app. Angular calls this list an injector. Angular stores a reference to each dependency using a unique key called a token. When you use a token, Angular looks in the injector for an instance of that dependency and returns the instance if found. In our case here, Angular sees the type annotation, checks the injector for an instance of the API service, an activated route service, and returns the instance for those dependencies. Depending on how you define and declare dependencies, Angular can create only one instance for all parts of the app. This is called a singleton
>
> **[3:07](https://www.linkedin.com/learning/angular-essential-training-22884621/injecting-dependencies-using-dependency-injection?u=76281980&t=187)** and it lets all parts of your app have access to the same data inside the dependency. You don't need to use singletons, but I recommend using them when you can. Take a moment and think about where you might be able to use singletons in your project. Anytime you need to cache data or share data between pages, it might be a good candidate for a singleton. Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (13), [[Dependency Injection]] (1), [[Software Design]] (1), [[GitHub]] (1), [[HTML]] (1)
> **UI Navigation:** open the (2), go to (1), click on (1)
> **Env Vars:** api (2), html (1)
> **Exercise Files:** template (2), exercise files (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** make (2)
> **Cross-References:** earlier in (2)
> **File Paths:** profile.component.ts (1)

#### [Declaring dependencies using dependency injection](https://www.linkedin.com/learning/angular-essential-training-22884621/declaring-dependencies-using-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/declaring-dependencies-using-dependency-injection?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at how to inject dependencies into your application using [[Angular]]'s [[Dependency Injection]]. In this video, we'll look at how to declare those dependencies to make them available for use. I opened our project here in a [[GitHub]] Codespace. I talked about why we use [[Codespaces]] earlier in this course, so for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the src folder. Open up the app folder, services and click on api.service.ts to open the file. This is the code for our custom API Service. Dependency injection and Angular services are closely linked. You can't use one without the other and most of the time services are all you need but you can inject other things too like strings, booleans, and object literals, as long as you give Angular a provider for that dependency. We'll look at providers in detail later in this course. For now, just think of them like recipes that tell Angular how to make and inject an instance of a dependency. We use the injectable decorator here on line 6 to declare a class as an injectable dependency. Decorators are functions that return functions. They're not specific to the Angular framework but they are a core piece of all Angular projects. The injectable decorator tells Angular to register this class with something called the injector making it available for future use. Think of the injector as a collection of key value pairs that represent all the dependencies in your app.
>
> **[1:33](https://www.linkedin.com/learning/angular-essential-training-22884621/declaring-dependencies-using-dependency-injection?u=76281980&t=93)** Angular stores a reference to each dependency using a unique key called a token. When you use a token, Angular looks in the injector for an instance of that dependency and returns the instance if found. The injectable decorator takes a configuration object as its only argument. The providedIn property tells Angular what parts of your project have access to the dependency. By default, the value of this property is null which means you must add the dependency directly to each module that uses it. You might see the decorator without a configuration object like this. This is the same thing as setting the providedIn property to no. In my work, we usually set the value as root like this. This tells Angular to create one instance of the service for all parts of the app. The [[CLI]] tool does this for you when you generate new services using the ng generate service command. Having only one instance of something is sometimes called a singleton. It's a powerful tool that lets all parts of your app have access to the same data inside the dependency. You don't need to use singletons but I recommend using them when you can to keep things consistent in your code base. Take a moment and think about where you might be able to use singletons in your project. Anytime you need to cache data or shared data between pages might be a good candidate for singleton. There's another value called platform. This creates one instance of the dependency shared across all Angular applications in your project.
>
> **[3:07](https://www.linkedin.com/learning/angular-essential-training-22884621/declaring-dependencies-using-dependency-injection?u=76281980&t=187)** I never use the platform value in my work because there's usually only one Angular app in each project. I recommend using the root value when you can and safe platform for when you know you need it. Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (13), [[Dependency Injection]] (2), [[GitHub]] (1), [[Codespaces]] (1), [[CLI]] (1)
> **UI Navigation:** go to (1), click on (1), open the (1)
> **CLI Commands:** make (2)
> **Code Identifiers:** providedin (2)
> **Env Vars:** api (1), cli (1)
> **Cross-References:** earlier in (1), later in (1)
> **File Paths:** api.service.ts (1)
> **Tools:** github (1)

#### [Providing dependencies using dependency injection](https://www.linkedin.com/learning/angular-essential-training-22884621/providing-dependencies-using-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/providing-dependencies-using-dependency-injection?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at declaring and injecting dependencies using [[Angular]]'s [[Dependency Injection]]. In this video, we'll look at how to provide those dependencies and make them available for use. I opened our project here in a [[GitHub]] codespace. I talk about why we use [[Codespaces]] earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the src folder. Open up the app folder and click on app.module.ts to open the file. Use the provider's array like you see here on line 20 to inject services into the decorator for your module. There are a few ways to declare providers. In my work, most of the time we use the shorthand syntax and reference class names directly. For example, let's imagine that our API service was not already injected into the route of our project. So to use the service, I would need to add the class to the list of providers in my module like this. I can also reference dependencies using a provider configuration object, which looks something like this. The provide property tells Angular how you'll reference this dependency in your code. Angular calls this reference a token. [[Tokens]] must be unique for each dependency. In our case here, the token for our API service is the class itself but you can also use a string or something called an injection token if needed. What you use for a token depends on what you need to inject
>
> **[1:33](https://www.linkedin.com/learning/angular-essential-training-22884621/providing-dependencies-using-dependency-injection?u=76281980&t=93)** and what the [[Representational State Transfer (REST)|rest]] of your code base looks like. The use class property tells Angular what to inject when you ask for this dependency using the token. Here, we're telling Angular to inject the API service class. Because the token and the thing we want to inject are the same, we can use the shorthand syntax you see on line 22. This tells Angular, whenever you see the API service token inject the API Service class. Dependency injection and Angular services are closely linked. You can't use one without the other and most of the time, services are all you need. So you'll see this shorthand syntax a lot. Keep in mind, the shorthand syntax only works with classes but you can inject other things too as long as you give Angular a token and a value for that dependency. The useValue property lets you inject primitives like strings, booleans and object literals.
>
> **[2:32](https://www.linkedin.com/learning/angular-essential-training-22884621/providing-dependencies-using-dependency-injection?u=76281980&t=152)** The useFactory property lets you define a callback function that returns a value. And the useExisting property is kind of like an alias for an existing token. It basically tells Angular, hey, whenever you see this one token, use the value for this other token instead. Again, how you define the value for a token depends on what you need to inject and what the rest of the code base looks like. Here are two things to keep in mind when working with providers. First, if you're using standalone components, everything works the same as with modules. The only difference is that you add your dependencies to the provider's array and the component decorator instead of the module decorator. We talked about standalone components in detail earlier in this course. Second, if you inject your services into the route of your project, you don't need to declare them in a provider's array. You can add them directly to your class instructors as needed. We talked about injecting services earlier in this course so for now, just know that our API service is injected into the route of our project so we don't need to add it to the list of providers here. I'll reset our app module here so everything works as expected. Be sure to check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (9), [[Dependency Injection]] (2), [[Representational State Transfer (REST)|Rest]] (2), [[GitHub]] (1), [[Codespaces]] (1)
> **Env Vars:** api (6)
> **Cross-References:** earlier in (4), we talked about (2)
> **Code Identifiers:** usevalue (1), usefactory (1), useexisting (1)
> **UI Navigation:** go to (1), open the (1)
> **Analogies:** for example (1), imagine (1)
> **File Paths:** app.module.ts (1)
> **CLI Commands:** make (1)

#### [Angular change detection strategies](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-change-detection-strategies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-change-detection-strategies?u=76281980&t=0)** - [Instructor] Change detection is how [[Angular]] checks your application state for changes and updates the UI to keep everything in sync. It's what makes Angular applications dynamic and interactive. You can't use Angular without change detection, and every Angular developer should know how it works. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder. Open the app folder, components, high-scores, and click on the high-scores.component.ts file to open it. All components use Angular's default change detection unless you tell the framework to use a different strategy. As of this recording, there are only two strategies, default and something called OnPush. You set the strategy on any component by adding the change detection property in that component's decorator, like we do here on line 17. Angular's default change detection checks a component for changes whenever it mutates data inside objects and arrays, whenever it redefines properties on the component's class, or whenever it triggers events like API calls or click handlers. Angular will then start at the root component and compare the new state tree with the old state tree using a strict equality comparison. It marks the things that changed with a Boolean, and Angular reruns only the code that needs the changes. When you set a component to use OnPush like we did here,
>
> **[1:37](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-change-detection-strategies?u=76281980&t=97)** Angular skips checking that component and all its sub trees. This speeds up the change detection cycle because there's less code to check. With OnPush, you must redefine a property, trigger an event, or manually call change detection to have Angular check for changes in that component and its sub trees. We can use OnPush here in this component because we never mutate the data. Instead, we declare this public players& property on line 20 and set its value only once on line 27. The Angular team optimized change detection to take full advantage of the [[JavaScript]] engines inside modern browsers. But onPush is a great option if your project has a lot of components to check for updates. Take a moment and think about where you might be able to use OnPush in your project. Any place where you have a lot of components that need updating might be a good candidate for OnPush change detection. Also, check out my audio course on building large-scale Angular projects for more info on Angular's change detection and how it works.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (13), [[GitHub]] (1), [[JavaScript]] (1)
> **UI Navigation:** go to (1), open the (1), click on (1)
> **File Paths:** high-scores.component.ts (1)
> **Code Identifiers:** onpush (1)
> **Env Vars:** api (1)
> **Cross-References:** earlier in (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)

#### [Angular component lifecycle hooks](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-component-lifecycle-hooks?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-component-lifecycle-hooks?u=76281980&t=0)** - [Instructor] Lifecycle hooks lets you run custom code when [[Angular]] initializes a component or directive, when the template loads in the dom, when changes happen, and when Angular destroys the component. These hooks are a big part of building Angular apps, and all Angular developers should know how to use them. I opened our project here in a [[GitHub]] code space. I talked about why we use code spaces earlier in this course. So, for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder, open the app folder, pages, players, and click on players.component.ts to open the file. As of this recording, Angular exposes eight lifecycle hooks for each component or directive. You access these hooks by adding them as public methods on your component's class. Each hook has a special method name, and each taps into a different part of the component lifecycle. The most common hook I use in my work is ngOnInit. You can see that method here starting on line 18. Angular will call this method once after the initial construction of the component or directive. While you could do something similar with the class constructor, using ngOnInit is a much safer option, because Angular can guarantee access to the dependency injector, as well as the component's inputs. I recommend using ngOnInit when you can instead of using the class instructor. While, not required, it's good practice to implement the interface for the lifecycle hooks you want to use. This helps with auto completion and type safety.
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-component-lifecycle-hooks?u=76281980&t=94)** You can implement as many hooks as you need by adding them as implementation details on your class. We do that here on line 11. Here, we implement only one hook, but I could add more hooks by adding them to this list separated by commas. For example, if I wanted to also use the ngOnDestroy hook, another common hook I use in my work, I would implement it by typing a comma, followed by the interface name, which is on Destroy. I would then add a new public method with the correct name. Here, it would be ngOnDestroy. And I would put whatever code I need inside this method. Angular calls the ngOnDestroy method once just before it tears down a component or directive. It's a safe place to do cleanup work, like unsubscribing from observables, stopping timers, and unregistering callbacks. There's nothing in this particular component that needs cleanup, so I'll reset the code and get rid of the implementation. Take a moment, and think about places in your project where you could use Angular's lifecycle hooks. Any place where you need to tap into the key events of a component's lifecycle may be a good place to use a hook. Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (9), [[GitHub]] (1)
> **Code Identifiers:** ngoninit (3), ngondestroy (3)
> **UI Navigation:** open the (2), go to (1), click on (1)
> **Exercise Files:** template (1), exercise files (1)
> **File Paths:** players.component.ts (1)
> **Tools:** github (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)


### 5. Routing and Navigation

[↑ Back to Table of Contents](#table-of-contents)

#### [Defining routes for Angular Router](https://www.linkedin.com/learning/angular-essential-training-22884621/defining-routes-for-angular-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/defining-routes-for-angular-router?u=76281980&t=0)** - [Instructor] The [[Angular]] framework has full support for everything you might need when navigating between pages in your app. Some projects are small enough that they don't need page [[Routing]], but it's a good idea for all Angular developers to know how routing works. I opened our project here in a [[GitHub]] codespace. I talked about why we use [[Codespaces]] earlier in this course, so for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder, open the app folder and click on app routing dot module dot TS to open the file. Angular Router is the official package for managing routes in Angular apps. It's an optional package that you add to your project as needed using the [[Angular CLI]] tool. There are two parts to using Angular Router in your app. The first part is defining your routes and bootstrapping the Router service. And the second part is using the routes in your templates. We'll look at using routes in your templates later in this course. In my work, we usually define all our routes in one big array like you see here starting on line five. It's an array of objects. Each object represents one route definition. You can have as many definitions as you need, but keep in mind that the order of your routes matter because Angular will always use the first route it finds that satisfies the parsing criteria. Always put the most specific routes at the start of your array and the least specific routes at the end. There are a few ways to define routes depending on your needs.
>
> **[1:33](https://www.linkedin.com/learning/angular-essential-training-22884621/defining-routes-for-angular-router?u=76281980&t=93)** What you see here is the approach I use most often in my work. The path property is a string that tells Angular what to look for in the URL. This value is always relative to the parent route, if any. If there's no parent route, then this value is relative to the base HREF defined in the index dot [[HTML]] file. Let me show you that. We define the base HREF on line six in the index dot HTML file, which is just the root of our website in this case. But you can set this value to whatever you need. Let's go back to our route definitions. The value of the path property can also include something called a dynamic route parameter like you see on line seven, as well as wild cards like you see on line 33. We'll look at dynamic route parameters later in this course. Wild cards tell Angular to accept any value it sees in that position in the URL. In my work, we use it most often to define a catchall route like you see here at the bottom of the array. This definition tells Angular to use this route when no other route matches the URL. Here we tell Angular to redirect to the all players page using the redirect to property. The value of this property is a string. This forward slash tells Angular that the string represents an absolute route relative to the base HREF. No forward slash means the redirect
>
> **[3:06](https://www.linkedin.com/learning/angular-essential-training-22884621/defining-routes-for-angular-router?u=76281980&t=186)** is relative to the parent route, if any. Another special path you might see is an empty string like here on line 28. This path represents the route URL for your project, usually the same thing as the base HREF. This special path is usually paired with the path match property. Path match tells Angular which strategy to use when checking URLs. Angular checks URLs left to right and by default, it will use the first route definition it finds that is a partial match for the URL. Most of the time this behavior works like we expect it to, but sometimes, like here, we want Angular to match the route only if it's an exact match. We do that by setting the path match property to the value of full. This tells Angular to match this route only if it is an exact match with nothing else in the URL. If we didn't set the path match property, Angular would match this route every time because every route starts with the root URL. We use the load children property on lines 13 and 19 to tell Angular which module to use when navigating to that path. You can do the same thing for standalone components using the load component property like you see on lines 8 and 24. We'll look at these properties in detail later in this course. The title property lets you set the page name
>
> **[4:40](https://www.linkedin.com/learning/angular-essential-training-22884621/defining-routes-for-angular-router?u=76281980&t=280)** displayed in the browser tab or browser window. It's also the name used when a user bookmarks the page. You can set the value as a static string like we do here on lines 14 and 20, or you can set the value as a function like we do on line 9. Using a function gives you access to Angular's [[Dependency Injection]], as well as access to the details of the current URL. This lets you create a dynamic page title based on some custom calculation you define in the function. We'll also look at this in detail later in the course. Finally, there's this data property like you see on lines 15 and 25. It lets you assign additional custom key value pairs to any route if needed. You can then use this data in other parts of your app by accessing the property through the route object or the activate route class. We'll look at these properties in detail later in this course. Angular Router is a powerful tool and I recommend you check out the exercise files for links to more info on all the ways you can customize page navigation in your project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (19), [[Routing]] (3), [[HTML]] (2), [[GitHub]] (1), [[Codespaces]] (1)
> **Env Vars:** url (8), href (4), html (2), cli (1)
> **Cross-References:** later in (5), earlier in (1), go back to (1)
> **Definitions:** is a  (4), is an  (2)
> **UI Navigation:** open the (2), go to (1), click on (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Warnings:** keep in mind (1)

#### [Using routes with Angular's Router module](https://www.linkedin.com/learning/angular-essential-training-22884621/using-routes-with-angular-s-router-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/using-routes-with-angular-s-router-module?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at how to define custom routes for use with [[Angular]]'s router module. In this video, we'll focus on making these routes available in your app. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course, so for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder, open up the app folder and click on app-[[Routing]].module.ts to open the file. Angular router is the official package for managing routes in Angular apps. It's an optional package that you add to your project as needed using the [[Angular CLI]] tool. There are two parts to using Angular router in your app. The first part is defining your routes and bootstrapping the router service. The second part is using the routes in your templates. We'll look at using routes in your templates later in this course. To make your routes available in the app, add Angular's router module to the list of imports and exports in the engine module decorator in your main routing file. We do this here on lines 40 and 42. We import the module so we can pass in the route definitions and bootstrap the service. We export the same module to make it available in other parts of the app. The router module has two static methods forRoot and forChild. ForRoot tells Angular that this is the main instance for your route definitions. Call this method only once in your project and pass in your route definitions as the first argument.
>
> **[1:35](https://www.linkedin.com/learning/angular-essential-training-22884621/using-routes-with-angular-s-router-module?u=76281980&t=95)** The second argument is an optional configuration object which we'll look at in detail later in this course. Use the forChild method to define a subset of routes for a specific module. For example, we load the leaderboards module on line 19. I'll go to the source folder, App, Pages, Leaderboards and click on leaderboards.module.ts to open the file. See on line 19 here where we import the leaderboards routing module. This file has all the route definitions for just this one route, and if we open the leaderboards routing.module.ts file, we can see the call to forChild on line eight. This method also takes an array of route definitions as its first argument, just like forRoute. While not required, using forChild is a great way to organize your routing because each module can manage its own routes. Take a moment and think about where you might be able to use child routes in your project. Any place you use a module might be a good candidate for child routes. If your project uses standalone components, you'll need to define your routes as part of the main route definitions array for your project like we did for the profile page and the messages page in the app-routing.module.ts file. Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[Routing]] (6), [[GitHub]] (1), [[Angular CLI]] (1)
> **UI Navigation:** open the (3), go to (2), click on (2)
> **Code Identifiers:** forchild (4), forroot (1), forroute (1)
> **File Paths:** app-routing.module.ts (2), leaderboards.module.ts (1), routing.module.ts (1)
> **Cross-References:** earlier in (2), later in (2)
> **CLI Commands:** make (2)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (1), just like (1)

#### [Lazy loading Angular routes](https://www.linkedin.com/learning/angular-essential-training-22884621/lazy-loading-angular-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/lazy-loading-angular-routes?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at how to define and use custom routes for [[Angular]]'s router module. In this video, we'll look at lazy loading components and modules to make your app faster and more performant. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder, open the app folder and click on approuting.module.ts to open the file. Angular Router is the official package for managing routes in Angular apps. It's an optional package that you add to your project as needed using the [[Angular CLI]] tool. There are two parts to using Angular Router in your app. The first part is defining your routes and bootstrapping the router service. The second part is using the routes in your templates. We'll look at using routes in your templates later in this course. When defining a route, the loadChildren property tells Angular which module to use when navigating to this route. You can do something similar with the loadComponent property to load standalone components like you see on lines 8 and 24. Either way, the value for these properties should be a callback that returns a dynamic import. Dynamic imports are a special function-like expression available in all modern browsers that lets you load ES6 modules in an asynchronous way. This lets Angular lazy load your routes. With lazy loading, Angular only loads modules when needed.
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/lazy-loading-angular-routes?u=76281980&t=94)** This is Angular's default behavior when working with routes and it usually means a faster initial page load which everyone likes. The downside is that there's more network lag when [[Routing]] between pages because Angular must [[Fetch]] the next module before rendering it. The slower the network connection, the more lag when navigating between pages. But if you pair lazy loading with a preload strategy, Angular loads only the modules needed for that first page and then immediately makes background requests for some or all of the other modules. This means you get the best of both worlds, a fast initial page load and low lag when navigating between pages. Let me show you what that looks like in the browser. Inside our code space, I'll open a new terminal window and use the [[npm]] start command to launch a dev server. This may take a moment, so please be patient. This alert here in the lower right-hand corner tells me I have a successful connection to the dev server inside the code space. I can click this blue button to launch a new browser tab or I can command click on this URL here to do the same thing. Either way, our project opens in a new tab so we can see our changes in real time. With our example app running in a dev server, I'll go to the network tab here in Chrome's developer tools, clear the content of the tab, and I'll click on this button up here in the browser to refresh the page. We can see all the network traffic now in that request
>
> **[3:08](https://www.linkedin.com/learning/angular-essential-training-22884621/lazy-loading-angular-routes?u=76281980&t=188)** including this file here which represents the module code for the current page. There's also this file here that represents the messages page, which we loaded in the background using a preload strategy. We'll look at preloading strategies in detail later in this course. What you don't see here is any code for the leaderboards page. Angular will lazy load that module only when we need it. If I clear the network tab and navigate to the leaderboards page, you can see the network request to get the code for that page. And if I navigate to the messages page, there's no new network request for component code because we already made that call and Angular has it in memory. Take a moment and think about places in your project where you could take advantage of lazy loading for components and modules. Any code you don't need right away when your app loads might be a good candidate for lazy loading. Be sure to check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (12), [[GitHub]] (1), [[Angular CLI]] (1), [[Routing]] (1), [[Fetch]] (1)
> **UI Navigation:** click on (3), go to (2), open the (2), navigate to (2)
> **Cross-References:** earlier in (2), later in (2)
> **Env Vars:** cli (1), es6 (1), url (1)
> **CLI Commands:** make (1), npm (1)
> **Code Identifiers:** loadchildren (1), loadcomponent (1)
> **Tools:** github (1), terminal (1)
> **File Paths:** approuting.module.ts (1)

#### [Dynamic route parameters in Angular routes](https://www.linkedin.com/learning/angular-essential-training-22884621/dynamic-route-parameters-in-angular-routes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/dynamic-route-parameters-in-angular-routes?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at how to define and use custom routes for [[Angular]]'s router module. In this video, we'll look at using dynamic route parameters in your route definitions. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course so for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder, open the app folder, and click on app-[[Routing]].module.ts to open the file. Angular Router is the official package for managing routes in Angular apps. It's an optional package that you add to your project as needed using the [[Angular CLI]] tool. There are two parts to using Angular Router in your app. The first part is defining your routes and bootstrapping the router service. The second part is using the routes in your templates. We'll look at using routes in your templates later in this course. When defining your routes, use a colon followed by any lowercase string to define a route parameter in your path. We do this right here on line seven. This tells Angular to look for a URL that contains the [[Microsoft Word|word]] profile, followed by a slash, followed by some other string, which we assign the token of ID. I can access this token from any component, service, or directive using the activated route and activated route snapshot classes that come from Angular. The difference is that the snapshot represents a specific moment in time, while the standard activated route represents data that may change in the future.
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/dynamic-route-parameters-in-angular-routes?u=76281980&t=94)** For most use cases, you'll use the standard activated route, but here in the callback function on line nine, Angular passes back an activated route snapshot as the first argument. We can use this snapshot to set the page title dynamically based on which profile we're looking at in the app. The route snapshot has this param map property, and we use the get method on that property to access the value of the ID token. I could do the same for other params if needed. This method returns the current value of that token from the URL, which we then use in this template literal to generate the page title. Let me show you what that looks like in the browser. Inside our code space, I'll open a new terminal window and use the [[npm]] start command to launch a dev server. This may take a moment, so please be patient. This alert here in the lower right-hand corner tells me I have a successful connection to the dev server inside the code space. I can click this blue button here to launch a new browser tab, or I can command click on the URL here to do the same thing. Either way, our project opens in a new tab so we can see our changes in real time. From the all players page, I can click on any of the players to see their profile. I'll click on Johnny Allen here at the top. We can see here the ID for this player, which matches the ID in the URL,
>
> **[3:12](https://www.linkedin.com/learning/angular-essential-training-22884621/dynamic-route-parameters-in-angular-routes?u=76281980&t=192)** which we accessed using the route snapshot to set the page title. Let's go back to the code. Activated route is a powerful tool that gives you access to all sorts of details from the URL, including things like query parameters, matrix parameters, and URL fragments. Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (7), [[GitHub]] (1), [[Routing]] (1), [[Angular CLI]] (1), [[Microsoft Word|Word]] (1)
> **Env Vars:** url (6), cli (1), npm (1)
> **UI Navigation:** click on (4), open the (2), go to (1)
> **Cross-References:** earlier in (2), later in (1), go back to (1)
> **Tools:** github (1), terminal (1)
> **Exercise Files:** template (1), exercise files (1)
> **File Paths:** app-routing.module.ts (1)
> **CLI Commands:** npm (1)

#### [Preloading strategies for Angular Router](https://www.linkedin.com/learning/angular-essential-training-22884621/preloading-strategies-for-angular-router?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/preloading-strategies-for-angular-router?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at how [[Angular]] lazy loads components and modules to make your app faster and more performant. In this video, we'll focus on how you can use preloading strategies to load content in the background for navigating between pages. I opened our project here in a [[GitHub]] codespace. I talk about why we use [[Codespaces]] earlier in this course so for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the src folder. Open the app folder and click on app-[[Routing]].module.ts to open the file. Angular Router is the official package for managing routes and Angular apps. It's an optional package that you add to your project as needed using the [[Angular CLI]] tool. There are two parts to using Angular Router in your app. The first part is defining your routes and bootstrapping the router service. The second part is using the routes in your templates. We'll look at using routes in your templates later in this course. By default, Angular uses lazy loading to load components and modules only when needed. This usually means a faster initial load time for your app, which everyone likes. The downside is that there's more network lag when routing between pages because Angular must first [[Fetch]] the next module before rendering it. The slower the network connection, the more lag your users see when navigating between pages. Most of the time, lazy loading works well but you can override Angulars default behavior by setting a preloading strategy for Angular Router. Let me show you what that looks like.
>
> **[1:33](https://www.linkedin.com/learning/angular-essential-training-22884621/preloading-strategies-for-angular-router?u=76281980&t=93)** Down here in line 40, in the routing module, we add Angular's Router module to the list of imports in the NgModule decorator. We do this so we can pass in the route definitions and bootstrap the service. We can also pass in an optional configuration object as the second argument that lets us set several options including this preloading strategy property. The value of this property is a class that has a public method on it that returns an observable. The default value is no preloading which means all routes are lazy loaded when needed. You can use the built-in preload all modules class to load all available modules on app launch. This works well for small apps but keep in mind that the more modules you load, the longer your app will take to launch. One final option is to use a custom service to pick and choose which modules you want to load in the background. That's what we did here with this PreloadingService. Let's take a look at it in detail. I'll go to src, app, services and click on preloading.service.ts to open the file. This is a standard Angular service using the injectable decorator. We looked at services in detail earlier in this course so for this video we'll focus on just the things that make it unique for managing our preload strategy. Our custom class is called preloading service and you can see on line 8 that it implements Angular's preloading strategy class for the interface.
>
> **[3:06](https://www.linkedin.com/learning/angular-essential-training-22884621/preloading-strategies-for-angular-router?u=76281980&t=186)** You don't need to implement this class but it's good practice and helps with auto completion and type safety. What's important is that your service has a public method called Preload because that's the method name Angular will look for when checking all the routes to see which ones need to get loaded in the background. Angular will pass each route definition into this method as the first argument. The second argument is a callback function that returns an observable. This is how you tell Angular to preload the route. There are a few ways to do this and the technique you use depends a lot on the needs of your project, but I kept things simple here and just use the basic conditional statement to choose the route to preload. On line 11, I checked to see if the route has a data object and if it does, I check the value of the preload property on that object.
>
> **[4:08](https://www.linkedin.com/learning/angular-essential-training-22884621/preloading-strategies-for-angular-router?u=76281980&t=248)** If preload is true, I call the callback function. If not, I create a new observable with a value of null. We access the preload property using square bracket notation because of the type definition for the data object that comes from Angular. This data object comes from the routes we defined in our app-routing.module.ts file.
>
> **[4:38](https://www.linkedin.com/learning/angular-essential-training-22884621/preloading-strategies-for-angular-router?u=76281980&t=278)** Keep in mind that this is only one way to make a custom preloading service. You can use any technique that works well for your needs. Take a moment and think about places in your project where you could take advantage of preloading components and modules. Any code you need right away when your app loads might be a good candidate for preloading. Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (14), [[Routing]] (4), [[GitHub]] (1), [[Codespaces]] (1), [[Angular CLI]] (1)
> **UI Navigation:** open the (3), go to (2), click on (1)
> **Cross-References:** earlier in (3), later in (1)
> **Definitions:** is a  (3), is called (1)
> **File Paths:** app-routing.module.ts (2), preloading.service.ts (1)
> **CLI Commands:** make (3)
> **Warnings:** keep in mind (2)
> **Env Vars:** cli (1)

#### [Using Angular Router with Angular templates](https://www.linkedin.com/learning/angular-essential-training-22884621/using-angular-router-with-angular-templates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/using-angular-router-with-angular-templates?u=76281980&t=0)** - [Instructor] The [[Angular]] framework has full support for everything you might need when navigating between pages in your app. Some projects are small enough that they don't need page [[Routing]], but it's a good idea for all Angular developers to know how routing works. I opened our project here in a [[GitHub]] codespace. I talk about why we use [[Codespaces]] earlier in this course, so for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder, open the app folder, and click on app dot component dot [[HTML]] to open the file. Angular Router is the official package for managing routes in Angular apps. It's an optional package that you add to your project as needed using the [[Angular CLI]] tool. There are two parts to using Angular Router in your app. The first part is defining your routes and bootstrapping the router service. The second part is using the routes in your templates. We looked at defining routes and bootstrapping the service earlier in this course. In this video, we'll focus on how to use the routes in your templates to show content and navigate between pages. Angular won't display the content of a route until you tell it where in the dom that content should go. We do this on line 18 using the built-in router outlet component. This component acts like an anchor that Angular uses to fill the dom with the content of the active route. Here we sandwich the router outlet between header navigation and the footer of our app. Let me show you what that looks like in the browser. Inside our codespace, I'll open a new terminal window and use the [[npm]] start command to launch a dev server.
>
> **[1:37](https://www.linkedin.com/learning/angular-essential-training-22884621/using-angular-router-with-angular-templates?u=76281980&t=97)** This may take a moment, so please be patient. This alert here in the lower right hand corner tells me I have a successful connection to the dev server inside the codespace. I can click this blue button to launch a new browser tab or I can command click this URL here to do the same thing. Either way, our project opens in a new tab so we can see our changes in real time. I'll right click on the footer here and click on inspect. Here, we can see the footer element at the bottom of the page. And here's the nav element near the top. And right here is our router outlet. And under that is the content for the active route. If I change the route, Angular will change the dom to match. I'll click on this leaderboards tab here. And you can see, here's the router outlet again, and under that is now the content for the new route. Let's go back to the code. We use the router link directive to tell Angular which route to navigate to next. We use it here on lines four, eight, and 12. The value for this directive can be a string representing a relative or absolute path. It can also be an array where each item is a segment of that path. Let me show you what that looks like. I'll go to the source folder, app, pages, players, and click on players dot component dot HTML
>
> **[3:11](https://www.linkedin.com/learning/angular-essential-training-22884621/using-angular-router-with-angular-templates?u=76281980&t=191)** to open the file. Here on line eight, we set the value of the router link directive to an array. The first segment of the path is a static string and the second segment is the ID for each player in the list of players. Angular will update this part of the segment dynamically for each player in the list. We have to surround the route link directive in square brackets to tell Angular to update the value of the player ID dynamically for each player in the list. Without the square brackets, Angular will treat this whole value as a static string. Let's go back to the app dot component dot HTML file. One last directive I want to show you is called router link active. We use it here on lines four, eight and 12. All it does is check to see if the route for this element is the active route and if it is, Angular will add an active class to the list of CSS classes in the dom. Let me show you what that looks like in the browser. Back in the example app, I'll right click on the active tab here and click on inspect. And here, in the list of CSS classes, you can see the active class assigned from that router outlet active directive. If we switch to a different tab, Angular updates the CSS classes for the new active route. This makes it really easy to target the active element and style it any way we like.
>
> **[4:45](https://www.linkedin.com/learning/angular-essential-training-22884621/using-angular-router-with-angular-templates?u=76281980&t=285)** There's a lot you can do with router outlet and router link and I recommend you check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (14), [[HTML]] (3), [[Routing]] (2), [[GitHub]] (1), [[Codespaces]] (1)
> **UI Navigation:** click on (6), open the (3), go to (2), navigate to (1), switch to (1)
> **Env Vars:** html (3), css (3), cli (1), npm (1), url (1)
> **Cross-References:** earlier in (2), go back to (2)
> **Definitions:** is a  (2), is called (1)
> **Tools:** github (1), terminal (1)
> **CLI Commands:** npm (1)
> **Exercise Files:** exercise files (1)


### 6. Reactive Programming

[↑ Back to Table of Contents](#table-of-contents)

#### [Angular signals and the Signal function](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-signals-and-the-signal-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-signals-and-the-signal-function?u=76281980&t=0)** - [Instructor] Starting in version 16, the [[Angular]] team introduced something called Signals that you can use to make your code more reactive. Reactive programming is a coding pattern where you can watch for changes in data over time and trigger things to happen based on those changes. This coding pattern is a big part of the Angular framework and all Angular developers should be familiar with Signals and how to use them. Signals wrap your data inside getters and setters that Angular can easily track. When a value changes, Angular can propagate that one change to any place in the code that needs it. This is more efficient than Angular's other change detection strategies. We looked at change detection in detail earlier in this course. For now, just know that by default, Angular needs to check all the components and child components that might have changed before actually making that change. With Signals, Angular updates just that one value and doesn't need to worry about other parts of the component. As of this, recording, Signals are still in development preview, which means the API may change at any time based on feedback from the community. Check out Angular's official documentation for the most up-to-date info on Signals and how to use them. I opened our project here in a [[GitHub]] codespace. I talk about why we use [[Codespaces]] earlier in this course, so for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the src folder, open the app folder, services and click on message.service.ts to open the file. This is the code for our custom message service.
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-signals-and-the-signal-function?u=76281980&t=94)** We looked at writing services in detail earlier in this course, so for this video we'll focus just on the things that relate to Angular Signals. Use the signal function to create a new reactive value. We do this here on line 11 and assign it to the public property called unread. This function takes one required argument, the initial value for your signal. You can pass in any value you need and the signal function will do its best to set the correct types for your data. You can also set the types manually like we did here if you need to. The signal function returns something called a writeable signal, which gives you helper methods to modify the data inside your signal. Use the set method to replace the existing value with new data. We do this on line 29 where we get the list of messages back from the API call to our mock server. Use the update method like we do on line 34 to return a new value based on the current data. Here we take the current value in the signal and return all messages except the one selected for deletion. You can use a method called mutate to change the current value directly instead of returning a new value. Let me show you what that might look like. Instead of calling the update method, I would call this.unread.mutate which gives me access to the value in the callback function. Instead of returning a new array of messages, I might use the splice method to modify the data in place and remove only the selected item.
>
> **[3:08](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-signals-and-the-signal-function?u=76281980&t=188)** Something like this. Let's see what all this looks like in the browser. Inside our codespace, I'll open a new terminal window and use the [[npm]] start command to launch a dev server. This might take a moment, so please be patient. This alert here in the lower right hand corner tells me I have a successful connection to the dev server inside the codespace. I can click this blue button to launch a new browser tab or I can command click this URL here to do the same thing. Either way, our project opens in a new tab so we can see our changes in real time. I'll click on the messages tab here on the right which shows all of my unread messages. And if I click on this delete button here and the corner of a message, it will remove that message from the list like this. The same thing happens when we use the update method. I'll go back to the code and restore what we had originally. Save my changes. If we go back to the app, everything works the same. Personally, I like the update method because I'm a big fan of immutable data but you can use whichever method you like. Let's go back to the code. To get the value inside a signal, call the assigned property like a function. We do this on line 14. Calling the signal gives you access
>
> **[4:42](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-signals-and-the-signal-function?u=76281980&t=282)** to all the methods available to the underlying value type. In our case here, we access the length property on the array of messages and return its value. We'll look at this bigger piece of code in detail later in this course. Take a moment and think about where you might be able to use Signals in your project. Any place your data changes over time might be a good candidate for a signal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (10), [[GitHub]] (1), [[Codespaces]] (1), [[npm]] (1)
> **UI Navigation:** click on (3), open the (2), go to (1)
> **Cross-References:** go back to (3), earlier in (1), later in (1)
> **Env Vars:** api (2), url (1)
> **CLI Commands:** make (1), npm (1)
> **Tools:** github (1), terminal (1)
> **Definitions:** is a  (2)
> **File Paths:** message.service.ts (1)

#### [Angular signals and the Computed function](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-signals-and-the-computed-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-signals-and-the-computed-function?u=76281980&t=0)** - [Instructor] Starting in version 16 the [[Angular]] team introduced something called signals that you can use to make your code more reactive. Earlier in this course we looked at Angular signal function and how to use it to make new reactive values. In this video, we'll look at computing new reactive values from existing signals. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder, open the app folder, services, and click on message dot service dot ts to open the file. This is the code for our custom message service. We looked at writing services in detail earlier in this course. So for this video, we'll focus on just the things that relate to computed signals. Use the computed function to create a new reactive value based on existing signals. We do this here on line 13 and assign it to the public property called count. This function takes a callback that returns a value that uses data from one or more other signals. Here on line 14, we access the value of the unread property by calling it like a function. Calling the signal gives us access to all the methods available to the underlying value type. In our case here, we access the length property on the array of messages and return its value. Here's three things to keep in mind
>
> **[1:32](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-signals-and-the-computed-function?u=76281980&t=92)** when using computed signals. First, computed signals are read only. You access their value by calling it like a function, but you can't modify the value directly. Computed signals update automatically whenever one or more of the underlying signals change. Second, Angular will cache the value of a computed signal once calculated. This makes them great for things like filtering a large array of items or doing complex math. And finally, Angular uses lazy evaluation to calculate computed signals and the underlying signals they rely on. This means Angular will check the value of a signal only when called. This makes them very performant and keeps your application fast. As of this, recording, signals are in developer preview, which means the API may change at any time based on feedback from the community. Check out Angular's official documentation for the most up-to-date info on signals and how to use them. Take a moment and think about where you might be able to use signals in your project. Any place your data changes over time might be a good candidate for a signal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[GitHub]] (1)
> **UI Navigation:** open the (2), go to (1), click on (1)
> **Cross-References:** earlier in (3)
> **CLI Commands:** make (2)
> **Env Vars:** api (1)
> **Versions:** version 16 (1)
> **Tools:** github (1)
> **Warnings:** keep in mind (1)

#### [Angular signals and the Effect function](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-signals-and-the-effect-function?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-signals-and-the-effect-function?u=76281980&t=0)** - [Instructor] Starting in version 16, the [[Angular]] team introduced something called signals, that you can use to make your code more reactive. Earlier in this course, we looked at Angular signal API, for making new reactive values, and for computing values based on other signals. In this video, we'll look at triggering side effects, when one or more signals change. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course. So for now, just think of them, as an easy way to share and write code, without installing anything on your local machine. I'll go to the source folder, open the app folder, services and click on message dot service dot TS, to open the file. This is the code for our custom message service. We looked at writing services, in detail earlier in this course. So for this video, we'll focus on just the things, that relate to triggering side effects. Use the effect function to run side effects, when one or more signals change. We do this here on lines 21 through 23. The function takes a callback, as its first argument. Inside the body of the callback, we call our mock analytics service, to track the number of messages. We access the value of the count signal, by calling it like a function. Calling the signal gives us access to all the methods, available to the underlying value type. In our case here, we access the two string method, to transform the count into a string. Keep in mind, that effects check the value
>
> **[1:32](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-signals-and-the-effect-function?u=76281980&t=92)** of signals only when accessed. This makes them very performant, and keeps your application fast. They also always execute asynchronously, during a change detection cycle. This means you should not rely on them, to update the UI or do blocking tasks. Effects run at least once and then run again, whenever any of the underlying signals change. Finally, effects need to access Angular's [[Dependency Injection]]. The easiest way to do this, is to set up your effects, inside the constructor of your components, services, and directives like we did here. As of this recording, signals are in developer preview, which means the API may change at any time, based on feedback from the community. Check out Angular's official documentation, for the most up-to-date info on signals and how to use them. Take a moment and think about, where you might be able to use signals in your project. Any place your data changes over time, might be a good candidate for a signal.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (4), [[GitHub]] (1), [[Dependency Injection]] (1)
> **UI Navigation:** open the (2), go to (1), click on (1)
> **Cross-References:** earlier in (3)
> **Env Vars:** api (2)
> **CLI Commands:** make (1)
> **Versions:** version 16 (1)
> **Tools:** github (1)
> **Warnings:** keep in mind (1)

#### [Angular's async pipe](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-s-async-pipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-s-async-pipe?u=76281980&t=0)** - [Instructor] The async pipe is a powerful tool that helps you work with promises and observables, directly inside your [[Angular]] templates. All Angular developers should know how to use the async pipe. As of this recording, Angular includes the async pipe as a standard built-in tool that comes with the framework. This means you can use it in any template right out of the box, no extra code required. I opened our project here in a [[GitHub]] codespace. I talk about why we use [[Codespaces]] earlier in this course. For now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the Source folder, open up the App folder, Pages, Players, and click on players.component.[[HTML]] to open the file. This is the Angular template for our main players page. The async pipe works in most places where you want to access the data from inside a promise or observable. I do that here in the ngIf directive on line six. We looked at Angular directives in detail earlier in this course. For now, just know that it's a way to attach dynamic behavior to elements inside your Angular templates. I referenced the players$ property that comes from our page controller, and pass it into the async pipe using this vertical bar, which is sometimes called a pipe symbol, hence the name. As a side note, putting the dollar sign at the end of the property name, is a standard convention when working with observables in Angular. It's not required, but I like using it because it makes it clear that the property is an observable, and I'll need to unwrap it to get to the data.
>
> **[1:35](https://www.linkedin.com/learning/angular-essential-training-22884621/angular-s-async-pipe?u=76281980&t=95)** Behind the scenes, the async pipe manages all the setup and change detection internally, so you don't have to. This means less code in your controllers. The pipe also unsubscribes from observables automatically, when you destroy the component. This helps optimize your code by preventing memory leaks and duplicate subscriptions. I'm using an optional syntax called async as, which you can see right here. I use the as keyword to assign the return value from the async pipe to a local variable called players, here in the template. I can then reference this local variable in other places inside this down element in all its children. You don't have to use the async as syntax, but I like to use it because it means I can reference the async pipe only once, and use the local variable everywhere else. Without the local variable, I would need to use the async pipe every time I reference the promise or observable from the controller. With either syntax, the async pipe returns the data and gives you access to all the methods available to the underlying value type. In our case here, we pass the local players variable into the ngFor directive on line seven, which gives us access to each item in the players array. We looked at the ngFor directive in detail earlier in this course. Take a moment, and think about where you might be able to use the async pipe in your project. Any place where you get data from inside a promise or observable, might be a good candidate for the async pipe. Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (7), [[GitHub]] (1), [[Codespaces]] (1), [[HTML]] (1)
> **Exercise Files:** template (3), exercise files (1)
> **Code Identifiers:** ngfor (2), ngif (1)
> **UI Navigation:** go to (1), click on (1), open the (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** players.component.html (1)
> **Cross-References:** earlier in (1)
> **Tools:** github (1)

#### [RxJS and Reactive programming in Angular](https://www.linkedin.com/learning/angular-essential-training-22884621/rxjs-and-reactive-programming-in-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/rxjs-and-reactive-programming-in-angular?u=76281980&t=0)** - [Instructor] Reactive programming is a [[Software Design]] pattern for working with data that may change over time. It's not specific to the [[Angular]] framework, but it is a core concept and every Angular developer should know how it works. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder, open the app folder, services, and click on api.service.ts to open the file. This is the code for our custom API service. We looked at writing services in detail earlier in this course. So for this video, we'll focus on just the things that relate to reactive programming. Our custom service needs to make network requests to get all the player data from our database. We use Angular's built-in HTTP client service to make those requests. We inject the HTTP service on line 12 as a private class member and reference the instance on line 16 to make a get request to get our data. The HTTP service gives us access to all the [[Representational State Transfer (REST)|REST]] methods we need to work with a database, including this get method. Get takes two arguments. The first is a string representing the URL for the data. This can be any valid URL including a local URL like we have here. The second argument is an optional object of request settings. We don't have any custom settings for this request
>
> **[1:33](https://www.linkedin.com/learning/angular-essential-training-22884621/rxjs-and-reactive-programming-in-angular?u=76281980&t=93)** so we don't need it here. While not required, it's also a good idea to set the return type of the get method like this. Get will use a generic object if you don't set the return value. The get method returns an observable, which gives us access to all the tools available from RxJS. One of those tools is the pipe method. The pipe method you see here lets you transform data inside an observable by composing functions together. These functions are called operators. The output of each operator becomes the input of the next. Here, we pipe the response from our get request into a function called delay. We're using delay here to simulate network lag so we can see the loading states in our app, but you can use the pipe method to do all kinds of transformations. On line 20, we call the getAllPlayers method and use the pipe again to transform the data using the RxJS map operator. The map function takes a callback that gives us access to the data inside the observable. We then iterate over each item in the list of players and return the first player that matches the ID. We do something similar on line 27 where we pipe the return value from getAllPlayers into the RxJS map function, this time iterating over each item and filtering the list to include only the players that match by the name property. RxJS has its own filter operator,
>
> **[3:08](https://www.linkedin.com/learning/angular-essential-training-22884621/rxjs-and-reactive-programming-in-angular?u=76281980&t=188)** but we can't use it here because it would operate on the array of players as a whole instead of each individual item in the array. Keep in mind that RxJS comes with hundreds of operators and dozens of coding patterns to help you write reactive code. I could record an entire course on using RxJS and this video only scratches the surface of what you can do. Check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[Software Design]] (1), [[GitHub]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Env Vars:** http (3), url (3), api (1), rest (1)
> **UI Navigation:** open the (2), go to (1), click on (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** getallplayers (2)
> **Cross-References:** earlier in (2)
> **File Paths:** api.service.ts (1)


### 7. Testing and Debugging

[↑ Back to Table of Contents](#table-of-contents)

#### [Overview of unit testing](https://www.linkedin.com/learning/angular-essential-training-22884621/overview-of-unit-testing?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/overview-of-unit-testing?u=76281980&t=0)** - [[Unit Testing]] is a way to make sure the code you write works the way you expect it to. Every [[Angular]] developer should know how to test code. This is especially important when working on a team with many developers writing code at the same time. You want to make sure your code doesn't break someone else's work. As of this recording, angular comes with the Jasmine Test Framework and Karma Test Runner for writing and running unit tests. You can use a different testing framework if you want to, just be sure to follow the official recommendations for whatever you use. We use the NG test command to run the test suite for our project. It's also common to map the NG test command to an N P M test command. I like using the N P M command to make sure I use the locally installed version of NG instead of the globally installed version of my machine. It also comes in handy if I have a standard set of command line options. I want to pass into Angular C L I tool. In our case, the NG test and N P M test commands are the same thing so you can run either from the command line. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll open a new terminal here in our code space type N P M test and hit enter. Angular will build our app and launch the Karma test runner. This alert here in the lower right hand corner tells me I have a successful connection to the Karma instance inside the code space.
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/overview-of-unit-testing?u=76281980&t=94)** I can click this blue button to launch a new browser tab or I can command click this U R L here to do the same thing. Either way, karma opens in a new tab so we can see the output of our tests in real time. You may see an error in the console like this, that says something like, "no binary for Chrome browser on your platform, please set Chrome, underscore, bin environment variable." This happens because of how the code space's virtual machine forwards ports from inside the container to your browser. To fix the error, just close the karma tab if you have one, and reopen it. You know it worked if you see something like this message here that says : "connected on socket X, Y, Z with id, a, B C." To trigger a build and run the tests, just make a change to the code anywhere and save your changes. So something like this, I'll go to the source folder, open the app folder, pipes, join, and click on "join.pipe.spec.ts" to open the file. I'll change line 10 to say, "should join an array using the default separator FOO." Karma watches for changes and will automatically rerun the tests with the new code. Let's take a look at the test report. Your report will look something like this. There's lots of ways to customize how Karma reports test results, and I recommend you take a look at the official documentation to see all the things you can do. For now, just know that green is good and means
>
> **[3:08](https://www.linkedin.com/learning/angular-essential-training-22884621/overview-of-unit-testing?u=76281980&t=188)** all the tests pass. Let's make a test fail so you can see what that looks like. I'll go back to the test spec for our custom join pipe. I'll reset the string on line 10 and change the value on line 11 to be "FOO." Save my changes, take another look at the test results. Red means at least one test failed. There's a lot of data here in these error messages but it's mostly a stack trace. The important info is at the top where it says expected 1, 2, 3 to be FOO. This along with the line above it where it says, "join pipe should join an array using the default separator", are your best clues to figuring out which test failed and how you might fix it. I'll go back to the test spec and reset our tests. Back in the test results, everything's green again. Testing and debugging is a huge part of writing Angular apps. We'll look at some common coding patterns for writing tests later in this course. But I also recommend you check out my other course on testing and debugging angular applications. For a detailed look at all the things you can do with Angular testing tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (7), [[Unit Testing]] (1), [[GitHub]] (1)
> **CLI Commands:** make (5)
> **Cross-References:** go back to (2), earlier in (1), later in (1)
> **Tools:** command line (2), github (1), terminal (1)
> **UI Navigation:** open the (2), go to (1), click on (1)
> **Env Vars:** foo (3)
> **Documentation:** spec (3)
> **Definitions:** is a  (2)

#### [Unit testing without dependency injection](https://www.linkedin.com/learning/angular-essential-training-22884621/unit-testing-without-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/unit-testing-without-dependency-injection?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at what [[Unit Testing]] is and how you would run an existing suite of unit tests in your project. In this video, we'll keep things simple and look at one common pattern for unit testing [[Angular]] pipes. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course, so for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the source folder, open the app folder, pipes, join, and click on join.pipe.spec.ts to open the file. Always use the spec.ts ending for your unit tests. The [[Angular CLI]] tool does this for you when you generate new files using the NG generate command. This file has all the unit tests for our custom join pipe. Pipes are pure stateless functions by default. This means they always return the same output for a given set of inputs. This makes them easier to test when compared to services and components. That said, you can use this pattern for any code that doesn't use Angular's [[Dependency Injection]]. I talk about dependency injection in detail earlier in this course. For now, just know that it's a [[Software Design]] pattern and a core concept in the Angular framework. In Angular, all unit tests start with a describe block like the one you see here on line three. The described function comes from Jasmine, which is the testing framework that comes with Angular. The function lets us group individual tests called specs into a collection, sometimes called the suite.
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/unit-testing-without-dependency-injection?u=76281980&t=94)** The first argument of the described function is a string that identifies the suite in our test output. You can use any string you'd like but it's common to use the name of the thing you want to test. In our case here, we're testing the joint pipe, so we can just use the class name as the description like you see here. The second argument is a callback function that holds all the code related to this suite of tests. Jasmine comes with many built-in functions for writing and running test code, but the two you'll use most often in a test suite are before each and it. We use the before each function on line six. The function takes a callback, which Jasmine runs once before every test in the suite. In our case, the only thing we need to do is create a new instance of the pipe class. Notice that I reassigned an existing variable instead of declaring a new one. It's common to declare reusable variables near the top of the suite like we do here on line four. These are usually the components, services, and other utilities you use across all your tests. Jasmine follows standard [[JavaScript]] scope rules so variables declared in an outer scope are always available in interscope. That's why I use the let keyword instead of const. I like to use immutable data whenever I can but in this case, I want to create a new instance of the pipe each time I run a test. While not required, it's good practice and guarantees a clean copy of the pipe each time. We use the it function like you see on lines 10 and 17
>
> **[3:07](https://www.linkedin.com/learning/angular-essential-training-22884621/unit-testing-without-dependency-injection?u=76281980&t=187)** to declare the actual test logic as well as any test specific setup for the code. The function takes two arguments. The first is a string to label the test. In my work, we usually start the label with the [[Microsoft Word|word]] should, as in should do something or should return something or should not do something, but you can use any label that works well for you and your team. The second argument is a callback. This is where we put all our test logic and setup code. Frameworks like Jasmine use something called assertions to do the testing. This is the part of the test code where you compare the actual result against an expectation. You see the assertions on lines 14 and 21 here in our tests. The expect function comes from Jasmine. We pass in the actual result as the first argument of this function and change something called a matcher to define our expectations. Jasmine comes with many built-in matchers, most of which take an expected result as the first argument. This toBe matcher is very common. It checks the expected result against the actual result using strict JavaScript equality. So what Line 14 really means is we expect the actual result to be strictly equal to the expected result. The test passes if the assertion is true, it fails if the assertion is false. I like to assign the expected and actual results to named variables, but it's not required.
>
> **[4:41](https://www.linkedin.com/learning/angular-essential-training-22884621/unit-testing-without-dependency-injection?u=76281980&t=281)** You could pass the values directly into the Jasmine functions like this and the test would be just as valid. Testing and debugging is a huge part of writing Angular apps. Be sure to check out my other course on testing and debugging Angular applications for a detailed look at all the things you can do with Angular's testing tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (8), [[Unit Testing]] (2), [[Dependency Injection]] (2), [[JavaScript]] (2), [[GitHub]] (1)
> **Definitions:** is a  (5)
> **UI Navigation:** open the (2), go to (1), click on (1)
> **Cross-References:** earlier in (3)
> **File Paths:** join.pipe.spec.ts (1), spec.ts (1)
> **Documentation:** spec (2)
> **Prerequisites:** setup (2)
> **Code Identifiers:** tobe (1)

#### [Unit testing with dependency injection](https://www.linkedin.com/learning/angular-essential-training-22884621/unit-testing-with-dependency-injection?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/unit-testing-with-dependency-injection?u=76281980&t=0)** - [Instructor] Earlier in this course, we looked at how you run an existing suite of unit tests in a project, as well as how to write tests without using [[Dependency Injection]]. In this video, we'll look at one common pattern for [[Unit Testing]] and [[Angular]] service that uses dependency injection. I talk about services and dependency injection in detail earlier in this course. For now, just think of services as a way to separate and reuse code across different parts of your application and think of dependency injection as a way for classes and functions to request dependencies from an external source rather than creating their own instances. Services and dependency injection are closely linked. You can't use one without the other. This makes them harder to test when compared to pipes or constant values. That said, we can use the built-in tools that come with Angular and Jasmine to help write our tests and manage dependencies. Jasmine comes with many built-in functions for writing and running test code. I talked about the most common functions in detail earlier in this course. So for this video, we'll focus on how to use these functions to set up dependency injection to test our Angular service. I opened our project here in a [[GitHub]] codespace. I talk about why we use [[Codespaces]] earlier in this course. So for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the src folder. Open the app folder, services and click on api.service.spec.ts to open the file. This is the test suite for our custom API service. It uses Angular's test bed class
>
> **[1:34](https://www.linkedin.com/learning/angular-essential-training-22884621/unit-testing-with-dependency-injection?u=76281980&t=94)** on line 21 to configure our module and inject dependencies into the test environment. In my work, the most common way to set up the test environment is to use the configure testing module method. While not required, it's good practice to call this method inside the before each function, so you guarantee a clean copy of the environment for each test. This method takes a configuration object as its only argument. The properties are similar to the ones you might see when setting up an Angular module, including declarations, imports, and providers. We looked at these properties in detail early in this course. For now, just know that you use these properties to tell Angular how all your code works together for testing. In our case here, we have no declarations so we could delete the property if we wanted to like this or we could leave it as an empty array like we had before. Both styles are correct and you can use whichever style you like. Our custom API service uses Angular's HTTP client to make network requests. This means we need to use dependency injection to inject the HTTP client service into our test environment. First, I declare a reusable variable on line 9 and set its type as the HTTP client. I like to use immutable data whenever I can but in this case, I want to instantiate a new instance of the service each time a test runs. That's why I use the let keyword here instead of const. I then add the HTTP client class
>
> **[3:07](https://www.linkedin.com/learning/angular-essential-training-22884621/unit-testing-with-dependency-injection?u=76281980&t=187)** to the array of providers on line 24. This registers the service with the test bed module. I also need to import the HTTP client testing module on line 23. This is a special module that mocks HTTP requests when we use the HTTP client service in our tests. Without it, the HTTP client would try to make real network requests and we don't want that. On line 27, I inject the HTTP client class into the testbed module and assign it to the same variable I declared on line 9. I can now use this dependency in my tests. Jasmine uses something called Spies to watch a piece of code to see what it does and to inject dummy data if needed. I use Jasmine's spyOn function here on line 30 to wrap the local HTTP client instance in a spy. I'm using the SPY to watch for calls to the HTTP client's get method and I return the expected player's list instead of the real thing. If we ran this test without the Spy, we get a timeout error because the HTTP client would never get a response back from the HTTP client testing module we imported on line 23. Keep in mind that there are a few ways you can inject dependencies depending on your needs. I like to use this pattern you see here because it's pretty universal. I can use it for almost any dependency. Take a moment and think about your own project. Any test spec where you need to inject dependencies
>
> **[4:42](https://www.linkedin.com/learning/angular-essential-training-22884621/unit-testing-with-dependency-injection?u=76281980&t=282)** may be a good candidate for this pattern. Also, check out my course on testing and debugging Angular applications for a detailed look at all the things you can do with Angular's testing tools.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (9), [[Dependency Injection]] (7), [[Unit Testing]] (1), [[GitHub]] (1), [[Codespaces]] (1)
> **Env Vars:** http (13), api (2), spy (1)
> **Cross-References:** earlier in (4)
> **Prerequisites:** set up (2), configure (2)
> **UI Navigation:** open the (2), go to (1)
> **CLI Commands:** make (2)
> **Documentation:** spec (2)
> **File Paths:** api.service.spec.ts (1)

#### [Static code linting in Angular](https://www.linkedin.com/learning/angular-essential-training-22884621/static-code-linting-in-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/static-code-linting-in-angular?u=76281980&t=0)** - [Instructor] Code linting, sometimes called static code analysis, is a type of automated test that checks your code for errors without compiling or running the code. Think of it like a grammar guide for your project. It can't tell you if the code will run, but it can tell you if you put the curly brackets in the correct place. The biggest benefit of code linting is consistency between developers. We all have a personal style, and linting the code is a great way to make sure everyone on your team writes code in the same way. This makes the code easier to read, easier to search, and more predictable. I opened our project here in a [[GitHub]] code space. I talk about why we use code spaces earlier in this course so for now, just think of them as an easy way to share and write code without installing anything on your local machine. I'll go to the root of our project and click on .eslintrc.[[JSON]]. This is the configuration file for ES lint. ES lint is an open source project released under the MIT license. As of this recording, it has an active community with over 900 contributors on GitHub and almost 27 million weekly downloads on [[npm]]. It's not part of the default install for new [[Angular]] projects, but you can quickly add it by running the NG lint or NPM run lint commands from your terminal. The [[Angular CLI]] tool will update your project and configure sensible defaults. If you already have ES lint installed, the lint command will run the linter against your source code. Let's see what that looks like. I'll open a new terminal window here in the code space, type NPM run lint, and hit enter.
>
> **[1:39](https://www.linkedin.com/learning/angular-essential-training-22884621/static-code-linting-in-angular?u=76281980&t=99)** The line here that says all files pass linting tells me I'm good to go and there's nothing I need to fix. If there was an issue, I'd see it here in the terminal output. Let me show you what that looks like. I'll go to the source folder, app, and click on app.component.ts to open the file. I'll update the selector property on line six to use camel case instead of lowercase with a dash. Save my changes, and run the linter again.
>
> **[2:17](https://www.linkedin.com/learning/angular-essential-training-22884621/static-code-linting-in-angular?u=76281980&t=137)** This time I get an error message that includes the file path, the exact line and starting character, and details about which linting rules triggered the error. I'll need to fix the code to get rid of the error. To do that, I'll revert my change and run the linter again. Boom, this time, no errors. There are lots of configuration options you can use to customize Es lint to suit your project. Be sure to check out the exercise files for links to more info.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[GitHub]] (2), [[JSON]] (1), [[Angular]] (1), [[Angular CLI]] (1)
> **Env Vars:** npm (3), mit (1), cli (1)
> **Tools:** terminal (3), github (2)
> **UI Navigation:** go to (2), click on (2), open the (1)
> **CLI Commands:** npm (3), make (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** eslintrc.json (1), app.component.ts (1)
> **Exercise Files:** source code (1), exercise files (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [A deeper look at Angular](https://www.linkedin.com/learning/angular-essential-training-22884621/a-deeper-look-at-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-essential-training-22884621/a-deeper-look-at-angular?u=76281980&t=0)** - [Derek] We covered a lot of information in this course, and I encourage you to experiment with each technique to see which ones work best for you. While [[Angular]]'s API is stable, the development team is always making improvements. This is why I strongly recommend you take a look at the links in the exercise files, as well as the official documentation for Angular. This is the best way to get details on all the latest changes, additions, and updates. For a deeper look at the Angular framework, I recommend watching my other courses right here in our course library. There's always something new to learn when it comes to Angular. I'm Derek Peruo. Thank you for watching, and we'll see you again soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (4)
> **Env Vars:** api (1)
> **Cross-References:** we covered (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [derek] (1)


## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/angular-essential-training-3266043/codespaces)

## Skills Covered

- Angular

## Path Context

### In [[Explore Web Development with Angular]]
**1 of 6** | [[Learning the Angular CLI]] →

## Appears In

- [[Explore Web Development with Angular]]

## Related Courses

_Courses sharing skills:_

- [[Building Angular and Django Apps]] — Angular
- [[Building Angular and ASP.NET Core Applications]] — Angular
- [[WebSocket Communications with Node and Angular]] — Angular
- [[Angular- Cloud-Powered Apps with Firebase]] — Angular
- [[Angular- Creating and Hosting a Full-Stack Site]] — Angular

---

[↑ Back to top](#)