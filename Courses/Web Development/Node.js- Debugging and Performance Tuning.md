---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: node-js-debugging-and-performance-tuning
url: "https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning"
duration_minutes: 164
duration: 2h 44m
level: Intermediate
updated: 7/13/2018
learners: 112061
skills:
  - Performance Tuning
  - Node.js
exercise_files: true
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHbNVU0i38wEQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568665518619?e=2147483647&amp;v=beta&amp;t=4KUT7Pt4NBoyiPn5h96nThBUhLSncGdUW91AzRmRIiU"
linkedin_topic: Web Development
learning_paths:
  - Advance your Node.js Skills
path_count: 1
tags:
  - course
  - topic/web-development
  - skill/performance-tuning
  - skill/node-js
status: not-started
created: 2026-04-20
---

![Node.js: Debugging and Performance Tuning](https://media.licdn.com/dms/image/v2/C4E0DAQHbNVU0i38wEQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1568665518619?e=2147483647&amp;v=beta&amp;t=4KUT7Pt4NBoyiPn5h96nThBUhLSncGdUW91AzRmRIiU)

# Node.js: Debugging and Performance Tuning

> Node.js apps are known for their blazing-fast speed, but hard-to-find bugs and suboptimal processes can drag performance down. Isolating the problem in the stack can often grind productivity to a halt. In this course, Node.js developer Jon Peck shows how to debug and speed up your site as he walks through how to fix a complete—but flawed—rock-paper-scissors game. Jon shows how to log problems, deb

> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning) | 2h 44m | Intermediate | 112K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Jon Peck]]

## Resources

- Exercise files available

## Skills Covered

- Performance Tuning
- Node.js

## Table of Contents

### Introduction

#### The power of debugging and performance tuning
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=0)** - [Jon] Websites are wonderful until they're not.
>
> **[0:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=4)** As competition soars and attention spans dwindle, speed is king.
>
> **[0:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=9)** If your site is slow or buggy, your audience is gonna move on without looking back.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=15)** Performance and debugging are key to maintaining great and fast websites.
>
> **[0:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=19)** I love making a site perform.
>
> **[0:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=22)** I'm Jon Peck and I've been architecting and implementing large scale websites for over a decade.
>
> **[0:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=28)** In this course, we're gonna fix and speed up a complete but broken Rock, Paper, Scissors game.
>
> **[0:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=35)** We'll start by defining what types of problems can occur in a site, and how to measure progress.
>
> **[0:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=41)** We'll log site events in ways that are useful to engineers to prevent future problems.
>
> **[0:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=46)** Debug Node:js applications using a variety of techniques, including the built-in debugger.
>
> **[0:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=52)** Measure and profile site performance to find slow operations.
>
> **[0:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=56)** Finally, we'll discuss how to know what to optimize and options for speeding up your own applications.
>
> **[1:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=63)** I'm excited to share these methods for supercharging your site with you.
>
> **[1:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/the-power-of-debugging-and-performance-tuning?u=76281980&t=67)** So let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** node (1), find (1)
> **Code Keywords:** finally, (1), let (1)
> **Speakers:** - [jon] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=0)** - [Instructor] Let's discuss the skills you should have, before watching this course.
>
> **[0:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=4)** This is an intermediate Node.js and software engineering course.
>
> **[0:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=9)** It's intended for developers who have written a few Node.js and JavaScript applications.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=15)** If you've never written anything with Node.js, I recommend Node.js Essential Training in our library.
>
> **[0:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=22)** This course was written using the Node.js Long-Term Support version, which, as of this recording, is Node 8.
>
> **[0:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=30)** The content should be forwards compatible with newer versions of Node.js.
>
> **[0:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=35)** We're going to be installing some NPM packages globally.
>
> **[0:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=39)** If you run into any permission problems, please, read the NPM documentation chapter on fixing NPM permissions, on docs.[npmjs.com](https://npmjs.com).
>
> **[0:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=50)** The majority of the JavaScript code in this course uses the ECMAScript standard, also known as ES6.
>
> **[0:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=58)** If you're not familiar with ES6, or, you'd like a refresher, check out Switching to ES6 in Node.js in our library.
>
> **[1:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=66)** There is some ES7 syntax, specifically async and await, but that won't be our focus.
>
> **[1:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=74)** As this is a course on debugging and performance-tuning, we'll start with a barely functional Node.js application.
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=81)** The application we'll be working on is an implementation of rock, paper, scissors, a hand game for two people.
>
> **[1:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=88)** It features session storage, database persistence, form handling, routing, and even microservices.
>
> **[1:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=95)** As you can imagine, if something can go wrong, it will, and we'll work together to optimize and debug the app.
>
> **[1:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=102)** No prior knowledge of microservices is necessary, as we'll be exploring that topic in chapter two.
>
> **[1:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=109)** The applications uses Express.js, a minimalist Node.js framework.
>
> **[1:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=114)** If you haven't used Express before, or you need a refresher, check out [[Building a Website with Node.js and Express.js]], in our library.
>
> **[2:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=124)** Game data will be stored in a MySQL relational database.
>
> **[2:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=128)** We're not gonna be optimizing or debugging MySQL itself in this course.
>
> **[2:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=132)** Instead, we'll be focusing on handling the responses of services.
>
> **[2:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=137)** Therefore, the application will use Knex.js, a SQL query builder that simplifies database interactions with a Promise interface.
>
> **[2:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=146)** No experience with MySQL or Knex is required, and we're not gonna be debugging either of them.
>
> **[2:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=151)** But, if you'd like to learn more, check out [[Databases for Node.js Developers]] in our library.
>
> **[2:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=158)** As this is a course on debugging, and not on systems administration, I've included a Docker configuration to get MySQL up and running, with minimal effort.
>
> **[2:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=168)** We'll install and start everything together as part of the course, and instructions for turning it off are included.
>
> **[2:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=174)** No prior Docker experience is necessary for this course.
>
> **[2:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-you-should-know?u=76281980&t=178)** If you'd like to find out more, check out Learning Docker in our library.

> [!info]- Semantic Content
>
> **CLI Commands:** node (12), mysql (4), npm (3), docker (3), find (1)
> **File Paths:** node.js (11), express.js (2), knex.js (1)
> **Env Vars:** npm (3), es6 (3), es7 (1), sql (1)
> **Definitions:** is an  (2), is a  (2), known as (1)
> **Code Keywords:** let (1), async (1), await (1), interface (1)
> **URLs:** [npmjs.com](https://npmjs.com) (1)
> **Versions:** node 8 (1)
> **Analogies:** imagine (1)

#### Using challenges
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/using-challenges?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/using-challenges?u=76281980&t=0)** - [Instructor] This course includes several videos called Challenges.
>
> **[0:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/using-challenges?u=76281980&t=4)** Challenges are quick activities that give you a hands-on opportunity to practice and master what you're learning.
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/using-challenges?u=76281980&t=11)** I'll start each Challenge by describing your core objectives for the activity.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/using-challenges?u=76281980&t=15)** If the Challenge involves using any sample files I'll tell you where to find them.
>
> **[0:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/using-challenges?u=76281980&t=20)** I'll also give you a rough estimate of how much time it took me to complete the Challenge.
>
> **[0:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/using-challenges?u=76281980&t=25)** When you've completed a Challenge make sure to click the matching Solution Video.
>
> **[0:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/using-challenges?u=76281980&t=30)** In each Solution I'll show you how I solved the Challenge and give you some of my thinking along the way.
>
> **[0:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/using-challenges?u=76281980&t=36)** Challenges are a fantastic opportunity for you to master what you've been learning.
>
> **[0:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/using-challenges?u=76281980&t=40)** Have fun with them and reinforce your skills.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1), make (1)
> **Best Practices:** make sure to (1)
> **Speakers:** - [instructor] (1)

#### Configuring your development environment
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=0)** - [Instructor] Let's make sure that your development environment has everything that you need to follow along.
>
> **[0:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=5)** First, you'll need Node.js version eight or higher, the current long-term support version.
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=11)** Next, you'll need Docker, a containerization program.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=15)** We'll be using the free Community Edition from [docker.com](https://docker.com).
>
> **[0:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=19)** Please install it now if you don't already have it.
>
> **[0:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=23)** You'll need some sort of IDE or text editor.
>
> **[0:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=26)** I'm gonna be demonstrating using Visual Studio Code editor, available from code.[visualstudio.com](https://visualstudio.com).
>
> **[0:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=34)** Visual Studio Code is free, open source, and available on Windows, Mac, and Linux.
>
> **[0:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=40)** The use of Visual Studio Code is not required, but you'll be able to follow along with the feature demonstrations if you have it.
>
> **[0:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=48)** If you'd like to learn more, check out Learning Visual Studio Code in our library.
>
> **[0:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=54)** You're gonna need some sort of terminal application.
>
> **[0:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=57)** Any terminal will work, including [Terminal.app](https://Terminal.app) for Mac, and PowerShell for Windows.
>
> **[1:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=63)** The only requirement is that you must be able to execute Node.js from the terminal.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=68)** Visual Studio Code, the editor I'm going to be using to demonstrate, includes an integrated terminal, so I'll use it for cross-platform consistency.
>
> **[1:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=78)** Finally, you're going to need a modern web browser.
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=81)** For this course, I'm gonna be demonstrating using Google Chrome, available from [google.com/chrome](https://google.com/chrome).
>
> **[1:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=88)** Chrome is not required for this course, but there is one video that demonstrates debugging techniques using Chrome.
>
> **[1:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=94)** Beyond the software, if you have access to the exercise files for this course, you can download them to your desktop.
>
> **[1:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=101)** We'll start with a complete, but broken, rock-paper-scissors game written in Node.js.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=106)** Throughout, we'll make incremental changes to debug and tune up the application.
>
> **[1:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=112)** The exercise file structure reflects how the course progresses.
>
> **[1:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=116)** Within it are folders named for each chapter and video.
>
> **[2:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=120)** For example, we'll be setting up the application in chapter zero, video five, which will be in a folder named 00_05.
>
> **[2:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=128)** If there are no code changes in a video, then there won't be a folder.
>
> **[2:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=133)** Within each folder, there are two subfolders, begin and end, which contain the respective begin and end states of the code base.
>
> **[2:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=142)** To prepare, we'll copy the 00_05 begin folder and paste it on the desktop.
>
> **[2:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=148)** Then, we'll rename the folder to rock-paper-scissors.
>
> **[2:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=154)** This is where we'll work throughout the course.
>
> **[2:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=157)** Let's switch to the desktop and do it now.
>
> **[2:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=160)** From the desktop, navigate to the Exercise Files folder, then the 00_05 folder, and select begin.
>
> **[2:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=170)** Right-click and go to Copy.
>
> **[2:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=174)** You can close the folder, then right-click on the desktop and go to Paste.
>
> **[3:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=181)** Finally, right-click on the pasted folder and choose Rename, and rename it to rock-paper-scissors.
>
> **[3:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=194)** Our exercise files are ready to begin.
>
> **[3:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=196)** Let's open up Visual Studio Code.
>
> **[3:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=200)** Let's learn how to open up the terminal by taking the long way.
>
> **[3:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=203)** Navigate up to the view menu, then move down and select Integrated Terminal.
>
> **[3:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=211)** The terminal will open in the bottom of the window.
>
> **[3:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=213)** As you can imagine, there's a faster way.
>
> **[3:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=216)** Close the terminal by clicking the X in the upper right-hand corner of the terminal.
>
> **[3:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=221)** On your keyboard, press Control and backtick to open up the terminal.
>
> **[3:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=227)** That's a lot faster.
>
> **[3:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=229)** You can press Control + backtick again to close the terminal as well.
>
> **[3:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=234)** Open the terminal again by pressing Control + backtick, and this time we're really going to use it.
>
> **[4:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=240)** I'm going to verify that Node is installed, and then show the version number.
>
> **[4:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=244)** Type the command: node, space, dash v, and press Return.
>
> **[4:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=251)** I'm using 8.11.2, the long-term support version that was current during recording.
>
> **[4:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=257)** Let's see if npm is available as well.
>
> **[4:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=260)** Type the command: npm, space, dash v, and press Return.
>
> **[4:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=265)** I'm using 5.6.0, which is the version that was included with the LTS version of Node.
>
> **[4:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=272)** When complete, press Control + backtick to close the terminal.
>
> **[4:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=277)** We're gonna need some extensions to optimize the source code editor for Node.js development.
>
> **[4:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=282)** We're gonna be using ESLint for coding standards, EditorConfig for VS Code for configuring editor defaults, Node.js Modules Intellisense for autocompletion of packages, and npm for package.json support.
>
> **[4:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=298)** Let's install them now.
>
> **[5:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=301)** Back in Visual Studio Code, go to View, then go down to Extensions.
>
> **[5:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=308)** First, search for eslint, which integrates the popular linting engine.
>
> **[5:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=313)** I'm gonna be using ESLint 1.4.10.
>
> **[5:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=317)** Click Install.
>
> **[5:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=320)** Next, search for editorconfig, which will show EditorConfig for VS Code, which is at version 0.12.3.
>
> **[5:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=330)** Click Install.
>
> **[5:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=333)** Then search for node.js, and select Node.js Modules Intellisense, which is at version 1.5.0.
>
> **[5:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=343)** Click Install.
>
> **[5:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=347)** Finally, we'll need to search for npm, which is at version 0.3.4.
>
> **[5:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=355)** Click Install.
>
> **[5:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=357)** Now that all the extensions have been installed, let's reload the editor by clicking Reload to activate them.
>
> **[6:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=364)** We've got everything we need for our editor.
>
> **[6:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/configuring-your-development-environment?u=76281980&t=367)** Now that it's ready, let's take a look at our demo application.

> [!info]- Semantic Content
>
> **Tools:** terminal (14), visual studio (7), vs code (2), powershell (1)
> **CLI Commands:** node (10), npm (4), make (2), docker (2)
> **Code Keywords:** let (8), finally, (3), return. (2), switch (1)
> **Versions:** version 0 (2), 8.11.2 (1), 5.6.0 (1), 1.4.10 (1), 12.3 (1)
> **UI Navigation:** right-click (3), go to (3), switch to (1), navigate to (1), open the (1)
> **Prerequisites:** install (6), you'll need (3)
> **File Paths:** node.js (7), package.json (1)
> **Exercise Files:** exercise files (3), exercise file (1), source code (1)

#### Demo application tour
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=0)** - [Instructor] The application we'll be working on is an implementation of the game, rock, paper, scissors.
>
> **[0:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=7)** What's the game?
>
> **[0:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=8)** It's a simple two-player hand-gesture game that can be played in seconds.
>
> **[0:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=13)** There are five basic rules.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=15)** Rock breaks scissors, scissors cuts paper, and paper covers rock.
>
> **[0:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=22)** A tie is replayed.
>
> **[0:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=24)** In real life the players reveal their choice at the same time.
>
> **[0:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=29)** As an example, player one chooses rock and player two chooses scissors.
>
> **[0:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=35)** Rock breaks scissors and therefor player one is the winner.
>
> **[0:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=41)** In our web version, visiting the site creates a player that is stored in the session.
>
> **[0:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=45)** A player can create and join a game.
>
> **[0:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=49)** Once joined, a player can make their choice, rock, paper or scissors.
>
> **[0:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=55)** When both players make a choice the game is judged and the winner is revealed.
>
> **[1:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=60)** To build this application a few technologies were used.
>
> **[1:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=64)** Node.js or course is the programming language.
>
> **[1:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=67)** Express is used as the web application framework.
>
> **[1:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=70)** On the front end, Pug provided a simple web template and Bootstrap as a framework.
>
> **[1:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=77)** Finally, MySQL is used for persistent storage.
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=81)** To keep things focused I avoided some technologies that are commonly used in more robust applications.
>
> **[1:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=87)** For example there's no Ajax, this is just a simple HTML form based application.
>
> **[1:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=94)** There are no real time libraries like [Socket.IO](https://Socket.IO) because it's literally a course in itself.
>
> **[1:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=101)** Finally, there are no front-end JavaScript user interfaces like React or View.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=106)** There's nothing wrong with any of these it's just not the focus of a Node.js debugging and performance course.
>
> **[1:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=113)** I built the demo using a Microservice architecture which is a high-performance design pattern.
>
> **[1:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=118)** Before we start up the application I want you to understand what we're working on rather than just blindly typing commands.
>
> **[2:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=125)** Therefore, we'll discuss the architecture in depth and set up the application together in chapter two.
>
> **[2:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=132)** In the meantime, sit back for a moment and I'll take you through a brief tour of what we'll be working on.
>
> **[2:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=138)** This is a browser based game.
>
> **[2:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=141)** The home page lists both finished and available games.
>
> **[2:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=144)** At this time there aren't any.
>
> **[2:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=146)** Players are created at the same time as the session so all I need to do to start a new game is to click Start new.
>
> **[2:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=154)** I have three choices, Rock, Paper or Scissors.
>
> **[2:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=157)** I'm gonna choose Rock, so I'll click it.
>
> **[2:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=161)** The page reloads and I've chosen rock.
>
> **[2:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=164)** Since players are stored in the session I'm gonna open a guest instance and access the same page.
>
> **[2:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=170)** So I'll just copy the URL and go to New Incognito Window, and paste.
>
> **[2:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=178)** The other player cannot see their opponent's choice.
>
> **[3:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=181)** I'd like to play, so I'll click Join.
>
> **[3:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=185)** I have the same choices, I'm going to choose Paper because paper covers rock.
>
> **[3:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=191)** Excellent, I've succeeded in beating myself.
>
> **[3:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=195)** Ready to break the game?
>
> **[3:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=197)** It won't be hard, let's try to go to the game Fish.
>
> **[3:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=203)** Well, it just hangs, that's not good.
>
> **[3:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=207)** I'm gonna give up and just go Home.
>
> **[3:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=210)** Let's start a new game by clicking Start new.
>
> **[3:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=215)** This time I'm gonna start with a form by editing an element and changing the value to be fish instead of rock.
>
> **[3:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=226)** So the value is going to be fish, and we've update the label.
>
> **[3:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=235)** We'll click Fish, oh oo, it hung again.
>
> **[4:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=240)** If we wait long enough we'll get an error message from the browser.
>
> **[4:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=245)** We've got some pretty obvious problems here.
>
> **[4:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=247)** I can successfully play a game but the application hangs if I give it invalid input.
>
> **[4:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=252)** How can we find and fix the problems?
>
> **[4:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=255)** We've only scratched the surface of the problems lurking beneath this innocent little game.
>
> **[4:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/demo-application-tour?u=76281980&t=260)** Let's get started with Node.js to bugging and performance tuning.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), make (2), mysql (1), find (1)
> **Code Keywords:** let (3), finally, (2), new. (2)
> **File Paths:** node.js (3)
> **Definitions:** is a  (2), is an  (1)
> **Env Vars:** html (1), url (1)
> **UI Navigation:** go to (2)
> **Prerequisites:** before we start (1), set up (1)
> **URLs:** [socket.io](https://socket.io) (1)


### 1. Build a Troubleshooting Mindset

#### Finding what went wrong
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=0)** - [Instructor] Everybody wants a fast and reliable site.
>
> **[0:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=4)** Awesome, static HTML for everyone.
>
> **[0:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=7)** No moving pieces means almost nothing can break.
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=11)** However, we also want sites to actually do things.
>
> **[0:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=14)** So we turn to dynamic sites with scripting languages like Node.js.
>
> **[0:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=19)** This way, we can build wonderful, interactive sites.
>
> **[0:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=24)** Unfortunately, one of the risks of a dynamic site is that with more moving pieces comes more chances for error.
>
> **[0:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=32)** According to Steve McConnell in Code Complete, A Practical Handbook of Software Construction, the industry average experience is about one to 25 errors per 1000 lines of code for delivered software.
>
> **[0:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=44)** Errors happen, and that's normal.
>
> **[0:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=47)** The question is, what do we do about errors?
>
> **[0:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=50)** We can't just ignore the problem and hope it goes away.
>
> **[0:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=54)** This course's goal is to empower you to diagnose and fix quality and performance issues in Node.js sites.
>
> **[1:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=62)** We'll do this with a combination of theory, tools, and techniques.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=68)** In the first chapter, we're going to build a constructive troubleshooting mindset to use when dealing with problems that affect sites.
>
> **[1:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=75)** This way, we'll have a common theoretical background to practically apply throughout the rest of this course.
>
> **[1:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=82)** We'll start with the art of finding what went wrong, which includes how to frame your investigation.
>
> **[1:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=88)** Then, we'll look at how to effectively measure performance beyond just saying that the site's slow.
>
> **[1:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=94)** We'll compare different ways of documenting bugs, so we can communicate problems with others.
>
> **[1:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=99)** Finally, we'll learn what it takes to effectively resolve problems and why that's important.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=106)** When something goes wrong, our instinct is to blame.
>
> **[1:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=110)** Blame, when used as a verb, means to assign responsibility for a fault or wrong.
>
> **[1:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=115)** In the Oxford English Dictionary, the example even pins blame on the engineer for an accident.
>
> **[2:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=122)** Oh no, the site's slow, whose fault is it?
>
> **[2:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=125)** Let's find out.
>
> **[2:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=127)** It's the marketing team's fault, they wanted the analytics and they're slowing down the site.
>
> **[2:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=132)** It's the engineering team's fault, they didn't architecture the site correctly.
>
> **[2:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=136)** It's the users fault, because they're abusing the services.
>
> **[2:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=141)** Suddenly, the site's down.
>
> **[2:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=143)** Oh my, I know it wasn't me, so whose fault is it?
>
> **[2:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=147)** It's operation's fault, they didn't put the site in multiple data centers.
>
> **[2:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=151)** It's the host's fault, they didn't have backup power generators.
>
> **[2:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=155)** It's nature's fault, that thunder, snow, hurricane, flaming meteor wasn't on the Share Team Calendar.
>
> **[2:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=162)** Technically, all those statements could be true, but reality is more nuanced.
>
> **[2:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=168)** Marketing needs business intelligence and they use industry-standard tools that they're familiar with.
>
> **[2:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=174)** Engineering structure the site based on the incomplete requirements they received.
>
> **[2:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=179)** There wasn't any mechanism for detecting user abuse, rate limiting usage, or banning offenders.
>
> **[3:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=185)** The site is in multiple data centers due to geopolitical differences around user privacy.
>
> **[3:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=190)** The data center did have backup generators, but they hadn't been maintained and half of them failed.
>
> **[3:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=196)** And sometimes, a giant flaming meteor happens and it's not on the product roadmap.
>
> **[3:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=202)** The act of blaming is cathartic.
>
> **[3:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=204)** Directing or redirecting frustration feels good.
>
> **[3:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=207)** See, it's not my problem, it's theirs.
>
> **[3:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=210)** However, blame is harmful because everybody is at fault and it's a group responsibility.
>
> **[3:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=217)** Finger-pointing doesn't help.
>
> **[3:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=220)** Instead of blame, determine what went wrong as a constructive step when responding to a problem.
>
> **[3:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=226)** Unlike assigning blame, the goal is to resolve the cause of the problem, so they don't happen again.
>
> **[3:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=232)** This is a shared responsibility.
>
> **[3:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=235)** Marketing should review how they're using their tools.
>
> **[3:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=238)** Engineering should find a more flexible architecture for serving content.
>
> **[4:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=242)** User activity should be more appropriately monitored for abuse and a mechanism should be built to handle it.
>
> **[4:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=249)** The legal and the business teams need to find common ground on user privacy in order to comply with local regulations.
>
> **[4:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=255)** The data center needs to maintain their backup systems.
>
> **[4:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=259)** And giant meteors should be planned for, within reason of course.
>
> **[4:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=264)** In order to investigate effectively, you need reporting and quantifiable data.
>
> **[4:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=269)** Where do you go for this?
>
> **[4:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=272)** Well, what did the application log say?
>
> **[4:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=274)** Do you have logs?
>
> **[4:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=276)** Do the log messages give context about what's happening and how?
>
> **[4:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=280)** Can you find and trace the exact request that failed?
>
> **[4:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=283)** Finally, can you reproduce the problem with what you know?
>
> **[4:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=288)** Debugging doesn't require logging, but having a system act or fail silently doesn't help.
>
> **[4:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=294)** The problem can exist in multiple places and some solutions require changing multiple things.
>
> **[4:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=299)** That's okay and it's normal.
>
> **[5:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=302)** The goal is to discover what went wrong and where to fix it.
>
> **[5:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/finding-what-went-wrong?u=76281980&t=307)** All right, so what do I do when the site's working but it's slow?

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), require (2), static (1), break. (1), let (1)
> **CLI Commands:** find (4), node (2)
> **File Paths:** node.js (2)
> **Env Vars:** html (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Why measure performance?
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=0)** - Ever hear the phrase the site is slow?
>
> **[0:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=2)** It's ambiguous meaning it's open to interpretation and isn't specific enough.
>
> **[0:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=7)** How slow? Compared to what?
>
> **[0:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=9)** What was going on when it was slow?
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=11)** The right way to approach this type of problem is by measuring performance.
>
> **[0:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=16)** Let's explore each of these words and why they're important.
>
> **[0:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=19)** To measure is to find the number of some property of a thing using some sort of common standard.
>
> **[0:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=26)** How does that apply to the web?
>
> **[0:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=27)** Web applications can be measured in a number of different ways.
>
> **[0:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=31)** For example the duration of how long it takes to receive a response in seconds.
>
> **[0:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=37)** There's also the size of the response in bytes, the number of files requested in the response, and the HTTP response codes that report successes and errors.
>
> **[0:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=48)** Response times can be even more granular.
>
> **[0:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=51)** For example there's the time until the connection to the remote host is completed.
>
> **[0:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=55)** What about the time for all redirections if any?
>
> **[0:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=59)** The response time from start to first byte is important especially in the context of first byte being received to the page being fully loaded.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=68)** This helps find problems that are in the front end or back end only.
>
> **[1:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=73)** So what's performance then?
>
> **[1:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=75)** Performance refers to the capabilities of a product especially when observed under particular conditions.
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=81)** This is important to web applications in a number of ways.
>
> **[1:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=85)** Most commonly web application performance is thought of as time to build and send a response.
>
> **[1:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=92)** But what about the number of requests occurring during the time.
>
> **[1:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=95)** The count of users by role, which segments them into anonymous, logged in and more.
>
> **[1:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=101)** These give perspective into the conditions that the server was under.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=106)** Putting the two words together, measuring performance says a lot.
>
> **[1:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=110)** The phrase means to determine the size or amount, recorded in standard units of the ability of a system to do something under specific conditions.
>
> **[2:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=121)** Let's revisit the phrase the site is slow.
>
> **[2:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=124)** But this time in the context of measuring performance.
>
> **[2:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=127)** What would give more actionable feedback?
>
> **[2:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=129)** Here's an example.
>
> **[2:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=132)** After a user logs into the site at 10 AM Pacific when they visit the dashboard for the very first time the page takes 10 seconds to fully load in Chrome on a Windows 10 desktop machine.
>
> **[2:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=145)** Let's break that down.
>
> **[2:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=147)** After a user logs in gives the role along with steps to replicate in context about when.
>
> **[2:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=153)** That helps when finding out more about the particular conditions.
>
> **[2:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=157)** When they visit the dashboard gives replication steps and the page location.
>
> **[2:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=162)** For the first time is also replication steps.
>
> **[2:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=164)** The page is what.
>
> **[2:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=166)** 10 seconds is the size in units and fully load is what.
>
> **[2:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=171)** Finally Chrome on Windows desktop gives steps to replicate and context.
>
> **[2:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=177)** Obviously given a report like this, I know that the site is slow.
>
> **[3:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=183)** But with measured performance I have context, steps to reproduce, measurements and a lot more.
>
> **[3:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-measure-performance?u=76281980&t=189)** What should I do with this information?

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), this, (1)
> **CLI Commands:** find (2)
> **Analogies:** for example (2)
> **Env Vars:** http (1)
> **Definitions:** refers to (1)
> **Speakers:** - ever (1)

