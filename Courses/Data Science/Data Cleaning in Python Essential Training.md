---
type: course
cssclasses:
  - lle-course
  - lle-level-intermediate
slug: data-cleaning-in-python-essential-training-17061364
url: "https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364"
duration_minutes: 60
duration: 1h
level: Intermediate
updated: 10/10/2025
learners: 99574
skills:
  - Python (Programming Language)
  - Data Cleaning
exercise_files: false
github: "https://github.com/LinkedInLearning/data-cleaning-in-python-essential-training-3086536/codespaces"
thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQG16fbd1_fa8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667582799961?e=2147483647&amp;v=beta&amp;t=oq32b6x6vB4v0vfTtYMIsLW3eygzC_BuGdpxcn2chmA"
linkedin_topic: Data Science
learning_paths:
  - '[[Introduction to Fundamental Skills for Data Work- Data Processing]]'
  - '[[Become a Data Analyst]]'
prev_courses:
  - '[[Python for Data Science and Machine Learning Essential Training Part 2]]'
  - '[[Complete Guide To R Wrangling Visualizing And Modeling Data]]'
next_courses:
  - '[[Apache Spark Essential Training- Big Data Engineering]]'
  - null
path_nav: '[{"path":"Introduction to Fundamental Skills for Data Work- Data Processing","position":4,"total":7,"prev":"Python for Data Science and Machine Learning Essential Training Part 2","next":"Apache Spark Essential Training- Big Data Engineering"},{"path":"Become a Data Analyst","position":12,"total":12,"prev":"Complete Guide To R Wrangling Visualizing And Modeling Data","next":null}]'
path_count: 2
tags:
  - course
  - topic/artificial-intelligence
  - topic/data-science
  - skill/python-programming-language
  - skill/data-cleaning
status: not-started
created: 2026-04-28
---

