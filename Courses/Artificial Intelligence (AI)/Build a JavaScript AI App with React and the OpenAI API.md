---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: build-a-javascript-ai-app-with-react-and-the-openai-api
url: "https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api"
duration_minutes: 119
duration: 1h 59m
level: Advanced
updated: 9/18/2023
learners: 73199
skills:
  - OpenAI API
  - JavaScript
  - React.js
  - Artificial Intelligence (AI)
exercise_files: true
github: "https://github.com/LinkedInLearning/build-a-javascript-ai-app-with-react-and-the-openai-api-4467357/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQFDc6TdaL8EZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695234022487?e=2147483647&amp;v=beta&amp;t=Qo0PBkJ6jyIDIwrWJ_EmFEj8u-AHIUPRstgPpSSTBuY"
linkedin_topic: Artificial Intelligence (AI)
learning_paths:
  - '[[Building Generative AI Skills for Web Developers]]'
prev_courses:
  - '[[AI Programming for JavaScript Developers]]'
path_nav: '[{"path":"Building Generative AI Skills for Web Developers","position":10,"total":10,"prev":"AI Programming for JavaScript Developers","next":null}]'
path_count: 1
tags:
  - course
  - topic/artificial-intelligence
  - topic/software-development
  - topic/web-development
  - skill/openai-api
  - skill/javascript
  - skill/react-js
  - skill/artificial-intelligence-ai
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Artificial%20Intelligence%20(AI)/Build%20a%20JavaScript%20AI%20App%20with%20React%20and%20the%20OpenAI%20API.md)

![Build a JavaScript AI App with React and the OpenAI API](https://media.licdn.com/dms/image/v2/D4D0DAQFDc6TdaL8EZQ/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1695234022487?e=2147483647&amp;v=beta&amp;t=Qo0PBkJ6jyIDIwrWJ_EmFEj8u-AHIUPRstgPpSSTBuY)

# Build a JavaScript AI App with React and the OpenAI API

> In this course, learn how to integrate the OpenAI API into a JavaScript-based web app. Join instructor Morten Rand-Hendriksen as he takes a React-based weather app, adds a heavy dose of AI, and creates an interactive experience that knows what location you want weather information from, explains the weather data in simple language, and even suggests what to wear. Through this project-based course,

> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api) | 1h 59m | Advanced | 73K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **1. Introduction** (3 videos)
- **2. 1. Building a Weather App with AI Power** (3 videos)
- **3. 2. The Core App** (4 videos)
- **4. 3. Connecting to the OpenAI API** (4 videos)
- **5. 4. Using AI as a Human-to-Machine Translator** (4 videos)
- **6. 5. Integrating AI into the Weather App** (6 videos)
- **7. 6. Creating Rich AI Outputs** (4 videos)
- **8. Conclusion** (1 videos)

### 1. Introduction

#### Build a JavaScript AI app with React and the OpenAI API
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/build-a-javascript-ai-app-with-react-and-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/build-a-javascript-ai-app-with-react-and-the-openai-api?u=76281980&t=0)** - ChatGPT is cool and all until you realize you can build AI into your own apps to drastically improve their user experience and add new and previously impossible features.
>
> **[0:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/build-a-javascript-ai-app-with-react-and-the-openai-api?u=76281980&t=12)** That's what we'll do in this course.
>
> **[0:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/build-a-javascript-ai-app-with-react-and-the-openai-api?u=76281980&t=14)** Take a React-based weather app, sprinkle on a heavy dose of AI, and create a truly interactive experience that not only understands what location you want the weather information from but also explains the weather data in human language and gives you recommendations on what to wear.
>
> **[0:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/build-a-javascript-ai-app-with-react-and-the-openai-api?u=76281980&t=32)** The OpenAI API gives us programmatic access and control over the language features of GPT, and I'm here to show you how to get it right, so let's get cracking.

> [!info]- Semantic Content
>
> **Env Vars:** api (1), gpt (1)
> **Code Keywords:** let (1)
> **Speakers:** - chatgpt (1)

#### Use the exercise files on GitHub Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/use-the-exercise-files-on-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/use-the-exercise-files-on-github-codespaces?u=76281980&t=1)** - The exercise files for this course are hosted on GitHub Codespaces, allowing you to work along with me in your browser without having to install any software.
>
> **[0:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/use-the-exercise-files-on-github-codespaces?u=76281980&t=10)** I'll talk more about this later, and even demonstrate how to set up your own React projects with Vite on Codespaces.
>
> **[0:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/use-the-exercise-files-on-github-codespaces?u=76281980&t=16)** But for now, I'll hand things over to my friend and colleague Ray Villalobos, to explain how it all works.
>
> **[0:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/use-the-exercise-files-on-github-codespaces?u=76281980&t=22)** Take it away, Ray.

> [!info]- Semantic Content
>
> **Prerequisites:** install (1), set up (1)
> **Tools:** github (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - the (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Instructor] This is Ravi De Lobos, senior staff instructor at LinkedIn Learning, and I'm going to show you how to work with LinkedIn Learning courses using GitHub Codespaces.
>
> **[0:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=9)** Codespaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=14)** It allows for real world hands-on practice that mirrors software development in the workplace.
>
> **[0:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=19)** This course was created using GitHub Codespaces.
>
> **[0:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=22)** Using Codespaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:29](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=29)** One click and you're ready to go.
>
> **[0:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=32)** To practice along with the course, you can create a Codespace directly from the course overview page.
>
> **[0:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=38)** First, click open next to GitHub Codespaces.
>
> **[0:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=42)** If you're already logged in, you'll be directed to a Getting Started with GitHub Codespaces page.
>
> **[0:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=48)** If you're not logged in, you'll be prompted to log in or create a free GitHub account first.
>
> **[0:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=53)** From this page, click on Create Codespace on Main.
>
> **[0:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=58)** The first time you open up a Codespace it might take a few minutes to create the virtual machine.
>
> **[1:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=64)** Once it's done, you'll enter the code editor environment.
>
> **[1:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=68)** If you're familiar with Visual Studio Code this is a special version of that editor running on GitHub's servers.
>
> **[1:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=75)** Your course can have one or more extensions pre-installed based on the course you're taking.
>
> **[1:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=80)** Those can be found in the extensions panel.
>
> **[1:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=85)** Because this is a browser it's easy to inadvertently close the browser window and lose the editor.
>
> **[1:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=91)** If you do that don't panic.
>
> **[1:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=97)** You can always get the Codespace back for this repo right here Notice that it even remembered that I had open the extensions panel.
>
> **[1:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=111)** An alternate way to create a Codespace is directly from one of our courses GitHub repositories.
>
> **[1:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=117)** From here, click code and then create Codespace on Main.
>
> **[2:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=122)** You can also restart a previous Codespace from this location.
>
> **[2:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=126)** GitHub Codespaces is compatible on devices with smaller screen sizes like mobile phones or tablets but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer.
>
> **[2:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=142)** The sample course I'm looking at is what is known as a flat branch repository.
>
> **[2:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=147)** You can tell because there's a single branch when you click on the branch icon on the status bar.
>
> **[2:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=152)** You can also tell because there are different folders for each of the videos in the course.
>
> **[2:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=158)** This is a sample of what a multi-branch repository looks like which is more common when you're working with web frameworks.
>
> **[2:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=165)** If you go to the branch icon on the status bar you can see that there's more than one branch.
>
> **[2:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=170)** You can switch to the different branches using this menu.
>
> **[2:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=174)** The branches are named with the chapter and the video number you're watching.
>
> **[2:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=178)** If you see a B at the end of the branch that's how the code looked at the beginning.
>
> **[3:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=182)** If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=186)** Let's switch to how the code looked on chapter two and the third video.
>
> **[3:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=192)** I'll choose the beginning branch.
>
> **[3:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=195)** As you work through a course you might make some changes on a branch.
>
> **[3:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=199)** I'm going to make a minor edit on the index .html file right here.
>
> **[3:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=207)** I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it.
>
> **[3:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=217)** If I try to switch to another branch that causes major changes like say 0703E, I may see a dialog box like this.
>
> **[3:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=229)** If you don't care about saving your changes you can simply hit the force checkout button.
>
> **[3:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=234)** It will let you switch to that branch.
>
> **[3:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=237)** You can then choose to discard the changes on this file.
>
> **[4:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=241)** Your instructor will let you know what the folder structure is for your course.
>
> **[4:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=246)** Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made even if you've deleted the Codespace.
>
> **[4:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=256)** To create your own fork you can click on the fork button on the repository.
>
> **[4:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=263)** I'm going to hit Create fork.
>
> **[4:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=267)** I don't have my own copy of this repository, and if I want to, I can start a new Codespace on that fork.
>
> **[4:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=279)** This forked version is almost exactly like the original repository but it will let you push your own changes.
>
> **[4:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=286)** Notice that the URL of the repository is slightly different.
>
> **[4:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=290)** Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it.
>
> **[5:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=303)** You'll note that there is an M right here as well as an asterisk on this branch.
>
> **[5:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=308)** In the source control panel, you can also see a one for the change that we just made.
>
> **[5:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=314)** Let's go ahead and try to commit this change.
>
> **[5:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=320)** I'm going to hit the commit button and I'll ask it to go ahead and stage the changes and then I'm going to hit this button here.
>
> **[5:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=332)** I'll hit okay.
>
> **[5:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=334)** You can also let it go ahead and run git fetch.
>
> **[5:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=337)** That way it'll automatically sync with your forked repo.
>
> **[5:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=341)** Now that change will be stored in your own version of this repository.
>
> **[5:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=346)** Don't worry if you forget the fork a repo and then try to push changes, Codespaces will also ask you if you want to create a fork automatically.
>
> **[5:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=355)** Look for additional core specific tips from the instructor.
>
> **[5:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/using-github-codespaces-with-this-course?u=76281980&t=358)** Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (4), this. (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (3), click on (2), open the (1), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3), git (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)
> **Prerequisites:** getting started (1)


### 2. 1. Building a Weather App with AI Power

#### Beyond ChatGPT: What AI can do for you
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=1)** - The public was introduced to what we now call AI in November 2022 through the release of Open AI's Chat, GPT.
>
> **[0:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=8)** Since then, numerous other similar services including Poll and Claude and Bard have been released.
>
> **[0:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=14)** Now what do they all have in common?
>
> **[0:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=15)** They are chat based applications where you have a back and forth conversation with the AI system.
>
> **[0:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=22)** For this reason, when we think of AI, we tend to think of chat.
>
> **[0:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=26)** In fact, chat GPT has for many become synonymous with AI.
>
> **[0:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=31)** But here's the thing, AI systems are not chat systems.
>
> **[0:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=34)** Chat is an interface layer built between the AI and the human user to facilitate easier communication.
>
> **[0:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=41)** The very first step on your journey to building things with AI is to move past this idea that AI's are chatbots because they really aren't.
>
> **[0:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=51)** AI systems like Chat GPT are essentially information transformers.
>
> **[0:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=56)** You give them some information and they use their internal models to transform that information in some way based on your instructions.
>
> **[1:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=63)** Ask the AI a question like why are Scandinavians so tall?
>
> **[1:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=68)** And the system will transform your question into a language like construct with a statistically high probability of being the type of answer a human user would expect.
>
> **[1:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=79)** Give the AI a code snippet and ask where the error is and it'll transform the code snippet into a code-like construct with a statistically high probability of being the type of answer a human would expect.
>
> **[1:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=92)** Ask the AI to summarize a document and it will transform... I think you get the idea here.
>
> **[1:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=98)** One of the useful uses of an AI is to transform data into other forms of data.
>
> **[1:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=103)** For example, turn this data into a structured table or turn this structure data into JSON, et cetera.
>
> **[1:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=112)** Developers can use this capability to transform human language requests into structured data software it can work with.
>
> **[1:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=119)** For example, when a user asks what's the weather like in Sarasota today?
>
> **[2:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=124)** The AI can be set up to identify first, that this is a question about the weather.
>
> **[2:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=129)** Second, that it's about the weather in a city called Sarasota and third, that this city is in Florida, United States of America.
>
> **[2:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=138)** Using AI like this we can build custom conversational interfaces into our regular apps without having to turn every online interaction into a chat.
>
> **[2:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/beyond-chatgpt-what-ai-can-do-for-you?u=76281980&t=148)** That's exactly what we'll be doing in this course.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (3), json (1)
> **Code Keywords:** public (1), interface (1)
> **Definitions:** is an  (1), is a  (1)
> **Analogies:** for example (2)
> **Prerequisites:** set up (1)
> **Speakers:** - the (1)

#### Real-world challenge: A more useful weather app
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=0)** - [Instructor] Our goal in this course is to use AI to improve the user experience of an existing app.
>
> **[0:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=6)** And this is the app in question.
>
> **[0:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=7)** It's one I built for a previous course, and I've upgraded it here to use React.
>
> **[0:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=11)** The app itself is pretty straightforward.
>
> **[0:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=13)** We go into the current weather panel, enter a location, click Submit, and then two requests are sent over to the OpenWeather map, API.
>
> **[0:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=22)** The first one is sent to the location API, which converts a location name like Oslo, Norway into longitude and latitude.
>
> **[0:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=30)** The second request is sent over to the weather API, using that longitude and latitude to get the closest weather station and then pull the weather data from that location and send it back to the app.
>
> **[0:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=41)** The app then takes that information and converts it into display over on the right-hand side.
>
> **[0:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=46)** We can test it out by putting in a location.
>
> **[0:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=48)** So in this case Carpinteria, CA, US.
>
> **[0:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=51)** So that's Carpinteria, California, US.
>
> **[0:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=53)** Click Submit.
>
> **[0:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=55)** The API requests take place, and we get data back and display it.
>
> **[0:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=58)** So here we have Carpinteria, California, US is currently 24.8 degrees Celsius, 2.8 meters per second winds in kind of a southerly direction.
>
> **[1:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=68)** And if you don't like Celsius and meters per second, you can click change units, and we switch over to Fahrenheit and feet per second.
>
> **[1:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=75)** So the app works this way.
>
> **[1:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=77)** And it's also fairly lenient.
>
> **[1:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=79)** If I go in here and say Burnaby, which is where I live in Canada, because there's only one Burnaby in the world when I click Submit, I get the correct information.
>
> **[1:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=87)** So this is the weather at my current location.
>
> **[1:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=90)** However, if I put in a name that might appear several places, like London, and click Submit, then we'll get the most prevalent of those locations.
>
> **[1:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=100)** So in this case, we get London in Great Britain, or the UK, which is probably where people want information from.
>
> **[1:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=106)** But if I want information about London, Ontario, I have to be more specific.
>
> **[1:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=110)** Now if I do something like this, London, Ontario, I still get London, Great Britain because this request is malformed to what the API needs.
>
> **[1:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=119)** So if I want London, Canada, I have to go down here, and say this is not the US, so it has to be city and then two letter country code.
>
> **[2:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=129)** So I have to go London, CA with no spaces and click Submit.
>
> **[2:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=133)** And then I get London, Canada.
>
> **[2:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=136)** So this user experience can definitely be improved by fixing how you input information and also by providing some more contextual information about the weather.
>
> **[2:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=146)** And that's exactly what we'll do in this course.
>
> **[2:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=148)** We'll start by, instead of the user putting in this very specific formatted location data, putting in a question, like, "What's the weather like in London, Ontario?", and then have AI figure out what is this location, and then format the location prompt to match what's the location API needs.
>
> **[2:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=167)** In this case, London, CA.
>
> **[2:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=170)** Then, when we get the weather data in return, it's actually fairly extensive.
>
> **[2:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=174)** There's a ton of information in that weather data.
>
> **[2:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=176)** And right now we're only displaying the temperature and the wind speed and direction.
>
> **[3:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=180)** We'll send all of that weather data along with a prompt to the AI and ask, "Can you give me a textural description of the weather?"
>
> **[3:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=187)** And that way the user can go over here and say, "Do I need to bring a rain coat if I'm going to London, Ontario?"
>
> **[3:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=195)** And the system will then provide a textual description saying, "Maybe you do, it's currently raining", or, "It might be raining soon", or, "It's cold", or, "It's hot", or, "You need sunscreen instead", or something like that.
>
> **[3:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=204)** So we'll use the AI twice, once to figure out the location and then again to parse the weather data.
>
> **[3:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=212)** And then in between we'll use this other API to actually get the weather data.
>
> **[3:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/real-world-challenge-a-more-useful-weather-app?u=76281980&t=216)** So there's a lot going on here, and it's a good demonstration of how we can use AI for more than just chat.