#### Documenting problems
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=0)** - [Instructor] We've discussed how to frame and isolate issues in constructive ways and to measure performance.
>
> **[0:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=6)** What should you be doing with problems as they come up?
>
> **[0:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=10)** Write them down.
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=11)** That's it, I'm serious.
>
> **[0:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=13)** When documenting an issue, describe it clearly so a casual reader understands your intent.
>
> **[0:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=20)** Try to find a balance between being brief but thorough.
>
> **[0:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=24)** Don't go overboard and write a novel, but give enough to work from.
>
> **[0:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=28)** Give context about when and what was happening.
>
> **[0:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=32)** Steps to replicate helps any engineer find and verify that a problem has been fixed.
>
> **[0:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=37)** Finally, if appropriate, attach or include raw data such as performance measurements, error messages, and so forth.
>
> **[0:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=45)** When tracking issues about any system, there are a few best practices that will make your life easier.
>
> **[0:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=51)** First, document problems as promptly as possible when it's fresh in your mind.
>
> **[0:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=56)** Keep the issues in a central location so both you and others can work on them.
>
> **[1:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=61)** Finally, you'll need to be able to track progress in how the issue is resolved.
>
> **[1:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=66)** Unfortunately, most issues that you'll see or even write aren't in a perfect format.
>
> **[1:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=72)** We don't always have time to write eloquent bug reports.
>
> **[1:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=75)** Therefore be patient and do your best.
>
> **[1:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=78)** Even if a bug, issue, or problem isn't written perfectly, empathize with the person who's experienced the problem.
>
> **[1:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=86)** Finding a solution is better than being technically correct.
>
> **[1:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=90)** In short, you should have some sort of system for documenting problems.
>
> **[1:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=95)** What does that look like in action?
>
> **[1:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=97)** For example, you could track issues in a simple text file.
>
> **[1:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=101)** No fancy software is needed.
>
> **[1:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=103)** Here's some issues from when I developed the rock paper scissors game.
>
> **[1:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=107)** Starting with an empty checkbox, viewing an invalid game causes the page to timeout.
>
> **[1:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=113)** An issue in progress could have a half-filled check box with no limit on the number of games shown.
>
> **[1:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=119)** Finally, a completed issue for all players seeing other players' moves.
>
> **[2:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=124)** Of course, there are already many existing systems for tracking issues.
>
> **[2:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=129)** Web-based source control hosting services like GitHub and GitLab also include issue queues and projects at no additional costs.
>
> **[2:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=137)** There are also complex organizational systems like Jira, Basecamp, and Trello that include many ways to track issues and projects.
>
> **[2:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/documenting-problems?u=76281980&t=145)** Tracking individual issues is useful, but what about a more holistic question, how do we know when we've succeeded at debugging or improving performance?

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (3), from. (1)
> **CLI Commands:** find (2), make (1)
> **Tools:** github (1), gitlab (1), jira (1)
> **Analogies:** such as (1), for example (1)
> **UI Navigation:** checkbox (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### When is a problem resolved?
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=0)** - [Announcer] Web applications are constantly growing, it can be overwhelming to try and solve every problem that exists and still have the time to add new features.
>
> **[0:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=9)** We want to do the right thing and fix all problems as they come up.
>
> **[0:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=14)** Fixing errors is unambiguous, either the error occurs or it doesn't.
>
> **[0:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=20)** What about performance concerns like a slow site?
>
> **[0:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=23)** In order to stay sane and make progress we need to be able to find the answer to a fundamental question.
>
> **[0:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=29)** When is a problem resolved?
>
> **[0:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=32)** The answer takes a combination of technical and issue management skills.
>
> **[0:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=36)** First of all, what does resolve?
>
> **[0:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=40)** To resolve is the settle or find a solution to a problem.
>
> **[0:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=44)** Notice that it doesn't say, to fix.
>
> **[0:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=46)** Why not?
>
> **[0:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=48)** There are a number of ways to resolve a technical problem.
>
> **[0:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=51)** The most obvious is to fix the issue, which means that something was wrong to begin with.
>
> **[0:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=56)** However, what if you cannot reproduce the issue?
>
> **[1:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=60)** That's a valid resolution as well, especially is the issue is particularly vague.
>
> **[1:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=65)** Also, there's a won't fix resolution, meaning the system works as designed or the problem isn't worth the effort.
>
> **[1:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=73)** All of these indicate that the problem has been settled one way or another.
>
> **[1:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=77)** Why does that matter?
>
> **[1:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=79)** There's a lot of value in being able to resolve tasks beyond just getting work done.
>
> **[1:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=84)** When a problem is resolved it communicates progress to yourself and others.
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=89)** When resolving a problem there's documentation about work that was done or not done.
>
> **[1:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=94)** Finally, there's the psychological benefit in that it just feels good to have one less problem.
>
> **[1:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=100)** To make a problem resolvable you'll need documentation about the problem like we discussed in the last video.
>
> **[1:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=107)** First a problem should be localized to as specific area or areas as possible.
>
> **[1:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=112)** This establishes boundaries both for work and for testing.
>
> **[1:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=117)** Performance measurements should be included along with how you got them.
>
> **[2:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=121)** Document any error messages and their sources, sometimes having no error messages is itself a problem.
>
> **[2:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=128)** There should be steps to replicate the problem as necessary for testing and verification.
>
> **[2:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=133)** Once we have all this information we can set reasonable success criteria.
>
> **[2:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=138)** For example, steps to replicate the issue no longer trigger problem.
>
> **[2:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=142)** Another could be that there's a measurable performance improvements like a 10 second response time now takes two seconds.
>
> **[2:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=150)** With errors, the error message still exists in code but now program execution won't trigger it.
>
> **[2:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=157)** Issue management skills are important when trying to balance fixes with new features.
>
> **[2:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=162)** Try to roughly estimate the amount of effort it takes to resolve a problem, some people use hours and other use high and low.
>
> **[2:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=170)** If it's a really large task, based on the estimation, break it into smaller ones.
>
> **[2:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=175)** Using knowledge about the system and organizational needs determine the severity and the impact of the issue.
>
> **[3:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=182)** If it never gets fixed does anybody care?
>
> **[3:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=185)** With this context you can prioritize what work needs to be done.
>
> **[3:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=189)** To review, resolving problems isn't just about fixing.
>
> **[3:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=193)** First you need to document the issue.
>
> **[3:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=196)** Then, determine the scope of the problem and where to focus work.
>
> **[3:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=200)** And the end, after all the work is complete each problem should be settled or a solution found.
>
> **[3:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=206)** This can include fixing or not, and not being able to replicate the problem.
>
> **[3:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=212)** Throughout this chapter we've been building a troubleshooting mindset.
>
> **[3:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=216)** We started with how to find what went wrong, rather then blaming.
>
> **[3:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=220)** Then, we explored the fundamentals of how to measure performance of a system and why that data is valuable.
>
> **[3:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=227)** We learned effective way to document problems to make them as actionable as possible.
>
> **[3:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=232)** Finally, we learned how to resolve problems by combining what went wrong, performance measurements, documentation, and the need to settle or find solutions.
>
> **[4:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/when-is-a-problem-resolved?u=76281980&t=242)** With this foundation we're ready to discover how our Rock, Paper, Scissors game was built and why it matters.

> [!info]- Semantic Content
>
> **CLI Commands:** find (4), make (3)
> **Code Keywords:** finally, (2)
> **Cross-References:** we discussed (1), in the last (1)
> **Definitions:** is a  (1), means that (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [announcer] (1)


### 2. Introducing Microservices

#### What's a microservice architecture?
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=0)** - [Instructor] As I was designing this course, I asked myself, what would I have found most helpful as I was learning how to debug and tune Node applications?
>
> **[0:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=8)** How are modern scalable applications built?
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=11)** What do engineers find challenging?
>
> **[0:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=13)** What's missing from existing debugging and performance tuning tutorials and documentation?
>
> **[0:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=19)** What avoids complexities specific to front-end frameworks and focuses on the back end?
>
> **[0:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=24)** Finally, what's an example of a high-performance application design?
>
> **[0:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=29)** The answer to all these questions is a microservice architecture.
>
> **[0:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=34)** Throughout this chapter, we're gonna be learning the fundamentals of microservices.
>
> **[0:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=39)** We'll explore how our application was built and why it matters.
>
> **[0:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=43)** We'll manage multiple Node.js services at the same time.
>
> **[0:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=47)** Finally, we'll start and explore our rock paper scissors application.
>
> **[0:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=52)** So what is a microservice architecture?
>
> **[0:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=56)** A microservice architecture is when an application is built from a collection of independent, modular services.
>
> **[1:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=64)** Each service communicates with each other using standard protocols.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=68)** Each service is distinct from each other and is built for a specific purpose.
>
> **[1:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=74)** This separation is also known as loose coupling, a principle for improving maintainability.
>
> **[1:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=79)** Why should you consider a microservice architecture?
>
> **[1:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=82)** It's a great pattern for a number of reasons.
>
> **[1:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=85)** Different teams can independently work on different services at the same time.
>
> **[1:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=90)** If there's a problem, it can be localized to a specific service or interaction.
>
> **[1:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=94)** In theory, it makes the application easier to understand, build, and test.
>
> **[1:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=100)** In reality, it takes careful planning and discipline to make microservices work well.
>
> **[1:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=105)** Errors in one service can affect multiple services that rely on it.
>
> **[1:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=110)** Therefore, determining the root cause of a problem involves a lot of detective work if problems aren't communicated effectively.
>
> **[1:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=117)** Microservices are an answer to a lot of problems in building complex applications, but they're not the only answer.
>
> **[2:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=124)** In fact, implementing a microservice can be overkill for very small applications.
>
> **[2:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=129)** In complete transparency, it took me longer to prepare the demo app for this course than it usually takes me because I used this pattern.
>
> **[2:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=137)** At the end of the day, you are in the best position to determine how to build your own applications.
>
> **[2:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=143)** Use your best judgment.
>
> **[2:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=145)** So why does this course use microservices?
>
> **[2:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=148)** It's a great practical example of how things can go wrong, especially when overengineered.
>
> **[2:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=154)** Interconnected dependencies and cascading errors sounds like a perfect challenge that we can solve together.
>
> **[2:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=161)** Honestly, this is gonna be fun.
>
> **[2:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=163)** Finally, the principles, tools, and techniques are not specific to microservices.
>
> **[2:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=168)** You can use this course regardless of how you build your applications.
>
> **[2:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/what-s-a-microservice-architecture?u=76281980&t=173)** With this context, how is the demonstration application structured?

> [!info]- Semantic Content
>
> **CLI Commands:** node (2), find (1), make (1)
> **Code Keywords:** finally, (3)
> **Definitions:** is a  (2), known as (1)
> **File Paths:** node.js (1)
> **Speakers:** - [instructor] (1)

#### Microservice rock, paper, scissors
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=0)** - [Narrator] The application we'll be working on is a Microservice implementation of the game Rock, Paper, Scissors.
>
> **[0:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=7)** There are three services that make up this Microservice application.
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=11)** First is a standard web interface running on port 5000.
>
> **[0:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=16)** The second is a games API service running on port 5005.
>
> **[0:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=21)** The third service is the players API which runs on port 5010.
>
> **[0:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=26)** The services communicate using REST API's and always return JSON.
>
> **[0:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=31)** For simplicity, the database is shared across all the services.
>
> **[0:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=36)** This unfortunately makes this system more tightly coupled, but for the purposes of a demonstration, it's acceptable.
>
> **[0:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=43)** Don't share databases across services in production.
>
> **[0:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=47)** With that in mind, let's look at each service in turn so we know how they work.
>
> **[0:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=52)** At the end, we'll review how the whole system works.
>
> **[0:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=57)** The web service is responsible for all interactions with the browser.
>
> **[1:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=61)** This includes serving static content such as Style Sheets, JavaScript, and so forth.
>
> **[1:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=67)** It also maintains sessions in mysql using the module express sessions.
>
> **[1:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=72)** Web handles all form submission handling, and finally, web sends requests to the games and players' services and renders the results.
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=81)** The web service runs on port 5000 and has a few routes.
>
> **[1:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=85)** GET on the route shows the latest and pending final games.
>
> **[1:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=90)** POST to games creates a new game.
>
> **[1:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=93)** GET games by id renders a game.
>
> **[1:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=96)** POST to games by id/choice is the form submission handler for player choices.
>
> **[1:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=101)** Similarly, POST to game id join does exactly that.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=106)** Finally a POST to game id judge determines the result and redirects back to game renderer.
>
> **[1:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=112)** Another approach would have been to POST and switch on action form input, but this is more explicit.
>
> **[1:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=119)** Now that we know how to interact with web, let's look at the simpler of the two API services, player.
>
> **[2:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=125)** The Player Model is exceedingly simple.
>
> **[2:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=127)** It consists of an id, an unsigned positive integer, and a lastUpdated date/time field.
>
> **[2:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=134)** I considered both a name and a session id, but decided they were overkill.
>
> **[2:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=139)** The Players API has two routes: POST to create a player, and GET to retrieve a player by id.
>
> **[2:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=147)** There's no list of players and you can't modify a player, so why over-engineer?
>
> **[2:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=153)** A game is a bit more complex.
>
> **[2:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=155)** It starts with an id, a unique identifier, an unsigns positive integer.
>
> **[2:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=161)** A game also has a lastUpdated field, a date/time of when the record was last updated.
>
> **[2:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=166)** There's an optional player1 and player2id, also an integer.
>
> **[2:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=170)** There's also a player1 and 2choice, which are an enum of rock, paper, or scissors.
>
> **[2:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=177)** Each game has a state, defaulting to pending or final, through an enum.
>
> **[3:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=182)** Finally, there's an optional playerWinnerid.
>
> **[3:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=185)** It's technically possible to spread some of these values out across multiple tables, but for readability, this works.
>
> **[3:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=193)** The Games Service has a few routes.
>
> **[3:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=195)** You can GET to fetch games by criteria, and POST to create a game, then, you can GET a game by id, and PATCH to update it, then POST to judge to determine the outcome.
>
> **[3:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=206)** There's a final route, rules, that sends an array of human-readable rules for the web service to render.
>
> **[3:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=213)** To review, the Rock, Paper, Scissors application consists of three services.
>
> **[3:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=218)** A web application on port 5000 as the user interface, a games API on port 5005, and a players API on port 5010.
>
> **[3:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=229)** The web interface communicates via REST to the games and players API's which then respond in JSON, a clean separation of responsibilities across three services and a brief example of a microservice pattern.
>
> **[4:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=243)** Did you know that some sites have dozens, even hundreds, of microservices?
>
> **[4:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=248)** It's an interesting pattern.
>
> **[4:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=250)** Alright, so we've got three microservices.
>
> **[4:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/microservice-rock-paper-scissors?u=76281980&t=252)** How do we run them?

> [!info]- Semantic Content
>
> **Env Vars:** api (8), post (8), rest (2), json (2), patch (1)
> **API Endpoints:** post  (7), get  (4), post
 (1), get
 (1), patch  (1)
> **Code Keywords:** interface (3), let (2), finally, (2), enum (2), static (1)
> **Ports:** port 5000 (3), port 5005 (2), port 5010 (2)
> **Definitions:** is a  (4)
> **Code Identifiers:** lastupdated (2), playerwinnerid (1)
> **CLI Commands:** make (1), mysql (1)
> **Analogies:** such as (1)

