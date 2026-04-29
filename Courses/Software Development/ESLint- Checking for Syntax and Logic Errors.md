---
type: course
cssclasses:
  - lle-course
  - lle-level-advanced
slug: eslint-checking-for-syntax-and-logic-errors
url: "https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors"
duration_minutes: 38
duration: 38m
level: Advanced
updated: 5/15/2025
learners: 2834
skills:
  - ESLint
exercise_files: true
github: "https://github.com/LinkedInLearning/eslint-syntax-2255011/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/C4E0DAQHQ7f1pYY_oBw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668021378628?e=2147483647&amp;v=beta&amp;t=rrRAexRdmJuLPvhg0KKGoo1WZcueBEEs2tENH_VldlU"
linkedin_topic: Software Development
learning_paths:
  - '[[Advance Your JavaScript Skills]]'
prev_courses:
  - '[[ESLint- Integrating with Your Workflow]]'
next_courses:
  - '[[ESLint- Customizing Styles]]'
path_nav: '[{"path":"Advance Your JavaScript Skills","position":5,"total":10,"prev":"ESLint- Integrating with Your Workflow","next":"ESLint- Customizing Styles"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/eslint
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/ESLint-%20Checking%20for%20Syntax%20and%20Logic%20Errors.md)

![ESLint: Checking for Syntax and Logic Errors](https://media.licdn.com/dms/image/v2/C4E0DAQHQ7f1pYY_oBw/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1668021378628?e=2147483647&amp;v=beta&amp;t=rrRAexRdmJuLPvhg0KKGoo1WZcueBEEs2tENH_VldlU)

# ESLint: Checking for Syntax and Logic Errors

> Reduce bugs and boost efficiency by using ESLint to catch common coding errors. In this course—the third and final installment in the ESLint series—learn about some of the most essential error-catching rules in ESLint, as well as how to configure them. Instructor Sasha Vodnik details how to configure rules to identify errors in code for functions; configure ESLint to identify issues with loops and

> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors) | 38m | Advanced | 3K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (4 videos)
- **[[#2. 1. Checking for Syntax and Logic Errors]]** (8 videos)
- **[[#3. Conclusion]]** (1 videos)

### 1. Introduction

#### Using ESLint to catch coding errors
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-eslint-to-catch-coding-errors-25671666?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-eslint-to-catch-coding-errors-25671666?u=76281980&t=0)** - ESLint error checking rules can be really handy, but sometimes it's not clear which ones make sense for a project and which ones you should turn off.
>
> **[0:09](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-eslint-to-catch-coding-errors-25671666?u=76281980&t=9)** In this course we'll look at some of ESLint's most significant error checking rules.
>
> **[0:14](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-eslint-to-catch-coding-errors-25671666?u=76281980&t=14)** We'll explore how to configure them and we'll examine situations where you might not want to use them.
>
> **[0:19](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-eslint-to-catch-coding-errors-25671666?u=76281980&t=19)** After we're done, you'll be able to pick the right rules for each project so you can catch more bugs before deployment.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Prerequisites:** configure (1)
> **Speakers:** - eslint (1)

#### What you should know
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/what-you-should-know?u=76281980&t=0)** - [Instructor] This course assumes you have intermediate to advanced level experience coding in front-end JavaScript including modern ES6 syntax.
>
> **[0:08](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/what-you-should-know?u=76281980&t=8)** It also assumes you know how to set up and configure ESLint in an npm project.
>
> **[0:13](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/what-you-should-know?u=76281980&t=13)** If you need to review how to configure ESLint, search in our library for a course on customizing ESLint styles.
>
> **[0:20](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/what-you-should-know?u=76281980&t=20)** If you need a brush up on incorporating ESLint into a project, search in our library for a course on integrating ESLint with your workflow.

> [!info]- Semantic Content
>
> **Prerequisites:** configure (2), set up (1)
> **CLI Commands:** npm (1)
> **Env Vars:** es6 (1)
> **Speakers:** - [instructor] (1)

#### Using the exercise files for this course
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=0)** - [Instructor] All of the files for this course are freely available as a GitHub repo at this URL.
>
> **[0:05](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=5)** The repository is built so there are branches for each of the videos in the course.
>
> **[0:10](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=10)** You can use the branch menu to switch to a specific branch and take a look at how the code looked on a specific video.
>
> **[0:18](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=18)** For example, the branch titled 0103b shows you the code for chapter one and the third video in that chapter.
>
> **[0:30](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=30)** The letter B at the end of the name means that's how the code looked at the beginning of the video.
>
> **[0:35](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=35)** If you want to see how the code looked at the end, just choose the same branch but with an E at the end instead.
>
> **[0:42](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=42)** In this course, I go through configuring syntax and logic rules for ESLint.
>
> **[0:48](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=48)** If you want to, you can download any of the branches by first going to the branch and then hitting the clone or download button and downloading the ZIP file for the video that you want to follow along with.
>
> **[1:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=60)** You may need to install NPM as well as GIT before you do this.
>
> **[1:05](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=65)** If you need more experience working with Git and GitHub, make sure you're familiar working with Git and GitHub before taking this course.
>
> **[1:12](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=72)** Do a search for GitHub in our library.
>
> **[1:14](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-the-exercise-files-for-this-course?u=76281980&t=74)** If you're comfortable with all this, then let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** git (3), npm (1), make (1)
> **Code Keywords:** switch (1), this. (1), this, (1), let (1)
> **Env Vars:** url (1), zip (1), npm (1), git (1)
> **Tools:** github (4)
> **Exercise Files:** github repo (1), zip file (1)
> **Analogies:** for example (1)
> **Prerequisites:** install (1)
> **Speakers:** - [instructor] (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=0)** - This is Ray Villalobos, senior staff instructor at LinkedIn Learning, and I'm going to show you how to work with LinkedIn Learning courses using GitHub Codespaces.
>
> **[0:09](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=9)** Codespaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:15](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=15)** It allows for real world hands-on practice that mirrors software development in the workplace.
>
> **[0:20](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=20)** This course has been adopted for use with GitHub Codespaces.
>
> **[0:24](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=24)** Using Codespaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:31](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=31)** One click and you're ready to go.
>
> **[0:34](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=34)** First, make sure you've signed up for a free GitHub account and that you've logged in.
>
> **[0:38](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=38)** You should see your profile icon right here.
>
> **[0:41](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=41)** When you go to the repository for one of our courses, look for the Code button.
>
> **[0:49](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=49)** Click on Create Codespace.
>
> **[0:52](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=52)** The first time you open up a Codespace, it might take a few minutes to create the Virtual Machine.
>
> **[0:58](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=58)** Once it's done, you'll enter the code editor environment.
>
> **[1:02](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=62)** If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers.
>
> **[1:09](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=69)** The cloud editor's menu lives in a hamburger icon inside the activity bar.
>
> **[1:14](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=74)** The menu will let you see the keyboard shortcuts for your operating system.
>
> **[1:18](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=78)** Let's find the shortcut for the command palette.
>
> **[1:21](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=81)** Look in the hamburger menu under view and then look for the keyboard shortcut for your operating system.
>
> **[1:28](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=88)** The activity bar has the most common tools you'll need to work with projects.
>
> **[1:33](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=93)** You can, for example, show or hide the explorer, do a search and replace for content, manage features of the repository and much more.
>
> **[1:46](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=106)** By the way, if for any reason you lose the activity bar, you can get it back using the command palette.
>
> **[1:56](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=116)** Your course can have one or more extensions pre-installed, based on the course you're taking.
>
> **[2:01](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=121)** Those can be found in the extensions panel.
>
> **[2:07](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=127)** Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[2:13](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=133)** If you do that, don't panic.
>
> **[2:15](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=135)** Codespaces saves everything you're doing on a Virtual Machine.
>
> **[2:19](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=139)** You can always get the Codespace back for this repo by going to the code menu and finding your Codespace right here.
>
> **[2:32](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=152)** Notice that it even remembered that I had opened the extensions panel.
>
> **[2:36](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=156)** This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks.
>
> **[2:43](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=163)** If you go to the branch icon on the status bar, you can see that there's more than one branch.
>
> **[2:48](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=168)** You can switch to the different branches using this menu.
>
> **[2:52](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=172)** The branches are named with the chapter and the video number you're watching.
>
> **[2:56](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=176)** If you see a B at the end of the branch, that's how the code looked at the beginning.
>
> **[3:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=180)** If you see an E, that's how the code looked at the end.
>
> **[3:04](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=184)** Let's switch to how the code looked on chapter two and the third video.
>
> **[3:10](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=190)** I'll choose the beginning branch.
>
> **[3:13](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=193)** As you work through a course, you might make some changes on a branch.
>
> **[3:17](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=197)** I'm going to make a minor edit on the index.html file right here.
>
> **[3:25](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=205)** I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here, and the branch name now has an asterisk on it.
>
> **[3:36](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=216)** If I try to switch to another branch that causes major changes, like say 07_03e, I may see a dialog box like this.
>
> **[3:48](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=228)** If you don't care about saving your changes, you can simply hit the Force Checkout button.
>
> **[3:52](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=232)** It will let you switch to that branch.
>
> **[3:55](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=235)** You can then choose to discard the changes on this file.
>
> **[4:01](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=241)** Forking lets you create your own copy of the repository on your account, so that you can keep any changes that you've made, even if you've deleted the Codespace.
>
> **[4:10](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=250)** To create your own fork, you can click on the Fork button on the repository.
>
> **[4:17](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=257)** I'm going to hit Create fork.
>
> **[4:21](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=261)** I'll have my own copy of this repository, and if I want to, I can start a new Codespace on that fork.
>
> **[4:33](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=273)** This fork version is almost exactly like the original repository, but it will let you push your own changes.
>
> **[4:40](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=280)** Notice that the URL of the repository is slightly different.
>
> **[4:44](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=284)** Let's go ahead and make a simple change to this file right here.
>
> **[4:54](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=294)** I'm going to save it.
>
> **[4:57](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=297)** You'll note that there is an M right here, as well as an asterisk on this branch.
>
> **[5:03](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=303)** In the source control panel, you can also see a one for the change that we just made.
>
> **[5:08](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=308)** Let's go ahead and try to commit this change.
>
> **[5:14](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=314)** I'm going to hit the Commit button and I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here to commit this onto my own version of the repo.
>
> **[5:30](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=330)** I'll hit OK.
>
> **[5:32](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=332)** You can also let it go ahead and run Git Fetch, that way it'll automatically sync with your forked repo.
>
> **[5:39](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=339)** Now that change will be stored in your own version of this repository.
>
> **[5:44](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=344)** Don't worry if you forget to fork a repo and then try to push changes, Codespaces will also ask you if you want to create a fork automatically.
>
> **[5:53](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=353)** Some courses will let you work with live previews or create other ports, so that you can have a web view of what you're doing.
>
> **[6:01](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=361)** This is managed through the ports panel in the status bar.
>
> **[6:04](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=364)** Right now, there are no ports forwarded.
>
> **[6:08](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=368)** But if I open up the Live Server extension, you can see a preview of that file.
>
> **[6:18](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=378)** Now, if we go back to the Codespace to manage ports, you can click on the icon in the status bar and take a look at the currently available ports.
>
> **[6:28](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=388)** If you want to open this up in a browser, you can click right here.
>
> **[6:32](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=392)** Look for additional course specific tips from the instructor.
>
> **[6:35](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/using-github-codespaces-with-this-course?u=76281980&t=395)** Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), switch (4), this. (1)
> **UI Navigation:** switch to (4), click on (3), go to (2)
> **CLI Commands:** make (4), find (1), git (1)
> **Tools:** github (4), visual studio (2)
> **Definitions:** is a  (4), is an  (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Cross-References:** go back to (1)


### 2. 1. Checking for Syntax and Logic Errors

#### Understanding ESLint error rule types
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=0)** - [Instructor] ESLint can be super handy in enforcing consistency in code you write.
>
> **[0:05](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=5)** In fact, most of the rules that ESLint supports have to do with aspects of code that don't have just one correct approach.
>
> **[0:12](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=12)** For instance, best practices, like using the triple equality operator, and stylistic issues, like camel casing variable names.
>
> **[0:19](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=19)** But ESLint also includes a set of rules that enable it to flag code that's either definitely erroneous or written in a way that's likely to indicate an error.
>
> **[0:29](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=29)** In ESLint Version Six, almost all of the rules for possible errors are enabled in the ESLint recommended styles.
>
> **[0:37](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=37)** ESLint can call out logic errors, such as update code in a for loop that iterates in the wrong direction.
>
> **[0:44](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=44)** It can also call your attention to unused code, such as empty block statements which can indicate something like an incomplete refactoring process.
>
> **[0:53](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=53)** Some of ESLint's rules for possible errors are simple toggles that you can turn on or off by setting a key for the rule name to a standard value.
>
> **[1:01](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=61)** For instance, you can choose to have ESLint flag an incorrect for direction as a warning or error or you can turn that functionality off.
>
> **[1:11](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=71)** And some rules allow you more fine-grain settings.
>
> **[1:14](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=74)** For instance, you can choose to be alerted to any use of console statements in code.
>
> **[1:19](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=79)** Or you can specify certain console methods that are allowable and shouldn't throw warnings or errors while still alerting on the other methods.
>
> **[1:28](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/understanding-eslint-error-rule-types?u=76281980&t=88)** You can use ESLint to check your code for potential errors by creating your own rule set, or by customizing the ESLint recommended settings or the settings from any major style guide.

