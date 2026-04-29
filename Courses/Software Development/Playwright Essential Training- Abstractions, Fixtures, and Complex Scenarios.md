---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: playwright-essential-training-abstractions-fixtures-and-complex-scenarios
url: "https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios"
duration_minutes: 249
duration: 4h 9m
level: Intermediate
updated: 5/29/2025
learners: 56178
skills:
  - Test Automation
exercise_files: true
github: "https://github.com/LinkedInLearning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios-4278224"
thumbnail: "https://media.licdn.com/dms/image/v2/D4E0DAQE9lAhxTlWiCg/learning-public-crop_675_1200/B4EZcYCy.PHsAc-/0/1748455076488?e=2147483647&amp;v=beta&amp;t=CPHzDNayYyzEjIJFGfimqD6l_PUS5tJY7f9d8NmHDqE"
linkedin_topic: Software Development
learning_paths:
  - '[[Master Test Automation with Playwright]]'
prev_courses:
  - '[[Learning Playwright]]'
next_courses:
  - '[[Playwright- Design Patterns]]'
path_nav: '[{"path":"Master Test Automation with Playwright","position":2,"total":4,"prev":"Learning Playwright","next":"Playwright- Design Patterns"}]'
path_count: 1
tags:
  - course
  - topic/software-development
  - skill/test-automation
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Software%20Development/Playwright%20Essential%20Training-%20Abstractions%2C%20Fixtures%2C%20and%20Complex%20Scenarios.md)