#### Introducing PM2 for process management
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=0)** - [Instructor] We've got a couple different options for running Node.js Services.
>
> **[0:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=4)** The easiest way would be to start each manually with node.
>
> **[0:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=8)** However, you'd have to start each process one at a time, and it doesn't watch and restart with changes.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=15)** There's also nodemon, but it's also limited to one process at a time, and it's intended only for development.
>
> **[0:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=22)** How can we manage multiple Node.js processes at the same time?
>
> **[0:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=27)** We're going to use PM2, which is a Node.js process manager.
>
> **[0:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=31)** What's that mean?
>
> **[0:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=32)** A Node.js process manager is a service that runs in the background.
>
> **[0:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=36)** Meaning it runs behind the scenes, and without user interaction.
>
> **[0:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=40)** They're used to control and mange Node.js processes.
>
> **[0:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=44)** This includes operations like starting, stopping and restarting on changes or errors.
>
> **[0:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=50)** They also monitor resource usage, like CPU or memory.
>
> **[0:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=54)** Finally, they gather logs in one place, which is convenient for debugging and log management.
>
> **[1:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=61)** Process managers are essential debugging and performance tools for a number of reasons.
>
> **[1:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=65)** You can see the number of times the process is restarted, which indicates stability.
>
> **[1:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=70)** You can see the amount of resources used, which is useful when deciding how and when to scale.
>
> **[1:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=76)** Finally, you can control a process without having to look up it's process id, which is a problem I've had with nodemon more than once.
>
> **[1:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=84)** One of the more popular examples of a process manager is PM2, available from pm2.[keymetrics.io](https://keymetrics.io).
>
> **[1:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=92)** PM2 is a Node.js process manager.
>
> **[1:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=95)** It's also a production runtime, meaning unlike nodemon, PM2 can be used in customer facing environments.
>
> **[1:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=102)** PM2 is open source and works on Linux, Mac OS and Windows.
>
> **[1:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=107)** PM2 supports all versions of Node.js made since 2015.
>
> **[1:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=111)** It's also really useful for managing microservices.
>
> **[1:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=115)** In this course we're going to be using PM2 to manage our microservices, monitor resource usage and to view application logs.
>
> **[2:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=124)** I've included a PM2 configuration in the exercise files, so no additional configuration is necessary.
>
> **[2:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=130)** PM2 can be installed with npm, and we'll do that in the next video.
>
> **[2:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=135)** PM2 isn't the only Node.js process manager out there.
>
> **[2:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=139)** Other options include, StrongLoop Process Manager from [strong-pm.io](https://strong-pm.io), and forever from [github.com/foreverjs](https://github.com/foreverjs).
>
> **[2:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=148)** They're both very capable options.
>
> **[2:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=150)** With that said, PM2 has a much larger user base, and I use it for my professional work.
>
> **[2:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=156)** Research and compare the differences and find a choice that works best for your needs.
>
> **[2:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=162)** This course is not going to cover debugging PM2 itself, but to be honest I've never really needed to.
>
> **[2:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=167)** It's stability and robustness help focus our attention on our application, not the tools we're using.
>
> **[2:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-pm2-for-process-management?u=76281980&t=174)** Enough talk, let's get this application up an running.

> [!info]- Semantic Content
>
> **Env Vars:** pm2 (12), cpu (1)
> **CLI Commands:** node (9), npm (1), find (1)
> **File Paths:** node.js (8)
> **Code Keywords:** finally, (2), include, (1), let (1)
> **Definitions:** is a  (4)
> **URLs:** [keymetrics.io](https://keymetrics.io) (1), [strong-pm.io](https://strong-pm.io) (1), [github.com](https://github.com) (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)

#### Managing microservices with PM2
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=0)** - [Instructor] Now that we have all the prerequisites and we know how the system is built, let's set up our rock, paper, scissors application and manage its microservices with PM2.
>
> **[0:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=10)** Switch over to your editor.
>
> **[0:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=13)** I'm gonna open Visual Studio Code.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=15)** Let's add the exercise files to the project.
>
> **[0:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=18)** I'm gonna go up to the file menu and select add folders to workspace.
>
> **[0:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=24)** Navigate to wherever you've extracted the exercise files and copy the rock-paper-scissors folder.
>
> **[0:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=30)** In my case it's on the desktop.
>
> **[0:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=33)** Choose the rock-paper-scissors folder and then click add.
>
> **[0:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=38)** There are a number of files and folders over on the left.
>
> **[0:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=41)** We'll go through them at a high level then turn on the application.
>
> **[0:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=45)** I'm gonna click on the first folder, migrations.
>
> **[0:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=49)** This contains two files which are used to set up the databases.
>
> **[0:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=52)** Click again to close the folder.
>
> **[0:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=55)** Next is servers which contains the three microservices, games, players, and web.
>
> **[1:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=61)** We'll look at each in turn.
>
> **[1:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=64)** First click on games.
>
> **[1:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=66)** This contains one folder, lib, which contains libraries such as the game structure, games operations, the referee system for judging outcomes, and validation.
>
> **[1:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=77)** The other files include app.js which is the express application, config which is a simple configuration, index which starts the HTTP server, and the express router.
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=89)** Close games by clicking on it again.
>
> **[1:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=92)** Next click on players.
>
> **[1:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=94)** It has a similar structure including a lib folder for the player model and players operations.
>
> **[1:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=102)** Players also has an app configuration, HTTP server, and express router.
>
> **[1:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=108)** Close players.
>
> **[1:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=110)** Finally, there's web, which is a bit different.
>
> **[1:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=113)** In the lib folder there's a generic httpClient and clients for both games and players.
>
> **[2:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=120)** In public we've got the style sheets and the favicon.
>
> **[2:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=126)** Views contains the pug templates for various pages.
>
> **[2:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=131)** App is the express application.
>
> **[2:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=133)** Config is self explanatory.
>
> **[2:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=135)** Index is the HTTP server.
>
> **[2:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=137)** Router is the express router and session opens up the session storage in the database.
>
> **[2:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=143)** Close web.
>
> **[2:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=146)** In the root there are a couple code quality files lik the editor config and ESLint files.
>
> **[2:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=152)** The docker-compose file contains the service configuration.
>
> **[2:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=156)** Knexfile sets up the database manager.
>
> **[2:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=159)** The package.json is shared across all three services which is not normal but is easier to demo.
>
> **[2:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=166)** Pm2.config.js is minimal and hard coded to all three services.
>
> **[2:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=172)** Finally there's README.md which gives some instructions and testing steps.
>
> **[3:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=180)** Take a moment to explore each file and folder independently to acquaint yourself with the application structure.
>
> **[3:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=186)** When you're done let's start up the application.
>
> **[3:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=189)** Open up the Visual Studio terminal.
>
> **[3:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=192)** First, let's install the node.js packages.
>
> **[3:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=195)** Type npm install and pres enter.
>
> **[3:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=204)** We're going to install PM2 globally using NPM.
>
> **[3:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=207)** Type npm install pm2 -g and press enter.
>
> **[3:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=215)** If you receive a permission error please check the NPM documentation on what to do about file permissions.
>
> **[3:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=222)** The next thing we're going to do is start docker which provides a mySQL database.
>
> **[3:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=226)** Type docker-compose up -d then press enter.
>
> **[3:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=236)** We're going to create the mySQL database schemas using knex.
>
> **[3:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=239)** Type ./node_modules/.bin/knex
>
> **[4:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=248)** and then we're gonna give it the command migrate:latest and press enter.
>
> **[4:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=255)** If this operation fails wait a moment and try again.
>
> **[4:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=258)** Sometimes it takes a moment for docker to get started.
>
> **[4:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=262)** Finally we're going to start our microservice configuration using PM2.
>
> **[4:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=267)** Just type pm2 start ./pm2.config.js and press enter.
>
> **[4:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=280)** After a moment we'll get a list of the three applications, games, players, and web.
>
> **[4:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=286)** Each application has a status, number of restarts, uptime, CPU, and memory, and whether we're watching for changes.
>
> **[4:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=295)** Let's see some more details about an app such as web.
>
> **[4:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=298)** Type pm2 show web.
>
> **[5:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=303)** This provides some really low level information about each app.
>
> **[5:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=307)** To get a list of all services and their statuses type pm2 list.
>
> **[5:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=313)** If we want to shut down one service type pm2 stop and then the name of the service in question like web.
>
> **[5:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=322)** To start it back up again use start, pm2 start web.
>
> **[5:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=327)** We're gonna pass it an additional flag,
>
> **[5:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=329)** - -watch to watch for changes.
>
> **[5:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=333)** To completely turn off PM2 use the kill command, pm2 kill.
>
> **[5:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=340)** This turns off all services and stops PM2.
>
> **[5:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=343)** To get the application back up and running start it up again with a path to the config file.
>
> **[5:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=349)** Type pm2 start ./pm2.config.js and press return.
>
> **[5:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=358)** To see more commands and to learn about how to use PM2 type pm2 -h and press return.
>
> **[6:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=366)** This will display a comprehensive list of commands and options.
>
> **[6:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=371)** Browse around and experiment.
>
> **[6:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=374)** In this chapter we've been exploring the fundamentals of microservices.
>
> **[6:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=378)** We started with the principles of microservice architecture and how they relate to debugging and performance.
>
> **[6:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=384)** Then we explored how our rock, paper, scissors game uses microservices and how they relate to one another.
>
> **[6:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=391)** We explored process managers such as PM2 and other similar options.
>
> **[6:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=396)** Finally we managed the microservices of our rock, paper, scissors game with PM2.
>
> **[6:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/managing-microservices-with-pm2?u=76281980&t=402)** We started the application up but how can we inform ourselves of our applications health and performance?

> [!info]- Semantic Content
>
> **Env Vars:** pm2 (8), http (3), npm (2), readme (1), cpu (1)
> **Code Keywords:** let (5), return. (2), switch (1), finally, (1), public (1)
> **CLI Commands:** docker (4), npm (4), mysql (2), node (1)
> **File Paths:** pm2.config.js (3), app.js (1), package.json (1), readme.md (1), node.js (1)
> **Prerequisites:** install (4), set up (2)
> **Code Identifiers:** mysql (2), httpclient (1), node_modules (1)
> **UI Navigation:** click on (3), navigate to (1)
> **Tools:** visual studio (2), terminal (1)


### 3. Effective Logging Strategies

#### Why and what should I log?
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=0)** - [Narrator] What is a log?
>
> **[0:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=2)** No, not the wood kind.
>
> **[0:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=5)** A log is a record of events and messages between systems.
>
> **[0:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=9)** They're used to understand what's happening on a system and define problems.
>
> **[0:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=14)** Sounds like a great idea.
>
> **[0:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=16)** Let's see how our rock, paper, scissors game logs.
>
> **[0:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=22)** Open up Visual Studio Code, then the terminal.
>
> **[0:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=26)** Let's take a look at our log files.
>
> **[0:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=28)** Type PM2 space logs and press Enter.
>
> **[0:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=33)** Well, that's underwhelming.
>
> **[0:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=36)** In fact, other than start up messages from PM2, there aren't any logs.
>
> **[0:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=41)** Let's open up a browser and arrange the window so we can see both.
>
> **[0:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=46)** Great, let's start a game.
>
> **[0:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=48)** Navigate to local host port 5000 and then click Start New.
>
> **[0:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=56)** Make a choice.
>
> **[0:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=58)** Awesome.
>
> **[1:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=60)** Over on the left, what's going on on our log files?
>
> **[1:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=63)** Well, nothing.
>
> **[1:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=66)** That's not particularly useful.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=68)** Alright, let's trigger an error.
>
> **[1:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=71)** Instead of games one, let's go to games asdf.
>
> **[1:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=77)** Now what's in the log?
>
> **[1:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=80)** An error, now we're getting somewhere, or are we?
>
> **[1:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=85)** Looking at this error, can you tell me how to make this error happen again?
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=89)** Well, there's a vague error message about may have forgotten and a really specific type error in the web router.
>
> **[1:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=96)** Alright, that's where but there's nothing about the request itself, who made it and so forth.
>
> **[1:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=102)** This is why not having any logging or not enough logging is a problem.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=106)** We have no idea what's happening.
>
> **[1:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=110)** In this chapter, we're going to discuss and implement effective logging strategies in our Node.js application.
>
> **[1:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=116)** We'll start with a why and what of logging.
>
> **[1:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=119)** Then we'll discuss why the console isn't necessarily the best way to log in Node.js.
>
> **[2:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=125)** To see the limitations firsthand, we'll implement Express error pages, which is a best practice for handling errors.
>
> **[2:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=133)** We'll compare multiple logging libraries and choose one for our application.
>
> **[2:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=138)** How can we go about logging requests made to our server?
>
> **[2:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=141)** Finally, we'll discuss how to correlate requests and log entries made across multiple applications.
>
> **[2:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=148)** By the end of the chapter, our application will have some logging so we can see what's happening.
>
> **[2:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=153)** Let's start with the basics.
>
> **[2:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=155)** Why should we log, what should we log, and where should it go?
>
> **[2:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=159)** There are already a number of reasons why we should log and we've discussed some already.
>
> **[2:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=164)** First, there's diagnostics where we can determine the health of the application.
>
> **[2:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=168)** If there's lots of errors, that's a problem.
>
> **[2:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=170)** And if there's lots of successes, that's good.
>
> **[2:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=173)** As engineers, we need debugging so we can determine what has happened and when.
>
> **[2:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=178)** Finally, log files can be used for analysis to produce statistics about traffic, how people are using the site and so forth.
>
> **[3:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=187)** What should be logged?
>
> **[3:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=189)** It depends on a lot of things.
>
> **[3:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=191)** Like what your application is doing and what's helpful.
>
> **[3:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=195)** In general, here's some things that are useful to log.
>
> **[3:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=198)** First of all, the status.
>
> **[3:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=200)** Did the operation succeed, fail, or something else?
>
> **[3:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=203)** What was requested and through what method?
>
> **[3:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=207)** Who made the request such as the username, IP address, session identifier and so forth?
>
> **[3:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=213)** How long did the request take?
>
> **[3:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=215)** Are there any identifiers that are appropriate such as a transaction or record number?
>
> **[3:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=221)** Here's a couple examples of useful log messages with different formats.
>
> **[3:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=225)** On April 19th at 9:34 PM, user 123 logged in.
>
> **[3:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=230)** Who, what, and when along with the success?
>
> **[3:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=234)** Here's a logger example that was adapted from the Apache web server documentation.
>
> **[3:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=238)** On Friday, December 9th, 2018, someone from a particular IP could not find a file.
>
> **[4:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=244)** Finally, a JSON example.
>
> **[4:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=247)** On February 3rd, 2015, videoID 456 was successfully transcoded from MP4 to MKV and it took 12,000 seconds.
>
> **[4:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=256)** That's really slow.
>
> **[4:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=257)** Should I bother logging successes?
>
> **[4:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=261)** Yes, you should.
>
> **[4:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=262)** For one thing, a success is a positive indicator that things are going well.
>
> **[4:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=267)** You won't need to include a lot of diagnostic information but an identifier or two does help.
>
> **[4:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=272)** For example, here's a simple GET that includes a path, the identifier of what was requested, a status code, and a duration.
>
> **[4:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=280)** Should I log the contents of POST requests?
>
> **[4:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=284)** No, this is really dangerous.
>
> **[4:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=286)** A post may contain data that would otherwise be secure such as credentials, personal identifiable information and so forth.
>
> **[4:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=294)** Post requests can be very large with dozens of fields, which can get impractical.
>
> **[4:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=299)** There's also the question of what to do with binary attachments such as an image?
>
> **[5:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=303)** It's not a good idea to log these.
>
> **[5:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=306)** What types of things should I be careful about logging?
>
> **[5:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=309)** Again, personally identifiable information or PII is any data that could be used to potentially identify a specific individual.
>
> **[5:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=319)** For example, privacy regulations such as the EU's General Data Protection Regulation or GDPR classify IP addresses as personal data.
>
> **[5:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=329)** In short, research.
>
> **[5:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=331)** Be aware of and abide by local regulations of wherever your audience may be coming from.
>
> **[5:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=338)** What should you never log?
>
> **[5:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=340)** Sensitive information.
>
> **[5:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=341)** This is domain specific but in general, treat log files with similar care and security as you would with the database.
>
> **[5:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=348)** Avoid PII such as financial information, passwords and credentials.
>
> **[5:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=354)** To summarize logging goals, you should be logging enough to learn about the health of your application and be able to diagnose problems.
>
> **[6:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=362)** You shouldn't log sensitive or secure information like passwords or PII.
>
> **[6:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=367)** What if your logs were copied to somewhere public, would that reveal secrets about your audience?
>
> **[6:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=372)** Finally, you should be aware of and comply with any applicable local regulations regarding data and privacy.
>
> **[6:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/why-and-what-should-i-log?u=76281980&t=380)** Alright, so I'd like to log and I've seen console.log statements, is that the best way to log?

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), finally, (4), new. (1), from. (1), public (1)
> **Env Vars:** pii (3), pm2 (2), json (1), mp4 (1), mkv (1)
> **Analogies:** such as (6), for example (2)
> **CLI Commands:** make (2), node (2), apache (1), find (1)
> **Definitions:** is a  (5)
> **Warnings:** be aware (2), be careful (1)
> **File Paths:** node.js (2)
> **Ports:** port 5000 (1), :34 (1)

#### Problems with Node.js console
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=0)** - [Instructor] Node includes a simple debugging module named Console.
>
> **[0:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=4)** It includes a number of methods, like console.log for regular log messages, and console.error for error messages.
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=11)** Is this the best place to be sending log entries?
>
> **[0:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=14)** No, because the console can be evil.
>
> **[0:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=17)** Not always, but sometimes.
>
> **[0:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=20)** Here's why.
>
> **[0:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=22)** Let's start with how Node handles input and output.
>
> **[0:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=25)** By default, Node.js on its own, has no log file.
>
> **[0:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=29)** While there's output or errors, they're sent to what's known as standard streams.
>
> **[0:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=35)** What are standard streams?
>
> **[0:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=36)** They're preconnected input and output communication channels between a program and its environment.
>
> **[0:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=42)** There are three.
>
> **[0:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=43)** The first is standard input, or standard in, which is the interface where the program receives input when starting.
>
> **[0:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=51)** The second is standard output, which is where the program sends output during execution.
>
> **[0:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=55)** The final is similar, standard error, which is where the program sends errors and other diagnostic information.
>
> **[1:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=62)** When commands are executed from an interactive shell, the streams are connected to the text terminal by default.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=68)** Streams can be redirected to write to a file, or to another program, which we'll discuss later.
>
> **[1:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=74)** So, practically speaking, Node.js reads input from standard in, sends output to standard out, and errors to standard error.
>
> **[1:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=83)** Since Node is typically executed from an interactive shell, all these messages are sent to the terminal.
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=89)** If you'd like to learn more about how to access these streams, check out the Node.js API documentation on the built-in process object.
>
> **[1:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=97)** Why do I bring up standard streams, and why do they matter in the context of Node.js?
>
> **[1:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=102)** Because that's where Node's console writes to.
>
> **[1:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=105)** Console.log writes to standard out, and console.error writes messages and diagnostics to standard error.
>
> **[1:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=111)** There's also console.warn, which is just an alias for console.error.
>
> **[1:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=117)** That sounds pretty logical.
>
> **[1:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=118)** So, Node's console writes to the terminal, so what?
>
> **[2:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=122)** Why does that matter?
>
> **[2:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=124)** Unless you explicitly redirect the output, those log messages will not be saved anywhere.
>
> **[2:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=129)** That means you can fill your code base with helpful console.log and error messages, but without redirection, they're useless.
>
> **[2:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=137)** If a tree falls in a forest, and no one's around, does it make a sound?
>
> **[2:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=142)** When developing locally, just writing to the terminal is fine, but not in a production environment.
>
> **[2:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=148)** How do we go about redirecting output?
>
> **[2:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=151)** You can use the operating system to redirect the output, like piping it to a file.
>
> **[2:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=155)** This works, but it has limitations, like not supporting multiple destinations.
>
> **[2:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=161)** You can use a process manager like PM2, which automatically redirects output to log and error files.
>
> **[2:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=167)** This is an easy solution that provides a good foundation for other logging tools that we'll be discussing shortly.
>
> **[2:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=173)** However, PM2 doesn't support multiple destinations.
>
> **[2:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=176)** It also doesn't give more granularity to the levels, log, and error, so we're gonna have to add it ourselves.
>
> **[3:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=183)** Finally, there's a question of performance.
>
> **[3:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=185)** Node's console is synchronous, which means execution is blocked until it's done.
>
> **[3:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=191)** You can write all the asynchronous code you want, but one little console, and everybody has to wait for it to complete.
>
> **[3:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=197)** That's sub-optimal.
>
> **[3:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=200)** Now that we've heard about its problems, let's try Node's debugging console to both highlight how to use it, and to see its limitations first-hand.
>
> **[3:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=209)** Let's try out the console by implementing a request logger as an express middleware in the web server.
>
> **[3:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=214)** A request logger does pretty much what it sounds like, it records a log entry for each request.
>
> **[3:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=220)** The best place to put a request logger in a web server is after the static files, but before any routing, ready?
>
> **[3:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=228)** Open up Visual Studio Code.
>
> **[3:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=231)** I'm gonna close the terminal, because we don't need it right now.
>
> **[3:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=234)** Navigate to servers, web, and open app.js.
>
> **[4:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=241)** Scroll down to just after the views configuration, but before the router.
>
> **[4:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=247)** We're gonna create a new middleware right here.
>
> **[4:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=250)** Start off with app.use to mount a middleware.
>
> **[4:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=255)** Use an anonymous function with the parameters, request, response, and next.
>
> **[4:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=263)** In it, we're gonna console log three things.
>
> **[4:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=266)** So, start off with console.log.
>
> **[4:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=269)** First, the current date in ISO format, so, new date to ISOString.
>
> **[4:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=277)** Then the request method, request.method.
>
> **[4:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=281)** Then, the request original URL.
>
> **[4:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=284)** Request.originalurl.
>
> **[4:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=289)** Finally, return next to move on to the next middleware.
>
> **[4:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=295)** Save the changes to the file.
>
> **[4:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=298)** If we go up to the file menu, there's an entry for save, along with the keyboard shortcut, which is specific to the operating system.
>
> **[5:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=306)** After this point, I'm gonna be using the keyboard shortcut to save.
>
> **[5:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=312)** If we open the terminal up again, you'll see that PM2 restarted the process when we saved the file, just like nodemon does.
>
> **[5:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=319)** Very convenient.
>
> **[5:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=320)** Make sure the browser's up so we can see both, side-by-side.
>
> **[5:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=324)** Let's navigate to localhost 5000.
>
> **[5:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=328)** This time, there's a log message over on the left.
>
> **[5:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=331)** The current time, the method, and the URL.
>
> **[5:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=335)** If we visit a game, now there's a log message that includes the game's ID.
>
> **[5:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=340)** Let's break it by going to an invalid game, like, A-S-D-F.
>
> **[5:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=347)** We get the same error messages, but right before it, is a log message containing what was requested, which, in our case, was A-S-D-F.
>
> **[5:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/problems-with-node-js-console?u=76281980&t=356)** Now that we've found a problem, how can we use the console to help fix it?

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), finally, (2), module (1), default, (1), interface (1)
> **CLI Commands:** node (11), make (2)
> **Env Vars:** pm2 (3), url (2), api (1), iso (1)
> **Tools:** terminal (6), visual studio (1)
> **File Paths:** node.js (4), app.js (1)
> **UI Navigation:** navigate to (2), scroll down (1), open the (1)
> **Definitions:** known as (1), is an  (1), is a  (1)
> **Analogies:** just like (1)

