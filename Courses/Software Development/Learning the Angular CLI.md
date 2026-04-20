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
  - Explore Web Development with Angular
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/angular-cli
status: not-started
created: 2026-04-19
---

![Learning the Angular CLI](https://media.licdn.com/dms/image/v2/C4E0DAQFo3pQinIqAVg/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1609964110780?e=2147483647&amp;v=beta&amp;t=QSIGEWFOmNwfT8Fve3CvGSglBgtCFZoEUhviCiNw_n0)

# Learning the Angular CLI

> The Angular command-line interface (CLI) is the recommended utility for building and maintaining Angular applications. Understanding what it provides—and how to make the most of its features—can set you up for maximum development productivity with Angular. In this course, learn how the Angular CLI is designed to not only help with creating new Angular projects, but also how it takes care of the ap

> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli) | 1h | Intermediate | 21K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Victor Mejia]]

## Resources

- Exercise files available

## Skills Covered

- Angular CLI

## Table of Contents

### Introduction

#### Maximize productivity with Angular CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980&t=0)** - [Victor] Angular has truly been a game changer for developing feature-rich, client-set applications.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980&t=4)** Developers love it because it enables them to be productive while skaling the web applications.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980&t=9)** Another reason developers love Angular is because of the amazing tooling available.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980&t=13)** One of those tools is the Angular command-line interface, The CLI.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980&t=17)** Hi, I'm Victor Mejia and welcome to this course on learning the Angular CLI.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980&t=22)** In this course, I'll be guiding you through the amazing features that the CLI provides for you and how you can use it to be productive building your Angular applications.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980&t=30)** We'll cover how to spin up new Angular projects, serve applications for development, generate application code, and how to easily run your tests.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980&t=37)** Along the way, we'll cover real-world scenarios of how we can use a CLI to efficiently add new features to an Angular application.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980&t=44)** I'm really excited to cover this content with you.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-angular-cli/maximize-productivity-with-angular-cli?u=76281980&t=46)** So let's dive in.

> [!info]- Semantic Content
>
> **Env Vars:** cli (4)
> **Code Keywords:** interface (1), let (1)
> **Speakers:** - [victor] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/what-you-should-know?u=76281980&t=0)** - [Instructor] This course will assume a basic understanding of Angular.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-angular-cli/what-you-should-know?u=76281980&t=3)** The Angular CLI assumes that you have Node, NPM, and Git installed on your system.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-angular-cli/what-you-should-know?u=76281980&t=8)** We will be using Node to install packages, and is needed for the Angular CLI.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-angular-cli/what-you-should-know?u=76281980&t=13)** If you don't know how to use NPM, I recommend you watch our course on NPM, the Node Package Manager.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-angular-cli/what-you-should-know?u=76281980&t=19)** I'll also be using Visual Studio Code as my main editor.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-angular-cli/what-you-should-know?u=76281980&t=22)** You can download it from Code.[VisualStudio.com](https://VisualStudio.com).
>
> **[0:25](https://www.linkedin.com/learning/learning-the-angular-cli/what-you-should-know?u=76281980&t=25)** Lastly, we are going to spend quite some time in the terminal.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-angular-cli/what-you-should-know?u=76281980&t=28)** If you're on a Mac, I recommend downloading and installing iTerm2 Version 3 and using a shell like Zsh and the Oh My Zsh framework, as it provides you with tooling that will make you more productive at your terminal.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-angular-cli/what-you-should-know?u=76281980&t=41)** If you're on a Windows machine, I highly recommend you check out Cmder as an alternative to the command prompt.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), npm (3), git (1), make (1)
> **Tools:** terminal (2), zsh (2), visual studio (1), command prompt (1)
> **Env Vars:** npm (3), cli (2)
> **Code Identifiers:** iterm2 (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Versions:** version 3 (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=0)** - [Male Narrator] In the exercise files for this course you will find a few folders.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=4)** The first project that you see here will be used in the second chapter where I will show you how to take an existing application and update it to the latest version of angular.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=13)** The folders: zero three dash zero three and zero three dash zero six contain asset files you'll need as we test things out using the angular CLI.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=23)** In chapter seven, I will show you how to run your test suite using the CLI.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=28)** And I have provided a sample application that already contains a number of unit tests.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=33)** The main project for this file is sample dash app.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=36)** It isn't a fully developed application, but rather contains different application code that we will generate throughout this course.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=42)** At any point in the course, you may jump to a specific branch that matches that video.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=47)** For instance, if you are on a chapter three, video three, you can check out the branch..
>
> **[0:52](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=52)** (keyboard typing) zero three dash zero three dash begin.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=58)** If you wish to see the application code at the end of that video, you can check out zero three dash zero three dash end.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=66)** I also recommend you bookmark this URL.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-exercise-files?u=76281980&t=69)** As you can view the pull requests I did and view the changes as we work through this course together.

> [!info]- Semantic Content
>
> **Env Vars:** cli (2), url (1)
> **CLI Commands:** find (1)
> **Exercise Files:** exercise files (1)
> **Analogies:** for instance (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [male (1)
> **Non-Speech:** (keyboard typing) (1)


### 1. Exploring the Angular CLI

#### What is the Angular CLI?
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/what-is-the-angular-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/what-is-the-angular-cli?u=76281980&t=0)** - This course is all about the official Angular CLI, which stands for command line interface.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-angular-cli/what-is-the-angular-cli?u=76281980&t=5)** Developed by the Angular team as a command line tool that you install on your system.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-angular-cli/what-is-the-angular-cli?u=76281980&t=9)** It makes it easy for you to create new anchor applications, serve them for development and easily generate Angular application code like components, services and directives.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-angular-cli/what-is-the-angular-cli?u=76281980&t=19)** The CLI also configures pipelines for important things like unit and end to end testing and bundling your code for production.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-angular-cli/what-is-the-angular-cli?u=76281980&t=25)** The Angular CLI is a recommended way to work on your Angular projects and is actively maintained and new features are released constantly.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-angular-cli/what-is-the-angular-cli?u=76281980&t=33)** And lastly, using the CLI will make you a much more productive Angular developer since it provides all of these functionalities through simple CLI commands.

> [!info]- Semantic Content
>
> **Env Vars:** cli (5)
> **Tools:** command line (2)
> **Definitions:** stands for (1), is a  (1)
> **CLI Commands:** make (1)
> **Code Keywords:** interface (1)
> **Best Practices:** recommended (1)
> **Prerequisites:** install (1)
> **Speakers:** - this (1)

#### Installing the CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=0)** - You will first need to have Node.js installed in your system.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=3)** We will be using the latest LTS which is currently at 12.19.0 at the time of this recording, and you will need, at least version six of NPM, which comes bundled with Node.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=13)** I recommend you use Volta to install Node.js on your system.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=16)** It is a great tool you can use to install JavaScript tools and packages.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=20)** If you're on a Mac or a Unix system, you can use Quarrel along with the provider command here.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=25)** If you're on Windows an installer is also provided.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=28)** Let's check our Volta installation, set to our terminal and type in Volta-V.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=34)** And we can see that it's installed.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=35)** Let's install Node.js now.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=37)** We'll be using the LTS so we can use Volta install node@12.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=44)** I already, I have Node.js installed here, so it gives me this confirmation message.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=48)** We can verify both versions in the command line of Node and NPM.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=52)** Node dash dash version and NPM dash dash version.
>
> **[0:59](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=59)** Let's install the Angular CLI now.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=61)** We can use Volta with Volta install @angular/cli and we'll be working with version 10 of the Angular CLI.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=71)** let's say, enter, this we'll go ahead and fetch the necessary dependencies from NPM in order to install the tool globally on your machine.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=78)** This will take a few moments.
>
> **[1:20](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=80)** Once that is done, let's verify that it was installed in our system.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=84)** with N G dash dash version.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-angular-cli/installing-the-cli?u=76281980&t=87)** Great, we are not ready to get started.

> [!info]- Semantic Content
>
> **CLI Commands:** node (8), npm (4)
> **Env Vars:** npm (4), lts (2), cli (2)
> **Prerequisites:** install (7)
> **Code Keywords:** let (5)
> **File Paths:** node.js (4)
> **Versions:** 12.19.0 (1), version 10 (1)
> **Tools:** terminal (1), command line (1)
> **Definitions:** is a  (1)

