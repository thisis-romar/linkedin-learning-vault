---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: level-up-rust
url: "https://www.linkedin.com/learning/level-up-rust"
duration_minutes: 159
duration: 2h 39m
level: Intermediate
updated: 2/23/2023
learners: 2424
skills:
  - Rust (Programming Language)
exercise_files: true
github: "https://github.com/LinkedInLearning/level-up-rust-3041143/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/C560DAQEOULbtwwYf8Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1677009134347?e=2147483647&amp;v=beta&amp;t=fBaGAv3TxwJps7ntffBoWITXx-bZIzbWCievVafHg_g"
linkedin_topic: Data Science
learning_paths:
  - '[[Develop Your Rust Skills for Data Engineering]]'
prev_courses:
  - '[[Rust for Data Engineering]]'
next_courses:
  - '[[End-to-End Data Engineering Project]]'
path_nav: '[{"path":"Develop Your Rust Skills for Data Engineering","position":5,"total":6,"prev":"Rust for Data Engineering","next":"End-to-End Data Engineering Project"}]'
path_count: 1
tags:
  - course
  - topic/data-science
  - topic/software-development
  - skill/rust-programming-language
status: not-started
created: 2026-04-21
---

![Level Up: Rust](https://media.licdn.com/dms/image/v2/C560DAQEOULbtwwYf8Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1677009134347?e=2147483647&amp;v=beta&amp;t=fBaGAv3TxwJps7ntffBoWITXx-bZIzbWCievVafHg_g)

# Level Up: Rust

> It’ll take time—and a whole lot of practice—to improve your Rust coding skills. It’s important to push yourself with new challenges, which is exactly what this course is for. Join author and instructor Tim McNamara as he takes you through a series of coding challenges, testing your ability to perform certain functions so you can reach the next level with Rust. Acquire new Rust skills with exercise

> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust) | 2h 39m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Instructor

- [[Tim McNamara]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/level-up-rust-3041143/codespaces)

## Skills Covered

- Rust (Programming Language)

## Table of Contents

### Introduction

#### Put Rust into practice
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=1)** (upbeat electronic music)
>
> **[0:07](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=7)** - [Tim] It seems that everyone in the technology industry is talking about the Rust programming language.
>
> **[0:12](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=12)** All of the major tech companies are deploying Rust or seem to be; Google, Microsoft, Facebook, AWS.
>
> **[0:19](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=19)** Learning Rust will enable you to reap the benefits of reliability and speed.
>
> **[0:23](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=23)** Your programs will use less memory, and they'll be free of many of the severe security vulnerabilities that have been a plague for the industry for decades.
>
> **[0:32](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=32)** Now, one of the most effective ways to learn is through deliberate practice and by deliberate practice, I mean not just that we are practicing regularly but also that as we develop our skills, we move to progressively more and more difficult challenges and that's what this course provides.
>
> **[0:54](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=54)** I'm Tim McNamara, the author of one of the Rust community's most popular books.
>
> **[0:58](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=58)** I'm passionate about helping others to learn more about this wonderful programming language with its inclusive and welcoming community ethos.
>
> **[1:06](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=66)** The challenges in this course are designed to allow you to assess your current skill level and to push you to achieve your goals.
>
> **[1:15](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=75)** Every challenge includes a detailed answer along with a thorough explanation; that way you're able to check your own knowledge as well as gain new skills as you progress your way through the course.
>
> **[1:28](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=88)** Now, are you up for the challenge?
>
> **[1:30](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=90)** Make your way through my LinkedIn learning course and we'll see.

> [!info]- Semantic Content
>
> **CLI Commands:** aws (1), make (1)
> **Env Vars:** aws (1)
> **Speakers:** - [tim] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### What you need to get started
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=0)** - [Instructor] We have three steps to go through.
>
> **[0:02](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=2)** The first is to install the Rust programming language.
>
> **[0:06](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=6)** Secondly, we'll be installing VS Studio Code, and thirdly the rust-analyzer extension for the editor.
>
> **[0:17](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=17)** Feel free to skip this video if you've already got your setup exactly as you would like it.
>
> **[0:26](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=26)** You can see here that I have a web browser in front of me.
>
> **[0:30](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=30)** At the rustup.rs webpage that automatically detects which operating system you are and provides instructions for installing the language.
>
> **[0:39](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=39)** If the site hasn't correctly identified your operating system, click on the display or supported installers link and you'll have further instructions.
>
> **[0:48](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=48)** If you need even more information you can click down in the bottom where there is a very detailed guide on all of the different operating systems and CPU platforms available to you.
>
> **[1:03](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=63)** The next website that we'll go to is code.[visualstudio.com](https://visualstudio.com) where the install instructions are again right at the front.
>
> **[1:13](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=73)** Clicking on the appropriate link or other platforms depending on where you are.
>
> **[1:18](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=78)** Should be enough for you to install the editor.
>
> **[1:21](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=81)** If I copy the command by clicking the copy button then open VS Code, hit control P and enter then push control V and push enter.
>
> **[1:37](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=97)** The editor will automatically install the extension and that's all you need to be productive with the rest of the course.
>
> **[1:48](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=108)** I hope you enjoy the challenges.

> [!info]- Semantic Content
>
> **Prerequisites:** install (4), setup (1)
> **UI Navigation:** click on (1), go to (1)
> **File Paths:** rustup.rs (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Env Vars:** cpu (1)
> **Tools:** vs code (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Using GitHub Codespaces with this course
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Ray] This is Ray Villalobos, senior staff instructor at LinkedIn Learning, and I'm going to show you how to work with LinkedIn Learning Courses using GitHub Codespaces.
>
> **[0:09](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=9)** Codespaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:14](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=14)** It allows for real world hands-on practice that mirrors software development in the workplace.
>
> **[0:19](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=19)** This course was created using GitHub Codespaces.
>
> **[0:22](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=22)** Using Codespaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:29](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=29)** One click, and you're ready to go.
>
> **[0:32](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=32)** To practice along with the course, you can create a codespace directly from the course overview page.
>
> **[0:38](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=38)** First, click Open next to GitHub Codespaces.
>
> **[0:42](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=42)** If you're already logged in, you'll be directed to a Getting Started with GitHub Codespaces page.
>
> **[0:48](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=48)** If you're not logged in, you'll be prompted to log in, or create a free GitHub account first.
>
> **[0:53](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=53)** From this page, click on Create codespace on main.
>
> **[0:58](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=58)** The first time you open up a codespace, it might take a few minutes to create the virtual machine.
>
> **[1:04](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=64)** Once it's done, you'll enter the code editor environment.
>
> **[1:08](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=68)** If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers.
>
> **[1:15](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=75)** Your course can have one or more extensions pre-installed based on the course you're taking.
>
> **[1:20](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=80)** Those can be found in the extensions panel.
>
> **[1:25](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=85)** Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[1:31](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=91)** If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=97)** You can always get the codespace back for this repo right here.
>
> **[1:46](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=106)** Notice that it even remembered that I had opened the extensions panel.
>
> **[1:51](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=111)** An alternate way to create a codespace is directly from one of our courses' GitHub repositories.
>
> **[1:57](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=117)** From here, click Code, and then Create codespace on main.
>
> **[2:02](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=122)** You can also restart a previous codespace from this location.
>
> **[2:06](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=126)** GitHub Codespaces is compatible on devices with smaller screen sizes, like mobile phones or tablets, but it is optimized for larger screens, so we recommend that you practice along with this course on a laptop or desktop computer.
>
> **[2:22](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=142)** The sample course I'm looking at is what is known as a flat branch repository.
>
> **[2:27](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=147)** You can tell because there's a single branch when you click on the branch icon on the status bar.
>
> **[2:32](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=152)** You can also tell because there are different folders for each of the videos in the course.
>
> **[2:38](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=158)** This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks.
>
> **[2:45](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=165)** If you go to the branch icon on the status bar, you can see that there's more than one branch.
>
> **[2:50](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=170)** You can switch to the different branches using this menu.
>
> **[2:54](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=174)** The branches are named with the chapter and the video number you're watching.
>
> **[2:58](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=178)** If you see a B at the end of the branch, that's how the code looked at the beginning.
>
> **[3:02](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=182)** If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=186)** Let's switch to how the code looked on chapter two and the third video.
>
> **[3:12](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=192)** I'll choose the beginning branch.
>
> **[3:15](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=195)** As you work through a course, you might make some changes on a branch.
>
> **[3:19](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=199)** I'm going to make a minor edit on the index.html file right here.
>
> **[3:27](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=207)** I'm going to go ahead and save that, and you can see that I've modified this file, because there's an M right here, and the branch name now has an asterisk on it.
>
> **[3:37](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=217)** If I try to switch to another branch that causes major changes, like say, 07_03e, I may see a dialog box like this.
>
> **[3:49](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=229)** If you don't care about saving your changes, you can simply hit the Force Checkout button.
>
> **[3:54](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=234)** It will let you switch to that branch.
>
> **[3:57](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=237)** You can then choose to discard the changes on this file.
>
> **[4:01](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=241)** Your instructor will let you know what the folder structure is for your course.
>
> **[4:06](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=246)** Forking let's you create your own copy of the repository on your account, so that you can keep any changes that you've made, even if you've deleted the codespace.
>
> **[4:16](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=256)** To create your own fork, you can click on the Fork button on the repository.
>
> **[4:23](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=263)** I'm going to hit Create fork.
>
> **[4:27](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=267)** I now have my own copy of this repository, and if I want to, I can start a new codespace on that fork.
>
> **[4:39](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=279)** This forked version is almost exactly like the original repository, but it will let you push your own changes.
>
> **[4:46](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=286)** Notice that the URL of the repository is slightly different.
>
> **[4:50](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=290)** Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it.
>
> **[5:03](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=303)** You'll note that there is an M right here, as well as an asterisk on this branch.
>
> **[5:08](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=308)** In the source control panel, you can also see a one for the change that we just made.
>
> **[5:14](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=314)** Let's go ahead and try to commit this change.
>
> **[5:20](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=320)** I'm going to hit the commit button, and I'll ask it to go ahead and stage the changes.
>
> **[5:28](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=328)** And then I'm going to hit this button here.
>
> **[5:32](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=332)** I'll hit OK.
>
> **[5:34](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=334)** You can also let it go ahead and run git fetch.
>
> **[5:37](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=337)** That way, it'll automatically sync with your forked repo.
>
> **[5:41](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=341)** Now, that change will be stored in your own version of this repository.
>
> **[5:46](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=346)** Don't worry if you forget to fork a repo and then try to push changes.
>
> **[5:50](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=350)** Codespaces will also ask you if you want to create a fork automatically.
>
> **[5:55](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=355)** Look for additional course-specific tips from the instructor.
>
> **[5:58](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=358)** Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (9), switch (4), this. (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)


### 1. Rust Coding Challenges

#### Calculate the median
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=0)** (retro music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=3)** - [Instructor] Hey, how are we going?
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=4)** Welcome to Russ Code Challenges, challenge one.
>
> **[0:07](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=7)** When I start with a programming language, I really like to start with something that I understand and so our challenge today is going to be to calculate the median.
>
> **[0:20](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=20)** That is we are going to write a function that calculates the median of a list of numbers.
>
> **[0:25](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=25)** More formally the type will be of VEC F32, a vector of 32 bit floating point numbers.
>
> **[0:34](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=34)** Very quickly, we'll go through three examples to explain exactly what we intend.
>
> **[0:39](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=39)** Example one is where our input has an odd number of elements.
>
> **[0:44](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=44)** Let's assume that we have an variable list that is a vector of three numbers and we want to calculate its median.
>
> **[0:53](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=53)** To do so, we sort the list, in this case it's already sorted, and take its middle value.
>
> **[0:58](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=58)** It's four and then so our result is four.
>
> **[1:03](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=63)** The word sum in the return value is significant.
>
> **[1:07](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=67)** This will enable us to account for the case of an empty input list.
>
> **[1:14](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=74)** Our example two is similar, but it's when we have an even number of elements.
>
> **[1:18](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=78)** In this case, our vector has four elements in it.
>
> **[1:23](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=83)** We first sort them, then take the average of the middle two values.
>
> **[1:28](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=88)** That's four, and so our return value is sum of four.
>
> **[1:34](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=94)** The empty case is a little bit simpler.
>
> **[1:37](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=97)** We have our empty input and then we return none.
>
> **[1:42](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=102)** Pause the video now and try and implement median.
>
> **[1:45](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=105)** When you come back, you'll be able to see how I've implemented it.
>
> **[1:53](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=113)** Hey everybody, welcome to challenge one or the answers to challenge one.
>
> **[2:00](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=120)** Our task is to get these tests to pass by implementing a median function.
>
> **[2:07](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=127)** So to run them all, I can click cargo test or I'll type it in and I have four test failures.
>
> **[2:16](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=136)** I can get the first one to pass quite simply by checking whether or not if A empty, then I can return none,
>
> **[2:31](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=151)** otherwise and I'll just return a placeholder for now.
>
> **[2:33](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=153)** I can return zero.
>
> **[2:38](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=158)** Ah-ha. One of them has passed.
>
> **[2:41](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=161)** Okay, so the next step is to sort my list.
>
> **[2:46](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=166)** So if I do this just with the sort method, I'll encounter a problem.
>
> **[2:53](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=173)** I'll try and compile my tests and I get this error message saying that the trait odd is not implemented for F32.
>
> **[3:01](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=181)** What this means, well, odd is short for ordinal and this indicates that Rust doesn't know how to compare all values of F32, which is a floating point value, because some of them, such as not a number, cannot be compared to any other.
>
> **[3:25](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=205)** So instead we have to provide our custom sort function and we'll do that by using what's a little bit sneaky
>
> **[3:39](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=219)** with called a partial comparison.
>
> **[3:43](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=223)** And if we have a not a number in our input,
>
> **[3:53](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=233)** we're just going to crash, which isn't extremely satisfying, but it will pass the tests or at least will attempt to.
>
> **[4:04](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=244)** So now we have a different problem.
>
> **[4:07](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=247)** We cannot borrow as mutable.
>
> **[4:10](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=250)** A more advanced question is whether or not you can create a sorting method that puts not a number, say either at the end or at the start, but that's beyond this exercise.
>
> **[4:23](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=263)** So we've got a sorted input now and then our next job is to find the middle value.
>
> **[4:30](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=270)** So to do so, I'll get the number of elements so that I can divide by two.
>
> **[4:41](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=281)** And that's N number divided way two.
>
> **[4:45](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=285)** And once I've done so, I also want to check whether or not A is even and I do that by saying number of elements, modular two equals zero.
>
> **[5:06](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=306)** So now I can say if A is even,
>
> **[5:15](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=315)** then I need to take the mean of the two closest values.
>
> **[5:21](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=321)** So this is A at position middle, plus A middle, minus one actually because we need two values and that's how the indices work.
>
> **[5:34](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=334)** And then I need to divide those by two.
>
> **[5:36](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=336)** So this here is the mean.
>
> **[5:42](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=342)** Mean or average
>
> **[5:50](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=350)** of the middle two elements.
>
> **[5:55](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=355)** And it's complaining because there isn't something much to do, I think?
>
> **[6:07](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=367)** Oh, it's saying that both sides are giving the wrong input.
>
> **[6:15](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=375)** This will, what it wants me to do is to provide a semicolon at the end so that both expressions have, or both sides of the F statement return the same value.
>
> **[6:27](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=387)** But I can cheat a little bit by just pushing this second sum into the else block.
>
> **[6:38](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=398)** Now we've got one more test passing, so the job left is to, oops.
>
> **[6:49](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=409)** Sorry editors, if you could just cut this out.
>
> **[6:53](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=413)** Just need to get back to the window.
>
> **[7:01](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=421)** Sorry team, this is embarrassing.
>
> **[7:03](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=423)** I'll just pause.
>
> **[7:04](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=424)** Our task now is to take the middle value of an odd
>
> **[7:13](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=433)** of A when A has an odd number of elements and so there should be just the middle that we've already created.
>
> **[7:25](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=445)** So I'll say that, cargo test, run those tests again and now we get four.
>
> **[7:30](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=450)** Okay, well done.
>
> **[7:33](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=453)** To be slightly more rust like, potentially.
>
> **[7:46](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=466)** Depending on your style, we can actually return from the if block or in rust we would call this an if expression, which is something different than you might have seen from other programming languages.
>
> **[8:03](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=483)** Rust will enable you to return values from F also.
>
> **[8:07](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=487)** So that's just an extra tip.
>
> **[8:10](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=490)** I hope you've enjoyed the video and I'm looking forward to seeing you on the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), pass (3), let (1), case, (1)
> **Env Vars:** f32 (3), vec (1)
> **Definitions:** is a  (4)
> **CLI Commands:** cargo (2), find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (retro music) (1)