#### Implementing Express error pages
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=0)** - [Instructor] We're going to use Express' built-in middleware to implement some error pages that log to the console.
>
> **[0:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=5)** Then we'll fix that first issue.
>
> **[0:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=8)** Why bother to implement error pages?
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=11)** It's a best practice to implement custom error pages in node applications for a couple of reasons.
>
> **[0:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=16)** First, there's the control over the user experience.
>
> **[0:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=19)** It can be very jarring to get a white page with a little bit of diagnostic information instead of a nicely themed error page.
>
> **[0:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=26)** Also, in the case of 404s, some sites have a custom call-to-action that can direct users to actual content destinations.
>
> **[0:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=34)** Finally, custom error pages give an opportunity to implement logging that is contextually appropriate.
>
> **[0:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=40)** For example, you may not want to log a stack trace if someone goes to a non-existent link in your application.
>
> **[0:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=46)** Let's start with a 404 handler first and we'll log a warning when it happens along with the details about the failure.
>
> **[0:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=53)** Switch over to your editor.
>
> **[0:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=56)** I'm gonna close the terminals, so we can see more of our source code.
>
> **[1:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=60)** In app.js, scroll down to pass the router and create a new middleware.
>
> **[1:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=66)** App.use, and it'll just take a request and a response.
>
> **[1:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=74)** And we're gonna use console.warn with a new date to ISOString, the request.method, the request.originalUrl, and then the string 404.
>
> **[1:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=94)** Then we're going to return response.status(404), and we're gonna render a Pug template that I've already included that is just string 404.
>
> **[1:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=107)** And we're going to pass it.
>
> **[1:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=109)** The title, 404.
>
> **[1:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=112)** Add a comma and then a semicolon and make sure that there's a trailing semicolon and save the changes.
>
> **[2:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=121)** Remember the error message that we saw earlier?
>
> **[2:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=124)** It mentions router.js on line 43.
>
> **[2:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=128)** Let's track that down.
>
> **[2:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=131)** Let's open up the web router and scroll down to line 43.
>
> **[2:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=136)** The problem here is that the helper couldn't find anything and it's requesting the property id of something that doesn't exist.
>
> **[2:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=143)** The solution?
>
> **[2:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=144)** Check if the game exists then send on the request to the next middleware.
>
> **[2:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=148)** So first, you need to include next then check to see if not request.game and then return next.
>
> **[2:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=163)** Save the changes then arrange the browser and the code editor to be next to each other.
>
> **[2:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=170)** Reopen the terminal.
>
> **[2:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=173)** Now, let's try the invalid page again.
>
> **[2:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=177)** Excellent, this time we've got an error message logged and read.
>
> **[3:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=180)** Wait, didn't we use console.warn?
>
> **[3:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=182)** Yes, we did.
>
> **[3:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=183)** This is one of the limitations I mentioned.
>
> **[3:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=187)** Since console.warn is an alias for console.error, it writes to standard error with no indication that it's a warning.
>
> **[3:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=195)** A warning like user error isn't a program error, so why conflate them?
>
> **[3:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=199)** This is another reason why the console isn't the best logging mechanism.
>
> **[3:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=204)** 404s are user-friendly and useful, but what about causing a server error?
>
> **[3:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=208)** The quickest way I know is to corrupt a session.
>
> **[3:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=213)** Open up a new browser window and navigate to localhost, port 8080.
>
> **[3:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=221)** This is going to give us access to the database.
>
> **[3:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=224)** The username is root.
>
> **[3:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=226)** There is no root password because this is just for development and locally installed.
>
> **[3:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=231)** And the database is rps.
>
> **[3:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=234)** Click Login.
>
> **[3:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=236)** Select the Sessions table.
>
> **[3:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=239)** Then click Select Data.
>
> **[4:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=241)** Edit the latest record.
>
> **[4:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=243)** Click Edit.
>
> **[4:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=245)** And let's delete everything and replace it with the word Three.
>
> **[4:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=250)** Click Save.
>
> **[4:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=252)** This is all we need to do with Adminer, so we can close the window.
>
> **[4:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=256)** Now, go back to the browser and reload.
>
> **[4:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=261)** Oh boy.
>
> **[4:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=262)** Look at that.
>
> **[4:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=263)** There's a lot of problems here.
>
> **[4:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=265)** The error message is being displayed to the user, which includes stack traces, file names, and more.
>
> **[4:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=270)** That's magnificently bad.
>
> **[4:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=273)** Raw and debugging information such as stack traces should not be shown directly to end users.
>
> **[4:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=279)** It's a security vulnerability as it discloses how your system works and can give hints about the versions and locations of your software.
>
> **[4:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=286)** All right, so how do we implement an error handling middleware?
>
> **[4:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=290)** Fairly easily, actually.
>
> **[4:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=293)** In Visual Studio Code, let's close the terminal and open up app.js again.
>
> **[5:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=301)** We're gonna start a new middleware at the very, very end.
>
> **[5:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=305)** But the first parameter will be error.
>
> **[5:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=308)** So app.use and then error, request, response, and next.
>
> **[5:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=316)** And an arrow function.
>
> **[5:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=319)** Use a little logic to make sure headers aren't being sent twice, which, depending on where the error occurred, can happen.
>
> **[5:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=326)** So if response.headersSent, return, next error.
>
> **[5:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=335)** Then use console.
>
> **[5:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=338)** error to actually log the error.
>
> **[5:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=343)** Finally, return and render a 500 page.
>
> **[5:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=346)** So return, response.status(500).render and then the template named 500, which I've provided with a title 500.
>
> **[6:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=361)** Trailing comma.
>
> **[6:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=364)** Semicolon and semicolon and we're done.
>
> **[6:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=367)** Save the changes.
>
> **[6:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=369)** Open up the terminal.
>
> **[6:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=371)** Go back to the browser and reload the page.
>
> **[6:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=375)** Instead of a verbose error message, users get a friendlier screaming face.
>
> **[6:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=380)** In the logs, we do actually see a record of the error.
>
> **[6:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=386)** A failure to parse JSON from the session.
>
> **[6:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=391)** So what's missing?
>
> **[6:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=393)** We don't have a timestamp when the error occurred, so we don't know when it happened.
>
> **[6:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=398)** Also, wouldn't it be nice to know what the response code was sent?
>
> **[6:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/implementing-express-error-pages?u=76281980&t=402)** The good news is that we have more logging options beyond node.js' built-in console.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), finally, (2), pass (2), return, (2), switch (1)
> **CLI Commands:** node (2), make (2), find (1)
> **File Paths:** app.js (2), router.js (1), node.js (1)
> **Tools:** terminal (3), visual studio (1)
> **UI Navigation:** scroll down (2), navigate to (1), select the (1)
> **Exercise Files:** template (2), source code (1)
> **Warnings:** warning (3)
> **Code Identifiers:** originalurl (1), headerssent (1)

#### Choosing a logging library
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=0)** - [Instructor] When choosing a logging library, there are a number of features that you should consider.
>
> **[0:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=5)** We'll start with how the log should be formatted.
>
> **[0:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=7)** For each log entry, what data points, if any, will you include?
>
> **[0:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=12)** Do you need to customize your log format?
>
> **[0:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=14)** Do you need to use a standard like the NCSA common log format?
>
> **[0:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=18)** What about writing structured data in formats like JSON?
>
> **[0:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=22)** There's the severity of a log entry.
>
> **[0:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=25)** Node's console supports two logging levels, normal and error.
>
> **[0:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=29)** There's a pseudo warn that is also an error.
>
> **[0:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=31)** In comparison, a common standard is RFC 5425, which defines syslog severities, including eight different severities.
>
> **[0:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=41)** Syslog severities start at debuging, the least severe, then informational, notice, and warning.
>
> **[0:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=48)** Then we start getting into the error conditions, escalating through critical, alert, and finally, emergency.
>
> **[0:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=55)** You don't need to memorize these, but knowing the hierarchy and granularity of severities in whatever system you're using is important.
>
> **[1:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=62)** Log levels communicate meaning, and here's some of the examples of how.
>
> **[1:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=66)** A user screwing up validation may be worth a notice, but not a warning because the system is working correctly.
>
> **[1:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=73)** The database being unavailable, that could be an alert because of its extreme importance.
>
> **[1:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=78)** Why does having different logging levels matter?
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=81)** With log levels, you can react differently depending on severity and filter out log entries that may be too trivial to pay attention to.
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=89)** Also, some loggers format severities differently, such as making errors red.
>
> **[1:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=94)** It can be useful to be selective about log severities in environments, like in production where you shouldn't normally be logging debugging information intended for development.
>
> **[1:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=104)** What about performance?
>
> **[1:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=105)** Node.js's console is synchronous and blocks execution until it's done, therefore, you want to find an asynchronous logging system to maximize performance.
>
> **[1:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=115)** Finally, there's the question of log routing.
>
> **[1:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=118)** Where are the logs being sent?
>
> **[1:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=119)** To a file, to a socket?
>
> **[2:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=122)** Can they be sent to multiple places at the same time?
>
> **[2:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=125)** As an example, routing messages both to the terminal for debugging and to the syslog for aggregation.
>
> **[2:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=132)** That's a lot of criteria.
>
> **[2:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=133)** In short, formatting, severity, performance, and routing are key features to keep in mind.
>
> **[2:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=141)** So, what are some good options for logging libraries?
>
> **[2:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=145)** We'll take a brief look at five, bunyan, debug, log4js, pino, and winston.
>
> **[2:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=153)** Then we're gonna choose one of them for our application.
>
> **[2:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=156)** You should experiment with each on your own to compare the differences for yourself.
>
> **[2:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=161)** The first is bunyan, which is a very opinionated JSON logger, to the point where it literally has a short manifesto.
>
> **[2:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=168)** The opinion is that server logs should be structured so they can be easily parsed, like objects.
>
> **[2:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=174)** That's actually really logical, however, it's not super readable by humans, which is why it includes a command-line tool for producing human-readable output.
>
> **[3:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=183)** Bunyan can route its output to many different places at the same time.
>
> **[3:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=187)** For levels, it includes fatal, error, warn, info, debug, and trace, which is a nice range of granularity.
>
> **[3:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=195)** By the way, the name bunyan is a reference to Paul Bunyan, a giant lumberjack in North American folklore.
>
> **[3:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=202)** The debug module is a very minimal logger.
>
> **[3:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=205)** When I say minimal, it has only one log level and it can only be routed to a single destination, which by default is standard error.
>
> **[3:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=214)** With that said, debug does have some built-in timer functions that are useful for benchmarking.
>
> **[3:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=219)** Debug is great for module development because it can easily be turned off and on with environmental variables.
>
> **[3:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=225)** It's also not great for application logging because it's so minimal.
>
> **[3:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=230)** Log4js is roughly based on the Java project with a similar name, Apache Log4j.
>
> **[3:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=236)** Log4js is flexible and formattable so you can take control over many aspects of logging.
>
> **[4:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=242)** Logs can be routed to multiple destinations, which is useful in production environments.
>
> **[4:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=247)** While including a number of logical logging levels, custom levels can be added as well.
>
> **[4:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=252)** From a performance perspective, log4js can be faster and more reliable than some of the others when logging to the syslog.
>
> **[4:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=259)** Pino is an extremely lightweight but powerful logger that has been optimized for speed.
>
> **[4:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=265)** Pino logs in JSON format only, but it supports common levels like trace, debug, info, warn, error, and fatal.
>
> **[4:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=273)** Like bunyan, pino includes a formatter for human readability.
>
> **[4:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=278)** The last module we'll look at is winston, which is easy to use and very popular.
>
> **[4:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=283)** It's flexible in formatting and in log levels, and is extensible as well if you want to add functionality.
>
> **[4:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=289)** Winston supports routing to multiple destinations and transports.
>
> **[4:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=294)** For performance, winston includes simple profiling to see how long operations take.
>
> **[4:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=298)** By default, winston's logging levels are the same as NPM's, silly, debug, verbose, info, warn, and error.
>
> **[5:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=307)** You can easily specify your own logging levels if these don't work for you.
>
> **[5:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=311)** What's the best practice when choosing a logger?
>
> **[5:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=314)** Simply, just choose a logger and use it throughout.
>
> **[5:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=317)** Having different log formats, routing and transports, and so forth is a nightmare to maintain.
>
> **[5:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=322)** Just pick something and stick with it.
>
> **[5:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=325)** In this course, we're going to use winston, as it's the most common, it's very flexible, and it's easy to get started.
>
> **[5:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=332)** Try out the others as well, as they all have their advantages.
>
> **[5:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/choosing-a-logging-library?u=76281980&t=336)** How can we add winston to our project and start logging?

> [!info]- Semantic Content
>
> **Code Keywords:** module (3), finally, (2), super (1), default, (1)
> **Env Vars:** json (3), ncsa (1), rfc (1), npm (1)
> **Definitions:** is a  (5), is an  (1)
> **CLI Commands:** node (2), find (1), apache (1), npm (1)
> **Warnings:** warning (2), keep in mind (1)
> **File Paths:** node.js (1)
> **Documentation:** rfc (1)
> **Tools:** terminal (1)

#### Adding Winston for Node logging
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=0)** - [Instructor] We're gonna add the Winston Logger to our project and make it available to all our services.
>
> **[0:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=5)** The most practical way to add a logger is to create a shared logging library.
>
> **[0:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=10)** There's a few reasons for this.
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=11)** First of all, you can unify the configuration throughout the entire system.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=15)** There's also the prevention of duplication of code along with configuration, especially if you have customizations, which we will.
>
> **[0:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=23)** If you change your mind about which logging library your using, a centralized logging library makes it an easy refactor.
>
> **[0:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=30)** Often, logging libraries exist as separate modules that are included in any projects that need to log.
>
> **[0:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=36)** In our case, it's not practical to make a separate module, so instead we'll just create a folder called shared, under servers.
>
> **[0:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=44)** What should we log?
>
> **[0:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=45)** A good first thing to log with Winston, is to add a start up logger that declares when a server is running and on which port.
>
> **[0:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=51)** Let's get started.
>
> **[0:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=54)** From Visual Studio code make sure the terminal's open.
>
> **[0:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=58)** If the logger is still running, press control C to exit.
>
> **[1:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=62)** We're going to use npm to add Winston and press return.
>
> **[1:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=71)** That's all we need to do from the terminal, so let's close it.
>
> **[1:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=76)** Next, we're gonna create the unified logger.
>
> **[1:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=79)** Under servers right click and go to New Folder.
>
> **[1:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=83)** We'll call it shared, and then under that a new folder called live.
>
> **[1:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=92)** Create a new file in there called logger.js.
>
> **[1:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=99)** Start right at the top, const winston = require winston.
>
> **[1:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=107)** Then, const logger = new winston.logger, and then we'll give it a configuration of an object, transports is a new array of new winston.transports.Console, with a capital C for the console, invoke the method, follow it by a comma, and a trailing semicolon.
>
> **[2:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=137)** Finally, module.exports = logger.
>
> **[2:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=143)** Save the file.
>
> **[2:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=145)** Now we'll add a start up logger.
>
> **[2:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=147)** Open up Web, index.js.
>
> **[2:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=151)** We'll have a new require, so const logger = require, downer directory, then shared/lib/logger.
>
> **[2:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=166)** Under the server, we're gonna list it on our port and then continue and create a new event, on listening, we're going to invoke anonymous function, and use logger.info with a following message, using a back tic template, HTTP server listening on port, and then we'll use dollar sign, config.server.port, close that off, close the back tic, and close the parenthesis.
>
> **[3:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=209)** Excellent, save the changes, and open up the terminal again.
>
> **[3:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=215)** Type pm2 logs.
>
> **[3:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=219)** There's a new start up entry.
>
> **[3:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=221)** HTTP server listening on port 5000.
>
> **[3:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=224)** Excellent.
>
> **[3:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=226)** However, we don't know what time this happened.
>
> **[3:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=229)** Let's configure the logger to include timestamps and some color to improve readability.
>
> **[3:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=235)** Close the terminal, then open up logger.js again.
>
> **[4:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=240)** Instead of this empty invocation, we're gonna pass an object.
>
> **[4:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=245)** We'll give it two parameters, timestamp, which will be new date toisostring.
>
> **[4:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=256)** And then a second parameter, colorize is true, make sure there's a trailing comma, then save the changes.
>
> **[4:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=265)** The server will restart.
>
> **[4:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=267)** Let's check out the terminal by opening it back up.
>
> **[4:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=271)** This time we've got a timestamp and some color.
>
> **[4:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=275)** We were logging requests manually using the console.
>
> **[4:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/adding-winston-for-node-logging?u=76281980&t=278)** Do you think it's time we gave it an upgrade?

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), const (3), require (3), module (2), this. (1)
> **Tools:** terminal (5), visual studio (1)
> **CLI Commands:** make (4), npm (1)
> **File Paths:** logger.js (2), index.js (1)
> **Env Vars:** http (2)
> **Ports:** port 5000 (1)
> **UI Navigation:** go to (1)
> **Exercise Files:** template (1)

#### Request logging with Morgan
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=0)** - [Instructor] It's good to avoid reinventing the wheel, and we made a pretty square one a couple of videos ago when we used the console to log requests.
>
> **[0:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=7)** As we saw, it worked, but it wasn't optimal.
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=11)** Is there a better solution?
>
> **[0:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=13)** Yes, and it's called morgan.
>
> **[0:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=16)** Morgan is a no-JS HTTP request logger middleware which supports servers including Express.
>
> **[0:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=23)** When logging, morgan includes a number of details about the HTTP method, path requested, and content length.
>
> **[0:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=31)** Morgan logs once the request is sent so it can include the HTTP status code and response time, which is really useful for debugging and finding slow performance.
>
> **[0:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=41)** Optionally, morgan can also include the referrer and user agent strain.
>
> **[0:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=46)** Morgan can be used with most loggers, including Winston.
>
> **[0:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=50)** Morgan provides some very convenient logging format defaults including the standard Apache combined log output.
>
> **[0:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=57)** It also provides a system of token replacements so you can easily create your own, or customize it.
>
> **[1:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=63)** We're going to replace our console logger with morgan.
>
> **[1:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=66)** Switch over to VS Code.
>
> **[1:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=69)** Press ctrl + c to exit out of the logger.
>
> **[1:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=73)** From the terminal, we're gonna add morgan to our project.
>
> **[1:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=76)** So npm add morgan.
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=81)** Perfect.
>
> **[1:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=82)** That's all we need from the terminal for now, so close it.
>
> **[1:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=85)** And let's close our other windows.
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=89)** We're gonna create a unified request logger using morgan.
>
> **[1:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=92)** Create a new file in the shared lib called requestLogger.js.
>
> **[1:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=101)** This is a pretty short file.
>
> **[1:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=103)** First, we're going to require morgan, so const morgan = require('morgan').
>
> **[1:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=111)** Let's use the dev format, which includes response times and is pretty short.
>
> **[1:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=115)** Module.exports = morgan, and then pass it the string dev.
>
> **[2:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=124)** Save the file, then let's open the web app to include it.
>
> **[2:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=130)** Up at the top, we're going to start a new const named requestLogger and then we're going to require in a go back directory, then shared, lib, requestLogger.
>
> **[2:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=147)** Then scroll down to find a request logger that we made manually.
>
> **[2:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=152)** Here it is.
>
> **[2:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=153)** Now we're just going to replace it completely with just requestLogger.
>
> **[2:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=159)** Save, then arrange your editor with the terminal next to your browser window.
>
> **[2:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=168)** I'm gonna open the terminal back up, and type pm2 logs to see the logs in real time.
>
> **[2:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=174)** Now let's go to the home page.
>
> **[2:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=179)** We get an error message because we still have that corrupted session.
>
> **[3:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=184)** However, since we still have the corrupted session, we scroll up, notice we get the syntax error unexpected token T in JSON because we corrupted the session manually.
>
> **[3:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=196)** The middleware we just added is not going to be invoked.
>
> **[3:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=200)** This is actually desirable behavior, but it's not good for testing.
>
> **[3:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=204)** Since we have that corrupted session, we're going to need to delete the cookie.
>
> **[3:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=209)** Over in Chrome, go to More Tools, and go to Developer Tools.
>
> **[3:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=217)** Let's maximize the window for just a moment, and select Application, Cookies, and there's the cookie in question.
>
> **[3:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=228)** There's the connect.sid, that's our session cookie.
>
> **[3:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=232)** Select connect.sid and then click delete selected.
>
> **[3:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=239)** Close the console and reload the page.
>
> **[4:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=245)** This time, morgan logs the request along with the status code, the duration that it took, 170 milliseconds, and the size of the response.
>
> **[4:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=255)** However, it's not including the timestamp that we set up with the logger.
>
> **[4:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=259)** This is because we didn't actually set it up with the logger, it's just using the console for now.
>
> **[4:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=264)** To keep things consistent, let's configure morgan to log with Winston.
>
> **[4:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=268)** Open up the request logger again, and close the terminal.
>
> **[4:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=274)** To begin, we'll require the logger in addition to morgan.
>
> **[4:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=278)** Const logger = require, and relative path, logger.
>
> **[4:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=285)** Morgan takes two parameters: format, and options, and we're gonna be building these out.
>
> **[4:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=290)** For readability, we're gonna create a constant named const format and assign it to the value of dev.
>
> **[5:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=301)** Then const options, which is an object.
>
> **[5:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=306)** We're going to specify the destination of the right stream, which accepts a message.
>
> **[5:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=310)** We're going to use an arrow function to send the message to Winston's logger.info.
>
> **[5:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=315)** By default, morgan includes a new line, so we'll trim the result.
>
> **[5:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=318)** So, put it all together.
>
> **[5:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=320)** The right stream is a new object.
>
> **[5:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=325)** We're going to write message with an arrow function, logger.info, message.trim.
>
> **[5:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=335)** A trailing comma here, here, and then a semicolon.
>
> **[5:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=340)** Finally, we're going to module.exports morgan format and then options.
>
> **[5:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=349)** Save the file, open the terminal back up, then go back to the browser and reload.
>
> **[5:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=357)** This time, the log entry includes the time.
>
> **[6:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=361)** When logging requests, there's a couple best practices to keep in mind.
>
> **[6:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=365)** Similar to logging in general, you should consistently log requests with the same format across applications.
>
> **[6:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=372)** The easiest way to do this is to centralize your request logging format and configuration for reuse.
>
> **[6:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=378)** Check out the morgan documentation on the package home page.
>
> **[6:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=382)** There are a number of different formats including combined, short, and others.
>
> **[6:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=386)** You can also make your own, either using their tokens, or by creating one from scratch.
>
> **[6:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/request-logging-with-morgan?u=76281980&t=391)** We're logging requests and web now, but how do we follow the path of a single request across multiple log entries?

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), require (5), const (5), module (2), delete (2)
> **UI Navigation:** open the (3), go to (3), scroll down (1), scroll up (1)
> **Tools:** terminal (6), vs code (1)
> **CLI Commands:** apache (1), npm (1), find (1), make (1)
> **Code Identifiers:** requestlogger (4)
> **Env Vars:** http (3), json (1)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** as we saw (1), go back to (1)

