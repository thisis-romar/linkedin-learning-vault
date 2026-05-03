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
created: 2026-05-03
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Level%20Up-%20Rust.md)

![Level Up: Rust](https://media.licdn.com/dms/image/v2/C560DAQEOULbtwwYf8Q/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1677009134347?e=2147483647&amp;v=beta&amp;t=fBaGAv3TxwJps7ntffBoWITXx-bZIzbWCievVafHg_g)

# Level Up: Rust

> It’ll take time—and a whole lot of practice—to improve your Rust coding skills. It’s important to push yourself with new challenges, which is exactly what this course is for. Join author and instructor Tim McNamara as he takes you through a series of coding challenges, testing your ability to perform certain functions so you can reach the next level with Rust. Acquire new Rust skills with exercise

> [LinkedIn Learning](https://www.linkedin.com/learning/level-up-rust) | 2h 39m | Intermediate | 2K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- [**Introduction**](#introduction) (3 videos)
  - [Put Rust into practice](#put-rust-into-practice)
  - [What you need to get started](#what-you-need-to-get-started)
  - [Using GitHub Codespaces with this course](#using-github-codespaces-with-this-course)
- [**1. Rust Coding Challenges**](#1-rust-coding-challenges) (17 videos)
  - [Calculate the median](#calculate-the-median)
  - [Find unique items](#find-unique-items)
  - [Print any text type](#print-any-text-type)
  - [Case-insensitive sort](#case-insensitive-sort)
  - [Convert text to Morse code](#convert-text-to-morse-code)
  - [Value of a hand of cards](#value-of-a-hand-of-cards)
  - [Has a deadline been reached?](#has-a-deadline-been-reached)
  - [Convert between Celsius and Fahrenheit](#convert-between-celsius-and-fahrenheit)
  - [Sum a list of numbers with missing values](#sum-a-list-of-numbers-with-missing-values)
  - [Calculate the number of weeks between two dates](#calculate-the-number-of-weeks-between-two-dates)
  - [Validate an ISBN number](#validate-an-isbn-number)
  - [Check if a file exists](#check-if-a-file-exists)
  - [Interpret an RGB hex color](#interpret-an-rgb-hex-color)
  - [Run-length encoding](#run-length-encoding)
  - [Handle inconsistent dates](#handle-inconsistent-dates)
  - [Travel planner](#travel-planner)
  - [Final challenge: Vigenère cipher](#final-challenge-vigenre-cipher)

### Introduction

[↑ Back to Table of Contents](#table-of-contents)

#### [Put Rust into practice](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980)

> [!transcript]- Transcript
>
> **[0:01](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=1)** (upbeat electronic music)
>
> **[0:07](https://www.linkedin.com/learning/level-up-rust/put-rust-into-practice?u=76281980&t=7)** - [Tim] It seems that everyone in the technology industry is talking about the [[Rust (Programming Language)|Rust]] programming language. All of the major tech companies are deploying Rust or seem to be; [[Google]], [[Microsoft]], [[Facebook]], AWS. Learning Rust will enable you to reap the benefits of reliability and speed. Your programs will use less memory, and they'll be free of many of the severe security vulnerabilities that have been a plague for the industry for decades. Now, one of the most effective ways to learn is through deliberate practice and by deliberate practice, I mean not just that we are practicing regularly but also that as we develop our skills, we move to progressively more and more difficult challenges and that's what this course provides. I'm Tim McNamara, the author of one of the Rust community's most popular books. I'm passionate about helping others to learn more about this wonderful programming language with its inclusive and welcoming community ethos. The challenges in this course are designed to allow you to assess your current skill level and to push you to achieve your goals. Every challenge includes a detailed answer along with a thorough explanation; that way you're able to check your own knowledge as well as gain new skills as you progress your way through the course. Now, are you up for the challenge? Make your way through my [[LinkedIn]] learning course and we'll see.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (4), [[Google]] (1), [[Microsoft]] (1), [[Facebook]] (1), [[LinkedIn]] (1)
> **CLI Commands:** aws (1), make (1)
> **Env Vars:** aws (1)
> **Speakers:** - [tim] (1)
> **Non-Speech:** (upbeat electronic music) (1)

#### [What you need to get started](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=0)** - [Instructor] We have three steps to go through. The first is to install the [[Rust (Programming Language)|Rust]] programming language. Secondly, we'll be installing VS Studio Code, and thirdly the rust-analyzer extension for the editor. Feel free to skip this video if you've already got your setup exactly as you would like it. You can see here that I have a web browser in front of me. At the rustup.rs webpage that automatically detects which operating system you are and provides instructions for installing the language. If the site hasn't correctly identified your operating system, click on the display or supported installers link and you'll have further instructions. If you need even more information you can click down in the bottom where there is a very detailed guide on all of the different operating systems and CPU platforms available to you. The next website that we'll go to is code.[visualstudio.com](https://visualstudio.com) where the install instructions are again right at the front. Clicking on the appropriate link or other platforms depending on where you are. Should be enough for you to install the editor. If I copy the command by clicking the copy button then open VS Code, hit control P and enter then push control V and push enter.
>
> **[1:37](https://www.linkedin.com/learning/level-up-rust/what-you-need-to-get-started?u=76281980&t=97)** The editor will automatically install the extension and that's all you need to be productive with the [[Representational State Transfer (REST)|rest]] of the course. I hope you enjoy the challenges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Prerequisites:** install (4), setup (1)
> **UI Navigation:** click on (1), go to (1)
> **File Paths:** rustup.rs (1)
> **URLs:** [visualstudio.com](https://visualstudio.com) (1)
> **Env Vars:** cpu (1)
> **Tools:** vs code (1)
> **Definitions:** is a  (1)

#### [Using GitHub Codespaces with this course](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=0)** - [Ray] This is Ray Villalobos, senior staff instructor at [[LinkedIn]] Learning, and I'm going to show you how to work with LinkedIn Learning Courses using [[GitHub]] [[Codespaces]]. Codespaces is a code editor in the cloud with the full power of Visual Studio Code. It allows for real world hands-on practice that mirrors [[Software Development]] in the workplace. This course was created using GitHub Codespaces. Using Codespaces, you have everything you need to get going without needing complex installations or build tools. One click, and you're ready to go. To practice along with the course, you can create a codespace directly from the course overview page. First, click Open next to GitHub Codespaces. If you're already logged in, you'll be directed to a Getting Started with GitHub Codespaces page. If you're not logged in, you'll be prompted to log in, or create a free GitHub account first. From this page, click on Create codespace on main. The first time you open up a codespace, it might take a few minutes to create the virtual machine. Once it's done, you'll enter the code editor environment. If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers. Your course can have one or more extensions pre-installed based on the course you're taking. Those can be found in the extensions panel. Because this is a browser, it's easy to inadvertently close the browser window and lose the editor. If you do that, don't panic.
>
> **[1:33](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=93)** Codespaces saves everything you're doing on a virtual machine. You can always get the codespace back for this repo right here. Notice that it even remembered that I had opened the extensions panel. An alternate way to create a codespace is directly from one of our courses' GitHub repositories. From here, click Code, and then Create codespace on main. You can also restart a previous codespace from this location. GitHub Codespaces is compatible on devices with smaller screen sizes, like mobile phones or tablets, but it is optimized for larger screens, so we recommend that you practice along with this course on a laptop or desktop computer. The sample course I'm looking at is what is known as a flat branch repository. You can tell because there's a single branch when you click on the branch icon on the status bar. You can also tell because there are different folders for each of the videos in the course. This is a sample of what a multi-branch repository looks like, which is more common when you're working with web frameworks. If you go to the branch icon on the status bar, you can see that there's more than one branch. You can switch to the different branches using this menu. The branches are named with the chapter and the video number you're watching. If you see a B at the end of the branch, that's how the code looked at the beginning. If you see an E, that's how the code looked at the end. Let's switch to how the code looked on chapter two
>
> **[3:09](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=189)** and the third video. I'll choose the beginning branch. As you work through a course, you might make some changes on a branch. I'm going to make a minor edit on the index.[[HTML]] file right here. I'm going to go ahead and save that, and you can see that I've modified this file, because there's an M right here, and the branch name now has an asterisk on it. If I try to switch to another branch that causes major changes, like say, 07_03e, I may see a dialog box like this. If you don't care about saving your changes, you can simply hit the Force Checkout button. It will let you switch to that branch. You can then choose to discard the changes on this file. Your instructor will let you know what the folder structure is for your course. Forking let's you create your own copy of the repository on your account, so that you can keep any changes that you've made, even if you've deleted the codespace. To create your own fork, you can click on the Fork button on the repository. I'm going to hit Create fork. I now have my own copy of this repository, and if I want to, I can start a new codespace on that fork. This forked version is almost exactly like the original repository,
>
> **[4:43](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=283)** but it will let you push your own changes. Notice that the URL of the repository is slightly different. Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/level-up-rust/using-github-codespaces-with-this-course?u=76281980&t=300)** I'm going to save it. You'll note that there is an M right here, as well as an asterisk on this branch. In the source control panel, you can also see a one for the change that we just made. Let's go ahead and try to commit this change. I'm going to hit the commit button, and I'll ask it to go ahead and stage the changes. And then I'm going to hit this button here. I'll hit OK. You can also let it go ahead and run [[Git]] [[Fetch]]. That way, it'll automatically sync with your forked repo. Now, that change will be stored in your own version of this repository. Don't worry if you forget to fork a repo and then try to push changes. Codespaces will also ask you if you want to create a fork automatically. Look for additional course-specific tips from the instructor. Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Codespaces]] (9), [[GitHub]] (8), [[LinkedIn]] (2), [[Software Development]] (1), [[HTML]] (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (4), click on (3), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3), git (1)
> **File Paths:** index.html (1)
> **Env Vars:** url (1)
> **Warnings:** note that (1)


### 1. Rust Coding Challenges

[↑ Back to Table of Contents](#table-of-contents)

#### [Calculate the median](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=0)** (retro music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=3)** - [Instructor] Hey, how are we going? Welcome to Russ Code Challenges, challenge one. When I start with a programming language, I really like to start with something that I understand and so our challenge today is going to be to calculate the median. That is we are going to write a function that calculates the median of a list of numbers. More formally the type will be of VEC F32, a vector of 32 bit floating point numbers. Very quickly, we'll go through three examples to explain exactly what we intend. Example one is where our input has an odd number of elements. Let's assume that we have an variable list that is a vector of three numbers and we want to calculate its median. To do so, we sort the list, in this case it's already sorted, and take its middle value. It's four and then so our result is four. The [[Microsoft Word|word]] sum in the return value is significant. This will enable us to account for the case of an empty input list. Our example two is similar, but it's when we have an even number of elements. In this case, our vector has four elements in it. We first sort them, then take the average of the middle two values. That's four, and so our return value is sum of four. The empty case is a little bit simpler.
>
> **[1:37](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=97)** We have our empty input and then we return none. Pause the video now and try and implement median. When you come back, you'll be able to see how I've implemented it. Hey everybody, welcome to challenge one or the answers to challenge one. Our task is to get these tests to pass by implementing a median function. So to run them all, I can click cargo test or I'll type it in and I have four test failures. I can get the first one to pass quite simply by checking whether or not if A empty, then I can return none,
>
> **[2:31](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=151)** otherwise and I'll just return a placeholder for now. I can return zero. Ah-ha. One of them has passed. Okay, so the next step is to sort my list. So if I do this just with the sort method, I'll encounter a problem. I'll try and compile my tests and I get this error message saying that the trait odd is not implemented for F32. What this means, well, odd is short for ordinal and this indicates that [[Rust (Programming Language)|Rust]] doesn't know how to compare all values of F32, which is a floating point value, because some of them, such as not a number, cannot be compared to any other. So instead we have to provide our custom sort function and we'll do that by using what's a little bit sneaky
>
> **[3:39](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=219)** with called a partial comparison. And if we have a not a number in our input,
>
> **[3:53](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=233)** we're just going to crash, which isn't extremely satisfying, but it will pass the tests or at least will attempt to. So now we have a different problem. We cannot borrow as mutable. A more advanced question is whether or not you can create a sorting method that puts not a number, say either at the end or at the start, but that's beyond this exercise. So we've got a sorted input now and then our next job is to find the middle value. So to do so, I'll get the number of elements so that I can divide by two. And that's N number divided way two. And once I've done so, I also want to check whether or not A is even and I do that by saying number of elements, modular two equals zero. So now I can say if A is even,
>
> **[5:15](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=315)** then I need to take the mean of the two closest values. So this is A at position middle, plus A middle, minus one actually because we need two values and that's how the indices work. And then I need to divide those by two. So this here is the mean. Mean or average
>
> **[5:50](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=350)** of the middle two elements. And it's complaining because there isn't something much to do, I think? Oh, it's saying that both sides are giving the wrong input.
>
> **[6:15](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=375)** This will, what it wants me to do is to provide a semicolon at the end so that both expressions have, or both sides of the F statement return the same value. But I can cheat a little bit by just pushing this second sum into the else block.
>
> **[6:38](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=398)** Now we've got one more test passing, so the job left is to, oops. Sorry editors, if you could just cut this out. Just need to get back to the window. Sorry team, this is embarrassing. I'll just pause. Our task now is to take the middle value of an odd
>
> **[7:13](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=433)** of A when A has an odd number of elements and so there should be just the middle that we've already created. So I'll say that, cargo test, run those tests again and now we get four. Okay, well done. To be slightly more rust like, potentially.
>
> **[7:46](https://www.linkedin.com/learning/level-up-rust/calculate-the-median?u=76281980&t=466)** Depending on your style, we can actually return from the if block or in rust we would call this an if expression, which is something different than you might have seen from other programming languages. Rust will enable you to return values from F also. So that's just an extra tip. I hope you've enjoyed the video and I'm looking forward to seeing you on the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (4), [[Microsoft Word|Word]] (1)
> **Env Vars:** f32 (3), vec (1)
> **Definitions:** is a  (4)
> **CLI Commands:** cargo (2), find (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (retro music) (1)

#### [Find unique items](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=0)** (techno gaming music)
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=4)** - [Instructor] Hi, welcome to challenge two. If you've ever worked with data before, you'll know that data cleansing is a very important step. What we're going to be doing in this challenge is finding unique items, also known as deduplication. Our challenge will be to write a function that filters duplicates from a list. More formally, that list will be off type vec<i32> That is a vector of 32-bit integers. The requirements for this challenge are to implement the unique function. It accepts a vector as input and returns another vector that is clear of duplicates. Just so that we are clear, let's go through two examples. If I had a list with the input one, four, and five, I would just receive the exact same output. On the other hand, if I had an input list that contains duplicates, those would be filtered out by my unique function. Here's two pieces of extra credit. One, we can use generics. Instead of accepting a vector of <i32>, change your function to accept a vec<T> where T is a type that implements the ord trade. If you'd like to crank the difficulty dial even further, try to retain the order in which the elements were first seen. You can pause the video now and implement unique. In the second part of this video,
>
> **[1:39](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=99)** you can see how I implemented it. (techno gaming music) Hey, everyone. Welcome to the answer section of the second challenge in Level Up [[Rust (Programming Language)|Rust]]. Our job is to implement unique. And to do so, we need to go into main.rs. And we can see a helpful function there waiting for us. If we bring up the terminal and execute cargo test, we can see that all of our tests pass, (laughs) sorry, all of our tests fail. Let's do this the naive way first. So what you might want to do if you are relatively new to Rust is created temporary vector. And so for every element in a, so we'll iterate over it. If temp contains element,
>
> **[2:48](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=168)** we'll continue. So we'll skip. I'll turn it in. If we don't, then we can insert element into our temporary list
>
> **[3:04](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=184)** and then return the temporary. Now, if you have a computer science background, I hope that you will appreciate that this is quite an inefficient way to get our tests to pass. They probably will all pass, but we can do a lot better. So one of the methods that we have available to us inside vector is sort. And then it also contains a dedup method. Oops, that's a bit of a typo. And this is algorithmically much nicer. And in fact, we get a extra hint from, which is saying that we should try sort unstable. So this will be a faster sorting algorithm that won't make stability guarantees if you won't keep things in the same place if they compare equal. So there's a few ways to answer that question. I've added some extra to-dos or some extra advanced questions for you in case you want more of a difficult challenge.
>
> **[4:41](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=281)** Let's have a go at answering the generic case. So our first thing that we might need to do is define unique to be able to be compared and then we can implement our sort function, sort by comparison. It takes an X and a Y, and then it's X compare Y, and then we can run dedup again, and a. What this is saying is that I'm allowed to accept any input type, a T, as long as I can sort it. Oh, and it's probably complaining that I've already defined unique. Yeah, the name unique is already defined multiple times. Oops, I just went into the wrong window. So I will delete the old one. See if this works. Ah, the one with the tests don't, is not happy because it's empty. So I'll need you to give it a type and say that it's a vec of <i32>. And hopefully, we're all good again.
>
> **[6:13](https://www.linkedin.com/learning/level-up-rust/find-unique-items?u=76281980&t=373)** Okay, perfect. I'll see you on the next challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (2)
> **Definitions:** is a  (3), known as (1)
> **CLI Commands:** cargo (1), make (1)
> **Non-Speech:** (techno gaming music) (2)
> **File Paths:** main.rs (1)
> **Tools:** terminal (1)
> **Speakers:** - [instructor] (1)

#### [Print any text type](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=0)** (video game bleeping)
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=4)** - [Instructor] Okay, welcome to Challenge Three. Well done for making it this far. One of the things that I really didn't appreciate about [[Rust (Programming Language)|Rust]] when I was learning was its multitude of text types, that is, types that were dealing with text. This challenge is aimed at testing everyone's knowledge. The challenge is to print any text type. We are challenged to write a function that can either accept a string or a string slice as an argument. To satisfy the requirements of the challenge, you'll need to implement info. It must accept at least string and string slices, preferably more text types, and also to be able to print its input to standard out. Pause the video now and implement info. In the next part of the video, I'll actually try and provide three implementations for you to teach you a little bit more about strings in Rust. (video game bleeping) Hi, everybody, and welcome to the answer section of Challenge Three. We are trying to implement info that can take any text type and print its contents to the screen. If we go into the main.rs file, you'll see that we have the beginnings of a working program, and with a few compile errors that we need to check. If we bring up the terminal,
>
> **[1:40](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=100)** we'll first encounter a compile error relating to this generic type, that T doesn't exist. And now we've got a different error which is that the tests fail. So the fastest way to get our code to pass is by thinking about what we would like to get it to do normally. So we've got print line here. And then we would put our curly braces and then a
>
> **[2:22](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=142)** and this is almost everything that we need, but it turns out that Rust is very helpful and will actually provide a really helpful error message for us, telling us that we need to implement the Display trait. Now if we try and run our tests again,
>
> **[2:49](https://www.linkedin.com/learning/level-up-rust/print-any-text-type?u=76281980&t=169)** you'll see that they both pass. To be extra difficult, we can add some more complication. So I could, for example, try using the CString type as well as path. They're there for your experimentation as well if you'd like an extra, some extra difficulty. I hope this has been a fun challenge for you and I'll look forward to seeing you in the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (3)
> **Cross-References:** in the next (2)
> **File Paths:** main.rs (1)
> **Tools:** terminal (1)
> **Analogies:** for example (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - [instructor] (1)

#### [Case-insensitive sort](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=0)** (lively music)
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=4)** - [Instructor] Kia ora e te whanau. Welcome to [[Rust (Programming Language)|Rust]] code challenges, challenge four. Today we're going to be talking about users. Our challenge is case-insensitive sort. Those pesky users are always using uppercase and lowercase letters in their names. We want to write a function that sorts usernames while ignoring the case of any letters within those usernames. Requirements. We are required to implement the function sort_usernames. The users variable should be sorted in-place and we should also be able to accept all Unicode characters. As an example, let's assume that we have a list of users, Todd and Amy. We want Amy to come first, even though she's used a lowercase letter for her name. Pause the video now and implement sort_usernames. In the second half of this video, I'll demonstrate how I've implemented it. (lively music) Welcome to the answer section of challenge four. We are implementing this function sort_usernames, and the sample code in main.rs is a little bit scary. There's kind of a lot going on. We've got this generic type that is constrained by the AsRef type str and what that's saying is that for every item in our vector, when you take a element by reference,
>
> **[1:41](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=101)** it becomes a UTF-8 encoded text string if that makes sense. (instructor chuckling) And so even though it looks intimidating, I'm hoping that it will still be comprehensible to you. So to complete our task, we need to be able to create a custom sort function. We have X and Y, and then we need to be able to reduce,
>
> **[2:26](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=146)** we need to send them to, so if we take AsRef and then lowercase, and then we compare, oh, we've got a compiler error.
>
> **[2:44](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=164)** Ah, it's just got a type. And then we play this comparison and then we do this
>
> **[2:55](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=175)** for the Y side. And that should be all that we need. Consider borrowing. Okay, I'll do that. If I run the tests, and I'll do that from the terminal, cargo test. It compiles and it all works fine. That's enough to get through. But I want to show you potentially another way that's a little bit more efficient. I can provide Rust with a way of taking an item in the list. In this case, it's every X and I would like it to just say AsRef to_lowercase.
>
> **[3:59](https://www.linkedin.com/learning/level-up-rust/case-insensitive-sort?u=76281980&t=239)** And then I would like it to run its own comparison, effectively performing this comparison operation itself. And this case key means that it only executes this conversion function or the processing step once per item in the list, rather than converting everything to a string every time. So the different code also completes successfully and is a little bit more efficient than the first version.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (2)
> **Code Identifiers:** sort_usernames (3), to_lowercase (1)
> **Definitions:** is a  (2)
> **Non-Speech:** (lively music) (2)
> **File Paths:** main.rs (1)
> **CLI Commands:** cargo (1)
> **Env Vars:** utf (1)
> **Tools:** terminal (1)

#### [Convert text to Morse code](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=0)** (upbeat video game music)
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=4)** - [Instructor] Welcome to [[Rust (Programming Language)|Rust]] Code Challenges, Challenge beep-beep-beep-beep beep-beep, (laughs) that is, Challenge 5: Morse Code. In this challenge, we will be converting text, that is, letters and numbers, into the equivalent Morse code representation. A very quick refresher on what Morse code is. We have letters on the left, and our process will create pulses that might be short or long on the right. The requirements of this challenge are to implement the MorseCode trait for String. MorseCode has been defined in the sample code. You should feel free to skip any invalid input characters. Lastly, ignore upper and lowercase on the input. The sample code contains some type definitions that are useful to go over right now. First of all, we have our trait MorseCode. It is a single method, to_morse_code, that takes an immutable reference to self and returns a message. The next question is, what is Message? A message is a Vec of Letters, that is, a list of Letters. What's a Letter? Well, that's a Vec of Pulses. And the last question is, what is a Pulse? A pulse is an enum that may be Short or Long. So, to recap what we've just learned, we start with letters of the left. We know that they have a meaning in Morse code, and the Rust code is on the right. So A is a vec of Long and Short. You should have all of the information that you need
>
> **[1:36](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=96)** to work through this challenge. Push pause and work through your solution. In the [[Representational State Transfer (REST)|rest]] of the video, you'll see how I've implemented it. I look forward to seeing your solutions. I'll see you on the other side. (upbeat video game music) Hi, everybody, and welcome to the answer section of Challenge 5. I hope you've really enjoyed implementing Morse code. If it's been a little more complicated than other challenges, I apologize. Unlike the previous challenges, there's no to-do macro to guide you on how to implement this trait. I'm hopeful, though, that you are able to get through it yourself anyway. So to work forwards, we need to implement MorseCode. And to implement a trait we use an Impl block. And we say we want to implement the trait for a given type. And I've just got a a little bit of boiler plate text there, or at least I've kind of got a stub method which satisfies the compiler. Now our code builds, but both of our tests fail. So how do we implement this correctly? At least we know that we're sort of on the right track. (chuckles) Conceptually, what we want to do is move through the string and convert each character
>
> **[3:15](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=195)** to its representation as Morse code. So I'll just match on c. And then let's say if we had a capital A or a lowercase a, then we would convert that to a vector of Pulses. And the Pulse is an enum of Short and Long. And the A is Pulse::Short then Pulse::Long. And for right now, or just while we are getting things going, I'll skip every other character. The compiler is a little bit angry with me, because it wants me to return a Message, and I'm not currently doing so. And now it's worried about
>
> **[4:16](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=256)** some, ah, thing else. So firstly, I need to iterate through the characters of the string, so that satisfies one warning. This next one is just a little bit more complicated. It's complaining that these two sides of the match statement are returning different things. And to fix that, I need to create a temporary variable. So I'm going to create this message, immutable variable called msg, which will be my output type. And we could just create an empty one or we could give it a size hint. So I'll say Vec::with_capacity. And then it's just going to be more or less the same length. The output message will be the same length as the source string itself. And then I want to return msg. Now let morse code can be returned from this match statement. And then msg.push morse. Now we should be able to do A, B and C, or, sorry, just A. I've got a little dummy program here that I'll check to see whether or not I can run. And I can see the three, well actually six Pulses, but three As in the Morse code alphabet. So that's good.
>
> **[5:50](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=350)** We're getting much, much closer. We just need our tests to pass. (chuckles) And so I'm going to shorten some code up. We could do a lot of typing now. But instead I want to show a cheat of bringing the enum variance into a local scope, which is helpful for shortening things up on each line. So we are bringing Short and Long through. Now, I am going to copy, paste from off the screen.
>
> **[6:29](https://www.linkedin.com/learning/level-up-rust/convert-text-to-morse-code?u=76281980&t=389)** And hopefully, if I run cargo test now, I've got two passing tests. So I'm sorry that you had to do a lot of typing and there wasn't as much guidance as previous tests but, sorry, as previous challenges, but I hope that it's been enjoyable nonetheless. I'll see you the next challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (5), is an  (2)
> **Code Identifiers:** to_morse_code (1), with_capacity (1)
> **Exercise Files:** sample code (2)
> **Non-Speech:** (upbeat video game music) (2)
> **CLI Commands:** cargo (1)
> **Warnings:** warning (1)
> **Speakers:** - [instructor] (1)

#### [Value of a hand of cards](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=0)** (retro video game sound effects)
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=4)** - [Instructor] Welcome to Challenge six. Value of a Hand of Cards. In this challenge, we are going to be calculating the value of a Hand of cards for the game of Blackjack. Blackjack has quite specific rules about the way each card is valued. The numbered cards have value that is equal to their own number. The face cards, king, jack, and queen, are equal to 10. The ace has the value of 11 until the Hand's total value exceeds 21 and then it equals one. The requirements of the challenge are to use the types that have been defined in the sample code and implement the value() method for the Hand struct. The value() method calculates the total value of the cards that are currently held in the Hand. Here's a quick overview of some of the code that we'll be encountering in the sample code. We have an enum that defines Card. It might be a one or an ace or a king. A Hand is a struct that contains single field Cards that has a list of Cards, or a Vec of Card, with an implementation block Hand. And it includes this value method that we need to replace. It will start with zero and we need to replace the zero value with a concrete implementation. Pause the video now and complete the solution. I'm excited to see how our implementations differ.
>
> **[1:38](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=98)** (retro video game music) Hi, welcome to the answers section. Our task is to implement Blackjack. (chuckles) So to do so, let's go to main.rs, and you'll see we've got a lot of code already written for us. But there is this value method of a Hand which we need to implement. We can sort of start out by checking what to do. So if we execute cargo test, you'll actually see that one of them parses. And that is because we are providing a zero value as a default. And that is actually correct for the empty Hand. If we have no cards in our Hand, that that's worth zero. Okay, let's move forward. What we need to sort of start with is a subtotal. And so we want a mutal value, and I'll start off initializing that with zero. And then as we go through every card
>
> **[2:59](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=179)** in our cards, we just add to the subtotal. So let's see how that works. For card in self.cards we need to match on the card and that's because I've got all of these Ace, two, three, four, five and six, all the way through to king at queen. If I copy that across to here, we'll be able to get a lot of our work done for us. So I'm just going to ignore the ace for now. The other thing that I need to do is I'm just going to write, 'cause these are all in enum, I am just going to sort of, card, oh, that's up here too. Now if it's an ace, for the moment I'm just going to say that it's worth one. We'll need to have a little bit of logic to say that if it isn't, then we need to change its value. So number cards are all fine. Six,
>
> **[4:33](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=273)** seven, eight, nine, and face cards are worth 10.
>
> **[4:49](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=289)** Now if you know the rules of Blackjack, you'll know that I haven't implemented this correctly. So I've got, let's say card's value, and,
>
> **[5:09](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=309)** I want to just add to the subtotal. And then the last expression of that method will be adding it to, or just kind of returning the subtotal value. Okay, so if I run the tests again, I might get, oh it's given me a syntax error to fix.
>
> **[5:36](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=336)** I need iterator, so I'm just going to borrow self.cards, run it again, and actually I get a couple of tests passing. The one that isn't passing is where I sort of overflow, in Russ's terminology, (laughs) or computing terminology, when I hit 21. So, to get around this, I want to have another mutable variable, which is aces_seen. And if I match on ace, and then I check aces_scene, I'm going to increment that by one. And the value of the card is actually going to be zero because I'm going to add a little bit of smarts to my logic at the end. And it's for every card, or for every ace in aces_seen,
>
> **[6:51](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=411)** I want to create value, and it will be, if the subtotal is less than 10, it's 11, otherwise, it's one. And now I go through the same process of incrementing up or adding to subtotal the value for the ace. Now the syntax can be a little bit confusing. Maybe if I pull it away from one line it might be a little bit easier to read. The other thing to note about [[Rust (Programming Language)|Rust]] that's different than most other languages is the if can actually return a value itself. Ah, it's given me another syntex error to fix. So I'll save my code and rerun the tests. I'm still failing. That's an interesting thing to happen.
>
> **[8:02](https://www.linkedin.com/learning/level-up-rust/value-of-a-hand-of-cards?u=76281980&t=482)** And after some digging around through my code and checking everything again, I found the problem. If I go and check the test, it says the strong_hand is the test that's failing and it's a queen and an ace. And it should equal 21, the value. But instead I'm getting 11. Now, my test here says if it's less than 10, the ace is worth 11, which is false. I need it less than or equal to 10. Hopefully we now pass. And with that, yeah, our tests pass and we've completed the challenge. Well done. I'll see you on the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (1)
> **Code Identifiers:** aces_seen (2), aces_scene (1), strong_hand (1)
> **Exercise Files:** sample code (2)
> **Definitions:** is a  (2)
> **Non-Speech:** (retro video game sound effects) (1), (retro video game music) (1)
> **File Paths:** main.rs (1)
> **CLI Commands:** cargo (1)
> **UI Navigation:** go to (1)

#### [Has a deadline been reached?](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=0)** (bright nostalgic music) (stars chime) (graphic beeps)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=3)** - [Instructor] I'm always forgetting my friend's birthdays which is why this challenge is especially important for me. Challenge seven, check deadline. In this challenge we will be asked to create a function that can tell whether or not an event's date has already occurred. We'll be tested in two ways. Firstly, we haven't worked for time before. And secondly, we'll be using third party code. Requirements, we must design an ImportantEvent data structure that has at least fields to store the name and the date. Let's say we're talking about a friend's birthday, we want to know who it is and when their birthday is. We must implement the Deadline trait for ImportantEvent. Feel free to use your local time zone. Here are two further details. Firstly, you don't need to implement your own time handling routines. Time handling is provided by the chrono crate. The sample code will automatically download and compile the chrono crate for you. A crate is the [[Rust (Programming Language)|Rust]] term for package. The Deadline trait is defined as a single method is passed. It takes an immutable reference to self and returns a bool. Pause the video now and implement the Deadline trait. I'm really interested to see how you get on. In the next part of the video you'll see how I've implemented it. (bright nostalgic music) (graphic chimes)
>
> **[1:36](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=96)** Hi. Welcome to the answer segment. In this challenge we are checking time, and so I've got two tests to test, (chuckles) whether or not something is in the future or in the past. And if I run cargo test, you'll see that I get a couple of compile errors about some unused code that's irrelevant for now. What we really want to see are these tests turning green. So if I hop over to the main.rs file, I'll see that I've got this todo macro standing in the way, and that's what generates this error message: not yet implemented. Okay, so how do we do it? Well, it turns out that there's just one line of code. I need to check this when field, and see whether or not the time has already passed. And so to do that, I just say Local::today. Now, so what I'm checking is whether or not the date is earlier than today. And if it is, the time has actually passed. Ah, so I've got a syntax error, so I'll just return, ought to fix that up. (keyboard clicks) And now our tests have turned green, so congratulations if you got that
>
> **[3:11](https://www.linkedin.com/learning/level-up-rust/has-a-deadline-been-reached?u=76281980&t=191)** and I'll see you on the next challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (1)
> **Non-Speech:** (bright nostalgic music) (2), (stars chime) (1), (graphic beeps) (1), (graphic chimes) (1)
> **File Paths:** main.rs (1)
> **CLI Commands:** cargo (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** sample code (1)
> **Definitions:** defined as (1)
> **Speakers:** - [instructor] (1)

#### [Convert between Celsius and Fahrenheit](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=0)** (electronic whirring) (electronic pinging) (video game music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=3)** - We've done a lot together these challenges. And now it's time to take on something really big. Let's go for world peace! We need to resolve the conflict between Celsius and Fahrenheit, and we can do it together. Our challenge is to convert between each of the temperature scales. The requirements of this challenge are to add the to_celsius() and to_fahrenheit() methods to our predefined Temperature struct. What is that struct? Well Temperature has two fields. Degrees is an f32, that is a floating point number, and the scale field. Scale is an enum that has two variants: Celsius and Fahrenheit. Just in case you need it, here are the formulas for converting between Celsius and Fahrenheit. From Fahrenheit to Celsius. Take the number of degrees Fahrenheit, remove 32, and multiply by five over nine. Celsius to Fahrenheit is the inverse. We take the number of degrees in Celsius, times that by nine over five, and add 32. Pause the video now. Work on your solution. For the [[Representational State Transfer (REST)|rest]] of the video, you'll see how I've implemented them. (electronic trilling) (video game music) (key clicks) (video game music) Hi, welcome to the answer segment. Let's implement temperature conversion. We'll start, as we have been consistently, with checking our tests.
>
> **[1:37](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=97)** I run cargo test. I should see three failing tests. And we wish to get these to pass. And so let's pop over to main.rs and see what we need to do. Okay, the bulk of the code is written, but I have this Temperature struct, and it contains two fields: scale and degrees. We have two methods to implement: to_celsius and to_fahrenheit. Our strategy will be to match on the scale field and then do the correct alteration or conversion of (keys clicking) of the numeric value. Which happen... And so, let's move forward. Okay so first thing to we want to match on self.scale. And if we are already (keys clicking) Celsius then we just return self.degrees. Otherwise, if we're Fahrenheit, we've got a little bit of work to do. (keys clicking) We need to do some mathematics. And that involves taking self.degrees, removing 32,
>
> **[3:05](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=185)** and then and I'll just wrap that in this so we don't get confused. And I'm going to multiply five over nine. (keys clicking) And that should be the Celsius conversion done. Now, we need to do the numeric opposite in the inverted step. And so let's type out (keys clicking) all of that. Okay so we'll start so if we are... We'll get the easy one done. If we're Fahrenheit then we just return self.degrees. We've got no work to do. If we're Celsius though we've got some our mathematics to calculate. We start with the five over nine. (keys clicking) And I'm using .0 because I want to use floating point values. (keys clicking) And I multiply that by self.degrees. (keys clicking) And then I add 32. Now this should be correct. So if I clear the screen and the terminal and run my tests... I'll actually click save the file, that will help too. And then I run cargo test. (keys clicking) I get one failure.
>
> **[4:40](https://www.linkedin.com/learning/level-up-rust/convert-between-celsius-and-fahrenheit?u=76281980&t=280)** Two failures. Okay, that's confusing. I wonder if anyone can spot this before me? (mouse clicking) Ah, I've done it. (keys clicking) I haven't done the mathematical opposite. If you've been shouting at the screen I apologize. (keys clicking) Aha! Okay, great. We've correctly (laughs) converted temperature scales. And hope that was a fun exercise for you. I'll see you on the next one.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Representational State Transfer (REST)|Rest]] (1)
> **Non-Speech:** (keys clicking) (11), (video game music) (3), (mouse clicking) (1)
> **Code Identifiers:** to_celsius (2), to_fahrenheit (2)
> **Definitions:** is an  (2), is a  (1)
> **CLI Commands:** cargo (2)
> **File Paths:** main.rs (1)
> **Tools:** terminal (1)
> **Speakers:** - we (1)

#### [Sum a list of numbers with missing values](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=0)** (lively music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=3)** - [Instructor] [[Data Quality]] is a really important topic and one of the things that crops up in the real world when you are dealing with data is missing values. This challenge goes through the process of handling those in [[Rust (Programming Language)|Rust]]. Welcome to challenge nine, ignore missing values. Our challenge is to calculate the sum of a list of numbers that might contain missing values. To satisfy the requirements of the challenge, you should implement the sum_with_missing function. It accepts a vector of option i32 and returns an i32. You should always return a number. That is if your input only contains missing values, then you should return zero. Let's quickly touch on how missing values are actually represented in Rust. In Rust, we use the option type. Option is an enum with two variants. The none variant indicates a missing value. Here are two examples of the sum with missing function in action. Example one, our input contains missing elements. We have a data variable that includes two numbers and one missing value. We take the answer. It should equal five. Example two is where there are no missing elements. We already know that we should return a number and we should probably return zero.
>
> **[1:36](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=96)** So this is data with only missing values. We calculate the answer again and we should find that the answer is zero. Pause the video and implement sum_with_missing. I'm hoping that this will really test your intuition relating to iteration. (lively music) Hi, let's clean up some messy data. Okay, like usual, we'll test our code or what we've got. So if I go up to terminal and open a new one. Run cargo test. You get a couple of warnings but actually, there's a whole bunch of errors, which we are going to now address. Okay, so our task is to kind of take a vector of things like this where we've got sums in there and nones and we somehow want to add all of those together. You might be tempted to create some sort of subtotal value and then add that, you know, go through and increment that and return it at the end. But actually, there's a more idiomatic way to to go forward. So if we, and that's with a functional style. So what I'll start with is I'll iterate, I'll create an iterator over the numbers vector and then I want to, for every item, I'm going to pull out its value.
>
> **[3:20](https://www.linkedin.com/learning/level-up-rust/sum-a-list-of-numbers-with-missing-values?u=76281980&t=200)** Otherwise I'm going to use its default, which is zero and then an iterator of numbers. So the map create converts the iterator of the option i32s into an iterator of i32. And then the sum method will be able to kind of sum them all up. So if I save my file and rerun the tests, I see that they're all okay. And that's exactly what we want. There are multiple ways to solve this and I hope that you have some fun playing with all of the options. I also looking forward to seeing you in the next challenge. So I'll see you then. Bye.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (3), [[Data Quality]] (1)
> **CLI Commands:** find (1), cargo (1)
> **Code Identifiers:** sum_with_missing (2)
> **Definitions:** is a  (1), is an  (1)
> **Non-Speech:** (lively music) (2)
> **Cross-References:** in the next (1)
> **Tools:** terminal (1)
> **Best Practices:** you should always (1)

#### [Calculate the number of weeks between two dates](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=0)** (retro video game sound effects)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=3)** - My kids are always competing about who has the next birthday and they always want to know how many weeks away their birthday will be. In this challenge, we get to find out. Welcome to challenge 10; weeks between two dates. Our challenge is to parse two strings that represent dates and then calculate the number of whole weeks between them. To satisfy the requirements of this challenge, firstly, we need to implement the weeks between function that takes two string slices and returns in integer, an i32. You should assume that a and b are always valid dates. When b occurs, before a, you should be returning a negative number. There are two further details that I would like to cover off very quickly. Firstly, we will be using the chrono crate. Do take a look through its documentation and you'll find out how to parse strings. Secondly, we'll need to handle errors correctly. For this challenge, we can simply unwrap the results that are returned from the parse methods provided by chrono. I'll explain what I mean. Many functions in [[Rust (Programming Language)|rust]] return a result. That result has the possibility of an Err variant. In the next slide, I'll show you a way to handle that when you are confident that the error case will never occur. First of all, here is the definition of result. It's a small enum defined with Ok and Err.
>
> **[1:39](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=99)** The Ok variant includes a typed T. That's our sort of inner value. And the Err case is the error case that returns an error type. We would like code that effectively ignores the possibility of Err(E). Result provides an unwrap method that enables us to access the T from the result itself. Let's say that I've got a parse function that takes invalid input and returns a result. If we unwrap it, we'll receive a date. And if we would like to be a little bit more concise, we can do this on one line. That should be all the background information that you need to complete the challenge. Pause the video now and implement the weeks between function. This way, all of the children of [[LinkedIn]] will be able to find out who has the next birthday. (retro video game music) Welcome to the answer section. I hope you've had an enjoyable time working through this one. If we look at main.rs, we can see that our task is to implement this weeks between function that takes two strings; a and b and interprets them as dates and then returns some integer, which represents the number of weeks between those two dates.
>
> **[3:12](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=192)** So, this is a little bit complicated perhaps because we need to convert strings into something that is numeric and I'm going to cheat a little bit by using a third party dependency. And that one will be a crate called chrono. And I'll take version 0.4 and actually I don't even need all the [[Representational State Transfer (REST)|rest]] of it. Then I can use a data type called NaiveDate which will give me I think a lot of what I want. So, if I define a variable t1 for time one and ask NaiveDate for a parse from stir method a and I give it a sort of a template. We're now saying it's a percent Y not T and then I've got a month and a date and this will return a result. For the moment, I'm just going to unwrap it to say that things are always going to work and for t2, I need to change this variable to b.
>
> **[4:48](https://www.linkedin.com/learning/level-up-rust/calculate-the-number-of-weeks-between-two-dates?u=76281980&t=288)** And now we have two dates, t1 and t2. So, we can take the set of the difference and say, we will take, let's say t2 away from t1 and that will return us a duration object which isn't quite what we need. We need to convert this to a number of weeks. And so to do that, I call another method which is num_days and then I normalize each Y. I ask for the number of weeks and so I just divide by seven. And now I have not just the difference in time but in weeks. And then I want to convert the return value as an i32 integer. Now let's see if this gets us to where we need to be. It does, well done. I hope you've had fun. See you on the next challenge. Bye-bye.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (1), [[LinkedIn]] (1), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** find (3)
> **Non-Speech:** (retro video game sound effects) (1), (retro video game music) (1)
> **File Paths:** main.rs (1)
> **Code Identifiers:** num_days (1)
> **Versions:** version 0 (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** template (1)

#### [Validate an ISBN number](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980)

> [!transcript]- Transcript
>
> **[0:02](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=2)** (rising synthesizer tones) (synthesizer ringing) (triumphant synthesizer jingle) (falling synthesizer tones)
>
> **[0:06](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=6)** - [Instructor] I am a published author, and I actually got intensely curious about what ISBN numbers are at one stage, and I thought I would share some of that with you in this challenge. Welcome to challenge 11, validate an ISBN number. Our challenge is to verify that a string contains a valid ISBN number. The requirements of this challenge are to parse a string containing an ISBN-13 number. To do so, implement the standard format FromStr trait for the Isbn struct, which has been provided in the sample code. You'll need to validate all of the digits. That will include validating all of the input digits. ISBN numbers include a check digit that can be calculated from the others. You'll need to implement the validation step for that. You'll also require an appropriate error type. The FromStr trait requires that you define an error type. Your custom type should cover at least these three cases. When the input is too long, that's more than 13 digits long, too short, not enough, or if the checksum has failed. Let's take a quick look at verifying that check digit. It provides a level of assurance against typos, and potentially swapping characters backwards and forwards. So how do we actually calculate this check digit?
>
> **[1:42](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=102)** We start by multiplying all of the digits by their preassigned weights. Those alternate between one and three. Once we've multiplied them all together, and summed the result, we then reduce that sum down to a single digit. We start with the number 10, then subtract the remainder of dividing the sum we just calculated by 10. It sounds complicated, but you'll find that the code to implement this is actually very short. Let's go through it step by step. Here is the ISBN number of a book that I've actually written. Step one is to remove the hyphens, and isolate the check digit. So we'll remove hyphens, and put zero to the side. Effectively, we'll discard it for the remainder of our checking process. Now we need to apply our weights. First, I'll blow out the, or expand out all the numbers. The digits start nine, seven, eight, and end at the bottom, four, one, and zero. So you can see that each weight is one, three, one, three, one, three, and so forth. Step two is actually applying the weights. I'll first blow it out, so that we can have space for the weights that we want to apply. The weights alternate between one and three. Performing the multiplication gives us this result, and now, we add those together. So if we add all of those digits, we end up with 100.
>
> **[3:18](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=198)** Step four is dividing the 100 that we just calculated by 10, and taking the remainder. This is the modulus, or mod operation. So we end up with zero. Zero is the remainder of dividing 100 by 10. Step five is subtracting that remainder zero from 10, which is 10, funnily enough. And step six is to take the last digit. The check digit itself can only be zero through nine. And so if we get a 10, we'll just take zero. You should have all of the information that you need to complete the challenge. This will be a slightly more difficult one, because you need to really think about error handling and iteration. I'm sure that you'll be able to get it, though. In the next section of the video, you'll see how I've solved the challenge. (rising synthesizer jingle) (falling synthesizer tone) Hi, welcome to the answers section. I hope that you've had fun in the challenge. Let's look at answering it. Up in the source directory, we've got main.rs, and it includes quite a lot of code, but the important parts are these lines with TODO, and there's one comment on line 11, sorry, line nine, TODO, replace with an appropriate type. Line 12, here we have a todo macro, and likewise on line 24.
>
> **[4:57](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=297)** Let's start by just talking very briefly about the strategy that we are going to use. So we want to be able to implement this FromStr method, which actually enables some string to be parsed as a type. Within that, we want to sort of add our validation. Okay, so to start with, I want to create, I'm just going to... Let's see if we can start with creating...
>
> **[5:52](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=352)** Let's start by creating a list of digits that our string contains.
>
> **[6:05](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=365)** We actually just want the vec macro, which initiates an empty vector. And then, so for the ith, and then sort of character, which we'll just call c, in s, characters, .char_indices, actually. It provides the characters and their position within the string. We want to match on c. If it is a number, so anywhere between zero and nine,
>
> **[6:46](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=406)** then we need to kind of convert this to a... We need to convert it to an actual number, away from a string. Okay, so we use our arrow, and then digits, push, actually, may wish to do this in two steps. So the first thing that I want to do, create a scope, and then create digit. And that is c, and then to_digit.
>
> **[7:26](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=446)** And then I need a base, and it's base 10. And because I know that I'm only dealing with characters within the range zero to nine, I can unwrap here, and I also want to cast it as u8. Then I can push my new digit onto my digits vector,
>
> **[7:59](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=479)** and we're happy. There's some other things that we need to care about though. One of them is a hyphen. And if we encounter a hyphen, we are just going to continue, and if we encounter anything else, then we want to return error, and we'll just use the unit type for now. And then, as our sort of... We've got our vector of digits. So this should be 13 here, because we are dealing with an ISBN-13 number. And the first thing we wish to do is...
>
> **[8:49](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=529)** Actually, if digits,
>
> **[8:59](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=539)** if the length of our digits is less than 13, or let's say is not 13, then we wish to return error as well. And up here, we need the return keyword too. Then we actually need a checksum. (laughs) The specification, if you look in the Wikipedia page posted here, will provide a checksum that we also need to implement. And so I will just, let's say that we have implemented this thing. If digits 12 does not equal calculate_check_digit,
>
> **[10:03](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=603)** and then we actually provide a reference to the digits vector, so we borrow digits, then we've got another error to return.
>
> **[10:21](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=621)** Otherwise, we should create our ISBN.
>
> **[10:38](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=638)** Now, the type that is predefined contains two fields. One is raw, and the other is digits. So the raw is the original string. And to convert that, we take s, and put to_string.
>
> **[10:58](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=658)** And if we wish to just do digits,
>
> **[11:08](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=668)** we can just include it as is. We don't actually require specifying the field, because our variable name is the same thing. Now let's try and run this code. It won't actually work, because this will block every time. This is a little bit of... This one's slightly more complicated. Ah, I see. It is slightly more complicated. First thing to do is to go into the Wikipedia page, and copy and paste weights for each of the numbers. You can see that we've got the pattern of one and three. After we, so what we want to do is these digits here,
>
> **[12:00](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=720)** and notice, we're just taking a slice of some number of u8. So it doesn't necessarily need to be a vector, if you decided not to use one. We're going to iterate through, and then zip our weights.
>
> **[12:23](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=743)** After that, we take each pair of x and y,
>
> **[12:32](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=752)** or another way to say what this would be left-hand and right-hand, and then we multiply.
>
> **[12:43](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=763)** We then sort of apply a conversion, so we've got... And we just take a sum. The reason why we need to convert every value to u32 is that we'll probably overflow if we keep them as a single byte. And then we've applied all of our weights,
>
> **[13:16](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=796)** and then we've got a check digit we wish to take,
>
> **[13:25](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=805)** which is 10 minus weights_applied.
>
> **[13:36](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=816)** And then, modulo 10. Then we match on digit. And if it is 10, we return zero. And if it is some other number, we need to make sure that this is u8. We need to make sure that this is u8, because it's a single byte. And then, if it's some other number n, we wish to return that as a u8 instead of a u32.
>
> **[14:23](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=863)** Okay, so now our digit checker, or our validation function works, or at least it should. We also have the bulk of our code implemented. We haven't implemented a custom error type, so I'll do that next, but I'll see if I can run some of these tests.
>
> **[14:52](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=892)** Might take a... Oh, okay, we've got a couple of errors to fix. On line 21, we need to... We have a problem with the match statement.
>
> **[15:12](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=912)** Ah, and that's this one here. Oh, and I also made a spelling mistake, which you probably saw as I was going through. So on line 57, weights only has one s. And then, on line 14, I have another error where I've made a spelling mistake.
>
> **[15:44](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=944)** Just sort of, another sort of light syntax here. weights_applied doesn't exist, so go back to line 57, there again, and it's actually just called applied.
>
> **[16:05](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=965)** Oh, okay. It wants to give it an explicit type, which is u32.
>
> **[16:19](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=979)** And then there we are, we have passed our test, and we've kind of cheated a little bit, so that is kind of the pass there. We can do one better, which is to implement that custom error message, also custom error type. So to do better, so the reason why we may wish to avoid just using unit for an error is that we effectively swallow all of the causes, all the root causes of why there was a problem if this were to be incorrect on purpose. Sorry, if we were to encounter an invalid number in real life, then we would only have error with no information about it. So we actually want to kind of create a custom error type. To create a custom error type, we want... InvalidIsbn, let's say. And all you should need to do to make this usable as a...
>
> **[17:39](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1059)** To make it usable as an error is to derive debug. Every type that is able to be printed to the screen that has a debug implementation can be used as an error type. There is a custom... There is a, sort of a generic implementation for...
>
> **[18:19](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1099)** Okay, so those are our four errors. The first one is if our length, it doesn't equal 13. At the moment, we just crash, or at least we return errors. So if it's less than 13, then we want to write InvalidIsbn,
>
> **[18:52](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1132)** and then TooShort. Else if digits length is longer than 13,
>
> **[19:09](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1149)** we need to return TooLong. There is, let me just kind of fill this in. So down here, it's InvalidIsbn, and then we have our checksum message,
>
> **[19:36](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1176)** which is called FailedChecksum. So this one, ah, invalid, we can do better here. We've skipped right at the top. Okay, so InvalidIsbn, and then failed, or InvalidCharacter.
>
> **[19:57](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1197)** Maybe a better [[Microsoft Word|word]] would be to say unexpected. And so there's two things that, two fields that are provided. One is a position, and the character that we have encountered. So we can actually reuse this i, which we actually received a warning about earlier. Just saying that we didn't actually use the variable.
>
> **[20:29](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1229)** Oh.
>
> **[20:47](https://www.linkedin.com/learning/level-up-rust/validate-an-isbn-number?u=76281980&t=1247)** Okay, we need to figure out what's going on here. So all of this looks fine, except back at the top, we didn't actually change the error type for the (indistinct) implementation. And so I think it's got a little bit confused, and now our tests pass, and we also have some information provided back to the user, or whoever called this conversion. There we are. I hope that you've enjoyed working your way through this challenge. It has been a longer one than the others. I'll see you on the next challenge, bye-bye.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Microsoft Word|Word]] (1)
> **Env Vars:** isbn (8), todo (2)
> **Code Identifiers:** weights_applied (2), char_indices (1), to_digit (1), calculate_check_digit (1), to_string (1)
> **Definitions:** is a  (5), is called (1)
> **CLI Commands:** make (4), find (1)
> **Cross-References:** in the next (1), go back to (1)
> **Prerequisites:** you'll need (2)
> **File Paths:** main.rs (1)

#### [Check if a file exists](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=0)** (upbeat chiptune music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=3)** - [Instructor] When you hit the Save button, you really want to make sure that the thing it is that you're working on actually gets saved to disk. Welcome to Challenge 12, "Check if a File Exists". We're going to be playing around with the file system, and validating that a file actually exists on the file system and also that you can write to it. To satisfy the requirements of the challenge, you'll need to implement the File [[Metadata]] trait for the path type defined in the standard path module. The File Metadata trait has three methods: Exists returns True or False, depending on whether or not the path actually exists on the file system already. is_writeable returns True when the user who is executing the code has the right permissions to that file, otherwise it returns False. is_readable is very similar to is_writeable but it relates to the read permission. Pause the video now and work on your solution. There are many ways to complete this challenge. You'll see one or two of the options available to you in the next half of the video when I demonstrate how I've solved it. (upbeat chiptune music) Hi, welcome to Challenge 12. This challenge involves implementing a trait for a type that exists somewhere else. And so the somewhere else is the standard path module
>
> **[1:43](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=103)** and we want implement this trait File Metadata for that foreign type. To do so, we have three methods: exists, is_writeable, and is_readable. To proceed here, we need a little bit of machinery from somewhere else in the standard library. So if we Import standard fs, fs standing for file system, we should be able to make a little bit of progress. Let's do the easy method first: is_readable. Okay, so if I am a path and self here is a path, it's an an instance of this path type from the standard path module in the standard library, then we can open it as a file. So we have fs::file::open and we'll give it (self), and if this succeeds, it returns a result. And if the result is okay, then our path is readable. That's great! (laughs) is_writeable, though, is a little bit more complicated. We need to actually go and check permissions and so forth. The file system module provides a function, Metadata, that takes a path again,
>
> **[3:19](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=199)** and also returns a result. And inside the result is this metadata object. Meta, uh, results can be mapped over, and so if I, m is a metadata object, it has a permissions method,
>
> **[3:44](https://www.linkedin.com/learning/level-up-rust/check-if-a-file-exists?u=76281980&t=224)** and if the permissions are read only then it's readable. If we say, if it's not read only, then it will tell us whether or not it was writeable and we'll just default to False. So if we receive an error, we will say that the path is not writeable. Now, exists is interesting because we don't actually require help from the file system module. We can actually call a method from path again. Path actually has an exist method, and so we can just dispatch to that method ourselves. There we are, our trait is implemented. I'll save my file and we'll run the code with cargo test and our test passed. Congratulations, I hope you've enjoyed the challenge. I'll see you in the next one. Bye-bye.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Metadata]] (6)
> **Code Identifiers:** is_writeable (4), is_readable (3)
> **CLI Commands:** make (2), cargo (1)
> **Definitions:** is a  (3)
> **Cross-References:** in the next (2)
> **Non-Speech:** (upbeat chiptune music) (2)
> **Analogies:** similar to (1)
> **Prerequisites:** you'll need (1)

#### [Interpret an RGB hex color](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980)

> [!transcript]- Transcript
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=3)** - Some of the first programming I ever did involved the web and searching for color codes that I would enter into my CSS files and I would have no idea how what I typed in became the color blue. Let's teach my 11-year old self what those color codes actually are. Welcome to challenge 13, RGB hex color code. In this challenge, we need to parse a string that encodes a color, such as #AE42F0, and convert that to a [[Rust (Programming Language)|rust]] type. To complete the challenge, you'll need to satisfy three requirements. First, design a data structure RGB. It can have any representation that you want. It just needs to be able to represent red, green, and blue. You need to implement the RGB channels trait. It's defined within the sample code. You'll also need to implement the FromStr trait for RGB that is defined in the standard Str module. Implementing FromStr will require you to design an error type as well. Let's spend a short moment going over what color codes are. Each of the four boxes contains a color that is represented by the hex codes next to them. If you've done anything on the web, you would've seen them.
>
> **[1:37](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=97)** In fact, I would be surprised if anyone coming to this course hasn't seen them before. So what are they? They're actually three pairs of hexadecimal numbers. Color codes use hexadecimal rather than decimal. That is, whereas decimal numbers are base 10, that is, they contain the digits zero through nine, hexadecimal numbers use base 16. Their digits go from zero to F. Allow me to show you what the significance of choosing 16 over 10 is. Let's consider how many numbers we could represent if we only had a single digit. We could represent zero through nine. If we had two digits available to us, we can represent 99 and then we get to 999 and then 9,999. You can see that as we increase the number of digits, we increase the orders of magnitude of numbers that we can actually represent. The hexadecimal numbers for the same values start off exactly the same but immediately they become very strange. 64 in hexadecimal actually represents the decimal number 100. The number 3E8 represents the decimal 1000. Conventionally, to distinguish between the two bases, programmers use the 0x prefix in their text,
>
> **[3:16](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=196)** which is what we'll do here. Now what happens if we swap the decimal numbers through to the hexadecimal side? We'll put the 0x back on there. Start with one again. Decimal 16, 256, and 4096. The orders of magnitude for hexadecimal numbers are much different than the base 10 equivalent. With one hex decimal digit, we can represent the numbers 0 through 15, then up to 255 with two. With three digits available to us, we can represent over 4,000 numbers. And with four, we can reach over 60,000. I mentioned before that hex color codes are made up of three pairs of two digit numbers. Therefore, each of those two digit numbers can represent the numbers between 0 and 255. Let's flesh that out in some more detail. The first thing to note is that there are three color channels being represented in here, red, green, and blue. So where are they? The red channel is on the left, the green channel is in the middle, and the blue channel is on the right. So if we pull those pairs out, there are the hex numbers that we need to interpret. So let's convert those to decimal. These values actually represent percentages. 255 would be 100%.
>
> **[4:51](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=291)** And so this particular color is made up of 95% red, 68% green, and 21% blue. Pause the video and implement the solution. I'm sure you're going to have lots of fun implementing this and I am excited to see what you get up to. You'll be able to see what I got up to in the next part of the video. Now we'll be able to say give us some more specific information. So for example, we may wish to say that red channel out of bounds
>
> **[5:35](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=335)** and then we could do the same for green and blue.
>
> **[5:46](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=346)** Now we can use those in here. So on line 46, if we will go from left to right and try and say FromStr and then we want to be able to parse part of the input text. And so I'll take a reference to text. It's actually hex cause we're inside the scope and we want to go from the zeroth to two. We'll take a slice and we'll use the 16 radix because we have hexadecimal numbers.
>
> **[6:47](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=407)** So the red channel is here. This one actually returns a result so we can get rid of the result by
>
> **[7:09](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=429)** converting it to our own error. We can get rid of the generic problem. So what I mean by generic problem is that FromStr radix or radix will return some error type or some error code but that's not very specific for anyone interpreting or reading. That's not very specific for anyone that's actually interpreting the error. We can provide our more specific error code or error message with this or else follow on method. The question mark at the end will attempt to apply the conversion to this FromStr with... The question mark at the end will attempt to apply the conversion and return the result and if the result isn't an error, will carry on. Otherwise our method will actually just abort right there.
>
> **[8:27](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=507)** So after red we have green. So I'll just copy and paste some more code. And the indices change. So they're at two and four. And this channel, the channel changes to green, and blue also changes, so B. The index changes four to six and blue channel has become out of bounds. We are now in the position where we can return a type and RGB should be close.
>
> **[9:24](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=564)** So if I clear the screen here and attempt to build, I get a couple of extra syntax warnings. Cannot find, oh, this shouldn't be debug, it should be derive. And the S isn't found. Oh, I see. So this is actually text.
>
> **[9:56](https://www.linkedin.com/learning/level-up-rust/interpret-an-rgb-hex-color?u=76281980&t=596)** The code builds and if we run the tests, they all pass. Congratulations. I hope that you've enjoyed watching the answers. I'll see you on the next challenge.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (1)
> **Env Vars:** rgb (5), css (1), ae42f0 (1)
> **Analogies:** such as (1), for example (1)
> **CLI Commands:** find (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** sample code (1)
> **Prerequisites:** you'll need (1)
> **Speakers:** - some (1)

#### [Run-length encoding](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=0)** (video game music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=3)** - I absolutely love playing with data. And this particular method we are going to touch on in this challenge is quite special. It's been around for a long time and is used to encode Conway's Game of Life patterns. Ever seen Conway's Game of life on the screen? Its chances are that it was saved to disk using this method called Run-Length Encoding. Our challenge is to encode and decode a String using run-length encoding. There are two requirements for this challenge, being able to encode a String to its run-length encoding form and to take that form and to turn it back into the original String. For any input running the encode step and then the decode step should result in the original String. For people who really enjoy cranking the dial on the difficulty here are two extra challenges. I challenge you to deal with long runs. That is you need to implement a system or an algorithm that handles the same character that occurs more than nine times in a row. This will actually pose a challenge with a naive decoding step. The second challenge is to be able to accept arbitrary byte streams. [[Rust (Programming Language)|Rust]] strings are guaranteed to be UTF-8. That means that it must be printable text. To take this challenge further, you should design an algorithm that allows
>
> **[1:37](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=97)** any input bites to be encoded whether or not they valid UTF-8 or not. Now let's take a quick look at how the algorithm works. As we pass through the input String the number of times that the character appears is printed before the character. The input string [[LinkedIn]] doesn't have any repetition in there. So, every character is prefixed with the number one. On the other hand, our example String below starts with five uppercase letter A's. So that is represented as 5A. Then the lower case A is 1A the final two uppercase A's are encoded as 2A. Now is the time for you to pause the video and implement run-length encoding. In the second half of the video you'll see how I've been able to implement it. (video game music) Hi, welcome to the answer section of the run-length encoding challenge. I hope you've enjoyed working through this one. It can, be solved in many ways and I'll be interested. I'd be, it could be solved in many ways and I'm really interested in looking through some of your solutions. Okay, over to main.rs we have a module run-length encoding
>
> **[3:13](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=193)** with two to do macros waiting for us. Let's go and fill them out. Okay, so we start, let's start by encoding text. So this would take a string such as LinkedIn and then provide a run-length encoded,
>
> **[3:38](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=218)** it would provide a String like LinkedIn and provide a, the run-length encoded value as its output. As you can see here, ABC up in line 19 is converted to 1A, 1B, 1C. Let's carry on. Okay, I first need to start with a few mutable variables and I'll call one count, which will be the count of, the number of, letters that I've gone through when I want to, I keep a track of the last
>
> **[4:27](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=267)** character that I visited or that I saw. And, (keys typing) I will create a String that has the capacity of let's say the input text. Hopefully it's shorter than the input text, but we'll just leave it for there and we'll create an, we'll just, we also need to kind of keep track of the characters and so I will, or at least the iterator over the characters. And so I'll have that as an independent variable that I will be able to manipulate, excuse me, that I'll be able to manipulate as we go through. Okay, so while that will continue to loop until, the condition no longer holds and our condition will be the characters' variables has a next method. And if that doesn't return some the loop will terminate. (keys typing) If previous is none, (keys typing) assign previous to be
>
> **[6:03](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=363)** (keys typing) oh gosh. If previous is none assign previous to be the sum of C. What that is saying is that we are essentially filling in the value. And this will probably only happen once. If previous unwrap, so we know now at line 13 that previous must be Some, it's no longer None. So we can safely unwrap. If the previous value doesn't equal C or if the count equals nine, then I need to push a new String into encoded. The reason why I'm stopping at nine is because I don't want to have to deal with multi character digits because I don't want to distinguish between the input numbers having, I don't want to distinguish between the actual text itself having a number and the number in my encoding. (keys typing) So push String and I'm going to take a, at least I'll do it in a way that makes,
>
> **[7:36](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=456)** makes sense at first. I'm going to create a String with format. I'll do them in two steps so, (keys typing) I'll create a variable new fragment that is a String. The format maker creates a String for us and that will be a count, and the current or the previous character.
>
> **[8:11](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=491)** And then to push_str I need to actually take a reference to new fragment. At this point, I now need to reset count. (keys typing) Ah. I was reading over my answer and I've seen a lot I have done. Okay, so this makes a little bit more sense. We'll leave that for later. Up here in my while loop, I now need to reassign previous to be the current character. And the other thing I need to do is increment count. So, at the end of line 21 we've gone through the entire input String but it's possible that previous still has a value. And, the last step, or this last section between lines 23 and 26 will guard against that are not being counted. Okay, so this should be my encode steps done. I'm just going to try and test the code there to see if I've, so I've got two new passes that's useful but the roundtrip has failed. This is saying that I can't
>
> **[9:44](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=584)** the roundtrip test will check that I can both encode and decode that has failed, which makes sense because decode has not yet been implemented. Okay. (keys typing) So to decode a String, or our text we'll create another String and this will have, the capacity of text.len. And the reason why we take the with capacity is it will reduce the number of memory allocations later on. It's possible to be more precise by taking a more accurate guess of how compressed the String will end up but keeping the, or allocating the same number will be, it's fine, for the purposes of this example. The line 32 we create our char or our char or char variable which is an iterator over the text. Now we have another while let loop and this one's slightly more, well slightly more complex. We have a sort of, a different pattern where we are pulling out a number and a character.
>
> **[11:24](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=684)** If you recall I, made it impossible to encode or have any of the number, the counts being multiple digits. And so we cap it at nine, which means that I can guarantee that N will always be one character wide and therefore Some is always going to be the character that the N is representing. Now we just need to do a tiny bit of a conversion to convert in to a digit and I'll, it's base 10 and I'll unwrap that because I'll assume that I never have an illegal encoding
>
> **[12:20](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=740)** and then I need to push two encoded the character of that C represents for N times. Towards the end or at the end I then return decoded if I save there, clear the screen and rerun the tests. I have a couple of mistakes to fix
>
> **[12:59](https://www.linkedin.com/learning/level-up-rust/run-length-encoding?u=76281980&t=779)** but everything goes okay, so well done. If you have got yourself through that challenge I know that it can be a little bit complicated. You're doing really well. We only have a couple to go, so we are nearly there. Well done. Bye-bye.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[LinkedIn]] (3), [[Rust (Programming Language)|Rust]] (1)
> **Non-Speech:** (keys typing) (8), (video game music) (2)
> **Definitions:** means that (2), is a  (1), is an  (1)
> **Env Vars:** utf (2), abc (1)
> **File Paths:** main.rs (1)
> **Code Identifiers:** push_str (1)
> **Analogies:** such as (1)
> **Speakers:** - i (1)

#### [Handle inconsistent dates](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=0)** (retro video game sound effects)
>
> **[0:04](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=4)** - [Instructor] Welcome to [[Rust (Programming Language)|Rust]] Code Challenge 15, flexible date parsing. If you've ever encountered free text date entry this challenge is for you. We are going to be creating a function that can correctly parse multiple date formats. The requirements for the challenge are to have a flexible parser that can parse dates from the following patterns. We have a combination of years being either at the start or the end. Delimiters could either be spaces, dashes, dots, or slashes. And we also want to be able to enable the American style of using a month to start and then the day, as well as the international style of a date first followed by a month. If you would like an extra challenge, you can include or invent more formats than you've ever seen. You could add locales, so instead of just using the English words for the months, you could include more languages. You could add some more sophisticated heuristics for handling ambiguous cases. Jump into the sample code for the challenge and try to implement the parsing function. In the [[Representational State Transfer (REST)|rest]] of the video you'll see how I've implemented it. Good luck. (retro video game music) Welcome to the answer section.
>
> **[1:39](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=99)** I hope that you have enjoyed working through this challenge. Working with messy data is always particularly annoying so let's hope that we can work on solving this kind of problem with Rust. Our first step is actually going to be to create a helper function and I want to create a function that is going to tell me whether or not a string, and I'll just call it text, and give it type string slice, is a year or represents a year. And so to do so, I will say that if my text has length of four, and, if, sorry, text characters, if they're all ascii digits, then I will assume that the text actually a represents a year. Now this isn't a particular, potentially, the the best way, because
>
> **[3:17](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=197)** I could put in 9999, and maybe that is a year, possibly, probably it's not. Anyway, (laughs) that will get us through what we need for this challenge. Okay, so let's start with our flexible date parser. And our first step will be to trim any white space. And so if I have any white space there, I can take the trim method and that will clear it all up for me.
>
> **[3:54](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=234)** If there are no numbers in my string, then there is no reason to proceed. So if text, and I checked, I used the characters method before, so I might as well use it again, and if any of them is an ascii digit or at least if none of them, so we'll say the inverse, then I can return none straightaway, there is no date in here. Now I've presumably, if I've got a date, and here are some formats between lines 21 and 25. They're all, they have some sort of delimiter and so therefore I need to split my text up using these delimiters. So, how should I do so? Well, one way would be to create a variable called fields and I will split the text and give it a set of patterns. So one would be slash, and I will take a hyphen, a dot there, or even a space, and I will set this array, we want as a slice,
>
> **[5:28](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=328)** so that it can be used into a split. And then we need to collect. This split method will return iterable, and collect will take the iterable and return it into a single type or a single collection. And we are going to collect into a vector. The underscore between the type or in the position of a type variable just tells Rust that it is free to choose the type itself.
>
> **[6:11](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=371)** Now for every field in &fields, if, we now need to start parsing these and interpreting what we've got, actually I'll start off by saying that, do I have a year or not at first? Do I have a month? Not yet. And do I have a day? Well, hopefully soon. If field length is less than three, there's nothing to do, so we shall skip that. Turns out that what we are trying to hunt for first is the month. The way we'll look for it is if,
>
> **[7:16](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=436)** we will match on the lowercase value of field and, we'll actually only match on the first three letters. And if you'll excuse me, I'm just going to copy and paste. A few month names that you've probably seen before. (laughs) And if we haven't seen if we find something else, we'll just continue. There's nothing to do here. We haven't found a month, but if we have found a month, then we've got some work to do. We can't directly use the variable name month, by the way, because month is an option. We actually need to assign it later. So month becomes Some of m.
>
> **[8:29](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=509)** Now that we hopefully have a month field we can try to distinguish between the year and the day of the month and potentially we might also even be able to find months as numeric values. So we're going to loop over the fields again and if the field is a year, then, my year variable, we can parse it as an i32
>
> **[9:28](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=568)** and then convert the result into an option with the ok method of result. And we are done with that field, so we can continue. If it's not a year, we've got to distinguish about whether or not we have found a month or have we found the day. So if we already have the month,
>
> **[9:58](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=598)** then we assume that,
>
> **[10:11](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=611)** if we already have the month, then we assume that we are dealing with the day of the month. And if we don't, then we assume that we are dealing with the month number as is. So (laughs) let me, I was going to avoid some duplicate effort. I just am going to copy this from line 50. We assume, by the way, that there should be no negative numbers, so we'll just turn that
>
> **[10:56](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=656)** to a u32. I'll ignore that for now. I wanted to do this just once, but, let's not worry. Then we've dealt with month, day, day, month, and hopefully year. And now our question is, okay, so, given that we have some, potentially most, hopefully all of these three variables, a year, month, and day, what can we create from them in terms of an actual Rust type? So there's some work to do over here. First I've got the case to deal with where I've got a year and a month, but no day. And I also have the case where I have all three.
>
> **[12:15](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=735)** And I currently don't deal with having, say, just the year. So down the bottom I have, there's nothing to do, but up the top, there are two cases in which I am actually able to get something done. If we look at the import that's provided, it's this NaiveDate thing. NaiveDate has a constructor from year, month, day, and then optional. And then it's year, month and then I will provide one as the default.
>
> **[13:05](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=785)** And otherwise,
>
> **[13:14](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=794)** I will use d in the next row, on next line. Hopefully this will happily compile. Okay, after taking a little bit of time, because we had to compile a dependency, we need to double check a few things.
>
> **[14:02](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=842)** It looks like I've got a few semicolons in the wrong place. Let's start with up the top. So the first thing that I will need to do is fix this borrow. Let's see. And the other thing that I want to do is that I have expected a unit, but I've found an option.
>
> **[14:50](https://www.linkedin.com/learning/level-up-rust/handle-inconsistent-dates?u=76281980&t=890)** That is because, I think that this is actually part of a loop that I shouldn't have had in the position it was, because there's no point in attempting to return the value (laughs) from inside this loop here. So I'm going to try and fix this. If you are also seeing these deprecated warnings, don't worry, they won't affect your code. Okay, with that, we have reached the end of the answers. Again, I hope that you have enjoyed the challenge and I'm looking forward to seeing your answers. See you on the remaining challenges.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (4), [[Representational State Transfer (REST)|Rest]] (1)
> **Definitions:** is a  (3), is an  (1)
> **CLI Commands:** find (2)
> **Non-Speech:** (retro video game sound effects) (1), (retro video game music) (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### [Travel planner](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=0)** (lively chiptune music)
>
> **[0:03](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=3)** - [Instructor] One of the most challenging elements of [[Rust (Programming Language)|Rust]] is data access. This challenge is really going to test our ability to mutate and share data in different parts of the program. Welcome to Challenge 16, find a way home. In this challenge, we'll try to find the shortest path between any two points in a network. Our requirements are to implement shortest path. You can implement any algorithm you want, but do use the graph data type that has been defined within the sample code. Your implementation should be fast. You should be able to search a network of around 10,000 nodes and 40,000 edges, that is a link from one node to another, within a second. Here is a bit of a visual overview of what I mean by network and searching. In front of us, we have a set of dots which might represent places that we could visit. We start in the top left, and we want to find a path to the bottom right. And visually we make a connection that looks like this. Our brains naturally understand spatial information. When they see a grid, they're going to make connections, will automatically try and figure the fastest way through. But what if we don't know the nodes, and we don't know the shape of the grid, or how far away any of the points are?
>
> **[1:40](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=100)** Or instead of it being a regular grid, what if the path was completely random, and we could only detect how far away the next node is by visiting one? While that's the problem we're faced with here, we need to walk through our maze and uncover the fastest way through it. I did mention the graph data type earlier. This is what it looks like. If you are familiar with graph theory this is an adjacency matrix representation. I have two type aliases, node and cost. They are both unsigned integers. There are two fields available, an edges field that maps from a specific node, to every node that it is connected to, along with an associated cost of travel to that node. And there's also a set of all nodes in the graph, in case that's useful to you. Okay, I'm looking forward to seeing how you implement this. There are lots of choices available to you, and I think you're going to have a lot of fun implementing graph search in Rust. In the next part of the video, you'll see how I've implemented it. (lively chiptune music) So step is a structure. Or at least it is in my... The cost of our next step is a cost,
>
> **[3:19](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=199)** and we have the position where we are now as a node. And then we have our history, was just where we came from.
>
> **[3:39](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=219)** By the way, I trailed off there when I was describing step. (laughs) It is in my implementation, is what I meant to say, or in my answer. And I want to derive a couple of things just to make life easier for myself. I want to be able to clone my steps as well as implement, do a quality testing as well, so I've derived EQ, short for equality, as well as partial EQ. Now I want to implement just a couple of methods. In fact, maybe just one or two. So I'll just implement, I'll create an impl block for step.
>
> **[4:33](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=273)** From some position as a cost. And then history, as back of node. And then I return self with a capital S. And I think I can just copy that from here. And... Oops.
>
> **[5:10](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=310)** Remove types, they're not required.
>
> **[5:18](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=318)** And the other method that I want is the from start that I created. From start is different, because it doesn't have a history. And so, I can potentially...
>
> **[5:37](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=337)** And it also doesn't even have a cost as well, it just has a starting position. Now, one way to do this would be to kind of make use of our constructor
>
> **[6:00](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=360)** that we just created. And we should rename this so that it is actually representing what we want. Okay, so now we have the step from start method. And we have one item in our priority queue. We just have the [[Representational State Transfer (REST)|rest]] of the graph to search from, so that's good. We've got a big while loop. While let some step. And we'll break out the costs. Position, and we'll be able to adjust history, because we want to be able to add things to it. Priority queue dot pop, so we're going to pop the cheapest path from the queue.
>
> **[7:10](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=430)** The whole point of the priority queue is that we'll automatically re-rank items as their costs change. If position equals the goal, we are done. We need to add the goal position or the destination to the thing, to our history, and then we return. We have found a path, so we will turn history as well as cost. And we're finished. If we are not finished, then (chuckles) we've got to do some searching. Okay, so, if let some destinations.
>
> **[8:05](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=485)** And I'll use plural there. And I'll go check. So G edges, get. Oh by the way, the graph data structure has an edges field, which is providing the get method. And I want to get the position that I'm currently in now. Get takes a reference to the thing that I am looking for. And for...
>
> **[8:47](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=527)** Next destination, and next cost. In destinations.
>
> **[9:02](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=542)** If the next cost is less than the cost
>
> **[9:12](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=552)** that I've already assigned to that node, then. No actually, I'll... And by the way, I've got a destination for all the nodes in the graph, I just have given them there this max value. Then I could put in a new step.
>
> **[9:45](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=585)** Now, the step has the next position. The current cost plus the cost to get to there, that next position, and then a clone of the history.
>
> **[10:09](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=609)** We add ourselves to the history of the next, and then we add to the priority queue. Oh sorry, we add next to the priority queue with the push method. What this is doing is, if we've found a cheaper way to get to a given destination, add it to the queue.
>
> **[10:43](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=643)** So this priority queue thing, which is defined up in line 60, is actually, it's acting as a sort of a search. Well, it's a search queue, that's keeping the closest nodes at the top.
>
> **[11:18](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=678)** We now need to update old cost to its new value that we have discovered. If we get all the way through the graph, and we haven't found our goal, sadly, we then return none.
>
> **[11:50](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=710)** Oh, we've got a couple of compile errors, and...
>
> **[12:04](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=724)** Let's fix those up, so we need to derive ord as well as partial ord. Which means that the type is able to be compared.
>
> **[12:23](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=743)** Okay, the code now builds, that's useful, and I will run cargo test.
>
> **[12:37](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=757)** Ooh, we've got one failure.
>
> **[12:45](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=765)** Okay, so I've just done a little bit of digging, (chuckles) to figure out what the problem was. And it turns out that I was a little bit quick on my just implementing ord and partial ord. Steps are not being... We need to define more precisely what we mean by two steps to be compared with each other. So if I implement ord for step, I'll need to do it manually, rather than just using the derive macro itself.
>
> **[13:29](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=809)** Okay, so one way to cheat if you don't remember the code that you need to implement is to ask the compiler by trying to compile it yourself. And, oh, it's doing something a little bit different than I expected it would. So, let's just implement CMP. And take a reference to myself and the other thing that I'm comparing to, which is a reference to some object that has the same type, which is annotated, which is described as capital S self. I return something called an ordering, which is an enum that has a greater than, an equals, and a less than variant. And so... The first thing that I do is I'm really comparing the cost, with my cost. And then, if the costs are equal, I then compare position.
>
> **[14:52](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=892)** The partial ord trait is analogous
>
> **[15:04](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=904)** to the partial equality trait, it exists for floating point numbers, where there are some values in the type that cannot be compared with other values, or that are mathematically undefined. And so, we can just defer to, it's exactly the same, except that it returns an option of ordering, so we can actually just defer to our comparison method.
>
> **[15:37](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=937)** That we've just defined. Okay. Hopefully the code should build. And here is the thing that I need to pull in, from the standard comparison module.
>
> **[16:05](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=965)** Great, code now builds, and hopefully the tests pass.
>
> **[16:14](https://www.linkedin.com/learning/level-up-rust/travel-planner?u=76281980&t=974)** (chuckles) Perfect, okay. Phew, well done (chuckles). That gave everyone a scare. Okay, last challenge. I shall see you very soon.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (2), [[Representational State Transfer (REST)|Rest]] (1)
> **CLI Commands:** node (9), make (4), find (3), cargo (1)
> **Definitions:** is a  (5), is an  (2), short for (1), means that (1)
> **Non-Speech:** (lively chiptune music) (2)
> **Env Vars:** cmp (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [instructor] (1)

#### [Final challenge: Vigenère cipher](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=0)** (retro music)
>
> **[0:11](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=11)** - [Narrator] When I was little, I was absolutely fascinated with hidden messages and I am extremely excited about this challenge because we get to work with a cipher that lasted for 300 years. Welcome to challenge 17, decrypt cipher text. In this challenge, we'll be implementing a vigenere cipher decoder. That is a function that can decode or decrypt vigenere ciphers. The requirements are to implement the vigenere decrypt function and decrypt the hidden message that's provided in the sample code with the key WHYRUST. As a bit of a teaser, here is a hidden message. Have a go at implementing the cipher now. There are hundreds of tutorials, probably thousands all over the web and it's a really interesting exercise. You'll see how I implemented it in the next segment.
>
> **[1:15](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=75)** Okay, now we need to decrypt a secret message. The message has been decrypted using a vigenere cipher and it's our job to write up the decryption algorithm.
>
> **[1:34](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=94)** So we've got a module here, vigenere. I suppose in some sense the encrypt method is optional because we really care about decrypting the cipher text on lines 14 through 16. So allow me to start with a couple of constants and the alphabet that we will be encoding is an array of U8 integers. So we'll just be using the len alphabet. And to do so, I am going to.
>
> **[2:32](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=152)** You know what? The easiest way to do this without making a mistake is to copy it across from here.
>
> **[2:44](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=164)** To make the syntax a little bit easier, I am also going to create a constant A or capital aa, which is a byte literal of the S key value for the capital letter A. And I'm going to do the same for Z. And I will wrap at 26, which happens to be, by the way, the alphabet len.
>
> **[3:26](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=206)** So I need a helper function, which will be clean input
>
> **[3:39](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=219)** and the clean input will take some text, which we'll call input. And it will return an iterator of U8 values. So, it will return an iterator of bytes. Now the syntax here looks a little bit scary if you are less familiar with [[Rust (Programming Language)|rust]], but what this will do is, so the U8 here is a byte, and so all of these letters in the alphabet are bytes, and iterators also have a lifetime attached. And we can use the anonymous lifetime to indicate that.
>
> **[4:33](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=273)** So we go over our input and ask for its bytes
>
> **[4:41](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=281)** and then we filter the bytes that we don't care about. And the bytes we do not care about are, well anything that's not A to Z. A to Z.
>
> **[5:10](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=310)** So if we see any lower case letters, we sort of need to remove or subtract the S key value of a. It turns out that the way that the S key encoding works is that they're all about
>
> **[5:34](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=334)** 30 positions away from each other. And so the lowercase letters are higher and you can perform the subtraction to basically replace the value with its uppercase equivalent.
>
> **[6:00](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=360)** Oh, and if we don't see anything that we understand, return none and then it will get filtered out. Okay, so how do we decrypt our cipher text? Well, the first thing we need to do is create a iterator over our key, I'll call it key-iter.
>
> **[6:27](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=387)** We have a string and or a string slice. So we need out the bytes and we will map each byte from the key
>
> **[6:45](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=405)** and cycle. And so key-iter will just continually operate forever.
>
> **[7:10](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=430)** We need to clean our cipher text up. Cipher text, by the way, is now an iterator, so I can map over that and for every character X, I would like to perform the decryption steps. And so to do so, I take the next value
>
> **[7:42](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=462)** from the iterator and unwrap because the next method
>
> **[7:50](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=470)** will return an option which we know will never return none given the cycle will continue forever. And now we have a little bit of mathematics to do.
>
> **[8:27](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=507)** So the maths here are that we take the character X and then we adjust it by the lowest value in A, so we are now in a range between zero and 26, and then perform a modular operation. And we should now have the decrypted value, as long as I have everything correct.
>
> **[9:19](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=559)** Now I should be able to execute main now.
>
> **[9:37](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=577)** Oh, I've got several errors to fix. Perfect. I shouldn't have expected it to compile it first go. Saying it's an exclusive range, which is not what I want actually. I need the equals symbol sign here as well to say that it is.
>
> **[10:14](https://www.linkedin.com/learning/level-up-rust/final-challenge-vigenere-cipher?u=76281980&t=614)** Another typo. Aha, to empower everyone is the cipher text or is the clean text for WHYRUST. And I hope that you have felt empowered through all of these challenges. I'm very much looking forward to seeing your answers and I hope that you've learned a lot. Please reach out if I can be of any assistance. Thank you so much. I hope you've had a wonderful time. Bye-bye.

> [!info]- Semantic Content
>
> **Frameworks & Libraries:** [[Rust (Programming Language)|Rust]] (1)
> **Definitions:** is a  (4), is an  (1)
> **Env Vars:** whyrust (2)
> **CLI Commands:** make (1)
> **Cross-References:** in the next (1)
> **Exercise Files:** sample code (1)
> **Speakers:** - [narrator] (1)
> **Non-Speech:** (retro music) (1)


## Instructor

- [[Tim McNamara]]

## Resources

- Exercise files available
- [GitHub Repository](https://github.com/LinkedInLearning/level-up-rust-3041143/codespaces)

## Skills Covered

- Rust (Programming Language)

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