#### Find unique items
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=0)** (techno gaming music)
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=4)** - [Instructor] Hi, welcome to challenge two.
>
> **[0:06](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=6)** If you've ever worked with data before, you'll know that data cleansing is a very important step.
>
> **[0:13](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=13)** What we're going to be doing in this challenge is finding unique items, also known as deduplication.
>
> **[0:20](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=20)** Our challenge will be to write a function that filters duplicates from a list.
>
> **[0:25](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=25)** More formally, that list will be off type vec<i32> That is a vector of 32-bit integers.
>
> **[0:33](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=33)** The requirements for this challenge are to implement the unique function.
>
> **[0:37](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=37)** It accepts a vector as input and returns another vector that is clear of duplicates.
>
> **[0:46](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=46)** Just so that we are clear, let's go through two examples.
>
> **[0:50](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=50)** If I had a list with the input one, four, and five, I would just receive the exact same output.
>
> **[0:57](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=57)** On the other hand, if I had an input list that contains duplicates, those would be filtered out by my unique function.
>
> **[1:06](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=66)** Here's two pieces of extra credit.
>
> **[1:09](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=69)** One, we can use generics.
>
> **[1:11](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=71)** Instead of accepting a vector of <i32>, change your function to accept a vec<T> where T is a type that implements the ord trade.
>
> **[1:24](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=84)** If you'd like to crank the difficulty dial even further, try to retain the order in which the elements were first seen.
>
> **[1:33](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=93)** You can pause the video now and implement unique.
>
> **[1:37](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=97)** In the second part of this video, you can see how I implemented it.
>
> **[1:42](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=102)** (techno gaming music) Hey, everyone.
>
> **[1:46](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=106)** Welcome to the answer section of the second challenge in Level Up Rust.
>
> **[1:53](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=113)** Our job is to implement unique.
>
> **[1:55](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=115)** And to do so, we need to go into main.rs.
>
> **[2:00](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=120)** And we can see a helpful function there waiting for us.
>
> **[2:05](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=125)** If we bring up the terminal and execute cargo test, we can see that all of our tests pass, (laughs) sorry, all of our tests fail.
>
> **[2:17](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=137)** Let's do this the naive way first.
>
> **[2:21](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=141)** So what you might want to do if you are relatively new to Rust is created temporary vector.
>
> **[2:31](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=151)** And so for every element in a, so we'll iterate over it.
>
> **[2:38](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=158)** If temp contains element,
>
> **[2:48](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=168)** we'll continue.
>
> **[2:49](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=169)** So we'll skip.
>
> **[2:51](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=171)** I'll turn it in.
>
> **[2:52](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=172)** If we don't, then we can insert element into our temporary list
>
> **[3:04](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=184)** and then return the temporary.
>
> **[3:08](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=188)** Now, if you have a computer science background, I hope that you will appreciate that this is quite an inefficient way to get our tests to pass.
>
> **[3:22](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=202)** They probably will all pass, but we can do a lot better.
>
> **[3:30](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=210)** So one of the methods that we have available to us inside vector is sort.
>
> **[3:37](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=217)** And then it also contains a dedup method.
>
> **[3:44](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=224)** Oops, that's a bit of a typo.
>
> **[3:50](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=230)** And this is algorithmically much nicer.
>
> **[3:54](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=234)** And in fact, we get a extra hint from, which is saying that we should try sort unstable.
>
> **[4:06](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=246)** So this will be a faster sorting algorithm that won't make stability guarantees if you won't keep things in the same place if they compare equal.
>
> **[4:23](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=263)** So there's a few ways to answer that question.
>
> **[4:28](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=268)** I've added some extra to-dos or some extra advanced questions for you in case you want more of a difficult challenge.
>
> **[4:41](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=281)** Let's have a go at answering the generic case.
>
> **[4:47](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=287)** So our first thing that we might need to do is define unique to be able to be compared and then we can implement our sort function, sort by comparison.
>
> **[5:07](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=307)** It takes an X and a Y, and then it's X compare Y, and then we can run dedup again, and a.
>
> **[5:26](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=326)** What this is saying is that I'm allowed to accept any input type, a T, as long as I can sort it.
>
> **[5:37](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=337)** Oh, and it's probably complaining that I've already defined unique.
>
> **[5:41](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=341)** Yeah, the name unique is already defined multiple times.
>
> **[5:44](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=344)** Oops, I just went into the wrong window.
>
> **[5:50](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=350)** So I will delete the old one.
>
> **[5:54](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=354)** See if this works.
>
> **[5:56](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=356)** Ah, the one with the tests don't, is not happy because it's empty.
>
> **[6:02](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=362)** So I'll need you to give it a type and say that it's a vec of <i32>.
>
> **[6:11](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=371)** And hopefully, we're all good again.
>
> **[6:13](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=373)** Okay, perfect.
>
> **[6:15](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=375)** I'll see you on the next challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** function (6), let (3), pass (3), implements (1), continue (1)
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** cargo (1), make (1)
> **Non-Speech:** (techno gaming music) (2)
> **File Paths:** main.rs (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### Print any text type
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=0)** (video game bleeping)
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=4)** - [Instructor] Okay, welcome to Challenge Three.
>
> **[0:06](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=6)** Well done for making it this far.
>
> **[0:08](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=8)** One of the things that I really didn't appreciate about Rust when I was learning was its multitude of text types, that is, types that were dealing with text.
>
> **[0:22](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=22)** This challenge is aimed at testing everyone's knowledge.
>
> **[0:27](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=27)** The challenge is to print any text type.
>
> **[0:31](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=31)** We are challenged to write a function that can either accept a string or a string slice as an argument.
>
> **[0:40](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=40)** To satisfy the requirements of the challenge, you'll need to implement info.
>
> **[0:45](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=45)** It must accept at least string and string slices, preferably more text types, and also to be able to print its input to standard out.
>
> **[0:56](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=56)** Pause the video now and implement info.
>
> **[1:00](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=60)** In the next part of the video, I'll actually try and provide three implementations for you to teach you a little bit more about strings in Rust.
>
> **[1:09](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=69)** (video game bleeping) Hi, everybody, and welcome to the answer section of Challenge Three.
>
> **[1:17](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=77)** We are trying to implement info that can take any text type and print its contents to the screen.
>
> **[1:24](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=84)** If we go into the main.rs file, you'll see that we have the beginnings of a working program, and with a few compile errors that we need to check.
>
> **[1:38](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=98)** If we bring up the terminal, we'll first encounter a compile error relating to this generic type, that T doesn't exist.
>
> **[1:55](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=115)** And now we've got a different error which is that the tests fail.
>
> **[2:00](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=120)** So the fastest way to get our code to pass is by thinking about what we would like to get it to do normally.
>
> **[2:12](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=132)** So we've got print line here.
>
> **[2:13](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=133)** And then we would put our curly braces and then a
>
> **[2:22](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=142)** and this is almost everything that we need, but it turns out that Rust is very helpful and will actually provide a really helpful error message for us, telling us that we need to implement the Display trait.
>
> **[2:39](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=159)** Now if we try and run our tests again,
>
> **[2:49](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=169)** you'll see that they both pass.
>
> **[2:53](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=173)** To be extra difficult, we can add some more complication.
>
> **[2:59](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=179)** So I could, for example, try using the CString type as well as path.
>
> **[3:09](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=189)** They're there for your experimentation as well if you'd like an extra, some extra difficulty.
>
> **[3:18](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=198)** I hope this has been a fun challenge for you and I'll look forward to seeing you in the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** pass (2), type. (1), function (1), type, (1)
> **Cross-References:** in the next (2)
> **File Paths:** main.rs (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### Case-insensitive sort
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=0)** (lively music)
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=4)** - [Instructor] Kia ora e te whanau.
>
> **[0:06](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=6)** Welcome to Rust code challenges, challenge four.
>
> **[0:10](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=10)** Today we're going to be talking about users.
>
> **[0:13](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=13)** Our challenge is case-insensitive sort.
>
> **[0:16](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=16)** Those pesky users are always using uppercase and lowercase letters in their names.
>
> **[0:22](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=22)** We want to write a function that sorts usernames while ignoring the case of any letters within those usernames.
>
> **[0:29](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=29)** Requirements.
>
> **[0:30](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=30)** We are required to implement the function sort_usernames.
>
> **[0:34](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=34)** The users variable should be sorted in-place and we should also be able to accept all Unicode characters.
>
> **[0:42](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=42)** As an example, let's assume that we have a list of users, Todd and Amy.
>
> **[0:47](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=47)** We want Amy to come first, even though she's used a lowercase letter for her name.
>
> **[0:52](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=52)** Pause the video now and implement sort_usernames.
>
> **[0:57](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=57)** In the second half of this video, I'll demonstrate how I've implemented it.
>
> **[1:02](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=62)** (lively music) Welcome to the answer section of challenge four.
>
> **[1:10](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=70)** We are implementing this function sort_usernames, and the sample code in main.rs is a little bit scary.
>
> **[1:20](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=80)** There's kind of a lot going on.
>
> **[1:22](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=82)** We've got this generic type that is constrained by the AsRef type str and what that's saying is that for every item in our vector, when you take a element by reference, it becomes a UTF-8 encoded text string if that makes sense.
>
> **[1:49](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=109)** (instructor chuckling) And so even though it looks intimidating, I'm hoping that it will still be comprehensible to you.
>
> **[2:02](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=122)** So to complete our task, we need to be able to create a custom sort function.
>
> **[2:10](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=130)** We have X and Y, and then we need to be able to reduce,
>
> **[2:26](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=146)** we need to send them to, so if we take AsRef and then lowercase, and then we compare, oh, we've got a compiler error.
>
> **[2:44](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=164)** Ah, it's just got a type.
>
> **[2:47](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=167)** And then we play this comparison and then we do this
>
> **[2:55](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=175)** for the Y side.
>
> **[3:01](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=181)** And that should be all that we need.
>
> **[3:05](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=185)** Consider borrowing. Okay, I'll do that.
>
> **[3:12](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=192)** If I run the tests, and I'll do that from the terminal, cargo test.
>
> **[3:18](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=198)** It compiles and it all works fine.
>
> **[3:23](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=203)** That's enough to get through.
>
> **[3:25](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=205)** But I want to show you potentially another way that's a little bit more efficient.
>
> **[3:39](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=219)** I can provide Rust with a way of taking an item in the list.
>
> **[3:44](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=224)** In this case, it's every X and I would like it to just say AsRef to_lowercase.
>
> **[3:59](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=239)** And then I would like it to run its own comparison, effectively performing this comparison operation itself.
>
> **[4:06](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=246)** And this case key means that it only executes this conversion function or the processing step once per item in the list, rather than converting everything to a string every time.
>
> **[4:25](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=265)** So the different code also completes successfully and is a little bit more efficient than the first version.

> [!info]- Semantic Content
>
> **Code Keywords:** function (5), let (1), type. (1), case, (1)
> **Code Identifiers:** sort_usernames (3), to_lowercase (1)
> **Definitions:** is a  (2)
> **Non-Speech:** (lively music) (2)
> **File Paths:** main.rs (1)
> **CLI Commands:** cargo (1)
> **Env Vars:** utf (1)
> **Tools:** terminal (1)

