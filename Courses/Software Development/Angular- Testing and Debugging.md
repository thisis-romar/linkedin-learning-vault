---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: angular-testing-and-debugging-10201318
url: "https://www.linkedin.com/learning/angular-testing-and-debugging-10201318"
duration_minutes: 136
duration: 2h 16m
level: Intermediate
updated: 11/29/2023
learners: 39090
skills:
  - Software Testing
  - Debugging Code
  - Angular
exercise_files: true
github: "https://github.com/LinkedInLearning/Angular-2875342"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQHE8peKcX_-XA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619631876852?e=2147483647&amp;v=beta&amp;t=TR_-M5cw5CjbnUMaTtkSmj4HWyaRd8SRPeYMwpUWJQU"
linkedin_topic: Software Development
learning_paths:
  - Explore Web Development with Angular
path_count: 1
tags:
  - course
  - topic/software-development
  - topic/web-development
  - skill/software-testing
  - skill/debugging-code
  - skill/angular
status: not-started
created: 2026-04-19
---

![Angular: Testing and Debugging](https://media.licdn.com/dms/image/v2/C560DAQHE8peKcX_-XA/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1619631876852?e=2147483647&amp;v=beta&amp;t=TR_-M5cw5CjbnUMaTtkSmj4HWyaRd8SRPeYMwpUWJQU)

# Angular: Testing and Debugging

> Errors caused by missing dependencies, undefined variables, or poorly formatted data can cause your web application to stop working. In this course, learn how to track down and eliminate these types of errors in your Angular applications through the process of testing and debugging. Instructor Derek Peruo breaks down common error messages and goes over a variety of testing and debugging options. H

> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318) | 2h 16m | Intermediate | 39K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Derek Peruo]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/Angular-2875342)

## Skills Covered

- Software Testing
- Debugging Code
- Angular

## Table of Contents

### Introduction

#### Angular: Testing and debugging
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-testing-and-debugging?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-testing-and-debugging?u=76281980&t=0)** - [Derek] Angular has come a long way since Google first released the framework back in 2010.
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-testing-and-debugging?u=76281980&t=5)** Since then, it's grown into a mature and stable platform with lots of built-in support for testing and debugging code.
>
> **[0:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-testing-and-debugging?u=76281980&t=12)** My name is Derek Peruo and I've worked with web technologies for over 12 years.
>
> **[0:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-testing-and-debugging?u=76281980&t=16)** I've worked with Angular since version 1.3 and I've seen, firsthand, how testing and debugging has become an integral part of building apps with Angular.
>
> **[0:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-testing-and-debugging?u=76281980&t=24)** In this course, I'll guide you through the process of testing and debugging Angular applications, as well as tips and tricks for managing your app as it grows in size and complexity.
>
> **[0:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-testing-and-debugging?u=76281980&t=33)** We'll look at an overview of all the testing and debugging options, as well as a breakdown of common error messages and their likely causes.
>
> **[0:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-testing-and-debugging?u=76281980&t=39)** We'll also take a look at code linting and how Angular's command line tool can speed up your development workflow.
>
> **[0:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-testing-and-debugging?u=76281980&t=45)** There are a lot of JavaScript frameworks out there and Angular is one of my favorites, so let's get started.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1)
> **Versions:** version 1 (1)
> **Tools:** command line (1)
> **Warnings:** common error (1)
> **Speakers:** - [derek] (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=0)** - [Instructor] We write angular code using TypeScript and you should have a good idea of how TypeScript works before starting this course.
>
> **[0:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=6)** You should also be familiar with the angular framework in general.
>
> **[0:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=9)** Check out TypeScript essential training and [[Angular Essential Training]] here in our library for an in-depth look at TypeScript and the angular framework.
>
> **[0:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=17)** We use npm to install the angular command line tool.
>
> **[0:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=20)** So make sure you have node and npm installed on your machine before we begin.
>
> **[0:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=25)** Visit the official nodejs website to download node and npm.
>
> **[0:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=29)** I recommend using the LTS, long-term support version of node which is version 14.15.5 as of this recording.
>
> **[0:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=37)** This is the version we'll use during the course.
>
> **[0:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=40)** I'm going to use visual studio code as my text editor.
>
> **[0:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=43)** vs code is a free and open source code editor available on windows, Mac and Linux.
>
> **[0:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=48)** You can download the latest stable release from the official website.
>
> **[0:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=51)** I have version 1.53 on my machine here.
>
> **[0:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=55)** You don't have to use vs code.
>
> **[0:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=56)** I like it because it has built in support for TypeScript which makes writing angular apps much easier.
>
> **[1:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=61)** But you can use any code editor you like.
>
> **[1:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=64)** I'll also use Google Chrome as my web browser to preview our app.
>
> **[1:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=68)** This is a personal preference and you can use any web browser that works best for you.
>
> **[1:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=72)** Finally, I'll be working on a Mac for this course.
>
> **[1:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/what-you-should-know?u=76281980&t=74)** This is also a personal preference and you can use any operating system you're comfortable with.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (3), node (3), make (1)
> **Tools:** vs code (2), command line (1), visual studio (1)
> **Versions:** version 14 (1), 15.5 (1), version 1 (1)
> **Exercise Files:** source code (1), download the (1)
> **Definitions:** is a  (2)
> **Prerequisites:** install (1), make sure you have (1)
> **Code Keywords:** finally, (1)
> **Env Vars:** lts (1)

#### Exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=0)** - [Tutor] Follow along with this course using the included exercise files.
>
> **[0:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=4)** We host all the course files on GitHub, at this URL.
>
> **[0:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=7)** You can work with the course files in a few ways.
>
> **[0:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=9)** View the code online using the branches menu here, clone the repo to your local machine using this link or download a zip file using the download zip button here.
>
> **[0:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=20)** Each branch in this repo corresponds to a chapter and video in the course.
>
> **[0:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=24)** The B and E at the end of some of these branch names represents the beginning and end state for that video.
>
> **[0:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=31)** For example, branch O two O three B, is how the code looks at the beginning of chapter two on video three and branch O two O three E, is how the code looks at the end of that same video.
>
> **[0:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=42)** The main branch here, is how the finished code looks at the end of the course.
>
> **[0:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=46)** I recommend viewing the course files online or cloning the repo to your local machine to take full advantage of all the branches.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=52)** You'll need to download each branch individually if you choose the download zip option.
>
> **[0:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=57)** One quick note, angular uses NPM to manage project dependencies.
>
> **[1:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=61)** So be sure to run NPM install on the main branch if you clone the repo or whenever you download the zip file for a specific branch.
>
> **[1:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/exercise-files?u=76281980&t=68)** just follow the installing instructions here in the ReadMe.

> [!info]- Semantic Content
>
> **Exercise Files:** clone the repo (2), zip file (2), exercise files (1), download the (1)
> **Env Vars:** npm (2), url (1)
> **CLI Commands:** npm (2)
> **Prerequisites:** you'll need (1), install (1)
> **Documentation:** the readme (1)
> **Tools:** github (1)
> **Analogies:** for example (1)
> **Speakers:** - [tutor] (1)


### 1. Getting Started

#### Application overview
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=0)** - [Instructor] Testing and debugging is a big part of building Angular apps.
>
> **[0:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=4)** The faster you can find the problems the faster you can fix your application and the faster you can get it back up and running.
>
> **[0:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=10)** This is the app we'll be working on in this course.
>
> **[0:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=12)** It's a simple webpage that shows a list of active users.
>
> **[0:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=15)** The input field lets me filter the list by a search string.
>
> **[0:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=18)** The UI updates as soon as I start typing a name.
>
> **[0:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=21)** So if I search for, say, Davis, I can find those users very quickly.
>
> **[0:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=25)** I can also clear my search by clicking the clear button on the right here, which brings back the full list of active users.
>
> **[0:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=31)** Let's take a look at the code.
>
> **[0:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=33)** This is the HTML template for our user list.
>
> **[0:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=36)** At the top here is the input group for our search field and the clear button.
>
> **[0:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=40)** Here is our input element.
>
> **[0:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=41)** This is a standard HTML input, except for the template reference variable here and the key up binding here.
>
> **[0:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=48)** The template reference variable is a quick way for us to access properties on the underlying DOM element using Angular's API.
>
> **[0:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=55)** The key up binding is a quick way for us to assign an action to the standard key up DOM event, again, using Angular's API.
>
> **[1:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=63)** When a user filters the list, we pass the value of the template reference variable into the update method on our components class.
>
> **[1:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=70)** This method filters the list and returns a new list back to the DOM.
>
> **[1:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=74)** Here is the code for our clear button.
>
> **[1:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=76)** It's a standard HTML button, except for the click binding here.
>
> **[1:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=80)** Just like the key up binding above, click lets us quickly assign actions to the click event on the element.
>
> **[1:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=85)** In this case, we do two things.
>
> **[1:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=86)** First, it passes an empty string into the update method, which returns all of the usernames.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=92)** And second, it sets the value of the template reference variable to an empty string.
>
> **[1:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=97)** This resets the input element.
>
> **[1:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=98)** We load the list here, where we iterate over each user using the ng4 directive and display each result as its own unordered list item.
>
> **[1:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=107)** Let's take a look at the component class itself.
>
> **[1:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=110)** We declare a public property here called users.
>
> **[1:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=113)** This is the same property we use in our template.
>
> **[1:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=115)** Here in the ng oninit method, we get the list of users from the get all method on our custom user list service.
>
> **[2:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=122)** And we filter the list of users here in the update method by passing the search string into the filter method of our user list service.
>
> **[2:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=130)** Both of these service methods are asynchronous and we use JavaScripts async await syntax to wait for the data to return before assigning it to the user's property.
>
> **[2:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=138)** Right now, the app resets on page load and forgets the filter input.
>
> **[2:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=142)** During this course we'll add functionality to our app to save the filter state between page loads.
>
> **[2:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=147)** Along the way, we'll look at some common errors and how to fix them.
>
> **[2:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=151)** Later in the course, we'll add static code linting and write unit tests and end to end tests for our new code.
>
> **[2:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=157)** This is our custom service.
>
> **[2:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=158)** It could get data from anywhere, but for now it's returning a static list of mock users from our users .ts file imported here.
>
> **[2:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=167)** We're using a static file to keep this course focused on testing and debugging Angular.
>
> **[2:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/application-overview?u=76281980&t=172)** For an in-depth look at how Angular works with data, check out the course Managing Data and Angular to Applications here in our library.

> [!info]- Semantic Content
>
> **Code Keywords:** static (3), let (2), for, (1), pass (1), class. (1)
> **Env Vars:** html (3), dom (3), api (2)
> **Exercise Files:** template (6)
> **Definitions:** is a  (4)
> **CLI Commands:** find (2)
> **Cross-References:** later in (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Installing project dependencies
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=0)** - [Instructor] Angular projects use npm to manage dependencies.
>
> **[0:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=4)** We need to install these dependencies, sometimes called packages, to write our code and compile our app.
>
> **[0:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=10)** Npm is an amazing tool and I highly recommend you read the official documentation to learn more about the community and all the cool things you can do with the tool itself.
>
> **[0:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=19)** I opened our project here in Visual Studio Code.
>
> **[0:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=22)** I like VS code because it makes working with TypeScript very easy, but you can use any code editor you like.
>
> **[0:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=27)** VS Code has a built-in terminal, which we'll need to install the dependencies.
>
> **[0:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=31)** I'll go up to the Terminal menu.
>
> **[0:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=33)** Click on New Terminal.
>
> **[0:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=34)** Let me make that a little bigger so we can see.
>
> **[0:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=36)** And the first thing I want to do is make sure we have npm installed on the machine.
>
> **[0:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=40)** I do that using the version command.
>
> **[0:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=41)** So I'll type npm --version and hit Enter.
>
> **[0:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=47)** I have version 6.14.11 installed on my machine.
>
> **[0:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=51)** Your version might be newer.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=52)** That's okay.
>
> **[0:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=53)** Use what you have.
>
> **[0:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=54)** You'll get an error from this command if you don't have npm installed.
>
> **[0:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=57)** If that happens, check out the video, "What You Should Know" earlier in this course for details on how to install npm.
>
> **[1:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=63)** Since we already have npm, I'll go ahead and install the packages.
>
> **[1:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=67)** I'll use the pwd command to confirm that we're in the root directory for our project.
>
> **[1:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=72)** Pwd, Enter, looks good.
>
> **[1:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=75)** And then I'll type "npm install" and hit enter to install the dependencies.
>
> **[1:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=79)** Sometimes it can take a few minutes for npm to download all the project dependencies.
>
> **[1:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=83)** So be patient.
>
> **[1:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=85)** Npm will show you an error if something goes wrong.
>
> **[1:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=87)** Otherwise, just give it time and let the process finish.
>
> **[1:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=90)** All right, no errors.
>
> **[1:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=91)** Looks good.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=92)** I recommend running the npm install command from the main branch if you cloned to the exercise files to your local machine.
>
> **[1:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=98)** This ensures that you have all the packages available when you change branches during the course.
>
> **[1:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=103)** A quick note about npm, let me close out of this terminal, all the packages are stored in the package.json file in the root of the project.
>
> **[1:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=111)** And these dependencies are stable and current as of this recording.
>
> **[1:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=115)** Some packages may get updated after the course is published.
>
> **[1:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=119)** If this happens, GitHub will tell you if there are packages that need to be updated.
>
> **[2:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=123)** I encourage you to update the packages as needed, but sometimes in rare cases package updates can cause breaking changes.
>
> **[2:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-project-dependencies?u=76281980&t=130)** If that happens, you can revert back to the versions included in the exercise files.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (12), make (2)
> **Tools:** terminal (4), vs code (2), visual studio (1), github (1)
> **Prerequisites:** install (7)
> **Code Keywords:** let (3)
> **Versions:** version 6 (1), 14.11 (1)
> **Exercise Files:** exercise files (2)
> **File Paths:** package.json (1)
> **Cross-References:** earlier in (1)

#### Installing Angular CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=0)** - [Instructor] Angular's command-line tool is the best way to work with files in an Angular project.
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=5)** It lets you scaffold new components, update app settings and run local builds.
>
> **[0:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=10)** It is a very powerful tool and I recommend you read the official documentation to learn all the things you can do with it.
>
> **[0:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=16)** We install Angular CLI using NPM.
>
> **[0:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=18)** I confirmed earlier in this course that I have NPM installed on my machine, so we can get right to the install process for Angular CLI.
>
> **[0:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=26)** In Visual Studio Code, I'll go up to the Terminal menu, click on New Terminal and I'll use the NPM install command to install the package, I'll type npm install -g @angular/cli.
>
> **[0:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=39)** The g flag here means we're installing the tool globally and can use it from any directory on our machine.
>
> **[0:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=45)** I'll hit Enter.
>
> **[0:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=47)** Installation may take a few minutes, so please be patient.
>
> **[0:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=50)** NPM will show an error, if something goes wrong.
>
> **[0:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=53)** If there's no errors just let the process finish.
>
> **[0:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=56)** Nice, no errors.
>
> **[0:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=58)** The Angular binary is called NG and I'll use the NG version command to confirm our installation.
>
> **[1:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=64)** I'll type ng version and hit Enter, nice.
>
> **[1:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=69)** Near the top of the console there, where it says Angular CLI, that's the version number, version 11.0.7.
>
> **[1:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-angular-cli?u=76281980&t=76)** Your version may be newer, and that's okay use what you have Now that we have Angular CLI installed on our machine, adding new features to our app will be much easier.

> [!info]- Semantic Content
>
> **Env Vars:** cli (4), npm (4)
> **CLI Commands:** npm (5)
> **Prerequisites:** install (5)
> **Tools:** terminal (2), visual studio (1)
> **Versions:** version 11 (1), 0.7 (1)
> **Definitions:** is a  (1), is called (1)
> **Code Keywords:** let (1)
> **Cross-References:** earlier in (1)


### 2. How Angular Reports Errors

#### Error handling in Angular
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/error-handling-in-angular?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/error-handling-in-angular?u=76281980&t=0)** - [Instructor] In Angular, all errors pass through the ErrorHandler class.
>
> **[0:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/error-handling-in-angular?u=76281980&t=4)** This class is part of the angular/core module and its job is to essentially write errors to the console.
>
> **[0:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/error-handling-in-angular?u=76281980&t=10)** Most errors in Angular happen because of missing import or export statements, forgotten declarations in a decorator, such as providers or selectors, no instance of imported class, or issues related to asynchronous actions, like errors from a promise or observable.
>
> **[0:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/error-handling-in-angular?u=76281980&t=26)** Think of observables as a type of promise, but for data that returns more than once.
>
> **[0:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/error-handling-in-angular?u=76281980&t=31)** This sequence of data is called a "stream" and Angular is built from the ground up to work with these streams.
>
> **[0:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/error-handling-in-angular?u=76281980&t=37)** While streams are excellent for high performance applications, they return cryptic error messages that are difficult to diagnose.
>
> **[0:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/error-handling-in-angular?u=76281980&t=43)** This is because Angular executes all code inside of things called zones.
>
> **[0:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/error-handling-in-angular?u=76281980&t=48)** We'll looking at zones in detail in the next video but, for now, think of them as scoped containers, called execution contexts.
>
> **[0:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/error-handling-in-angular?u=76281980&t=55)** These containers group chunks of code together, even if that code executes asynchronously.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (1), class. (1), module (1), class, (1)
> **Cross-References:** in the next (1)
> **Definitions:** is called (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Understanding zones in Angular apps
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=0)** - [Instructor] Angular executes all code inside of Zones.
>
> **[0:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=3)** It does this using Zone.js which is now part of the angular core library.
>
> **[0:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=8)** Zones are great for high-performance applications but they can cause cryptic error messages in the console and can be hard to diagnose.
>
> **[0:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=15)** Understanding how Zones work will help you pinpoint the root cause of errors much more effectively.
>
> **[0:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=20)** Frameworks like Angular use Zones to check that all business logic is complete before it updates the done.
>
> **[0:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=26)** This ensures that done updates happen at the most efficient point in the rendering cycle.
>
> **[0:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=31)** Zones work by creating a scope container that groups a chunk of code together even if that code executes asynchronously.
>
> **[0:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=37)** These chunks are called execution contexts.
>
> **[0:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=40)** There can be only one zone per stack and all code on a given stack executes in the same zone.
>
> **[0:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=46)** Child zones can reference their parents and inherit properties but parent zones can not reference their children.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=52)** Zones are immutable.
>
> **[0:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=53)** They cannot be changed once created.
>
> **[0:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=55)** There's also no guarantee that a function will execute in the same zone each time it's invoked.
>
> **[1:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=60)** This means your functions may execute in new zones each time they're called.
>
> **[1:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=64)** Zones are persistent across asynchronous functions.
>
> **[1:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=67)** When an asynchronous action gets scheduled the callback executes in the same zone that existed at the time the operation was invoked.
>
> **[1:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=75)** This means that zones retained their properties that were defined during execution and the ability to track actions and pass properties across asynchronous operations is what makes Zone such a powerful tool.
>
> **[1:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=86)** This ability is also the reason why error messages can seem mysterious.
>
> **[1:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=90)** Error messages trace the Zone back to its origin not just the execution stack.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=94)** You can use Zones at all stages of application development.
>
> **[1:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-zones-in-angular-apps?u=76281980&t=97)** And I encourage you to take a look at the official documentation for an even deeper look at how Zones can improve your development life cycle and your production application.

> [!info]- Semantic Content
>
> **Code Keywords:** function (1), pass (1)
> **File Paths:** zone.js (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Angular without ZoneJS (Zoneless)
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-without-zonejs-zoneless-26050371?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-without-zonejs-zoneless-26050371?u=76281980&t=0)** - [Trainer] Starting in Angular version 18, you can opt-in for a new Zoneless architecture.
>
> **[0:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-without-zonejs-zoneless-26050371?u=76281980&t=6)** This is a huge change because Angular's been using ZoneJS since version 2.0.
>
> **[0:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-without-zonejs-zoneless-26050371?u=76281980&t=12)** The introduction of Zoneless Angular means fewer change detection cycles, smaller app bundle sizes, faster startup times, better debugging, and better compatibility with third-party APIs.
>
> **[0:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-without-zonejs-zoneless-26050371?u=76281980&t=24)** The biggest risk is that, as of this recording, Zoneless Angular is an experimental feature.
>
> **[0:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-without-zonejs-zoneless-26050371?u=76281980&t=30)** The API is incomplete, unstable, and could change at any time.
>
> **[0:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-without-zonejs-zoneless-26050371?u=76281980&t=34)** It also requires changes to your project dependencies and may require refactoring of code and unit tests to make them compatible with the new API.
>
> **[0:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/angular-without-zonejs-zoneless-26050371?u=76281980&t=43)** Check out Angular's official documentation for more info.