> <!-- lle:github-source --> [View this note on GitHub](https://github.com/thisis-romar/linkedin-learning-vault/blob/github-browse/Courses/Data%20Science/Data%20Cleaning%20in%20Python%20Essential%20Training.md)

![Data Cleaning in Python Essential Training](https://media.licdn.com/dms/image/v2/D560DAQG16fbd1_fa8w/learning-public-crop_675_1200/learning-public-crop_675_1200/0/1667582799961?e=2147483647&amp;v=beta&amp;t=oq32b6x6vB4v0vfTtYMIsLW3eygzC_BuGdpxcn2chmA)

# Data Cleaning in Python Essential Training

> If you’re looking for more efficient ways to prepare your data for analysis, it’s time to level up your skill set and reassess your approach to data cleaning. In this course, instructor Miki Tebeka shows you some of the most important features of productive data cleaning and acquisition, with practical coding examples using Python to test your skills. Learn about the organizational value of clean 

> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364) | 1h | Intermediate | 100K learners
> [Jump to Path Context ↓](#path-context)

## Table of Contents

### Chapter Overview

- **[[#1. Introduction]]** (2 videos)
- **[[#2. 1. Bad Data]]** (4 videos)
- **[[#3. 2. Causes of Errors]]** (5 videos)
- **[[#4. 3. Detecting Errors]]** (8 videos)
- **[[#5. 4. Preventing Errors]]** (8 videos)
- **[[#6. 5. Fixing Errors]]** (8 videos)
- **[[#7. Conclusion]]** (1 videos)

### 1. Introduction

#### Why is clean data important?
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/why-is-clean-data-important?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/why-is-clean-data-important?u=76281980&t=0)** - [Miki] Real world data is messy.
>
> **[0:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/why-is-clean-data-important?u=76281980&t=3)** It contains bad values, spelling mistakes, and missing data.
>
> **[0:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/why-is-clean-data-important?u=76281980&t=8)** It is estimated that data scientists spend between 80 to 90% of their time cleaning data.
>
> **[0:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/why-is-clean-data-important?u=76281980&t=15)** Lucky for you, Pandas and Python are great tools for cleaning data.
>
> **[0:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/why-is-clean-data-important?u=76281980&t=21)** In this course, we'll cover many methods of cleaning data.
>
> **[0:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/why-is-clean-data-important?u=76281980&t=24)** We'll also cover how to avoid some common mistakes, detect bad data and monitor the quality of your system.
>
> **[0:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/why-is-clean-data-important?u=76281980&t=32)** Let's get started.

> [!info]- Semantic Content
>
> **CLI Commands:** python (1)
> **Code Keywords:** let (1)
> **Speakers:** - [miki] (1)

#### Using Codespaces
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=0)** - [Instructor] This is Ravi Del Lobos senior staff instructor at LinkedIn Learning, and I'm going to show you how to work with LinkedIn Learning courses using GitHub Code Spaces.
>
> **[0:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=9)** Code Spaces is a code editor in the cloud with the full power of Visual Studio Code.
>
> **[0:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=14)** It allows for real world hands on practice that mirrors software development in the workplace.
>
> **[0:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=19)** This course was created using GitHub code spaces.
>
> **[0:22](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=22)** Using code spaces, you have everything you need to get going without needing complex installations or build tools.
>
> **[0:29](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=29)** One click and you're ready to go.
>
> **[0:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=32)** To practice along with the course, you can create a code space directly from the course overview page.
>
> **[0:38](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=38)** First, click open next to GitHub Code Spaces.
>
> **[0:42](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=42)** If you're already logged in, you'll be directed to a Getting Started with GitHub Code Spaces page.
>
> **[0:48](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=48)** If you're not logged in, you'll be prompted to log in or create a free GitHub account first.
>
> **[0:53](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=53)** From this page, click on Create Code Space on main.
>
> **[0:58](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=58)** The first time you open up a code space it might take a few minutes to create the virtual machine.
>
> **[1:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=64)** Once it's done, you'll enter the code editor environment.
>
> **[1:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=68)** If you're familiar with Visual Studio Code, this is a special version of that editor running on GitHub's servers.
>
> **[1:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=75)** Your course can have one or more extensions pre-installed based on the course you're taking.
>
> **[1:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=80)** Those can be found in the extensions panel.
>
> **[1:25](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=85)** Because this is a browser, it's easy to inadvertently close the browser window and lose the editor.
>
> **[1:31](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=91)** If you do that don't panic, code spaces saves everything you're doing on a virtual machine.
>
> **[1:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=97)** You can always get the code space back for this repo right here.
>
> **[1:46](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=106)** Notice that it even remembered that I had opened the extensions panel.
>
> **[1:51](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=111)** An alternate way to create a code space is directly from one of our courses GitHub repositories.
>
> **[1:57](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=117)** From here, click code and then create code space on main.
>
> **[2:02](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=122)** You can also restart a previous code space from this location.
>
> **[2:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=126)** GitHub Code Spaces is compatible on devices with smaller screen sizes, like mobile phones or tablets, but it is optimized for larger screens so we recommend that you practice along with this course on a laptop or desktop computer.
>
> **[2:22](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=142)** The sample course I'm looking at is what is known as a flat branch repository.
>
> **[2:27](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=147)** You can tell because there's a single branch when you click on the branch icon on the status bar.
>
> **[2:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=152)** You can also tell because there are different folders for each of the videos in the course.
>
> **[2:38](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=158)** This is a sample of what a multi branch repository looks like, which is more common when you're working with web frameworks.
>
> **[2:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=165)** If you go to the branch icon on the status bar, you can see that there's more than one branch.
>
> **[2:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=170)** You can switch to the different branches using this menu.
>
> **[2:54](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=174)** The branches are named with the chapter and the video number you're watching.
>
> **[2:58](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=178)** If you see a B at the end of the branch, that's how the code looked at the beginning.
>
> **[3:02](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=182)** If you see an E, that's how the code looked at the end.
>
> **[3:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=186)** Let's switch to how the code looked on chapter two and the third video.
>
> **[3:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=192)** I'll choose the beginning branch.
>
> **[3:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=195)** As you work through a course you might make some changes on a branch.
>
> **[3:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=199)** I'm going to make a minor edit on the index html file right here.
>
> **[3:27](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=207)** I'm going to go ahead and save that, and you can see that I've modified this file because there's an M right here and the branch name now has an asterisk on it.
>
> **[3:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=217)** If I try to switch to another branch that causes major changes like say, 0703E, I may see a dialog box like this.
>
> **[3:49](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=229)** If you don't care about saving your changes, you can simply hit the force checkout button.
>
> **[3:54](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=234)** It will let you switch to that branch.
>
> **[3:57](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=237)** You can then choose to discard the changes on this file.
>
> **[4:01](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=241)** Your instructor will let you know what the folder structure is for your course.
>
> **[4:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=246)** Forking lets you create your own copy of the repository on your account so that you can keep any changes that you've made, even if you've deleted the code space.
>
> **[4:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=256)** To create your own fork, you can click on the fork button on their repository.
>
> **[4:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=263)** I'm going to hit Create Fork.
>
> **[4:27](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=267)** I have my own copy of this repository, and if I want to I can start a new code space on that fork.
>
> **[4:39](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=279)** This fork version is almost exactly like the original repository, but it will let you push your own changes.
>
> **[4:46](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=286)** Notice that the URL of the repository is slightly different.
>
> **[4:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=290)** Let's go ahead and make a simple change to this file right here.
>
> **[5:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=300)** I'm going to save it.
>
> **[5:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=303)** You'll note that there is an M right here as well as an asterisk on this branch.
>
> **[5:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=308)** In the source control panel, you can also see a one for the change that we just made.
>
> **[5:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=314)** Let's go ahead and try to commit this change.
>
> **[5:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=320)** I'm going to hit the commit button and I'll ask it to go ahead and stage the changes, and then I'm going to hit this button here.
>
> **[5:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=332)** I'll hit okay.
>
> **[5:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=334)** You can also let it go ahead and run, get fetch.
>
> **[5:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=337)** That way it'll automatically sync with your forked repo.
>
> **[5:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=341)** Now that change will be stored in your own version of this repository.
>
> **[5:46](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=346)** Don't worry if you forget to fork a repo and then try to push changes.
>
> **[5:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=350)** Code spaces will also ask you if you want to create a fork automatically.
>
> **[5:55](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=355)** Look for additional core specific tips from the instructor.
>
> **[5:58](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/what-you-should-know?u=76281980&t=358)** Now, let's get back to the course.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8), switch (4), this. (1)
> **Tools:** github (8), visual studio (2)
> **UI Navigation:** switch to (3), click on (2), go to (1)
> **Definitions:** is a  (4), known as (1), is an  (1)
> **CLI Commands:** make (3)
> **Env Vars:** url (1)
> **Warnings:** note that (1)
> **Prerequisites:** getting started (1)


### 2. 1. Bad Data

#### Types of errors
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/types-of-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/types-of-errors?u=76281980&t=0)** - [Instructor] You will have errors in your data.
>
> **[0:02](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/types-of-errors?u=76281980&t=2)** We'll discuss the cause for these errors in another video, but for now, let's have a look at some of the common errors.
>
> **[0:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/types-of-errors?u=76281980&t=10)** One of the most common errors is missing values.
>
> **[0:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/types-of-errors?u=76281980&t=13)** For example, if you have our shopping cart data, when you look closely, you can see that on the third line, the amount is missing.
>
> **[0:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/types-of-errors?u=76281980&t=23)** Another type of errors are bad values.
>
> **[0:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/types-of-errors?u=76281980&t=26)** For example, in this shopping cart data, you can see that $217 for three pounds of carrot is a bit extreme.
>
> **[0:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/types-of-errors?u=76281980&t=36)** And the last type I'm going to mention is duplicated data.
>
> **[0:42](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/types-of-errors?u=76281980&t=42)** If you look at this data, you will see that line number three and number five are duplicated.
>
> **[0:49](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/types-of-errors?u=76281980&t=49)** These three kinds of errors are the ones I find most in data sets, and we'll cover how to detect and how to fix them.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Missing values
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=0)** - [Instructor] Let's have a look at shopping cart data.
>
> **[0:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=6)** Here is the data in a CSV format.
>
> **[0:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=8)** We have the date, the name, the amount and the price.
>
> **[0:11](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=11)** And sometimes we see things that are missing.
>
> **[0:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=14)** For example, the date from here and the name from here.
>
> **[0:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=19)** Let's load the data.
>
> **[0:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=20)** So we import pandas as pd.
>
> **[0:25](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=25)** And then we load the data frame and read in the data.
>
> **[0:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=28)** I'm going to hide the menu on the side.
>
> **[0:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=33)** And now we run the cell, we're reading the cart and we say parse_dates of the date column.
>
> **[0:39](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=39)** And we look at the data frame.
>
> **[0:40](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=40)** And we see several missing values.
>
> **[0:43](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=43)** Here we see NaN, not a number, and here we see NaN again.
>
> **[0:48](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=48)** In the date column, we see NaT, not a time.
>
> **[0:53](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=53)** Pandas is trying to use the right missing value per type.
>
> **[0:57](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=57)** Pandas also treat Python's none as a missing value.
>
> **[1:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=63)** If you look at the amount column, you will see that it is a float.
>
> **[1:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=68)** You can do it also by writing data frame.dtypes and hit Enter.
>
> **[1:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=75)** And you see that the amount is float64.
>
> **[1:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=80)** The problem is that integers do not have missing values.
>
> **[1:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=84)** So pandas will convert integers to floating points in order to accommodate missing values.
>
> **[1:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=92)** Panda also have an IntegerArray type, which you can have integers with missing values.
>
> **[1:40](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=100)** Let's do df amount astype Int32.
>
> **[1:43](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=103)** And if you're going to run this cell, you're going to see now we get integer and another missing value, NA.
>
> **[1:53](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=113)** How can you programmatically find out where are these missing values?
>
> **[1:58](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=118)** You can use the pandas.isnull function or the isnull method of the data frame.
>
> **[2:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=124)** So if I'm going to run data frame isnull, I'm going to get a data frame with true and false per cell but this is usually not what we want.
>
> **[2:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=135)** In my case, I want to find out rows that have a missing value.
>
> **[2:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=139)** So I'm going to do isnull and then ask any, so any of the value in the row in the first axis, the rows.
>
> **[2:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=146)** If I'm going to run this cell, I'm going to see the rows that have missing values in them.
>
> **[2:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=153)** Note that the empty string is not considered a missing value.
>
> **[2:38](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/missing-values?u=76281980&t=158)** You will need to use Boolean indexing to find this.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), type. (1), type, (1), function (1), case, (1)
> **CLI Commands:** find (3), python (1)
> **Code Identifiers:** parse_dates (1)
> **Env Vars:** csv (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Warnings:** note that (1)
> **Speakers:** - [instructor] (1)

#### Bad values
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=0)** - [Instructor] Your data will have bad values.
>
> **[0:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=3)** When I say bad, I mean data that was generated by error.
>
> **[0:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=8)** It can be out of scale values such as a thousand degrees for our body temperature, maybe spelling mistakes, and others.
>
> **[0:17](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=17)** Let's have a look at some metrics data.
>
> **[0:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=20)** Here we have a CSV with time, name of the metric, and a value.
>
> **[0:25](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=25)** Let's load it up.
>
> **[0:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=26)** So we start by importing pandas as pd, and I'm going to hide the bar on the left side.
>
> **[0:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=35)** And now, I'm going to read a CSV and parse the time column as date.
>
> **[0:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=41)** And I'm going to sample 10 random rows.
>
> **[0:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=45)** And we see some memory, some cpus, and some values.
>
> **[0:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=50)** Let's use groupby to have a look at statistics per metric.
>
> **[0:53](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=53)** So let's run the cell, groupby name and describe.
>
> **[0:58](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=58)** And we see that the CPU has one count with the mean, and we see that minus 32.14 is probably an error for a metric value, either CPU or memory.
>
> **[1:11](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=71)** The value count method is a great way to find problems in categorical data such as the name.
>
> **[1:17](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=77)** So let's run df name, values count.
>
> **[1:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=80)** And we say we have 50 of memory, but 49 of cpu with a lowercase, and a single CPU with the uppercase.
>
> **[1:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=88)** Some people find it easier to spot bad values on a chart.
>
> **[1:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=92)** I'm going to pivot the DataFrame where the index is the time, the columns are going to be the name, and I'm going to plot with subplots equal True.
>
> **[1:44](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=104)** And here we see the CPU with uppercase, cpu with lowercase, values, and the memory.
>
> **[1:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=110)** And we see that the cpu is going below the zero, which is a problem.
>
> **[1:54](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=114)** If you know the range of valid values in your data, you can find out values that are outside of this range.
>
> **[2:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=120)** Let's take a look at cpu, which is the load in percent.
>
> **[2:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=124)** It should be between zero and hundred.
>
> **[2:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=127)** So I'm going to run DataFrame query where the name is cpu and the value is either less than zero or bigger than a hundred.
>
> **[2:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=136)** If you're going to run it, we are going to find two rows that are problematic.
>
> **[2:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=141)** Sometimes you're going to use more complex methods to find bad data.
>
> **[2:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=146)** The standard score is a distance of a data point from the mean in units of standard deviation.
>
> **[2:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=152)** It's a good way to find outliers in data that is normally distributed.
>
> **[2:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=157)** You should know your data distribution characteristics.
>
> **[2:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=161)** So let's have a look.
>
> **[2:44](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=164)** We are going to get only the memory and calculate the z score, which is the distance from the mean, and get the bad values.
>
> **[2:53](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=173)** To find the rows, we are going to use the DataFrame .loc with the index of the bad memory.
>
> **[3:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=180)** And we found the one row with some bad data.
>
> **[3:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=185)** There are even more sophisticated ways of detecting bad data.
>
> **[3:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/bad-values?u=76281980&t=190)** See scikit-learn section about Novelty and Outlier Detection if you want to go deeper.

> [!info]- Semantic Content
>
> **CLI Commands:** find (7)
> **Code Keywords:** let (7)
> **Env Vars:** cpu (4), csv (2)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **Versions:** 32.14 (1)
> **Speakers:** - [instructor] (1)

#### Duplicates
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=0)** - [Instructor] Duplicate data will make your calculations go wrong.
>
> **[0:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=4)** Even worse, if you process the same transaction twice, you're going to lose a customer.
>
> **[0:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=10)** Let's have a look at the shopping cart data.
>
> **[0:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=14)** So we have date, name, amount, and price.
>
> **[0:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=19)** Let's load it up.
>
> **[0:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=20)** So we import pandas as pd and I'm going to hide the left column.
>
> **[0:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=28)** And now we're going to read the csv passing the date column as date.
>
> **[0:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=34)** And you can see we have several columns like one and two, and four and five that looks the same.
>
> **[0:42](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=42)** Pandas come with a duplicated method. Let's run it.
>
> **[0:47](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=47)** And you see it's going to catch only the last two.
>
> **[0:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=50)** So five is a duplicate of four.
>
> **[0:52](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=52)** If you look closely, you see that in rows one and two, the price is different, 1.70 and 1.20.
>
> **[1:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=60)** By default, duplicated will consider values from all columns, but you can tell it to look for a subset of columns.
>
> **[1:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=67)** In database terms, we call this the key.
>
> **[1:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=70)** So let's run again duplicated, this time looking only at the date and the name column.
>
> **[1:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/duplicates?u=76281980&t=76)** And now we've found that line two is also a duplicate of line one.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (1)
> **Versions:** 1.70 (1), 1.20 (1)
> **Definitions:** is a  (1), we call this (1)
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)


### 3. 2. Causes of Errors

#### Human errors
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=0)** - [Instructor] Humans are by far the most common cause of errors.
>
> **[0:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=4)** If only we can remove them from the equation.
>
> **[0:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=8)** The most common place where we humans make errors is when entering data.
>
> **[0:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=13)** Let's have a look at an input form for a payment.
>
> **[0:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=16)** So, we have a donation for Scrooge McDuck.
>
> **[0:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=20)** The name looks like it's missing a space, but actually there is a zero with Unicode space there.
>
> **[0:25](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=25)** This is mostly caused by copy and paste error.
>
> **[0:29](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=29)** The country has a typo.
>
> **[0:31](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=31)** The credit card number is missing a digit.
>
> **[0:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=35)** The expiration is in year and month, and not month and year, and the amount is two and then a capital O, and not 20.
>
> **[0:44](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=44)** Most of these mistakes can be avoided by creating a good UI which does validation before submitting.
>
> **[0:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/human-errors?u=76281980&t=50)** However, in some cases, such as names and emails, it's hard to do a good validation.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Code Keywords:** let (1)
> **Definitions:** is a  (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)

#### Machine errors
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/machine-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/machine-errors?u=76281980&t=0)** - [Instructor] Machine errors can come from various causes.
>
> **[0:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/machine-errors?u=76281980&t=3)** Some values are calculated, say BMI, and the code that calculates them might have bugs.
>
> **[0:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/machine-errors?u=76281980&t=9)** Make sure you save raw data if you ever need to recalculate.
>
> **[0:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/machine-errors?u=76281980&t=13)** Other errors can be caused by faulty sensors or machines.
>
> **[0:18](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/machine-errors?u=76281980&t=18)** A very common error is clock accuracy.
>
> **[0:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/machine-errors?u=76281980&t=21)** A computer clock drifts away from the accurate time, and will need to sync with an NTP server from time to time.
>
> **[0:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/machine-errors?u=76281980&t=28)** Other sensors can go wrong, from dirt on camera lens, a faulty network transfer, and even cosmic rays.
>
> **[0:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/machine-errors?u=76281980&t=35)** Some machine errors are serialization error.
>
> **[0:38](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/machine-errors?u=76281980&t=38)** You might transfer data in a big-endian format but the other side will read them as little-endian format.

> [!info]- Semantic Content
>
> **Env Vars:** bmi (1), ntp (1)
> **CLI Commands:** make (1)
> **Warnings:** common error (1)
> **Speakers:** - [instructor] (1)

#### Design errors
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/design-errors?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/design-errors?u=76281980&t=0)** - [Instructor] There are two aspects to design.
>
> **[0:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/design-errors?u=76281980&t=3)** One is the UI for collecting data.
>
> **[0:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/design-errors?u=76281980&t=6)** For example, in our payment form, instead of writing the country, you can have the user pick a country from a dropdown list to avoid errors.
>
> **[0:17](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/design-errors?u=76281980&t=17)** The second is system design.
>
> **[0:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/design-errors?u=76281980&t=20)** For example, when we talk about payments, you can say that the payment has both the currency and the amount.
>
> **[0:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/design-errors?u=76281980&t=28)** And this will help the UI design with the data validation.
>
> **[0:31](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/design-errors?u=76281980&t=31)** You can go further and say that the amount must be bigger than zero.
>
> **[0:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/design-errors?u=76281980&t=37)** There is a field called ontology engineering, which formally defines the relationships between all the pieces of the data in your organization.
>
> **[0:48](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/design-errors?u=76281980&t=48)** It might seem theoretical, but once you find you have several different definitions in your company for what a customer is, you will understand the need to be precise in your definitions.

> [!info]- Semantic Content
>
> **Analogies:** for example (2)
> **CLI Commands:** find (1)
> **UI Navigation:** dropdown (1)
> **Definitions:** is a  (1)
> **Speakers:** - [instructor] (1)

#### Challenge: UI design
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-ui-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-ui-design?u=76281980&t=0)** - [Instructor] Improve our current payment form and try to make it error proof as possible.
>
> **[0:11](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-ui-design?u=76281980&t=11)** Don't go fancy.
>
> **[0:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-ui-design?u=76281980&t=13)** Paper to sketch the UI, and write the limitations.

> [!info]- Semantic Content
>
> **CLI Commands:** make (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: UI design
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-ui-design?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-ui-design?u=76281980&t=0)** - [Instructor] Here's my solution.
>
> **[0:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-ui-design?u=76281980&t=7)** For the name field, there's nothing much we can do.
>
> **[0:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-ui-design?u=76281980&t=10)** In the country name, I'm going to use a drop down menu from the list of all the countries.
>
> **[0:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-ui-design?u=76281980&t=15)** The card number is split with four sections so it's easier for the user to see that they're missing a digit, and it's going to stay red until they fill the whole digits.
>
> **[0:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-ui-design?u=76281980&t=26)** The expiration day is, again, a dropdown for the month and the year, or we can do one of these fancy date selector menus.
>
> **[0:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-ui-design?u=76281980&t=34)** The amount I put the currency at the beginning, and we're going to limit the input box only to numbers.
>
> **[0:40](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-ui-design?u=76281980&t=40)** And the button is going to be disabled until the form is valid.

> [!info]- Semantic Content
>
> **UI Navigation:** dropdown (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)


### 4. 3. Detecting Errors

#### Schemas
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=0)** - [Instructor] A Schema defines constraints and relationships in your data.
>
> **[0:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=5)** Some formats such as JSON, do not have a formal schema.
>
> **[0:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=10)** Others like Protocol Buffers, do have a schema.
>
> **[0:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=15)** Even if your data does not have a formal schema it is still out there as your assumptions about what is valid data.
>
> **[0:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=23)** If you don't use formal schemas most likely these assumptions will be scattered throughout the code and in developer's head and that is not good.
>
> **[0:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=34)** Say writing a code to track ships in the ocean.
>
> **[0:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=37)** For every observation of a ship, you'll have the following data.
>
> **[0:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=41)** The name and the location is latitude and longitude.
>
> **[0:47](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=47)** Let's take a look.
>
> **[0:48](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=48)** Here's an example csv file.
>
> **[0:51](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=51)** We have the Black Pearl, Cobra, Flying Dutchman and the Empress at an unknown location.
>
> **[0:57](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=57)** Most schemes have constraints about the type of data.
>
> **[1:01](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=61)** For example, you can see that latitude is a floating point number.
>
> **[1:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=66)** There are various ways to check the data confines to schema.
>
> **[1:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=70)** If you have control over the data pipeline you can use tools such as JSON Schema, a database schema or even validation specific language like CUE.
>
> **[1:22](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=82)** Or in Python, you can use libraries such as pydantic and marshmallow.
>
> **[1:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=88)** In my experience, eventually you will write your own validation code at one point or another, and none of these tools will cover all of your needs.
>
> **[1:39](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=99)** Let's load the data and have a look at the types.
>
> **[1:42](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=102)** So import pandas as pd and then we are going to read the csv file.
>
> **[1:51](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=111)** And now we are going to run the df.dtypes which shows us the data type per column.
>
> **[2:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=120)** And we see that the name is an object, which means a string in pandas and then the latitude and longitude are floating points.
>
> **[2:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=129)** Let's have a look at what an SQL schema might look like for this kind of data.
>
> **[2:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=134)** So the name is a text and latitude and longitudes are floats.
>
> **[2:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=139)** You need to think if you allow NULL values in any of the fields.
>
> **[2:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/schemas?u=76281980&t=144)** In SQL, this is done by adding a NOT NULL constraint to a column definition.

> [!info]- Semantic Content
>
> **Env Vars:** json (2), sql (2), null (2), cue (1)
> **Analogies:** such as (3), for example (1)
> **Code Keywords:** let (3)
> **Definitions:** is a  (2), is an  (1)
> **CLI Commands:** python (1)
> **Speakers:** - [instructor] (1)

#### Validation
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=0)** - [Instructor] Once you define a schema, you can use it to find out bad values.
>
> **[0:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=6)** I'm going to use the Pandera library, but there are other libraries you can use, or you can write your own validation code.
>
> **[0:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=14)** Let's have a look.
>
> **[0:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=15)** Here's our ship data with the name, the latitude, and the longitude.
>
> **[0:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=20)** First, let's start by importing pandas and loading the csv.
>
> **[0:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=28)** And we see we have the names, and the latitude, and the longitude.
>
> **[0:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=32)** Now we can import pandera as pa.
>
> **[0:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=34)** You can ignore the numpy input.
>
> **[0:38](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=38)** And we define a schema which is a data frame schema, where the name is a string, and latitude and longitude are both floats.
>
> **[0:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=45)** And now we can call schema.validate on the data frame.
>
> **[0:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=50)** And when we run it, you are going to see an error.
>
> **[0:55](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=55)** By default, Pandera does not allow missing values in columns.
>
> **[1:01](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=61)** Let's fix that by saying nullable=True, for the latitude, and for the longitude, nullable=True.
>
> **[1:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=74)** And now let's run it again.
>
> **[1:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=76)** And this time without an error, we get a DataFrame back.
>
> **[1:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=81)** Should you have null values in some of your columns?
>
> **[1:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=84)** There's no good general answer.
>
> **[1:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/validation?u=76281980&t=86)** You should know your data and decide.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), default, (1)
> **Definitions:** is a  (2)
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)

#### Finding missing data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=0)** - In some cases, some features will be missing.
>
> **[0:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=4)** Missing data can come from users refusing to answer a question or data that is missing a feature and other reasons.
>
> **[0:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=12)** Let's have a look at our shipping data.
>
> **[0:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=14)** We have the name of the ship, the latitude and the longitude.
>
> **[0:18](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=18)** We have the Black Pearl, the Cobra, the Flying Dutchman and then the Empress at an unknown location and a mysterious ship at another location.
>
> **[0:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=26)** Let's find rows with missing data.
>
> **[0:29](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=29)** So we input pandas as pd and load using read_csv the CSV file.
>
> **[0:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=35)** And I'm going to hide the bar on the left.
>
> **[0:40](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=40)** And we see that we have several missing values.
>
> **[0:43](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=43)** Let's run the isnull with axis equal one to find rows with missing values.
>
> **[0:48](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=48)** And we see we got only one row.
>
> **[0:51](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=51)** Why are we getting just one row?
>
> **[0:54](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=54)** Let's have a look at the name of the last ship?
>
> **[0:57](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=57)** When we look at it, we see it's not truly an empty string.
>
> **[1:02](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=62)** There is a space in it.
>
> **[1:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=63)** So let's strip out all the names so we won't have spaces either to the left or to the right.
>
> **[1:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=72)** And if you run this cell, we see that now this is an empty string.
>
> **[1:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=76)** Let's run isnull again.
>
> **[1:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=79)** And we still get only the Empress.
>
> **[1:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=84)** If you look at the documentation of pandas.isnull, you will see that the empty string is not considered as missing values.
>
> **[1:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=92)** Let's replace the empty string with nan and try again.
>
> **[1:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=96)** So we create the mask, which is all the strings, all the names that are empty and then set them to nan.
>
> **[1:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=105)** Once we do that, we can run isnull again.
>
> **[1:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=110)** This time we're going to see both rows.
>
> **[1:54](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=114)** Question of what is missing value is trickier than it seems.
>
> **[1:59](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=119)** Apart from the ones pandas thinks are missing values and the empty strings, user might enter a phrase, such as I don't know.
>
> **[2:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=127)** Over time, you'll gather a set of missing values per column.
>
> **[2:11](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=131)** Make sure to update this set and use it in your code.
>
> **[2:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=136)** You can also have missing rows of data.
>
> **[2:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=139)** This can be harder to detect in most cases.
>
> **[2:22](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=142)** Let's have a look at location information.
>
> **[2:25](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=145)** So looking here and looking at locations.csv.
>
> **[2:30](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=150)** And you see here we have date, latitude and longitude.
>
> **[2:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=153)** And if you look closely, you see that between the 8th and the 10th, we're missing a whole day.
>
> **[2:40](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=160)** If you have time series-based data, it might be easier to detect missing rows.
>
> **[2:46](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=166)** I highly encourage you to read the working with missing data section in the pandas user guide.
>
> **[2:51](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/finding-missing-data?u=76281980&t=171)** It has a lot of excellent advice.

> [!info]- Semantic Content
>
> **Code Keywords:** let (8)
> **CLI Commands:** find (2), make (1)
> **Definitions:** is a  (1), is an  (1)
> **File Paths:** locations.csv (1)
> **Code Identifiers:** read_csv (1)
> **Env Vars:** csv (1)
> **Documentation:** the documentation (1)
> **Analogies:** such as (1)

#### Domain knowledge
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=0)** - [Instructor] Domain knowledge will help you know what are valid values for a column.
>
> **[0:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=5)** Let's say we have our shipping data.
>
> **[0:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=7)** We have the name, the latitude and the longitude.
>
> **[0:11](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=11)** If you look at latitude and longitude, which are location on earth, they have a range of values.
>
> **[0:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=19)** Latitudes are between minus 90 and 90, and longitude are between minus 180 to 180.
>
> **[0:29](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=29)** Let's load the data and add this domain knowledge.
>
> **[0:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=33)** So ships.py, we first import pandas as pd, and read the csv.
>
> **[0:38](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=38)** So, run the cell.
>
> **[0:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=41)** I'm going to hide the left column.
>
> **[0:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=45)** And now, we're going to define a pandera schema.
>
> **[0:49](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=49)** The pandera schema is going to say that the name is a string, and then, the latitude is a column of floats.
>
> **[0:56](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=56)** It can be nullable, and we should check that the values are between minus 90 and nine.
>
> **[1:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=63)** And we say that it is element_wise check, meaning we check every element in the column.
>
> **[1:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=69)** And the same goes for the longitude just with minus 180 and 180.
>
> **[1:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/domain-knowledge?u=76281980&t=74)** And now we can run it and validate that we have valid data.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Definitions:** is a  (2)
> **File Paths:** ships.py (1)
> **Code Identifiers:** element_wise (1)
> **Speakers:** - [instructor] (1)