#### Convert text to Morse code
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=0)** (upbeat video game music)
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=4)** - [Instructor] Welcome to Rust Code Challenges, Challenge beep-beep-beep-beep beep-beep, (laughs) that is, Challenge 5: Morse Code.
>
> **[0:12](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=12)** In this challenge, we will be converting text, that is, letters and numbers, into the equivalent Morse code representation.
>
> **[0:21](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=21)** A very quick refresher on what Morse code is.
>
> **[0:24](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=24)** We have letters on the left, and our process will create pulses that might be short or long on the right.
>
> **[0:31](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=31)** The requirements of this challenge are to implement the MorseCode trait for String.
>
> **[0:36](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=36)** MorseCode has been defined in the sample code.
>
> **[0:40](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=40)** You should feel free to skip any invalid input characters.
>
> **[0:44](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=44)** Lastly, ignore upper and lowercase on the input.
>
> **[0:48](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=48)** The sample code contains some type definitions that are useful to go over right now.
>
> **[0:54](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=54)** First of all, we have our trait MorseCode.
>
> **[0:55](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=55)** It is a single method, to_morse_code, that takes an immutable reference to self and returns a message.
>
> **[1:02](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=62)** The next question is, what is Message?
>
> **[1:05](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=65)** A message is a Vec of Letters, that is, a list of Letters.
>
> **[1:08](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=68)** What's a Letter?
>
> **[1:09](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=69)** Well, that's a Vec of Pulses.
>
> **[1:10](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=70)** And the last question is, what is a Pulse?
>
> **[1:13](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=73)** A pulse is an enum that may be Short or Long.
>
> **[1:18](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=78)** So, to recap what we've just learned, we start with letters of the left.
>
> **[1:23](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=83)** We know that they have a meaning in Morse code, and the Rust code is on the right.
>
> **[1:30](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=90)** So A is a vec of Long and Short.
>
> **[1:34](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=94)** You should have all of the information that you need to work through this challenge.
>
> **[1:39](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=99)** Push pause and work through your solution.
>
> **[1:42](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=102)** In the rest of the video, you'll see how I've implemented it.
>
> **[1:46](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=106)** I look forward to seeing your solutions.
>
> **[1:48](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=108)** I'll see you on the other side.
>
> **[1:49](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=109)** (upbeat video game music) Hi, everybody, and welcome to the answer section of Challenge 5.
>
> **[1:58](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=118)** I hope you've really enjoyed implementing Morse code.
>
> **[2:02](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=122)** If it's been a little more complicated than other challenges, I apologize.
>
> **[2:07](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=127)** Unlike the previous challenges, there's no to-do macro to guide you on how to implement this trait.
>
> **[2:19](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=139)** I'm hopeful, though, that you are able to get through it yourself anyway.
>
> **[2:25](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=145)** So to work forwards, we need to implement MorseCode.
>
> **[2:30](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=150)** And to implement a trait we use an Impl block.
>
> **[2:33](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=153)** And we say we want to implement the trait for a given type.
>
> **[2:38](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=158)** And I've just got a a little bit of boiler plate text there, or at least I've kind of got a stub method which satisfies the compiler.
>
> **[2:52](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=172)** Now our code builds, but both of our tests fail.
>
> **[2:56](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=176)** So how do we implement this correctly?
>
> **[3:01](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=181)** At least we know that we're sort of on the right track. (chuckles) Conceptually, what we want to do is move through the string and convert each character to its representation as Morse code.
>
> **[3:20](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=200)** So I'll just match on c.
>
> **[3:25](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=205)** And then let's say if we had a capital A or a lowercase a, then we would convert that to a vector of Pulses.
>
> **[3:38](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=218)** And the Pulse is an enum of Short and Long.
>
> **[3:43](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=223)** And the A is Pulse::Short then Pulse::Long.
>
> **[3:48](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=228)** And for right now, or just while we are getting things going, I'll skip every other character.
>
> **[3:56](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=236)** The compiler is a little bit angry with me, because it wants me to return a Message, and I'm not currently doing so.
>
> **[4:05](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=245)** And now it's worried about
>
> **[4:16](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=256)** some, ah, thing else.
>
> **[4:20](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=260)** So firstly, I need to iterate through the characters of the string, so that satisfies one warning.
>
> **[4:26](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=266)** This next one is just a little bit more complicated.
>
> **[4:31](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=271)** It's complaining that these two sides of the match statement are returning different things.
>
> **[4:36](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=276)** And to fix that, I need to create a temporary variable.
>
> **[4:41](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=281)** So I'm going to create this message, immutable variable called msg, which will be my output type.
>
> **[4:48](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=288)** And we could just create an empty one or we could give it a size hint.
>
> **[4:54](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=294)** So I'll say Vec::with_capacity.
>
> **[4:58](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=298)** And then it's just going to be more or less the same length.
>
> **[5:02](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=302)** The output message will be the same length as the source string itself.
>
> **[5:07](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=307)** And then I want to return msg.
>
> **[5:12](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=312)** Now let morse code can be returned from this match statement.
>
> **[5:20](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=320)** And then msg.push morse.
>
> **[5:26](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=326)** Now we should be able to do A, B and C, or, sorry, just A.
>
> **[5:31](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=331)** I've got a little dummy program here that I'll check to see whether or not I can run.
>
> **[5:40](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=340)** And I can see the three, well actually six Pulses, but three As in the Morse code alphabet.
>
> **[5:49](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=349)** So that's good.
>
> **[5:50](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=350)** We're getting much, much closer.
>
> **[5:54](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=354)** We just need our tests to pass. (chuckles) And so I'm going to shorten some code up.
>
> **[6:02](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=362)** We could do a lot of typing now.
>
> **[6:04](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=364)** But instead I want to show a cheat of bringing the enum variance into a local scope, which is helpful for shortening things up on each line.
>
> **[6:17](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=377)** So we are bringing Short and Long through.
>
> **[6:19](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=379)** Now, I am going to copy, paste from off the screen.
>
> **[6:29](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=389)** And hopefully, if I run cargo test now, I've got two passing tests.
>
> **[6:40](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=400)** So I'm sorry that you had to do a lot of typing and there wasn't as much guidance as previous tests but, sorry, as previous challenges, but I hope that it's been enjoyable nonetheless.
>
> **[6:50](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=410)** I'll see you the next challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** enum (3), type. (2), let (2), self (1), impl (1)
> **Definitions:** is a  (5), is an  (2)
> **Code Identifiers:** to_morse_code (1), with_capacity (1)
> **Exercise Files:** sample code (2)
> **Non-Speech:** (upbeat video game music) (2)
> **CLI Commands:** cargo (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### Value of a hand of cards
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=0)** (retro video game sound effects)
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=4)** - [Instructor] Welcome to Challenge six.
>
> **[0:06](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=6)** Value of a Hand of Cards.
>
> **[0:08](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=8)** In this challenge, we are going to be calculating the value of a Hand of cards for the game of Blackjack.
>
> **[0:14](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=14)** Blackjack has quite specific rules about the way each card is valued.
>
> **[0:22](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=22)** The numbered cards have value that is equal to their own number.
>
> **[0:27](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=27)** The face cards, king, jack, and queen, are equal to 10.
>
> **[0:31](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=31)** The ace has the value of 11 until the Hand's total value exceeds 21 and then it equals one.
>
> **[0:40](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=40)** The requirements of the challenge are to use the types that have been defined in the sample code and implement the value() method for the Hand struct.
>
> **[0:49](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=49)** The value() method calculates the total value of the cards that are currently held in the Hand.
>
> **[0:55](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=55)** Here's a quick overview of some of the code that we'll be encountering in the sample code.
>
> **[1:01](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=61)** We have an enum that defines Card.
>
> **[1:03](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=63)** It might be a one or an ace or a king.
>
> **[1:07](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=67)** A Hand is a struct that contains single field Cards that has a list of Cards, or a Vec of Card, with an implementation block Hand.
>
> **[1:19](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=79)** And it includes this value method that we need to replace.
>
> **[1:23](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=83)** It will start with zero and we need to replace the zero value with a concrete implementation.
>
> **[1:30](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=90)** Pause the video now and complete the solution.
>
> **[1:34](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=94)** I'm excited to see how our implementations differ.
>
> **[1:38](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=98)** (retro video game music) Hi, welcome to the answers section.
>
> **[1:45](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=105)** Our task is to implement Blackjack.
>
> **[1:48](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=108)** (chuckles) So to do so, let's go to main.rs, and you'll see we've got a lot of code already written for us.
>
> **[1:58](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=118)** But there is this value method of a Hand which we need to implement.
>
> **[2:07](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=127)** We can sort of start out by checking what to do.
>
> **[2:12](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=132)** So if we execute cargo test, you'll actually see that one of them parses.
>
> **[2:18](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=138)** And that is because we are providing a zero value as a default.
>
> **[2:25](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=145)** And that is actually correct for the empty Hand.
>
> **[2:27](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=147)** If we have no cards in our Hand, that that's worth zero.
>
> **[2:33](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=153)** Okay, let's move forward.
>
> **[2:40](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=160)** What we need to sort of start with is a subtotal.
>
> **[2:44](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=164)** And so we want a mutal value, and I'll start off initializing that with zero.
>
> **[2:51](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=171)** And then as we go through every card
>
> **[2:59](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=179)** in our cards, we just add to the subtotal.
>
> **[3:05](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=185)** So let's see how that works.
>
> **[3:08](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=188)** For card in self.cards we need to match on the card and that's because I've got all of these Ace, two, three, four, five and six, all the way through to king at queen.
>
> **[3:29](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=209)** If I copy that across to here, we'll be able to get a lot of our work done for us.
>
> **[3:44](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=224)** So I'm just going to ignore the ace for now.
>
> **[3:48](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=228)** The other thing that I need to do is I'm just going to write, 'cause these are all in enum, I am just going to sort of, card, oh, that's up here too.
>
> **[4:07](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=247)** Now if it's an ace, for the moment I'm just going to say that it's worth one.
>
> **[4:12](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=252)** We'll need to have a little bit of logic to say that if it isn't, then we need to change its value.
>
> **[4:25](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=265)** So number cards are all fine.
>
> **[4:31](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=271)** Six, seven, eight, nine, and face cards are worth 10.
>
> **[4:49](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=289)** Now if you know the rules of Blackjack, you'll know that I haven't implemented this correctly.
>
> **[4:54](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=294)** So I've got, let's say card's value, and,
>
> **[5:09](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=309)** I want to just add to the subtotal.
>
> **[5:12](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=312)** And then the last expression of that method will be adding it to, or just kind of returning the subtotal value.
>
> **[5:22](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=322)** Okay, so if I run the tests again, I might get, oh it's given me a syntax error to fix.
>
> **[5:36](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=336)** I need iterator, so I'm just going to borrow self.cards, run it again, and actually I get a couple of tests passing.
>
> **[5:47](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=347)** The one that isn't passing is where I sort of overflow, in Russ's terminology, (laughs) or computing terminology, when I hit 21.
>
> **[6:00](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=360)** So, to get around this, I want to have another mutable variable, which is aces_seen.
>
> **[6:09](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=369)** And if I match on ace, and then I check aces_scene, I'm going to increment that by one.
>
> **[6:26](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=386)** And the value of the card is actually going to be zero because I'm going to add a little bit of smarts to my logic at the end.
>
> **[6:37](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=397)** And it's for every card, or for every ace in aces_seen,
>
> **[6:51](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=411)** I want to create value, and it will be, if the subtotal is less than 10, it's 11, otherwise, it's one.
>
> **[7:08](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=428)** And now I go through the same process of incrementing up or adding to subtotal the value for the ace.
>
> **[7:20](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=440)** Now the syntax can be a little bit confusing.
>
> **[7:24](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=444)** Maybe if I pull it away from one line it might be a little bit easier to read.
>
> **[7:31](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=451)** The other thing to note about Rust that's different than most other languages is the if can actually return a value itself.
>
> **[7:40](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=460)** Ah, it's given me another syntex error to fix.
>
> **[7:46](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=466)** So I'll save my code and rerun the tests.
>
> **[7:50](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=470)** I'm still failing.
>
> **[7:52](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=472)** That's an interesting thing to happen.
>
> **[8:02](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=482)** And after some digging around through my code and checking everything again, I found the problem.
>
> **[8:09](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=489)** If I go and check the test, it says the strong_hand is the test that's failing and it's a queen and an ace.
>
> **[8:18](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=498)** And it should equal 21, the value.
>
> **[8:21](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=501)** But instead I'm getting 11.
>
> **[8:24](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=504)** Now, my test here says if it's less than 10, the ace is worth 11, which is false.
>
> **[8:34](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=514)** I need it less than or equal to 10.
>
> **[8:37](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=517)** Hopefully we now pass.
>
> **[8:40](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=520)** And with that, yeah, our tests pass and we've completed the challenge.
>
> **[8:47](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=527)** Well done.
>
> **[8:48](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=528)** I'll see you on the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), struct (2), enum (2), self (2), pass (2)
> **Code Identifiers:** aces_seen (2), aces_scene (1), strong_hand (1)
> **Exercise Files:** sample code (2)
> **Definitions:** is a  (2)
> **Non-Speech:** (retro video game sound effects) (1), (retro video game music) (1)
> **File Paths:** main.rs (1)
> **CLI Commands:** cargo (1)
> **UI Navigation:** go to (1)

#### Has a deadline been reached?
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=0)** (bright nostalgic music) (stars chime) (graphic beeps)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=3)** - [Instructor] I'm always forgetting my friend's birthdays which is why this challenge is especially important for me.
>
> **[0:09](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=9)** Challenge seven, check deadline.
>
> **[0:12](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=12)** In this challenge we will be asked to create a function that can tell whether or not an event's date has already occurred.
>
> **[0:21](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=21)** We'll be tested in two ways.
>
> **[0:23](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=23)** Firstly, we haven't worked for time before.
>
> **[0:25](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=25)** And secondly, we'll be using third party code.
>
> **[0:30](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=30)** Requirements, we must design an ImportantEvent data structure that has at least fields to store the name and the date.
>
> **[0:38](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=38)** Let's say we're talking about a friend's birthday, we want to know who it is and when their birthday is.
>
> **[0:44](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=44)** We must implement the Deadline trait for ImportantEvent.
>
> **[0:48](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=48)** Feel free to use your local time zone.
>
> **[0:52](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=52)** Here are two further details.
>
> **[0:54](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=54)** Firstly, you don't need to implement your own time handling routines.
>
> **[0:59](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=59)** Time handling is provided by the chrono crate.
>
> **[1:01](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=61)** The sample code will automatically download and compile the chrono crate for you.
>
> **[1:06](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=66)** A crate is the Rust term for package.
>
> **[1:10](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=70)** The Deadline trait is defined as a single method is passed.
>
> **[1:15](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=75)** It takes an immutable reference to self and returns a bool.
>
> **[1:20](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=80)** Pause the video now and implement the Deadline trait.
>
> **[1:24](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=84)** I'm really interested to see how you get on.
>
> **[1:27](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=87)** In the next part of the video you'll see how I've implemented it.
>
> **[1:31](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=91)** (bright nostalgic music) (graphic chimes) Hi. Welcome to the answer segment.
>
> **[1:38](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=98)** In this challenge we are checking time, and so I've got two tests to test, (chuckles) whether or not something is in the future or in the past.
>
> **[1:52](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=112)** And if I run cargo test, you'll see that I get a couple of compile errors about some unused code that's irrelevant for now.
>
> **[2:00](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=120)** What we really want to see are these tests turning green.
>
> **[2:04](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=124)** So if I hop over to the main.rs file, I'll see that I've got this todo macro standing in the way, and that's what generates this error message: not yet implemented.
>
> **[2:19](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=139)** Okay, so how do we do it?
>
> **[2:21](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=141)** Well, it turns out that there's just one line of code.
>
> **[2:25](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=145)** I need to check this when field, and see whether or not the time has already passed.
>
> **[2:34](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=154)** And so to do that, I just say Local::today.
>
> **[2:40](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=160)** Now, so what I'm checking is whether or not the date is earlier than today.
>
> **[2:48](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=168)** And if it is, the time has actually passed.
>
> **[2:56](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=176)** Ah, so I've got a syntax error, so I'll just return, ought to fix that up.
>
> **[3:01](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=181)** (keyboard clicks) And now our tests have turned green, so congratulations if you got that and I'll see you on the next challenge.