> [!info]- Semantic Content
>
> **Analogies:** for instance (3), such as (2)
> **Code Keywords:** super (1), throw (1)
> **Best Practices:** recommended (2)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Flagging issues in functions
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=0)** - [Instructor] My project includes some test code for the ESLint rules and writing.
>
> **[0:04](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=4)** In the files for this course I'm in the Error Checking folder and within that the Source folder contains index.js.
>
> **[0:12](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=12)** And immediately when I open that up I see the ESLint is reporting an error here on line six.
>
> **[0:19](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=19)** And when I hover that I have this error argument name clash.
>
> **[0:24](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=24)** So my function has duplicate argument names.
>
> **[0:26](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=26)** Which is generally a result of mistyping.
>
> **[0:29](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=29)** Notice as this flags a parsing error.
>
> **[0:32](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=32)** Which is separate from the customizable rules.
>
> **[0:35](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=35)** Now there is a rule that covers the same case.
>
> **[0:38](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=38)** No-dupe-args.
>
> **[0:39](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=39)** It flags code for a function with a repeated argument name.
>
> **[0:43](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=43)** In my code the parser flags this because I'm using a module.
>
> **[0:46](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=46)** And modules are always evaluated in strict mode.
>
> **[0:49](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=49)** So the parser error checking happens before the configurable rules.
>
> **[0:54](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=54)** But in this case I want to use my rules on code that's not running in strict mode.
>
> **[0:58](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=58)** So I'll go ahead and add that rule as well.
>
> **[1:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=60)** So I'll open up my ESLint.rc file and down in the rule section I'll add no-dupe-args... end quotes because that contains dashes which are invalid characters for a key name.
>
> **[1:14](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=74)** And error as the value.
>
> **[1:16](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=76)** End that with a comma and save it.
>
> **[1:20](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=80)** Now back in my index.js I still won't see this showing up in my editor or in error messages on build.
>
> **[1:26](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=86)** Because it's caught earlier in the process.
>
> **[1:28](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=88)** But I'm going to go ahead and fix it in my code.
>
> **[1:31](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=91)** And I'll save that.
>
> **[1:33](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=93)** And now I have another error popping up after I fixed that one.
>
> **[1:37](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=97)** So further on down on line 10.
>
> **[1:39](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=99)** So I've declared the multiply function on line six.
>
> **[1:44](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=104)** And then re-written it as a function expression on line 10.
>
> **[1:49](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=109)** Maybe I was re-factoring and I forgot to out the original after writing it.
>
> **[1:53](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=113)** And again I have a parsing error flagged here if I look at that.
>
> **[1:57](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=117)** And it's saying that the identifier's already been declared.
>
> **[2:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=120)** So this is another issue that's caught by the parser in strict mode.
>
> **[2:05](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=125)** But there is also a rule for use in non strict mode situations.
>
> **[2:08](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=128)** No-func-assign.
>
> **[2:10](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=130)** And it takes a simple string as it's value.
>
> **[2:14](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=134)** So I want to cover other situations where I might use my rules.
>
> **[2:17](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=137)** And so I'm going to go ahead and add that other rule.
>
> **[2:21](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=141)** So no-func-assign... And error.
>
> **[2:27](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=147)** Save that.
>
> **[2:29](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=149)** Go back over here and again I'm still getting the parsing error flagged not the one that I just wrote.
>
> **[2:34](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=154)** And since this is a re-factor I just want to get rid of the first instance of this function.
>
> **[2:39](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=159)** So I'm just going to go ahead and comment that out.
>
> **[2:41](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=161)** And then in my... Re-factored code I again want to fix the error that pops up now which is the argument name clash.
>
> **[2:49](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=169)** So I'm going to change that "x" to a "y" to match my code.
>
> **[2:53](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=173)** I'll save that.
>
> **[2:54](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=174)** Now I have all of my errors ironed out.
>
> **[2:56](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/flagging-issues-in-functions?u=76281980&t=176)** And I have rules in place to address the specific errors around functions that pop up when I'm not in strict mode.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), case. (1), module (1)
> **File Paths:** index.js (2)
> **Definitions:** is a  (2)
> **Cross-References:** earlier in (1)
> **Speakers:** - [instructor] (1)