> [!info]- Semantic Content
>
> **Env Vars:** api (2)
> **Versions:** version 18 (1), version 2 (1)
> **Definitions:** is a  (1), is an  (1)
> **CLI Commands:** make (1)
> **Code Keywords:** require (1)
> **Speakers:** - [trainer] (1)

#### Add a new file using Angular CLI
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=0)** - [Instructor] Let's make a custom service that adds metadata to error messages before sending them to the console.
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=5)** There's a few ways we could add a new file, but I find the best way is to use Angular CLI tool.
>
> **[0:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=11)** Angular CLI knows what type of file we want and automatically adds the correct imports and exports for that type of file.
>
> **[0:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=18)** We'll need the terminal for this.
>
> **[0:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=20)** So I'll go up to the Terminal menu, click on New Terminal and I'll type NG generate service and hit Enter.
>
> **[0:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=27)** Angular will ask us what we want to name the file.
>
> **[0:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=30)** Here's some things to keep in mind, Angular puts all new files in the app folder in the source directory, right here.
>
> **[0:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=37)** We can declare sub-directories using forward slashes.
>
> **[0:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=40)** For example, if I want to put something in the user folder I would type a user/ if I wanted to put something in a new folder I would type that name instead, so foo/, you get the idea.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=52)** The file name itself is always transformed to lowercase dash case. This means a file called foo-bar and FooBar, with an uppercase F and an uppercase B, are the same file, but foo-bar and foobar, all lowercase, are different files.
>
> **[1:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=70)** Angular adds the correct file name suffix for us, based on the file type we pick.
>
> **[1:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=74)** This means we only need to type the file name, no suffix.
>
> **[1:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=78)** In our case, I'll call the custom service error metadata and put it in a new services folder.
>
> **[1:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=84)** To do that I'll type services/error-metadata and hit Enter.
>
> **[1:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=90)** In the sidebar, we can see our new file in the Services folder in the app directory.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=94)** Angular also created a spec file for us, so we can add unit tests for our service.
>
> **[1:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=99)** We'll look at unit tests later in this course.
>
> **[1:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/add-a-new-file-using-angular-cli?u=76281980&t=102)** For now, let's focus on writing the code for the service itself, which we'll do in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this. (1), case. (1), case, (1)
> **Tools:** terminal (3)
> **CLI Commands:** make (1), find (1)
> **Env Vars:** cli (2)
> **Cross-References:** later in (1), in the next (1)
> **UI Navigation:** click on (1), in the sidebar (1)
> **Documentation:** spec (1)
> **Analogies:** for example (1)

#### Writing a custom error handler class
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=0)** - [Instructor] In the last video we added a new file using Angular CLI tool.
>
> **[0:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=4)** Let's update this file to add metadata to error messages before sending them to the console.
>
> **[0:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=9)** I have our new file open here in VS code and the first thing we need to do is import Angular's ErrorHandler class.
>
> **[0:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=15)** I do that by going to the import statement for the Angular core module at the top of the file and adding the ErrorHandler class to the list of imports.
>
> **[0:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=24)** If you're using VS code or something similar you may get help with auto-completion.
>
> **[0:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=28)** Please take advantage of that.
>
> **[0:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=29)** I know I will.
>
> **[0:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=30)** I'm going to hit tab to use the suggestion provided by the editor.
>
> **[0:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=33)** Next we can get rid of the constructor.
>
> **[0:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=35)** We won't need that for our service.
>
> **[0:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=37)** Then we want to implement the ErrorHandler class.
>
> **[0:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=39)** We do that by going just before the opening bracket of our class and typing implements ErrorHandler.
>
> **[0:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=46)** You may see a wavy red line under the class name if you're using VS code, this is the editor telling us there's an error.
>
> **[0:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=53)** If we hover over the class name we'll get more info about what's wrong.
>
> **[0:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=56)** Also, if you have a Terminal window open you can go over to the Problems tab here and find out more info about what's happening in your file.
>
> **[1:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=65)** Either way.
>
> **[1:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=65)** The error is telling us that there's a missing property called handleError.
>
> **[1:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=70)** Let's add that now.
>
> **[1:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=71)** I'll close the terminal here, go back to our class, make a new line and type public handleError() {} This method takes one argument.
>
> **[1:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=83)** The error we want to modify, and I'll set its type as any which is the same type used in the ErrorHandler class.
>
> **[1:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=90)** This method doesn't return any values so we'll set the methods return type is void.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=94)** We can do whatever we want inside the body of this method.
>
> **[1:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=97)** For now, let's send a simple string back to the console to make sure our service works correctly.
>
> **[1:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=103)** I'll make a new line and type console.error and into the error method, I will send a string that says, "Hello from ErrorMetadataService."
>
> **[1:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=117)** We need to date the app.module.ts file to use our new service.
>
> **[2:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=121)** Let's do that now.
>
> **[2:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=123)** I'll go to the source folder here in the sidebar open up app, go down to app.module, open up that file and we'll need to import two things, the first is Angular ErrorHandler class and the second is our custom error metadata class.
>
> **[2:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=138)** First, I'll go to the import statement for the Angular core module and add the ErrorHandler class to the list of imports.
>
> **[2:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=145)** Then I'll make a new import statement for our custom service.
>
> **[2:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=151)** Between the brackets, I'll type ErrorMetadataService and we're going to import that from ./services/error-metadata.service.
>
> **[2:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=165)** We need to tell Angular about this new service.
>
> **[2:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=168)** We do that by updating the providers array in the NgModule decorator.
>
> **[2:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=173)** The providers property takes either an array of class names or in our case, an array of objects.
>
> **[2:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=179)** These objects have several possible parameters but we only need two here.
>
> **[3:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=183)** The first parameter is provide and the value of this property is the name of the class we want to override.
>
> **[3:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=189)** So I'll pass an ErrorHandler and the second parameter is used class.
>
> **[3:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=194)** The value of this property is the name of our custom service.
>
> **[3:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=197)** The class that we're going to use in place of ErrorHandler.
>
> **[3:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=203)** We'll need to compile our code and launch a local dev server to check our work.
>
> **[3:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=207)** We use the NPM start command to do that.
>
> **[3:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=210)** I'll go up to the Terminal menu, click on New Terminal and type npm start and hit enter.
>
> **[3:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=216)** Under the hood, NPM start runs NG serve.
>
> **[3:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=220)** While we could run NG serve directly, I recommend using the NPM start command instead.
>
> **[3:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=224)** Here's why, sometimes the version of Angular CLI tool installed locally as a project dependency can be different from the version installed globally on your machine.
>
> **[3:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=235)** Using the NPM start command guarantees that you use the local version installed in the project.
>
> **[4:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=240)** A browser may automatically open once Angular compiles the app.
>
> **[4:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=244)** If it doesn't, hover over the local host URL, here in the terminal and click on follow link.
>
> **[4:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=250)** So far so good.
>
> **[4:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=252)** I'll open a console here in Chrome to check for errors.
>
> **[4:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=255)** I'll go up to the View menu scroll down to Developer and then click on Developer Tools.
>
> **[4:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=261)** Make sure I'm on the Console tab.
>
> **[4:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=263)** Great, no errors.
>
> **[4:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=265)** And this is perfectly correct because there are no errors in our code.
>
> **[4:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=268)** We wrote perfect code.
>
> **[4:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=270)** We'll need to force an error to check our new service.
>
> **[4:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=274)** There's a couple ways to do this.
>
> **[4:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=275)** The easiest is to go into the user-list-component and comment at one of the lines.
>
> **[4:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=279)** Let's do that now.
>
> **[4:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=280)** That can be as code, I'll scroll down to user-list, click on the user-list-component file and comment out line 14.
>
> **[4:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=289)** I'll save my changes and go back to the browser.
>
> **[4:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=292)** There it is.
>
> **[4:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=293)** Our custom message.
>
> **[4:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=294)** Hello from ErrorMetadataService, looks great.
>
> **[4:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=298)** This means our service is wired into the app correctly.
>
> **[5:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=302)** Let's go back into the file and update the service to return useful details about the error.
>
> **[5:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=307)** Timestamps are useful, so let's add that.
>
> **[5:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=309)** I'll make a new variable called date and assign it to a new Date object.
>
> **[5:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=315)** Then instead of a string, I'll pass in a new object into the error method and I'll make a new property called timestamp which I will assign to the value of date.toISOString().
>
> **[5:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=330)** We also want the error message itself.
>
> **[5:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=332)** So I'll make a new property called message and assign it to the value of error.message.
>
> **[5:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=337)** Finally, I'll add a property called zone.
>
> **[5:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=339)** This is specific to Angular and would tell us more information about these zone that our code is running in.
>
> **[5:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=345)** I'll make a new property called zone and assign it to error.zone.
>
> **[5:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=350)** Back in the browser.
>
> **[5:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=351)** When we reload our page, we can see our custom error object.
>
> **[5:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=355)** Looks great.
>
> **[5:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/writing-a-custom-error-handler-class?u=76281980&t=356)** Custom ErrorHandlers like this can be very powerful because it allows you and your team to work with these error messages without needing to refactor any of Angulars underlying code.

> [!info]- Semantic Content
>
> **Code Keywords:** let (7), class. (5), module (4), pass (2), implements (1)
> **CLI Commands:** make (9), npm (5), find (1)
> **UI Navigation:** click on (4), go to (2), scroll down (2), in the sidebar (1)
> **Tools:** terminal (5), vs code (3)
> **Env Vars:** npm (4), cli (2), url (1)
> **Code Identifiers:** handleerror (2), toisostring (1)
> **Cross-References:** go back to (2), in the last (1)
> **File Paths:** app.module.ts (1)

#### Changes for Angular v16
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v16?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v16?u=76281980&t=0)** For newer versions of Angular like versions 15 and 16, the Angular team recommends using plain classes for custom error handlers instead of injecting them through Angular's dependency injection.
>
> **[0:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v16?u=76281980&t=13)** For our ErrorMetadataService, this means we can get rid of the injectable decorator and just export the class as written.
>
> **[0:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v16?u=76281980&t=21)** We use this new plane class just like we did before, by adding it to the array of providers and overriding the default error handler with our custom ErrorMetadataService.
>
> **[0:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v16?u=76281980&t=32)** Check out Angular's official documentation for more info.

> [!info]- Semantic Content
>
> **Analogies:** just like (1)


### 3. Common Syntax Errors

#### Adding a local storage service
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=0)** - [Instructor] Let's add a feature in our app that lets users save the current filter state.
>
> **[0:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=4)** There are many ways we could do this but to keep things simple, I'm going to use local storage.
>
> **[0:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=8)** Local storage is one of several client side data storage options available on all modern browsers and it's an excellent choice for our use case here.
>
> **[0:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=16)** In local storage, data is stored as simple key value pairs and the data persists between browsing sessions until it's deleted by the user or some trigger in our app code.
>
> **[0:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=26)** This means we can restore the filter on page load even after the user closes the browser window.
>
> **[0:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=31)** Check out the course managing data in Angular two applications here in our library for an in-depth look at all your data storage options for Angular.
>
> **[0:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=40)** I'm in VSA code here and I already installed the NPM packages and launched a local dev server.
>
> **[0:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=46)** I'm going to make a new file now using the Angular CLI tool.
>
> **[0:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=49)** I'll need a new terminal window, so I'll go to this plus sign here click on it to open a new instance and I'll type NG, generate a service and hit enter.
>
> **[0:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=58)** A couple of things here, you may get a warning about your global CLI version being greater than your local CLI version, that's okay just follow along with it set the configuration if you want to, doesn't change anything that we're doing here.
>
> **[1:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=72)** The second thing is Angular is going to ask us what we want to name the file and where we want to store it.
>
> **[1:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=76)** You can call your file whatever you'd like, I'm going to call mine a web storage and I'm going to place it in the services folder.
>
> **[1:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=83)** To do that, I'm going to type services slash web dash storage and hit enter.
>
> **[1:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=88)** Check out my video earlier in this course for details on how Angular CLI works with file names.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=94)** I'm going to open our new file, I'll go to source, app, services, click on web storage dot service dot TS.
>
> **[1:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=103)** Nice, it looks good.
>
> **[1:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=104)** There are many design patterns we could use to write the service, and I really encourage you to experiment with different architectures to find one that works best for your use case.
>
> **[1:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=114)** Today I'm just going to write simple get and set methods to get and set data from local storage.
>
> **[2:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=121)** I'll start by making a new line under the constructor, typing public get open closed parentheses, open, close curly brackets, make a new line again, public this time of call it set open closed parentheses, open closed curly brackets.
>
> **[2:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=137)** So these are our two methods for the service.
>
> **[2:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=139)** We'll build the get method first.
>
> **[2:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=141)** Get is going to take a single argument, it's going to be a string that represents the key of the value we want to retrieve from local storage.
>
> **[2:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=149)** I'm going to call this argument key and I'll set its type as a string.
>
> **[2:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=153)** I'm going to pass this argument to the window dot local storage dot get item method and I'm going to return its result.
>
> **[2:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=160)** While you could reference the local storage object directly, I recommend always explicitly referencing the window object to clearly distinguish between using a global property like local storage instead of a class level property with the same name.
>
> **[2:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=174)** This will make managing the code base much easier over time.
>
> **[2:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=177)** The last thing we want to do for this method is set the return type equal to the same return type as the get item method.
>
> **[3:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=185)** I'll hover over get item and I see that the return type is string or no I'll do the same for the game here.
>
> **[3:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=192)** It looks good.
>
> **[3:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=193)** Here's something to keep in mind about local storage, local storage always stores data as strings.
>
> **[3:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=199)** In this case, our filter is already a string and we can return it directly from the get method.
>
> **[3:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=204)** For other data types like objects, arrays, and booleans you may want to convert the storage string back into its original data type before returning the result from the get method.
>
> **[3:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=215)** You can use Jason dot parse or a similar technique to convert non strings back to their original data types.
>
> **[3:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=221)** Now that we wrote the get method, let's write the set method.
>
> **[3:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=225)** Set is going to take two arguments, the first is a string representing the key of the value we want to retrieve from local storage.
>
> **[3:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=232)** I'll call this argument key, and I'm going to set it to the type of string.
>
> **[3:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=236)** And the second argument is going to be a string representing the value of the data we want to save.
>
> **[4:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=241)** I'll call this argument value and I'll declare its type as a string as well.
>
> **[4:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=247)** I'm going to pass these arguments into the window that local storage dot set item method.
>
> **[4:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=253)** Set item doesn't return any values so we're going to set the return type on our set method to void.
>
> **[4:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=260)** Since our filter is already a string, we can pass the filter value directly to the set item method.
>
> **[4:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=266)** For other data types remember to convert the data to a string before storing it in local storage.
>
> **[4:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-local-storage-service?u=76281980&t=271)** You can use Jason dot string of file or a similar technique to convert these non strings into strings before saving them.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), let (2), public (2), case. (1), case, (1)
> **Env Vars:** cli (4), vsa (1), npm (1)
> **CLI Commands:** make (3), npm (1), find (1)
> **UI Navigation:** go to (2), click on (2)
> **Warnings:** warning (1), keep in mind (1)
> **Cross-References:** earlier in (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)

#### Fixing dependency injection errors
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=0)** - Dependency injection errors are usually related to un-exported modules or import statement typos.
>
> **[0:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=7)** These issues can be difficult to catch because Angular emits errors to the browser console on execution and not on the import or export of a file.
>
> **[0:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=15)** Angular's error messages can also be mysterious and usually traced back to an undefined variable in one of your files.
>
> **[0:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=21)** Code editors like Visual Studio Code can be a big help here because they can reason about the relationships in your code base and forecast potential issues all without executing the code.
>
> **[0:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=31)** Back in Visual Studio Code here, let's import our web storage service from the last video into our user list component.
>
> **[0:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=39)** I'll go to the sidebar, click on source, app, user list, click on user list.component.ts to open the file, looks good.
>
> **[0:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=50)** The first thing we need to do is create a new import statement, to import our web storage service.
>
> **[0:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=55)** At the top of the file, I'll make a new line, type import and between the brackets I'll type a web storage service and we'll import that from ../services/web-storage.service.
>
> **[1:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=71)** If you use the Angular CLI tool to generate the files for your web storage service, then at this point there's nothing wrong with the code.
>
> **[1:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=78)** This is because Angular CLI already added the export keyword in your service class.
>
> **[1:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=83)** Sometimes developers forget to export the class when they write the code from scratch.
>
> **[1:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=88)** Let's pretend that happened here and delete the keyword from our web storage service.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=92)** I'll go back to that file.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=94)** Highlight export, hit delete.
>
> **[1:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=96)** Let's see what happens in our user list component.
>
> **[1:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=99)** If you're following along using Visual Studio Code, you'll see a thin wavy red line under the class name in the import statement.
>
> **[1:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=106)** This wavy line is feedback from the editor telling us there's problem, I can hover over the red line with my mouse to get more info.
>
> **[1:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=114)** It looks like VS Code found the class in our module but the class is an export.
>
> **[1:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=119)** This makes sense because we just deleted the export statement.
>
> **[2:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=124)** But imagine someone else on your team wrote the code for the web storage service, now we know exactly how to fix that error.
>
> **[2:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=131)** So I'll go back into the web storage service file.
>
> **[2:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=134)** Add that export keyword, save my changes.
>
> **[2:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=137)** And if I go back to the user list component, voila, the error is gone.
>
> **[2:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=141)** Another common error is misspelled module names and imported properties.
>
> **[2:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=146)** Let's say I misspelled the file name instead of web dash storage dot service, I wrote web dash storage dash Fu dot service.
>
> **[2:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=155)** The feedback from Visual Studio Code would tell me it can't find the module at all.
>
> **[2:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=160)** If instead of misspelling the file name I tried to import a property that didn't exist.
>
> **[2:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=166)** VS code would tell me it found the file but it can't find the exported property.
>
> **[2:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=171)** You don't need Visual Studio Code to take advantage of error checking like this, Angular's compiler offers the same great feedback.
>
> **[2:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=178)** All you need to do is open a terminal window and use either the Ng build or Ng serve command.
>
> **[3:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=184)** Use the Ng build command to compile your code and check for errors.
>
> **[3:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=190)** Use the Ng serve command to compile your code, check for errors and watch for changes.
>
> **[3:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=198)** With the local dev server running.
>
> **[3:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=199)** I can go back into my component file, fix the import statement, save my changes, and watch as Ng serve re-compiles the code.
>
> **[3:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-dependency-injection-errors?u=76281980&t=209)** Either way the error messages reported by the compiler are very similar to the error messages reported in VS Code, and I highly recommend taking advantage of both.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), module (3), delete (2), from . (1), class. (1)
> **Tools:** visual studio (5), vs code (3), terminal (1)
> **UI Navigation:** click on (2), go to (1), open the (1)
> **CLI Commands:** find (2), make (1)
> **Env Vars:** cli (2)
> **Cross-References:** go back to (2)
> **Analogies:** imagine (1), similar to (1)
> **File Paths:** list.component.ts (1)