> [!info]- Semantic Content
>
> **Env Vars:** api (7)
> **Code Keywords:** case, (2), switch (1), from. (1), this, (1), return, (1)
> **Versions:** 24.8 (1), 2.8 (1)
> **Speakers:** - [instructor] (1)

#### Ideating with ChatGPT as a base
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=0)** - [Instructor] Anytime you plan on integrating AI into an existing app or a new app it's a good idea to test out your prompts first in the most bare bones version of the AI.
>
> **[0:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=10)** So in this case, because I'm using the open AI API, I'm just going to use Chat GPT to test my prompts.
>
> **[0:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=17)** There are two things we need to do in this app.
>
> **[0:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=19)** The first one is to transform the prompt into a specific location string.
>
> **[0:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=23)** The second one is to take a bunch of weather data and then try to convert that into human readable information.
>
> **[0:29](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=29)** So to start off, let's take a quick look at the API we're going to use.
>
> **[0:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=33)** So it's the API from OpenWeather Map and we're going to use two different APIs here.
>
> **[0:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=38)** The first one is the Geocoding API which receives the city name, state code, and country code and then outputs a ton of information about the location that you get in return in an array.
>
> **[0:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=50)** So in this case, because the request was London you actually get several different Londons.
>
> **[0:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=54)** So here the first one is the city of London in Great Britain and the state England.
>
> **[1:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=60)** The second one is London in Ontario.
>
> **[1:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=64)** So it's country CA in state Ontario.
>
> **[1:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=67)** And then the second API is this one, the current weather data, where we pass in the latitude and longitude that are spelled out here in the response for the Geocoding one.
>
> **[1:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=79)** And then we get a ton of other data in return which isn't really human readable data.
>
> **[1:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=84)** So, here, there's a ton of information.
>
> **[1:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=86)** All of this temperatures, for example, is listed in Kelvin which isn't something people generally understand.
>
> **[1:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=92)** There's wind speed, there's whether, there's rain clouds, a bunch of information.
>
> **[1:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=97)** And we want the AI to convert this tabular data into human understandable information.
>
> **[1:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=103)** So we need to make two prompts.
>
> **[1:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=104)** One for the location, the other one for the weather.
>
> **[1:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=108)** Let's start with the location prompt.
>
> **[1:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=110)** I want to see if I can get GPT three five to do this.
>
> **[1:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=114)** So I'll start with this prompt here.
>
> **[1:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=116)** Act like a location string generator.
>
> **[1:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=119)** Based on my prompt, create a location string following this specific format, city, two letter state code, two letter country code.
>
> **[2:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=128)** And then I provide an example.
>
> **[2:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=129)** What is the weather like in London, Ontario?
>
> **[2:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=131)** And the response is London,ON,CA.
>
> **[2:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=135)** This is what's called few shot prompting where I'm not only providing the prompt but I'm also providing an example saying.
>
> **[2:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=140)** This is a format I want you to follow.
>
> **[2:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=143)** Let's see what happens when I send off this prompt.
>
> **[2:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=146)** "Sure, I can help you with that.
>
> **[2:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=147)** Please provide the necessary information."
>
> **[2:29](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=149)** So let's try, what's the weather like in Burnaby?
>
> **[2:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=157)** That's where I am.
>
> **[2:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=158)** So Burnaby,BC,CA. Correct.
>
> **[2:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=160)** Okay. Do I need to wear sunscreen in Oslo?
>
> **[2:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=169)** Oslo,NO,NO. That's not entirely correct 'cause NO definitely is not a state, but it's still following my general convention.
>
> **[2:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=177)** So what I'm seeing here is GPT three five can do what I want to, but I need to provide a very specific prompt for it.
>
> **[3:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=184)** And later on in the course you'll see we may have to do something a bit more fancy to get this to work, but the AI definitely can pull the information out from my prompt.
>
> **[3:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=194)** Now the reason why this is important is, let's see what happens if I start up a new chat.
>
> **[3:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=199)** So I'll go in here, start a new chat, and then ask for the same thing again.
>
> **[3:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=205)** What's the weather like in Oslo right now?
>
> **[3:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=213)** "I'm sorry, but as an AI model with knowledge cutoff in September, 2021, I don't have real-time data."
>
> **[3:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=219)** So, we can't use the system to get current data but we can use the system when it's prompted properly to figure out this is a question about Oslo, Norway.
>
> **[3:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=229)** That's the first part.
>
> **[3:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=230)** The second part is we want to be able to get some information about the data.
>
> **[3:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=234)** So what if I go in here and I copy out this example data on the JSON, and I say, Based on the JSON below, what's the current weather in this location?
>
> **[4:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=253)** No. See, describe.
>
> **[4:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=262)** So here we get a bunch of more descriptive data but this isn't very human friendly.
>
> **[4:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=270)** Let's see if we can say, describe the weather in a conversational way using appropriate units.
>
> **[4:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=287)** So the system figured out the location based on the longitude and latitude which apparently is Zocca, Italy.
>
> **[4:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=293)** And it says, "The temperature's around 25.3 degrees, which is blah, blah, blah in Kelvin."
>
> **[4:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=298)** And then, but it's still making this, like, really clunky description of everything.
>
> **[5:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=303)** And that's probably because it's GPT three five.
>
> **[5:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=312)** So let's see what GPT four does with the same query.
>
> **[5:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=315)** So I'll say, based on the JSON below, provide a conversational description of the current weather.
>
> **[5:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=330)** And I'll paste in the JSON again.
>
> **[5:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=332)** See what GPT four does.
>
> **[5:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=334)** Now, GPT four is much slower, but it's also way better doing things like this.
>
> **[5:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=339)** To, like, provide a human readable description of things.
>
> **[5:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=343)** And as you can see, the description here is better.
>
> **[5:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=345)** Like if you go and compare the two, it is better.
>
> **[5:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=348)** And there's far more information here, and this is totally something I can use.
>
> **[5:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=353)** So, based on this experimentation I can see I am able to use the AI to figure out the location so that I can get the right string of text to send off to the API.
>
> **[6:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=364)** And once I have the weather, I am able to use the AI again to provide a human readable description of that weather.
>
> **[6:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=370)** And with some fine tuning I can also get that weather description to be a lot better and more human readable and more conversational than what you see here.
>
> **[6:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/ideating-with-chatgpt-as-a-base?u=76281980&t=378)** So, we're on our way and this will eventually work.

> [!info]- Semantic Content
>
> **Env Vars:** gpt (7), api (6), json (4)
> **Code Keywords:** let (7), case, (2), this. (2), pass (1), try, (1)
> **Definitions:** is a  (2)
> **CLI Commands:** make (1)
> **Versions:** 25.3 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)


### 3. 2. The Core App

#### Sidebar: Build a React app using Vite and GitHub Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=0)** - [Instructor] Quick sidebar, as we work our way through this course together, you'll notice I'm building a React app using Vite in GitHub codespaces.
>
> **[0:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=8)** And as you finish out the course, there's a good chance you'll want to set up a similar project yourself later.
>
> **[0:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=14)** So let me walk you through the process of setting this up from scratch so you don't have to take my existing project and delete it and start over.
>
> **[0:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=22)** The reason I'm using Vite instead of webpack and create React app is because this gives me a far cleaner and faster environment to work in.
>
> **[0:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=30)** Vite is a relatively new build tool whereas webpack is over nine years old, and there are huge advances that have taken place over those last nine years that Vite is taking advantage of.
>
> **[0:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=42)** To start this process, go to GitHub, and create a new repository.
>
> **[0:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=46)** I'll just call mine vite-demo, and I'll set it to public and Add a README file just so there's something in the project.
>
> **[0:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=54)** Create repository.
>
> **[0:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=57)** And once we're in the repository, I'll go to the Code button, select the Codespaces tab, then click on these three dots to open extended functionality and go to Configure dev container.
>
> **[1:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=69)** This step is important because once Vite is active, you're running the dev process.
>
> **[1:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=74)** Vite will try to spin up a browser preview in your browser and that requires opening a port and we have to tell the virtual machine codespaces is running in what port that is and what we should do with that port.
>
> **[1:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=87)** Inside devcontainer.json, we're telling codespaces how to configure itself.
>
> **[1:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=92)** So here after features, I'm going to add in a little bit of code, so I'm saying portsAttributes.
>
> **[1:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=100)** Then we list out each of our ports.
>
> **[1:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=101)** In this case it's just one, it's 5173.
>
> **[1:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=104)** We give it the label, Vite port, and we say onAutoForward, openPreview.
>
> **[1:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=109)** So openPreview means that it'll open a preview inside VS code itself in the browser.
>
> **[1:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=115)** You can also change that to open browser if you want it to open in a separate browser window.
>
> **[2:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=120)** Then at the bottom here we say forwardPorts and here we have an array of ports we want to forward in this case 5173.
>
> **[2:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=126)** For reference, 5173 is the port Vite uses by default.
>
> **[2:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=131)** I'll Commit changes to commit this to my project.
>
> **[2:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=135)** So now it's part of the overall project.
>
> **[2:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=137)** When I go back to code, you'll now see we have a devcontainer folder.
>
> **[2:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=141)** That's all I need to do in GitHub.
>
> **[2:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=143)** From here, I can now start up codespaces by creating a new codespace on Main.
>
> **[2:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=147)** This codespace is a virtual machine that runs my project inside Visual Studio Code in my browser.
>
> **[2:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=156)** And this codespace you see here is the starting point of the codespace that you'll be working with throughout the rest of this course.
>
> **[2:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=164)** While the codespace is building out, we can go to the Vite documentation, found at [vitejs.dev/guide](https://vitejs.dev/guide), and if you scroll down here, there's installation instructions that are simply npm create vite@latest.
>
> **[2:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=177)** So that's the command we'll use.
>
> **[2:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=179)** I'll go down here in terminal and paste that in.
>
> **[3:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=184)** Now codespaces will go out and find Vite, says do you want to install the following packages?
>
> **[3:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=189)** Yes, I do.
>
> **[3:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=190)** Then it'll say, is this a project name? Yes it is.
>
> **[3:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=192)** And from here we can then install a framework.
>
> **[3:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=195)** So you can go with Vanilla.
>
> **[3:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=196)** So no framework, you can use Vue, React, Preact, Lit, Svelte, et cetera.
>
> **[3:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=200)** I want React and I want JavaScript plus SWC as the buildout that installs all the pieces I need in a new folder called vite-project.
>
> **[3:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=211)** Then I'll say cd vite-project to get into the project and npm install to install all the dependencies inside the virtual machine, so that we can work with all the dependencies.
>
> **[3:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=224)** And while that's happening, I'll make one more change.
>
> **[3:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=226)** I'll go into vite-project and go to package.json.
>
> **[3:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=230)** And here at the very top we have scripts and it says dev, vite.
>
> **[3:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=235)** So I'm going to add something to that.
>
> **[3:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=236)** I'll say dev, vite --host, save that, this tells Vite to specifically use whatever host the environment provides and that's what we want here.
>
> **[4:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=248)** So now I can clear this and then say npm run dev and Vite will spin up an environment then automatically open it up in a preview in my browser here.
>
> **[4:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=261)** And as you can see, Vite is now working with React in my browser and I can go make changes to the project and those changes will automatically show up here in the simple browser, and I can also click on localhost here, and open up the same thing in a separate browser window.
>
> **[4:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=276)** All of this is now happening in my browser without me installing anything on my computer.
>
> **[4:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sidebar-build-a-react-app-using-vite-and-github-codespaces?u=76281980&t=281)** I have a clean install of React with Vite and I can do whatever I want with it.

> [!info]- Semantic Content
>
> **UI Navigation:** go to (5), click on (2), select the (1), scroll down (1)
> **Prerequisites:** install (5), configure (2), set up (1)
> **CLI Commands:** npm (3), make (2), find (1), cd (1)
> **Tools:** github (3), vs code (1), visual studio (1), terminal (1)
> **Code Identifiers:** openpreview (2), portsattributes (1), onautoforward (1), forwardports (1)
> **Code Keywords:** let (1), delete (1), public (1), default. (1)
> **Definitions:** is a  (2), means that (1)
> **File Paths:** devcontainer.json (1), package.json (1)

#### Boot up the app in GitHub Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=0)** - [Instructor] This course is hands-on, and I want you to follow along as we work through this project together.
>
> **[0:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=6)** To get the exercise files, you can either go to GitHub, clone the entire GitHub repository onto your computer, set up VS Code on your computer, wire everything together, or you can simply use GitHub Codespaces and do it all in the browser.
>
> **[0:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=20)** That's what I'll be doing throughout this course, and I recommend you do it too because then you don't have to go through the whole setup process.
>
> **[0:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=26)** To get the Codespaces, you can either click on the Codespaces button in the course page, or you can go to the GitHub repository, like you see here.
>
> **[0:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=34)** Then click on the Code button.
>
> **[0:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=35)** Go to the Codespaces tab.
>
> **[0:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=37)** And from here, you can see a list of all the Codespaces you've already created for this project, if you have any.
>
> **[0:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=42)** And you can also create new Codespaces if you want to.
>
> **[0:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=44)** So that's what I'll do here.
>
> **[0:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=46)** I'll create a new codespace by clicking plus.
>
> **[0:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=49)** This spins up a new codespace on the main branch where we start.
>
> **[0:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=53)** This codespace is fully built out with everything you need, including all the dependencies, and all dependencies have already been installed in the project.
>
> **[1:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=61)** You don't have to run npm init or npm install or anything else.
>
> **[1:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=65)** You can just start working with the files right away.
>
> **[1:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=68)** Now before we do that, let me just point out a couple of things.
>
> **[1:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=71)** If you want to, you can just work with Codespaces in the browser like this.
>
> **[1:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=76)** If you don't like working in the browser, you want to feel more like you're working in a real dev environment, you can also install this as a progressive web app by clicking the button up here on the corner.
>
> **[1:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=86)** When you click on install here, you're basically creating a new, little browser with just this website in it on your computer.
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=94)** And once you've done that, you can just spin up that progressive web app from your computer as a standalone unit, and you're brought to the same environment.
>
> **[1:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=102)** You're just doing it in your computer.
>
> **[1:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=104)** Oh, and you can also work with this codespace in VS Code on your computer if you want to apply your own color schemes or other features.
>
> **[1:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=112)** To do that, click on the Codespaces button in the bottom, left-hand corner, and go to open in VS Code Desktop, and it'll open in VS Code on your desktop.
>
> **[2:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=122)** So you're now accessing the VM that contains the entire project in the cloud inside VS Code installed on your computer.
>
> **[2:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=130)** Once you're done working for the day and you want to spin Codespaces down, you can again, click on the Codespaces button in the bottom left-hand corner and click on stop current codespace.
>
> **[2:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=139)** This doesn't delete anything or erase anything or change anything.
>
> **[2:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=143)** It just stops the virtual machine.
>
> **[2:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=145)** And once you want to go back and continue working, you just start it up again and you're right where you're left off.
>
> **[2:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=150)** And one final thing, any changes you make inside this codespace only happen inside this codespace.
>
> **[2:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=156)** They don't apply to the GitHub Repository.
>
> **[2:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=158)** That means if you want to commit any of those changes to memories so you can access them later or maybe spin up a new codespace from them, so you want to place them inside GitHub.
>
> **[2:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=167)** You need to use the regular Git features.
>
> **[2:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=169)** The easiest way is to use the built-in tools.
>
> **[2:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/boot-up-the-app-in-github-codespaces?u=76281980&t=172)** And by the way, if you do this, you need to create your own fork of the project 'cause you can't commit to my project.

> [!info]- Semantic Content
>
> **Tools:** github (6), vs code (5)
> **UI Navigation:** go to (4), click on (4)
> **Code Keywords:** else. (1), let (1), this. (1), new, (1), delete (1)
> **Prerequisites:** install (3), set up (1), setup (1)
> **CLI Commands:** npm (2), make (1), git (1)
> **Exercise Files:** exercise files (1)
> **Speakers:** - [instructor] (1)