#### Identifying problems in loops and conditionals
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=0)** - [Instructor] The loops and conditionals section of index.js, starting on line 15, contains a couple of issues I want ESLint to flag.
>
> **[0:07](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=7)** There's a for loop starting on line 19.
>
> **[0:10](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=10)** As far as my editor is concerned, everything's fine there, but I can use ESLint to check if the direction of my iterator change makes sense given my condition.
>
> **[0:19](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=19)** To do that, I use the for direction rule.
>
> **[0:23](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=23)** Over in my ESLint rc file, I'll add for direction with the value of error.
>
> **[0:28](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=28)** So that's in the rules section, and for dash direction, and error.
>
> **[0:35](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=35)** Saving that, I'm going to go back to index.js and I have a new error flagged.
>
> **[0:41](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=41)** So, if I move the pointer over that that tip text is going to point out that the update clause moved the variable in the wrong direction.
>
> **[0:49](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=49)** So, my code starts at 10, and it checks for a value greater than zero, and increasing I after each loop.
>
> **[0:58](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=58)** That creates an infinite loop, because I will never satisfy that ending condition.
>
> **[1:03](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=63)** I'm starting greater than zero already, and I'm continuing to increase my value, so I'm always going to be greater than zero.
>
> **[1:11](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=71)** So now that I have that condition flagged, I can change the direction of that final statement so instead of i plus equals one, I'm going to change that I minus equals one, so I am decreasing each time through the loop.
>
> **[1:25](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=85)** And, immediately the error's gone, I'll save that, my loop is no longer infinite, and I fixed the logic error in my code and that is thanks to ESLint for actually flagging that logic issue.
>
> **[1:37](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=97)** Now starting on line 23, I have some if else control flow code, which checks a number of conditions.
>
> **[1:44](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=104)** The editor doesn't find any issues with my syntax, but I want to get ESLint to verify that I haven't duplicated any conditions.
>
> **[1:52](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=112)** Especially as the number of else if clauses grows, it can be hard to spot duplication.
>
> **[1:57](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=117)** And I can do this in ESLint with the no dupe else if rule.
>
> **[2:02](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=122)** So back in my ESLint rc file, I'm going to add a new rule which is no dupe else if, and give it a value of error.
>
> **[2:13](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=133)** Just a simple string.
>
> **[2:15](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=135)** And saving that, going back to index.js and now, I have an error flagged on line 30.
>
> **[2:21](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=141)** Let's see, I will move the pointer over that, and so this is pointing out that this branch can never execute because it's a duplicate.
>
> **[2:29](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=149)** So, looking at my code here, I probably meant to check for d instead of b.
>
> **[2:34](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=154)** I have the a, b, and c, so the next logical step would be d.
>
> **[2:38](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=158)** And so, I'm going to go ahead and make that change, and the error is gone, I have no more duplicate.
>
> **[2:44](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=164)** ESLint also offers a similar rule for switch statements, that checks for duplicate cases.
>
> **[2:50](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=170)** I don't use those, so I'm not going to include that in my configuration, but if that's part of your code, you can add that as well.
>
> **[2:56](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=176)** It takes a single string value, just like no dupe else if.
>
> **[3:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/identifying-problems-in-loops-and-conditionals?u=76281980&t=180)** So, here I've used ESLint rules to check loops and conditionals, and they're helping me catch these sneaky logic errors early on, rather than needing to debug their effects later in my testing, that's a total win.