#### Getting and setting data in local storage
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=0)** - [Instructor] Let's use the new web storage service in our useless component.
>
> **[0:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=4)** We imported the service earlier in this course and now we need to instantiate it in the constructor.
>
> **[0:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=9)** I'll make a new line here and type a private web storage service with a lowercase w colon web storage service with an uppercase w.
>
> **[0:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=18)** Next I'll change the update method to save the filter state to local storage.
>
> **[0:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=23)** I'll make a new line here and type this dot web storage service dot set.
>
> **[0:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=29)** I need to set the key here, this can be any string you like.
>
> **[0:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=31)** I'm going to use the key of users, all upper case and the value is going to be this dot users.
>
> **[0:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=39)** This wavy line here is the editor telling us there's an issue.
>
> **[0:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=42)** I'm going to hover over to see what's going on.
>
> **[0:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=44)** Looks like the set method expects a string here but we're passing in an array.
>
> **[0:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=50)** There's a couple of ways we can transform this array into a string.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=52)** I think the easiest here is to just use JSON stringify I'm going to highlight our property, cut type JSON stringify pass that property into the string of fine method.
>
> **[1:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=65)** Let's go to the browser and check our work.
>
> **[1:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=67)** So far. So good.
>
> **[1:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=68)** I'll go up to the view menu here, scroll down to developer click on developer tools, navigate to the application tab open up local storage, click on local host.
>
> **[1:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=81)** And there's nothing here.
>
> **[1:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=82)** This is okay because we haven't filtered the list yet.
>
> **[1:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=85)** Let's do that now.
>
> **[1:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=87)** I'll go to the input type DAV for Davis.
>
> **[1:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=90)** There it is.
>
> **[1:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=91)** We have our key of users and we have our value, which is the filtered array.
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=95)** This is great, everything's working.
>
> **[1:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=97)** However, the user list resets when we reload the page still.
>
> **[1:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=100)** So let's go update the component to show the filtered list on page load.
>
> **[1:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=104)** Instead of loading the list from the user list service in the ngoninit method I'm going to load the list from web storage service instead.
>
> **[1:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=114)** I'll make a new line and type const filtered equals this dot web storage service dot get.
>
> **[2:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=122)** I'm going to pass in the same string I used down below in the update method into the get method.
>
> **[2:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=127)** This is how we retrieve our data from local storage local storage, and our web storage service return.
>
> **[2:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=132)** null, if it can't find the key we asked for so we'll need to return the full list of users, if filtered is null, I'll do that now.
>
> **[2:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=140)** If filtered is null return the full list from the user list service otherwise set the user's property to filtered.
>
> **[2:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=149)** Looks like we have another error here.
>
> **[2:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=151)** I'll hover over the user's property to see what's going on.
>
> **[2:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=155)** VS code is telling me that I can't assign a string to the user's property.
>
> **[2:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=160)** I'll need to convert the string and local storage back to an array, right now the filtered variable is still a string.
>
> **[2:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=167)** To keep things simple we'll just use JSON parse to transform the string back into an array.
>
> **[2:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=172)** I'll highlight the filtered property here, cut type of JSON parse, passing that property into the parse method.
>
> **[3:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=181)** Nice. Error's gone.
>
> **[3:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=182)** Let's check our work in the browser.
>
> **[3:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=185)** I'll reload the page clear the filter let's search for something else.
>
> **[3:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=188)** Maybe Allen, great local storage updates as we expect.
>
> **[3:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-and-setting-data-in-local-storage?u=76281980&t=193)** And if I reload the page, our filtered list is still there.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (2), private (1), const (1), return. (1)
> **UI Navigation:** go to (2), click on (2), scroll down (1), navigate to (1)
> **Env Vars:** json (4), dav (1)
> **CLI Commands:** make (3), find (1)
> **Cross-References:** earlier in (1)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)

#### Adding a custom Angular pipe
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=0)** - [Instructor] Pipes let you change how Angular displays data in your app.
>
> **[0:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=4)** They're great for things like making text uppercase and turning decimals into percents.
>
> **[0:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=9)** They're also great for quickly localizing numbers and date formats.
>
> **[0:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=13)** You can even use pipes to work directly with promises and observables.
>
> **[0:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=16)** Check out Angular's website for a full list of built-in pipes and how they work.
>
> **[0:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=21)** Let's add a feature in our app that highlights the filter string found in each name.
>
> **[0:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=25)** A custom Angular pipe is an excellent choice for this kind of feature.
>
> **[0:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=29)** We'll use the ng generate command to generate a new file for our pipe.
>
> **[0:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=33)** I'll go up to the terminal menu, click on new terminal and then I'll type ng generate pipe and hit Enter.
>
> **[0:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=41)** Angular is going to ask us what we want to name the pipe.
>
> **[0:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=43)** You can name your file whatever you'd like.
>
> **[0:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=45)** I'm going to call mine highlight text and I'm going to put it in a new pipes folder in the app directory.
>
> **[0:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=50)** I do that by typing pipes/highlight-text and hitting Enter.
>
> **[0:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=55)** Check out my video earlier in this course for details on how to use the Angular CLI tool.
>
> **[1:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=60)** Let's take a look at our new file.
>
> **[1:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=62)** I'll go to the source directory app, scroll down to pipes, click on highlighttext.pipe.ts.
>
> **[1:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=70)** I'm going to close this terminal too.
>
> **[1:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=72)** Nice.
>
> **[1:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=73)** Here's the file for our new pipe.
>
> **[1:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=74)** There's a couple things I want to point out here.
>
> **[1:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=76)** The first is the name of property up here in the pipe decorator.
>
> **[1:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=81)** Pipes should be named using camel case.
>
> **[1:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=84)** It's a good practice to do it this way.
>
> **[1:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=86)** And if you're using the Angular CLI tool to generate your pipe files, then Angular CLI did that for you.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=92)** Nothing you need to do.
>
> **[1:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=93)** However, if you're generating these files manually, if you're adding these files manually, you want to avoid hyphens in the name.
>
> **[1:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=101)** Hyphens will lead to an error at runtime.
>
> **[1:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=104)** The other thing I want to point out here is this transform method.
>
> **[1:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=107)** Angular expects this method to exist with this name in all pipes.
>
> **[1:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=112)** And if it can't find this method, then it causes an error.
>
> **[1:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=116)** Let me show you what I mean.
>
> **[1:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=117)** If I update the name to something like say change, I'm going to get feedback from the editor telling me that it can find the transform property.
>
> **[2:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=126)** But also if I try to run this app in the browser, I'm going to get an error that says, cannot read property call of undefined.
>
> **[2:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=134)** And this is because there is no transform method for Angular to call against.
>
> **[2:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=139)** I'm going to reset the name back to transform here.
>
> **[2:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=142)** The transform method takes two arguments.
>
> **[2:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=145)** The first is the value piped in from the HTML template.
>
> **[2:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=149)** And the second is any number of optional parameters also passed in through the template.
>
> **[2:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=153)** It's good practice to always return a value from a pipe even if that value is null or undefined.
>
> **[2:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=159)** The pipe passes this value back into the template and if there's nothing returned then nothing gets displayed in the view.
>
> **[2:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=165)** It's also good practice to write pipes that do only one thing.
>
> **[2:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=169)** This makes them easy to test and also makes them easy to chain together in the template.
>
> **[2:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=173)** Let me show you what I mean.
>
> **[2:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=174)** Here's the template for our user list component.
>
> **[2:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=178)** Let's say I wanted to the user.name property into uppercase and I wanted to truncate it down to three characters.
>
> **[3:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=185)** I would do that using the uppercase pipe followed by the slice pipe, both included in Angular.
>
> **[3:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=191)** Let me show you how that happens.
>
> **[3:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=193)** I'll go to the end of our name property here.
>
> **[3:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=196)** I'll type the pipe character followed by uppercase which is the name of the uppercase pipe followed by another pipe character and then the slice pipe.
>
> **[3:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=206)** The slice pipe works just like the array.slice method in JavaScript.
>
> **[3:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=210)** So I'll need to pass in at least one parameter for the start index.
>
> **[3:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=214)** I do that using a colon followed by a number, in this case, I'll pass in negative three.
>
> **[3:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=219)** So we get the first three characters of each name.
>
> **[3:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=222)** I'll save my changes.
>
> **[3:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=224)** Let's go see what things look like in the browser.
>
> **[3:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=226)** Back in the browser when we refresh the page, we see the output of our change pipes.
>
> **[3:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=230)** First three letters, all uppercase.
>
> **[3:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=233)** Now, granted, this is not the most useful pipe chain but it's a good example of how you can piece together simple pipes to make more complex output.
>
> **[4:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=241)** What we really want is to pass the user.name value into our highlight text pipe along with the filter text.
>
> **[4:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=248)** We do it like this.
>
> **[4:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=248)** I'm going to delete the uppercase pipe and the slice pipe.
>
> **[4:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=251)** Replace that with highlight text followed by the filter.value.
>
> **[4:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=258)** Save our work.
>
> **[4:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=259)** Let's go see the browser again.
>
> **[4:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=261)** Looks good.
>
> **[4:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=262)** No errors in the console and our list of names is empty, which is correct because our custom pipe doesn't return anything yet.
>
> **[4:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=269)** It just returns null.
>
> **[4:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=270)** Let's go fix that now.
>
> **[4:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=272)** I'm back in the highlight text pipe.
>
> **[4:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=274)** Instead of returning null on line nine, I'm just going to return the value.
>
> **[4:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=277)** Save our changes.
>
> **[4:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=279)** Back to the browser.
>
> **[4:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=280)** It looks good.
>
> **[4:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=281)** No errors in the console and our list of names is back.
>
> **[4:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/adding-a-custom-angular-pipe?u=76281980&t=284)** In the next video, we'll update the transform method in our custom pipe to find the search string entered by our user.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (3), case. (1), case, (1), this. (1)
> **UI Navigation:** click on (2), go to (2), scroll down (1)
> **Exercise Files:** template (5)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** cli (3), html (1)
> **Tools:** terminal (3)
> **Best Practices:** good practice (3)
> **Cross-References:** earlier in (1), in the next (1)

#### Using regular expressions to find content
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=0)** - [Instructor] In the last video, we added a new custom pipe using the Angular CLI tool.
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=5)** Now we're going to update the transform method in that pipe to find usernames based on our filter string.
>
> **[0:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=11)** I'll start by updating the default type annotations here in the transform method.
>
> **[0:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=15)** We know that the value will be a string, and that the optional parameter is going to be our filter, which is also a string, but not an array, just a string.
>
> **[0:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=25)** This transform method is going to return a string, so we can update the return type as well.
>
> **[0:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=31)** We don't need to update the type annotations, but it's a good practice and it helps the compiler understand what we want our code to do.
>
> **[0:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=39)** Next, we want to return the original value right away if there's no filter.
>
> **[0:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=43)** This keeps our code performant and avoids unnecessary processing.
>
> **[0:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=47)** I'll do that by creating an if statement here on a new line.
>
> **[0:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=50)** If the filter.length is equal to zero, return the value.
>
> **[0:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=56)** If the filter has a length, we want to use it to replace content in the value with something else.
>
> **[1:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=62)** We do this using the replace method.
>
> **[1:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=64)** Here, right after the word value on line 13, I'll type .replace().
>
> **[1:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=73)** Replace expects two arguments.
>
> **[1:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=75)** The first is the search text.
>
> **[1:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=77)** In our case, that would be the filter.
>
> **[1:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=81)** And the second argument is the replacement text.
>
> **[1:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=84)** I'll set that to a simple string for now just to make sure everything works.
>
> **[1:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=87)** Let's go with x.
>
> **[1:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=89)** Back in the browser, when we refresh the page and search for a name, let's say Cooper, the list filters correctly because we handle that in the component, not the pipe, but we're not seeing any change in the content.
>
> **[1:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=100)** And this is because our filter string, as entered, is lowercase.
>
> **[1:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=104)** But if we inspect the HTML itself, I'll right-click on Cooper, click inspect, we can see that in the HTML markup, Cooper has an uppercase C.
>
> **[1:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=114)** if I clear the filter and search for Cooper with an uppercase C, then the pipe replaces the search text with an x as expected.
>
> **[2:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=123)** So how do we ignore the case of the letters?
>
> **[2:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=125)** There are a few ways we could do this.
>
> **[2:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=127)** And I think the cleanest way is by using a regular expression.
>
> **[2:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=130)** Regular expressions are a very powerful way to build complex search patterns.
>
> **[2:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=134)** And I encourage you to learn more about them.
>
> **[2:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=136)** Just search for the phrase regular expressions here in our library for more info.
>
> **[2:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=140)** The replacement method that we use in our pipe accepts either a string or a regular expression as the first argument.
>
> **[2:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=149)** So instead of passing in a string directly, we'll pass in a regular expression that ignores letter case.
>
> **[2:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=156)** We'll do this by making a new variable to hold our regular expression.
>
> **[2:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=159)** I'll make a new line and type const search = new RegExp().
>
> **[2:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=167)** The RegExp class takes two arguments.
>
> **[2:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=170)** The first is the search pattern.
>
> **[2:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=172)** This is our filter variable, so I'll pass that in here.
>
> **[2:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=176)** And the second argument is a string containing flags.
>
> **[2:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=179)** Flags change how the search pattern is applied to content.
>
> **[3:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=183)** I'm going to pass in the i flag here.
>
> **[3:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=185)** I stands for ignore case.
>
> **[3:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=188)** We then replace the filter reference here in our return statement with a reference to the regular expression instead.
>
> **[3:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=195)** Back in the browser, if I search for Cooper again, everything works as expected.
>
> **[3:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=201)** One thing to note here, if we search for a user where the first and last name start with the same letter, say we search for Camden Chan or Callie Cote, right down here, only the first instance of that letter is changed.
>
> **[3:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=215)** This is because regular expressions look for only the first instance of search text by default.
>
> **[3:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=220)** We need to pass in another flag to tell the regular expression to look for our search pattern everywhere.
>
> **[3:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=226)** We do this using the g flag.
>
> **[3:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=228)** G stands for global.
>
> **[3:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=230)** Quick note, you can pass in flags in any order.
>
> **[3:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=233)** Back in the browser, if I reload the page, and I search for Callie Cote or Camden Chan again, now every instance of that search term is updated.
>
> **[4:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=242)** Things are great so far.
>
> **[4:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=244)** We can find the filter string in each username and replace that string with new content.
>
> **[4:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=248)** But how exactly do we highlight the text?
>
> **[4:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-regular-expressions-to-find-content?u=76281980&t=250)** We'll take a look at that in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (5), let (2), case. (2), else. (1), type . (1)
> **CLI Commands:** find (2), make (2)
> **Env Vars:** html (2), cli (1)
> **Definitions:** stands for (2), is a  (1)
> **Cross-References:** in the last (1), in the next (1)
> **UI Navigation:** right-click (1)
> **Best Practices:** good practice (1)
> **Speakers:** - [instructor] (1)

#### Using a pipe to change HTML content
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=0)** - In the last video, we used a regular expression to search for usernames.
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=5)** In this video, we'll add code that modifies HTML content, so we can highlight the filter string found in each name in our list of users.
>
> **[0:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=13)** There are many ways we could do this, but I find the cleanest way is to wrap the matched text in a span element and modify its styles using CSS.
>
> **[0:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=21)** This approach does two things for us.
>
> **[0:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=23)** First, it keeps CSS styles out of our HTML content, which is good practice.
>
> **[0:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=28)** And second, it avoids cross site scripting issues.
>
> **[0:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=32)** Angular has built in protection against many common attacks, including cross site scripting.
>
> **[0:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=37)** And we would need to bypass angular security to style the content directly in our pipe.
>
> **[0:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=42)** I don't recommend bypassing angular security.
>
> **[0:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=45)** So using a CSS class is the safest option.
>
> **[0:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=48)** Check out angular's documentation to learn more about cross site scripting and angular security checks.
>
> **[0:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=53)** The replace method on line 15 accepts either a string or a function as the second argument.
>
> **[1:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=60)** So instead of passing in a string, we'll pass in a function that returns the match text wrapped in the span element.
>
> **[1:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=66)** This is how we do that.
>
> **[1:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=67)** I'll delete the string here, make a call back function using HARO Syntex.
>
> **[1:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=73)** I'm going to pass and match.
>
> **[1:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=75)** As the argument.
>
> **[1:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=77)** This is the search result based on our regular expression.
>
> **[1:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=80)** This function needs to return a string.
>
> **[1:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=82)** And since the matched text will change with each new search, we'll need to use a template literal to make the return value dynamic.
>
> **[1:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=89)** I'll add a return keyword and two backticks.
>
> **[1:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=93)** This is how we declare a template literal in JavaScript.
>
> **[1:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=96)** Inside the backticks, I'll type the opening and closing span elements, just like I would in HTML.
>
> **[1:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=103)** And inside the span element, I'll reference the match argument using JavaScript's dollar sign and curly braces notation.
>
> **[1:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=112)** Then I will add a class attribute to the span element, just like I would in HTML file.
>
> **[1:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=118)** You can call your class whatever you'd like, I'm going to call mine highlight dash text.
>
> **[2:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=122)** Great.
>
> **[2:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=124)** Let's check our work in the browser.
>
> **[2:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=125)** Refresh the page.
>
> **[2:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=127)** If I search for a name, the pipe does its job but angular displays are spent element as text instead of an actual HTML element.
>
> **[2:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=136)** This is because angular escapes all HTML content by default when rendered using a template expression.
>
> **[2:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=141)** Anytime we use the double curly braces notation in angular template, we're using a template expression.
>
> **[2:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=148)** We'll need to replace the template of expression with a reference to angular's inner HTML attribute instead.
>
> **[2:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=154)** Check out angular's website to learn more about its security and how the inner HTML attribute works.
>
> **[2:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=159)** We'll replace the template expression with the inner HTML attribute like this, I'll take the content of our expression, cut.
>
> **[2:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=169)** Delete the curly braces.
>
> **[2:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=171)** I'll make opening and closing square brackets to tell angular that this is an input value.
>
> **[2:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=177)** I'll type inner HTML, and I'll assign the value of this attribute to what was in our expression.
>
> **[3:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=185)** Back in the browser, I'll refresh the page, and let's try searching for a name.
>
> **[3:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=189)** So far, so good.
>
> **[3:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=190)** I don't see any HTML in the output, but let's make sure we're actually getting the span element that we are looking for.
>
> **[3:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=197)** A right click on a name, click on inspect.
>
> **[3:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=200)** And there it is.
>
> **[3:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=201)** Here's our span with a class of highlight text and the search string right in the middle there.
>
> **[3:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=206)** The last thing we need to do is modify the background color for our new CSS class.
>
> **[3:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=211)** I'll do that by opening these styles dot CSS file, which is in the source directory right here.
>
> **[3:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=218)** And I'll add a new CSS class called highlight dash text, and I'll set the background property to yellow.
>
> **[3:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=226)** We add the CSS selector here in these styles not CSS file because of how angular scope CSS at the component level.
>
> **[3:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=233)** We can access this file no matter where we use the pipe, which means we can control how the highlighted text looks in the entire app with only this one CSS selector.
>
> **[4:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=243)** Back in the browser, we reload the page, let's search for say greene, Maria Greene.
>
> **[4:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=249)** There she is.
>
> **[4:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=251)** Not only do we filter the list but we can highlight the search text.
>
> **[4:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/using-a-pipe-to-change-html-content?u=76281980&t=255)** Nice.

> [!info]- Semantic Content
>
> **Env Vars:** html (11), css (10), haro (1)
> **Code Keywords:** function (4), let (4), this, (2), pass (2), delete (2)
> **Exercise Files:** template (7)
> **CLI Commands:** make (4), find (1)
> **UI Navigation:** click on (2)
> **Analogies:** just like (2)
> **Cross-References:** in the last (1)
> **Definitions:** is an  (1)

#### Common pipe errors
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=0)** - [Narrator] Pipes are a very powerful way to transform content without mutating the source data.
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=5)** But there are some common pitfalls you need to be aware of when building custom pipes.
>
> **[0:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=9)** You must add your pipe to the declarations ray in the Ng Module decorator.
>
> **[0:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=14)** If you don't, the compiler will fail and you'll get an error message saying "Angular can't find your pipe."
>
> **[0:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=19)** The Angular CLI tool does this for you so there's nothing to worry about when you generate new pipes using Angular CLI.
>
> **[0:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=25)** Pipes are pure by default.
>
> **[0:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=28)** This means Angular executes the pipe only if it detects a change in a primitive value, like a string or boolean, or it detects a change in a reference to an object or an array.
>
> **[0:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=38)** With pure pipes, Angular ignores changes to data inside objects and arrays.
>
> **[0:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=43)** This keeps your app performant because it's much faster to check primitives and references than it is to do a deep scan of an object or an array.
>
> **[0:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=51)** If you change data in an object or an array, you must replace the reference to that object or array to trigger the pipe.
>
> **[0:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=58)** You can do that using JavaScript's spread syntax or the Object.assign method.
>
> **[1:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=63)** There are some other techniques, but these two are the most common.
>
> **[1:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=66)** Angular also has impure pipes, and you can use these to detect changes inside objects and arrays.
>
> **[1:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=73)** The difference is that Angular executes impure pipes every time it detects a keyboard or mouse input, which can slow your app down if you're not careful.
>
> **[1:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=83)** To turn a pure pipe into an impure pipe, set the pure flag to "false" in the pipe decorator to turn any pipe into an impure pipe.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=92)** The last pitfall you need to be aware of is pipe operator precedence.
>
> **[1:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=97)** Pipes have a higher precedence than ternary operators.
>
> **[1:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=100)** This means Angular will apply the pipe to the final expression before checking against the conditionals.
>
> **[1:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/common-pipe-errors?u=76281980&t=106)** You must use parentheses to declare the order of operations to apply a pipe to the result of a ternary expression.