#### Work with the OpenWeatherMap API
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=0)** - [Instructor] The weather app we'll be working on together throughout this course relies on the OpenWeatherMap APIs to gain location information and weather information for that location.
>
> **[0:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=10)** So, for our app to work, we need to connect it to OpenWeatherMap.
>
> **[0:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=14)** That's done by adding your private API key to our project.
>
> **[0:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=18)** And that's done in a new file you'll create from this file here that's called n.local.
>
> **[0:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=24)** So grab n.local.template, copy it and paste it in, then rename the new file to just n.local.
>
> **[0:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=34)** And inside here, we'll eventually save the open AI key, but we don't need that yet, so I'll delete it for now.
>
> **[0:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=39)** And we'll also save the OpenWeatherMap key.
>
> **[0:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=43)** Now, it's important to note here, this is not for production.
>
> **[0:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=46)** You never publish an API key in a file like this when you publish content to the web because if you do, that API key becomes public knowledge.
>
> **[0:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=55)** Anyone can access it, and anyone can use it.
>
> **[0:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=58)** If you want to host an application, like the one we're building, on the web, in public so other people can use it with your key, you need to place the key in a key-management service, or you need to move all the interaction between your app and the API into the server so it's happening at the server site, not at the front end.
>
> **[1:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=77)** 'Cause if it's on the front end, people can see that key being passed back and forth.
>
> **[1:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=81)** They can take it and use it in their own apps, and you'll pay for their use.
>
> **[1:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=85)** In other words, this is for demonstration and experimentation purposes only, not for production.
>
> **[1:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=92)** All right, all those caveats aside, let's go over and create a new key.
>
> **[1:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=97)** Go to [openweathermap.org](https://openweathermap.org), create an account, and then go to your username and go to my API keys.
>
> **[1:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=104)** Here, you'll get a list of all your active API keys, and you can also create new ones.
>
> **[1:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=109)** As you can see, I have several active ones, and I want to create a new one called weather app, so I'll click generate, and the new key is automatically created down here.
>
> **[2:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=120)** From here, I can copy the entire key, go back into n.local and paste it in.
>
> **[2:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=129)** Notice there are no quotation marks or ticks or anything else.
>
> **[2:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=131)** Just straight-up paste it in, and that's the format you want.
>
> **[2:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=135)** Save this file.
>
> **[2:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=136)** And now, you should be able to test your app.
>
> **[2:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=138)** But keep in mind, sometimes it takes a while for OpenWeatherMap to approve a new key.
>
> **[2:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=144)** So it can take maybe five or 10 or 15 minutes, or even up to an hour, before it actually works.
>
> **[2:29](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=149)** In other words, if it doesn't work as you are doing it, just wait, and eventually, your key will go online and be active, and then it will work.
>
> **[2:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=158)** To bypass that problem, I'm going to take an old key that I know works and paste it in instead, save n.local, close out those two files, and then go down to terminal to test my application.
>
> **[2:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=170)** So I'll say, npm run dev.
>
> **[2:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=173)** This spins up VITE and spins up my site in the local browser.
>
> **[2:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=178)** So here you can see it running inside VS code.
>
> **[3:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=181)** And from here, I should now be able to request weather information from any location in the world.
>
> **[3:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=185)** So I'll just say Oslo and click submit.
>
> **[3:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=189)** And if the key works, I should now get the weather information here, as I did.
>
> **[3:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=193)** So that means we now sent off a request to the location API, it returned longitude and latitude, then we took longitude and latitude and sent it off to the weather API and got information in return.
>
> **[3:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/work-with-the-openweathermap-api?u=76281980&t=205)** Everything is now working, and that means we can start working on our project.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), vite (1)
> **Code Keywords:** public (2), private (1), delete (1), let (1), else. (1)
> **UI Navigation:** go to (3)
> **Tools:** terminal (1), vs code (1)
> **Definitions:** in other words (2)
> **CLI Commands:** npm (1)
> **URLs:** [openweathermap.org](https://openweathermap.org) (1)
> **Exercise Files:** template (1)

#### App walk-through
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=0)** - [Instructor] Since we're not starting from scratch but instead extending an existing project, it's important that you understand how the existing project works.
>
> **[0:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=7)** So let me give you a brief walkthrough of our project as we get started.
>
> **[0:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=11)** Before we do that, I'll just close everything out here.
>
> **[0:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=14)** Since we're working inside VITE, I can press H in terminal to get a breakdown of all the shortcuts and here at the bottom you see press Q to quit.
>
> **[0:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=23)** So press Q, that quits out VITE and now I can close simple browser so that we can see everything plainly.
>
> **[0:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=31)** This is a standard react project and in VITE, the index file for your project sits in the root folder.
>
> **[0:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=38)** So it's right here.
>
> **[0:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=38)** Here we call in a root ID div and then everything happens from there on.
>
> **[0:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=45)** All the other files that you'll be working with sit inside the source folder.
>
> **[0:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=48)** This is again standard React project.
>
> **[0:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=50)** So we start off with main.jsx, which sets up react and strict mode and pulls an app inside app.
>
> **[0:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=58)** A lot of the functionality happens and then app calls in all the other components.
>
> **[1:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=63)** So let's take a closer look at app.
>
> **[1:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=65)** Here, we're setting a couple of states.
>
> **[1:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=68)** So we have the prompt that is the input that you put into the field.
>
> **[1:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=72)** We have units that would be at the metric or imperial.
>
> **[1:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=75)** We have WeatherData loading, which sets whether or not the data is currently loading.
>
> **[1:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=81)** That's what fills out that loading thing that you see inside the box.
>
> **[1:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=84)** And we have any error messages captured.
>
> **[1:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=87)** So all of these things are captured using set prompts, set units, set weather data loading and set error messages.
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=94)** We're passing information into these states and then displaying them.
>
> **[1:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=98)** Scrolling down, we have this hook that calls in useApiRequests and passes in the prompt.
>
> **[1:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=104)** This is an external file that does all our API requests for us and we'll look at that in a second.
>
> **[1:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=110)** But this is basically where we send our prompt and from where we get our errors, our location data and our weather data that is then displayed.
>
> **[2:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=120)** To see how the app works, we can go down to the Return section.
>
> **[2:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=123)** Here, we first set up a container and then a header.
>
> **[2:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=126)** Inside the header we have current weather then the weather form, and then any error messages.
>
> **[2:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=131)** So that's what you see on the left hand side of the screen.
>
> **[2:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=134)** Then we have a main, that's what you see on the right hand side of the screen.
>
> **[2:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=138)** And if there is weather data and no error messages, we call in the weather card with all the information.
>
> **[2:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=144)** So the loading, the weather data, the units, the country, the state, and the set units.
>
> **[2:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=151)** Then if there's no weather data, we just call in the weather card without any of that information.
>
> **[2:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=155)** We just set the loading to isCurrentlyLoading and that way we get that nice display where there's a loading panel telling us something is coming but it's not there right now.
>
> **[2:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=165)** We'll be working with this file and other files throughout the project.
>
> **[2:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=169)** So anytime you're wondering, okay, where is everything fired from?
>
> **[2:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=172)** Just remember it's all happening here in app.jsx.
>
> **[2:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=176)** That's where everything starts.
>
> **[2:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=178)** That's where we call in the form.
>
> **[3:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=180)** That's where we fill in the weather card itself.
>
> **[3:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=183)** But the main event of this app actually happened in this hook here.
>
> **[3:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=188)** useApiRequests, which sits inside components under the file useApiRequests.
>
> **[3:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=195)** This file is where all of the API requests are handled and this is where we'll add our additional API requests as we work through the course.
>
> **[3:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=203)** Again at the top we set up a series of states.
>
> **[3:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=206)** So we have the error state, we have location data and we have weather data right now.
>
> **[3:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=211)** Below that, we use useEffect to trigger all of the things that are going to happen whenever this file is called.
>
> **[3:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=218)** So inside useEffect, we say go and fetch data asynchronously from first, LocationToCoordinates and we pass in the prompt.
>
> **[3:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=228)** Then when the response comes from that, we go to WeatherData and we pass in the location data results.
>
> **[3:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=235)** That's from the first request here and then we pass all of that information back to the application.
>
> **[4:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=240)** So that's what we're doing down here.
>
> **[4:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=242)** We're returning either an error, location data or WeatherData.
>
> **[4:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=246)** All of the states that were set up here.
>
> **[4:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=249)** So this is the sequence of events, this is the order in which the different APIs are called and as we add in new API calls to the AI APIs, we'll add them in here.
>
> **[4:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=260)** To make it easy to understand what's going on, I've broken out each of the actual API calls into separate files.
>
> **[4:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=266)** So here we have LocationToCoordinates as a component and we have WeatherData as a component.
>
> **[4:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=271)** Going into them, here's LocationToCoordinates.
>
> **[4:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=274)** You'll see it's just a standard API call.
>
> **[4:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=276)** We grab the locationString, that is what is passed in, in this case, the latitude and longitude.
>
> **[4:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=282)** And then we send a fetch response to openweathermaps, locationString API, and then we grab the response and send it back if there is a response.
>
> **[4:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=292)** And we also handle all the errors down here.
>
> **[4:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=294)** As we say, if there's an error pass the error down the chain all the way to the app component and then display it inside the form.
>
> **[5:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=302)** Same exact thing happens in WeatherData.
>
> **[5:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=305)** Here, we grab our location data, we pass it in so we have the latitude and longitude.
>
> **[5:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=310)** Then we capture the result and toss it back unless there's an error, in which case we capture the error and toss it back.
>
> **[5:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=316)** So to recap, the sequence is every time something happens, we call useApiRequests, useApiRequests goes through a sequence of calls to first, LocationToCoordinates and then to WeatherData.
>
> **[5:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=330)** LocationToCoordinates grabs the coordinates and passes them onto WeatherData.
>
> **[5:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=335)** WeatherData uses those coordinates to get the weather data and passes that back into app.
>
> **[5:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=340)** An app then uses the weather card component to transform the information into readable data and then display the information in the app.
>
> **[5:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=349)** So this is where all the information is displayed.
>
> **[5:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=353)** Take some time before we continue in the course to go through these files and fully understand what is going on here.
>
> **[5:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/app-walk-through?u=76281980&t=359)** I've set it up so that the sequence is straightforward and easy to understand and I've separated out all the components so that they are individually handling each operation in turn and you can clearly see which component is doing what.

> [!info]- Semantic Content
>
> **Code Identifiers:** useapirequests (5), useeffect (2), locationstring (2), iscurrentlyloading (1)
> **Env Vars:** api (7), vite (3)
> **Code Keywords:** pass (5), let (2), case, (1), continue (1)
> **Definitions:** is a  (2), is an  (1), is called (1)
> **Prerequisites:** set up (3)
> **File Paths:** main.jsx (1), app.jsx (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)


### 4. 3. Connecting to the OpenAI API

#### What is the OpenAI API, and how does it relate to ChatGPT?
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=1)** - Throughout this course, we'll be using the OpenAI API to integrate an AI model into an existing application.
>
> **[0:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=7)** The OpenAI API serves as a good baseline example for this type of integration, and the approach you'll learn here will apply more or less the same with other AI APIs as well.
>
> **[0:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=17)** Which begs an important question, what exactly is the OpenAI API, and how does it relate to ChatGPT?
>
> **[0:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=25)** Short version, the OpenAI API provides programming-level, highly configurable direct access to the GPT language models offered by OpenAI.
>
> **[0:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=34)** Using the OpenAI API, you can build a ChatGPT clone because ChatGPT itself is built on the OpenAI API.
>
> **[0:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=43)** Long version, the OpenAI API provides much deeper core access to the AI models than ChatGPT and does so without all the user filters ChatGPT has put in place to prevent unexpected usage.
>
> **[0:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=58)** This means you, as a developer, have way more control, both in what prompts go in and what responses come out and in what models are used and how they are configured.
>
> **[1:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=69)** This, in turn, means the system behaves differently.
>
> **[1:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=73)** For one, you don't get that back-and-forth chat experience with the OpenAI API, unless you build an application to support it.
>
> **[1:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=80)** For another, you get to control how the response is generated and what format it takes, a human language answer, a function call, or something else.
>
> **[1:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=91)** Finally, when using the OpenAI API, you pay per token used.
>
> **[1:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=96)** So the bigger your prompts are and the more prompts you send, the more money you spend.
>
> **[1:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=101)** The price per token is very low.
>
> **[1:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=103)** But if you build a public application using the API, you have to prepare to pay for every use.
>
> **[1:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=110)** Practically, the OpenAI API works like any other API system with one significant exception.
>
> **[1:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=117)** The response from the OpenAI API and any other current AI API is non-deterministic, meaning you cannot know in advance what the response will be, no matter how much you try to control it.
>
> **[2:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=131)** For example, you can tell the API to return a comma separated list of city, state, and country name without spaces, and in most cases it will, but sometimes, it won't, or it will return inaccurate or fabricated information.
>
> **[2:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=147)** And when it returns malformed or incorrect information, it will still present it as exactly what you asked for.
>
> **[2:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=155)** So when using these systems, you, the developer, take on the responsibility of making sure the data you receive meets your requirements and that you have tools in place to deal with the instances when something goes wrong because something will go wrong.
>
> **[2:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/what-is-the-openai-api-and-how-does-it-relate-to-chatgpt?u=76281980&t=169)** You'll see plenty of this as we move through the course.

> [!info]- Semantic Content
>
> **Env Vars:** api (15), gpt (1)
> **Code Keywords:** this, (1), function (1), else. (1), finally, (1), public (1)
> **Analogies:** for example (1)
> **Speakers:** - throughout (1)