#### Subgroups
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=0)** - [Instructor] Say you want to measure student heights.
>
> **[0:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=4)** Let's have a look at the data.
>
> **[0:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=5)** We have a csv with the name, grade, and the height.
>
> **[0:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=8)** Let's load it.
>
> **[0:11](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=11)** It does start from here.
>
> **[0:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=12)** So we import pandas and reading the csv.
>
> **[0:17](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=17)** And I'm going to hide the left column.
>
> **[0:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=21)** And we see Adam, Beth, Chris, and Dana.
>
> **[0:25](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=25)** If you'd like to validate the height, you can go over, for example, to Wikipedia, and find out that the tallest person alive was 107.1 inches.
>
> **[0:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=37)** Looking at all the heights, they seem okay.
>
> **[0:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=41)** However, Beth seems like awfully tall for a first grader.
>
> **[0:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=45)** You do some research and find out that first grade height are up to 32 inches.
>
> **[0:51](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=51)** So first, create data frame with the maximal heights.
>
> **[0:54](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=54)** We're going to do just a single row for the first grade, so first and 32.
>
> **[1:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=60)** And now we are going to merge the data frame with the values with the data frame of the maximal heights with the left join.
>
> **[1:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=70)** When we run the cell, now we are going to get the name, the grade, the height, and also the maximal height.
>
> **[1:17](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/subgroups?u=76281980&t=77)** And now we can check the data frame where the height is bigger than the maximal height, and find out that Beth is unusually tall.