> [!info]- Semantic Content
>
> **Code Keywords:** if, (1), let (1), switch (1), if. (1)
> **File Paths:** index.js (3)
> **CLI Commands:** find (1), make (1)
> **Cross-References:** go back to (1), later in (1)
> **Analogies:** just like (1)
> **Speakers:** - [instructor] (1)

#### Eliminating unfinished code
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=0)** - [Instructor] In my index.js file starting on line 40, I have some test code that's not quite ready for deployment.
>
> **[0:07](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=7)** And I can set up a few ESLint rules to call out some common issues that I see in this code.
>
> **[0:12](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=12)** I have an if else construction starting on line 41, and I can see on lines 43 and 44 that I have an else if clause with an empty block.
>
> **[0:20](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=20)** Nothing actually happens if the condition's true, so this is wasted code.
>
> **[0:25](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=25)** I can configure ESLint to flag this using the no-empty rule, which is triggered when there's an empty block.
>
> **[0:31](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=31)** It allows for some detailed configuration if I want to allow an empty catch block, but for a generic use case, I can just use this simple string for the value.
>
> **[0:40](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=40)** So back in my .eslintrc file, I will add a no-empty rule with a value of error.
>
> **[0:49](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=49)** And I'll save that, and then back in index.js, I do have highlighted code.
>
> **[0:56](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=56)** If I move my pointer over that, that tip mentions that this is an empty block statement.
>
> **[1:01](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=61)** So for now, I'm just going to comment out 43, that is the empty block, and leave that else as the fallback for the rest of the if else construction.
>
> **[1:13](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=73)** And now I've taken care of that error.
>
> **[1:16](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=76)** Further down, the else section contains a couple debugging statements.
>
> **[1:19](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=79)** First, the debugger directive, which halts execution to the parser, and then a console.error statement, which throws an error in the parser.
>
> **[1:27](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=87)** In the browser, I see that in the browser console.
>
> **[1:31](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=91)** With solid browser developer tools available, the debugger directive just isn't useful at all.
>
> **[1:36](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=96)** And if I was using it and it went out and deployed code, it would halt execution in the end-user's browser, which is not what I want at all.
>
> **[1:44](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=104)** So, I want to make sure I know if my code contains debugger anywhere so I can take it out.
>
> **[1:49](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=109)** Now, the console statement is different.
>
> **[1:50](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=110)** Those are useful for development, but often we don't want them around in production code.
>
> **[1:54](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=114)** So I'd like some help noticing if those are around when I'm getting ready to deploy.
>
> **[2:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=120)** The no-debugger rule takes a simple string argument and raises an issue if my code contains a debugger statement.
>
> **[2:07](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=127)** The no-console rule alerts if my code contains a console statement.
>
> **[2:11](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=131)** I can flag all of them using a simple string value, but it can also get more finely grained.
>
> **[2:17](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=137)** I may want to allow certain methods, which might be part of a process for getting debugging data from users when they're having problems.
>
> **[2:23](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=143)** And for that, I can set an allow keyword and specify which methods I'm okay with.
>
> **[2:29](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=149)** Back in my eslintrc, I'm going to add a no-debugger rule with an error value.
>
> **[2:39](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=159)** And then, back in index.js, I actually have to save that eslint file first.
>
> **[2:46](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=166)** Now, in index.js, I have a red squiggle under debugger and can see the no-debugger statement in the popup there.
>
> **[2:54](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=174)** So, I'll just go ahead and comment that out to take care of that.
>
> **[2:59](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=179)** And then back in eslintrc, I also want to take care of those console messages.
>
> **[3:04](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=184)** So, I'm going to add that no-console keyword, and I want to allow error messages for end-user issue reports.
>
> **[3:15](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=195)** But otherwise, I don't want to rule out other console methods.
>
> **[3:18](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=198)** So, the value's going to be an array, and it's going to flag an error, so that's my first string.
>
> **[3:27](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=207)** Then I'm going to provide the object and this gives me the specific cases.
>
> **[3:35](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=215)** So I have an allow and the value for that is array, and the value's going to be error.
>
> **[3:44](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=224)** And so here, just notice that the word error within the array is specifying console.error as an allowable method.
>
> **[3:55](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=235)** Whereas the error string up here is saying when there's a problem with console statements I want to throw an error rather than throwing a warning.
>
> **[4:02](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=242)** So we're using the word error here in two different contexts within this specific rule.
>
> **[4:08](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=248)** So I'm going to put a terminal comma after my object and another one after my array.
>
> **[4:14](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=254)** Going to save that, and then heading over to my index.js file, the console.error message is there.
>
> **[4:23](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=263)** It's not flagged, and that's because I have disallowed console messages except for error messages.
>
> **[4:29](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=269)** And so, I'm good there.
>
> **[4:32](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=272)** But if I did something else like console.log, that would get flagged and that's what I want.
>
> **[4:37](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/eliminating-unfinished-code?u=76281980&t=277)** So now, I have rules in place that let me identify and eliminate code that isn't useful in production, so I can get rid of that.