#### Test the API in the OpenAI Playground
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=0)** - [Instructor] To be able to work with the OpenAI API and follow along through the rest of this course you need to sign up specifically for this service.
>
> **[0:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=8)** And that's the case, even if you already have an account for ChatGPT or ChatGPT Pro, because the OpenAI API is a separate service entirely.
>
> **[0:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=17)** ChatGPT is free.
>
> **[0:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=18)** ChatGPT is a monthly for-pay service.
>
> **[0:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=21)** The OpenAI API is a pay-per-use service, where you pay for the individual tokens you use throughout your interaction with the system.
>
> **[0:29](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=29)** To sign up, you can either go to platform.[openai.com](https://openai.com) and click on the Sign up button.
>
> **[0:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=35)** You can go search for the OpenAI API, and you're taken to this page, and from here you can click Sign up, and whatever method you choose, once you're signed up, you land here on platform.[openai.com](https://openai.com).
>
> **[0:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=49)** From here you get an Overview of all the features available to you.
>
> **[0:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=53)** You get Documentation, you get an API reference, Examples, and a Playground.
>
> **[0:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=57)** And I'll tell you upfront, the Documentation, the API reference, and the Examples, as of this recording, are all Python focused.
>
> **[1:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=65)** That means if you come in here looking for JavaScript tutorials, you will not find any.
>
> **[1:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=70)** All the documentation is centered on Python, because Python is the central language for interaction with large language models, and the documentation simply hasn't been built out for things like JavaScript applications yet.
>
> **[1:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=82)** This is one of the primary reasons why I'm making this course, to give you a bridge between what exists in documentation and real-world implementation using JavaScript.
>
> **[1:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=93)** One more thing, once you're inside, if you're going to use the API and follow along, you need to add a credit card, because you'll be paying for all the tokens you use.
>
> **[1:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=101)** And I know that to some that may sound scary, because it means you're paying for use, but let me just show you how much it costs, because it is not as much as you think.
>
> **[1:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=110)** Here is my usage for July, during the time I developed this course.
>
> **[1:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=115)** You can see down here the usage for the month for me has been 47 cents, so not a full dollar.
>
> **[2:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=122)** And I think the full charge I got for the full development of this course was somewhere around $1.50, for all the use I did to develop this course.
>
> **[2:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=132)** And I sent thousands of requests through this API.
>
> **[2:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=137)** So, though you have to pay, the cost of the tokens you're going to be using throughout this course is not significant, just so you know.
>
> **[2:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=147)** But we're going to talk about something else.
>
> **[2:29](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=149)** One of the first things you need to do when you work with the OpenAI API is figure out how to configure the AI to do what you want.
>
> **[2:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=157)** And that's done in the Playground.
>
> **[2:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=160)** Here you get to set up your request inside the walls of the system before you go and spin up your REST client and before you write any code.
>
> **[2:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=170)** And you can experiment with things like what mode you want the AI to work in, which model you want to use, the temperature of the model, so how creative it is, the length of the output, and all of these things can be configured in your code, but it's a good idea to test it here first so you know exactly what you need to set up, and then you can generate code from it that you paste into your project.
>
> **[3:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=192)** So let's take those two prompts that we worked with earlier and place them into the Playground.
>
> **[3:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=196)** 'Cause it's a little bit different from working with ChatGPT.
>
> **[3:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=200)** You'll remember, we had two prompts.
>
> **[3:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=202)** We had the one saying "act like a location string generator," and then we had the other one saying "take this data and make it human readable."
>
> **[3:29](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=209)** So let's start with this one, "act like a location string generator."
>
> **[3:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=212)** I'll just copy out the entire thing here, then go into Playground, and instead of placing it in the USER field I'm going to place it in the SYSTEM field.
>
> **[3:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=221)** So this defines how the system works, meaning every time a prompt is sent to the AI, it will now first look at the system and say, "Oh, right I am a location string generator "that takes the prompt and outputs this format."
>
> **[3:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=234)** And then the user input is just the request.
>
> **[3:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=237)** The request over here was, "what is the weather like in Burnaby?"
>
> **[4:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=241)** So I'll copy that and paste it into USER.
>
> **[4:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=245)** "What's the weather like in Burnaby?"
>
> **[4:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=247)** And then click Submit.
>
> **[4:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=250)** Now based on the default setup with the 3.5-turbo model, temperature at 1, maximum length 256, and all these other settings, I get the response Burnaby,BC,CA, which is the correct one.
>
> **[4:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=262)** So that means this setup is probably what I need.
>
> **[4:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=266)** Now if I want to, I can go in here and try to change this to something else.
>
> **[4:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=270)** So I could either go to the older models, which is not a good idea, or if I needed a much bigger input, I could also change it to turbo-16k, which gives me more tokens.
>
> **[4:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=280)** But since these requests are really small I don't need that.
>
> **[4:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=283)** Or I could go up to gpt-4, if necessary.
>
> **[4:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=286)** Again, the output here is what I want, so I don't need to do that.
>
> **[4:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=289)** I could also try to test it by changing the temperature or doing something else.
>
> **[4:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=293)** But for this particular use, none of that is necessary.
>
> **[4:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=297)** What you see here works perfectly out of the box.
>
> **[5:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=301)** Once I have something that works I can choose to save this preset.
>
> **[5:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=305)** That way I can come back to it later.
>
> **[5:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=307)** Or if I want to do something else, I can just wipe it out and start over, which is what I'm going to do.
>
> **[5:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=312)** 'Cause I want to see what happens with this prompt over here.
>
> **[5:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=315)** So "based on the JSON below "provide a conversational description," blah, blah, blah.
>
> **[5:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=319)** So I'll say, I'll take this starting point here.
>
> **[5:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=325)** Go in, replace the SYSTEM to that.
>
> **[5:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=328)** So "based on the JSON provided," and then, "give me a conversational description "of the current weather."
>
> **[5:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=338)** Then in the USER field, I'll just nix these out.
>
> **[5:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=343)** I'll say add a message, and the message in this case will be this weather data here.
>
> **[5:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=348)** So I'll scroll down.
>
> **[5:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=353)** Copy it.
>
> **[5:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=355)** And paste it in.
>
> **[5:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=356)** Now, right now we're still working with the Chat mode and gpt-3.5-turbo at a temperature of 1.
>
> **[6:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=363)** Let's see what happens when I submit this.
>
> **[6:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=366)** Here I get a response that "The current weather in Zocca, Italy," which is the location based on the location parameters, "the temperature is 298 Kelvin, "which is approximately 25 degrees Celsius, "with a minimum..."
>
> **[6:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=379)** So this works, but it's not ideal.
>
> **[6:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=382)** This is not very user friendly.
>
> **[6:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=385)** So let's see what happens if I change this to gpt-4 and just submit again.
>
> **[6:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=392)** And we get a different response.
>
> **[6:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=393)** And you can actually see here how much slower gpt-4 is to gpt-3.5.
>
> **[6:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=399)** You can see it spells things out much slower, but this output is far more reasonable than the output previously.
>
> **[6:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=407)** Based on this, I can now say, "Do I need to change my prompt?
>
> **[6:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=410)** "Do I need to change something in the behavior?"
>
> **[6:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=413)** And I can keep experimenting until I get exactly the output I want.
>
> **[6:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=417)** So this, inside the Playground, is where you do all your fine tuning of how you are going to interact with the system.
>
> **[7:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=425)** Then when you're done, you can click on View Code, and this gives you either Python output, a node output, or a curl output.
>
> **[7:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=432)** So if you go to node, which is the closest thing you'll get to JavaScript, you can see here is an example of how you can do this.
>
> **[7:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=439)** But even this is not ideal for our purposes.
>
> **[7:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-in-the-openai-playground?u=76281980&t=442)** So we're going to write our own prompt.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), user (3), system (2), json (2), rest (1)
> **Code Keywords:** let (5), else. (3), this. (2), this, (2), case, (1)
> **CLI Commands:** python (4), node (2), find (1), make (1), curl (1)
> **Documentation:** the documentation (3), api reference (2)
> **UI Navigation:** click on (2), go to (2), scroll down (1)
> **Prerequisites:** set up (2), setup (2), configure (1)
> **Versions:** 3.5 (3), 1.50 (1)
> **Definitions:** is a  (3), is an  (1)

#### Generate secret keys
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=0)** - [Instructor] Just like with open weather maps for our application to work with the OpenAI API, we first need API keys to be stored in our application.
>
> **[0:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=10)** To get your API keys from OpenAI, go to platform.[openai.com](https://openai.com), click on your name up here, go down to View API keys.
>
> **[0:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=19)** Here, you get to generate new API keys for your applications and you can generate however many you want.
>
> **[0:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=26)** One thing of note here, you only get to see the API key here once.
>
> **[0:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=30)** So if you create a key and then don't copy it and then click okay.
>
> **[0:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=36)** Then you'll never see the API key again and you'll have to go in and delete it and create a new one.
>
> **[0:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=40)** Let me show you what I mean.
>
> **[0:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=42)** So I'll click Create new secret key then I'll give my key a name.
>
> **[0:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=46)** So I'll say Weather app, and I'll click Create secret key.
>
> **[0:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=51)** This gives me this giant key and it says right here, you won't be able to view it again through your OpenAI account.
>
> **[0:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=57)** So copy this key right now using the copy button.
>
> **[1:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=61)** Go over into your application, go into env.local here.
>
> **[1:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=67)** Add in a new variable called VITE_OPENAI equals and paste in the key right away.
>
> **[1:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=77)** That way it's saved somewhere, otherwise you will lose it, and you'll have to just go through the process again.
>
> **[1:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=84)** Save that file just so that you don't get rid of it, and then you can click Done, and you can see now the Weather app is down here, but you'll never be able to access the information.
>
> **[1:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=93)** If you click on the Edit button, you can edit the name of the key, not the key itself.
>
> **[1:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=99)** That said, if you accidentally create a key, and then forget to copy it, or if you copy it and then place it somewhere and then lose it, or something goes wrong, there is no danger here.
>
> **[1:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=110)** All you need to do is go in, click on the trash can button to revoke the key that erases it and makes any apps that use the key not be able to use it anymore and just create a new secret key.
>
> **[2:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=121)** That also means if you accidentally publish your key publicly somewhere and you are afraid that someone might find it, just go and revoke the key and no one will ever be able to use it again.
>
> **[2:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=131)** And remember, all the keys you generate in here will accumulate into your payment plan.
>
> **[2:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=137)** So if you set up 40 different keys for 40 different applications and you're using all of those 40 applications, you'll get billed for the use of all of them.
>
> **[2:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=146)** Any key associated with your account will be billed to you, which is why, again, I say using env.local to store your keys is only for development purposes and experimentation.
>
> **[2:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=158)** Do not do this on a live web app because other people will be able to see your keys.
>
> **[2:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=163)** If you want to publish an application like this on the web, you need a key handler or a key management software to handle your keys, or you need to move all your API transactions to the server to run them on the server, so they're not public.
>
> **[2:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=177)** If it's sitting on the front end like we are doing now, other people will be able to see that key, copy it and use it in their own applications unless you revoke the key access.
>
> **[3:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/generate-secret-keys?u=76281980&t=187)** That said, the way I've set up this project, this file, env.local will never be stored in your GitHub repository, so it only exists inside your codespace, and that means it's perfectly safe to use for you during this course.

> [!info]- Semantic Content
>
> **Env Vars:** api (8), vite_openai (1)
> **UI Navigation:** click on (3), go to (1)
> **Code Keywords:** delete (1), let (1), public (1)
> **Prerequisites:** set up (2)
> **CLI Commands:** find (1)
> **URLs:** [openai.com](https://openai.com) (1)
> **Tools:** github (1)
> **Analogies:** just like (1)

#### Test the API with a REST client
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=0)** - [Instructor] Now that you have an API key for the OpenAI API, it is time to see what happens when we send requests through a REST client to the OpenAI API.
>
> **[0:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=10)** And for this, I'll be using Postman as my client.
>
> **[0:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=13)** You can use any client you want.
>
> **[0:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=15)** I just happen to like the interface for Postman.
>
> **[0:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=17)** So that's why I'm using it.
>
> **[0:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=18)** And the process will be the same no matter what tool you use for this.
>
> **[0:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=23)** To create an external call, it's a good idea to first go check out the API reference because it tells you how to authenticate and how to make requests.
>
> **[0:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=31)** So I'll go into authentication here and it says the API key is a secret and the way you pass it in is through the authorization HTTP header as a Bearer token.
>
> **[0:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=42)** So we're saying Authorization: Bearer and then OpenAI API key.
>
> **[0:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=47)** Okay, so I already have the key, and I know that in Postman I can create environments.
>
> **[0:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=52)** So I'll start here by creating a new environment for myself that stores the key for me.
>
> **[0:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=57)** I'll call it OpenAI.
>
> **[0:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=59)** And I'll create a new variable here called secretKey, doesn't actually matter what it's called.
>
> **[1:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=66)** And then I'll go into my file and copy out the key I pasted in in the previous movie because this is the only place where this key currently exists.
>
> **[1:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=75)** So I'll paste that in here to initial value.
>
> **[1:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=78)** And that means as long as I set the environment to OpenAI, I'll be able to access this key by referencing secretKey.
>
> **[1:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=85)** That way I'm not pasting the key into any of my code and I don't then accidentally copy out my code and paste it in somewhere else with the key.
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=94)** So I'll save this environment and then I'll change the environment up here to OpenAI.
>
> **[1:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=98)** Then I can go to collections.
>
> **[1:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=100)** And from here, I'll now start creating some requests.
>
> **[1:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=104)** To do that, I first need to see what requests look like.
>
> **[1:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=107)** So if I scroll down here, we can go to making requests.
>
> **[1:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=111)** And you see first we send a request to api.[openai.com/v1/chat/completions](https://openai.com/v1/chat/completions).
>
> **[1:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=119)** So I'll copy that out and go here and I'll create a new request for myself.
>
> **[2:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=125)** This will be a pulsed request because I'm sending the request with information and I'll paste in that URL here.
>
> **[2:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=133)** Then because we have auth, I can go into auth and say the basic auth, no bearer token.
>
> **[2:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=140)** And here I'll put in secretKey.
>
> **[2:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=144)** So bracket, bracket, secretKey.
>
> **[2:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=147)** This is the key that I pasted in earlier.
>
> **[2:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=148)** And you can see it as I hover over it.
>
> **[2:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=150)** This is the key that we're using.
>
> **[2:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=152)** Then I need to pass in my prompt.
>
> **[2:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=156)** Looking back at my code, you'll see that the prompt is passed in as JSON here.
>
> **[2:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=162)** And when I pass in the prompt, I can do a whole bunch of things.
>
> **[2:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=164)** So I can pass in the model I want to use.
>
> **[2:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=167)** The usage, I can say how many tokens I want, the completion tokens, the total tokens.
>
> **[2:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=172)** And then there's the choices.
>
> **[2:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=174)** There's a bunch of options here.
>
> **[2:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=175)** And this is where the playground comes in handy.
>
> **[2:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=177)** Just to set up a basic request, I'll just leave the default as is and click view code and then change the dropdown here to JSON 'cause that gives me the code I need.
>
> **[3:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=187)** So here we have all the code.
>
> **[3:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=189)** Actually I need a prompt too.
>
> **[3:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=190)** So I'll just say my prompt and then go view code again 'cause that should then show up right here, my prompt.
>
> **[3:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=199)** So then I can copy out this entire request, go over to body and select in the dropdown raw and then choose JSON as the raw output.
>
> **[3:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=210)** And then just paste in the code here.
>
> **[3:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=212)** So what I'm doing now is sending off this request to the completions endpoint.
>
> **[3:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=216)** And then request is to use the 3.5 turbo model.
>
> **[3:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=220)** The message is I am acting as a user and this is my prompt.
>
> **[3:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=223)** And then I want the temperature to be at one, the max tokens 256 top_p 1, blah, blah, blah, blah, blah.
>
> **[3:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=229)** Actually, you don't need any of this.
>
> **[3:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=231)** You can just take it out if you don't want it because these are the default settings.
>
> **[3:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=234)** If you do nothing, just leave it blank.
>
> **[3:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=237)** This is what we sent in.
>
> **[3:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=238)** And then for prompt, I'll type in something just to see what kind of response we get.
>
> **[4:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=243)** "Why do cows have horns?"
>
> **[4:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=249)** Send off that request.
>
> **[4:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=250)** And at the bottom here, we should now get the response from the OpenAI API.
>
> **[4:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=255)** And here you see, we again get a ton of information.
>
> **[4:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=257)** This is a chat completion.
>
> **[4:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=258)** It was created at this specific time.
>
> **[4:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=260)** We're using this model down here and then we get the output.
>
> **[4:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=264)** So the output sits under Choices because there might be multiple choices.
>
> **[4:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=268)** So this is an array of choices.
>
> **[4:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=270)** The first one, index zero has the message content.
>
> **[4:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=274)** "Cows have horns for several reasons," and then it goes on to describe why.
>
> **[4:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=279)** Now if I don't like this response, I can go up into my request here and change the model to 4.0 or I can change the temperature or I can change the match tokens or I can change my prompt.
>
> **[4:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=291)** But what's important here is this now works.
>
> **[4:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=294)** I'm now using my REST client to send an authenticated request to the OpenAI API and I get a reasonable response back I can use in my application.
>
> **[5:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/test-the-api-with-a-rest-client?u=76281980&t=304)** So that means everything works and we're ready to start working with the API inside our application.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), json (3), rest (2), http (1), url (1)
> **Code Keywords:** pass (4), this. (2), this, (1), interface (1)
> **UI Navigation:** go to (2), dropdown (2), scroll down (1)
> **Code Identifiers:** secretkey (4)
> **Tools:** postman (3)
> **Definitions:** is a  (2), is an  (1)
> **Versions:** 3.5 (1), 4.0 (1)
> **CLI Commands:** make (1)


### 5. 4. Using AI as a Human-to-Machine Translator

#### Create a location string from a prompt
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=0)** - [Instructor] All right, we now have all the pieces in place to start integrating the OpenAI API into our app.
>
> **[0:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=7)** As a refresher, the first thing I want to do is extend our app so that instead of just putting in location information in this input field, I'll be able to put in a question or a sentence and then the AI can derive from that sentence what location we're talking about and pass just the location string back.
>
> **[0:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=26)** You'll also remember I found a prompt that worked for this that looks like this, "Act like a location string generator based on my prompt," et cetera, et cetera, that provides an example.
>
> **[0:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=35)** And I figured out that if I take this prompt and I place it into the Playground under the system tag, I'll be able to generate the output every time I pass in a new message with a new request.
>
> **[0:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=48)** So now the question becomes, "How do I convert this setup into an API call in my REST client that I can then migrate over into my JavaScript application?"
>
> **[0:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=58)** So let's test that out fully.
>
> **[1:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=61)** I'll go in here and enter the question I had before.
>
> **[1:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=64)** "What's the weather like in Burnaby?"
>
> **[1:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=66)** It's a good baseline question to have.
>
> **[1:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=67)** You can replace Burnaby with whatever city you're in or whatever city you like to find out information about.
>
> **[1:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=74)** And then I'll click view code.
>
> **[1:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=76)** From here, again, I'll go and select JSON as my option.
>
> **[1:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=80)** And this gives me the full breakdown.
>
> **[1:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=81)** And if you look closely here, you'll see we have two messages.
>
> **[1:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=85)** We have a system message, that's what's over here, that's the act like section.
>
> **[1:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=90)** So that's the prompt that is added every time we send a request.
>
> **[1:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=93)** And then we have a user message and this is the prompt itself.
>
> **[1:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=98)** So as we set this up in the application, we can choose to pass on a system message with every prompt and then add on the prompt afterwards or we can just combine all of it together.
>
> **[1:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=107)** So for now, we'll try this approach here.
>
> **[1:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=110)** I'll copy this, go over to my REST client, and I'll replace what I had here before with this new request.
>
> **[1:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=118)** So I'll just highlight and paste it in.
>
> **[2:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=121)** So here we are now sending into ChatGPT three five turbo, a system message, "Act like location string generator," with our examples.
>
> **[2:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=128)** And then the question, "What is the weather like in Burnaby?"
>
> **[2:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=131)** And if this works correctly, we should get the response just Burnaby, BC, CA, right?
>
> **[2:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=138)** So I'll send this off to the completions endpoint and down here, if I scroll up a bit, you'll see the content output.
>
> **[2:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=145)** So under choices, first item, message and content, we have Burnaby BC, CA, which is exactly what I want.
>
> **[2:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=155)** Now comes the interesting question.
>
> **[2:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=156)** Does this actually work consistently?
>
> **[2:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=159)** So that means we have a good starting point for our application.
>
> **[2:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=162)** This prompt here will probably work for our needs and we can even experiment with doing something like taking all this stuff out and see if it still provides a proper answer.
>
> **[2:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=172)** So I'll send that off.
>
> **[2:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=174)** That will just give us the default output.
>
> **[2:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=177)** Still same thing, Burnaby, BC, CA, and everything else seems to be working fine.
>
> **[3:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=182)** Okay, so we have a prompt that seems to work the way we want it to.
>
> **[3:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-location-string-from-a-prompt?u=76281980&t=186)** That's a good first step.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), this, (2), let (1)
> **Env Vars:** api (2), rest (2), json (1)
> **CLI Commands:** find (1)
> **UI Navigation:** scroll up (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### The challenge of non-deterministic APIs
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=0)** - [Instructor] Now that things seem to be working and I got you all excited and ready to get your hands on code, I have to bring up a significant caveat.
>
> **[0:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=8)** Working with AI APIs is unlike working with any other kind of API for the simple reason that AIs are non-deterministic.
>
> **[0:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=20)** You don't really know what they're going to respond with.
>
> **[0:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=23)** The demo I showed you where I got it to respond with the correct string is a neat demo but I have experimented with this a lot and it's not consistent at all.
>
> **[0:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=36)** Sometimes it'll output the correct answer, other times it won't, and you don't know when that's going to happen.
>
> **[0:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=43)** And even worse, the AI won't tell you, hey, by the way, I'm not giving you the answer you expect, I'm giving you something entirely separate that is not the same.
>
> **[0:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=53)** What are you going to do about it?
>
> **[0:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=54)** And then in addition, you have the problem of working with human language input.
>
> **[0:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=59)** We can assume that the user is going to type in a question about a location, but there's no guarantee that the user is going to mention the location.
>
> **[1:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=68)** And there's also no guarantee that the AI will understand the reference to the location.
>
> **[1:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=72)** Let me show you what I mean.
>
> **[1:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=73)** If I go in here and I change my prompt from what is the weather like in Burnaby, which is very clear, a question about a location, to something really not a question about a location, like what is the square root of 57?
>
> **[1:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=90)** And send that off.
>
> **[1:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=92)** Let's see what we get.
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=94)** If we scroll down, it says, sorry, I'm not able to compute the square root of a number, I'm programmed to assist with text-based tasks, is there anything else I can help you with?
>
> **[1:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=103)** And if we send that question again, it'll get a different response.
>
> **[1:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=106)** I can't generate a location string from that question, and we send it again and we'll get a different response.
>
> **[1:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=112)** Sorry, I can't generate a location string from that prompt, is there any location related question or request?
>
> **[1:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=117)** Do you see what I mean?
>
> **[1:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=118)** It doesn't produce the same response every time.
>
> **[2:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=121)** In fact, it reproduces a different response every time.
>
> **[2:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=124)** And no matter how much you try to force it to output a specific response, there's always a chance it'll output something else, and the one thing it will never do is output an error.
>
> **[2:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=136)** All of these responses are correct in terms of the AI responded to your prompt.
>
> **[2:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=144)** The problem we have is that we're looking for deterministic responses, the same kind of response every time, and out of the box, this AI will not give you that, which is why this setup here is not sufficient for our needs.
>
> **[2:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=161)** We need a way to do two things.
>
> **[2:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=162)** First off, we need a way to force the AI to always output this format, London, Ontario, Canada, and nothing else if it's a location query.
>
> **[2:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=174)** And we need a way of detecting if this is any other type of query, so a question about math or cooking or travel or whatever else the user might type in to simply return us nothing so that our app doesn't get confused by the input because there's nothing worse for an app than having to parse a sentence like this as if it was a location string.
>
> **[3:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/the-challenge-of-non-deterministic-apis?u=76281980&t=197)** We'll look at a solution to this in the next movie.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), else, (1)
> **Env Vars:** api (1)
> **Cross-References:** in the next (1)
> **UI Navigation:** scroll down (1)
> **Definitions:** is a  (1)
> **Warnings:** caveat (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Function calling in the OpenAI API
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=0)** - [Instructor] The default mode of the open AI API is as a programmatic version of chat GPT, meaning you input a human language question in the form of a prompt and it outputs a human language response, which is neat and really great if you're building a chat application.
>
> **[0:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=15)** But not great if you're trying to use the AI to parse a human language question into some form of data you can use in an application for further processing.
>
> **[0:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=25)** For that, we need the system to be far more deterministic and we need to have control not only over the output so that it follows a specific format, but also to capture when the user is inputting questions that are out of scope so that the user isn't able to jailbreak our application and use it to answer questions that are out of scope for what we're trying to do.
>
> **[0:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=45)** The good news is we can do this.
>
> **[0:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=47)** We can program the API to capture specific types of prompts and pass the output into functions that then output specific formats that match our needs.
>
> **[0:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=59)** This is what's called function calling and it was released on June the 13th, which is why it's the model called Turbo 0613 or 0400613.
>
> **[1:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=72)** The code example down here explains how this works and is closely related to what we're doing.
>
> **[1:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=77)** And I just have to point this out because it looks like I've just taken this code and used it in my example.
>
> **[1:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=82)** I actually built out the entire course here using the weather app before this feature was released and then when the feature was released, I retrofitted it to also use this feature and it just happens to be that OpenAI chose to use weather as their explanation for how this works.
>
> **[1:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=102)** So, you know, I don't know, people just think the same way about data, I guess.
>
> **[1:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=107)** Anyway, when you look at this example, you'll see we start off with the same kind of query as we did before.
>
> **[1:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=113)** We have a user that passes in content.
>
> **[1:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=115)** This is the prompt and it says, "What's the weather like in Boston?"
>
> **[1:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=118)** And then we have this new section that says Functions.
>
> **[2:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=121)** This is an array because you can have multiple different functions that are defined within one prompt.
>
> **[2:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=127)** Each of the functions will have a name, in this case, "get current weather", and this name gets returned in the response and could then be used by your application so you can detect which function was called and then fire that function in your own application.
>
> **[2:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=140)** But it doesn't have to be, so you can just give it a name that identifies which function was used.
>
> **[2:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=145)** The important part here is the description field.
>
> **[2:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=147)** This description field is effectively the system message that identifies when the function should be used.
>
> **[2:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=155)** So in this case it says, get the current weather in a given location, meaning the AI will say, "Anytime a question comes in that sounds like it's looking "for the weather at a given location, "then I'm going to respond using this function "instead of responding, using a human language output."
>
> **[2:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=172)** And that response will match whatever parameters are defined in the next section.
>
> **[2:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=177)** So here in this example, the parameters define the output as an object with the following properties: location, which is described as the city and state, like San Francisco, CA, and then a unit, which should be either Celsius or Fahrenheit.
>
> **[3:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=193)** And you can even define what fields are required.
>
> **[3:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=196)** So in this case, the location property must always be output.
>
> **[3:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=200)** The unit property can be output if the system wants to.
>
> **[3:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=204)** So what happens now is as the user uses the application, anytime they ask about the weather at a location, the function here kicks in and the output will be these parameters.
>
> **[3:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=215)** But if the user asks about anything else, they will get a language output.
>
> **[3:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/function-calling-in-the-openai-api?u=76281980&t=219)** And these are separate in the output, meaning it's easy for you as a programmer to capture when a function is used and when a regular output is used.