#### Correlating requests in logs
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=0)** - [Instructor] When logging system activity it's important to be able to relate logging events with the request that triggered them.
>
> **[0:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=6)** A single request can create any number of log entries which compounds the problem.
>
> **[0:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=12)** How can we correlate requests in logs?
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=15)** The process of tracing a single request, across multiple logs requires a unique identifier that is generated by each request.
>
> **[0:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=23)** This unique identifier is commonly known as a request ID.
>
> **[0:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=28)** In Express, a request ID can be included as part of the request object.
>
> **[0:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=32)** Then, any time a log entry is created, include that unique identifier.
>
> **[0:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=38)** Why bother to do this?
>
> **[0:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=40)** Here's an example of five log entries that were triggered by three requests, a user was created, there's a failed CAPTCHA, a welcome message was sent, login failed, then succeeded.
>
> **[0:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=50)** While these are all important events we can't see what happened as a result of a particular request.
>
> **[0:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=56)** Here's that exact same example, but this time with unique request IDs.
>
> **[1:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=60)** Instead of having log entries, that lack cohesion we can see all the log entries associated with a single request by matching the request ID.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=68)** The request that created a user, also triggered a welcome message.
>
> **[1:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=73)** The request with the CAPTCHA failure, also was associated with the failed login, and the last request for a login succeeded.
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=81)** How can we start correlating requests in our rock, paper, scissors game?
>
> **[1:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=86)** There's an Express Middleware module called express-request-id that facilitates transaction tracing by managing request IDs.
>
> **[1:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=94)** It listens for a header named X-Request-Id and generates a UUID if it's not found.
>
> **[1:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=101)** Finally, it attaches an ID to the request object.
>
> **[1:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=104)** It's small but it's really important.
>
> **[1:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=108)** We're going to add express-request-id to our services then we'll update the Morgan Middleware requestLogger to include the requestId, let's get started.
>
> **[1:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=118)** Switch over to Visual Studio code, open up the terminal.
>
> **[2:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=124)** Press Control + C to break out of the logger and then we're going to use npm to add express-request-id.
>
> **[2:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=137)** Let's start with the web server, open up servers, web, app.js and close the terminal.
>
> **[2:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=147)** At the top with the other requires we'll start const, expressRequestId equals require express-request-id.
>
> **[2:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=160)** And we'll initialize it by calling it once, then use the Middleware, app.use expressRequestId.
>
> **[2:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=174)** Save the changes.
>
> **[2:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=176)** Now let's update our request logger to use a custom format that includes the request ID.
>
> **[3:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=182)** Open up the request logger, earlier I mentioned that Morgan supports custom tokens, let's create one now for request IDs.
>
> **[3:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=191)** Before our configuration we're gonna call Morgan's token method.
>
> **[3:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=198)** The first parameter is the name of the token, which is requestId, this is followed by a function that formats the token, given a request and responds.
>
> **[3:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=209)** Ours will be very simple just request then the arrow function and then request.id, add a semicolon, and then we're gonna update our format.
>
> **[3:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=223)** Instead of the dev preset we're gonna create our own out of tokens.
>
> **[3:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=228)** We'll start with colon for the token, requestId, then method, url, status, response-time,
>
> **[4:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=241)** followed by a label ms.
>
> **[4:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=245)** Save the file, then arrange the editor and the browser to be next to each other.
>
> **[4:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=252)** Open up the terminal, start the logger, pm2 logs and then reload.
>
> **[4:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=261)** Excellent!
>
> **[4:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=262)** We've got a request ID logging, now that it's dialed in, how quickly can we add it to our other services?
>
> **[4:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=268)** In VSCode open servers, players, app.js.
>
> **[4:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=276)** We'll close the terminal to save some space and we're gonna require our two Middlewares, the request logger, const requestLogger equals require go up a directory to shared/lib/requestLogger and express request ID.
>
> **[4:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=297)** Const expressRequestId equals require express-request-id.
>
> **[5:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=306)** Remember to invoke it and then follow it by a semicolon.
>
> **[5:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=311)** Before the router use the two Middlewares, first, app.use expressRequestId then app.use requestLogger.
>
> **[5:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=325)** Save the file, open up the terminal, and then go back to the browser.
>
> **[5:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=330)** I'm gonna full screen for just a moment, from the browser go down to More Tools, Developer Tools, under Application we're gonna delete the connect.sid, close it, arrange it so you can see the logs again.
>
> **[5:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=355)** Now we're gonna reload the page.
>
> **[6:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=360)** This time we've got logs and request IDs from both web and players.
>
> **[6:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=365)** Excellent!
>
> **[6:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=366)** However, notice that the request IDs for web and players are different.
>
> **[6:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/correlating-requests-in-logs?u=76281980&t=372)** How do we follow the path of a request as it interacts with potentially multiple microservices?

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), require (4), const (3), function (2), module (1)
> **Code Identifiers:** requestlogger (4), expressrequestid (4), requestid (3)
> **Tools:** terminal (5), visual studio (1)
> **Env Vars:** captcha (2), uuid (1)
> **File Paths:** app.js (2)
> **CLI Commands:** npm (1)
> **Cross-References:** go back to (1)
> **Definitions:** known as (1)

#### Cross-application request correlation
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=0)** - [Instructor] The problem of correlating logs for a request is compounded when working with multiple services.
>
> **[0:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=6)** A single request can potentially call multiple microservices in order to build a single response.
>
> **[0:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=12)** How can you track a single request without having each service create unique identifiers?
>
> **[0:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=18)** This solution is known as cross-application request correlation.
>
> **[0:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=22)** It sounds complex, but, honestly, it's more about extending what we've already been doing.
>
> **[0:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=28)** When making your request to another application or system, include the request ID.
>
> **[0:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=33)** Practically, this means setting an X-Request-Id header in any requests made.
>
> **[0:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=38)** The system receiving the request with the request ID then uses the provided request ID it's given for its logging.
>
> **[0:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=46)** This is a great technique, but it does have some practical drawbacks.
>
> **[0:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=50)** To fully take advantage of this technique can take a lot of work, especially if the application wasn't designed to include them from the beginning.
>
> **[0:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=57)** Every system needs to be able to generate and/or receive request IDs.
>
> **[1:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=61)** Every request needs to include the request ID.
>
> **[1:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=65)** What can be done to mitigate some of this implementation effort?
>
> **[1:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=69)** You can customize a logging system like Winston to include a request ID.
>
> **[1:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=74)** With a unified system for making requests, you can ensure that the request ID is being sent in the headers.
>
> **[1:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=80)** In client libraries, you can add a requirement that anything using a particular function must include a request ID and throw a type error if it's missing.
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=89)** Finally, like coding standards and test coverage, the goal of implementing transaction tracing should be continuous improvement over time.
>
> **[1:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=97)** Be patient, and don't try to change everything at once.
>
> **[1:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=102)** In our rock-paper-scissors application, the players and web apps did not share request IDs.
>
> **[1:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=107)** Let's change that by including support for request IDs in our httpClient.
>
> **[1:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=114)** Switch over to Visual Studio Code.
>
> **[1:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=117)** Let's hide the console, and then Close All, and then we're gonna open web, lib, httpClient.
>
> **[2:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=130)** We're gonna add a second parameter, requestId.
>
> **[2:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=136)** Underneath the options, let's add a check.
>
> **[2:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=140)** If there's a request ID, so if requestId, set the headers to merge with the existing headers, and add a new header, X-Request-Id, that is set from the request ID passed into the function.
>
> **[2:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=154)** Options.headers equals merge options.headers, and then, a new string, X-Request-Id.
>
> **[2:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=169)** We'll set that to the requestId.
>
> **[2:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=174)** Add a comma, and a semicolon.
>
> **[2:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=178)** Save the changes, then open up the playersClient.
>
> **[3:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=183)** There are just two functions in here, Create and Get.
>
> **[3:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=187)** Let's add the request ID to Create.
>
> **[3:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=191)** We'll update the documentation, as well.
>
> **[3:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=194)** First, we'll add requestId, and then we're gonna call the httpClient with the second parameter, requestId.
>
> **[3:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=207)** And then, add some documentation, so @param it's a string, the requestId and the description is X-Request-Id.
>
> **[3:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=221)** Looks good, save the changes, and the final step is to update the Calls.
>
> **[3:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=227)** Open up webs app.js.
>
> **[3:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=231)** Let's find the middleware that sets up the player.
>
> **[3:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=234)** Alright, here it is.
>
> **[3:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=236)** Under const result equals await playersClient.create, let's also specify the request.id.
>
> **[4:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=245)** Save the changes, then open up the browser.
>
> **[4:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=249)** We're gonna delete that player cookie again, so go down to More Tools, Developer Tools, connect.sid, delete selected, and that's that.
>
> **[4:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=262)** Now, arrange the browser next to the code editor so we can see both at the same time.
>
> **[4:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=267)** And open the terminal.
>
> **[4:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=270)** Now, we're gonna reload the page.
>
> **[4:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=274)** This time, the log entries for both services show the same request ID.
>
> **[4:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=280)** Throughout this chapter, we've been exploring effective logging strategies.
>
> **[4:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=284)** We started with the way and what of logging.
>
> **[4:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=287)** Then, we discussed some of the problems of the console, then proceeded to use it to highlight its limitations.
>
> **[4:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=293)** We implemented error pages in Express and fixed our first bug.
>
> **[4:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=298)** We compared a number of different logging libraries, then chose Winston and added it to the application.
>
> **[5:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=305)** We also added Morgan as a request logger.
>
> **[5:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=309)** Correlation of requests across log entries was accomplished with express-request-id.
>
> **[5:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=314)** Finally, we implemented cross-application request correlation by passing X-Request-Id headers between services.
>
> **[5:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=322)** Logging is an important component of debugging and performance, but it doesn't solve all of our problems.
>
> **[5:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/cross-application-request-correlation?u=76281980&t=329)** What are some more ways to debug?

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (2), finally, (2), delete (2), throw (1)
> **Code Identifiers:** requestid (6), httpclient (3), playersclient (2)
> **Definitions:** known as (1), is a  (1), is an  (1)
> **Tools:** visual studio (1), terminal (1)
> **File Paths:** app.js (1)
> **CLI Commands:** find (1)
> **Cross-References:** we discussed (1)
> **Documentation:** the documentation (1)

#### Challenge: Cross-application request IDs
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=3)** - [Instructor] Welcome to the chapter three challenge, where we'll apply the cross-application transaction tracing techniques we've been discussing the entire rock paper scissors application.
>
> **[0:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=13)** This challenge is optional, but it's a great way to reinforce what we've done in this chapter.
>
> **[0:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=19)** There are four overarching objectives for this challenge.
>
> **[0:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=22)** We updated both web and players with express-request-id and the request logger, but the game service still needs to be updated.
>
> **[0:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=30)** We're logging the HTTP port when listening on web, but not on players and games.
>
> **[0:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=36)** We added support for request ID in the HTTP clients.
>
> **[0:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=40)** Let's require it to ensure everything is logged correctly.
>
> **[0:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=43)** Since it will be required, we'll need to update all of the usages of the games and players clients to send a request ID.
>
> **[0:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=50)** Let's break each objective down a little bit more.
>
> **[0:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=53)** There are two steps for express-request-id and requestLogger in games, and we've already done it elsewhere.
>
> **[1:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=60)** We just need to add and use express-request-id in the games app and add and use the request logger in the same file.
>
> **[1:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=67)** We've already logged the port listening in web, so we'll be applying the same technique.
>
> **[1:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=72)** In games, we'll add the logger to the games index, then log the port when listening.
>
> **[1:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=77)** We'll do the same for players and add the logger to the players index, then log the port when listening.
>
> **[1:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=83)** Requiring the request ID in HTTP clients will take a little bit more work.
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=89)** We already added support for request ID to the HTTP client, but we're going to make the request ID required and throw an exception if it's missing.
>
> **[1:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=98)** Then we'll update every usage of the HTTP client in gamesClient to include the request ID.
>
> **[1:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=105)** Finally we'll update the playersClient in the same way.
>
> **[1:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=108)** The last steps are to update all of the uses of the gamesClient in web and all of the uses of the playersClient in web to include the request ID.
>
> **[1:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=119)** I'd recommend doing some searching and testing to help with this.
>
> **[2:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=122)** Throwing the exception will absolutely highlight anything missed.
>
> **[2:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=126)** It should take about 15 minutes to complete this challenge.
>
> **[2:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/challenge-cross-application-request-ids?u=76281980&t=130)** When you're finished, watch the next video to see my solution.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), require (1), throw (1), this. (1)
> **Code Identifiers:** gamesclient (2), playersclient (2), requestlogger (1)
> **Env Vars:** http (5)
> **CLI Commands:** make (1)
> **Cross-References:** next video (1)
> **Speakers:** - [instructor] (1)

#### Solution: Cross-application request IDs
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=0)** (light music)
>
> **[0:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=3)** - [Instructor] Here's my solution to add cross application transaction tracing to the entire Rock.Paper.Scissors application.
>
> **[0:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=10)** This is an opportunity to compare approaches and development styles.
>
> **[0:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=14)** All right here we go.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=15)** The first thing we're gonna do is add express requestId and requestLogger to servers, games, app.js.
>
> **[0:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=23)** So let's open it up, servers, games, app.js.
>
> **[0:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=28)** We've actually already done this work in players, so let's go take a look.
>
> **[0:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=32)** There's players app.js and there's the require statements.
>
> **[0:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=37)** So let's paste those in.
>
> **[0:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=41)** And let's look back at the use statements and copy those.
>
> **[0:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=49)** There's the requestLogger and expressRequestId and there's the use statements, perfect.
>
> **[0:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=55)** And actually if we compare the two files they're exactly the same.
>
> **[1:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=61)** The next thing that we're going to do is log the port when the server starts up.
>
> **[1:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=66)** So we're gonna add the logger to servers games index and servers players index.
>
> **[1:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=72)** Let's open those files.
>
> **[1:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=74)** We can close apps and open up the indexes.
>
> **[1:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=78)** We want both of them open so I'll double click.
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=81)** Now we actually already did this to web.
>
> **[1:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=85)** There it is.
>
> **[1:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=87)** So we're gonna use that as a donor.
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=89)** We're going to copy the logger, paste it into each.
>
> **[1:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=98)** And we've got the on listening event.
>
> **[1:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=103)** So we got a little bit of formatting inconsistency there.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=106)** So we'll make that match.
>
> **[1:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=110)** So on listening and we'll do it there, too.
>
> **[1:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=119)** Getting a little bit of syntax error there because of that trailing semicolon.
>
> **[2:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=128)** There we go, perfect.
>
> **[2:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=131)** All right, games and players looking exactly the same.
>
> **[2:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=134)** So that adds the logger and the listener.
>
> **[2:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=138)** Let's see these in action.
>
> **[2:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=141)** I gonna arrange it so I can see the terminal.
>
> **[2:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=144)** That's nice and open.
>
> **[2:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=146)** We'll do pm2 logs.
>
> **[2:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=149)** We've got the listen for the games server and the player server.
>
> **[2:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=153)** Perfect.
>
> **[2:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=154)** That's just what we need.
>
> **[2:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=156)** The next step is to require requestId in the HTTP clients.
>
> **[2:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=161)** So we can close the terminal, full screen, close everything, and our work in servers games and servers players is done.
>
> **[2:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=172)** Let's go into web.
>
> **[2:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=175)** We're gonna take a look at lib httpClient.
>
> **[2:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=179)** So we're gonna make some changes here.
>
> **[3:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=181)** Now we already have some logic if requestId.
>
> **[3:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=184)** We're not gonna keep that logic because we're gonna actually require it.
>
> **[3:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=188)** But we do need the contents here.
>
> **[3:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=191)** So let's paste it there.
>
> **[3:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=193)** So there's no if.
>
> **[3:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=195)** We're always gonna set the options headers no matter what and it's gonna override user options even though I don't think anybody would ever try to override it especially if there's an explicit requestId.
>
> **[3:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=206)** But so it goes.
>
> **[3:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=208)** Let's throw this right up at the top.
>
> **[3:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=211)** So if requestId, and we'll actually invert it, if no requestId and then we're gonna throw new TypeError and say httpClient requires requestId!
>
> **[3:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=227)** Let's make it emphatic.
>
> **[3:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=230)** Trailing semicolon.
>
> **[3:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=232)** So we've got the check.
>
> **[3:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=234)** This requires requestId.
>
> **[3:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=235)** If it's not there throw.
>
> **[3:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=238)** Set the options and then set the options headers by merging the headers, if there's any, with X-Request-I'd, excellent.
>
> **[4:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=249)** That's what we need.
>
> **[4:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=250)** Now we need to update the gamesClient to use requestId.
>
> **[4:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=256)** And also the playersClient.
>
> **[4:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=259)** So we've actually already done this for one of them in the playersClient.
>
> **[4:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=264)** So we're going to copy that documentation and start applying it to the gamesClient.
>
> **[4:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=273)** So we got the requestId.
>
> **[4:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=275)** Just start cranking through this.
>
> **[4:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=278)** Add a second parameter and pass it.
>
> **[4:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=284)** Second parameter and pass it.
>
> **[4:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=287)** Actually I'll go through and just do this for each one of them and then do a documentation pass at the end.
>
> **[4:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=299)** So there's judge.
>
> **[5:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=304)** Rules.
>
> **[5:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=307)** And that's the last of them.
>
> **[5:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=310)** All right, documentation
>
> **[5:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=320)** for the fetch, for the update, for the judge, and for the rules.
>
> **[5:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=333)** Okay, sanity check.
>
> **[5:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=335)** There's requestId.
>
> **[5:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=338)** There it is, there it is, there it is.
>
> **[5:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=341)** Use it, pass it, documentation.
>
> **[5:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=345)** One, two, three.
>
> **[5:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=347)** One, two, three.
>
> **[5:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=348)** All right.
>
> **[5:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=349)** There's the gamesClient.
>
> **[5:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=351)** And let's make sure that the playersClient has everything.
>
> **[5:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=355)** Now I'm gonna let you in on a little bit of a dirty secret.
>
> **[5:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=359)** So we've got this get and we're gonna update it.
>
> **[6:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=365)** However, we never actually use it.
>
> **[6:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=369)** This is an artifact left over from an earlier version of this demonstration application where I used to have player names that were randomly generated and I decided to cut that out because it wasn't really adding anything to the course, and it was easier just to have the player IDs but that also means that I have this phantom get which is gonna be there.
>
> **[6:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=394)** If you wanted to extend the game system to include names or other meta data about the players, you'd be using the get.
>
> **[6:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=401)** So that's done.
>
> **[6:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=402)** We've updated the playersClient and the gamesClient.
>
> **[6:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=406)** Each one of them has requestId's.
>
> **[6:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=409)** Final step is to update the client usage with requestId.
>
> **[6:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=413)** So we can close these and then I'm going to search web.
>
> **[7:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=421)** So let's find in folder and we're going to look for gamesClient.
>
> **[7:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=429)** So there's 10 usages.
>
> **[7:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=432)** So this will also give us a good template to know what we're doing.
>
> **[7:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=438)** All right, so gamesClient fetch request.id and there's a create.
>
> **[7:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=447)** We're gonna pass the request.id.
>
> **[7:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=449)** There's a get.
>
> **[7:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=452)** There's rules which actually only takes one parameter.
>
> **[7:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=459)** Let's see what else.
>
> **[7:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=460)** There's an update.
>
> **[7:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=464)** There's another update.
>
> **[7:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=467)** There's a judge.
>
> **[7:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=471)** And that looks to be it.
>
> **[7:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=474)** So let's take a look here.
>
> **[7:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=477)** Okay, there's the request.id, request.id, request.id, request.id, request.id, request.id.
>
> **[8:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=484)** That update actually went across multiple lines, but there's the request.id and request.id.
>
> **[8:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=491)** All right.
>
> **[8:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=492)** Theoretically we are done.
>
> **[8:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=497)** So let's see this in action.
>
> **[8:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=500)** Let's arrange the screen so we can see everything all at once.
>
> **[8:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=507)** Clear the terminal.
>
> **[8:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=514)** All right.
>
> **[8:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=516)** Quickly we will go to application.
>
> **[8:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=521)** Rearrange that for a second.
>
> **[8:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=523)** Delete that cookie.
>
> **[8:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=528)** All right, let's do this.
>
> **[8:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=531)** Fantastic.
>
> **[8:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=532)** Okay, so it created the players.
>
> **[8:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=536)** It's getting the games.
>
> **[8:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=538)** We've got the requestId in there.
>
> **[9:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=541)** And it is the same for each one of those.
>
> **[9:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=543)** All right, let's go through.
>
> **[9:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=546)** There's the game.
>
> **[9:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=548)** Let's join the game.
>
> **[9:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=550)** Those are consistent.
>
> **[9:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=552)** So it made the change and redirected.
>
> **[9:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=555)** There it is.
>
> **[9:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=556)** I succeeded and I won.
>
> **[9:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=559)** Hey, good job me.
>
> **[9:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=561)** There we have it.
>
> **[9:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=562)** Implementing these techniques takes time, but the end result is worth it in my opinion.
>
> **[9:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/solution-cross-application-request-ids?u=76281980&t=567)** Thanks for taking an interest in challenging yourself.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), pass (5), require (3), throw (3), override (2)
> **Code Identifiers:** requestid (14), gamesclient (6), playersclient (4), requestlogger (2), httpclient (2)
> **CLI Commands:** make (4), find (1)
> **File Paths:** app.js (3)
> **Tools:** terminal (3)
> **Definitions:** is an  (2), means that (1)
> **Env Vars:** http (1)
> **UI Navigation:** go to (1)