> [!info]- Semantic Content
>
> **File Paths:** index.js (5)
> **Code Keywords:** case, (1), throw (1), let (1)
> **Prerequisites:** set up (1), configure (1)
> **CLI Commands:** make (1)
> **Tools:** terminal (1)
> **Definitions:** is an  (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Ensuring accurate values
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=0)** - [Instructor] The accurate values section of index.js starts on line 54, and it contains code without any syntax errors, but there are a couple indications in this code that I may have made typing errors and I can use ESLint rules to flag these for me.
>
> **[0:14](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=14)** The scores array on line 54 includes an empty element.
>
> **[0:18](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=18)** This is known as a sparse array and while it can sometimes be useful, it can also indicate my finger simply slipping on the keyboard and typing an extra comma.
>
> **[0:27](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=27)** I can catch this with ESLint using the no sparse arrays rule which flags back to back commas in an array literal.
>
> **[0:34](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=34)** This rule takes a simple string as its argument.
>
> **[0:37](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=37)** Over in my eslintrc file, I'm going to add code to flag this issue as an error, so no-sparse-arrays, error, and then I'm going to save that, return to my code, and now I've got that red squiggle, and when I put my pointer over it, I've got that no-sparse-arrays rule flagged from ESLint.
>
> **[1:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=60)** And if I go ahead and take that extra comma out, I'm all good again.
>
> **[1:04](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=64)** So now I have an array containing only those values and if I want to add other values, there are programmatic ways to do that, without starting a sparse array, and obviously if you use sparse arrays in your coding practice in your project, then you don't need to use this rule.
>
> **[1:19](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=79)** Now down on line 57, I have a variable containing a string.
>
> **[1:23](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=83)** Now it's not a template literal, it's a string.
>
> **[1:26](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=86)** It uses apostrophes and not back ticks.
>
> **[1:29](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=89)** But it contains what looks like an expression reference: the dollar sign followed by the curly braces.
>
> **[1:35](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=95)** That suggests that I probably meant for this to be a template literal.
>
> **[1:39](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=99)** And ESLint has this amazing rule that lets me flag this in code.
>
> **[1:45](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=105)** It's the no template curly in string rule.
>
> **[1:48](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=108)** So it's a long rule name, but it takes a simple string as its value and it basically looks for that pattern, that dollar sign curly braces, that indicates you probably meant a template literal.
>
> **[1:58](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=118)** So over in my eslintrc, I will add one more rule here: no-template-literal-in-curly.
>
> **[2:09](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=129)** And then for the value, error, a simple string.
>
> **[2:13](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=133)** Save that and then back in index.js, I am not seeing an issue flagged here.
>
> **[2:25](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=145)** I have an issue at the beginning.
>
> **[2:27](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=147)** So I'm going to actually close my index.js file and reopen it, that sometimes helps.
>
> **[2:34](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=154)** But that is not showing up.
>
> **[2:37](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=157)** So let's look back here.
>
> **[2:42](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=162)** No template literal and that's not a thing.
>
> **[2:45](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=165)** I typed it wrong, so, important lesson here.
>
> **[2:49](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=169)** No-template-curly-in-string is the name of the rule, so I was getting an error there just saying, you've defined a rule that doesn't exist in ESLint.
>
> **[2:58](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=178)** Now I go back to my index.js, scroll down to my accurate values section and there we go, red squiggles, unexpected template string expression.
>
> **[3:08](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=188)** There's the no-template-curly-in-string.
>
> **[3:10](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=190)** And so I'm going to go ahead and fix that by changing my apostrophe to a back tick in both of those places.
>
> **[3:18](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=198)** Now I get that nice code formatting, and more importantly, my issue goes away because this is no longer a template curlys in string, but a template curlys in a template literal.
>
> **[3:28](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=208)** And so, this is a big help in catching an issue before it actually results in a bug in testing.
>
> **[3:34](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/ensuring-accurate-values?u=76281980&t=214)** I'm just getting one step ahead of the curve here with this ESLint rule.