> [!info]- Semantic Content
>
> **CLI Commands:** find (3)
> **Code Keywords:** let (2)
> **Versions:** 107.1 (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Using Copilot to build schema
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=0)** - [Instructor] Nowadays, we also have AI to help us.
>
> **[0:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=3)** So in Visual Studio Code, you can click on the Copilot button and get a new chat.
>
> **[0:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=10)** And here now, you can ask it something.
>
> **[0:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=13)** So I can ask it, find more rules for the schema.
>
> **[0:22](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=22)** It give me some examples.
>
> **[0:25](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=25)** And now I have a code that I can copy and paste.
>
> **[0:27](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=27)** This is great, but you know, it's less than ideal.
>
> **[0:30](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=30)** So what I can do is I can, instead of asking mode, go to edit mode.
>
> **[0:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=37)** And now I can do again, find more rules for the schema.
>
> **[0:43](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=43)** So I can do it manually.
>
> **[0:44](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=44)** I just says, ships.csv, which is added to the context, and now I'm going to run it.
>
> **[0:54](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=54)** And now this is adding it directly to the file.
>
> **[0:59](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=59)** You can look at the code and once you're happy, you can do keep.
>
> **[1:02](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=62)** And now it's there.
>
> **[1:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/using-copilot-to-build-schema?u=76281980&t=63)** Don't forget, always, always check what copilot is doing.

> [!info]- Semantic Content
>
> **CLI Commands:** find (2)
> **UI Navigation:** click on (1), go to (1)
> **File Paths:** ships.csv (1)
> **Tools:** visual studio (1)
> **Best Practices:** don't forget (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Find bad data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-find-bad-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-find-bad-data?u=76281980&t=0)** - [Instructor] Here we have some data about rides.
>
> **[0:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-find-bad-data?u=76281980&t=7)** We have the name of the driver, the license plate, and the distance.
>
> **[0:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-find-bad-data?u=76281980&t=12)** You need to validate the data.
>
> **[0:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-find-bad-data?u=76281980&t=14)** You should find out all the rows that have bad values.
>
> **[0:17](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-find-bad-data?u=76281980&t=17)** Missing values are not allowed.
>
> **[0:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-find-bad-data?u=76281980&t=19)** A plate must be a combination of at least three uppercase letters or digits.
>
> **[0:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-find-bad-data?u=76281980&t=24)** And the distance must be bigger than zero.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Find bad data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=5)** - Let's have a look at my solution.
>
> **[0:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=7)** First, we're going to input pandas and read the csv.
>
> **[0:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=12)** And now for every constraint I'm going to create a mask.
>
> **[0:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=15)** So the first mask is missing values.
>
> **[0:17](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=17)** So we say data frame is now any access one.
>
> **[0:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=21)** If I'm going to run this one, I'm going to see we have two rows with name values.
>
> **[0:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=28)** Second one is the plate mask.
>
> **[0:30](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=30)** The plate mask is going to use the str match with three or more letters or numbers.
>
> **[0:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=37)** So, and we're going to use the tilde sign meaning we want to negate this one.
>
> **[0:42](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=42)** Anything that does not match that.
>
> **[0:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=45)** And if you're going to run this one we are going to see if we have an hand plate another empty one, and Wednesday has just a letter 'A'.
>
> **[0:55](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=55)** The final one is the distance mask, which is easy, the distance is lower than zero.
>
> **[1:01](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=61)** And if you run this cell we're going to see we have one which is for Lurch.
>
> **[1:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=66)** Finally, we can combine all of these using the OR sign.
>
> **[1:11](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=71)** And this is the null mask, or the plate mask, or the distance mask.
>
> **[1:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-find-bad-data?u=76281980&t=75)** And if you run this one, we see that almost all of the columns have bad values in them.

> [!info]- Semantic Content
>
> **Code Keywords:** let (1), finally, (1)
> **Speakers:** - let (1)


### 5. 4. Preventing Errors