![Playwright Essential Training: Abstractions, Fixtures, and Complex Scenarios](https://media.licdn.com/dms/image/v2/D4E0DAQE9lAhxTlWiCg/learning-public-crop_675_1200/B4EZcYCy.PHsAc-/0/1748455076488?e=2147483647&amp;v=beta&amp;t=CPHzDNayYyzEjIJFGfimqD6l_PUS5tJY7f9d8NmHDqE)

# Playwright Essential Training: Abstractions, Fixtures, and Complex Scenarios

> Playwright is a newer tool that has joined the ranks of Cypress and Selenium in open-source automation tooling. Playwright works right out of the box, and its comprehensive feature set allows testers and developers to quickly create new test automation projects without having to rely on combining multiple libraries and tools together. Whether you are a manual tester looking to dip your toes into t

> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios) | 4h 9m | Intermediate | 56K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (5 videos)
- **[[#2. 1. Abstractions in Playwright]]** (10 videos)
- **[[#3. 2. Fixtures in Playwright]]** (7 videos)
- **[[#4. 3. Mocking and Emulation in Playwright]]** (8 videos)
- **[[#5. 4. Customizing the Playwright Config]]** (4 videos)
- **[[#6. 5. Handling Complex Scenarios and Interactions in Playwright]]** (4 videos)
- **[[#7. Conclusion]]** (1 videos)

### 1. Introduction

#### Level up your Playwright skills: Complex scenarios simplified
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/level-up-your-playwright-skills-complex-scenarios-simplified?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/level-up-your-playwright-skills-complex-scenarios-simplified?u=76281980&t=0)** - [Butch] Are you looking to create scalable and reliable tests in Playwright?
>
> **[0:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/level-up-your-playwright-skills-complex-scenarios-simplified?u=76281980&t=5)** Leveling up your Playwright skills will help you achieve this with ease.
>
> **[0:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/level-up-your-playwright-skills-complex-scenarios-simplified?u=76281980&t=10)** Join me as we learn how to write scalable tests using the right level of abstractions, with page objects, fixtures, and data factories.
>
> **[0:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/level-up-your-playwright-skills-complex-scenarios-simplified?u=76281980&t=20)** We'll work through network calls, handle complex browser behaviors, and improve your automation skills with real-world challenges.
>
> **[0:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/level-up-your-playwright-skills-complex-scenarios-simplified?u=76281980&t=30)** The knowledge from this course will empower you to build cleaner, faster, and more powerful Playwright tests in order to deliver high-quality software.
>
> **[0:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/level-up-your-playwright-skills-complex-scenarios-simplified?u=76281980&t=40)** I'm Butch Mayhew, a Playwright ambassador and creator of [playwrightsolutions.com](https://playwrightsolutions.com).
>
> **[0:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/level-up-your-playwright-skills-complex-scenarios-simplified?u=76281980&t=46)** Are you ready to level up?

> [!info]- Semantic Content
>
> **URLs:** [playwrightsolutions.com](https://playwrightsolutions.com) (1)
> **Speakers:** - [butch] (1)

#### What you need to know
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=0)** - [Butch] In order to have success in this course, you should have a basic understanding of how Playwright works.
>
> **[0:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=7)** This course builds on top of the Learning Playwright course, which could be thought of as Part 1.
>
> **[0:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=16)** The code examples for this course pick up where I left off in the final video.
>
> **[0:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=21)** While this course will be covering Playwright using TypeScript, as long as you're familiar with the basics of programming, you should be able to follow along with the videos.
>
> **[0:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=32)** If you haven't finished the Learning Playwright course, here are a few things to get your environment set up for success.
>
> **[0:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=41)** First, let's check which version of Node you have installed.
>
> **[0:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=45)** So, open up a terminal, type in node --version, hit Enter.
>
> **[0:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=54)** If it's anything lower than 20, you should go ahead and install version at least 20.
>
> **[1:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=61)** Anything above 20 should also work.
>
> **[1:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=64)** If you get an unknown command or an error, you should also go ahead and install at least version of 20 of Node.
>
> **[1:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=73)** I prefer using the Node Prebuilt Installer link that can be found in the Resources guide.
>
> **[1:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=79)** Once Node is installed, I would highly encourage you to go ahead and install VS Code.
>
> **[1:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=85)** This is the IDE that I'm working on.
>
> **[1:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=88)** If you don't have that installed, you can find the link in the Resources guide as well.
>
> **[1:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=93)** Once that's installed, you're definitely going to want to get the VS Code Playwright Extension.
>
> **[1:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=101)** This is what it looks like, and it allows you to run test from within VS Code.
>
> **[1:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/what-you-need-to-know?u=76281980&t=107)** This extension will really make Playwright fun to work with as you're iterating on your test.

> [!info]- Semantic Content
>
> **CLI Commands:** node (5), find (1), make (1)
> **Tools:** vs code (3), terminal (1)
> **Prerequisites:** install (3), set up (1)
> **Code Keywords:** let (1)
> **Env Vars:** ide (1)
> **Speakers:** - [butch] (1)

#### Using the GitHub exercise files
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=0)** - [Instructor] Throughout this course, we'll be using the GitHub repo located here.
>
> **[0:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=6)** The main read me contains instructions on using and switching to different branches.
>
> **[0:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=11)** One of the most useful files in the repo though is the resources.md file.
>
> **[0:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=19)** This file includes a link to all relevant playwright documentation that we cover, direct links to different code branches and other links that we provide in the course.
>
> **[0:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=31)** As a part of the previous course learning playwright, we've already created the basics of a test automation framework, which we will pick up in the first branch, 01_02B.
>
> **[0:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=46)** Within this repo, we'll be having checkpoints with beginning and ending branches for each lesson where the code changes.
>
> **[0:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=55)** With this understanding in place, we're ready to clone the repo and set our environment up.
>
> **[1:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=62)** If your local code repo is broken or not in sync with MyCode base and you're okay losing any of your progress or any of your custom code, you can catch up to any of the lessons by resetting your branch and checking out the most recent branch.
>
> **[1:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=80)** I'm going to walk through these two commands and then in the next chapter, you'll be cloning the repo and you can test out these commands.
>
> **[1:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=91)** If I wanted to switch to switch to say branch 01_02B, which is the first branch here, I can type in git switch 01_02B and notice all these files here.
>
> **[1:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=111)** A lot of 'em are going to disappear 'cause they haven't been created yet in this specific branch.
>
> **[1:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=118)** If for some reason I make some changes, let's say add a bunch of stuff to a file, and my test is failing now and I'm not sure exactly what I did to mess it up, and you just want to reset back to the original state, you can do that with the command git reset --hard.
>
> **[2:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=142)** What this will do is it will reset the branch to the current branch that you have checked out and remove any changes.
>
> **[2:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-the-github-exercise-files?u=76281980&t=152)** This sets it to its default state.

> [!info]- Semantic Content
>
> **Code Keywords:** switch (3), let (1)
> **CLI Commands:** git (2), make (1)
> **UI Navigation:** switch to (2)
> **Exercise Files:** github repo (1), clone the repo (1)
> **File Paths:** resources.md (1)
> **Cross-References:** in the next (1)
> **Tools:** github (1)
> **Speakers:** - [instructor] (1)

#### Cloning the repository and installation
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=0)** - [Instructor] To get started, we'll first need to pull down or clone the repository we'll be working with.
>
> **[0:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=8)** You have a few different options to clone the repo.
>
> **[0:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=11)** Once you're on the GitHub page, you can click this Code button and see the options.
>
> **[0:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=18)** To clone the code locally, you have an option to do that via HTTPS, SSH, GitHub CLI, or to open it with GitHub Desktop.
>
> **[0:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=32)** If you want to use GitHub Desktop to manage the repo, you can learn more and download it from the link that's found in the resources file for this section.
>
> **[0:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=43)** There's also a link to using repositories in GitHub, which will walk you through a little more in depth on how to use remote branches.
>
> **[0:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=55)** But I would recommend that you go ahead and set up SSH for GitHub.
>
> **[1:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=61)** This will require you to configure an SSH key, and this is one of the most popular ways to manage a remote Git repository.
>
> **[1:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=71)** Once you have your method selected, let's go ahead and clone the repository to your local machine.
>
> **[1:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=77)** So I'm going to go back to the main GitHub page.
>
> **[1:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=81)** I'm going to click on the Code button.
>
> **[1:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=83)** I'm going to choose SSH.
>
> **[1:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=86)** And for this, I'm just going to copy this link and this is the Git path to clone it.
>
> **[1:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=93)** The next thing I'm going to do is open up a terminal.
>
> **[1:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=96)** I'm going to open up a folder that I want to clone this repository to.
>
> **[1:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=101)** It's going to copy down a whole folder with all the code in the repo there.
>
> **[1:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=107)** And I'm going to type in the command to do that.
>
> **[1:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=110)** Git space clone space and I'm going to paste.
>
> **[1:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=117)** This is going to clone all the files that are in the repo to my local machine, and it created a folder called playwright-essentials.
>
> **[2:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=125)** So if I do an ls, or if you're on a Windows machine, you can type dir and hit Enter, you'll see that there's a new folder, a new directory that's been downloaded.
>
> **[2:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=137)** So I'm going to go ahead and cd into that directory.
>
> **[2:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=141)** This should be the same for both Mac and Windows.
>
> **[2:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=144)** You type in cd space, start typing in playwright, and you can just type Tab and it should auto complete, and you should be able to hit Enter.
>
> **[2:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=156)** Now within this folder, you can actually see there is a git and there's a main.
>
> **[2:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=162)** This main indicates that this is the branch we currently have checked out.
>
> **[2:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=167)** This main branch includes all the code from the entire course.
>
> **[2:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=173)** So if you want to start off where we're going to be starting off, let's go ahead and swap our branch to 01_02b.
>
> **[3:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=185)** This can also be found in the resources file 01_02b, this is a link to that.
>
> **[3:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=196)** To switch your branch, you're going to type in git space switch 01_02b.
>
> **[3:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=207)** What this did is this got us in the appropriate branch where you are starting at the very beginning of this course.
>
> **[3:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=217)** There's two more things we need to do.
>
> **[3:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=219)** The first thing is we need to install all the node dependencies.
>
> **[3:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=224)** To do that, you're going to type in mpm install and hit Enter.
>
> **[3:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=232)** This may take a few minutes depending on if you have any of these installed or not.
>
> **[3:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=239)** I'm going to clear this so we're back up at the top.
>
> **[4:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=242)** And the last thing you want to do is you want to install Playwright itself, and this is really just the Playwright browsers.
>
> **[4:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=250)** To do that, you're going to type in npx space playwright space install.
>
> **[4:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=256)** Now for you, it's probably going to take a few minutes to get all the different browsers installed.
>
> **[4:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=262)** I've already got the browsers installed, so yeah, if you have them already, it should just go really quick.
>
> **[4:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=269)** The last thing we want to do here just to make sure our environment is good to go, is we want to run the existing Playwright tests.
>
> **[4:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=277)** To do that, we're going to type in npx space playwright space test.
>
> **[4:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=285)** You should see all the different tests run, and they should all pass.
>
> **[4:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=293)** If you are on Windows, one of the tests might fail if it's one of the visual tests.
>
> **[5:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/cloning-the-repository-and-installation?u=76281980&t=301)** But once you've run it once, it should pass the second time because it's saving the snapshot.

> [!info]- Semantic Content
>
> **CLI Commands:** git (5), ssh (4), cd (2), npx (2), ls (1)
> **Code Keywords:** let (2), switch (2), pass (2), require (1), this, (1)
> **Tools:** github (7), terminal (1)
> **Env Vars:** ssh (4), https (1), cli (1)
> **Prerequisites:** install (4), set up (1), configure (1)
> **Definitions:** is a  (2)
> **Cross-References:** go back to (1)
> **UI Navigation:** click on (1)

#### Overview of the website under test
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=0)** - [Instructor] As a part of this course, we'll be using a dedicated site to test against, [practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[0:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=9)** This site was built by Roy de Kleijn and is used for practicing software testing.
>
> **[0:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=16)** It's always a good idea to take some time and go explore the websites that you plan to automate.
>
> **[0:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=21)** So let's do that now by following this link.
>
> **[0:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=26)** One thing to note is there's also the source code for the webpage that's provided on GitHub.
>
> **[0:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=32)** That link is also in the resource file.
>
> **[0:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=36)** This file, as we take a look at it, also provides us with username and passwords for default accounts, along with different versions of the site, including a version of the site that has bugs baked into it.
>
> **[0:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=54)** Let's do a bit of exploring together on the website.
>
> **[0:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=57)** Let's start by opening up developer tools.
>
> **[1:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=60)** We can do this by right clicking the screen, clicking inspect, and opening our network tab.
>
> **[1:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=68)** And let's go ahead and click on network.
>
> **[1:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=71)** And let's go ahead and just refresh the page and see what network calls get made.
>
> **[1:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=77)** Now for my version, I've actually got all my network calls filtered down to fetch/xhr, and what this is going to do is it's only going to return back different requests that are made to an API.
>
> **[1:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=94)** So for example, I can see these are all the different requests that were made from the API.
>
> **[1:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=100)** So I can look at brands and see that this brand's API call makes a call and it comes back with some different brands, Forge Flex Tools, Mighty Craft Hardware.
>
> **[1:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=114)** If I scroll down, I'll likely see these brands down here.
>
> **[2:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=120)** As we click through the site, we can also see additional calls are being made in the network tab.
>
> **[2:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=128)** This is important because we're going to use some playwright functionality to actually intercept and interact with these different network requests.
>
> **[2:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=138)** Also, let's scroll to the top and see that there is a sign in page.
>
> **[2:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=144)** On the sign in page, there's some logins that the developer did provide.
>
> **[2:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=149)** So let's go ahead and use one of those logins and actually login to the site.
>
> **[2:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=155)** So one of our logins is customer@[practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[2:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=161)** I'm going to copy this and the password is welcome01.
>
> **[2:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=166)** I think we can remember that one.
>
> **[2:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=169)** All right, welcome01.
>
> **[2:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=173)** I'm going to click login.
>
> **[2:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=176)** As you can see, when you're locked in, you have other functionality that we could continue to explore or we can think through what different tests.
>
> **[3:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=186)** While logged in as a user, let's go ahead and just walk through the messages section.
>
> **[3:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=193)** So currently there are no messages.
>
> **[3:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=195)** Let's navigate to this contact form.
>
> **[3:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=199)** Let's fill out a message.
>
> **[3:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=206)** I'll click send.
>
> **[3:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=207)** We'll learn more about the system by exploring.
>
> **[3:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=211)** We'll hit send again and let's go back to my messages and just look into this.
>
> **[3:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=221)** And when the contact us happens, it shows up in messages it looks like, and I can also click details to see the messages, and I can probably reply as well.
>
> **[3:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=236)** All right, so as I'm interacting with this site, I can see different API calls that are made.
>
> **[4:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=243)** I can also come in here and inspect the dom 'cause we are going to be working with this section as we write out tests.
>
> **[4:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=250)** So the more you explore and understand the site you're actually testing, the better off you're going to be when it comes to actually writing a playwright test against this functionality.
>
> **[4:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=263)** So feel free to take some additional time before the next video and dive deeper into any of the other areas of this web application.
>
> **[4:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=271)** It could be on different tools or a checkout flow.
>
> **[4:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=275)** Don't be afraid to click or break anything.
>
> **[4:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=278)** Again, this is a test site.
>
> **[4:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=280)** It's not production, but there are some valid features here that you should learn.
>
> **[4:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=287)** One other thing to note is this website does get reset every so often.
>
> **[4:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=292)** So any test data that you actually do create will automatically get cleaned up after a certain amount of time.
>
> **[5:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-the-website-under-test?u=76281980&t=300)** So just keep that in mind.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), continue (1), this. (1)
> **Env Vars:** api (4)
> **UI Navigation:** click on (1), scroll down (1), navigate to (1)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (2)
> **Cross-References:** go back to (1), next video (1)
> **Definitions:** is a  (2)
> **Tools:** github (1)
> **Exercise Files:** source code (1)


### 2. 1. Abstractions in Playwright

#### Abstractions: Pros and cons
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=0)** - [Instructor] In this chapter, we'll focus on ways to make Playwright test framework more maintainable through abstractions.
>
> **[0:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=7)** First, let's define abstractions.
>
> **[0:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=10)** Simplified representations of more complex systems, ideas, or processes.
>
> **[0:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=17)** They help us manage complexity by focusing on the essential details and ignoring the irrelevant ones.
>
> **[0:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=25)** But there are things you should know.
>
> **[0:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=27)** With every abstraction comes risk.
>
> **[0:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=29)** Abstracting too little can mean that you have a lot of code duplication, whereas abstracting too much can lead to overly complex code and interactions.
>
> **[0:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=42)** Let's start with a popular type of abstraction, page objects.
>
> **[0:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=47)** Abstracting away DOM elements into a page object can be a great way to separate your test code and implementation code.
>
> **[0:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=55)** What I mean by that is building out unique locators for the different elements on a webpage and calling those elements by the name that you created.
>
> **[1:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=66)** For example, if I landed on a login page, I may have an email input, a password input, and a login button.
>
> **[1:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=76)** Ideally, I could create three unique variable names, email, password, login, and have these locators live in a different file than the test I'm writing.
>
> **[1:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=86)** This way, if the underlying locator changes, I actually don't have to change the test.
>
> **[1:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=92)** I only need to update the page object itself.
>
> **[1:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=95)** This simplifies maintaining your test.
>
> **[1:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=100)** My advice is, create a page object locator for any element you interact with.
>
> **[1:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=106)** Don't feel like you have to create page objects for every single element.
>
> **[1:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=110)** Just add them along as needed.
>
> **[1:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=113)** This is also really helpful in the site you're testing against if they use components.
>
> **[1:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=119)** It's okay to create a higher level abstraction for a component that is used across multiple pages.
>
> **[2:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=127)** Another way to abstract logic from a test could be to create a group of actions and have these actions live within the page object.
>
> **[2:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=134)** Looking at our previous example, what if we were to combine three locator actions, fill email, fill password, and click login, into a single function that could be called from a Playwright test we're writing?
>
> **[2:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=148)** This would allow us to only have one line of code in order to log into a system with multiple steps.
>
> **[2:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=155)** This could be a really positive thing if you're having to log in multiple times throughout your test.
>
> **[2:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=161)** This also helps when adding these actions to a page object class.
>
> **[2:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=165)** Thanks to TypeScript's auto complete functionality, you'll have quick access to it.
>
> **[2:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=171)** This also will help you maintain your test as they grow.
>
> **[2:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=176)** My advice is, creating functions for groups of actions can be really useful if you use them more than once in a test or across multiple tests.
>
> **[3:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=185)** Just make sure your function is somewhat generic and can be used for multiple scenarios.
>
> **[3:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=193)** Another practice I've seen is taking the page object or abstractions a step further and adding assertions to the page object file within a group of actions.
>
> **[3:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=203)** An example could be validating that the user is logged in as part of that login function.
>
> **[3:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=210)** My advice is, this likely makes sense with groups of actions and should be used when creating test data especially.
>
> **[3:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=219)** However, when it comes to the actual assertions within a test block, things I'm specifically testing for, I like to include these specs within the spec file themselves.
>
> **[3:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=231)** This makes it easy.
>
> **[3:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=233)** If a test does fail, you know exactly where to investigate in your test.
>
> **[3:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=239)** When you abstract assertions away from the spec files, the test does become more difficult to maintain.
>
> **[4:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=247)** I don't recommend doing that.
>
> **[4:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=250)** One example?
>
> **[4:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=252)** Well, what about abstracting away data creation methods?
>
> **[4:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=256)** One example could be to create a data factory.
>
> **[4:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=260)** This could be a set of functions that are used specifically to create or modify test data for your test.
>
> **[4:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=268)** These are likely functions that get called and will return some sort of value to the test itself.
>
> **[4:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=275)** These are really easy to execute.
>
> **[4:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=277)** And again, thanks to TypeScript, if we're building these as functions, there's some auto complete functionality that helps make these really maintainable and usable.
>
> **[4:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=289)** I'm a big fan of creating abstractions in order to create and manage or test data, and in this chapter specifically, we will be building out a data factory together.
>
> **[5:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=301)** If you've ever had to do the same thing over and over in code, you found how useful it is to create a function.
>
> **[5:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=309)** This is true with test automation suites as well.
>
> **[5:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=312)** If there's duplicated code snippets or helper functions throughout your automation code base, you will find yourself in a maintenance nightmare, having to keep multiple implementations up to date.
>
> **[5:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/abstractions-pros-and-cons?u=76281980&t=324)** My advice is, anytime you find yourself doing something more than once or twice, go ahead and abstract that away into a common helper function, and it will streamline your Playwright test.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), abstract (3), let (2), class. (1), for, (1)
> **CLI Commands:** make (3), find (2)
> **Documentation:** spec (2)
> **Env Vars:** dom (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Creating a page object in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=0)** - [Instructor] For our first step into abstractions, we'll keep things really simple.
>
> **[0:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=4)** There will be some extra code you may not understand right away.
>
> **[0:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=8)** Just type along with me.
>
> **[0:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=10)** Trust me, it is needed, and you will get to understand it.
>
> **[0:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=15)** For this exercise, we are going to abstract away the email address input, the password input in this login button in our off.spec.ts file.
>
> **[0:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=25)** So, let's go open up our code base, and if you haven't already, you can go ahead and check out the Branch 01_02b.
>
> **[0:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=34)** This is going to be where we're starting.
>
> **[0:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=36)** And open up this off.setup.ts file in the test directory.
>
> **[0:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=44)** In this file, you can see we have these three elements that we're interacting with.
>
> **[0:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=50)** We are filling this email, the password in the login submit button.
>
> **[0:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=56)** Our plan is to extract away these locators into their own page object file.
>
> **[1:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=66)** So, to do that we first need to create a folder.
>
> **[1:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=69)** So, if you come up to the top here, I'm just going to close this directory and you know, click in this main directory so it creates the folder at the right level.
>
> **[1:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=80)** I'm going to click new folder.
>
> **[1:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=81)** We're going to create a folder named lib, short for libraries.
>
> **[1:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=87)** We're going to in that folder, create another new folder.
>
> **[1:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=90)** So, this is another way you can create a folder other than clickin' this button, right click, click New Folder.
>
> **[1:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=95)** We're going to call this folder pages.
>
> **[1:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=98)** This is going to be where our page objects live.
>
> **[1:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=100)** And just in this folder we're just going to create a new file.
>
> **[1:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=104)** We're going to call it login.page.ts.
>
> **[1:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=110)** This is where we'll build out and abstract away the page object language.
>
> **[1:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=116)** So, we're going to start with importing.
>
> **[1:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=119)** So, let's do our import.
>
> **[2:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=121)** It's going to look a little different than what we've we're used to, but we're going to import the type Locator.
>
> **[2:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=128)** (keyboard clicking) We're going to import the type page from @playwright/test.
>
> **[2:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=136)** So, we've got locators and pages within this file that we can start to work with.
>
> **[2:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=142)** The next thing we're going to do is we're going to export a login page class.
>
> **[2:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=147)** So, we're going to type in export class, LoginPage.
>
> **[2:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=152)** One thing to note is any classes you create in TypeScript should be uppercase at the beginning and uppercase in the middle.
>
> **[2:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=161)** And we're going to do a open bracket, and this is going to be the start of our class.
>
> **[2:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=168)** Within the main class, we'll add some read-only calls to establish which elements we will be abstracting, and then we will create a constructor which uses those elements.
>
> **[3:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=180)** So, let's start by doing read-only, space, page, colon, so lowercase page.
>
> **[3:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=189)** And then we're going to type in uppercase Page.
>
> **[3:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=191)** So, we're setting the page has a type of uppercase Page.
>
> **[3:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=195)** We're also going to establish those elements.
>
> **[3:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=198)** So, read-only emailInput.
>
> **[3:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=201)** So, this is a name that I am giving it.
>
> **[3:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=205)** And this is going to be a Locator, read-only passwordInput.
>
> **[3:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=212)** This is going to be a Locator, read-only loginButton.
>
> **[3:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=218)** And this will also be a Locator.
>
> **[3:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=222)** The next thing we're going to do is add a constructor.
>
> **[3:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=225)** A constructor in TypeScript is automatically invoked when a new instance of the class is created.
>
> **[3:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=232)** For playwright page objects, it is important to get this syntax right.
>
> **[3:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=238)** So, within this constructor, let's go ahead and start typing here.
>
> **[4:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=243)** We're going to type in constructor.
>
> **[4:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=245)** We've got some nice auto complete there.
>
> **[4:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=247)** We're going to do an open parentheses.
>
> **[4:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=249)** We're going to pass in page with a type of Page.
>
> **[4:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=254)** And then after this parentheses, we're going to create an open bracket.
>
> **[4:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=257)** And this is going to be our constructor code.
>
> **[4:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=261)** This is really where the magic happens.
>
> **[4:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=265)** Specifically, in this line, we're going to type in this.page equals page.
>
> **[4:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=274)** This is the magic that allows the abstraction to work properly along with all the other defined locators.
>
> **[4:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=281)** So, let's add those other locators now.
>
> **[4:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=283)** We're going to start with this.emailInput.
>
> **[4:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=289)** We're going to set that equal to page.getByTestId, and we're going to pass in email.
>
> **[4:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=297)** So, this is the same locator that was listed on the other page that we were looking at, the auth setup, page.getByTestId.
>
> **[5:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=308)** So, we could simplify this.
>
> **[5:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=309)** We're going to go ahead and just copy and paste these next ones.
>
> **[5:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=315)** This.passwordInput equals, and we're going to say, this.LoginButton equals, and we will go ahead and copy and paste from auth setup page.getByTestId login-submit.
>
> **[5:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-page-object-in-playwright?u=76281980&t=336)** Now, that we have built the basic page object, we're ready to use this page object in our test.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this. (5), abstract (2), class. (2), class, (2)
> **Code Identifiers:** getbytestid (3), emailinput (2), passwordinput (2), loginbutton (1)
> **File Paths:** off.spec.ts (1), off.setup.ts (1), login.page.ts (1)
> **Prerequisites:** setup (3)
> **Definitions:** short for (1), is a  (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (keyboard clicking) (1)

#### Using a page object in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=0)** - [Instructor] So let's go ahead and implement this page object we just created for the login page.
>
> **[0:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=6)** So we're going to go back to our auth.setup.ts file, and up at the top, we want to import the LoginPage class we just created.
>
> **[0:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=19)** This is the syntax and we've got to say where it's coming from.
>
> **[0:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=24)** This is where we've got to do a little directory traversal, ../lib/pages/login.page.
>
> **[0:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=37)** So in this scenario, I had to go up one directory and then I found lib/pages/login.page and it is active.
>
> **[0:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=47)** So now we want to use this login page.
>
> **[0:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=51)** We want to initialize it in our test.
>
> **[0:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=54)** So I'm going to do that right up here at the top above the goto.
>
> **[0:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=59)** To do that, we're going to type in const.
>
> **[1:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=62)** We're going to create a new variable called loginPage, and we're going to set that equal to new and then pass in the class LoginPage and then we're going to pass in page.
>
> **[1:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=78)** So now this login page should have access to everything within this class.
>
> **[1:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=85)** So let's go replace these or update our test down here.
>
> **[1:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=89)** So we're going to replace this section, page.getByTestId("email") with loginPage.
>
> **[1:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=98)** There's some nice auto complete there for you, and now we've got four different options.
>
> **[1:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=102)** We're going to choose emailInput and we're going to do the same for the password, loginPage.passwordInput and this one will be logiPage.loginButton.
>
> **[2:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=121)** So notice that all we're doing is calling the locators.
>
> **[2:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=126)** Our test is still doing this action here, right?
>
> **[2:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=129)** Our test is still filling the email, filling the password, clicking the button.
>
> **[2:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=134)** We've just abstracted away the locators to this file.
>
> **[2:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=139)** So let's go ahead and add on to this page object and abstract away another piece of logic on this alt setup page.
>
> **[2:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=147)** As you can see here, we have this page.goto and we're going to a specific page.
>
> **[2:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=154)** What we want to do is we want to refactor this.
>
> **[2:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=157)** So we actually go to a loginPage.goto.
>
> **[2:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=163)** We can create a goto function on the loginPage that we can call.
>
> **[2:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=166)** So what that will look like would be await loginPage.goto.
>
> **[2:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=174)** It doesn't exist yet, so it's not going to like me saving it.
>
> **[2:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=177)** There'll be a red squiggly, but we're going to implement this here and replace this over here.
>
> **[3:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=183)** So I'll go ahead and copy this over so we have it here, and let's go to our login page and we'll walk through how to implement a function into this class.
>
> **[3:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=195)** So as I mentioned earlier, constructors are automatically run when the class is initiated.
>
> **[3:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=202)** So we don't want to add the code there, but we still want it within the class.
>
> **[3:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=206)** So we're going to go to the end of the constructor, and we're going to create a new function here, and this function is going to be an async function because we're working with page and we're going to name it goto and then I'm going to add a open parentheses, close parentheses, and then the code for this function will live in the open, the curly brackets here.
>
> **[3:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=232)** So again, this goto is just a name I'm giving it.
>
> **[3:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=235)** I could name it anything and call it from our test and it's going to execute whatever code's in here, but we want to make things really clear, so we want to goto and its specific website.
>
> **[4:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=247)** So let's go ahead and say await this.page.goto and then I can pass in the same website, and now I'm going to this every single time.
>
> **[4:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=261)** So now if I want to implement this on our alt setup page, it's just a matter of, well, you see it's already implemented.
>
> **[4:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=271)** It's happy it exists.
>
> **[4:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=273)** I can clean this up, and let's just run this and make sure everything is still working.
>
> **[4:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=278)** So assuming you've installed your Playwright VS Code extension, you may have a green run button here.
>
> **[4:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=286)** If you don't, you may need to go into your sidebar and go enable the setup project.
>
> **[4:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=294)** Doing this will basically tell the Playwright extension that, "Hey, I want to run the setup project in the context of my test," and you can decide if you want to show a browser or show anything else.
>
> **[5:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=305)** Right now I'm just going to run it headless, so I'm going to click play.
>
> **[5:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=310)** It's going to execute this code.
>
> **[5:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=313)** I'm going to make sure that things still pass.
>
> **[5:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=315)** So this assertion is passing.
>
> **[5:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=318)** It means our page object is implemented properly.
>
> **[5:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=323)** One thing to remember as you're building out page objects is ideally you want the locators and actions that happen that are grouped together to be on the page object you're working on.
>
> **[5:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=336)** So ideally you wouldn't have this homepage.
>
> **[5:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=340)** So this Jane Doe assertion happens on the homepage.
>
> **[5:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=343)** It doesn't happen on the login page in our test.
>
> **[5:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=347)** Ideally you would want to bring in a homepage and do the assertion there, rather than add this locator on the login page.
>
> **[5:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=357)** I'll also pass on this other tip.
>
> **[5:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=359)** We can use, if you don't want to repeat the same steps on certain pages over and over, you can create an abstraction for the login function.
>
> **[6:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=369)** That would be entering the email, entering the password, and clicking the login button, and just making sure that you're logged in there.
>
> **[6:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=377)** This is a helpful way to structure code in large projects, especially if there's a lot of repeating happening.
>
> **[6:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=385)** So to do that, let's go back to our login page and let's create another function.
>
> **[6:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=395)** We want the function to be called login.
>
> **[6:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=398)** So async login.
>
> **[6:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=401)** It's going to be a function.
>
> **[6:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=403)** We will come back to the function 'cause we're going to have to pass in some parameters, and we're just going to go ahead and interact with the already created locators that we've created up here, and the way you do that within a class is using this this syntax.
>
> **[7:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=422)** So await this.emailInput and then we're going to do a .fill and we're going to pass in an email.
>
> **[7:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=432)** Now we haven't set the email yet, so it's going to be squiggly until we do, but we're also going to do the same thing, await this.passwordInput and we're going to do a fill(password) and await this.loginButton.click.
>
> **[7:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=455)** So right now for this login functionality to work, this function, when we call it, we're going to need to pass in an email and a password, and we can do that easily by just adding email here.
>
> **[7:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=469)** We're going to give it a type of string and we're going to pass in a password, which will also be a type of string.
>
> **[7:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=478)** And now I'm able to call this login functionality, pass in an email and a password, and it should fill out this information for us.
>
> **[8:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=488)** So let's go implement that over here, and we will, I'm going to just comment this out.
>
> **[8:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=495)** Because we have an email and a password string that's already created, we should just be able to type in await loginPage.login We're going to pass in email, password.
>
> **[8:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=508)** I know it's a little confusing 'cause they're all named the same.
>
> **[8:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=511)** Just know that this string is getting passed in here and this string is getting passed in here, and everything should work.
>
> **[8:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=519)** Let's go ahead and show the browser.
>
> **[8:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=521)** We'll just see, you know, make sure things look good to our eyes here.
>
> **[8:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=527)** So login, password happens.
>
> **[8:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=529)** It shows we're logged in.
>
> **[8:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=532)** Everything worked.
>
> **[8:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=533)** So what that does to our test, I'm still doing the assertion down here in our test, but what this did is it simplified our test, it made things more maintainable, and if you have this login functionality that you have to do across many pages, I can reuse this for any username and password that I pass into it, which is quite nice.
>
> **[9:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-page-object-in-playwright?u=76281980&t=555)** Now that we have a working test or a working setup file, I would encourage you to take some time, or if you want to catch up with me, I'm going to go ahead and implement this page object in our login spec, which is pretty verbose as well, and in the next video, we'll actually talk through what it looks like on creating test data.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (12), function (12), let (10), await (6), this. (5)
> **Code Identifiers:** loginpage (7), emailinput (2), passwordinput (2), loginbutton (2), getbytestid (1)
> **Prerequisites:** setup (6)
> **CLI Commands:** make (4)
> **Cross-References:** go back to (2), in the next (1)
> **UI Navigation:** go to (3)
> **File Paths:** auth.setup.ts (1)
> **Documentation:** spec (1)

#### Overview of test data management in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=0)** - [Instructor] I believe that test data management is the hardest part of test automation.
>
> **[0:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=5)** In this video, I'll walk you through some best practices and different approaches that you can take in order to create a maintainable automation suite.
>
> **[0:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=15)** While we won't dive into each of these areas through this chapter, I do want to talk about a few general approaches that you should consider as you implement a data factory.
>
> **[0:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=27)** The first is using static data in your test.
>
> **[0:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=30)** Static data is data that you always assume is going to be present for your test to utilize.
>
> **[0:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=38)** Some examples of this could be a specific user that we've used in our test or a specific product like the Thor Hammer, which we'll use in some of our tests.
>
> **[0:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=49)** This data is data that should never change.
>
> **[0:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=52)** An example, like a password.
>
> **[0:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=54)** You shouldn't ever change the password in a test where you're using the static data.
>
> **[1:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=60)** So, you've got to have safeguards in place to help with this.
>
> **[1:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=63)** It could be communication with your team, or it could be even something that prevents the data from being changed in the system.
>
> **[1:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=74)** Also, you should be able to recreate it if it does change for some reason.
>
> **[1:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=80)** Another thing to consider is the data state shouldn't change either, so it shouldn't be, maybe a user shouldn't be in a locked out state because too many login attempts were attempted.
>
> **[1:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=93)** When using static data, it is important to call this out to the team as you're automating tests, but also to other users that might use your test systems.
>
> **[1:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=104)** If someone changes your data your test relies on, you're not going to be spending your time efficiently.
>
> **[1:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=111)** Using dynamic data in your test is also important.
>
> **[1:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=115)** I refer to dynamic data as data that is created or generated as a part of the test.
>
> **[2:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=123)** Examples of this are newly registered users.
>
> **[2:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=128)** We're going to create one of those in the next lesson.
>
> **[2:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=131)** Or products, maybe products that we create that we want to run assertions against.
>
> **[2:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=137)** So, while this data may be the same type of data is dynamic in the fact that your test is creating this and you're not relying on something that's already there.
>
> **[2:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=148)** I found a good target to aim for is around 15% usage of static data and 85% used in dynamic data in your testing.
>
> **[2:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=159)** Some products may have to rely on a higher percentage of static data, but the higher the percentage of static data, the more risk that a test or another user in the environment may change this data and cause your test to fail.
>
> **[2:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=174)** In order to dynamically create your data for tests, you'll need some code to do this.
>
> **[3:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=180)** I like to call this section of my code a Datafactory.
>
> **[3:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=184)** I'll typically create and utilize the Datafactory methods in my test for my test data needs.
>
> **[3:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=191)** This ensures my tests are always using fresh, dynamic data that was just created.
>
> **[3:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=199)** We'll be building our own Datafactory methods in the next video.
>
> **[3:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=203)** One thing to note is you should have some sort of idea or plan for what to do with all the test data that your tests create.
>
> **[3:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=214)** You can either delete it via Datafactory or an Afterblock, or have a broader strategy to clean up data and test environments.
>
> **[3:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=223)** This could use the same strategy as our practice site, where every so often the site gets reset to a default state.
>
> **[3:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=231)** Or it could be you have a golden copy of a database somewhere that you restore as part of a deployment or a test automation run.
>
> **[3:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=239)** Or maybe there's even another strategy that you discover that's different.
>
> **[4:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-test-data-management-in-playwright?u=76281980&t=244)** Either way, thinking through and implementing a strategy early on is a great practice.

> [!info]- Semantic Content
>
> **Code Keywords:** static (7), this. (2), delete (1)
> **Cross-References:** in the next (2)
> **Definitions:** is a  (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Creating a data factory for Playwright tests
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=0)** - [Instructor] Let's create a data factory for our repository.
>
> **[0:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=3)** Typically, the best place to start is with a specific need.
>
> **[0:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=7)** For our case, let's create a data factory that will register a new user for the site.
>
> **[0:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=14)** We're going to use some of Playwright's tools to help us generate our code.
>
> **[0:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=19)** To do that, let's go ahead and click on the test icon over here and we're going to click record a new test.
>
> **[0:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=28)** This is the Playwright extension, which will allow you to code generate a test, and it's going to write some of the code for us.
>
> **[0:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=39)** So we're going to go to practice [softwaretesting.com](https://softwaretesting.com).
>
> **[0:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=42)** We're going to click sign in, we're going to click register your account.
>
> **[0:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=46)** We're just going to add some fake data here.
>
> **[0:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=51)** None of this matters too much.
>
> **[0:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=53)** What will really matter is the email and password that we use.
>
> **[1:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=66)** States.
>
> **[1:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=67)** Here, I'll go ahead and fix this as well, since it will be a part of our test data.
>
> **[1:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=74)** A fake phone number.
>
> **[1:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=77)** This email is important 'cause it will need to be unique.
>
> **[1:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=81)** So we're going to say testlinkedinlearning@[test.com](https://test.com).
>
> **[1:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=87)** And this password is also important that it's unique and there's some specific rules about the password in that it's got to be very unique and not exposed in a hack or anything like that because there's logic that tests for that.
>
> **[1:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=102)** So we're just going to pick some random letters.
>
> **[1:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=106)** We will see this later, or we can actually view it now, make sure that we're not breaking any of the rules.
>
> **[1:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=112)** It does say it wants a pound as well.
>
> **[1:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=115)** So let me add the pound in here or an at sign.
>
> **[1:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=119)** All right, and let's click register.
>
> **[2:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=123)** So we've registered a user.
>
> **[2:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=125)** I'm going to close this window.
>
> **[2:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=129)** This is the test that we just generated.
>
> **[2:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=132)** Now I did say our username has to be unique, so I want to rerun this test, but I'm just going to add a one here at the end so we can rerun the test, actually see what happens.
>
> **[2:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=144)** And I will clean this up just a little bit because we don't need to do every single one of these actions.
>
> **[2:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=151)** So we're going to fill in the password.
>
> **[2:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=154)** We are going to click submit.
>
> **[2:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=158)** We only need to click that once.
>
> **[2:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=160)** All right, so to run this, we're going to open up mpx Playwright test --ui.
>
> **[2:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=168)** This is going to open Playwright in a UI mode where we can actually run our test and see the results.
>
> **[2:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=175)** Specifically what I'm looking to do is copy the Playwright code for the API that is made that registers the user.
>
> **[3:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=183)** All right, so as we run this, we'll see all the different test steps get executed.
>
> **[3:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=191)** And we'll also see, so I'm currently, I've opened the network tab.
>
> **[3:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=196)** So this all, these are all the different network requests that are happening in the test.
>
> **[3:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=200)** And at the very bottom, there's a post call that will actually register this user.
>
> **[3:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=207)** So it's passing all this information in a post request to this user's register endpoint.
>
> **[3:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=216)** So this is what we want to abstract away and create a data factory for.
>
> **[3:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=220)** So we can just call this anytime we want a new user to use within our test.
>
> **[3:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=226)** This allows us to create dynamic data that we can reuse and we don't have to worry about just using our static data user.
>
> **[3:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=235)** So to do this, I'm going to click this button.
>
> **[3:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=238)** Copy is Playwright and that's going to copy this as a Playwright test that you can use as a part of a test.
>
> **[4:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=246)** Specifically for us, we're creating a data factory.
>
> **[4:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=249)** So we're going to have to refactor this a little bit, but we're going to go back to our directory.
>
> **[4:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=253)** And in our lib folder we're going to create a new folder called datafactory.
>
> **[4:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=259)** And in that datafactory, we want to create a new file called register.ts.
>
> **[4:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=265)** And we're going to go ahead and just paste the data that we got out of here into this file.
>
> **[4:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=273)** So here, we will have to do some refactoring.
>
> **[4:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=276)** The first thing we note is we are using page in this request.
>
> **[4:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=281)** So if I were to copy and paste this in like the test context, everything would work fine.
>
> **[4:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=287)** But because we are extracting this away to its own file, we've actually, we're going to refactor it a little bit.
>
> **[4:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=294)** And rather than use page.request, we're actually just going to use request directly from Playwright.
>
> **[5:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=300)** So the first thing we want to do is import { request } from @playwright/test.
>
> **[5:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=309)** And now we want to use this request here, except we've got to do a little bit of work because we've got to initialize this first.
>
> **[5:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=319)** So we are going to create a variable called createRequestContext.
>
> **[5:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=326)** This is going to let us initialize this request.newContext.
>
> **[5:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=332)** And then in place of request down here, we're just going to paste this requestContext.
>
> **[5:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=337)** So this requestContext post is actually what's making the request.
>
> **[5:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=343)** This up here just initializes it.
>
> **[5:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=346)** And one thing that I don't love to see here is we've got this hard-coded URL.
>
> **[5:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=350)** Now we haven't really dealt with this yet in our repo, but we want to go ahead and deal with that today because as add additional data factories, we don't want to have to come in if we want to test this against a different environment to come in and change the URL for each one of these.
>
> **[6:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=366)** So let's go ahead and create a apiUrl variable and we're going to set it equal to an environment variable called API_URL.
>
> **[6:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=377)** And we're going to go ahead and just abstract this away.
>
> **[6:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=382)** Everything to here, I'm just going to cut that.
>
> **[6:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=384)** And our post request is actually going to be to apiUrl plus user register.
>
> **[6:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=392)** So now, apiUrl is currently not set, but we can go open up our env file, we can say API_URL and we can set that.
>
> **[6:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=404)** So now we have a dynamically generated file.
>
> **[6:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=409)** So we're dynamically getting the URL when we're creating the request context.
>
> **[6:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=414)** And the next section is this data block.
>
> **[6:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=417)** Right now, we are pasting in basically this data object.
>
> **[7:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=422)** We're going to make this a little more JavaScript-friendly.
>
> **[7:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=425)** So I'm going to just remove the string off of the object and I'm just going to hit save and VS Code's going to do the magic to remove all those strings off of each of the keys for all the different values.
>
> **[7:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=441)** So one thing to note is this data right here that we're passing into the post request, all of this is static.
>
> **[7:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=449)** So all this would be the same every single time.
>
> **[7:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=452)** And we want to make it dynamic.
>
> **[7:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=454)** So one of the things we'll need to do is we'll need to, you know, basically make these dynamics.
>
> **[7:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=460)** So let's just pass in email and we'll pass in a password here.
>
> **[7:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=466)** And now these don't exist yet and that's because we haven't really wrapped this quite in a function yet.
>
> **[7:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=473)** But let's go ahead and do that and build the function part of it.
>
> **[7:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=477)** So let's go ahead and export async function.
>
> **[8:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=482)** We're going to call it registerUser.
>
> **[8:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=487)** We're going to pass in an email, which is a string that should make this email happy once everything resolves.
>
> **[8:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=495)** And password, which is also a string.
>
> **[8:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=498)** And the last thing we have to do is we actually have to create our open brackets and close our brackets down here at the bottom.
>
> **[8:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=508)** So when I save that, now I've got this email which we pass in to our function.
>
> **[8:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=513)** And a password, you know, these are now dynamic.
>
> **[8:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=516)** So from a test, I can register a user, pass in a email, a password, it's going to run it through this code, it's going to make the post request.
>
> **[8:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=524)** And this header section, we are actually not going to use this, we're just going to remove it.
>
> **[8:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=530)** When we work with authenticated endpoint, we will need to pass in certain headers, but this is like all the headers that the browser sent.
>
> **[8:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=537)** So not all of them are important, especially for this one.
>
> **[9:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=541)** And the last thing we want to do is we actually want to make an assertion.
>
> **[9:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=545)** We want to make sure that the response is actually, it was successful, right?
>
> **[9:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=550)** We were able to create a user and that user is valid.
>
> **[9:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=554)** So let's go ahead and add a expect Response.status.
>
> **[9:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=560)** And we're going to say toBe(201).
>
> **[9:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=564)** So this is making an assertion and you can see that expect is not happy yet.
>
> **[9:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=571)** I guess hopefully you know why it's not happy.
>
> **[9:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=574)** But I'm going to go ahead and add return Response.status.
>
> **[9:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=579)** And this response should be lowercase, not sure why it wants to go uppercase.
>
> **[9:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=585)** Oh, that's not set either.
>
> **[9:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=588)** So first thing we're going to make expect happy, we're going to do that by up at the top, we need to import expect, import expect from Playwright test.
>
> **[10:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=600)** So now our expect is happy.
>
> **[10:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=602)** Now we just need the response.
>
> **[10:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=605)** So the response is not happy because when we're making this API request, you know, we're actually not setting a response.
>
> **[10:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=613)** But to do that, we can just set a variable, const response and we're going to set that equal to whatever's responded.
>
> **[10:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=621)** So this is, you know, general Playwright syntax.
>
> **[10:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=625)** If you go look at the API request context examples in the Playwright docs, you can see where this is demonstrated.
>
> **[10:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=633)** So we're expecting our response status toBe(201) and we're going to return our response status.
>
> **[10:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=638)** So we'll know what it is in the test.
>
> **[10:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=641)** Let's head back over to our login spec and actually use that data factory in our test.
>
> **[10:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=647)** So to do that, we're going to create a new test and we're going to name it login with newly registered user and use our test syntax here.
>
> **[11:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=662)** And in our test, we're going to almost do the same thing we're doing up here.
>
> **[11:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=667)** So I'm just going to copy and paste this down here.
>
> **[11:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=670)** We will have to modify some things.
>
> **[11:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=672)** So the email we want to dynamically set.
>
> **[11:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=675)** So if we want to dynamically set that, let's go back to our example that we used here.
>
> **[11:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=681)** We'll just go ahead and copy the password first.
>
> **[11:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=684)** We know that's a good password.
>
> **[11:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=687)** So we'll keep this password static.
>
> **[11:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=690)** But for the username that we chose, testLinkedinlearning, we need to make this dynamic in some way.
>
> **[11:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=698)** So an easy way to do that is there's a date now function in JavaScript that we can just use some JavaScript interpolation.
>
> **[11:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=708)** So we're just going to say tests.
>
> **[11:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=711)** We're going to pass in a dollar sign and we're going to pass in some JavaScript date time, dot, whoop Date.now.
>
> **[12:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=723)** So using these back ticks, which are the backtick above the tab key, it allows you to pass in, you know, write JavaScript within different strings.
>
> **[12:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=734)** So we've got a unique email address, we've got a unique password.
>
> **[12:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=738)** This date now is basically an epoch time, so it should be unique as long as it's not run in the same second.
>
> **[12:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=746)** And then, so we've instantiated our login page, we go to our login page, we're going to pass in our email and password, which we set up here.
>
> **[12:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=754)** And the only other thing we need to do is just make sure that this Jane Doe is probably going to fail because our username is actually Test User.
>
> **[12:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=763)** So let's go update our login spec to be Test User.
>
> **[12:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=769)** And let's run this and see what happens.
>
> **[12:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=775)** So this is our setup that's running.
>
> **[13:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=780)** It's our password.
>
> **[13:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=781)** It says invalid username or password.
>
> **[13:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=785)** So the reason this failed is we have not yet created the user.
>
> **[13:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=790)** So we missed that step.
>
> **[13:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=792)** So let's go over here.
>
> **[13:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=794)** And before we even initialize the login page, let's do an await registerUser.
>
> **[13:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=802)** You can see that this is red 'cause it's not imported yet, but as soon as I hit Enter or I click on this, it should automatically import it up at the top.
>
> **[13:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=811)** And then we're going to pass in email, we're going to pass in password.
>
> **[13:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=817)** And because we're awaiting this, it shouldn't go to the next steps until this is complete.
>
> **[13:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=822)** So registerUser is passed in from the data factory.
>
> **[13:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=827)** And let's run this one more time and let's hope for the best.
>
> **[13:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=838)** All right, our test user is logged in and authenticated.
>
> **[14:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-data-factory-for-playwright-tests?u=76281980&t=842)** Before we move on, I'm going to take a few minutes and clean up the test spec that we created and get that committed up and I'll see you in the next video.

> [!info]- Semantic Content
>
> **Code Keywords:** let (19), pass (12), this, (6), function (5), static (3)
> **Code Identifiers:** apiurl (3), registeruser (3), requestcontext (2), tobe (2), createrequestcontext (1)
> **CLI Commands:** make (11)
> **Env Vars:** api (3), url (3), api_url (2)
> **UI Navigation:** click on (2), go to (2)
> **Documentation:** spec (3)
> **URLs:** [softwaretesting.com](https://softwaretesting.com) (1), [test.com](https://test.com) (1)
> **Cross-References:** go back to (1), in the next (1)

#### Creating helpers for Playwright tests
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=0)** - [Instructor] Another type of abstraction I build my test suites are helper functions.
>
> **[0:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=5)** These functions sit in a helper's folder next to my pages and data factory folder in the lib directory.
>
> **[0:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=12)** Let's go ahead and create a helper's folder in the lib directory.
>
> **[0:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=20)** In this section, we are going to create a helper function that will help us diversify our test data in our checkout test.
>
> **[0:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=27)** So let's go ahead and find the test, checkout, checkout challenge.
>
> **[0:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=33)** And as you're inspecting this test, you can see specifically when we're entering in our address information that we have a lot of hard-coded data.
>
> **[0:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=44)** We're going to walk through creating a helper function that will provide us a random state that we can fill in place of just hard coding California here.
>
> **[0:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=54)** So to get started, let's create a new file in the helper's folder.
>
> **[1:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=60)** We're going to call it states.ts.
>
> **[1:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=64)** In this file, we're going to export a function called random state, and within that we'll create an array and set it to a variable state.
>
> **[1:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=74)** And we're just going to include three states for now.
>
> **[1:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=77)** And the goal will be to randomly choose one of those states to respond when this function is called.
>
> **[1:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=85)** So let's go ahead and export a function called random state.
>
> **[1:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=91)** And we're going to pass in, we're going to say const states equals, we're going to create an array, and then we're going to create some strings, Alabama, Alaska, and then Arizona.
>
> **[1:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=109)** And then as a part of our function, we also need to return one of those states as well.
>
> **[1:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=115)** So right now, if I wanted to return Alabama all the time, I could pass this in states, I could choose the index of zero.
>
> **[2:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=124)** So return states of zero would return Alabama every single time this was called.
>
> **[2:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=130)** But we want to randomly return something.
>
> **[2:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=133)** So for that, we're going to walk through creating a second helper that we're going to use in this helper, which is we're going to create a function called random value from an array.
>
> **[2:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=145)** We're going to name this just array arrays.ts.
>
> **[2:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=149)** This is where any of our helper functions to do with arrays can go.
>
> **[2:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=154)** And we're going to go ahead and export a function called random value from array.
>
> **[2:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=161)** We are going to pass in a value here, an array, which is going to be a string of arrays.
>
> **[2:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=168)** And we're going to complete the function by, you know, our code brackets.
>
> **[2:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=174)** And in this, we want to basically return, so from our imported array, we want to return an array with a random index.
>
> **[3:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=187)** So I'm not going to walk through how indexes work in depth, but in general, like we said earlier in this example, Alabama is a index one, Alaska would be index two, Arizona would be index three.
>
> **[3:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=206)** So we just want that to be unique.
>
> **[3:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=209)** And I fixed Arizona for all my Arizona fans out there.
>
> **[3:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=213)** All right, so let's go ahead and write some code that will provide us a random index.
>
> **[3:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=220)** I'm basically looking for this example for a number between zero and two.
>
> **[3:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=226)** So zero, one, or two needs to be returned, but this needs to be very unique.
>
> **[3:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=231)** And you can ChatGPT your way to a solution pretty easy nowadays with tools at our fingertips.
>
> **[3:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=237)** But we're just going to define a random index, and we're going to do some math to calculate this.
>
> **[4:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=246)** So math floor is basically going to give us a final whole number that comes back.
>
> **[4:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=253)** But we're also going to do a math.random.
>
> **[4:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=256)** This returns the greatest integer less than or equal to its numeric argument.
>
> **[4:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=262)** So basically, I mean, you can kind of see that here.
>
> **[4:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=265)** For us, this is going to return a random number between zero and one.
>
> **[4:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=270)** So 0.1, 0.2, 0.3, 0.4, 0.5, all the way to 0.9, right?
>
> **[4:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=276)** But it's going to be between zero and one.
>
> **[4:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=278)** We're going to take that value, we're going to multiply it by the array that we're passing in the length, and then we're getting the floor, which is the whole number.
>
> **[4:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=289)** So the way the math works out, if we go look at some pseudo code, if we get 0.1 return from this math random and we multiply it by three, it's going to give us 0.3 and it's going to pull back Alabama.
>
> **[5:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=303)** If we get 0.5 from this math random, it's going to do the math and it's going to pull back one, is going to be the math floor kind of strips off this backend.
>
> **[5:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=313)** So one would be the answer there.
>
> **[5:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=316)** And then for Arizona, you know, 0.7, you know, 0.8, 0.9, all these would fall in the same bucket 'cause they would, you know, have this whole number of two that is index number two.
>
> **[5:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=327)** So that's kind of the way the math works, but let's go ahead and implement this random value from array into the state section.
>
> **[5:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=336)** Now this is pretty straightforward.
>
> **[5:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=339)** I can really just start typing random value from array.
>
> **[5:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=347)** All right, so the auto complete kind of eventually kind of caught up with it.
>
> **[5:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=351)** I can enter here and this will actually import this from arrays.
>
> **[5:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=356)** And then I'm just going to pass in the state's array that we had.
>
> **[5:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=359)** So it's doing, it's basically executing the same code we walked through.
>
> **[6:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=363)** When we call random state, this is another a hard coded list.
>
> **[6:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=369)** We could abstract that away or use another tool like faker or something to give us random state.
>
> **[6:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=375)** But now I should be able to just use this in my test.
>
> **[6:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=378)** So if I go to my checkout spec, I should be able to come over to this fill section.
>
> **[6:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=384)** I should be able to bring in random state, make sure that that's a function.
>
> **[6:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=391)** I'm going to make sure it did get imported properly.
>
> **[6:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=394)** If not, you'll have to import it up here.
>
> **[6:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=397)** And so let's try to run this test using playwright UI mode and PX playwright test--UI.
>
> **[6:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=409)** Let's open that up.
>
> **[6:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=410)** Let's go find our checkout challenge and let's go ahead and run it.
>
> **[6:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=414)** This will allow us to step through and see, you know, what fields are actually getting set as this test runs.
>
> **[7:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=423)** And while the test is complete, the test is running,
>
> **[7:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=432)** looks like everything went well.
>
> **[7:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=434)** If I go back through our test, I can see all the different streets are getting set.
>
> **[7:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=438)** The state is Arizona in this case, and everything moves forward.
>
> **[7:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=443)** So we've successfully abstracted away some of that test data creation, making a little more dynamic using different helpers in our test.
>
> **[7:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=453)** And what's nice about this is if we have another array somewhere that we need to get a random value out of, we actually have a function that will allow us to do that.
>
> **[7:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=464)** This can be really helpful.
>
> **[7:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-helpers-for-playwright-tests?u=76281980&t=466)** Again, we're not going to go too crazy here, but once we've written code multiple times or try to solve the same problem multiple times, creating a helper function is going to be a way to reduce that duplicated code and make maintaining your repository much, much easier as it grows.

> [!info]- Semantic Content
>
> **Code Keywords:** function (12), let (10), pass (4), const (1), this, (1)
> **Versions:** 0.1 (2), 0.3 (2), 0.5 (2), 0.9 (2), 0.2 (1)
> **CLI Commands:** make (3), find (2)
> **File Paths:** states.ts (1), arrays.ts (1)
> **Definitions:** is called (1), is a  (1)
> **Cross-References:** earlier in (1)
> **Documentation:** spec (1)
> **UI Navigation:** go to (1)

#### Creating custom assertions for Playwright tests
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=0)** - [Instructor] Another type of abstraction that can be used is creating your own custom assertions that can be used in your test.
>
> **[0:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=8)** While there are a lot of generic assertions that can be used such as toBe or stringMatching or stringContaining or any of these others that exist, sometimes what we need just isn't available.
>
> **[0:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=23)** The good news is the Playwright team has built a way for you to create your own custom assertions, and this can be done by extending the expect functionality.
>
> **[0:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=35)** Let's say we want to create a test where we validate that a value returned in the API is actually a number.
>
> **[0:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=44)** Let's go look at a specific test.
>
> **[0:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=48)** In our API test, we have an Api challenge, and we see that the Thor value comes back.
>
> **[1:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=60)** We see that the body is expected to be $11.14.
>
> **[1:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=67)** Let's say that the Thor Hammer, maybe the price changes, it changes often, and actually don't have to assert that it's this specific value.
>
> **[1:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=77)** But let's just say, I want to assert that it's actually just a number.
>
> **[1:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=82)** An example of this would be expect(body.price).toBeNumber();
>
> **[1:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=93)** Now here, this doesn't exist, but we're going to go ahead and write this code so it does exist.
>
> **[1:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=99)** Implement it, let's go ahead and open up the playwrightconfig.js file.
>
> **[1:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=105)** We're going to scroll down to the very bottom, and we're going to add a new section.
>
> **[1:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=112)** In this section, we are going to type expect.extend.
>
> **[1:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=117)** It's going to be a open parentheses, open bracket, toBeNumber, we're going to pass and receive, so this is the value we're receiving.
>
> **[2:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=132)** It's going to be a number.
>
> **[2:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=135)** And within that, we are going to add a variable called check typeof received == "number."
>
> **[2:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=148)** Type this properly so everything's happy.
>
> **[2:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=152)** All right, next section, and we're going to add an if statement.
>
> **[2:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=155)** So we're going to say if the check is true, so if the typeof is actually a number, we're going to return a specific message.
>
> **[2:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=169)** And the message is going to be "passed."
>
> **[2:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=171)** And we're also going to set pass to true.
>
> **[2:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=174)** Of course, that is a boolean, that's not a string on that one.
>
> **[2:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=178)** And we're also going to add an if statement.
>
> **[3:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=180)** So we're going to come down, add an else, well, this is a part of our if statement.
>
> **[3:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=186)** elseif, we're going to return.
>
> **[3:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=188)** So if check is true, it's going to be passed.
>
> **[3:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=191)** If check is false, we get to return a different message.
>
> **[3:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=195)** We're going to return the message toBeNumber() assertion failed.
>
> **[3:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=204)** And then I'm going to add a \n that's going to say create a new line when you're in the console, You expected, and we're going to go ahead and pass in or do some interpolation, the received value to be a number, but it's a, and we're actually going to use some more interpolation in this type of function, is basically going to return back what type is it, is it a number?
>
> **[3:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=235)** Is it a string, is it something else? Right.
>
> **[3:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=239)** But it's a type of received.
>
> **[4:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=242)** And then we're going to add another new line just so things are clear and we're going to say pass is actually going to be set to false.
>
> **[4:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=253)** So this is a way you can extend your expect.
>
> **[4:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=256)** Now you can see that this is actually not happy yet, that's because we actually need to import expect as a part of our Playwright tasks at the very top.
>
> **[4:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=266)** So let's go do that.
>
> **[4:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=268)** We'll add that to our import statement, and that should make the red squiggly go away.
>
> **[4:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=273)** Now there is one other thing we have to do.
>
> **[4:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=276)** It's a very like special case for TypeScript.
>
> **[4:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=280)** We need to add this global.d.ts file to our directory.
>
> **[4:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=285)** And this is only because we're extending the expect outside of a fixture.
>
> **[4:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=290)** So let's go ahead and create a new file at the root directory.
>
> **[4:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=294)** We're going to call it global.d.ts.
>
> **[4:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=299)** And in this folder, we're basically just going to type out this code.
>
> **[5:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=304)** We're going to export it.
>
> **[5:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=306)** We're going to declare global namespace PlaywrightTest.
>
> **[5:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=310)** And we're basically saying, hey, this toBeNumber is valid.
>
> **[5:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=315)** Something valid is a part of our test.
>
> **[5:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=318)** Now, if I go back to my apiChallenge, you can see we now have a expect method.
>
> **[5:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=324)** So let's run this.
>
> **[5:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=326)** Let's just see if it passes.
>
> **[5:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=333)** So really the API calls being made in the background.
>
> **[5:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=337)** So that passes, and let's test this.
>
> **[5:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=340)** Let's make it fail.
>
> **[5:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=341)** We won't leave it like this, but I want to see what happens when it does fail.
>
> **[5:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=345)** What's the error message that comes back with?
>
> **[5:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=350)** All right, so we can actually see that the test failed.
>
> **[5:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=354)** You expected Thor Hammer to be a number, but it's a string.
>
> **[5:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=358)** So our validation, our expect failure message is helping.
>
> **[6:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=362)** It's working, it's providing great feedback to us.
>
> **[6:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=366)** We're going to go ahead and fix this test.
>
> **[6:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=370)** With custom assertions, you can extend Playwrights expected functionality to fit your needs.
>
> **[6:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=377)** One other useful example that we're not going to demo off here is toBe one of values, which is a custom assertion that you can walk through looking at a blog post by Sergei Gapanovich.
>
> **[6:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=391)** on creating custom expects in Playwright.
>
> **[6:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=393)** This can be found on the resources page in this section.
>
> **[6:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-custom-assertions-for-playwright-tests?u=76281980&t=399)** Go check it out, if you're interested in additional custom assertions.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), pass (4), assert (2), this. (2), else, (1)
> **Code Identifiers:** tobenumber (4), tobe (2), stringmatching (1), stringcontaining (1), apichallenge (1)
> **Definitions:** is a  (5)
> **File Paths:** global.d.ts (2), playwrightconfig.js (1)
> **Env Vars:** api (3)
> **CLI Commands:** make (2)
> **Versions:** 11.14 (1)
> **Cross-References:** go back to (1)

#### Managing TypeScript config
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=0)** - [Instructor] Although we've been building our playwright test in TypeScript, we actually have not created a TypeScript config for our project.
>
> **[0:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=8)** This isn't necessary, but I do believe now that we're creating data factory files and helper functions, it will be helpful going forward.
>
> **[0:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=17)** The main reason is the ability to create paths in our code base.
>
> **[0:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=22)** This will allow us to refactor our test and use easy syntax when importing files into our test.
>
> **[0:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=28)** So let's go ahead and in our main directory, create a new file, and we're going to name it tsconfig.json.
>
> **[0:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=38)** This is going to be a JSON file that has certain key and value pairs.
>
> **[0:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=45)** The first is compiler options.
>
> **[0:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=50)** So that is there, and we're going to create an object for that.
>
> **[0:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=55)** Next is going to be base URL.
>
> **[0:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=58)** We're going to just pass in a dot, string with a dot for that.
>
> **[1:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=63)** And next is going to be paths.
>
> **[1:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=66)** This is where the magic happens.
>
> **[1:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=69)** In the path section, we're going to create an @datafactory with a star.
>
> **[1:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=75)** So this is the path, the virtual path that we're creating, and we are going to link that to the actual path in the lib folder.
>
> **[1:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=86)** And we're going to add a star back here.
>
> **[1:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=88)** So what this should allow us to do is anything that is using a data factory path, instead of having ../../lib.
>
> **[1:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=98)** So traversing directories we should just be able to use @data factory and then the actual, you know, if there's subfolders, we can use that.
>
> **[1:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=107)** So let's look at the login spec and actually implement that for our register user.
>
> **[1:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=113)** So I should be able to just come in here, remove this, add an at, and now we've got data factory register.
>
> **[2:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=122)** That path is being used if I command or control, click on register user.
>
> **[2:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=127)** It actually takes me to the register user file, which says it's imported properly.
>
> **[2:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=133)** So we're going to go ahead and do that for pages and a few other things in our ts config.
>
> **[2:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=138)** So if you want to type along with me, we're going to add one first for helpers.
>
> **[2:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=144)** It is very specific, so if you have any typos, they will be felt.
>
> **[2:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=150)** So helpers, it is plural with a star.
>
> **[2:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=156)** We're going to add one for fixtures.
>
> **[2:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=159)** We haven't built any fixtures yet, but we're going to be building some soon.
>
> **[2:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=164)** So let's go ahead and add that lib fixtures.
>
> **[2:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=171)** And let's go ahead and add one for @pages lib pages*.
>
> **[3:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=182)** Alright, so we're going to save that.
>
> **[3:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=183)** Let's go ahead and refactor our login spec to call the path for pages.
>
> **[3:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=189)** Let's see if this works.
>
> **[3:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=191)** Alright, it looks like playwright is happy.
>
> **[3:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=194)** Let's go ahead and update our checkout challenge.
>
> **[3:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=197)** So we're going to click under test, checkout, checkout challenge, make sure you're not in the API directory, and you'll find this one.
>
> **[3:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=207)** And let's go ahead and update this @helpers/states.
>
> **[3:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=211)** So everything's importing nice there.
>
> **[3:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=214)** And let's just go ahead and click into the random state.
>
> **[3:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=217)** You can go find that from the, either you know, the helpers file, and let's go ahead and update this to actually use the proper path as well.
>
> **[3:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=227)** So this will be @helpers/arrays.
>
> **[3:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=231)** So now this reads really clean.
>
> **[3:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=234)** I know exactly where to go find the random value from array file in the helper's folder, and it's a file called arrays.
>
> **[4:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/managing-typescript-config?u=76281980&t=242)** With this in place, importing new helpers, fixtures, data factories or pages should be a breeze.

> [!info]- Semantic Content
>
> **Code Keywords:** let (10), pass (1), this, (1)
> **CLI Commands:** find (3), make (1)
> **Env Vars:** json (1), url (1), api (1)
> **Documentation:** spec (2)
> **File Paths:** tsconfig.json (1)
> **UI Navigation:** click on (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Create a test using data factory and helper Functions
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=0)** - [Instructor] For this challenge, I want us to create a test that tests the reply-to-message functionality within the application.
>
> **[0:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=14)** Because we want our test to be deterministic, we should utilize the existing register user data factory method to create a new user as a part of your test.
>
> **[0:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=26)** Your challenge will be to create a data factory that will create an initial message, do the contact functionality through the form.
>
> **[0:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=36)** I'm going to walk through that.
>
> **[0:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=38)** Then we are going to view the account messages as a logged in user, click to see the details of that message, validate the text in the original message, add a text to the reply, and make an assertion to validate that.
>
> **[0:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=51)** So let me show you what that looks like on the front end.
>
> **[0:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=54)** So in this scenario, we want to register a brand new user.
>
> **[1:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=60)** With that authenticated user, we want to use this contact form functionality, which I'm pulling up the network tab to kind of see what kind of network traffic gets sent.
>
> **[1:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=75)** This is a text box that requires you to send at least 50 characters.
>
> **[1:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=79)** So I'm just going to duplicate this a couple times.
>
> **[1:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=82)** I'm going to click Send, and we're going to see an API request.
>
> **[1:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=87)** So this is the one really we're wanting to look at.
>
> **[1:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=90)** This is a post request to this endpoint with this payload.
>
> **[1:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=99)** And this payload is basically a JSON object that includes a name, a subject, the message.
>
> **[1:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=107)** And one other interesting thing that you're going to have to consider is this does have a request header that has an authorization with a bearer token.
>
> **[1:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=118)** So this is not something we've covered yet.
>
> **[2:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=120)** So this will be somewhat of a challenge, a good challenge for you.
>
> **[2:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=124)** But if you get stuck on things, you know, feel free to go ahead and move on to the solution video where I'll walk you through how to solve this challenge when interacting with the API.
>
> **[2:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=135)** If you want, you could just create that on the front end if needed.
>
> **[2:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=140)** Once you do have a message created, you'll then want to browse to my messages page.
>
> **[2:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=147)** You'll want to find the message that we created.
>
> **[2:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=150)** So this is the one we just created.
>
> **[2:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=153)** We're going to want to make an assertion that this text message exists.
>
> **[2:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=158)** We're going to add a new reply.
>
> **[2:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=161)** We want to click Reply, and we also want to make an assertion that this new reply actually shows up properly as a part of our test.
>
> **[2:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=172)** I will go ahead and warn you, this messages pages is somewhat difficult to work with.
>
> **[2:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=179)** There's not a lot of great locators to use to identify.
>
> **[3:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=182)** So in the solution page, I'll walk you through how I solve that problem.

> [!info]- Semantic Content
>
> **CLI Commands:** make (3), find (1)
> **Env Vars:** api (2), json (1)
> **Definitions:** is a  (2)
> **Code Keywords:** let (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Create a test using data factory and helper functions
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=0)** (light upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=5)** - [Speaker] Now that you've had a chance to solve the challenge, I'll go over my solution.
>
> **[0:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=9)** Yours will likely look different than mine and that's okay.
>
> **[0:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=12)** The goal is to build a working automated check that will give us feedback when the system changes.
>
> **[0:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=19)** It's a change detector, the easier it is to maintain though the better.
>
> **[0:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=24)** So let's take a look.
>
> **[0:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=26)** We'll start with the messages_spec.ts file.
>
> **[0:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=30)** The first thing you'll notice is I am importing quite a few things into this test and I've also refactored a few of the pages as well.
>
> **[0:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=39)** I've moved the login page from just the normal pages folder to its own login folder.
>
> **[0:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=46)** This was mainly because I ran into situations where as you add more pages, you want to consolidate a little more.
>
> **[0:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=54)** And with our paths is pretty easy to see where things are and manage that.
>
> **[1:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=60)** So let's just take a look.
>
> **[1:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=62)** The first thing I did was I created a bunch of variables here.
>
> **[1:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=67)** I created a timestamp that we use in our email that we're going to be using to create a new user, register a user, we've got a password.
>
> **[1:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=75)** I've just set a variable called dropdown options payments.
>
> **[1:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=79)** I've created a variable called message.
>
> **[1:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=82)** This will allow me to use this message variable in my assertion later.
>
> **[1:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=87)** That's why I'm creating it here.
>
> **[1:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=89)** And then I've also created a UserAuthFile.
>
> **[1:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=93)** So as a part of this, I need to log in with the user after I create them.
>
> **[1:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=99)** And I need to save the browser context, basically save the cookies away so I have access to the authentication stuff.
>
> **[1:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=107)** So I'm going to walk through what that looks like.
>
> **[1:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=109)** So for this example, the first thing I did was I introduced a test step.
>
> **[1:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=115)** This just makes it a little easier to kind of manage when you're, you know, looking at this on a test report.
>
> **[2:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=122)** So this section is creating a new user.
>
> **[2:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=124)** It initializes a login page class.
>
> **[2:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=127)** It goes to the loginPage, and then it actually uses this registerUser data factory with the email and password we set above.
>
> **[2:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=137)** Once that is there, once the user's registered, it attempts to log in with that username and password, and then it validates that it did log in successfully.
>
> **[2:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=147)** At that point, I am saving the storageState to this AuthFile.
>
> **[2:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=153)** So what this is going to do is it's going to save the token and the cookies and the tests.
>
> **[2:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=158)** So an example of what that looks like is, this is the AuthFile, these are the cookies, and specifically, this value here, I'm going to need to be able to use that to be able to make API calls on behalf of this user.
>
> **[2:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=174)** Now this is a short-lived key, so I'm not committing it to the repo.
>
> **[2:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=178)** It is a part of, you know, the get ignore file and it gets regenerated anytime this command down here runs.
>
> **[3:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=187)** So that is the bulk of that step.
>
> **[3:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=190)** The next step actually took two approaches 'cause I wanted to show off like two different ways to do this.
>
> **[3:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=196)** So if I did not want to use the data factory to go create a message, this is walking through how you would do it on the front-end.
>
> **[3:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=204)** So I've created a ContactPage, page object, where I am basically just, you know, scripting out the different locators.
>
> **[3:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=214)** So the subject, the message, the submit button, the alert-success.
>
> **[3:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=218)** And then, you know, in our spec in this section that's, you know, it's currently being skipped in my implementation, all I'm doing is going through, I'm setting the dropdown, I'm filling the message with the message above.
>
> **[3:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=232)** I'm clicking the button and I'm ensuring that this message was actually created before it moves on to the next step.
>
> **[3:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=239)** So again, I am doing this to the data factory.
>
> **[4:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=243)** So this is currently being skipped, but this is a good example of how you could do it through the UI.
>
> **[4:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=248)** So with my data factory approach, what I ended up doing was creating a data factory to create a message.
>
> **[4:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=256)** And in creating a message, I decided, you know, after looking at things, there are three things, or no four things that I actually needed.
>
> **[4:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=265)** I needed a name for who the message was from.
>
> **[4:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=268)** I needed the message, which is the string.
>
> **[4:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=271)** I need the subject, which I'm using as the dropdown option, and then the AuthFile string.
>
> **[4:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=277)** So this is going to be like the off file that we're going to parse to actually get the cookie.
>
> **[4:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=282)** So let's go look at that.
>
> **[4:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=284)** So I'm just going to control click on it.
>
> **[4:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=287)** That's going to take me to this function, which, you know, there's a lot going on here.
>
> **[4:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=291)** I'm not going to lie, but this is something that is reusable.
>
> **[4:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=296)** I only have to kind of write it once and maintain it once, but it is very specific.
>
> **[5:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=301)** So what it's doing is it's first, set creating a new storage data file.
>
> **[5:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=307)** It's reading the AuthFile and it's getting the token out of the file and basically saving it to a variable called token, which I am then using in my headers down here.
>
> **[5:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=322)** So this section here is actually where I'm making the API call.
>
> **[5:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=325)** So this is making a post-request to the slash messages in point.
>
> **[5:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=330)** I'm passing in this data with an authorization header and I'm expecting the response to be 200.
>
> **[5:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=338)** And then I'm actually returning the response to json.
>
> **[5:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=343)** So I'm actually, I don't need this piece of code, I was using this to debug.
>
> **[5:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=348)** So that's not needed.
>
> **[5:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=349)** This response is actually being sent back to, you know, it's being sent back here, you know, if we needed to use that.
>
> **[5:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=358)** So once the message is created, the next thing I do is I create a messagesPage.
>
> **[6:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=365)** I go to that page, and then I basically expect that the message, this is the message that we passed in, that Substring basically says it's a, you know, the first 25 characters of the message is visible in the table.
>
> **[6:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=381)** And also that the dropdown option there, which is payments in the scenario, is also visible.
>
> **[6:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=388)** Once it is, I'm going to click on that link.
>
> **[6:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=392)** And then I'm also going to expect that the whole message, so the whole message, not just a part of it, is actually included in the message list.
>
> **[6:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=402)** I then go a little further and I create a reply message.
>
> **[6:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=406)** So this is a part of me interacting with the service and then I input the reply message, I click reply, and then I make some validations to ensure that the reply message shows up.
>
> **[6:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=419)** So that's the walkthrough of the test.
>
> **[7:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=422)** What we're going to do is we're going to run that test in UI mode so we can actually see what it looks like.
>
> **[7:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=429)** And then after that, I'm going to dive into some of the complexities on the messages page object, which should be helpful to see some of these examples.
>
> **[7:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=443)** All right, so we can see that, you know, the message came in, we had a reply, all of our tests pass.
>
> **[7:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=452)** So all of these sections were successful.
>
> **[7:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=455)** And you can see the way I broke things up in test steps.
>
> **[7:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=458)** It makes it real nice to be able to like debug pretty clean from this area or from the test report, which was very, you know, very, very helpful.
>
> **[7:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=468)** So one thing that I just want to kind of walk through, what is nice also is you can just kind of hover over each of these and it will identify the elements that we're actually working with and we're actually asserting against.
>
> **[8:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=481)** But one thing I know working with this replies table and even this section is pretty difficult to work with.
>
> **[8:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=487)** The dom was not very friendly.
>
> **[8:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=489)** There wasn't a lot of good locators just in this section of the site.
>
> **[8:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=493)** So let's go take a look at the messages page.
>
> **[8:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=497)** And I want to walk through just how I solve this problem.
>
> **[8:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=502)** So in my constructor, these are all the different elements that I actually created to be able to interact with.
>
> **[8:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=510)** And so I've got table, so it's going to be like the main table.
>
> **[8:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=514)** And the way I located that was I found a div and I ensured that it had a locator text equals messages.
>
> **[8:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=522)** So it was good for this, but I mean, you can kind of see this is a locator that is quite complex, right?
>
> **[8:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=528)** It's got a lot going on here because you're calling a page locator within a page locator.
>
> **[8:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=535)** For the contact form, that one was pretty straightforward.
>
> **[8:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=539)** I got it by a roll link and got the contact form, the firstDetailLink.
>
> **[9:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=544)** I called that specifically first because I'm actually calling dot first on it.
>
> **[9:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=548)** So if I have multiple message tests and I'm using the same user, like that could be a bad practice.
>
> **[9:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=556)** So that's why we're creating our own user for this one test.
>
> **[9:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=559)** We're probably okay kind of roll in with this, but that's just something to look out for.
>
> **[9:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=566)** For this messagesList.
>
> **[9:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=568)** I actually had to find a locator, a div with a class of card.
>
> **[9:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=574)** And then I actually did a filter by, hasText this Subject line.
>
> **[9:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=578)** So this was quite tricky to find, but if I wanted to actually do some assertions in this gray section up here, you know, this is the way I found it best to do.
>
> **[9:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=588)** So this is the inspector on this, and you can see this is a div element, it has a class of card, but it also, you know, I'm doing a filter by this text here, so I'm not, if there's any subject colon anywhere else on this form, it could break the test.
>
> **[10:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=609)** But I tried to find that that is a unique thing on the page that I could actually locate and identify to get this whole block of text to do assertions against.
>
> **[10:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=620)** Same for this section down here.
>
> **[10:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=622)** I actually had to do the reply list.
>
> **[10:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=625)** I had to do a get by role heading named replies, and then I had to use this locator div card.
>
> **[10:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=633)** And this plus here is, is a special CSS thing.
>
> **[10:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=637)** It's called a sibling combinator.
>
> **[10:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=641)** And you can go read more about it, but it's basically saying, you know, this is a sibling element that you can actually interact with.
>
> **[10:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=648)** It's quite nice.
>
> **[10:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=650)** Playwright allows you to, you know, get things by role or also kind of go lower level and use CSS or XPath or combine them all, which is really, really nice.
>
> **[11:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-create-a-test-using-data-factory-and-helper-functions?u=76281980&t=662)** With all this built the test pass, our CI pipeline is happy and green again, and we are ready to move on.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this, (4), pass (2), class. (1), this. (1)
> **Definitions:** is a  (9)
> **Code Identifiers:** messages_spec (1), loginpage (1), registeruser (1), storagestate (1), messagespage (1)
> **UI Navigation:** dropdown (4), click on (2), go to (1)
> **CLI Commands:** find (3), make (2)
> **Env Vars:** api (2), css (2)
> **File Paths:** messages_spec.ts (1)
> **Documentation:** spec (1)


### 3. 2. Fixtures in Playwright

#### Overview of Playwright fixtures
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=0)** - [Instructor] The first time I saw a fixture in Playwright, I thought, wait, how does this even work?
>
> **[0:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=7)** Fixtures are a lot like black magic.
>
> **[0:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=10)** At their core, test Fixtures are used to establish the environment for each test, giving the test everything it needs and nothing else.
>
> **[0:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=20)** Fixtures are a lot like the previous abstractions we've discussed, data factories and helper functions.
>
> **[0:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=27)** But fixtures are first-class citizens, which gives you even lower level hooks into the Playwright test code base.
>
> **[0:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=35)** Actually, all the Playwright test is built on the concept of test fixtures.
>
> **[0:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=41)** Some of these examples include page, context, browser, and request, some of which we've used.
>
> **[0:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=49)** The magic happens behind the scenes.
>
> **[0:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=52)** When you request a fixture in your test, Playwrights Test Runner automatically initializes it, injects it where needed, and tears it down when it's done.
>
> **[1:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=64)** The real power of fixtures comes from their flexibility.
>
> **[1:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=67)** You can even override built-in fixtures or create your own custom ones.
>
> **[1:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=74)** Fixtures have a number of advantages.
>
> **[1:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=76)** Fixtures encapsulate, setup and tear down in the same place, so it's easier to write and maintain.
>
> **[1:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=84)** So if you have an after hook that tears down what was created in a before hook, consider turning them into a fixture.
>
> **[1:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=93)** Fixtures are reusable between test files.
>
> **[1:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=96)** You can define them once and use them in all your tests.
>
> **[1:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=100)** That's how Playwright's built-in page fixtures work.
>
> **[1:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=103)** So if you have a helper function that's used in multiple tests, consider turning it into a fixture.
>
> **[1:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=110)** Fixtures are also on demand.
>
> **[1:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=113)** You can define as many fixtures as you'd like.
>
> **[1:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=115)** And Playwright test will set up only the ones needed by your test and nothing else.
>
> **[2:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=121)** Fixtures are composable.
>
> **[2:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=123)** They can depend on each other to provide complex behaviors.
>
> **[2:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=129)** Fixtures are flexible.
>
> **[2:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=130)** Test can use any combination of fixtures to tailor the precise environment they need without affecting other tests.
>
> **[2:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=139)** Fixtures simplify grouping.
>
> **[2:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=141)** You no longer need to wrap your test in describes that set up an environment.
>
> **[2:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=147)** And you're free to group tests by their meaning instead.
>
> **[2:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=151)** The big idea here is Playwright's fixture system is built-in dependency injection that automatically supplies your test with required resources, like page objects, browser contacts, or other custom helpers in ways that promote clean, maintainable test code without repetitive setup logic.
>
> **[2:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=172)** In this chapter, we'll pull back the curtain and demystify Playwright's fixture system.
>
> **[2:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-playwright-fixtures?u=76281980&t=178)** We'll break down how they work, how to customize them, and how to harness their full potential without feeling like you need the sum and a dark wizard to explain it.

> [!info]- Semantic Content
>
> **Code Keywords:** else. (2), override (1), function (1)
> **Prerequisites:** setup (2), set up (2)
> **Speakers:** - [instructor] (1)

#### Creating a fixture in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=0)** - [Instructor] Let's start by creating a fixture that will provide access to the page object that we've already created, the login page.
>
> **[0:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=8)** This will be a very basic fixture that will help reduce code within our spec file by initializing the page object within a custom page fixture.
>
> **[0:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=18)** Let's start by creating a fixtures folder in our lib directory.
>
> **[0:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=24)** And within that fixtures folder, let's create a new file called pages.fixtures.ts.
>
> **[0:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=33)** Within this file, we're going to start by importing test from playwright, playwright/test, and let's start building out our fixture.
>
> **[0:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=45)** So the first thing we're going to do is export test.
>
> **[0:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=49)** So we're setting a variable name test and we're going to type in test.extend<MyPages> and we're going to open parentheses, we're going to add in loginPage, and we're going to go ahead and import that in.
>
> **[1:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=69)** So I'm going to let this auto complete and auto import in.
>
> **[1:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=73)** Async.
>
> **[1:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=76)** We're going to pass in a page.
>
> **[1:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=78)** And the syntax might not make sense to you right now.
>
> **[1:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=81)** That's okay.
>
> **[1:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=83)** Let's just type it on out.
>
> **[1:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=85)** We're going to add the use, and then we're going to do await use new login page and then pass in page.
>
> **[1:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=97)** All right, I think everything should be happy.
>
> **[1:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=100)** Well, it's not happy yet.
>
> **[1:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=101)** So let's see.
>
> **[1:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=103)** So this is not happy right now because we're trying to define the test variable, but we're trying to also use the test variable.
>
> **[1:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=111)** So we're trying to overwrite it and it doesn't like that.
>
> **[1:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=113)** So a trick around that is to import test as base test.
>
> **[2:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=121)** And if we use base test in our first base test extend, that should make things a lot more happy.
>
> **[2:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=129)** So the other thing that we're missing here is it looks like this MyPages still has a squiggly over here, so I can't find the name.
>
> **[2:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=139)** So the issue here is we don't have MyPages' type defined, so we are going to go ahead and define that.
>
> **[2:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=146)** So let's go ahead and create a type, MyPages.
>
> **[2:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=153)** We are going to set the login page to LoginPage.
>
> **[2:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=161)** Oh, MG is not correct, MyPage.
>
> **[2:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=164)** All right, so LoginPage is happy.
>
> **[2:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=168)** But it looks like this actually needs to be lowercase because we're using this loginPage from here.
>
> **[2:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=175)** So once the type was set, it kind of knows what to assert against.
>
> **[3:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=180)** But what this is, this is a pattern known as type annotation in TypeScript, and it will provide us a nice experience using auto completion.
>
> **[3:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=190)** So you saw that actually corrected the issue adding a type.
>
> **[3:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=194)** Things to note about this fixture is if you have steps that you wanted to happen before or after the page is initialized, you can add custom code above or below this use statement.
>
> **[3:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=208)** These will be treated as before each or after each, when the fixture is used.
>
> **[3:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/creating-a-fixture-in-playwright?u=76281980&t=213)** You shouldn't need this for this basic example, but it's worth knowing for more advanced scenarios.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), pass (2), async (1), await (1), type, (1)
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** loginpage (2)
> **Definitions:** is a  (1), known as (1)
> **File Paths:** pages.fixtures.ts (1)
> **Documentation:** spec (1)
> **Speakers:** - [instructor] (1)

#### Using a fixture in Playwright tests
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=0)** - [Instructor] Now that we've created a fixture, we need to use it in our test.
>
> **[0:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=4)** For this, we're going to use our login spec and we will add a new test to the end.
>
> **[0:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=11)** So we log in with a fixture.
>
> **[0:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=13)** So I'm just going to copy this last one, and we're going to update this log in with fixture.
>
> **[0:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=21)** So this is using a lot of the same logic, and right now we're using the same test, but what we want to do is we want to replace this login page logic with the fixture that we created.
>
> **[0:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=34)** So to do that, the first thing we have to do is we actually have to import this test, which is being extended into our login spec.
>
> **[0:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=45)** So the way we're going to do that is we're going to come up to the top.
>
> **[0:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=50)** We are going to import.
>
> **[0:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=52)** I'm going to call this test, so I actually need to remove it from here.
>
> **[0:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=57)** So we're going to import test from at fixtures, pages, fixtures.
>
> **[1:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=66)** So because we are exporting that here, we are able to import it in any of our spec files.
>
> **[1:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=75)** So you can see I'm getting the test from fixtures, which is the overwritten one, and we're using the expect right from playwright test in our current test.
>
> **[1:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=84)** That means anytime we're calling test, we actually have access to any of these fixtures that are being created.
>
> **[1:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=90)** So with the test and our fixture, I'm going to go down to where we are.
>
> **[1:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=95)** The way you implement this is next to page, we're going to add a comma, and now I should have access to a login page.
>
> **[1:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=103)** Now this login page is being set here and here.
>
> **[1:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=109)** So we actually need to take this away because this login, new initialization is actually happening right here in the fixture itself.
>
> **[2:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=120)** So we're going to take this out and this test should just work because all we're doing is taking the initialization step, moving it to a fixture.
>
> **[2:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=130)** So let's run it.
>
> **[2:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=132)** All right, so our login spec passed.
>
> **[2:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=135)** Everything works.
>
> **[2:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=136)** Now this is a little awkward because right now I've got expect and playwright test, and my test is really on the fixtures.
>
> **[2:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=146)** What if I actually just wanted everything to use test and expect from the fixture?
>
> **[2:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=151)** Well, right now that is not available because we don't have this page fixture doesn't know about expect, but we can easily change that.
>
> **[2:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=162)** All I have to do is come in and export, expect from playwright test.
>
> **[2:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=173)** So now this fixture actually knows about expect.
>
> **[2:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=176)** It's exporting it, and now in my login test, I can really just use this page fixtures and it's going to use test and expect from that fixtures.
>
> **[3:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=187)** So let's walk through what we just did.
>
> **[3:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=191)** As you can see, we have a login spec, which calls the page fixtures, which initializes the login class, which then returns the page fixtures and initializes it.
>
> **[3:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=205)** And it's available on the login spec when we start to interact with it.
>
> **[3:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=211)** So this reduces the lines of code and the lines of setup and our test, and it abstracts it a little further to a page fixture.
>
> **[3:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=220)** As you can see from the visual, we've created two abstraction layers.
>
> **[3:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=224)** We've got the page fixture and the login page.
>
> **[3:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/using-a-fixture-in-playwright-tests?u=76281980&t=228)** As we continue in the series, you'll see more ways we can build upon this concept.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), this, (1), import. (1), export, (1), class, (1)
> **Documentation:** spec (6)
> **Prerequisites:** initialization (2), setup (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Overview of advanced fixtures in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=0)** - [Instructor] We covered a basic example of a fixture in the previous video.
>
> **[0:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=4)** That's really just the tip of the iceberg on what's possible with fixtures.
>
> **[0:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=8)** Let's dig a little deeper and review some other examples that could be useful in your test automation framework.
>
> **[0:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=15)** Let's first start at overwriting fixtures.
>
> **[0:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=18)** Any fixture can be overwritten.
>
> **[0:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=21)** In this example, page is overwritten.
>
> **[0:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=25)** When it is imported and called from a test, this would automatically go to the base URL in this situation here.
>
> **[0:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=35)** Another example, and the worker scoped fixtures, this type of fixture allows you to have granular control over different worker processes.
>
> **[0:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=47)** In this example, an account fixture is created and you can see down here the scope is worker.
>
> **[0:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=55)** We can see that workerinfo.workerindex.
>
> **[0:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=59)** So here's worker info, specifically this worker index is used to generate a unique username per worker.
>
> **[1:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=70)** So this is not any time the test runs, but this is any time the test runs within a specific worker, which can be very powerful.
>
> **[1:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=80)** There's also the idea of automatic fixtures.
>
> **[1:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=84)** If you have a fixture that is set to auto true, this is an example of a global before each or after each hook.
>
> **[1:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=94)** Note, it is automatic.
>
> **[1:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=97)** So it's automatically going to happen regardless of whether you call it or not, as long as the fixture is being used in your test.
>
> **[1:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=108)** Another helpful thing to understand is the execution order of fixtures and the test in general.
>
> **[1:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=114)** As you begin to think through what and how you want to build your fixtures, this piece of documentation will be very helpful.
>
> **[2:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=122)** This section in the execution order provides a nice visual of when certain fixtures will be executed as a part of a test run.
>
> **[2:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=132)** So consider this example.
>
> **[2:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=134)** So this is the fixture that we're creating.
>
> **[2:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=139)** So you've got your worker fixture, an auto fixture, a test fixture, unused fixture, an auto test fixture, and you can see if this is the test setup.
>
> **[2:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=151)** You can see when the different things are passed in.
>
> **[2:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=154)** This section will walk you through when things are called, how often they're called and whatnot.
>
> **[2:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=162)** Depending on what you need, these docs will provide a very useful visual.
>
> **[2:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=167)** One last thing to note, there is a risk here.
>
> **[2:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=170)** Abstracting too many things or making things too complicated or too hard to understand for new joiners to your project could be a big risk.
>
> **[3:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=180)** It could lead to a lot of headache and a lot of frustration as people are trying to understand what the code, what your test is actually doing.
>
> **[3:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=190)** So adding too many abstractions can be risky.
>
> **[3:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-advanced-fixtures-in-playwright?u=76281980&t=194)** Keep that in mind.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Cross-References:** we covered (1), previous video (1)
> **Definitions:** is an  (1), is a  (1)
> **Env Vars:** url (1)
> **UI Navigation:** go to (1)
> **Prerequisites:** setup (1)
> **Speakers:** - [instructor] (1)

#### Implementing an advanced fixture in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=0)** - [Instructor] In video 3, we implemented a page.fixture, shown in this graphic, where we abstracted away the login.page using the page.fixture within the login.spec.
>
> **[0:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=13)** In this lesson, we're going to implement a more advanced fixture that will fail if any console error messages show up on the page.
>
> **[0:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=23)** So this is what you would see if you inspect your browser, and you look at the browser console, and there's any JavaScript errors.
>
> **[0:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=30)** This will require us to create a new fixture file, and we're going to use a function that Playwright provides to merge these fixtures together to add another layer of abstraction.
>
> **[0:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=42)** In the end, this will simplify the implementation or adding some complexity on the backend.
>
> **[0:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=49)** Before we get started, though, let's go ahead and take this login.page in our login.spec and let's go ahead and further abstract that.
>
> **[0:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=57)** So as a part of the repo, I've already committed two new pages to the repository.
>
> **[1:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=65)** One is an account page.
>
> **[1:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=67)** So in pages, account, accounts.page, we have a new page object there that is created that we're going to use.
>
> **[1:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=75)** And I've also gone ahead and created this fixture.
>
> **[1:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=79)** It's a console.fixtures.ts.
>
> **[1:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=82)** Now there's one thing I noticed.
>
> **[1:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=84)** I have these fixtures files as plural.
>
> **[1:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=87)** I'm going to go ahead and just rename these so they're singular.
>
> **[1:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=90)** So we have a folder of fixtures and each fixture is singular.
>
> **[1:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=95)** So we're going to update that.
>
> **[1:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=98)** And because this is referenced, VS Code is saying, "Hey, do you want us to update everything?"
>
> **[1:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=102)** Yeah, of course we do, so our test will still run.
>
> **[1:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=105)** So let's start with taking this account.page.
>
> **[1:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=109)** I'm also going to open up our login.spec, and we're basically going to replace these sections with the account.page that we want to use.
>
> **[1:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=119)** So we've got to find a way to get this account.page into our pages.fixtures file.
>
> **[2:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=125)** What's really nice is it's quite easy with fixtures.
>
> **[2:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=129)** All I have to do is come down here.
>
> **[2:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=131)** I need to say myaccount, or I guess we're going to call it accountPage: async, It's going to be very similar syntax, use.
>
> **[2:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=145)** We're going to pass in await use(new AccountPage).
>
> **[2:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=152)** I'm going to hit Enter so it automatically imports it up here.
>
> **[2:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=156)** So things are starting to be happy.
>
> **[2:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=159)** I'm going to pass in page.
>
> **[2:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=161)** And the last thing I need to do is, you know, add the type annotation up here.
>
> **[2:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=166)** accountPage is an AccountPage.
>
> **[2:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=171)** So now this test that we're exporting has access to basically the loginPage and the accountPage.
>
> **[3:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=180)** 'cause we are initializing them all in this fixture.
>
> **[3:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=185)** So I should be able to come over to my loginPage.
>
> **[3:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=189)** I can type up here, accountPage, right?
>
> **[3:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=194)** And I should be able to come in here and just replace this.
>
> **[3:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=198)** This is going to be accountPage.navMenu.
>
> **[3:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=203)** And this one is going to be by page title, pageTitle.
>
> **[3:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=210)** And now we're using the pages.
>
> **[3:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=214)** We're not even using the default page anymore.
>
> **[3:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=218)** So we can actually clean that up from our test.
>
> **[3:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=223)** So now we're completely utilizing this pages fixture in order to work with this.
>
> **[3:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=230)** Now here's where things will get interesting.
>
> **[3:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=233)** The next area we're going to focus on is adding this third layer of abstraction.
>
> **[3:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=239)** So we're going to build a new base fixture.
>
> **[4:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=243)** That base fixture is going to import our page.fixture and our console.fixture that we have built.
>
> **[4:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=250)** Our page.fixture is importing login and account.page.
>
> **[4:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=255)** And the base fixture is what's going to be used in our login.spec in this iteration.
>
> **[4:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=261)** So we're adding a little more complexity, but I'm going to walk you through how to make it simple on the code side.
>
> **[4:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=269)** So let's start back at our code.
>
> **[4:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=273)** And the first thing we want to do is create a new fixture file.
>
> **[4:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=276)** So we actually have our fixtures here that we want to combine.
>
> **[4:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=281)** So we're going to create a new file.
>
> **[4:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=283)** We're going to name it base.fixture.ts.
>
> **[4:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=290)** And in this base file, we are going to import.
>
> **[4:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=294)** These are specific functions that Playwright provides, mergeExpects and mergeTests.
>
> **[5:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=305)** Both these functions will allow us to merge our different exports and just have one really nice base interface.
>
> **[5:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=313)** And now we're going to import { test as pageTest, expect as pageExpect } from "@fixture/pages.fixture";.
>
> **[5:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=330)** So we're basically saying I want to import the test and expect from page.fixture.
>
> **[5:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=335)** We're going to use those in our export down here.
>
> **[5:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=340)** So let's go ahead and export, const test = mergeTests, and I'm going to pass in pageTest.
>
> **[5:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=349)** So what this does is it's going to export our test fixture by merging whatever we pass into mergeTests.
>
> **[5:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=358)** And we can do the same thing for the expects.
>
> **[6:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=364)** This is going to be mergeExpects, and this is going to be pageExpect.
>
> **[6:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=372)** Okay, so the next thing we need to do is we need to go import this console.fixture over to our base.fixture so we can actually export it together.
>
> **[6:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=384)** So let's go ahead and import { test as consoleTest and expect as consoleExpect.
>
> **[6:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=398)** And it's going to be from "@fixtures.console.fixture";.
>
> **[6:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=405)** So now I'm going to pass in consoleTest here, consoleExpect here.
>
> **[6:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=413)** And now if we are importing this base.fixture into our test, we should have access to any of the code on this page, which is quite nice.
>
> **[7:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=426)** Specifically, what we're looking for is this pageConsole.
>
> **[7:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=430)** So let's go back to our login.spec, and let's update our fixture at the top.
>
> **[7:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=438)** Currently, we're importing page.fixtures.
>
> **[7:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=441)** We're going to change that to base.fixture.
>
> **[7:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=447)** And now we should have access to pass in pageConsole.
>
> **[7:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=455)** So in order to see this test, let's go ahead and run npx playwright test --ui.
>
> **[7:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=462)** and we're going to go find the login with fixture test.
>
> **[7:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=467)** And we're just going to run that one test and see what happens.
>
> **[7:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=472)** Now I'm expecting this test to fail because I know there's a console error that gets thrown while this test is running.
>
> **[7:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=479)** So as we can see, the test fails.
>
> **[8:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=484)** Let's go look at the error.
>
> **[8:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=485)** It failed to load a resource.
>
> **[8:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=488)** Here's the error message, unauthorized access.
>
> **[8:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=490)** If I go to my console errors, I can see that, you know, we had a request that returned a 401.
>
> **[8:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=498)** I can probably see that here, so that's this me call.
>
> **[8:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=501)** This is actually being called before you're authenticated as a part of the test, but it's failing.
>
> **[8:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=507)** So we are now able to check for pageConsoles just by adding this one line.
>
> **[8:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=513)** If I remove this line and rerun it, everything should pass.
>
> **[8:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=518)** Let's validate that.
>
> **[8:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=520)** All right, so everything passed.
>
> **[8:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=521)** So let's take just a quick dive into the console failures.
>
> **[8:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=524)** I'm actually going to add this back to the test, but we are going to comment this out because this is actually what fails, and we don't want our stuff failing.
>
> **[8:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=534)** So you can see in the console fixture, we're doing two things.
>
> **[8:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=537)** We are overriding the base test, extending it, and we're basically calling this pageConsole, which then uses extend or an expect.
>
> **[9:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=553)** And it's basically doing some JavaScript stuff here to say, "If there are any errors that are called back in the console, I want us to go ahead and fail 'cause we're making assertions on every console request."
>
> **[9:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/implementing-an-advanced-fixture-in-playwright?u=76281980&t=566)** With this, we've successfully implemented a complex fixture and created a base fixture that we can now import and merge future fixtures into and have this grow as big as it needs to, but it's still done in a maintainable way.

> [!info]- Semantic Content
>
> **Code Keywords:** let (12), pass (7), this. (2), require (1), function (1)
> **Code Identifiers:** accountpage (5), mergetests (3), pageconsole (3), loginpage (2), mergeexpects (2)
> **Documentation:** spec (5)
> **CLI Commands:** find (2), make (1), npx (1)
> **File Paths:** console.fixtures.ts (1), base.fixture.ts (1)
> **Definitions:** is an  (2)
> **Cross-References:** go back to (1)
> **Tools:** vs code (1)

#### Challenge: Update message test to use fixtures
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-update-message-test-to-use-fixtures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-update-message-test-to-use-fixtures?u=76281980&t=0)** - [Narrator] In this challenge, I want you to review and refactor the test account message spec here and update it to use the base fixture we created in the last video.
>
> **[0:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-update-message-test-to-use-fixtures?u=76281980&t=18)** This will require you to do some work on the page's fixture file.
>
> **[0:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-update-message-test-to-use-fixtures?u=76281980&t=23)** Feel free to use the same patterns that we've used on the previous video and bonus points if you refactor the test enough to be able to remove the page fixture from the list of fixtures being imported.

> [!info]- Semantic Content
>
> **Cross-References:** in the last (1), previous video (1)
> **Code Keywords:** require (1)
> **Documentation:** spec (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Update message test to use fixtures
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=0)** (bright upbeat music)
>
> **[0:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=5)** - [Instructor] How did you do with the challenge?
>
> **[0:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=7)** I'll show off my approach in this video as we talk through each of these changes.
>
> **[0:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=13)** The first thing I did was I updated my imports to use the test and expect from @fixtures/base.fixture.
>
> **[0:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=24)** Doing that allowed me to be able to pass in the loginPage fixture, the messagePage, the contactPage, and the accountPage, which we added to the page fixtures.
>
> **[0:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=36)** So, you can see I added the messagesPage, the contactPage to our pages fixtures, and this is what's being taken to being merged into our base page fixture.
>
> **[0:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=49)** I also added our types up here, and I did have to import the different pages as well.
>
> **[0:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=57)** Going back to our messages spec, I did have to change a few things.
>
> **[1:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=62)** I had to remove the initialization where I actually created a loginPage variable, so that got removed.
>
> **[1:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=70)** I did have to update the accountPage page object to use that here.
>
> **[1:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=74)** That was just a locator.
>
> **[1:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=77)** And I also had to remove the contactPage initialization along with the messagesPage initialization as well.
>
> **[1:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=86)** Everything else pretty much worked out of the box when I ran it, which was quite nice.
>
> **[1:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=92)** But if you're anything like me, this is still pretty hard to comprehend.
>
> **[1:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=96)** This is why being able to review something and see this abstraction, you can really see how things are broken down.
>
> **[1:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=104)** The login spec, or in our case, the messages spec, inherits from the base fixture, the base fixture's merging these two fixtures, which is getting any of the pages we add to the page fixture, and we are now able to use that within any of our specs that exist.
>
> **[2:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-update-message-test-to-use-fixtures?u=76281980&t=123)** Using these abstractions can help keep your codebase clean and maintainable as your test project continues to grow.

> [!info]- Semantic Content
>
> **Code Identifiers:** contactpage (3), loginpage (2), accountpage (2), messagespage (2), messagepage (1)
> **Documentation:** spec (3)
> **Prerequisites:** initialization (3)
> **Code Keywords:** pass (1), case, (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright upbeat music) (1)


### 4. 3. Mocking and Emulation in Playwright

#### Overview of network routing in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=0)** - [Instructor] In the first half of this chapter, we'll be diving into one of my favorite Playwright features, the ability to interact with the network traffic during a test.
>
> **[0:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=11)** This functionality can take your test design to the next level.
>
> **[0:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=16)** Here are a few examples of things you can accomplish with this.
>
> **[0:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=21)** You can intercept network requests, you can abort certain network requests, you can modify network requests on what's returned to the UI, you can mock network requests, or you can even simulate a slow network, and there are tons of other opportunities, but in this video we're going to walk through a few examples demonstrating each one with code.
>
> **[0:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=52)** First up, intercepting an API request.
>
> **[0:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=55)** So this all happens within the page.route function that exists.
>
> **[1:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=62)** So in this scenario, we are passing in the API for the products, so we get a list of products back, and we're routing that through this page router.
>
> **[1:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=75)** We then set the response to whatever comes back from the response.
>
> **[1:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=81)** We can then go in and set that to a variable called products and then use products in our tests.
>
> **[1:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=88)** With this, route.continue, the last part, is very important because this says go ahead and complete the network request, so we've intercepted it, saved it to a variable, and saying go ahead and proceed.
>
> **[1:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=105)** Another option is aborting an API request, and what that looks like is you're still calling page.route, but instead of fulfilling it or continuing with it, you're actually telling the route to abort the request, any other requests that match this pattern that we're passing it.
>
> **[2:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=125)** This is very helpful.
>
> **[2:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=127)** Specifically in one situation where I've used this was to block Google ads on a certain site.
>
> **[2:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=134)** There was a site that I was testing and a Google ad would always pop up over the login button, which caused problems when you're trying to create a login test, and aborting that request allowed me to not load any of the Google ads and not have any issues with the test and flickiness.
>
> **[2:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=154)** That can also be used to block out images or anything that you need to do when making a visual test as well.
>
> **[2:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=163)** So when it comes to modifying an API request, this is very similar to intercepting the API request except we are going to take that request and we are going to modify it, so what gets sent back, what gets fulfilled, is actually different.
>
> **[3:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=180)** So in this example, we're changing the name, we're changing the price, we're changing the in-stock Boolean.
>
> **[3:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=189)** Once we change those in this section, we actually fulfill the modified response to the front end.
>
> **[3:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=198)** Another way to route network request is by mocking API request.
>
> **[3:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=203)** The mocking happens using this routeFromHAR, or there's a routeFromJSON as well, but what this method does is you add it and you set the update parameter to true.
>
> **[3:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=219)** So anytime it is set to true, when the test runs it saves the HAR file to your test directory wherever you specify, and you commit that HAR file to the repo, so you basically have this mocked network request, they can always be returned.
>
> **[3:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=237)** Of course, when you commit this, you're going to change your update back to false, and now you have a test that's always mocking whatever was saved to the repo.
>
> **[4:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=249)** This is very helpful when working with third-party APIs that you don't have any control over.
>
> **[4:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=257)** The last example here is simulating a slow API request, so if you've ever been on a website and it takes forever for the website to load, you know that could be a real scenario you want to test for or automate.
>
> **[4:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=272)** In this scenario, we're going to put this route in place and before we continue with the route, we basically have a four-second timeout, you know, using Playwright's built-in waitForTimeout function.
>
> **[4:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=287)** This allows you to test and simulate what it's like working with slow network requests within your test case.
>
> **[4:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=297)** Take a few minutes and read through the Playwright documentation provided.
>
> **[5:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-network-routing-in-playwright?u=76281980&t=301)** There are a lot of great examples and ways to utilize the route functionality in your tests.

> [!info]- Semantic Content
>
> **Env Vars:** api (7), har (2)
> **Code Keywords:** function (2), this, (2), continue (2), this. (1), case. (1)
> **Code Identifiers:** routefromhar (1), routefromjson (1), waitfortimeout (1)
> **Analogies:** similar to (1), it's like (1)
> **Speakers:** - [instructor] (1)

#### Intercepting HTTP requests with Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=0)** - [Instructor] Now that you've heard a lot of different ways to work with page routes and network traffic and playwright, let's go ahead and implement one of these methods.
>
> **[0:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=10)** We are going to implement the intercepting traffic from the network and we want to use that data that we get from the network in our tests for our assertions.
>
> **[0:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=22)** So for this example, we'll go to the practice website.
>
> **[0:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=27)** I've right clicked and opened my inspector window.
>
> **[0:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=31)** I've opened the network tab and I've actually cleared it out.
>
> **[0:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=34)** So we've got a clean slate, I'm going to refresh the page and I've actually narrowed down my network request to just fetch XHR requests.
>
> **[0:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=46)** And I'm looking for this products API call.
>
> **[0:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=51)** So this is a API call here.
>
> **[0:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=54)** I'm going to go ahead and copy this. It's a get request.
>
> **[0:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=57)** We're just passing in a price in between 1 and 100.
>
> **[1:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=63)** And this is the data that comes back.
>
> **[1:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=66)** And we can see this is a json object and there is a data section, which it looks like has an array of objects, which should include, you know, combination pliers, pliers, bolt cutters, you know, this is the data that is rendering in the UI.
>
> **[1:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=85)** So this is the call we want to route.
>
> **[1:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=87)** So let's go to our test and we are going to open up our test, homepage, home.spec.
>
> **[1:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=95)** And within this bottom describe block, we are going to go add a new test.
>
> **[1:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=103)** The test will be called validate product data is visible in UI from API.
>
> **[1:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=115)** So we're going to add our normal syntax for playwright test.
>
> **[2:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=122)** We're going to pass some page and we've got the skeleton of our test here.
>
> **[2:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=130)** Let's just make sure everything is happy.
>
> **[2:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=133)** Oh, that's 'cause this is not connected.
>
> **[2:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=135)** All right, now it's happy.
>
> **[2:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=137)** So we're going to go ahead and open this up.
>
> **[2:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=141)** And the first thing we want to do is create a test step.
>
> **[2:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=145)** So test.step, this is going to be where our route lives.
>
> **[2:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=150)** So I'm going to be very specific here.
>
> **[2:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=153)** Intercept /products, we've got to do our syntax again here.
>
> **[2:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=162)** And within this test step, this lets you encapsulate or just contain different parts of your test and it makes the test report really easy to read.
>
> **[2:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=172)** Here's where we want to implement the page.route functionality.
>
> **[2:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=179)** Now I've copied the route here, so we're going to paste that here and let's go ahead and backspace that and all this extra stuff, pretty much after products, we're just going to add a double star and that should be our await page.route functionality.
>
> **[3:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=199)** Now we need to finish this out.
>
> **[3:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=201)** We're going to add a comma here, async route.
>
> **[3:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=210)** There is a bit of code we've got to type through here, but all this will be worth it.
>
> **[3:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=215)** So we are going to set a variable, response equals to await route.fetch.
>
> **[3:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=225)** So as I save that, it auto formats it for me.
>
> **[3:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=228)** So what we're doing is in this test step, we are setting a route in place and anything that gets hit by the route, we are going to set to a variable called response.
>
> **[4:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=240)** There is one other thing we have to add here, if we don't want our tests just to stall out, and that is route.continue.
>
> **[4:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=248)** This is a very important thing to add when you're intercepting network traffic.
>
> **[4:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=254)** All right, so one other thing we need to think through is right now I'm setting this to response.
>
> **[4:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=263)** We've got to work on our spelling.
>
> **[4:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=265)** All right, so I'm setting this const response, but I actually don't have a way to use that response down here in my test.
>
> **[4:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=273)** It's really going to be bound, you know, to this block of code.
>
> **[4:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=278)** So let's go ahead and create a let variable at the top of our test.
>
> **[4:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=285)** And the variable will be products.
>
> **[4:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=288)** We're going to give a type of any.
>
> **[4:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=290)** And within our route down here, we're going to go ahead and set products, which you know it's going to be hopefully that JSON object, await response.json.
>
> **[5:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=306)** All right, so it looks like everything, products, now everything is happy.
>
> **[5:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=314)** So I've got a variable that should get set when this route fires off.
>
> **[5:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=319)** The next thing we need to do is actually fire off the route.
>
> **[5:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=322)** So how do we do that?
>
> **[5:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=323)** Well, we have to go to a page for that to happen.
>
> **[5:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=327)** So let's go ahead and add some of our test code, await page.goto, and in this scenario we are not going to add things to a page object, but that is a best practice.
>
> **[5:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=339)** I'm just going to try to keep things simple here.
>
> **[5:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=343)** From here, we want to validate that the products or some of the products exist on the page.
>
> **[5:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=349)** So the way to do that is we will need to go find an element that we can work with in our browser.
>
> **[5:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=359)** So rather than just working with these individual elements, I want to try to get something that you know, either the whole page or this whole grid.
>
> **[6:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=367)** So let me click in here. It looks like this is a container.
>
> **[6:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=372)** It does have a data test attribute, but it doesn't have a name with it, so we can't really use it.
>
> **[6:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=379)** What else do we have?
>
> **[6:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=380)** All right, it looks like we have this div, which has a class of col-md, and that looks like it is the, I'm going to call it the product grid.
>
> **[6:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=390)** It's this grid with all the different products on it.
>
> **[6:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=393)** So it goes all the way to the bottom.
>
> **[6:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=395)** Oh, it's even includes the pagination.
>
> **[6:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=398)** Okay, that's good to know.
>
> **[6:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=400)** Let's go ahead and use that as a locator.
>
> **[6:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=403)** So let's go back to our page.goto, and we're going to add a variable called productGrid, and we're going to set that to page.locator and it's going to be a class of this col-md.
>
> **[7:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=422)** So I've got this locator here.
>
> **[7:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=424)** This is just kind of like a variable that calls this locator.
>
> **[7:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=428)** We're actually not interacting with it yet.
>
> **[7:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=430)** We would need to say await expect productGrid, let's say toContainText.
>
> **[7:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=442)** Yeah, let's see if we can say hammer, make sure that we actually have a good locator here and then we'll iterate on this test.
>
> **[7:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=452)** All right, so this is our setup.
>
> **[7:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=455)** All right, so this test is passing, so it looks like this locator should be good, but what we want to do is we want to get the products and we want to loop through all those.
>
> **[7:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=468)** So let's go ahead and build out some functionality that will allow us to do that.
>
> **[7:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=474)** So we know products.
>
> **[7:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=476)** JSON object has a data object, which is an array of JSON objects and that's really what we want to work with.
>
> **[8:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=486)** So we are going to use a for, we're going to say const product.
>
> **[8:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=491)** So we're going to say for each product of products.data, and we want to go do something for each of these elements or each of these values.
>
> **[8:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=504)** And let's just go ahead and copy this in here.
>
> **[8:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=507)** So await expect productGrid to contain text and we should be able to say product.name 'cause that should exist since that name is a part of data.
>
> **[8:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=522)** And let's just copy this one more time and make that price.
>
> **[8:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=528)** So let's run this and let's see if it passes.
>
> **[8:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=532)** There may be one other thing we need to do.
>
> **[8:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=537)** All right, so the test failed. Let's go see why it failed.
>
> **[9:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=540)** So it looks like it failed, route.fetch the test ended.
>
> **[9:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=548)** It also said that it was not able to read products.data.
>
> **[9:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=554)** So what happened here is we went to the page, we have a locator, and we went ahead and started executing this code down here.
>
> **[9:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=565)** But this product was never set because the route actually never happened.
>
> **[9:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=570)** Our playwright test ran too fast before the network request occurred.
>
> **[9:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=576)** So to do that, let's go back and inspect our page.
>
> **[9:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=582)** What we'll need to do is find some kind of way to say don't try the next assertions until these other assertions have happened.
>
> **[9:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=591)** So we're going to use some of playwright's auto waiting capabilities to set a implicit wait.
>
> **[9:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=599)** That's going to be something that as soon as it's done, it's going to go to the next thing rather than an explicit wait, which we do not want to do in our test.
>
> **[10:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=608)** It's just a bad practice.
>
> **[10:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=609)** So to do this, let's go see what happened.
>
> **[10:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=612)** Let me just refresh the page and see.
>
> **[10:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=616)** So it looks like as it loads, it looks like there are maybe some of these elements change.
>
> **[10:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=622)** So this is a little trick I've found.
>
> **[10:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=624)** You can actually find the product API requests in your dev tools.
>
> **[10:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=630)** You can block the request URL and run this, you know, refresh the page again.
>
> **[10:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=637)** And your dev tools is basically going to just block the request.
>
> **[10:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=641)** But what that's going to do is it's going to kind of like pause the website for us so we can actually inspect and go a little deeper.
>
> **[10:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=650)** And it does look like these elements are a little different, specifically these skeleton class.
>
> **[10:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=658)** So I don't think that is something that we see normally.
>
> **[11:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=661)** So this is a div skeleton, so maybe we can use that as our indicator.
>
> **[11:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=667)** So I'm going to unblock this and just refresh.
>
> **[11:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=671)** I'm just going to do a quick search to make sure that skeleton doesn't show up in the dom and make sure that is something we can use.
>
> **[11:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=678)** So it looks like this is in a style somewhere, so it seems like this might be our ticket.
>
> **[11:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=685)** So before the page or after page.goto, I'm going to create a new assertion.
>
> **[11:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=693)** I'm going to say await expect page.locator of class skeleton.
>
> **[11:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=702)** And I did see a few skeleton classes there.
>
> **[11:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=705)** So I'm just going to go ahead and set this as first and we're going to be at the end of the expect and I'm going to do a dot not.toBeVisible.
>
> **[11:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=716)** So what this is going to do is it's going to use playwright assertion framework, which has about a five second timeout.
>
> **[12:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=724)** It's going to wait until this is not visible before it moves on to the next section.
>
> **[12:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=730)** This should give enough time for the route to actually successfully capture the network request, set our products variable and all the magic should happen.
>
> **[12:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=741)** So let's go take a look.
>
> **[12:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=747)** Something still failed. All right, we've got one last thing.
>
> **[12:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=751)** So here our expector, the paid product.name passed, the product price failed and it failed because it's a number with this value and it's expecting the value to be a string or regular expression.
>
> **[12:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=767)** So based on this, there's a few different options we can go.
>
> **[12:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=771)** I'm going to go with the easiest for now, which is just saying this price, which is currently a number, let's go ahead and convert it to string.
>
> **[13:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=781)** So we'll call this on the price.
>
> **[13:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=784)** So this should be a string when this gets executed.
>
> **[13:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=787)** And let's try one more time.
>
> **[13:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=792)** All right, both passed, things are happy.
>
> **[13:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=796)** This pattern has allowed me to create targeted assertions, ensuring the UI is properly rendering elements returned from the backend systems without having to manage a bunch of test data.
>
> **[13:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/intercepting-http-requests-with-playwright?u=76281980&t=810)** It's really a great thing.

> [!info]- Semantic Content
>
> **Code Keywords:** let (24), await (7), this, (3), const (2), this. (1)
> **Definitions:** is a  (10), is an  (1)
> **Env Vars:** api (4), json (3), xhr (1), url (1)
> **CLI Commands:** make (5), find (3)
> **Code Identifiers:** productgrid (3), tocontaintext (1), tobevisible (1)
> **UI Navigation:** go to (4)
> **Analogies:** kind of like (2)
> **Best Practices:** best practice (1), bad practice (1)

#### Mocking HTTP responses with Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=0)** - [Instructor] Another approach to working with network requests in Playwright is to override certain things in the response or to fully mock the network request.
>
> **[0:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=13)** We'll walk through both of these examples in this video.
>
> **[0:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=17)** So let's go back to our home spec and we're just going to go ahead and create a new test at the bottom down here.
>
> **[0:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=24)** The test will be to validate the first one.
>
> **[0:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=28)** Validate product data is visible from modified API, add our test information here.
>
> **[0:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=45)** All right, so I think we should have a valid test framework here and we're just going to go ahead and copy this test step up here.
>
> **[0:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=58)** We'll paste this here.
>
> **[1:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=60)** So we're going to intercept, I'm actually going to say we're going to overwrite the products in point.
>
> **[1:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=69)** It's very similar context, but there's some slight differences.
>
> **[1:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=73)** So hopefully you get to see those here.
>
> **[1:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=76)** So we've got our paid route, we've got the endpoint we want to route to, we have our awaitroute.fetch.
>
> **[1:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=86)** The next thing we want to do is create a JSON variable.
>
> **[1:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=92)** I'm going to set that to awaitresponse.JSON and this is where we're going to change things up.
>
> **[1:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=101)** We're going to say JSON.data and specifically the first index in the array.
>
> **[1:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=111)** Name.
>
> **[1:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=113)** We want to set this equal to mocked product and we're going to do the same thing for the price and in stock.
>
> **[2:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=127)** So in stock, we're going to set this price.
>
> **[2:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=131)** This does not need to be a string, so that's pretty important.
>
> **[2:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=136)** Let's just set it to a hundred thousand and one cents and then we're going to set in stock to false.
>
> **[2:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=144)** So this is just a Boolean and this is the important part here.
>
> **[2:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=149)** Rather than do a route continue, we're not going to continue with the request.
>
> **[2:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=154)** We actually want to fulfill the request with the data that we are creating here.
>
> **[2:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=161)** So the way we do that is await route, not sure where that came from.
>
> **[2:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=168)** Awaitroute.fulfill.
>
> **[2:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=172)** And then we're going to pass in the response, JSON.
>
> **[2:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=178)** Okay, so we are sending this JSON that we've modified as the response.
>
> **[3:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=189)** All right, so when this happens, let's just go ahead and we also need to go to the page.
>
> **[3:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=200)** Let me make sure I'm outside of our test step.
>
> **[3:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=204)** So after we have the page.goto, let's go ahead and copy and paste this product grid 'cause we're going to use that.
>
> **[3:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=214)** We need a assertion to actually happen down here.
>
> **[3:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=217)** So there's enough waiting time.
>
> **[3:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=219)** So the fet actually gets set.
>
> **[3:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=222)** So let's go ahead and add a await.
>
> **[3:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=224)** Expect product grid.
>
> **[3:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=229)** And we're going to say get by roll of a link, say dot first to contain text mocked product.
>
> **[4:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=251)** Okay, so I'm basically saying on this page, this is a link.
>
> **[4:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=261)** I believe this whole item is a link here.
>
> **[4:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=264)** So this whole card is a link, specifically this element.
>
> **[4:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=268)** I'm basically saying give me the first one and let's validate it.
>
> **[4:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=275)** So let's run the test.
>
> **[4:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=278)** Let's see if we see our mocked product.
>
> **[4:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=281)** All right, where is our browser?
>
> **[4:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=283)** Looks like it's going to be down here.
>
> **[4:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=285)** So we've got mock product, it is out of stock, and we have a really large dollar sign here.
>
> **[4:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=292)** So we are successfully overriding the API requests.
>
> **[4:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=299)** So let's go ahead and finish out our assertions here, and then we'll move on to the next mock setup.
>
> **[5:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=307)** So we want this to contain the text, I think specifically out of stock.
>
> **[5:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=316)** And then we want to expect that this text is 123.01.
>
> **[5:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=323)** All right, let's run this test one more time.
>
> **[5:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=325)** Make sure everything is working.
>
> **[5:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=328)** All right, so everything's working, and let's move on to our next scenario.
>
> **[5:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=334)** All right, now let's take a look at what it looks like to route from a HAR file.
>
> **[5:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=340)** This is a true mock where we're saving the network response to a file on our computer.
>
> **[5:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=346)** We're going to commit it to our repo, and we're going to use that to mock the network request.
>
> **[5:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=352)** So let's write that test.
>
> **[5:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=355)** Validate product data is loaded from our file, sync pass enter page.
>
> **[6:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=369)** And we're going to add our test.step.
>
> **[6:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=373)** We're going to call this mock/products and open param.
>
> **[6:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=382)** Here, we're going to use a new method, awaitpage.route from HAR.
>
> **[6:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=390)** All right, this is going to take a couple different options.
>
> **[6:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=394)** The first one is going to be the HAR string.
>
> **[6:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=398)** This is going to be the location where the HAR file should be saved.
>
> **[6:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=402)** So we want to specify that as HARS/product.HAR.
>
> **[6:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=409)** We will need to create this.
>
> **[6:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=411)** This is not something that Playwright will create for us.
>
> **[6:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=415)** So we want to also pass in the URL.
>
> **[6:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=418)** We're going to use the same URL we've been using to mock.
>
> **[7:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=424)** And again, this is only going to be for this one test that we're mocking and we're going to add a update to false on here for now.
>
> **[7:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=435)** We might need to set that for true to scrape the data.
>
> **[7:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=439)** And then we're going to go ahead and go to the page.
>
> **[7:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=444)** Go to this so the route actually occurs.
>
> **[7:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=451)** We're going to set our product grid.
>
> **[7:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=456)** Again, as you've seen, we've done a good bit of duplication of code, right?
>
> **[7:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=462)** So if we have a page object for this product grid, that would make life a lot easier.
>
> **[7:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=471)** All right, let's just do an expect product grid to contain text.
>
> **[8:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=480)** We'll say happy path pliers.
>
> **[8:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=486)** So we're going to mock that and eventually it will pass.
>
> **[8:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=491)** So with our tests complete to be able to generate the HAR file, you're not able to do that to this VS code extension runner, but you actually have to run the MPX Playwright test command to generate the HAR files that we want to use in our test.
>
> **[8:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=512)** So I have created this command, I'm passing in my homepage, home spec TS.
>
> **[8:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=518)** We're going to run it, it's going to run all the tests in the spec file, and it should generate us a HAR file that we can then use, update and commit to our repository to get these tests passing.
>
> **[8:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=536)** So our HARS file is created.
>
> **[9:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=540)** Looks like this test is going to fail because we are expecting happy path pliers to be there, but that is not there in the list.
>
> **[9:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=549)** So let's go ahead and add that.
>
> **[9:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=554)** So in our HAR file, we've got a product HAR file.
>
> **[9:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=557)** This is kind of like the base information for the request and what it looks like.
>
> **[9:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=563)** And then we've got all the details back here.
>
> **[9:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=566)** What's interesting about all the details is this is where we can come in and replace maybe a name with happy path pliers.
>
> **[9:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=575)** Maybe we also want to change a, you know, the price down here.
>
> **[9:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=581)** Let's see, instead of $14.15, let's just say $1.99.
>
> **[9:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=587)** So I'm going to just save this.
>
> **[9:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=589)** I did auto format it.
>
> **[9:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=590)** I think that makes it nice.
>
> **[9:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=593)** And let's go ahead and just expect this to also include $1.99.
>
> **[10:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=601)** So I'm going to change this update from true to false so we don't overwrite our HAR request.
>
> **[10:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=609)** And now I should not have to run that from there.
>
> **[10:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=613)** Now I should be able to just run it from the debugger and notice that everything is passing now.
>
> **[10:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=618)** If I change this, of course this should fail.
>
> **[10:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=622)** Let's just double check, make sure, all right, it's not going to find it, it's going to fail and that is expected.
>
> **[10:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=631)** So some final thoughts around just mocking in general, I tend to really like to intercept network request, use that data in my test.
>
> **[10:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=642)** I will rarely use this route from HAR unless I'm working with a third party API that I don't have a lot of control over.
>
> **[10:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=652)** The reason is if the backend API request changes, your test may still pass because it's not using the actual network request, it's using a mock.
>
> **[11:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=662)** I would rather know than not know.
>
> **[11:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/mocking-http-responses-with-playwright?u=76281980&t=665)** The one exception here is when working with lots of third party services, or if I was in a really heavy microservice environment.

> [!info]- Semantic Content
>
> **Code Keywords:** let (20), pass (5), continue (2), await (2), this. (2)
> **Env Vars:** har (12), json (5), api (4), hars (2), url (2)
> **CLI Commands:** make (4), find (1)
> **Versions:** 1.99 (2), 123.01 (1), 14.15 (1)
> **Definitions:** is a  (4)
> **Documentation:** spec (3)
> **UI Navigation:** go to (3)
> **File Paths:** awaitresponse.json (1)

#### Browser emulation in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=0)** - [Instructor] Now that we have a grasp of how to mock and intercept request with a browser, let's zoom out a bit and look at how we can emulate different browsers with Playwright.
>
> **[0:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=11)** Each version of Playwright is released with different browsers that can be installed.
>
> **[0:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=16)** What's nice about Playwright is when you initialize Playwright through the npm and net Playwright@latest command, the default Playwright config has a lot of browser examples available for you to work with.
>
> **[0:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=30)** So let's take a look at our config file.
>
> **[0:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=34)** So open up the playwright.config.ts.
>
> **[0:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=38)** And if you scroll down to the project section, a little lower, you know, after what we have commented out, you can see a bunch of different browser options.
>
> **[0:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=50)** Let's go ahead and comment out this mobile Safari browser.
>
> **[0:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=56)** So I'm just going to select it all.
>
> **[0:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=58)** I'm going to hit Command backslash, that's the one that's on the question mark, or Control, depending on which one you're looking at.
>
> **[1:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=65)** Oh, I got to get this one too.
>
> **[1:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=67)** And let's go ahead and change this to the iPhone 13 since that's a little newer.
>
> **[1:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=72)** And we're going to save it.
>
> **[1:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=74)** Let's go ahead and run our test, npx playwright test.
>
> **[1:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=79)** I'm going to run them all from the command line in the terminal.
>
> **[1:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=83)** And while this is running, we're going to go back and look at our documentation again.
>
> **[1:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=89)** So there is one section up here that I want you to be aware of, and it is this registry of device parameters.
>
> **[1:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=97)** Let's go ahead and click on that.
>
> **[1:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=99)** This is a link to the actual Playwright repo, and should always be up to date with the latest versions of Playwright released.
>
> **[1:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=107)** You can think of this list as a list of prebuilt configurations with configured view ports and user agents for each browser.
>
> **[1:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=117)** Another important option to think about is mobile, true or false, you can see isMobile is true for some of these and for different things.
>
> **[2:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=129)** This can be found on each device in the catalog.
>
> **[2:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=132)** If you have requirements to test against a certain type of devices, these prebuilt settings will be a great start for your project.
>
> **[2:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=140)** Looking back at our config, note the name we give it.
>
> **[2:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=145)** Let's go back to our code.
>
> **[2:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=147)** Looking back at our config, note the name that we give it.
>
> **[2:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=151)** And then this use section, these three dots and devices with passing in this name is a object spread syntax, or a spread operator.
>
> **[2:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=164)** In our context, whatever we pass in here visits the device catalog what we just viewed and takes all the key value pairs from the device and includes them in the test project for us.
>
> **[2:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=178)** It's a nice little shortcut we can use so we don't have to type everything out or copy and paste things into our config.
>
> **[3:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=187)** You can however override the viewport or different options like so.
>
> **[3:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=194)** Here, we're overriding the permissions.
>
> **[3:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=198)** I could come in here and update the viewport to a width of 1280, height of 720.
>
> **[3:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=212)** And this will override whatever the viewport option is in this desktop Chrome functionality.
>
> **[3:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=220)** I'm not going to keep this here, so we're going to go ahead and just comment this out, but this is an example that is helpful to see.
>
> **[3:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=228)** Let's take a look at our tests that ran and inspect these failures.
>
> **[3:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=231)** I see that some failed.
>
> **[3:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=234)** So it looks like we've got three failures.
>
> **[3:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=236)** One is flaky.
>
> **[3:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=237)** So let's click on the flaky one first.
>
> **[4:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=240)** It looks like this had an issue running, so it was undefined data.
>
> **[4:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=246)** It looks like it passed the second time, so we might need to revisit that test at some point.
>
> **[4:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=252)** But let's look at Thor Hammer.
>
> **[4:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=254)** It looks like this one failed.
>
> **[4:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=256)** Let's scroll down and see why.
>
> **[4:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=259)** Okay, so it looks like this device is mobile friendly, so it renders differently when it's working with a mobile browser versus a non-mobile browser.
>
> **[4:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=270)** So let's go ahead and just inspect this a little more.
>
> **[4:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=274)** So we are going to find our browser.
>
> **[4:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=277)** We're going to go to [practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[4:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=282)** And in this section, I want us to right-click, I want to inspect the page.
>
> **[4:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=287)** And then over here in your Chrome dev tools, there's a little button that says Toggle device toolbar.
>
> **[4:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=293)** So we're going to toggle that, and this should give us the mobile-friendly view that our Safari test is actually getting.
>
> **[5:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=301)** So as we can see here, the test failed.
>
> **[5:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=304)** Let's go look back at our failure.
>
> **[5:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=306)** It failed because it was looking for a search placeholder, it was waiting for the search query, and it doesn't exist.
>
> **[5:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=315)** So let's go see where the search query is here.
>
> **[5:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=319)** So it looks like it's either going to be under this menu, all right, it's not there, or maybe it's on this filter menu.
>
> **[5:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=327)** Okay, so there's the search.
>
> **[5:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=329)** So it looks like when we're in mobile mode, we actually need to click on this filter section.
>
> **[5:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=335)** Let's see if there's any unique identifiers we can find.
>
> **[5:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=339)** Ooh, I see a data test for filters.
>
> **[5:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=341)** So let's use that.
>
> **[5:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=343)** And we'll just rerun this test for that specific one in our browser.
>
> **[5:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=348)** So the easiest way to find this, so this is the homepage spec, I will typically copy this, I will go to VS code, I will do a Command P, which opens up kind of like a search for the file names themselves.
>
> **[6:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=364)** And I'm just going to paste this in here, and it's going to take me right to the test that failed.
>
> **[6:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=371)** Now, in our debugger, when I click this button, it's going to run, let's see what it's going to run.
>
> **[6:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=378)** It will run the setup test, which I think I do not need for this, it looks like, which is okay, and it's going to run Chromium or mobile Safari.
>
> **[6:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=386)** So right now it's actually not going to fail, but let's go ahead, and so line 35, I'm going to unclick Chrome, I'm going to click mobile Safari, and I'm going to run this and let's just make sure it's failing.
>
> **[6:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=398)** So it looks like it's failing on this line here.
>
> **[6:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=402)** Going to validate.
>
> **[6:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=404)** All right, so the test failed.
>
> **[6:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=406)** It timed out after 30 seconds, so we fast-forwarded through that.
>
> **[6:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=411)** So let's go ahead and add that await page.getByTestId, it's going to be filter.
>
> **[6:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=419)** Just make sure it's filter.
>
> **[7:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=422)** It's filters, so let's type in filters.click.
>
> **[7:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=428)** So we're going to run this one more time and see if this thing passes or fails.
>
> **[7:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=435)** Ooh, it failed immediately.
>
> **[7:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=437)** Let's see why it failed.
>
> **[7:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=439)** So this filters.click, it failed because it resolved to two elements.
>
> **[7:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=445)** So this is one of the reasons I love Playwright, is Playwright gives me very quick feedback and tells me why it failed, or if there's two specific buttons, it's going to give me the locators for each one.
>
> **[7:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=458)** So if I'm looking to click on this first button, it's going to say getByRole, with a name filters, or the second one is the getTextBySortName A to Z, Z to A.
>
> **[7:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=473)** So let's go see where that is.
>
> **[7:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=475)** So that's going to be sort name.
>
> **[7:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=479)** Oh, it's going to be right here.
>
> **[8:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=481)** Sort name A to Z.
>
> **[8:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=482)** So this is apparently a filter as well.
>
> **[8:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=485)** Okay, so we will use the first suggestion they gave us.
>
> **[8:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=489)** So I should just be able to replace getByTestId with the locator that was provided, who I did not copy it.
>
> **[8:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=497)** So getByRole, button with a name filter and then click that.
>
> **[8:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=504)** So let's run this for Safari.
>
> **[8:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=507)** Let's make sure everything passes.
>
> **[8:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=508)** All right, so we know this passes for Safari.
>
> **[8:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=512)** And because we know Safari is a mobile device, there's another cool little trick that you can use within Playwright to make these tests pass in either condition.
>
> **[8:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=524)** And what we're going to do is we're going to come up here to insert the page into our test, and we're going to add isMobile, okay?
>
> **[8:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=534)** So this is going to basically let us know is the test running as mobile or not in a mobile viewport?
>
> **[9:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=543)** So we're just going to write a little if statement, and we're going to say, if isMobile is equal to true, then we want to execute this code.
>
> **[9:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=557)** If it's not, it's just going to skip it and go on to the next one.
>
> **[9:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=561)** So this should pass for both Chromium and Safari.
>
> **[9:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=564)** Let's run and validate that.
>
> **[9:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=568)** So Safari worked, Chrome worked.
>
> **[9:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/browser-emulation-in-playwright?u=76281980&t=572)** Everyone is happy.

> [!info]- Semantic Content
>
> **Code Keywords:** let (27), pass (3), this, (3), override (2), await (1)
> **Tools:** safari (9), command line (1), terminal (1), vs code (1)
> **UI Navigation:** click on (4), scroll down (2), go to (2), toggle (2), right-click (1)
> **CLI Commands:** make (4), find (3), npm (1), npx (1)
> **Code Identifiers:** ismobile (3), getbytestid (2), getbyrole (2), iphone (1), gettextbysortname (1)
> **Definitions:** is a  (3), is an  (1)
> **File Paths:** playwright.config.ts (1)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (1)

#### Localization and geolocation in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=0)** - [Instructor] While our practice site doesn't have any automatic geolocation or localization changes, many modern web apps will respond differently based on location or time zone of the browser.
>
> **[0:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=13)** Let's take a look at geolocation first to get an understanding of what Playwright is doing.
>
> **[0:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=19)** To do this, let's go ahead and open up a Chrome window in incognito mode and we are going to right click and click inspect.
>
> **[0:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=30)** This is the Chrome dev tools.
>
> **[0:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=32)** We are going to find the three dots over here on the right hand side.
>
> **[0:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=37)** Click this button.
>
> **[0:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=39)** We are going to click more tools and we're going to scroll down to sensors and click this.
>
> **[0:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=45)** So this is going to add a new sensor area and what this allows you to do is set your location.
>
> **[0:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=53)** There are a bunch of presets in here, so let's just choose Tokyo and let's go ahead and just go to [bing.com](https://bing.com).
>
> **[1:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=63)** As you can see, the site is rendering in Japanese.
>
> **[1:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=69)** This is because of the location that we set here.
>
> **[1:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=72)** If we change this to Berlin, potentially that will change.
>
> **[1:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=77)** So we're not quite English up here, is German, what it looks like.
>
> **[1:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=82)** So these are some different things you can do when working with location or changing your location.
>
> **[1:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=91)** You're also able to do this within Playwright.
>
> **[1:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=93)** So let's look at the Playwright docs and what that would look like to implement.
>
> **[1:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=99)** So again, this, you would want to set this up in your config file.
>
> **[1:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=104)** And you can see here under the use section, you can set a locale and this emulates the same thing that we just saw in the browser along with a time zone id.
>
> **[1:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=116)** Now there are very specific time zone IDs, so you'll have to find out which one you want to target, and you can set that in your config file.
>
> **[2:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=125)** For geolocation, this can be added to the use object of the defined config and apply globally, or you could use it within a specific test block.
>
> **[2:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=138)** The way that would look is like this in inspect test.use.
>
> **[2:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=146)** One thing to note with geolocation is you must add the permission geolocation.
>
> **[2:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=152)** This tells the browser to allow this, while by default it's going to ask you do you want to allow it, yes or no.
>
> **[2:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=160)** So to do that, we have the grant permissions link.
>
> **[2:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=164)** This can be found in the resources guide and you can apply this to a specific test or you can apply this to a specific browser that you have created.
>
> **[2:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=177)** So one example of that that we've got created in our config, so package config is we have a permission for clipboard read.
>
> **[3:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=191)** So if I wanted to add geolocation to this, I could just come in here and add geolocation.
>
> **[3:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=197)** And now we've automatically granted that permission to the chromium project.
>
> **[3:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=203)** Now it's not set up in the setup project and it's not set up in this project unless we grant that.
>
> **[3:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/localization-and-geolocation-in-playwright?u=76281980&t=212)** This can be really useful if you're working on a web application that might calculate the distance between places or uses the browser latitude and longitude coordinates, such as an online map.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), this, (4), this. (1)
> **Prerequisites:** set up (2), setup (1)
> **CLI Commands:** find (2)
> **UI Navigation:** scroll down (1), go to (1)
> **URLs:** [bing.com](https://bing.com) (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Injecting JavaScript in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=0)** - [Instructor] I have found myself in certain situations where the out of the box Playwright methods weren't able to solve my problems.
>
> **[0:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=8)** While this doesn't happen often, the Playwright evaluate functionality allows you to inject and run any JavaScript directly on any webpage.
>
> **[0:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=19)** The page evaluating functionality is typically my last resort.
>
> **[0:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=24)** During this video, we'll walk through two different examples where using the page evaluate functionality could be useful.
>
> **[0:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=31)** So let's go ahead and open up our code and go to the home spec that we already have created.
>
> **[0:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=37)** It's going to be under tests homepage and home.spec.ts file.
>
> **[0:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=42)** Now in this we are going to add our test in this first describe block section.
>
> **[0:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=49)** So this is the describe block that has no off.
>
> **[0:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=52)** And notice that we do have a before each that's going to the page.
>
> **[0:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=57)** So we're not going to have to use the page go to method for our test.
>
> **[1:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=62)** So let's scroll down to the end of this.
>
> **[1:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=64)** I'm going to go ahead and select this and I'll be able to see where this ends 'cause it should be highlighted on the left.
>
> **[1:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=70)** So in line 45.
>
> **[1:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=71)** So I'm just going to come right above that and we're going to create our first test.
>
> **[1:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=76)** The first thing we want to do is check for inputs without labels.
>
> **[1:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=81)** So I'm going to go ahead and type some of the boilerplate code here.
>
> **[1:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=85)** Check for inputs without labels.
>
> **[1:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=90)** I'm going to pass async.
>
> **[1:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=95)** And now we're ready to add the rest of our code.
>
> **[1:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=98)** Before we do that though, let's go explore the site and really understand what we are checking and how we're going to check it.
>
> **[1:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=105)** So let's go to our website, our practice software testing site.
>
> **[1:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=111)** And specifically what we're checking are inputs.
>
> **[1:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=115)** So this is an example of an input that are missing labels.
>
> **[1:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=119)** Now labels are something that help make a site accessible and in this situation there's a label here and there's search information here.
>
> **[2:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=128)** So let's just right click, click and inspect.
>
> **[2:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=132)** That should take us directly to this element through the Chrome dev tools.
>
> **[2:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=138)** And if I scroll up, I can see this label element here.
>
> **[2:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=142)** And this label has a attribute a for attribute, and it's for the search query, the idea of search query, and it has text of search.
>
> **[2:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=153)** So what we're going to do is we're going to write JavaScript that will go and validate that every single input actually has a valid label.
>
> **[2:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=164)** Now we're not going to write this code from scratch.
>
> **[2:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=166)** I've included this code snippet in the resources file under 0306 and it's going to be this first code snippet.
>
> **[2:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=177)** So we're going to go ahead and copy this here and we're going to add this to our text.
>
> **[3:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=184)** Now to be able to execute the JavaScript, we need some way to evaluate it.
>
> **[3:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=190)** That's the method that Playwright gives us.
>
> **[3:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=192)** So let's go ahead and type in await page.evaluate.
>
> **[3:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=199)** We're going to do an open parameter and another parentheses here.
>
> **[3:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=206)** We're going to close that.
>
> **[3:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=207)** We're going to have our hash rocket and our open code block bracket.
>
> **[3:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=213)** So anything within this code block bracket will get run as JavaScript.
>
> **[3:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=218)** So I'm going to go ahead and paste this in here.
>
> **[3:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=220)** So this JavaScript will get run when this await page gets added.
>
> **[3:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=225)** And really what's happening under the covers is Playwright is injecting this JavaScript into the webpage and it's rendering it.
>
> **[3:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=233)** So a few things we need to do.
>
> **[3:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=235)** First thing we need to do is we actually need to return this so we can actually use this.
>
> **[4:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=240)** So let's start with adding a variable at the beginning of our await page evaluate.
>
> **[4:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=247)** Const inputsWithoutlabels = .
>
> **[4:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=251)** So whatever gets returned here is going to be set to this variable.
>
> **[4:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=256)** And we also need to just return this.
>
> **[4:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=260)** 'Cause if we don't return it, it's going to not have a value.
>
> **[4:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=263)** So whatever gets returned should be assigned to this variable.
>
> **[4:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=268)** And now we just need to write a assertion down here.
>
> **[4:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=271)** So expect, we'll say inputsWithoutLabels.length 'cause this is going to return an array.
>
> **[4:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=281)** And I'm also going to just go ahead and give this like a custom error message labels with issues.
>
> **[4:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=289)** So if we do get any back, we're going to go ahead and paste those and we're going to make this two string.
>
> **[5:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=300)** So this is interpolation.
>
> **[5:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=302)** So I'm using this back to here, which is above the tab key and this dollar sign, open bracket with closed bracket.
>
> **[5:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=309)** We'll execute any JavaScript that is there.
>
> **[5:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=313)** And we want to finish our assertion here, toBe(0).
>
> **[5:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=320)** So what we're doing here is we're expecting ,we've got our expect.
>
> **[5:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=324)** So what we're passing in, we've got a custom error message if it does fail and we're expecting it to be zero, and I believe it's happy now.
>
> **[5:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=336)** So I just, I had an extra parentheses down there.
>
> **[5:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=340)** So let's go ahead and run this and see if it passes or it fails.
>
> **[5:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=346)** So it looks like it passed, it failed.
>
> **[5:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=349)** So I checked all the inputs and things are there.
>
> **[5:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=352)** So one thing I really like to do is just validate that the test is doing what it's supposed to do.
>
> **[5:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=358)** And to do that you really need to go to a site that might not have all the labels created.
>
> **[6:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=365)** Thankfully the practice website that we're testing against, there's a site that is created that actually has bugs inserted into it.
>
> **[6:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=373)** So we are going to go to that page.
>
> **[6:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=377)** It is going to be with-bugs.[practicesoftwaretesting.com](https://practicesoftwaretesting.com).
>
> **[6:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=383)** And when this is loaded, you can actually see in the search input, there is no label that's associated with it.
>
> **[6:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=392)** So if I come down, there's no label.
>
> **[6:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=394)** So this should fail the test if we go to this page, so I'm going to go ahead and copy this and we're going to update our test to have a page.goto at the very beginning so our before all still going to execute.
>
> **[6:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=408)** So we're still going to the normal homepage, but then we're going to have a separate go to here, which is going to redirect us to the site with bugs.
>
> **[7:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=421)** Now, I would expect in running this that the test would fail.
>
> **[7:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=425)** So let's run this and let's see what the error message is.
>
> **[7:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=430)** Alright, so it looks like we are failing and we can see down in here it failed because the error labels with the issues.
>
> **[7:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=440)** So it provided us our text down here, labels with issues.
>
> **[7:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=445)** So this is the label that has the issue.
>
> **[7:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=448)** It failed because it was not zero, it received one instead of zero.
>
> **[7:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=453)** So this is a great use of this functionality.
>
> **[7:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=457)** Now let's go ahead and write one more test that is similar nature, but on this test I want to test just any images on the page.
>
> **[7:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=466)** I want to make sure there are no broken images.
>
> **[7:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=469)** So in this scenario you can actually see there's a broken image here, a broken image here.
>
> **[7:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=475)** And we're going to just test that, you know, we'll test against our normal site and then we'll test against the bug site.
>
> **[8:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=482)** So let's go ahead and write the code for this.
>
> **[8:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=485)** So let's start with test check for broken images.
>
> **[8:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=495)** And here we're going to go ahead and create a variable called brokenImages.
>
> **[8:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=501)** And we're going to use similar steps we did in the last test Await page.evaluate, it's going to be open parens, we've got our hash rocket.
>
> **[8:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=513)** And here is where we are going to paste the JavaScript.
>
> **[8:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=518)** So I'm going to go ahead and add a return.
>
> **[8:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=520)** This JavaScript is also found in the resources file.
>
> **[8:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=524)** Find a broken image on the page.
>
> **[8:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=527)** So I'm going to copy that, we'll paste that in here.
>
> **[8:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=530)** And that should return an array of broken images, if any exist.
>
> **[8:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=537)** So under this next section, we want to create our assertion.
>
> **[9:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=542)** So expect brokenImages.length, and we can use the same pattern.
>
> **[9:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=551)** BrokenImages, we'll use our interpolation, brokenImages.
>
> **[9:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=561)** We're going to say toBe(0).
>
> **[9:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=566)** Alright, let's run this against our main test.
>
> **[9:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=570)** I'm actually going to copy this and we'll paste this up here.
>
> **[9:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=576)** So it's here, we're going to run it against our working site.
>
> **[9:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=578)** So I'm going to comment this out and run it.
>
> **[9:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=582)** Ensure that everything works on our good site and we're going to uncomment this out and run it and we should have a failure, a second failure.
>
> **[9:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=596)** Let's go look at the error message.
>
> **[9:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=598)** So it actually had three broken images, so I think we identified two of them.
>
> **[10:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=603)** And if we want the exact broken images, we actually have the URLs here that are just printed out in this array.
>
> **[10:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=611)** So pretty cool stuff.
>
> **[10:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=613)** I guess I could make this to a string that would just keep the types correct because it is a string that's being printed out, but everything should be working.
>
> **[10:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=627)** So let's go ahead and comment this back out 'cause we don't want to add that to our test, but we'll leave that in there for testing.
>
> **[10:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=634)** With this functionality, the possibilities are literally endless.
>
> **[10:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=639)** I found any of the AI LLMs have great ideas if you just ask them what kind of JavaScript should I execute on a page to help identify future errors With Playwright's page.evaluate, you'll likely have to tweak the code a bit to handle your website specific DOM elements.
>
> **[11:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=660)** But this gives you a great starting point.
>
> **[11:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/injecting-javascript-in-playwright?u=76281980&t=664)** Feel free to take some time and experiment with this functionality before heading into the challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (16), this. (4), await (4), pass (1), async (1)
> **UI Navigation:** go to (7), scroll down (1), scroll up (1)
> **Code Identifiers:** brokenimages (3), inputswithoutlabels (2), tobe (2)
> **CLI Commands:** make (4), find (1)
> **Definitions:** is a  (2), is an  (1)
> **Documentation:** spec (2)
> **File Paths:** home.spec.ts (1)
> **URLs:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com) (1)

#### Challenge: Mocking and emulation in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-mocking-and-emulation-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-mocking-and-emulation-in-playwright?u=76281980&t=0)** (bright music)
>
> **[0:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-mocking-and-emulation-in-playwright?u=76281980&t=5)** - [Instructor] For this challenge, I first want us to create one test intercepting a network request using the data for the assertion.
>
> **[0:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-mocking-and-emulation-in-playwright?u=76281980&t=15)** Feel free to explore the site and come up with your own test, but the solution section that I will be showing, I accomplished by using the brands that load on the left hand side of the homepage sidebar.
>
> **[0:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-mocking-and-emulation-in-playwright?u=76281980&t=30)** For your second challenge, I want you to create one test mocking a network request with assertions.
>
> **[0:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-mocking-and-emulation-in-playwright?u=76281980&t=37)** For this example, I will be showing off the categories that load off on the left side of the homepage sidebar.
>
> **[0:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-mocking-and-emulation-in-playwright?u=76281980&t=46)** And for your third challenge, I want you to run all the tests, and make any necessary updates to ensure that all the tests are passing.
>
> **[0:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-mocking-and-emulation-in-playwright?u=76281980&t=55)** You'll likely find that you'll need to use the isMobile option for sites that may render differently on mobile, and tweak a few things to get everything passing.
>
> **[1:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-mocking-and-emulation-in-playwright?u=76281980&t=67)** Another hint is you just want to make sure that all the data is loaded in the UI before making assertions against any intercepted data.
>
> **[1:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-mocking-and-emulation-in-playwright?u=76281980&t=77)** There are a few different ways to do this.
>
> **[1:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/challenge-mocking-and-emulation-in-playwright?u=76281980&t=79)** If you do get stuck, feel free to use the page.waitForTimeout temporarily, but I'll walk through how I accomplish this in the solutions video.

> [!info]- Semantic Content
>
> **CLI Commands:** make (2), find (1)
> **Code Identifiers:** ismobile (1), waitfortimeout (1)
> **Code Keywords:** this. (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (bright music) (1)

#### Solution: Mocking and emulation in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=0)** - [Instructor] Were you able to solve the challenges?
>
> **[0:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=8)** I know it can get frustrating trying to debug any of these network issues.
>
> **[0:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=13)** So let me take you through how I approached the challenge and my solutions.
>
> **[0:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=19)** This first test is a validate brands by intercepting network data.
>
> **[0:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=23)** And as you can see, I used a similar approach that we used before where I set a variable named brands.
>
> **[0:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=31)** And in this test step we intercept the network request that's going to this apiUrl /brands.
>
> **[0:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=40)** As you can see, I've also used the API_URL environment variable.
>
> **[0:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=45)** This is the same variable that's found in our ENV file.
>
> **[0:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=50)** So if I do run this test against another environment, I'll only need to change this and I won't have to update my specific tests.
>
> **[1:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=60)** So in this scenario, this is where we are intercepting the network requests.
>
> **[1:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=65)** So we've got a route continue, once we've set our variable here.
>
> **[1:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=70)** And this is an important part of working with network request, is you have to set up your route before you do the page.goto.
>
> **[1:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=80)** So that's why this page.goto happens after the route's created.
>
> **[1:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=85)** And this is another thing as I was building these out, I found that my original approach that we did earlier, actually it didn't work well with the mobile Safari browser, so I had to refactor this a bit.
>
> **[1:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=101)** Here, we're still just creating a variable called product grid and setting it to a locator.
>
> **[1:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=106)** But before I expected the skeleton to not be visible, I went ahead and validated that the product grid is loaded.
>
> **[1:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=116)** And once this is loaded, then it runs this code to make sure this is not visible.
>
> **[2:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=121)** And then after that it goes through and attempts to do the assertions against any of the brands.
>
> **[2:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=130)** What I was finding is there were some situations where this brand.name came back undefined, which means the route had not finished loading, but you know, switching around this stuff over here to make sure the product grid is visible and then the skeleton is no longer visible, that made my test work properly and they were no longer flaky.
>
> **[2:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=156)** So this is how I accomplished the intercepting a network request.
>
> **[2:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=161)** Let's go look at mocking the network request.
>
> **[2:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=164)** Now I did not use the mock from har here.
>
> **[2:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=166)** I actually am just getting the route for the categories and then I'm just overriding some of the JSON variables.
>
> **[2:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=176)** So json name, I set to mocked category.
>
> **[2:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=179)** And then also, you know, had a little more magic here where I said if the subcategory and the subcategories linked is greater than zero, I want to go ahead and set a subcategory as well.
>
> **[3:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=193)** And then we use the await route fulfill, and from the response we return the JSON.
>
> **[3:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=201)** So our route is established in this section.
>
> **[3:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=205)** Then we go to the page, the route should get intercepted.
>
> **[3:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=208)** We've got our our awaits in place, basically making sure the right elements are loaded and in the right state.
>
> **[3:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=214)** And then we're just validating that mock category exists and mock subcategory exists in the context of this section, you know, this locator.
>
> **[3:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=226)** So I'm going to go ahead and run this test so we can actually see that that mock data, well two things here.
>
> **[3:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=233)** One, the mock data is being called in here.
>
> **[3:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=236)** So we've got our mocked category and our mocked subcategory is all here in the test.
>
> **[4:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=243)** So the last challenge was to run all the tests and fix any that are broken.
>
> **[4:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=248)** So my approach to that, rather than walking through each of the code files is we're just going to walk through this commit that I've pushed up to GitHub that had my changes.
>
> **[4:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=260)** Now a few things I did here, I went a little over and above.
>
> **[4:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=263)** I didn't just fix the things that were broken, but I went ahead and refactored different things that I felt like needed to be refactored at this point.
>
> **[4:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=271)** So instead of hard coding this long URL through our test, we're taking time now to update them with our environment variable and our playwright config, we do that.
>
> **[4:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=285)** By default, playwright will use the base URL if there's not one provided.
>
> **[4:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=291)** So I was able to remove this and only leave this and it's using the base URL and then going to the rest of the path of the URL.
>
> **[5:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=303)** So I ended up doing that for multiple files.
>
> **[5:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=307)** We'll just kind of click through each one.
>
> **[5:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=309)** So this is the API spec file where I placed it with the API URL environment variable.
>
> **[5:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=316)** Our API challenge, I did the same thing.
>
> **[5:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=319)** Our checkout challenge, I did the same thing.
>
> **[5:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=322)** I did have to rework this a little bit, had to pass in the isMobile.
>
> **[5:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=327)** And if it's true, we basically had another little piece of navigation that we needed to click for things that were rendering in the mobile view.
>
> **[5:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=337)** I also had to commit a new snapshot.
>
> **[5:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=341)** So this is that same checkout challenge test that actually finished and got to the visual comparison test.
>
> **[5:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=348)** So we've got the one for mobile Safari is committed to the repo.
>
> **[5:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=353)** This is some more updating the names.
>
> **[5:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=355)** And then down here you can see actually refactor this page route to not use the hard-coded API.
>
> **[6:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=363)** But we're now setting a environment variable API URL from the environment variable and using that in our route down here.
>
> **[6:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=374)** So we do that a couple times.
>
> **[6:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=376)** This is me refactoring kind of the ordering of, you know, what we talked about in the last section.
>
> **[6:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=382)** And our last section is we did have to add a isMobile placeholder here, where we had to toggle that navigation as well.
>
> **[6:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=393)** So with all those changes in place, I was able to run the playwright test suite, all the tests multiple times with no failures.
>
> **[6:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=403)** I hope you were able to do the same.
>
> **[6:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/solution-mocking-and-emulation-in-playwright?u=76281980&t=405)** If not, make sure your branch is up to date and you're in the same spot as we move on to the next chapter.

> [!info]- Semantic Content
>
> **Env Vars:** url (6), api (5), json (2), api_url (1), env (1)
> **Code Keywords:** let (2), continue (1), await (1), default, (1), pass (1)
> **CLI Commands:** make (3)
> **Code Identifiers:** ismobile (2), apiurl (1)
> **Cross-References:** we talked about (1), in the last (1), next chapter (1)
> **Tools:** safari (2), github (1)
> **UI Navigation:** go to (1), toggle (1)
> **Definitions:** is a  (1), is an  (1)


### 5. 4. Customizing the Playwright Config

#### Running a webserver during a Playwright test
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=0)** - [Instructor] In the Learning Playwright LinkedIn Learning course, we covered the basics of updating the playwright.config.
>
> **[0:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=9)** In this chapter, we're going to focus on some of the more advanced features that we can do within Playwright using the config.
>
> **[0:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=18)** We'll start by showing you how to run your own local web server and test against it.
>
> **[0:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=26)** To run a web server within the playwright.config, we just need to add a web server object and provide a command.
>
> **[0:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=34)** This is a command that should be built into your package.json file, a URL that points to the server that it'll be run on.
>
> **[0:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=43)** And as we can see here, we can also pass in a timeout.
>
> **[0:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=49)** The file command reuse existing server currently resolves to a true or false in this case.
>
> **[0:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=56)** If it's not a CI build, true, if it's running in CI like a GitHub actions pipeline, then it's set to false with this current logic.
>
> **[1:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=67)** For our specific branch of code 04_01b, I've gone ahead and created a new local web server project that we can run to test this out.
>
> **[1:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=80)** See this new folder bagel-shop.
>
> **[1:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=83)** In this folder, there's a vite project, which is a bare bones web application, which we'll be writing some tests against.
>
> **[1:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=92)** So let's first take a look at the package.json file that I've updated with two new scripts.
>
> **[1:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=100)** As you can see, I've created an install:bagel-shop.
>
> **[1:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=105)** This should be run.
>
> **[1:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=106)** To run this command, it's npm run install:bagel-shop.
>
> **[1:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=115)** This will cd into the vagal shop directory and run an npm install to ensure all the dependencies are installed.
>
> **[2:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=122)** And the next command we can run is npm run start.
>
> **[2:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=127)** This will cd into the bagel-shop and run npm start there.
>
> **[2:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=133)** When running this, you'll see that you've got a new web server that is running locally at this port.
>
> **[2:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=141)** You can Control or Command + Click this to actually open up this website.
>
> **[2:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=147)** So this is running on my local host, and this is the web app that we're going to be testing with.
>
> **[2:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=153)** Now let's head on back to our playwright.config and go ahead and configure it to automatically run this web server when test run as a part of our npx playwright test command.
>
> **[2:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=167)** So we'll find the playwright.config within this defined config section.
>
> **[2:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=172)** We are going to add webServer.
>
> **[2:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=177)** It'll be an open bracket.
>
> **[2:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=178)** And then here we're going to type a command.
>
> **[3:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=181)** So I've already created this npm run start command, which will start the server, we validated that.
>
> **[3:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=188)** We're going to pass in a port 5173, a timeout.
>
> **[3:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=196)** This is a very long timeout.
>
> **[3:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=198)** You could definitely shorten this down as needed, but if this timeout is hit and the web server's not started, that's where you'll get a failure.
>
> **[3:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=209)** And we'll go ahead and keep the same setting here for reuseExistingServer.
>
> **[3:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=215)** All right, so we'll save this.
>
> **[3:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=218)** We need a comma here after our webServer object.
>
> **[3:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=223)** And now when we run our test, it should automatically spin up this webServer.
>
> **[3:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=230)** So the first thing I'm going to do in this terminal where this web server is running, I'm going to hit Command or Control + C.
>
> **[3:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=238)** That's going to stop the web server.
>
> **[3:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=239)** So now if I go to the site, it's not going to load.
>
> **[4:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=244)** And what we'll demonstrate here is I've created a new test over here in our test directory, in a bagel-shop folder, a test called test.spec.
>
> **[4:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=259)** And all it's doing is it's going to local host, which is not running right now, and it's validating that the best bagels in town since 1995 is visible on the page.
>
> **[4:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=273)** So let's go ahead and run this.
>
> **[4:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=276)** We're going to only run this specific test, or we're going to run the bagel-shop folder, which will only pick up this test.
>
> **[4:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=284)** So let's type in npx playwright test tests/bagel-shop,
>
> **[4:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=296)** and that's going to be the directory.
>
> **[4:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=299)** It will run our setup because that's how we're currently set.
>
> **[5:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=302)** We see Mobile Safari, chromium is there, and let's just show the report here.
>
> **[5:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=313)** This report should show that we actually loaded the page.
>
> **[5:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=318)** It validated this is working, and we have a successful test.
>
> **[5:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=325)** Before we move on, I do want to show one other helpful test configuration under Test configuration in the docs.
>
> **[5:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=336)** If you click on advanced configuration, you can also see these two items here.
>
> **[5:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=343)** So this is a globalSetup and a globalTeardown.
>
> **[5:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=349)** Both of these can be really useful if you have a lot of JavaScript that you need to run before your test suite or after your test suite.
>
> **[5:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=359)** So to stand it up, this could be to clear out a database or set some test data or to tear down things.
>
> **[6:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=366)** This could be to clean up some database, or maybe you've reset the test database on the tear down section.
>
> **[6:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/running-a-webserver-during-a-playwright-test?u=76281980&t=373)** This can be very helpful as your test suite grows and you find that there are specific things you need before or after your test for custom actions.

> [!info]- Semantic Content
>
> **CLI Commands:** npm (5), cd (2), npx (2), find (2)
> **Code Keywords:** let (5), pass (2), this. (2), case. (1), this, (1)
> **File Paths:** playwright.config (4), package.json (2)
> **Code Identifiers:** webserver (3), reuseexistingserver (1), globalsetup (1), globalteardown (1)
> **Prerequisites:** install (3), configure (1), setup (1)
> **Definitions:** is a  (4)
> **Tools:** github (1), terminal (1), safari (1)
> **Documentation:** spec (1), the docs (1)

#### Optimizing Playwright: Workers and sharding
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=0)** - [Instructor] When working within the Playwright config, one of the levers the Playwright product offers to speed up our test times are worker processes.
>
> **[0:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=10)** These can be set within the Playwright config and will determine how many OS or operating system processes are run when running the npx playwright test command.
>
> **[0:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=23)** An operating system process is an instance of the program that is running in an isolated process with its own memory space.
>
> **[0:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=32)** This is important to understand, because each worker will create an isolated, yet identical environment to the browser to run in.
>
> **[0:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=41)** This also means that you won't be able to communicate between different workers.
>
> **[0:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=46)** This may seem like a negative, but having isolated environments reduces the risk of race conditions and ensures the test results are reproducible.
>
> **[0:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=58)** An example to help with our understanding, a Playwright worker can be thought of as a deliverer working for a package delivery company.
>
> **[1:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=68)** In our worker scenario, we have one truckload of 50 packages or tests.
>
> **[1:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=74)** They all need to be delivered to 50 different apartments at the same apartment complex.
>
> **[1:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=80)** Each delivery only takes 30 seconds to walk the package to the door, knock, and deliver the package.
>
> **[1:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=87)** If you use one worker in this scenario, it will take 50 packages 30 seconds each.
>
> **[1:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=95)** That's going to equal 1,500 seconds.
>
> **[1:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=98)** 25 minutes to finish all the deliveries.
>
> **[1:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=103)** What happens if we add more workers?
>
> **[1:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=106)** The one limitation we will face with workers is the amount of workers is limited.
>
> **[1:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=113)** In our calculations, if we had 10 workers, it would only take twp minutes and 30 seconds to complete the job.
>
> **[2:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=122)** The problem is we can't have 10 workers fit in the delivery truck.
>
> **[2:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=126)** We can only fit two workers per truck.
>
> **[2:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=130)** You can think of the number of workers as the number of CPUs that your computer has, or how quickly your computer can process these things.
>
> **[2:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=139)** To help with this, this is where the idea of sharding Playwright test can help speed things up.
>
> **[2:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=146)** This functionality will allow you to split up your test into smaller parts called shards.
>
> **[2:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=153)** Each of these shards are their own jobs that manage their own workers that can be run on their own computers.
>
> **[2:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=163)** This ideally is dividing tests across multiple computers, which may have multiple workers running.
>
> **[2:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=170)** Back to our example of 50 packages, 30-second delivery time per package with two workers, 12 minutes and 30 seconds.
>
> **[3:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=180)** To introduce sharding into our example, this would be like sending out four trucks with two workers each, which would provide us access to eight total workers.
>
> **[3:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=193)** This would break down 50 packages divided by four shards, 12.5 packages per shard.
>
> **[3:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=201)** So that's going to round to two trucks or shards get 12 packages, and then two of the other trucks will get 13 packages.
>
> **[3:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=211)** Each shard has two workers.
>
> **[3:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=214)** If a shard has 12 packages, six per worker.
>
> **[3:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=218)** If a shard has 13 packages, one worker does six, the other worker does seven.
>
> **[3:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=224)** The slowest worker in a shard determines how long that shard takes.
>
> **[3:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=229)** So for seven deliveries, 30 seconds, that's 210 seconds, 3.5 minutes.
>
> **[3:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=237)** That is the worst case on a shard basis.
>
> **[4:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=241)** Workers speed up deliveries within a truck.
>
> **[4:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=246)** Shards split the jobs across multiple trucks, and with both together, you can deliver packages much faster.
>
> **[4:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=254)** You can see with these examples, as your test project grows, optimizing both the worker count and shards along with available servers to run those shards will provide faster feedback loops to your team.
>
> **[4:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=270)** Let's show off what this looks like in our Playwright config.
>
> **[4:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=274)** So let's open up our code base, find our Playwright config, and we're just going to do a Command + F in this file and look for workers.
>
> **[4:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=284)** So in our current config file, we have workers set to, if the process.env.CI, so that's, if it's running in CI is true, we set it to one worker.
>
> **[4:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=299)** If it's not running in CI, we set it as undefined.
>
> **[5:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=302)** What undefined does is when the npx playwright test runs, you'll determine how many workers you get based on your computer type and speed.
>
> **[5:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=314)** So let's go ahead and just set this to two, and run npx playwright test.
>
> **[5:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=322)** And we can see, when this runs, we are going to run all of our tests with two workers.
>
> **[5:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=327)** That means two workers at a time.
>
> **[5:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=330)** So I'm going to hit Command + C or Control + C to stop these tests, and I'm going to walk you through how to override this value in the command prompt.
>
> **[5:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=342)** So I'm going to set this back to undefined.
>
> **[5:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=345)** And if we wanted to just set the workers in the command line or through the terminal, we would do that by running npx playwright test --workers,
>
> **[5:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=359)** and you can set workers equal to whatever number you want to experiment with.
>
> **[6:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=364)** Let's just say we did workers=10.
>
> **[6:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=368)** This would probably not run well on my computer, 'cause the memory constraints might be there, but it is possible to run and experiment.
>
> **[6:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=377)** So I'm going to stop this test.
>
> **[6:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=380)** You see a bunch failed.
>
> **[6:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=383)** And the last thing I want to show off is sharding.
>
> **[6:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=386)** So you're not able to set sharding through the Playwright config.
>
> **[6:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=391)** That has to be done through the terminal.
>
> **[6:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=394)** So if I want to do shards, the way that typically works is I would have this code running on its own shard, and I would pass in the command npx playwright test --shard, and I would pass in two of four.
>
> **[6:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=414)** And what this would do is it would do some calculations.
>
> **[6:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=418)** It would find shard two out of four.
>
> **[7:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=421)** It would do the math, pull out those tests, and I would only be running those tests on this machine.
>
> **[7:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=428)** So in this scenario, I'm running 13 tests using four different workers, shard two of four.
>
> **[7:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=436)** One area which we didn't cover is parallelism, which is where each test block within a spec.ts file can be run in fully parallel set to true or false.
>
> **[7:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=450)** If true, each test block could be run in any order, picked up by any worker or shard.
>
> **[7:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=457)** If it's false, the test block will be run in order with a spec in order.
>
> **[7:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=463)** Setting fullyParallel true is a best practice as it ensures your tests are all built and isolated from one another.
>
> **[7:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=474)** You see that we have fullyParallel true set in our config.
>
> **[7:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=479)** You can read more about this in the Playwright docs.
>
> **[8:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/optimizing-playwright-workers-and-sharding?u=76281980&t=482)** Knowing how workers work will help us know the strengths and limitations of using Playwright for test automation as you continue to build out your test suite.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), pass (2), this, (1), override (1), continue (1)
> **CLI Commands:** npx (5), find (2)
> **Tools:** terminal (2), command prompt (1), command line (1)
> **Definitions:** is an  (1), means that (1), is a  (1)
> **File Paths:** process.env (1), spec.ts (1)
> **Code Identifiers:** fullyparallel (2)
> **Versions:** 12.5 (1), 3.5 (1)
> **Documentation:** spec (2)

#### Retrying tests in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=0)** - One really nice feature that is baked into Playwright test is the ability to retry test if they fail.
>
> **[0:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=9)** There could be many different reasons why a test fail as part of a test run.
>
> **[0:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=15)** A few examples could be the test fail due to getting stuck in a bad state.
>
> **[0:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=22)** For example, you expected to be logged in, but were in a logged out state.
>
> **[0:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=27)** Or maybe another test or user touched the data that you were asserting against.
>
> **[0:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=33)** Or if there's a race condition in the automation code where it's trying to make assertions before data is loaded within the page.
>
> **[0:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=41)** We've seen that happen in this course.
>
> **[0:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=44)** Maybe the test timed out because you didn't have the proper await syntax implemented, or maybe a third-party service failed, or maybe you hit a rate limit when you were making API calls using either the UI or API request.
>
> **[1:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=63)** Maybe the test is passing every other run because we only have the latest code deployed to half of the running servers, if it's behind the load balancer, maybe a container crash because we're running it on the cheapest server possible, because it's a test environment.
>
> **[1:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=81)** I assume if you've been in testing any length of time, you have run into at least four or five of these.
>
> **[1:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=88)** When tests fail due to any of these issues, they're considered flaky tests.
>
> **[1:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=95)** Now, flaky pie crust is good, Flaky tests, not so much.
>
> **[1:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=103)** Being able to automatically rerun a failed test can help us validate if there's truly a problem with the website code or testing, or if the failure reason was due to something not related to the website code.
>
> **[2:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=120)** Let's look at how this could be used in our site.
>
> **[2:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=124)** So let's open up the Playwright config, and we can see retries is currently set to two times in CI or locally one time.
>
> **[2:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=134)** That's what this line of code is saying.
>
> **[2:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=137)** What's nice about Playwright is you can also override that in the terminal.
>
> **[2:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=142)** So if I ran NPX Playwright test, I can pass in dash dash retries and I can set it to whatever number I would like from here, and it's going to retry up to that many times.
>
> **[2:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=158)** I recommend keeping this setting.
>
> **[2:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=160)** I do however strongly encourage you to always check the test report that come back is flaky.
>
> **[2:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=167)** This means they failed at least once and retry and passed.
>
> **[2:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=173)** Investigating the failures and determining why it failed is a must.
>
> **[2:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=178)** Once you know why it failed, you can make a decision on updating your test or updating your infrastructure or opening a bug ticket because there really was an issue with the application under test.
>
> **[3:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=191)** Having a test retry and pass without investigating why it did has the potential to miss intermittent bugs and get hurt the quality of the application we're testing.
>
> **[3:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=204)** One other useful command that can be used to help prevent introducing flaky test is to use the repeat each command.
>
> **[3:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=214)** What this will do is run the test n amount of times.
>
> **[3:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=218)** So let's take our bagel shop test.
>
> **[3:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=222)** I can run NPX Playwright Test, Test bagel shop.
>
> **[3:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=228)** I can pass in a dash dash repeat each.
>
> **[3:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=233)** We're going to pass in 10.
>
> **[3:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=236)** What this is going to do is it's going to run that same test 10 different times.
>
> **[4:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=243)** It's running it actually 20 times.
>
> **[4:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=245)** The reason for it is we've got two projects.
>
> **[4:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=247)** We've got the mobile Safari project and the Chromium project.
>
> **[4:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=252)** I found this command is really useful for running tests multiple times before they enter your test suite.
>
> **[4:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/retrying-tests-in-playwright?u=76281980&t=260)** So before you commit and push 'em to your test repo, running this to check for flakiness is really, really helpful to keep your test suite clean.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (4), let (3), await (1), override (1)
> **CLI Commands:** make (2), npx (2)
> **Env Vars:** api (2), npx (2)
> **Tools:** terminal (1), safari (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - one (1)

#### Overview of timeouts in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=0)** - [Instructor] If you have ever built a test automation framework before, you're likely familiar with timeout errors in your test.
>
> **[0:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=8)** These can both be a blessing and a curse.
>
> **[0:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=11)** A blessing in that if the suite times out when the system's hung up, you're able to get quicker feedback about the failures with configured timeouts in place.
>
> **[0:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=22)** They can be a curse when your system is slow and your timeout occurs before the website you're testing is still being loaded.
>
> **[0:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=30)** This can lead to a lot of frustration.
>
> **[0:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=33)** Thankfully, Playwright provides lots of different timeout options for our test.
>
> **[0:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=39)** Let's take a look at the docs and these high-level timeouts.
>
> **[0:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=44)** The first one we're going to look at is the test timeout.
>
> **[0:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=47)** This test timeout is defaulted at 30 seconds.
>
> **[0:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=52)** Note that these numbers are using an underscore in place of a comma.
>
> **[0:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=57)** This is an easy way to visualize the values without having to count a bunch of zeros.
>
> **[1:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=63)** I would recommend this pattern, or a similar pattern, that we'll look at a little later.
>
> **[1:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=68)** So let's go look at our test config and see how we have things set.
>
> **[1:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=74)** So on our Playwright config, we have the timeout set at 30 seconds as well.
>
> **[1:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=81)** Well, let's say we have a single test that needs longer than 30 seconds to complete.
>
> **[1:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=87)** The test is timing out because it's reaching this limit.
>
> **[1:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=91)** What's nice about this timeout is you're able to override it within a specific test.
>
> **[1:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=99)** So let's say we had a test that we wanted to set a timeout or we wanted to override this timeout to two minutes.
>
> **[1:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=106)** So let's just go to our bagel-shop test.
>
> **[1:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=109)** Now we know this one goes pretty fast.
>
> **[1:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=112)** But to override a timeout, we could come to the top of our test.
>
> **[1:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=117)** Add test.setTimeout.
>
> **[2:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=120)** We're going to pass 120_000, with three zeros, and this will set the timeout for this specific test to two minutes.
>
> **[2:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=132)** Doing this, while it is possible, is not a typical practice that should be followed.
>
> **[2:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=138)** Ideally, a two-minute test could probably be broken up into multiple smaller tests.
>
> **[2:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=145)** You can use the value and add values to the timeout, and a beforeEach as well.
>
> **[2:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=151)** You just have to bring in the test info in order to access that.
>
> **[2:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=156)** An example of what that looks like can be found in the docs in this beforeEach section.
>
> **[2:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=163)** The syntax is very similar.
>
> **[2:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=164)** You bring in testInfo as you're creating the beforeEach.
>
> **[2:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=169)** You say testInfo.setTimeout, and you actually take the original timeout, which is 30 by default, and you add another 30 seconds to it.
>
> **[3:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=182)** This can be really useful to configure your test so they're more dynamically set.
>
> **[3:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=189)** You can still change your test timeout in your Playwright config, and this will dynamically follow it.
>
> **[3:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=197)** Let's look back at our docs at some of the other different timeouts.
>
> **[3:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=203)** The next one to look at is the expect timeout.
>
> **[3:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=207)** The expect timeout, which is not set in our config, but this is what sets the value for any expect syntax in your test resolve.
>
> **[3:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=217)** This timeout is five seconds by default, but it can be overwritten in the config as an expect object.
>
> **[3:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=225)** You can see the docs here.
>
> **[3:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=228)** Another example, we're going to scroll down to these advanced timeouts, low level timeouts, is an action timeout.
>
> **[3:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=236)** We have ours set to zero, but this is a timeout for an action to happen.
>
> **[4:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=241)** A click is an example for an action.
>
> **[4:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=245)** There's also a navigation timeout.
>
> **[4:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=249)** This is a timeout for the goto function.
>
> **[4:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=252)** So if you are running into issues there, you can adjust that.
>
> **[4:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=258)** There's also the global timeout.
>
> **[4:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=261)** By default, this is set to zero.
>
> **[4:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=263)** In our config, we have it set to 10 minutes.
>
> **[4:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=267)** This global config is if the entire suite goes over this value, the remaining tests that haven't finished will be marked as failed due to a timeout.
>
> **[4:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=279)** There's also the fixture timeout.
>
> **[4:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=281)** This can be set on each fixture, and it's helpful for when you want to have shorter timeouts within a test and have longer timeouts within a fixture.
>
> **[4:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=291)** I'll typically keep the default settings for each of these values, and only look to add or adjust the timeouts if I have a specific need.
>
> **[5:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=300)** With each of these timeouts, we are given a ton of flexibility in order to build and design systems that provide fast feedback to us and our teams.
>
> **[5:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=312)** Before moving on to the next chapter, take a few minutes and implement or adjust the different timeouts discussed.
>
> **[5:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=320)** While you're at it, experiment with adjusting the worker count for the code running on your specific system.
>
> **[5:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/overview-of-timeouts-in-playwright?u=76281980&t=327)** See what that sweet spot is for the number of workers, what completes the fastest, and what's most reliable with zero failures.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), override (3), default, (3), pass (1), this, (1)
> **Code Identifiers:** beforeeach (3), settimeout (2), testinfo (2)
> **Definitions:** is an  (3), is a  (2)
> **Documentation:** the docs (3)
> **UI Navigation:** go to (1), scroll down (1)
> **Cross-References:** next chapter (1)
> **Warnings:** note that (1)
> **Prerequisites:** configure (1)


### 6. 5. Handling Complex Scenarios and Interactions in Playwright

#### Working with multiple windows and popups in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=0)** - [Instructor] So far throughout this course, we focused on interacting with a single browser window at a time in our tests.
>
> **[0:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=8)** In this video, we're going to learn how to interact with multiple browser windows and to deal with popups.
>
> **[0:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=14)** For the next few videos, we'll be using the bagel shop project, which is the local web server that we set up in Chapter 4, Video 1, so let's open up our project and go ahead and run that web server.
>
> **[0:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=31)** To do that, I'm going to use my terminal baked into VS Code.
>
> **[0:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=36)** I'm going to start by clicking this + button.
>
> **[0:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=39)** This is going to create a new split terminal, and in this second terminal, I'm going to type in npm run start.
>
> **[0:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=48)** If you have not run the npm run install bagel shop command first, you will need to do that first, but running this should run the Vite server.
>
> **[1:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=61)** I'm going to copy this URL, and we are going to paste it into a Chrome browser.
>
> **[1:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=69)** Now, for this first test, this site is a test site, and it is not well designed on purpose, but specifically, we're going to click this Get Promo Code.
>
> **[1:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=81)** What that should do is open up a pop-up window with the promo code inside, and we want to interact with that window and make an assertion in that page, so let's click this.
>
> **[1:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=94)** We see it pops up a Promo Code, and the Promo Code is B6G2, so buy six bagels, get two free, so let's go about writing a test that will work with this pop-up window and interact with it, so let's go ahead.
>
> **[1:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=113)** In our bagel shop, we're going to create a new file.
>
> **[1:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=117)** We're going to call it the home.spec.ts, since we're testing from the homepage.
>
> **[2:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=123)** Going to do our normal import, test, and expect from @playwright, and we're going to go ahead and start our test.
>
> **[2:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=136)** It's going to be, "Validate promo code popup."
>
> **[2:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=142)** We're going to make it async, pass in page, and we've got the beginning of our test.
>
> **[2:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=151)** Now, the first thing we want to do, because we're testing against this bagel shop URL, we need to make sure that we are going to the correct URL, so http.
>
> **[2:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=165)** Notice it's not s 'cause we're testing on localhost 5173, so this is the way we have it configured, and the next thing we're going to do is let's actually take a look at the docs, so these are the docs on how you work with multiple pages, and you can see, specifically, in this section, working with new pages, which is our scenario.
>
> **[3:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=197)** They start with creating a page promise, and they set that to a context.waitForEvent.
>
> **[3:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=205)** Note that there's no wait here.
>
> **[3:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=207)** The next thing they do is have some kind of action on the page, and then, after that, they have the new page set from the page promise, and then we can start interacting with the new page, so let's implement this scenario in our test, so the first thing we need to do is we need to create a popuPromise.
>
> **[3:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=235)** It's what we're going to call ours.
>
> **[3:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=237)** We're going to set that... Oh, we need to add a const here 'cause it is a variable.
>
> **[4:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=243)** page.waitForEver, and the event we're actually waiting for is going to be a popup, so these different events are things that can happen from within JavaScript, and the next thing we need to do is we do need to figure out what are we actually going to interact with?
>
> **[4:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=263)** So let's go take a look at our website under test.
>
> **[4:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=267)** Let's go inspect this, and I just was make sure, so this is a button.
>
> **[4:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=274)** It has a popup button id.
>
> **[4:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=276)** It also has some text that we can use here, so let's use the get by role button, and then we're going to pass it a name, and we'll use the Get Promo Code as the name, so that's how we're going to build that out, so let's say await page.getByRole, and we're adding that await 'cause we're going to actually click it, so we've got the role "button", and we're also going to use the name: "Get Promo Code".
>
> **[5:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=312)** The casing does matter here.
>
> **[5:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=316)** .click, and now we should be clicking on that button, and the next thing we need to do is create a popup variable, and we'll set that to await popupPromise, so we create a promise here, waiting for the event.
>
> **[5:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=340)** We click on it.
>
> **[5:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=342)** At that point, we set popup to the wait promise, so it should know about the new page at that point, and the next thing we want to do is let's go see if there's any unique identifiers or anything here.
>
> **[5:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=355)** 'M'onna guess there's not.
>
> **[5:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=357)** Looks like it's just raw text here, so we'll just validate that the element can be found by the text, so we'll say await expect(popup.getByText("The promo code is:")),
>
> **[6:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=377)** all right?
>
> **[6:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=377)** And we'll just make sure it is toBeVisible.
>
> **[6:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=382)** All right, so let's go ahead and run this test.
>
> **[6:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=387)** Let's make sure everything is working properly.
>
> **[6:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=392)** All right, so our test passed.
>
> **[6:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=396)** As you've seen, Playwright makes it really easy to interact with multiple windows.
>
> **[6:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=401)** For some other examples, go check out those docs.
>
> **[6:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=405)** One area which we won't cover is working within iframes.
>
> **[6:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-multiple-windows-and-popups-in-playwright?u=76281980&t=409)** There are also great examples that can be found on the iframe section of the docs that really dive into working within iframes.

> [!info]- Semantic Content
>
> **Code Keywords:** let (13), await (4), pass (2), this. (1), import, (1)
> **CLI Commands:** make (6), npm (2)
> **Code Identifiers:** waitforevent (1), popupromise (1), waitforever (1), getbyrole (1), popuppromise (1)
> **Env Vars:** url (3), b6g2 (1)
> **Documentation:** the docs (3), spec (1)
> **Tools:** terminal (3), vs code (1)
> **Definitions:** is a  (3)
> **Prerequisites:** set up (1), install (1)

#### Working with alerts and dialogs in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=0)** - [Instructor] It's likely that you've run into alert or confirm dialogs on the web.
>
> **[0:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=6)** While these are less common nowadays, they're still found in many web applications.
>
> **[0:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=12)** In this video, we're going to walk through filling out the contact form on this page and work through dealing with multiple confirmation boxes.
>
> **[0:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=21)** This is quite a complex scenario with all the dialogs involved, as you'll see as we're diving in.
>
> **[0:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=29)** So the first thing I'm going to do is I've still got my local environment running, so I'm browsing here.
>
> **[0:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=36)** I'm going to click on the Contact link.
>
> **[0:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=39)** One thing to note is this is going to open up a new window.
>
> **[0:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=43)** So we're going to use the same functionality to kind of work from a new window that we did in the last one or a new page.
>
> **[0:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=51)** And we're going to come in here, we'll just go ahead and inspect this so we can kind of see what each of these are.
>
> **[0:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=58)** So it looks like we have an input that is name has an ID of name, an input ID of email, input ID of message, and then we have a submit button.
>
> **[1:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=72)** So we're just going to type in Testy Mctester, testy@[test.com](https://test.com).
>
> **[1:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=80)** And I'm going to put the message, I really like your bagels.
>
> **[1:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=86)** So we're going to click Send Message, and it looks like we are presented with a box here.
>
> **[1:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=93)** Send this message, we're going to click OK.
>
> **[1:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=96)** And we also have a informational message that our message was sent successfully.
>
> **[1:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=103)** So we're going to work on interacting with each of those dialogs in our test.
>
> **[1:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=110)** So let's go ahead and create a new file in the bagel-shop.
>
> **[1:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=115)** We're going to call it contact.spec.ts.
>
> **[2:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=120)** And we're going to go ahead and just start importing our test and expect from "@playwright."
>
> **[2:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=130)** And let's just start writing our test.
>
> **[2:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=133)** Send a message through the contact page.
>
> **[2:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=139)** All right, we're going to pass in async, we're going to pass in page like normal.
>
> **[2:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=148)** And the first thing we're going to do is await page.goto.
>
> **[2:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=153)** Going to pass in our URL, localhost:5173.
>
> **[2:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=160)** And the next thing we're going to do is we're going to use that same logic to create a contact page promise.
>
> **[2:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=170)** We're going to set that to, it's going to be a little different, I think we did a page.waitForEvent, but because we're dealing with a brand new page, not just a window, we actually need to bring in, this should be context.waitForEvent("page").
>
> **[3:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=193)** So it should just be context.
>
> **[3:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=196)** Now, we don't have access to context here, so we actually need to bring this in here.
>
> **[3:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=203)** And this is our context fixture.
>
> **[3:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=206)** So this is like the browser context is what we're working with here.
>
> **[3:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=211)** And we're not going to put an await here 'cause this is a promise.
>
> **[3:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=217)** So let's go ahead and add an await here though, page.getByRole("Link").
>
> **[3:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=224)** And this is where we are clicking on the {name: "Contact"}.click.
>
> **[3:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=234)** So now we've clicked on the contact link, the next thing we want to do is await that promise.
>
> **[4:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=242)** We're going to set a new variable called contactPage.
>
> **[4:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=246)** So this is the context we're now going to be working with since we're working with two different things.
>
> **[4:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=251)** And we're going to await our contactPagePromise.
>
> **[4:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=255)** And this variable should be set so any future actions we do on the contact page, we should be using this contactPage variable.
>
> **[4:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=266)** Anything that we want to do on the original page, which there's nothing we want to do in this test, we would just use page.
>
> **[4:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=274)** But everything else is going to be contactPage.
>
> **[4:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=280)** All right, so first thing we want to do is fill the name, the email, and the message, and then get ready to hit the Submit button.
>
> **[4:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=290)** So let's just code that up.
>
> **[4:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=292)** So await contactPage.locator.
>
> **[4:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=296)** And we're just going to use the ID, name.
>
> **[5:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=300)** We're going to do a .fill.
>
> **[5:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=303)** I like the name Testy Mctester.
>
> **[5:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=308)** We'll keep this capital, keep things interesting.
>
> **[5:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=310)** We are testers here.
>
> **[5:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=312)** ContactPage.locator.
>
> **[5:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=315)** We're going to pass this to be email.
>
> **[5:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=319)** This pound is ID email.
>
> **[5:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=321)** We're going to say .fill.
>
> **[5:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=325)** We're going to say test@[test.com](https://test.com).
>
> **[5:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=330)** And we're going to pass the message.
>
> **[5:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=338)** And we're going to fill this.
>
> **[5:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=341)** We'll say Hi I love your bagels.
>
> **[5:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=346)** All right.
>
> **[5:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=348)** So the next section or the next thing we would do is actually click that Send button message.
>
> **[5:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=355)** So let's go ahead and code that out, and just know we're going to have to do a few things in between.
>
> **[6:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=361)** Await contactPage.getByRole("button").
>
> **[6:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=368)** And then we're going to pass in the name, which is just the text on the button.
>
> **[6:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=374)** "Send Message". And caps does matter.
>
> **[6:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=379)** And we're going to do a .click.
>
> **[6:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=384)** And then down here, we just want to expect, so let's go look here.
>
> **[6:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=393)** If I want to assert on this webpage that something has happened, so let's say I just click the button, but the alerts don't get cleared.
>
> **[6:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=404)** Our name, and email, and message, they're still going to have data in there, but as soon as I hit Cancel, that data stays.
>
> **[6:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=413)** If I go ahead and click through all the way to the end, this data gets cleared.
>
> **[6:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=418)** So the assertion I want to make, since we are just faking this, there's not an actual API server on the backend that we can validate against.
>
> **[7:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=426)** We are just going to validate that the UI has cleared out this name field to ensure that the form was successfully submitted.
>
> **[7:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=435)** So to do that, we're just going to say await expect(contactPage.locator).
>
> **[7:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=444)** Now, if we actually had built a page object here, I wouldn't have to retype this out again.
>
> **[7:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=451)** I could just use that page object.
>
> **[7:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=455)** So we want this to have value of empty string.
>
> **[7:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=459)** All right.
>
> **[7:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=460)** And this toHaveValue is a locator that is basically using, so you can kind of see it here, it expects value in an input field.
>
> **[7:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=471)** So if this locator's an input, this toHaveValue is something we can use.
>
> **[7:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=475)** So I'm going to go ahead and run this and I am going to expect this to fail.
>
> **[8:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=481)** And I'm also going to adjust our tests So we are only running this with Chromium, right?
>
> **[8:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=488)** So here's our contact spec, let's say play.
>
> **[8:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=493)** So you know, you kind of saw some of the different dialogs come up here, but it actually failed because it did not clear this information out.
>
> **[8:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=502)** So we've got to figure out how do we deal with those dialogs?
>
> **[8:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=505)** And this is where the docs come in handy.
>
> **[8:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=509)** They're going to walk us through, you know, what are some of those different things we can do specifically the dialog.accept, you can kind of see this logic here.
>
> **[8:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=521)** And there's, you know, quite a few different ways to work with dialogs, whether it's an alert, a confirm, or a prompt.
>
> **[8:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=530)** So I'm going to just walk us through the code.
>
> **[8:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=534)** It did take me a bit to figure out like the logic here, but just know anytime you're working with dialogs, you always have to set up the dialog and then click the button to handle the action.
>
> **[9:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=548)** So we are going to go above the "Send Message" .click() and we're going to add some snippets here.
>
> **[9:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=556)** I'm just going to copy and paste this 'cause it was a little difficult to work out.
>
> **[9:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=562)** And we'll just walk through this.
>
> **[9:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=564)** So what's happening here is we've got our contactPage, and notice that there's no await here on this layer.
>
> **[9:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=572)** There is an await down on this layer.
>
> **[9:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=575)** But we're basically saying once this dialog is here, we are actually doing an assertion on the dialog message itself.
>
> **[9:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=585)** We're expecting it to send this message, and once we validate that, we're going to accept it.
>
> **[9:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=592)** And then we're also setting up the second handler.
>
> **[9:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=595)** So this is where it adds a little bit of complexity 'cause there's multiple dialogs that you have to kind of click through.
>
> **[10:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=601)** And here we're naming this dialog too.
>
> **[10:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=605)** So we're kind of passing this in.
>
> **[10:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=606)** We're saying we expect this message to contain ("Message sent successfully!").
>
> **[10:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=612)** So we're actually doing assertions on those dialog boxes as well.
>
> **[10:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=617)** And then we are .dismiss and this scenario is clicking OK on the alert.
>
> **[10:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=623)** So we had a confirmation and an alert scenario, and so when this button's clicked, all this code gets executed and this should work now.
>
> **[10:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=633)** Run this. Okay, it did clear it.
>
> **[10:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=637)** You saw the different alerts and everything is happy.
>
> **[10:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=643)** So one thing I would note is working with a lot of these complex scenarios, a little shortcut that could help you is if you have access to the JavaScript that actually builds out these alerts and has the ordering, you can actually drop that in ChatGPT or any of these LLM tools and ask it to help you work out how to deal with the dialog, help you write that code.
>
> **[11:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-alerts-and-dialogs-in-playwright?u=76281980&t=668)** And typically it's pretty good at it if it's got the JavaScript source code.

> [!info]- Semantic Content
>
> **Code Keywords:** await (10), let (8), pass (6), this. (3), async (1)
> **Code Identifiers:** contactpage (7), waitforevent (2), getbyrole (2), tohavevalue (2), contactpagepromise (1)
> **URLs:** [test.com](https://test.com) (2), [localhost:5173](https://localhost:5173) (1)
> **Env Vars:** url (1), api (1), llm (1)
> **Documentation:** spec (2), the docs (1)
> **Definitions:** is a  (2), is an  (1)
> **File Paths:** contact.spec.ts (1)
> **CLI Commands:** make (1)

#### Working with uploads and downloads in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=0)** - [Instructor] When working with web applications, you may run into situations where you need to download and verify or upload a file to the site under test.
>
> **[0:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=10)** Playwright provides a nice interface to work with both of these.
>
> **[0:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=15)** For this exercise, we'll use the same local website we used in the last video.
>
> **[0:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=20)** You can run that yourself using npm run start.
>
> **[0:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=24)** So let's start your server, and let's go explore the order page.
>
> **[0:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=31)** So I'm going to come up here and click on Order.
>
> **[0:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=34)** And you can see I've got a upload dialog, I've got special instructions, I've got a quantity, I've got a Place Order button.
>
> **[0:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=44)** And let's go ahead and walk through what this may look like.
>
> **[0:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=50)** So let's upload an item, special instructions.
>
> **[0:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=56)** Any quantity's fine. Let's just do five.
>
> **[0:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=59)** We'll click Place Order.
>
> **[1:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=62)** And it looks like I've got an alert dialog, so we're going to have to deal with that.
>
> **[1:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=68)** I click OK, and now I have a button to work with the download as well.
>
> **[1:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=74)** So I can click this button, download this file, and it looks like this is actually a text file that's a receipt.
>
> **[1:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=83)** So we can actually read this and assert against the data that's in this file.
>
> **[1:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=89)** So let's dive in to the code and just kind of walk through what we're looking for.
>
> **[1:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=94)** So in this example, this is the simplest.
>
> **[1:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=98)** If I'm working with a download, I'm first going to create a promise, very much like we've been doing.
>
> **[1:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=105)** We're going to then click the Download file, and then we are then going to set the download equal to the awaited download promise.
>
> **[1:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=116)** At that point, we validate that things are downloaded and then you can start working with it.
>
> **[2:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=122)** The upload is somewhat similar, but a little different, in that we use this setInputFiles function on the element itself.
>
> **[2:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=135)** So let's dive right in, and we'll start writing some code to test through this page.
>
> **[2:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=143)** All right, so let's get back to our repo.
>
> **[2:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=147)** We're going to create a new file in the test folder, bagel-shop.
>
> **[2:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=152)** We're going to call this order.spec.ts.
>
> **[2:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=159)** This is going to be very similar.
>
> **[2:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=161)** We're going to go ahead and import our test, expect, from @Playwright.
>
> **[2:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=169)** The good thing about doing this over and over again is you get good at it.
>
> **[2:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=173)** And we're going to go ahead and add a test to create an order.
>
> **[3:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=180)** And this is going to be async.
>
> **[3:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=183)** We're going to pass in page, and we've got our hash rocket.
>
> **[3:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=189)** And at that point we will go ahead and await page.goto,
>
> **[3:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=197)** localhost:5173.
>
> **[3:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=203)** So here in this scenario, rather than go somewhere and then click on a link, we can test that, but since we're really just exercising this page, I'm just going to have it go ahead and resolve to the full URL since we're already going to be there.
>
> **[3:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=218)** Typically if I was doing this, I would create another test that maybe just clicked through all the different links in the headings and did an assertion, so I wouldn't have to retest that every single test.
>
> **[3:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=231)** So we want to go find the upload section.
>
> **[3:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=235)** So we need to go figure out like what is this element?
>
> **[3:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=239)** And we want to use that setInputFiles function on it.
>
> **[4:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=243)** So let's go see what this is.
>
> **[4:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=246)** So this is an input, has an ID of designUpload.
>
> **[4:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=251)** So I think that's what we'll use for our locator.
>
> **[4:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=254)** That looks good enough for me.
>
> **[4:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=256)** So we're going to do an await page.locator.
>
> **[4:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=261)** It's going to be a ID of designUpload.
>
> **[4:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=267)** And then here we're going to call that setInputFiles.
>
> **[4:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=273)** And thankfully, I've actually already created a file for us, image-file.png.
>
> **[4:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=285)** So this file currently lives in our lib folder, uploads.
>
> **[4:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=291)** And we've got this image file that's just a white image that has some text on it for our testing purposes.
>
> **[4:59](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=299)** So this is the set input file that we've got set up.
>
> **[5:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=305)** And the next thing we need to do is go ahead and fill out the rest of our test.
>
> **[5:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=311)** So await page.locator, I think we have instructions, it says special instructions.
>
> **[5:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=320)** So it has an ID of instructions.
>
> **[5:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=323)** We're going to set the quantity.
>
> **[5:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=325)** This is an input with an ID of quantity.
>
> **[5:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=330)** And then we've got a Place Order button.
>
> **[5:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=334)** Looks like it's a type submit, right?
>
> **[5:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=336)** So we should be able to build this out with that information.
>
> **[5:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=341)** All right, so we'll start with instructions.
>
> **[5:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=344)** We're going to say .fill, we'll just say we'll make sure the bagel is toasted.
>
> **[5:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=353)** We like toasted bagels, right?
>
> **[5:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=356)** And then we also want to await page.getByRole, button.
>
> **[6:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=364)** Because quantity one is already there, we actually don't have to interact with that.
>
> **[6:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=369)** So we're going to go ahead and skip that.
>
> **[6:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=371)** And we'll go ahead and just call this button, .click.
>
> **[6:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=378)** And let's just go back to this button one more time.
>
> **[6:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=382)** So we're going to keep that one.
>
> **[6:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=384)** When we click the button, we do have a dialog that pops up, so we're going to need to handle that in our code, else the Playwright test is going to get stuck.
>
> **[6:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=395)** It's not going to know what to do.
>
> **[6:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=398)** So we need to handle that before we actually click on the link.
>
> **[6:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=403)** So we're actually going to handle it on this line of code.
>
> **[6:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=406)** And we're going to do a page.once, dialog, async, dialog, got our hash rocket, and our open bracket.
>
> **[7:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=421)** We're going to expect the dialog, very similar to what we did in the other test, so I expect the message to contain.
>
> **[7:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=433)** Let's see what it actually is. File.
>
> **[7:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=437)** And then we have a different file name, but it's basically this text here.
>
> **[7:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=442)** So we're going to say, expect this file to contain file.
>
> **[7:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=446)** We're going to call it, copy this over here.
>
> **[7:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=450)** File image-file.png uploaded successfully.
>
> **[7:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=455)** One thing to note is, because I'm using double quotes in a string, I actually opted for single quotes on the outside.
>
> **[7:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=465)** So if these were not double quotes, I would be using double quotes out here, but that's why there's single quotes on the outside of the string, all right?
>
> **[7:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=475)** And then the last thing we have to do as a part of this page once is we want to do the await dialog.dismiss.
>
> **[8:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=483)** So this is what tells the dialog to go away, so we can actually continue on with our test.
>
> **[8:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=490)** So let's go ahead and just run this and see how things go.
>
> **[8:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=495)** So this is our test that's running.
>
> **[8:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=498)** So it looks like maybe our special instructions didn't get added in here.
>
> **[8:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=502)** So let's go rerun this one more time.
>
> **[8:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=506)** So locator instructions.
>
> **[8:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=509)** Oh, I forgot to put my class out here, all right.
>
> **[8:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=512)** That will make it more happy.
>
> **[8:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=515)** So we're going to stop this test and we're going to rerun it.
>
> **[8:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=519)** All right, so I saw the dialog.
>
> **[8:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=521)** It looks like we clicked the dialog.
>
> **[8:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=523)** So I think we are in a good spot.
>
> **[8:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=525)** We have our Download Receipt down here that we can start working with.
>
> **[8:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=529)** So you know, in this scenario, we have successfully chosen a file, uploaded it, and we actually even asserted, 'cause this passed, that this image was actually in that alert dialog.
>
> **[9:02](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=542)** So I feel pretty confident. We're good there.
>
> **[9:05](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=545)** Let's move on to the download section.
>
> **[9:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=548)** So I'm actually going to go back to this screen with our inspector.
>
> **[9:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=552)** I'm going to click this Download Receipt.
>
> **[9:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=554)** So this is a button that just has some text.
>
> **[9:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=558)** It looks like that is a onClick that actually happens.
>
> **[9:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=562)** So I think we're just going to stick with the text name here using the getByRole for the button.
>
> **[9:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=570)** So let's go ahead and say await page.getByRole.
>
> **[9:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=574)** We're going to pass in button, and then we will pass in the name, which is Download Receipt.
>
> **[9:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=582)** And we know that the action we want to do here is .click, all right?
>
> **[9:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=590)** All right, so now we need to figure out, you know, how to actually download this file.
>
> **[9:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=596)** What do the docs look like for that?
>
> **[9:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=598)** So let's go back here, and we see the first thing we need to do is create a download promise.
>
> **[10:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=604)** And then it looks like our download is the await the promise as well.
>
> **[10:08](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=608)** So this the simplest, we're going to do a little more, 'cause I actually want to maybe do an assertion or at least read the file contents to our console for our test.
>
> **[10:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=619)** So I'm just going to copy and paste this over here.
>
> **[10:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=622)** So it needs to be, before we click the Download button, we have our promise.
>
> **[10:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=629)** I'm going to go ahead and copy and paste this, await the promise after we click the button.
>
> **[10:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=634)** And then at this point we should have a download variable that we can do other things with.
>
> **[10:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=641)** So I'm going to start with setting the file name.
>
> **[10:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=645)** And this is some JavaScript that basically says set the dirname.
>
> **[10:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=652)** We're going to use our download.
>
> **[10:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=655)** And all right, there's a suggested file name on here that we're going to use, and we're just going to leave that there.
>
> **[11:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=663)** And we're also going to say await download.saveAs.
>
> **[11:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=669)** And then we're going to pass in dirname plus the download suggested file name.
>
> **[11:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=678)** So what this is going to do is this is going to save the file to the machine, okay?
>
> **[11:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=685)** And the next thing we'll want to do is actually go and read that file.
>
> **[11:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=690)** So that's going to be a different set.
>
> **[11:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=692)** And for this we're actually going to have to use fs, which is something baked into JavaScript, fileContent equals fs.
>
> **[11:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=702)** So let's go ahead and just import that at the top of our file.
>
> **[11:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=706)** What that's going to look like is import * as fs from fs.
>
> **[11:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=713)** There's a ton of examples on what this is and how to use it.
>
> **[11:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=717)** So feel free to go look up the documentation online on that.
>
> **[12:03](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=723)** And here we're going to do a readFileSync.
>
> **[12:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=727)** We're going to pass in the file name, we're going to make sure that the UTF8 is set.
>
> **[12:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=734)** From here we're going to just do a console.log.
>
> **[12:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=738)** We're going to say content. So this is the file content.
>
> **[12:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=742)** We're just going to pass in fileContent.
>
> **[12:27](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=747)** So this is like the read file, and we should be able to run this test and get the console log down here.
>
> **[12:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=756)** So I'm just going to run it from here, playwright test, and tests/bagel-shop.
>
> **[12:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=765)** And we're going to just run the order spec, so you can see, you know, we are now running the file.
>
> **[12:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=775)** We upload a file, we download a file, and then we also just spit out, you know, the details, the contents of that file, all using Playwright.
>
> **[13:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=786)** Typically I would break these up.
>
> **[13:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=789)** I would even abstract away some of these methods, but for this example, we're just keeping it all in one file, 'cause it all is one big flow.
>
> **[13:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=799)** Also, ideally, when you are working with downloads, you do want to validate or verify that they're not just downloaded, but the data in those files is correct.
>
> **[13:31](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=811)** So using this approach, you're able to do that.
>
> **[13:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=815)** Last thing that we do want to do is go ahead and clean up the downloaded file.
>
> **[13:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=821)** To do that, you can type in fs.unlinkSync, and then pass in the file name.
>
> **[13:49](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=829)** And that should just remove the file.
>
> **[13:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=831)** So it's not going to get like committed to our repository, 'cause right now you can see this is currently listed here, but as soon as we run this again with that last line of code, let me make sure this is saved, this receipt should disappear, all right?
>
> **[14:11](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=851)** So it is disappeared. It's no longer there.
>
> **[14:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-uploads-and-downloads-in-playwright?u=76281980&t=854)** At this point we're going to commit our code up and move on to the next lesson.

> [!info]- Semantic Content
>
> **Code Keywords:** let (18), await (9), pass (7), function (2), async (2)
> **Code Identifiers:** setinputfiles (3), getbyrole (3), designupload (2), filecontent (2), onclick (1)
> **CLI Commands:** make (4), npm (1), find (1)
> **Documentation:** spec (2), the docs (1), the documentation (1)
> **Definitions:** is an  (2), is a  (2)
> **UI Navigation:** click on (3)
> **Env Vars:** url (1), utf8 (1)
> **Cross-References:** in the last (1), go back to (1)

#### Working with challenging elements in Playwright
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=0)** - [Instructor] When automating web applications with poor accessibility, you'll find yourself having to get creative in order to find certain elements you want to interact with.
>
> **[0:10](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=10)** In this example, we're going to look at the menu page, which includes a table with three rows.
>
> **[0:18](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=18)** So, on our test site, let's go ahead and click Menu.
>
> **[0:23](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=23)** We'll walk through three different ways that you can build locators in order to find a specific add-to-cart button, which matches a specific bagel type.
>
> **[0:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=34)** As we inspect these different rows, you can notice there's not a lot of things that are unique in this table.
>
> **[0:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=43)** So, let's go ahead and write some code.
>
> **[0:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=47)** Our specific flow will be to test the add-to-cart functionality for the sesame bagel type.
>
> **[0:57](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=57)** When I click Add to Cart, I'm going to validate that we're going to add sesame bagel to cart, and we'll validate this message as well.
>
> **[1:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=69)** All right, so let's get into the code.
>
> **[1:12](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=72)** We're going to create a new test in the bagel shop directory.
>
> **[1:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=77)** The new file is going to be called menu.spec.ts, and we're going to go ahead and create our imports.
>
> **[1:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=93)** And for this scenario, I'm going to go ahead and start with a describe block.
>
> **[1:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=101)** And the describe is going to be "Menu Page".
>
> **[1:45](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=105)** And hopefully, you'll see why we're breaking this up here a little later.
>
> **[1:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=111)** And then within this, we want to create a test, and the test will be "Add Sesame Bagel To Cart," all right?
>
> **[2:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=127)** And we'll pass this async, we'll pass out our page.
>
> **[2:14](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=134)** And now, we have our test, we're ready to go.
>
> **[2:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=137)** So we're going to do an await page.goto, localhost, and we're going to pass in 5173, and I believe this is going to be menu.html.
>
> **[2:29](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=149)** Let's just validate that, menu.html, all right?
>
> **[2:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=155)** So that is the beginning of our tests.
>
> **[2:38](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=158)** And the first thing we want to do is figure out how we're going to work with each of these elements.
>
> **[2:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=164)** So, with this being a test, maybe actually we want to work with Plain or Everything or in different tests, but specifically, with Sesame, let's build this test in a way where we change out the bagel types and still have some assertions.
>
> **[3:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=184)** This is why we created the describe block.
>
> **[3:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=187)** And the way we would implement this would be creating a variable called bagelType.
>
> **[3:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=195)** We'll set that to "Sesame," which I spelled it wrong here.
>
> **[3:22](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=202)** And now that this variable is set, we can actually just use this variable in all of our different assertions and test title.
>
> **[3:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=212)** So, you could make this run random every time if this bagelType was an array, we could then choose a random one from the array to run anytime this ran.
>
> **[3:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=222)** So, the way this would work, I'm going to use interpolation, so I'm changing my string here to these back ticks.
>
> **[3:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=230)** That's the back tick above the tab key.
>
> **[3:53](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=233)** I'm going to replace sesame with ${}, and we're going to just pop in bagelType.
>
> **[4:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=240)** So now, sesame should show up here when this code runs.
>
> **[4:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=246)** All right, so finding and interacting with the specific menu item can be difficult.
>
> **[4:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=255)** The easiest approach for me that I've found is trying to start with what is the highest level thing I can work with and then kind of work my way down.
>
> **[4:25](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=265)** So I do see, we do have a ID of menu table, which is a table element that we can work with.
>
> **[4:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=273)** And we've got, it looks like this is a header.
>
> **[4:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=276)** And then underneath that, we basically have the table body with all the details.
>
> **[4:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=282)** So, let's start by just creating a variable for this table ID.
>
> **[4:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=287)** And then from there, we can see if we can figure out how to actually get a table row, maybe a table row by name, and that will help us further narrow things down so we can actually click this button.
>
> **[5:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=301)** So, let's go ahead and define const table.
>
> **[5:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=307)** We're going to set the equal to page.locator, and this was a ID, all right?
>
> **[5:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=315)** And from there, let's go ahead and set a variable for bagelRow, and we're going to set that equal to table.locator... Well, is it going to be row, how are we going to get to it?
>
> **[5:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=333)** Let's see. So, this is going to be the row we're working with.
>
> **[5:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=340)** I think we could say table row that has a name of sesame.
>
> **[5:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=348)** I think that should work for us.
>
> **[5:51](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=351)** So we should be able to use a getByRole locator, so getByRole.
>
> **[6:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=360)** We're going to pass in, there should be a row in this list.
>
> **[6:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=366)** So a row, so that is an HTML element, and then we're going to pass in that has a name.
>
> **[6:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=375)** So to do that, we will pass in a name here.
>
> **[6:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=379)** And the name here will actually be the bagelType, because we've already set Sesame up here, so I should just be able to bring this in here.
>
> **[6:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=390)** And dynamically, this bagel role will be set based on whatever the bagelType is passed then up here.
>
> **[6:37](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=397)** All right, so now we have access to a bagel row that I believe we can work with.
>
> **[6:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=402)** The next thing we would need to do is find that add-to-cart button within that row.
>
> **[6:48](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=408)** So, let's do a const addToCartButton.
>
> **[6:54](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=414)** We're going to equal that to bagelRow.
>
> **[6:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=418)** And then, in this scenario, we should be able to use that getByRole and set that as button.
>
> **[7:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=426)** And because there's only one button in this row, it should find this button as the correct button every time.
>
> **[7:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=433)** So, getByRole, we're going to just pass in button, we don't have to give it anything else.
>
> **[7:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=440)** And we want to .click, well, we could .click this, but since we've already created some variables, we could just say await addToCartButton.click.
>
> **[7:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=456)** So, we would have to add an await if we're going to interact with it.
>
> **[7:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=459)** So this is kind of like a clean way to work with this.
>
> **[7:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=463)** Now, there is one other thing we need to remember.
>
> **[7:46](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=466)** So back here, when we click on this cart, we've actually got to work with a couple different dialogues.
>
> **[7:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=472)** So, rather than write all that code, I'm just going to go ahead and just copy and paste the dialogue handling of that, and this is what that's going to look like.
>
> **[8:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=486)** So, this is the dialogue handling.
>
> **[8:09](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=489)** Currently in this scenario, we're actually setting the dialogue count to zero, and then we do some additional logic in here.
>
> **[8:16](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=496)** And we're also passing in the bagelType into our assertions up here.
>
> **[8:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=504)** So, at this point, let's go ahead and run this test, and let's actually see if the assertions passed.
>
> **[8:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=512)** They should if we did everything right.
>
> **[8:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=516)** All right, so we click the sesame seed button, which should have done those different assertions.
>
> **[8:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=522)** We can also see up here that we're also consoling log the different dialogue, so we can see them here.
>
> **[8:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=530)** And we also see our test name is Add Sesame Bagel To Cart.
>
> **[8:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=535)** Now what's really nice with this test design is let's say I don't want to test for Sesame, but I want to task for the Everything bagel.
>
> **[9:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=544)** So, if I come up here and pop in everything under the bagelType and run this, it should dynamically update and click the Everything button the way we've designed our test.
>
> **[9:19](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=559)** All right, I want to set it back to Sesame, and let's walk through two other ways to work with difficult locators.
>
> **[9:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=566)** So, we're going to comment this out, and we're going to work on the next one.
>
> **[9:32](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=572)** So, this is going to be a pretty clean, one-click example on basically chaining different locators.
>
> **[9:40](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=580)** So, this is a very verbose way to chain locators.
>
> **[9:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=584)** This will be kind of like your one liner, which is maybe a little harder to maintain, but could be useful, and we're going to do that by using the getByRole functionality.
>
> **[9:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=598)** We're going to pass in row and here for the name, we are going to just do a new RegExp, and here, we're actually going to pass in the RegExp, but also do some interpolation, passing in the bagelType.
>
> **[10:20](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=620)** And from there, just chaining, kind of going down the chain, we're going to do a getByRole button, and then from here, we're going to do a click.
>
> **[10:34](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=634)** So when we save that, it does a nice format, but again, this is doing the same thing that this code is doing.
>
> **[10:42](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=642)** It just may be a little harder to maintain, but if you're abstracting this away into a page object, maybe that's a little easier to work with.
>
> **[10:52](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=652)** So, let's run this, make sure that this passes, and then we will move on to the next test.
>
> **[10:58](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=658)** All right, so everything is good there.
>
> **[11:01](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=661)** And a third way to tackle this similar problem would be by finding a cell and then finding the parent and then finding the button.
>
> **[11:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=675)** So, walking through what that would look like, that's going to be await page.getByRole.
>
> **[11:24](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=684)** So, instead of finding the row, we're going to actually just find the cell, and we're just going to pass in the same name up here.
>
> **[11:36](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=696)** That has the bagelType, and then from here, we're going to go find the locator.
>
> **[11:44](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=704)** And this locator("..") is actually XPath, and it's basically saying, "I want you, from the cell," so let's go to our example.
>
> **[11:56](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=716)** So, as we're finding the specific cell, the sesame cell, this locator with the ("..") is XPath, which means go to the parent element, and that is the element that we are using then.
>
> **[12:13](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=733)** And after we've gone up one, we're actually going to go back down one to go find this button.
>
> **[12:21](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=741)** So the syntax for this would be find the cell, go up to the parent element and then getByRole button.
>
> **[12:33](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=753)** And at this point, we can do a .click, and everything should be happy.
>
> **[12:41](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=761)** Let's run this test.
>
> **[12:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=763)** All right, so everything passed, the button was clicked.
>
> **[12:47](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/working-with-challenging-elements-in-playwright?u=76281980&t=767)** Those are three different ways that you can work with difficult elements, especially within a table, but this is applicable to any kind of UI where you have to get creative.

> [!info]- Semantic Content
>
> **Code Keywords:** let (17), pass (10), this, (4), await (4), type. (2)
> **Code Identifiers:** bageltype (9), getbyrole (8), bagelrow (2), addtocartbutton (2)
> **CLI Commands:** find (9), make (2)
> **Definitions:** is a  (3), is an  (1)
> **File Paths:** menu.html (2), menu.spec.ts (1)
> **UI Navigation:** go to (2), click on (1)
> **Analogies:** kind of like (2)
> **Env Vars:** html (1)


### 7. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=0)** - [Instructor] Congratulations for completing this journey through some of Playwright's advanced features.
>
> **[0:06](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=6)** As you continue your learning journey, I want to encourage you to find ways to improve the repositories you touch, always leaving them better off than the way you found them.
>
> **[0:17](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=17)** This may include implementing the right level of abstractions, introducing new ways to manage test data, or optimizing the Playwright configuration file for faster feedback loops.
>
> **[0:30](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=30)** Using the provided resource guide in this repo, there are links to the code and documentation for all the lessons we've learned together.
>
> **[0:39](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=39)** I also want to encourage you to continue to rely on the official Playwright docs, as this is the best source for examples and best practices.
>
> **[0:50](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=50)** You should also keep an eye on the Playwright release notes.
>
> **[0:55](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=55)** With new releases and features being released monthly, it's easy to miss something that may make your life way easier.
>
> **[1:04](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=64)** Be sure to check out the official Playwright YouTube channel.
>
> **[1:07](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=67)** Subscribe, click that Bell for notifications and be on the lookout for Playwright live events.
>
> **[1:15](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=75)** Join the playwright Discord server, connect with others, ask questions, find articles and video content, and eventually help others with their problems.
>
> **[1:26](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=86)** Check out the Playwright GitHub repository.
>
> **[1:28](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=88)** There, you can subscribe to releases, report bugs, and even request features.
>
> **[1:35](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=95)** You can also subscribe to my newsletter at [playwrightsolutions.com](https://playwrightsolutions.com), and please, connect with me on LinkedIn.
>
> **[1:43](https://www.linkedin.com/learning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios/next-steps?u=76281980&t=103)** Stay curious, and never stop learning.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2), make (1)
> **Code Keywords:** continue (2)
> **Tools:** discord (1), github (1)
> **URLs:** [playwrightsolutions.com](https://playwrightsolutions.com) (1)
> **Speakers:** - [instructor] (1)


## Instructor

- [[Butch Mayhew]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/playwright-essential-training-abstractions-fixtures-and-complex-scenarios-4278224)

## Skills Covered

- Test Automation

## Path Context

### In [[Master Test Automation with Playwright]]
← [[Learning Playwright]] | **2 of 4** | [[Playwright- Design Patterns]] →

## Appears In

- [[Master Test Automation with Playwright]]

## Related Courses

_Courses sharing skills:_

- [[Postman Essential Training]] — Test Automation
- [[Learning Selenium- Structure, Scale, Run, and Optimize Automated Tests]] — Test Automation
- [[Advanced Playwright Techniques- Optimizing Speed, Stability, and Cloud Testing]] — Test Automation
- [[Playwright- Design Patterns]] — Test Automation
- [[Python Automation and Testing]] — Test Automation

---

[↑ Back to top](#)