> [!info]- Semantic Content
>
> **Exercise Files:** template (12)
> **File Paths:** index.js (4)
> **Definitions:** known as (1), is a  (1)
> **Code Keywords:** let (1)
> **Cross-References:** go back to (1)
> **UI Navigation:** scroll down (1)
> **Speakers:** - [instructor] (1)

#### Calling out general logic errors
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=0)** - [Instructor] My index.js file contains a few test statements starting on line 63 that test for errors in logical tests.
>
> **[0:07](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=7)** ESLint supports a number of rules for a range of potential logic issues, but I want to use a few specific ones.
>
> **[0:14](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=14)** Line 63 contains a subtle error in the condition that I still find myself making on occasion.
>
> **[0:20](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=20)** Instead of using a logical comparison operator, like triple equals, I used the assignment operator, a single equal sign.
>
> **[0:27](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=27)** That means I won't have a comparison here, and my code won't do what I intended.
>
> **[0:32](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=32)** ESLint supports the no-cond-assign rule to catch assignments in conditions.
>
> **[0:37](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=37)** The default setting allows you to do assignment in a condition within a separate set of parentheses as a way of making your intention clearer.
>
> **[0:44](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=44)** Using that default, I can set the value for this rule with a simple string.
>
> **[0:49](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=49)** So, back in .eslintrc, I'm going to add another rule, no-cond-assign with a value of error, and then saving that, I'm going to switch back to index.js and right away I can see that I have a red underline, and the screen tip mentions the no-cond-assign rule.
>
> **[1:12](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=72)** So ESLint saved my bacon here pointing out this error that changes everything and that I often don't notice.
>
> **[1:19](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=79)** So I can fix that by putting in what I really meant, which was a comparison, triple equals, and now that error's resolved.
>
> **[1:26](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=86)** Another logical instruction that often indicates an error is setting a constant condition, like here in line 68 where my condition is simply false.
>
> **[1:36](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=96)** This can be useful during development to test the code within a control flow block, but it's not useful in deployed code.
>
> **[1:44](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=104)** ESLint can flag this with the no-constant-condition rule.
>
> **[1:48](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=108)** You can customize it to exclude chucking and loops, but otherwise it covers all conditions with a simple string value.
>
> **[1:56](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=116)** I'll set that up in my .eslintrc file to throw an error.
>
> **[2:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=120)** So no-constant-condition with a value of error, and then saving that, returning to index.js.
>
> **[2:11](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=131)** Now that constant condition on line 68 has a red squiggle and the screen tip references no-constant-condition.
>
> **[2:17](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=137)** So I'll change my condition to temp &gt; 25, and the squiggle goes away because my condition's no longer constant.
>
> **[2:28](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=148)** So my code contains one more section of test code starting on line 72.
>
> **[2:33](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=153)** This declares a variable and assigns it a value, and then, in a control flow statement, it uses typeof to check the type of that value.
>
> **[2:42](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=162)** Typeof takes a string as the data type to check, and here I've made a typing error.
>
> **[2:46](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=166)** String is spelled wrong, S-T-R-N-I-G.
>
> **[2:50](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=170)** ESLint has a valid typeof rule that can check values in typeof comparisons.
>
> **[2:56](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=176)** Like the documentation points out, there are generally only eight string values you want to be checking for with typeof.
>
> **[3:01](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=181)** So if you're looking for something else, it's worth flagging.
>
> **[3:04](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=184)** There's an extra option here, but I want to set it up with just a default string value.
>
> **[3:10](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=190)** So back in my eslintrc, I'm going to add valid-typeof and error as the value.
>
> **[3:18](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=198)** And I'll save that, and then over in index.js, I have an error that references valid-typeof.
>
> **[3:25](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=205)** And now that my attention is drawn to it, of course I notice that's spelled wrong.
>
> **[3:29](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=209)** S-T-R-I-N-G is how we spell string, and now I've fixed the spelling that gets rid of the error because this is one of the eight strings that I'm looking for to match in the typeof statement.
>
> **[3:43](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=223)** ESLint supports a few other rules for general logic errors.
>
> **[3:47](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=227)** Use-isnan flags code that checks if a value isn't a number by comparing it to the value NaN.
>
> **[3:54](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=234)** So this is not a reliable comparison.
>
> **[3:56](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=236)** Instead, you want to be using the isnan method.
>
> **[3:58](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=238)** And so this rule is checking specifically for if you're using that or not.
>
> **[4:05](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=245)** No-unsafe-negation raises an issue when the left-most operand is negated.
>
> **[4:10](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=250)** Because this can have unintended effects.
>
> **[4:12](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=252)** The trick there is the use parentheses to clarify exactly what you want to negate.
>
> **[4:19](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/calling-out-general-logic-errors?u=76281980&t=259)** A lot of these rules are on by default in the recommended configuration because they provide a great baseline to help you tighten up most JavaScript code.