> [!info]- Semantic Content
>
> **Non-Speech:** (bright nostalgic music) (2), (stars chime) (1), (graphic beeps) (1), (graphic chimes) (1)
> **Code Keywords:** function (1), let (1), self (1), return, (1)
> **File Paths:** main.rs (1)
> **CLI Commands:** cargo (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** sample code (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### Convert between Celsius and Fahrenheit
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=0)** (electronic whirring) (electronic pinging) (video game music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=3)** - We've done a lot together these challenges.
>
> **[0:05](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=5)** And now it's time to take on something really big.
>
> **[0:08](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=8)** Let's go for world peace!
>
> **[0:10](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=10)** We need to resolve the conflict between Celsius and Fahrenheit, and we can do it together.
>
> **[0:15](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=15)** Our challenge is to convert between each of the temperature scales.
>
> **[0:20](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=20)** The requirements of this challenge are to add the to_celsius() and to_fahrenheit() methods to our predefined Temperature struct.
>
> **[0:30](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=30)** What is that struct?
>
> **[0:31](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=31)** Well Temperature has two fields.
>
> **[0:34](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=34)** Degrees is an f32, that is a floating point number, and the scale field.
>
> **[0:40](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=40)** Scale is an enum that has two variants: Celsius and Fahrenheit.
>
> **[0:47](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=47)** Just in case you need it, here are the formulas for converting between Celsius and Fahrenheit.
>
> **[0:52](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=52)** From Fahrenheit to Celsius.
>
> **[0:54](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=54)** Take the number of degrees Fahrenheit, remove 32, and multiply by five over nine.
>
> **[1:02](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=62)** Celsius to Fahrenheit is the inverse.
>
> **[1:04](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=64)** We take the number of degrees in Celsius, times that by nine over five, and add 32.
>
> **[1:12](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=72)** Pause the video now.
>
> **[1:14](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=74)** Work on your solution.
>
> **[1:15](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=75)** For the rest of the video, you'll see how I've implemented them.
>
> **[1:19](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=79)** (electronic trilling) (video game music) (key clicks) (video game music) Hi, welcome to the answer segment.
>
> **[1:25](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=85)** Let's implement temperature conversion.
>
> **[1:30](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=90)** We'll start, as we have been consistently, with checking our tests.
>
> **[1:37](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=97)** I run cargo test.
>
> **[1:40](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=100)** I should see three failing tests.
>
> **[1:42](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=102)** And we wish to get these to pass.
>
> **[1:46](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=106)** And so let's pop over to main.rs and see what we need to do.
>
> **[1:53](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=113)** Okay, the bulk of the code is written, but I have this Temperature struct, and it contains two fields: scale and degrees.
>
> **[2:05](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=125)** We have two methods to implement: to_celsius and to_fahrenheit.
>
> **[2:10](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=130)** Our strategy will be to match on the scale field and then do the correct alteration or conversion of (keys clicking) of the numeric value.
>
> **[2:26](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=146)** Which happen... And so, let's move forward.
>
> **[2:30](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=150)** Okay so first thing to we want to match on self.scale.
>
> **[2:36](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=156)** And if we are already (keys clicking) Celsius then we just return self.degrees.
>
> **[2:47](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=167)** Otherwise, if we're Fahrenheit, we've got a little bit of work to do.
>
> **[2:50](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=170)** (keys clicking) We need to do some mathematics.
>
> **[2:54](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=174)** And that involves taking self.degrees, removing 32,
>
> **[3:05](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=185)** and then and I'll just wrap that in this so we don't get confused.
>
> **[3:13](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=193)** And I'm going to multiply five over nine.
>
> **[3:18](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=198)** (keys clicking) And that should be the Celsius conversion done.
>
> **[3:26](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=206)** Now, we need to do the numeric opposite in the inverted step.
>
> **[3:32](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=212)** And so let's type out (keys clicking) all of that.
>
> **[3:39](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=219)** Okay so we'll start so if we are... We'll get the easy one done.
>
> **[3:42](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=222)** If we're Fahrenheit then we just return self.degrees.
>
> **[3:44](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=224)** We've got no work to do.
>
> **[3:47](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=227)** If we're Celsius though we've got some our mathematics to calculate.
>
> **[3:52](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=232)** We start with the five over nine.
>
> **[3:57](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=237)** (keys clicking) And I'm using .0 because I want to use floating point values.
>
> **[4:06](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=246)** (keys clicking) And I multiply that by self.degrees.
>
> **[4:14](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=254)** (keys clicking) And then I add 32.
>
> **[4:22](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=262)** Now this should be correct.
>
> **[4:25](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=265)** So if I clear the screen and the terminal and run my tests... I'll actually click save the file, that will help too.
>
> **[4:32](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=272)** And then I run cargo test.
>
> **[4:34](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=274)** (keys clicking) I get one failure.
>
> **[4:40](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=280)** Two failures.
>
> **[4:41](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=281)** Okay, that's confusing.
>
> **[4:44](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=284)** I wonder if anyone can spot this before me?
>
> **[4:47](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=287)** (mouse clicking) Ah, I've done it.
>
> **[4:54](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=294)** (keys clicking) I haven't done the mathematical opposite.
>
> **[4:59](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=299)** If you've been shouting at the screen I apologize.
>
> **[5:03](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=303)** (keys clicking) Aha!
>
> **[5:05](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=305)** Okay, great.
>
> **[5:06](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=306)** We've correctly (laughs) converted temperature scales.
>
> **[5:12](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=312)** And hope that was a fun exercise for you.
>
> **[5:15](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=315)** I'll see you on the next one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), self (5), struct (3), enum (1), pass (1)
> **Non-Speech:** (keys clicking) (11), (video game music) (3), (mouse clicking) (1)
> **Code Identifiers:** to_celsius (2), to_fahrenheit (2)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** cargo (2)
> **File Paths:** main.rs (1)
> **Tools:** terminal (1)
> **Speakers:** - we (1)

#### Sum a list of numbers with missing values
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=0)** (lively music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=3)** - [Instructor] Data quality is a really important topic and one of the things that crops up in the real world when you are dealing with data is missing values.
>
> **[0:12](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=12)** This challenge goes through the process of handling those in Rust.
>
> **[0:17](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=17)** Welcome to challenge nine, ignore missing values.
>
> **[0:21](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=21)** Our challenge is to calculate the sum of a list of numbers that might contain missing values.
>
> **[0:30](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=30)** To satisfy the requirements of the challenge, you should implement the sum_with_missing function.
>
> **[0:37](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=37)** It accepts a vector of option i32 and returns an i32.
>
> **[0:44](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=44)** You should always return a number.
>
> **[0:46](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=46)** That is if your input only contains missing values, then you should return zero.
>
> **[0:53](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=53)** Let's quickly touch on how missing values are actually represented in Rust.
>
> **[0:58](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=58)** In Rust, we use the option type.
>
> **[1:01](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=61)** Option is an enum with two variants.
>
> **[1:03](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=63)** The none variant indicates a missing value.
>
> **[1:07](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=67)** Here are two examples of the sum with missing function in action.
>
> **[1:12](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=72)** Example one, our input contains missing elements.
>
> **[1:17](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=77)** We have a data variable that includes two numbers and one missing value.
>
> **[1:22](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=82)** We take the answer.
>
> **[1:25](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=85)** It should equal five.
>
> **[1:28](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=88)** Example two is where there are no missing elements.
>
> **[1:32](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=92)** We already know that we should return a number and we should probably return zero.
>
> **[1:36](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=96)** So this is data with only missing values.
>
> **[1:40](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=100)** We calculate the answer again and we should find that the answer is zero.
>
> **[1:46](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=106)** Pause the video and implement sum_with_missing.
>
> **[1:49](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=109)** I'm hoping that this will really test your intuition relating to iteration.
>
> **[1:56](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=116)** (lively music) Hi, let's clean up some messy data.
>
> **[2:04](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=124)** Okay, like usual, we'll test our code or what we've got.
>
> **[2:10](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=130)** So if I go up to terminal and open a new one.
>
> **[2:14](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=134)** Run cargo test.
>
> **[2:17](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=137)** You get a couple of warnings but actually, there's a whole bunch of errors, which we are going to now address.
>
> **[2:24](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=144)** Okay, so our task is to kind of take a vector of things like this where we've got sums in there and nones and we somehow want to add all of those together.
>
> **[2:36](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=156)** You might be tempted to create some sort of subtotal value and then add that, you know, go through and increment that and return it at the end.
>
> **[2:50](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=170)** But actually, there's a more idiomatic way to to go forward.
>
> **[2:56](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=176)** So if we, and that's with a functional style.
>
> **[3:00](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=180)** So what I'll start with is I'll iterate, I'll create an iterator over the numbers vector and then I want to, for every item, I'm going to pull out its value.
>
> **[3:20](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=200)** Otherwise I'm going to use its default, which is zero and then an iterator of numbers.
>
> **[3:29](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=209)** So the map create converts the iterator of the option i32s into an iterator of i32.
>
> **[3:42](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=222)** And then the sum method will be able to kind of sum them all up.
>
> **[3:48](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=228)** So if I save my file and rerun the tests, I see that they're all okay.
>
> **[3:57](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=237)** And that's exactly what we want.
>
> **[3:59](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=239)** There are multiple ways to solve this and I hope that you have some fun playing with all of the options.
>
> **[4:06](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=246)** I also looking forward to seeing you in the next challenge.
>
> **[4:10](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=250)** So I'll see you then. Bye.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (2), type. (1), enum (1), default, (1)
> **CLI Commands:** find (1), cargo (1)
> **Code Identifiers:** sum_with_missing (2)
> **Definitions:** is a  (1), is an  (1)
> **Non-Speech:** (lively music) (2)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Best Practices:** you should always (1)

#### Calculate the number of weeks between two dates
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=0)** (retro video game sound effects)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=3)** - My kids are always competing about who has the next birthday and they always want to know how many weeks away their birthday will be.
>
> **[0:11](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=11)** In this challenge, we get to find out.
>
> **[0:12](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=12)** Welcome to challenge 10; weeks between two dates.
>
> **[0:17](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=17)** Our challenge is to parse two strings that represent dates and then calculate the number of whole weeks between them.
>
> **[0:25](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=25)** To satisfy the requirements of this challenge, firstly, we need to implement the weeks between function that takes two string slices and returns in integer, an i32.
>
> **[0:35](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=35)** You should assume that a and b are always valid dates.
>
> **[0:40](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=40)** When b occurs, before a, you should be returning a negative number.
>
> **[0:47](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=47)** There are two further details that I would like to cover off very quickly.
>
> **[0:50](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=50)** Firstly, we will be using the chrono crate.
>
> **[0:54](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=54)** Do take a look through its documentation and you'll find out how to parse strings.
>
> **[0:59](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=59)** Secondly, we'll need to handle errors correctly.
>
> **[1:03](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=63)** For this challenge, we can simply unwrap the results that are returned from the parse methods provided by chrono.
>
> **[1:12](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=72)** I'll explain what I mean.
>
> **[1:14](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=74)** Many functions in rust return a result.
>
> **[1:18](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=78)** That result has the possibility of an Err variant.
>
> **[1:22](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=82)** In the next slide, I'll show you a way to handle that when you are confident that the error case will never occur.
>
> **[1:31](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=91)** First of all, here is the definition of result.
>
> **[1:35](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=95)** It's a small enum defined with Ok and Err.
>
> **[1:39](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=99)** The Ok variant includes a typed T.
>
> **[1:43](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=103)** That's our sort of inner value.
>
> **[1:46](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=106)** And the Err case is the error case that returns an error type.
>
> **[1:51](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=111)** We would like code that effectively ignores the possibility of Err(E).
>
> **[1:57](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=117)** Result provides an unwrap method that enables us to access the T from the result itself.
>
> **[2:06](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=126)** Let's say that I've got a parse function that takes invalid input and returns a result.
>
> **[2:12](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=132)** If we unwrap it, we'll receive a date.
>
> **[2:16](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=136)** And if we would like to be a little bit more concise, we can do this on one line.
>
> **[2:20](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=140)** That should be all the background information that you need to complete the challenge.
>
> **[2:25](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=145)** Pause the video now and implement the weeks between function.
>
> **[2:29](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=149)** This way, all of the children of LinkedIn will be able to find out who has the next birthday.
>
> **[2:37](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=157)** (retro video game music) Welcome to the answer section.
>
> **[2:43](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=163)** I hope you've had an enjoyable time working through this one.
>
> **[2:49](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=169)** If we look at main.rs, we can see that our task is to implement this weeks between function that takes two strings; a and b and interprets them as dates and then returns some integer, which represents the number of weeks between those two dates.
>
> **[3:12](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=192)** So, this is a little bit complicated perhaps because we need to convert strings into something that is numeric and I'm going to cheat a little bit by using a third party dependency.
>
> **[3:27](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=207)** And that one will be a crate called chrono.
>
> **[3:33](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=213)** And I'll take version 0.4 and actually I don't even need all the rest of it.
>
> **[3:50](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=230)** Then I can use a data type called NaiveDate which will give me I think a lot of what I want.
>
> **[4:03](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=243)** So, if I define a variable t1 for time one and ask NaiveDate for a parse from stir method a and I give it a sort of a template.
>
> **[4:19](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=259)** We're now saying it's a percent Y not T and then I've got a month and a date and this will return a result.
>
> **[4:32](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=272)** For the moment, I'm just going to unwrap it to say that things are always going to work and for t2, I need to change this variable to b.
>
> **[4:48](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=288)** And now we have two dates, t1 and t2.
>
> **[4:55](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=295)** So, we can take the set of the difference and say, we will take, let's say t2 away from t1 and that will return us a duration object which isn't quite what we need.
>
> **[5:13](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=313)** We need to convert this to a number of weeks.
>
> **[5:18](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=318)** And so to do that, I call another method which is num_days and then I normalize each Y.
>
> **[5:31](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=331)** I ask for the number of weeks and so I just divide by seven.
>
> **[5:34](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=334)** And now I have not just the difference in time but in weeks.
>
> **[5:41](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=341)** And then I want to convert the return value as an i32 integer.
>
> **[5:48](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=348)** Now let's see if this gets us to where we need to be.
>
> **[5:54](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=354)** It does, well done.
>
> **[5:56](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=356)** I hope you've had fun.
>
> **[5:59](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=359)** See you on the next challenge.
>
> **[6:00](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=360)** Bye-bye.

> [!info]- Semantic Content
>
> **Code Keywords:** function (4), let (3), enum (1), type. (1)
> **CLI Commands:** find (3)
> **Non-Speech:** (retro video game sound effects) (1), (retro video game music) (1)
> **File Paths:** main.rs (1)
> **Code Identifiers:** num_days (1)
> **Versions:** version 0 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)