> [!info]- Semantic Content
>
> **Warnings:** be aware (2), pitfall (1)
> **Code Keywords:** module (1), default. (1)
> **Env Vars:** cli (2)
> **CLI Commands:** find (1)
> **Speakers:** - [narrator] (1)

#### Understanding Angular decorators
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=0)** - [Instructor] Decorators are functions that return functions.
>
> **[0:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=3)** That simple.
>
> **[0:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=4)** But in Angular, they supply metadata about a particular class or property or value.
>
> **[0:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=10)** And they also help with dependency injection across the entire app.
>
> **[0:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=13)** They are built in from the ground up as part of the Angular framework.
>
> **[0:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=17)** Decorators are marked by placing an @ symbol in front of the Decorator name.
>
> **[0:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=21)** They are invoked at runtime and expect arguments to be passed in either between the parentheses or immediately after the closing parentheses of the Decorator.
>
> **[0:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=30)** This is why semi-colons are left off the end of the Decorator expression and why parentheses, even empty ones, always follow the name of the Decorator.
>
> **[0:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=39)** Common decorators are NGModule to define the modules, Component to define components, Injectable to define services, and Input and Output to define properties that are sent and received from the DOM.
>
> **[0:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=54)** There are many built-in Decorators available in Angular and many properties on each Decorator.
>
> **[0:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=59)** So I recommend you read the official Angular documentation for more information on Decorators and how they work in Angular projects.
>
> **[1:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=66)** Common Decorator errors include missing parentheses, missing properties, missing values, or adding a semi-colon at the end of a Decorator statement.
>
> **[1:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=76)** In older versions of Angular, Decorator errors were really hard to diagnose because Angular emitted errors only on execution in the browser console and not a compile time.
>
> **[1:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=88)** In newer versions of Angular we get a lot more helpful feedback from the compiler and this makes diagnosing those issues much, much easier.
>
> **[1:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=98)** You can use the NG build and NG serve commands that come with the Angular CLI tool to take advantage of this error reporting.
>
> **[1:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=106)** NG build compiles your code and halts if there are errors.
>
> **[1:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=110)** NG serve compiles your code, reports the errors, and continues watching for changes.
>
> **[1:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/understanding-angular-decorators?u=76281980&t=116)** Code editors like Visual Studio Code are also very helpful because they can reason about your files and give you real time feedback without even compiling the code.

> [!info]- Semantic Content
>
> **Env Vars:** dom (1), cli (1)
> **Tools:** visual studio (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Filter the array of users by locationId
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-filter-the-array-of-users-by-locationid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-filter-the-array-of-users-by-locationid?u=76281980&t=0)** - [Instructor] Here's a challenge for you, make a new pipe that filters the array of users based on one or more location IDs and returns a new array with only those users.
>
> **[0:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-filter-the-array-of-users-by-locationid?u=76281980&t=16)** Keep in mind that for this challenge you're modifying the array of users as a whole and not the individual user objects.
>
> **[0:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-filter-the-array-of-users-by-locationid?u=76281980&t=22)** You can take a look at the users.TS file for a better idea of how the user's array is organized.
>
> **[0:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-filter-the-array-of-users-by-locationid?u=76281980&t=29)** Good luck.

> [!info]- Semantic Content
>
> **File Paths:** users.ts (1)
> **CLI Commands:** make (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Filter the array of users by locationId
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=0)** - [Instructor] Okay, here's my solution for the challenge.
>
> **[0:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=7)** Keep in mind that my solution and your solution may be different and that's okay.
>
> **[0:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=11)** I made a new pipe called location ID using the same NG generate command we've used in previous videos.
>
> **[0:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=17)** The transform method takes in an array of users or null as well as any number of optional location IDs.
>
> **[0:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=25)** If the array is null or there's no IDs passed in, just return the value.
>
> **[0:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=30)** Otherwise I filter the array using JavaScript's array dot filter method.
>
> **[0:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=34)** For each user in the array I compare that user's location ID against all the IDs passed into the pipe.
>
> **[0:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=41)** I use JavaScript's array dot some method to do this.
>
> **[0:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=45)** Some returns a Boolean used by the filter method.
>
> **[0:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=48)** If true, it adds that user to the new array.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=52)** If false, it does nothing.
>
> **[0:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=54)** Finally, I return a new filter to array of users.
>
> **[0:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=57)** Let me show you the HTML template.
>
> **[0:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=59)** Here's where I send the user's array into my new pipe and here's where I pass in the location IDs.
>
> **[1:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=65)** I use colons to separate each ID I want to pass in.
>
> **[1:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=68)** I wrapped this whole expression in parenthesis, while not required, in this context I find parentheses make the code much easier to read.
>
> **[1:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-filter-the-array-of-users-by-locationid?u=76281980&t=77)** In the browser we have a very short list of users and everything still works as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), this. (1), finally, (1), let (1)
> **CLI Commands:** find (1), make (1)
> **Env Vars:** html (1)
> **Exercise Files:** template (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. Common Async Errors

#### Getting data using REST requests
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=0)** - [Instructor] Let's add a feature to our web storage service that lets users get the current filter state from a remote database using REST requests.
>
> **[0:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=8)** REST stands for representational state transfer.
>
> **[0:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=12)** It's a set of web standards that define how software sends and receives data using the HTTP protocol.
>
> **[0:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=19)** Angular comes with full support for REST requests, so we should take advantage of it.
>
> **[0:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=23)** First, I'll open up our web storage service file, source, app, services, web-storage.service, and I'll import Angular's HttpClient class into this file.
>
> **[0:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=35)** I'll make a new line at the top and type import HttpClient from @angular/common/http.
>
> **[0:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=45)** Next, I'll instantiate the HttpClient class in the constructor.
>
> **[0:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=49)** I'll make a new line here followed by private http: HttpClient.
>
> **[0:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=57)** You can use any variable name you like, but it's common to use something like HTTP here.
>
> **[1:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=62)** Now, there are many ways we could set up the code here in our service, but to keep things simple, I'm going to make two new methods, one to get data from the server and the other to send data back to the server.
>
> **[1:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=73)** I'll make a new line under the set method and type public getRemote() {}.
>
> **[1:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=82)** Inside this method, we'll use the HttpClient instance to get data from a URL.
>
> **[1:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=87)** I'll make a new line and type this.http.get.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=92)** The get method takes two arguments.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=94)** The first is a URL string pointing to the data you want to get from the server, and the second argument is optional.
>
> **[1:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=100)** It's an object with additional data you want to send with the request.
>
> **[1:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=104)** This is where you put things like request headers, URL parameters, and authentication credentials.
>
> **[1:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=109)** We don't need to pass in any options, so we won't need that second argument.
>
> **[1:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=113)** We do, however, need a URL.
>
> **[1:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=116)** And this is where things get interesting.
>
> **[1:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=117)** I built this course to be self-contained.
>
> **[1:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=119)** So instead of using a real remote server, I created an HTTP interceptor instead.
>
> **[2:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=126)** Let me show you.
>
> **[2:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=127)** It's under source, app, mocks, user-list-interceptor.service.
>
> **[2:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=132)** HTTP interceptors are a lot like the custom error handler we made earlier in this course.
>
> **[2:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=137)** They let you examine and modify the HTTP request before you pass it back to Angular's HTTP service.
>
> **[2:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=144)** You might use an interceptor to add authentication headers to every get request, or maybe you want to alias a short URL to a much longer one.
>
> **[2:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=153)** HTTP interceptors are a great place to do that.
>
> **[2:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=157)** We're using an HTTP interceptor here to mock calls to a remote server.
>
> **[2:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=161)** Let me show you what it does.
>
> **[2:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=163)** I implement Angular's HTTP interceptor here on line eight.
>
> **[2:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=167)** I also have these two private properties.
>
> **[2:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=169)** One is called API_URL.
>
> **[2:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=171)** This is the URL we pass into the get request, the PUT method, anything like that in our other files.
>
> **[2:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=178)** And I have this storage key called MOCK_API_FILTER.
>
> **[3:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=182)** This is the key we're going to use in local storage later on in this file to store the data, essentially.
>
> **[3:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=189)** Interceptors have only one method called intercept.
>
> **[3:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=192)** This method returns an observable, and it takes two arguments.
>
> **[3:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=195)** The first is the HTTP request itself, and the second is the handler.
>
> **[3:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=201)** This is essentially how you dispatch the next request in a stream of requests.
>
> **[3:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=206)** So the first argument is essentially the current request, and next is how you dispatch that request back to whatever's requesting.
>
> **[3:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=215)** Inside this method, I have two if statements.
>
> **[3:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=218)** If the request URL is equal to our MOCK_API_FILTER URL, and the request type is of get, then we're going to call this getFilter method, which I'll show you below.
>
> **[3:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=231)** If the request URL is equal to our mock API, and the request is PUT, then we're going to return a different method, setFilter, also below.
>
> **[4:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=242)** If the request is something other than those two things, we're just going to return it as usual, no changes.
>
> **[4:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=248)** For a get request, we have this method down here, getFilter, which also returns an observable.
>
> **[4:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=253)** And basically, what I'm doing is I'm sending back the status of 200, that's the HTTP status, as well as the body, which is the actual data from local storage.
>
> **[4:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=264)** And this is that storage key I mentioned earlier above.
>
> **[4:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=267)** So this here is how we transform an HTTP REST request into a call to local storage.
>
> **[4:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=276)** It's a little funky, and for most projects, you probably won't do something like this, but again, I'm trying to keep this core self-contained.
>
> **[4:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=283)** So we are pretending that these HTTP requests are coming from a remote service, even though everything is stored in local storage.
>
> **[4:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=291)** Finally, we complete the observer.
>
> **[4:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=294)** Same idea for set filter down here.
>
> **[4:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=297)** We pass in a filter string, which we send into local storage using the same storage key.
>
> **[5:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=303)** And then we just call getFilter again.
>
> **[5:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=306)** Back in our web storage service, I'll set the URL for the HTTP get method to the same URL we used in the interceptor.
>
> **[5:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=314)** So I'll type /mock/api/filter.
>
> **[5:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=318)** The HTTP get method returns an observable that we can pass directly into the user list component.
>
> **[5:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=325)** So I'll just add a return keyword to the start of the line here.
>
> **[5:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=329)** The details of what observables are and how they work are outside the scope of this course.
>
> **[5:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=333)** So for now, just think of them as promises with additional features and benefits.
>
> **[5:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=337)** The last thing we want to do is set the return type for our getRemote method.
>
> **[5:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=340)** This is going to be of type Observable, and it will return a string.
>
> **[5:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=345)** If you're following along in VS Code, you might get a wavy line on the HTTP get request.
>
> **[5:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=351)** That's okay, this is feedback from the editor telling us that there's an issue.
>
> **[5:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=355)** I can hover over to get more information.
>
> **[5:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=357)** And what it's telling me is that the type Observable<Object> is not assignable to the type of Observable<string>.
>
> **[6:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=365)** This is something interesting that Angular added in more recent versions of Angular, where essentially there's a disconnect between what the get request is expecting by default and what we might be sending back to other files that are using our custom getRemote method.
>
> **[6:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=383)** The easiest way to solve this is to declare the generic type on the get method, which in this case is going to be string.
>
> **[6:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=391)** And that solves our error.
>
> **[6:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=392)** This method is set to go.
>
> **[6:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/getting-data-using-rest-requests?u=76281980&t=394)** Next up, we'll look at sending data back to a server using the HTTP PUT method.

> [!info]- Semantic Content
>
> **Env Vars:** http (17), url (11), rest (4), put (3), mock_api_filter (2)
> **Code Keywords:** pass (5), let (4), private (2), self (2), public (1)
> **Code Identifiers:** getremote (3), getfilter (3), setfilter (1)
> **CLI Commands:** make (5)
> **API Endpoints:** put  (2), /api/filter (1)
> **Definitions:** stands for (1), is a  (1), is called (1)
> **Cross-References:** earlier in (1)
> **Tools:** vs code (1)

#### Updating data using REST requests
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=0)** - In the last video, we added the getRemote method here in our web storage service.
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=5)** Next, we'll write a method called setRemote, which will use the HTTP instance to set the filter state in our database.
>
> **[0:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=11)** We do this by making a new line and typing public, setRemote, open close parentheses, open close curly brackets.
>
> **[0:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=19)** This method will take one argument: The payload we want to send to the server.
>
> **[0:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=23)** I'm going to call it payload.
>
> **[0:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=25)** Very clever, I know.
>
> **[0:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=26)** It's going to be of type string because this payload represents the filter string passed in from our HTML template.
>
> **[0:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=34)** This is a very simple payload, but payloads can be of any size or shape.
>
> **[0:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=38)** Really, it all comes down to what the server expects to receive.
>
> **[0:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=42)** Inside this method, we'll use the HttpClient instance to send data to a URL.
>
> **[0:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=47)** I'll make a new line and type this, .http.put, open close parentheses.
>
> **[0:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=53)** The HTTP PUT method lets us update existing records in a database.
>
> **[0:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=58)** It takes three arguments.
>
> **[0:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=59)** The first is a URL string pointing to the location on the server where we want to update the data.
>
> **[1:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=65)** The second argument is the body of your request, which is usually the new data.
>
> **[1:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=69)** And the third argument is the additional options you want to send with the request.
>
> **[1:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=74)** Use this object, just like with the HTTP GET method, to send headers, credentials, and parameters.
>
> **[1:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=80)** We don't need the Options argument because we're not sending in any optional parameters, but we do need a body of our request.
>
> **[1:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=89)** In this case, it's going to be payload, which is our filter.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=92)** And finally, I'll set the URL to the same URL we used in the GET request.
>
> **[1:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=99)** I'm just going to copy that and paste it down here.
>
> **[1:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=102)** This put method returns an Observable, just like the GET method, so I'll add the return keyword to the start of the line so we can use the Observable in our UserList component.
>
> **[1:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=112)** Finally, we need to update the return type on our set.remote method, as well as the generic type for the HTTP PUT method, just like we did with get.remote in the last video.
>
> **[2:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=123)** I'll just copy the return type from get remote, and I'll set the generic type on put as a string.
>
> **[2:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/updating-data-using-rest-requests?u=76281980&t=130)** Now we can go update our UserList component and take advantage of these new REST request methods.

> [!info]- Semantic Content
>
> **Env Vars:** http (4), url (4), put (2), html (1), rest (1)
> **Code Keywords:** finally, (2), public (1), this, (1), case, (1)
> **API Endpoints:** get  (3), put  (2)
> **Code Identifiers:** setremote (2), getremote (1)
> **Analogies:** just like (3)
> **Cross-References:** in the last (2)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)

#### Working with observables
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=0)** - Let's update the user list component to save and retrieve the filter state from our mock remote server.
>
> **[0:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=7)** I'll start by updating the NG on a nit method.
>
> **[0:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=10)** First, I'll delete this line here and type this dot web storage service dot get remote.
>
> **[0:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=17)** The get remote method doesn't take any arguments so there's nothing to pass in.
>
> **[0:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=21)** It does however, return an observable.
>
> **[0:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=23)** So we'll subscribe to that response.
>
> **[0:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=26)** The callback of the subscribed method is our filter string.
>
> **[0:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=29)** So we can work with that value directly.
>
> **[0:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=31)** I'll type filtered and then I'll use the arrow syntax for the callback and into the body of this callback we can just reuse the code from this line here.
>
> **[0:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=43)** Line 20, cut paste.
>
> **[0:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=46)** The wavy line under the await keyword tells us that we can only use this keyword in an asynchronous function.
>
> **[0:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=53)** We now have two options for refactoring the code.
>
> **[0:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=56)** The first option is to use JavaScript's async await syntax to resolve the promise before assigning it to the user's property.
>
> **[1:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=63)** Async await gives us full control of the data in our component before we assign it to a template variable.
>
> **[1:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=69)** We can do whatever we want with it before sending it into the HTML template.
>
> **[1:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=73)** The other option is to pass the promise directly into the HTML template and use Angular's async pipe to resolve the promise for us.
>
> **[1:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=82)** Angular's async pipe takes care of resolving and rejecting promises.
>
> **[1:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=85)** It also works very similar with observables.
>
> **[1:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=88)** This can be a huge benefit in some use cases.
>
> **[1:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=91)** Both options are valid.
>
> **[1:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=93)** In this context I think using Angular's async pipe is the better approach.
>
> **[1:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=98)** We don't manipulate the data in the component so we might as well pass the promise directly into the template and let Angular do the heavy lifting for us.
>
> **[1:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=105)** Let's do that now.
>
> **[1:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=106)** I'll delete the await keyword and in our template source app user list user dot component dot HTML.
>
> **[1:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=116)** I will wrap the users property in parentheses and pipe it to the async.
>
> **[2:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=124)** Let's go to the browser and check our work.
>
> **[2:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=126)** Whoa, big error here.
>
> **[2:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=128)** What happened?
>
> **[2:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=129)** Actually, it's not that scary when you know what to look for.
>
> **[2:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=131)** The key information is near the top of the error.
>
> **[2:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=134)** There's a reference to a null injection error on line one which means Angular couldn't find a dependency and there's also a reference to the app module, our web storage service and the HTTP client class.
>
> **[2:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=149)** Ah, it looks like we forgot to import the HTTP client module into our app module.
>
> **[2:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=154)** Angular wants to keep your app as small and as fast as possible so it makes no assumptions about the dependencies you need.
>
> **[2:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=161)** You must always explicitly declare modules to help Angular inject dependencies correctly.
>
> **[2:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=166)** Let's do that now.
>
> **[2:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=168)** I'll go to the app dot module dot Ts file and add the HTTP client module to the existing import statement for Angular slash common slash HTTP.
>
> **[2:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=179)** Notice that I imported the HTTP client module instead of the HTTP client service.
>
> **[3:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=184)** This is an important distinction.
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=187)** Modules use the NG module decorator and services use the injectable decorator and Angular looks for the NG module decorators to manage dependency injection.
>
> **[3:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=197)** You'll get a compiler error if you import a service file instead of a module.
>
> **[3:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=201)** Your error will say something like your file could not be resolved to an NG module class.
>
> **[3:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=206)** Let me show you what that looks like instead of importing the module I'll import HTTP client, add it to our list of imports and then I'll make a new terminal and type NPM run build.
>
> **[3:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=220)** And here's that error I was talking about right here.
>
> **[3:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=223)** It says something like could not be resolved to an NG module class.
>
> **[3:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=227)** If you see an error like this double-check that you imported the correct file into the imports array.
>
> **[3:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=232)** Let's do that now.
>
> **[3:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=234)** I'll close out this terminal and instead of the HTTP client, I'll import the HTTP module instead, clean up our import statement also, save our work.
>
> **[4:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=245)** Back in the browser our error is gone but we still have some things we need to update in the user list component file.
>
> **[4:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=252)** Let's do that now.
>
> **[4:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=253)** Since we're passing in this filtered string from our web storage service instead of parsing the string, because we don't need to, it's already a string.
>
> **[4:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=263)** We're just going to use the user list service dot filter method instead.
>
> **[4:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=269)** So I'll copy the user list service filter from the update method paste it on this line here line 22 and pass in our filtered property.
>
> **[4:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=278)** So what this reads as is if filter does equal to null just return the entire list of users using the get all method otherwise use the filter method and the string to return a filtered list.
>
> **[4:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=292)** We have one more issue to resolve and that's on this user's property.
>
> **[4:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=295)** If we hover over it, the editor gives us some feedback.
>
> **[4:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=298)** Basically says that there are these missing properties on the user array.
>
> **[5:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=304)** We're missing length, pop, push.
>
> **[5:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=306)** These are all array methods and it makes sense that we're not seeing them because we're actually returning a promise now and not an array directly.
>
> **[5:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=315)** So I'm going to go up to line 13 and instead of setting it's type as a user array I'm going to set it as a promise of type user array.
>
> **[5:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=326)** Don't worry about this era down here we'll fix that in a sec.
>
> **[5:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=328)** What's really important is right here, that era is gone.
>
> **[5:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=332)** And if we go back to the browser, refresh the page no new errors -- so far so good.
>
> **[5:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=336)** The last thing we need to do is change the update method to save the filter string to our mock remote server.
>
> **[5:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=342)** We do this by making a new line and typing this dot web storage service dot set remote.
>
> **[5:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=348)** And we'll pass in the text argument from the update method and we'll subscribe to the response just like we did with the get remote method.
>
> **[5:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=357)** Just like earlier the set remote method returns the filter string as a response.
>
> **[6:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=362)** So I'll use that same argument here just like I did earlier.
>
> **[6:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=366)** We can just reuse line 22, copy, paste it down on line 28, I'll delete line 30 and 31, clean things up a bit.
>
> **[6:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=376)** So what this reads as is when a user passes in a filter string using the update method on the HTML template we're going to call the set remote method on our web storage service, pass in that filter which will return the string.
>
> **[6:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=389)** And if that string is null, we're just going to call the user list service directly, get all the users.
>
> **[6:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=396)** Otherwise we're going to use the filter method on the user list service to return a filtered list.
>
> **[6:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=401)** Either way we're going to assign it to the user's property here in the component.
>
> **[6:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=407)** Back in the browser when we refresh the page, everything works as expected and we can also check the application tab, scroll down to local storage, click on local host 4200.
>
> **[6:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/working-with-observables?u=76281980&t=418)** And there is our mock API filter key from the HTTP interceptor we talked about earlier in this course with our filter value.