#### Serialization formats
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=0)** - [Narrator] There are many ways and formats to store your data.
>
> **[0:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=4)** Some serialization formats such as CSV are only text.
>
> **[0:11](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=11)** When Pandas reads from a CSV file, it'll guess the types.
>
> **[0:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=15)** In some cases, such in time columns, you'll need to explicitly tell Pandas which columns to convert.
>
> **[0:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=24)** Some civilization format such as JSON have types.
>
> **[0:30](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=30)** However, JSON has only a single numerical type.
>
> **[0:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=36)** JSON also don't have a schema embedded in the data, which means you will need an external schema to tell you if the data is valid.
>
> **[0:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=45)** The best utilization formats have both types and a formal schema, such as SQL.
>
> **[0:53](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=53)** We're going to have a look at the Apache Parquet format, which is a binary format with types and a schema.
>
> **[1:01](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=61)** To use Parquet with Pandas, you'll need to have the Apache Arrow package installed, which is called, PyArrow.
>
> **[1:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=69)** Let's have a look.
>
> **[1:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=72)** So, we are going to create a data frame with five rows, which have time, name, and a value.
>
> **[1:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=80)** Let's run the cell.
>
> **[1:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=83)** And I'm going to hide the left column.
>
> **[1:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=86)** And now we import PyArrow as PA, and define a schema for the data.
>
> **[1:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=92)** So PA dot schema, the time is a timestamp in milliseconds, a string, and a float64 for the value.
>
> **[1:40](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=100)** And now we can save the data frame to a file.
>
> **[1:44](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=104)** We define the output file as metrics dot Parquet and we say data frame to Parquet to the out file with our schema.
>
> **[1:53](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=113)** And if you look back at our files we see now that we have metrics dot Parquet.
>
> **[1:58](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=118)** We hide this again, if you want to read it we just need to do PD read Parquet and the output file.
>
> **[2:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/serialization-formats?u=76281980&t=127)** If you're going to do a different type, for example we convert the time to a string and then try to save it, you will see that Parquet is going to raise an exception, which is going to guard you against saving bad data into a Parquet file.

> [!info]- Semantic Content
>
> **Env Vars:** json (3), csv (2), sql (1)
> **Code Keywords:** let (2), type. (1), type, (1), raise (1)
> **Analogies:** such as (3), for example (1)
> **Definitions:** is a  (2), is called (1)
> **CLI Commands:** apache (2)
> **Prerequisites:** you'll need (2)
> **Speakers:** - [narrator] (1)

#### Digital signature
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=0)** - Files can get corrupted.
>
> **[0:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=3)** It can be due to various reasons, such as network errors, disk failures, and more.
>
> **[0:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=9)** A common practice is to calculate the file digital signature, also known as the hash, and store it next to the data file.
>
> **[0:17](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=17)** This way you can validate the integrity of your data file before processing it.
>
> **[0:22](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=22)** There are several digital signatures, such as MD5, SHA1, SHA256, CRC32, and many more.
>
> **[0:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=32)** Pick one that is secure, and depending on your performance goals, not too slow.
>
> **[0:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=37)** Python Standard Library has most of the hashes and digital digests in the hashlib model.
>
> **[0:44](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=44)** But for others, let's say the CRC32, you will need to use a different library.
>
> **[0:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=50)** In this case, the zlib Library.
>
> **[0:54](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=54)** Here is our metrics file. It has several values and you would like to calculate the digital signature.
>
> **[1:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=60)** I'm going to calculate the digital signature from the command line, so terminal and new terminal.
>
> **[1:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=68)** And then let's change directory to chapter 4, 04, 02.
>
> **[1:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=75)** And now I can use the command line utility sha256sum on the file.
>
> **[1:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=81)** And I'm getting a long digital signature for the file.
>
> **[1:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=86)** I can also save it now as the sha256sum.txt right next to the file.
>
> **[1:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=95)** And now we can check the file integrity.
>
> **[1:38](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=98)** So sha256sum dash C for check and the sha256 text, And you tell us that this is okay.
>
> **[1:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=110)** Let's change a value. So I'm going to change a value and save the file. And let's run it again.
>
> **[1:58](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/digital-signature?u=76281980&t=118)** And you see this time it failed meaning there was some error in the file.

> [!info]- Semantic Content
>
> **Code Keywords:** let (4), case, (1)
> **Env Vars:** crc32 (2), md5 (1), sha1 (1), sha256 (1)
> **Tools:** command line (2), terminal (2)
> **Analogies:** such as (2)
> **File Paths:** sha256sum.txt (1)
> **CLI Commands:** python (1)
> **Definitions:** known as (1)
> **Speakers:** - files (1)

#### Data pipelines and automation
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=0)** - [Narrator] Data pipeline is a series of steps each consuming input and producing output.
>
> **[0:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=7)** There are many systems for creating data pipelines such as apache airflow.
>
> **[0:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=16)** Writing your own is not that hard but I recommend investing time in an existing one.
>
> **[0:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=23)** The main advantage of using a pipeline is that each step is small, self-contained, and easier to check.
>
> **[0:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=32)** Some data pipeline systems also allow you to resume a pipeline from the middle, which can save you a lot of time.
>
> **[0:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=41)** When designing data pipelines, it's important to add data validation and cleaning into the pipeline.
>
> **[0:48](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=48)** Once you have these in place, you can quickly detect errors and stop the pipeline.
>
> **[0:55](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=55)** Editors start from here.
>
> **[0:58](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=58)** I'm going to use Invoke which is a small system of running tasks.
>
> **[1:02](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=62)** It is simple and easy to use.
>
> **[1:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=64)** For a real production system, you'll probably pick a system with more features such as airflow.
>
> **[1:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=70)** Let's have a look.
>
> **[1:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=72)** So we have our CSV file with some rides data.
>
> **[1:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=75)** The car name, start of the ride, end of the ride and what was the charge.
>
> **[1:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=80)** And we'd like to load it to a CSV.
>
> **[1:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=83)** So here is our code.
>
> **[1:25](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=85)** We import sqlite3.
>
> **[1:27](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=87)** This is the database we're going to use.
>
> **[1:29](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=89)** It's small embedded database, pandas and Invoke.
>
> **[1:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=93)** We define a function to load the CSV from the file.
>
> **[1:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=96)** We read the CSV.
>
> **[1:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=97)** We tell pandas that the start and end columns are dates.
>
> **[1:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=101)** We also define a validation step.
>
> **[1:44](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=104)** In this one we query if the start is not bigger than the end, and if it is, we raise a value error.
>
> **[1:52](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=112)** And finally, we define our task, which is an ETL.
>
> **[1:57](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=117)** ETL stands for extract, transform, and load.
>
> **[2:02](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=122)** We extract the data from the CSV, transform it, for example timestamps, and then load it into the database.
>
> **[2:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=130)** So we load the CSV, we validate, we create a database file we connect to it with sqlite, and we use the data frame to SQL into the right table with a connection.
>
> **[2:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=143)** Don't store the index of the database.
>
> **[2:25](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=145)** And if the data exists, we append to the table.
>
> **[2:30](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=150)** And now let's start a terminal.
>
> **[2:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=152)** So terminal, new terminal.
>
> **[2:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=156)** And then I'm going to change directory to chapter 4, 04, 03.
>
> **[2:43](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=163)** And now I can run invoke--list.
>
> **[2:49](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=169)** And you see I have a single task, which is the ETL.
>
> **[2:52](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=172)** Now I can run it.
>
> **[2:53](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=173)** So invoke, ETL, and then --CSV-file.
>
> **[3:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=180)** This one is going to match the CSV_file parameter to the CSV.
>
> **[3:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=185)** And we're going to say rides.csv.
>
> **[3:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=189)** Once we've done that you see we have rides.db now added.
>
> **[3:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=193)** Let's use the sqlite3 command line tool to check it out.
>
> **[3:18](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=198)** So rides.db, and we can do .schema to check what's inside the database.
>
> **[3:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=204)** We see a rides table with the courage text.
>
> **[3:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=208)** The start and end are timestamps and the charge is real which is a floating point number.
>
> **[3:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=213)** We can even do select star from rides just to see the data.
>
> **[3:38](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-pipelines-and-automation?u=76281980&t=218)** Don't do it if the data is really large.

> [!info]- Semantic Content
>
> **Env Vars:** csv (8), etl (4), sql (1)
> **Code Keywords:** let (3), self (1), function (1), raise (1), finally, (1)
> **Definitions:** is a  (3), is an  (1), stands for (1)
> **Tools:** terminal (3), command line (1)
> **CLI Commands:** sqlite3 (2), apache (1)
> **Analogies:** such as (2), for example (1)
> **File Paths:** rides.csv (1)
> **Speakers:** - [narrator] (1)

#### Transactions
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=0)** - There are many ways why I like relational databases.
>
> **[0:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=4)** They are an old and established technology.
>
> **[0:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=7)** There's a lot of knowledge and tooling around them.
>
> **[0:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=10)** They provide a schema and you can query data with SQL, which a lot of people know.
>
> **[0:17](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=17)** But one of the most important features when talking about data pipelines is transactions.
>
> **[0:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=23)** A transaction mean either all of your changes go in or none of it.
>
> **[0:29](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=29)** Say you insert data and suddenly there's an invalid record and you get an exception.
>
> **[0:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=33)** Without a transaction, you need to manually figure out which records made it to the database and which ones you need to try again.
>
> **[0:42](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=42)** Also, if you have a downstream system that process the data for a given day, how will it know that the upstream process is done inserting the data?
>
> **[0:51](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=51)** With transaction, the data is either there or it's not.
>
> **[0:56](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=56)** Let's have a look at some introductions.
>
> **[0:57](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=57)** So we have our ship data with the name of the ship, latitude and longitude, and the last record is an invalid record.
>
> **[1:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=65)** And now we have our ETL process.
>
> **[1:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=68)** First we're going to load the data from the CSV.
>
> **[1:11](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=71)** Let's run the cell.
>
> **[1:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=73)** And now we are going to insert the data.
>
> **[1:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=76)** So import sqlite.
>
> **[1:17](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=77)** We create a schema with the name and latitude and longitude and we say they are not null, they're not allowed to be null.
>
> **[1:25](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=85)** Here we have a database file which is ship.
>
> **[1:27](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=87)** We connect to it with sqlite, and we execute script to create schema.
>
> **[1:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=92)** And now we try with statement to insert the data using data frame to SQL to the connection.
>
> **[1:40](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=100)** And if the table exists, append the data and don't store the data frame index.
>
> **[1:46](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=106)** The context manager.
>
> **[1:47](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=107)** I will do a rollback operation if there is an exception or a commit if there's no exception, and rephrase, adding all of the data into the database.
>
> **[1:59](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=119)** So, let's run this cell.
>
> **[2:02](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=122)** And because there's invalid data, we see not now constraint on the latitude.
>
> **[2:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=128)** Let's open the command line, so terminal, new terminal, and then CD to Chapter 4 04_04.
>
> **[2:22](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=142)** And then we can do sqlite3 ships.db.
>
> **[2:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/transactions?u=76281980&t=146)** The file was created, but if you do SELECT * FROM ships, we are going to see no data came in.