#### Validate an ISBN number
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=2)** (rising synthesizer tones) (synthesizer ringing) (triumphant synthesizer jingle) (falling synthesizer tones)
>
> **[0:06](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=6)** - [Instructor] I am a published author, and I actually got intensely curious about what ISBN numbers are at one stage, and I thought I would share some of that with you in this challenge.
>
> **[0:17](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=17)** Welcome to challenge 11, validate an ISBN number.
>
> **[0:22](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=22)** Our challenge is to verify that a string contains a valid ISBN number.
>
> **[0:29](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=29)** The requirements of this challenge are to parse a string containing an ISBN-13 number.
>
> **[0:36](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=36)** To do so, implement the standard format FromStr trait for the Isbn struct, which has been provided in the sample code.
>
> **[0:47](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=47)** You'll need to validate all of the digits.
>
> **[0:51](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=51)** That will include validating all of the input digits.
>
> **[0:55](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=55)** ISBN numbers include a check digit that can be calculated from the others.
>
> **[0:59](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=59)** You'll need to implement the validation step for that.
>
> **[1:03](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=63)** You'll also require an appropriate error type.
>
> **[1:06](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=66)** The FromStr trait requires that you define an error type.
>
> **[1:11](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=71)** Your custom type should cover at least these three cases.
>
> **[1:15](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=75)** When the input is too long, that's more than 13 digits long, too short, not enough, or if the checksum has failed.
>
> **[1:24](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=84)** Let's take a quick look at verifying that check digit.
>
> **[1:29](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=89)** It provides a level of assurance against typos, and potentially swapping characters backwards and forwards.
>
> **[1:38](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=98)** So how do we actually calculate this check digit?
>
> **[1:42](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=102)** We start by multiplying all of the digits by their preassigned weights.
>
> **[1:48](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=108)** Those alternate between one and three.
>
> **[1:52](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=112)** Once we've multiplied them all together, and summed the result, we then reduce that sum down to a single digit.
>
> **[2:00](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=120)** We start with the number 10, then subtract the remainder of dividing the sum we just calculated by 10.
>
> **[2:08](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=128)** It sounds complicated, but you'll find that the code to implement this is actually very short.
>
> **[2:14](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=134)** Let's go through it step by step.
>
> **[2:17](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=137)** Here is the ISBN number of a book that I've actually written.
>
> **[2:20](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=140)** Step one is to remove the hyphens, and isolate the check digit.
>
> **[2:25](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=145)** So we'll remove hyphens, and put zero to the side.
>
> **[2:30](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=150)** Effectively, we'll discard it for the remainder of our checking process.
>
> **[2:35](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=155)** Now we need to apply our weights.
>
> **[2:37](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=157)** First, I'll blow out the, or expand out all the numbers.
>
> **[2:41](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=161)** The digits start nine, seven, eight, and end at the bottom, four, one, and zero.
>
> **[2:48](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=168)** So you can see that each weight is one, three, one, three, one, three, and so forth.
>
> **[2:53](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=173)** Step two is actually applying the weights.
>
> **[2:56](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=176)** I'll first blow it out, so that we can have space for the weights that we want to apply.
>
> **[3:04](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=184)** The weights alternate between one and three.
>
> **[3:07](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=187)** Performing the multiplication gives us this result, and now, we add those together.
>
> **[3:13](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=193)** So if we add all of those digits, we end up with 100.
>
> **[3:18](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=198)** Step four is dividing the 100 that we just calculated by 10, and taking the remainder.
>
> **[3:24](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=204)** This is the modulus, or mod operation.
>
> **[3:28](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=208)** So we end up with zero.
>
> **[3:29](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=209)** Zero is the remainder of dividing 100 by 10.
>
> **[3:34](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=214)** Step five is subtracting that remainder zero from 10, which is 10, funnily enough.
>
> **[3:44](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=224)** And step six is to take the last digit.
>
> **[3:48](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=228)** The check digit itself can only be zero through nine.
>
> **[3:52](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=232)** And so if we get a 10, we'll just take zero.
>
> **[3:56](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=236)** You should have all of the information that you need to complete the challenge.
>
> **[4:01](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=241)** This will be a slightly more difficult one, because you need to really think about error handling and iteration.
>
> **[4:08](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=248)** I'm sure that you'll be able to get it, though.
>
> **[4:11](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=251)** In the next section of the video, you'll see how I've solved the challenge.
>
> **[4:16](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=256)** (rising synthesizer jingle) (falling synthesizer tone) Hi, welcome to the answers section.
>
> **[4:21](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=261)** I hope that you've had fun in the challenge.
>
> **[4:24](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=264)** Let's look at answering it.
>
> **[4:26](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=266)** Up in the source directory, we've got main.rs, and it includes quite a lot of code, but the important parts are these lines with TODO, and there's one comment on line 11, sorry, line nine, TODO, replace with an appropriate type.
>
> **[4:49](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=289)** Line 12, here we have a todo macro, and likewise on line 24.
>
> **[4:57](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=297)** Let's start by just talking very briefly about the strategy that we are going to use.
>
> **[5:02](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=302)** So we want to be able to implement this FromStr method, which actually enables some string to be parsed as a type.
>
> **[5:19](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=319)** Within that, we want to sort of add our validation.
>
> **[5:23](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=323)** Okay, so to start with, I want to create, I'm just going to... Let's see if we can start with creating...
>
> **[5:52](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=352)** Let's start by creating a list of digits that our string contains.
>
> **[6:05](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=365)** We actually just want the vec macro, which initiates an empty vector.
>
> **[6:11](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=371)** And then, so for the ith, and then sort of character, which we'll just call c, in s, characters, .char_indices, actually.
>
> **[6:29](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=389)** It provides the characters and their position within the string.
>
> **[6:34](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=394)** We want to match on c.
>
> **[6:38](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=398)** If it is a number, so anywhere between zero and nine,
>
> **[6:46](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=406)** then we need to kind of convert this to a... We need to convert it to an actual number, away from a string.
>
> **[6:58](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=418)** Okay, so we use our arrow, and then digits, push, actually, may wish to do this in two steps.
>
> **[7:10](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=430)** So the first thing that I want to do, create a scope, and then create digit.
>
> **[7:18](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=438)** And that is c, and then to_digit.
>
> **[7:26](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=446)** And then I need a base, and it's base 10.
>
> **[7:29](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=449)** And because I know that I'm only dealing with characters within the range zero to nine, I can unwrap here, and I also want to cast it as u8.
>
> **[7:44](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=464)** Then I can push my new digit onto my digits vector,
>
> **[7:59](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=479)** and we're happy.
>
> **[8:02](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=482)** There's some other things that we need to care about though.
>
> **[8:07](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=487)** One of them is a hyphen.
>
> **[8:10](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=490)** And if we encounter a hyphen, we are just going to continue, and if we encounter anything else, then we want to return error, and we'll just use the unit type for now.
>
> **[8:27](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=507)** And then, as our sort of... We've got our vector of digits.
>
> **[8:32](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=512)** So this should be 13 here, because we are dealing with an ISBN-13 number.
>
> **[8:39](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=519)** And the first thing we wish to do is...
>
> **[8:49](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=529)** Actually, if digits,
>
> **[8:59](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=539)** if the length of our digits is less than 13, or let's say is not 13, then we wish to return error as well.
>
> **[9:17](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=557)** And up here, we need the return keyword too.
>
> **[9:23](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=563)** Then we actually need a checksum. (laughs) The specification, if you look in the Wikipedia page posted here, will provide a checksum that we also need to implement.
>
> **[9:39](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=579)** And so I will just, let's say that we have implemented this thing.
>
> **[9:48](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=588)** If digits 12 does not equal calculate_check_digit,
>
> **[10:03](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=603)** and then we actually provide a reference to the digits vector, so we borrow digits, then we've got another error to return.
>
> **[10:21](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=621)** Otherwise, we should create our ISBN.
>
> **[10:38](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=638)** Now, the type that is predefined contains two fields.
>
> **[10:43](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=643)** One is raw, and the other is digits.
>
> **[10:46](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=646)** So the raw is the original string.
>
> **[10:49](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=649)** And to convert that, we take s, and put to_string.
>
> **[10:58](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=658)** And if we wish to just do digits,
>
> **[11:08](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=668)** we can just include it as is.
>
> **[11:10](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=670)** We don't actually require specifying the field, because our variable name is the same thing.
>
> **[11:17](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=677)** Now let's try and run this code.
>
> **[11:20](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=680)** It won't actually work, because this will block every time.
>
> **[11:25](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=685)** This is a little bit of... This one's slightly more complicated.
>
> **[11:32](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=692)** Ah, I see.
>
> **[11:34](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=694)** It is slightly more complicated.
>
> **[11:36](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=696)** First thing to do is to go into the Wikipedia page, and copy and paste weights for each of the numbers.
>
> **[11:46](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=706)** You can see that we've got the pattern of one and three.
>
> **[11:51](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=711)** After we, so what we want to do is these digits here,
>
> **[12:00](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=720)** and notice, we're just taking a slice of some number of u8.
>
> **[12:06](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=726)** So it doesn't necessarily need to be a vector, if you decided not to use one.
>
> **[12:13](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=733)** We're going to iterate through, and then zip our weights.
>
> **[12:23](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=743)** After that, we take each pair of x and y,
>
> **[12:32](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=752)** or another way to say what this would be left-hand and right-hand, and then we multiply.
>
> **[12:43](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=763)** We then sort of apply a conversion, so we've got... And we just take a sum.
>
> **[12:53](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=773)** The reason why we need to convert every value to u32 is that we'll probably overflow if we keep them as a single byte.
>
> **[13:06](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=786)** And then we've applied all of our weights,
>
> **[13:16](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=796)** and then we've got a check digit we wish to take,
>
> **[13:25](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=805)** which is 10 minus weights_applied.
>
> **[13:36](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=816)** And then, modulo 10.
>
> **[13:42](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=822)** Then we match on digit.
>
> **[13:46](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=826)** And if it is 10, we return zero.
>
> **[13:54](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=834)** And if it is some other number, we need to make sure that this is u8.
>
> **[14:03](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=843)** We need to make sure that this is u8, because it's a single byte.
>
> **[14:09](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=849)** And then, if it's some other number n, we wish to return that as a u8 instead of a u32.
>
> **[14:23](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=863)** Okay, so now our digit checker, or our validation function works, or at least it should.
>
> **[14:36](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=876)** We also have the bulk of our code implemented.
>
> **[14:40](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=880)** We haven't implemented a custom error type, so I'll do that next, but I'll see if I can run some of these tests.
>
> **[14:52](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=892)** Might take a... Oh, okay, we've got a couple of errors to fix.
>
> **[14:57](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=897)** On line 21, we need to... We have a problem with the match statement.
>
> **[15:12](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=912)** Ah, and that's this one here.
>
> **[15:19](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=919)** Oh, and I also made a spelling mistake, which you probably saw as I was going through.
>
> **[15:24](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=924)** So on line 57, weights only has one s.
>
> **[15:29](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=929)** And then, on line 14, I have another error where I've made a spelling mistake.
>
> **[15:44](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=944)** Just sort of, another sort of light syntax here.
>
> **[15:48](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=948)** weights_applied doesn't exist, so go back to line 57, there again, and it's actually just called applied.
>
> **[16:05](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=965)** Oh, okay.
>
> **[16:06](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=966)** It wants to give it an explicit type, which is u32.
>
> **[16:19](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=979)** And then there we are, we have passed our test, and we've kind of cheated a little bit, so that is kind of the pass there.
>
> **[16:29](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=989)** We can do one better, which is to implement that custom error message, also custom error type.
>
> **[16:42](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1002)** So to do better, so the reason why we may wish to avoid just using unit for an error is that we effectively swallow all of the causes, all the root causes of why there was a problem if this were to be incorrect on purpose.
>
> **[17:03](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1023)** Sorry, if we were to encounter an invalid number in real life, then we would only have error with no information about it.
>
> **[17:14](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1034)** So we actually want to kind of create a custom error type.
>
> **[17:21](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1041)** To create a custom error type, we want... InvalidIsbn, let's say.
>
> **[17:28](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1048)** And all you should need to do to make this usable as a...
>
> **[17:39](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1059)** To make it usable as an error is to derive debug.
>
> **[17:42](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1062)** Every type that is able to be printed to the screen that has a debug implementation can be used as an error type.
>
> **[17:54](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1074)** There is a custom... There is a, sort of a generic implementation for...
>
> **[18:19](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1099)** Okay, so those are our four errors.
>
> **[18:23](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1103)** The first one is if our length, it doesn't equal 13.
>
> **[18:26](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1106)** At the moment, we just crash, or at least we return errors.
>
> **[18:31](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1111)** So if it's less than 13, then we want to write InvalidIsbn,
>
> **[18:52](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1132)** and then TooShort.
>
> **[18:56](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1136)** Else if digits length is longer than 13,
>
> **[19:09](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1149)** we need to return TooLong.
>
> **[19:17](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1157)** There is, let me just kind of fill this in.
>
> **[19:21](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1161)** So down here, it's InvalidIsbn, and then we have our checksum message,
>
> **[19:36](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1176)** which is called FailedChecksum.
>
> **[19:42](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1182)** So this one, ah, invalid, we can do better here.
>
> **[19:45](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1185)** We've skipped right at the top.
>
> **[19:48](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1188)** Okay, so InvalidIsbn, and then failed, or InvalidCharacter.
>
> **[19:57](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1197)** Maybe a better word would be to say unexpected.
>
> **[20:01](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1201)** And so there's two things that, two fields that are provided.
>
> **[20:04](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1204)** One is a position, and the character that we have encountered.
>
> **[20:09](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1209)** So we can actually reuse this i, which we actually received a warning about earlier.
>
> **[20:16](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1216)** Just saying that we didn't actually use the variable.
>
> **[20:29](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1229)** Oh.
>
> **[20:47](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1247)** Okay, we need to figure out what's going on here.
>
> **[20:50](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1250)** So all of this looks fine, except back at the top, we didn't actually change the error type for the (indistinct) implementation.
>
> **[21:05](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1265)** And so I think it's got a little bit confused, and now our tests pass, and we also have some information provided back to the user, or whoever called this conversion.
>
> **[21:22](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1282)** There we are.
>
> **[21:24](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1284)** I hope that you've enjoyed working your way through this challenge.
>
> **[21:28](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1288)** It has been a longer one than the others.
>
> **[21:32](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1292)** I'll see you on the next challenge, bye-bye.

> [!info]- Semantic Content
>
> **Code Keywords:** let (11), type. (7), type, (3), require (2), pass (2)
> **Env Vars:** isbn (8), todo (2)
> **Code Identifiers:** weights_applied (2), char_indices (1), to_digit (1), calculate_check_digit (1), to_string (1)
> **Definitions:** is a  (5), is called (1)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** in the next (1), go back to (1)
> **Prerequisites:** you'll need (2)
> **File Paths:** main.rs (1)