#### Using the CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980&t=0)** - [Instructor] Once you've installed the CLI you don't have to be in a particular directory in order to use the ng command.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980&t=6)** It's been added to your global path in order to make it easy for you to use it.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980&t=10)** Let's take a peek at all the options that are available to use by running simply ng.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980&t=16)** We see that we have commands to run a unit test, server application, create new applications, linting, generating blueprints and building our applications.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980&t=27)** We will be covering features of the CLI in detail.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980&t=29)** If you need help with a particular command say, creating a new application, use the --help flag.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980&t=36)** Let me clear my terminal and use ng new--help.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980&t=40)** And that will output all the configuration flags available to you for building your applications.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980&t=47)** Also, keep in mind that certain commands only work inside an Angular project.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980&t=50)** For instance, ng build--help will output an error here.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-cli?u=76281980&t=56)** And this is because I am not running this inside an Angular project.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** cli (2)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Analogies:** for instance (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)


### 2. Updating Angular Versions

#### Using the Angular Update Guide
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=0)** - [Instructor] During this chapter, we will be working on updating an existing Angular application to the latest version of Angular.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=6)** We'll be taking a look at this particular project, which is a project built in another one of my courses where we work with Angular and Firebase.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=13)** I highly recommend you check that out.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=15)** Taking a look at the package.json, we can see that version 8 of Angular is being used, while the latest stable version is 10.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=25)** The easiest way to get started in updating an existing Angular project is to head over to the official Angular Update Guide at update.[angular.io](https://angular.io).
>
> **[0:34](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=34)** Here, you can choose the version of Angular to update from and the version you want to update to.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=40)** It is not recommended that you update across multiple major versions.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=44)** For instance, if I'm on version 8, I shouldn't update directly to 10 but rather perform an incremental update first to version 9 and then to version 10.
>
> **[0:55](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=55)** It may be a tedious process but it is a more robust approach.
>
> **[0:59](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=59)** I recommend that you choose the Advanced option in order to view all the information necessary.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=65)** All or most bullet points won't directly apply.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=67)** You do have to be familiar with the code base you are updating.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=70)** If it's a code base you've never seen before, take some time to view the different project files and familiarize yourself.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-angular-cli/using-the-angular-update-guide?u=76281980&t=77)** This will help you make informed decisions about each step that you take.

> [!info]- Semantic Content
>
> **Versions:** version 8 (2), version 9 (1), version 10 (1)
> **Definitions:** is a  (2)
> **File Paths:** package.json (1)
> **CLI Commands:** make (1)
> **URLs:** [angular.io](https://angular.io) (1)
> **Analogies:** for instance (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Using ng update: Part 1
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=0)** - Let's go ahead now and update the existing project by first cloning it and running npm install.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=5)** We'll first update from version 8 to version 9.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=8)** Click on Advanced and click on Show Me How To Update.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=11)** Let's go through each checkbox now.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=13)** Let's run a search for renderer.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=16)** That yields no results, so we can check that off.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=19)** We aren't lazy loading modules in this application.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=22)** But if you are, make sure you are using dynamic imports.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=26)** The @angular/platform-webworker doesn't apply here.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=30)** Nor does a web tracing framework.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=32)** And we aren't using the es5BrowserSupport flag.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=36)** Okay, it is now time for the update.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=39)** For any update in your project, make sure to first create a branch.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=42)** We'll call our branch angular-9-update.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=49)** We are using the Node LTS.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=51)** So we're good on the node version.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=53)** copy and run the command provided here.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=56)** (keyboard clattering) You can see that this is updating us from 8.2.4 to 8.2.14.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=68)** Once that is done, let's continue with that update.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=71)** Let's check that off.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=73)** We didn't use the optional create-commits flag.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=77)** Let's run the update to update us to version 9 of angular.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=82)** (keyboard clattering) And it looks like it gave us an error because we have uncommitted changes.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=91)** Let's go ahead and do that now.
>
> **[1:32](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=92)** (keyboard clattering) Let's just give it a Work In Progress commit message here and run our command again.
>
> **[1:50](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=110)** Once that is done, it tells us that our project has been updated to Angular version 9.
>
> **[1:55](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=115)** Let's take a look at some of the changes.
>
> **[1:58](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=118)** Taking a look at our package.json, we can see that our dependencies were updated to version 9.
>
> **[2:08](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=128)** In the angular.json file we can also see that ahead of time compilation is enabled by default.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=136)** Also, [tsconfig.app](https://tsconfig.app).json was updated.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=140)** Let's continue with our checklist.
>
> **[2:22](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=142)** There's a notice that we have been updated to TypeScript 3.8.
>
> **[2:27](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=147)** We don't use Angular Universal in this project.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=150)** The next bullet point deals with other libraries.
>
> **[2:33](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=153)** The main library we are using is Angular Fire.
>
> **[2:36](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=156)** So we can go ahead and update that.
>
> **[2:38](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=158)** Go ahead and run npm install @angular/fire in order to get the latest version.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=165)** The next two bullet points tell us other updates the @angular/cli did We aren't using ModuleWithProviders so that doesn't apply here.
>
> **[2:57](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=177)** Nor are we using the ngForm selector.
>
> **[3:01](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=181)** We don't have a typings.d.ts so we are good there.
>
> **[3:05](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=185)** And again, we aren't using Angular Universal.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=188)** The After the Update section contains more information about what has potentially happened.
>
> **[3:13](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=193)** You should read them carefully to ensure you perform the necessary changes.
>
> **[3:17](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=197)** In particular, look at the entryComponents bullet point along with the necessary change of using TestBed.inject instead of TestBed.get.
>
> **[3:30](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=210)** The rest is more information.
>
> **[3:31](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-1?u=76281980&t=211)** So we are good there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), continue (2), default. (1)
> **Versions:** version 9 (4), version 8 (1), 8.2.4 (1), 8.2.14 (1), 3.8 (1)
> **CLI Commands:** npm (2), make (2), node (2)
> **File Paths:** package.json (1), angular.json (1), tsconfig.app.json (1), typings.d.ts (1)
> **Code Identifiers:** es5browsersupport (1), ngform (1), entrycomponents (1)
> **UI Navigation:** click on (2), checkbox (1)
> **Prerequisites:** install (2)
> **URLs:** [tsconfig.app](https://tsconfig.app) (1)

#### Using ng update: Part 2
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=0)** - [Instructor] Now that we have incrementally updated from version eight to version nine, we need to update to version 10.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=6)** Let's change our drop down menu to update from version 9.1 to version 10.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=13)** Since we have chosen the more detailed version previously, I will go ahead and choose the basic app complexity, as a lot of the same detailed checklist items will show up using the advanced option.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=24)** Again, this will all depends on the size of this specific app you're updating.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=28)** My goal here is to show you how to use this angular update guide in the most general sense so that you can be successful in updating your own applications.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=38)** We previously took care of the first two items, including updating to the latest angular file library, and we don't use angular localize.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=48)** Let's go ahead now and update to angular 10.
>
> **[0:51](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=51)** ng update won't work if you have uncommitted changes.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=54)** So let's commit those changes now.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=61)** Go ahead and add those files and commit those files.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=66)** Angular 9 update successful.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=71)** And from here, let me create a new branch called angular 10-update.
>
> **[1:20](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=80)** Let's go ahead and copy that update command.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=84)** ng update, angular core and angular CLI.
>
> **[1:36](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=96)** Once that is complete, let's take a look at the changes that happened.
>
> **[1:42](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=102)** We first see that the browser list file has been renamed.
>
> **[1:46](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=106)** Figure to look at the package.json, our dependencies have now been updated to angular 10 and it's compatible dependencies.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=116)** Our tsconfig.json file was also updated along with our tslint.json file.
>
> **[2:03](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=123)** Let's go ahead and review our checklist.
>
> **[2:07](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=127)** And it looks like we just covered all of these.
>
> **[2:12](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=132)** It seems that we're done.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=133)** Let's first try to build our application.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=137)** ngbuild--configuration=production.
>
> **[2:25](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=145)** We get a couple of warnings, so let's go ahead and allow CommonJS dependencies.
>
> **[2:30](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=150)** Head over to the angular.json file under the builder, target options.
>
> **[2:41](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=161)** Allowed CommonJS dependencies.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=169)** Let's go ahead and add firebase/app and also add firebase/firestore.
>
> **[3:00](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=180)** Let's try to build our application again.
>
> **[3:07](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=187)** Great.
>
> **[3:08](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=188)** Now our application builds fine.
>
> **[3:10](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=190)** Let's go ahead and run our application.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=192)** ngserve--open.
>
> **[3:17](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=197)** Our application is now here.
>
> **[3:19](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=199)** The firebase CPI keys in this repository are not valid anymore, but try to log in.
>
> **[3:25](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=205)** thegrid.admin@[gmail.com](https://gmail.com).
>
> **[3:28](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=208)** Pass123.
>
> **[3:31](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=211)** We can see that a request was made and we get back an API error, which was expected.
>
> **[3:36](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=216)** What I am looking for is for any run time errors or JavaScript errors that may be due to our angular update.
>
> **[3:44](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=224)** But it looks like there are none.
>
> **[3:46](https://www.linkedin.com/learning/learning-the-angular-cli/using-ng-update-part-2?u=76281980&t=226)** Congratulations, you have now updated an application to the latest version of angular 10.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12)
> **Versions:** angular 10 (4), version 10 (2), version 9 (1), angular 9 (1)
> **File Paths:** package.json (1), tsconfig.json (1), tslint.json (1), angular.json (1)
> **Env Vars:** cli (1), cpi (1), api (1)
> **URLs:** [gmail.com](https://gmail.com) (1)
> **Speakers:** - [instructor] (1)


### 3. Creating New Angular Projects

#### The ng new command
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=0)** - [Instructor] Let's start using the CLI to scaffold a new sample application.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=4)** We won't be developing a full application but our goal on this course, is to fully learn all that the CLI has to offer.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=11)** We can start at the terminal and execute, ng new, and the name of the application.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=17)** And we will use the dash, dash, dry-run flag, to test things out.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=23)** It will first ask you a couple of questions.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=26)** Do we want angular routing?
>
> **[0:27](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=27)** Let's say yes.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=30)** Which style sheet format do we want?
>
> **[0:32](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=32)** I'm going to use my arrow key and choose SCSS, and hit enter.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=37)** How do we run this without the dry-run flag?
>
> **[0:40](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=40)** This would have scaffolded a new project for me and started installing dependencies, generating a package of JSON, config files for TypeScript testing and running and building the application.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=50)** Along with an application module, bootstrapped and ready to go.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=54)** Let's now take a look at the different ways we can generate a new angular application.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=58)** In your terminal, type in ng new, dash, dash, help.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=63)** And this will output all the different options available.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=66)** If you would like to explicitly tell the CLI to generate an app with routing support, we can pass in a routing flag.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=72)** Let's try to generate a new app and use the dry-run flag to see what files it will generate.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=77)** Ng new, sample-app, dash, dash, routing, dash, dash, dry-run.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=85)** And notice, that it now doesn't ask me if I want routing because I have already specified that option.
>
> **[1:34](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=94)** I'd like to use SAS for my styles, and that is very easy to scaffold an anchor app with support for SAS.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=100)** We can simply supply the extension to be used for our CSS files.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=105)** Ng new, sample-app, dash, dash, style equals SCSS dash, dash, routing.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=114)** And we'll use the dry-run flag.
>
> **[1:57](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=117)** We can now see that instead of CSS files, it would have generated SAS files.
>
> **[2:02](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=122)** You can write your SAS as you normally would, and the CLI will take care of pre-processing and bundling your style sheets.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=129)** Sometimes it is also desired to have a specific prefix for components.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=133)** For instance, if you're working for company ABC, it is desired to have that, as a prefix selector for your components.
>
> **[2:20](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=140)** In that case, you can do ng new, sample-app, dash, dash, style equals SCSS.
>
> **[2:29](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=149)** You want routing and we can specify a prefix with dash, dash, prefix equals ABC.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=157)** Now every component you generated, will have the prefix ABC as part of the selector.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=165)** Most of the time, I want an angular application with testing, routing and SAS support, along with the custom prefix, so that we'll use the following to generate my application.
>
> **[2:55](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=175)** We will leave out the dry-run flag.
>
> **[2:57](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=177)** Ng new, sample-app, dash, dash, routing, dash, dash, style equals SCSS.
>
> **[3:05](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=185)** Now we'll go ahead and add my prefix, hit enter.
>
> **[3:09](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=189)** This will go ahead and scaffold the real project and start installing dependencies.
>
> **[3:14](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=194)** Once that is done, let's go ahead and change directories.
>
> **[3:20](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=200)** And this open up this project in visual studio code.
>
> **[3:27](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=207)** Here, we first see the configuration files, and the source folder contains our application code.
>
> **[3:34](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-new-command?u=76281980&t=214)** We see that we have our application component, our application module, and the main.ts file, where this module is imported in bootstrap to run our application.