> [!info]- Semantic Content
>
> **Env Vars:** sql (2), etl (1), csv (1), select (1)
> **Code Keywords:** let (4)
> **Tools:** terminal (2), command line (1)
> **CLI Commands:** cd (1), sqlite3 (1)
> **Definitions:** is an  (2)
> **SQL:** select (1)
> **UI Navigation:** open the (1)
> **Speakers:** - there (1)

#### Data organization and tidy data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980&t=0)** - [Instructor] One of the worst thing you can do for data for data is let it grow organically.
>
> **[0:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980&t=6)** I worked with companies that had no idea what some columns mean and how the data in them got populated.
>
> **[0:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980&t=14)** You need to think about your data structures, relations, and more, and actively maintain your data schema.
>
> **[0:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980&t=21)** One good way to organize data, known as Tidy Data, also, narrow data.
>
> **[0:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980&t=28)** In Tidy Data, each row has only a single observation.
>
> **[0:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980&t=32)** Let's have a look.
>
> **[0:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980&t=34)** Here, we have the data in a wide format.
>
> **[0:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980&t=36)** We have time, CPU, and memory, which means that each row has two observation, one for CPU and one for memory.
>
> **[0:44](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980&t=44)** If you're going to a narrow format we'll have the time, the metric name, and then the value.
>
> **[0:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/data-organization-and-tidy-data?u=76281980&t=50)** And now, each row has only one observation.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2)
> **Env Vars:** cpu (2)
> **Definitions:** known as (1), means that (1)
> **Speakers:** - [instructor] (1)

#### Process and data quality metrics
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=0)** - Your data will never be 100% okay.
>
> **[0:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=4)** You need to decide what to do with bad data and set data quality metrics.
>
> **[0:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=9)** You should ask yourself questions, such as what should you do if you have more than a 10% of bad records?
>
> **[0:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=16)** Should you reprocess bad data or just ignore it?
>
> **[0:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=20)** When should you stop everything and raise an alert?
>
> **[0:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=24)** Let's say we have this order information, we have the time of the order, the symbol, the price and the side, bid or ask Inner code.
>
> **[0:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=34)** First we're going to load the data with pd read CSV and tell it that the time column is a timestamp, we're going to hide the left column.
>
> **[0:46](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=46)** So now we have a data frame with the data.
>
> **[0:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=50)** Now we can say which is a valid row and we have several rules, the time must be after the 1900's, the symbol shouldn't be null, or the MP string, and the price shouldn't be less than zero.
>
> **[1:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=64)** And now we can get the OK data frame which is the data frame apply that is valid row on axis equal one, meaning on the rows.
>
> **[1:15](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=75)** Once we run this we have the OK rows inside, and now we can run some calculations.
>
> **[1:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=81)** So the number of bad records is the length of the original data frame minus the length of the OK.
>
> **[1:27](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=87)** We can also calculate the percent and if you have some bad rows we are going to display them.
>
> **[1:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=94)** In real life these prints should be logging.
>
> **[1:38](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=98)** Let's run the cell.
>
> **[1:40](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=100)** We see you have 5% of bad rows and reprinting it which is a singular out of the 20.
>
> **[1:48](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=108)** In production, instead of printing you will send these metrics to a system such as Prometheus or InfluxDB.
>
> **[1:55](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/process-and-data-quality-metrics?u=76281980&t=115)** And then you should probably add some alerting on top of that.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), raise (1)
> **Definitions:** is a  (3)
> **Analogies:** such as (2)
> **Env Vars:** csv (1)
> **Speakers:** - your (1)

#### Challenge: ETL
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=0)** (upbeat techno music)
>
> **[0:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=5)** - [Instructor] So we have some traffic information.
>
> **[0:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=7)** So we have the IP of the incoming request, the time, the path on the server, such as /images, the status, which is the HTP code, and the size of the return data.
>
> **[0:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=19)** You need to create an ETL from this CSV file into an sqlite3 database.
>
> **[0:25](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=25)** You should drop and report invalid row.
>
> **[0:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=28)** An IP should be a valid IP.
>
> **[0:30](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=30)** See the IP address module.
>
> **[0:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=33)** Time must not be in the future.
>
> **[0:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=36)** Path cannot be empty.
>
> **[0:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=37)** The status code must be a valid HTP status code.
>
> **[0:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=41)** See HTP status request enumerate for list of status codes.
>
> **[0:47](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=47)** And size cannot be negative or empty.
>
> **[0:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-etl?u=76281980&t=50)** At the end of the ETL, report the percentage of bad rows and fail the ETL if there are more than 5% bad rows.

> [!info]- Semantic Content
>
> **Env Vars:** htp (3), etl (3), csv (1)
> **CLI Commands:** sqlite3 (1)
> **Code Keywords:** module (1)
> **Analogies:** such as (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat techno music) (1)

#### Solution: ETL
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=0)** - [Instructor] Let's have a look at my solution.
>
> **[0:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=8)** I'm importing sqlite3 to save to sqlite.
>
> **[0:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=12)** Importing the HTTP statuses to get the status.
>
> **[0:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=16)** And from ipaddress, I'm importing the ip_address function, so I can check if something is a valid IP.
>
> **[0:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=24)** I create a set of all the valid status code with set(HTTPStatus) and define the maximal bad percent.
>
> **[0:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=32)** Now I can define what is a valid row.
>
> **[0:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=36)** First, we try to use the ip_address to parse the ip, which is a string, into an ip_address.
>
> **[0:42](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=42)** If you fail, it is false, meaning not a valid row.
>
> **[0:47](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=47)** Next, we take the current time and compare it to the time in the row, which should be smaller than what we have.
>
> **[0:55](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=55)** We check that the path is not null, the status is a valid status code, and that the size cannot be negative or empty.
>
> **[1:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=65)** And now we do the etl.
>
> **[1:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=66)** First, we load the DataFrame.
>
> **[1:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=68)** And now, we do bad_rows, which is DataFrame and the negation with a tilde sign of df.apply is_valid_row with axis=1 And if you had some bad row, we calculate the percentage, print out, and if it's bigger than the maximal value, we're raising an exception.
>
> **[1:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=86)** Otherwise, we take only the valid rows and save them to the database.
>
> **[1:31](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=91)** Making sure to close the connection.
>
> **[1:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=93)** Starting a transaction.
>
> **[1:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=95)** And then with the connection, so we'll get either a rollback or a commit.
>
> **[1:40](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=100)** We do df.to_sql into the connection, append if the table is already there, and don't store the index.
>
> **[1:48](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=108)** Finally, we run our etl from traffic.csv to traffic.db.
>
> **[1:54](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=114)** Let's have a look.
>
> **[1:55](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=115)** So we start the Terminal and New Terminal.
>
> **[2:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=120)** And then, we're going to Ch04/solution/.
>
> **[2:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=124)** And then, we are going to run python etl.py.
>
> **[2:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=129)** We see that we have five bad rows, which are three point nine one percent of the rows, which is still okay.
>
> **[2:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=136)** And we have traffic to be created.
>
> **[2:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=139)** We can use sqlite3 on the traffic.db.
>
> **[2:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=144)** Look at the schema.
>
> **[2:25](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=145)** And we, let's do SELECT COUNT of ip FROM traffic.
>
> **[2:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-etl?u=76281980&t=153)** And we see that we have 123 rows inside.

> [!info]- Semantic Content
>
> **Code Identifiers:** ip_address (3), bad_rows (1), is_valid_row (1), to_sql (1)
> **Code Keywords:** let (3), function (1), finally, (1)
> **Definitions:** is a  (4)
> **CLI Commands:** sqlite3 (2), python (1)
> **Env Vars:** http (1), select (1), count (1)
> **File Paths:** traffic.csv (1), etl.py (1)
> **Tools:** terminal (2)
> **SQL:** select (1)


### 6. 5. Fixing Errors

#### Renaming fields
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=0)** - [Narrator] Sometimes the names in the data do not match names we'd like to use, and you would like to rename them.
>
> **[0:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=7)** For example, say you have some weather data.
>
> **[0:11](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=11)** It looks like this.
>
> **[0:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=12)** We have DATE, TMIN, and TMAX.
>
> **[0:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=14)** We would like to make all the names of the column lowercase and change TMIN and TMAX to min_temp and max_temp.
>
> **[0:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=23)** Here's our code.
>
> **[0:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=24)** First, we're going to load the data frame, and as we can see the column names are the original one in the data.
>
> **[0:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=33)** Now we can run the rename method of the data frame.
>
> **[0:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=36)** We say that we want to rename the columns and then we give a dictionary saying the date should go to date in lowercase.
>
> **[0:43](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=43)** And TMIN and TMAX go to min_temp and max_temp.
>
> **[0:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=45)** And finally, we say in place equal true means we want to change the current data frame, not get a new one.
>
> **[0:53](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=53)** If you're going to run the cell, now we have the column names as we want them.
>
> **[0:58](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=58)** Sometimes this transformation can be a bit trickier.
>
> **[1:02](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=62)** Say we have some donation data.
>
> **[1:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=67)** Right, so we have the first name, the last name and donation amount.
>
> **[1:11](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=71)** And we would like to get rid of the numbers, make everything lowercase and use underscore instead of spaces.
>
> **[1:20](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=80)** So again, first we are going to load the donation data and we see the column names, our first name, last name and donation amount.
>
> **[1:29](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=89)** And now we can define a function.
>
> **[1:31](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=91)** Let me hide the left side.
>
> **[1:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=94)** So, fix a column.
>
> **[1:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=97)** We do substitute with a regular expression, saying anything that is a number, one or more and a dot.
>
> **[1:44](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=104)** And after that space, one or more, we want convert it to nothing.
>
> **[1:49](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=109)** Basically remove it.
>
> **[1:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=110)** Then, convert to lowercase.
>
> **[1:52](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=112)** And finally, replace the space with an underscore.
>
> **[1:57](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=117)** And now we say data frame, rename, columns.
>
> **[2:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=120)** And now we give our function instead of the dictionary we used above and again in place through to change the current data frame.
>
> **[2:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=127)** If you're going to run this cell, we see now we have first, underscore name last, underscore name, and donation underscore amount.
>
> **[2:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/renaming-fields?u=76281980&t=134)** All in lower case.