> [!info]- Semantic Content
>
> **Code Keywords:** function (8), case, (2), this. (1), pass (1), else, (1)
> **Env Vars:** api (2), gpt (1)
> **Cross-References:** in the next (1)
> **Definitions:** is an  (1)
> **Speakers:** - [instructor] (1)

#### Create a custom function call for the OpenAI API
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=0)** - [Instructor] Here's an example of how we can reconfigure our call to the OpenAI API and to use functions.
>
> **[0:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=6)** This is the same example as what I had before except I've stripped out some pieces and put in something else in place.
>
> **[0:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=12)** First off, we're calling the 0613 version 3.5 because that's the one that has function calling built in.
>
> **[0:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=19)** Next, I've removed the system message 'cause we no longer need it, but I've retained the regular prompt.
>
> **[0:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=25)** So should I wear sunscreen today in Burnaby, which is still a question about the weather, but it's more vague as to whether or not it's the weather.
>
> **[0:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=33)** I'm not explicitly saying what is the weather like in Burnaby.
>
> **[0:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=37)** Scrolling down, I've now set up a functions array with one entry.
>
> **[0:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=41)** There's an object here with a name, location data.
>
> **[0:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=43)** So that would be the function name.
>
> **[0:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=45)** And the description is get the current weather at a given location.
>
> **[0:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=48)** So this is now the system message for this particular function.
>
> **[0:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=52)** And when that system message is triggered, the function is used to create the output.
>
> **[0:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=57)** The output should have the following parameters.
>
> **[1:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=60)** It should be an object that has three properties.
>
> **[1:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=63)** The first one being country code.
>
> **[1:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=65)** It is a country code, use ISO 3166, which means it'll always be two letters.
>
> **[1:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=71)** The second property is state, is a two-letter state code, and the third property is city.
>
> **[1:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=77)** And the description here is just the city name.
>
> **[1:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=79)** Then at the bottom we have a required array that says every time, I want the country code, the state, and the city. No exceptions.
>
> **[1:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=88)** Okay, let's run this and see what happens.
>
> **[1:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=90)** So I'll click Send. Pull this up.
>
> **[1:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=94)** And if the system recognized that my prompt was a question about the weather at a certain location, this is what happens.
>
> **[1:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=101)** First, in content, where we normally get that long human language response, we instead get null, meaning the function kicked in, and we no longer get a human language response, which is very useful for us when we're programming things.
>
> **[1:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=117)** Secondly, under function call, it now identifies which function was called, in this case, location data.
>
> **[2:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=123)** So in your application, you could look for this and then say, oh, location data?
>
> **[2:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=127)** Okay, I'm going to use location data as my function now.
>
> **[2:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=130)** And secondly, we get the arguments in the form of an object 'cause that's what I specified above that has these properties, country code, CA, state, BC, city, Burnaby.
>
> **[2:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=141)** And the cool thing is this will now be consistent all the time.
>
> **[2:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=146)** Anytime someone asks about the weather at a location, the response you get will always be formatted this way as an object with country code, state, and city.
>
> **[2:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=155)** And that means as a programmer, you can now just capture that object, parse it out, and use the information within it.
>
> **[2:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=161)** And you don't have to worry about the system suddenly providing some other kind of data or missing one of the features or something like that.
>
> **[2:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=170)** And it gets even neater because if I now go in, and I ask question that is not related to weather, let's say, give me a good recipe for cupcake, and send that off, what will happen is the system will register, oh, this is not a question about the weather.
>
> **[3:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=190)** So therefore, instead of having a function response, you get choices with content.
>
> **[3:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=195)** And here, sure, here's a classic recipe for vanilla cupcakes and it has a huge thing and no mention of functions at all.
>
> **[3:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=202)** Which means on your end, in the application, you can simply set the application up to say only look for function responses.
>
> **[3:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=210)** And then output the function responses.
>
> **[3:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=212)** So if one of these large text responses comes out, it comes in a different field, and you can simply ignore it.
>
> **[3:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=219)** And that way the user can't jailbreak your application because they will never have access to this information at all.
>
> **[3:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-custom-function-call-for-the-openai-api?u=76281980&t=226)** They will only ever get access to the objects that are output if the user puts in a question about the weather at a specific location.

> [!info]- Semantic Content
>
> **Code Keywords:** function (11), let (2), case, (1)
> **Env Vars:** api (1), iso (1)
> **Definitions:** is a  (2)
> **Versions:** version 3 (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)


### 6. 5. Integrating AI into the Weather App

#### Sequence API calls in an app
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=0)** - [Instructor] Now it's finally time to incorporate the AI API into our app.
>
> **[0:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=4)** We'll do this across several movies because there are a lot of moving parts and we need them to work together.
>
> **[0:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=9)** To start, we'll extend the existing API calling pattern in the app with our new call to the OpenAI API.
>
> **[0:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=16)** This call will be to transform the user question or prompt into a location string.
>
> **[0:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=21)** So this will be the very first API called app makes and everything else depends on that API call being successful.
>
> **[0:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=30)** All the API calls are handled by this file here called Use API requests which is found under source and components.
>
> **[0:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=38)** I already walked through this file once earlier in the course, but I think it's a good time to do a refresh of exactly what is happening here.
>
> **[0:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=46)** Use API request, receives the prompt.
>
> **[0:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=49)** Then it uses use effect to trigger any time a prompt is passed in and sets up an async sequence.
>
> **[0:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=56)** Meaning we can say do this, then do that then do the other thing.
>
> **[1:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=61)** That async sequence is down here.
>
> **[1:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=64)** So we try to see if we can get the location data, by saying await location two coordinates and pass in the prompt.
>
> **[1:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=72)** So this is the component that makes the API call by passing in the prompt, making the API call and then returns data if there is any data or returns an error if there is no data.
>
> **[1:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=84)** And that information gets contained inside location data res.
>
> **[1:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=88)** Then we set the location data, which is state up here to location data res so that we have it stored.
>
> **[1:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=98)** Once this is done, we can then grab the location data result.
>
> **[1:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=102)** And go await weather data and pass in the location data result.
>
> **[1:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=106)** Location data result contains the longitude and latitude information that we need to get the weather data.
>
> **[1:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=113)** Once this API call finishes, it passes back either the weather data or an error, and that is then placed inside weather data result.
>
> **[2:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=121)** And we set the weather data state, which is also defined up here.
>
> **[2:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=127)** If at any point anything goes wrong during this try sequence, so either location two coordinates or weather data do not return what they're supposed to, they will throw an error and that error is caught down here.
>
> **[2:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=139)** And then we set the error state.
>
> **[2:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=141)** Finally whether the calls are successful or not, we return error, location data and weather.
>
> **[2:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=148)** And these are these states that are defined up here.
>
> **[2:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=151)** So as we extend this API call sequence, what we do is create a new state for the new call.
>
> **[2:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=159)** Then we go into the try sequence and add in the new components for the new API calls in whatever sequence we want.
>
> **[2:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=166)** So in this case, we want to add a new call to the OpenAI API to transform a long question into the location.
>
> **[2:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=174)** So we'll place that at the top here before the location to coordinates call.
>
> **[2:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/sequence-api-calls-in-an-app?u=76281980&t=179)** And we'll do that in the next movie.

> [!info]- Semantic Content
>
> **Env Vars:** api (14)
> **Code Keywords:** async (2), await (2), pass (2), this, (1), throw (1)
> **Cross-References:** earlier in (1), in the next (1)
> **Speakers:** - [instructor] (1)