### 4. Debugging Node.js Applications

#### Debugging isn't just logging
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=0)** - [Instructor] Nobody wants their application to fail.
>
> **[0:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=2)** In the last chapter, we focused on ways to record activity and errors consistently.
>
> **[0:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=7)** Knowing about problems is important, but that's only part of the challenge.
>
> **[0:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=12)** In this chapter, we'll focus on ways to debug Node.js software and eliminate errors we've identified.
>
> **[0:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=19)** We'll start by exploring different ways to locate problems in an application.
>
> **[0:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=23)** Then we'll use Node's built in debugger to take complete control over a Node.js process to see what's happening and how.
>
> **[0:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=31)** We'll compare three different debugging techniques, starting with Node's built in debugging, then Chrome's DevTools debugging, and finally, Visual Studio Code's debugging.
>
> **[0:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=41)** Let's start with a holistic look at debugging, which isn't just logging.
>
> **[0:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=46)** What does debug actually mean?
>
> **[0:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=49)** The term debug means to identify and remove errors from software.
>
> **[0:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=53)** We've covered some of the identification already, but clearly there's more to debugging than just logging.
>
> **[0:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=58)** Debugging is a combination of many things.
>
> **[1:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=61)** Logging helps by including a record of an error and hopefully some context.
>
> **[1:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=66)** In order to fix a problem, we need steps for reproducing the problem.
>
> **[1:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=70)** That way, we can verify that we have the correct solution.
>
> **[1:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=74)** Knowing what is working is also important, as it narrows down the possibilities of what is malfunctioning.
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=81)** Finally, debugging includes the act of finding where the problem is occurring, and why.
>
> **[1:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=86)** The last part can be difficult, so how can we approach it?
>
> **[1:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=90)** There are a number of different approaches to locating bugs, and we'll discuss each in turn.
>
> **[1:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=95)** They include splitting, which is also known as binary search, hypothesizing, experimentation, and rubber ducking.
>
> **[1:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=104)** That last one isn't a joke.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=106)** Let's start with splitting.
>
> **[1:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=108)** Splitting is a technique that helps speed up the search process.
>
> **[1:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=112)** The goal is to find a midpoint between two locations where the problem can be occurring.
>
> **[1:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=117)** Then we experiment by adding logging or other indicators that will check the results.
>
> **[2:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=121)** If it's not in the first half, it's in the second half.
>
> **[2:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=124)** This technique is also known as binary search, which is a fundamental computer science algorithm.
>
> **[2:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=130)** It's not the most efficient, but it's effective.
>
> **[2:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=132)** Hypothesizing is a more nuanced approach than just splitting up the code.
>
> **[2:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=137)** In short, we'd use our knowledge of the system to rule out sections where the problem doesn't exist.
>
> **[2:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=143)** Then we'd choose a hypothesis about where a problem could be.
>
> **[2:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=147)** Finally, we'd run an experiment to test the hypothesis.
>
> **[2:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=151)** A less formal way to explain hypothesizing is, I think the problem is here because, then testing to see if that's really the case.
>
> **[2:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=160)** Another way to search for the problem is through experimentation and observation of the system.
>
> **[2:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=165)** This can include trying different test cases, to see if the problem still exists.
>
> **[2:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=171)** We can also add more logging in places where we think the problem is happening.
>
> **[2:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=175)** Finally, we can use a debugger to control program execution to see exactly what the program is doing.
>
> **[3:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=182)** We'll discuss the use of a debugger in the next video.
>
> **[3:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=185)** Finally, there's rubber ducking.
>
> **[3:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=188)** It's name is a reference to a story in the book The Pragmatic Programmer.
>
> **[3:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=192)** Basically, a programmer would carry around a rubber duck and explain their program line by line to the duck.
>
> **[3:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=199)** The act of explaining the problem to someone else in describing what the code should and shouldn't be doing often reveals problems, and a deeper understanding of what the program is doing.
>
> **[3:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=209)** By talking to something inanimate, like a rubber duck, you don't have to bother or interrupt anyone who's busy.
>
> **[3:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=216)** There's no one way to debug software, and often it takes a combination of several of these techniques to locate the source of a problem.
>
> **[3:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=225)** I mentioned the use of a debugger just a moment ago, and Node has one built in.
>
> **[3:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-isn-t-just-logging?u=76281980&t=229)** Let's learn how to use it.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (5), let (3), case. (1)
> **Definitions:** is a  (5), known as (2)
> **CLI Commands:** node (5), find (1)
> **File Paths:** node.js (2)
> **Cross-References:** in the last (1), in the next (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Introducing Node's built-in debugger
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=0)** - [Instructor] Node.js includes a debugger that's already built in.
>
> **[0:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=3)** What is it and what can it do?
>
> **[0:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=6)** Node's debugger is an out-of-process debugging utility, which means it's external to program execution.
>
> **[0:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=13)** The debugger controls and provides deep inspection of a Node.js process.
>
> **[0:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=18)** The debugger is accessible by a V8 inspector agent which can be configured as part of Node's startup options.
>
> **[0:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=25)** There are a variety of clients for the inspector, including Chrome's DevTools and editors like VS Code.
>
> **[0:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=32)** Node also includes a command line interface debugging client.
>
> **[0:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=36)** We're gonna try all three of these in upcoming videos.
>
> **[0:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=39)** You may be wondering, what about Node Inspector?
>
> **[0:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=43)** It's a Node.js debugging interface, but it was deprecated by the built-in debugger since Node 6.3.
>
> **[0:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=50)** It was a great project, but it's not necessary anymore.
>
> **[0:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=53)** So what's the debugger useful for?
>
> **[0:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=56)** The debugger can be used to watch expressions and variable values during execution.
>
> **[1:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=61)** Breakpoints can be set within code or by using the debugger to pause execution and evaluate the watcher.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=68)** That way the values can be viewed when paused without needing to log.
>
> **[1:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=72)** The debugger also offers a mechanism for stepping to granularly control execution.
>
> **[1:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=78)** There are several different ways to step execution.
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=81)** The first two are pretty obivous.
>
> **[1:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=83)** Pause, which pauses running code, and continue, which continues execution.
>
> **[1:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=88)** What's more interesting is the actual steps, such as step next, which executes the next line.
>
> **[1:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=95)** Step in works when execution is paused on a function call to enter that function and step within that function.
>
> **[1:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=102)** Conversely, step out leaves the current function, if any.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=106)** Since the debugger is out of process, we have to start Node in a special mode to enable the inspector agent and debugger.
>
> **[1:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=115)** That means we'll have to stop whatever service is running that we want to debug first before starting the agent.
>
> **[2:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=121)** If we don't, it'll conflict on the port.
>
> **[2:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=125)** To enable the Node.js inspector agent, we'll need to provide one of the following runtime flags.
>
> **[2:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=130)** The first is inspect, which listens by default on the local IP on port 9929.
>
> **[2:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=137)** You can configure the host in port if so desired.
>
> **[2:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=141)** There's a similar flag, inspect break, which is the same as inspect except it also breaks before code execution starts.
>
> **[2:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=149)** The last is inspect break with a configuration for the host and port.
>
> **[2:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=153)** As I mentioned before, Node includes a built-in client for the inspector called Inspect.
>
> **[2:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=159)** To use it, pass inspect as an argument to Node followed by the script to execute.
>
> **[2:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=164)** This starts the Inspector agent and the CLI client in one command.
>
> **[2:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=169)** While technically we can configure PM2, our process manager, to start the inspector agent, it's really awkward and adds a layer of unnecessary complexity.
>
> **[2:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=179)** For example, if you start it with inspect break, the first thing you see is the process container rather than the application.
>
> **[3:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=186)** Therefore it's better just to stop the process in question and start the agent directly without using PM2.
>
> **[3:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=192)** A final note before we try out the debugger.
>
> **[3:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=195)** Exposing the debugger publicly is a major security hole.
>
> **[3:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=199)** Never use the debugger in production or on any machine that doesn't have SANE network security.
>
> **[3:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=205)** With that said, if it's on a local work station with a firewall, you should be fine.
>
> **[3:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/introducing-node-s-built-in-debugger?u=76281980&t=210)** With that introduction, I think we're ready to start using the debugger.

> [!info]- Semantic Content
>
> **CLI Commands:** node (12)
> **Code Keywords:** function (4), interface (2), break, (2), continue (1), pass (1)
> **File Paths:** node.js (4)
> **Env Vars:** pm2 (2), cli (1), sane (1)
> **Tools:** vs code (1), command line (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** such as (1), for example (1)
> **Prerequisites:** configure (2)

#### Command-line debugging with Node inspect
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=0)** - [Instructor] Node's inspector agent can be used with many clients.
>
> **[0:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=3)** Let's start with Node's built in utility, Inspect.
>
> **[0:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=8)** To use Node Inspect, we'll first need to stop the web service process using PM2 to prevent conflicts.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=15)** Then, we'll add a debugger statement as a break point to our web app.
>
> **[0:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=19)** Finally, we'll start Node Inspect on our web server, and use the commands line client to control the process.
>
> **[0:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=25)** Let's get started.
>
> **[0:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=28)** From Visual Studio Code, open up the terminal.
>
> **[0:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=32)** I'm gonna tell PM2 to stop the web server by typing PM2, stop web, and pressing return.
>
> **[0:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=40)** Note that the web status is now stopped.
>
> **[0:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=42)** Now there won't be any conflicts on the port.
>
> **[0:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=45)** From the editor, we're going to manually add a break point to the code.
>
> **[0:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=49)** Open up servers, web, and open App.js.
>
> **[0:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=56)** Scroll down to right before the 404 logger, and add the following: debugger, followed by a semicolon.
>
> **[1:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=66)** Save the changes.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=68)** Switch back to the terminal, and then start the inspector.
>
> **[1:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=72)** Node inspect, and then we're gonna use the relative path, ./servers/web/index.js.
>
> **[1:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=83)** The inspector agent has been started and is listening, and the debugger itself is attached.
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=89)** Note that it says break on start in servers/web/index.js line one.
>
> **[1:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=94)** This is normal, as it gives us a chance to prepare our tools.
>
> **[1:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=98)** We don't need to do anything, so just type cont for continue, and press return.
>
> **[1:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=104)** Thanks to our logging, we know that the server is listening on Port 5000.
>
> **[1:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=109)** Let's switch over to the browser and navigate to the home page.
>
> **[1:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=112)** In my case, I'm just gonna reload.
>
> **[1:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=116)** The page loads normally, and we see a log entry in the terminal.
>
> **[1:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=119)** Let's see the debugger in action.
>
> **[2:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=121)** From the browser, let's navigate to a nonsense page, like /asdf.
>
> **[2:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=128)** Press return.
>
> **[2:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=130)** The browser will look like it's hanging, and in a way, it is.
>
> **[2:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=133)** It's actually waiting for us to continue.
>
> **[2:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=136)** If we look over at the terminal, it says, break in servers/web/app.js, and we can see the highlighted source code.
>
> **[2:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=145)** To evaluate the next line of code, type next, and press return.
>
> **[2:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=150)** We're now on console.warn.
>
> **[2:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=153)** Curious what's in these variables?
>
> **[2:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=155)** We'll use an interactive REPL by typing R-E-P-L, and pressing return.
>
> **[2:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=161)** Let's see the method being used.
>
> **[2:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=163)** Type, request.method.
>
> **[2:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=167)** It's get, what about the original URL?
>
> **[2:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=170)** Type request.originalurl.
>
> **[2:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=174)** Excellent, it's A-S-D-F, just like we typed.
>
> **[2:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=178)** Press control c to exit the REPL.
>
> **[3:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=182)** To see what other commands are available, type help, and press return.
>
> **[3:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=187)** When you're done, type .exit.
>
> **[3:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=191)** This completely exits the debugger, and ends the web server debug process.
>
> **[3:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=195)** The browser says accurately that the page didn't send any data.
>
> **[3:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=199)** As a cleanup, let's start the web server again.
>
> **[3:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=202)** Type PM2 start web -- watch.
>
> **[3:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=208)** And the web server is started once again.
>
> **[3:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=211)** The built-in Node Inspect client is powerful, but it's not very user friendly, and it can be a bit cumbersome for complex tasks.
>
> **[3:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/command-line-debugging-with-node-inspect?u=76281980&t=219)** Let's try a different client, Chrome DevTools.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), return. (6), switch (2), continue (2), finally, (1)
> **Env Vars:** pm2 (4), repl (2), url (1)
> **CLI Commands:** node (6)
> **Tools:** terminal (4), visual studio (1), chrome devtools (1)
> **File Paths:** servers/web/index.js (2), app.js (1), servers/web/app.js (1)
> **UI Navigation:** navigate to (2), scroll down (1)
> **Warnings:** note that (2)
> **Ports:** port 5000 (1)

#### Debugging Node in Chrome DevTools
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=0)** - [Instructor] Another client that works with nodes inspector agent is Chrome Developer Tools built-in inspector.
>
> **[0:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=6)** The steps for using Chrome DevTools are very similar to node inspect.
>
> **[0:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=10)** First, make sure that you stop web in PM2.
>
> **[0:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=14)** Then we'll try two different techniques.
>
> **[0:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=17)** The first is to start web with the flag inspect-brk, which pauses execution on the very first line.
>
> **[0:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=23)** The second is just inspect without pausing execution.
>
> **[0:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=27)** Let's jump right in and switch to VSCode.
>
> **[0:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=31)** Open up the terminal, and then we'll turn off the web server.
>
> **[0:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=35)** Type pm2 stop web.
>
> **[0:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=38)** The web status is now stopped.
>
> **[0:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=41)** We're ready to start the web server with the inspector agent, to type node space --inspect-brk to break on the first line, and then the path of the script, servers/web/index, and press return.
>
> **[1:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=60)** The debugger is listening but nobody's attached.
>
> **[1:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=62)** Let's change that.
>
> **[1:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=64)** Open up Chrome.
>
> **[1:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=66)** We're gonna navigate to a special page.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=68)** Type chrome://inspect and press return.
>
> **[1:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=76)** Under remote target, you should see an entry that matches the debugger process that we just started, along with an inspect link.
>
> **[1:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=83)** Click it now.
>
> **[1:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=86)** This opens Chrome Developer's Tools, along with the source of all the files that are open.
>
> **[1:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=91)** In index, the debugger has paused on on exports.
>
> **[1:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=95)** Let's maximize the window.
>
> **[1:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=98)** Execution controls are over on the right top of the window, and just below is a message saying that the debugger is paused.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=106)** Underneath is context about everything that's going on, including the watchers, which is currently empty, the call stack, the scope, which includes both the local and the global scope, and break points, which is currently empty.
>
> **[2:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=123)** Let's resume script execution by clicking the play button on the top.
>
> **[2:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=128)** If we click over to the console, we don't see anything.
>
> **[2:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=133)** That's normal.
>
> **[2:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=135)** And if we minimize the window, we can see that the server is now actually listening on port 5000.
>
> **[2:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=142)** Now that DevTools is ready, let's try the 404 page again from another browser window.
>
> **[2:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=147)** Try to arrange your screen so you can see the terminal, DevTools, and the browser.
>
> **[2:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=152)** So I'm going to arrange it, just like so, then, from here, let's navigate to a 404 page.
>
> **[2:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=163)** HTTP localhost 5000 asdf.
>
> **[2:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=168)** Immediately, we see the app.jssource in DevTools and the code is highlighted in the debugger.
>
> **[2:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=174)** Just above it, we can see the values of the request and response objects.
>
> **[2:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=179)** If I scroll over, we see request equals incoming message, and response is server response, and so forth.
>
> **[3:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=188)** Over on the right, if we look at the scope local, we can see request and actually start inspecting what's in there.
>
> **[3:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=197)** For example, the method is get.
>
> **[3:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=201)** Let's click step over next function call, which looks like an arrow.
>
> **[3:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=206)** We're now on the console.warn again.
>
> **[3:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=209)** However, we can see a lot more context about what's happening here.
>
> **[3:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=213)** Want to try something bonkers?
>
> **[3:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=215)** Over on the right, let's look at the scope local request, and we have the method.
>
> **[3:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=222)** Double-click to edit the method.
>
> **[3:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=225)** We're gonna replace it with double quote FISH and press return.
>
> **[3:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=231)** Click the step over the next function call again.
>
> **[3:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=235)** Down at the bottom, our request logger has just logged the FISH 404 and a FISH request log.
>
> **[4:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=242)** Editing values like this is incredibly powerful and useful for experimentation.
>
> **[4:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=247)** Here's another way that we can use the debugger to find problems.
>
> **[4:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=251)** Put the focus back on the terminal and press control C to quit.
>
> **[4:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=255)** If we switch our focus back over to DevTools... DevTools will report that the connection was closed.
>
> **[4:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=263)** That's fine, and we can just close the window.
>
> **[4:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=268)** In the source code of our application, let's open up servers, web, app.js.
>
> **[4:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=275)** In the code, we're gonna delete the debugger line and then save the changes.
>
> **[4:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=281)** Then I'm gonna open up router.js and I'm going to comment out our bug fix from earlier, when we created that check for gain.
>
> **[4:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=291)** This is gonna cause an exception.
>
> **[4:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=293)** Save the changes.
>
> **[4:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=296)** Return to the terminal.
>
> **[4:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=298)** We're gonna start node, but this time, with just the inspect flag, not break, and specify the path to the web server index.
>
> **[5:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=304)** So node space --inspect, and then .servers/web/index.js
>
> **[5:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=312)** and press return.
>
> **[5:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=314)** This time, we see the startup log immediately.
>
> **[5:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=317)** From the browser, let's go to chrome inspect again, and click inspect to open up the window.
>
> **[5:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=330)** Over on the top of DevTools, there is a little icon that looks kind of like a stop sign that says pause on exceptions.
>
> **[5:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=337)** Click it, and we're going to click pause on caught exceptions.
>
> **[5:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=343)** Go back to the browser, and we're gonna navigate to a 404 page that we know that is going to trigger an exception.
>
> **[5:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=349)** So, HTTP localhost, games/asdf.
>
> **[5:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=356)** DevTools has paused execution.
>
> **[5:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=358)** In the upper right, it says paused on promise rejection.
>
> **[6:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=362)** In the code, the ID is highlighted, which is where the cannot read property ID of null occurred, and the context of the expressions above it.
>
> **[6:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=371)** This is very powerful and useful.
>
> **[6:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=373)** If I click the resume button, the error will be logged and the browser will still not get its response.
>
> **[6:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=380)** Let's clean up.
>
> **[6:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=382)** Switch back over to the terminal and press control C to quit.
>
> **[6:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=387)** Finally, close the Chrome DevTools window.
>
> **[6:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=393)** As a final cleanup, let's start up the web process once more.
>
> **[6:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=397)** pm2 start web --watch.
>
> **[6:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=403)** The inspect functionality in Google Chrome Developer Tools is very useful, but a downside is, there's also a lot of windows to keep track of.
>
> **[6:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=412)** What about Visual Studio Code?
>
> **[6:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-in-chrome-devtools?u=76281980&t=414)** Is that workflow any different?

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), return. (4), switch (3), function (2), delete (1)
> **Tools:** terminal (5), chrome devtools (2), visual studio (1)
> **CLI Commands:** node (4), make (1), find (1)
> **Env Vars:** fish (3), http (2), pm2 (1)
> **UI Navigation:** navigate to (3), switch to (1), double-click (1), go to (1)
> **Analogies:** similar to (1), just like (1), for example (1), kind of like (1)
> **File Paths:** app.js (1), router.js (1), servers/web/index.js (1)
> **Definitions:** is a  (2)