> [!info]- Semantic Content
>
> **Code Keywords:** module (13), let (8), pass (6), async (6), await (4)
> **Env Vars:** http (10), html (4), npm (1), api (1)
> **Exercise Files:** template (6)
> **UI Navigation:** go to (2), scroll down (1), click on (1)
> **CLI Commands:** find (1), make (1), npm (1)
> **Analogies:** just like (3)
> **Cross-References:** go back to (1), earlier in (1)
> **Tools:** terminal (2)

#### Catching errors from an observable
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=0)** - [Instructor] Misspelled resource locators are a common error when working with asynchronous server requests.
>
> **[0:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=6)** To mimic this issue, let's intentionally add a typo to the end of the URL in the Git Remote method in our web storage service.
>
> **[0:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=13)** So, instead of requesting data from /mock/api/filter we're going to request it from /mock/api/filter/foo Back in the browser, we see a console message telling us that the git request for the specified URL returns a 404 Not Found error.
>
> **[0:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=29)** There's also this generic error object returned from Angular's ErrorHandler that has more information about our server request.
>
> **[0:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=36)** It's good practice to always catch server errors and there are many ways to do so at both the component level and the service level.
>
> **[0:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=43)** For this course, we'll keep things simple and update the subscribe method in the ngOnInitError method in our component with a second argument.
>
> **[0:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=51)** This argument is a callback that's invoked only when an error is returned from an observable.
>
> **[0:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=56)** The callback takes a single argument, the error response, which we can then work with like any other response object.
>
> **[1:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=62)** So, I'll go to line 23 type a comma between the curly brace and the parentheses, I'll type error followed by the arrow syntax fat arrow syntax for callbacks in JavaScript.
>
> **[1:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=74)** In the body of this callback, we can do whatever we want with this error object.
>
> **[1:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=77)** I'm going to keep things simple and just pass it along to console.error.
>
> **[1:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=83)** I'll also give our error a description to easily identify it in the console.
>
> **[1:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=87)** You can use whatever text you like.
>
> **[1:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=88)** I'm going to use the string ngOnInitError.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=92)** Back in the browser, we can see that the generic error is gone and in its place as our custom output, along with the original error object response.
>
> **[1:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=101)** Let's reset the URL in our web storage service to point to the correct location in our database.
>
> **[1:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=106)** Go into our web storage service file, delete foo, save our changes.
>
> **[1:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/catching-errors-from-an-observable?u=76281980&t=111)** Back in the browser everything works again as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), pass (1), delete (1)
> **Env Vars:** url (3)
> **CLI Commands:** git (2)
> **Code Identifiers:** ngoniniterror (2)
> **API Endpoints:** /api/filter (1), /api/filter/foo (1)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)


### 5. Unit Testing in Angular

#### Testing overview
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=0)** - [Instructor] Testing your application ensures that any changes or additions you make will have the desired effect without introducing new errors.
>
> **[0:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=7)** The two types of tests you'll see most often during development of an Angular application are unit tests and end-to-end tests.
>
> **[0:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=13)** Unit tests reduce regression errors at the object or function level.
>
> **[0:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=17)** Regression errors are bugs introduced by the development team that make a function stop working as expected.
>
> **[0:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=24)** Unit tests eliminate regression errors by clarifying the intent of your code and confirming that your objects, methods, and classes all still work as intended.
>
> **[0:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=33)** Unit tests are designed to check small, discrete chunks of code that are usually independent of the user interface or user interaction.
>
> **[0:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=41)** Good unit tests can confirm a particular property exists on an object or that a specific method always returns true when passed even numbers as arguments.
>
> **[0:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=50)** In Angular, you can also use unit tests to check instances of classes in isolation, which is great for confirming that a pipe works as expected or that a component receives input correctly.
>
> **[1:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=60)** To test user interaction, we'll need to use end-to-end tests instead.
>
> **[1:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=64)** End-to-end tests are also called integration tests and these tests are designed to confirm that large components or even entire webpages produce the desired results by mimicking how your end users will interact with your application.
>
> **[1:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=77)** Good end-to-end tests can confirm that clicking a specific button always redirects users to a shopping cart page, or that users can only add whole numbers to a specific column in a table of data.
>
> **[1:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=89)** It's good practice to always test your code before sharing it with team members or pushing it into production.
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=95)** This will make maintaining your code much easier as the application and your development team grow in size and complexity.
>
> **[1:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=102)** You should also plan for an acceptable level of code coverage, which is a measure of how much and of what type of code you and your team will test.
>
> **[1:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=110)** Code coverage varies from project to project and you should work closely with your team to agree on a testing standard.
>
> **[1:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=116)** Keep in mind that the more tests you run, the longer your test suite will take to complete.
>
> **[2:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=121)** So you might elect to run only a subset of tests during development and a larger, more robust test suite when you push to production.
>
> **[2:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=129)** Angular includes the Jasmine test framework with the Karma test runner for unit testing and Protractor for end-to-end tests when you start new projects using the CLI tool.
>
> **[2:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-overview?u=76281980&t=140)** These are fantastic options, but you can use any setup that works well for your specific need.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3)
> **Code Keywords:** function (2), interface (1)
> **Env Vars:** cli (1)
> **Definitions:** is a  (1)
> **Best Practices:** good practice (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Basic Karma configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=0)** - [Instructor] Karma is a testing environment that executes source code against a set of tests.
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=5)** These tests run in a browser instance and results are piped to an output of your choice.
>
> **[0:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=10)** Angular includes Karma by default and configures most of the settings for you, so you can start testing your code right away.
>
> **[0:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=17)** This is Karma's config file for our project.
>
> **[0:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=19)** The file name is karma.conf.js.
>
> **[0:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=22)** And it's located in the root directory of our project.
>
> **[0:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=25)** Karma does a great job of annotating the config file and even gives you a link at the top, directing you to their documentation website.
>
> **[0:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=32)** Karma's website is a great resource.
>
> **[0:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=34)** And I encourage you to take a look at all the configuration options.
>
> **[0:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=38)** For now, we'll focus on the default configuration for Angular projects.
>
> **[0:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=42)** The basePath property sets the root path for all the relative paths used in the config file.
>
> **[0:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=48)** An empty string means all paths are relative to the root of your project.
>
> **[0:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=53)** But you might want to set this to source or specs or some other path that makes sense for your use case.
>
> **[0:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=59)** The frameworks property is an array of testing frameworks you want to use with Karma.
>
> **[1:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=64)** Karma only runs your tests in a browser.
>
> **[1:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=66)** You need a framework like Jasmine or Mocha to actually write the tests.
>
> **[1:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=70)** Angular includes Jasmine by default.
>
> **[1:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=72)** But Mocha is also a popular choice.
>
> **[1:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=74)** Check out their websites for more info.
>
> **[1:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=78)** Karma has a plugin-based architecture for things like testing framework and output options.
>
> **[1:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=83)** You declare these plugins here in the plugins array.
>
> **[1:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=86)** The client property defines how Karma works with test results.
>
> **[1:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=91)** The most common outputs are HTML in the browser and text in the terminal.
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=95)** You also use this property to set framework-specific configuration for Jasmine.
>
> **[1:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=100)** The jasmineHtmlReporter property is how you customize output from the karma-jasmine-html-reporter plugin.
>
> **[1:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=108)** The coverageReporter property is how you configure the output of the karma-coverage plugin.
>
> **[1:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=113)** You can learn more about the karma-jasmine-html-reporter and the karma-coverage plugins on the npm website.
>
> **[2:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=120)** The reporters property lets you configure which output you want to use to show test results.
>
> **[2:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=125)** Karma supports progress and dots out of the box.
>
> **[2:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=130)** Progress gives you full output, and dots simplifies the output to a row of periods, one period for each passing test.
>
> **[2:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=137)** Kjhtml is for the karma-jasmine-html-reporter plugin.
>
> **[2:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=142)** The port property tells Karma which port to listen on for tests.
>
> **[2:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=146)** You enable and disabled terminal colors, using the colors property.
>
> **[2:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=150)** Show more or less output in the console, using the logLevel property.
>
> **[2:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=154)** Enable and disable watching files for changes, using autoWatch.
>
> **[2:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=158)** Use the browsers array to tell Karma which browsers to use to run tests.
>
> **[2:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=163)** Remember to add the correct plugin for each browser you want to use.
>
> **[2:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=167)** Set the singleRun property to true if you're using Karma as part of a continuous integration service, a CI service.
>
> **[2:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=174)** When true, Karma will run all the tests and report back a zero if all tests pass and a one if any tests fail.
>
> **[3:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=182)** When Karma is watching for file changes, it will finish its current run before starting a new one.
>
> **[3:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=188)** Set the restartOnFileChange property to true if you want Karma to abandon its current run and start a new run immediately when a file changes.
>
> **[3:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=198)** In Angular projects, Karma also needs the test.ts file located in the source directory.
>
> **[3:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=205)** Karma needs this file to load all the test files and their dependencies.
>
> **[3:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-karma-configuration?u=76281980&t=209)** I don't recommend changing this file, because it's tightly coupled with Angular, the Angular CLI tool and Karma.

> [!info]- Semantic Content
>
> **Code Identifiers:** basepath (1), jasminehtmlreporter (1), coveragereporter (1), loglevel (1), autowatch (1)
> **Code Keywords:** case. (1), default. (1), pass (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** karma.conf.js (1), test.ts (1)
> **Env Vars:** html (1), cli (1)
> **Tools:** terminal (2)
> **Prerequisites:** configure (2)
> **CLI Commands:** npm (1)

#### Testing services
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=0)** - Let's add a basic unit test called a spec for our user list service to confirm that it returns an array of 16 users.
>
> **[0:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=8)** The Angular CLI tool created a spec file for us.
>
> **[0:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=10)** When we generated the UserListService.
>
> **[0:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=13)** Angular wants to make our lives easier.
>
> **[0:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=15)** So it already imported TestBed and our UserListService class.
>
> **[0:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=19)** It also makes a simple passing test right here.
>
> **[0:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=21)** This is a great starting point for real-world projects but for this video, let's pretend we're starting from scratch without Angular's help.
>
> **[0:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=28)** I'm going to delete the content of this file so we can build our tests manually.
>
> **[0:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=33)** Select all. Delete.
>
> **[0:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=35)** The first thing we do is import our UserListService class.
>
> **[0:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=38)** I'll make a new import statement and type import, UserListService from ./user-list.service.
>
> **[0:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=47)** Angular comes with the Jasmine testing framework and all Jasmine tests happen inside a describe block like this.
>
> **[0:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=55)** describe() is a global function introduced by Jasmine.
>
> **[0:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=57)** So there's nothing to import here.
>
> **[0:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=59)** This function expects two arguments.
>
> **[1:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=61)** The first argument is a string used to describe the collection of tests we're going to run inside this block.
>
> **[1:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=67)** You can call your spec suite, whatever you'd like.
>
> **[1:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=70)** I'll call mine UserListSurface.
>
> **[1:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=73)** The second argument is a callback function that holds all of our tests.
>
> **[1:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=77)** Inside this callback, I'll create a new property in our callback function to represent an instance of the service we want to test.
>
> **[1:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=83)** I'll make a new line and type let service: UserListService Notice that I use the let keyword here instead of const.
>
> **[1:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=91)** This is on purpose.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=92)** Normally it's a good idea to create read only variables using the const keyword.
>
> **[1:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=96)** But in this case we need to instantiate a new instance of our service each time we run a test.
>
> **[1:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=102)** We do this using Jasmine's beforeEach function.
>
> **[1:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=104)** Jasmine runs this function Once before every test that follows in the describe block.
>
> **[1:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=109)** It looks like this: This function takes a call back as its first argument.
>
> **[1:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=114)** In the callback, I'll set the value of our service property to a new instance of the UserListService, so far so good.
>
> **[2:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=122)** But, we don't have any tests yet.
>
> **[2:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=123)** For that, we need to use Jasmine's It function.
>
> **[2:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=126)** We use this function to declare the actual test logic as well as any test specific setup for the code.
>
> **[2:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=132)** The It function takes two arguments.
>
> **[2:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=134)** The first is a string to label a test.
>
> **[2:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=136)** You can call your test, whatever you'd like I'm going to label mine as should return a User List with 16 users.
>
> **[2:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=144)** The second argument is a callback function with all of our test logic and setup code.
>
> **[2:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=149)** Angular is asynchronous by design, but Jasmine is not.
>
> **[2:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=153)** So we need to tell Jasmine when all the asynchronous work is finished.
>
> **[2:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=157)** There are a few ways to do this.
>
> **[2:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=158)** But, the simplest way is to use Jasmine's done function.
>
> **[2:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=162)** I'll pass in done as the first argument of our callback and I'll set its type as the DoneFn interface.
>
> **[2:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=168)** DoneFn is also a global.
>
> **[2:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=171)** So, nothing to import here either.
>
> **[2:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=172)** By default, Jasmine waits five seconds for asynchronous tests to finish.
>
> **[2:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=177)** If a test doesn't finish in time, it's marked as failed, and Jasmine continues with the rest of the test suite.
>
> **[3:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=183)** You can pass in an optional third argument to the it function to set a timeout value to something other than five seconds.
>
> **[3:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=189)** This timeout value is in milliseconds.
>
> **[3:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=191)** So I would pass in 10,000 for 10 seconds, 2000 for two seconds, and so on.
>
> **[3:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=198)** The default time will be good enough for our use case here.
>
> **[3:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=201)** In the callback for our test, we use our service the same way we would in real app code.
>
> **[3:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=207)** I'll move to the inside callback and I'll type service.getAll().
>
> **[3:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=217)** All the test logic happens inside the callback of the then method.
>
> **[3:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=221)** I'll pass in the response from getAll like this and I'll make a new line.
>
> **[3:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=226)** And I'll hand off this response to Jasmine's test logic using the expect and toBe functions.
>
> **[3:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=235)** Expect always takes in the value we're testing.
>
> **[3:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=238)** In this case, it's going to be response.length, and the toBe method takes in the value we must see to pass the test.
>
> **[4:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=245)** In this case, the integer 16.
>
> **[4:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=248)** The toBe function is one of many Jasmine functions we can use to test our code.
>
> **[4:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=252)** I recommend reviewing the official Jasmine documentation for a deeper look at all your testing options.
>
> **[4:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=258)** The last thing we need to do is call the done function to tell Jasmine, to run our test.
>
> **[4:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=262)** I'll make a new line and type done().
>
> **[4:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=267)** That's it. We made our first unit test.
>
> **[4:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=269)** We use the Angular CLI tool to run our unit tests.
>
> **[4:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=273)** I'll open a new terminal window here in VS Code and type npm run test.
>
> **[4:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=279)** I could call the ng test command directly, but I like using the npm script to make sure I'm using the locally installed version of ng.
>
> **[4:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=287)** Instead of the globally installed version on my machine.
>
> **[4:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=289)** When I hit the enter key, Angular will compile our code, launch an instance of Google Chrome, and run our tests.
>
> **[4:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=295)** Let's do that now.
>
> **[4:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=297)** And, here are our results.
>
> **[4:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=299)** Okay. It looks like we have two failures; One in the web storage service, and the other in the user list component.
>
> **[5:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=308)** Now there's a lot of data here in these error messages, but it's mostly a stack trace.
>
> **[5:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=312)** The important info is at the top where it says: NullInjectorError: No provider for HTTPClient.
>
> **[5:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-services?u=76281980&t=318)** We'll take a look at how to fix these errors in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), let (5), pass (5), class. (2), delete (2)
> **CLI Commands:** make (6), npm (2)
> **Code Identifiers:** tobe (3), getall (2), beforeeach (1)
> **Definitions:** is a  (6)
> **Documentation:** spec (3)
> **Env Vars:** cli (2)
> **Tools:** terminal (1), vs code (1)
> **Prerequisites:** setup (2)

#### Fixing injection dependency errors
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=0)** - [Instructor] In the last video we use the NPM run test command to run our suite of unit tests, and we got two errors, one for the web storage service and the other in user list component.
>
> **[0:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=11)** These tests failed because of a no injection error.
>
> **[0:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=15)** This is a fancy way of saying the code we want to test has a dependency on another file, and we need to inject that dependency into our test code.
>
> **[0:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=22)** But here's where things get tricky, unit tests check code in isolation.
>
> **[0:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=26)** We break this rule as soon as we start injecting dependencies into our tests.
>
> **[0:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=30)** If the test fails, we want to know the failure happened because of something in our code and not because of an issue in the dependency itself.
>
> **[0:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=38)** So instead of injecting real dependencies, we inject fake ones and mock the method calls.
>
> **[0:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=43)** There are a few ways to do this, but in this context the cleanest approach is to use angulars testbed class and provide a fake service using Jasmine's spy object.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=52)** I'm in the spec file for our web storage service.
>
> **[0:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=56)** Angular imported the testbed class when we generated the file, it also called the static method configure testing module in our before each block.
>
> **[1:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=65)** Test bed is a versatile class that allows us to initialize services and components in our tests the same way we would by using decorators.
>
> **[1:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=73)** Testbed can do a lot, and I encourage you to check out the official documentation for more info.
>
> **[1:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=78)** For now, all we need to do is add the HTTP client service to the list of providers and the configure object passed into configure testing module.
>
> **[1:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=88)** I'll start by importing the HTTP client class at the top of the file.
>
> **[1:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=93)** I'll make a new line and type import HTTP client from @angular/common/HTTP.
>
> **[1:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=101)** Then I'll make a new provider's array in the configure object.
>
> **[1:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=105)** This provider's array follows the same rules as the providers array used in decorators.
>
> **[1:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=110)** Instead of passing in the HTTP client directly, I'll make a new object inside the array.
>
> **[1:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=115)** This object takes two keys.
>
> **[1:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=116)** The first key is provide and I assign the HTTP client as its value.
>
> **[2:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=121)** The second key tells angular what we want to use in place of the real HTTP client.
>
> **[2:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=126)** There are a few ways to do this but the two most common I've seen are either passing in a custom class that mocks all the service calls or use Jasmine to build the mock service for us.
>
> **[2:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=136)** Custom mocks are great for complex services but in this case, it's easier to let Jasmine do the heavy lifting for us.
>
> **[2:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=143)** I'll pass the use value key into our object and assign it the value of Jasmine.createSpyObj.
>
> **[2:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=150)** Jasmine is the global Jasmine instance.
>
> **[2:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=153)** So there's nothing to import.
>
> **[2:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=154)** CreateSpyObj is one of several Jasmine methods for working with dependencies.
>
> **[2:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=159)** Check out the official documentation for all the ways you can use Jasmine to mock services.
>
> **[2:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=163)** CreateSpyObj takes two arguments, the first argument is a string to identify this spy object.
>
> **[2:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=170)** Usually we use the name of the class we're mocking.
>
> **[2:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=172)** So I'll type HTTP client.
>
> **[2:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=175)** The second argument is an array of strings representing the methods we want Jasmine to mock.
>
> **[3:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=181)** This is always based on what we're testing and which methods get called in the code.
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=187)** If we look at the web storage service itself, we use the get method here and the put method here.
>
> **[3:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=193)** So these are the methods we pass into the spike object array.
>
> **[3:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=196)** I'll do that now.
>
> **[3:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=198)** I'll go back to the spec file, create an array, type get and put.
>
> **[3:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=205)** I'll save my work and run the test suite again to see how we did, make a new terminal window type NPM run test and hit enter.
>
> **[3:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=216)** Nice. We fixed the error in the web storage service.
>
> **[3:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=219)** Next we'll do the same for the user list component.
>
> **[3:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=222)** The error in the user list component is similar to the error in the web storage service but we need to be careful about the source of this error.
>
> **[3:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=229)** Jasmine reports errors as a stack trace.
>
> **[3:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=231)** So while the error message says no injection error, no provider for HTTP client, the source of that error is actually the web storage service which uses the HTTP client to make network calls.
>
> **[4:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=245)** And since all Jasmine tests run in isolation, the test for the user list component has no idea that we already fixed the dependency issue in the test for web storage service.
>
> **[4:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=256)** This is the spec file for the user list component.
>
> **[4:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=258)** I'll start by importing the web storage service.
>
> **[4:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=261)** I'll make a new line and type import web storage service from ../services/web-storage.service.
>
> **[4:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=271)** Then just like before, I'll add a provider's array to the configure testing module object and I'll copy the provider object from the web storage service spec into our test for the user list component.
>
> **[4:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=285)** Just copy line 12, bring it into our user list component spec, and I'll replace the reference to HTTP client where the reference to web storage service.
>
> **[4:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=298)** Copy, paste.
>
> **[5:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=301)** Last thing is to update the array of mocked method calls.
>
> **[5:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=306)** If we look at the component class itself, we call get remote here online 21 and set remote here online 29.
>
> **[5:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=314)** So I'll update the spy object in our spec with those values.
>
> **[5:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=318)** Back to the spec file, go to the array of methods, type get remote and set remote.
>
> **[5:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=326)** I'll save my changes and run the test suite again.
>
> **[5:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=329)** I'll make a new terminal window, type NPM run test and hit enter.
>
> **[5:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=337)** Nice, all our tests pass.
>
> **[5:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=339)** Keep in mind, this is one way to use angular and Jasmine to speed up your testing.
>
> **[5:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=343)** There are a lot of ways to build out a test suite.
>
> **[5:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=346)** For large projects, you may want to make a custom wrapper for the test bed class so you can inject common dependencies into all your tests very quickly.
>
> **[5:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=353)** Or maybe you want to take advantage of Jasmine and its collection of spy methods.
>
> **[5:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-injection-dependency-errors?u=76281980&t=357)** Really, it all comes down to what works best for you and your team.