#### Check if a file exists
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=0)** (upbeat chiptune music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=3)** - [Instructor] When you hit the Save button, you really want to make sure that the thing it is that you're working on actually gets saved to disk.
>
> **[0:10](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=10)** Welcome to Challenge 12, "Check if a File Exists".
>
> **[0:13](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=13)** We're going to be playing around with the file system, and validating that a file actually exists on the file system and also that you can write to it.
>
> **[0:26](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=26)** To satisfy the requirements of the challenge, you'll need to implement the File Metadata trait for the path type defined in the standard path module.
>
> **[0:37](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=37)** The File Metadata trait has three methods: Exists returns True or False, depending on whether or not the path actually exists on the file system already.
>
> **[0:49](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=49)** is_writeable returns True when the user who is executing the code has the right permissions to that file, otherwise it returns False.
>
> **[1:01](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=61)** is_readable is very similar to is_writeable but it relates to the read permission.
>
> **[1:07](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=67)** Pause the video now and work on your solution.
>
> **[1:10](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=70)** There are many ways to complete this challenge.
>
> **[1:12](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=72)** You'll see one or two of the options available to you in the next half of the video when I demonstrate how I've solved it.
>
> **[1:20](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=80)** (upbeat chiptune music) Hi, welcome to Challenge 12.
>
> **[1:27](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=87)** This challenge involves implementing a trait for a type that exists somewhere else.
>
> **[1:37](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=97)** And so the somewhere else is the standard path module and we want implement this trait File Metadata for that foreign type.
>
> **[1:50](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=110)** To do so, we have three methods: exists, is_writeable, and is_readable.
>
> **[1:55](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=115)** To proceed here, we need a little bit of machinery from somewhere else in the standard library.
>
> **[2:02](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=122)** So if we Import standard fs, fs standing for file system, we should be able to make a little bit of progress.
>
> **[2:17](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=137)** Let's do the easy method first: is_readable.
>
> **[2:23](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=143)** Okay, so if I am a path and self here is a path, it's an an instance of this path type from the standard path module in the standard library, then we can open it as a file.
>
> **[2:48](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=168)** So we have fs::file::open and we'll give it (self), and if this succeeds, it returns a result.
>
> **[2:56](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=176)** And if the result is okay, then our path is readable.
>
> **[3:02](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=182)** That's great! (laughs) is_writeable, though, is a little bit more complicated.
>
> **[3:08](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=188)** We need to actually go and check permissions and so forth.
>
> **[3:12](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=192)** The file system module provides a function, Metadata, that takes a path again, and also returns a result.
>
> **[3:22](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=202)** And inside the result is this metadata object.
>
> **[3:27](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=207)** Meta, uh, results can be mapped over, and so if I, m is a metadata object, it has a permissions method,
>
> **[3:44](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=224)** and if the permissions are read only then it's readable.
>
> **[3:52](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=232)** If we say, if it's not read only, then it will tell us whether or not it was writeable and we'll just default to False.
>
> **[4:06](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=246)** So if we receive an error, we will say that the path is not writeable.
>
> **[4:16](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=256)** Now, exists is interesting because we don't actually require help from the file system module.
>
> **[4:23](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=263)** We can actually call a method from path again.
>
> **[4:30](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=270)** Path actually has an exist method, and so we can just dispatch to that method ourselves.
>
> **[4:38](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=278)** There we are, our trait is implemented.
>
> **[4:41](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=281)** I'll save my file and we'll run the code with cargo test and our test passed.
>
> **[4:50](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=290)** Congratulations, I hope you've enjoyed the challenge.
>
> **[4:52](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=292)** I'll see you in the next one.
>
> **[4:53](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=293)** Bye-bye.