> [!info]- Semantic Content
>
> **Env Vars:** sas (5), cli (4), scss (4), abc (3), css (2)
> **Code Keywords:** new, (6), let (5), module (3), pass (1), case, (1)
> **Tools:** terminal (2), visual studio (1)
> **File Paths:** main.ts (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Understanding the config files
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=0)** - [Instructor] Let`s take a look at the configuration files that the cli generate for us.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=5)** To start with package dot Jason.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=7)** Any javascript application should have a package dot Jason to describe projects and its dependencies.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=12)** We can see that we have the latest version of angular along with angular`s dependencies, and development tools that the cli uses to do things like building, serving and testing our application.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=29)** We can also see that a few npm scripts were configured for us.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=32)** In the terminal, any of these scripts can be run using npm run.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=36)** For instance, to run the build script you can run npm run build.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=41)** Using npm script is very useful because you can create custom behavior and abstract it all the way with this use of a simple npm script.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=49)** We`ll be learning how to extend this.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=52)** Let`s head now to angular dot Jason.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=54)** The angular dot Jason file is a Jason file describing several aspects of your cli application.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=60)** The angular cli uses this to know additional information when running specific commands.
>
> **[1:05](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=65)** The project`s object contains metadata in configuration about the different applications in this project.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=71)** Looking at the architect object we can see that there are configurations for building, serving, testing, linting and running your end to end tests.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=86)** These are referred to as builder targets.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=89)** Expanding the build builder target, you can customize things like the output directory for the build assets, add additional assets, include global scripts to be added, and also add a global styles to be included in the build.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=105)** These are the default options for building your application.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=108)** You can also configure different build configurations, say for building for production versus non-production environments.
>
> **[1:55](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=115)** We`ll be working more in the angular dot Jason file throughout this course.
>
> **[2:00](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=120)** Heading over now to the karma dot conf dot js file.
>
> **[2:03](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=123)** This is a file for karma to test runner used by the cli to run your unit test.
>
> **[2:10](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=130)** Heading over under the e two e folder, protractor dot conf dot js, this is a configuration file for protractor a tool used to run end to end test for angular apps.
>
> **[2:23](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=143)** The ts config dot Jason file includes the compileroptions required to compile the project.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=148)** Since we`re using typescript to write our application code.
>
> **[2:31](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=151)** This specific configuration is needed for angular applications, so in general you won`t really be modifying this.
>
> **[2:37](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=157)** Information for each compiler option is available at the following documentation page.
>
> **[2:43](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=163)** Heading now to ts config dot app dot Jason, this is a file for compiling the application code.
>
> **[2:50](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=170)** A ts config dot spec dot Jason is used to compile your test code, since you can write your test in typescript also.
>
> **[2:57](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=177)** You can see that this simply extend ts config dot Jason, and adds additional configuration.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=183)** Let`s look at the ts lint dot jason file.
>
> **[3:06](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=186)** Ts lint is a static analysis tool for typescript that checks for readability, maintainability and functionality errors.
>
> **[3:13](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=193)** This can be configured according to your team`s needs.
>
> **[3:16](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=196)** When running the ng lint command, ts lint will use this file to check for any linting errors.
>
> **[3:21](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=201)** Finally, let`s look at the environments factor.
>
> **[3:24](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=204)** Often in your application, it is desired to provide different environment variables depending on what environment your app is being served on.
>
> **[3:32](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=212)** All you really need to do is import the environment object.
>
> **[3:36](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=216)** Import, environment from, environments forward slash environment.
>
> **[3:46](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=226)** And then we can specify the environment when running your build.
>
> **[3:50](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=230)** ng build dash dash configuration, equals production.
>
> **[3:57](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=237)** In this case, an environment dot prod that ts will be used.
>
> **[4:01](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=241)** To determine the mapping, we can look at the angular that Jason file, under configurations.
>
> **[4:08](https://www.linkedin.com/learning/learning-the-angular-cli/understanding-the-config-files?u=76281980&t=248)** You can see here that for the production configuration we are instructing the cli to use environment dot prod dot ts.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (2), abstract (1), static (1), finally, (1)
> **CLI Commands:** npm (5)
> **Definitions:** is a  (5)
> **Documentation:** spec (1)
> **Tools:** terminal (1)
> **Analogies:** for instance (1)
> **Prerequisites:** configure (1)
> **Speakers:** - [instructor] (1)

#### Adding application assets
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=0)** - [Narrator] Let's take a look now at adding application assets in libraries.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=3)** Head over to the angular.json file and inspect the assets array.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=7)** Here we connect files or folders that we want to copy during a build of our application.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=12)** By default the assets folder and the favicon file are listed here.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=16)** In the assets folder under source is where you want to place things like images, icons, locale files and any other files that you want to copy over.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=26)** Let's place an image inside the assets folder.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=28)** We can go ahead and grab the sample image from the exercise files and simply drag it in.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=33)** Let's grab the LinkedIn logo that PNG file and drag it to the assets folder.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=38)** Let's run a build of our application now.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=41)** we can do that by running ng build.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=45)** Once that is done, we can see that there's now this folder here, we can go ahead and inspect the assets folder and the logo is placed there.
>
> **[0:55](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=55)** This is really useful because you only need to use one path for your assets, and that will not change your production build.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=63)** Let's head over to app.component.html and go ahead and delete the placeholder content.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=72)** To add an asset to your application, you can reference the assets path.
>
> **[1:19](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=79)** Forward slash assets, forward slash LinkedIn dash logo.png.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=88)** Now this path will work on either the local development build or the production build.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=93)** You can do some more powerful things however, such as copying a folder of images that you need to copy over, perhaps in an MPM module.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=100)** For demonstration purposes, let's go ahead and install the weather underground icons module.
>
> **[1:46](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=106)** NPM install, weather dash underground dash icons.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=114)** If we take a peek at the node modules all the way down to weather underground icons, the raw images are in the disc folder in the icons folder.
>
> **[2:07](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=127)** Then we have more options.
>
> **[2:09](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=129)** For this specific use case, we will need the 32 by 32, black png images.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=137)** Let's start again to the angular.json file.
>
> **[2:21](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=141)** In our assets configuration we can specify the exact assets that we want to extract.
>
> **[2:28](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=148)** We will go ahead and use an object here and specify a glob pattern.
>
> **[2:34](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=154)** And this will be star star forward slash star in order to grab everything.
>
> **[2:41](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=161)** The input will be node modules forward slash weather underground dash icons forward slash dist, forward slash icons.
>
> **[2:57](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=177)** And we wanted the black, png, 32 by 32.
>
> **[3:03](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=183)** And we want to output those images into assets forward slash whether dash icons.
>
> **[3:12](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=192)** The output path will be relative to the newly created dist folder.
>
> **[3:16](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=196)** Let's go ahead and run another build.
>
> **[3:18](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=198)** Ng build dash dash configuration equals production.
>
> **[3:27](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=207)** Once that is done, let's go ahead and minimize this, head over to the dist folder on your assets.
>
> **[3:34](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=214)** And we can see all of our needed icon images here.
>
> **[3:38](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=218)** This also means that you can use the forward slash assets, forward slash weather icons path during development.
>
> **[3:45](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=225)** Now that's pretty powerful.
>
> **[3:46](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=226)** You didn't have to write any code to do this.
>
> **[3:49](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=229)** The CLI handles it all for you.
>
> **[3:50](https://www.linkedin.com/learning/learning-the-angular-cli/adding-application-assets?u=76281980&t=230)** In the next video we'll take a look at adding global scripts to our application.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), module (2), delete (1), case, (1), this, (1)
> **Env Vars:** png (1), mpm (1), npm (1), cli (1)
> **File Paths:** angular.json (2), app.component.html (1)
> **CLI Commands:** node (2), npm (1)
> **Prerequisites:** install (2)
> **Cross-References:** in the next (1)
> **Analogies:** such as (1)
> **Speakers:** - [narrator] (1)

#### Adding a CSS framework
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=0)** - [Instructor] A common need often involves the usage of a CSS framework like Bootstrap.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=4)** Using the CLI to add a CSS framework as a global style is actually quite simple.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=9)** Let's first install Bootstrap.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=12)** npm install boostrap and we'll be using version 4.5.2.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=17)** Once that is installed, head over to angular.json and add in the path for the bootstrap CSS file in the styles array.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=26)** This will be a node.modules/bootstrap/dist/css
>
> **[0:36](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=36)** and the file will be bootstrap.min.css.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=40)** Now, when you run a build of your application the bootstrap CSS file will be added as a global style sheet to your application.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=47)** You won't see this injected as a link tag in the index.html file, but they will indeed be added to your application.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=54)** These styles will be loaded when the Angular app first loads.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-angular-cli/adding-a-css-framework?u=76281980&t=57)** Let's run a build to make sure everything builds correctly, ng build dash dash configuration equals production.

> [!info]- Semantic Content
>
> **Env Vars:** css (4), cli (1)
> **File Paths:** angular.json (1), bootstrap.min.css (1), index.html (1)
> **CLI Commands:** npm (1), node (1), make (1)
> **Code Keywords:** let (2)
> **Versions:** version 4 (1), 5.2 (1)
> **Prerequisites:** install (2)
> **Speakers:** - [instructor] (1)

#### Challenge: Adding JavaScript libraries
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-adding-javascript-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-adding-javascript-libraries?u=76281980&t=0)** - [Instructor] In addition to adding application assets or CSS libraries, you can also easily add JavaScript libraries.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-adding-javascript-libraries?u=76281980&t=13)** This is useful in situations where you have legacy libraries, libraries written in ES5 that have not been ported to ES modules, and libraries that add their namespace to the global scope.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-adding-javascript-libraries?u=76281980&t=25)** In this challenge, I would like you to add this library to your Angular application.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-adding-javascript-libraries?u=76281980&t=30)** You will see that the usage of this library requires you to globally load the particle.js file.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-adding-javascript-libraries?u=76281980&t=38)** Take a look at the Angular CLI documentation at this URL to see how you can do that.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-adding-javascript-libraries?u=76281980&t=44)** The library is available on MPM, so can install it and have it available in your node modules.

> [!info]- Semantic Content
>
> **Env Vars:** css (1), es5 (1), cli (1), url (1), mpm (1)
> **File Paths:** particle.js (1)
> **CLI Commands:** node (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Adding JavaScript libraries
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=0)** - [Instructor] Let's take a look again at the angular.json file and now at the script array.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=12)** Any file placed here will be added to your application's global scope, similar to loading the file using a script tag.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=19)** The particles.JS libraries on NPM.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=22)** So let's first install it and NPM install particles.JS.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=29)** Let's inspect the node modules under particles.JS.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=35)** And let's go ahead and list the files here.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=37)** And we see that the script that we need is that the root named particles.JS.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=42)** Let's go ahead and not this path to our scripts array.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=48)** This will be at /node, modules/particles.JS/particles.JS.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=57)** Let's use this library now to add a particle animation to our application.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=61)** The particles.JS library uses the configuration file.
>
> **[1:04](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=64)** Go ahead and grab this file from the exercise files for this video and drag it to the assets folder Head over now to the app.component.HTML file and this go ahead and add a div with an ID of particles
>
> **[1:25](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=85)** and then heading over to the component class.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=88)** And we will go ahead and add the ngOnInit hook.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=97)** We'll use the configuration code to configure particles.JS we'll call load, this is the ID of the container the path to the configuration file.
>
> **[1:52](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=112)** Let's go ahead and add a call back function And simply log out particles.JS config loaded.
>
> **[2:03](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=123)** You'll see the TypeScript here is giving you an error saying that it cannot find this particular variable in situations like these, where you know that a particular variable will live in the global scope.
>
> **[2:14](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=134)** You can simply declare a type let's go ahead and declare a type here for particles JS, of type any.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=144)** And finally let's add some CSS, the background color will simply be black.
>
> **[2:38](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=158)** Let me go ahead and fix this typo here.
>
> **[2:41](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=161)** Although in the next chapter, we'll learn more about serving our applications for development.
>
> **[2:45](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=165)** Let's quickly test this out using the ngsurf command which is encapsulated in the NPM start script.
>
> **[2:52](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=172)** Let's go ahead and run NPM start and I am in the wrong directory.
>
> **[2:58](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=178)** Let me go ahead and move up to directories and run NPM start.
>
> **[3:05](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=185)** Let's go ahead and visit our browser now.
>
> **[3:07](https://www.linkedin.com/learning/learning-the-angular-cli/solution-adding-javascript-libraries?u=76281980&t=187)** And we can see all library in action.

> [!info]- Semantic Content
>
> **Code Keywords:** let (14), class. (1), function (1)
> **File Paths:** particles.js (7), angular.json (1), modules/particles.js/particles.js (1), app.component.html (1)
> **CLI Commands:** npm (5), node (2), find (1)
> **Env Vars:** npm (5), html (1), css (1)
> **Prerequisites:** install (2), configure (1)
> **Code Identifiers:** ngoninit (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** exercise files (1)


### 4. Serving Angular Applications for Development

#### The ng serve command
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=0)** - [instructor] The Angular CLI does a really great job tailoring to developer experience.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=4)** Aside from scaffolding an entire application for you, the CLI makes it easy for you to serve your app for development.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=10)** Let's continue with the sample that we previously generated.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=13)** To see the available options for serving your application, you can use the dash hash help flag with ng serve.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=20)** Lots of options here to use.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=22)** Let's use the default options for now, ng serve.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=27)** This command will build your app in memory and start a light development server for you at Port 4200.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=34)** Let's go ahead and click on this link here.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=36)** The really great feature here is that you can change any of your source files and the CLI will take care of automatically compiling your application and reload your browser.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=45)** Let's make a change now to our app component.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=47)** Heading over to App.component.html, let's go ahead and add a header.
>
> **[0:54](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=54)** Let's give that a save, head over back to our browser, and our application has automatically reloaded in our browser.
>
> **[1:02](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=62)** This will work for any code, template or style changes.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=66)** There's another useful feature and that is to automatically open your browser when serving your application.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=71)** Heading back to our terminal here, let's kill the server here with Ctrl + C and type in ng serve dash hash open.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-serve-command?u=76281980&t=81)** Same thing happened as before, except now your default browser will not be automatically opened.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), continue (1)
> **Env Vars:** cli (3)
> **File Paths:** app.component.html (1)
> **CLI Commands:** make (1)
> **Ports:** port 4200 (1)
> **Tools:** terminal (1)
> **UI Navigation:** click on (1)
> **Exercise Files:** template (1)

#### Customizing the development server
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=0)** - [Instructor] There are other options available to you as you serve your application.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=3)** If for some reason you need to use a port other than 4200, we can customize that by using a configuration flag.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=10)** In our terminal, let's type in ng serve --port=8000 --open.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=19)** We can use this option, if you will like the development server to be at port 8000 and once that is compiled and ready to go, we will see our browser open our local host, port 8000.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=31)** Now this was just an arbitrary port.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=33)** Any open port would work here.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=35)** Sometimes you may need to run your development server from a domain that is not local host.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=40)** Perhaps your application and API configuration needs to have a specific domain or there are other domain specific actions that are taken.
>
> **[0:48](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=48)** Say for instance, you need to run your app @localhost.def.[company.com](https://company.com) port 4200.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=58)** This is an arbitrary domain but note that it includes [company.com](https://company.com) in the domain, something that may be needed during development.
>
> **[1:07](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=67)** We need to update our host file.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=69)** I am on a Mac.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=70)** For instructions on updating your host file on a Windows machine, please refer to the link on the screen.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=77)** Let me go ahead and kill the server here.
>
> **[1:20](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=80)** On a Mac, the host file is at the following path, /etc/hosts.
>
> **[1:29](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=89)** With this file open, let's navigate all the way down and we'll enter a new line, 127.0.0.1
>
> **[1:42](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=102)** and then we'll enter [localhost.dev](https://localhost.dev).[company.com](https://company.com) and hit Save.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=109)** You may need to retry a pseudo here.
>
> **[1:54](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=114)** Let's serve our application again and now, we will need to use the --host flag.
>
> **[2:01](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=121)** ng serve --host=[localhost.dev](https://localhost.dev).[company.com](https://company.com) --open
>
> **[2:12](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=132)** and we see that our app is not being served here.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=136)** Now with all of this configuration, it may be a little tedious to type it all out.
>
> **[2:21](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=141)** That is where npm scripts come in handy.
>
> **[2:23](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=143)** In our application, head over to package.json.
>
> **[2:26](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=146)** There are some scripts here, that have been pre-configured for you but let's add a new script.
>
> **[2:32](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=152)** We'll call this serve:host and we will run ng serve --host=[localhost.dev](https://localhost.dev).[company.com](https://company.com) --open.
>
> **[2:47](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=167)** Now in our terminal, we can simply run npm run serve:host to kick off that script.
>
> **[2:56](https://www.linkedin.com/learning/learning-the-angular-cli/customizing-the-development-server?u=76281980&t=176)** Now that is much easier to remember and we have abstracted the complexity in a neat npm script.

> [!info]- Semantic Content
>
> **URLs:** [company.com](https://company.com) (5), [localhost.dev](https://localhost.dev) (3)
> **Code Keywords:** let (5), def. (1)
> **CLI Commands:** npm (3)
> **Ports:** port 8000 (2), port 4200 (1)
> **Tools:** terminal (2)
> **File Paths:** package.json (1)
> **Env Vars:** api (1)
> **Versions:** 127.0.0 (1)


### 5. Generating Angular Application Code

#### Creating new code with schematics
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/creating-new-code-with-schematics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/creating-new-code-with-schematics?u=76281980&t=0)** - [Instructor] Now that we have learned how to create new Angular applications and serving them for development, we will learn now how to easily create Angular application code using the schematics from the Angular CLI.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-angular-cli/creating-new-code-with-schematics?u=76281980&t=11)** What do I mean by schematics?
>
> **[0:12](https://www.linkedin.com/learning/learning-the-angular-cli/creating-new-code-with-schematics?u=76281980&t=12)** With the CLI, you can generate the different entities used for building your application.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-angular-cli/creating-new-code-with-schematics?u=76281980&t=17)** In your terminal, type in ng generate --help.
>
> **[0:22](https://www.linkedin.com/learning/learning-the-angular-cli/creating-new-code-with-schematics?u=76281980&t=22)** When generating a file based on a specific schematic, your command will follow the following template, ng generate, the schematic name, and then the options.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-angular-cli/creating-new-code-with-schematics?u=76281980&t=34)** You will be able to easily generate components, directives, services, pipes, models and interfaces, route guards, and modules.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-angular-cli/creating-new-code-with-schematics?u=76281980&t=44)** We'll be learning how to use these schematics to generate application code.

> [!info]- Semantic Content
>
> **Env Vars:** cli (2)
> **Tools:** terminal (1)
> **Exercise Files:** template (1)
> **Speakers:** - [instructor] (1)

#### Generating components and modules
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=0)** - [Instructor] Let's see how we can generate components.
>
> **[0:02](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=2)** We will do so by using the ng generate components schematic named contact list and we will use the dry run flag which allows us to see how and where these files are placed without actually writing them to disk.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=18)** It's a great way to first test out and see what files will be generated.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=23)** There are also some useful shortcuts.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=25)** For example, instead of the previous command we could have run ng g c which is short for generate component.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=37)** By default component files are placed in their own folder.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=40)** If this isn't desired you can change that by using the dash dash flat flag.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=49)** And we see that instead of creating a folder it created the files directly under the app folder.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=57)** Let's go ahead and generate the component with this corresponding folder.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=60)** So we will now omit the dry run flag ng g c contact dash list.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=68)** We see a new folder that's generated here.
>
> **[1:11](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=71)** We open that up, we have an HTML file, an empty file for styles a spec file and a component file.
>
> **[1:23](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=83)** It's also important to note that our applications module was modified.
>
> **[1:27](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=87)** The new component was automatically imported and then added to the declarations property of the module configuration.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=95)** Let's go ahead and generate a new module which we'll call shared.
>
> **[1:39](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=99)** ng generate module and let's name that shared.
>
> **[1:44](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=104)** And we see that we have a new folder here with a new shared module here.
>
> **[1:49](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=109)** From the root directory we can instruct the CLI to generate a new component inside this new shared folder, and also be contained in a shared module.
>
> **[1:59](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=119)** ng generate component, shared, and the name of our component will be avatar.
>
> **[2:07](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=127)** We see that the new component was generated then we inspect the shared module.
>
> **[2:13](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=133)** We see that the avatar component was automatically added to the nearest module.
>
> **[2:17](https://www.linkedin.com/learning/learning-the-angular-cli/generating-components-and-modules?u=76281980&t=137)** In this case, it is our shared module.

> [!info]- Semantic Content
>
> **Code Keywords:** module (9), let (4), case, (1)
> **Env Vars:** html (1), cli (1)
> **Documentation:** spec (1)
> **Definitions:** short for (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Generating directives
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/generating-directives?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/generating-directives?u=76281980&t=0)** - Generating directives can also be achieved using simple commands.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-angular-cli/generating-directives?u=76281980&t=4)** Let's suppose we need to generate a directive to modify input elements to only accept text input and name this directive, non-numeric.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-angular-cli/generating-directives?u=76281980&t=12)** At the terminal, we can simply type in ng generate directive and we will be placing this in the shared module as well, inside a directives folder.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-angular-cli/generating-directives?u=76281980&t=23)** In this case, let's explicitly tell the CLI the declaring model.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-angular-cli/generating-directives?u=76281980&t=31)** And we can do that by specifying the --module=shared.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-angular-cli/generating-directives?u=76281980&t=38)** A directive file was generated along with a spec file.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-angular-cli/generating-directives?u=76281980&t=42)** Note also that the app prefix is added to the directive selector and it's also automatically imported to the shared module.

> [!info]- Semantic Content
>
> **Code Keywords:** module (3), let (2), case, (1)
> **Env Vars:** cli (1)
> **Documentation:** spec (1)
> **Tools:** terminal (1)
> **Speakers:** - generating (1)

#### Generating pipes
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/generating-pipes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/generating-pipes?u=76281980&t=0)** - [Victor] Let's see how we can generate a pipe for correctly displaying phone numbers.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-angular-cli/generating-pipes?u=76281980&t=4)** At your terminal, let's type in NG generate pipe.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-angular-cli/generating-pipes?u=76281980&t=8)** And we want to place this in a pipes folder and the name of our pipe will be called phone.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-angular-cli/generating-pipes?u=76281980&t=15)** A new pipes folder was created and it was also added to the main application module.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-angular-cli/generating-pipes?u=76281980&t=24)** If we take a look at the generated pipe file, a boilerplate class and test file were created.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-angular-cli/generating-pipes?u=76281980&t=32)** Pipes in Angular must implement the pipe transform interface and has one method, the transform method that must be implemented.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-angular-cli/generating-pipes?u=76281980&t=41)** From here, you can modify in order to implement the correct logic.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), module (1), interface (1)
> **Tools:** terminal (1)
> **Exercise Files:** boilerplate (1)
> **Speakers:** - [victor] (1)

#### Generating route guards
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=0)** - [Instructor] In Angular applications, we can protect routes using what is called a route guard.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=4)** A route guard is used to perform certain checks when the route is being requested, and it can decide whether or not to continue with the navigation.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=12)** In our particular case, we wish to lock certain routes, so that the user can't see data on this data logged in.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=18)** Let's generate a new guard using the CLI; ng generate guard, and we will call this route guard auth.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=27)** It will ask us which interface we would like to implement.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=31)** For this example, we will choose the CanActivate guard, which moderates a navigation to a route.
>
> **[0:37](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=37)** If true is returned, then it will continue navigation to the requested route.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=42)** If false is returned, it will stop navigation.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=46)** Now in the app routing module, we will first need to import this guard; import from /auth.guard.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=60)** And let's go ahead and import our guard here.
>
> **[1:03](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=63)** Then for the routes you want to protect, we can add a CanActivate property, specifying an array of guards.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=70)** Let's go ahead and add a new route here.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=72)** The path will be contacts.
>
> **[1:15](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=75)** The component will be the ContactListComponent that we previously generated.
>
> **[1:21](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=81)** And we will add the CanActivate property.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=84)** It will be an array.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=85)** And this will consist of the auth guard here.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=88)** The contacts route will now be protected by our newly generated auth guard.
>
> **[1:33](https://www.linkedin.com/learning/learning-the-angular-cli/generating-route-guards?u=76281980&t=93)** Auth guards are very powerful, and the CLI makes it very easy for you to generate them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), continue (2), case, (1), interface (1), module (1)
> **Env Vars:** cli (2)
> **Definitions:** is called (1)
> **Speakers:** - [instructor] (1)

#### Adding libraries using schematics
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=0)** - [Instructor] The Angular CLI provides us with an easy way to add an npm package for a published library and can also configure our application and modify files so that it is ready to go.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=11)** For example, let's say we want to use Angular Material in our application.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=15)** The Angular Material team has created a schematic that we can easily use.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=20)** We can use that by running ng add and then the name of the package.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=25)** In this case it's @angular/material.
>
> **[0:30](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=30)** It will ask us a couple of questions.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=32)** This case I will go with the first option here and I will choose yes to set up global Angular Material typography.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=39)** Set up browser animations?
>
> **[0:41](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=41)** Yes.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=42)** And once the questions are done it will install the necessary packages and also modify any files.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=49)** Taking a look at the changes, you can see that it not only modify my package.json file but it also modified my application code with necessary changes.
>
> **[1:00](https://www.linkedin.com/learning/learning-the-angular-cli/adding-libraries-using-schematics?u=76281980&t=60)** Just a quick note, you should first look at a specific library's documentation page to see if it provides angular CLI schematic support.

> [!info]- Semantic Content
>
> **Prerequisites:** set up (2), configure (1), install (1)
> **Env Vars:** cli (2)
> **File Paths:** package.json (1)
> **CLI Commands:** npm (1)
> **Code Keywords:** let (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Generating custom library
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=0)** - [Instructor] In some projects you will come across a need to develop your own custom Angular library to be shared across teams in your organization.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=8)** The Angular CLI makes it really easy for you to do this.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=11)** We can do that by using ng generate library and the name for our library.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=17)** In this case, I will call it my components.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=21)** It goes ahead and generates files and also installs additional, necessary packages.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=26)** We can go ahead and inspect our Augular.JSON file and we can see that a new project was added to our configuration.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=39)** This means that our library has its own builder targets.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=44)** Also, you can run specific commands for your library.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=47)** Say, for instance, you want to build your library you can simply run ng build my components.
>
> **[0:55](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=55)** You can also test your custom library.
>
> **[0:57](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=57)** ng test my components.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=61)** Then we see that the basic tests pass here.
>
> **[1:06](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=66)** Inspecting now the projects folder, we see that we have the configuration files for our custom library.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=73)** And under source and lib is where you would place your custom components.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-angular-cli/generating-custom-library?u=76281980&t=78)** If you would like to learn more about developing your own custom Angular library I suggest you watch my course Angular Workflows in order to learn more.

> [!info]- Semantic Content
>
> **Code Keywords:** this. (1), case, (1), pass (1)
> **Env Vars:** cli (1), json (1)
> **File Paths:** augular.json (1)
> **Definitions:** means that (1)
> **Analogies:** for instance (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Generating services
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-generating-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-generating-services?u=76281980&t=0)** - [Victor] Data fetching and processing in Angular should be handled by services and a CLI allows you to easily create them.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-generating-services?u=76281980&t=13)** For this challenge, I want you to suppose that we are generating an Angular service called API and we would like to place a service in a services folder under the source and then under the app folder here.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-angular-cli/challenge-generating-services?u=76281980&t=26)** I recommend you use the help command of the CLI to assist you in this challenge.

> [!info]- Semantic Content
>
> **Env Vars:** cli (2), api (1)
> **Speakers:** - [victor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Generating services
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/solution-generating-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/solution-generating-services?u=76281980&t=0)** - [Instructor] Suppose we are generating an API service.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-angular-cli/solution-generating-services?u=76281980&t=9)** At your terminal, you will use the ng generate service command and then the name of the service, but we would like to place this in a services folder.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-angular-cli/solution-generating-services?u=76281980&t=17)** So we'll go ahead and prepend services here.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-angular-cli/solution-generating-services?u=76281980&t=20)** And just like that, we have a services folder created along with the API service and the spec file.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-angular-cli/solution-generating-services?u=76281980&t=31)** An important thing to note is that by default, services are registered with the root injector, and so angular creates a single shared instance of the generator service across our application.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Code Keywords:** default, (1)
> **Documentation:** spec (1)
> **Tools:** terminal (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 6. Building Angular Applications

#### A build pipeline for an Angular app
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/a-build-pipeline-for-an-angular-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/a-build-pipeline-for-an-angular-app?u=76281980&t=0)** - [Instructor] There are many steps involved in building an Angular application.
>
> **[0:03](https://www.linkedin.com/learning/learning-the-angular-cli/a-build-pipeline-for-an-angular-app?u=76281980&t=3)** Since Angular apps are written in TypeScript in ES6 and beyond, the build pipeline is quite involved.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-angular-cli/a-build-pipeline-for-an-angular-app?u=76281980&t=9)** We need to transpile TypeScript and ES6 code, bundle our application into one file or split across many, minify files by removing new lines in white space, and also generate source maps.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-angular-cli/a-build-pipeline-for-an-angular-app?u=76281980&t=21)** Aside from that, we also need to deal with CSS and other assets.
>
> **[0:25](https://www.linkedin.com/learning/learning-the-angular-cli/a-build-pipeline-for-an-angular-app?u=76281980&t=25)** We need to compile from Sass to CSS, inlining CSS, dealing with scoped styles, and copying or inlining images.
>
> **[0:32](https://www.linkedin.com/learning/learning-the-angular-cli/a-build-pipeline-for-an-angular-app?u=76281980&t=32)** As you can see, the process is very involved, but the CLI takes care of all with a simple command: ng build.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-angular-cli/a-build-pipeline-for-an-angular-app?u=76281980&t=40)** As you may have guessed, there are also several options for the build command.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-angular-cli/a-build-pipeline-for-an-angular-app?u=76281980&t=44)** Let's cover them in detail.

> [!info]- Semantic Content
>
> **Env Vars:** css (3), es6 (2), cli (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### The ng build command
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980&t=0)** - [Instructor] Continuing with our sample app that we have been working on, let's run a simple ng build and see what it generates.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980&t=7)** We can see that a few files were generated and these are all placed in a dist folder.
>
> **[0:12](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980&t=12)** Here is where all of the build artifacts are placed.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980&t=15)** Any assets, including CSS and images are also placed here.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980&t=20)** We also see a few bundles along with the corresponding .map file.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980&t=24)** These are the source maps.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980&t=26)** When the script files are loaded, they have a containing source mapping URL that the browser will read, which will load the source file.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980&t=34)** Since this is transpired with code, the source map helps for debugging purposes since you can debug using the original TypeScript code.
>
> **[0:41](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980&t=41)** Taking a look at our custom library, ng build also took care of building that for us in a format that can be published to mpm and imported into your Angular application.
>
> **[0:52](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-build-command?u=76281980&t=52)** Lastly, if we take a look at index.HTML, We can see that the build system has automatically injected script text for us referencing those script files.

> [!info]- Semantic Content
>
> **Env Vars:** css (1), url (1), html (1)
> **File Paths:** index.html (1)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)

#### Configuring different build options
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=0)** - [Narrator] It is important to know that by default, the JavaScript bundles are not optimized.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=5)** What I mean by that is that they are not minified nor uglified for performance.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=10)** Also, the bundle names do not contain a hash for cache busting.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=14)** By default, ng build runs a development build.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=18)** Let's run a production build.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=20)** And we can do that by using ng build --configuration=production.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=29)** The dist directory is discarded and it is running a fresh build.
>
> **[0:34](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=34)** Once that is complete, let's take a look again at the dist folder.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=42)** In this case, we now see that the source maps were not generated, and the bundle filenames include a hash for cache busting.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=50)** Also, they have been minified and uglified, thus significantly reducing the file size of these bundles.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=58)** If you'd like to generate source maps in a production build, you can use a new flag: ng build --configuration=production
>
> **[1:09](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=69)** - -source-map.
>
> **[1:13](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=73)** In order to see what this production configuration entails, We can take a look at the angular.json file.
>
> **[1:22](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=82)** Under the build, build a target.
>
> **[1:25](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=85)** You can see here that certain features are turned on by default, and also note that you can set budgets.
>
> **[1:32](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=92)** What this means is that if your build assets exceed this budget, the build will fail.
>
> **[1:37](https://www.linkedin.com/learning/learning-the-angular-cli/configuring-different-build-options?u=76281980&t=97)** It's an important feature to set in order to keep your applications performing well.

> [!info]- Semantic Content
>
> **Code Keywords:** default, (3), let (2), case, (1)
> **File Paths:** angular.json (1)
> **Warnings:** note that (1)
> **Speakers:** - [narrator] (1)

#### Setting up build scripts
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/setting-up-build-scripts?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/setting-up-build-scripts?u=76281980&t=0)** - [Instructor] Previously, we generated a build with the following configuration, ng build dash dash configuration equals production.
>
> **[0:08](https://www.linkedin.com/learning/learning-the-angular-cli/setting-up-build-scripts?u=76281980&t=8)** You may want a reusable command to be used in continuous integration and delivery environments, and sometimes, it may be a little long to type in.
>
> **[0:16](https://www.linkedin.com/learning/learning-the-angular-cli/setting-up-build-scripts?u=76281980&t=16)** We can easily set up an npm script for this.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-angular-cli/setting-up-build-scripts?u=76281980&t=19)** Open up the package.json file and let's update the build npm script.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-angular-cli/setting-up-build-scripts?u=76281980&t=24)** We can add here dash dash configuration equals production and we can change the name of this npm script to build colon prod.
>
> **[0:35](https://www.linkedin.com/learning/learning-the-angular-cli/setting-up-build-scripts?u=76281980&t=35)** Now in your terminal, all you need to do is run npm run build colon prod.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-angular-cli/setting-up-build-scripts?u=76281980&t=42)** We can also go ahead and add an npm script for a development build.
>
> **[0:47](https://www.linkedin.com/learning/learning-the-angular-cli/setting-up-build-scripts?u=76281980&t=47)** Let's call that build colon dev and that will simply run ng build.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-angular-cli/setting-up-build-scripts?u=76281980&t=53)** Setting up npm scripts will make automation much easier.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (6), make (1)
> **Code Keywords:** let (2), this. (1)
> **File Paths:** package.json (1)
> **Tools:** terminal (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Deploying with the Angular CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=0)** - [Instructor] The Angular CLI allows you to deploy to third party services using one simple command: ng deploy.
>
> **[0:07](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=7)** However, this only works for packages that have implemented deployment functionality to specific platforms.
>
> **[0:13](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=13)** You can find a list of such packages at this URL.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=17)** For our use case, we will be deploying to Firebase.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=20)** Head over to the Firebase console at console.firebase.[google.com](https://google.com).
>
> **[0:25](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=25)** You will need to create a Firebase account.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=27)** Let's go ahead and add a project.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=29)** I will call my project CLI Deploy.
>
> **[0:33](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=33)** Click continue, I don't want to use Google Analytics at this moment.
>
> **[0:38](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=38)** And click on create project.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=40)** Once that is done, go ahead and click continue.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=43)** And head it back to your project directory.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=46)** In your terminal, go ahead and run ng add @angular/fire.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=53)** The command will go ahead and install any necessary dependencies.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=58)** If this is your first time authenticating Firebase on your machine it will prompt you to authenticate with your Firebase account.
>
> **[1:04](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=64)** And then, provide you with an authentication code that you can input here.
>
> **[1:09](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=69)** Go ahead and select the Firebase project we just selected.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=72)** In my case, it was CLI-deploy.
>
> **[1:18](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=78)** Once that is done, we can see that it has modified our application in order to support deployment.
>
> **[1:26](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=86)** Take another look at the package.json.
>
> **[1:28](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=88)** Dependencies have been added.
>
> **[1:31](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=91)** And also, heading over to angular.json, we can see there is now a deploy builder target.
>
> **[1:40](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=100)** At your terminal, you can now run ng deploy.
>
> **[1:45](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=105)** The CLI will first build your application.
>
> **[1:48](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=108)** And then, Firebase will deploy your Angular App.
>
> **[1:53](https://www.linkedin.com/learning/learning-the-angular-cli/deploying-with-the-angular-cli?u=76281980&t=113)** Once that is done, it will provide you with a URL, where you can see your application live.

> [!info]- Semantic Content
>
> **Env Vars:** cli (4), url (2)
> **Code Keywords:** case, (2), continue (2), let (1)
> **File Paths:** package.json (1), angular.json (1)
> **Tools:** terminal (2)
> **UI Navigation:** click on (1), select the (1)
> **CLI Commands:** find (1)
> **URLs:** [google.com](https://google.com) (1)
> **Prerequisites:** install (1)


### 7. Running Tests

#### Built-in test runner
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980&t=0)** - [Instructor] We will now be learning about how to run your tests using the CLI.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980&t=4)** Go ahead and open the sample application provided in the exercise files called ng-sample-unit-tests.
>
> **[0:11](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980&t=11)** Or you can clone the GitHub repository at this URL and make sure you run NPM install.
>
> **[0:17](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980&t=17)** When you generate an application using the CLI, a testing pipeline is already set up for you.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980&t=23)** To run your unit test, a karma configuration file is generated.
>
> **[0:28](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980&t=28)** Karma is used as a test runner, using Jasmine as a testing framework and is set up by default to run your tests in Chrome.
>
> **[0:39](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980&t=39)** Additional setup can be seen in source, test.ts.
>
> **[0:44](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980&t=44)** Essentially, this provides additional setup to initialize the angular testing environment.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980&t=49)** You can write your test entire script and the CLI will take care of transpiring that for you.
>
> **[0:53](https://www.linkedin.com/learning/learning-the-angular-cli/built-in-test-runner?u=76281980&t=53)** In the next video we'll be learning more about the ng test command.

> [!info]- Semantic Content
>
> **Env Vars:** cli (3), url (1), npm (1)
> **Prerequisites:** set up (2), setup (2), install (1)
> **CLI Commands:** make (1), npm (1)
> **File Paths:** test.ts (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **UI Navigation:** open the (1)
> **Exercise Files:** exercise files (1)

#### The ng test command
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=0)** - [Victor] In order to run your unit test, you can simply run NG test.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=4)** This will grab all of your spec files, transpile them in memory and run your unit tests in Chrome.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=10)** Now I see Chrome automatically open up here and I can see each one of my specs.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=15)** If you'll notice here, the process did not exit.
>
> **[0:18](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=18)** The source and spec files are currently being watched.
>
> **[0:21](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=21)** And so when you change your code, your specs will automatically run.
>
> **[0:26](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=26)** Let me go ahead and change a file, heading over to the core folder and the pipes folder.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=31)** And let me change a test here on line 22 to a different string.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=36)** Give that a save, and you'll see that the test suite runs again.
>
> **[0:40](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=40)** In this case, it will fail.
>
> **[0:43](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=43)** Let me change that back to the correct value.
>
> **[0:46](https://www.linkedin.com/learning/learning-the-angular-cli/the-ng-test-command?u=76281980&t=46)** Give it a save, and the test suite will run again and now my tests are passing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), case, (1)
> **Documentation:** spec (2)
> **Speakers:** - [victor] (1)

#### Test run options
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=0)** - [Instructor] Let's take a look now at the different options available to us when running our tests.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=4)** Currently, our tests are in watch mode.
>
> **[0:06](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=6)** If you prefer not to do that, we can use a flag.
>
> **[0:09](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=9)** Let me go ahead and kill this process here and run ng test --no-watch.
>
> **[0:15](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=15)** In this case, our test will only run once and then exit.
>
> **[0:20](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=20)** In continuous integration environments, this will be needed.
>
> **[0:24](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=24)** I would also recommend to generate code coverage reports when running your tests.
>
> **[0:29](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=29)** To do so, you can use a new flag that's called --code-coverage.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=36)** What this will do, is generate code coverage reports using Istanbul.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=42)** When that is done, you'll see that we have a new coverage folder here.
>
> **[0:45](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=45)** In particular, we're interested in viewing index.html.
>
> **[0:49](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=49)** Go ahead and open that up in your browser.
>
> **[0:56](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=56)** What you see here, is a coverage report indicating the files and lines that have been tested through your spec files.
>
> **[1:08](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=68)** Green means that we have tested the underlying code.
>
> **[1:12](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=72)** It is important to know that this will only generate code coverage reports on lines of code that have run through your unit tests.
>
> **[1:20](https://www.linkedin.com/learning/learning-the-angular-cli/test-run-options?u=76281980&t=80)** If you don't run a specific file through your unit tests, it won't be included in the coverage report.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), case, (1)
> **Definitions:** is a  (1), means that (1)
> **File Paths:** index.html (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### Testing workflow
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=0)** - [Instructor] As we've seen, by default your tests are run on an actual Chrome instance.
>
> **[0:05](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=5)** In automated testing environments where you don't need a visible UI, it may be best to run your tests in a headless browser, Chrome supports headless mode.
>
> **[0:14](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=14)** Which essentially means that you can run Chrome without the UI show.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=19)** In the browsers array, replace Chrome with ChromeHeadless, let's go ahead and run ng test again.
>
> **[0:27](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=27)** Ng test--no-watch.
>
> **[0:31](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=31)** Our tests ran again but this time using a headless instance of Chrome.
>
> **[0:36](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=36)** One of the benefits is that your test will be executed in the same environment as users of your site.
>
> **[0:42](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=42)** It will also give you performance benefits as you can run your tests in real browser context without the memory overhead of running a full instance of Chrome.
>
> **[0:50](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=50)** When running your test, you see a message here, Executed 17 of 17.
>
> **[0:55](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=55)** But we don't know exactly which tests have run.
>
> **[0:58](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=58)** Let's go ahead and configure our terminal output.
>
> **[1:01](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=61)** We will first need to install a karma plugin, called karma-spec-reporter.
>
> **[1:10](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=70)** Once installed, open up again the karma.conf.js file.
>
> **[1:17](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=77)** In the plugins array, go ahead and require this new plugin, require karma-spec-reporter.
>
> **[1:24](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=84)** In the reports array, inside the coverageIstanbulReporter.
>
> **[1:30](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=90)** Go ahead and add a new token, text-summary.
>
> **[1:35](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=95)** This will output a code coverage summary on your terminal, and finally, in the reporters array replace progress with spec.
>
> **[1:46](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=106)** Let's go ahead and run our test again.
>
> **[1:50](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=110)** NG tests --no-watch --code coverage.
>
> **[1:56](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=116)** We ran our test again except now, we see each individual spec that ran along with his pass or fail status.
>
> **[2:05](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=125)** And at the end we get a code coverage summary.
>
> **[2:10](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=130)** As I mentioned in previous videos, it is a great idea to abstract long commands into a simple to use NPM scripts.
>
> **[2:16](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=136)** Let's go ahead and update the test script.
>
> **[2:19](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=139)** Head over to package.jason and lets update this script.
>
> **[2:24](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=144)** And this will now use --no-watch along with the code coverage flag.
>
> **[2:34](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=154)** And in our terminal all we need to do is run NPM test.
>
> **[2:38](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=158)** The sample application also includes an example of an end-to-end test.
>
> **[2:43](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=163)** The CLI currently sets a protractor for you to write and run your end to end test.
>
> **[2:49](https://www.linkedin.com/learning/learning-the-angular-cli/testing-workflow?u=76281980&t=169)** To run your end to end tests, you can simply run ng e2e and we can see that our test runs and passes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), require (2), finally, (1), pass (1), abstract (1)
> **Documentation:** spec (4)
> **Env Vars:** npm (2), cli (1)
> **Tools:** terminal (3)
> **CLI Commands:** npm (2)
> **Definitions:** means that (1), is a  (1)
> **Prerequisites:** configure (1), install (1)
> **File Paths:** karma.conf.js (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/learning-the-angular-cli/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/learning-the-angular-cli/next-steps?u=76281980&t=0)** - [Instructor] Thanks for joining me on this course and I hope you enjoyed learning about the angular CLI.
>
> **[0:04](https://www.linkedin.com/learning/learning-the-angular-cli/next-steps?u=76281980&t=4)** The CLI is truly a great tool that will allow you to be productive building angular applications.
>
> **[0:10](https://www.linkedin.com/learning/learning-the-angular-cli/next-steps?u=76281980&t=10)** I recommend subscribing to notifications on this github repository as it will allow you to keep up to date with new features and be notified of new releases.
>
> **[0:19](https://www.linkedin.com/learning/learning-the-angular-cli/next-steps?u=76281980&t=19)** And of course, continue to browse our library for anything angular related.
>
> **[0:23](https://www.linkedin.com/learning/learning-the-angular-cli/next-steps?u=76281980&t=23)** If you wish to know what I'm currently working on, follow me on github at [github.com/VictorMejia](https://github.com/VictorMejia).
>
> **[0:30](https://www.linkedin.com/learning/learning-the-angular-cli/next-steps?u=76281980&t=30)** Thanks for watching.

> [!info]- Semantic Content
>
> **Tools:** github (3)
> **Env Vars:** cli (2)
> **Code Keywords:** continue (1)
> **URLs:** [github.com](https://github.com) (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Explore Web Development with Angular]]
← [[Angular Essential Training]] | **2 of 6** | [[Angular- Testing and Debugging]] →

## Appears In

- [[Explore Web Development with Angular]]

---

[↑ Back to top](#)