> [!info]- Semantic Content
>
> **Env Vars:** http (11), npm (3)
> **Code Keywords:** module (3), pass (3), this, (1), static (1), case, (1)
> **CLI Commands:** make (8), npm (3)
> **Documentation:** spec (7)
> **Prerequisites:** configure (5)
> **Definitions:** is a  (3), is an  (1)
> **Cross-References:** in the last (1), go back to (1)
> **Tools:** terminal (2)

#### Testing pipes
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=0)** - Pipes are pure functions by design and they always return the same output for a given input.
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=5)** This makes them very easy to unit test when compared to services and components.
>
> **[0:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=10)** I'm in a spec file for highlight text pipe.
>
> **[0:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=13)** I used the Angular CLI tool to generate the pipe and Angular already populated the spec file with a simple test.
>
> **[0:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=20)** Notice that there's no before each block here.
>
> **[0:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=22)** That's because pipes are stateless and there's nothing we need to set up before testing the pipe.
>
> **[0:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=27)** Let's add a few more tests to check for common use cases as well as a few edge cases.
>
> **[0:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=32)** I'll start by making a new it block.
>
> **[0:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=36)** I'll call this test wrap a simple string in a span but you can call your test whatever you'd like.
>
> **[0:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=42)** In the callback for this test, I'll instantiate a new instance of the highlight text pipe.
>
> **[0:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=49)** On the next line, I'll use Jasmine's expect function to actually run our pipe and generate an output to test against.
>
> **[0:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=56)** I expect that when I call pipe.transform and pass in a value and a filter, I'll get a string back that includes a span element.
>
> **[1:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=66)** We can pass in anything for the value and the filter but I'll keep it simple and use good old foobar as the value.
>
> **[1:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=73)** And I'll use foo as the filter.
>
> **[1:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=75)** And I expect the return value toBe foobar with foo wrap in a span with the class of highlight dash text followed by bar.
>
> **[1:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=88)** There's a lot happening here so let's break it down.
>
> **[1:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=90)** This toBe method here, this is one of several testing methods returned from Jasmine's expect function.
>
> **[1:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=96)** It uses strict equality to compare the actual result against the expected result.
>
> **[1:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=101)** Check out Jasmine's website for a full list of all the testing methods and how they work.
>
> **[1:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=106)** In Jasmine tests, we always pass the expected result into the toBe method or whatever testing method we choose.
>
> **[1:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=113)** This is usually static data of some kind, a string, a number, a bullying, et cetera.
>
> **[1:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=118)** Whatever it is, we know it's correct.
>
> **[2:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=120)** In this case, we know the pipe wraps the matched filter text in a span element with the class of highlight dash text.
>
> **[2:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=127)** So the result of calling our pipe with these arguments should be foo wrap in the span followed by bar.
>
> **[2:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=133)** Let's check our work.
>
> **[2:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=134)** I'll go to the terminal menu and open a new terminal and I'll type npm run a test and hit Enter.
>
> **[2:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=144)** All right, there they are.
>
> **[2:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=146)** Here's our tests.
>
> **[2:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=148)** I'm back in our spec file.
>
> **[2:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=150)** Let's clean things up and add a few more tests.
>
> **[2:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=153)** Pipes are pure stateless functions.
>
> **[2:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=155)** So really we only need one instance of the class for all our tests.
>
> **[2:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=159)** I'll move the pipe variable here to the top of the described block and delete the other instance.
>
> **[2:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=164)** Next, I'll copy our test a few more times and make small changes to the inputs and outputs.
>
> **[2:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=171)** Copy, paste.
>
> **[2:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=173)** This test will wrap an uppercase string in a span.
>
> **[2:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=179)** I'll update the input value to uppercase FOOBAR and I'll leave the filter as lowercase foobar to test that we're ignoring letter case.
>
> **[3:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=190)** The known output, expected output.
>
> **[3:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=194)** However, is going to be uppercase FOO and uppercase BAR.
>
> **[3:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=198)** I'll copy this test again.
>
> **[3:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=199)** Copy, paste.
>
> **[3:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=201)** This test will be wrap a string with spaces in a span and the input, I'll put a space in our FOOBAR value and we would expect the output to have a space before BAR in our output.
>
> **[3:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=218)** And let's make one more test.
>
> **[3:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=220)** Copy, paste.
>
> **[3:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=222)** This test will be wrap multiple words in a span.
>
> **[3:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=228)** This time instead of the value being FOO BAR, it's going to be FOO and FOO, so FOO twice.
>
> **[3:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=234)** And our output should be FOO wrap in a span twice.
>
> **[4:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=240)** Save my changes.
>
> **[4:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=241)** Let's check our work again.
>
> **[4:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=246)** All right, there they are.
>
> **[4:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=248)** All our tests.
>
> **[4:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=250)** We could add more tests, but the more tests we add, the longer the tests we takes to run.
>
> **[4:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=255)** For me, the important thing about unit testing is developer confidence.
>
> **[4:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=259)** I want to test my code just enough that I'm confident who does what it's supposed to do even after I change something.
>
> **[4:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-pipes?u=76281980&t=265)** If I can do that, then taking the time to write unit tests is well-worth the effort.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), pass (3), function (2), static (1), case, (1)
> **Env Vars:** foo (6), bar (3), foobar (2), cli (1)
> **CLI Commands:** make (2), npm (1)
> **Code Identifiers:** tobe (3)
> **Documentation:** spec (3)
> **Tools:** terminal (2)
> **UI Navigation:** go to (1)
> **Prerequisites:** set up (1)

#### Testing components
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=0)** - [Instructor] Let's create a unit test for our app component to confirm that it loads the correct title.
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=5)** The Angular CLI tool created a spec file for us when we created the project.
>
> **[0:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=10)** Angular wants to make our lives easier, so it already imported TestBed and the AppComponent.
>
> **[0:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=15)** It also made a few simple passing tests.
>
> **[0:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=18)** This is a great starting point for real-world projects but for this video, let's pretend we're starting from scratch without Angular's help.
>
> **[0:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=25)** I'm going to delete the content of his file so we can build our tests manually.
>
> **[0:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=29)** Select all, delete.
>
> **[0:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=31)** We need to import the class we want to test, as well as Angular's TestBed and ComponentFixture classes.
>
> **[0:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=38)** I'll make a new import statement and import TestBed and ComponentFixture from @angular/core/testing.
>
> **[0:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=47)** We use the TestBed class to configure our modules and resolve any dependencies our components might need.
>
> **[0:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=53)** The ComponentFixture class gives us access to the component itself and its state.
>
> **[0:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=57)** We're also going to need to import the class we want to test.
>
> **[1:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=60)** I'll make a new import statement and import AppComponent from ./app.component.
>
> **[1:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=69)** Angular comes with the Jasmine testing framework and all Jasmine tests happen inside a describe block like this.
>
> **[1:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=77)** Describe is a global function introduced by Jasmine so there's nothing to import.
>
> **[1:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=81)** This function expects two arguments, the first argument is a string used to describe the collection of tests called the suite we're going to run inside this block.
>
> **[1:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=90)** You can call your spec suite whatever you'd like, I'm going to call mine AppComponent.
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=95)** The second argument is a callback function that holds all of our tests.
>
> **[1:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=100)** I'll make a new property in the callback to represent an instance of the component we want to test.
>
> **[1:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=105)** I'll make a new line and type let component which will be of type AppComponent.
>
> **[1:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=111)** We'll also need a property called fixture which will be of type ComponentFixture which itself will be of type AppComponent.
>
> **[2:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=120)** Notice that I used the let keyword for these properties instead of const, this is on purpose.
>
> **[2:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=125)** Normally, it's a good idea to create read only variables using the const keyword but in this case, we need to instantiate a new instance of our service each time we run a test.
>
> **[2:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=134)** We do this using Jasmine's beforeEach function.
>
> **[2:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=137)** Jasmine runs this function once before every test that follows in the describe block, it looks like this.
>
> **[2:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=143)** This function takes a callback as its first argument.
>
> **[2:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=146)** In the body of the callback, I'll set the value of fixture equal to TestBed.createComponent and I'll parse in the AppComponent class.
>
> **[2:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=155)** We use createComponent to make an instance of the component we want to test, add that component to the test runners dumb and return a new ComponentFixture.
>
> **[2:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=164)** Something to keep in mind, you can't modify TestBed configuration once you call createComponent, so make sure you do all your TestBed configuration before calling this method.
>
> **[2:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=174)** In the same callback here, I'll also set the value of the component property equal to fixture.ComponentInstance.
>
> **[3:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=182)** componentInstance is how we access all the methods and properties inside the component class.
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=187)** Finally, I'm going to call fixture.detectChanges.
>
> **[3:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=191)** This method triggers a change detection cycle in the component, okay.
>
> **[3:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=195)** So far so good, but we still need to configure the App module and resolve dependencies.
>
> **[3:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=200)** We do that using the TestBed.configureTestingModule method like this.
>
> **[3:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=206)** This method takes an object as its first argument.
>
> **[3:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=209)** This object has similar properties to the NgModule decorator and we use it in the same way.
>
> **[3:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=214)** I'll add the AppComponent to the array of declarations and then I'll change the compileComponents method onto the configure testing module method like this.
>
> **[3:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=224)** We need to call this method to get the HTML template for our component.
>
> **[3:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=228)** This method returns a promise so we'll need to wait for that before doing any more work in the beforeEach block.
>
> **[3:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=233)** I'll use JavaScript async await syntax here because it's a clean solution, no nested then calls.
>
> **[3:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=239)** The wavy red line under the await keyword is VSCode telling us there's an error.
>
> **[4:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=244)** I can hover over that word to find out more.
>
> **[4:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=247)** In this case, the editor is telling us we can only use the await keyword in asynchronous functions.
>
> **[4:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=252)** I'll add the async keyword on line nine, just before the callback to fix the error.
>
> **[4:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=256)** Now that configuration is done, we can actually test our component.
>
> **[4:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=260)** We do that using Jasmine's it function.
>
> **[4:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=263)** The it function takes two arguments, the first is a string to label the test.
>
> **[4:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=267)** You can call your test whatever you'd like, I'll call mine should have a title.
>
> **[4:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=271)** The second argument is a callback function with all our test logic.
>
> **[4:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=276)** In the body of the callback, I'll make a new variable called compiled and assign it to the value of fixture.nativeElement.
>
> **[4:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=283)** nativeElement is how we access the components dumb.
>
> **[4:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=289)** If we look at the HTML template for the app component, we see an h2 tag with the words Active Users inside.
>
> **[4:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=295)** We can target this element using a querySelector.
>
> **[4:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=299)** Back in our test file, I'll make a new property in our it block called title and I'll set its value equal to compiled.querySelector, passing in the h2 tag as a string.
>
> **[5:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=310)** What we really want to do is target the content of the h2 tag.
>
> **[5:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=314)** We can do that using the textContent property on the querySelector.
>
> **[5:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=319)** Finally, we want to actually run the test.
>
> **[5:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=321)** We do this using Jasmine's expect function.
>
> **[5:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=324)** I'll make a new line and type expect open close parentheses.
>
> **[5:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=328)** You parse in the title property, and then we chain one of Jasmine's many testing methods onto the end of the statement.
>
> **[5:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=335)** Check out Jasmine's website for a full list of all the testing methods.
>
> **[5:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=339)** Today, I'm going to use the toBe method.
>
> **[5:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=341)** This method checks the expected value against the known value using strict JavaScript equality.
>
> **[5:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=347)** I'll pass the known value into the toBe method which is the string active users.
>
> **[5:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=352)** Let's check our work.
>
> **[5:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=354)** I'll go to the Terminal menu, click on New Terminal, type npm run test, and hit Enter.
>
> **[6:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=362)** Looks like all the tests pass.
>
> **[6:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=365)** And here's that test we just made, App Component should have a title.
>
> **[6:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=369)** I know that was a lot of code to test such a small string but keep in mind that this is one of many testing patterns you can use for testing components.
>
> **[6:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/testing-components?u=76281980&t=377)** I highly recommend you check out the official angular documentation for a breakdown of all the available options, and properties and methods you can use for unit testing components.

> [!info]- Semantic Content
>
> **Code Keywords:** function (10), let (5), this. (4), await (3), delete (2)
> **Code Identifiers:** createcomponent (3), queryselector (3), beforeeach (2), nativeelement (2), tobe (2)
> **CLI Commands:** make (10), find (1), npm (1)
> **Definitions:** is a  (6)
> **Env Vars:** html (2), cli (1)
> **Prerequisites:** configure (3)
> **Documentation:** spec (2)
> **Tools:** terminal (2)

#### Challenge: Custom test bed wrapper
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-custom-test-bed-wrapper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-custom-test-bed-wrapper?u=76281980&t=0)** (pleasant electronic music)
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-custom-test-bed-wrapper?u=76281980&t=5)** - [Instructor] Here's the challenge for you.
>
> **[0:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-custom-test-bed-wrapper?u=76281980&t=7)** Make a custom wrapper for Angular's TestBed class so you can inject common dependencies, like our web storage service, into all your tests very quickly.
>
> **[0:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-custom-test-bed-wrapper?u=76281980&t=15)** The idea here is that this new class can act as a drop-in replacement for Angular's default TestBed.
>
> **[0:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-custom-test-bed-wrapper?u=76281980&t=20)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (pleasant electronic music) (1)

#### Solution: Custom test bed wrapper
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=0)** - Okay.
>
> **[0:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=6)** Here's my solution for the challenge.
>
> **[0:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=8)** Keep in mind that my solution and your solution may be different, and that's okay.
>
> **[0:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=13)** I made a class called CustomTestBed using the same ng generate commands we've used in previous videos.
>
> **[0:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=19)** This class implements Angular's TestBed has a partial.
>
> **[0:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=23)** Partial is a utility type introduced in recent versions of TypeScript.
>
> **[0:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=27)** It returns a version of whatever type you pass in with all its properties set as optional.
>
> **[0:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=32)** It's a great tool for things like this, because we get all the benefits of type safety without needing to implement all of TestBed's properties.
>
> **[0:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=39)** Next, I made my own version of configureTestingModule.
>
> **[0:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=42)** It has an object full of default values for the testing module config.
>
> **[0:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=47)** This is where we store things like the WebStorageService which we want to inject into all our tests.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=52)** I then return a copy of Angular's TestBed, calling configureTestingModule, and passing in a modified configure object.
>
> **[1:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=60)** I use object data sign to merge the default dependencies with whatever extra dependencies are passed in above here.
>
> **[1:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=68)** I also recreate the compileComponents and createComponent methods here and here.
>
> **[1:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=75)** Here's the spec file for our UserListComponent.
>
> **[1:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=78)** In the beforeEach block, instead of using Angular's TestBed class, I use my CustomTestBed class instead.
>
> **[1:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=84)** Notice how I still pass in the UserListComponent in the declarations array, but I don't need to pass in the WebStorageService.
>
> **[1:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=91)** This is because I already mocked that service in my CustomTestBed class.
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=95)** I still call compileComponents here and createComponent here as normal.
>
> **[1:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=102)** And when we run the test suite, I'll make a new terminal, type npm run test, hit enter.
>
> **[1:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-custom-test-bed-wrapper?u=76281980&t=109)** And when we run the test suite, everything works as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), implements (1), this, (1), module (1), class, (1)
> **Code Identifiers:** configuretestingmodule (2), compilecomponents (2), createcomponent (2), beforeeach (1)
> **CLI Commands:** make (1), npm (1)
> **Documentation:** spec (1)
> **Tools:** terminal (1)
> **Definitions:** is a  (1)
> **Warnings:** keep in mind (1)
> **Prerequisites:** configure (1)


### 6. End-to-End Testing in Angular

#### Basic Protractor configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=0)** - [Instructor] Protractor is Angular's official end-to-end testing framework.
>
> **[0:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=4)** The Angular team made Protractor specifically for Angular apps, with full support for how Angular compiles these apps and generates DOM structures.
>
> **[0:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=12)** Angular includes Protractor by default when you generate new projects using the CLI tool and it configures most of the settings for you so you can start testing your code right away.
>
> **[0:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=21)** This is Protractor's config file.
>
> **[0:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=24)** It's located in the top level e-to-e folder under the name protractor.comf.js.
>
> **[0:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=30)** We're going to take a quick look at the default configuration, but I recommend you dive into Angular's GitHub repo for a full breakdown of all your configuration options.
>
> **[0:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=39)** Just click the link at the top of the config file.
>
> **[0:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=42)** The first thing Angular does is import the SpecReporter and Stacktrace option classes.
>
> **[0:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=47)** Protractor uses these classes to enhance it's reporting feedback.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=52)** Next, we have this comment block where Angular imports the config object from the Protractor dependency.
>
> **[0:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=57)** This helps with auto-completion for the file.
>
> **[1:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=61)** And here we have the config object itself.
>
> **[1:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=64)** It's a standard node export.
>
> **[1:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=65)** Let's take a look at the config properties.
>
> **[1:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=70)** All scripts timeout is the maximum time in milliseconds that each script can take to run in the browser.
>
> **[1:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=76)** This value should be long enough to let your app stabilize after a change event takes place.
>
> **[1:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=81)** The default is usually pretty good.
>
> **[1:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=85)** The specs array is a list of locations where Protractor should look for test files.
>
> **[1:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=90)** These locations are relative to the config file and accept wildcard patterns.
>
> **[1:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=96)** The capabilities object lets you configure the browser instance Protractor will use to run your tests.
>
> **[1:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=102)** This is where you set things like the maximum number of browser instances and the output name for log files.
>
> **[1:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=108)** Use the multi-capabilities array instead of the capabilities object if you want to test in more than one type of browser.
>
> **[1:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=116)** DirectConnect tells Protractor to connect directly to the browser drivers.
>
> **[2:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=120)** This property works for only Chrome and Firefox.
>
> **[2:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=124)** The Selenium Promise Manager property changes how Protractor manages control flow for web driver JS.
>
> **[2:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=132)** Protractor is asynchronous by design.
>
> **[2:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=134)** Set this value to True if you want Protractor to manage resolve in Promises for you, otherwise, you'll need to use async await to manage resolving promises in your code.
>
> **[2:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=145)** The base URL property sets how Protractor handles relative URLs in your test code.
>
> **[2:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=152)** Protractor is a test runner.
>
> **[2:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=154)** You still need a framework for writing the tests.
>
> **[2:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=156)** Use this property to set the framework you use for writing those tests.
>
> **[2:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=160)** As of this recording, Protractor has full support for Jasmine and partial support for Mocha.
>
> **[2:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=165)** You can also pass in a custom framework, if needed.
>
> **[2:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=168)** JasmineNodeOpts is where you set options you want passed along to Jasmine.
>
> **[2:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=173)** This is where you set things like the default timeout and showing colors in the terminal output.
>
> **[2:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=179)** Finally, Protractor calls the onPrepare callback when it's ready to execute tests.
>
> **[3:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=184)** Use this space to define any last-minute setup before Protractor executes the test scripts.
>
> **[3:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=190)** The default callback here tells Protractor to find the tsconfig files and use Pretty print for Jasmine's Stacktraces.
>
> **[3:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=197)** Speaking of tsconfig files, here's the tsconfig file for Protractor.
>
> **[3:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-protractor-configuration?u=76281980&t=202)** It extends the project's root tsconfig and tells Protractor how to compile type script files for testing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), export. (1), async (1), await (1), pass (1)
> **Env Vars:** dom (1), cli (1), url (1)
> **Tools:** github (1), firefox (1), terminal (1)
> **Prerequisites:** configure (1), you'll need (1), setup (1)
> **CLI Commands:** node (1), find (1)
> **Definitions:** is a  (2)
> **File Paths:** protractor.comf.js (1)
> **Code Identifiers:** onprepare (1)