> [!info]- Semantic Content
>
> **Code Keywords:** finally, (2), function (2), this. (1), let (1), case. (1)
> **Env Vars:** tmin (3), tmax (3), date (1)
> **Code Identifiers:** min_temp (2), max_temp (2)
> **CLI Commands:** make (2)
> **UI Navigation:** go to (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)

#### Fixing types
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=0)** - Such formats, such as CSV, do not have type information.
>
> **[0:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=5)** When pandas loads the data, it will guess what are the data types, but sometimes we need to give it some extra help.
>
> **[0:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=12)** Let's have a look at some data about points and their colors.
>
> **[0:18](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=18)** So, here's our CSV, we have X and Y, which are the coordinates, and then the color, and is it visible or not.
>
> **[0:27](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=27)** And here is our code.
>
> **[0:30](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=30)** Let's start by loading the data frame and showing the data types.
>
> **[0:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=34)** And I'm going to hide the bar on the left.
>
> **[0:38](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=38)** And we see that the points X and Y are int 64.
>
> **[0:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=41)** The color and the visible are object, which means a string.
>
> **[0:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=45)** Let's fix the color first.
>
> **[0:47](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=47)** So I'm defining function asint, which uses the built-in int function on the value and says base equal zero, meaning get the base from the string itself.
>
> **[0:59](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=59)** Since our data has zero X at the beginning, it is going to use base 16.
>
> **[1:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=66)** And if you run it now, we see now that the color is an integer.
>
> **[1:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=69)** Now let's fix the visibility, which would be a boolean.
>
> **[1:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=73)** So created the dictionary that the string yes is true and the string no is false.
>
> **[1:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=79)** And now I can do DF visible equal and I'm using the map method of the series to convert the values to boolean.
>
> **[1:27](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=87)** And we run it, and now we get the right types.
>
> **[1:31](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=91)** Finally, we can look at the resulting data frame.
>
> **[1:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=95)** Let's click on run.
>
> **[1:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=96)** And we see that the value is X and Y.
>
> **[1:38](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=98)** Color is shown as a decimal value, while in the CSV, it's in hexa decimal.
>
> **[1:42](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=102)** So, it looks a bit different.
>
> **[1:44](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/fixing-types?u=76281980&t=104)** And the visibility is a boolean of true enforce.

> [!info]- Semantic Content
>
> **Code Keywords:** let (5), function (2), finally, (1)
> **Env Vars:** csv (3)
> **Definitions:** is an  (1), is a  (1)
> **UI Navigation:** click on (1)
> **Analogies:** such as (1)
> **Speakers:** - such (1)

#### Joining and splitting data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=0)** - In some cases, the raw data will be in a format that is not suitable for us.
>
> **[0:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=5)** We will need to either join or split and maybe do both, in order to make the data usable for us.
>
> **[0:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=13)** Let's say that you're a freelancer, and you're writing the time that you work for each client.
>
> **[0:17](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=17)** You would like to know how much time you worked this month.
>
> **[0:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=21)** Let's have a look.
>
> **[0:22](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=22)** So, the CSV has the day, the time, and the time has a start and an end, in the same column, and the client name.
>
> **[0:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=32)** Note also, that the CSV file name, 2021-06, contains the date.
>
> **[0:39](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=39)** Let's make it usable.
>
> **[0:40](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=40)** So we start by importing pandas and loading the CSV file.
>
> **[0:46](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=46)** And we have day, we have time, which is a string, and we have the client.
>
> **[0:52](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=52)** I'm going to add a column with a date, which is taken from the CSV file.
>
> **[0:56](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=56)** So I'm taking the CSV file, and then I'm trimming the .csv at the end, and adding it to the date column.
>
> **[1:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=65)** And now we have another date column here, with the date.
>
> **[1:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=69)** Next, I'm going to set the times.
>
> **[1:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=73)** So I'm going to split the time column, into a start and an end column by the dash.
>
> **[1:18](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=78)** And I'm going to do it with the str.split and say, expand equal true.
>
> **[1:22](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=82)** I'm going to get a new data frame with two columns, which I'm going to call start and end.
>
> **[1:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=88)** Once I have this data frame with the start time and the end time, I'm going to use concat, to join it to the original data frame, and get a data frame with all the columns.
>
> **[1:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=97)** The axis equal one meaning, I want to do it horizontally.
>
> **[1:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=101)** And now I have the day, the client, the date, the start and the end.
>
> **[1:46](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=106)** Now for every row, I'm going to join the date and the start, and the date and the end, to generate a value that pandas can pass as a time.
>
> **[1:54](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=114)** So, I'm going to use pd.to_datetime, which passes a string, and then I'm taking the date string, doing cat, concatenating with the start and adding a separator called T.
>
> **[2:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=126)** So I'm going to have 2021-06, T, 09:00.
>
> **[2:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=134)** And when I'm going to run this one, now I have a data frame, where the start and end, are actually timestamps.
>
> **[2:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=141)** Finally, I can run my calculation.
>
> **[2:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=143)** I can do end minus start, and calculate the sum.
>
> **[2:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/joining-and-splitting-data?u=76281980&t=148)** And I see that on that month, I worked 23 hours.

> [!info]- Semantic Content
>
> **Code Keywords:** let (3), pass (1), finally, (1)
> **Env Vars:** csv (5)
> **CLI Commands:** make (2), cat (1)
> **Code Identifiers:** to_datetime (1)
> **Ports:** :00 (1)
> **Definitions:** is a  (1)
> **Speakers:** - in (1)

#### Deleting bad data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=0)** - One of the easiest ways to deal with bad rows is to delete them.
>
> **[0:05](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=5)** Say we have some rides data and we would like to ignore or delete the rows that are not valid.
>
> **[0:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=12)** So here is our data.
>
> **[0:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=13)** We have the name, the plate, and the distance, and we would like to ignore rows that either the distance is less than zero or that we're missing the name.
>
> **[0:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=24)** So here is our code.
>
> **[0:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=26)** First, let's load the csv.
>
> **[0:29](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=29)** And we can see that here the distance is lower than zero, and here we do not have a name.
>
> **[0:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=37)** So I'm going to create a mask using the eval method of the data frame, which is either the name is null or the distance is smaller or equal to zero.
>
> **[0:48](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=48)** If I'm going to run it, I'm going to get a true or false per roll, and I'm seeing that row three and four are bad ones.
>
> **[0:57](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=57)** Now I'm going to say the data frame is the data frame and I'm going to negate the mask using the still design, meaning I want all the rows that are not considered bad.
>
> **[1:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=68)** When I'm running this, now I'm going to get the data frame with only valid rows.
>
> **[1:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=73)** Note that the index has some gaps in it right now.
>
> **[1:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=76)** We're jumping from two to five.
>
> **[1:18](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/deleting-bad-data?u=76281980&t=78)** You can use the reset index if you want to get a new index.

> [!info]- Semantic Content
>
> **Code Keywords:** delete (2), let (1), this, (1)
> **Warnings:** note that (1)
> **Speakers:** - one (1)

#### Filling missing values
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=0)** - [Instructor] In some cases you would like to fill out missing values by some heuristic.
>
> **[0:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=6)** Let's say we have some shopping information.
>
> **[0:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=9)** We have the date, the name of the item being bought, the amount and the price.
>
> **[0:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=16)** And you can see that in some cases we are missing the amount, in some the date, and in some the name.
>
> **[0:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=23)** First, let's load the data frame and have a look at it.
>
> **[0:27](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=27)** And we see that we have a data frame.
>
> **[0:29](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=29)** Here we are missing the time in the name column.
>
> **[0:32](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=32)** We have a missing name here on the last one.
>
> **[0:34](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=34)** In the amount, row two, we have a missing amount in the price.
>
> **[0:39](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=39)** We have a missing price.
>
> **[0:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=41)** Let's start with the amount.
>
> **[0:42](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=42)** We're going to fill one where the amount is missing.
>
> **[0:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=45)** So, we're are going to use Panda's fill N A method.
>
> **[0:48](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=48)** Which has a lot of options.
>
> **[0:51](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=51)** First, we fill it with a fixed value Saying in place, equal true meaning we want to change the current data frame, not generate a new one.
>
> **[1:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=60)** And if you run this one, and now we can see that the amount line three is one.
>
> **[1:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=66)** Next we are going to fill out the name.
>
> **[1:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=69)** And the heuristic we're going to use is we're going to pick the most common name.
>
> **[1:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=72)** So, we're taking most common as D F name, mode, and then pick the first one.
>
> **[1:18](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=78)** And now again, we're going to use fill N A with the most common name in place one.
>
> **[1:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=83)** And let's run the cycle.
>
> **[1:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=86)** And we can see that the last row we get potato now.
>
> **[1:29](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=89)** Next we're going to handle the dates.
>
> **[1:31](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=91)** For time series, you can use the F fill or B fill method.
>
> **[1:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=95)** F fill stands for forward fill, and it means that we are going to take the value from the row before and place it there.
>
> **[1:42](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=102)** Which is great for time series data.
>
> **[1:44](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=104)** So, let's run the cell.
>
> **[1:46](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=106)** And now we see in row four we have the same date as row three.
>
> **[1:52](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=112)** The price is going to get tricky.
>
> **[1:54](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=114)** What we're going to do is we're going to find the average price per item and then fill it.
>
> **[2:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=120)** So, first we're going to do a group buy on the name, get the price column, doing a transform using the mean from Numpy.
>
> **[2:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=130)** And if you look at the prices, let's run it.
>
> **[2:13](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=133)** We see now that we get price per row.
>
> **[2:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=136)** And if you look, for example, at the last two lines, which are potato, they have the same amount, which is the mean price per potatoes.
>
> **[2:27](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=147)** And now we can tell the price to fill N A, this time from the prices.
>
> **[2:31](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=151)** Meaning if there's no value it is going to use the value from prices.
>
> **[2:35](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=155)** Otherwise, it's going to leave the value that is in the data frame in place through again and run the cell.
>
> **[2:43](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/filling-missing-values?u=76281980&t=163)** And now we don't have any more missing values in our data frame.