> [!info]- Semantic Content
>
> **File Paths:** index.js (4)
> **Code Keywords:** default, (1), switch (1), throw (1), else, (1)
> **CLI Commands:** find (1)
> **Documentation:** the documentation (1)
> **Best Practices:** recommended (1)
> **Speakers:** - [instructor] (1)

#### Challenge
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=0)** (playful music)
>
> **[0:05](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=5)** - [Instructor] Ready to try your hand at configuring ESLint error checking features?
>
> **[0:09](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=9)** It's time for a challenge.
>
> **[0:11](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=11)** The start files for this video are in the challenge folder.
>
> **[0:15](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=15)** For this project, the rules section of the eslintrc file is empty.
>
> **[0:21](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=21)** The index.js file in the source folder contains test code with a few comments.
>
> **[0:26](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=26)** Each comment describes how ESLint should react to the line of code that follows.
>
> **[0:31](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=31)** Your task is to edit the eslintrc file so the five error types in the comments are flagged.
>
> **[0:38](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=38)** You may need to fix earlier flagged errors in order for ESLint to identify errors that occur further down in the code.
>
> **[0:45](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=45)** So fix errors as you go.
>
> **[0:47](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=47)** This should take you 10 to 15 minutes.
>
> **[0:49](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=49)** When you're done, join me in the next video and I'll walk you through how I approached it.
>
> **[0:54](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/challenge?u=76281980&t=54)** Have fun.