#### End-to-end testing without page objects
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=0)** - [Instructor] Let's add an integration test, also called an e2e test, or end-to-end test in our application, to confirm that the app loads as expected.
>
> **[0:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=9)** The Angular CLI tool created this spec file here for us when we generated the project.
>
> **[0:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=14)** And Angular wants to make our lives easy, so it already imported some useful tools, to aid in writing the tests.
>
> **[0:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=21)** This is a great starting point for real-world projects.
>
> **[0:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=24)** But for this video, let's pretend we're starting from scratch without Angular's help.
>
> **[0:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=28)** I'm going to delete the content of this file so we can build our tests manually.
>
> **[0:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=32)** Select All, Delete.
>
> **[0:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=34)** I'll start by importing some tools from Protractor.
>
> **[0:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=37)** I'll make a new import statement and import a browser, element and by, from Protractor.
>
> **[0:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=43)** Browser lets us navigate to specified URLs in our app.
>
> **[0:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=47)** Element lets us interact with DOM elements on a page and by lets us locate those elements by CSS or other selectors.
>
> **[0:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=55)** Next we need a describe block.
>
> **[0:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=57)** All Jasmine tests happen in the callback of this function.
>
> **[1:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=61)** This block needs a name.
>
> **[1:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=62)** You can call yours whatever you'd like.
>
> **[1:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=64)** I'm going to call mine User List App.
>
> **[1:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=67)** And I pass that string in as the first argument.
>
> **[1:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=71)** We need to tell Protractor to reload the page beforeEach test.
>
> **[1:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=74)** We do this inside a beforeEach function.
>
> **[1:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=78)** And the callback of this function, I'll call browser.get.
>
> **[1:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=83)** The first argument of the get method takes a string representing the relative or absolute path we want to load.
>
> **[1:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=89)** In this case, we'll pass in the relative path of our homepage which is /dashboard.
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=95)** Now let's write a test to check for a page header.
>
> **[1:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=98)** We'll need Jasmine's it function for that.
>
> **[1:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=100)** I'll make a new line and type it, open, closed parentheses.
>
> **[1:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=104)** The first argument for it is a description of the test.
>
> **[1:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=107)** You can call your test, whatever you'd like, I'm going to call mine "should have a header."
>
> **[1:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=113)** The second argument of the it function is a callback.
>
> **[1:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=116)** This is where we put all our test logic.
>
> **[1:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=119)** If we look at the main HTML template for our app, we see an h2 tag with the text Active Users at the top.
>
> **[2:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=126)** We need to target this element in our test.
>
> **[2:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=128)** We can do that using Protractor's By Object Back in our spec file, I'll make a new property inside the callback of the it function.
>
> **[2:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=135)** I'll call this property header and the value will equal by.css.
>
> **[2:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=141)** The CSS method here targets elements the same way JavaScript's native query selector does.
>
> **[2:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=145)** And this means we can pass in the h2 tag as a string.
>
> **[2:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=149)** This header property represents a Protractor Locator for the HTML element.
>
> **[2:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=154)** We need to use the Element Function we imported at the start of this video, to get the actual text from the DOM.
>
> **[2:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=160)** I'll make a new property called text and set it's value equal to element, passing in the header locator as the argument.
>
> **[2:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=168)** The Element Function here has a lot of methods we can use to interact with the DOM.
>
> **[2:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=172)** Right now, all we need to do is get the text from inside the element.
>
> **[2:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=176)** I'll use the getText method to do that.
>
> **[3:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=181)** Finally, we need to actually test our code.
>
> **[3:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=183)** We do that using Jasmine's Expect Function.
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=187)** I'll pass our text property into the expect function and use the toBe method to check against a known static value.
>
> **[3:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=194)** In this case, that value will be Active Users.
>
> **[3:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=198)** This wavy line under our static string is VSCode telling us there's an error.
>
> **[3:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=202)** Let's see what the problem is.
>
> **[3:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=204)** It looks like the expect function is returning a promise but we're checking for a string.
>
> **[3:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=208)** How could that be?
>
> **[3:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=209)** Well, unlike Jasmine, Protractor is asynchronous by default.
>
> **[3:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=213)** This means one of the methods above is returning a promise that we need to resolve.
>
> **[3:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=218)** Can you guess which one?
>
> **[3:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=219)** Pause the video for a few moments and see if you can find the promise.
>
> **[3:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=223)** I'll wait.
>
> **[3:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=224)** Did you find it?
>
> **[3:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=225)** In VSCode, we can hover over the various methods in this test to see their signatures.
>
> **[3:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=230)** And the promise is coming from the getText method right here.
>
> **[3:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=234)** I'll use JavaScript's async await syntax to resolve this promise.
>
> **[3:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=239)** I'll go to the callback just before the callback and I'll type async.
>
> **[4:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=244)** And then just before the element function, I will type await.
>
> **[4:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=250)** The browser.get method in the before each block is also asynchronous.
>
> **[4:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=253)** So we need to use async await there as well.
>
> **[4:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=257)** Let's run our test suite to see how we did.
>
> **[4:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=259)** I'll open a new terminal window and type npm run e2e and hit Enter.
>
> **[4:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=266)** Protractor will compile our app, run our tests, and show the results in the terminal.
>
> **[4:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=271)** Sometimes if there are a lot of tests, this could take awhile.
>
> **[4:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=273)** So please be patient.
>
> **[4:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=276)** Nice, our test works.
>
> **[4:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=278)** Let's add one more test to check for 16 users on page load.
>
> **[4:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=281)** I'll close this terminal here and then I'll add a new it function and call it should have 16 users on page load.
>
> **[4:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=288)** In the callback, I'll make a new property called items, and set the value equal to by.css.
>
> **[4:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=296)** In the HTML template for the user list, we load each user on line 10 in it's own list item element.
>
> **[5:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=303)** This is the element we'll target in our test.
>
> **[5:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=307)** Back in the spec file, I'll pass the list item tag as a string into the css method.
>
> **[5:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=313)** Again, this item's property is only a reference to the DOM locator.
>
> **[5:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=317)** We need to use the Element Object to target all 16 items.
>
> **[5:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=321)** I'll make a new property called users, and set its value equal to element.all passing in the items property.
>
> **[5:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=328)** The all method returns an array of all elements found that match our search.
>
> **[5:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=333)** Without the all method, the element function returns only the first instance.
>
> **[5:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=337)** Our logic for this test looks like this.
>
> **[5:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=340)** This reads as I expect users.count toBe 16.
>
> **[5:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=346)** Count is another built-in Jasmine function that returns the number of elements in an element.all array.
>
> **[5:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=352)** In our case here, this value should equal 16, but wait there is one more wavy line here.
>
> **[5:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=358)** Let's see what it says.
>
> **[6:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=360)** It looks like another issue with resolving promises.
>
> **[6:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=362)** If you'd like, pause the video again and try and find the source of the bug.
>
> **[6:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=366)** I'll be here when you get back.
>
> **[6:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=368)** All set?
>
> **[6:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=369)** That promise is coming from the count method.
>
> **[6:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=372)** We'll use the async await syntax to fix this issue.
>
> **[6:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=376)** Let's run our test suite again and see how we do.
>
> **[6:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=379)** I'll go to the Terminal menu, open a new terminal, type npm run e2e and hit enter.
>
> **[6:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=385)** Excellent.
>
> **[6:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=387)** We now have two passing tests.
>
> **[6:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-without-page-objects?u=76281980&t=389)** In the next video, we'll make our code much more reusable.

> [!info]- Semantic Content
>
> **Code Keywords:** function (15), let (8), pass (5), async (4), await (4)
> **CLI Commands:** make (8), find (3), npm (2)
> **Env Vars:** dom (4), html (3), css (2), cli (1)
> **Code Identifiers:** beforeeach (2), gettext (2), tobe (2)
> **Tools:** terminal (5)
> **Documentation:** spec (3)
> **UI Navigation:** go to (2), navigate to (1)
> **Definitions:** is a  (3)

#### End-to-end testing with page objects
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=0)** - [Man] With Protractor, it's common to load certain pages and target certain DOM elements over and over again.
>
> **[0:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=6)** Page objects make these tasks much easier by creating an interface for your tests.
>
> **[0:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=12)** Angular makes a page object for us when we generate the project using Angular CLI.
>
> **[0:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=17)** But for this video, let's pretend we're starting from scratch without Angular's help.
>
> **[0:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=21)** I'm going to delete the content of this file so we can build our page object manually.
>
> **[0:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=26)** Select all, delete.
>
> **[0:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=28)** I'll start by importing some tools from Protractor.
>
> **[0:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=31)** I'll make a new import statement and import browser, element, and by from Protractor.
>
> **[0:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=36)** The browser object lets us navigate to specified URLs in our app, the element object lets us interact with DOM elements on a page and the by object lets us locate those elements by CSS or some other selector.
>
> **[0:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=49)** These are the same tools we used in the last video when we wrote our Protractor tests.
>
> **[0:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=54)** Next I'll export a simple TypeScript class.
>
> **[0:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=57)** You can call your class whatever you'd like.
>
> **[0:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=59)** I'll call mine AppPage.
>
> **[1:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=62)** Let's add some public methods in this class to help with page navigation and targeting page elements.
>
> **[1:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=67)** I'll make a new method called Get Dashboard.
>
> **[1:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=69)** Notice how this method is asynchronous.
>
> **[1:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=71)** Protractor is async by design, so it's good practice to make all of our page object methods asynchronous as well.
>
> **[1:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=79)** In this method, I'll use browser.get to navigate to the dashboard URL.
>
> **[1:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=85)** The get method accepts both relative and absolute URLs.
>
> **[1:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=88)** Then I'll return the result of the get method so we can work with it in our tests, if needed.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=94)** And I'll also set the return type on the get dashboard method to equal the return type of the browser.get method, which is a promise of any type.
>
> **[1:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=109)** You can confirm this by hovering over the get method to see some more information.
>
> **[1:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=114)** I'll make another public method called Get Header Text.
>
> **[1:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=117)** This method targets the H2 tag in our main HTML template, just like we did in the last video.
>
> **[2:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=124)** Inside this method, I'll make a property called Header and set its value equal to by.CSS, passing in the H2 selector as a string.
>
> **[2:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=133)** Next I'll pass this property into the element function and use the get text method to return the header string and I'll also set the return type of our method to equal the same return type of get text method, which is a promise of type string.
>
> **[2:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=148)** Finally, I'll make one more method called Get List Items.
>
> **[2:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=153)** This method targets the list item tags on a page.
>
> **[2:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=156)** So I'll make a new property called items and set its value equal to by.CSS, passing in the list item selector as a string.
>
> **[2:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=163)** Then I'll use the element.all method to unpack the items property and return the results.
>
> **[2:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=170)** The all method returns an array of all elements found that match the search.
>
> **[2:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=174)** Without the all method, the element function only returns the first instance.
>
> **[2:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=179)** The return type of this method will be element array finder, the same return type as element.all.
>
> **[3:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=185)** Notice that there's no async keyword here.
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=187)** That's because element.all is a synchronous operation.
>
> **[3:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=190)** Let's update our Protractor tests to use the new page object.
>
> **[3:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=194)** I'll go to the E2E folder in the sidebar, go to source, click on app.E2E-spec.
>
> **[3:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=201)** In our test file here, instead of importing tools from Protractor, we'll import our page object instead.
>
> **[3:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=207)** I'll delete the old import statement and make a new one importing AppPage from ./app.po.
>
> **[3:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=215)** I'll make a new instance of our page object at the top of the describe block.
>
> **[3:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=218)** I'll call this new property Page and set its value equal to a new instance of AppPage.
>
> **[3:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=223)** Then I'll update the Before Each Block to use the new page object.
>
> **[3:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=227)** Instead of browser.get, we'll use page,getdashboard.
>
> **[3:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=232)** Then in our test for the header, we'll delete the header property and use page.getheader text instead of the element function.
>
> **[3:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=239)** And finally, for our list test, I'll delete the items property and for the users property, I'll use page.getlistitems.
>
> **[4:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=247)** Let's run our tests and see how we did.
>
> **[4:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=250)** I'll open a new terminal window, type NPMrunE2E and hit enter.
>
> **[4:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=256)** Nice, all our tests still pass.
>
> **[4:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=259)** Now keep in mind, this is one way you could set up a page object.
>
> **[4:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=263)** I really encourage you to experiment with other architectures that might work better for your needs.
>
> **[4:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=268)** Really any way you look at it, page objects are a great way to separate test logic and browser manipulation.
>
> **[4:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/end-to-end-testing-with-page-objects?u=76281980&t=274)** So I highly recommend you look into page objects and use them with all your Protractor tests.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (5), let (4), function (3), public (2), async (2)
> **CLI Commands:** make (10)
> **Env Vars:** css (3), dom (2), e2e (2), cli (1), url (1)
> **UI Navigation:** go to (2), navigate to (1), in the sidebar (1), click on (1)
> **Definitions:** is a  (3)
> **File Paths:** by.css (2)
> **Cross-References:** in the last (2)
> **Documentation:** spec (1)

#### Changes for Angular v12
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v12?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v12?u=76281980&t=0)** Starting in version 12, the Angular team deprecated Protractor as the official end-to-end testing tool for Angular projects.
>
> **[0:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v12?u=76281980&t=7)** Shortly after the release of version 16, the Angular team will no longer support Protractor at all, and they recommend all projects use an alternative.
>
> **[0:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v12?u=76281980&t=16)** Angular now comes with built-in support for Cypress, Nightwatch, and WebdriverIO.
>
> **[0:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v12?u=76281980&t=22)** You can add any of these to your project by using Angular's command line tool.
>
> **[0:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v12?u=76281980&t=26)** You can also use Playwright by following the official migration guide on Playwright's website.
>
> **[0:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v12?u=76281980&t=32)** If you'd rather continue using protractor, the Angular team recommends switching to the never-ending support version available from a group called HeroDevs.
>
> **[0:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v12?u=76281980&t=41)** HeroDevs specialize in supporting older software, no longer in active development, and they plan to maintain Protractor for as long as needed.
>
> **[0:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/changes-for-angular-v12?u=76281980&t=50)** Check out Angular's official website for the most up-to-date info on using end-to-end testing in your project.

> [!info]- Semantic Content
>
> **Versions:** version 12 (1), version 16 (1)
> **Code Keywords:** continue (1)
> **Tools:** command line (1)

#### Challenge: Testing filter input
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-testing-filter-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-testing-filter-input?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-testing-filter-input?u=76281980&t=5)** - [Instructor] Here's a challenge for you.
>
> **[0:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-testing-filter-input?u=76281980&t=7)** Make a protractor test that confirms the search box works as expected.
>
> **[0:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-testing-filter-input?u=76281980&t=10)** When a user searches for the word Davis, they should see only two results in the list, and the word Davis should be highlighted.
>
> **[0:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/challenge-testing-filter-input?u=76281980&t=17)** Good luck.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)

#### Solution: Testing filter input
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=0)** - [Narrator] Okay, here's my solution for the challenge.
>
> **[0:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=8)** Keep in mind that my solution and your solution may be different and that's okay.
>
> **[0:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=12)** I added a new method in the page object called get input.
>
> **[0:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=17)** It looks for input elements using the by dot CSS method, and returns the element locator using the element function.
>
> **[0:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=26)** In the spec file, I made a new describe block called filter input.
>
> **[0:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=30)** I nested this block inside our existing describe block which is great for organizing the test reports.
>
> **[0:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=36)** I made two new properties, one called input of type element finder, and the other called items of type element array finder.
>
> **[0:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=44)** In the callback for the before each block, I assign the return value of page dot get input to the input property.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=52)** And I assigned the value of page dot get list items to the items property.
>
> **[0:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=56)** This next line is where the magic happens. Right here.
>
> **[1:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=60)** I call input dot send keys and pass in the string davis.
>
> **[1:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=65)** The send keys method is one of several ways you can interact with Dom elements using protractor.
>
> **[1:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=70)** And I use it here to mimic a user and during text into the search field in our app. Send keys, returns a promise.
>
> **[1:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=77)** So I wait for the promise to resolve using async await.
>
> **[1:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=80)** Below that I have two new tests.
>
> **[1:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=83)** The first is called should filter list on user search, and it confirms that the new list is only two items long because there were only two names in our list that include the search string Davis.
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=95)** I called the second test should highlight filter text and it iterates over the array of items, searches for a child element called span, and confirms that that element has a class of highlight dash text.
>
> **[1:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=109)** Let's run our tests and see how things look.
>
> **[1:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=112)** I'll make a new terminal window type npm run e2e, Hit enter.
>
> **[2:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=122)** And here's our test results.
>
> **[2:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=123)** All the tests pass, and you can see here how one described block is nested inside the other.
>
> **[2:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/solution-testing-filter-input?u=76281980&t=129)** Again, this is just one way to test the search input but I think it shows some of the ways you can organize your tests and target very specific Dom elements.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), function (1), async (1), await (1), let (1)
> **CLI Commands:** make (1), npm (1)
> **Env Vars:** css (1)
> **Documentation:** spec (1)
> **Tools:** terminal (1)
> **Definitions:** is called (1)
> **Warnings:** keep in mind (1)
> **Speakers:** - [narrator] (1)


### 7. Static Code Linting in Angular