#### Create a fetch request to the OpenAI API
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=0)** - [Instructor] Calling the OpenAI API starts here in useApiRequests, and here, I'll add to the existing pattern.
>
> **[0:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=8)** So we already have these state monitors that we've set up.
>
> **[0:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=11)** I'm going to add a new one: const for promptData comma setPromptData equals useState.
>
> **[0:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=24)** And I know that eventually this will become an object.
>
> **[0:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=27)** I'm just going to set it as an object right now.
>
> **[0:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=30)** This is where we'll capture any data that comes from a request to the OpenAI API.
>
> **[0:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=35)** Next, I need to call the OpenAI API using an existing component.
>
> **[0:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=40)** And in between the previous movie and this one, I've taken a page out of the TV Chef Cookbook and prepared the basic pieces for that in a new file called PromptToLocation.
>
> **[0:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=51)** It just contains a component called PromptToLocation that we'll go through in a second, but that's what I want to use.
>
> **[0:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=58)** So here, in the try section of our async calls, I'll say const promptDataRes, that's the prompt data result, and then I'll match the pattern below, await PromptToLocation.
>
> **[1:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=76)** And when I do this, VS Code is smart enough to figure out, "Oh, you want to use it?"
>
> **[1:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=80)** So it added PromptToLocation up here as a dependency.
>
> **[1:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=84)** And I'll pass in prompt to PromptToLocation.
>
> **[1:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=88)** And then I'll set the promptData to the value that's defined here, so setPromptData to promptDataRes.
>
> **[1:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=102)** Okay, save that.
>
> **[1:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=105)** And what we're doing now is grabbing the prompt and sending it over to PromptToLocation.
>
> **[1:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=110)** PromptToLocation is a standard React component that returns a promise.
>
> **[1:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=115)** The way that happens is we set up PromptToLocation here that receives prompt, then we return a fetch request.
>
> **[2:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=122)** That way, if the fetch request has a proper result, then we return the result, otherwise we can catch an error and say the promise was rejected for whatever reason and then pass in that rejection.
>
> **[2:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=134)** A fetch request receives two values, a url to fetch and parameters, so that's all the other information, and we'll fill that out in a second.
>
> **[2:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=143)** What I'm doing here right now is grabbing the response from the fetch request and then just confirming it to JSON and then saying get whatever data is returned and console.log it out so we can see what we're getting from the API without doing anything to it.
>
> **[2:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=158)** You'll also notice here that I'm still using the prompt in LocationToCoordinates.
>
> **[2:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=162)** That will likely mean as we put in information in the form that things will start breaking, but that's fine for now 'cause we're just testing to make sure we're able to reach the OpenAI API and get information out of it.
>
> **[2:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=173)** Finally, down here, we're catching an error, and this is really important because if something goes wrong, we need to know what went wrong and pass that error back into the system.
>
> **[3:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=183)** We're catching any errors and then console.logging out the error and also returning a Promise.reject to the system saying, "Hey, I tried to do it, it didn't work.
>
> **[3:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=192)** Here's the reason why."
>
> **[3:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=193)** And this Promise.reject will then be received over here in useApiRequests and pass up into the error variable in the state so that we can export that out and see what went wrong.
>
> **[3:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=206)** All right, this currently will not work because we have yet to enter the url and the parameters, so that's what we'll do now.
>
> **[3:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=214)** I'll go into PromptToLocation and set up a new const called url.
>
> **[3:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=218)** And the url we're looking for is this one here: api.[openai.com/v1/chat/completions](https://openai.com/v1/chat/completions).
>
> **[3:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=226)** This is the completions endpoint we're going to be calling.
>
> **[3:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=230)** So I'll paste that in here, and that's it for the url.
>
> **[3:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=232)** Next, we need to set up the parameters, and this is where we pass in our authorization header and our requests to the API and every piece of configuration that we want to pass on.
>
> **[4:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=243)** I'll say const params equals, and here we pass in an object.
>
> **[4:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=248)** That object contains headers, and in this case that is an authorization header.
>
> **[4:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=256)** The OpenAI API takes a Bearer token, so I'll say Bearer.
>
> **[4:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=261)** And here we already have that Bearer token saved in env.local.
>
> **[4:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=266)** It sits here under the name VITE_OPENAI.
>
> **[4:29](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=269)** And the way we call in that environmental variable in VITE is by doing the following.
>
> **[4:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=276)** We'll say import.meta.env.
>
> **[4:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=281)** and then the name, so VITE_OPENAI.
>
> **[4:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=286)** We also need to define what content type this authorization has, so I'll say Content-Type: application/json.
>
> **[5:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=302)** And then we need to pass in the body, and that is this request here, so the model, the messages, any other information that we're passing directly to the OpenAI API.
>
> **[5:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=312)** I'll say body and JSON.stringify, and here I'll put in the actual text, but I'm not going to do it inside these params.
>
> **[5:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=319)** Instead, I'll break it out into a separate data object so that it's easier to see what's going on.
>
> **[5:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=324)** And finally, we need to define our request method, and that is post, so I'll say method: post.
>
> **[5:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=333)** So we are sending a post request with this authorization header as a Bearer token with this data to this url.
>
> **[5:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=342)** Right, final step is to create the data.
>
> **[5:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=345)** So I'll go up here, const data equals, again, an object.
>
> **[5:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=352)** And here we'll make it simple.
>
> **[5:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=353)** We'll just say model, and that would be gpt-3.5-turbo-0613.
>
> **[6:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=364)** And then messages, that's what we're sending in the prompt.
>
> **[6:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=369)** This is an array, and then inside there's an object.
>
> **[6:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=373)** Let me say role: user and the content.
>
> **[6:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=377)** So the message is prompt as the prompt we're passing in.
>
> **[6:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=382)** All right, let's test this and see if it works.
>
> **[6:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=385)** I'll open my terminal, npm run dev.
>
> **[6:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=391)** Then open the side in my browser and pass in a question like what is the weather like in Burnaby?
>
> **[6:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=397)** Click Submit, and now we'll get an error down here because this isn't a location string which is what the OpenWeatherMap API is looking for.
>
> **[6:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=404)** But if we open the console, you'll see here we have an object.
>
> **[6:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=408)** And inside that object, we have choices.
>
> **[6:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=410)** And inside choices, we have the first choice, and here we have the message: I'm sorry, I can't provide real-time weather information.
>
> **[6:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/create-a-fetch-request-to-the-openai-api?u=76281980&t=418)** So this means that we are now talking directly to the OpenAI API and everything is working as expected.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (9), const (5), finally, (2), let (2), async (1)
> **Env Vars:** api (10), json (2), vite_openai (2), vite (1)
> **Code Identifiers:** useapirequests (2), promptdata (2), setpromptdata (2), promptdatares (2), usestate (1)
> **Definitions:** is an  (2), is a  (1), means that (1)
> **Prerequisites:** set up (4)
> **CLI Commands:** make (2), npm (1)
> **Tools:** vs code (1), terminal (1)
> **UI Navigation:** open the (2)

#### Add a function call to the request
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=0)** - [Instructor] Now that we know our call to the OpenAI API works, we can refine our requests so we get exactly the information we want, structured exactly the way we want.
>
> **[0:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=9)** And for that we'll use function calling.
>
> **[0:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=12)** You'll remember from the previous chapter, we can call in whatever functions we want and they automatically kick in.
>
> **[0:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=18)** So I'm going to use this same setup here but since this is formatted in JSON, I can't simply copy and paste it in.
>
> **[0:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=24)** So instead I'll just write it out from scratch so you can follow along.
>
> **[0:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=28)** The function calls happen after the messages property.
>
> **[0:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=31)** So in data here I'll set up functions.
>
> **[0:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=37)** This will be an array of functions.
>
> **[0:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=39)** And before I fill functions out, I'll also add this parameter, function_call and set it to auto.
>
> **[0:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=47)** This is just to tell the OpenAI API that, hey, if functions are called, you can choose to use them or not.
>
> **[0:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=54)** You can change this to a different property if you want to.
>
> **[0:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=56)** Alright, let's build out the actual functions here.
>
> **[1:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=60)** Each of the functions inside the functions array is an object.
>
> **[1:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=64)** So I'll set up a new object, give it the name, I'll call this one displayData.
>
> **[1:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=69)** The name in my case doesn't really matter because I only have one function and I'm not going to use the function name.
>
> **[1:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=74)** But if you had multiple functions and you want to catch which function is being used, you can do that by giving it a specific name.
>
> **[1:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=81)** Then we set up the description.
>
> **[1:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=84)** You'll remember this is the assistant prompt that helps the OpenAI API figure out whether the function should be called or not.
>
> **[1:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=91)** So I'll just say, "Get the current weather in a given location."
>
> **[1:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=98)** Then we need some parameters.
>
> **[1:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=100)** So this is what the system will output for me.
>
> **[1:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=103)** And in these parameters I'll say I want the output to be an object and I want the properties and I want the properties of that object to be a list of specified properties.
>
> **[1:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=118)** Now, in the previous example, I set them up to be country code, state and city.
>
> **[2:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=123)** And technically speaking these are all the properties I need.
>
> **[2:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=127)** But since we're already leaning on the OpenAI API to convert this into meaningful human language, I might as well add additional properties in here in case I need them.
>
> **[2:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=140)** For example, you may have remembered that when you run the app currently, it doesn't spell out the country name, it just spells out the two letter country code.
>
> **[2:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=148)** So I want the full country name instead.
>
> **[2:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=152)** Now before I add in the properties, I'm also going to add in the required array.
>
> **[2:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=157)** That's just because I tend to forget it and then things happen that shouldn't happen.
>
> **[2:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=161)** Okay, now we have the properties and here I've already built out my properties.
>
> **[2:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=165)** So you don't have to watch me type out a bunch of stuff 'cause it's all the same.
>
> **[2:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=169)** So I'll copy it from my notes and paste it in here and then we can take a look.
>
> **[2:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=174)** So the properties I want are country which is the full spelled out country name.
>
> **[2:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=179)** Then the country code, which is that two letter country code.
>
> **[3:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=182)** The US state, so the full state name, then the state, two letter country code, the city, the full name, and finally the unit.
>
> **[3:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=190)** And this allows the OpenAI API to figure out for this country, this is the unit normally used, either metric or imperial.
>
> **[3:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=198)** And in my testing this is about like 90 to 95% accurate which is great for the app.
>
> **[3:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=204)** And if it's not accurate, the app also has that button.
>
> **[3:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=206)** So you can change the unit if you want to.
>
> **[3:29](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=209)** Now that we have all of these different properties defined, I want to ensure that the system outputs all the properties every time.
>
> **[3:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=217)** So in the required array, I'll just list out all of those properties.
>
> **[3:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=221)** If you don't list them out, there's a good chance that OpenAI will ignore them.
>
> **[3:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=225)** In fact, in my testing, if you don't list the properties in the required field, it simply won't output them.
>
> **[3:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=232)** It'll just output the very first one or the most obvious one and leave everyone else.
>
> **[3:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=236)** So if you have a list of properties you want, make sure you also put them in the required array.
>
> **[4:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=241)** Alright, let's save that.
>
> **[4:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=243)** Jump back to the browser where the app is already running and I'll put in the same request as we had before.
>
> **[4:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=248)** "What's the weather like in Burnaby?"
>
> **[4:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=250)** Run the request and now we should get a different kind of data response.
>
> **[4:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=255)** So let's take a look here.
>
> **[4:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=259)** Here we have under choices, It now says finish_reason function_call meaning we got a function_call.
>
> **[4:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=267)** Then if we open that under message, we now have the function_call message.
>
> **[4:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=271)** And here we have the arguments.
>
> **[4:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=273)** Country, nothing, country code, nothing, US state, nothing, state, nothing.
>
> **[4:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=279)** The only thing it has is city Burnaby, which is not great but I mean, it does work.
>
> **[4:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=285)** So that means there's something else weird going on here.
>
> **[4:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=289)** Let's see, what if I say like in Burnaby British Columbia,
>
> **[4:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=299)** let's see what's returned here.
>
> **[5:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=302)** I have to go down and look at my next entry.
>
> **[5:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=306)** Choices, function_call, message.
>
> **[5:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=311)** Okay, so now we get country, Canada, Country code, CA, BC, Burnaby, and metric.
>
> **[5:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=317)** So it's not perfect by any means but this brings us a lot closer to what we need.
>
> **[5:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=323)** Now we need to do some more testing to make sure it actually outputs consistent data.
>
> **[5:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=327)** But what you'll notice is even when it doesn't output the values, it still outputs the properties.
>
> **[5:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=332)** Meaning we have to do some sort of error testing on our end to make sure that we actually have values in those properties and not just properties.
>
> **[5:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=340)** But overall, this is now working.
>
> **[5:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/add-a-function-call-to-the-request?u=76281980&t=342)** We have structured data coming out of the OpenAI API and we can now work with that structured data.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (5), else. (1)
> **Code Identifiers:** function_call (5), displaydata (1), finish_reason (1)
> **Env Vars:** api (6), json (1)
> **Prerequisites:** set up (3), setup (1)
> **CLI Commands:** make (3)
> **Cross-References:** previous chapter (1)
> **Definitions:** is an  (1)
> **Analogies:** for example (1)

#### Parse the response
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=0)** - [Instructor] Thanks to the function call the OpenAI API is now returning the data we want to us, but it's returning it as a string.
>
> **[0:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=7)** Now that makes sense from the OpenAI point of view, they don't want to return random objects that may be malformed, but it means that we have to receive that string and then convert it into a JavaScript object.
>
> **[0:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=19)** And while we're doing that, we might as well do things with it so that we can conform the data to fit with our needs.
>
> **[0:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=25)** Back in PromptToLocation, I'll go down past my function call and all the way down into the fetch sequence.
>
> **[0:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=33)** So right now we're just console logging out the data.
>
> **[0:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=37)** What we can do instead is grab that data and then tunnel into it to get only the data we want.
>
> **[0:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=43)** Looking over here, that means we have to go into the data then go into the choices Array, pick the first item, then go into message, then go into function call, and then go into arguments.
>
> **[0:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=53)** Okay, so instead of saying console log data here, I'm going to say, const and then promptRes.
>
> **[1:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=63)** So the prompt result equals JSON parse.
>
> **[1:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=67)** So I'll turn my string into JSON, and what I want to parse is data.choices.
>
> **[1:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=74)** And I want the first item, so that would be index zero, .message.function call.arguments.
>
> **[1:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=87)** And then just to make sure I'm getting what I'm looking for here, and it's actually converted, I'll console log out to promptRes instead.
>
> **[1:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=97)** Okay, let's run that in the browser to make sure everything is still working.
>
> **[1:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=100)** So I'll pick my query as before and submit it.
>
> **[1:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=104)** And now we should see a different kind of response here.
>
> **[1:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=106)** So here we get an actual object, and you can see it broken down.
>
> **[1:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=109)** US state is nothing 'cause this isn't the US.
>
> **[1:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=111)** City, Burnaby, country, Canada, country code, CA, state, nothing and unit, metric.
>
> **[1:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=117)** Cool. That's what I want.
>
> **[1:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=119)** Now I can take this data and use it to create that location string.
>
> **[2:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=123)** So after console log here, I'll say const location string.
>
> **[2:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=130)** And I'll set that equal to an arrow function so that we actually trigger it.
>
> **[2:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=135)** And then I'll say if promptRes.countryCode
>
> **[2:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=145)** is triple equals US then return.
>
> **[2:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=152)** And here I'll use template literal to say promptRes.city comma promptRes.state.
>
> **[2:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=168)** So remember that's the two letter state name.
>
> **[2:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=171)** And then finally promptRes country.
>
> **[2:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=177)** So that's a two letter country code.
>
> **[2:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=179)** I'll copy that out and say else.
>
> **[3:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=184)** And then return this except I'll take out the state component here.
>
> **[3:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=190)** And then down here I'll say console log, locationString.
>
> **[3:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=201)** Okay, save that. Back in the browser and reload.
>
> **[3:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=206)** Put in the same query again.
>
> **[3:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=210)** And now we get Burnaby, Canada. Okay, cool.
>
> **[3:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=213)** So what if I say, what's the weather like in Lisbon?
>
> **[3:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=222)** Okay, Lisbon, Portugal.
>
> **[3:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=224)** Okay, what about Philadelphia?
>
> **[3:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=230)** Here we go. Philadelphia, PA, United States.
>
> **[3:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=233)** Okay, that works.
>
> **[3:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/parse-the-response?u=76281980&t=234)** And that means I now have the location string I need to send off the query to the open weather map API.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), const (2), let (1), return. (1), else. (1)
> **Code Identifiers:** promptres (6), countrycode (1), locationstring (1)
> **Env Vars:** api (2), json (2)
> **CLI Commands:** make (2)
> **Exercise Files:** template (1)
> **Definitions:** means that (1)
> **Speakers:** - [instructor] (1)

