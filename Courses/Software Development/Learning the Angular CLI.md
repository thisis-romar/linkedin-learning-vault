---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: learning-the-angular-cli
url: "https://www.linkedin.com/learning/learning-the-angular-cli"
duration_minutes: 60
duration: 1h
level: Intermediate
updated: 1/8/2021
learners: 20776
skills:
  - Angular CLI
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQFo3pQinIqAVg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1609964110780?e=2147483647&amp;v=beta&amp;t=QSIGEWFOmNwfT8Fve3CvGSglBgtCFZoEUhviCiNw_n0"
linkedin_topic: Software Development
learning_paths:
  - '[[Explore Web Development with Angular]]'
prev_courses:
  - '[[Angular Essential Training]]'
next_courses:
  - '[[Angular- Testing and Debugging]]'
path_nav: '[{"path":"Explore Web Development with Angular","position":2,"total":6,"prev":"Angular Essential Training","next":"Angular- Testing and Debugging"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/angular-cli
status: not-started
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Learning%20the%20Angular%20CLI.md)

![Learning the Angular CLI](https://media.licdn.com/dms/image/v2/C4E0DAQFo3pQinIqAVg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1609964110780?e=2147483647&amp;v=beta&amp;t=QSIGEWFOmNwfT8Fve3CvGSglBgtCFZoEUhviCiNw_n0)

# Learning the Angular CLI

> The Angular command-line interface (CLI) is the recommended utility for building and maintaining Angular applications. Understanding what it provides—and how to make the most of its features—can set you up for maximum development productivity with Angular. In this course, learn how the Angular CLI is designed to not only help with creating new Angular projects, but also how it takes care of the ap

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli) | 1h | Intermediate | 21K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Maximize productivity with Angular CLI](#maximize-productivity-with-angular-cli)
  - [What you should know](#what-you-should-know)
  - [Using the exercise files](#using-the-exercise-files)
- [**1. Exploring the Angular CLI**](#1-exploring-the-angular-cli) (3 videos)
  - [What is the Angular CLI?](#what-is-the-angular-cli)
  - [Installing the CLI](#installing-the-cli)
  - [Using the CLI](#using-the-cli)
- [**2. Updating Angular Versions**](#2-updating-angular-versions) (3 videos)
  - [Using the Angular Update Guide](#using-the-angular-update-guide)
  - [Using ng update: Part 1](#using-ng-update-part-1)
  - [Using ng update: Part 2](#using-ng-update-part-2)
- [**3. Creating New Angular Projects**](#3-creating-new-angular-projects) (6 videos)
  - [The ng new command](#the-ng-new-command)
  - [Understanding the config files](#understanding-the-config-files)
  - [Adding application assets](#adding-application-assets)
  - [Adding a CSS framework](#adding-a-css-framework)
  - [Challenge: Adding JavaScript libraries](#challenge-adding-javascript-libraries)
  - [Solution: Adding JavaScript libraries](#solution-adding-javascript-libraries)
- [**4. Serving Angular Applications for Development**](#4-serving-angular-applications-for-development) (2 videos)
  - [The ng serve command](#the-ng-serve-command)
  - [Customizing the development server](#customizing-the-development-server)
- [**5. Generating Angular Application Code**](#5-generating-angular-application-code) (9 videos)
  - [Creating new code with schematics](#creating-new-code-with-schematics)
  - [Generating components and modules](#generating-components-and-modules)
  - [Generating directives](#generating-directives)
  - [Generating pipes](#generating-pipes)
  - [Generating route guards](#generating-route-guards)
  - [Adding libraries using schematics](#adding-libraries-using-schematics)
  - [Generating custom library](#generating-custom-library)
  - [Challenge: Generating services](#challenge-generating-services)
  - [Solution: Generating services](#solution-generating-services)
- [**6. Building Angular Applications**](#6-building-angular-applications) (5 videos)
  - [A build pipeline for an Angular app](#a-build-pipeline-for-an-angular-app)
  - [The ng build command](#the-ng-build-command)
  - [Configuring different build options](#configuring-different-build-options)
  - [Setting up build scripts](#setting-up-build-scripts)
  - [Deploying with the Angular CLI](#deploying-with-the-angular-cli)
- [**7. Running Tests**](#7-running-tests) (4 videos)
  - [Built-in test runner](#built-in-test-runner)
  - [The ng test command](#the-ng-test-command)
  - [Test run options](#test-run-options)
  - [Testing workflow](#testing-workflow)
- [**Conclusion**](#conclusion) (1 videos)
  - [Next steps](#next-steps)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Maximize productivity with Angular CLI](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980&t=0)** - [Victor] [[Angular]] has truly been a game changer for developing feature-rich, client-set applications. Developers love it because it enables them to be productive while skaling the web applications. Another reason developers love Angular is because of the amazing tooling available. One of those tools is the Angular command-line interface, The [[CLI]]. Hi, I'm Victor Mejia and welcome to this course on learning the [[Angular CLI]]. In this course, I'll be guiding you through the amazing features that the CLI provides for you and how you can use it to be productive building your Angular applications. We'll cover how to spin up new Angular projects, serve applications for development, generate application code, and how to easily run your tests. Along the way, we'll cover real-world scenarios of how we can use a CLI to efficiently add new features to an Angular application. I'm really excited to cover this content with you. So let's dive in.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (6), [[CLI]] (3), [[Angular CLI]] (1)
> **Env Vars:** cli (4)
> **Speakers:** - [victor] (1)

#### [What you should know](https://www.linkedin.com/learning/learning-the-angular-cli/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/what-you-should-know?u=76281980&t=0)** - [Instructor] This course will assume a basic understanding of [[Angular]]. The [[Angular CLI]] assumes that you have Node, [[npm]], and [[Git]] installed on your system. We will be using Node to install packages, and is needed for the Angular CLI. If you don't know how to use NPM, I recommend you watch our course on NPM, the Node Package Manager. I'll also be using Visual Studio Code as my main editor. You can download it from Code.[VisualStudio.com](https://VisualStudio.com). Lastly, we are going to spend quite some time in the terminal. If you're on a Mac, I recommend downloading and installing iTerm2 Version 3 and using a shell like Zsh and the Oh My Zsh framework, as it provides you with tooling that will make you more productive at your terminal. If you're on a [[Windows]] machine, I highly recommend you check out Cmder as an alternative to the command prompt.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[Angular CLI]] (2), [[Angular]] (1), [[Git]] (1), [[Windows]] (1)
> **CLI Commands:** node (3), npm (3), git (1), make (1)
> **Tools:** terminal (2), zsh (2), visual studio (1), command prompt (1)
> **Env Vars:** npm (3), cli (2)
> **Code Identifiers:** iterm2 (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Versions:** version 3 (1)
> **Prerequisites:** install (1)

#### [Using the exercise files](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=0)** - [Male Narrator] In the exercise files for this course you will find a few folders. The first project that you see here will be used in the second chapter where I will show you how to take an existing application and update it to the latest version of [[Angular]]. The folders: zero three dash zero three and zero three dash zero six contain asset files you'll need as we test things out using the [[Angular CLI]]. In chapter seven, I will show you how to run your test suite using the [[CLI]]. And I have provided a sample application that already contains a number of unit tests. The main project for this file is sample dash app. It isn't a fully developed application, but rather contains different application code that we will generate throughout this course. At any point in the course, you may jump to a specific branch that matches that video. For instance, if you are on a chapter three, video three, you can check out the branch.. (keyboard typing) zero three dash zero three dash begin. If you wish to see the application code at the end of that video, you can check out zero three dash zero three dash end. I also recommend you bookmark this URL. As you can view the pull requests I did and view the changes as we work through this course together.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (1), [[Angular CLI]] (1), [[CLI]] (1)
> **Env Vars:** cli (2), url (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [male (1)
> **Non-Speech:** (keyboard typing) (1)


### 1. Exploring the Angular CLI

[↑ Back to Table of Contents](#table-of-contents)

#### [What is the Angular CLI?](https://www.linkedin.com/learning/learning-the-angular-cli/what-is-the-angular-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/what-is-the-angular-cli?u=76281980&t=0)** - This course is all about the official [[Angular CLI]], which stands for command line interface. Developed by the [[Angular]] team as a command line tool that you install on your system. It makes it easy for you to create new anchor applications, serve them for development and easily generate Angular application code like components, services and directives. The [[CLI]] also configures pipelines for important things like unit and end to end testing and bundling your code for production. The Angular CLI is a recommended way to work on your Angular projects and is actively maintained and new features are released constantly. And lastly, using the CLI will make you a much more productive Angular developer since it provides all of these functionalities through simple CLI commands.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (4), [[CLI]] (3), [[Angular CLI]] (2)
> **Env Vars:** cli (5)
> **Tools:** command line (2)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** make (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** install (1)
> **Speakers:** - this (1)

#### [Installing the CLI](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=0)** - You will first need to have [[Node.js]] installed in your system. We will be using the latest LTS which is currently at 12.19.0 at the time of this recording, and you will need, at least version six of [[npm]], which comes bundled with Node. I recommend you use Volta to install Node.js on your system. It is a great tool you can use to install [[JavaScript]] tools and packages. If you're on a Mac or a Unix system, you can use Quarrel along with the provider command here. If you're on [[Windows]] an installer is also provided. Let's check our Volta installation, set to our terminal and type in Volta-V. And we can see that it's installed. Let's install Node.js now. We'll be using the LTS so we can use Volta install node@12. I already, I have Node.js installed here, so it gives me this confirmation message. We can verify both versions in the command line of Node and NPM. Node dash dash version and NPM dash dash version. Let's install the [[Angular CLI]] now. We can use Volta with Volta install @[[Angular]]/[[CLI]] and we'll be working with version 10 of the Angular CLI. let's say, enter, this we'll go ahead and [[Fetch]] the necessary dependencies from NPM in order to install the tool globally on your machine. This will take a few moments. Once that is done, let's verify that it was installed in our system. with N G dash dash version. Great, we are not ready to get started.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Node.js]] (4), [[npm]] (4), [[Angular CLI]] (2), [[JavaScript]] (1), [[Windows]] (1)
> **CLI Commands:** node (8), npm (4)
> **Env Vars:** npm (4), lts (2), cli (2)
> **Prerequisites:** install (7)
> **File Paths:** node.js (4)
> **Versions:** 12.19.0 (1), version 10 (1)
> **Tools:** terminal (1), command line (1)
> **Definitions:** is a  (1)

#### [Using the CLI](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980&t=0)** - [Instructor] Once you've installed the [[CLI]] you don't have to be in a particular directory in order to use the ng command. It's been added to your global path in order to make it easy for you to use it. Let's take a peek at all the options that are available to use by running simply ng. We see that we have commands to run a unit test, server application, create new applications, linting, generating blueprints and building our applications. We will be covering features of the CLI in detail. If you need help with a particular command say, creating a new application, use the --help flag. Let me clear my terminal and use ng new--help. And that will output all the configuration flags available to you for building your applications. Also, keep in mind that certain commands only work inside an [[Angular]] project. For instance, ng build--help will output an error here. And this is because I am not running this inside an Angular project.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (2), [[Angular]] (2)
> **Env Vars:** cli (2)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 2. Updating Angular Versions

[↑ Back to Table of Contents](#table-of-contents)

#### [Using the Angular Update Guide](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=0)** - [Instructor] During this chapter, we will be working on updating an existing [[Angular]] application to the latest version of Angular. We'll be taking a look at this particular project, which is a project built in another one of my courses where we work with Angular and [[Firebase]]. I highly recommend you check that out. Taking a look at the package.[[JSON]], we can see that version 8 of Angular is being used, while the latest stable version is 10. The easiest way to get started in updating an existing Angular project is to head over to the official Angular Update Guide at update.[angular.io](https://angular.io). Here, you can choose the version of Angular to update from and the version you want to update to. It is not recommended that you update across multiple major versions. For instance, if I'm on version 8, I shouldn't update directly to 10 but rather perform an incremental update first to version 9 and then to version 10. It may be a tedious process but it is a more robust approach. I recommend that you choose the Advanced option in order to view all the information necessary. All or most bullet points won't directly apply. You do have to be familiar with the code base you are updating. If it's a code base you've never seen before, take some time to view the different project files and familiarize yourself. This will help you make informed decisions about each step that you take.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (8), [[Firebase]] (1), [[JSON]] (1)
> **Versions:** version 8 (2), version 9 (1), version 10 (1)
> **Definitions:** is a  (2)
> **File Paths:** package.json (1)
> **CLI Commands:** make (1)
> **URLs:** [angular.io](https://angular.io) (1)
> **Analogies:** for instance (1)
> **Best Practices:** recommended (1)

#### [Using ng update: Part 1](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=0)** - Let's go ahead now and update the existing project by first cloning it and running [[npm]] install. We'll first update from version 8 to version 9. Click on Advanced and click on Show Me How To Update. Let's go through each checkbox now. Let's run a search for renderer. That yields no results, so we can check that off. We aren't lazy loading modules in this application. But if you are, make sure you are using dynamic imports. The @[[Angular]]/platform-webworker doesn't apply here. Nor does a web tracing framework. And we aren't using the es5BrowserSupport flag. Okay, it is now time for the update. For any update in your project, make sure to first create a branch. We'll call our branch angular-9-update. We are using the Node LTS. So we're good on the node version. copy and run the command provided here. (keyboard clattering) You can see that this is updating us from 8.2.4 to 8.2.14. Once that is done, let's continue with that update. Let's check that off. We didn't use the optional create-commits flag. Let's run the update to update us to version 9 of angular. (keyboard clattering) And it looks like it gave us an error because we have uncommitted changes. Let's go ahead and do that now.
>
> **[1:32](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=92)** (keyboard clattering) Let's just give it a Work In Progress commit message here and run our command again.
>
> **[1:50](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=110)** Once that is done, it tells us that our project has been updated to Angular version 9. Let's take a look at some of the changes. Taking a look at our package.[[JSON]], we can see that our dependencies were updated to version 9. In the angular.json file we can also see that ahead of time compilation is enabled by default. Also, [tsconfig.app](https://tsconfig.app).json was updated. Let's continue with our checklist. There's a notice that we have been updated to TypeScript 3.8. We don't use Angular Universal in this project. The next bullet point deals with other libraries. The main library we are using is Angular Fire. So we can go ahead and update that. Go ahead and run npm install @angular/fire in order to get the latest version. The next two bullet points tell us other updates the @angular/[[CLI]] did We aren't using ModuleWithProviders so that doesn't apply here. Nor are we using the ngForm selector. We don't have a typings.d.ts so we are good there. And again, we aren't using Angular Universal. The After the Update section contains more information about what has potentially happened. You should read them carefully to ensure you perform the necessary changes. In particular, look at the entryComponents bullet point along with the necessary change
>
> **[3:23](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=203)** of using TestBed.inject instead of TestBed.get. The [[Representational State Transfer (REST)|rest]] is more information. So we are good there.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (10), [[JSON]] (3), [[npm]] (2), [[CLI]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **Versions:** version 9 (4), version 8 (1), 8.2.4 (1), 8.2.14 (1), 3.8 (1)
> **CLI Commands:** npm (2), make (2), node (2)
> **File Paths:** package.json (1), angular.json (1), tsconfig.app.json (1), typings.d.ts (1)
> **Code Identifiers:** es5browsersupport (1), ngform (1), entrycomponents (1)
> **UI Navigation:** click on (2), checkbox (1)
> **Prerequisites:** install (2)
> **URLs:** [tsconfig.app](https://tsconfig.app) (1)

#### [Using ng update: Part 2](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=0)** - [Instructor] Now that we have incrementally updated from version eight to version nine, we need to update to version 10. Let's change our drop down menu to update from version 9.1 to version 10. Since we have chosen the more detailed version previously, I will go ahead and choose the basic app complexity, as a lot of the same detailed checklist items will show up using the advanced option. Again, this will all depends on the size of this specific app you're updating. My goal here is to show you how to use this [[Angular]] update guide in the most general sense so that you can be successful in updating your own applications. We previously took care of the first two items, including updating to the latest angular file library, and we don't use angular localize. Let's go ahead now and update to angular 10. ng update won't work if you have uncommitted changes. So let's commit those changes now. Go ahead and add those files and commit those files. Angular 9 update successful. And from here, let me create a new branch called angular 10-update. Let's go ahead and copy that update command. ng update, angular core and [[Angular CLI]].
>
> **[1:36](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=96)** Once that is complete, let's take a look at the changes that happened. We first see that the browser list file has been renamed. Figure to look at the package.[[JSON]], our dependencies have now been updated to angular 10 and it's compatible dependencies. Our tsconfig.json file was also updated along with our tslint.json file. Let's go ahead and review our checklist. And it looks like we just covered all of these. It seems that we're done. Let's first try to build our application. ngbuild--configuration=production.
>
> **[2:25](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=145)** We get a couple of warnings, so let's go ahead and allow CommonJS dependencies. Head over to the angular.json file under the builder, target options. Allowed CommonJS dependencies. Let's go ahead and add [[Firebase]]/app and also add firebase/firestore. Let's try to build our application again. Great. Now our application builds fine. Let's go ahead and run our application. ngserve--open. Our application is now here. The firebase CPI keys in this repository are not valid anymore, but try to log in. thegrid.admin@[gmail.com](https://gmail.com). Pass123. We can see that a request was made and we get back an API error, which was expected. What I am looking for is for any run time errors or [[JavaScript]] errors that may be due to our angular update. But it looks like there are none. Congratulations, you have now updated an application to the latest version of angular 10.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (11), [[JSON]] (4), [[Firebase]] (3), [[Angular CLI]] (1), [[JavaScript]] (1)
> **Versions:** angular 10 (4), version 10 (2), version 9 (1), angular 9 (1)
> **File Paths:** package.json (1), tsconfig.json (1), tslint.json (1), angular.json (1)
> **Env Vars:** cli (1), cpi (1), api (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Speakers:** - [instructor] (1)


### 3. Creating New Angular Projects

[↑ Back to Table of Contents](#table-of-contents)

#### [The ng new command](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=0)** - [Instructor] Let's start using the [[CLI]] to scaffold a new sample application. We won't be developing a full application but our goal on this course, is to fully learn all that the CLI has to offer. We can start at the terminal and execute, ng new, and the name of the application. And we will use the dash, dash, dry-run flag, to test things out. It will first ask you a couple of questions. Do we want [[Angular]] [[Routing]]? Let's say yes. Which style sheet format do we want? I'm going to use my arrow key and choose SCSS, and hit enter. How do we run this without the dry-run flag? This would have scaffolded a new project for me and started installing dependencies, generating a package of [[JSON]], config files for TypeScript testing and running and building the application. Along with an application module, bootstrapped and ready to go. Let's now take a look at the different ways we can generate a new angular application. In your terminal, type in ng new, dash, dash, help. And this will output all the different options available. If you would like to explicitly tell the CLI to generate an app with routing support, we can pass in a routing flag. Let's try to generate a new app and use the dry-run flag to see what files it will generate. Ng new, sample-app, dash, dash, routing, dash, dash, dry-run. And notice, that it now doesn't ask me if I want routing because I have already specified that option. I'd like to use SAS for my styles,
>
> **[1:36](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=96)** and that is very easy to scaffold an anchor app with support for SAS. We can simply supply the extension to be used for our CSS files. Ng new, sample-app, dash, dash, style equals SCSS dash, dash, routing. And we'll use the dry-run flag. We can now see that instead of CSS files, it would have generated SAS files. You can write your SAS as you normally would, and the CLI will take care of pre-processing and bundling your style sheets. Sometimes it is also desired to have a specific prefix for components. For instance, if you're working for company ABC, it is desired to have that, as a prefix selector for your components. In that case, you can do ng new, sample-app, dash, dash, style equals SCSS. You want routing and we can specify a prefix with dash, dash, prefix equals ABC. Now every component you generated, will have the prefix ABC as part of the selector. Most of the time, I want an angular application with testing, routing and SAS support, along with the custom prefix, so that we'll use the following to generate my application. We will leave out the dry-run flag. Ng new, sample-app, dash, dash, routing, dash, dash, style equals SCSS. Now we'll go ahead and add my prefix, hit enter. This will go ahead and scaffold the real project
>
> **[3:12](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=192)** and start installing dependencies. Once that is done, let's go ahead and change directories. And this open up this project in visual studio code. Here, we first see the configuration files, and the source folder contains our application code. We see that we have our application component, our application module, and the main.ts file, where this module is imported in bootstrap to run our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Routing]] (9), [[CLI]] (4), [[Angular]] (3), [[JSON]] (1)
> **Env Vars:** sas (5), cli (4), scss (4), abc (3), css (2)
> **Tools:** terminal (2), visual studio (1)
> **File Paths:** main.ts (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Understanding the config files](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=0)** - [Instructor] Let`s take a look at the configuration files that the [[CLI]] generate for us. To start with package dot Jason. Any [[JavaScript]] application should have a package dot Jason to describe projects and its dependencies. We can see that we have the latest version of [[Angular]] along with angular`s dependencies, and development tools that the cli uses to do things like building, serving and testing our application. We can also see that a few [[npm]] scripts were configured for us. In the terminal, any of these scripts can be run using npm run. For instance, to run the build script you can run npm run build. Using npm script is very useful because you can create custom behavior and abstract it all the way with this use of a simple npm script. We`ll be learning how to extend this. Let`s head now to angular dot Jason. The angular dot Jason file is a Jason file describing several aspects of your cli application. The [[Angular CLI]] uses this to know additional information when running specific commands. The project`s object contains [[Metadata]] in configuration about the different applications in this project. Looking at the architect object we can see that there are configurations for building, serving, testing, linting and running your end to end tests. These are referred to as builder targets. Expanding the build builder target, you can customize things like the
>
> **[1:34](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=94)** output directory for the build assets, add additional assets, include global scripts to be added, and also add a global styles to be included in the build. These are the default options for building your application. You can also configure different build configurations, say for building for production versus non-production environments. We`ll be working more in the angular dot Jason file throughout this course. Heading over now to the karma dot conf dot js file. This is a file for karma to test runner used by the cli to run your unit test. Heading over under the e two e folder, protractor dot conf dot js, this is a configuration file for protractor a tool used to run end to end test for angular apps. The ts config dot Jason file includes the compileroptions required to compile the project. Since we`re using typescript to write our application code. This specific configuration is needed for angular applications, so in general you won`t really be modifying this. Information for each compiler option is available at the following documentation page. Heading now to ts config dot app dot Jason, this is a file for compiling the application code. A ts config dot spec dot Jason is used to compile your test code, since you can write your test in typescript also. You can see that this simply extend ts config dot Jason, and adds additional configuration. Let`s look at the ts lint dot jason file. Ts lint is a static analysis tool for typescript
>
> **[3:09](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=189)** that checks for readability, maintainability and functionality errors. This can be configured according to your team`s needs. When running the ng lint command, ts lint will use this file to check for any linting errors. Finally, let`s look at the environments factor. Often in your application, it is desired to provide different environment variables depending on what environment your app is being served on. All you really need to do is import the environment object. Import, environment from, environments forward slash environment. And then we can specify the environment when running your build. ng build dash dash configuration, equals production. In this case, an environment dot prod that ts will be used. To determine the mapping, we can look at the angular that Jason file, under configurations. You can see here that for the production configuration we are instructing the cli to use environment dot prod dot ts.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (8), [[CLI]] (5), [[npm]] (5), [[JavaScript]] (1), [[Angular CLI]] (1)
> **CLI Commands:** npm (5)
> **Definitions:** is a  (5)
> **Documentation:** spec (1)
> **Tools:** terminal (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### [Adding application assets](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=0)** - [Narrator] Let's take a look now at adding application assets in libraries. Head over to the [[Angular]].[[JSON]] file and inspect the assets array. Here we connect files or folders that we want to copy during a build of our application. By default the assets folder and the favicon file are listed here. In the assets folder under source is where you want to place things like images, icons, locale files and any other files that you want to copy over. Let's place an image inside the assets folder. We can go ahead and grab the sample image from the exercise files and simply drag it in. Let's grab the [[LinkedIn]] logo that PNG file and drag it to the assets folder. Let's run a build of our application now. we can do that by running ng build. Once that is done, we can see that there's now this folder here, we can go ahead and inspect the assets folder and the logo is placed there. This is really useful because you only need to use one path for your assets, and that will not change your production build. Let's head over to app.component.[[HTML]] and go ahead and delete the placeholder content. To add an asset to your application, you can reference the assets path. Forward slash assets, forward slash LinkedIn dash logo.png.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=88)** Now this path will work on either the local development build or the production build. You can do some more powerful things however, such as copying a folder of images that you need to copy over, perhaps in an MPM module. For demonstration purposes, let's go ahead and install the weather underground icons module. [[npm]] install, weather dash underground dash icons.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=114)** If we take a peek at the node modules all the way down to weather underground icons, the raw images are in the disc folder in the icons folder. Then we have more options. For this specific use case, we will need the 32 by 32, black png images. Let's start again to the angular.json file. In our assets configuration we can specify the exact assets that we want to extract. We will go ahead and use an object here and specify a glob pattern. And this will be star star forward slash star in order to grab everything. The input will be node modules forward slash weather underground dash icons forward slash dist, forward slash icons. And we wanted the black, png, 32 by 32. And we want to output those images into assets forward slash whether dash icons. The output path will be relative to the newly created dist folder. Let's go ahead and run another build. Ng build dash dash configuration equals production.
>
> **[3:27](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=207)** Once that is done, let's go ahead and minimize this, head over to the dist folder on your assets. And we can see all of our needed icon images here. This also means that you can use the forward slash assets, forward slash weather icons path during development. Now that's pretty powerful. You didn't have to write any code to do this. The [[CLI]] handles it all for you. In the next video we'll take a look at adding global scripts to our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (2), [[JSON]] (2), [[LinkedIn]] (2), [[HTML]] (1), [[npm]] (1)
> **Env Vars:** png (1), mpm (1), npm (1), cli (1)
> **File Paths:** angular.json (2), app.component.html (1)
> **CLI Commands:** node (2), npm (1)
> **Prerequisites:** install (2)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### [Adding a CSS framework](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=0)** - [Instructor] A common need often involves the usage of a CSS framework like Bootstrap. Using the [[CLI]] to add a CSS framework as a global style is actually quite simple. Let's first install Bootstrap. [[npm]] install boostrap and we'll be using version 4.5.2. Once that is installed, head over to [[Angular]].[[JSON]] and add in the path for the bootstrap CSS file in the styles array. This will be a node.modules/bootstrap/dist/css
>
> **[0:36](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=36)** and the file will be bootstrap.min.css. Now, when you run a build of your application the bootstrap CSS file will be added as a global style sheet to your application. You won't see this injected as a link tag in the index.[[HTML]] file, but they will indeed be added to your application. These styles will be loaded when the Angular app first loads. Let's run a build to make sure everything builds correctly, ng build dash dash configuration equals production.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (2), [[CLI]] (1), [[npm]] (1), [[JSON]] (1), [[HTML]] (1)
> **Env Vars:** css (4), cli (1)
> **File Paths:** angular.json (1), bootstrap.min.css (1), index.html (1)
> **CLI Commands:** npm (1), node (1), make (1)
> **Versions:** version 4 (1), 5.2 (1)
> **Prerequisites:** install (2)
> **Speakers:** - [instructor] (1)

#### [Challenge: Adding JavaScript libraries](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-adding-javascript-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-adding-javascript-libraries?u=76281980&t=0)** - [Instructor] In addition to adding application assets or CSS libraries, you can also easily add [[JavaScript]] libraries. This is useful in situations where you have legacy libraries, libraries written in ES5 that have not been ported to ES modules, and libraries that add their namespace to the global scope. In this challenge, I would like you to add this library to your [[Angular]] application. You will see that the usage of this library requires you to globally load the particle.js file. Take a look at the [[Angular CLI]] documentation at this URL to see how you can do that. The library is available on MPM, so can install it and have it available in your node modules.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Angular]] (1), [[Angular CLI]] (1)
> **Env Vars:** css (1), es5 (1), cli (1), url (1), mpm (1)
> **File Paths:** particle.js (1)
> **CLI Commands:** node (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Adding JavaScript libraries](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=0)** - [Instructor] Let's take a look again at the [[Angular]].[[JSON]] file and now at the script array. Any file placed here will be added to your application's global scope, similar to loading the file using a script tag. The particles.JS libraries on [[npm]]. So let's first install it and NPM install particles.JS. Let's inspect the node modules under particles.JS. And let's go ahead and list the files here. And we see that the script that we need is that the root named particles.JS. Let's go ahead and not this path to our scripts array. This will be at /node, modules/particles.JS/particles.JS.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=57)** Let's use this library now to add a particle animation to our application. The particles.JS library uses the configuration file. Go ahead and grab this file from the exercise files for this video and drag it to the assets folder Head over now to the app.component.[[HTML]] file and this go ahead and add a div with an ID of particles
>
> **[1:25](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=85)** and then heading over to the component class. And we will go ahead and add the ngOnInit hook.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=97)** We'll use the configuration code to configure particles.JS we'll call load, this is the ID of the container the path to the configuration file. Let's go ahead and add a call back function And simply log out particles.JS config loaded. You'll see the TypeScript here is giving you an error saying that it cannot find this particular variable in situations like these, where you know that a particular variable will live in the global scope. You can simply declare a type let's go ahead and declare a type here for particles JS, of type any. And finally let's add some CSS, the background color will simply be black. Let me go ahead and fix this typo here. Although in the next chapter, we'll learn more about serving our applications for development. Let's quickly test this out using the ngsurf command which is encapsulated in the NPM start script. Let's go ahead and run NPM start and I am in the wrong directory. Let me go ahead and move up to directories and run NPM start. Let's go ahead and visit our browser now. And we can see all library in action.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (5), [[Angular]] (1), [[JSON]] (1), [[HTML]] (1)
> **File Paths:** particles.js (7), angular.json (1), modules/particles.js/particles.js (1), app.component.html (1)
> **CLI Commands:** npm (5), node (2), find (1)
> **Env Vars:** npm (5), html (1), css (1)
> **Prerequisites:** install (2), configure (1)
> **Code Identifiers:** ngoninit (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)


### 4. Serving Angular Applications for Development

[↑ Back to Table of Contents](#table-of-contents)

#### [The ng serve command](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=0)** - [instructor] The [[Angular CLI]] does a really great job tailoring to developer experience. Aside from scaffolding an entire application for you, the [[CLI]] makes it easy for you to serve your app for development. Let's continue with the sample that we previously generated. To see the available options for serving your application, you can use the dash hash help flag with ng serve. Lots of options here to use. Let's use the default options for now, ng serve. This command will build your app in memory and start a light development server for you at Port 4200. Let's go ahead and click on this link here. The really great feature here is that you can change any of your source files and the CLI will take care of automatically compiling your application and reload your browser. Let's make a change now to our app component. Heading over to App.component.[[HTML]], let's go ahead and add a header. Let's give that a save, head over back to our browser, and our application has automatically reloaded in our browser. This will work for any code, template or style changes. There's another useful feature and that is to automatically open your browser when serving your application. Heading back to our terminal here, let's kill the server here with Ctrl + C and type in ng serve dash hash open. Same thing happened as before, except now your default browser will not be automatically opened.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (2), [[Angular CLI]] (1), [[HTML]] (1)
> **Env Vars:** cli (3)
> **File Paths:** app.component.html (1)
> **CLI Commands:** make (1)
> **Ports:** port 4200 (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** template (1)

#### [Customizing the development server](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=0)** - [Instructor] There are other options available to you as you serve your application. If for some reason you need to use a port other than 4200, we can customize that by using a configuration flag. In our terminal, let's type in ng serve --port=8000 --open.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=19)** We can use this option, if you will like the development server to be at port 8000 and once that is compiled and ready to go, we will see our browser open our local host, port 8000. Now this was just an arbitrary port. Any open port would work here. Sometimes you may need to run your development server from a domain that is not local host. Perhaps your application and API configuration needs to have a specific domain or there are other domain specific actions that are taken. Say for instance, you need to run your app @localhost.def.[company.com](https://company.com) port 4200.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=58)** This is an arbitrary domain but note that it includes [company.com](https://company.com) in the domain, something that may be needed during development. We need to update our host file. I am on a Mac. For instructions on updating your host file on a [[Windows]] machine, please refer to the link on the screen. Let me go ahead and kill the server here. On a Mac, the host file is at the following path, /etc/hosts. With this file open, let's navigate all the way down and we'll enter a new line, 127.0.0.1
>
> **[1:42](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=102)** and then we'll enter [localhost.dev](https://localhost.dev).[company.com](https://company.com) and hit Save. You may need to retry a pseudo here. Let's serve our application again and now, we will need to use the --host flag. ng serve --host=[localhost.dev](https://localhost.dev).[company.com](https://company.com) --open
>
> **[2:12](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=132)** and we see that our app is not being served here. Now with all of this configuration, it may be a little tedious to type it all out. That is where [[npm]] scripts come in handy. In our application, head over to package.[[JSON]]. There are some scripts here, that have been pre-configured for you but let's add a new script. We'll call this serve:host and we will run ng serve --host=[localhost.dev](https://localhost.dev).[company.com](https://company.com) --open.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=167)** Now in our terminal, we can simply run npm run serve:host to kick off that script. Now that is much easier to remember and we have abstracted the complexity in a neat npm script.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (3), [[Windows]] (1), [[JSON]] (1)
> **URLs:** [company.com](https://company.com) (5), [localhost.dev](https://localhost.dev) (3)
> **CLI Commands:** npm (3)
> **Ports:** port 8000 (2), port 4200 (1)
> **Tools:** terminal (2)
> **File Paths:** package.json (1)
> **Env Vars:** api (1)
> **Versions:** 127.0.0 (1)


### 5. Generating Angular Application Code

[↑ Back to Table of Contents](#table-of-contents)

#### [Creating new code with schematics](https://www.linkedin.com/learning/learning-the-angular-cli/creating-new-code-with-schematics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/creating-new-code-with-schematics?u=76281980&t=0)** - [Instructor] Now that we have learned how to create new [[Angular]] applications and serving them for development, we will learn now how to easily create Angular application code using the schematics from the [[Angular CLI]]. What do I mean by schematics? With the [[CLI]], you can generate the different entities used for building your application. In your terminal, type in ng generate --help. When generating a file based on a specific schematic, your command will follow the following template, ng generate, the schematic name, and then the options. You will be able to easily generate components, directives, services, pipes, models and interfaces, route guards, and modules. We'll be learning how to use these schematics to generate application code.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (2), [[Angular CLI]] (1), [[CLI]] (1)
> **Env Vars:** cli (2)
> **Tools:** terminal (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### [Generating components and modules](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=0)** - [Instructor] Let's see how we can generate components. We will do so by using the ng generate components schematic named contact list and we will use the dry run flag which allows us to see how and where these files are placed without actually writing them to disk. It's a great way to first test out and see what files will be generated. There are also some useful shortcuts. For example, instead of the previous command we could have run ng g c which is short for generate component. By default component files are placed in their own folder. If this isn't desired you can change that by using the dash dash flat flag. And we see that instead of creating a folder it created the files directly under the app folder. Let's go ahead and generate the component with this corresponding folder. So we will now omit the dry run flag ng g c contact dash list. We see a new folder that's generated here. We open that up, we have an [[HTML]] file, an empty file for styles a spec file and a component file. It's also important to note that our applications module was modified. The new component was automatically imported and then added to the declarations property of the module configuration.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=95)** Let's go ahead and generate a new module which we'll call shared. ng generate module and let's name that shared. And we see that we have a new folder here with a new shared module here. From the root directory we can instruct the [[CLI]] to generate a new component inside this new shared folder, and also be contained in a shared module. ng generate component, shared, and the name of our component will be avatar. We see that the new component was generated then we inspect the shared module. We see that the avatar component was automatically added to the nearest module. In this case, it is our shared module.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[HTML]] (1), [[CLI]] (1)
> **Env Vars:** html (1), cli (1)
> **Documentation:** spec (1)
> **Definitions:** short for (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Generating directives](https://www.linkedin.com/learning/learning-the-angular-cli/generating-directives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/generating-directives?u=76281980&t=0)** - Generating directives can also be achieved using simple commands. Let's suppose we need to generate a directive to modify input elements to only accept text input and name this directive, non-numeric. At the terminal, we can simply type in ng generate directive and we will be placing this in the shared module as well, inside a directives folder. In this case, let's explicitly tell the [[CLI]] the declaring model. And we can do that by specifying the --module=shared. A directive file was generated along with a spec file. Note also that the app prefix is added to the directive selector and it's also automatically imported to the shared module.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (1)
> **Env Vars:** cli (1)
> **Documentation:** spec (1)
> **Tools:** terminal (1)
> **Speakers:** - generating (1)

#### [Generating pipes](https://www.linkedin.com/learning/learning-the-angular-cli/generating-pipes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/generating-pipes?u=76281980&t=0)** - [Victor] Let's see how we can generate a pipe for correctly displaying phone numbers. At your terminal, let's type in NG generate pipe. And we want to place this in a pipes folder and the name of our pipe will be called phone. A new pipes folder was created and it was also added to the main application module. If we take a look at the generated pipe file, a boilerplate class and test file were created. Pipes in [[Angular]] must implement the pipe transform interface and has one method, the transform method that must be implemented. From here, you can modify in order to implement the correct logic.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (1)
> **Tools:** terminal (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [victor] (1)

#### [Generating route guards](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=0)** - [Instructor] In [[Angular]] applications, we can protect routes using what is called a route guard. A route guard is used to perform certain checks when the route is being requested, and it can decide whether or not to continue with the navigation. In our particular case, we wish to lock certain routes, so that the user can't see data on this data logged in. Let's generate a new guard using the [[CLI]]; ng generate guard, and we will call this route guard auth. It will ask us which interface we would like to implement. For this example, we will choose the CanActivate guard, which moderates a navigation to a route. If true is returned, then it will continue navigation to the requested route. If false is returned, it will stop navigation. Now in the app [[Routing]] module, we will first need to import this guard; import from /auth.guard. And let's go ahead and import our guard here. Then for the routes you want to protect, we can add a CanActivate property, specifying an array of guards. Let's go ahead and add a new route here. The path will be contacts. The component will be the ContactListComponent that we previously generated. And we will add the CanActivate property. It will be an array. And this will consist of the auth guard here. The contacts route will now be protected by our newly generated auth guard.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=93)** Auth guards are very powerful, and the CLI makes it very easy for you to generate them.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (2), [[Angular]] (1), [[Routing]] (1)
> **Env Vars:** cli (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### [Adding libraries using schematics](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=0)** - [Instructor] The [[Angular CLI]] provides us with an easy way to add an [[npm]] package for a published library and can also configure our application and modify files so that it is ready to go. For example, let's say we want to use [[Angular]] Material in our application. The Angular Material team has created a schematic that we can easily use. We can use that by running ng add and then the name of the package. In this case it's @angular/material. It will ask us a couple of questions. This case I will go with the first option here and I will choose yes to set up global Angular Material [[Typography]]. Set up browser animations? Yes. And once the questions are done it will install the necessary packages and also modify any files. Taking a look at the changes, you can see that it not only modify my package.[[JSON]] file but it also modified my application code with necessary changes. Just a quick note, you should first look at a specific library's documentation page to see if it provides angular CLI schematic support.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (4), [[Angular CLI]] (2), [[npm]] (1), [[Typography]] (1), [[JSON]] (1)
> **Prerequisites:** set up (2), configure (1), install (1)
> **Env Vars:** cli (2)
> **File Paths:** package.json (1)
> **CLI Commands:** npm (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### [Generating custom library](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=0)** - [Instructor] In some projects you will come across a need to develop your own custom [[Angular]] library to be shared across teams in your organization. The [[Angular CLI]] makes it really easy for you to do this. We can do that by using ng generate library and the name for our library. In this case, I will call it my components. It goes ahead and generates files and also installs additional, necessary packages. We can go ahead and inspect our Augular.[[JSON]] file and we can see that a new project was added to our configuration. This means that our library has its own builder targets. Also, you can run specific commands for your library. Say, for instance, you want to build your library you can simply run ng build my components. You can also test your custom library. ng test my components. Then we see that the basic tests pass here. Inspecting now the projects folder, we see that we have the configuration files for our custom library. And under source and lib is where you would place your custom components. If you would like to learn more about developing your own custom Angular library I suggest you watch my course Angular Workflows in order to learn more.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (3), [[Angular CLI]] (1), [[JSON]] (1)
> **Env Vars:** cli (1), json (1)
> **File Paths:** augular.json (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### [Challenge: Generating services](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-generating-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-generating-services?u=76281980&t=0)** - [Victor] Data fetching and processing in [[Angular]] should be handled by services and a [[CLI]] allows you to easily create them. For this challenge, I want you to suppose that we are generating an Angular service called API and we would like to place a service in a services folder under the source and then under the app folder here. I recommend you use the help command of the CLI to assist you in this challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (2), [[CLI]] (2)
> **Env Vars:** cli (2), api (1)
> **Speakers:** - [victor] (1)
> **Non-Speech:** (upbeat music) (1)

#### [Solution: Generating services](https://www.linkedin.com/learning/learning-the-angular-cli/solution-generating-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/solution-generating-services?u=76281980&t=0)** - [Instructor] Suppose we are generating an API service. At your terminal, you will use the ng generate service command and then the name of the service, but we would like to place this in a services folder. So we'll go ahead and prepend services here. And just like that, we have a services folder created along with the API service and the spec file. An important thing to note is that by default, services are registered with the root injector, and so [[Angular]] creates a single shared instance of the generator service across our application.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (1)
> **Env Vars:** api (2)
> **Documentation:** spec (1)
> **Tools:** terminal (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Building Angular Applications

[↑ Back to Table of Contents](#table-of-contents)

#### [A build pipeline for an Angular app](https://www.linkedin.com/learning/learning-the-angular-cli/a-build-pipeline-for-an-angular-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/a-build-pipeline-for-an-angular-app?u=76281980&t=0)** - [Instructor] There are many steps involved in building an [[Angular]] application. Since Angular apps are written in TypeScript in ES6 and beyond, the build pipeline is quite involved. We need to transpile TypeScript and ES6 code, bundle our application into one file or split across many, minify files by removing new lines in white space, and also generate source maps. Aside from that, we also need to deal with CSS and other assets. We need to compile from Sass to CSS, inlining CSS, dealing with scoped styles, and copying or inlining images. As you can see, the process is very involved, but the [[CLI]] takes care of all with a simple command: ng build. As you may have guessed, there are also several options for the build command. Let's cover them in detail.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (2), [[CLI]] (1)
> **Env Vars:** css (3), es6 (2), cli (1)
> **Speakers:** - [instructor] (1)

#### [The ng build command](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980&t=0)** - [Instructor] Continuing with our sample app that we have been working on, let's run a simple ng build and see what it generates. We can see that a few files were generated and these are all placed in a dist folder. Here is where all of the build artifacts are placed. Any assets, including CSS and images are also placed here. We also see a few bundles along with the corresponding .map file. These are the source maps. When the script files are loaded, they have a containing source mapping URL that the browser will read, which will load the source file. Since this is transpired with code, the source map helps for debugging purposes since you can debug using the original TypeScript code. Taking a look at our custom library, ng build also took care of building that for us in a format that can be published to mpm and imported into your [[Angular]] application. Lastly, if we take a look at index.[[HTML]], We can see that the build system has automatically injected script text for us referencing those script files.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Angular]] (1), [[HTML]] (1)
> **Env Vars:** css (1), url (1), html (1)
> **File Paths:** index.html (1)
> **Speakers:** - [instructor] (1)

#### [Configuring different build options](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=0)** - [Narrator] It is important to know that by default, the [[JavaScript]] bundles are not optimized. What I mean by that is that they are not minified nor uglified for performance. Also, the bundle names do not contain a hash for cache busting. By default, ng build runs a development build. Let's run a production build. And we can do that by using ng build --configuration=production. The dist directory is discarded and it is running a fresh build. Once that is complete, let's take a look again at the dist folder. In this case, we now see that the source maps were not generated, and the bundle filenames include a hash for cache busting. Also, they have been minified and uglified, thus significantly reducing the file size of these bundles. If you'd like to generate source maps in a production build, you can use a new flag: ng build --configuration=production
>
> **[1:09](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=69)** - -source-map. In order to see what this production configuration entails, We can take a look at the [[Angular]].[[JSON]] file. Under the build, build a target. You can see here that certain features are turned on by default, and also note that you can set budgets. What this means is that if your build assets exceed this budget, the build will fail. It's an important feature to set in order to keep your applications performing well.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[JavaScript]] (1), [[Angular]] (1), [[JSON]] (1)
> **File Paths:** angular.json (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### [Setting up build scripts](https://www.linkedin.com/learning/learning-the-angular-cli/setting-up-build-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/setting-up-build-scripts?u=76281980&t=0)** - [Instructor] Previously, we generated a build with the following configuration, ng build dash dash configuration equals production. You may want a reusable command to be used in [[Continuous Integration (CI)|continuous integration]] and delivery environments, and sometimes, it may be a little long to type in. We can easily set up an [[npm]] script for this. Open up the package.[[JSON]] file and let's update the build npm script. We can add here dash dash configuration equals production and we can change the name of this npm script to build colon prod. Now in your terminal, all you need to do is run npm run build colon prod. We can also go ahead and add an npm script for a development build. Let's call that build colon dev and that will simply run ng build. Setting up npm scripts will make automation much easier.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (6), [[Continuous Integration (CI)|Continuous integration]] (1), [[JSON]] (1)
> **CLI Commands:** npm (6), make (1)
> **File Paths:** package.json (1)
> **Tools:** terminal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### [Deploying with the Angular CLI](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=0)** - [Instructor] The [[Angular CLI]] allows you to deploy to third party services using one simple command: ng deploy. However, this only works for packages that have implemented deployment functionality to specific platforms. You can find a list of such packages at this URL. For our use case, we will be deploying to [[Firebase]]. Head over to the Firebase console at console.firebase.[google.com](https://google.com). You will need to create a Firebase account. Let's go ahead and add a project. I will call my project [[CLI]] Deploy. Click continue, I don't want to use [[Google]] Analytics at this moment. And click on create project. Once that is done, go ahead and click continue. And head it back to your project directory. In your terminal, go ahead and run ng add @[[Angular]]/fire. The command will go ahead and install any necessary dependencies. If this is your first time authenticating Firebase on your machine it will prompt you to authenticate with your Firebase account. And then, provide you with an authentication code that you can input here. Go ahead and select the Firebase project we just selected. In my case, it was CLI-deploy. Once that is done, we can see that it has modified our application in order to support deployment. Take another look at the package.[[JSON]]. Dependencies have been added. And also, heading over to angular.json,
>
> **[1:34](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=94)** we can see there is now a deploy builder target. At your terminal, you can now run ng deploy. The CLI will first build your application. And then, Firebase will deploy your Angular App. Once that is done, it will provide you with a URL, where you can see your application live.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Firebase]] (8), [[CLI]] (3), [[Angular]] (3), [[Google]] (2), [[JSON]] (2)
> **Env Vars:** cli (4), url (2)
> **File Paths:** package.json (1), angular.json (1)
> **Tools:** terminal (2)
> **UI Navigation:** click on (1), select the (1)
> **CLI Commands:** find (1)
> **URLs:** [google.com](https://google.com) (1)
> **Prerequisites:** install (1)


### 7. Running Tests

[↑ Back to Table of Contents](#table-of-contents)

#### [Built-in test runner](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980&t=0)** - [Instructor] We will now be learning about how to run your tests using the [[CLI]]. Go ahead and open the sample application provided in the exercise files called ng-sample-unit-tests. Or you can clone the [[GitHub]] repository at this URL and make sure you run [[npm]] install. When you generate an application using the CLI, a testing pipeline is already set up for you. To run your unit test, a karma configuration file is generated. Karma is used as a test runner, using Jasmine as a testing framework and is set up by default to run your tests in Chrome. Additional setup can be seen in source, test.ts. Essentially, this provides additional setup to initialize the [[Angular]] testing environment. You can write your test entire script and the CLI will take care of transpiring that for you. In the next video we'll be learning more about the ng test command.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[CLI]] (3), [[GitHub]] (1), [[npm]] (1), [[Angular]] (1)
> **Env Vars:** cli (3), url (1), npm (1)
> **Prerequisites:** set up (2), setup (2), install (1)
> **CLI Commands:** make (1), npm (1)
> **File Paths:** test.ts (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **UI Navigation:** open the (1)

#### [The ng test command](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=0)** - [Victor] In order to run your unit test, you can simply run NG test. This will grab all of your spec files, transpile them in memory and run your unit tests in Chrome. Now I see Chrome automatically open up here and I can see each one of my specs. If you'll notice here, the process did not exit. The source and spec files are currently being watched. And so when you change your code, your specs will automatically run. Let me go ahead and change a file, heading over to the core folder and the pipes folder. And let me change a test here on line 22 to a different string. Give that a save, and you'll see that the test suite runs again. In this case, it will fail. Let me change that back to the correct value. Give it a save, and the test suite will run again and now my tests are passing.

> [!info]- Semantic Content
>
> **Documentation:** spec (2)
> **Speakers:** - [victor] (1)

#### [Test run options](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=0)** - [Instructor] Let's take a look now at the different options available to us when running our tests. Currently, our tests are in watch mode. If you prefer not to do that, we can use a flag. Let me go ahead and kill this process here and run ng test --no-watch. In this case, our test will only run once and then exit. In [[Continuous Integration (CI)|continuous integration]] environments, this will be needed. I would also recommend to generate code coverage reports when running your tests. To do so, you can use a new flag that's called --code-coverage. What this will do, is generate code coverage reports using Istanbul. When that is done, you'll see that we have a new coverage folder here. In particular, we're interested in viewing index.[[HTML]]. Go ahead and open that up in your browser. What you see here, is a coverage report indicating the files and lines that have been tested through your spec files. Green means that we have tested the underlying code. It is important to know that this will only generate code coverage reports on lines of code that have run through your unit tests. If you don't run a specific file through your unit tests, it won't be included in the coverage report.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Continuous Integration (CI)|Continuous integration]] (1), [[HTML]] (1)
> **Definitions:** is a  (1), means that (1)
> **File Paths:** index.html (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### [Testing workflow](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=0)** - [Instructor] As we've seen, by default your tests are run on an actual Chrome instance. In automated testing environments where you don't need a visible UI, it may be best to run your tests in a headless browser, Chrome supports headless mode. Which essentially means that you can run Chrome without the UI show. In the browsers array, replace Chrome with ChromeHeadless, let's go ahead and run ng test again. Ng test--no-watch. Our tests ran again but this time using a headless instance of Chrome. One of the benefits is that your test will be executed in the same environment as users of your site. It will also give you performance benefits as you can run your tests in real browser context without the memory overhead of running a full instance of Chrome. When running your test, you see a message here, Executed 17 of 17. But we don't know exactly which tests have run. Let's go ahead and configure our terminal output. We will first need to install a karma plugin, called karma-spec-reporter. Once installed, open up again the karma.conf.js file. In the plugins array, go ahead and require this new plugin, require karma-spec-reporter. In the reports array, inside the coverageIstanbulReporter. Go ahead and add a new token, text-summary. This will output a code coverage summary on your terminal,
>
> **[1:38](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=98)** and finally, in the reporters array replace progress with spec. Let's go ahead and run our test again. NG tests --no-watch --code coverage. We ran our test again except now, we see each individual spec that ran along with his pass or fail status. And at the end we get a code coverage summary. As I mentioned in previous videos, it is a great idea to abstract long commands into a simple to use [[npm]] scripts. Let's go ahead and update the test script. Head over to package.jason and lets update this script. And this will now use --no-watch along with the code coverage flag. And in our terminal all we need to do is run NPM test. The sample application also includes an example of an end-to-end test. The [[CLI]] currently sets a protractor for you to write and run your end to end test. To run your end to end tests, you can simply run ng e2e and we can see that our test runs and passes.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[npm]] (2), [[CLI]] (1)
> **Documentation:** spec (4)
> **Env Vars:** npm (2), cli (1)
> **Tools:** terminal (3)
> **CLI Commands:** npm (2)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** configure (1), install (1)
> **File Paths:** karma.conf.js (1)


### Conclusion

[↑ Back to Table of Contents](#table-of-contents)

#### [Next steps](https://www.linkedin.com/learning/learning-the-angular-cli/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/next-steps?u=76281980&t=0)** - [Instructor] Thanks for joining me on this course and I hope you enjoyed learning about the [[Angular CLI]]. The [[CLI]] is truly a great tool that will allow you to be productive building [[Angular]] applications. I recommend subscribing to notifications on this [[GitHub]] repository as it will allow you to keep up to date with new features and be notified of new releases. And of course, continue to browse our library for anything angular related. If you wish to know what I'm currently working on, follow me on github at [github.com/VictorMejia](https://github.com/VictorMejia). Thanks for watching.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[GitHub]] (3), [[Angular]] (2), [[Angular CLI]] (1), [[CLI]] (1)
> **Tools:** github (3)
> **Env Vars:** cli (2)
> **URLs:** [github.com](https://github.com) (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Victor Mejia]]

## Resources

- Exercise files available

## Skills Covered

- Angular CLI

## Path Context

### In [[Explore Web Development with Angular]]
← [[Angular Essential Training]] | **2 of 6** | [[Angular- Testing and Debugging]] →

## Appears In

- [[Explore Web Development with Angular]]

---

[↑ Back to top](#)