> [!info]- Semantic Content
>
> **File Paths:** index.js (1)
> **Cross-References:** in the next (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (playful music) (1)

#### Solution
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=0)** (upbeat electronic music)
>
> **[0:05](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=5)** - [Instructor] In my index.js file, I have some code at the beginning that just sets up some constants, and then I start in on the comments that describe what kind of errors my browser should be flagging.
>
> **[0:17](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=17)** So first off is flagging duplicate arguments in a function.
>
> **[0:20](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=20)** I can see already I have multiple arguments with the same name, and here I have that parsing error that's automatic because my code is being interpreted in strict mode.
>
> **[0:30](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=30)** But the idea here is that I want to write a rule that flags this as well.
>
> **[0:35](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=35)** So over in eslintrc, I'm going to go into rules, and this, recall, is the no-dupe-args rule.
>
> **[0:45](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=45)** And that takes a simple string, so I'm just going to make that an error.
>
> **[0:49](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=49)** Now it's still not going to show up back in index.js, I'm still going to get that parser issue instead.
>
> **[0:56](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=56)** But it looks like I don't even need, oh no I've got a singular session down here.
>
> **[1:01](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=61)** So I'm going to change the second argument to session.
>
> **[1:05](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=65)** No, that is a parameter.
>
> **[1:07](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=67)** I think I may just not need this altogether, so I'm just going to take it out and see what happens.
>
> **[1:13](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=73)** So that's one down.
>
> **[1:15](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=75)** So next up, flag invalid typeof comparison string.
>
> **[1:19](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=79)** And so right here, if we look hard we can see that this is objct, it's missing an E to spell the word object.
>
> **[1:27](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=87)** So we're doing a typeof comparison against a string that doesn't match any commonly used data type in JavaScript.
>
> **[1:33](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=93)** So, back in eslintrc, for this one I want to be using the valid typeof, so that's valid-typeof.
>
> **[1:44](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=104)** And again, that just takes a simple string, error.
>
> **[1:48](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=108)** I'll save that, switch back to index.js, and now I have this flagged and we've got valid typeof in that screen tip.
>
> **[1:56](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=116)** So, that is flagged as we want and I can go ahead and fix that and now that's taken care of.
>
> **[2:03](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=123)** So that's two down.
>
> **[2:04](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=124)** So moving along, flag template literal syntax in string.
>
> **[2:08](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=128)** And so here, we can see that template literal syntax, the dollar sign followed by curly braces, but of course it's not being recognized by my editor because it's surrounded by quotes rather than by backticks, which would indicate a template literal.
>
> **[2:24](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=144)** And so we've got that really long rule name for this one, no template curly in string, so it's going to be no-template-curly-in-string, and the value for this one is simply error.
>
> **[2:40](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=160)** Saving that, switching back, now I've got a nice error, which is what I was looking for.
>
> **[2:45](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=165)** So now I do have this type of error being flagged that prompts me to go ahead and fix it, so changing those quotes, those apostrophes to back ticks, and now the error's gone and that template literal syntax is recognized by my editor, which is awesome.
>
> **[3:01](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=181)** So, couple more down here.
>
> **[3:03](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=183)** Flag console method use other than console.warn.
>
> **[3:06](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=186)** So here I've got a console.log statement, so I want to make console statements errors except in this case I'm saying I want to make sure that console.warn statements do not actually trigger an error.
>
> **[3:19](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=199)** So, I have to create a rule value that is not just a standard string but actually has some finesse to it.
>
> **[3:29](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=209)** So, the error here is no-console, and the value is going to be an array.
>
> **[3:37](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=217)** So this is all documented as everything else in that [eslint.org](https://eslint.org) man page for this particular rule.
>
> **[3:45](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=225)** And so first we say, a string, we give a string for the type of issue that we want raised when this problem occurs, and we want it to raise an error.
>
> **[3:54](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=234)** And then we have to specify any additional options, that's in an object.
>
> **[4:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=240)** And one of the keys is allow, so we're going to specify what we want to allow, what exceptions we want to this error, and that value is an array containing one or more strings, and those strings are going to be the methods that we want to allow.
>
> **[4:17](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=257)** And in this case, based on the comment in our index.js file, we know warn is the string that we want to allow.
>
> **[4:25](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=265)** So, comma after that, comma after that, comma after that, saving those changes.
>
> **[4:32](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=272)** And then back in index.js.
>
> **[4:34](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=274)** We still have that console.log being flagged.
>
> **[4:37](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=277)** So, couple things I could do.
>
> **[4:38](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=278)** I could comment that out to get rid of it, but let's try changing that log to a warn, and now I can verify that my statement's working because I'm doing a console.warn which is just going to log a message to the console but mark it as a warning within the browser console, within the browser developer tools.
>
> **[4:57](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=297)** And so it's going to show up maybe in a different color or with an icon next to it.
>
> **[5:02](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=302)** But in this case, that's what we want going on.
>
> **[5:05](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=305)** So I've got a rule in place and my code is fixed to comply with that rule.
>
> **[5:09](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=309)** So, one more left then, flag empty block in control flow structure.
>
> **[5:14](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=314)** So, I have an else statement here that's orphaned, there's nothing in that else statement, but it's also not being flagged.
>
> **[5:20](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=320)** So we'll go to eslint and add one more rule.
>
> **[5:24](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=324)** And that is the no-empty rule.
>
> **[5:27](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=327)** Straightforward, with a value of error.
>
> **[5:31](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=331)** Save that, come back to index.js, and it is flagged.
>
> **[5:36](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=336)** There is my empty block statement that should not be there.
>
> **[5:41](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=341)** And so I could start with the else and just take out everything through the opening and closing curly's, but I can also do a little shortcut here by just selecting the line that ends the previous block statement and then starts this one, and that gets me an else, it gets me a pair of curly's, and lets me leave this terminal curly here on its own line without having to move everything around.
>
> **[6:05](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=365)** So, it's going to save a little thing in the dif for instance.
>
> **[6:09](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=369)** So, saving that, now I have all five of those rules in place over in my eslintrc.
>
> **[6:17](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=377)** And I have all of the issues resolved in my code.
>
> **[6:22](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/solution?u=76281980&t=382)** So, I've got code that is looking better and working the way I want based on these rules that I've just written, and customized for my specific use.

> [!info]- Semantic Content
>
> **Code Keywords:** case, (2), function (1), this, (1), switch (1), for. (1)
> **File Paths:** index.js (6)
> **Exercise Files:** template (6)
> **CLI Commands:** make (3)
> **Definitions:** is a  (1), is an  (1)
> **URLs:** [eslint.org](https://eslint.org) (1)
> **Documentation:** man page (1)
> **Tools:** terminal (1)


### 3. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/next-steps?u=76281980&t=0)** - [Sasha] Thanks so much for joining me in this course.
>
> **[0:03](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/next-steps?u=76281980&t=3)** You now have experience setting up and configuring ESLint rules that flag possible errors.
>
> **[0:08](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/next-steps?u=76281980&t=8)** To dig deeper into incorporating ESLint into a tool chain, check out a course on Integrating ESLint.
>
> **[0:14](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/next-steps?u=76281980&t=14)** If you want to understand more about ESLint syntax, check out a course on Customizing ESLint styles.
>
> **[0:20](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/next-steps?u=76281980&t=20)** If you want to learn more about the reasons behind common coding styles, check out a course on JavaScript best practices.
>
> **[0:27](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/next-steps?u=76281980&t=27)** Feel free to follow me online.
>
> **[0:29](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/next-steps?u=76281980&t=29)** Now take your new skills and build something amazing.
>
> **[0:31](https://www.linkedin.com/learning/eslint-checking-for-syntax-and-logic-errors/next-steps?u=76281980&t=31)** Good luck.

> [!info]- Semantic Content
>
> **Speakers:** - [sasha] (1)


## Instructor

- [[Sasha Vodnik]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/eslint-syntax-2255011/codespaces)

## Skills Covered

- ESLint

## Path Context

### In [[Advance Your JavaScript Skills]]
← [[ESLint- Integrating with Your Workflow]] | **5 of 10** | [[ESLint- Customizing Styles]] →

## Appears In

- [[Advance Your JavaScript Skills]]

## Related Courses

_Courses sharing skills:_

- [[ESLint- Customizing Styles]] — ESLint
- [[ESLint- Integrating with Your Workflow]] — ESLint

---

[↑ Back to top](#)