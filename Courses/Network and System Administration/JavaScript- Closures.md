---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: javascript-closures
url: "https://www.linkedin.com/learning/javascript-closures"
duration_minutes: 57
duration: 57m
level: Intermediate
updated: 4/18/2025
learners: 44493
skills:
  - JavaScript
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQFM8NmFGPie5A/learning-public-crop_675_1200/B56ZbF5RbaH4Ac-/0/1747076847988?e=2147483647&amp;v=beta&amp;t=AjaxURIqeODtdOfN9NsylOFZ9k01k8DyLbvbObc0UyE"
linkedin_topic: Network and System Administration
learning_paths:
  - '[[Become a JavaScript Developer]]'
prev_courses:
  - '[[JavaScript- Prototypes]]'
next_courses:
  - '[[JavaScript- Classes]]'
path_nav: '[{"path":"Become a JavaScript Developer","position":6,"total":13,"prev":"JavaScript- Prototypes","next":"JavaScript- Classes"}]'
path_count: 1
tags:
  - course
  - topic/network-and-system-administration
  - topic/software-development
  - topic/web-development
  - skill/javascript
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Network%20and%20System%20Administration/JavaScript-%20Closures.md)

![JavaScript: Closures](https://media.licdn.com/dms/image/v2/D560DAQFM8NmFGPie5A/learning-public-crop_675_1200/B56ZbF5RbaH4Ac-/0/1747076847988?e=2147483647&amp;v=beta&amp;t=AjaxURIqeODtdOfN9NsylOFZ9k01k8DyLbvbObc0UyE)

# JavaScript: Closures

> Suggested prerequisites Familiarity with JavaScript programming Closures—a core concept for intermediate and advanced JavaScript developers—can be challenging for many developers to wrap their heads around. In this concise course, Sasha Vodnik breaks down this essential concept, explaining what closures are and how to use them in JavaScript. This course includes Code Challenges powered by CoderPad

> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures) | 57m | Intermediate | 44K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (4 videos)
- **[[#2. 1. Building Blocks of Closures]]** (5 videos)
- **[[#3. 2. Creating and Using Closures]]** (4 videos)
- **[[#4. Conclusion]]** (1 videos)

### 1. Introduction

#### Using closures in JavaScript
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/using-closures-in-javascript-22184726?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-closures/using-closures-in-javascript-22184726?u=76281980&t=0)** - Have you ever wondered what JavaScript closures can do besides make a job interview more challenging?
>
> **[0:05](https://www.linkedin.com/learning/javascript-closures/using-closures-in-javascript-22184726?u=76281980&t=5)** Closures are powerful and they're also tricky to use.
>
> **[0:09](https://www.linkedin.com/learning/javascript-closures/using-closures-in-javascript-22184726?u=76281980&t=9)** I'll help you build your understanding by reviewing their building blocks.
>
> **[0:13](https://www.linkedin.com/learning/javascript-closures/using-closures-in-javascript-22184726?u=76281980&t=13)** I'll invite you to code along with me to use them to implement the module pattern.
>
> **[0:17](https://www.linkedin.com/learning/javascript-closures/using-closures-in-javascript-22184726?u=76281980&t=17)** I'll show you how to avoid breaking your code by creating unintended closures, and we'll write code with ES6 alternatives that we can use in their place.
>
> **[0:26](https://www.linkedin.com/learning/javascript-closures/using-closures-in-javascript-22184726?u=76281980&t=26)** After we're done, you'll be able to talk about what closures are and successfully use them.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** module (1)
> **Env Vars:** es6 (1)
> **Speakers:** - have (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/what-you-should-know-14372073?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/what-you-should-know-14372073?u=76281980&t=1)** - [Instructor] This course assumes you have some experience coding in JavaScript.
>
> **[0:05](https://www.linkedin.com/learning/javascript-closures/what-you-should-know-14372073?u=76281980&t=5)** If you don't have experience with JavaScript, the JavaScript Essentials course is a great place to start.
>
> **[0:11](https://www.linkedin.com/learning/javascript-closures/what-you-should-know-14372073?u=76281980&t=11)** To get an overview of the modern JavaScript tools we will be using, check out the Learning ECMAScript 6 course.

> [!info]- Semantic Content
>
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Environment setup and exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=1)** - [Instructor] To get started with this course, I have provided exercise files so you can work along with me.
>
> **[0:06](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=6)** I also have a few tips for you to set up your environment, as well as steps to get the API key that's necessary to work through this course.
>
> **[0:15](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=15)** If you have access to the exercise files, there's a directory for each chapter and a sub-folder for each video.
>
> **[0:23](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=23)** The Start folder contains the files you should use to work through the tasks in the video.
>
> **[0:30](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=30)** The Finish folder contains the same files with all of the tasks in the video completed.
>
> **[0:36](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=36)** If you get stuck or just can't get a step to work, the Finish files can be a great way to check your work or to see the finished product in action.
>
> **[0:45](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=45)** If you're viewing this course on a mobile device or a set-top device, or if your membership doesn't provide access to the exercise files, that's okay.
>
> **[0:54](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=54)** I encourage you to still follow along as we go through the course.
>
> **[0:58](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=58)** If you are working on a computer, you need three applications: a web browser, a code editor, and an HTTP server.
>
> **[1:07](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=67)** You also need an API key from [openweathermap.org](https://openweathermap.org).
>
> **[1:11](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=71)** You undoubtedly already have a web browser installed on your machine and any major modern browser, Chrome, Firefox, or Microsoft Edge, is fine for this course.
>
> **[1:23](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=83)** I'll be using Chrome in these videos, which is a popular choice among web developers because of the extensive and powerful developer tools it has built in.
>
> **[1:32](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=92)** Because we'll only be using the console though, that won't really make a difference for this course.
>
> **[1:38](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=98)** Note that if you're on a Mac and you want to use Safari, you'll need to go to the Preferences, select the Advanced tab and check the Show Develop menu in menu bar check box in order to be able to access the developer tools using the menu.
>
> **[1:58](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=118)** You'll then have a menu option called Develop, which gives you access to all these different tools.
>
> **[2:03](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=123)** A number of great code editors are available with both free and paid apps.
>
> **[2:09](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=129)** Any editor that lets you edit and save plain text is fine for this course, so if you have a code editor you like, such as Sublime Text or Atom, it's fine to use it.
>
> **[2:20](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=140)** I use Visual Studio Code in these videos, which is a version of Microsoft's Visual Studio that was created specifically for web development.
>
> **[2:28](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=148)** Visual Studio Code is free and has Windows, Mac, and Linux releases.
>
> **[2:33](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=153)** The Code is available on GitHub and users can submit issues there as well.
>
> **[2:40](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=160)** I've customized my editor with one extension.
>
> **[2:44](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=164)** Open in Browser, created by TechER, lets you open the current HTML file directly in your default browser using the alt + b or option + b keyboard shortcut.
>
> **[2:55](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=175)** So this just saves a trip to the file manager to open a file in the browser the first time.
>
> **[3:00](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=180)** An HTTP server is the final tool you need for this course.
>
> **[3:05](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=185)** As a web developer, this is an application you'll need to have access to.
>
> **[3:09](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=189)** So if you don't have one installed at this point, use this as your excuse to install it.
>
> **[3:14](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=194)** I'm using http-server, which is a command-line utility that runs under Node and is installed through the Node Package Manager, or NPM.
>
> **[3:23](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=203)** You can install Node by downloading a GUI installer from [nodejs.org](https://nodejs.org).
>
> **[3:28](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=208)** Then once that's installed, at the command line, you simply type npm install http-server -g, where -g installs the package globally.
>
> **[3:44](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=224)** Now, if you run into errors like this, you may need to use sudo to install this package.
>
> **[3:50](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=230)** To do so, you use the same command, but you type sudo at the start of it.
>
> **[3:55](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=235)** So sudo npm install, http-server -g.
>
> **[4:03](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=243)** and you type in your login password.
>
> **[4:10](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=250)** And then I have a good install.
>
> **[4:12](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=252)** Once that install is complete, you can use the command http-server to start a server that serves the files in the current directory.
>
> **[4:21](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=261)** And then when you're done, just press control + C and you're back to the Bash prompt.
>
> **[4:26](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=266)** Finally, the videos in this course make use of data from [openweathermap.org](https://openweathermap.org).
>
> **[4:31](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=271)** Data requests from this service require an API key, which is a unique identifier that associates you with the request coming in.
>
> **[4:39](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=279)** The service provides a limited amount of data for free.
>
> **[4:42](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=282)** And by having your own key, you can ensure you stay below the limit of free requests.
>
> **[4:47](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=287)** To do this, you need to sign up for an account with [openweathermap.org](https://openweathermap.org) and obtain an API key, which you'll use when creating your AJAX requests for data.
>
> **[4:56](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=296)** So let's set that up now.
>
> **[4:58](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=298)** [Openweathermap.org](https://Openweathermap.org) makes weather information available under a creative commons license.
>
> **[5:03](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=303)** Data is free for up to 60 requests a minute, which will work fine for this course.
>
> **[5:08](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=308)** It's only more intensive uses that require a paid subscription.
>
> **[5:11](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=311)** To get an API key, go to [openweathermap.org](https://openweathermap.org) in your browser.
>
> **[5:15](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=315)** Then in the menu, click API.
>
> **[5:19](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=319)** This documents the terms as well as endpoints you can hit with your AJAX requests.
>
> **[5:24](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=324)** Click the API key link.
>
> **[5:27](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=327)** And then on the page that opens, click the sign up button and in the Create New Account box, you're going to create a unique username And I'm going to use closurescourse, going to enter an email address, and then you're going to enter a password of at least eight characters in both boxes.
>
> **[5:57](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=357)** And you can read the terms of service and the privacy policy, and then check this box.
>
> **[6:04](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=364)** I'm going to opt out of receiving emails.
>
> **[6:07](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=367)** I am not a robot.
>
> **[6:09](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=369)** And then I click Create Account.
>
> **[6:12](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=372)** And so there's a question here.
>
> **[6:14](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=374)** I'm just going to cancel out of that.
>
> **[6:17](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=377)** Next, a page opens showing you information about your account.
>
> **[6:22](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=382)** And here in the menu, I'm going to click the API keys tab.
>
> **[6:28](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=388)** So down here under the key heading is an alphanumeric string, which is your API key.
>
> **[6:34](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=394)** And that's going to identify your account when you make a request to the OpenWeatherMap API.
>
> **[6:40](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=400)** So I'm going to select this value and I'm going to copy it to the clipboard.
>
> **[6:45](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=405)** And then I want to put it somewhere I can access it easily, and I'm on a Mac, so I'm going to open up the Notes app, and I'm going to create a new Note.
>
> **[6:54](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=414)** I'm going to type open weather map API key, and then paste it in.
>
> **[7:01](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=421)** And so that's my OpenWeatherMap API key.
>
> **[7:04](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=424)** Now the key you'll see me using in the videos for this course has been deactivated.
>
> **[7:08](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=428)** So it's important that you use your own key because this one won't work.
>
> **[7:13](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=433)** Now, whenever you need access to your API key during this course, you can just go back to the note you created, copy the text of the key and continue coding.
>
> **[7:22](https://www.linkedin.com/learning/javascript-closures/environment-setup-and-exercise-files-14367407?u=76281980&t=442)** Now, let's get started.

> [!info]- Semantic Content
>
> **Env Vars:** api (13), http (2), ajax (2), html (1), npm (1)
> **CLI Commands:** make (3), node (3), npm (3), sudo (3)
> **Tools:** visual studio (3), firefox (1), safari (1), sublime (1), atom (1)
> **Prerequisites:** install (7), you'll need (2), set up (1)
> **Code Keywords:** this, (2), require (2), let (2), finally, (1), continue (1)
> **URLs:** [openweathermap.org](https://openweathermap.org) (5), [nodejs.org](https://nodejs.org) (1)
> **UI Navigation:** go to (2), in the menu (2), select the (1), open the (1)
> **Definitions:** is a  (4), is an  (2)

#### Using CoderPad challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=0)** - [Instructor] This course on JavaScript closures include some code challenges that use the CoderPad environment.
>
> **[0:06](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=6)** So let's take a quick look at that workspace.
>
> **[0:09](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=9)** So in the top left, you have Instructions.
>
> **[0:11](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=11)** Here, those are hidden.
>
> **[0:12](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=12)** At the bottom left, you have Console Output, and that's going to be the result when you actually try out an answer.
>
> **[0:18](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=18)** Now at the top right, you have the code that you're starting with and the code that you work with during your challenge.
>
> **[0:25](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=25)** And the bottom right shows some test code, and this is what's going to run against the code that you write in the Answer section.
>
> **[0:32](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=32)** Now also notice that the Answer section includes a couple constants, Show Expected Result and Show Hints, that you can change to True if you want to see results or if you want to see hints.
>
> **[0:41](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=41)** So let's try this out, and I'm going to start by just saying return numbers.
>
> **[0:47](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=47)** So an obviously false answer, so it's not going to work.
>
> **[0:51](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=51)** And when I click the Test My Code button to try that out, I get the feedback that says some of this failed.
>
> **[0:57](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=57)** So you get that feedback, and then you can go back and you can keep working on your answer.
>
> **[1:01](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=61)** Keep refining that, keep thinking about it, and try it again.
>
> **[1:04](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=64)** So instead of returning numbers here, if I say Math.max numbers(...numbers), and now when I test my code, and so I pass the test here and I can confirm that I did this right.
>
> **[1:21](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=81)** There's a challenge at the end of each chapter.
>
> **[1:23](https://www.linkedin.com/learning/javascript-closures/using-coderpad-challenges?u=76281980&t=83)** Have fun with them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (1)
> **Speakers:** - [instructor] (1)


### 2. 1. Building Blocks of Closures

#### Local and global scope
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=1)** - [Instructor] The first building block of closures is scope.
>
> **[0:04](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=4)** Scope is a way of describing which variables are available in different contexts within an application.
>
> **[0:12](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=12)** JavaScript includes a few different types of scope.
>
> **[0:15](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=15)** For the purposes of creating a closure, two types of scope are important, global and local.
>
> **[0:22](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=22)** The main difference between these two scopes is whether a variable is created within a function or not.
>
> **[0:29](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=29)** Global scope describes the variables that an application has access to anywhere in the code.
>
> **[0:36](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=36)** Global variables are created outside of functions or blocks such as conditional statements or loops.
>
> **[0:43](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=43)** Global variables are most commonly declared at the start of the code.
>
> **[0:47](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=47)** Any statement in a JavaScript application has access to all of that apps' lobal variables.
>
> **[0:54](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=54)** In this code, the forecast variable is global so we can reference it anywhere in the code, including in the advise function.
>
> **[1:02](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=62)** Local variables on the other hand are not available everywhere.
>
> **[1:07](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=67)** A local variable is created within a function and is available only within that function.
>
> **[1:14](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=74)** Code outside of that function cannot access the variables value by referencing the variables name.
>
> **[1:20](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=80)** However, all global variables are available within a function because as we saw earlier, global variables are available absolutely everywhere within an app.
>
> **[1:32](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=92)** For instance, in this code, the forecast and tempC variables are created in the global scope, but the tempF variable is created within the advise function.
>
> **[1:44](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=104)** So it has local scope within that function.
>
> **[1:48](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=108)** This means that the tempF variable is available only within the advise function.
>
> **[1:53](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=113)** So if we tried to access it outside of the function, like on this last line, where we try to console.log(tempF) outside of the advise function, we would get an error because that locally scoped variable is not available outside the function.
>
> **[2:09](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=129)** You can think of a function as similar to a one-way mirror.
>
> **[2:14](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=134)** Code within the function can see out and access global variables, but code outside the function sees only the mirror, blocking any access to the variables declared inside.
>
> **[2:27](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=147)** The start files for this video are an app for a sports product company.
>
> **[2:31](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=151)** When a user enters a city or other location, the app looks up the local weather and suggests whether appropriate sports for teams, individuals, or all of these together.
>
> **[2:43](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=163)** Here in the script.js file, I want to add some new code.
>
> **[2:47](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=167)** Now that our app is live, we want to collect some information on how it's used.
>
> **[2:52](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=172)** And we're going to start by logging how many times a user clicks each of the buttons for the three categories of sports.
>
> **[2:59](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=179)** Later on, we need to write some code to connect to the backend and submit this information.
>
> **[3:04](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=184)** But for right now, we just want to capture it and verify that it's being recorded correctly.
>
> **[3:14](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=194)** I've already added an event listener down here on line 97 for an update clicks function whenever a button is clicked.
>
> **[3:23](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=203)** So here at the top of the file, I'll create a function called update clicks.
>
> **[3:34](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=214)** And this will take a single parameter from the event listener, which will be a reference to the click target so we'll call it menu.
>
> **[3:42](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=222)** And within the function, I'll start by adding a variable called clicks, whose value is going to be an empty object.
>
> **[3:52](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=232)** Because this is in a function, that clicks variable has local scope, local to the update clicks function, and it's not available outside of this function.
>
> **[4:02](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=242)** And then I'm going to create a variable called button and set its value to menu.id, which is the ID value of the element that was clicked.
>
> **[4:13](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=253)** This is going to be useful for us.
>
> **[4:14](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=254)** And then I'm going to set a new key value pair in the clicks object using clicks[button] as the key because those ID values correspond to the labels of the buttons as well.
>
> **[4:28](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=268)** So they're ideal to use as keys in our object to store clicks for each button.
>
> **[4:33](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=273)** And after the equal sign, I'm going to set this two clicks[button] + 1.
>
> **[4:43](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=283)** But if that key doesn't exist yet, this will be undefined and this math won't work.
>
> **[4:47](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=287)** So I'll add an or, || and 1 to set the value to one otherwise.
>
> **[4:54](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=294)** Now, before we test this out, we have to make sure that we replace the placeholder here, API key, with the actual API key value.
>
> **[5:01](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=301)** So over in my note, I'm going to copy my API key.
>
> **[5:05](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=305)** I'm going to paste that in here.
>
> **[5:08](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=308)** And I'll save my work.
>
> **[5:10](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=310)** And at the command line, I am in the start files for video 01_01.
>
> **[5:15](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=315)** So I'm going to start my HTTP server.
>
> **[5:19](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=319)** I'm going to set it to port 3000.
>
> **[5:25](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=325)** And then in my browser, I'm actually going to go to local host 3000 and I'll enter Boston in that box, click the get forecast button, and we get the forecast.
>
> **[5:40](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=340)** And then I will click these buttons a few times.
>
> **[5:44](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=344)** So hopefully we'll log a few clicks in our object.
>
> **[5:47](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=347)** And then I'm going to open the console and the fave icon didn't load, that's fine.
>
> **[5:53](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=353)** And I'm going to close this little update down here.
>
> **[5:56](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=356)** And then I want to check the value of that clicks object that hopefully all those clicks have been being added to.
>
> **[6:02](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=362)** So I'll type that, and it says clicks is not defined.
>
> **[6:05](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=365)** So returning to our code, let's think about why that might be.
>
> **[6:08](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=368)** So we already said that clicks is a local variable to the update clicks function.
>
> **[6:13](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=373)** So because of that, once the function returns at the very end, the rest of my code doesn't have access to the clicks variable.
>
> **[6:22](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=382)** So instead of trying to log that value from the global scope in the console where I don't have access to it, what if I instead add a console.log statement within the function itself, that way we know the variable exists when the statement runs.
>
> **[6:36](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=396)** So before the end of the update clicks function, I'll add a console.log and I will just log clicks.
>
> **[6:46](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=406)** And then I'll save my work.
>
> **[6:49](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=409)** I'll go back to the browser and I will reload.
>
> **[6:56](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=416)** And this time we'll enter Mumbai, get the forecast and I click team, and they're in the console, I see my clicks value containing the key team and a value of one.
>
> **[7:11](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=431)** So far so good.
>
> **[7:12](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=432)** Now I'll click solo and I get another statement log to the console, but now my object still has only one key, but it's solo.
>
> **[7:22](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=442)** And we find that no matter how many times we click, we only ever see a key with a value of one for the most recent click.
>
> **[7:31](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=451)** So what's going on now?
>
> **[7:34](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=454)** Well, going back to our code, let's think about what's happening in the update clicks function.
>
> **[7:40](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=460)** When we click a button, the function runs.
>
> **[7:43](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=463)** The clicks object is created.
>
> **[7:46](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=466)** A value is added to it.
>
> **[7:47](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=467)** It's logged to the console.
>
> **[7:49](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=469)** And then the function ends.
>
> **[7:52](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=472)** And when the function ends, the local variable is no longer used by any code in our app.
>
> **[7:57](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=477)** So it no longer exists either.
>
> **[7:59](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=479)** So the next time the function runs, the object is recreated with an empty value and we start over again.
>
> **[8:06](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=486)** This is clearly not what we want.
>
> **[8:08](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=488)** We want a running tally.
>
> **[8:11](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=491)** Well, remember our two way mirror.
>
> **[8:13](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=493)** Code in a function can see out accessing global variables, but code outside of function can't see in to access local variables within the function.
>
> **[8:23](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=503)** So how could we use scope to fix our function here?
>
> **[8:27](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=507)** One way would be to move the clicks variable definition outside of the update clicks function.
>
> **[8:34](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=514)** This means it stays around even after the update clicks function has finished running, but the code within the function can still access this variable from the global scope.
>
> **[8:44](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=524)** So I'm going to cut and paste the let clicks statement outside of the update clicks function.
>
> **[8:54](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=534)** And then I'm going to save my code.
>
> **[8:57](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=537)** I'm going to go back and reload my browser, and I will enter a Mumbai again.
>
> **[9:07](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=547)** And now I click team and they get that log in my object in the console.
>
> **[9:13](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=553)** Click solo and now that's added to the object rather than replacing the existing object.
>
> **[9:20](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=560)** I click all and that's added as well.
>
> **[9:22](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=562)** And now when I click team again, the value updates to two.
>
> **[9:26](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=566)** So each new click is added to the ones that were there before.
>
> **[9:29](https://www.linkedin.com/learning/javascript-closures/local-and-global-scope-14366909?u=76281980&t=569)** And that's because the variable is not deleted after each time the function runs and that's because the variable is outside the function in the global scope.

> [!info]- Semantic Content
>
> **Code Keywords:** function (40), let (3)
> **Code Identifiers:** tempf (3), tempc (1)
> **Env Vars:** api (3), http (1)
> **Definitions:** is a  (2), means that (1)
> **Analogies:** such as (1), for instance (1), similar to (1)
> **CLI Commands:** make (1), find (1)
> **Cross-References:** as we saw (1), go back to (1)
> **UI Navigation:** go to (1), open the (1)

#### Nesting functions
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=0)** - [Instructor] Another building block of closures is nested functions.
>
> **[0:04](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=4)** In functional programming, we often work with a set of independent functions.
>
> **[0:09](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=9)** In object-oriented programming, we work with individual functions as methods of an object.
>
> **[0:15](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=15)** In order to create a closure though, we nest functions, declaring a function within another function.
>
> **[0:22](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=22)** We refer to the nested function as the inner function or the child function.
>
> **[0:27](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=27)** We refer to the function the inner function is nested within as the outer function or the parent function.
>
> **[0:34](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=34)** A function name has scope, just like a variable name.
>
> **[0:39](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=39)** So creating a function within another function means that the inner function has local scope and is not available outside of the outer function.
>
> **[0:51](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=51)** So in the script.js start file for this video, I'm building out our function that stores and updates the number of times an interface button has been clicked.
>
> **[1:00](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=60)** And right now, my code logs the state of the clicks variable after each click but I'd like my code to be a little more organized.
>
> **[1:08](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=68)** So for organizational purposes, I'm going to create a nested function within the updateClicks function.
>
> **[1:20](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=80)** I'll call that reportClicks.
>
> **[1:24](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=84)** And in it, I'm going to create a new variable called report whose value is an array referencing the button variable, which is the ID of the element that was just clicked and the clicks variable.
>
> **[1:46](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=106)** And then I can move my console.log statement inside my new nested function, and I can use the ES6 spread operator to log both elements of the report array.
>
> **[2:01](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=121)** So I'll say ...report, and that will log both of the elements in the report array.
>
> **[2:08](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=128)** And then finally, outside of the nested function, but still within the updateClicks function, I'll call that nested function.
>
> **[2:16](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=136)** So we'll call reportClicks.
>
> **[2:19](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=139)** And so now reportClicks is my nested function, my inner function, and my outer function is updateClicks.
>
> **[2:26](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=146)** And from JavaScript's scoping rules, we know that the variables of the outer scope are available within any nested scope.
>
> **[2:34](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=154)** So the reportClicks function has access to the button variable that's defined in the outer function, updateClicks.
>
> **[2:41](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=161)** And both functions have access to the clicks variable, which is defined in the global scope.
>
> **[2:45](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=165)** So I'll save my changes.
>
> **[2:48](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=168)** I have my API key.
>
> **[2:49](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=169)** And I have my document loaded in the browser.
>
> **[2:56](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=176)** I will enter Sydney as the city.
>
> **[3:00](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=180)** Get the forecast.
>
> **[3:03](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=183)** And then as I click each button, I see the ID of the button clicked, as well as the full updated clicks object.
>
> **[3:12](https://www.linkedin.com/learning/javascript-closures/nesting-functions-14367404?u=76281980&t=192)** So this code leverages nested functions and nested local scopes to add a little more detail to our logs while keeping our code organized.

> [!info]- Semantic Content
>
> **Code Keywords:** function (26), interface (1), finally, (1)
> **Code Identifiers:** updateclicks (4), reportclicks (4)
> **Env Vars:** es6 (1), api (1)
> **File Paths:** script.js (1)
> **Definitions:** is an  (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Return a value from an inner function
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=1)** - [Instructor] The third and final building block of closures is returning a value from a function.
>
> **[0:06](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=6)** And in particular, returning a reference to an inner function.
>
> **[0:10](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=10)** Whatever a function does, it mainly affects the app that it's part of by returning a value.
>
> **[0:16](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=16)** Data goes in, and the data that comes out has been transformed in some way by the function.
>
> **[0:22](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=22)** For instance, this function takes in data in the form of the base and tax parameters.
>
> **[0:28](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=28)** It then uses those parameters in a calculation, that calculation results in a new value stored in the total variable.
>
> **[0:38](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=38)** And finally, it returns this new value as the result of the function execution.
>
> **[0:45](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=45)** In our updateClicks function, instead of simply calling report clicks at the end of the function, we can instead return a reference to the reportClicks function.
>
> **[0:55](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=55)** And this has a few positive effects.
>
> **[0:57](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=57)** First off, remember that including parentheses after a function name always calls the function, and that's not what we want to do here.
>
> **[1:05](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=65)** Instead, we want to return just the function name as the value, by returning this inner function, reportClicks, it can be called at a later time at the place in our code where it's being returned.
>
> **[1:20](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=80)** Now, outside of our updateClicks function, we'll create a variable, I'll use the "const" keyword.
>
> **[1:27](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=87)** The variable will be called "report."
>
> **[1:30](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=90)** And its value will be the result of calling updateClicks.
>
> **[1:36](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=96)** Because updateClicks returns a function, the "report" variable stores a reference to that inner function.
>
> **[1:45](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=105)** And to make that inner function work, we'll have to make a couple tweaks to our code.
>
> **[1:50](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=110)** The value of the "button" variable will have to be determined when the report function is called, which corresponds to the inner reportClicks function.
>
> **[2:01](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=121)** We have to move the code that sets the value of "button" within the inner function.
>
> **[2:08](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=128)** It's best practice to instantiate the variable just once, so we'll change the "let button" statement in the updateClicks function to just declare the variable, but not set the value.
>
> **[2:20](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=140)** Then, in the reportClicks function, we'll set the value of "button" to menu.id, which will still correspond to the ID of the button that was clicked.
>
> **[2:34](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=154)** And we can simplify our code even further by consolidating these final two statements.
>
> **[2:39](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=159)** Instead of creating a variable and then logging it out, we'll simply just console.log, the "button" variable, and the "clicks" variable.
>
> **[2:51](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=171)** And we'll take this other variable out of here.
>
> **[2:57](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=177)** Then we'll also move the line that sets the value of clicks[button], and we'll move that within our inner function after we assign a value to the "button" variable.
>
> **[3:09](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=189)** Because this statement has to be evaluated when the report function, the inner function, is called.
>
> **[3:16](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=196)** And then, we also need to move the parameter from the outer function, which we've been calling so far to the inner function, which will effectively be calling when we return it.
>
> **[3:28](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=208)** I'm going to cut "menu" from updateClicks, and I'm going to paste it in as the parameter for reportClicks instead.
>
> **[3:35](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=215)** And then finally, we have to go down to the event listener, which is in line 111, and change updateClicks to "report" as the function to call in response to a click on one of the buttons.
>
> **[3:53](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=233)** And we save and then reloading in the browser, and we're going to test, is Omaha.
>
> **[4:02](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=242)** We have a forecast, and when we click buttons, we get those same results.
>
> **[4:08](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=248)** We've done some pretty fancy code reorganization, but without any particularly concrete results.
>
> **[4:15](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=255)** Switching back to the code, there's one more thing we can do that's pretty useful.
>
> **[4:20](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=260)** We can move the "clicks" variable into the updateClicks function.
>
> **[4:31](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=271)** Close up the spaces there.
>
> **[4:33](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=273)** Now, originally we kept that as a global variable, so its state would persist between each time the updateClicks function was called.
>
> **[4:43](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=283)** But now let's save and we'll reload in the browser, test with Omaha, click some buttons.
>
> **[4:52](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=292)** And we still get the same behavior, so that "clicks" value is persisting.
>
> **[5:00](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=300)** How is this working? Well, looking at our code, the updateClicks function is returning the inner function, reportClicks.
>
> **[5:09](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=309)** And reportClicks has its own scope and also has access to the local variables of its parent function, updateClicks.
>
> **[5:18](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=318)** Now, normally when a function returns, it's done executing and all of its values, including variables, are garbage collected by the parser and are no longer available.
>
> **[5:29](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=329)** But because updateClicks returns a reference to an inner function that has access to its local variables, when updateClicks returns, its references are not resolved, they remain in memory.
>
> **[5:42](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=342)** And the reference to those variables that we've returned from the function in the form of the "report" function is called a closure.
>
> **[5:51](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=351)** One of the advantages of a closure, which we can see right here in this code, is that we've removed clicks from the global scope.
>
> **[5:58](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=358)** And that has a couple benefits, one is just supporting the basic practice of keeping variables out of the global scope as much as possible.
>
> **[6:08](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=368)** If we were working with several different variables here, instead of just one, and we were able to move them all out of the global scope, that would be a significant benefit.
>
> **[6:18](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=378)** And the other thing is that even though our "clicks" variable is still available to our app, and we can work with its value, it's available only through our closure, through the "report" function.
>
> **[6:32](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=392)** And this means that it's somewhat protected.
>
> **[6:35](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=395)** If we're building out this code later, or another developer is working on it, we can't simply write code to change this variable because only the "report" function has access to it.
>
> **[6:46](https://www.linkedin.com/learning/javascript-closures/return-a-value-from-an-inner-function-14372074?u=76281980&t=406)** Closures have concrete benefits to our code base in terms of organization and protecting variables.

> [!info]- Semantic Content
>
> **Code Keywords:** function (39), finally, (2), let (2), const (1), protected (1)
> **Code Identifiers:** updateclicks (13), reportclicks (7)
> **Definitions:** is called (3), means that (1)
> **CLI Commands:** make (2)
> **UI Navigation:** click on (1)
> **Analogies:** for instance (1)
> **Best Practices:** best practice (1)
> **Speakers:** - [instructor] (1)

#### Create parallel closures
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=1)** - [Tutor] Even though the ability to return a closure can be helpful in code organization, this feature of JavaScript wouldn't necessarily be very powerful if a function could return only a single reference.
>
> **[0:12](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=12)** If I wanted to reuse the same function elsewhere in my application, but had all of my uses referencing the same closed over values, my code would quickly become redundant and harder to maintain.
>
> **[0:25](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=25)** Fortunately, this is not how closures work.
>
> **[0:28](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=28)** In fact, one of the super powers of a function that creates a closure is that it can create references to multiple closed over variables that are independent of each other.
>
> **[0:40](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=40)** Let's explore this in our code.
>
> **[0:43](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=43)** We have a function that creates a closure to log clicks on the buttons at the top of the app.
>
> **[0:49](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=49)** But how about if we want to reuse this function to also log each time a user moved the mouse over one of the items in the product gallery further down the page?
>
> **[0:59](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=59)** So in the browser, scrolling down to the products section and let's dig into one of those gallery elements.
>
> **[1:08](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=68)** I'm going to right click here and click inspect.
>
> **[1:14](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=74)** And so notice that these items do not have ID values like the buttons do.
>
> **[1:19](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=79)** And this means we're going to have to abstract out our code a little bit so we can instead pass in values that aren't ID values.
>
> **[1:27](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=87)** So first off, we'll replace the parameter name menu with a more generic name and we'll use item.
>
> **[1:34](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=94)** And then we'll take out that button variable and we'll take out the code that sets the value of the button variable as well.
>
> **[1:44](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=104)** And then we'll change all three references from button to reference the item parameter instead.
>
> **[1:49](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=109)** So here it's going to be clicks item, here it's going to be clicks item and here we're going to reference item, comma clicks.
>
> **[1:59](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=119)** And then instead of creating a simple report function down in line 12, we want to create two distinct report functions, one for the activities buttons, and another for the product gallery.
>
> **[2:11](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=131)** So I'll rename that existing variable to report activities, and then we'll create another statement using const to create a variable called report products and set its value to update clicks as well.
>
> **[2:34](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=154)** So now I'll have two functions whose values are both equal to the report clicks function that's returned from calling update clicks.
>
> **[2:43](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=163)** And then scrolling down to the bottom of the file, we need to update the event listener for the activity buttons.
>
> **[2:49](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=169)** First, we need to change the reference to the report function to call the report activities function instead.
>
> **[2:59](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=179)** And we need to pass the ID value of the element that was clicked.
>
> **[3:03](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=183)** So instead of event.target, we're going to use event.target.id.
>
> **[3:10](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=190)** Now we also want to create an event listener for the items in the product gallery.
>
> **[3:15](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=195)** They don't currently have an event listener because their visual effects are created with pure CSS.
>
> **[3:20](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=200)** So, we'll add a document dot query selector all and we'll select .productimage.
>
> **[3:30](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=210)** And then we'll use for each adding function and grabbing that element so that we can add an event listener to each one of those elements.
>
> **[3:40](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=220)** So el.addeventlistener, we're going to listen for the mouse enter event, and we're going to specify an anonymous function, also captures an event and we'll use this anonymous function to call our second new function report products.
>
> **[4:04](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=244)** And here we want to pass in the text of the H three element, that's a sibling of the image that we're binding the event to.
>
> **[4:11](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=251)** And we can get that by grabbing the event object, and using the target property, specifying the next elementsibling.textcontent.
>
> **[4:28](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=268)** And then on the next line, just adding that final parameter false, adding our semi-colon there on line 117.
>
> **[4:37](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=277)** So this is going to pass a unique text string that identifies the gallery item that the mouse has just entered.
>
> **[4:43](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=283)** And then scrolling up to lines 12 and 13, we might think that because we're getting two references to the same variables, we're going to get one big object that's got all our data mixed up in it, which is not what we want, but it turns out that's not how closures work.
>
> **[5:01](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=301)** So we'll save our work, we'll reload in the browser, and I'll enter Boston and we'll test our activities, and so far so good.
>
> **[5:13](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=313)** We get the same object in log statements that we're used to.
>
> **[5:17](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=317)** And then scrolling down to the gallery, I'll just start moving the mouse around and notice I have an object being logged, showing the text of these different headers, but I don't see anything that references the buttons above.
>
> **[5:30](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=330)** And then moving back up to the top and clicking the buttons again, and the object being displayed here, doesn't contain any of the gallery headings.
>
> **[5:38](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=338)** So we have references to two entirely different variables.
>
> **[5:43](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=343)** And so closures enable us to create not just a single set of private variables, but as many distinct references to copies of those private variables as we want.
>
> **[5:53](https://www.linkedin.com/learning/javascript-closures/create-parallel-closures-14366907?u=76281980&t=353)** And this means we can keep our code dry using a single function to return as many references as we need to reuse the same code within an app.

> [!info]- Semantic Content
>
> **Code Keywords:** function (14), pass (4), let (2), private (2), super (1)
> **Env Vars:** css (1)
> **Speakers:** - [tutor] (1)

#### Solution: Create a closure using a nested function
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/solution-create-a-closure-using-a-nested-function?u=76281980)


### 3. 2. Creating and Using Closures

#### Implement the module pattern
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=1)** - [Instructor] One of the main places that closures can be used in JavaScript is to create modules.
>
> **[0:06](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=6)** The idea of a module is to encapsulate a set of code and expose just a subset of properties and methods for working with it.
>
> **[0:14](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=14)** A module keeps some values totally protected while providing access to others in specific ways through its methods.
>
> **[0:22](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=22)** Another advantage of using a module is that it avoids polluting the global namespace.
>
> **[0:28](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=28)** All methods and properties are replaced with a single name, the name of the module.
>
> **[0:33](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=33)** The code to create a module returns an object.
>
> **[0:37](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=37)** The methods within that returned object contain closures and the code that returns the object uses an IIFE so it's invoked immediately when the JavaScript code is parsed.
>
> **[0:50](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=50)** The return value is assigned to a variable.
>
> **[0:53](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=53)** You can then access the methods of the returned object using the name of the variable, which becomes the name of the module.
>
> **[1:01](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=61)** In the code for this video, in addition to the function at the top of the script.js file, we have a number of variables and a few functions further down in the code.
>
> **[1:14](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=74)** I'm going to leave the code at the top alone.
>
> **[1:17](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=77)** This is what logs events.
>
> **[1:19](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=79)** If we were putting more work into this app, we'd probably want to abstract that into another file so we could use it in different pages and apps.
>
> **[1:28](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=88)** So starting here on line 14, I'm going to add a new variable called list widget, and I'll use const, and this is going to store the object that will make up the module.
>
> **[1:40](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=100)** So the value of this variable is going to be an IIFE.
>
> **[1:45](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=105)** And so I'll start my IIFE, paren function, empty parens and then an opening curly brace.
>
> **[1:53](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=113)** I'm going to take out that closing syntax and starting on line 15, I'm going to go all the way down to line 89.
>
> **[2:00](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=120)** I'm going to indent all that just inside of the IIFE and then add a new line on 90.
>
> **[2:06](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=126)** I'm going to close my function.
>
> **[2:08](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=128)** I'm going to close my IIFE and then I'm going to add an additional set of parens at the end to invoke that function and a semi-colon to finish it all off.
>
> **[2:19](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=139)** So that creates the IIFE.
>
> **[2:21](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=141)** And now I need to actually export some properties and methods.
>
> **[2:26](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=146)** And so examining my code, I have a few properties and methods that need to be accessed outside of the module.
>
> **[2:35](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=155)** The URL and the API key are accessed outside of the module and the event listeners, but the activities and the state and the category variables are not, they're only accessed inside the module so they don't need to be exported.
>
> **[2:49](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=169)** And then all three functions within the module needs to be exported as well.
>
> **[2:55](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=175)** So I'm simply going to create a return statement and set its value to an object that includes the code for the variables and functions I want to export.
>
> **[3:07](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=187)** And so I'm going to add a new line after the category variable, simply going to be a return statement and the value to return is going to be an object.
>
> **[3:15](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=195)** So I'll take out that closing curly brace for the object.
>
> **[3:18](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=198)** And then again, I'm going to indent lines 26 all the way through 90.
>
> **[3:25](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=205)** And then after line 90, add one more new line, close my object, add an ending semi-colon.
>
> **[3:34](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=214)** And now I notice I have some red squigglies and that's because I need to convert the contents of the object to use object notation instead of variable names.
>
> **[3:43](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=223)** So here in 26, instead of using a let keyword, I need to use a colon and replace that semi-colon with a comma.
>
> **[3:59](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=239)** And then the same thing for API key.
>
> **[4:06](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=246)** For update activity list.
>
> **[4:14](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=254)** And update activity lists starts on line 28.
>
> **[4:17](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=257)** Can follow that indent all the way down to line 67, where I need to put a comma.
>
> **[4:22](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=262)** And then again, with update UI success, colon function, and follow that down to line 87 comma, and then finally update UI failure.
>
> **[4:34](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=274)** Colon function, that ends on line 90.
>
> **[4:38](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=278)** We're all good, the red squiggles are gone, and then I need to do one final thing.
>
> **[4:44](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=284)** All five of these properties and methods are now keys within the list widget object.
>
> **[4:49](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=289)** So I need to change all the references outside of the module to reference the object name first.
>
> **[4:54](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=294)** So first down here in the fetch code in line 99, we've got the URL and that should reference listwidget.url, and I'm going to copy list widget dot.
>
> **[5:08](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=308)** So I also need to add that prefix to the reference to the API key, and then also the update UI success method of the list widget object and the update UI failure method.
>
> **[5:23](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=323)** And then in the next event listener, there's a reference to update activity list where I need to add that list widget prefix, and then up above in the code for update UI success, I have a referenced update activity list, and I'm going to change that reference to use the name of the object as well.
>
> **[5:43](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=343)** And so saving my changes.
>
> **[5:45](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=345)** I'm going to reload this in my browser.
>
> **[5:47](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=347)** Type Tokyo, click get forecast, and it works.
>
> **[5:53](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=353)** And all I'm looking for here is that the activity list functionality works because the module code didn't touch that logging function from the top.
>
> **[6:00](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=360)** So I get a successful API response.
>
> **[6:03](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=363)** If I click these buttons, my dom manipulation works.
>
> **[6:07](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=367)** So I've got the same functionality, but I've done two things.
>
> **[6:10](https://www.linkedin.com/learning/javascript-closures/implement-the-module-pattern-14372072?u=76281980&t=370)** I've taken variables and function names out of the global namespace and I've also organized my code.

> [!info]- Semantic Content
>
> **Code Keywords:** module (13), function (8), protected (1), abstract (1), const (1)
> **Env Vars:** iife (6), api (4), url (2)
> **File Paths:** script.js (1)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)

#### Avoid unintended closures
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=1)** - [Instructor] Although closures can be useful, sometimes we create closures in our code unintentionally and they cause the code to behave in unexpected ways.
>
> **[0:10](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=10)** In these cases, we need to rewrite our code to remove the unintended closures.
>
> **[0:15](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=15)** One of the classic places we see this is in a loop such as a for statement.
>
> **[0:21](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=21)** While the modern let and const keywords create block scope within a loop, the older and more widely compatible var statement does not.
>
> **[0:30](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=30)** Let's build out some code to examine the issues this can cause and how we can use our knowledge of closures to fix them.
>
> **[0:37](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=37)** The start files for this video are the website for a sports product company.
>
> **[0:42](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=42)** The design team has asked us to mock up a stopwatch animation as a sports-themed placeholder while the weather information is loading after users click the Get Forecast button.
>
> **[0:54](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=54)** And we'll start with something basic and leave off integrating it with the rest of the code until we get the green light from the design team.
>
> **[1:01](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=61)** So first, for testing purposes, we'll go down to the bottom of our file to the fetch code and we'll comment that out, so that's lions 99 through 105.
>
> **[1:13](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=73)** And this will let us test the animation without the weather forecast overwriting it.
>
> **[1:18](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=78)** Then right after the e.preventDefault statement on line 96, I'm going to add a function call for a new method of our module.
>
> **[1:26](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=86)** So that'll be listWidget.updateUIWorking.
>
> **[1:32](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=92)** And this will be a method that makes UI updates while the AJAX request is happening.
>
> **[1:37](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=97)** And then moving up to the module, on line 68 I'm going to add a new method called updateUIWorking.
>
> **[1:53](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=113)** It's going to be a function and I'll go ahead and add my closing comma online 70.
>
> **[1:58](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=118)** And I'm going to use a for statement to loop through some code to write a time to the dom and then update that regularly.
>
> **[2:05](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=125)** So for let i equals zero.
>
> **[2:10](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=130)** i is less than or equal to nine.
>
> **[2:15](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=135)** i plus plus.
>
> **[2:18](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=138)** And then I'll just run a setTimeout statement each time through the loop.
>
> **[2:24](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=144)** That's going to take an anonymous function.
>
> **[2:29](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=149)** And then in my setTimeout function, I'll grab document.querySelector .conditions and I'll set the inner HTML using a template literal.
>
> **[2:45](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=165)** So I'll create a p element with at class of animation and I'll give it text 00:00.
>
> **[2:56](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=176)** which is going to simulate that stopwatch.
>
> **[2:59](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=179)** And then I'll use dollar curly brace i to reference the current value of i and then I'll close the p element and add a closing semi-colon.
>
> **[3:13](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=193)** And then I need to add a time to my setTimeout statement.
>
> **[3:17](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=197)** And that will be 100 for a hundred milliseconds times i.
>
> **[3:23](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=203)** So every 1/10 of a second, I'll get an increase in the number.
>
> **[3:28](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=208)** And so this code is just a test that should take us from zero to nine.
>
> **[3:31](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=211)** So I'll save this.
>
> **[3:33](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=213)** I'll reload it in my browser and I can click the button without filling out the form because we've disabled the fetch code for the time being.
>
> **[3:40](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=220)** So I click that button and my counter shows up and counts from zero to nine.
>
> **[3:45](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=225)** So we can absolutely do this.
>
> **[3:47](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=227)** The font looks good.
>
> **[3:48](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=228)** Design might even like this.
>
> **[3:50](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=230)** So going back to our code, how about if we want to make our code a little more backward compatible and use var instead of let?
>
> **[3:57](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=237)** So on line 69, let's just change that let to a var, save our work, and we'll reload in the browser and just click the Get Forecast button again.
>
> **[4:09](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=249)** Now that's not right.
>
> **[4:12](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=252)** So the stopwatch just shows up at 10.
>
> **[4:16](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=256)** Doesn't do any counting.
>
> **[4:18](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=258)** And so that 10 is outside the bounds of our for-loop and we don't see any of the animation.
>
> **[4:23](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=263)** So what's going on here?
>
> **[4:25](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=265)** So first off, when that for statement runs even though we're setting a number of timeouts for the future, all of those loops execute right away.
>
> **[4:33](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=273)** So all the loops complete right away and the timers are set.
>
> **[4:37](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=277)** Now remember that a let statement can create block scope.
>
> **[4:41](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=281)** So when we were using let, each time through the loop the block had a variable that was scoped to that block.
>
> **[4:47](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=287)** So each timeout was set for 100 times the value of i when it was set.
>
> **[4:53](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=293)** Now unlike let, var does not create block scope.
>
> **[4:58](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=298)** So all of the setTimeout functions in our loops contain closures to the i variable in the parent scope.
>
> **[5:07](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=307)** So all the loops happen right away.
>
> **[5:09](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=309)** All the closures referenced the same value of i.
>
> **[5:13](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=313)** And when the looping is complete, i is equal to 10 and all of the closures are referencing it.
>
> **[5:20](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=320)** So they all display the final value of i which is 10.
>
> **[5:25](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=325)** Now we can eliminate the closures here so we can still use var for backward compatibility but ensure that each timeout has its own private i variable.
>
> **[5:35](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=335)** And to do that, we'll first enclose the setTimeout code within an inner function to create local scope.
>
> **[5:47](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=347)** And so I will put the closing brace for that function on a new line, 74.
>
> **[5:53](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=353)** Then I will indent those three lines of setTimeout code.
>
> **[5:59](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=359)** And then I'm going to make that inner function an iffy.
>
> **[6:03](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=363)** So I will close that in parens, add another set of parens at the end to immediately invoke it, and then I'm going to pass in the value of i as the argument for the iffy.
>
> **[6:16](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=376)** And then I'm going to give this new function a parameter of j.
>
> **[6:23](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=383)** And so that's going to take the value of i we pass in and assign it to this new locally-scoped parameter j.
>
> **[6:31](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=391)** Then I just need to change my reference from i to j, both in the template literal and in the time calculation.
>
> **[6:40](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=400)** And then if I save my work and go back and reload in the browser, click that button again, and now the countdown works like we expect to.
>
> **[6:52](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=412)** So each setTimeout function in our code takes advantage of the variable j in its parents scope to set a timeout based on a local scope rather than on the i variable that's shared among all iterations of the loop.
>
> **[7:07](https://www.linkedin.com/learning/javascript-closures/avoid-unintended-closures-14366910?u=76281980&t=427)** And so instead of each set out time function containing a closure to the i value in the parent scope, it instead references the unique j value in its new parent scope in the wrapper function we created.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (10), var (5), this. (3), module (2)
> **Code Identifiers:** settimeout (7), updateuiworking (2), preventdefault (1), listwidget (1), queryselector (1)
> **CLI Commands:** make (2)
> **Env Vars:** ajax (1), html (1)
> **Exercise Files:** template (2)
> **Ports:** :00 (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Use JS features in place of closures
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=1)** - [Instructor] In recent versions, JavaScript has added a few features that enable you to control scope without building closures.
>
> **[0:08](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=8)** ECMAScript 5 implemented the forEach method for arrays.
>
> **[0:13](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=13)** We can use this method instead of a for loop to iterate through an array.
>
> **[0:18](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=18)** Because forEach takes a callback function as its first argument, each time through the loop creates a separate local scope.
>
> **[0:25](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=25)** Essentially, the work of creating a closure is already built into this method.
>
> **[0:31](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=31)** So in the updateUIWorking method, we can recreate our stopwatch simulator using forEach instead of for to rewrite our code without a closure.
>
> **[0:41](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=41)** So I'm going to comment out that whole for loop.
>
> **[0:49](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=49)** Now, we use forEach with an array, so we need to start by putting the numbers we want to count through in an array and then referencing that.
>
> **[0:58](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=58)** So I'm going to create a variable called count, and that's an array of zero, one, two, three, four, five, six, seven, eight, and nine.
>
> **[1:10](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=70)** And this is just one way of going at it.
>
> **[1:12](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=72)** And then, we can simply say count.forEach, using the forEach method on the count variable, passing in an anonymous function, and using el to reference each array element as we iterate through the loop.
>
> **[1:27](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=87)** And then, I can create my setTimeout function, passing that an anonymous function, and I want to do that same DOM manipulation.
>
> **[1:44](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=104)** So I'll just copy that in from my earlier code, uncomment that.
>
> **[1:52](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=112)** Then, I have to change that j to reference el instead.
>
> **[1:58](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=118)** And then, finishing up my setTimeout.
>
> **[2:02](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=122)** Time is going to be 100 times el.
>
> **[2:05](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=125)** And so this is essentially replacing the outer function that our existing code used to avoid creating a closure.
>
> **[2:14](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=134)** So saving this, reloading the page in the browser.
>
> **[2:17](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=137)** And I do not need to enter anything in the text box because I have commented out the fetch code here.
>
> **[2:24](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=144)** So just clicking the button, and we get the animation just like we did before.
>
> **[2:27](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=147)** So the timer works just like it did.
>
> **[2:30](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=150)** ES6 gives us additional options by introducing block scope.
>
> **[2:35](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=155)** In modern browsers, using the let or const keyword creates a type of local scope, known as block scope, when it's used within curly braces other than a function, like within a for or if statement.
>
> **[2:47](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=167)** So for instance, when we're using a var statement within a loop to create a separate local scope each time, we have to code up a closure, but an alternative in ES6 is simply to change the var keyword to let, taking advantage of block scoping in the for block.
>
> **[3:03](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=183)** So I'm going to comment out the forEach code we just created, and then I'm going to uncomment the existing for.
>
> **[3:15](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=195)** I'm going to comment out the start and end of the nested function.
>
> **[3:21](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=201)** I'm going to change my js back to is, here and here.
>
> **[3:27](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=207)** And then, I'm going to change that var to let.
>
> **[3:33](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=213)** Saving that work, reloading the browser, clicking that button.
>
> **[3:38](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=218)** And again, the functionality is identical.
>
> **[3:41](https://www.linkedin.com/learning/javascript-closures/use-js-features-in-place-of-closures?u=76281980&t=221)** So using the let keyword saves us some extra work in a situation like this.

> [!info]- Semantic Content
>
> **Code Keywords:** function (7), let (4), var (3), this, (1), const (1)
> **Code Identifiers:** foreach (7), settimeout (2), updateuiworking (1)
> **Env Vars:** es6 (2), dom (1)
> **Analogies:** just like (2), for instance (1)
> **Definitions:** known as (1)
> **Speakers:** - [instructor] (1)

#### Solution: Create a module
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=0)** - [Instructor] Here's how I approach this.
>
> **[0:02](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=2)** Now I'm starting off with a constant, which is an object that contains a couple properties, and then I have a few functions to work with that object, one for updating the color value, one for updating the model value, and then one for returning the object.
>
> **[0:17](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=17)** And then at the bottom here, I have a shell called selection for my new module.
>
> **[0:23](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=23)** So I'm going to move these pieces of code into this module and then convert it.
>
> **[0:29](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=29)** So this constant needs to be inside the module as is.
>
> **[0:37](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=37)** No changes there.
>
> **[0:39](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=39)** And then I want to convert each of my existing functions into a method within an object.
>
> **[0:47](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=47)** So I'm going to be returning an object here.
>
> **[0:53](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=53)** And then within my object, I'm going to have these three methods, which are these functions.
>
> **[0:58](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=58)** So I'm going to cut and paste this code and then convert it into methods.
>
> **[1:05](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=65)** So it's no longer going to be function, just going to be updateColor, which is a function that takes new color.
>
> **[1:14](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=74)** I need a comma at the end of that.
>
> **[1:17](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=77)** And then I'm just going to use that same approach for the other two,
>
> **[1:35](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=95)** and now I've created a function that contains an object and returns three methods.
>
> **[1:45](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=105)** So the final step here in order to create a module, I want to convert my function to an IIFE.
>
> **[1:51](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=111)** And so I'm going to do an opening paren before the word function.
>
> **[1:56](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=116)** And then at the end here, I need the opening and closing parens to actually call the function.
>
> **[2:02](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=122)** And then I'm going to test my code, and I can see all three tests passed.
>
> **[2:07](https://www.linkedin.com/learning/javascript-closures/solution-create-a-module?u=76281980&t=127)** So I passed in a couple values into my object, and then when I actually called the getSelection method of my module, I got those values back.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), module (5), this. (1)
> **Code Identifiers:** updatecolor (1), getselection (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** iife (1)
> **Speakers:** - [instructor] (1)


### 4. Conclusion

#### Continuing to learn closures
> [LinkedIn Learning](https://www.linkedin.com/learning/javascript-closures/continuing-to-learn-closures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/javascript-closures/continuing-to-learn-closures?u=76281980&t=0)** - [Sasha] Thanks so much for joining me in this course.
>
> **[0:03](https://www.linkedin.com/learning/javascript-closures/continuing-to-learn-closures?u=76281980&t=3)** You now have a basic understanding of what a closure is in JavaScript, how to create one, and how it's used in common programming patterns.
>
> **[0:11](https://www.linkedin.com/learning/javascript-closures/continuing-to-learn-closures?u=76281980&t=11)** If you want more experience with writing Vanilla JavaScript code, check out App Building with Vanilla JavaScript.
>
> **[0:18](https://www.linkedin.com/learning/javascript-closures/continuing-to-learn-closures?u=76281980&t=18)** Feel free to connect with me online.
>
> **[0:21](https://www.linkedin.com/learning/javascript-closures/continuing-to-learn-closures?u=76281980&t=21)** Now, take your new skills and build something amazing.
>
> **[0:24](https://www.linkedin.com/learning/javascript-closures/continuing-to-learn-closures?u=76281980&t=24)** Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [sasha] (1)


## Instructor

- [[Sasha Vodnik]]

## Resources

- Exercise files available

## Skills Covered

- JavaScript

## Path Context

### In [[Become a JavaScript Developer]]
← [[JavaScript- Prototypes]] | **6 of 13** | [[JavaScript- Classes]] →

## Appears In

- [[Become a JavaScript Developer]]

## Related Courses

_Courses sharing skills:_

- [[End-to-End JavaScript Testing with Cypress.io]] — JavaScript
- [[Learning JavaScript Debugging]] — JavaScript
- [[Foundational JavaScript Security]] — JavaScript
- [[JavaScript- Test-Driven Development (ES6)]] — JavaScript
- [[JavaScript- Best Practices for Data]] — JavaScript

---

[↑ Back to top](#)