> [!info]- Semantic Content
>
> **Code Keywords:** module (5), self (2), else. (1), type. (1), let (1)
> **Code Identifiers:** is_writeable (4), is_readable (3)
> **CLI Commands:** make (2), cargo (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the next (2)
> **Non-Speech:** (upbeat chiptune music) (2)
> **Analogies:** similar to (1)
> **Prerequisites:** you'll need (1)

#### Interpret an RGB hex color
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=3)** - Some of the first programming I ever did involved the web and searching for color codes that I would enter into my CSS files and I would have no idea how what I typed in became the color blue.
>
> **[0:22](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=22)** Let's teach my 11-year old self what those color codes actually are.
>
> **[0:28](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=28)** Welcome to challenge 13, RGB hex color code.
>
> **[0:33](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=33)** In this challenge, we need to parse a string that encodes a color, such as #AE42F0, and convert that to a rust type.
>
> **[0:45](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=45)** To complete the challenge, you'll need to satisfy three requirements.
>
> **[0:50](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=50)** First, design a data structure RGB.
>
> **[0:53](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=53)** It can have any representation that you want.
>
> **[0:58](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=58)** It just needs to be able to represent red, green, and blue.
>
> **[1:02](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=62)** You need to implement the RGB channels trait.
>
> **[1:06](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=66)** It's defined within the sample code.
>
> **[1:09](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=69)** You'll also need to implement the FromStr trait for RGB that is defined in the standard Str module.
>
> **[1:18](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=78)** Implementing FromStr will require you to design an error type as well.
>
> **[1:23](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=83)** Let's spend a short moment going over what color codes are.
>
> **[1:28](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=88)** Each of the four boxes contains a color that is represented by the hex codes next to them.
>
> **[1:35](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=95)** If you've done anything on the web, you would've seen them.
>
> **[1:37](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=97)** In fact, I would be surprised if anyone coming to this course hasn't seen them before.
>
> **[1:43](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=103)** So what are they?
>
> **[1:44](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=104)** They're actually three pairs of hexadecimal numbers.
>
> **[1:48](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=108)** Color codes use hexadecimal rather than decimal.
>
> **[1:52](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=112)** That is, whereas decimal numbers are base 10, that is, they contain the digits zero through nine, hexadecimal numbers use base 16.
>
> **[2:03](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=123)** Their digits go from zero to F.
>
> **[2:08](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=128)** Allow me to show you what the significance of choosing 16 over 10 is.
>
> **[2:14](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=134)** Let's consider how many numbers we could represent if we only had a single digit.
>
> **[2:19](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=139)** We could represent zero through nine.
>
> **[2:22](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=142)** If we had two digits available to us, we can represent 99 and then we get to 999 and then 9,999.
>
> **[2:35](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=155)** You can see that as we increase the number of digits, we increase the orders of magnitude of numbers that we can actually represent.
>
> **[2:45](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=165)** The hexadecimal numbers for the same values start off exactly the same but immediately they become very strange.
>
> **[2:56](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=176)** 64 in hexadecimal actually represents the decimal number 100.
>
> **[3:01](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=181)** The number 3E8 represents the decimal 1000.
>
> **[3:06](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=186)** Conventionally, to distinguish between the two bases, programmers use the 0x prefix in their text, which is what we'll do here.
>
> **[3:18](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=198)** Now what happens if we swap the decimal numbers through to the hexadecimal side?
>
> **[3:25](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=205)** We'll put the 0x back on there.
>
> **[3:28](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=208)** Start with one again.
>
> **[3:30](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=210)** Decimal 16, 256, and 4096.
>
> **[3:37](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=217)** The orders of magnitude for hexadecimal numbers are much different than the base 10 equivalent.
>
> **[3:44](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=224)** With one hex decimal digit, we can represent the numbers 0 through 15, then up to 255 with two.
>
> **[3:51](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=231)** With three digits available to us, we can represent over 4,000 numbers.
>
> **[3:55](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=235)** And with four, we can reach over 60,000.
>
> **[3:59](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=239)** I mentioned before that hex color codes are made up of three pairs of two digit numbers.
>
> **[4:06](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=246)** Therefore, each of those two digit numbers can represent the numbers between 0 and 255.
>
> **[4:15](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=255)** Let's flesh that out in some more detail.
>
> **[4:18](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=258)** The first thing to note is that there are three color channels being represented in here, red, green, and blue.
>
> **[4:27](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=267)** So where are they?
>
> **[4:29](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=269)** The red channel is on the left, the green channel is in the middle, and the blue channel is on the right.
>
> **[4:36](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=276)** So if we pull those pairs out, there are the hex numbers that we need to interpret.
>
> **[4:42](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=282)** So let's convert those to decimal.
>
> **[4:45](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=285)** These values actually represent percentages.
>
> **[4:48](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=288)** 255 would be 100%.
>
> **[4:51](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=291)** And so this particular color is made up of 95% red, 68% green, and 21% blue.
>
> **[5:02](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=302)** Pause the video and implement the solution.
>
> **[5:06](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=306)** I'm sure you're going to have lots of fun implementing this and I am excited to see what you get up to.
>
> **[5:11](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=311)** You'll be able to see what I got up to in the next part of the video.
>
> **[5:20](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=320)** Now we'll be able to say give us some more specific information.
>
> **[5:24](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=324)** So for example, we may wish to say that red channel out of bounds
>
> **[5:35](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=335)** and then we could do the same for green and blue.
>
> **[5:46](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=346)** Now we can use those in here.
>
> **[5:50](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=350)** So on line 46, if we will go from left to right and try and say FromStr and then we want to be able to parse part of the input text.
>
> **[6:09](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=369)** And so I'll take a reference to text.
>
> **[6:14](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=374)** It's actually hex cause we're inside the scope and we want to go from the zeroth to two.
>
> **[6:21](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=381)** We'll take a slice and we'll use the 16 radix because we have hexadecimal numbers.
>
> **[6:47](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=407)** So the red channel is here.
>
> **[6:51](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=411)** This one actually returns a result so we can get rid of the result by
>
> **[7:09](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=429)** converting it to our own error.
>
> **[7:11](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=431)** We can get rid of the generic problem.
>
> **[7:16](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=436)** So what I mean by generic problem is that FromStr radix or radix will return some error type or some error code but that's not very specific for anyone interpreting or reading.
>
> **[7:34](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=454)** That's not very specific for anyone that's actually interpreting the error.
>
> **[7:38](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=458)** We can provide our more specific error code or error message with this or else follow on method.
>
> **[7:55](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=475)** The question mark at the end will attempt to apply the conversion to this FromStr with... The question mark at the end will attempt to apply the conversion and return the result and if the result isn't an error, will carry on.
>
> **[8:18](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=498)** Otherwise our method will actually just abort right there.
>
> **[8:27](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=507)** So after red we have green.
>
> **[8:30](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=510)** So I'll just copy and paste some more code.
>
> **[8:34](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=514)** And the indices change.
>
> **[8:37](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=517)** So they're at two and four.
>
> **[8:43](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=523)** And this channel, the channel changes to green, and blue also changes, so B.
>
> **[8:54](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=534)** The index changes four to six and blue channel has become out of bounds.
>
> **[9:04](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=544)** We are now in the position where we can return a type and RGB should be close.
>
> **[9:24](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=564)** So if I clear the screen here and attempt to build, I get a couple of extra syntax warnings.
>
> **[9:35](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=575)** Cannot find, oh, this shouldn't be debug, it should be derive.
>
> **[9:44](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=584)** And the S isn't found.
>
> **[9:46](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=586)** Oh, I see.
>
> **[9:47](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=587)** So this is actually text.
>
> **[9:56](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=596)** The code builds and if we run the tests, they all pass.
>
> **[10:01](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=601)** Congratulations.
>
> **[10:02](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=602)** I hope that you've enjoyed watching the answers.
>
> **[10:05](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=605)** I'll see you on the next challenge.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), self (1), type. (1), module (1), require (1)
> **Env Vars:** rgb (5), css (1), ae42f0 (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** sample code (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - some (1)

#### Run-length encoding
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=0)** (video game music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=3)** - I absolutely love playing with data.
>
> **[0:06](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=6)** And this particular method we are going to touch on in this challenge is quite special.
>
> **[0:11](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=11)** It's been around for a long time and is used to encode Conway's Game of Life patterns.
>
> **[0:18](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=18)** Ever seen Conway's Game of life on the screen?
>
> **[0:23](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=23)** Its chances are that it was saved to disk using this method called Run-Length Encoding.
>
> **[0:29](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=29)** Our challenge is to encode and decode a String using run-length encoding.
>
> **[0:35](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=35)** There are two requirements for this challenge, being able to encode a String to its run-length encoding form and to take that form and to turn it back into the original String.
>
> **[0:46](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=46)** For any input running the encode step and then the decode step should result in the original String.
>
> **[0:54](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=54)** For people who really enjoy cranking the dial on the difficulty here are two extra challenges.
>
> **[1:01](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=61)** I challenge you to deal with long runs.
>
> **[1:04](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=64)** That is you need to implement a system or an algorithm that handles the same character that occurs more than nine times in a row.
>
> **[1:14](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=74)** This will actually pose a challenge with a naive decoding step.
>
> **[1:20](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=80)** The second challenge is to be able to accept arbitrary byte streams.
>
> **[1:25](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=85)** Rust strings are guaranteed to be UTF-8.
>
> **[1:29](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=89)** That means that it must be printable text.
>
> **[1:33](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=93)** To take this challenge further, you should design an algorithm that allows any input bites to be encoded whether or not they valid UTF-8 or not.
>
> **[1:43](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=103)** Now let's take a quick look at how the algorithm works.
>
> **[1:48](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=108)** As we pass through the input String the number of times that the character appears is printed before the character.
>
> **[1:57](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=117)** The input string LinkedIn doesn't have any repetition in there.
>
> **[2:01](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=121)** So, every character is prefixed with the number one.
>
> **[2:06](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=126)** On the other hand, our example String below starts with five uppercase letter A's.
>
> **[2:13](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=133)** So that is represented as 5A.
>
> **[2:17](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=137)** Then the lower case A is 1A the final two uppercase A's are encoded as 2A.
>
> **[2:25](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=145)** Now is the time for you to pause the video and implement run-length encoding.
>
> **[2:31](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=151)** In the second half of the video you'll see how I've been able to implement it.
>
> **[2:35](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=155)** (video game music) Hi, welcome to the answer section of the run-length encoding challenge.
>
> **[2:47](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=167)** I hope you've enjoyed working through this one.
>
> **[2:51](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=171)** It can, be solved in many ways and I'll be interested.
>
> **[2:57](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=177)** I'd be, it could be solved in many ways and I'm really interested in looking through some of your solutions.
>
> **[3:06](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=186)** Okay, over to main.rs we have a module run-length encoding with two to do macros waiting for us.
>
> **[3:18](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=198)** Let's go and fill them out.
>
> **[3:22](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=202)** Okay, so we start, let's start by encoding text.
>
> **[3:25](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=205)** So this would take a string such as LinkedIn and then provide a run-length encoded,
>
> **[3:38](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=218)** it would provide a String like LinkedIn and provide a, the run-length encoded value as its output.
>
> **[3:48](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=228)** As you can see here, ABC up in line 19 is converted to 1A, 1B, 1C.
>
> **[3:54](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=234)** Let's carry on.
>
> **[3:56](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=236)** Okay, I first need to start with a few mutable variables and I'll call one count, which will be the count of, the number of, letters that I've gone through when I want to, I keep a track of the last
>
> **[4:27](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=267)** character that I visited or that I saw.
>
> **[4:32](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=272)** And, (keys typing) I will create a String that has the capacity of let's say the input text.
>
> **[4:51](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=291)** Hopefully it's shorter than the input text, but we'll just leave it for there and we'll create an, we'll just, we also need to kind of keep track of the characters and so I will, or at least the iterator over the characters.
>
> **[5:14](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=314)** And so I'll have that as an independent variable that I will be able to manipulate, excuse me, that I'll be able to manipulate as we go through.
>
> **[5:25](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=325)** Okay, so while that will continue to loop until, the condition no longer holds and our condition will be the characters' variables has a next method.
>
> **[5:43](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=343)** And if that doesn't return some the loop will terminate.
>
> **[5:49](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=349)** (keys typing) If previous is none, (keys typing) assign previous to be (keys typing) oh gosh.
>
> **[6:10](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=370)** If previous is none assign previous to be the sum of C.
>
> **[6:15](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=375)** What that is saying is that we are essentially filling in the value.
>
> **[6:21](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=381)** And this will probably only happen once.
>
> **[6:26](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=386)** If previous unwrap, so we know now at line 13 that previous must be Some, it's no longer None.
>
> **[6:35](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=395)** So we can safely unwrap.
>
> **[6:40](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=400)** If the previous value doesn't equal C or if the count equals nine, then I need to push a new String into encoded.
>
> **[6:57](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=417)** The reason why I'm stopping at nine is because I don't want to have to deal with multi character digits because I don't want to distinguish between the input numbers having, I don't want to distinguish between the actual text itself having a number and the number in my encoding.
>
> **[7:22](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=442)** (keys typing) So push String and I'm going to take a, at least I'll do it in a way that makes, makes sense at first.
>
> **[7:37](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=457)** I'm going to create a String with format.
>
> **[7:43](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=463)** I'll do them in two steps so, (keys typing) I'll create a variable new fragment that is a String.
>
> **[7:55](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=475)** The format maker creates a String for us and that will be a count, and the current or the previous character.
>
> **[8:11](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=491)** And then to push_str I need to actually take a reference to new fragment.
>
> **[8:19](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=499)** At this point, I now need to reset count.
>
> **[8:25](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=505)** (keys typing) Ah.
>
> **[8:35](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=515)** I was reading over my answer and I've seen a lot I have done.
>
> **[8:43](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=523)** Okay, so this makes a little bit more sense.
>
> **[8:46](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=526)** We'll leave that for later.
>
> **[8:47](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=527)** Up here in my while loop, I now need to reassign previous to be the current character.
>
> **[8:56](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=536)** And the other thing I need to do is increment count.
>
> **[9:00](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=540)** So, at the end of line 21 we've gone through the entire input String but it's possible that previous still has a value.
>
> **[9:11](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=551)** And, the last step, or this last section between lines 23 and 26 will guard against that are not being counted.
>
> **[9:28](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=568)** Okay, so this should be my encode steps done.
>
> **[9:32](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=572)** I'm just going to try and test the code there to see if I've, so I've got two new passes that's useful but the roundtrip has failed.
>
> **[9:42](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=582)** This is saying that I can't the roundtrip test will check that I can both encode and decode that has failed, which makes sense because decode has not yet been implemented.
>
> **[9:58](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=598)** Okay.
>
> **[10:01](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=601)** (keys typing) So to decode a String, or our text we'll create another String and this will have, the capacity of text.len.
>
> **[10:21](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=621)** And the reason why we take the with capacity is it will reduce the number of memory allocations later on.
>
> **[10:30](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=630)** It's possible to be more precise by taking a more accurate guess of how compressed the String will end up but keeping the, or allocating the same number will be, it's fine, for the purposes of this example.
>
> **[10:51](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=651)** The line 32 we create our char or our char or char variable which is an iterator over the text.
>
> **[11:03](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=663)** Now we have another while let loop and this one's slightly more, well slightly more complex.
>
> **[11:11](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=671)** We have a sort of, a different pattern where we are pulling out a number and a character.
>
> **[11:24](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=684)** If you recall I, made it impossible to encode or have any of the number, the counts being multiple digits.
>
> **[11:43](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=703)** And so we cap it at nine, which means that I can guarantee that N will always be one character wide and therefore Some is always going to be the character that the N is representing.
>
> **[12:00](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=720)** Now we just need to do a tiny bit of a conversion to convert in to a digit and I'll, it's base 10 and I'll unwrap that because I'll assume that I never have an illegal encoding
>
> **[12:20](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=740)** and then I need to push two encoded the character of that C represents for N times.
>
> **[12:39](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=759)** Towards the end or at the end I then return decoded if I save there, clear the screen and rerun the tests.
>
> **[12:49](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=769)** I have a couple of mistakes to fix
>
> **[12:59](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=779)** but everything goes okay, so well done.
>
> **[13:01](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=781)** If you have got yourself through that challenge I know that it can be a little bit complicated.
>
> **[13:08](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=788)** You're doing really well.
>
> **[13:09](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=789)** We only have a couple to go, so we are nearly there.
>
> **[13:12](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=792)** Well done. Bye-bye.

> [!info]- Semantic Content
>
> **Non-Speech:** (keys typing) (8), (video game music) (2)
> **Code Keywords:** let (6), pass (1), module (1), continue (1)
> **Definitions:** means that (2), is a  (1), is an  (1)
> **Env Vars:** utf (2), abc (1)
> **File Paths:** main.rs (1)
> **Code Identifiers:** push_str (1)
> **Analogies:** such as (1)
> **Speakers:** - i (1)

#### Handle inconsistent dates
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=0)** (retro video game sound effects)
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=4)** - [Instructor] Welcome to Rust Code Challenge 15, flexible date parsing.
>
> **[0:08](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=8)** If you've ever encountered free text date entry this challenge is for you.
>
> **[0:16](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=16)** We are going to be creating a function that can correctly parse multiple date formats.
>
> **[0:25](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=25)** The requirements for the challenge are to have a flexible parser that can parse dates from the following patterns.
>
> **[0:33](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=33)** We have a combination of years being either at the start or the end.
>
> **[0:38](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=38)** Delimiters could either be spaces, dashes, dots, or slashes.
>
> **[0:43](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=43)** And we also want to be able to enable the American style of using a month to start and then the day, as well as the international style of a date first followed by a month.
>
> **[0:59](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=59)** If you would like an extra challenge, you can include or invent more formats than you've ever seen.
>
> **[1:06](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=66)** You could add locales, so instead of just using the English words for the months, you could include more languages.
>
> **[1:15](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=75)** You could add some more sophisticated heuristics for handling ambiguous cases.
>
> **[1:21](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=81)** Jump into the sample code for the challenge and try to implement the parsing function.
>
> **[1:27](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=87)** In the rest of the video you'll see how I've implemented it.
>
> **[1:31](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=91)** Good luck.
>
> **[1:33](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=93)** (retro video game music) Welcome to the answer section.
>
> **[1:39](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=99)** I hope that you have enjoyed working through this challenge.
>
> **[1:44](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=104)** Working with messy data is always particularly annoying so let's hope that we can work on solving this kind of problem with Rust.
>
> **[2:03](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=123)** Our first step is actually going to be to create a helper function and I want to create a function that is going to tell me whether or not a string, and I'll just call it text, and give it type string slice, is a year or represents a year.
>
> **[2:28](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=148)** And so to do so, I will say that if my text has length of four, and, if, sorry, text characters, if they're all ascii digits, then I will assume that the text actually a represents a year.
>
> **[3:07](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=187)** Now this isn't a particular, potentially, the the best way, because I could put in 9999, and maybe that is a year, possibly, probably it's not.
>
> **[3:23](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=203)** Anyway, (laughs) that will get us through what we need for this challenge.
>
> **[3:30](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=210)** Okay, so let's start with our flexible date parser.
>
> **[3:34](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=214)** And our first step will be to trim any white space.
>
> **[3:38](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=218)** And so if I have any white space there, I can take the trim method and that will clear it all up for me.
>
> **[3:54](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=234)** If there are no numbers in my string, then there is no reason to proceed.
>
> **[4:00](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=240)** So if text, and I checked, I used the characters method before, so I might as well use it again, and if any of them is an ascii digit or at least if none of them, so we'll say the inverse, then I can return none straightaway, there is no date in here.
>
> **[4:33](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=273)** Now I've presumably, if I've got a date, and here are some formats between lines 21 and 25.
>
> **[4:42](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=282)** They're all, they have some sort of delimiter and so therefore I need to split my text up using these delimiters.
>
> **[4:52](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=292)** So, how should I do so?
>
> **[4:55](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=295)** Well, one way would be to create a variable called fields and I will split the text and give it a set of patterns.
>
> **[5:08](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=308)** So one would be slash, and I will take a hyphen, a dot there, or even a space, and I will set this array, we want as a slice, so that it can be used into a split.
>
> **[5:34](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=334)** And then we need to collect.
>
> **[5:38](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=338)** This split method will return iterable, and collect will take the iterable and return it into a single type or a single collection.
>
> **[5:50](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=350)** And we are going to collect into a vector.
>
> **[5:55](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=355)** The underscore between the type or in the position of a type variable just tells Rust that it is free to choose the type itself.
>
> **[6:11](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=371)** Now for every field in &fields, if, we now need to start parsing these and interpreting what we've got, actually I'll start off by saying that, do I have a year or not at first?
>
> **[6:32](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=392)** Do I have a month?
>
> **[6:38](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=398)** Not yet.
>
> **[6:40](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=400)** And do I have a day?
>
> **[6:41](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=401)** Well, hopefully soon.
>
> **[6:45](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=405)** If field length is less than three, there's nothing to do, so we shall skip that.
>
> **[6:57](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=417)** Turns out that what we are trying to hunt for first is the month.
>
> **[7:08](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=428)** The way we'll look for it is if,
>
> **[7:16](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=436)** we will match on the lowercase value of field and, we'll actually only match on the first three letters.
>
> **[7:31](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=451)** And if you'll excuse me, I'm just going to copy and paste.
>
> **[7:42](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=462)** A few month names that you've probably seen before.
>
> **[7:46](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=466)** (laughs) And if we haven't seen if we find something else, we'll just continue.
>
> **[7:52](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=472)** There's nothing to do here.
>
> **[7:53](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=473)** We haven't found a month, but if we have found a month, then we've got some work to do.
>
> **[8:07](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=487)** We can't directly use the variable name month, by the way, because month is an option.
>
> **[8:18](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=498)** We actually need to assign it later.
>
> **[8:21](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=501)** So month becomes Some of m.
>
> **[8:29](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=509)** Now that we hopefully have a month field we can try to distinguish between the year and the day of the month and potentially we might also even be able to find months as numeric values.
>
> **[8:51](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=531)** So we're going to loop over the fields again and if the field is a year, then, my year variable, we can parse it as an i32
>
> **[9:28](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=568)** and then convert the result into an option with the ok method of result.
>
> **[9:35](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=575)** And we are done with that field, so we can continue.
>
> **[9:39](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=579)** If it's not a year, we've got to distinguish about whether or not we have found a month or have we found the day.
>
> **[9:49](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=589)** So if we already have the month,
>
> **[9:58](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=598)** then we assume that,
>
> **[10:11](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=611)** if we already have the month, then we assume that we are dealing with the day of the month.
>
> **[10:15](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=615)** And if we don't, then we assume that we are dealing with the month number as is.
>
> **[10:23](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=623)** So (laughs) let me, I was going to avoid some duplicate effort.
>
> **[10:32](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=632)** I just am going to copy this from line 50.
>
> **[10:42](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=642)** We assume, by the way, that there should be no negative numbers, so we'll just turn that
>
> **[10:56](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=656)** to a u32.
>
> **[11:00](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=660)** I'll ignore that for now.
>
> **[11:02](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=662)** I wanted to do this just once, but, let's not worry.
>
> **[11:12](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=672)** Then we've dealt with month, day, day, month, and hopefully year.
>
> **[11:23](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=683)** And now our question is, okay, so, given that we have some, potentially most, hopefully all of these three variables, a year, month, and day, what can we create from them in terms of an actual Rust type?
>
> **[11:57](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=717)** So there's some work to do over here.
>
> **[12:00](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=720)** First I've got the case to deal with where I've got a year and a month, but no day.
>
> **[12:05](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=725)** And I also have the case where I have all three.
>
> **[12:15](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=735)** And I currently don't deal with having, say, just the year.
>
> **[12:23](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=743)** So down the bottom I have, there's nothing to do, but up the top, there are two cases in which I am actually able to get something done.
>
> **[12:34](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=754)** If we look at the import that's provided, it's this NaiveDate thing.
>
> **[12:39](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=759)** NaiveDate has a constructor from year, month, day, and then optional.
>
> **[12:53](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=773)** And then it's year, month and then I will provide one as the default.
>
> **[13:05](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=785)** And otherwise,
>
> **[13:14](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=794)** I will use d in the next row, on next line.
>
> **[13:24](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=804)** Hopefully this will happily compile.
>
> **[13:36](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=816)** Okay, after taking a little bit of time, because we had to compile a dependency, we need to double check a few things.
>
> **[14:02](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=842)** It looks like I've got a few semicolons in the wrong place.
>
> **[14:08](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=848)** Let's start with up the top.
>
> **[14:16](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=856)** So the first thing that I will need to do is fix this borrow.
>
> **[14:23](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=863)** Let's see.
>
> **[14:25](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=865)** And the other thing that I want to do is that I have expected a unit, but I've found an option.
>
> **[14:50](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=890)** That is because, I think that this is actually part of a loop that I shouldn't have had in the position it was, because there's no point in attempting to return the value (laughs) from inside this loop here.
>
> **[15:14](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=914)** So I'm going to try and fix this.
>
> **[15:19](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=919)** If you are also seeing these deprecated warnings, don't worry, they won't affect your code.
>
> **[15:28](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=928)** Okay, with that, we have reached the end of the answers.
>
> **[15:32](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=932)** Again, I hope that you have enjoyed the challenge and I'm looking forward to seeing your answers.
>
> **[15:39](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=939)** See you on the remaining challenges.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6), function (4), if, (3), continue (2), else, (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (2)
> **Non-Speech:** (retro video game sound effects) (1), (retro video game music) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### Travel planner
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=0)** (lively chiptune music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=3)** - [Instructor] One of the most challenging elements of Rust is data access.
>
> **[0:08](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=8)** This challenge is really going to test our ability to mutate and share data in different parts of the program.
>
> **[0:15](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=15)** Welcome to Challenge 16, find a way home.
>
> **[0:18](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=18)** In this challenge, we'll try to find the shortest path between any two points in a network.
>
> **[0:26](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=26)** Our requirements are to implement shortest path.
>
> **[0:31](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=31)** You can implement any algorithm you want, but do use the graph data type that has been defined within the sample code.
>
> **[0:38](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=38)** Your implementation should be fast.
>
> **[0:41](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=41)** You should be able to search a network of around 10,000 nodes and 40,000 edges, that is a link from one node to another, within a second.
>
> **[0:52](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=52)** Here is a bit of a visual overview of what I mean by network and searching.
>
> **[1:00](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=60)** In front of us, we have a set of dots which might represent places that we could visit.
>
> **[1:06](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=66)** We start in the top left, and we want to find a path to the bottom right.
>
> **[1:11](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=71)** And visually we make a connection that looks like this.
>
> **[1:16](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=76)** Our brains naturally understand spatial information.
>
> **[1:20](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=80)** When they see a grid, they're going to make connections, will automatically try and figure the fastest way through.
>
> **[1:28](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=88)** But what if we don't know the nodes, and we don't know the shape of the grid, or how far away any of the points are?
>
> **[1:40](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=100)** Or instead of it being a regular grid, what if the path was completely random, and we could only detect how far away the next node is by visiting one?
>
> **[1:51](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=111)** While that's the problem we're faced with here, we need to walk through our maze and uncover the fastest way through it.
>
> **[2:00](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=120)** I did mention the graph data type earlier.
>
> **[2:04](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=124)** This is what it looks like.
>
> **[2:06](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=126)** If you are familiar with graph theory this is an adjacency matrix representation.
>
> **[2:12](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=132)** I have two type aliases, node and cost.
>
> **[2:16](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=136)** They are both unsigned integers.
>
> **[2:18](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=138)** There are two fields available, an edges field that maps from a specific node, to every node that it is connected to, along with an associated cost of travel to that node.
>
> **[2:30](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=150)** And there's also a set of all nodes in the graph, in case that's useful to you.
>
> **[2:39](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=159)** Okay, I'm looking forward to seeing how you implement this.
>
> **[2:43](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=163)** There are lots of choices available to you, and I think you're going to have a lot of fun implementing graph search in Rust.
>
> **[2:53](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=173)** In the next part of the video, you'll see how I've implemented it.
>
> **[2:57](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=177)** (lively chiptune music) So step is a structure.
>
> **[3:07](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=187)** Or at least it is in my... The cost of our next step is a cost, and we have the position where we are now as a node.
>
> **[3:26](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=206)** And then we have our history, was just where we came from.
>
> **[3:39](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=219)** By the way, I trailed off there when I was describing step.
>
> **[3:43](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=223)** (laughs) It is in my implementation, is what I meant to say, or in my answer.
>
> **[3:49](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=229)** And I want to derive a couple of things just to make life easier for myself.
>
> **[3:54](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=234)** I want to be able to clone my steps as well as implement, do a quality testing as well, so I've derived EQ, short for equality, as well as partial EQ.
>
> **[4:10](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=250)** Now I want to implement just a couple of methods.
>
> **[4:16](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=256)** In fact, maybe just one or two.
>
> **[4:22](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=262)** So I'll just implement, I'll create an impl block for step.
>
> **[4:33](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=273)** From some position as a cost.
>
> **[4:38](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=278)** And then history, as back of node.
>
> **[4:46](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=286)** And then I return self with a capital S.
>
> **[4:51](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=291)** And I think I can just copy that from here.
>
> **[4:56](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=296)** And... Oops.
>
> **[5:10](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=310)** Remove types, they're not required.
>
> **[5:18](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=318)** And the other method that I want is the from start that I created.
>
> **[5:25](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=325)** From start is different, because it doesn't have a history.
>
> **[5:29](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=329)** And so, I can potentially...
>
> **[5:37](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=337)** And it also doesn't even have a cost as well, it just has a starting position.
>
> **[5:48](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=348)** Now, one way to do this would be to kind of make use of our constructor
>
> **[6:00](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=360)** that we just created.
>
> **[6:07](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=367)** And we should rename this so that it is actually representing what we want.
>
> **[6:15](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=375)** Okay, so now we have the step from start method.
>
> **[6:20](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=380)** And we have one item in our priority queue.
>
> **[6:25](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=385)** We just have the rest of the graph to search from, so that's good.
>
> **[6:32](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=392)** We've got a big while loop.
>
> **[6:34](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=394)** While let some step.
>
> **[6:41](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=401)** And we'll break out the costs.
>
> **[6:45](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=405)** Position, and we'll be able to adjust history, because we want to be able to add things to it.
>
> **[6:56](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=416)** Priority queue dot pop, so we're going to pop the cheapest path from the queue.
>
> **[7:10](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=430)** The whole point of the priority queue is that we'll automatically re-rank items as their costs change.
>
> **[7:20](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=440)** If position equals the goal, we are done.
>
> **[7:27](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=447)** We need to add the goal position or the destination to the thing, to our history, and then we return.
>
> **[7:40](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=460)** We have found a path, so we will turn history as well as cost.
>
> **[7:47](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=467)** And we're finished.
>
> **[7:49](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=469)** If we are not finished, then (chuckles) we've got to do some searching.
>
> **[7:56](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=476)** Okay, so, if let some destinations.
>
> **[8:05](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=485)** And I'll use plural there.
>
> **[8:07](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=487)** And I'll go check.
>
> **[8:08](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=488)** So G edges, get.
>
> **[8:14](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=494)** Oh by the way, the graph data structure has an edges field, which is providing the get method.
>
> **[8:25](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=505)** And I want to get the position that I'm currently in now.
>
> **[8:32](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=512)** Get takes a reference to the thing that I am looking for.
>
> **[8:36](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=516)** And for...
>
> **[8:47](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=527)** Next destination, and next cost.
>
> **[8:54](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=534)** In destinations.
>
> **[9:02](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=542)** If the next cost is less than the cost
>
> **[9:12](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=552)** that I've already assigned to that node, then.
>
> **[9:18](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=558)** No actually, I'll... And by the way, I've got a destination for all the nodes in the graph, I just have given them there this max value.
>
> **[9:32](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=572)** Then I could put in a new step.
>
> **[9:45](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=585)** Now, the step has the next position.
>
> **[9:50](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=590)** The current cost plus the cost to get to there, that next position, and then a clone of the history.
>
> **[10:09](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=609)** We add ourselves to the history of the next, and then we add to the priority queue.
>
> **[10:21](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=621)** Oh sorry, we add next to the priority queue with the push method.
>
> **[10:27](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=627)** What this is doing is, if we've found a cheaper way to get to a given destination, add it to the queue.
>
> **[10:43](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=643)** So this priority queue thing, which is defined up in line 60, is actually, it's acting as a sort of a search.
>
> **[10:55](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=655)** Well, it's a search queue, that's keeping the closest nodes at the top.
>
> **[11:18](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=678)** We now need to update old cost to its new value that we have discovered.
>
> **[11:29](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=689)** If we get all the way through the graph, and we haven't found our goal, sadly, we then return none.
>
> **[11:50](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=710)** Oh, we've got a couple of compile errors, and...
>
> **[12:04](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=724)** Let's fix those up, so we need to derive ord as well as partial ord.
>
> **[12:10](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=730)** Which means that the type is able to be compared.
>
> **[12:23](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=743)** Okay, the code now builds, that's useful, and I will run cargo test.
>
> **[12:37](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=757)** Ooh, we've got one failure.
>
> **[12:45](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=765)** Okay, so I've just done a little bit of digging, (chuckles) to figure out what the problem was.
>
> **[12:52](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=772)** And it turns out that I was a little bit quick on my just implementing ord and partial ord.
>
> **[13:02](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=782)** Steps are not being... We need to define more precisely what we mean by two steps to be compared with each other.
>
> **[13:13](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=793)** So if I implement ord for step, I'll need to do it manually, rather than just using the derive macro itself.
>
> **[13:29](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=809)** Okay, so one way to cheat if you don't remember the code that you need to implement is to ask the compiler by trying to compile it yourself.
>
> **[13:42](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=822)** And, oh, it's doing something a little bit different than I expected it would.
>
> **[13:50](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=830)** So, let's just implement CMP.
>
> **[13:54](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=834)** And take a reference to myself and the other thing that I'm comparing to, which is a reference to some object that has the same type, which is annotated, which is described as capital S self.
>
> **[14:10](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=850)** I return something called an ordering, which is an enum that has a greater than, an equals, and a less than variant.
>
> **[14:20](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=860)** And so... The first thing that I do is I'm really comparing the cost, with my cost.
>
> **[14:35](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=875)** And then, if the costs are equal, I then compare position.
>
> **[14:52](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=892)** The partial ord trait is analogous
>
> **[15:04](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=904)** to the partial equality trait, it exists for floating point numbers, where there are some values in the type that cannot be compared with other values, or that are mathematically undefined.
>
> **[15:17](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=917)** And so, we can just defer to, it's exactly the same, except that it returns an option of ordering, so we can actually just defer to our comparison method.
>
> **[15:37](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=937)** That we've just defined.
>
> **[15:41](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=941)** Okay.
>
> **[15:45](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=945)** Hopefully the code should build.
>
> **[15:49](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=949)** And here is the thing that I need to pull in, from the standard comparison module.
>
> **[16:05](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=965)** Great, code now builds, and hopefully the tests pass.
>
> **[16:14](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=974)** (chuckles) Perfect, okay.
>
> **[16:17](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=977)** Phew, well done (chuckles).
>
> **[16:19](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=979)** That gave everyone a scare.
>
> **[16:21](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=981)** Okay, last challenge.
>
> **[16:23](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=983)** I shall see you very soon.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), this. (2), self (2), for. (2), from. (1)
> **CLI Commands:** node (9), make (4), find (3), cargo (1)
> **Definitions:** is a  (5), is an  (2), short for (1), means that (1)
> **Non-Speech:** (lively chiptune music) (2)
> **Env Vars:** cmp (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### Final challenge: Vigenère cipher
> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=0)** (retro music)
>
> **[0:11](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=11)** - [Narrator] When I was little, I was absolutely fascinated with hidden messages and I am extremely excited about this challenge because we get to work with a cipher that lasted for 300 years.
>
> **[0:25](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=25)** Welcome to challenge 17, decrypt cipher text.
>
> **[0:29](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=29)** In this challenge, we'll be implementing a vigenere cipher decoder.
>
> **[0:34](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=34)** That is a function that can decode or decrypt vigenere ciphers.
>
> **[0:40](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=40)** The requirements are to implement the vigenere decrypt function and decrypt the hidden message that's provided in the sample code with the key WHYRUST.
>
> **[0:51](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=51)** As a bit of a teaser, here is a hidden message.
>
> **[0:54](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=54)** Have a go at implementing the cipher now.
>
> **[0:57](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=57)** There are hundreds of tutorials, probably thousands all over the web and it's a really interesting exercise.
>
> **[1:05](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=65)** You'll see how I implemented it in the next segment.
>
> **[1:15](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=75)** Okay, now we need to decrypt a secret message.
>
> **[1:22](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=82)** The message has been decrypted using a vigenere cipher and it's our job to write up the decryption algorithm.
>
> **[1:34](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=94)** So we've got a module here, vigenere.
>
> **[1:41](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=101)** I suppose in some sense the encrypt method is optional because we really care about decrypting the cipher text on lines 14 through 16.
>
> **[1:54](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=114)** So allow me to start with a couple of constants and the alphabet that we will be encoding is an array of U8 integers.
>
> **[2:10](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=130)** So we'll just be using the len alphabet.
>
> **[2:15](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=135)** And to do so, I am going to.
>
> **[2:32](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=152)** You know what?
>
> **[2:33](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=153)** The easiest way to do this without making a mistake is to copy it across from here.
>
> **[2:44](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=164)** To make the syntax a little bit easier, I am also going to create a constant A or capital aa, which is a byte literal of the S key value for the capital letter A.
>
> **[3:01](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=181)** And I'm going to do the same for Z.
>
> **[3:07](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=187)** And I will wrap at 26, which happens to be, by the way, the alphabet len.
>
> **[3:26](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=206)** So I need a helper function, which will be clean input
>
> **[3:39](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=219)** and the clean input will take some text, which we'll call input.
>
> **[3:51](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=231)** And it will return an iterator of U8 values.
>
> **[3:59](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=239)** So, it will return an iterator of bytes.
>
> **[4:03](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=243)** Now the syntax here looks a little bit scary if you are less familiar with rust, but what this will do is, so the U8 here is a byte, and so all of these letters in the alphabet are bytes, and iterators also have a lifetime attached.
>
> **[4:23](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=263)** And we can use the anonymous lifetime to indicate that.
>
> **[4:33](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=273)** So we go over our input and ask for its bytes
>
> **[4:41](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=281)** and then we filter the bytes that we don't care about.
>
> **[4:47](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=287)** And the bytes we do not care about are, well anything that's not A to Z.
>
> **[4:57](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=297)** A to Z.
>
> **[5:10](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=310)** So if we see any lower case letters, we sort of need to remove or subtract the S key value of a.
>
> **[5:21](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=321)** It turns out that the way that the S key encoding works is that they're all about
>
> **[5:34](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=334)** 30 positions away from each other.
>
> **[5:38](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=338)** And so the lowercase letters are higher and you can perform the subtraction to basically replace the value with its uppercase equivalent.
>
> **[6:00](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=360)** Oh, and if we don't see anything that we understand, return none and then it will get filtered out.
>
> **[6:09](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=369)** Okay, so how do we decrypt our cipher text?
>
> **[6:15](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=375)** Well, the first thing we need to do is create a iterator over our key, I'll call it key-iter.
>
> **[6:27](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=387)** We have a string and or a string slice.
>
> **[6:30](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=390)** So we need out the bytes and we will map each byte from the key
>
> **[6:45](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=405)** and cycle.
>
> **[6:53](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=413)** And so key-iter will just continually operate forever.
>
> **[7:10](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=430)** We need to clean our cipher text up.
>
> **[7:17](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=437)** Cipher text, by the way, is now an iterator, so I can map over that and for every character X, I would like to perform the decryption steps.
>
> **[7:32](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=452)** And so to do so, I take the next value
>
> **[7:42](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=462)** from the iterator and unwrap because the next method
>
> **[7:50](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=470)** will return an option which we know will never return none given the cycle will continue forever.
>
> **[7:58](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=478)** And now we have a little bit of mathematics to do.
>
> **[8:27](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=507)** So the maths here are that we take the character X and then we adjust it by the lowest value in A, so we are now in a range between zero and 26, and then perform a modular operation.
>
> **[8:53](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=533)** And we should now have the decrypted value, as long as I have everything correct.
>
> **[9:19](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=559)** Now I should be able to execute main now.
>
> **[9:37](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=577)** Oh, I've got several errors to fix.
>
> **[9:41](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=581)** Perfect.
>
> **[9:43](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=583)** I shouldn't have expected it to compile it first go.
>
> **[9:49](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=589)** Saying it's an exclusive range, which is not what I want actually.
>
> **[9:54](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=594)** I need the equals symbol sign here as well to say that it is.
>
> **[10:14](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=614)** Another typo.
>
> **[10:17](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=617)** Aha, to empower everyone is the cipher text or is the clean text for WHYRUST.
>
> **[10:29](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=629)** And I hope that you have felt empowered through all of these challenges.
>
> **[10:33](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=633)** I'm very much looking forward to seeing your answers and I hope that you've learned a lot.
>
> **[10:41](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=641)** Please reach out if I can be of any assistance.
>
> **[10:44](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=644)** Thank you so much.
>
> **[10:45](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=645)** I hope you've had a wonderful time.
>
> **[10:47](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=647)** Bye-bye.

> [!info]- Semantic Content
>
> **Code Keywords:** function (3), module (1), continue (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** whyrust (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (retro music) (1)


## Path Context

### In [[Develop Your Rust Skills for Data Engineering]]
← [[Rust for Data Engineering]] | **5 of 6** | [[End-to-End Data Engineering Project]] →

## Appears In

- [[Develop Your Rust Skills for Data Engineering]]

## Related Courses

_Courses sharing skills:_

- [[Rust for Data Engineering]] — Rust (Programming Language)
- [[Rust Essential Training]] — Rust (Programming Language)

---

[↑ Back to top](#)