#### Debugging Node with Visual Studio Code
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=0)** - [Instructor] We've seen both Node Inspect and Chrome DevTools, so how does VS Code's built-in Node debugging support size up?
>
> **[0:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=8)** We're gonna have to do a little bit more work to get Visual Studio Code debugging.
>
> **[0:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=12)** Again, make sure that you stop web in PM2 if you haven't already.
>
> **[0:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=17)** Then, we'll need to edit the launch configuration so VS Code knows where it should be starting and where to log.
>
> **[0:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=24)** Finally, we'll use VS Code to start Node in debugging mode and control execution.
>
> **[0:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=29)** Let's get started.
>
> **[0:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=30)** Switch over to VS Code.
>
> **[0:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=33)** The first thing we're gonna want to do is to stop web in PM2, so open up the terminal, type pm2 stop web.
>
> **[0:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=42)** The process is now stopped.
>
> **[0:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=44)** Close the terminal again.
>
> **[0:47](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=47)** Navigate up to the debug menu, and select open configurations.
>
> **[0:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=53)** We'll be prompted for an environment.
>
> **[0:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=54)** Select Node.js.
>
> **[0:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=57)** This generates a new file in the .vscode folder named launch.json.
>
> **[1:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=63)** If we look at the program path, it just says workspaceFolder/index.js.
>
> **[1:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=69)** That's fine, except our server is somewhere else.
>
> **[1:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=73)** Let's edit the configuration.
>
> **[1:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=74)** Left-click before the index.js, and add servers/web/.
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=81)** By default, regular log messages aren't shown in the debug console, so let's make a change.
>
> **[1:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=87)** We're gonna add a new line, so comma, and then on the new line, double quote, console, and with a value that can auto-complete, select integratedTerminal.
>
> **[1:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=98)** Save the changes.
>
> **[1:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=100)** Now that we have a launch configuration, navigate up to the debug menu and select start debugging.
>
> **[1:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=110)** This puts VS Code into debug mode and starts the server.
>
> **[1:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=114)** You'll notice that the VS Code layout has changed.
>
> **[1:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=117)** From a browser, navigate to the homepage.
>
> **[2:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=124)** So far so good, there's no problems here, and there's a log entry.
>
> **[2:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=128)** Now let's trigger that error again, but before we do, over on the left, under breakpoints, we want to break on uncaught exceptions.
>
> **[2:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=138)** Now, let's trigger that error again.
>
> **[2:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=142)** In the browser, navigate to games, fish.
>
> **[2:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=147)** Visual Studio Code has lept to life.
>
> **[2:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=150)** The exception has been highlighted, and the variables in the upper left contain context such as the exception itself, and under local, we've got context about request and response, and a lot more.
>
> **[2:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=165)** Let's stop the debugger by clicking the stop button, and then uncomment the code that is causing the exception.
>
> **[2:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=175)** Save the change.
>
> **[2:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=176)** Notice that nothing's reloaded, so we're gonna have to manually restart the process.
>
> **[3:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=182)** What we can do is click start debugging, and that's gonna start the program up again, and now the 404 has loaded, as we expected.
>
> **[3:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=194)** VS Code has some more functionality that I'd like to demonstrate.
>
> **[3:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=198)** In the upper left, click explorer, and then select web, app.js.
>
> **[3:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=207)** Remember the 404 logger where we had the breakpoint?
>
> **[3:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=210)** Let's scroll down.
>
> **[3:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=213)** There it is.
>
> **[3:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=214)** When I hover over here on the left, a red dot is shown.
>
> **[3:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=219)** Click once, and a bright red dot is toggled.
>
> **[3:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=223)** What's that mean?
>
> **[3:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=224)** In the upper left, select the debug view at the not symbol with a bug.
>
> **[3:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=232)** Down towards the bottom, in breakpoints, there's a new breakpoint, app.js, with a line number.
>
> **[3:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=238)** Neat!
>
> **[3:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=239)** Let's see it in action.
>
> **[4:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=241)** Switch to the browser, and let's refresh that 404.
>
> **[4:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=245)** This time the debugger paused execution.
>
> **[4:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=249)** There's a call stack, and variables, and the line is highlighted.
>
> **[4:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=256)** One of the options here is the debug console.
>
> **[4:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=260)** We can select it now, and we'll get a little bar at the bottom.
>
> **[4:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=265)** Type request.method.
>
> **[4:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=267)** Notice that it auto-completes.
>
> **[4:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=270)** Press Enter.
>
> **[4:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=273)** It evaluates as GET.
>
> **[4:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=274)** Let's change it.
>
> **[4:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=275)** Type request.method, equals, double quote, FISH.
>
> **[4:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=283)** And now it says FISH.
>
> **[4:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=284)** It updates the property.
>
> **[4:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=286)** Up at the top are the execution controls.
>
> **[4:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=289)** Press the green arrow to continue.
>
> **[4:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=292)** The page loads, and if we look at the terminal, we see our arbitrary HTTP method, FISH.
>
> **[5:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=300)** If we reload the page again, we can edit the variable in another way.
>
> **[5:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=306)** In the upper left under variables, select local, request, and let's go look for that method.
>
> **[5:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=315)** There it is.
>
> **[5:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=318)** We'll double-click, and change it to FINISHED.
>
> **[5:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=326)** There we go, and then click continue.
>
> **[5:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=331)** And execution has continued, and it says finished.
>
> **[5:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=334)** Can you think of more ways to experiment with the execution?
>
> **[5:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=337)** Let's clean up and turn off the debugger.
>
> **[5:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=341)** Click the toggle to disable the breakpoint.
>
> **[5:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=346)** Then, we're gonna turn off the debugger by clicking stop.
>
> **[5:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=350)** Finally, from the terminal, type pm2 start web --watch.
>
> **[5:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=359)** The web server's now started normally again.
>
> **[6:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=362)** Which debugging client is the best?
>
> **[6:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=364)** Honestly, it depends on what your needs are and your comfort level with various interfaces.
>
> **[6:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=369)** As long as you're effective and efficient, use whatever works best for you.
>
> **[6:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=374)** In this chapter, we've been exploring how to debug Node.js applications.
>
> **[6:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=379)** We started by discussing different ways to identify, search for, and remove software errors, including splitting, hypothesizing, experimenting, and the not so silly rubber ducking.
>
> **[6:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=390)** Then, we learned how Node's out of process debugging utility can control execution, watch expressions and variable values, and a lot more.
>
> **[6:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=398)** Finally, we used Node's built-in inspector agent with three debugging clients, Node Inspect, Chrome DevTools, and VS Code to demonstrate the differences between them.
>
> **[6:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/debugging-node-with-visual-studio-code?u=76281980&t=409)** We've been focusing on fixing errors, so how do we go about measuring performance?

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), finally, (3), switch (2), continue (2), else. (1)
> **Tools:** vs code (8), terminal (4), chrome devtools (2), visual studio (2)
> **CLI Commands:** node (8), make (2)
> **File Paths:** node.js (2), app.js (2), launch.json (1), workspacefolder/index.js (1), index.js (1)
> **Env Vars:** fish (3), pm2 (2), http (1), finished (1)
> **UI Navigation:** navigate to (2), scroll down (1), select the (1), switch to (1), double-click (1)
> **Code Identifiers:** workspacefolder (1), integratedterminal (1)
> **Analogies:** such as (1)


### 5. Measuring Performance

#### Benchmarking performance
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=0)** - [Instructor] When developing applications, speed matters.
>
> **[0:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=3)** When a site slows down, traffic decreases as the audience looks for better sources.
>
> **[0:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=8)** Therefore it's within our best interest to measure site performance to quantify just how fast or slow it is.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=15)** With those measurements, we can find what's slow and hopefully improve it.
>
> **[0:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=19)** In this chapter, we're going to be measuring site performance with a focus on the back end of Node.js applications.
>
> **[0:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=26)** Performance optimization is a broad topic, but we'll be exploring some of the fundamentals that should kickstart your exploration.
>
> **[0:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=34)** We'll start with how to measure execution times.
>
> **[0:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=37)** We'll compare the differences between tools that measure externally and internally.
>
> **[0:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=43)** Finally, we'll profile code execution to measure the internals of programs without changing them.
>
> **[0:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=49)** Let's start with benchmarking performance.
>
> **[0:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=52)** We discussed performance earlier, but what's a benchmark?
>
> **[0:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=55)** A benchmark is a measurement of the time or duration that it takes to complete a whole operation.
>
> **[1:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=61)** So what's a whole operation?
>
> **[1:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=63)** Here's a few examples of operations that you might want to measure.
>
> **[1:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=67)** There's the server response time when calling a particular route.
>
> **[1:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=71)** You could benchmark the duration of a specific function call.
>
> **[1:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=75)** Sometimes it's useful to determine how long it takes for one iteration through a loop, which could then generate an average.
>
> **[1:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=81)** The duration of database queries is a frequent target.
>
> **[1:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=85)** There are two types of benchmarking tools, and it's helpful to know their differences and when to use them.
>
> **[1:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=90)** The first are HTTP benchmarking tools, which measure the external responses of a system.
>
> **[1:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=96)** The other kind of opposite are code benchmarking tools, which are internal and part of the system being measured.
>
> **[1:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=103)** Let's explore each in turn.
>
> **[1:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=105)** HTTP benchmarking tools require no code modification.
>
> **[1:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=109)** Typically you just execute the tool with a configuration.
>
> **[1:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=113)** HTTP benchmarking measures granular response times, such as how long it takes for the server to respond, how long the transfer from the server takes, and so forth.
>
> **[2:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=124)** These tools can be used to simulate the server load by performing a variable number of simultaneous requests for a given amount of time.
>
> **[2:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=131)** This makes them useful for stress testing a system, which can highlight problems before they occur in a production environment under load.
>
> **[2:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=138)** There are many HTTP benchmarking tools available.
>
> **[2:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=142)** Here are three popular open source examples that can be run on your own workstation.
>
> **[2:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=146)** Ab, the Apache HTTP server benchmarking tool, is a utility intended to test Apache servers, but it can be used with any HTTP server.
>
> **[2:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=156)** We'll discuss ab in the next video.
>
> **[2:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=159)** Httperf is a standalone utility known for its robustness and versatility.
>
> **[2:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=164)** And W-R-K, without the O, is an increasingly popular scriptable tool that is capable of, in its own words, generating significant loads on the target server.
>
> **[2:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=175)** In contrast, code benchmarking measures execution times very differently.
>
> **[3:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=180)** It typically requires code modification, which is why I referred to it as internal.
>
> **[3:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=186)** For example, some systems require placing a timer at the start and the end of the code that you wish to time, then log the end result.
>
> **[3:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=192)** Another example is a report that measures and compares specific functions to each other.
>
> **[3:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=198)** Using these tools, we can granularly measure how parts of our system work.
>
> **[3:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=203)** Unlike HTTP benchmarking, internal benchmarking does not measure latency, such as network response times.
>
> **[3:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=211)** There are many code benchmarking tools, and we actually already have them.
>
> **[3:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=215)** For example, Node's console includes time and timeEnd methods.
>
> **[3:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=220)** Winston, our logger, includes a simple timer method that can be used to measure execution time.
>
> **[3:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=226)** We're going to use Winston to benchmark code later in the chapter.
>
> **[3:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=230)** Finally, the debug module provides a minimal timing utility, as well.
>
> **[3:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=235)** What about the benchmark module?
>
> **[3:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=238)** Where does that fit in?
>
> **[3:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=239)** The benchmark module can be used to compare two operations to each other.
>
> **[4:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=243)** For example, whether a regular expression of the letter o in Hello World is faster than indexOf.
>
> **[4:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=250)** The answer is strings indexOf, if you were curious.
>
> **[4:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=253)** Does that mean you need to rewrite your whole codebase?
>
> **[4:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=256)** Probably not.
>
> **[4:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=257)** We'll discuss micro-optimizations later in the course.
>
> **[4:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=261)** As an overview, benchmarking measures operation times of a system.
>
> **[4:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=266)** In the context of the web, benchmarking can be external to the system over HTTP or internal as part of the codebase itself.
>
> **[4:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=275)** HTTP benchmarking can be used to simulate load on a system and test how it responds under stress.
>
> **[4:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=281)** Conversely, code benchmarking measures granular segments of a system.
>
> **[4:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-performance?u=76281980&t=285)** Let's apply this theory by stress testing our system using Apache Bench.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), module (3), finally, (2), require (2), function (1)
> **Env Vars:** http (9)
> **Definitions:** is a  (6), is an  (1)
> **CLI Commands:** apache (3), node (2), find (1)
> **Analogies:** for example (3), such as (2)
> **Cross-References:** later in (2), we discussed (1), in the next (1)
> **Code Identifiers:** indexof (2), timeend (1)
> **File Paths:** node.js (1)

#### Benchmarking with ApacheBench
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=1)** - [Instructor] ApacheBench is a tool from the Apache Foundation for benchmarking HTTP servers.
>
> **[0:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=6)** Wait a second, don't we have a Node.js server?
>
> **[0:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=9)** Yes we do, and ApacheBench can be used to test any HTTP server, not just Apache.
>
> **[0:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=16)** The ApacheBench utility is included with the Apache HTTP server.
>
> **[0:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=20)** AB also comes preinstalled on macOS, and is also available on Windows and Linux.
>
> **[0:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=27)** More on installation in a moment.
>
> **[0:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=30)** ApacheBench produces a report on the number of completed and failed requests, bytes transferred, requests per second, and a lot more.
>
> **[0:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=38)** These reports can be manually compared to each other in order to measure performance optimization progress.
>
> **[0:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=44)** Let's take a brief moment to talk about the ApacheBench installation process for Windows.
>
> **[0:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=49)** If you're a Windows user, you're gonna have to manually download ApacheBench.
>
> **[0:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=53)** This takes just a moment but if you're a Mac user, please continue to pay attention.
>
> **[0:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=58)** ApacheBench is included in XAMPP, a standalone web server package.
>
> **[1:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=63)** There is a portable version that doesn't require installation, so that's the one we're gonna be using.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=68)** It's available for download through [apachefriends.org](https://apachefriends.org).
>
> **[1:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=73)** When you download it, the AB utility will be located in the apache\bin\ab.exe.
>
> **[1:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=80)** Let's look at the download page together.
>
> **[1:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=83)** Navigate to [apachefriends.org/download.html](https://apachefriends.org/download.html).
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=89)** Click on More Downloads, then XAMPP Windows.
>
> **[1:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=98)** Choose the newest folder.
>
> **[1:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=102)** Then choose either the portable installer or one of the zip files.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=106)** Download the file, extract it to your chosen destination, and then you can use the ab.exe file from within the bin directory.
>
> **[1:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=116)** Both Mac and Windows users switch over to VS Code and open up a terminal.
>
> **[2:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=123)** Right click and choose Split to open two terminal window side-by-side.
>
> **[2:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=129)** Windows users only, over on the right terminal, you'll want to change directory to wherever you downloaded the portable files.
>
> **[2:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=136)** To use ApacheBench, the command is ab.
>
> **[2:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=140)** Mac users just type ab and press return.
>
> **[2:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=143)** For Windows users, you want to type ab.exe and press return.
>
> **[2:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=148)** All the usage instructions will be displayed.
>
> **[2:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=153)** On the left side, let's take a look at our web server logs.
>
> **[2:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=156)** Type pm2 logs.
>
> **[2:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=160)** Over in the upper right, let's maximize the available space.
>
> **[2:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=166)** Let's send 1000 requests with a maximum of five simultaneous requests to our server.
>
> **[2:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=172)** In the left pane, type ab or ab.exe if you're on Windows, space, then dash n space then 1000, for the number of requests.
>
> **[3:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=183)** Then space dash c, space five for the concurrency.
>
> **[3:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=188)** Finally, the URL.
>
> **[3:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=190)** [Http://localhost:5000](https://Http://localhost:5000).
>
> **[3:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=197)** And then a final slash.
>
> **[3:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=199)** If you leave out that slash, you get a validation error.
>
> **[3:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=203)** Press enter.
>
> **[3:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=205)** Over the next few seconds, ApacheBench will send up to five requests at a time to our web server.
>
> **[3:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=211)** We'll speed up execution to save time.
>
> **[3:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=215)** At the end, a report will be displayed.
>
> **[3:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=218)** For example, the time taken for the tests took 23.887 seconds, and the time per request, the average, was 119 milliseconds.
>
> **[3:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=230)** Over in the logs, this is highlighting something interesting.
>
> **[3:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=234)** See all the new sessions that were created?
>
> **[3:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=237)** For every single one of those requests, there was a web request and a players request.
>
> **[4:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=242)** Let's take a look at the database to see what the results of our load test were.
>
> **[4:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=248)** Navigate to localhost, port 8080.
>
> **[4:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=252)** Under username, it'll be root.
>
> **[4:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=255)** And the database is rps.
>
> **[4:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=257)** Click Login.
>
> **[4:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=259)** And we'll go to sessions.
>
> **[4:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=262)** If we go to Select data, there is 1006 rows.
>
> **[4:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=268)** Is that what we really want?
>
> **[4:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=271)** We can close out of the browser now.
>
> **[4:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=273)** Let's clean up.
>
> **[4:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=275)** In the right terminal, type exit.
>
> **[4:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=278)** Let's resize the terminal by clicking the down arrow.
>
> **[4:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=283)** Press ctrl + c to exit the logger, and then close the terminal.
>
> **[4:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=288)** Here's a few highlights of what we've learned from our benchmark.
>
> **[4:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=291)** The average time was relatively fast, that's a good thing.
>
> **[4:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=295)** A positive result is still a result and that can be used for comparisons over time.
>
> **[5:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=300)** However, a session and player was created for every new request.
>
> **[5:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=304)** This was done so players don't need to register, but it also means there's a bunch of new players and sessions that will never be used again.
>
> **[5:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=312)** So the emperor has no clothes question.
>
> **[5:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=315)** Should session and player creation be automatic?
>
> **[5:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=318)** For an internal demo application, okay, but if this was public-facing, then I'd personally say no.
>
> **[5:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=325)** We've experimented with HTTP benchmarking.
>
> **[5:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-with-apachebench?u=76281980&t=328)** So what about benchmarking code execution?

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), return. (2), continue (1), require (1), switch (1)
> **Env Vars:** http (4), xampp (2), url (1)
> **Tools:** terminal (6), vs code (1)
> **CLI Commands:** apache (4), node (1)
> **UI Navigation:** navigate to (2), go to (2), click on (1)
> **URLs:** [apachefriends.org](https://apachefriends.org) (2), [http://localhost:5000](http://localhost:5000) (1)
> **File Paths:** node.js (1), apachefriends.org/download.html (1)
> **Ports:** :5000 (1), port 8080 (1)

#### Benchmarking code with Winston
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=0)** - [Instructor] Let's start benchmarking code execution within our application using the logger Winston.
>
> **[0:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=5)** When viewing a game, there's a request to get the game in question by ID from the game's API.
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=11)** However, we have no idea how long that takes.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=15)** If you did the challenge video, you added the request logger that uses more into the game's API.
>
> **[0:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=20)** That will report how long it took for the response to be built and sent.
>
> **[0:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=24)** What it doesn't tell us is how long the entire transaction takes, including the time that it takes to make the request and send it across the network.
>
> **[0:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=32)** With our application, everything is running locally, so that's not really a factor.
>
> **[0:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=37)** But in a more distributed application, that can be a very valuable piece of information.
>
> **[0:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=42)** Winston, the logger we're using for our application includes a built in timer that can be retrieved and started with a method, startTimer.
>
> **[0:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=50)** Then when execution is completed, execute timer.done with a message to display the duration in milliseconds.
>
> **[0:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=57)** According to the documentation at the time of this writing, there are no plans on making this message configurable.
>
> **[1:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=64)** So, we'll make our message match the rest of our logging by including a request ID.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=68)** Ready to get started?
>
> **[1:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=70)** Switch over to VS Code.
>
> **[1:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=73)** Navigate to servers, web, and open up router.js.
>
> **[1:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=79)** Under the gamesClient, we're gonna get our logger, which provides us with us configured instance of Winston.
>
> **[1:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=85)** Const logger equals required('../shared/lib/logger').
>
> **[1:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=95)** Now that we have a logger, let's go down to the param, where we get the game by ID.
>
> **[1:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=101)** There it is.
>
> **[1:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=104)** At the very beginning, let's start a timer.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=106)** So const timer equals logger.startTimer.
>
> **[1:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=110)** We'll execute it.
>
> **[1:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=112)** After the game is retrieved and added to the request object, execute timer.done.
>
> **[1:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=118)** So, timer.done.
>
> **[2:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=121)** We're gonna use a template using backtick to include the request ID.
>
> **[2:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=125)** So, dollar sign request.id.
>
> **[2:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=128)** Close that out and then a message to indicate what's happening, getGameById and then the ID in question.
>
> **[2:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=137)** So, pound sign, dollar sign, ID.
>
> **[2:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=141)** I'll add a semicolon at the end and save the file.
>
> **[2:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=146)** Let's open up the game server and open up app.js.
>
> **[2:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=151)** If you didn't do the challenge video, you won't have the request logger or express request ID.
>
> **[2:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=157)** Just add those two lines and these two lines to use them and that's all you need to do.
>
> **[2:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=163)** Now that we've added the timer and we've got express request ID going, let's make sure the logs are being shown in the terminal.
>
> **[2:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=171)** Open up the terminal and type pm2 logs.
>
> **[2:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=175)** Position your browser so you can see both VS Code and browser at the same time.
>
> **[3:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=181)** Let's go home and see the logger happening.
>
> **[3:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=186)** Now we're gonna choose and existing game, which should render as expected.
>
> **[3:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=190)** Over in the terminal, there's a new log entry which includes the request ID, the game ID, and the duration The request logger also logs the get request from the game's API.
>
> **[3:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=202)** Between the two of them, we can calculate the difference to find the overhead of making the request.
>
> **[3:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=208)** Since getGamesById to five milliseconds, and the request logger took two milliseconds, the difference is three milliseconds.
>
> **[3:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=218)** That's the entire cost of making the external request.
>
> **[3:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=220)** It may seem small, but it adds up.
>
> **[3:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=224)** We've preformed both HTTP benchmarking, which uses external tools and code benchmarking, which required internal changes.
>
> **[3:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/benchmarking-code-with-winston?u=76281980&t=233)** Is it possible to time code execution at a very granular level without modifying code?

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), const (2), switch (1)
> **Code Identifiers:** starttimer (2), gamesclient (1), getgamebyid (1), getgamesbyid (1)
> **Tools:** terminal (3), vs code (2)
> **CLI Commands:** make (3), find (1)
> **Env Vars:** api (3), http (1)
> **File Paths:** router.js (1), app.js (1)
> **Documentation:** the documentation (1)
> **UI Navigation:** navigate to (1)