#### Installing and running ESLint
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=0)** - [Instructor] Code linting also called static code analysis is a type of automated test that checks your code for errors without compiling or running the code.
>
> **[0:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=9)** So if it doesn't run the code, what kind of errors does it look for?
>
> **[0:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=12)** Well, think of it as a way to standardize how you write the source code in a project, a grammar guide, if you will.
>
> **[0:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=19)** Static code analysis can't tell you if the code will run, but it can tell you if you put the curly brackets in the proper place.
>
> **[0:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=26)** The biggest benefit of code linting is consistency between developers.
>
> **[0:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=30)** We all have a personal style and linting the code is a great way to make sure everyone on a team is writing the code in a similar way.
>
> **[0:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=37)** This makes the code easier to read, more predictable and easier to run a diff against in version control.
>
> **[0:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=43)** As of this recording, Angular includes TSLint as part of its default packages when you generate a new project using the Angular CLI tool.
>
> **[0:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=51)** TSLint was a great option but its code authors deprecated the tool in 2019 and they recommend everyone use ESLint instead.
>
> **[1:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=60)** Until Angular migrates to ESLint, we'll need to install it manually using npm.
>
> **[1:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=65)** I'll open a new terminal window and type npm install eslint
>
> **[1:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=70)** - -save -dev and hit Enter.
>
> **[1:14](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=74)** That's it.
>
> **[1:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=75)** We now have ESLint in our project.
>
> **[1:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=77)** We also need to add a config file.
>
> **[1:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=79)** There's a few ways we can do that but the quickest is to use the init option for ESLint's command line tool.
>
> **[1:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=85)** I'll type npx eslint --init and hit Enter.
>
> **[1:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=91)** ESLint will ask us some questions to help build the config file.
>
> **[1:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=94)** Let's see, what do I want?
>
> **[1:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=95)** I want to check syntax, find problems and enforce code style.
>
> **[1:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=99)** I'm going to choose that one.
>
> **[1:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=101)** What type of modules do we use?
>
> **[1:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=102)** Well, these are Angular files so they're imports and exports.
>
> **[1:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=106)** I'll choose that one.
>
> **[1:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=107)** And which framework do we use?
>
> **[1:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=109)** It's not React, not Vue.
>
> **[1:51](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=111)** I'll choose, none of these.
>
> **[1:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=113)** Does our project use TypeScript?
>
> **[1:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=114)** Yes it does.
>
> **[1:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=116)** And where does our code run?
>
> **[1:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=118)** I'm going to say it runs in the browser.
>
> **[2:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=120)** Last question is how do we want to define our styles?
>
> **[2:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=122)** We could use a popular guide.
>
> **[2:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=124)** We could inspect the JavaScript files but I'm going to answer a couple of questions.
>
> **[2:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=128)** I want my format to be JavaScript.
>
> **[2:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=131)** You can have config files in JavaScript, YAML or JSON.
>
> **[2:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=136)** I'm used to using JavaScript.
>
> **[2:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=137)** So that's the one I'll choose.
>
> **[2:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=139)** What style of indentation do we choose?
>
> **[2:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=141)** I like spaces.
>
> **[2:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=142)** I'm going to go with that.
>
> **[2:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=144)** And what kind of quotes do we want?
>
> **[2:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=146)** I'm going to go with single quotes.
>
> **[2:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=149)** And what kind of line endings do we want?
>
> **[2:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=151)** I'm going to go with Unix.
>
> **[2:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=154)** And do we require semi-colons, yes or no?
>
> **[2:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=158)** You know, I like semi-colons.
>
> **[2:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=159)** I'm going to choose yes.
>
> **[2:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=160)** Great, we now have a config file and the root of our project called .eslintrc.js.
>
> **[2:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=168)** We can run ESLint on any file or any group of files by passing it as an argument on the command line.
>
> **[2:54](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=174)** Say, we want to check the app.component.ts file.
>
> **[2:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=178)** I would type nps eslint source/app/app.component.ts and hit Enter.
>
> **[3:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=187)** ESLint reports errors to the console.
>
> **[3:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=189)** And we'll take a look at the details of what those reports look like in a later video.
>
> **[3:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=192)** For now, let's finish the install process.
>
> **[3:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=195)** The last thing we need to do is delete TSLint.
>
> **[3:18](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=198)** We do that using npm's uninstall command.
>
> **[3:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=201)** I'll type npm uninstall tslint and hit Enter.
>
> **[3:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=205)** And we're good to go.
>
> **[3:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-and-running-eslint?u=76281980&t=206)** In the next video, we'll take a closer look at the config file for TSLint.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (4), make (1), npx (1), find (1)
> **Code Keywords:** static (2), let (2), require (1), delete (1)
> **File Paths:** eslintrc.js (1), app.component.ts (1), source/app/app.component.ts (1)
> **Env Vars:** cli (1), yaml (1), json (1)
> **Tools:** command line (2), terminal (1)
> **Prerequisites:** install (3)
> **Definitions:** is a  (2)
> **Cross-References:** in the next (1)

#### Basic ESLint configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=0)** - [Narrator] In the last video we installed ESLint.
>
> **[0:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=3)** in this video, we'll take a look at ESLint's config file.
>
> **[0:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=6)** The config file lives in the root of your project.
>
> **[0:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=8)** You can use JavaScript, Json or Yaml for your config file syntex.
>
> **[0:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=13)** I'm using JavaScript here because that's what I use most often, but you can use the file format that works best for your project.
>
> **[0:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=20)** The ENV property gives you predefined global variables for things like the browser, node, and service workers.
>
> **[0:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=27)** For angular projects I recommend adding node, Jasmine, and Protractor to this list.
>
> **[0:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=34)** - ESLint config files can inherit properties and rules from other config files.
>
> **[0:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=38)** Use the extends property here, to list one or more base configs you want to extend from.
>
> **[0:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=44)** I like to add the import errors, import warnings, and import TypeScript plugins to my config.
>
> **[0:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=49)** These plugins look for issues with import statements.
>
> **[0:53](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=53)** We'll also need to add the NPM package for the plugin.
>
> **[0:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=56)** I'll make a new terminal window, type NPM install, ESLint, dash plugin, dash import, dash dash, save, dash dev and hit enter.
>
> **[1:08](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=68)** All set.
>
> **[1:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=69)** I'll close this terminal.
>
> **[1:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=71)** Use the parser property to set the file parser for your project.
>
> **[1:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=75)** ESLlint usually uses Espree, but our parser was set to something different because of how we initialized this particular file.
>
> **[1:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=82)** Remember to import the NPM package for your parser if you change the setting here.
>
> **[1:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=87)** Next is the parser options property.
>
> **[1:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=90)** This lets you set the JavaScript language options you want to support.
>
> **[1:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=93)** Use this property to set things like ECMAScript, Syntex, source type, and JSX support.
>
> **[1:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=100)** ESLint supports all kinds of third party plugins.
>
> **[1:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=104)** Use the plugins property here to define those.
>
> **[1:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=107)** I like to add prefer arrow and a JSDoc to my list of plugins.
>
> **[1:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=112)** Prefer arrow makes sure I use arrow functions instead of the function keyword.
>
> **[1:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=116)** And JSDoc checks doc blocks for errors.
>
> **[1:59](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=119)** Let's import these plugins now.
>
> **[2:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=121)** I'll open a new terminal window and type NPM install, ESLint dash plugin, dash prefer arrow, ESLint dash plugin dash JSDoc, dash dash save, dash dev and hit enter.
>
> **[2:15](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=135)** All set.
>
> **[2:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=137)** I'll close this terminal window here.
>
> **[2:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=140)** Okay, here's where things get interesting.
>
> **[2:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=142)** This rules object is where you customize and override all the Lint rules available to you.
>
> **[2:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=147)** The rules you have access to and their defaults will vary based on the plugins and extensions listed in your config file.
>
> **[2:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=154)** Most take a similar format.
>
> **[2:35](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=155)** The rule name is the key and it accepts a string, a boolean or an array as a value.
>
> **[2:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=161)** Booleans toggle rules on and off, strings set the reporting level to error or warn and an array, lets you pass in additional options for that specific rule.
>
> **[2:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=172)** We have four rules here, indent line break style, quotes and semi, which stands for semi-colon.
>
> **[2:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=178)** The reporting level for indent is error and the required indent size is four.
>
> **[3:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=185)** Line break style also gets reported as an error and requires the use of Unix style line endings.
>
> **[3:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=191)** Quotes are reported as an error and they need to be single quotes.
>
> **[3:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=196)** And finally semi-colons get reported as an error and are always required.
>
> **[3:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=201)** Errors return a non-zero response code on completion.
>
> **[3:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=205)** Warnings return zero.
>
> **[3:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=207)** I see this used a lot in automated build workflows where a non-zero response value stops the build, but a build keeps going if it's just a warning Let me show you what that looks like.
>
> **[3:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=217)** I'll open a new terminal window and let's say we want to check our app dot component dot Ts file with all the rules set to error.
>
> **[3:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-eslint-configuration?u=76281980&t=224)** I'll type NPX, ESLint, source, slash app slash app, dot component, dot Ts and hit enter.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), extends (1), from. (1), import, (1), type, (1)
> **CLI Commands:** npm (4), node (2), make (1), npx (1)
> **Env Vars:** npm (4), env (1), jsx (1), npx (1)
> **Tools:** terminal (5)
> **Prerequisites:** install (2)
> **Speakers:** - [narrator] (1), - eslint (1)
> **Cross-References:** in the last (1)
> **UI Navigation:** toggle (1)

#### Fixing lint errors
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=0)** - [Instructor] Let's run eslint on our project files and see what kind of issues we get.
>
> **[0:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=4)** I'll open a new terminal window and type npx eslint source, hit Enter.
>
> **[0:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=11)** Looks like we have quite a number of errors 209 errors and 6 warnings.
>
> **[0:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=17)** One way to fix these issues is manually, the other way is to take advantage of eslint itself and passing the fix option here into the command line.
>
> **[0:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=28)** This should automatically fix quite a number of these issues.
>
> **[0:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=32)** Let's do that now.
>
> **[0:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=33)** I'll run the eslint command again and add the fix option to the end.
>
> **[0:39](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=39)** That's great, saves us a lot of time going into all those files to manually fix things.
>
> **[0:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=45)** Not all issues are fixable this way, but many are and it's a good place to start.
>
> **[0:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=49)** Just be sure to double check the files before you save your changes.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=52)** We'll need to fix the remaining issues manually.
>
> **[0:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=55)** In the lint report here, issues are broken out by file.
>
> **[0:58](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=58)** The first line tells us which file the issue was found in and the next line tells us what the issue was.
>
> **[1:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=65)** These numbers here on the line number and column, this is the type of issue in error or a warning.
>
> **[1:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=71)** This is the issue itself and this is the rule that triggered the issue.
>
> **[1:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=77)** So this issue here is telling me on line 10 column 19 we have an error of unexpected empty constructor and this error was triggered by the TypeScript eslint no empty function rule.
>
> **[1:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=91)** Let's open the user list service file and see what's going on.
>
> **[1:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=97)** If I go to line 10, I can see we have an empty constructor.
>
> **[1:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=102)** Now we can manually fix this issue in whatever way it makes sense for our project.
>
> **[1:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=106)** In this case, I'll just delete the constructor, save my changes, and when we rerun eslint, the error goes away, 1 down 6 to go.
>
> **[1:56](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=116)** While this workflow of manually fixing lint issues is okay, there is a better way.
>
> **[2:01](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=121)** And that way is through an eslint extension for our code editor.
>
> **[2:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=125)** Every code editor is unique and your editor of choice may or may not have an extension for eslint.
>
> **[2:11](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=131)** I'm using visual studio code here, which is a popular choice for many angular developers.
>
> **[2:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=136)** It does have an extension for eslint, so let's install that now.
>
> **[2:20](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=140)** I'll go up to the view menu, click on extensions and search for eslint.
>
> **[2:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=146)** This first one here, this is the extension that I use, so we'll install it now, I'll just click the install button.
>
> **[2:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=152)** After we install the extension, we have to click on eslint in the footer of the editor and allow the extension to do its job.
>
> **[2:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=161)** I'll click on allow everywhere.
>
> **[2:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=164)** With the extension installed and allowed to do its job, we now have an eslint server running in the background.
>
> **[2:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=170)** I can click the eslint button here in the footer of my editor to see details.
>
> **[2:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=175)** I can also click this problems tab here to see the lint issues in all of my open files.
>
> **[3:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=180)** Right now we have no lint issues so let's open a file where we know there's some issues we need to fix.
>
> **[3:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=186)** I'll go back to the terminal and it looks like the error metadata service that could use some work, so I'll open that now.
>
> **[3:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=193)** I can not go back to the problems tab and see a list of all the issues in my open files.
>
> **[3:19](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=199)** Clicking on an issue takes me to that issue in that file.
>
> **[3:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=202)** These issues here are telling me that I need to use a different type for my error argument in the handle error method.
>
> **[3:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=208)** It's a good idea to avoid the any type because it doesn't provide any real type safety.
>
> **[3:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=213)** I can fix this issue in a few ways but the simplest here in VS code is to hover over the issue, click on quick fix and choose my option.
>
> **[3:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=221)** I'm going to choose this first option here, use unknown instead, which will force type safety.
>
> **[3:47](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=227)** We now have some new issues in our custom error object.
>
> **[3:50](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=230)** There's a few ways we can fix this, I'm going to use type guards for now, we can always refactor this code in the future with better type annotations.
>
> **[4:04](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=244)** For the message property, I'll wrap the error object in parentheses and type as open-close curly brackets message of type string and for the zone property, I'll also wrap the error object in parentheses and type as open-close curly brackets zone of type unknown.
>
> **[4:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=263)** The beautiful thing about the eslint editor extension is that it gives me real time feedback as I write code.
>
> **[4:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=269)** If I reset the arguments typed any you can see a wavy line show up under my code.
>
> **[4:34](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=274)** And if I set the type back to unknown, that line goes away.
>
> **[4:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/fixing-lint-errors?u=76281980&t=278)** You don't need an editor extension to use eslint, but if you like the idea of fixing lint issues in real time I recommend you look into it.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (1), case, (1), delete (1), this, (1)
> **UI Navigation:** click on (4), open the (1), go to (1)
> **Tools:** terminal (2), command line (1), visual studio (1), vs code (1)
> **Prerequisites:** install (4)
> **Cross-References:** go back to (2)
> **Definitions:** is a  (2)
> **CLI Commands:** npx (1)
> **Warnings:** warning (1)

#### Installing EditorConfig
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=0)** - [Instructor] EditorConfig is a tool to standardize file settings across team members and editors.
>
> **[0:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=6)** This is different from static code analysis.
>
> **[0:09](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=9)** Code lending happens at the level of the programming language.
>
> **[0:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=12)** And while it can check for things like line endings and semi-colons, it's really about scanning the source code for more complex issues like missing type annotations and too many nested callbacks.
>
> **[0:22](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=22)** You can run static code analysis on a remote server as part of an automated build workflow.
>
> **[0:27](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=27)** You can't do that with EditorConfig.
>
> **[0:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=30)** EditorConfig works at the level of the code editor, making sure all the files of a given type are encoded the same way.
>
> **[0:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=36)** And this encoding happens in real time.
>
> **[0:38](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=38)** No need to run terminal commands.
>
> **[0:40](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=40)** You can even keep an EditorConfig file in the home directory of your computer.
>
> **[0:44](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=44)** The same way you might keep a GetConfig file or the MRC.
>
> **[0:48](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=48)** This means you can use one EditorConfig file for all your projects.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=52)** In practice, I find most projects have their own EditorConfig file managed under version control.
>
> **[0:57](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=57)** This makes it easy to share the configuration with new team members.
>
> **[1:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=60)** Many code editors come with built in support for EditorConfig and many more have plugins and extensions.
>
> **[1:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=66)** Check the official website for EditorConfig to see the status of your editor of choice.
>
> **[1:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=70)** I like using visual studio code for writing angular apps and I'll need to install an extension to use EditorConfig.
>
> **[1:16](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=76)** I do that by going to the view menu and clicking on extensions, and in the sidebar here, I'll search for EditorConfig.
>
> **[1:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=84)** This is the extension I'm looking for.
>
> **[1:26](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=86)** So I'll click the install button here.
>
> **[1:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=88)** And that's it, we now have EditorConfig.
>
> **[1:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/installing-editorconfig?u=76281980&t=90)** In the next video we'll look at the Config file in detail.

> [!info]- Semantic Content
>
> **Code Keywords:** static (2), for. (1)
> **Tools:** terminal (1), visual studio (1)
> **Prerequisites:** install (2)
> **CLI Commands:** find (1)
> **Env Vars:** mrc (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** in the sidebar (1)
> **Exercise Files:** source code (1)

#### Basic EditorConfig configuration
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=0)** - [Instructor] In the last video we installed the extension for VS code to use editorconfig in our project.
>
> **[0:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=5)** Now let's take a look at the config file itself.
>
> **[0:07](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=7)** This is the default config file that Angular includes when we generate a new project using the CLI tool.
>
> **[0:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=13)** It lives in the root of the project and the file name is .editorconfig right here.
>
> **[0:17](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=17)** Whenever you open a file, the editorconfig plugin looks for a file with the name .editorconfig.
>
> **[0:23](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=23)** It first looks in the same directory as the open file and then it traverses up through the parent directories.
>
> **[0:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=29)** The plugin will keep looking for config files until it runs out of directories or it finds one with this root equals true setting.
>
> **[0:36](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=36)** We write the config file using key value pairs and files are parsed from the top down.
>
> **[0:41](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=41)** So later rules override earlier ones.
>
> **[0:43](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=43)** This asterisk is a wildcard selector.
>
> **[0:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=46)** It matches any character except file path separators.
>
> **[0:49](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=49)** So basically forward slash.
>
> **[0:52](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=52)** Charset controls the character set used for the file.
>
> **[0:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=55)** The default UTF8 is a good file in coding for most use cases.
>
> **[1:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=60)** Use indent style to set tabs or spaces as your indent character.
>
> **[1:05](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=65)** Indent size sets the number of columns used for each indentation level.
>
> **[1:10](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=70)** Set insert final new line to true to ensure all files end with an empty new line and use trim trailing white space to remove extra white space at the end of each line I like tidy white space in my files so this one is a personal favorite.
>
> **[1:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=85)** This is how we target files with the TypeScript file name extension.
>
> **[1:29](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=89)** I can use the double asterisk wildcard to traverse sub-directories.
>
> **[1:32](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=92)** Say I wanted to target TypeScript files only in the source directory, I would type source/double**/*.ts.
>
> **[1:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=102)** I can also target multiple types of files using curly braces and commas.
>
> **[1:46](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=106)** Say I wanted to target all the TypeScript files, JavaScript files and JSX files in the source directory, I would surround the Ts extension with curly braces and then type ,js,jsx.
>
> **[2:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=120)** I can do the same thing with file paths.
>
> **[2:02](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=122)** Say I wanted to target both source and build as directories, I would surround source with curly braces type comma and then build.
>
> **[2:13](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=133)** Now this section of the editor config file targets TypeScript, JavaScript and JSX in both the source and build directories.
>
> **[2:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=141)** I'll reset the selector back to the default.
>
> **[2:24](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=144)** The quote type key lets you set single or double quotes for strings.
>
> **[2:28](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=148)** This section of the file targets markdown files.
>
> **[2:31](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=151)** Set max line length as off to disable max line length warnings or set it to a number to enforce a character maximum for each line and here's trim trailing white space again.
>
> **[2:42](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=162)** Notice how this time it's set to false.
>
> **[2:45](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=165)** This will override the previous value set earlier in the file, but it will only override the previous value in markdown files because that's the type of file we're targeting in this section of the config file.
>
> **[2:55](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/basic-editorconfig-configuration?u=76281980&t=175)** There are a few more config options and I recommend you check out the official website to see all the things you can do with editorconfig.

> [!info]- Semantic Content
>
> **Code Keywords:** override (3), let (1), type , (1), default. (1)
> **Env Vars:** jsx (2), cli (1), utf8 (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the last (1), earlier in (1)
> **Tools:** vs code (1)
> **Speakers:** - [instructor] (1)


### Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/next-steps?u=76281980&t=0)** - We reviewed a lot of information in this course.
>
> **[0:03](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/next-steps?u=76281980&t=3)** And I encourage you to experiment with all your testing and debugging options.
>
> **[0:06](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/next-steps?u=76281980&t=6)** While the API for Angular is mature and stable, the framework and its dependencies are always making improvements.
>
> **[0:12](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/next-steps?u=76281980&t=12)** This is why I strongly recommend you regularly check out Angular's official documentation to stay up to date on all the latest changes, additions and updates.
>
> **[0:21](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/next-steps?u=76281980&t=21)** TypeScript and RX JS are integral parts of Angular apps.
>
> **[0:25](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/next-steps?u=76281980&t=25)** And I recommend you also keep an eye on the official documentation for TypeScript and RX JS.
>
> **[0:30](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/next-steps?u=76281980&t=30)** For a deeper look at Angular, I recommend searching through our library.
>
> **[0:33](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/next-steps?u=76281980&t=33)** There are tons of courses covering all aspects of Angular and the Angular ecosystem.
>
> **[0:37](https://www.linkedin.com/learning/angular-testing-and-debugging-10201318/next-steps?u=76281980&t=37)** I'm Derek Peruo, thanks for watching and we'll see you again soon.

> [!info]- Semantic Content
>
> **Env Vars:** api (1)
> **Speakers:** - we (1)


## Path Context

### In [[Explore Web Development with Angular]]
← [[Learning the Angular CLI]] | **3 of 6** | [[Angular- Creating and Hosting a Full-Stack Site]] →

## Appears In

- [[Explore Web Development with Angular]]

## Related Courses

_Courses sharing skills:_

- [[Vue.js- Testing and Debugging]] — Debugging Code, Software Testing
- [[Learning JavaScript Debugging]] — Debugging Code
- [[Software Testing- Planning Tests for Mobile]] — Software Testing
- [[Building Angular and Django Apps]] — Angular
- [[Building an Ethereum Blockchain App- 9 Testing Ethereum Apps]] — Software Testing

---

[↑ Back to top](#)