#### Pass the response to the weather data request
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=0)** - [Instructor] All right, at this point, the OpenAI API is able to turn the user question into location data and then we can turn that location data into the correctly formatted location string.
>
> **[0:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=12)** The next step is to pass that location string onto use API request here so that when we request the coordinates for a location, we're passing in that string.
>
> **[0:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=22)** To do that, I'll set up a new constant with an object inside it and in that object, I'll have the location string and I'll also have any other information I think might be pertinent 'cause you'll remember we got a bunch of information from the OpenAI API, not just the location data.
>
> **[0:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=37)** So, I'll set up a new constant here, call it promptData, and I'll set it equal to an object, and then inside that object I'll set up locationString, and I'll set that to the locationString function we just created.
>
> **[0:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=53)** Then I'll say units, and I'll set that to promptRes units that would be metric or imperial, I'll say country.
>
> **[1:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=64)** And this will be the country name.
>
> **[1:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=65)** So promptRes.country that gives me the country name.
>
> **[1:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=70)** And finally, USstate promptRes USstate.
>
> **[1:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=81)** Then instead of console logging out this information, I'll return prompt data.
>
> **[1:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=85)** So I'll say return promptData.
>
> **[1:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=92)** That means promptDataRes here in useApirequests now contains that object and we can pass that object up to the prompt data state, here, using setPromptData.
>
> **[1:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=104)** This is also why I set useState to be an object here because I knew we were eventually going to pass an object back in.
>
> **[1:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=111)** Alright, that means we now have the correct data here in useApirequests and we can use it down here to call location two coordinates.
>
> **[1:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=119)** So instead of calling prompt, I'm going to call promptDataRes.
>
> **[2:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=125)** That's the returned data up here.
>
> **[2:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=128)** And inside promptDataRes, I'm going to call location string.
>
> **[2:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=132)** Save that, go back to the browser and reload.
>
> **[2:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=136)** Put in the same request as before.
>
> **[2:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=138)** And here I'll scroll down so you can see.
>
> **[2:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=140)** Click submit.
>
> **[2:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=143)** And now we get Burnaby, CA.
>
> **[2:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=145)** That means the OpenAI API is now converting the question into a location string and we're using that location string to pinging the OpenWeatherMap API that then returns the location.
>
> **[2:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=156)** The location is used by the OpenWeatherMap API to get the weather, and we get a weather display.
>
> **[2:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=162)** So now the API calling sequence is working as intended, and we have a whole new user experience where you no longer have to specify a location using a specific location string.
>
> **[2:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/pass-the-response-to-the-weather-data-request?u=76281980&t=172)** Instead, you can just type in a question and get the weather in return.

> [!info]- Semantic Content
>
> **Code Identifiers:** promptres (3), promptdatares (3), promptdata (2), locationstring (2), useapirequests (2)
> **Env Vars:** api (7)
> **Code Keywords:** pass (3), function (1), finally, (1), return. (1)
> **Prerequisites:** set up (3)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Update the weather data display
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=0)** - [Instructor] With the AI integration working, we can now shift our focus to a better user experience.
>
> **[0:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=5)** You'll notice that when I ask for Toronto I get downtown Toronto comma CA.
>
> **[0:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=12)** Now I know that CA in this case means Canada, but if you thought you were searching for a city in the United States that's also called Toronto, you may think this means Toronto, California.
>
> **[0:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=24)** So ideally, I want to display the name of the country, not just the country code.
>
> **[0:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=30)** Also, if I do a search for a US city, like San Francisco,
>
> **[0:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=39)** I get the information, but it's in Celsius, metric system.
>
> **[0:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=43)** I want this display to automatically shift over to imperial when we're looking at a country that uses the imperial system.
>
> **[0:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=51)** The good news is we have the data to do this.
>
> **[0:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=54)** We got all that data from the Open AI API.
>
> **[0:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=57)** You'll remember in the prompt data object we have the location string.
>
> **[1:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=61)** We also have the units and the country and we can use this information to display on the front end.
>
> **[1:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=67)** To do that, we first need to find out where that information is being displayed and it's here in a weather card.
>
> **[1:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=72)** I'm not going to go through the weather card component.
>
> **[1:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=74)** You can do that on your own.
>
> **[1:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=75)** It sits right here in the file structure.
>
> **[1:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=77)** It's a standard react component that just consumes a bunch of data and then outputs it.
>
> **[1:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=82)** There's also some fancy math going on because there's temperature conversions and wind direction and stuff like that.
>
> **[1:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=87)** You can go take a look on your own time.
>
> **[1:29](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=89)** But for our purposes what's important is the data we're passing in.
>
> **[1:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=93)** So here we have a bunch of things, including units and the country.
>
> **[1:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=98)** So what I want to do is grab the units from here and pass them over here, and the same with country.
>
> **[1:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=106)** To do that, I first need to get the data.
>
> **[1:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=109)** Now, in use API requests you'll remember we send off a request to prompt to location and the data gets returned into prompt data res.
>
> **[1:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=118)** Then we use set prompt data to pass this data up into the state variable up here.
>
> **[2:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=124)** So we can now pass this state variable, prompt data, over to App JSX, and that will contain all the information.
>
> **[2:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=132)** That's done down here at the bottom of the component.
>
> **[2:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=134)** We're returning error, location data and weather data.
>
> **[2:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=138)** So I'll just paste in prompt data as well and then go over to App JSX to where we are calling this hook, error, location data, weather data.
>
> **[2:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=147)** So I'll paste in prompt data as well.
>
> **[2:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=150)** So now we have the data available to us in this component.
>
> **[2:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=154)** That means I can use it.
>
> **[2:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=156)** So I can now go down here to where we had location data and say prompt data country instead.
>
> **[2:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=163)** Save this, jump over to the browser and reload the page a couple of times just for good measure.
>
> **[2:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=169)** And then type in Toronto.
>
> **[2:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=175)** Now we get downtown Toronto, Canada.
>
> **[2:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=178)** Far clearer.
>
> **[2:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=179)** Okay, let's see what we can do with the units.
>
> **[3:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=182)** This one is a little bit different because the units may change depending on the user's preference.
>
> **[3:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=187)** So the user may click on the change unit button to change the units.
>
> **[3:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=192)** So therefore the units have their own state and that state is held up here, units and set units.
>
> **[3:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=199)** And you'll notice down in the call to weather card that I'm passing both units and set units, because like I said, the user may change this.
>
> **[3:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=208)** So we need to somehow pick up on the unit any time the prompt is being used to see what is the new unit now that we got a prompt.
>
> **[3:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=219)** So here's what we'll do.
>
> **[3:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=221)** Go up into this series of use effects here and we can place it anywhere.
>
> **[3:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=225)** So I'll just place it after this one.
>
> **[3:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=227)** And I'll say use effect.
>
> **[3:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=230)** So detect when something happens.
>
> **[3:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=237)** And the effect I'm listening for is prompt data.
>
> **[4:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=240)** That means anytime prompt data updates then I want to check if prompt data and prompt data units.
>
> **[4:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=255)** So we actually have units.
>
> **[4:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=256)** Then set units to prompt data units.
>
> **[4:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=265)** What we're saying now is every time prompt data is updated up here in the hook, we go and check do we have new units?
>
> **[4:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=272)** If so, change the units state and then both the unit from the unit state and the state itself is passed over to the component.
>
> **[4:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=281)** So now if I go back into the app and type in a US location, like New Orleans, the unit changes to imperial.
>
> **[4:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=293)** Then if I change this to something else, like Oslo, the unit changes to metric.
>
> **[5:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/update-the-weather-data-display?u=76281980&t=301)** So now we're seeing what country it is and we get the appropriate units for whatever country we're looking at.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), this. (2), this, (1), let (1), else, (1)
> **Env Vars:** api (2), jsx (2)
> **CLI Commands:** find (1)
> **UI Navigation:** click on (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)


### 7. 6. Creating Rich AI Outputs

#### Prompt engineering for developers
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=0)** - [Instructor] I find that the best use of AI is when we start thinking about how AI can add to an experience to improve the user experience in some way.
>
> **[0:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=10)** Now, we've already seen that happen so far in the course by changing the input modality for this weather app so that you can actually ask a question and the system figures out the location based on that question.
>
> **[0:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=22)** But we can take that one step farther and grab both the question and the weather data that comes from OpenWeatherMap and combine it into a textual description of the weather.
>
> **[0:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=33)** So rather than just providing the temperature and the wind direction, we can get the system through the AI to actually say something meaningful about the weather and describe it.
>
> **[0:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=42)** So if I ask, should I wear a jacket today in Burnaby, it not only tells me what temperature it is, but it also tells me whether I should actually wear a jacket and it describes the weather.
>
> **[0:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=56)** To do this, we need to do a little bit of prompt engineering, because we now want to pass on instructions to the AI and then we also want to pass on some information that's gathered from both the prompt and from the OpenWeatherMap API.
>
> **[1:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=71)** So here's a setup that I like to use, where I first have a system message that describes exactly what I want the system to do, in this case, in a conversational professional tone answer the question based on the weather data and then I list off exactly how I want it to answer that question.
>
> **[1:29](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=89)** Provide an opinion about what the weather feels like, provide temperature in either the Celsius or Fahrenheit, whichever's appropriate.
>
> **[1:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=95)** Never display the temperature in Kelvin because the temperature is provided in Kelvin, as you can see here.
>
> **[1:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=100)** Provide a recommendation about how to prepare and what to wear.
>
> **[1:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=103)** For example, bring an umbrella, wear a windbreaker, a warm jacket, et cetera.
>
> **[1:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=109)** By passing this in as the system message, we're ensuring that these instructions are always given to the AI, no matter what happens.
>
> **[1:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=117)** And then as we work through the app, we can then just pass in a question formatted like this, question colon, and this would be the prompt.
>
> **[2:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=126)** And then the weather data that's returned to us from OpenWeatherMap.
>
> **[2:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=131)** This setup just makes developing a lot easier, because we have this predefined system prompt, then we have the actual prompt where we're passing in variables and then we can control the rest of the behavior.
>
> **[2:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=142)** The other thing worth pointing out is as you're experimenting with this kind of approach, it's a good idea to use the open AI playground, because here you can experiment with different models.
>
> **[2:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=151)** You can change the temperature, so basically the creativity of the AI.
>
> **[2:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=156)** You can set the length of the output and so on and really get the system to do exactly what it is you want.
>
> **[2:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=163)** One thing worth noting is when I do this kind of setup, sometimes it's better to actually provide a step-by-step process.
>
> **[2:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=172)** So step one, step two, step three in a numbered list.
>
> **[2:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=175)** Other times it's worth adding an actual example below.
>
> **[2:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=179)** So this is my input.
>
> **[3:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=180)** This is the kind of output I expect.
>
> **[3:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=182)** But for this particular circumstance where we're putting in a bunch of weather data and we have a simple question about the weather, this setup here suffices.
>
> **[3:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=192)** Let me show you.
>
> **[3:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=192)** I can click submit here.
>
> **[3:14](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=194)** We wait a little bit and here we get the response.
>
> **[3:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=196)** And you can see, the response from GPT 4 is fairly sophisticated.
>
> **[3:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=201)** It figures out where the weather is.
>
> **[3:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=203)** Then it describes the weather in a reasonable way.
>
> **[3:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=206)** It says that it's 25 degrees Celsius.
>
> **[3:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=208)** It's relatively warm.
>
> **[3:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=210)** The humidity isn't unbearable at 64%.
>
> **[3:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=214)** In terms of clothing, I recommend you dress for a warm day.
>
> **[3:36](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=216)** You see how this kind of output is way more informative than simply saying, this is the temperature.
>
> **[3:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=223)** So I now want to incorporate this kind of answer in my weather app, and I want to place it somewhere here.
>
> **[3:50](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=230)** So when we submit a question, we not only get the weather data, but we also get this description below.
>
> **[3:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/prompt-engineering-for-developers?u=76281980&t=236)** So that's what we'll do in this chapter.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (3), this, (2), case, (1), let (1)
> **Prerequisites:** setup (4)
> **Env Vars:** api (1), gpt (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Advanced calls to the OpenAI API
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=0)** - [Instructor] To get our human language description of the weather data, we need to add in a new call to the OpenAI API in our sequence of calls, and that happens in useApiRequests.jsx.
>
> **[0:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=12)** Here we already have a model for what we need to do, we need to take some data, pass it off to a component, and then in that component, make the API call.
>
> **[0:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=21)** And here I'll leverage the most favored tool of all developers, which is to cheat by copying existing code I already have.
>
> **[0:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=28)** Because, I already have this component prompt to location that I know successfully talks to the OpenAI API.
>
> **[0:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=34)** So now that I'm going to do the same thing again, I'll just copy that component into a new file, and then give it a new name.
>
> **[0:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=41)** So I'll find prompter location here, highlight everything inside, then go back to components, and create a new file, called this one WeatherDecript.jsx.
>
> **[0:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=53)** And paste all that code in.
>
> **[0:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=55)** And just for safety, I'm going to close prompt to location so I'm not accidentally editing that file.
>
> **[1:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=60)** Next I need to change the component name.
>
> **[1:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=63)** I'll do that by hitting Shift Command or Shift Control L, so that highlights every instance, and change it to weatherDescript.
>
> **[1:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=72)** Then weatherDescript will receive both the prompt and the weather data.
>
> **[1:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=77)** Now I don't have weather data yet, but I will get it soon.
>
> **[1:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=80)** Scrolling down, I no longer need a functions call, so I'll delete every reference to the functions call.
>
> **[1:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=86)** All the way down here.
>
> **[1:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=91)** The parameters stay as they are.
>
> **[1:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=93)** And then down here, where we return content, I need to change some things.
>
> **[1:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=98)** So for now, I'm just going to say then data, so that's whatever data comes back from the OpenAI API.
>
> **[1:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=104)** I'm just going to console log out the data, so that we can see what we get, and then I'll get rid of all this other stuff here.
>
> **[1:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=117)** Okay, now we have a bare bones call to the OpenAI API.
>
> **[2:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=121)** The next step is to build out our messages, because you'll remember, in this setup, I want to use a system message as well as the user message.
>
> **[2:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=129)** And I can set that up here.
>
> **[2:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=131)** So first I'll break down this array, so that I can set up a new object.
>
> **[2:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=138)** And the object will be role system.
>
> **[2:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=144)** And content will be the system message, so I'll create a new constant called sys message equals, and then template literal, so that I can copy this verbatim over and paste it in.
>
> **[2:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=162)** Then I can set content to sys message.
>
> **[2:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=168)** And then for the user message, I now want to combine the prompt and the weather data.
>
> **[2:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=173)** And I've already set up in the system message how I want that formatted.
>
> **[2:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=176)** So there should be a question, and then weather data.
>
> **[2:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=179)** So I'll create another constant up here.
>
> **[3:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=184)** NewPrompt, equals.
>
> **[3:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=188)** And I'll say question colon.
>
> **[3:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=191)** And then the prompt.
>
> **[3:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=196)** And then weather data colon, and weatherData.
>
> **[3:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=204)** But the weather data is JSON formatted.
>
> **[3:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=207)** So I'm going to wrap the weather data in a parenthesis, and then put JSON stringify in front of it.
>
> **[3:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=215)** So that way it's stringified into something the OpenAI API can read.
>
> **[3:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=220)** Now that I have new prompt as a constant, I can call new prompt down here.
>
> **[3:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=226)** And that should be all I need to do for my new component.
>
> **[3:49](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=229)** Then I have to call in the component.
>
> **[3:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=231)** So I'll go in here, to useAPIRequests, and I'll follow the same pattern we already have.
>
> **[3:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=237)** So up here, we call in the prompt data, the location data, the weather data.
>
> **[4:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=241)** So naturally we would then say, const, weatherDescript, ion.
>
> **[4:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=249)** And then setweatherDescription, equals useState.
>
> **[4:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=258)** And this will just be a string, so I'll set it to no, for default.
>
> **[4:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=264)** Then I'll go into the try list and set up a new call, so I'll say const, weatherDescriptRes, so that's the result, equals await weatherDescript.
>
> **[4:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=280)** And when I do this, when I call this component the system automatically goes, "Oh, I see.
>
> **[4:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=285)** "So you need the weatherDescript component, "I'm just going to automatically add it "as an import at the top." So I don't have to do that, and then weatherDescript receives two things, prompt, and weatherDataRes, which is the result of the weather data we requested earlier.
>
> **[5:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=300)** WeatherdataRes.
>
> **[5:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=305)** Then when I get the information, I'll set weather description to weatherDescriptRes.
>
> **[5:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=318)** Okay, that should be all I need.
>
> **[5:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=321)** Now I can test this in my browser, so I'll open the console first, so I can see it, down here.
>
> **[5:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=328)** Then I'll put in a question, so what is the weather like in Burnaby, and submit the question.
>
> **[5:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=334)** And now you'll see first we get the response from the OpenAI API and the weather API, and then it takes a little while, and then we get another response down here.
>
> **[5:42](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=342)** So this is the weather description response, and if I go into choices, and the first instance and message, here, we get the description.
>
> **[5:52](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=352)** But, if you look closely, you'll notice the model here is GPT 3.5 Turbo.
>
> **[5:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=357)** That's not the model I want to use.
>
> **[5:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=358)** So I'm going to go in and change that in weatherDescript.
>
> **[6:02](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=362)** I want to use the model GPT 4 instead.
>
> **[6:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=366)** So save that.
>
> **[6:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=369)** Go back and reload the page.
>
> **[6:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=371)** Same question again.
>
> **[6:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=372)** And notice now the second call to the API will take a lot longer, so here we're sitting and waiting and waiting, doesn't look like anything's happening.
>
> **[6:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=381)** And then, eventually, pop, here comes the response.
>
> **[6:26](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=386)** So GPT 4 is significantly slower than GPT 3.5, but in return, you get a far better formatted answer, so that's why I use GPT 4 here.
>
> **[6:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/advanced-calls-to-the-openai-api?u=76281980&t=399)** This means everything is working, now I just have to figure out how to get this information onto the page.