#### Profiling code execution
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=0)** - [Instructor] So far, we've used external tools and internal code changes to get a glimpse into the performance of our application's code execution.
>
> **[0:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=8)** There's another technique that's already built into node, profiling.
>
> **[0:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=12)** Software profiling is a form of dynamic program analysis, which means that the program is actually running when the analysis is performed.
>
> **[0:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=20)** Profiling can answer questions like the number of times each method is called and how long the methods take.
>
> **[0:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=26)** Often, these include resource usage such as the amount of memory or CPU that's used.
>
> **[0:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=33)** Node has a built-in profiler which in turn uses the V8's profiler.
>
> **[0:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=37)** Node's profiler records important events such as just-in-time compiles and regular samples.
>
> **[0:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=44)** The record of these events in samples is saved to a log file.
>
> **[0:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=48)** On their own, these profiler logs aren't very useful.
>
> **[0:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=51)** The information is better read with a tool that aggregates events and produces reports.
>
> **[0:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=56)** Fortunately, Node also includes a V8 profiler processor that we're going to use.
>
> **[1:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=62)** Some IDEs include built-in profiler and profiler processors, but to my surprise, at the time of this writing, Visual Studio Code does not.
>
> **[1:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=71)** A request for one was made publicly in github, but was closed with a brief explanation that it wasn't being considered.
>
> **[1:17](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=77)** Therefore, we're gonna use Node's built-in profiler and processor.
>
> **[1:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=82)** There's a couple steps required to use Node's profiler.
>
> **[1:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=85)** Same as debug mode, we'll need to stop the web process in pm2.
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=89)** Then we'll start Node with the flag --prof to profile execution.
>
> **[1:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=95)** The log file will be generated in the same directory and will be named Isolate-0xnnnn where n is a digit.
>
> **[1:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=104)** Then we'll use Node's profile process to produce a report from the log file.
>
> **[1:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=109)** Let's get started.
>
> **[1:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=110)** Switch over to VS Code.
>
> **[1:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=113)** Within Visual Studio Code, make sure that the terminal is open.
>
> **[1:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=118)** The first thing we need to do is stop the web process.
>
> **[2:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=121)** So type pm2 stop web.
>
> **[2:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=125)** Change directory to the servers/web directory.
>
> **[2:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=129)** Let's start Node in profiling mode.
>
> **[2:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=132)** Type node --prof index.js.
>
> **[2:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=140)** It's running, but unless we want to profile start up time we'll need to send it some traffic.
>
> **[2:25](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=145)** Let's use Apache Bench.
>
> **[2:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=148)** Right click on the terminal and go to New Terminal.
>
> **[2:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=151)** Windows users, please adjust the command to reflect wherever you installed Apache Bench to.
>
> **[2:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=157)** Let's send some ab traffic to our games room.
>
> **[2:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=160)** Windows please use ab.exe then a space then -c to specify concurrency 10 then space -n for the number of requests, 100 and then the path of our first game [http://localhost:5000/games/1](http://localhost:5000/games/1).
>
> **[3:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=183)** When it's complete, type exit to close the terminal.
>
> **[3:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=188)** Back in the main terminal, press Control + C to shut down Node.
>
> **[3:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=193)** Now let's go to our explorer and go to Servers and Web.
>
> **[3:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=198)** We don't see the file until we click refresh and there's a new file Isolate dash and then a series of numbers.
>
> **[3:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=206)** Your file will be named something different than mine.
>
> **[3:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=209)** Double click it to see what's inside.
>
> **[3:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=212)** Whoa, that's pretty gnarly.
>
> **[3:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=214)** Good thing we're gonna use a tool to read it.
>
> **[3:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=216)** However, as of this writing, there is a bug in Node.js that was introduced in version 8.10 and still exists in version 8.11, which is what we're using.
>
> **[3:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=229)** There is a workaround.
>
> **[3:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=232)** So the problem is the log files used to have a newline, but now they don't.
>
> **[3:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=236)** And the workaround is to add an importantly line at the end of the log file.
>
> **[4:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=242)** Therefore, all we need to do is go down to the end of the log file, press return, and then save the change.
>
> **[4:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=253)** We can now close the log file.
>
> **[4:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=255)** From the terminal we're gonna process the file.
>
> **[4:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=259)** Type node --prof-process and then isolate.
>
> **[4:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=267)** You might be able to use tab completion to get the full name of the file.
>
> **[4:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=271)** Then type a greater than symbol, then a space and a file name, profiler.txt.
>
> **[4:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=278)** Press return.
>
> **[4:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=280)** If you are a Mac user, you will need to install the command line developer tools to continue.
>
> **[4:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=286)** Do so now if prompted.
>
> **[4:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=290)** The software's installed, click Done.
>
> **[4:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=294)** Back in Visual Studio Code, we have a few error messages, but execution completed.
>
> **[5:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=300)** Let's take a look at profiler.txt.
>
> **[5:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=303)** This is a very low level breakdown of every piece of code that was executed.
>
> **[5:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=308)** As we scroll through, we can see that they're sorted by the number of ticks descending.
>
> **[5:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=314)** Also, if I search for rock-paper-scissors/servers our code isn't anywhere close to the top.
>
> **[5:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=327)** That's actually a good thing.
>
> **[5:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=328)** Let's close the report.
>
> **[5:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=331)** We've reached the end of this course, so let's turn everything off.
>
> **[5:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=335)** First, let's completely end pm2.
>
> **[5:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=338)** Type pm2 kill and press return.
>
> **[5:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=342)** Then change directory back to the root directory, cd ../..
>
> **[5:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=351)** Let's turn off the Docker integration.
>
> **[5:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=353)** Type docker-compose stop.
>
> **[6:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=361)** When reading one of these profiler process reports, there's a couple things to keep in mind.
>
> **[6:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=366)** Ticks are both optimization events such as just-in-time compiles and regularly sampled events.
>
> **[6:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=371)** Total refers to the CPU time, the higher the greater.
>
> **[6:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=376)** If you want to learn more, check out the V8 internal profiler documentation on github.
>
> **[6:23](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=383)** Profilers are good for finding extremes, if you see something that is getting called a lot or is taking a lot of resources it's worth an investigation to see what's really going on.
>
> **[6:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=393)** Throughout this chapter we've been exploring different ways to measure performance.
>
> **[6:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=397)** We started with fundamentals of what benchmarks are and the different factors of measuring performance, externally and internally.
>
> **[6:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=405)** Then we benchmarked the HTTP performance of our Node.js server using Apache Bench.
>
> **[6:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=411)** For comparison, we added code benchmarking to our site in order to get precise timing about the actual cost of an external request.
>
> **[6:59](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=419)** Finally, we used Node's built-in profiler to get a low level perspective into how our application is functioning.
>
> **[7:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=426)** Throughout this course, we've covered architecture, logging, debugging, and measuring performance.
>
> **[7:12](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=432)** Is that all there is to debugging and performance tuning?
>
> **[7:16](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/profiling-code-execution?u=76281980&t=436)** Of course not.

> [!info]- Semantic Content
>
> **CLI Commands:** node (15), apache (3), docker (2), make (1), cd (1)
> **Code Keywords:** let (10), return. (2), switch (1), return, (1), continue (1)
> **Tools:** terminal (6), visual studio (3), github (2), vs code (1), command line (1)
> **Definitions:** is a  (5), means that (1), is called (1), refers to (1)
> **File Paths:** node.js (2), profiler.txt (2), index.js (1)
> **UI Navigation:** go to (3), click on (1)
> **Env Vars:** cpu (2), http (1)
> **Analogies:** such as (3)


### Conclusion

#### Knowing what to optimize
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=0)** - [Instructor] In this concluding chapter, I'm gonna be briefly covering a number of topics that both reinforce the tools and techniques I've been discussing.
>
> **[0:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=8)** We've discussed measurements and logging, but how can we know what to optimize?
>
> **[0:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=13)** I'm also gonna give a brief introduction to caching, a performance optimization technique which is already covered in greater depth in other courses.
>
> **[0:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=20)** Finally, I'll discuss some potential next steps that you can take in your quest to master performance tuning and debugging.
>
> **[0:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=27)** In Greek mythology, a cruel king named Sisyphus was condemned to forever roll a huge stone up a hill only to have it fall down again when nearing the top.
>
> **[0:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=37)** Similarly, optimization can also feel like an endless Sisyphean task.
>
> **[0:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=42)** Like engineering, the work is never done as systems continue to evolve, features are added, requirements change, and technologies improve.
>
> **[0:51](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=51)** To keep ahead of the curve and to stay sane, it's good to have a strategy for knowing what to optimize.
>
> **[0:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=58)** First of all, make informed decisions.
>
> **[1:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=60)** This involves measuring performance, recording the results over time, and making comparisons between techniques in history.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=68)** Blindly making changes and hoping they'll make a difference is a recipe for failure.
>
> **[1:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=73)** Is everything up-to-date?
>
> **[1:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=75)** There are many components in a node.js stack including node.js itself, the modules in package.json, the services such as the database used for storage, and the operating system itself.
>
> **[1:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=87)** Updates usually bring performance enhancements, bug and security fixes, along with new functionality.
>
> **[1:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=93)** While it's tempting to procrastinate on the chore of keeping your stack up-to-date, it's always easier to make progressive updates than to find yourself several major versions behind and face a monolithic, potentially very disruptive refactor.
>
> **[1:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=106)** Node.js itself is constantly being optimized and each progressive major release has heralded significant performance increases.
>
> **[1:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=114)** For example, Node 8 is 20% faster than Node 6, according to Nearform.
>
> **[2:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=120)** There are breaking changes between each version, but they're often obscure or very old and deprecated features.
>
> **[2:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=127)** Stay informed by looking at the node.js wiki, which includes comprehensive lists of breaking changes between versions.
>
> **[2:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=134)** It's best to only use the modules that you need and get rid of anything else that you don't need.
>
> **[2:20](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=140)** This covers both what you're including with require/imports and individual scripts and modules installed from package.json.
>
> **[2:28](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=148)** Let's take a closer look at these recommendations.
>
> **[2:31](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=151)** Only require modules that are necessary in your current script.
>
> **[2:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=155)** This reduces memory usage and the complexity of your code.
>
> **[2:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=159)** There are a couple rules in ESLint that can help.
>
> **[2:42](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=162)** In core, the no-unused-vars highlights just that, which in itself, helps clean up code.
>
> **[2:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=168)** Additionally, eslint-plugin-node, with its no extraneous import and no extraneous require rules can explicitly highlight extra cruft.
>
> **[2:57](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=177)** Evaluate the modules that you're using for your project.
>
> **[3:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=180)** For example, how many different validators do you need?
>
> **[3:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=184)** Is it possible to consolidate?
>
> **[3:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=186)** Are you using commonly used modules that are under active development?
>
> **[3:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=190)** Or are there some weird outliers that are abandoned and unmaintained?
>
> **[3:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=195)** Utilities such as npm-check can check for outdated, incorrect, and unused dependencies.
>
> **[3:21](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=201)** The unused dependencies feature is particularly useful.
>
> **[3:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=204)** It scans your codebase for require and import statements, and reports modules that are in package.json but aren't included anywhere.
>
> **[3:33](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=213)** Avoid using boilerplates when developing applications.
>
> **[3:36](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=216)** Boilerplates take a one-size-fits-most approach, which works, but also includes a lot of unnecessary components that you probably will never use.
>
> **[3:44](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=224)** Boilerplates are often out-of-date, which starts you out at a disadvantage.
>
> **[3:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=229)** Boilerplates can lead to systems that work without a clear understanding of why.
>
> **[3:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=233)** It's better to know why you have each component than to look under the proverbial hood and be scratching your head.
>
> **[4:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=240)** Make sure you're handling all exceptions properly.
>
> **[4:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=243)** This includes try/catch patterns, or having a catch statement with a promise.
>
> **[4:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=248)** An uncaught exception will cause the process to crash.
>
> **[4:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=251)** Even if you're using a utility like PM2, which will automatically restart, this is slow and disruptive at best.
>
> **[4:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=259)** Finally, a micro-optimization is the process of tuning code to address a perceived performance deficiency.
>
> **[4:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=266)** It can be tempting to look at benchmarks that compare the performance of a for-loop over an array, versus using forEach, and then decide that the best way to speed up your application is to refactor everything to use for-loops.
>
> **[4:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=278)** While it's quantifiably true that for-loops are faster than forEach, there's probably more important things that you should be taking care of first.
>
> **[4:46](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=286)** An engineer's priority should be implementing major functionality and addressing measurable outliers.
>
> **[4:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=292)** Don't optimize just because you think you'll get a performance gain.
>
> **[4:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=296)** Optimize because you know it makes a substantial difference.
>
> **[5:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=300)** If you only take one thing away from this video, it's to measure first, then only fix the things that truly need fixing.
>
> **[5:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/knowing-what-to-optimize?u=76281980&t=309)** Are there any other techniques for improving application performance?

> [!info]- Semantic Content
>
> **CLI Commands:** node (7), make (4), find (1), npm (1)
> **Code Keywords:** require (4), finally, (2), continue (1), let (1)
> **File Paths:** node.js (4), package.json (3)
> **Analogies:** such as (2), for example (2)
> **Code Identifiers:** foreach (2)
> **Versions:** node 8 (1), node 6 (1)
> **Env Vars:** pm2 (1)
> **Definitions:** is a  (1)

#### Caching fundamentals
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=0)** - [Instructor] One way to make applications faster is to use caching.
>
> **[0:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=4)** In programming, caching is storing and retrieving data in a temporary storage area.
>
> **[0:09](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=9)** Within the scope of this course we'll be taking a high level overview of the fundamentals of caching.
>
> **[0:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=15)** In the final video I'll provide some more information on courses in your library where you could take a deeper dive.
>
> **[0:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=22)** Caching is used to store the results of slow or inefficient operations.
>
> **[0:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=26)** A cache is typically stored with an expiration time.
>
> **[0:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=29)** So when that time is reached then the slow operation is executed again.
>
> **[0:34](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=34)** The expiration time is set with what's known as a time to live or TTL.
>
> **[0:39](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=39)** TTL is a counter that limits the chronological lifetime of data.
>
> **[0:43](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=43)** Cached data can have an infinite TTL, but that runs the risk of having out of date data.
>
> **[0:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=49)** Therefore, it's best to have a logical balance between having the most current data and avoiding slow operations.
>
> **[0:55](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=55)** That's always an interesting conversation when balancing business and technical leads.
>
> **[1:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=61)** Caching is similar to checking books out from the local library.
>
> **[1:04](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=64)** The act of going to a library takes time.
>
> **[1:07](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=67)** The duration of the loan is the time to live.
>
> **[1:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=71)** However, when you have the checked out book at home you can read it immediately rather than having to go all the way back and get another copy from the library.
>
> **[1:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=79)** Eventually, your loan expires, and if you want to read the same book again then you have to go back to the library.
>
> **[1:26](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=86)** Here's an example of a workflow that uses caching in the context of our application, a game lookup.
>
> **[1:32](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=92)** Instead of requesting a game by ID directly from the API, the request is made from the cache.
>
> **[1:38](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=98)** Does the cache have the record of the game that hasn't expired?
>
> **[1:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=101)** If yes, then the cached version is returned.
>
> **[1:45](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=105)** What about a cache miss, when it isn't a cache.
>
> **[1:48](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=108)** If no, then make the request from the API.
>
> **[1:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=112)** Cache the response from the API and sends the response back to the original requester.
>
> **[1:58](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=118)** In addition to expiration another core concept is invalidation.
>
> **[2:02](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=122)** This is when a cache entry is either removed or replaced.
>
> **[2:06](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=126)** In the context of our game, when a game is updated, either remove the old cache entirely, or replace the cache with the updated record.
>
> **[2:14](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=134)** The act of cache invalidation gets more complex with the introduction of multiple records that are associated with the central record.
>
> **[2:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=142)** Caching can and should take place across multiple levels of the application.
>
> **[2:27](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=147)** We've discussed back-end caching results within the server already.
>
> **[2:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=150)** In addition, resources such as HTML, JavaScript, Style Sheets and Images, used in the front-end can be cached through the browser based on metadata provided by server response headers.
>
> **[2:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=161)** High performance applications take advantage of multiple caching techniques on both the back-end and the front-end.
>
> **[2:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=169)** At last, we're left with one final question.
>
> **[2:52](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/caching-fundamentals?u=76281980&t=172)** Where do we go from here?

> [!info]- Semantic Content
>
> **Env Vars:** ttl (3), api (3), html (1)
> **CLI Commands:** make (2)
> **Definitions:** known as (1), is a  (1)
> **Analogies:** similar to (1), such as (1)
> **Cross-References:** go back to (1)
> **Best Practices:** it's best to (1)
> **Speakers:** - [instructor] (1)

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=0)** - [Instructor] Debugging and performance are fascinating topics and I hope you're interested in learning more.
>
> **[0:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=5)** There's a lot of exciting directions that you can take based on this experience.
>
> **[0:11](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=11)** When a problem in an application is found and fixed it's a good idea to take steps to prevent the issue from happening again.
>
> **[0:18](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=18)** Automated testing and code quality tools can be used to detect logical errors and prevent regressions.
>
> **[0:24](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=24)** Check out the course, [[Node.js- Testing and Code Quality]] in your library for more details.
>
> **[0:30](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=30)** Investigate options for aggregating your logs into one place for analysis.
>
> **[0:35](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=35)** With a holistic view you can find trends, associate events with each other, and even set up alerts.
>
> **[0:40](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=40)** There are many options, including open source solutions like Logstach and Graylog, and commercial solutions like Splunk, that can get you started.
>
> **[0:49](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=49)** There's a class of products known as Application Performance Management, or APM.
>
> **[0:54](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=54)** They monitor the performance and availability of applications, and produce metrics and reports that are incredibly useful for finding stability and performance metrics.
>
> **[1:03](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=63)** Commercial solutions include AppDynamics and New Relic, among others.
>
> **[1:08](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=68)** There are many caching and performance techniques and tools, both on the front end and on the back end.
>
> **[1:13](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=73)** Here's three courses that I'd like to highlight in your library that are excellent resources for continuing your discovery.
>
> **[1:19](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=79)** Designing Websites for Performance, Learning Enterprise Web Application Performance, and [[Databases for Node.js Developers]], especially the Redis part.
>
> **[1:29](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=89)** We've come a long way together, and I hope you've gained an understanding of the fundamentals of debugging and tuning in Node.js applications.
>
> **[1:37](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=97)** This is a massive topic and there's no one correct solution.
>
> **[1:41](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=101)** By using the strategies, tools and techniques outlined in the course, along with the additional steps that I've mentioned, you can be an asset to any team or group.
>
> **[1:50](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=110)** I appreciate your time and interest in learning.
>
> **[1:53](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=113)** Life is too short to be content with what we already know.
>
> **[1:56](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=116)** I hope you've enjoyed this course as much as I've enjoyed researching and writing it.
>
> **[2:01](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=121)** Thanks Flip, for technical review and feedback on the course content.
>
> **[2:05](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=125)** I'd also like to thank the wonderful production team for all their hard work behind the scenes.
>
> **[2:10](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=130)** Finally, thank you to my partner and our children for their patience and love.
>
> **[2:15](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=135)** Please take a moment to give feedback through the course homepage, it will help make future courses better, and we'd love to hear from you.
>
> **[2:22](https://www.linkedin.com/learning/node-js-debugging-and-performance-tuning/next-steps?u=76281980&t=142)** Thanks for watching.

> [!info]- Semantic Content
>
> **CLI Commands:** node (3), find (1), make (1)
> **File Paths:** node.js (3)
> **Code Keywords:** finally, (1)
> **Env Vars:** apm (1)
> **Definitions:** is a  (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


## Path Context

### In [[Advance your Node.js Skills]]
← [[Node.js- Testing and Code Quality]] | **4 of 8** | [[Advanced Express]] →

## Appears In

- [[Advance your Node.js Skills]]

## Related Courses

_Courses sharing skills:_

- [[Performance Tuning in Spring Apps]] — Performance Tuning
- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — Node.js
- [[Building a Website with Node.js and Express.js]] — Node.js
- [[Advanced Node.js- Scaling Applications]] — Node.js
- [[Advanced Node.js]] — Node.js

---

[↑ Back to top](#)