> [!info]- Semantic Content
>
> **Code Keywords:** let (6)
> **Definitions:** stands for (1), means that (1)
> **CLI Commands:** find (1)
> **Analogies:** for example (1)
> **Speakers:** - [instructor] (1)

#### Reshaping data
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=0)** - [Instructor] Sometimes, the data will be in the wrong shape, and you will need to reshape it to the right shape in order to work with it effectively.
>
> **[0:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=8)** Say we have some metrics data.
>
> **[0:11](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=11)** In the metrics data, we have for every row both the CPU and the memory.
>
> **[0:16](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=16)** This is known as a wide format.
>
> **[0:18](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=18)** We would like to convert it to a long or narrow format with a single observation per row, what is called also, tidy data.
>
> **[0:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=28)** To do that, we are going to use the pandas melt function, which takes the wide format and converting it to a narrow one.
>
> **[0:37](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=37)** So, here's the metrics.
>
> **[0:39](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=39)** Let's load them into a data frame.
>
> **[0:42](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=42)** And now, we're going to use pandas melt.
>
> **[0:44](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=44)** We say, use it on the data frame.
>
> **[0:46](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=46)** Take the values from the CPU and the memory, the identity variables are the time, and call the new variable metric.
>
> **[0:57](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=57)** Now we have a data frame in a narrow format.
>
> **[0:59](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=59)** We have the time, we have the metric name, and then we have the value.
>
> **[1:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=63)** A single observation per row.
>
> **[1:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/reshaping-data?u=76281980&t=66)** Pandas also have a pivot table function, that can also transform and reshape your data in various ways.

> [!info]- Semantic Content
>
> **Code Keywords:** function (2), let (1)
> **Env Vars:** cpu (2)
> **Definitions:** known as (1), is called (1)
> **Speakers:** - [instructor] (1)

#### Challenge: Workshop earnings
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980&t=0)** - [Instructor] Let's say I'm using Excel to track earnings in some workshops.
>
> **[0:09](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980&t=9)** This is how the Excel looks like.
>
> **[0:10](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980&t=10)** We have the year, then the month, and for athe month, I have the start day, the end day, the name of the course, and the earnings.
>
> **[0:18](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980&t=18)** When I export this Excel to a CSV, this is how it looks like.
>
> **[0:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980&t=21)** I have a year, month, start, end, name, and earnings, and then a lot of missing values, but also that the earnings are a string.
>
> **[0:31](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980&t=31)** What I'd like you to do is fix the data frame.
>
> **[0:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980&t=33)** At the end, each row should have the following columns: a start and an end, which are timestamps in pandas, a name which is a string, a topic which is a string, either Python or Go.
>
> **[0:47](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980&t=47)** And you can get that from the course name.
>
> **[0:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980&t=50)** If there's a Go, it's a Go course.
>
> **[0:51](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980&t=51)** if there's a Python, it's a Python course.
>
> **[0:54](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/challenge-workshop-earnings?u=76281980&t=54)** And finally, the earnings which should be a floating point number.

> [!info]- Semantic Content
>
> **CLI Commands:** python (3)
> **Code Keywords:** let (1), finally, (1)
> **Definitions:** is a  (2)
> **Env Vars:** csv (1)
> **Speakers:** - [instructor] (1)
> **Non-Speech:** (upbeat music) (1)

#### Solution: Workshop earnings
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980)

> [!transcript]- Transcript
>
> **[0:06](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=6)** - [Instructor] Let's have a look at my solution.
>
> **[0:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=8)** First, we're going to load the data frame, surround the cell.
>
> **[0:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=12)** What I'm going to do is I'm going to fill the year and the month with fill an A with forward filling and do it in place.
>
> **[0:22](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=22)** So once I run the cell now the year and the month are filled.
>
> **[0:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=28)** Next I'm going to drop the rows that had only the year or only the month.
>
> **[0:33](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=33)** In the CSV file, these row are going to have nan in the start and the name and the earnings.
>
> **[0:39](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=39)** I'm going to pick the earnings.
>
> **[0:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=41)** I'm going to say it's the data frame when the earning is not now.
>
> **[0:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=45)** And I'm going to copy it, create a new data frame.
>
> **[0:50](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=50)** Next, I'm going to fix the dates.
>
> **[0:51](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=51)** So I'm going to say as date, which gets a row and column.
>
> **[0:56](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=56)** And I'm going to say the year is from the row year column.
>
> **[1:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=60)** The month is from the month column and the day is from the column that is being passed as a parameter to the function.
>
> **[1:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=68)** Now I'm going to create a timestamp using an F stringing.
>
> **[1:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=72)** So the month, the day, the year and then I'm using the two day time from Pandas with this generated string and telling it what is the right format.
>
> **[1:21](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=81)** You can check the SGF time documentation for all these percent, B percent D percent Y, and other ones.
>
> **[1:28](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=88)** And now I'm going to create two new columns start and end by applying this function access equal one meaning role wise and passing the argument which is what column should we look for the day.
>
> **[1:41](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=101)** And once we run this one, we have data frame.
>
> **[1:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=105)** And you can see at the end we have the start and end as data.
>
> **[1:49](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=109)** Next, let's extract the topic.
>
> **[1:51](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=111)** So I'm going to look at the name column convert it to lowercase because I have go Python but I have also go in lowercase.
>
> **[1:59](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=119)** So if go is in the name returning Go.
>
> **[2:01](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=121)** Otherwise it's Python.
>
> **[2:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=123)** And we do DF name, we do SDL to lower to get the lowercase.
>
> **[2:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=128)** And then we're going to apply the topic.
>
> **[2:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=132)** And now we have another column called Topic which has Python.
>
> **[2:19](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=139)** Now we're going to take care of the earnings which are strings because of these dollar sign graphics.
>
> **[2:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=143)** So I'm going to say Pandas to numeric.
>
> **[2:26](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=146)** I'm going to take the earning columns as a string and I'm going to replace the dollar sign and the comma with an empty string basically removing them from the string.
>
> **[2:36](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=156)** And I'm going to say that I want it as a flow 64 type.
>
> **[2:40](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=160)** And now at the end of the data frame we have an earnings column.
>
> **[2:45](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=165)** Finally, I'm going to generate the data frame that I want.
>
> **[2:49](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=169)** So I'm going to take only the columns that interest me.
>
> **[2:51](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=171)** So these are the start, the end, the name, the topic and the earnings.
>
> **[2:55](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=175)** And to help my O C D I'm converting the name to a lower case.
>
> **[3:01](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=181)** Again, replacing it in the data frame itself.
>
> **[3:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=183)** And we can run the cell.
>
> **[3:04](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=184)** And now we have the data frame as we want it.
>
> **[3:07](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/solution-workshop-earnings?u=76281980&t=187)** The start, the end, the name, the topic, and the earnings.

> [!info]- Semantic Content
>
> **Code Keywords:** let (2), function (2), type. (1), finally, (1), case. (1)
> **CLI Commands:** python (3)
> **Env Vars:** csv (1), sgf (1), sdl (1)
> **Speakers:** - [instructor] (1)


### 7. Conclusion

#### Next steps
> [LinkedIn Learning](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/next-steps?u=76281980)

> [!transcript]- Transcript
>
> **[0:00](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/next-steps?u=76281980&t=0)** - [Narrator] We've covered a lot of ground in this course.
>
> **[0:03](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/next-steps?u=76281980&t=3)** Next, you should try to implement what you learned in your own project.
>
> **[0:08](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/next-steps?u=76281980&t=8)** Grab some data, and start cleaning it up.
>
> **[0:12](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/next-steps?u=76281980&t=12)** If you don't have data, go and search for it.
>
> **[0:14](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/next-steps?u=76281980&t=14)** There's a lot of free data out there.
>
> **[0:17](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/next-steps?u=76281980&t=17)** For example, Kaggle is a great place to find real world data.
>
> **[0:23](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/next-steps?u=76281980&t=23)** And feel free to reach out.
>
> **[0:24](https://www.linkedin.com/learning/data-cleaning-in-python-essential-training-17061364/next-steps?u=76281980&t=24)** I'd love to hear your war stories about messy data, and how you managed to tackle it.

> [!info]- Semantic Content
>
> **CLI Commands:** find (1)
> **Definitions:** is a  (1)
> **Analogies:** for example (1)
> **Speakers:** - [narrator] (1)


## Instructor

- [[Miki Tebeka]]

## Resources

- [GitHub Repository](https://github.com/LinkedInLearning/data-cleaning-in-python-essential-training-3086536/codespaces)

## Skills Covered

- Python (Programming Language)
- Data Cleaning

## Path Context

### In [[Introduction to Fundamental Skills for Data Work- Data Processing]]
← [[Python for Data Science and Machine Learning Essential Training Part 2]] | **4 of 7** | [[Apache Spark Essential Training- Big Data Engineering]] →

### In [[Become a Data Analyst]]
← [[Complete Guide To R Wrangling Visualizing And Modeling Data]] | **12 of 12**

## Appears In

- [[Introduction to Fundamental Skills for Data Work- Data Processing]]
- [[Become a Data Analyst]]

## Related Courses

_Courses sharing skills:_

- [[Data Cleaning and Manipulating with Python in Excel]] — Python (Programming Language), Data Cleaning
- [[Learning ArcGIS Python Scripting]] — Python (Programming Language)
- [[QGIS and Python for AEC]] — Python (Programming Language)
- [[Python Data Structures- Trees]] — Python (Programming Language)
- [[Using SQL with Python]] — Python (Programming Language)

---

[↑ Back to top](#)