> [!info]- Semantic Content
>
> **Env Vars:** api (9), gpt (5), json (2)
> **Code Identifiers:** weatherdescript (7), useapirequests (2), weatherdescriptres (2), weatherdata (1), setweatherdescription (1)
> **Code Keywords:** const (2), pass (1), delete (1), default. (1), await (1)
> **Prerequisites:** set up (3), setup (1)
> **File Paths:** useapirequests.jsx (1), weatherdecript.jsx (1)
> **CLI Commands:** make (1), find (1)
> **Versions:** 3.5 (2)
> **Cross-References:** go back to (1)

#### Integrate the AI API response
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=0)** - [Instructor] In between the previous movie and this one I've added a couple of significant changes to keep us moving forward.
>
> **[0:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=5)** Specifically, I've added a new component called description, that just displays the description that we created using OpenAI.
>
> **[0:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=13)** The description component is used down here in app JSX right after the error message in the main form.
>
> **[0:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=19)** So if we have a weather description then we output the description component with the weather description data.
>
> **[0:25](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=25)** Otherwise we just output the description component.
>
> **[0:28](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=28)** Now you may wonder, hey, what happens if you output a component that is supposed to have data but doesn't have data?
>
> **[0:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=34)** Well, if we go over and look at the description component you'll see it's really straightforward.
>
> **[0:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=38)** All it does is return a div with an h1 that says description and then another div and the actual description.
>
> **[0:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=45)** And then down here I've used default props to say if you don't have a weather description then just use this text waiting for location data.
>
> **[0:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=53)** So that's how that works.
>
> **[0:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=56)** Now we need to somehow populate this weather description variable and that starts over here in weather descript.jsx because right now we are just console logging out the data but that won't do, we need to return the data.
>
> **[1:10](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=70)** So I'll take that out and say return.
>
> **[1:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=73)** And then we are grabbing the data.
>
> **[1:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=75)** So that's the data that comes back from OpenAI and inside the data, we want choices and we want the first item in the choice array.
>
> **[1:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=84)** And inside that we want the message and we want the content of the message.
>
> **[1:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=90)** Now this content will always be a string which means we can just return the string as is and then process it on the other end when we receive it.
>
> **[1:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=97)** While I'm at it, I'm also going to change this promise reject message here because it needs to be updated to what this component does.
>
> **[1:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=104)** So I'll say unable to fetch weather description.
>
> **[1:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=111)** Alright, now we are returning the weather description.
>
> **[1:54](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=114)** We need to do something with it and in use API requests we're already doing that.
>
> **[1:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=118)** So you'll remember in the previous movie we set up a call to weather descript and we got the result back in weather descript res.
>
> **[2:05](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=125)** Then we set the state of weather description to weather descript res, and weather description is sitting up here unused.
>
> **[2:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=133)** So now I can take the weather description constant and return it along with all the other data.
>
> **[2:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=138)** You'll remember we are already returning the error, prompt data, location data, and weather data.
>
> **[2:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=143)** So I can just add it on here to say also weather description.
>
> **[2:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=147)** Then finally I'll go into app JSX to where I'm calling in this hook and say, okay error, prompt data, location data, weather data, comma weather description.
>
> **[2:39](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=159)** So now we have the weather description available inside this page.
>
> **[2:43](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=163)** That's actually all I have to do from here.
>
> **[2:45](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=165)** I can save this, go back in my browser and reload a couple of times just to make sure all the caches are cleared.
>
> **[2:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=171)** And you can already see the description component is being displayed with the default text, waiting for location data.
>
> **[2:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=177)** I can now make a request.
>
> **[2:58](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=178)** So what is the weather like in Burnaby?
>
> **[3:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=180)** And click submit.
>
> **[3:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=181)** Now remember there are now a sequence of calls being made to different APIs.
>
> **[3:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=186)** So first we get the weather data itself and then we have to wait for GBT4 to generate its data.
>
> **[3:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=192)** And it kind of takes some time but eventually it does show up.
>
> **[3:15](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=195)** So the current weather in Burnaby seems comfortable with a bit of a cloud cover.
>
> **[3:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=200)** Let's see if we can do that for another location.
>
> **[3:22](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=202)** I'll say Boston, same thing again, we wait for the weather data to come in and then we have to wait more for the GPT4 data to come in.
>
> **[3:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=212)** And it takes a bit of time, but eventually it does show up.
>
> **[3:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=218)** Alright, so it works, but let's say the user experience leaves a bit to be desired here.
>
> **[3:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/integrate-the-ai-api-response?u=76281980&t=224)** We'll deal with that in the next movie.

> [!info]- Semantic Content
>
> **Env Vars:** jsx (2), api (1), gbt4 (1), gpt4 (1)
> **Code Keywords:** let (2), return. (1), this, (1)
> **CLI Commands:** make (2)
> **File Paths:** descript.jsx (1)
> **Cross-References:** in the next (1)
> **Prerequisites:** set up (1)
> **Speakers:** - [instructor] (1)

#### Provide good UX with independent loaders
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=0)** - [Instructor] As you've been working with our app, I'm sure you've noticed that there's thisLoading panel that appears anytime we're waiting for the API and now that we've added a new component, you've also noticed the loading panel doesn't appear even though it really should.
>
> **[0:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=13)** Now we're going to add the loading panel to this new component as well.
>
> **[0:16](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=16)** But before we do that, let me just show you how the loading panel works.
>
> **[0:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=21)** So what's actually happening is we're loading in this component here called Loader that just displays a box that says loading.
>
> **[0:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=27)** That's the total extent of the loader component.
>
> **[0:31](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=31)** That's done by passing in an isLoading state to the weather card component.
>
> **[0:37](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=37)** And then if that isLoading state is true, then the loader component displays and the way it displays is actually I've stacked it on top of everything else using CSS grid.
>
> **[0:46](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=46)** So if you're curious about the technicalities of how it works, you can just take away the conditional statement here and then the loader will always appear at the top and then you can go and inspect the CSS to see how it stacks on top of everything else.
>
> **[0:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=59)** What I want to do now is bring this same functionality into the description component.
>
> **[1:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=64)** So first off, I need to add in the loader.
>
> **[1:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=67)** So I'll go to description and I'll import the loader component.
>
> **[1:11](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=71)** Then I'll go down into the code here to see again how I implemented it.
>
> **[1:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=77)** So I'm just going to take this and duplicate it.
>
> **[1:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=80)** So isLoading, if so, then load the loader.
>
> **[1:23](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=83)** So here, description, maybe I'll put it inside the description divider here.
>
> **[1:30](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=90)** Okay. Then I need to bring in the isLoading state.
>
> **[1:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=93)** So I'll copy isLoading and paste it here so that I'm saying my description component receives isLoading and weatherDescription, which means I need to go over into App.jsx and look at where I'm calling in the description.
>
> **[1:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=107)** It's here.
>
> **[1:48](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=108)** So then I have to pass in isLoading and then something.
>
> **[1:53](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=113)** And I also have to pass that into the plain description even if I'm not currently calling in anything.
>
> **[2:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=121)** Okay, so what am I passing in here though?
>
> **[2:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=124)** Well, if we go down and look at the weather card, you can see isLoading is calling in this, weatherDataLoading.
>
> **[2:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=132)** And if we scroll up all the way up here, there's a state for weatherDataLoading.
>
> **[2:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=140)** So that means I should be able to set up a similar state for weatherDescription loading.
>
> **[2:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=144)** So I can say const and then weather, weatherDescriptLoading and then comma, setweatherDescriptLoading equals useState
>
> **[2:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=164)** and the default is false.
>
> **[2:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=167)** Okay, so that means I can call in weatherDescriptLoading as the state when I call in isLoading here.
>
> **[2:57](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=177)** So I'll say weatherDescriptLoading and weatherDescriptLoading.
>
> **[3:00](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=180)** But how does weatherDescriptLoading get set?
>
> **[3:04](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=184)** If we look at weatherDataLoading and go up a bit here, you'll see setWeatherDataLoading is set to true in a couple of different places.
>
> **[3:12](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=192)** So here setWeatherDataLoading is at the false and it's all contingent on this here.
>
> **[3:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=198)** Anytime we get weatherData updated, we kick in this useEffect that checks, if weatherData's updated, then we do something in this case, setWeatherDataLoading to false.
>
> **[3:29](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=209)** So we can do the same thing with the weatherDescription.
>
> **[3:32](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=212)** So I'll say, let's see, useEffect and then an arrow function
>
> **[3:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=221)** and then say if weatherDescription.
>
> **[3:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=227)** So we have a description then setWeatherDescriptLoading to false.
>
> **[3:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=235)** So if we have the description, then we can take the loader away.
>
> **[3:59](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=239)** And this is dependent on weatherDescription.
>
> **[4:06](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=246)** So now anytime weatherDescription updates, this effect kicks off and setWeatherDescription loading to false.
>
> **[4:13](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=253)** But that means it's always false 'cause it's default false and we just set it to false again.
>
> **[4:17](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=257)** So we also have to set it to true somewhere.
>
> **[4:19](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=259)** And that's done here in handleSubmit.
>
> **[4:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=261)** So if you look closely at the weather form, I say, for the weather form, anytime the weather form is submitted, we trigger handleSubmit and handleSubmit then fires off a new prompt and sends that prompt off to setPrompt, which is the component that calls all the different items.
>
> **[4:38](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=278)** And it also sets weatherDataLoading to true.
>
> **[4:40](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=280)** So that means I should be able to setWeatherDescriptLoading to true as well.
>
> **[4:51](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=291)** So now we have two different components each with their own loading state.
>
> **[4:55](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=295)** And depending on our behavior within the app, those loading states should control whether the loading page is shown or not.
>
> **[5:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=303)** Let's test that in the browser, send a request.
>
> **[5:07](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=307)** Now we get loading in both places.
>
> **[5:09](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=309)** Then the loading state changes because we now have data over here and as we're waiting, the loading state will eventually change over here but it takes a long time as you've seen before.
>
> **[5:18](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=318)** But there it is and then we can test it again just to make sure.
>
> **[5:21](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=321)** So I'll say Stockholm, submit.
>
> **[5:24](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=324)** We get the loading panels again and we wait.
>
> **[5:27](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=327)** And eventually, after a long wait, the text appears.
>
> **[5:33](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=333)** Now of course this is not a perfect user experience.
>
> **[5:35](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=335)** You still have to wait a really long time for GPT-4 and you could probably build this out to give the user a better experience of waiting.
>
> **[5:44](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/provide-good-ux-with-independent-loaders?u=76281980&t=344)** But it works and we now have independent loaders on the page.

> [!info]- Semantic Content
>
> **Code Identifiers:** isloading (9), weatherdescription (6), weatherdescriptloading (5), weatherdataloading (4), setweatherdescriptloading (3)
> **Code Keywords:** let (3), pass (2), else. (1), this, (1), const (1)
> **Env Vars:** css (2), api (1), gpt (1)
> **UI Navigation:** go to (1), scroll up (1)
> **File Paths:** app.jsx (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 8. Conclusion

#### Go further
> [LinkedIn Learning](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/go-further?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/go-further?u=76281980&t=1)** - All right, you've reached the end of the course and the beginning of your journey building apps with React and OpenAI API.
>
> **[0:08](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/go-further?u=76281980&t=8)** As you continue onto your own project, remember that what you've seen here in this course is just a small glimpse of what is possible once you embrace the possibilities and opportunities AI opens up for us all.
>
> **[0:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/go-further?u=76281980&t=20)** To get started with your own AI integrations, ask yourself this question, where in my app would it be useful to get a human language interpretation of either user input or data output?
>
> **[0:34](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/go-further?u=76281980&t=34)** In the app we worked with that was by parsing the input into a location and by parsing the weather data into a description.
>
> **[0:41](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/go-further?u=76281980&t=41)** Figuring out what it is for your own app may be the beginning of something truly amazing.
>
> **[0:47](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/go-further?u=76281980&t=47)** Now, before I let you go, once again, a reminder that the way the API keys are stored in this project is not for production.
>
> **[0:56](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/go-further?u=76281980&t=56)** Do not publish your API keys in a GitHub repository or on the frontend, like we've done in this project.
>
> **[1:03](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/go-further?u=76281980&t=63)** For public apps that have the API keys integrated, use a key storage application or move the API integration to the server end to prevent curious onlookers from grabbing their own copy of your key and using them in their own apps.
>
> **[1:20](https://www.linkedin.com/learning/build-a-javascript-ai-app-with-react-and-the-openai-api/go-further?u=76281980&t=80)** Now, all that's left for me to say is go build amazing things with React and the OpenAi API, and I'll see you in the next course.

> [!info]- Semantic Content
>
> **Env Vars:** api (6)
> **Code Keywords:** continue (1), let (1), public (1)
> **CLI Commands:** go build (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Speakers:** - all (1)


## Instructor

- [[Morten Rand-Hendriksen]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/build-a-javascript-ai-app-with-react-and-the-openai-api-4467357/codespaces)

## Skills Covered

- OpenAI API
- JavaScript
- React.js
- Artificial Intelligence (AI)

## Path Context

### In [[Building Generative AI Skills for Web Developers]]
← [[AI Programming for JavaScript Developers]] | **10 of 10**

## Appears In

- [[Building Generative AI Skills for Web Developers]]

## Related Courses

_Courses sharing skills:_

- [[Learning Full-Stack JavaScript Development- MongoDB, Node, and React]] — React.js, JavaScript
- [[OpenAI API- Code Interpreter and Advanced Data Analysis]] — Artificial Intelligence (AI), OpenAI API
- [[OpenAI API- Moderation]] — Artificial Intelligence (AI), OpenAI API
- [[OpenAI API- Speech]] — Artificial Intelligence (AI), OpenAI API
- [[OpenAI API- Vision]] — Artificial Intelligence (AI), OpenAI API

---

[↑ Back to top](#)